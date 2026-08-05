import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "building-agents-with-langchain",
  seoTitle: "Building Agents with LangChain: A Practical Guide",
  metaDescription:
    "How to build a working LangChain agent with create_agent and Claude — tools, structured output, streaming and the abstractions worth understanding.",
  title: "Building Agents with LangChain",
  keywords: [
    "langchain agent tutorial",
    "create_agent langchain",
    "langchain anthropic",
    "langchain tools python",
    "langchain agent example",
    "chatanthropic",
  ],
  category: "artificial-intelligence",
  level: "Intermediate",
  updated: "2026-08-04",
  author: EHTIJAD_ALI,
  readingTime: 12,

  intro: [
    "LangChain has a reputation problem that's partly deserved and partly out of date. The early versions buried a simple loop under several layers of abstraction, and a generation of developers concluded the whole thing was overhead. The modern `create_agent` interface is much closer to the metal, and the parts that genuinely earn their place — streaming, structured output, the integration surface — are now easier to reach.",
    "The honest framing: LangChain is worth using when you want the ecosystem. Dozens of model providers behind one interface, hundreds of tool integrations, and tracing that works out of the box. It is not worth using to save yourself the forty lines of an agent loop, because that loop is not the hard part.",
    "This guide assumes you've written a raw agent loop and know what a tool call is. If not, build one first — LangChain makes far more sense when you can see what it's doing on your behalf rather than taking it on faith.",
  ],

  whyItMatters: [
    "The integration surface is the real argument. Swapping model providers is a one-line change. Connecting a vector store, a SQL database, or a search API means importing something rather than writing a client. For a team that needs to move fast across several backends, that's genuine leverage.",
    "It also matters because LangChain is what a large share of production LLM code is written in. Whether or not you'd choose it fresh, you will read it, inherit it, and be asked to debug it — and that's much easier if you understand which parts are doing work and which are ceremony.",
    "And knowing it well tells you when to leave. The clearest signal that you've outgrown a framework is being able to name exactly which of its abstractions you're fighting. Without that, framework changes are cargo-culting in a different direction.",
  ],

  coreConcepts: [
    {
      term: "`create_agent` is the current entry point",
      explain:
        "The modern API is `from langchain.agents import create_agent`. You pass a model and a list of tools, and it returns a runnable that handles the tool-execution loop for you.",
      detail:
        "Older tutorials show `initialize_agent`, `AgentExecutor`, or `create_tool_calling_agent` from `langchain-classic`. Those still exist, but new code should use `create_agent` — a great deal of published LangChain material predates it.",
    },
    {
      term: "The model wrapper is the portability layer",
      explain:
        "`ChatAnthropic` from `langchain-anthropic` wraps the provider's API in LangChain's common interface. Every provider has an equivalent, and they're interchangeable at the call site.",
      detail:
        "This is the abstraction that actually pays for itself. Swapping a model provider means changing one import and one constructor rather than rewriting your request handling.",
    },
    {
      term: "The `@tool` decorator derives the schema",
      explain:
        "Decorate a Python function with `@tool` and LangChain builds the JSON Schema from its type hints and docstring. Your docstring becomes the tool description the model reads.",
      detail:
        "That makes the docstring load-bearing rather than documentation. A vague docstring produces a vague tool description and measurably worse call accuracy — same lever as writing schemas by hand, just less visible.",
    },
    {
      term: "Everything is a Runnable",
      explain:
        "LangChain's core abstraction is the Runnable — anything with `.invoke()`, `.stream()` and `.batch()`. Models, tools, prompts and agents all implement it, which is why they compose.",
      detail:
        "This is the concept worth learning properly. Once it clicks, most of the library stops looking like unrelated classes and starts looking like one interface with many implementations.",
    },
    {
      term: "Messages in, messages out",
      explain:
        "`create_agent` agents take `{\"messages\": [...]}` and return the same shape with the conversation appended. Multi-turn means passing the accumulated list back in.",
      detail:
        "There's no hidden session state. If you want persistence across requests, you store the message list yourself or move to LangGraph's checkpointing.",
    },
    {
      term: "Structured output is a first-class option",
      explain:
        "Rather than parsing the agent's prose, you can specify a response format and get validated structured data back — using the provider's native structured-output support where it exists.",
      detail:
        "This is usually the right answer when an agent's result feeds another system. Prose is unparseable and will break your pipeline eventually.",
    },
    {
      term: "Tracing is where the value concentrates",
      explain:
        "LangSmith integration means every model call, tool invocation and intermediate step is recorded without instrumentation code. For agent debugging this is close to essential.",
      detail:
        "If you take one thing from the ecosystem, take this. Agent runs are hard to reason about from the outside, and a trace turns guesswork into reading.",
    },
  ],

  codeExamples: [
    {
      title: "A minimal LangChain agent",
      language: "python",
      intro:
        "Install `langchain`, `langchain-anthropic`, then set `ANTHROPIC_API_KEY`. This is the whole thing — the tool loop is handled inside `create_agent`.",
      code: `from langchain.agents import create_agent
from langchain_anthropic import ChatAnthropic
from langchain_core.tools import tool


@tool
def get_weather(city: str) -> str:
    """Get the current weather for a city.

    Call this whenever the user asks about current conditions or
    temperature. Do not call it for forecasts more than a day ahead.

    Args:
        city: City name, e.g. 'Manchester' or 'Tokyo'
    """
    fake = {"Lisbon": "19C, clear", "Manchester": "11C, raining"}
    return fake.get(city, f"No data for {city}")


model = ChatAnthropic(model="claude-opus-5", max_tokens=16000)

agent = create_agent(model=model, tools=[get_weather])

result = agent.invoke({
    "messages": [{"role": "user", "content": "Compare Lisbon and Manchester."}]
})

# The result contains the full conversation; the last message is the answer.
print(result["messages"][-1].content)`,
      note:
        "The docstring is the tool description the model actually reads — including the 'do not call it for forecasts' line. Treat it as prompt content, not as documentation for your colleagues.",
    },
    {
      title: "Seeing what the agent actually did",
      language: "python",
      intro:
        "The default output hides the tool calls. Iterate the returned messages to get the trace — this is the first thing to reach for when an agent misbehaves.",
      code: `result = agent.invoke({
    "messages": [{"role": "user", "content": "Compare Lisbon and Manchester."}]
})

for message in result["messages"]:
    kind = message.__class__.__name__      # HumanMessage / AIMessage / ToolMessage

    # Tool calls live on the AI message, not in the text.
    calls = getattr(message, "tool_calls", None)
    if calls:
        for call in calls:
            print(f"[{kind}] CALL {call['name']}({call['args']})")
    elif kind == "ToolMessage":
        print(f"[{kind}] RESULT {message.content[:120]}")
    elif message.content:
        print(f"[{kind}] {message.content[:200]}")`,
      note:
        "`tool_calls` on an `AIMessage` is the LangChain equivalent of the raw `tool_use` block. If you've built an agent by hand, this is the moment the abstraction becomes legible.",
    },
    {
      title: "Streaming and structured output",
      language: "python",
      intro:
        "Two things the framework genuinely saves you writing. Streaming gives responsive UX on long runs; structured output makes the result safe to feed into another system.",
      code: `from pydantic import BaseModel, Field


class WeatherComparison(BaseModel):
    """Structured result so downstream code never parses prose."""
    warmer_city: str = Field(description="Which city is warmer")
    difference_c: float = Field(description="Temperature difference in Celsius")
    umbrella_needed: bool = Field(description="True if either city has rain")


structured_agent = create_agent(
    model=model,
    tools=[get_weather],
    response_format=WeatherComparison,
)

result = structured_agent.invoke({
    "messages": [{"role": "user", "content": "Compare Lisbon and Manchester."}]
})
answer: WeatherComparison = result["structured_response"]
print(answer.warmer_city, answer.difference_c, answer.umbrella_needed)


# Streaming: yields incremental state as the agent works.
for chunk in agent.stream(
    {"messages": [{"role": "user", "content": "Weather in Lisbon?"}]},
    stream_mode="values",
):
    last = chunk["messages"][-1]
    if last.content:
        print(last.content, end="", flush=True)`,
      note:
        "`response_format` uses the provider's native structured-output support where available, so the schema is enforced rather than requested. That's a stronger guarantee than prompting for JSON and parsing it.",
    },
  ],

  learningPath: [
    {
      title: "Build the raw loop first",
      body: "If you haven't written an agent loop by hand, do that before touching LangChain. The framework is far easier to evaluate when you can see which parts replace code you'd otherwise write.",
      effort: "2–3 hours",
      outcome: "You can name what create_agent is doing for you.",
    },
    {
      title: "Get the minimal agent running",
      body: "Install, set your key, run the first example. Then break it: remove the docstring and see how call accuracy changes, pass a bad argument type, remove the tool entirely.",
      effort: "1 hour",
      outcome: "A working agent and a feel for what the decorator derives.",
    },
    {
      title: "Read the message trace",
      body: "Run the second example on a task needing several tool calls. Map each message type onto what you know from the raw loop — AIMessage with tool_calls is the request, ToolMessage is the result.",
      effort: "1 hour",
      outcome: "The abstraction stops being opaque.",
    },
    {
      title: "Add structured output",
      body: "Define a Pydantic model for your agent's result and switch to `response_format`. Notice how much downstream parsing code disappears.",
      effort: "1–2 hours",
      outcome: "An agent whose output another system can consume safely.",
    },
    {
      title: "Wire up tracing",
      body: "Set your LangSmith environment variables and re-run. Explore a trace of a multi-step run. This is the single highest-value thing the ecosystem offers.",
      effort: "1 hour",
      outcome: "You can see every call in a run without adding logging.",
    },
    {
      title: "Swap the model provider",
      body: "Change `ChatAnthropic` for another provider's wrapper and re-run your evaluation set. Note what changed and what didn't — this is the portability claim being tested rather than assumed.",
      effort: "1–2 hours",
      outcome: "Evidence about how portable your agent actually is.",
    },
    {
      title: "Decide whether you need LangGraph",
      body: "If your control flow has branches, cycles, or needs to persist across requests, `create_agent` will start to feel constraining. That's the signal to look at LangGraph rather than fight it.",
      effort: "2 hours",
      outcome: "A reasoned decision instead of a default.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Why self-verification inside an agent is not a check.",
      walkthrough:
        "A lawyer used ChatGPT to research precedent, filed a brief citing six non-existent cases, and — when challenged — asked the model whether the cases were real. It confirmed they were.",
      result:
        "The court sanctioned the lawyers $5,000. The lesson applies directly to framework agents: a verification tool that just asks the model again is theatre. Verification must hit an independent source or a deterministic check, whatever framework wraps the loop.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "illustration",
      scenario: "The tutorial that doesn't run.",
      walkthrough:
        "A recognisable frustration with this ecosystem specifically. You follow a well-written LangChain tutorial and every import fails. The tutorial isn't wrong — it was written against `initialize_agent` or `AgentExecutor`, which the library has since moved past. LangChain has changed its agent API more than once, and search results don't sort by recency.",
      result:
        "Check the publication date before following any LangChain material, and prefer the official docs over blog posts. When an import fails, search the current reference for the concept rather than the class name — the idea usually survived the rename.",
    },
    {
      kind: "illustration",
      scenario: "Reaching for the framework to avoid forty lines.",
      walkthrough:
        "A team adopts LangChain for a single-tool agent with one model provider. They now have a dependency tree, an abstraction to learn, and a version-upgrade obligation — in exchange for not writing a loop they could have written in an afternoon and fully understood.",
      result:
        "The framework earns its place through the ecosystem: many providers, many integrations, tracing, streaming, structured output. If you're using one model and one tool, that value isn't there yet. Adopt it when you feel the pull of the integrations, not pre-emptively.",
    },
  ],

  mistakes: [
    {
      mistake: "Following tutorials written for the old agent API",
      why: "LangChain's agent interface has changed more than once. `initialize_agent` and bare `AgentExecutor` patterns are widespread online and no longer the recommended path.",
      fix: "Use `create_agent` from `langchain.agents` in new code, and check the date on any tutorial before following it.",
    },
    {
      mistake: "Treating tool docstrings as documentation",
      why: "The `@tool` decorator turns the docstring into the model-facing description. A vague one produces exactly the vague tool description you'd have written by hand.",
      fix: "Write docstrings that state when to call the tool, not just what it does, and describe every argument.",
    },
    {
      mistake: "Adopting the framework for a trivial agent",
      why: "For one model and one tool, the abstraction and dependency cost exceeds the loop it replaces — and you lose visibility into what's happening.",
      fix: "Use the raw SDK until you actually want the integrations, tracing or provider portability. Then adopt deliberately.",
    },
    {
      mistake: "Expecting hidden conversation state",
      why: "`create_agent` agents are stateless between invocations. Passing only the new message loses the history, and the agent behaves as though the conversation never happened.",
      fix: "Accumulate the returned `messages` list and pass it back, or move to LangGraph checkpointing for persistence.",
    },
    {
      mistake: "Parsing the agent's prose output",
      why: "Free-form text varies between runs, so a regex that works today breaks next week on a rephrasing.",
      fix: "Use `response_format` with a Pydantic model. The schema is enforced by the provider rather than requested in a prompt.",
    },
    {
      mistake: "Debugging without tracing",
      why: "Multi-step agent runs are close to impossible to reason about from the final output alone, and print-statement debugging inside a framework is painful.",
      fix: "Turn on LangSmith from the start. It's the ecosystem feature with the clearest return.",
    },
  ],

  bestPractices: [
    "Use `create_agent` for new code and treat older agent constructors as legacy.",
    "Write tool docstrings as model-facing prompts — trigger conditions and described arguments.",
    "Pin your LangChain versions. This ecosystem moves fast and minor upgrades have broken agent code before.",
    "Enable LangSmith tracing before you need it, not during an incident.",
    "Use `response_format` whenever the result feeds another system.",
    "Accumulate and pass back the message list explicitly, so you can see where state lives.",
    "Keep an evaluation set and re-run it after every dependency upgrade.",
    "Set a recursion or step limit — the framework will loop just as happily as a hand-written agent.",
  ],

  proTips: [
    "Print the message trace during development, always. `create_agent` hides the loop, and the trace is how you get it back without giving up the framework.",
    "When an import fails after an upgrade, search the current API reference for the *concept* rather than the class name. The idea almost always survived the rename.",
    "Test provider portability before you rely on it. Swapping model wrappers works, but tool-calling behaviour and prompt sensitivity differ enough to matter — run your evaluation set on both.",
    "Prefer the official docs over blog posts for this library specifically. The volume of outdated third-party material is unusually high.",
    "If you find yourself fighting the framework to express control flow, that's a LangGraph signal rather than a reason to abandon the ecosystem.",
  ],

  businessApplications: [
    "Multi-provider deployments where model choice may change on cost or availability, and you don't want a rewrite.",
    "Retrieval-backed assistants, where the vector store and loader integrations remove a large amount of glue code.",
    "Internal tooling that needs to connect to many existing systems, which is where the integration catalogue pays.",
    "Teams already running LangChain elsewhere, where consistency is worth more than a marginally leaner implementation.",
    "Prototyping: the fastest path from idea to a working agent with tracing, before deciding what to build properly.",
  ],

  lifeApplications: [
    "Learning to read framework source rather than only its documentation — a transferable skill this library rewards.",
    "Evaluating any tool by asking what it replaces and whether you'd rather own that code.",
    "Recognising when a dependency has stopped earning its complexity, which is a judgement most people make too late.",
  ],

  exercises: [
    {
      title: "Loop versus framework",
      brief:
        "Implement the same two-tool agent twice — raw SDK loop and `create_agent`. Compare lines of code, and list what the framework handles that you'd have had to write.",
      success: "A written list of what the abstraction is actually buying.",
      time: "2–3 hours",
    },
    {
      title: "The docstring experiment",
      brief:
        "Run twenty varied requests with a vague tool docstring, then with one stating trigger conditions. Count correct, missed and spurious calls.",
      success: "Numbers showing the docstring is prompt content.",
      time: "1–2 hours",
    },
    {
      title: "Structured output conversion",
      brief:
        "Take an agent whose output you currently parse and convert it to `response_format` with a Pydantic model. Delete the parsing code.",
      success: "Downstream code that can't break on a rephrasing.",
      time: "1–2 hours",
    },
    {
      title: "Provider swap",
      brief:
        "Run your evaluation set on two model providers through the same agent code. Record where behaviour differs.",
      success: "An honest assessment of how portable your agent is.",
      time: "2 hours",
    },
  ],

  checklist: [
    "I'm using `create_agent`, not a legacy agent constructor",
    "Tool docstrings state when to call, and describe every argument",
    "Dependency versions are pinned",
    "LangSmith tracing is enabled",
    "Results that feed other systems use `response_format`",
    "Conversation state is accumulated and passed back explicitly",
    "A step or recursion limit is set",
    "An evaluation set exists and runs after every upgrade",
    "I can articulate what the framework is doing that I'd otherwise write",
  ],

  faqs: [
    {
      q: "Is LangChain still worth using?",
      a: "For the integration ecosystem, tracing and provider portability — yes. To avoid writing an agent loop — no, that loop is about forty lines and worth understanding. Adopt it for what it uniquely provides.",
    },
    {
      q: "What's the difference between LangChain and LangGraph?",
      a: "LangChain gives you `create_agent` and the integration surface for straightforward agents. LangGraph gives you explicit control over the loop — branching, cycles, persistence, human-in-the-loop. Start with LangChain and move when you need the control.",
    },
    {
      q: "Why do so many LangChain tutorials not work?",
      a: "The agent API has changed more than once, and a great deal of published material predates the current interface. Check publication dates and prefer the official documentation.",
    },
    {
      q: "Does the agent remember previous conversations?",
      a: "Not by itself. `create_agent` agents are stateless between calls — you accumulate the message list and pass it back, or use LangGraph's checkpointing for real persistence.",
    },
    {
      q: "Can I use it with any model provider?",
      a: "Broadly yes, via the provider-specific wrapper packages. Behaviour isn't identical across providers, though, so re-run your evaluation set after a swap rather than assuming parity.",
    },
    {
      q: "How do I stop it looping?",
      a: "Set a recursion limit on the agent. Frameworks don't remove the compounding-error problem — they wrap it, and an unbounded framework agent loops as readily as a hand-written one.",
    },
  ],

  tools: [
    { name: "langchain + langchain-anthropic", what: "The core library and the Claude integration. `pip install langchain langchain-anthropic`.", cost: "Free", url: "https://docs.langchain.com" },
    { name: "LangSmith", what: "Tracing and evaluation. The highest-return part of the ecosystem for agent work.", cost: "Freemium", url: "https://smith.langchain.com" },
    { name: "Pydantic", what: "Schema definitions for structured output and tool arguments.", cost: "Free", url: "https://docs.pydantic.dev" },
    { name: "LangGraph", what: "The next step when you need explicit control flow or persistence.", cost: "Free", url: "https://langchain-ai.github.io/langgraph/" },
  ],

  resources: [
    { title: "LangChain documentation", kind: "Docs", note: "The authoritative source. Given how much outdated third-party material exists, start and stay here.", url: "https://docs.langchain.com" },
    { title: "ChatAnthropic integration reference", kind: "Docs", note: "Current import paths, model configuration and provider-specific features.", url: "https://docs.langchain.com/oss/python/integrations/chat/anthropic" },
    { title: "Building Effective Agents — Anthropic", kind: "Docs", note: "Framework-agnostic, and clear that most tasks don't need an agent at all.", url: "https://www.anthropic.com/research/building-effective-agents" },
  ],

  internalLinks: [
    { slug: "building-your-first-ai-agent", anchor: "the raw loop this replaces", context: "In the introduction" },
    { slug: "choosing-an-agent-framework", anchor: "how it compares to the alternatives", context: "In the conclusion" },
    { slug: "designing-agent-tools", anchor: "writing tool descriptions that work", context: "In the @tool concept" },
  ],

  relatedGuides: [
    "building-your-first-ai-agent",
    "choosing-an-agent-framework",
    "building-agents-with-langgraph",
  ],

  conclusion: [
    "LangChain's modern agent interface is thin enough to be worth using and thick enough to be worth understanding. `create_agent` handles the loop, the `@tool` decorator derives your schemas, and the ecosystem gives you providers, integrations and tracing you'd otherwise build.",
    "The judgement call is what you're adopting it for. The integration surface and LangSmith are genuine leverage. Avoiding forty lines of loop code is not — and teams that adopt for that reason tend to end up with an abstraction they don't understand wrapped around a problem they hadn't yet felt.",
    "Build the raw loop first, then come back. Everything here reads differently once you can see what's underneath it.",
  ],

  cta: {
    headline: "Building on LangChain and hitting the limits?",
    body: "We design agentic systems with the guardrails, tracing and evaluation that frameworks leave to you.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
