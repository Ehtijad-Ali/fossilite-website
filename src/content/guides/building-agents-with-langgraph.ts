import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "building-agents-with-langgraph",
  seoTitle: "Building Agents with LangGraph: State, Cycles and Control",
  metaDescription:
    "LangGraph models agents as state machines — explicit control flow, checkpointed persistence and human-in-the-loop pauses. With runnable code.",
  title: "Building Agents with LangGraph",
  keywords: [
    "langgraph tutorial",
    "create_react_agent",
    "langgraph stategraph",
    "langgraph checkpointer",
    "human in the loop agent",
    "langgraph persistence",
  ],
  category: "artificial-intelligence",
  level: "Advanced",
  updated: "2026-08-05",
  author: EHTIJAD_ALI,
  readingTime: 13,

  intro: [
    "LangGraph exists because `create_agent` runs out of road. A prebuilt agent handles the tool loop and nothing else — the moment you need a branch, a retry with different behaviour, a pause for human approval, or state that survives a process restart, you're fighting the abstraction. LangGraph gives you the loop as an explicit graph you define.",
    "The mental model is a state machine, not a conversation or an org chart. You declare nodes (functions that transform state), edges (what runs next), and conditional edges (functions that decide). The agent loop that other frameworks hide becomes a cycle you drew on purpose.",
    "That explicitness is the trade. LangGraph is more verbose than `create_agent` and considerably more capable. This guide covers when the trade is worth making, the prebuilt shortcut for when it isn't, and the two features — checkpointed persistence and interrupts — that are the real reason to be here.",
  ],

  whyItMatters: [
    "Persistence is the feature most teams discover they need after committing to something else. A checkpointed graph can be resumed hours later, in a different process, from the exact step it stopped at. Retrofitting that onto a stateless agent means rebuilding it.",
    "Human-in-the-loop is the second. Real systems need a person to approve an irreversible action, and 'pause mid-run, wait for a decision that may arrive tomorrow, resume' is genuinely hard without checkpointing. LangGraph makes it a first-class operation rather than an architecture you invent.",
    "And the explicitness pays off in debugging. When an agent misbehaves in a framework that hides the loop, you're inferring control flow from a trace. When the control flow is a graph you wrote, you read it.",
  ],

  coreConcepts: [
    {
      term: "State is a typed dict the graph threads through",
      explain:
        "You define a state schema — usually a `TypedDict`. Every node receives the current state and returns a partial update, which is merged in. That merged object is the only thing flowing through the graph.",
      detail:
        "How updates merge is configurable per field. Messages typically append via a reducer; scalars overwrite. Getting the reducers right is most of what makes a graph behave sanely.",
    },
    {
      term: "Nodes are functions, edges are control flow",
      explain:
        "A node is a plain function from state to state-update. An edge says what runs next. A conditional edge is a function that reads state and returns the name of the next node.",
      detail:
        "The agent loop is a conditional edge pointing back at a previous node. That's the whole trick — cycles are legal, which is what separates this from a pipeline.",
    },
    {
      term: "`create_react_agent` is the prebuilt shortcut",
      explain:
        "`from langgraph.prebuilt import create_react_agent` gives you a working tool-calling agent graph in one call. Use it when you want LangGraph's persistence without hand-drawing the loop.",
      detail:
        "It's the right starting point for most projects. Drop to a hand-built `StateGraph` when you need control the prebuilt doesn't expose — extra nodes, custom routing, validation stages.",
    },
    {
      term: "Checkpointers make state durable",
      explain:
        "Compile the graph with a checkpointer and every step is saved. `MemorySaver` keeps it in RAM; production backends persist to Postgres, Redis or similar.",
      detail:
        "`MemorySaver` is for development only — state dies with the process. Shipping it is a common and quiet mistake, because everything works until the first restart.",
    },
    {
      term: "`thread_id` scopes a conversation",
      explain:
        "Every invocation carries `config={\"configurable\": {\"thread_id\": ...}}`. The checkpointer uses it to load and store state, so the same graph serves many independent conversations.",
      detail:
        "It's also a security boundary. If `thread_id` derives from user input rather than your session, one user can read another's conversation.",
    },
    {
      term: "Interrupts pause the graph",
      explain:
        "You can configure a graph to stop before or after specific nodes. It returns control to your code, you inspect or modify state, and resume later — possibly in a different process.",
      detail:
        "This is the human-approval mechanism. Because state is checkpointed, the pause can last as long as the approval takes.",
    },
    {
      term: "Cycles need explicit limits",
      explain:
        "A graph with a cycle can loop forever. LangGraph enforces a recursion limit, and you should set it deliberately rather than relying on the default.",
      detail:
        "Same compounding-error problem as any agent — the graph structure makes it visible, not absent.",
    },
  ],

  codeExamples: [
    {
      title: "The prebuilt agent with persistence",
      language: "python",
      intro:
        "Start here. This is a working tool-calling agent whose conversation survives across calls — the thing `create_agent` alone doesn't give you.",
      code: `from langchain_anthropic import ChatAnthropic
from langchain_core.tools import tool
from langgraph.prebuilt import create_react_agent
from langgraph.checkpoint.memory import MemorySaver

@tool
def get_weather(city: str) -> str:
    """Get current weather for a city.

    Call this whenever the user asks about current conditions.

    Args:
        city: City name, e.g. 'Lisbon'
    """
    return {"Lisbon": "19C, clear"}.get(city, f"No data for {city}")

model = ChatAnthropic(model="claude-opus-5", max_tokens=16000)

# MemorySaver is IN-PROCESS ONLY. State dies with the process — fine for
# development, wrong for production. Swap for a Postgres/Redis checkpointer.
checkpointer = MemorySaver()

agent = create_react_agent(model, [get_weather], checkpointer=checkpointer)

# thread_id scopes the conversation. Derive it from YOUR session, never from
# user-supplied input — it is the boundary between two users' histories.
config = {"configurable": {"thread_id": "user-123"}}

agent.invoke({"messages": [{"role": "user", "content": "Weather in Lisbon?"}]}, config)

# Second call: no history passed, but the agent remembers — the checkpointer
# loaded it. This is the whole point of LangGraph over a stateless agent.
result = agent.invoke(
    {"messages": [{"role": "user", "content": "And is that warm for April?"}]},
    config,
)
print(result["messages"][-1].content)`,
      note:
        "The second call passes only the new message. Everything before it comes from the checkpointer, keyed by `thread_id` — which is why that value must come from your session and never from the request body.",
    },
    {
      title: "A hand-built graph with an explicit loop",
      language: "python",
      intro:
        "When the prebuilt shape doesn't fit. Nodes, edges, and a conditional edge that closes the cycle — the agent loop drawn on purpose.",
      code: `from typing import Annotated, TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode

class State(TypedDict):
    # add_messages is a reducer: node updates APPEND rather than overwrite.
    # Without it, each node would replace the whole history.
    messages: Annotated[list, add_messages]
    step_count: int

tools = [get_weather]
model_with_tools = model.bind_tools(tools)

def call_model(state: State) -> dict:
    response = model_with_tools.invoke(state["messages"])
    return {"messages": [response], "step_count": state.get("step_count", 0) + 1}

def should_continue(state: State) -> str:
    """Conditional edge: this function IS the control flow."""
    if state.get("step_count", 0) >= 10:
        return END                                   # hard ceiling, always
    last = state["messages"][-1]
    return "tools" if getattr(last, "tool_calls", None) else END

builder = StateGraph(State)
builder.add_node("model", call_model)
builder.add_node("tools", ToolNode(tools))

builder.add_edge(START, "model")
builder.add_conditional_edges("model", should_continue, ["tools", END])
builder.add_edge("tools", "model")                   # the cycle

graph = builder.compile(checkpointer=checkpointer)

graph.invoke(
    {"messages": [{"role": "user", "content": "Weather in Lisbon?"}], "step_count": 0},
    config={"configurable": {"thread_id": "user-123"}, "recursion_limit": 25},
)`,
      note:
        "`should_continue` checks the step count before checking for tool calls. Putting the ceiling first means a runaway loop stops even when the model keeps requesting tools — the order matters.",
    },
    {
      title: "Human approval with an interrupt",
      language: "python",
      intro:
        "The feature that's genuinely hard without checkpointing: pause before an irreversible action, wait for a human, resume — possibly in a different process, hours later.",
      code: `graph = builder.compile(
    checkpointer=checkpointer,
    interrupt_before=["tools"],     # stop before ANY tool executes
)

config = {"configurable": {"thread_id": "user-123"}}

# Run until the interrupt. This returns; it does not block waiting.
graph.invoke({"messages": [{"role": "user", "content": "Delete order 4412."}]}, config)

# Inspect what the agent is about to do. State is durable, so this inspection
# can happen in a web handler minutes or hours later.
snapshot = graph.get_state(config)
pending = snapshot.values["messages"][-1].tool_calls
for call in pending:
    print(f"Pending: {call['name']}({call['args']})")

if approved(pending):
    # Passing None means "resume from the checkpoint", not "start fresh".
    result = graph.invoke(None, config)
    print(result["messages"][-1].content)
else:
    # Rejecting: write the refusal into state so the model can adapt rather
    # than silently retrying the same action.
    graph.update_state(
        config,
        {"messages": [{"role": "user", "content": "The user declined that action."}]},
    )`,
      note:
        "`graph.invoke(None, config)` is the resume idiom and it's easy to misread — `None` means continue from the checkpoint, not start a new run. Passing a fresh input instead would append to state rather than resuming.",
    },
  ],

  learningPath: [
    {
      title: "Start with the prebuilt agent",
      body: "Get `create_react_agent` running with a checkpointer. Make two calls on the same `thread_id` and confirm the second remembers the first. That single behaviour is most of why you're here.",
      effort: "1–2 hours",
      outcome: "A persistent agent, without hand-drawing a graph.",
    },
    {
      title: "Change the thread_id and watch state split",
      body: "Run the same agent with two different thread ids. Confirm the conversations are fully isolated, then consider what happens if that value came from a request parameter.",
      effort: "30 minutes",
      outcome: "You understand thread_id as a security boundary, not just a key.",
    },
    {
      title: "Rebuild it as an explicit graph",
      body: "Implement the same agent with `StateGraph`. Draw the nodes and edges on paper first — the graph is the design, and writing it without a sketch is where people get lost.",
      effort: "3–4 hours",
      outcome: "A hand-built loop you can extend.",
    },
    {
      title: "Get the reducers right",
      body: "Remove `add_messages` from your state annotation and watch history vanish on each node. Then put it back. Reducers are the single most confusing part of LangGraph and this makes them concrete.",
      effort: "1 hour",
      outcome: "You know what a reducer does because you've seen its absence.",
    },
    {
      title: "Add an interrupt",
      body: "Pause before tool execution, inspect the pending call, and resume. Then try resuming from a different process to confirm the state is genuinely durable.",
      effort: "2–3 hours",
      outcome: "A working human-approval gate.",
    },
    {
      title: "Swap to a real checkpointer",
      body: "Replace `MemorySaver` with a Postgres-backed checkpointer. Restart the process mid-conversation and resume. This is the step that makes it production-shaped.",
      effort: "2–4 hours",
      outcome: "State that survives a deploy.",
    },
    {
      title: "Add a node the prebuilt couldn't",
      body: "Insert a validation node between the model and the tools, or a summarisation node that fires when the message count grows. This is what you came to LangGraph for.",
      effort: "3–4 hours",
      outcome: "Control flow the prebuilt agent cannot express.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Why a long-running graph drifts from its goal.",
      walkthrough:
        "Liu and colleagues varied where relevant information sat in a model's context and measured accuracy. Performance peaked at the start and end and degraded in the middle, holding even for long-context models.",
      result:
        "A checkpointed graph accumulates messages indefinitely by design — that's what persistence means. Without a summarisation node, the original instructions migrate toward the least-attended region as the thread grows. LangGraph makes the fix expressible: a conditional edge to a compaction node when message count crosses a threshold.",
      source: {
        label: "Liu et al. (2023) — Lost in the Middle: How Language Models Use Long Contexts, arXiv:2307.03172",
        url: "https://arxiv.org/abs/2307.03172",
      },
    },
    {
      kind: "illustration",
      scenario: "MemorySaver in production.",
      walkthrough:
        "A recognisable outcome. Development goes smoothly with `MemorySaver`, the agent remembers conversations, everything works. It ships. Then the service restarts on a deploy and every in-flight conversation is gone — including any run paused at an approval interrupt, which now cannot be resumed because the checkpoint it referenced was in the memory of a dead process.",
      result:
        "`MemorySaver` is a development tool and the name doesn't say so loudly enough. Anything that will restart needs a durable backend, and the test is simple: kill the process mid-conversation and try to resume.",
    },
    {
      kind: "illustration",
      scenario: "Reaching for a graph when a chain would do.",
      walkthrough:
        "A team adopts LangGraph for a task that is genuinely linear — retrieve, summarise, format. They write nodes, edges and a state schema for a sequence that has no branches and no cycles. The graph works and every future reader has to reconstruct a pipeline from a state machine.",
      result:
        "LangGraph earns its verbosity through cycles, branching, persistence and interrupts. If your flow has none of those, a plain function calling three things in order is clearer, and `create_agent` covers the simple tool loop. Adopt the graph when you can name which of its four features you need.",
    },
  ],

  mistakes: [
    {
      mistake: "Shipping `MemorySaver`",
      why: "It stores checkpoints in process memory. Everything works until the first restart, and then every conversation and every paused approval is unrecoverable.",
      fix: "Use a durable checkpointer in anything that isn't your laptop. Test by killing the process mid-conversation and resuming.",
    },
    {
      mistake: "Deriving `thread_id` from user input",
      why: "The checkpointer loads whatever state that key points at. If a user can set it, they can read another user's conversation.",
      fix: "Derive it from your authenticated session, and treat it with the same care as any other tenant identifier.",
    },
    {
      mistake: "Forgetting reducers on list state",
      why: "Without `add_messages` or an equivalent, a node's return value replaces the field rather than appending. History silently disappears and the agent behaves as though every turn were the first.",
      fix: "Annotate accumulating fields with a reducer. Remove one deliberately once to see the failure — it's unmistakable afterwards.",
    },
    {
      mistake: "Relying on the default recursion limit",
      why: "A cycle with no exit condition runs until the limit, and the default may be far more steps than your task should ever need.",
      fix: "Set `recursion_limit` explicitly and add a step counter to your state with a hard check in the conditional edge.",
    },
    {
      mistake: "Misreading the resume idiom",
      why: "`graph.invoke(None, config)` resumes from a checkpoint. Passing a fresh input instead appends to state and re-enters at the start, which looks like the agent ignoring the interrupt.",
      fix: "Resume with `None`. Use `update_state` when you need to inject something before resuming.",
    },
    {
      mistake: "Building a graph for a linear flow",
      why: "Nodes, edges and a state schema for a sequence with no branches is ceremony. Every reader now reconstructs a pipeline from a state machine.",
      fix: "Use LangGraph when you need cycles, branching, persistence or interrupts. Otherwise a function calling three things in order is clearer.",
    },
    {
      mistake: "Letting a persistent thread grow forever",
      why: "Persistence means the message list accumulates by design. Cost rises per turn and the original instructions drift into the least-attended part of the context.",
      fix: "Add a summarisation node behind a conditional edge on message count. The graph structure is what makes this easy to express.",
    },
  ],

  bestPractices: [
    "Start with `create_react_agent` and drop to `StateGraph` only when you can name the control flow it can't express.",
    "Sketch the graph before writing it. Nodes and edges on paper prevent most of the confusion.",
    "Annotate every accumulating state field with a reducer.",
    "Set `recursion_limit` explicitly and keep a step counter in state as a second ceiling.",
    "Check the step ceiling before checking for tool calls in your conditional edge.",
    "Use a durable checkpointer anywhere the process can restart.",
    "Derive `thread_id` from your session, never from request input.",
    "Add a summarisation node for any long-lived thread.",
    "Use interrupts for irreversible actions rather than approval logic inside a tool.",
    "Test resumption across a process restart, not just within one run.",
  ],

  proTips: [
    "Draw the graph before you write it. LangGraph code is hard to read back into a mental model, and five minutes with a pen prevents an afternoon of confusion.",
    "Remove a reducer on purpose once, early. Watching history vanish teaches what reducers do faster than any explanation.",
    "Put the step-count check first in your conditional edge. A ceiling that only applies when the model stops requesting tools isn't a ceiling.",
    "Use `graph.get_state(config)` liberally during development. Inspecting the checkpoint is the LangGraph equivalent of printing the message trace.",
    "Interrupt before tools rather than gating inside them. The state is durable at that point, so the approval can take as long as it needs.",
    "When migrating from `create_agent`, port to `create_react_agent` first and add the checkpointer, before rewriting anything as a graph. Two smaller steps beat one large one.",
  ],

  businessApplications: [
    "Approval workflows where an agent prepares an action and a human authorises it, potentially hours later.",
    "Long-running processes that must survive deploys, restarts and scaling events.",
    "Multi-session assistants where a user returns to a conversation days later and expects continuity.",
    "Compliance-sensitive automation where every state transition is checkpointed and auditable.",
    "Complex routing — triage flows where the path depends on classification, with retry branches for ambiguous cases.",
    "Anything where a wrong action is expensive and a pause is cheap.",
  ],

  exercises: [
    {
      title: "Persistence across a restart",
      brief:
        "Run a conversation with a durable checkpointer. Kill the process. Start it again and continue the same `thread_id`. Confirm the history is intact.",
      success: "A conversation that survived a process death.",
      time: "2 hours",
    },
    {
      title: "Remove the reducer",
      brief:
        "Drop `add_messages` from your state annotation. Run a multi-turn conversation and observe the failure. Restore it.",
      success: "You can describe exactly what a reducer does.",
      time: "45 minutes",
    },
    {
      title: "Build the approval gate",
      brief:
        "Interrupt before tools, inspect the pending call, approve one and reject another. On rejection, write the refusal into state and confirm the agent adapts.",
      success: "Both paths work and the rejection doesn't cause a retry loop.",
      time: "2–3 hours",
    },
    {
      title: "Add a summarisation node",
      brief:
        "Add a conditional edge that routes to a compaction node when messages exceed a threshold. Run a long conversation and watch token usage per turn flatten.",
      success: "A cost curve that stops climbing.",
      time: "3–4 hours",
    },
  ],

  checklist: [
    "Started with `create_react_agent` before hand-building a graph",
    "The graph was sketched before it was written",
    "Every accumulating state field has a reducer",
    "`recursion_limit` is set explicitly",
    "A step counter exists in state and is checked first in the conditional edge",
    "The checkpointer is durable, not `MemorySaver`",
    "`thread_id` derives from the authenticated session",
    "Long-lived threads have a summarisation path",
    "Irreversible actions are behind an interrupt, not tool-internal logic",
    "Resumption has been tested across a process restart",
  ],

  faqs: [
    {
      q: "LangChain or LangGraph?",
      a: "LangChain's `create_agent` for a straightforward tool loop. LangGraph when you need cycles you control, branching, durable state or human-in-the-loop pauses. Start with the former and move when you can name which of those you need.",
    },
    {
      q: "What does a checkpointer actually do?",
      a: "It saves graph state after every step, keyed by `thread_id`. That's what lets a conversation resume in a different process, and what makes pausing for human approval possible at all.",
    },
    {
      q: "Can I use `MemorySaver` in production?",
      a: "No. It stores state in process memory, so a restart loses every conversation and every paused approval. Use a Postgres or Redis-backed checkpointer for anything that isn't local development.",
    },
    {
      q: "What is a reducer and do I need one?",
      a: "It defines how a node's update merges into existing state. For message lists you need one — `add_messages` — or each node replaces the whole history instead of appending. Scalars usually want the default overwrite.",
    },
    {
      q: "How do I stop an infinite loop?",
      a: "Set `recursion_limit` explicitly and keep a step counter in state, checked before the tool-call check in your conditional edge. The graph makes cycles visible but doesn't prevent them.",
    },
    {
      q: "How does human-in-the-loop work?",
      a: "Compile with `interrupt_before` on the node you want to gate. The graph stops and returns; you inspect state, decide, then resume with `graph.invoke(None, config)`. Because state is checkpointed, the gap can be arbitrarily long.",
    },
  ],

  tools: [
    { name: "langgraph", what: "The framework. `pip install langgraph langchain-anthropic`.", cost: "Free", url: "https://langchain-ai.github.io/langgraph/" },
    { name: "langgraph-checkpoint-postgres", what: "Durable checkpointing. The production replacement for MemorySaver.", cost: "Free" },
    { name: "LangSmith", what: "Tracing that shows node-by-node execution — the natural fit for a graph.", cost: "Freemium", url: "https://smith.langchain.com" },
    { name: "LangGraph Studio", what: "Visual graph inspection and debugging. Useful precisely because graphs are hard to read as code.", cost: "Freemium" },
  ],

  resources: [
    { title: "LangGraph documentation", kind: "Docs", note: "The authoritative source for state, reducers, checkpointers and interrupts.", url: "https://langchain-ai.github.io/langgraph/" },
    { title: "Lost in the Middle", kind: "Paper", note: "Why persistent threads need a summarisation strategy rather than just more context.", url: "https://arxiv.org/abs/2307.03172" },
    { title: "Building Effective Agents — Anthropic", kind: "Docs", note: "Framework-agnostic guidance on when a workflow beats an agent.", url: "https://www.anthropic.com/research/building-effective-agents" },
  ],

  internalLinks: [
    { slug: "building-agents-with-langchain", anchor: "the simpler starting point", context: "In the introduction" },
    { slug: "agent-memory-and-context", anchor: "managing a thread that grows forever", context: "In the summarisation concept" },
    { slug: "choosing-an-agent-framework", anchor: "how it compares to the alternatives", context: "In the conclusion" },
  ],

  relatedGuides: [
    "building-agents-with-langchain",
    "agent-memory-and-context",
    "choosing-an-agent-framework",
  ],

  conclusion: [
    "If you're evaluating it, the fastest test is persistence: run the prebuilt agent with a checkpointer, make two calls on one `thread_id`, and see whether that behaviour is what your problem has been missing. Usually you'll know immediately.",
  ],

  cta: {
    headline: "Designing a graph that keeps growing?",
    body:
      "State machines are easy to start and hard to keep legible. We do this work and can review a design before you commit to it.",
    label: "Have your design reviewed",
    href: "/contact",
  },
};

export default guide;
