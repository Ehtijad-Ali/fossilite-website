import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "agent-memory-and-context",
  seoTitle: "Agent Memory and Context: Managing State That Grows",
  metaDescription:
    "Why agents degrade over long runs and what to do about it: context windows, summarisation, retrieval-backed memory and the cost curve nobody plans for.",
  title: "Agent Memory and Context Management",
  keywords: [
    "agent memory",
    "llm context management",
    "conversation summarisation",
    "agent context window",
    "long running agent",
    "context compaction",
  ],
  category: "artificial-intelligence",
  level: "Advanced",
  updated: "2026-08-05",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "Agents don't fail suddenly. They degrade. The first few steps are sharp, then somewhere around step twelve the thing starts forgetting constraints it was given at the start, repeating work it already did, and answering a slightly different question than the one you asked. It looks like the model getting worse. It isn't. It's the context filling up.",
    "This is the failure mode that most distinguishes a demo from a production agent, because demos are short. Every architecture accumulates: a loop appends messages, a crew accumulates task outputs, a group chat re-sends everything each turn. Growth is the default and nobody plans for it.",
    "This guide covers what actually happens as context grows, the four mechanisms for controlling it, and how to tell which one your system needs. It assumes you've built an agent and watched one of these runs go sideways.",
  ],

  whyItMatters: [
    "Cost is the visible half. A conversation that grows linearly costs quadratically to run, because every turn re-sends everything before it. Teams model agent cost as steps × price-per-call and are then surprised by a bill several times their estimate.",
    "Quality is the half that matters more. As the context grows, the instructions you gave at step zero migrate toward the middle: measurably the worst-attended region. An agent that ignores its own system prompt at step twenty isn't disobedient; the prompt is now buried.",
    "And memory is what separates a tool from an assistant. A system that forgets everything between sessions can't build on prior work, learn a user's preferences, or resume something interrupted. Getting persistence right is what makes an agent worth returning to.",
  ],

  coreConcepts: [
    {
      term: "The model has no memory; the system does",
      explain:
        "Parameters are frozen. Anything an agent 'remembers' is state your code stored and re-supplied in the prompt. There is no hidden continuity.",
      detail:
        "Which means every memory design decision is yours: what to keep, what to summarise, what to discard, and what to fetch on demand.",
    },
    {
      term: "Context growth is quadratic in cost",
      explain:
        "Turn one sends one message. Turn twenty sends nineteen plus the new one. Total tokens across a run grow with the square of the turn count, not linearly.",
      detail:
        "This is why a twenty-step agent costs far more than twice a ten-step one, and why capping steps protects the budget more than optimising any single call.",
    },
    {
      term: "Position determines attention",
      explain:
        "Models attend most reliably to the beginning and end of their context and least reliably to the middle. As a conversation grows, early instructions slide into that trough.",
      detail:
        "The practical consequence: re-state the goal and the binding constraints at the end of each prompt rather than trusting a system message issued once.",
    },
    {
      term: "Summarise completed work, keep recent work verbatim",
      explain:
        "The standard pattern. Older turns get compressed into a summary; the last few stay in full detail because that's where the current task lives.",
      detail:
        "Summarise on a threshold (message count or token count), rather than every turn. Compressing constantly costs more than it saves and loses detail you still needed.",
    },
    {
      term: "Working memory versus long-term memory",
      explain:
        "Working memory is the current context: this task, this conversation. Long-term memory is durable storage across sessions: preferences, prior decisions, accumulated facts.",
      detail:
        "They need different mechanisms. Working memory wants summarisation; long-term memory wants retrieval, so you fetch the relevant three facts rather than carrying all of them.",
    },
    {
      term: "Retrieval beats accumulation for facts",
      explain:
        "Carrying every fact an agent has ever learned in its context is expensive and dilutes attention. Storing them and retrieving the relevant few per turn scales indefinitely.",
      detail:
        "This is RAG applied to the agent's own history. The mechanism is identical (embed, store, retrieve on relevance), and it's the only approach that doesn't degrade with volume.",
    },
    {
      term: "Tool results are the biggest offender",
      explain:
        "One verbose tool return can consume more context than twenty turns of conversation, and in a multi-agent system it lands in every participant's context.",
      detail:
        "Shaping tool returns is usually a larger win than any summarisation strategy, and it's cheaper to implement.",
    },
    {
      term: "Not everything should persist",
      explain:
        "A failed approach, a corrected mistake, an abandoned branch. Carrying these forward wastes tokens and can actively mislead the model into revisiting them.",
      detail:
        "Design what gets forgotten as deliberately as what gets kept. Pruning is a feature.",
    },
  ],

  codeExamples: [
    {
      title: "Threshold-based summarisation",
      language: "python",
      intro:
        "The workhorse. Compress older turns once the conversation crosses a threshold, keep recent ones verbatim, and preserve the original goal explicitly.",
      code: `import anthropic

client = anthropic.Anthropic()

KEEP_RECENT = 6          # turns kept verbatim, where the current task lives
SUMMARISE_AFTER = 20     # threshold, not every turn: compressing constantly costs more

def summarise_history(messages: list[dict], goal: str) -> list[dict]:
    """Compress older turns; keep the tail in full."""
    if len(messages) <= SUMMARISE_AFTER:
        return messages

    older, recent = messages[:-KEEP_RECENT], messages[-KEEP_RECENT:]

    transcript = "\\n\\n".join(
        f"{m['role']}: {m['content'] if isinstance(m['content'], str) else '[structured]'}"
        for m in older
    )

    summary = client.messages.create(
        model="claude-opus-5",
        max_tokens=2000,
        system=(
            "Summarise this agent transcript for a colleague taking over."
            "Preserve: decisions made and why, facts established, approaches"
            "already tried and their outcomes, and anything still outstanding."
            "Omit: exploratory reasoning, superseded drafts, and pleasantries."
        ),
        messages=[{"role": "user", "content": transcript}],
    ).content[0].text

    # The goal is restated as its own turn so it survives compaction. Without
    # this, the original instruction is the first thing summarisation loses.
    return [
        {"role": "user", "content": f"ORIGINAL GOAL: {goal}"},
        {"role": "assistant", "content": f"Context from earlier work:\\n\\n{summary}"},
        *recent,
    ]`,
      note:
        "Note what the summarisation prompt asks to *omit*. Carrying forward abandoned approaches doesn't just cost tokens. It invites the agent to revisit them.",
    },
    {
      title: "Retrieval-backed long-term memory",
      language: "python",
      intro:
        "For facts that should persist across sessions. Store them, retrieve the relevant few per turn, and the store can grow indefinitely without the context doing the same.",
      code: `class AgentMemory:
    """Durable facts, fetched on relevance rather than carried in context."""

    def __init__(self, store, embedder):
        self.store = store
        self.embedder = embedder

    def remember(self, fact: str, user_id: str, kind: str = "fact") -> None:
        self.store.upsert({
            "text": fact,
            "embedding": self.embedder.embed(fact),
            "user_id": user_id,      # scoping is not optional, see the note
            "kind": kind,
            "created_at": now(),
        })

    def recall(self, query: str, user_id: str, k: int = 3) -> list[str]:
        hits = self.store.search(
            self.embedder.embed(query),
            filter={"user_id": user_id},   # applied BEFORE similarity, always
            limit=k,
        )
        return [h["text"] for h in hits]

def build_prompt(user_input: str, user_id: str, memory: AgentMemory) -> list[dict]:
    recalled = memory.recall(user_input, user_id)

    # Only what's relevant to THIS turn enters the context. The store may hold
    # ten thousand facts; the prompt carries three.
    context = ""
    if recalled:
        context = "Relevant context from previous sessions:\\n" + "\\n".join(
            f"- {fact}" for fact in recalled
        ) + "\\n\\n"

    return [{"role": "user", "content": f"{context}{user_input}"}]`,
      note:
        "The `user_id` filter runs before the similarity search, not after. Filtering afterwards leaks information through result counts and is the standard way multi-tenant memory becomes a data-protection incident.",
    },
    {
      title: "Measuring the cost curve",
      language: "python",
      intro:
        "Before optimising anything, see the shape. This is the measurement that tells you whether you have a summarisation problem or a tool-output problem.",
      code: `def profile_run(messages_over_time: list[list[dict]]) -> None:
    """Log token growth per turn so the curve is visible, not assumed."""
    cumulative = 0
    for turn, messages in enumerate(messages_over_time, start=1):
        count = client.messages.count_tokens(
            model="claude-opus-5", messages=messages
        ).input_tokens
        cumulative += count

        # Per-turn input is what grows. Cumulative is what you pay.
        print(f"turn {turn:2d} input {count:>7,} cumulative {cumulative:>8,}")

        if turn > 1 and count > 2 * first_turn_tokens:
            print(f"           ^ context has doubled by turn {turn}")

def largest_contributors(messages: list[dict], top: int = 5) -> None:
    """Find what is actually filling the context. Usually a tool return."""
    sized = [
        (len(str(m.get("content", ""))), m.get("role"), str(m.get("content"))[:80])
        for m in messages
    ]
    for size, role, preview in sorted(sized, reverse=True)[:top]:
        print(f"{size:>7,} chars  [{role}]  {preview}...")`,
      note:
        "Run `largest_contributors` before writing any summarisation code. In most agents the top entry is a single verbose tool return, and shaping that is a far cheaper fix than a compaction pipeline.",
    },
  ],

  learningPath: [
    {
      title: "Measure the curve before optimising",
      body: "Log input tokens per turn across a twenty-step run and plot it. Then rank what's occupying the context. Fix the biggest contributor first. It's usually not what you assumed.",
      effort: "2–3 hours",
      outcome: "A curve and a ranked culprit list, rather than a hunch.",
    },
    {
      title: "Shape your tool returns",
      body: "Take the largest tool output and cut it to the fields the task actually needs, flagging truncation. Re-measure. This is frequently the whole problem.",
      effort: "2–4 hours",
      outcome: "A measurably flatter curve for very little work.",
    },
    {
      title: "Add threshold summarisation",
      body: "Implement compaction on a message or token threshold, keeping recent turns verbatim. Restate the goal as its own turn so it survives the compression.",
      effort: "3–5 hours",
      outcome: "A run that can go long without the curve climbing.",
    },
    {
      title: "Verify nothing important was lost",
      body: "Run tasks that depend on information from early turns and confirm the agent still has it after compaction. This is where naive summarisation fails silently.",
      effort: "2–3 hours",
      outcome: "Confidence that compaction preserves what matters.",
    },
    {
      title: "Re-state constraints at the end",
      body: "Move your binding constraints from the system prompt to a restatement at the end of each prompt. Measure instruction-following at turn twenty before and after.",
      effort: "2 hours",
      outcome: "An agent that still obeys its constraints late in a run.",
    },
    {
      title: "Add retrieval for cross-session facts",
      body: "Store durable facts with user scoping and retrieve the relevant few per turn. Confirm the store can grow without the prompt growing.",
      effort: "6–10 hours",
      outcome: "Memory that scales past what a context window could hold.",
    },
    {
      title: "Decide what gets forgotten",
      body: "Write down what should never persist: failed approaches, corrected errors, abandoned branches. Implement the pruning explicitly.",
      effort: "2–3 hours",
      outcome: "A memory policy rather than accumulation by default.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Where in the context a model actually looks.",
      walkthrough:
        "Liu and colleagues systematically varied the position of relevant information within a model's context and measured retrieval accuracy on multi-document question answering. If attention were uniform, position wouldn't matter.",
      result:
        "Accuracy was highest when the needed information sat at the beginning or end and degraded when it sat in the middle: a U-shaped curve that held even for models built for long contexts, with overall performance falling as context grew. This is the mechanism behind agents that stop following their system prompt around step fifteen: the prompt hasn't changed, its position has.",
      source: {
        label: "Liu et al. (2023). Lost in the Middle: How Language Models Use Long Contexts, arXiv:2307.03172",
        url: "https://arxiv.org/abs/2307.03172",
      },
    },
    {
      kind: "documented",
      scenario: "Retrieval as an alternative to carrying everything.",
      walkthrough:
        "Anthropic benchmarked retrieval quality by measuring how often the correct passage failed to appear in the top twenty results, then added components one at a time: context attached to each chunk, keyword search alongside semantic, then re-ranking.",
      result:
        "Failure rate fell from 5.7% to 3.7% with contextual embeddings, to 2.9% adding keyword search, and to 1.9% with re-ranking. Applied to agent memory, this is the argument for retrieval over accumulation: a well-built store surfaces the right three facts reliably, and unlike a growing context it doesn't get worse as it fills.",
      source: {
        label: "Anthropic (2024). Introducing Contextual Retrieval",
        url: "https://www.anthropic.com/news/contextual-retrieval",
      },
    },
    {
      kind: "illustration",
      scenario: "The one tool return that ate the run.",
      walkthrough:
        "A recognisable profile. An agent's context grows alarmingly and the team starts designing a summarisation pipeline. Ranking the contents first shows a single tool (an API wrapper returning its upstream response verbatim) accounting for most of the context after four calls. Nested JSON, several hundred fields, almost none of it relevant to any question asked.",
      result:
        "Shaping that one return to the fields the task needs flattened the curve without any compaction code. Measure what's actually filling the context before building machinery to compress it; the answer is usually one tool rather than the conversation.",
    },
  ],

  mistakes: [
    {
      mistake: "Optimising before measuring",
      why: "Teams build summarisation pipelines for a problem that turns out to be one verbose tool return. The complex fix ships and the simple one was never found.",
      fix: "Rank what's occupying the context first. Fix the largest contributor, then re-measure before building anything else.",
    },
    {
      mistake: "Summarising every turn",
      why: "Compression is a model call. Doing it constantly costs more than the tokens it saves and progressively loses detail the current task still needs.",
      fix: "Trigger on a threshold (message count or token count), and keep the recent tail verbatim.",
    },
    {
      mistake: "Letting the goal be summarised away",
      why: "The original instruction is old, so naive compaction compresses it first. The agent then continues with a summary of what it was doing rather than the instruction itself.",
      fix: "Restate the goal as its own turn after compaction, and repeat the binding constraints at the end of each prompt.",
    },
    {
      mistake: "Trusting the system prompt to hold at step twenty",
      why: "It's positionally the furthest thing from the model's attention by then. Instructions issued once, early, are the ones that get ignored late.",
      fix: "Re-state constraints at the end of the prompt where attention is reliable. Repetition is cheap.",
    },
    {
      mistake: "Carrying every learned fact in context",
      why: "It grows without bound, costs on every turn, and dilutes attention across material irrelevant to the current question.",
      fix: "Store facts and retrieve the relevant few per turn. The store scales; the prompt doesn't have to.",
    },
    {
      mistake: "Unscoped memory in a multi-tenant system",
      why: "If retrieval isn't filtered by user before the similarity search, one user's stored facts can surface in another's session.",
      fix: "Filter by tenant before ranking, from session context rather than anything the model supplies.",
    },
    {
      mistake: "Persisting failures and abandoned branches",
      why: "Carrying an approach that didn't work wastes tokens and actively invites the agent to try it again.",
      fix: "Decide explicitly what gets discarded. Pruning is a design decision, not an oversight.",
    },
  ],

  bestPractices: [
    "Measure token growth per turn and rank context contributors before optimising anything.",
    "Shape tool returns to the fields the task needs, and flag truncation explicitly.",
    "Summarise on a threshold, not every turn, and keep the recent tail verbatim.",
    "Restate the original goal as its own turn after any compaction.",
    "Put binding constraints at the end of the prompt, not only in the system message.",
    "Use retrieval rather than accumulation for facts that persist across sessions.",
    "Scope memory retrieval by tenant before the similarity search.",
    "Decide explicitly what should be forgotten, and implement it.",
    "Cap steps. It bounds the quadratic cost curve more effectively than any compression.",
    "Test that compaction preserved what later turns actually depend on.",
  ],

  proTips: [
    "Rank context contributors by character count before writing a single line of summarisation. In most agents one tool return dominates, and that's a twenty-minute fix rather than a pipeline.",
    "Write your summarisation prompt to specify what to omit, not just what to keep. 'Drop superseded drafts and abandoned approaches' prevents the agent revisiting dead ends.",
    "Test instruction-following specifically at high turn counts. An agent that obeys at step three and ignores at step twenty has a context problem, not a prompting problem.",
    "Store memories with a timestamp and let recency influence retrieval. A preference stated last week should usually outrank one from six months ago.",
    "When adding retrieval-backed memory, test what happens with an empty store. Systems that assume recall always returns something fail oddly on a new user's first session.",
    "Keep the raw transcript even after compaction, somewhere outside the prompt. When an agent does something inexplicable, the summary is exactly where the explanation went missing.",
  ],

  businessApplications: [
    "Long-running assistants where users return across days and expect continuity of prior decisions.",
    "Cost control at volume: context management typically moves spend more than model choice does.",
    "Support systems that need account history without carrying every past ticket in every prompt.",
    "Compliance settings where what an automated system retained (and about whom) must be auditable and deletable.",
    "Multi-agent architectures, where context discipline compounds because every participant pays for shared history.",
    "Personalisation that improves over time without an ever-growing per-request cost.",
  ],

  exercises: [
    {
      title: "Profile the curve",
      brief:
        "Log input tokens per turn across a twenty-step run and plot it. Then rank context contributors by size.",
      success: "A curve, and the single largest contributor identified by name.",
      time: "2–3 hours",
    },
    {
      title: "Fix the biggest offender",
      brief:
        "Shape your largest tool return to the fields the task needs. Re-run the profile and compare curves.",
      success: "A measurably flatter curve without any compaction code.",
      time: "2–3 hours",
    },
    {
      title: "Break compaction on purpose",
      brief:
        "Summarise a conversation, then ask a question that depends on detail from an early turn. Find what the summary lost and adjust the prompt.",
      success: "A summarisation prompt that survives the questions you actually ask.",
      time: "2 hours",
    },
    {
      title: "Constraint survival test",
      brief:
        "Give an agent a constraint at step zero. Measure compliance at steps 3, 10 and 20. Then restate it at the end of each prompt and measure again.",
      success: "Compliance numbers at three depths, before and after.",
      time: "2–3 hours",
    },
  ],

  checklist: [
    "Token growth per turn has been measured, not estimated",
    "Context contributors are ranked and the largest is addressed",
    "Tool returns are shaped and flag truncation",
    "Summarisation triggers on a threshold, keeping the recent tail verbatim",
    "The original goal is restated after compaction",
    "Binding constraints appear at the end of the prompt",
    "Cross-session facts use retrieval rather than accumulation",
    "Memory retrieval is tenant-scoped before ranking",
    "What gets forgotten is a documented decision",
    "Step counts are capped",
    "Compaction has been tested against questions depending on early turns",
  ],

  faqs: [
    {
      q: "Why does my agent get worse over a long run?",
      a: "The context is filling up. Instructions given at the start migrate toward the middle, which is measurably the least-attended region, and the model has more irrelevant material to attend across. It's positional, not a model regression.",
    },
    {
      q: "Doesn't a large context window solve this?",
      a: "It raises the ceiling, not the quality curve. Accuracy still degrades with length and position, and cost still grows quadratically. A bigger window buys headroom, not a solution.",
    },
    {
      q: "When should I summarise?",
      a: "On a threshold (message or token count), rather than every turn. Compression is a model call, so doing it constantly costs more than it saves and erodes detail you still need.",
    },
    {
      q: "Summarisation or retrieval?",
      a: "Both, for different things. Summarisation handles the current conversation's working memory. Retrieval handles durable facts across sessions, and it's the only approach that doesn't degrade as the volume of remembered material grows.",
    },
    {
      q: "How do I stop compaction losing something important?",
      a: "Specify in the summarisation prompt what must be preserved (decisions and why, facts established, approaches already tried), and what to drop. Then test with questions that depend on early turns.",
    },
    {
      q: "What's the biggest single win?",
      a: "Usually shaping tool returns. One verbose upstream response can dominate an agent's context, and fixing it is far cheaper than any compaction pipeline. Measure before you build.",
    },
    {
      q: "Should agents remember everything?",
      a: "No. Failed approaches and corrected mistakes cost tokens and can lead the agent to revisit them. Decide what gets discarded as deliberately as what gets kept.",
    },
  ],

  tools: [
    { name: "count_tokens", what: "Measure context size accurately per turn. Never estimate with a non-Claude tokeniser.", cost: "Free", url: "https://docs.anthropic.com" },
    { name: "LangGraph checkpointers", what: "Durable state across sessions and restarts, with a natural place to insert a compaction node.", cost: "Free", url: "https://langchain-ai.github.io/langgraph/" },
    { name: "pgvector / Qdrant", what: "Vector stores for retrieval-backed long-term memory with metadata filtering.", cost: "Freemium" },
    { name: "LangSmith", what: "Tracing that shows per-turn token usage, where the curve becomes visible.", cost: "Freemium", url: "https://smith.langchain.com" },
  ],

  resources: [
    { title: "Lost in the Middle", kind: "Paper", note: "The positional-attention finding underlying most of this guide. Short and worth reading directly.", url: "https://arxiv.org/abs/2307.03172" },
    { title: "Anthropic: Contextual Retrieval", kind: "Docs", note: "Measured results for the retrieval techniques that make long-term memory work.", url: "https://www.anthropic.com/news/contextual-retrieval" },
    { title: "Building Effective Agents: Anthropic", kind: "Docs", note: "Context management in the wider agent design picture.", url: "https://www.anthropic.com/research/building-effective-agents" },
  ],

  internalLinks: [
    { slug: "rag-explained", anchor: "the retrieval mechanism this builds on", context: "In the retrieval concept" },
    { slug: "building-agents-with-langgraph", anchor: "where to put a compaction node", context: "In the learning path" },
    { slug: "designing-agent-tools", anchor: "shaping tool returns", context: "In the tool results concept" },
  ],

  relatedGuides: [
    "rag-explained",
    "building-agents-with-langgraph",
    "designing-agent-tools",
  ],

  conclusion: [
    "Before any of that, measure. Log tokens per turn and rank what's occupying the context. Most teams building compaction pipelines have a single verbose tool return they haven't looked at yet.",
  ],

  cta: {
    headline: "Context window filling up mid-task?",
    body:
      "What to keep and what to discard is the design decision that determines whether long-running agents work at all. We can help you make it.",
    label: "Talk through your build",
    href: "/contact",
  },
};

export default guide;
