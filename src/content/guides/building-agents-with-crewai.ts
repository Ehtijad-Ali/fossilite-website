import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "building-agents-with-crewai",
  seoTitle: "Building Multi-Agent Systems with CrewAI",
  metaDescription:
    "How CrewAI's role-based agents, tasks and crews actually work — with runnable code, the sequential vs hierarchical tradeoff, and where crews go wrong.",
  title: "Building Multi-Agent Systems with CrewAI",
  keywords: [
    "crewai tutorial",
    "crewai python example",
    "multi agent system python",
    "crewai agent task crew",
    "sequential vs hierarchical crewai",
    "role based agents",
  ],
  category: "artificial-intelligence",
  level: "Intermediate",
  updated: "2026-08-04",
  author: EHTIJAD_ALI,
  readingTime: 12,

  intro: [
    "CrewAI's premise is that you describe a team rather than a program. You define agents by role, goal and backstory; you define tasks with a description and an expected output; you assemble them into a crew and press go. It reads like org design, and that's genuinely why people like it — the mental model is immediately available to anyone who has ever briefed a colleague.",
    "That accessibility is also the trap. Because it feels like delegating to people, it invites you to model your problem as a team when a single agent with good tools, or a plain sequence of function calls, would be cheaper, faster and easier to debug. Every agent in a crew is a full model context that must be established, filled and paid for.",
    "This guide covers how the pieces actually fit together, what the sequential and hierarchical processes really do, and — most usefully — how to tell whether your problem wants a crew at all.",
  ],

  whyItMatters: [
    "Multi-agent frameworks are where AI budgets go to disappear. A crew of five agents on a task a single agent could handle costs roughly five times as much and takes considerably longer, because each agent re-establishes context, works, and reports back through the coordinator. Knowing when that overhead buys something is the difference between an effective system and an expensive one.",
    "When it does fit, though, the role decomposition is real. Genuinely independent workstreams — research one thing while drafting another, review from a perspective the writer can't hold — benefit from separate contexts. A single agent asked to write and then critique its own work is doing the thing that reliably doesn't work.",
    "And CrewAI is popular enough that you'll encounter it. Being able to read a crew definition and predict its cost and failure modes is useful even if you'd have built the thing differently.",
  ],

  coreConcepts: [
    {
      term: "An agent is a role, a goal and a backstory",
      explain:
        "CrewAI agents are defined in prose. `role` is what they are, `goal` is what they're optimising for, `backstory` supplies context and voice. Together they become the system prompt.",
      detail:
        "This is prompt engineering wearing an org chart. Vague roles produce vague behaviour for exactly the reasons vague prompts do — the fields feel like configuration and behave like instructions.",
    },
    {
      term: "A task is a description plus an expected output",
      explain:
        "Tasks carry a `description` of the work and an `expected_output` describing the deliverable. The second field does more than it looks like — it's the specification the agent works toward.",
      detail:
        "Treat `expected_output` as a rubric. 'A summary' produces anything; 'a markdown table with columns X, Y, Z and one row per finding' produces something checkable.",
    },
    {
      term: "Sequential process: output flows forward",
      explain:
        "With `Process.sequential`, tasks run in order and each task's output is passed automatically as context to the next. It's a pipeline where every stage is an agent.",
      detail:
        "This is the mode most crews should use. It's predictable, traceable, and the failure modes are localised to a stage rather than distributed across a negotiation.",
    },
    {
      term: "Hierarchical process: a manager delegates",
      explain:
        "With `Process.hierarchical`, a manager agent decides which agent handles what and in what order. You must supply either a `manager_llm` or a `manager_agent`.",
      detail:
        "It's more flexible and considerably harder to predict, debug or cost. Reach for it when the task genuinely can't be sequenced in advance — which is rarer than it first appears.",
    },
    {
      term: "Context is not shared automatically",
      explain:
        "Each agent has its own conversation. What passes between them is task output, not accumulated understanding. An agent doesn't know what a peer learned unless that learning appears in a task result.",
      detail:
        "This is the most common source of surprise. Crews behave less like a team in a room and more like colleagues exchanging memos.",
    },
    {
      term: "Every agent is a separate context to fill",
      explain:
        "Cost scales with agents, not just with work. Each one re-establishes its own context, produces output, and the coordinator reads that output — a fan-out and fan-in on every step.",
      detail:
        "A five-agent crew on a task one agent could do isn't five times the quality. It's usually five times the cost for a similar answer arrived at more slowly.",
    },
    {
      term: "Tools attach to agents, not to the crew",
      explain:
        "You give each agent the tools its role needs. A researcher gets search; a writer doesn't. This is least privilege expressed as role design.",
      detail:
        "It's a genuine benefit of the model: scoping capability per role is more natural here than in a single-agent design, and it limits what any one misunderstanding can reach.",
    },
  ],

  codeExamples: [
    {
      title: "A minimal two-agent crew",
      language: "python",
      intro:
        "Install with `pip install crewai`. Two agents, two tasks, sequential process — the researcher's output becomes the writer's context automatically.",
      code: `from crewai import Agent, Task, Crew, Process

# The three prose fields become the agent's system prompt. Write them
# as instructions, not as flavour text.
researcher = Agent(
    role="Market Researcher",
    goal="Find verifiable facts about a company's product line and pricing",
    backstory=(
        "You are meticulous about sourcing. You never state a figure you "
        "cannot attribute, and you write NOT FOUND rather than estimating."
    ),
    llm="claude-opus-5",
    verbose=True,
)

writer = Agent(
    role="Brief Writer",
    goal="Turn research into a one-page brief a busy executive can act on",
    backstory=(
        "You lead with the conclusion, keep sentences short, and never "
        "introduce a claim that was not in the research you were given."
    ),
    llm="claude-opus-5",
    verbose=True,
)

# expected_output is the specification. Vague here means vague everywhere.
research_task = Task(
    description="Research the product line and public pricing of {company}.",
    expected_output=(
        "A markdown list of products. For each: name, price if public "
        "(else NOT FOUND), and the source URL."
    ),
    agent=researcher,
)

write_task = Task(
    description="Write a one-page brief from the research.",
    expected_output=(
        "Markdown, under 400 words. Opens with a two-sentence summary, "
        "then a table of products and prices, then three risks."
    ),
    agent=writer,
)

crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, write_task],
    process=Process.sequential,   # output of task 1 feeds task 2
    verbose=True,
)

result = crew.kickoff(inputs={"company": "Fossilite"})
print(result)`,
      note:
        "The `{company}` placeholder is filled from `inputs` at kickoff, which is how you make a crew reusable rather than rewriting task descriptions per run.",
    },
    {
      title: "Giving agents scoped tools",
      language: "python",
      intro:
        "Tools attach per agent, which makes least privilege natural — the researcher can search, the writer structurally cannot. That's a real advantage of the role model.",
      code: `from crewai.tools import tool


@tool("Search product documentation")
def search_docs(query: str) -> str:
    """Search internal product documentation.

    Call this when you need factual detail about a product's
    specification, pricing or availability.
    """
    hits = docs_index.search(query, limit=5)
    if not hits:
        return f"No documentation matched '{query}'."
    return "\\n\\n".join(f"[{h['title']}]\\n{h['text']}" for h in hits)


researcher = Agent(
    role="Market Researcher",
    goal="Find verifiable facts about a company's product line",
    backstory="You never state a figure you cannot attribute.",
    llm="claude-opus-5",
    tools=[search_docs],        # only the researcher can search
    max_iter=8,                 # cap the per-agent loop; agents loop too
)

writer = Agent(
    role="Brief Writer",
    goal="Turn research into an executive brief",
    backstory="You never introduce a claim that was not in your input.",
    llm="claude-opus-5",
    tools=[],                   # no tools: the writer cannot invent sources
    max_iter=5,
)`,
      note:
        "`max_iter` is the per-agent step limit and it is not optional. Each agent runs its own tool loop, so a crew without limits has several places to spin rather than one.",
    },
    {
      title: "Hierarchical, and why to think twice",
      language: "python",
      intro:
        "The manager decides who does what. It's flexible and it's the mode that surprises people on their bill — the manager is itself an agent, reasoning about delegation on every step.",
      code: `crew = Crew(
    agents=[researcher, writer, fact_checker],
    tasks=[research_task, write_task, check_task],
    process=Process.hierarchical,
    manager_llm="claude-opus-5",   # required: either this or manager_agent
    verbose=True,
)

result = crew.kickoff(inputs={"company": "Fossilite"})

# Always read the usage after a hierarchical run. The delegation reasoning
# is real model work and it is easy to underestimate.
print(crew.usage_metrics)`,
      note:
        "Before choosing hierarchical, try sequential and see whether the ordering was genuinely unknowable in advance. Most workflows people reach for a manager to handle turn out to be a pipeline someone hadn't written down yet.",
    },
  ],

  learningPath: [
    {
      title: "Build a single-agent baseline first",
      body: "Before writing a crew, solve the task with one agent and good tools. Record the cost, the time and the output quality. This is the number every crew has to beat.",
      effort: "2 hours",
      outcome: "A baseline that makes the multi-agent decision evidence-based.",
    },
    {
      title: "Run the two-agent sequential crew",
      body: "Implement the first example. Read the verbose output closely — it shows each agent's reasoning and where task output is handed on.",
      effort: "1–2 hours",
      outcome: "A working crew, and a sense of what the handoff actually contains.",
    },
    {
      title: "Sharpen the expected_output fields",
      body: "Rewrite each `expected_output` from a description into a specification with structure, length and required fields. Re-run and compare.",
      effort: "1 hour",
      outcome: "Markedly more consistent deliverables from the same agents.",
    },
    {
      title: "Scope tools per role",
      body: "Give each agent only the tools its role needs. Then try to make an agent do something outside its scope and confirm it can't.",
      effort: "2 hours",
      outcome: "Least privilege enforced by design rather than instruction.",
    },
    {
      title: "Measure the crew against the baseline",
      body: "Run both on the same twenty inputs. Compare output quality, total tokens, wall-clock time and failure rate. Be prepared for the baseline to win.",
      effort: "3–4 hours",
      outcome: "An evidence-based answer about whether the crew earns its cost.",
    },
    {
      title: "Try hierarchical once, deliberately",
      body: "Convert your crew to hierarchical and compare cost and predictability against sequential on the same inputs. Note how much harder the trace is to follow.",
      effort: "2–3 hours",
      outcome: "First-hand understanding of what the manager costs you.",
    },
    {
      title: "Add limits and failure handling",
      body: "Set `max_iter` on every agent, cap total execution, and decide what happens when a task produces unusable output. Crews fail partway through and need a defined response.",
      effort: "2–3 hours",
      outcome: "A crew that stops rather than spinning.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Why a reviewer agent must not simply re-ask the model.",
      walkthrough:
        "A lawyer filed a brief citing six fabricated cases, then asked the model whether the cases were real. It confirmed them, with supporting detail.",
      result:
        "The court sanctioned the lawyers $5,000. In crew terms: a 'fact checker' agent that only reasons over the writer's output, with no independent source and no tool, is running exactly this pattern. A verification role is only worth its cost if it can check something the author couldn't.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "illustration",
      scenario: "The five-agent crew that a single agent could have handled.",
      walkthrough:
        "A recognisable pattern. The task is 'research a company and write a brief', and the org-chart mental model makes it natural to create a researcher, an analyst, a writer, an editor and a fact-checker. Each one establishes its own context, produces output, and passes it on. The result is decent. It cost several times a single-agent run and took considerably longer, and when it's wrong, the error could have entered at any of five handoffs.",
      result:
        "The corrective is a baseline. Solve it with one agent first and record cost, time and quality. Add roles only where you can point at what the extra context buys — a genuinely independent perspective, or a workstream that runs in parallel. Roles that merely relay work are pure overhead.",
    },
    {
      kind: "illustration",
      scenario: "The agent that didn't know what its colleague found.",
      walkthrough:
        "A crew is set up with a researcher and a writer. The researcher discovers an important caveat mid-task but doesn't put it in the task output, because the `expected_output` asked for a product list. The writer never sees it — not because of a bug, but because task output is the only channel between them. The brief ships confidently without the caveat.",
      result:
        "Agents share task results, not understanding. Anything that must reach the next stage has to be part of the `expected_output` specification. Writing that field carefully is how you decide what information survives the handoff.",
    },
  ],

  mistakes: [
    {
      mistake: "Modelling the problem as a team by default",
      why: "The org-chart metaphor makes multi-agent feel like the natural design, so teams reach for it before establishing that one agent can't do the job.",
      fix: "Always build the single-agent baseline first and make the crew beat it on quality, cost and time.",
    },
    {
      mistake: "Vague `expected_output` fields",
      why: "It's the specification the agent works toward. 'A summary' permits anything, so consecutive runs produce inconsistent deliverables and the next stage receives something different each time.",
      fix: "Write it as a rubric: structure, length, required fields, and what to do when information is missing.",
    },
    {
      mistake: "Treating role and backstory as flavour text",
      why: "They become the system prompt. Decorative backstories produce decorative behaviour, and 'you are a world-class expert' does far less than a concrete instruction.",
      fix: "Write them as behavioural instructions — what this agent does, refuses to do, and how it handles uncertainty.",
    },
    {
      mistake: "Omitting `max_iter`",
      why: "Every agent runs its own tool loop. A crew without per-agent limits has several independent places to spin, and the failure is more expensive than in a single-agent design.",
      fix: "Set `max_iter` on every agent and cap total crew execution.",
    },
    {
      mistake: "Expecting shared context between agents",
      why: "Agents exchange task outputs, not understanding. Information an agent discovered but didn't include in its output is simply lost to the rest of the crew.",
      fix: "Design the handoff explicitly through `expected_output`. If something must survive the boundary, specify it.",
    },
    {
      mistake: "Reaching for hierarchical to avoid sequencing",
      why: "A manager agent adds delegation reasoning on every step — real cost and much harder tracing — often to solve an ordering problem you could have written down.",
      fix: "Use sequential unless the order genuinely cannot be known in advance. Try to sequence it first; you usually can.",
    },
    {
      mistake: "A verification agent with no independent source",
      why: "An agent that only reasons over another agent's output is asking the model to check itself in a different costume, and it will tend to agree.",
      fix: "Give verification roles a tool that reaches ground truth, or drop the role and put a deterministic check in code.",
    },
  ],

  bestPractices: [
    "Establish a single-agent baseline before building any crew, and hold the crew to beating it.",
    "Write `role`, `goal` and `backstory` as behavioural instructions — they are the system prompt.",
    "Treat `expected_output` as a specification: structure, length, required fields, and the missing-information behaviour.",
    "Scope tools per agent so capability follows role. This is least privilege and it's free here.",
    "Set `max_iter` on every agent and a ceiling on total crew execution.",
    "Prefer `Process.sequential` and justify any move to hierarchical with a reason the order can't be fixed.",
    "Read `usage_metrics` after every run during development — crew cost is easy to underestimate.",
    "Give verification roles a real tool, or don't create them.",
    "Run with `verbose=True` while developing; the reasoning trace is where handoff problems become visible.",
  ],

  proTips: [
    "Count your agents and ask what each one's separate context buys. A role that only relays or reformats another agent's output is overhead with a job title.",
    "Put the crew's most important constraint in every agent's backstory, not just the first one's. Agents don't inherit each other's instructions.",
    "Use `inputs` and placeholders in task descriptions so one crew definition serves many runs. Editing task text per run is a sign the crew isn't parameterised.",
    "When output quality is inconsistent, tighten `expected_output` before touching the agent definitions. The specification is a stronger lever than the persona.",
    "Log the token usage per task, not just per crew. One agent is usually responsible for most of the spend, and it's rarely the one you'd guess.",
    "If a crew's trace is hard to follow during development, it will be impossible to debug in production. Simplify while it's still cheap to.",
  ],

  businessApplications: [
    "Research-and-report pipelines where gathering, analysing and writing are genuinely distinct stages with different tool needs.",
    "Content operations with a real editorial separation — a drafter and a reviewer holding different standards, where the reviewer has its own source of truth.",
    "Parallel investigation across independent items, where separate contexts avoid one agent's findings crowding another's.",
    "Processes that already have a human handoff structure worth mirroring, and where the mapping makes the system easier to explain to stakeholders.",
    "Prototyping a workflow quickly to learn its shape, before rebuilding it as a deterministic pipeline with model calls at specific points.",
  ],

  lifeApplications: [
    "Recognising when delegation adds coordination cost rather than capacity — the same calculus applies to human teams and is just as often got wrong.",
    "Writing briefs that specify the deliverable, not just the task. `expected_output` is a lesson in giving instructions people can actually satisfy.",
    "Noticing that information doesn't flow between people automatically either; it flows through what gets written down.",
  ],

  exercises: [
    {
      title: "Baseline versus crew",
      brief:
        "Solve one task two ways: single agent with tools, and a crew. Run twenty inputs through each and compare quality, tokens, wall-clock time and failure rate.",
      success: "A defensible decision about whether the crew earns its cost.",
      time: "4–5 hours",
    },
    {
      title: "The expected_output rewrite",
      brief:
        "Take a crew with vague output specifications. Rewrite each as a rubric with structure and required fields. Run ten inputs before and after and compare consistency.",
      success: "Visibly more uniform deliverables from unchanged agents.",
      time: "2 hours",
    },
    {
      title: "Break the handoff",
      brief:
        "Have an agent discover something important that its `expected_output` doesn't ask for. Confirm it never reaches the next agent. Then fix the specification.",
      success: "You can predict what survives a task boundary and what doesn't.",
      time: "1–2 hours",
    },
    {
      title: "Sequential versus hierarchical",
      brief:
        "Run the same crew both ways on identical inputs. Compare `usage_metrics`, wall-clock time and how readable each trace is.",
      success: "Numbers showing what the manager agent costs.",
      time: "2–3 hours",
    },
  ],

  checklist: [
    "A single-agent baseline exists and the crew beats it",
    "Every agent's role, goal and backstory read as instructions",
    "Every `expected_output` specifies structure, length and required fields",
    "Tools are scoped per agent to what the role needs",
    "`max_iter` is set on every agent",
    "Total crew execution is capped",
    "The process is sequential unless hierarchical is justified",
    "Any verification role has an independent source of truth",
    "`usage_metrics` is read and understood per task",
    "Information that must cross a handoff is named in the specification",
  ],

  faqs: [
    {
      q: "When is CrewAI the right choice?",
      a: "When your problem genuinely decomposes into roles with different tools and perspectives, and you've confirmed a single agent underperforms. The role model is intuitive and that intuitiveness is exactly why it gets applied to problems that don't need it.",
    },
    {
      q: "Sequential or hierarchical?",
      a: "Sequential, almost always. It's predictable, traceable and cheaper. Hierarchical adds a manager agent reasoning about delegation on every step — use it only when the task order genuinely cannot be determined in advance.",
    },
    {
      q: "Do agents in a crew share memory?",
      a: "Not by default. They exchange task outputs, not understanding. Anything one agent learns reaches another only if it appears in the task result, which is why `expected_output` matters so much.",
    },
    {
      q: "How much does a crew cost compared to one agent?",
      a: "Roughly in proportion to the agents involved, plus coordination overhead — each one establishes its own context and its output is then read by the next. Read `usage_metrics` rather than estimating; the distribution is usually surprising.",
    },
    {
      q: "Can I use it with any model?",
      a: "Yes — CrewAI supports the major providers, and you set the model per agent. That also lets you run cheaper models for mechanical roles and reserve stronger ones for the reasoning-heavy stages.",
    },
    {
      q: "Why does my crew give inconsistent output?",
      a: "Usually vague `expected_output` fields. It's the specification each agent works toward, and 'a summary' permits almost anything. Tighten it before adjusting personas.",
    },
    {
      q: "How is this different from LangGraph?",
      a: "CrewAI models a team; LangGraph models a state machine. CrewAI is faster to express when the role metaphor fits, LangGraph gives you explicit control over branching, cycles and persistence.",
    },
  ],

  tools: [
    { name: "crewai", what: "The framework. `pip install crewai`, or `crewai[tools]` for the built-in tool catalogue.", cost: "Free", url: "https://github.com/crewaiinc/crewai" },
    { name: "CrewAI documentation", what: "Concept reference for agents, tasks, processes and memory.", cost: "Free", url: "https://docs.crewai.com" },
    { name: "LangGraph", what: "The alternative when you want explicit control flow rather than a role metaphor.", cost: "Free", url: "https://langchain-ai.github.io/langgraph/" },
  ],

  resources: [
    { title: "CrewAI Processes documentation", kind: "Docs", note: "The authoritative explanation of sequential versus hierarchical, including the manager requirement.", url: "https://docs.crewai.com/en/concepts/processes" },
    { title: "CrewAI on GitHub", kind: "Docs", note: "Source and examples. Worth reading the agent implementation to see what the prose fields become.", url: "https://github.com/crewaiinc/crewai" },
    { title: "Building Effective Agents — Anthropic", kind: "Docs", note: "Framework-agnostic, and specifically sceptical of multi-agent designs that haven't been justified.", url: "https://www.anthropic.com/research/building-effective-agents" },
  ],

  internalLinks: [
    { slug: "choosing-an-agent-framework", anchor: "how it compares to the alternatives", context: "In the introduction" },
    { slug: "building-your-first-ai-agent", anchor: "the single-agent baseline to beat", context: "In the learning path" },
    { slug: "ai-agents-explained", anchor: "why multi-agent multiplies the difficulty", context: "In the cost concept" },
  ],

  relatedGuides: [
    "choosing-an-agent-framework",
    "building-your-first-ai-agent",
    "ai-agents-explained",
  ],

  conclusion: [
    "CrewAI makes multi-agent systems easy to express, which is both its strength and the thing to be careful about. Roles, goals, tasks and processes map onto a mental model everyone already has, and that fluency can carry you past the question of whether the problem needs a team at all.",
    "Use it when the decomposition is real — distinct tools, genuinely independent workstreams, a reviewer with its own source of truth. Write the prose fields as instructions rather than flavour, treat `expected_output` as a specification, scope tools per role, and cap every agent.",
    "Before any of that, build the single-agent baseline. If a crew can't beat one well-equipped agent on quality, cost and time, the org chart was a metaphor rather than an architecture.",
  ],

  cta: {
    headline: "Not sure whether your problem needs a crew?",
    body: "We design agentic systems around what the task actually requires — and say plainly when a simpler architecture wins.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
