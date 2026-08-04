import type { Guide } from "../types";

export const guide: Guide = {
  slug: "building-agents-with-autogen",
  seoTitle: "Building Agents with AutoGen: Conversational Multi-Agent AI",
  metaDescription:
    "How Microsoft AutoGen's async agent teams work — AssistantAgent, group chats, termination conditions — with runnable code and the gotchas that bite.",
  title: "Building Agents with AutoGen",
  keywords: [
    "autogen tutorial",
    "autogen agentchat python",
    "assistantagent example",
    "roundrobingroupchat",
    "microsoft autogen multi agent",
    "autogen termination condition",
  ],
  category: "artificial-intelligence",
  level: "Advanced",
  updated: "2026-08-04",
  author: "Fossilite Engineering",
  readingTime: 12,

  intro: [
    "AutoGen models multi-agent work as conversation. Agents talk to each other in a group chat, a policy decides who speaks next, and a termination condition decides when they stop. It's a genuinely different framing from CrewAI's org chart or LangGraph's state machine, and for problems that are actually dialogue-shaped — negotiation, critique, iterative refinement — it fits well.",
    "It's also the most demanding of the three to operate. The API is async throughout, the architecture is layered, and the framework was substantially redesigned at v0.4 — which means a large share of the tutorials you'll find describe an API that no longer exists. Budget time for that.",
    "This guide covers the current `autogen-agentchat` interface: how agents and teams are constructed, how termination actually works, and the specific gotchas — including one about sampling parameters that will bite anyone pairing AutoGen with a current Claude model.",
  ],

  whyItMatters: [
    "The conversational model captures something the alternatives don't. When the work genuinely is a back-and-forth — a critic pushing on a writer's draft until it holds up, two perspectives negotiating toward a plan — expressing that as a group chat is more natural than expressing it as a pipeline or a graph.",
    "AutoGen is also research-backed and Microsoft-maintained, which matters for enterprises with procurement constraints. If you need a multi-agent framework with institutional backing, it's on the shortlist by default.",
    "And the termination-condition design is genuinely good. Making 'when do we stop?' a first-class composable object, rather than an afterthought, is a better answer than most frameworks manage — and stopping is where multi-agent systems most reliably go wrong.",
  ],

  coreConcepts: [
    {
      term: "`autogen-agentchat` is the current API",
      explain:
        "The framework was redesigned at v0.4. The current high-level interface lives in `autogen_agentchat`, with model clients in `autogen_ext.models.*`. Install with `pip install \"autogen-agentchat\" \"autogen-ext[anthropic]\"`.",
      detail:
        "Pre-0.4 material uses `autogen.AssistantAgent` and `UserProxyAgent` with a `config_list`. Those patterns are widespread online and will not run against the current library.",
    },
    {
      term: "Everything is async",
      explain:
        "Agent and team methods are coroutines. You call them with `await` inside an async function, and run the whole thing with `asyncio.run()`.",
      detail:
        "This is a real constraint on where AutoGen fits. Dropping it into a synchronous codebase means either restructuring or bridging, and the bridge is a common source of subtle bugs.",
    },
    {
      term: "`AssistantAgent` is the working unit",
      explain:
        "An agent has a name, a model client, an optional system message, and optional tools. It's the participant in a conversation rather than a step in a pipeline.",
      detail:
        "The `name` is meaningful — other agents address each other by name, and selection policies use it. Names like `critic` and `writer` do more work than `agent_1`.",
    },
    {
      term: "Teams decide who speaks next",
      explain:
        "A team wraps several agents with a turn-taking policy. `RoundRobinGroupChat` cycles through them in order; selector-based teams let a model choose the next speaker.",
      detail:
        "Round-robin is predictable and should be your default. Model-selected speakers are more flexible and much harder to reason about or cost.",
    },
    {
      term: "Termination conditions are composable objects",
      explain:
        "`MaxMessageTermination` stops after N messages. `TextMentionTermination` stops when an agent says a keyword. You combine them with `|` so the run ends when any condition fires.",
      detail:
        "This is the framework's best design decision. Always combine a semantic condition with a hard message cap — a keyword-only condition will occasionally never fire.",
    },
    {
      term: "`run_stream` gives you the trace",
      explain:
        "`team.run()` returns the final result; `team.run_stream()` yields messages as they're produced. During development you want the stream, because a group chat's behaviour is invisible from the final answer.",
      detail:
        "`Console(team.run_stream(...))` is the quickest way to watch a conversation unfold, and the first thing to reach for when a team misbehaves.",
    },
    {
      term: "Conversation is the coordination mechanism",
      explain:
        "Agents share a message history rather than passing structured outputs. Each sees what the others said, which is why critique and refinement patterns work naturally here.",
      detail:
        "The cost is that every agent pays for the whole conversation on every turn. Group chats grow their context quickly, and cost grows with the square of the turns rather than linearly.",
    },
  ],

  codeExamples: [
    {
      title: "A minimal two-agent team",
      language: "python",
      intro:
        "A writer and a critic, alternating until the critic approves or the message cap fires. Note the async structure — it's not optional.",
      code: `import asyncio

from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.teams import RoundRobinGroupChat
from autogen_agentchat.conditions import MaxMessageTermination, TextMentionTermination
from autogen_agentchat.ui import Console
from autogen_ext.models.anthropic import AnthropicChatCompletionClient


async def main() -> None:
    # NOTE: this client accepts temperature/top_p/top_k, but current Claude
    # models reject them. Leave them unset — see the note below this block.
    model_client = AnthropicChatCompletionClient(
        model="claude-opus-5",
        max_tokens=16000,
    )

    writer = AssistantAgent(
        name="writer",
        model_client=model_client,
        system_message=(
            "You draft short product briefs. When the critic gives feedback, "
            "revise and present the full updated draft, not just the changes."
        ),
    )

    critic = AssistantAgent(
        name="critic",
        model_client=model_client,
        system_message=(
            "You review drafts for unsupported claims and vague language. "
            "Give specific, actionable feedback. When the draft has no "
            "unsupported claims left, reply with exactly: APPROVED"
        ),
    )

    # Combine a semantic stop with a hard cap. The keyword alone can fail
    # to fire; the cap alone stops mid-refinement. You want both.
    termination = TextMentionTermination("APPROVED") | MaxMessageTermination(10)

    team = RoundRobinGroupChat([writer, critic], termination_condition=termination)

    await Console(team.run_stream(task="Draft a brief for a new API product."))
    await model_client.close()


asyncio.run(main())`,
      note:
        "The sampling-parameter gotcha is real and easy to miss: `AnthropicChatCompletionClient` exposes `temperature`, `top_p` and `top_k`, but current Claude models reject them with a 400. Don't set them — and if you hit an unexplained 400, check whether a default is being sent.",
    },
    {
      title: "Giving an agent tools",
      language: "python",
      intro:
        "Tools are plain Python functions. AutoGen derives the schema from type hints and the docstring, so the docstring is model-facing text.",
      code: `async def search_docs(query: str) -> str:
    """Search internal product documentation.

    Call this when you need factual detail about a product's
    specification, pricing or availability. Do not guess these.

    Args:
        query: What to look for, in natural language.
    """
    hits = await docs_index.search(query, limit=5)
    if not hits:
        return f"No documentation matched '{query}'."
    return "\\n\\n".join(f"[{h['title']}]\\n{h['text']}" for h in hits)


researcher = AssistantAgent(
    name="researcher",
    model_client=model_client,
    tools=[search_docs],
    system_message=(
        "You find verifiable facts using search_docs. Never state a figure "
        "you have not retrieved. Write NOT FOUND rather than estimating."
    ),
    reflect_on_tool_use=True,   # summarise results rather than dumping them
)`,
      note:
        "`reflect_on_tool_use=True` makes the agent process the tool output into a response rather than returning it raw. In a group chat that matters twice over — raw output lands in every other agent's context too.",
    },
    {
      title: "Selector teams, and why round-robin first",
      language: "python",
      intro:
        "A selector team uses a model to choose the next speaker. It's more flexible and considerably harder to predict — reach for it only when a fixed order genuinely doesn't fit.",
      code: `from autogen_agentchat.teams import SelectorGroupChat

team = SelectorGroupChat(
    [researcher, writer, critic],
    model_client=model_client,      # this model chooses who speaks next
    termination_condition=(
        TextMentionTermination("APPROVED") | MaxMessageTermination(20)
    ),
    selector_prompt=(
        "Read the conversation and choose which participant should speak next.\\n"
        "{roles}\\n\\nConversation:\\n{history}\\n\\n"
        "Choose from {participants}. Pick the researcher when a factual claim "
        "needs checking, the writer when a draft needs producing or revising, "
        "and the critic when a draft is ready for review."
    ),
)

# The message cap matters more here: an unlucky selector can ping-pong
# between two agents indefinitely, and each turn carries the full history.
await Console(team.run_stream(task="Draft a brief for a new API product."))`,
      note:
        "Every turn in a group chat re-sends the whole conversation, so cost grows with the square of the turn count rather than linearly. A 20-message cap is not conservative — it's the thing standing between you and a surprising bill.",
    },
  ],

  learningPath: [
    {
      title: "Confirm you need multi-agent at all",
      body: "Solve the task with a single agent and tools first. Record cost, time and quality. AutoGen's overhead is higher than the alternatives, so the bar it has to clear is higher too.",
      effort: "2 hours",
      outcome: "A baseline that makes the framework decision evidence-based.",
    },
    {
      title: "Get the async structure right",
      body: "Run the two-agent example. If you're not fluent with asyncio, spend the time here rather than fighting it later — every AutoGen call is a coroutine and the failure modes are unfamiliar if you're new to it.",
      effort: "2–3 hours",
      outcome: "A working team, and comfort with the async surface.",
    },
    {
      title: "Learn termination properly",
      body: "Try a keyword-only condition and find an input where it never fires. Then combine it with a message cap. This is the failure that costs money, so induce it deliberately while it's cheap.",
      effort: "1–2 hours",
      outcome: "You've seen a run that wouldn't stop, and know how to prevent it.",
    },
    {
      title: "Watch the conversation with Console",
      body: "Run everything through `Console(team.run_stream(...))` while developing. A group chat's behaviour is genuinely invisible from the final result.",
      effort: "1 hour",
      outcome: "You can see who said what and why the team went where it did.",
    },
    {
      title: "Add tools with good docstrings",
      body: "Give one agent a tool. Test with a vague docstring and a specific one stating trigger conditions, and compare call accuracy over twenty inputs.",
      effort: "2 hours",
      outcome: "Evidence that the docstring is prompt content.",
    },
    {
      title: "Measure the context growth",
      body: "Log token usage per turn across a ten-message run. Watch it climb as each turn re-sends the history. This is the number that determines whether AutoGen is affordable for your task.",
      effort: "2 hours",
      outcome: "A cost curve rather than an estimate.",
    },
    {
      title: "Compare round-robin against selector",
      body: "Run the same team both ways on identical inputs. Compare cost, turn count and how predictable each trace is.",
      effort: "2–3 hours",
      outcome: "A reasoned choice rather than a default.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Why a critic agent needs its own source of truth.",
      walkthrough:
        "A lawyer filed a brief citing six fabricated cases and, when challenged, asked the model whether they were real. It confirmed them and added supporting detail.",
      result:
        "The court sanctioned the lawyers $5,000. The AutoGen-specific reading: a critic agent that only reasons over the writer's messages, with no tool and no external source, is the same pattern with more participants. Critique roles earn their cost only when they can check something the author couldn't.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "documented",
      scenario: "Why long group chats degrade.",
      walkthrough:
        "Liu and colleagues varied the position of relevant information within a model's context and measured retrieval accuracy. Performance was highest at the beginning and end and degraded in the middle, holding even for long-context models.",
      result:
        "A group chat re-sends the whole conversation on every turn, so the original task steadily migrates toward the middle — the worst-attended position. That's the mechanism behind teams that start well and drift by message fifteen, and the reason a message cap protects quality as well as cost.",
      source: {
        label: "Liu et al. (2023) — Lost in the Middle: How Language Models Use Long Contexts, arXiv:2307.03172",
        url: "https://arxiv.org/abs/2307.03172",
      },
    },
    {
      kind: "illustration",
      scenario: "The tutorial that imports a module that no longer exists.",
      walkthrough:
        "A shape you will hit within your first hour. You follow a well-regarded AutoGen tutorial and `from autogen import AssistantAgent` fails. The tutorial isn't wrong — it predates the v0.4 redesign, when the package split into `autogen-agentchat` and `autogen-ext` and the whole API became async.",
      result:
        "Check whether material uses `autogen_agentchat` imports and `await` before following it. If it shows a `config_list` and synchronous calls, it's pre-0.4. The official documentation is the reliable starting point for this framework more than for most.",
    },
  ],

  mistakes: [
    {
      mistake: "Following pre-0.4 tutorials",
      why: "The v0.4 redesign changed the package layout and made everything async. Older patterns — `autogen.AssistantAgent`, `config_list`, synchronous calls — simply won't run.",
      fix: "Use `autogen_agentchat` imports and check that any material you follow uses `await`. If it doesn't, it's out of date.",
    },
    {
      mistake: "Setting temperature or top_p with a current Claude model",
      why: "The Anthropic client exposes these parameters, but current Claude models reject them with a 400. It's an easy mistake because the client's own signature invites it.",
      fix: "Leave sampling parameters unset. If you get an unexplained 400, check whether a default is being sent on your behalf.",
    },
    {
      mistake: "Relying on a keyword-only termination condition",
      why: "If the agent never says the magic word — because it phrased approval differently, or the conversation drifted — the run doesn't stop.",
      fix: "Always compose a semantic condition with `MaxMessageTermination`. The cap is the safety net, not the primary mechanism.",
    },
    {
      mistake: "Underestimating context growth",
      why: "Every turn re-sends the full conversation, so token spend grows with the square of the turn count. A twenty-message run is far more than twice a ten-message one.",
      fix: "Cap messages, keep teams small, and measure tokens per turn during development rather than estimating.",
    },
    {
      mistake: "Reaching for a selector team by default",
      why: "Model-selected turn-taking adds a model call per turn and makes traces much harder to follow, often to solve an ordering problem round-robin handles fine.",
      fix: "Start with `RoundRobinGroupChat`. Move to a selector when you can point at a case where fixed order genuinely fails.",
    },
    {
      mistake: "Dumping raw tool output into the chat",
      why: "In a group chat, one agent's raw tool result lands in every other agent's context — multiplying the cost of a verbose return across the whole team.",
      fix: "Use `reflect_on_tool_use=True` and shape tool returns to what the task needs.",
    },
    {
      mistake: "Debugging from the final result",
      why: "A group chat's behaviour lives in the exchange. The final message tells you where it ended, not how it got there or why it went wrong.",
      fix: "Develop with `Console(team.run_stream(...))` so you can read the conversation as it happens.",
    },
  ],

  bestPractices: [
    "Use `autogen_agentchat` and `autogen_ext` imports; treat anything with `config_list` as legacy.",
    "Compose termination conditions — a semantic stop combined with a hard message cap, always.",
    "Start with `RoundRobinGroupChat` and justify any move to a selector team.",
    "Keep teams small. Every additional agent pays for the whole conversation on every turn.",
    "Give agents meaningful names — they're used in addressing and in selection prompts.",
    "Set `reflect_on_tool_use=True` so raw tool output doesn't flood the shared context.",
    "Develop with `Console(team.run_stream(...))`; use `run()` only once behaviour is settled.",
    "Leave sampling parameters unset when using current Claude models.",
    "Close model clients explicitly when the run finishes.",
    "Measure tokens per turn, not per run — the growth curve is the thing that surprises people.",
  ],

  proTips: [
    "Induce a non-terminating run on purpose, early, with a keyword-only condition. It's the failure that costs real money, and it's much better to meet it while you're watching.",
    "Put the task restatement in the termination-adjacent agent's system message. As the conversation grows, the original task drifts toward the least-attended part of the context — a periodic restatement counteracts it.",
    "Name agents for their function and reference those names in the selector prompt. `critic` and `researcher` steer selection meaningfully better than `agent_a` and `agent_b`.",
    "Log the message count and cumulative tokens at each turn during development. The curve tells you where to set your cap far better than intuition.",
    "If a two-agent team works and a four-agent team doesn't, resist adding a coordinator. The usual cause is context growth, and another participant makes it worse.",
    "When comparing AutoGen against a simpler design, compare on wall-clock time as well as cost. Conversational refinement is inherently serial and it shows.",
  ],

  businessApplications: [
    "Draft-and-critique workflows where an independent reviewer with its own tools genuinely catches things the author misses.",
    "Simulated negotiation or planning, where the back-and-forth is the point rather than an implementation detail.",
    "Research synthesis with a challenger role that pushes on weak claims before they reach a human.",
    "Enterprise settings where Microsoft backing and research provenance matter to procurement.",
    "Complex problem decomposition where the right sequence emerges from discussion rather than being knowable up front.",
  ],

  lifeApplications: [
    "Recognising that adding people to a discussion has a coordination cost that grows faster than the headcount — the same curve that makes group chats expensive here.",
    "Noticing when a review has become agreement rather than checking, which is what a critic without independent information produces.",
    "Understanding why long meetings drift from their agenda: the original goal ends up buried, and the fix is restating it rather than continuing.",
  ],

  exercises: [
    {
      title: "The non-terminating run",
      brief:
        "Build a team with only a `TextMentionTermination`. Find an input where the keyword never fires. Watch the message count climb, then add a cap.",
      success: "You've seen it fail to stop, and know why the cap is mandatory.",
      time: "1–2 hours",
    },
    {
      title: "Measure the cost curve",
      brief:
        "Log cumulative tokens after each turn of a fifteen-message run. Plot it. Compare against a single-agent run on the same task.",
      success: "A curve showing quadratic growth, and a number for the crossover.",
      time: "2 hours",
    },
    {
      title: "Critic with and without a tool",
      brief:
        "Run a writer-critic team where the critic has no tool, then where it can search a source of truth. Compare how many real errors each catches.",
      success: "Evidence about whether your critic role is earning its cost.",
      time: "2–3 hours",
    },
    {
      title: "Round-robin versus selector",
      brief:
        "Run the same three agents both ways on ten inputs. Compare tokens, turn count and how easily you can follow each trace.",
      success: "A decision backed by numbers rather than flexibility appeal.",
      time: "2–3 hours",
    },
  ],

  checklist: [
    "Using `autogen_agentchat` / `autogen_ext`, not pre-0.4 imports",
    "Every team has a hard `MaxMessageTermination` alongside any semantic condition",
    "Sampling parameters are unset when using current Claude models",
    "Team size is justified — each agent pays for the whole conversation",
    "Agents have meaningful names used in selection prompts",
    "`reflect_on_tool_use` is set so raw output doesn't flood the chat",
    "Development runs go through `Console(team.run_stream(...))`",
    "Tokens per turn are measured, not estimated",
    "Any critic or verifier role has an independent source of truth",
    "Model clients are closed when the run ends",
  ],

  faqs: [
    {
      q: "Which AutoGen API should I use?",
      a: "`autogen-agentchat` — the v0.4-and-later interface. Anything using `autogen.AssistantAgent` with a `config_list` and synchronous calls predates the redesign and won't run against the current library.",
    },
    {
      q: "Does everything have to be async?",
      a: "Yes. Agent and team methods are coroutines. If your codebase is synchronous, you'll need to bridge or restructure — worth knowing before you commit, as it's a real integration constraint.",
    },
    {
      q: "Why does my team never stop?",
      a: "Almost always a keyword-only termination condition that never fires. Compose it with `MaxMessageTermination` so there's a hard ceiling regardless of what the agents say.",
    },
    {
      q: "Why is it so expensive compared to a single agent?",
      a: "Every turn re-sends the entire conversation to whichever agent speaks, so cost grows with the square of the turn count. Small teams and tight message caps are the levers.",
    },
    {
      q: "AutoGen or CrewAI?",
      a: "AutoGen when the work is genuinely conversational — critique, negotiation, iterative refinement. CrewAI when it decomposes into roles with a defined handoff. AutoGen is more powerful and more demanding to operate.",
    },
    {
      q: "Can I use Claude models with it?",
      a: "Yes, via `AnthropicChatCompletionClient` in `autogen_ext.models.anthropic` — install with `autogen-ext[anthropic]`. Leave temperature and top_p unset, since current Claude models reject them.",
    },
    {
      q: "How do I see what the agents are doing?",
      a: "Wrap the run in `Console(team.run_stream(...))`. A group chat's behaviour is genuinely invisible from the final result, and this is the difference between debugging and guessing.",
    },
  ],

  tools: [
    { name: "autogen-agentchat", what: "The current high-level API. `pip install \"autogen-agentchat\" \"autogen-ext[anthropic]\"`.", cost: "Free", url: "https://microsoft.github.io/autogen/stable/" },
    { name: "AutoGen Studio", what: "A low-code interface for prototyping teams before writing them out.", cost: "Free" },
    { name: "CrewAI", what: "The alternative when your problem is role-shaped rather than conversation-shaped.", cost: "Free", url: "https://docs.crewai.com" },
    { name: "LangGraph", what: "The alternative when you want explicit state and control flow rather than emergent dialogue.", cost: "Free", url: "https://langchain-ai.github.io/langgraph/" },
  ],

  resources: [
    { title: "AutoGen documentation", kind: "Docs", note: "The reliable starting point. Given how much pre-0.4 material exists, begin here rather than with search results.", url: "https://microsoft.github.io/autogen/stable/" },
    { title: "autogen_agentchat.teams reference", kind: "Docs", note: "Team types, selection policies and termination conditions with signatures.", url: "https://microsoft.github.io/autogen/stable//reference/python/autogen_agentchat.teams.html" },
    { title: "Lost in the Middle", kind: "Paper", note: "Why long group chats drift from their original task.", url: "https://arxiv.org/abs/2307.03172" },
  ],

  internalLinks: [
    { slug: "choosing-an-agent-framework", anchor: "how it compares to CrewAI and LangGraph", context: "In the introduction" },
    { slug: "agent-memory-and-context", anchor: "why the conversation grows so expensive", context: "In the context growth concept" },
    { slug: "building-your-first-ai-agent", anchor: "the single-agent baseline to beat", context: "In the learning path" },
  ],

  relatedGuides: [
    "choosing-an-agent-framework",
    "agent-memory-and-context",
    "building-agents-with-crewai",
  ],

  conclusion: [
    "AutoGen treats multi-agent work as conversation, and where the work genuinely is a dialogue — critique, refinement, negotiation — that framing is the right one. The composable termination conditions are the best answer to 'when do we stop?' that any of these frameworks offers.",
    "The costs are real and worth naming. Everything is async, the v0.4 redesign invalidated most of the tutorials you'll find, and re-sending the conversation each turn makes token spend grow quadratically. Small teams, hard message caps, and `Console` during development are what keep it manageable.",
    "As with every framework in this category: build the single-agent baseline first. AutoGen's overhead is the highest of the three, so the bar it has to clear is correspondingly higher — and when it clears it, you'll know exactly why.",
  ],

  cta: {
    headline: "Weighing up a multi-agent architecture?",
    body: "We design agentic systems around what the task needs — including saying when a conversation between agents is the wrong shape for it.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
