import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "choosing-an-agent-framework",
  seoTitle: "Choosing an Agent Framework: LangChain vs CrewAI vs AutoGen",
  metaDescription:
    "A decision guide for AI agent frameworks (LangChain, LangGraph, CrewAI, AutoGen and the raw SDK) based on what each is actually good at.",
  title: "Choosing an Agent Framework",
  keywords: [
    "agent framework comparison",
    "langchain vs crewai",
    "autogen vs langgraph",
    "best ai agent framework",
    "multi agent framework comparison",
    "which agent framework",
  ],
  category: "artificial-intelligence",
  level: "Intermediate",
  updated: "2026-08-05",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "Framework comparisons usually rank things, which is the wrong shape for this decision. These libraries aren't competing on a single axis: they encode different mental models, and the right question is which model matches your problem rather than which library is best.",
    "There's also a candidate most comparisons omit: no framework at all. The agent loop is about forty lines. A substantial share of production agent code would be simpler, cheaper and easier to debug written directly against a model SDK, and teams reach for a framework before they've felt the pull of one.",
    "This guide gives you the mental model each library encodes, the single question that decides between them, and honest notes on what each costs. It assumes you've built a raw loop: if not, do that first, because it's the baseline every option here has to beat.",
  ],

  whyItMatters: [
    "Framework choice is stickier than it looks. It shapes how you express control flow, where your state lives, how you debug, and what your team learns. Migrating a working agent between frameworks is close to a rewrite, so the cost of choosing badly is paid over the whole life of the project.",
    "It also has a large and under-appreciated cost dimension. Multi-agent frameworks make it easy to express architectures that cost several times what a single well-equipped agent would, for output that's often no better. The framework doesn't warn you about this: the metaphor makes it feel natural.",
    "And most of the decision is decided before you pick a library at all, by whether your problem needs an agent. A fixed workflow with model calls at defined points is more reliable and cheaper than any agent, in any framework, and it covers more cases than the current enthusiasm suggests.",
  ],

  coreConcepts: [
    {
      term: "Ask the workflow question first",
      explain:
        "Can you write down the steps in advance? If yes, you want a workflow (a fixed sequence with model calls at specific points) not an agent. No framework changes this answer.",
      detail:
        "Agents earn their cost when the sequence can't be known ahead of time. That's rarer than it feels, and 'we couldn't be bothered to write it down' is not the same as 'it can't be determined'.",
    },
    {
      term: "Raw SDK: you own the loop",
      explain:
        "Direct against a model SDK. No abstraction, complete visibility, forty lines of loop. Every guardrail is code you wrote and can see.",
      detail:
        "The right default for a single agent with a handful of tools and one provider. You give up the integration catalogue and tracing, which is exactly what to weigh.",
    },
    {
      term: "LangChain: the integration surface",
      explain:
        "`create_agent` plus a large ecosystem: many providers behind one interface, hundreds of tool integrations, tracing that works without instrumentation.",
      detail:
        "Adopt it for the ecosystem, not to avoid writing a loop. Teams that adopt for the latter reason end up with an abstraction they don't understand around a problem they hadn't felt.",
    },
    {
      term: "LangGraph: control flow as a state machine",
      explain:
        "Nodes, edges and explicit cycles, with checkpointed state. The differentiators are durable persistence and interrupts for human approval.",
      detail:
        "The only option here where a run can pause for a human decision that arrives tomorrow and resume in a different process. If you need that, the decision is basically made.",
    },
    {
      term: "CrewAI: the org chart",
      explain:
        "Agents defined by role, goal and backstory; tasks with expected outputs; sequential or hierarchical execution. Fast to express when the role metaphor fits.",
      detail:
        "The accessibility is also the risk. Because it feels like delegating to people, it invites modelling problems as teams that a single agent would handle for a fraction of the cost.",
    },
    {
      term: "AutoGen: the conversation",
      explain:
        "Agents talk in a group chat, a policy picks who speaks next, composable termination conditions decide when to stop. Async throughout.",
      detail:
        "The best fit for dialogue-shaped work: critique, negotiation, iterative refinement. Also the most demanding to operate, and its cost grows quadratically with turns.",
    },
    {
      term: "Cost scales with architecture, not just usage",
      explain:
        "A single agent pays for its own context. A crew pays per agent. A group chat re-sends the whole conversation every turn, so spend grows with the square of turn count.",
      detail:
        "This is the dimension most comparisons skip, and it routinely dominates the decision once something reaches real volume.",
    },
    {
      term: "The migration cost is real",
      explain:
        "These libraries encode different models, so moving between them isn't a port. It's a redesign. Choosing is a longer commitment than it feels at the prototype stage.",
      detail:
        "Which argues for starting with the least committal option that could work and moving deliberately, rather than picking the most capable one up front.",
    },
  ],

  codeExamples: [
    {
      title: "The same agent, four ways",
      language: "python",
      intro:
        "Not runnable as one file: a side-by-side of what each option asks you to write for a single tool-calling agent. The shape of each is the point.",
      code: `# ─── Raw SDK ─────────────────────────────────────────────────────────
# You own the loop. ~40 lines, complete visibility, no dependency.
while step < MAX_STEPS:
    response = client.messages.create(model="claude-opus-5", tools=TOOLS,
                                      messages=messages, max_tokens=16000)
    messages.append({"role": "assistant", "content": response.content})
    if response.stop_reason != "tool_use":
        break
    results = [run_tool(b) for b in response.content if b.type == "tool_use"]
    messages.append({"role": "user", "content": results})

# ─── LangChain ───────────────────────────────────────────────────────
# The loop disappears. You get the ecosystem and tracing.
from langchain.agents import create_agent
agent = create_agent(model=model, tools=[get_weather])
agent.invoke({"messages": [{"role": "user", "content": "..."}]})

# ─── LangGraph ───────────────────────────────────────────────────────
# The loop returns as something you control, plus durable state.
from langgraph.prebuilt import create_react_agent
agent = create_react_agent(model, [get_weather], checkpointer=checkpointer)
agent.invoke({"messages": [...]}, {"configurable": {"thread_id": "user-123"}})

# ─── CrewAI ──────────────────────────────────────────────────────────
# You describe a team. Note what you're now paying for: two contexts.
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, write_task],
    process=Process.sequential,
)
crew.kickoff(inputs={"topic": "..."})

# ─── AutoGen ─────────────────────────────────────────────────────────
# You describe a conversation. Every turn re-sends the whole history.
team = RoundRobinGroupChat(
    [writer, critic],
    termination_condition=TextMentionTermination("APPROVED") | MaxMessageTermination(10),
)
await Console(team.run_stream(task="..."))`,
      note:
        "Read these as four different questions being asked of you: what should happen next, what tools exist, what state persists, who does what, and who speaks next. Pick the framework whose question your problem naturally answers.",
    },
  ],

  learningPath: [
    {
      title: "Answer the workflow question honestly",
      body: "Write down the steps your task needs. If you can, build it as a fixed sequence with model calls at defined points and stop here. Most tasks people call agentic are workflows nobody wrote down.",
      effort: "1–2 hours",
      outcome: "Either a working workflow, or a justified reason you need an agent.",
    },
    {
      title: "Build the raw-SDK baseline",
      body: "One agent, your real tools, no framework. Record cost, latency and success rate on twenty realistic inputs. Every framework option now has a number to beat.",
      effort: "4–6 hours",
      outcome: "A baseline, and genuine understanding of the loop.",
    },
    {
      title: "Identify which capability you're missing",
      body: "Name the specific thing the baseline can't do: many providers, durable state, human approval, parallel roles, dialogue-shaped refinement. That name selects the framework.",
      effort: "1 hour",
      outcome: "A named requirement rather than a preference.",
    },
    {
      title: "Prototype in the indicated framework only",
      body: "Resist evaluating all four. Build in the one your named requirement points at, and hold it to beating the baseline on quality, cost and latency.",
      effort: "1–2 days",
      outcome: "A comparison against the baseline, not a bake-off.",
    },
    {
      title: "Measure cost per successful task",
      body: "Not per call. Multi-agent architectures look reasonable per call and can be several times more expensive per completed task. This is the number that decides it at volume.",
      effort: "3–4 hours",
      outcome: "The economics, rather than an impression of them.",
    },
    {
      title: "Check the operational fit",
      body: "Does it need async? Does state survive a restart? Can you trace a failed run? These decide whether it survives contact with production more than capability does.",
      effort: "2–3 hours",
      outcome: "An honest read on operability, before commitment.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The failure mode every framework shares.",
      walkthrough:
        "A lawyer used a model to research precedent, filed a brief citing six fabricated cases, and (when challenged) asked the model whether the cases were real. It confirmed them, with detail.",
      result:
        "The court sanctioned the lawyers $5,000. No framework prevents this. A CrewAI fact-checker, an AutoGen critic and a LangGraph validation node all run the same pattern if they only reason over the output rather than checking an independent source. Framework choice doesn't change what verification requires.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "documented",
      scenario: "Why long multi-agent runs degrade regardless of framework.",
      walkthrough:
        "Liu and colleagues varied where relevant information sat within a model's context and measured retrieval accuracy. Performance was highest at the beginning and end and degraded in the middle, holding even for long-context models.",
      result:
        "Every architecture here accumulates context: a crew through task outputs, a group chat through the shared history, a graph through checkpointed messages. The original instructions drift toward the least-attended position as runs lengthen. This is a property of the models, not the libraries, so 'switch framework' is never the fix for it.",
      source: {
        label: "Liu et al. (2023). Lost in the Middle: How Language Models Use Long Contexts, arXiv:2307.03172",
        url: "https://arxiv.org/abs/2307.03172",
      },
    },
    {
      kind: "illustration",
      scenario: "The framework bake-off that answers nothing.",
      walkthrough:
        "A team spends two weeks prototyping the same task in four frameworks. Each prototype works. Each is roughly as good as the others, because the task was well within all of their capabilities. The comparison produces a preference based on syntax taste, and the actual question (whether the task needed an agent at all) never gets asked.",
      result:
        "A raw-SDK baseline would have answered more in an afternoon. The frameworks differentiate on capabilities most prototypes don't exercise: persistence across restarts, human approval, parallel roles. Compare against the baseline on one named requirement rather than comparing frameworks against each other.",
    },
  ],

  mistakes: [
    {
      mistake: "Choosing a framework before asking whether you need an agent",
      why: "If the steps can be written down, a fixed workflow is more reliable and cheaper than any agent. The framework question is downstream of a question most teams skip.",
      fix: "Try to write the sequence. If you can, build that instead. The decision is made and you've saved the entire evaluation.",
    },
    {
      mistake: "Adopting to avoid writing the loop",
      why: "The loop is forty lines and the most valuable forty lines to understand. Adopting to skip it means depending on behaviour you can't reason about.",
      fix: "Adopt for the ecosystem, for persistence, for interrupts: for something you can name. Not to save the loop.",
    },
    {
      mistake: "Running a four-way bake-off",
      why: "Prototypes rarely exercise what differentiates these libraries, so the comparison collapses into syntax preference and consumes weeks.",
      fix: "Name the missing capability, prototype only in the framework it indicates, and compare against the raw baseline.",
    },
    {
      mistake: "Comparing cost per call rather than per completed task",
      why: "Multi-agent architectures look reasonable per call. Per successful task they can be several times a single agent, because of coordination and repeated context.",
      fix: "Measure end-to-end cost per task that actually succeeded, on realistic inputs.",
    },
    {
      mistake: "Modelling a pipeline as a team or a graph",
      why: "A linear flow expressed as a crew or a state machine is ceremony. Future readers reconstruct a sequence from an architecture that implies branching.",
      fix: "Match the mental model to the problem's actual shape. Linear work wants a linear implementation.",
    },
    {
      mistake: "Ignoring operational fit",
      why: "Async requirements, state durability and traceability decide whether something survives production more often than capability does, and they're invisible in a prototype.",
      fix: "Test a restart mid-run, and try to debug a deliberately failed run, before committing.",
    },
    {
      mistake: "Expecting a framework to solve reliability",
      why: "Compounding error, context drift and confident fabrication are properties of the models. Every option here inherits all three.",
      fix: "Guardrails, verification against independent sources, step limits and human checkpoints: in whichever framework you pick.",
    },
  ],

  bestPractices: [
    "Answer the workflow question before the framework question.",
    "Build the raw-SDK baseline first and hold every alternative to beating it.",
    "Name the specific missing capability, and let that select the framework.",
    "Measure cost per successful task, not per call.",
    "Prefer the least committal option that could work: migration is a redesign.",
    "Match the mental model to the problem's shape: sequence, state machine, team or conversation.",
    "Test operational fit: restart mid-run, and debug a deliberately failed run.",
    "Pin versions. All of these move fast and have broken agent code on minor upgrades.",
    "Keep guardrails, step limits and verification in code regardless of framework.",
  ],

  proTips: [
    "If you can't name the capability you're adopting for, you're not ready to adopt. That single test resolves most framework debates in about a minute.",
    "Count agents and ask what each separate context buys. A role that relays or reformats another agent's output is overhead with a job title, in any framework.",
    "Prototype the hardest realistic case, not the demo. These libraries all handle the easy path; they differentiate on persistence, approval and failure recovery.",
    "Check how each one traces a failed run before you commit. You'll spend more time debugging than building, and the debugging story varies enormously.",
    "When a framework's overhead starts irritating you, that irritation is data. Write down which specific abstraction you're fighting. It's usually the signal to move or to drop back to the SDK.",
    "Treat multi-agent as a cost decision as much as an architecture one. The metaphor makes it feel free and the bill disagrees.",
  ],

  businessApplications: [
    "Technology selection with a defensible rationale rather than a preference, which matters when the choice outlives the person who made it.",
    "Cost forecasting: architecture determines spend more than volume does, and multi-agent designs need modelling before commitment.",
    "Vendor and platform evaluation: the same questions apply to hosted agent products as to libraries.",
    "Team capability planning: LangGraph and AutoGen both demand more than LangChain, and that's a hiring and training consideration.",
    "Migration planning when an existing agent has outgrown its framework, where knowing the destination's model prevents a second migration.",
  ],

  exercises: [
    {
      title: "The workflow test",
      brief:
        "Take a task you were about to build an agent for. Try to write the complete sequence of steps. If you succeed, implement it as a workflow and compare against an agent on twenty inputs.",
      success: "Either a shipped workflow, or a written reason it's undeterminable.",
      time: "4–6 hours",
    },
    {
      title: "Establish the baseline",
      brief:
        "Raw SDK, one agent, your real tools. Measure cost, latency and success rate on twenty realistic inputs.",
      success: "Three numbers every framework option must beat.",
      time: "4–6 hours",
    },
    {
      title: "Name the gap",
      brief:
        "Write one sentence stating what the baseline can't do that you need. If you can't finish the sentence, you don't need a framework yet.",
      success: "A named requirement, or a decision not to adopt.",
      time: "1 hour",
    },
    {
      title: "Cost per successful task",
      brief:
        "For your chosen framework and the baseline, compute total spend divided by tasks that actually succeeded. Compare.",
      success: "An economics comparison rather than a feature comparison.",
      time: "3 hours",
    },
  ],

  checklist: [
    "I confirmed the task can't be expressed as a fixed workflow",
    "A raw-SDK baseline exists with measured cost, latency and success rate",
    "I can name in one sentence the capability the baseline lacks",
    "The framework I picked is the one that capability indicates",
    "I compared cost per successful task, not per call",
    "The mental model matches the problem's shape",
    "I tested a restart mid-run and debugged a deliberately failed run",
    "Versions are pinned and an evaluation set runs after upgrades",
    "Step limits, guardrails and verification exist regardless of framework",
  ],

  faqs: [
    {
      q: "Which agent framework is best?",
      a: "Wrong question. They encode different mental models. LangChain for the ecosystem, LangGraph for state and control flow, CrewAI for role decomposition, AutoGen for dialogue-shaped work, raw SDK for a single agent with a few tools.",
    },
    {
      q: "Do I need a framework at all?",
      a: "Often not. The agent loop is about forty lines, and a single agent with a handful of tools and one provider is usually clearer without one. Adopt when you can name what you're adopting for.",
    },
    {
      q: "LangChain or LangGraph?",
      a: "LangChain's `create_agent` for a straightforward tool loop with the ecosystem attached. LangGraph when you need explicit control flow, durable state across restarts, or human-in-the-loop pauses.",
    },
    {
      q: "CrewAI or AutoGen?",
      a: "CrewAI when the work decomposes into roles with a defined handoff. It's faster to express and easier to trace. AutoGen when the work is a conversation, and you can afford its quadratic context growth.",
    },
    {
      q: "How much more does multi-agent cost?",
      a: "Roughly proportional to agent count for a crew, and growing with the square of turn count for a group chat, since each turn re-sends the history. Measure per successful task: the gap is usually larger than expected.",
    },
    {
      q: "Can I switch frameworks later?",
      a: "It's closer to a redesign than a port, because each encodes a different model of control flow and state. That argues for starting with the least committal option that works.",
    },
    {
      q: "Does a framework make my agent more reliable?",
      a: "No. Compounding error, context drift and confident fabrication are model properties that every framework inherits. Reliability comes from guardrails in code, step limits, independent verification and human checkpoints.",
    },
  ],

  tools: [
    { name: "Anthropic Python SDK", what: "The no-framework baseline, including the tool runner for the loop.", cost: "Free", url: "https://github.com/anthropics/anthropic-sdk-python" },
    { name: "LangChain", what: "Ecosystem breadth: providers, integrations, tracing.", cost: "Free", url: "https://docs.langchain.com" },
    { name: "LangGraph", what: "State machines, durable checkpointing, interrupts.", cost: "Free", url: "https://langchain-ai.github.io/langgraph/" },
    { name: "CrewAI", what: "Role-based decomposition with sequential or hierarchical execution.", cost: "Free", url: "https://docs.crewai.com" },
    { name: "AutoGen", what: "Conversational multi-agent teams, async throughout.", cost: "Free", url: "https://microsoft.github.io/autogen/stable/" },
  ],

  resources: [
    { title: "Building Effective Agents: Anthropic", kind: "Docs", note: "The best framework-agnostic treatment, and clear that most tasks want a workflow rather than an agent.", url: "https://www.anthropic.com/research/building-effective-agents" },
    { title: "Lost in the Middle", kind: "Paper", note: "Why every option here degrades on long runs: a model property, not a library one.", url: "https://arxiv.org/abs/2307.03172" },
    { title: "OWASP Top 10 for LLM Applications", kind: "Docs", note: "The security concerns every framework inherits equally.", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
  ],

  internalLinks: [
    { slug: "building-your-first-ai-agent", anchor: "the raw-SDK baseline", context: "In the introduction" },
    { slug: "building-agents-with-langgraph", anchor: "when you need state and control flow", context: "In the LangGraph concept" },
    { slug: "ai-agents-explained", anchor: "whether you need an agent at all", context: "In the workflow question" },
  ],

  relatedGuides: [
    "building-your-first-ai-agent",
    "building-agents-with-langgraph",
    "ai-agents-explained",
  ],

  conclusion: [
    "Whatever you pick, the reliability work is unchanged. Step limits, guardrails in code, verification against independent sources, and a human in front of anything irreversible. No library supplies those, and every one of them needs them.",
  ],

  cta: {
    headline: "Still stuck between two frameworks?",
    body:
      "Usually the answer is that the choice matters less than the part you're avoiding. We're happy to be the second opinion.",
    label: "Get a second opinion",
    href: "/contact",
  },
};

export default guide;
