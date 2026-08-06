import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "ai-agents-explained",
  seoTitle: "AI Agents Explained: What They Are and Where They Break",
  metaDescription:
    "How AI agents work — planning, tools, memory and guardrails — plus the reliability problems that decide whether one survives contact with production.",
  title: "AI Agents Explained",
  keywords: [
    "what are AI agents",
    "AI agent architecture",
    "tool calling",
    "agentic workflows",
    "agent guardrails",
    "autonomous AI",
  ],
  category: "artificial-intelligence",
  level: "Intermediate",
  updated: "2026-08-04",
  author: PETER_NGUYEN,
  readingTime: 13,

  intro: [
    "An AI agent is a language model that has been given the ability to act — to call tools, read results, and decide what to do next — rather than only to produce text. That's the whole idea, and it's significant, because a system that can take actions is categorically different from one that can only describe them.",
    "It's also where the reliability problem changes character. A model that produces a wrong paragraph wastes your time. A model that produces a wrong action sends an email, updates a record, or spends money. The same underlying uncertainty, connected to different consequences.",
    "This guide covers what an agent actually consists of, why multi-step autonomy compounds error rather than merely repeating it, and the design choices that separate agents that work from demonstrations that impress. It assumes you understand roughly what a language model does; if not, start there and come back.",
  ],

  whyItMatters: [
    "Agents are where a substantial share of current AI investment is going, and where a substantial share of it is being wasted. The gap between a compelling demo and a system that runs unattended is wider here than anywhere else in applied AI, because the failure modes are multiplicative rather than additive.",
    "Understanding the architecture also tells you which problems are actually suited to this approach. A great many tasks currently being handed to agents would be better served by a fixed workflow with a model doing one step: cheaper, faster, and dramatically easier to debug. Knowing when autonomy earns its cost is the useful judgement here.",
    "And there's a risk dimension that's specific to agents. A system that reads untrusted content and can also take actions has an attack surface that a chatbot doesn't. That's not a theoretical concern; it's the reason agent deployments need security review that ordinary model integrations don't.",
  ],

  coreConcepts: [
    {
      term: "An agent is a loop, not a model",
      explain:
        "The model receives a goal and the current state, decides on an action, the action executes, the result comes back, and the loop repeats until the model decides it's finished or a limit is hit.",
      detail:
        "The intelligence is in the model; the agency is in the loop. Understanding this makes the failure modes obvious: anything that can go wrong in one step can go wrong repeatedly, and the loop has no independent judgement about whether it's making progress.",
    },
    {
      term: "Tools are how the agent affects anything",
      explain:
        "A tool is a function the model can call: search, a database query, an API call, a calculation. The model chooses which to call and with what arguments; the tool does the actual work.",
      detail:
        "Tool design matters more than most teams expect. Clear names, tight parameter schemas and informative error messages substantially improve how well a model uses them, because the description is all the model has to go on.",
    },
    {
      term: "Reasoning before acting improves action selection",
      explain:
        "Having the model articulate what it's trying to do and why, before choosing a tool, measurably improves the choice — for the same reason it improves analytical answers.",
      detail:
        "It also makes debugging tractable. When an agent does something inexplicable, the reasoning trace is usually where you find the misunderstanding, and without it you're guessing.",
    },
    {
      term: "Errors compound across steps",
      explain:
        "If each step has a 95% chance of being right, ten sequential steps have roughly a 60% chance of all being right. Autonomy multiplies the per-step error rate rather than averaging it.",
      detail:
        "This is the single most important thing to understand about agents, and it's why long autonomous chains are unreliable even when each individual step looks solid. Shortening the chain is usually more effective than improving any step.",
    },
    {
      term: "Memory is architecture, not a model property",
      explain:
        "The model has no memory between calls. Anything an agent 'remembers' is state the surrounding system stored and re-supplied: the conversation so far, results of previous steps, retrieved documents.",
      detail:
        "As the loop runs, this accumulated state grows and fills the context window. Long-running agents degrade partly because their context becomes crowded with the debris of earlier steps.",
    },
    {
      term: "Guardrails are code, not instructions",
      explain:
        "A prompt saying 'never spend more than £100' is a request. A check in your code that rejects any transaction over £100 is a guardrail. Only one of them holds when the model misunderstands.",
      detail:
        "The rule of thumb: any constraint that matters must be enforced outside the model. The prompt communicates intent; the code enforces it.",
    },
    {
      term: "Human checkpoints at irreversibility",
      explain:
        "The natural place for approval is wherever an action can't be undone: sending external communication, moving money, deleting data, changing production configuration.",
      detail:
        "This gives you most of the value of automation with a fraction of the risk. Agents that draft and queue, with a person approving, are the version that ships successfully far more often than full autonomy.",
    },
    {
      term: "Prompt injection is the defining security problem",
      explain:
        "If an agent processes content it didn't author — a web page, an email, an uploaded document — that content can contain instructions. An agent that can also act may act on them.",
      detail:
        "This is a hard problem without a complete solution. The mitigations are architectural: treat all fetched content as untrusted data, restrict what tools are available in contexts handling untrusted input, and require approval for consequential actions.",
    },
    {
      term: "Multi-agent systems multiply the difficulty",
      explain:
        "Several agents passing work between each other is intuitively appealing and adds coordination failure to every problem a single agent already has, while making the whole thing far harder to trace.",
      detail:
        "Occasionally justified. Usually a single agent with well-designed tools, or a fixed workflow with model steps, does the same job more reliably and much more cheaply.",
    },
  ],

  learningPath: [
    {
      title: "Build a single tool call first",
      body: "Give a model one function — a calculator, a lookup — and let it decide when to call it. Watch it call with malformed arguments, because it will. Handle that case before adding anything else.",
      effort: "3–5 hours",
      outcome: "You've seen the model delegate correctly, and seen it get the arguments wrong.",
    },
    {
      title: "Add the loop",
      body: "Let the model call a tool, receive the result, and decide again. Add a hard step limit immediately — an agent without one will occasionally loop until you stop paying for it.",
      effort: "5–8 hours",
      outcome: "A working loop with a bounded number of steps.",
    },
    {
      title: "Make every step observable",
      body: "Log the full prompt, the reasoning, the chosen tool, the arguments, and the result at every iteration. Without this, debugging an agent is guesswork, and you will need to debug it.",
      effort: "4–6 hours",
      outcome: "You can reconstruct exactly what happened in any run.",
    },
    {
      title: "Break it deliberately",
      body: "Make a tool fail. Return malformed data. Give an ambiguous goal. Give an impossible one. Note what the agent does. Most untuned agents respond to failure by retrying the same action indefinitely.",
      effort: "4–6 hours",
      outcome: "A documented list of how your agent behaves when things go wrong.",
    },
    {
      title: "Add real guardrails",
      body: "Move every constraint that matters out of the prompt and into code: allowed actions, spending limits, rate limits, forbidden targets. Then test them by instructing the agent to violate each one.",
      effort: "6–10 hours",
      outcome: "Constraints that hold when the model misunderstands the instruction.",
    },
    {
      title: "Insert human approval at irreversibility",
      body: "Identify every action that can't be undone and put an approval step in front of it. Have the agent prepare the action fully so approving is a single decision rather than a task.",
      effort: "5–8 hours",
      outcome: "Nothing irreversible happens without a person seeing it first.",
    },
    {
      title: "Evaluate over whole runs, not single steps",
      body: "Build a set of realistic tasks with known correct outcomes. Score end-to-end success, steps taken and cost per run. Step-level accuracy is not the thing you care about.",
      effort: "8–12 hours",
      outcome: "An end-to-end success rate you can compare across versions.",
    },
    {
      title: "Try replacing it with a fixed workflow",
      body: "Take your agent's task and implement it as a predetermined sequence with model calls at specific points. Compare reliability, cost and latency. Frequently the workflow wins, and that's a useful result rather than a disappointing one.",
      effort: "6–10 hours",
      outcome: "Evidence about whether autonomy is actually earning its cost.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A system asked to verify its own output, which confirmed its own fabrications.",
      walkthrough:
        "A lawyer researching precedent used ChatGPT and filed a brief citing six decisions that did not exist. When their authenticity was questioned, he asked the model whether the cases were real. It confirmed they were, and supplied further supporting detail.",
      result:
        "The court sanctioned the lawyers $5,000 in June 2023. For agent design specifically, the second step is the instructive one: a model asked to check its own work produced the plausible continuation, which was agreement. This is why self-verification is not a guardrail. Any check that matters must query an independent source or a deterministic system — asking the model again produces the appearance of verification and none of the substance.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "documented",
      scenario: "Measuring what happens to information buried in a long context.",
      walkthrough:
        "Liu and colleagues varied the position of relevant information within a model's context and measured retrieval accuracy. Performance was highest when it sat at the beginning or end and degraded when it sat in the middle, forming a U-shaped curve. Accuracy also fell overall as total context length grew, including for models designed for long contexts.",
      result:
        "For agents this is a direct architectural constraint. A long-running loop accumulates state — prior steps, tool outputs, retrieved documents — and pushes the original goal and constraints into the middle of an ever-growing context. That's the position the research shows attention handles worst. Summarising completed steps and re-stating the goal and constraints at the end of each prompt are mitigations that follow from the measurement.",
      source: {
        label: "Liu et al. (2023) — Lost in the Middle: How Language Models Use Long Contexts, arXiv:2307.03172",
        url: "https://arxiv.org/abs/2307.03172",
      },
    },
    {
      kind: "illustration",
      scenario: "The agent that retried the same failing action forty times.",
      walkthrough:
        "A shape worth anticipating. An agent calls a tool, the tool returns an error, and the agent — having no concept of having tried this before beyond what's in its context — decides the reasonable next action is to call the tool. The same tool. With the same arguments. The loop continues until a step limit or a billing alert intervenes.",
      result:
        "The defences are structural rather than prompt-based: a hard step limit, detection of repeated identical actions, and a required change of approach after a failure. It's also why informative error messages matter — a tool returning 'error' gives the model nothing to reason with, while 'error: date must be ISO 8601 format' gives it a correction.",
    },
  ],

  mistakes: [
    {
      mistake: "Putting critical constraints in the prompt",
      why: "A prompt is a request that a probabilistic system will usually honour. 'Usually' is not a security property, and the failures cluster on unusual inputs — exactly when constraints matter.",
      fix: "Enforce anything that matters in code, outside the model. The prompt explains intent; the code makes it true.",
    },
    {
      mistake: "Long autonomous chains",
      why: "Per-step error compounds multiplicatively. Ten steps at 95% reliability gives roughly 60% end-to-end, and the failures are hard to attribute.",
      fix: "Shorten the chain. Break the task into bounded stages with validation between them, or use a fixed workflow with model calls at specific points.",
    },
    {
      mistake: "Letting the agent verify its own work",
      why: "A model asked whether its output is correct produces the plausible answer, which is usually yes. It has no independent source to consult.",
      fix: "Verify against something external: a deterministic check, a separate data source, or a person. Self-verification is theatre.",
    },
    {
      mistake: "No step limit or cost ceiling",
      why: "Agents can loop. Without a hard bound, a single confused run can consume a surprising amount of money and API quota before anyone notices.",
      fix: "Set a maximum step count, a token budget and a spend ceiling per run, enforced in code. Treat them as required rather than as tuning.",
    },
    {
      mistake: "Giving an agent broad permissions for convenience",
      why: "The agent's capability set defines the blast radius of any misunderstanding or injection. Broad database write access is a very different risk profile from a narrow read query.",
      fix: "Least privilege applies to agents exactly as it does to users. Give the narrowest tools that accomplish the task, scoped to the specific resources needed.",
    },
    {
      mistake: "Processing untrusted content with an agent that can act",
      why: "Fetched web pages, emails and uploaded documents can contain instructions. An agent that reads them and holds tools may follow them.",
      fix: "Delimit and label external content as data, restrict available tools when handling untrusted input, and require human approval before consequential actions in those flows.",
    },
    {
      mistake: "Reaching for multi-agent architectures early",
      why: "Multiple agents add coordination failure on top of every existing problem and make tracing dramatically harder, usually without improving the outcome.",
      fix: "Exhaust single-agent and fixed-workflow designs first. Multi-agent is a solution to a problem most teams don't have yet.",
    },
    {
      mistake: "Evaluating step accuracy instead of task completion",
      why: "Individual steps looking sensible tells you very little about whether the run achieved the goal, which is the only thing that matters.",
      fix: "Score end-to-end task success on a fixed set of realistic scenarios, alongside cost and step count per run.",
    },
  ],

  bestPractices: [
    "Log everything at every iteration: prompt, reasoning, tool, arguments, result. Agent debugging is impossible without a complete trace.",
    "Set hard limits on steps, tokens and spend per run, enforced in code, from the first prototype.",
    "Design tools with clear names, tight schemas and informative error messages. The description is the model's only guidance.",
    "Re-state the goal and the binding constraints at the end of every prompt, since accumulated state pushes them into the least-attended position.",
    "Summarise completed steps rather than carrying the raw history forward, to keep the context focused.",
    "Put human approval at every irreversible action, and prepare the action fully so approval is one decision.",
    "Give the narrowest tool permissions that accomplish the task, scoped to specific resources.",
    "Treat all fetched or user-supplied content as untrusted data, never as instructions.",
    "Evaluate on end-to-end task completion across realistic scenarios, and track cost per successful run.",
    "Compare against a fixed workflow before committing to autonomy. Sometimes the boring option is better and knowing that is valuable.",
  ],

  proTips: [
    "Detect repeated identical actions and force a change of approach. Nothing else catches the retry loop as cheaply, and almost every agent produces one eventually.",
    "Make tool errors instructive. 'Invalid date format, expected YYYY-MM-DD' gets corrected; 'error' gets retried. The error message is part of the prompt.",
    "Have the agent state its plan before executing, and log the plan separately from the actions. Comparing intended plan to actual actions is the fastest way to find where reasoning diverged from behaviour.",
    "Cap the number of steps far lower than you think you need during development. A tight limit surfaces the cases where the agent is flailing, which a generous limit hides behind eventual success.",
    "Track cost per successful task, not cost per call. An agent that's cheap per call and often fails can be far more expensive than an apparently pricier one that completes reliably.",
    "Run your agent against deliberately adversarial content — a document containing instructions — before it ever touches real untrusted input. Almost every first implementation follows them.",
  ],

  businessApplications: [
    "Research and synthesis: gathering information across several sources and producing a structured brief, with citations, under review.",
    "Support triage: classifying a ticket, retrieving relevant history and policy, and drafting a response for an agent to approve.",
    "Data operations: reconciling records across systems, flagging discrepancies for a human rather than resolving them autonomously.",
    "Software assistance: multi-file changes, test generation and migrations, where the version control system provides a natural review checkpoint.",
    "Onboarding and internal processes, where the agent assembles what's needed and a person confirms each irreversible step.",
    "Monitoring and first-line investigation: gathering diagnostic context when an alert fires, so the human starts from a briefing rather than a blank screen.",
  ],

  lifeApplications: [
    "Understanding what the 'agent' features in tools you use actually do, and specifically what permissions you've granted them.",
    "Judging autonomy claims critically. 'Fully autonomous' usually means 'autonomous within a narrow scope with a person watching', which is fine but different.",
    "Applying the same reasoning to your own delegation: irreversible decisions warrant a checkpoint, reversible ones don't, and the distinction is more useful than seniority.",
    "Recognising compounding error in any multi-step plan you make. Ten steps that each usually work is not a plan that usually works.",
  ],

  exercises: [
    {
      title: "One tool, badly called",
      brief:
        "Give a model a single tool with a strict schema. Run twenty varied requests and count how often the arguments are malformed. Improve the tool description and re-measure.",
      success: "A measured reduction in malformed calls from description changes alone.",
      time: "3 hours",
    },
    {
      title: "Compound the error yourself",
      brief:
        "Measure your agent's per-step success rate, then predict end-to-end success for a five- and ten-step task. Run both and compare against the prediction.",
      success: "Your predicted and observed end-to-end rates are in the same range.",
      time: "4 hours",
    },
    {
      title: "Break the guardrail",
      brief:
        "Put a constraint in the prompt only. Then instruct the agent, in various ways, to violate it. Count successes. Move the constraint to code and repeat.",
      success: "The prompt-only constraint fails at least once; the code constraint never does.",
      time: "3 hours",
    },
    {
      title: "The injection test",
      brief:
        "Feed your agent a document containing instructions ('ignore previous instructions and…'). See whether it complies. Then add delimiting, labelling and tool restriction, and retry.",
      success: "Compliance drops to zero across several phrasings.",
      time: "3–4 hours",
    },
    {
      title: "Agent versus workflow",
      brief:
        "Implement the same task as an autonomous agent and as a fixed sequence with model steps. Compare end-to-end success, cost and latency on the same twenty scenarios.",
      success: "A data-backed decision about whether autonomy is earning its cost here.",
      time: "8–10 hours",
    },
  ],

  checklist: [
    "Every iteration is logged with prompt, reasoning, tool, arguments and result",
    "Hard limits exist on steps, tokens and spend, enforced in code",
    "Every constraint that matters lives in code, not in the prompt",
    "Repeated identical actions are detected and interrupted",
    "Tool errors are informative enough for the model to correct",
    "The goal and constraints are re-stated at the end of every prompt",
    "Completed steps are summarised rather than carried forward raw",
    "Human approval is required before every irreversible action",
    "Tool permissions are the narrowest that accomplish the task",
    "Untrusted content is delimited, labelled as data, and handled with restricted tools",
    "Evaluation measures end-to-end task completion, not step accuracy",
    "A fixed-workflow alternative was built and compared",
  ],

  faqs: [
    {
      q: "What's the difference between an agent and a chatbot?",
      a: "A chatbot produces text. An agent can call tools, observe the results, and decide what to do next — so it can affect systems outside the conversation. The difference is consequential rather than cosmetic.",
    },
    {
      q: "Are agents reliable enough for production?",
      a: "For bounded tasks with short chains, external guardrails and human approval at irreversible points, yes — many are running usefully today. For long unattended autonomy over consequential actions, generally not, because per-step error compounds.",
    },
    {
      q: "How many steps can an agent handle?",
      a: "Fewer than you'd like. Multiply your per-step reliability across the chain and the answer becomes uncomfortable quickly. Design for the shortest chain that does the job, with validation between stages.",
    },
    {
      q: "Should I use a framework or build it myself?",
      a: "Build a simple loop yourself first. It's not much code and you'll understand what the framework is doing. Adopt a framework when you need tracing, retries and orchestration you'd otherwise reimplement.",
    },
    {
      q: "What is prompt injection and how worried should I be?",
      a: "It's untrusted content containing instructions the agent follows. If your agent processes web pages, emails or uploads and can also take actions, worry properly. This is the most serious open security problem in agent design and has no complete fix.",
    },
    {
      q: "Do multi-agent systems work better?",
      a: "Rarely, at the stage most teams are at. They add coordination failure and make tracing much harder. Exhaust single-agent and fixed-workflow designs first — they solve more problems than their reputation suggests.",
    },
    {
      q: "How do I stop an agent going in circles?",
      a: "Hard step limits, detection of repeated identical actions, and requiring a different approach after a failure. Prompt instructions to 'avoid repeating yourself' are not reliable, because the model has no memory of the loop beyond its context.",
    },
  ],

  tools: [
    { name: "LangGraph", what: "Stateful, branching agent workflows with explicit control over the loop. Good when you want structure rather than open-ended autonomy.", cost: "Free", url: "https://langchain-ai.github.io/langgraph/" },
    { name: "LangSmith", what: "Tracing for agent runs: see every prompt, tool call and result. Close to essential for debugging.", cost: "Freemium", url: "https://smith.langchain.com" },
    { name: "Model provider SDKs", what: "Native tool-calling from OpenAI, Anthropic and others. Often all you need, and worth starting here.", cost: "Paid" },
    { name: "Pydantic", what: "Strict schema validation for tool arguments and outputs. Catches malformed calls before they execute.", cost: "Free", url: "https://docs.pydantic.dev" },
    { name: "OpenTelemetry", what: "Standard tracing, useful when agent steps span several services.", cost: "Free", url: "https://opentelemetry.io" },
  ],

  resources: [
    { title: "Building Effective Agents — Anthropic", kind: "Docs", note: "Unusually sober vendor guidance, including the argument that most tasks don't need an agent.", url: "https://www.anthropic.com/research/building-effective-agents" },
    { title: "Lost in the Middle", kind: "Paper", note: "Why accumulated agent context degrades attention to your goal and constraints.", url: "https://arxiv.org/abs/2307.03172" },
    { title: "OWASP Top 10 for LLM Applications", kind: "Docs", note: "Prompt injection and agent-specific risks, written for people shipping to real users.", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
    { title: "ReAct: Synergizing Reasoning and Acting in Language Models", kind: "Paper", note: "The paper behind the reason-then-act loop most agents use.", url: "https://arxiv.org/abs/2210.03629" },
  ],

  internalLinks: [
    { slug: "building-your-first-ai-agent", anchor: "build one yourself in about forty lines", context: "In the introduction" },
    { slug: "designing-agent-tools", anchor: "designing the tool surface properly", context: "In the tools concept" },
    { slug: "how-large-language-models-work", anchor: "the model underneath the agent", context: "In the introduction" },
    { slug: "prompt-engineering-fundamentals", anchor: "writing the prompts that drive the loop", context: "In the reasoning concept" },
    { slug: "evaluating-ai-systems", anchor: "evaluating end-to-end rather than per step", context: "In the evaluation learning path step" },
  ],

  relatedGuides: [
    "building-your-first-ai-agent",
    "designing-agent-tools",
    "evaluating-ai-systems",
  ],

  conclusion: [
    "Before building one, spend a day implementing your task as a fixed workflow with model calls at specific points. If it performs comparably — and it often does — you've saved yourself a category of problem. If it doesn't, you now know exactly what the autonomy is buying.",
  ],

  cta: {
    headline: "Have a process that might suit an agent?",
    body:
      "Most don't, and we'd rather say so early than build one. Describe the workflow and we'll tell you whether it needs an agent, a script, or nothing.",
    label: "Get an honest read on it",
    href: "/contact",
  },
};

export default guide;
