import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "building-your-first-ai-agent",
  seoTitle: "Build Your First AI Agent: A Hands-On Tutorial",
  metaDescription:
    "Build a working AI agent from scratch in Python — tool calling, the agent loop, error handling and step limits, with complete copyable code.",
  title: "Build Your First AI Agent",
  keywords: [
    "how to build an AI agent",
    "AI agent tutorial python",
    "tool calling example",
    "agent loop code",
    "anthropic sdk agent",
    "function calling tutorial",
  ],
  category: "artificial-intelligence",
  level: "Intermediate",
  updated: "2026-08-04",
  author: EHTIJAD_ALI,
  readingTime: 15,

  intro: [
    "Most agent tutorials start by installing a framework, which means you end up with something that works and no idea why. This one goes the other way: you'll write the loop yourself, in about forty lines, and understand every one of them. Frameworks are genuinely useful — but they're much easier to evaluate once you know what they're doing on your behalf.",
    "The whole thing rests on one mechanism. You describe some functions to the model. When the model wants to use one, it doesn't run it — it returns a structured request saying which function and with what arguments. Your code runs it, sends the result back, and the model continues. That request-execute-return cycle, wrapped in a loop, is an agent.",
    "By the end you'll have a working agent that calls real tools, handles failures, and stops when it should. Every code block below runs as written. You need Python, an Anthropic API key, and about an hour.",
  ],

  whyItMatters: [
    "Building one by hand is the fastest way to develop judgement about the whole category. Once you've written the loop, framework documentation stops being mysterious — you can see which parts are genuinely helping and which are wrapping four lines in an abstraction. That judgement is worth more than any specific framework you might learn.",
    "It also makes the failure modes concrete rather than theoretical. You'll watch the model call a tool with the wrong argument type, retry an action that just failed, and confidently report success on something it didn't do. Reading about compounding error is abstract; watching your own agent loop forty times because a tool returned an unhelpful error message is not.",
    "And it's the shortest path to knowing whether an agent is the right shape for your problem at all. Many tasks people hand to agents are better served by a fixed sequence with one model call in the middle — cheaper, faster, far easier to debug. You can only make that call confidently once you've built both.",
  ],

  coreConcepts: [
    {
      term: "The model requests; your code executes",
      explain:
        "The model never runs anything. It returns a `tool_use` block naming a tool and supplying arguments. Your program decides whether and how to act on that, then returns the outcome as a `tool_result`.",
      detail:
        "This separation is the whole security model. Every action passes through code you control, which is where validation, permission checks and logging belong.",
    },
    {
      term: "A tool is a schema plus a function",
      explain:
        "Each tool needs a name, a description, and a JSON Schema describing its inputs. The description is the only guidance the model has about when to call it, so it does real work.",
      detail:
        "Be prescriptive about *when*, not just what: 'Call this when the user asks about current weather' outperforms 'Gets weather'. Trigger conditions in the description measurably improve call accuracy.",
    },
    {
      term: "`stop_reason` drives the loop",
      explain:
        "Every response carries a `stop_reason`. `tool_use` means the model wants to call something and you should continue the loop. `end_turn` means it's finished. That single field is your control flow.",
      detail:
        "Always append the model's full `content` to your message history, not just the text. Dropping the `tool_use` blocks breaks the pairing with your `tool_result` and the next request fails.",
    },
    {
      term: "Parallel tool calls arrive together",
      explain:
        "One response may contain several `tool_use` blocks. Execute them all, then return every `tool_result` in a single user message.",
      detail:
        "Splitting results across multiple messages silently teaches the model to stop making parallel calls, which slows every subsequent run.",
    },
    {
      term: "Errors are results, not exceptions",
      explain:
        "When a tool fails, don't crash and don't silently skip it. Return a `tool_result` with `is_error: true` and a message explaining what went wrong.",
      detail:
        "The error text becomes part of the prompt, so it's effectively an instruction. 'Invalid date format, expected YYYY-MM-DD' gets corrected; 'Error' gets retried identically.",
    },
    {
      term: "Step limits are not optional",
      explain:
        "An agent with no ceiling can loop indefinitely — retrying a failing tool, or oscillating between two actions. It will do this eventually, and it will do it while you're not watching.",
      detail:
        "Cap iterations in code from the first prototype. A limit that's occasionally too low is a minor annoyance; no limit is an unbounded bill.",
    },
    {
      term: "Thinking improves tool selection",
      explain:
        "Adaptive thinking lets the model reason before choosing an action. On anything involving more than one obvious step, this measurably improves which tool it picks and with what arguments.",
      detail:
        "It also makes debugging tractable — when an agent does something inexplicable, the reasoning is usually where the misunderstanding is visible.",
    },
    {
      term: "The tool runner versus the manual loop",
      explain:
        "The SDK ships a tool runner that drives the loop for you. Write the manual loop once to understand it, then use the runner for real work — it handles the plumbing and still lets you intervene per turn.",
      detail:
        "Approval gates, logging and result modification don't require a manual loop. The runner exposes per-turn hooks for exactly those cases.",
    },
  ],

  codeExamples: [
    {
      title: "1. Setup and a single tool call",
      language: "python",
      intro:
        "Start with the smallest complete thing: one tool, one call, no loop. Run this first and read the response object — seeing the actual `tool_use` block makes everything that follows obvious.",
      code: `import os
import anthropic

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from the environment

# A tool is a name, a description, and a JSON Schema for its inputs.
# The description is the model's only guidance on WHEN to call it.
TOOLS = [
    {
        "name": "get_weather",
        "description": (
            "Get the current weather for a city. "
            "Call this whenever the user asks about current conditions, "
            "temperature, or whether they need an umbrella."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "description": "City name, e.g. 'Manchester' or 'Tokyo'",
                },
            },
            "required": ["city"],
        },
    },
]

response = client.messages.create(
    model="claude-opus-5",
    max_tokens=16000,
    tools=TOOLS,
    messages=[{"role": "user", "content": "What's the weather in Lisbon?"}],
)

print("stop_reason:", response.stop_reason)  # -> "tool_use"

for block in response.content:
    if block.type == "tool_use":
        print("tool:", block.name)          # -> "get_weather"
        print("input:", block.input)        # -> {"city": "Lisbon"}
        print("id:", block.id)              # you'll need this to reply`,
      note:
        "Note what did NOT happen: no weather was fetched. The model returned a request. Nothing runs until your code decides to run it — that gap is where every guardrail in a production agent lives.",
    },
    {
      title: "2. Implement the tool and return the result",
      language: "python",
      intro:
        "Now close the cycle. Execute the requested tool, send the outcome back as a `tool_result`, and let the model produce its final answer. This is one full turn of the loop, written out longhand.",
      code: `def get_weather(city: str) -> str:
    """Stand-in for a real API call. Return a string the model can read."""
    fake_data = {"Lisbon": "19C, clear", "Manchester": "11C, raining"}
    return fake_data.get(city, f"No data for {city}")


messages = [{"role": "user", "content": "What's the weather in Lisbon?"}]

response = client.messages.create(
    model="claude-opus-5", max_tokens=16000, tools=TOOLS, messages=messages
)

# Append the model's ENTIRE content, not just the text. The tool_use blocks
# must be present or the tool_result below has nothing to pair with.
messages.append({"role": "assistant", "content": response.content})

# Collect every tool_use block — a single response may contain several.
tool_results = []
for block in response.content:
    if block.type == "tool_use":
        output = get_weather(**block.input)
        tool_results.append({
            "type": "tool_result",
            "tool_use_id": block.id,   # must match the request
            "content": output,
        })

# All results go back in ONE user message, even if there were several calls.
messages.append({"role": "user", "content": tool_results})

final = client.messages.create(
    model="claude-opus-5", max_tokens=16000, tools=TOOLS, messages=messages
)
print(final.content[0].text)`,
      note:
        "The `tool_use_id` pairing is strict. Returning results in a different message, or omitting one, produces an API error rather than a silent degradation — which is the good outcome.",
    },
    {
      title: "3. The agent loop",
      language: "python",
      intro:
        "Wrap that turn in a loop and you have an agent. The loop continues while `stop_reason` is `tool_use` and stops on `end_turn` — or when it hits the step limit, which is doing more work than it looks like.",
      code: `import json

MAX_STEPS = 10  # not optional: an uncapped agent can loop until your bill notices


def run_tool(name: str, args: dict) -> tuple[str, bool]:
    """Return (output, is_error). Never raise — the model can't see exceptions."""
    try:
        if name == "get_weather":
            return get_weather(**args), False
        return f"Unknown tool: {name}", True
    except TypeError as e:
        # Wrong or missing arguments. Say what's expected so the model can fix it.
        return f"Invalid arguments for {name}: {e}", True
    except Exception as e:
        return f"{name} failed: {e}", True


def run_agent(user_input: str) -> str:
    messages = [{"role": "user", "content": user_input}]

    for step in range(MAX_STEPS):
        response = client.messages.create(
            model="claude-opus-5",
            max_tokens=16000,
            thinking={"type": "adaptive"},   # better tool selection on multi-step work
            tools=TOOLS,
            messages=messages,
        )
        messages.append({"role": "assistant", "content": response.content})

        if response.stop_reason != "tool_use":
            text = [b.text for b in response.content if b.type == "text"]
            return "\\n".join(text)

        results = []
        for block in response.content:
            if block.type == "tool_use":
                print(f"[step {step}] {block.name}({json.dumps(block.input)})")
                output, is_error = run_tool(block.name, block.input)
                results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": output,
                    "is_error": is_error,
                })
        messages.append({"role": "user", "content": results})

    return f"Stopped after {MAX_STEPS} steps without finishing."


print(run_agent("Compare the weather in Lisbon and Manchester."))`,
      note:
        "The print statement inside the loop is the most valuable line here. Watching the sequence of tool calls scroll past is how you learn what your agent actually does, as opposed to what you assumed it would do.",
    },
    {
      title: "4. Catching the repeated-action loop",
      language: "python",
      intro:
        "The most common agent failure: a tool fails, and the model responds by calling it again with identical arguments. It has no memory of having tried, beyond what's in its context. Detect the repetition in code and force a change of approach.",
      code: `def run_agent_guarded(user_input: str) -> str:
    messages = [{"role": "user", "content": user_input}]
    seen_calls: dict[str, int] = {}   # signature -> times attempted

    for step in range(MAX_STEPS):
        response = client.messages.create(
            model="claude-opus-5", max_tokens=16000,
            thinking={"type": "adaptive"}, tools=TOOLS, messages=messages,
        )
        messages.append({"role": "assistant", "content": response.content})

        if response.stop_reason != "tool_use":
            return "\\n".join(b.text for b in response.content if b.type == "text")

        results = []
        for block in response.content:
            if block.type != "tool_use":
                continue

            signature = f"{block.name}:{json.dumps(block.input, sort_keys=True)}"
            seen_calls[signature] = seen_calls.get(signature, 0) + 1

            if seen_calls[signature] > 2:
                # Refuse the repeat and tell the model why, in the result itself.
                output, is_error = (
                    f"You have already called {block.name} with these exact "
                    f"arguments {seen_calls[signature] - 1} times and it did not "
                    f"work. Do not call it again with the same input — try "
                    f"different arguments or a different approach.",
                    True,
                )
            else:
                output, is_error = run_tool(block.name, block.input)

            results.append({
                "type": "tool_result",
                "tool_use_id": block.id,
                "content": output,
                "is_error": is_error,
            })
        messages.append({"role": "user", "content": results})

    return f"Stopped after {MAX_STEPS} steps."`,
      note:
        "Notice the correction is delivered as a tool result rather than a system-prompt rule. The model reads it at exactly the moment it's relevant, which is far more effective than a general instruction issued at the start.",
    },
    {
      title: "5. A human approval gate",
      language: "python",
      intro:
        "Anything irreversible needs a person in front of it. The gate belongs in the tool function, not in the prompt — a prompt is a request, and a request is not a control.",
      code: `DESTRUCTIVE = {"send_email", "delete_record", "make_payment"}


def run_tool_with_approval(name: str, args: dict) -> tuple[str, bool]:
    if name in DESTRUCTIVE:
        print(f"\\n  AGENT WANTS TO: {name}")
        print(f"  ARGUMENTS: {json.dumps(args, indent=2)}")
        if input("  Approve? [y/N] ").strip().lower() != "y":
            # Declining is a normal outcome, not an error. Tell the model
            # plainly so it can choose a different path rather than retrying.
            return "The user declined this action. Do not attempt it again.", False
    return run_tool(name, args)`,
      note:
        "In a real product this becomes a queued approval rather than an input() prompt — but the shape is identical, and the important property is the same: the model cannot reach the action without passing through code you control.",
    },
    {
      title: "6. The same agent with the SDK tool runner",
      language: "python",
      intro:
        "Once the manual loop makes sense, this is what you'd actually ship. The `@beta_tool` decorator generates the schema from your function signature and docstring, and the runner drives the loop.",
      code: `from anthropic import Anthropic
from anthropic.lib.tools import beta_tool

client = Anthropic()


@beta_tool
def get_weather(city: str) -> str:
    """Get the current weather for a city.

    Call this whenever the user asks about current conditions,
    temperature, or whether they need an umbrella.

    Args:
        city: City name, e.g. 'Manchester' or 'Tokyo'
    """
    fake_data = {"Lisbon": "19C, clear", "Manchester": "11C, raining"}
    return fake_data.get(city, f"No data for {city}")


runner = client.beta.messages.tool_runner(
    model="claude-opus-5",
    max_tokens=16000,
    thinking={"type": "adaptive"},
    tools=[get_weather],
    messages=[{"role": "user", "content": "Compare Lisbon and Manchester."}],
    max_iterations=10,          # the step limit, still not optional
)

final_message = runner.until_done()
print(final_message.content[0].text)`,
      note:
        "The docstring becomes the tool description and the type hints become the schema — so a vague docstring produces a vague tool description, and the model's call accuracy drops accordingly. It's the same lever as before, wearing different clothes.",
    },
  ],

  learningPath: [
    {
      title: "Run example 1 and read the response object",
      body: "Print the whole response, not just the parts you expect. Look at the content blocks, the stop_reason, the usage. Five minutes here saves an hour of confusion later.",
      effort: "30 minutes",
      outcome: "You've seen an actual tool_use block and know what's in it.",
    },
    {
      title: "Close the cycle by hand",
      body: "Work through example 2 without copying it — type it. Deliberately break the tool_use_id pairing and read the error. Deliberately append only the text instead of the full content and watch what happens.",
      effort: "1 hour",
      outcome: "You understand why the full content block must be appended.",
    },
    {
      title: "Build the loop",
      body: "Implement example 3. Give it a task needing two tool calls, then one needing five. Watch the printed sequence and note where it does something you didn't expect.",
      effort: "1–2 hours",
      outcome: "A working agent, and a list of surprises from its trace.",
    },
    {
      title: "Break it on purpose",
      body: "Make a tool always fail. Make it return malformed data. Give an impossible goal. Set MAX_STEPS to 3 and give it a task needing 6. Record how each failure looks from the outside.",
      effort: "1–2 hours",
      outcome: "You recognise the repeated-action loop before it costs you money.",
    },
    {
      title: "Add real tools",
      body: "Replace the fake weather function with something real — a file reader, an HTTP call, a database query. Real tools fail in ways fake ones don't, which is the point.",
      effort: "2–4 hours",
      outcome: "An agent doing something you actually wanted done.",
    },
    {
      title: "Add the guardrails",
      body: "Implement repeated-call detection and an approval gate for anything irreversible. Then try to talk the agent past them and confirm you can't.",
      effort: "2–3 hours",
      outcome: "Constraints that hold when the model misunderstands.",
    },
    {
      title: "Rebuild it with the tool runner",
      body: "Port your agent to example 6. Compare the two implementations line by line — you'll now see exactly what the runner is handling and what it leaves to you.",
      effort: "1–2 hours",
      outcome: "You can choose between manual and framework on evidence.",
    },
    {
      title: "Compare against a fixed workflow",
      body: "Implement the same task as a predetermined sequence with model calls at specific points. Run both on twenty inputs. Compare success rate, cost and latency.",
      effort: "4–6 hours",
      outcome: "Data on whether your task actually needs autonomy.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A system asked to verify its own output confirms its own fabrications.",
      walkthrough:
        "A lawyer used ChatGPT to research precedent and filed a brief citing six non-existent cases. Asked directly whether the cases were real, the model confirmed they were and supplied further detail.",
      result:
        "The court sanctioned the lawyers $5,000 in June 2023. For agent builders the lesson is architectural: never implement a verification step as 'ask the model whether it's right'. A check must query an independent source or a deterministic system — asking again produces the appearance of verification and none of the substance.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "documented",
      scenario: "Where in a long context the model actually pays attention.",
      walkthrough:
        "Liu and colleagues varied the position of relevant information inside the context and measured retrieval accuracy. Performance peaked at the beginning and end and degraded in the middle, holding even for long-context models.",
      result:
        "An agent loop accumulates state with every turn, steadily pushing the original goal and constraints toward the middle — the worst-attended position. That's the empirical reason for summarising completed steps and re-stating the goal at the end of each prompt, rather than trusting a system prompt issued once at step zero.",
      source: {
        label: "Liu et al. (2023) — Lost in the Middle: How Language Models Use Long Contexts, arXiv:2307.03172",
        url: "https://arxiv.org/abs/2307.03172",
      },
    },
    {
      kind: "illustration",
      scenario: "The uninformative error message that costs forty API calls.",
      walkthrough:
        "A shape you will produce yourself on the first attempt. A tool validates its input and returns the string 'Error' on failure. The model receives it, has no information about what was wrong, and reasonably concludes the sensible next action is to try the tool again. Same tool, same arguments. The loop continues until the step limit intervenes.",
      result:
        "Rewriting the error to 'Invalid date format: expected YYYY-MM-DD, got 03/04/2026' typically fixes the behaviour in one turn. Tool error messages are part of the prompt, not part of your logs — write them for the model that has to act on them.",
    },
  ],

  mistakes: [
    {
      mistake: "Appending only the text instead of the full content block",
      why: "The `tool_use` blocks live in `response.content`. Drop them and your `tool_result` has nothing to pair with, so the next request fails with a confusing error about mismatched IDs.",
      fix: "Always append `response.content` wholesale to the message history. Extract text for display separately.",
    },
    {
      mistake: "Returning tool results in separate messages",
      why: "When one response contains several `tool_use` blocks, splitting the results across messages silently trains the model to stop making parallel calls — every later run becomes slower for no visible reason.",
      fix: "Collect all results and send them in one user message, in a single list.",
    },
    {
      mistake: "Letting tool exceptions propagate",
      why: "A crashed loop tells the model nothing. It also loses the conversation, so a transient failure becomes a total one.",
      fix: "Catch inside the tool wrapper and return `is_error: true` with a message that explains what went wrong specifically enough to act on.",
    },
    {
      mistake: "Shipping without a step limit",
      why: "Agents loop. A tool that keeps failing, or two actions that undo each other, will run until something external stops them — usually a bill or a rate limit.",
      fix: "Cap iterations in code from the first prototype, and log when the cap is hit so you notice the pattern.",
    },
    {
      mistake: "Putting constraints in the system prompt",
      why: "'Never spend more than £100' is a request to a probabilistic system. It will usually be honoured, and the failures cluster on unusual inputs — exactly when the constraint matters.",
      fix: "Enforce anything that matters in the tool function or the surrounding code. The prompt explains intent; code makes it true.",
    },
    {
      mistake: "Writing tool descriptions that only say what the tool does",
      why: "The model needs to know *when* to reach for it. A description without a trigger condition produces both missed calls and spurious ones.",
      fix: "Include the circumstances: 'Call this when the user asks about current prices or recent events.' It measurably improves call accuracy.",
    },
    {
      mistake: "Adding tools until the model gets confused",
      why: "Every tool is context and another option to choose between. Beyond a certain point, more tools reduce accuracy on all of them.",
      fix: "Keep the set focused. If you genuinely need many, look at tool search rather than loading every schema up front.",
    },
  ],

  bestPractices: [
    "Log every iteration — the tool, the arguments, the result. Agent debugging without a full trace is guesswork, and you will need to debug.",
    "Write tool descriptions that state the trigger condition, not just the capability.",
    "Return errors as results with `is_error: true`, and make the message specific enough for the model to correct itself.",
    "Cap steps, tokens and spend per run, in code, from the first prototype.",
    "Detect repeated identical calls and interrupt them with a corrective tool result.",
    "Put human approval in front of every irreversible action, and prepare the action fully so approving is one decision.",
    "Give tools the narrowest permissions that accomplish the task — a read-only query rather than database write access.",
    "Enable adaptive thinking for multi-step work; it improves tool selection and makes the trace readable.",
    "Test with your worst realistic input, not a clean one. Production traffic is malformed and off-topic.",
  ],

  proTips: [
    "Print the tool call sequence during development, always. The single most useful debugging output in agent work is the ordered list of what it actually did.",
    "When a tool argument comes back wrong, fix the schema description before touching the prompt. The model is usually doing its best with a vague field description.",
    "Set MAX_STEPS far lower than you think you need while developing. A tight limit surfaces flailing that a generous limit hides behind eventual success.",
    "Track cost per *successful* task rather than per call. An agent that's cheap per call and often fails can cost far more than an apparently pricier one that completes.",
    "Feed your agent a document containing instructions before it ever touches untrusted input. Almost every first implementation follows them, and it's much better to discover that on your own machine.",
    "Keep the fake-tool version of your agent around after you add real tools. It runs instantly and free, which makes it the right place to test loop logic.",
  ],

  businessApplications: [
    "Internal research assistants that gather information across several systems and produce a structured brief for review.",
    "Support triage: classifying a ticket, retrieving relevant history and policy, and drafting a response an agent approves.",
    "Data reconciliation across systems, flagging discrepancies for a human rather than resolving them autonomously.",
    "Developer tooling: multi-file changes and test generation, where version control provides a natural review checkpoint.",
    "Operational runbooks: gathering diagnostic context when an alert fires so the on-call engineer starts from a briefing.",
    "Document processing pipelines where extraction, validation and formatting each need a different tool.",
  ],

  lifeApplications: [
    "Understanding what the 'agent' features in your existing tools actually do, and what permissions you granted them.",
    "Automating genuinely tedious personal work — file organisation, data extraction, research summaries — where you're the only stakeholder and errors are cheap.",
    "Building intuition for delegation generally: irreversible steps warrant a checkpoint, reversible ones don't.",
    "Recognising compounding error in your own multi-step plans. Ten steps that each usually work is not a plan that usually works.",
  ],

  exercises: [
    {
      title: "Type example 3 from scratch",
      brief:
        "Don't copy-paste. Write the loop yourself, referring to the example only when stuck. The parts you get wrong are the parts you didn't understand.",
      success: "A working loop you wrote, plus a note of what you got wrong first time.",
      time: "1–2 hours",
    },
    {
      title: "Break the pairing",
      brief:
        "Deliberately append only `response.content[0].text` instead of the full content. Then return a `tool_result` with a wrong `tool_use_id`. Read both errors carefully.",
      success: "You can diagnose both errors instantly if you meet them again.",
      time: "30 minutes",
    },
    {
      title: "The uninformative error experiment",
      brief:
        "Make a tool fail returning only 'Error'. Count the loop iterations. Then rewrite the message to explain the problem specifically and count again.",
      success: "Two step counts, and a permanent habit about error messages.",
      time: "1 hour",
    },
    {
      title: "Add a real tool with real failures",
      brief:
        "Replace the fake weather function with an actual HTTP call. Handle timeouts, non-200 responses, and malformed JSON — each as a distinct informative error.",
      success: "The agent recovers from a network failure without you intervening.",
      time: "2–3 hours",
    },
    {
      title: "Agent versus workflow",
      brief:
        "Implement the same task twice: as this agent, and as a fixed sequence with model calls at set points. Run twenty inputs through each and compare success, cost and latency.",
      success: "A data-backed answer about whether the autonomy earns its cost.",
      time: "4–6 hours",
    },
  ],

  checklist: [
    "I append the full `response.content`, not just extracted text",
    "All tool results for one turn go back in a single user message",
    "Tool exceptions are caught and returned as `is_error: true` results",
    "Error messages are specific enough for the model to correct itself",
    "A step limit is enforced in code and logged when hit",
    "Repeated identical tool calls are detected and interrupted",
    "Every irreversible action passes through a human approval gate",
    "Constraints live in code, not only in the system prompt",
    "Tool descriptions state when to call, not just what the tool does",
    "Every iteration is logged with tool, arguments and result",
    "I've tested with deliberately malformed and adversarial input",
  ],

  faqs: [
    {
      q: "Do I need a framework to build an agent?",
      a: "No — the core loop is about forty lines. Build it manually first to understand the mechanism, then adopt the SDK's tool runner or a framework for production, where retries, tracing and orchestration save real work.",
    },
    {
      q: "How many tools should an agent have?",
      a: "As few as accomplish the task. Every tool adds context and another choice to get wrong. If you genuinely need many, look at tool search so schemas load on demand rather than all at once.",
    },
    {
      q: "Why does my agent keep calling the same failing tool?",
      a: "Because its only knowledge of having tried is what's in the context, and an uninformative error gives it nothing to change. Write specific error messages, and detect repeated identical calls in code.",
    },
    {
      q: "Should tools be small and specific, or large and general?",
      a: "Specific enough to describe clearly and validate properly. A tool that does one thing with a tight schema is easier for the model to call correctly and easier for you to gate and audit.",
    },
    {
      q: "How do I stop an agent doing something dangerous?",
      a: "Two mechanisms: give it the narrowest tool permissions that work, and put approval in front of irreversible actions. Prompt instructions are a request, not a control — they belong alongside code enforcement, not instead of it.",
    },
    {
      q: "What does the step limit cost me if it's too low?",
      a: "An incomplete run, which you'll see immediately. That's a much cheaper failure than an unbounded loop, so start tight and raise it based on observed traces rather than guessing generously.",
    },
    {
      q: "Can the agent read files or run commands?",
      a: "Yes — you implement those as tools like any other. That's exactly where least privilege and approval gates matter most, because the blast radius of a misunderstanding is the whole filesystem.",
    },
  ],

  tools: [
    { name: "anthropic (Python SDK)", what: "The official SDK, including the tool runner used in example 6. `pip install anthropic`.", cost: "Free", url: "https://github.com/anthropics/anthropic-sdk-python" },
    { name: "Anthropic Console", what: "Test tool definitions interactively before wiring them into code.", cost: "Paid", url: "https://console.anthropic.com" },
    { name: "LangGraph", what: "Stateful, branching agent workflows when you want explicit control over the loop rather than open autonomy.", cost: "Free", url: "https://langchain-ai.github.io/langgraph/" },
    { name: "LangSmith", what: "Tracing for agent runs — every prompt, tool call and result. Close to essential once runs get long.", cost: "Freemium", url: "https://smith.langchain.com" },
    { name: "Pydantic", what: "Validate tool arguments and outputs strictly, catching malformed calls before they execute.", cost: "Free", url: "https://docs.pydantic.dev" },
  ],

  resources: [
    { title: "Building Effective Agents — Anthropic", kind: "Docs", note: "Unusually sober vendor guidance, including the argument that most tasks don't need an agent at all.", url: "https://www.anthropic.com/research/building-effective-agents" },
    { title: "Anthropic tool use documentation", kind: "Docs", note: "The authoritative reference for tool schemas, tool_choice and the tool runner.", url: "https://docs.anthropic.com" },
    { title: "ReAct: Synergizing Reasoning and Acting in Language Models", kind: "Paper", note: "The paper behind the reason-then-act loop that most agents use.", url: "https://arxiv.org/abs/2210.03629" },
    { title: "OWASP Top 10 for LLM Applications", kind: "Docs", note: "Prompt injection and agent-specific risks, written for people shipping to real users.", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
  ],

  internalLinks: [
    { slug: "ai-agents-explained", anchor: "the architecture behind what you just built", context: "In the introduction" },
    { slug: "how-large-language-models-work", anchor: "why the model can't run anything itself", context: "In the first core concept" },
    { slug: "evaluating-ai-systems", anchor: "evaluating whole runs rather than single steps", context: "In the learning path" },
  ],

  relatedGuides: [
    "ai-agents-explained",
    "how-large-language-models-work",
    "evaluating-ai-systems",
  ],

  conclusion: [
    "An agent is a loop around one mechanism: the model requests an action, your code executes it, the result goes back. Everything else — guardrails, approval gates, step limits, error handling — is engineering around that cycle, and all of it lives in code you control rather than in the prompt.",
    "Having built one by hand, you can now read framework documentation critically and tell which parts are earning their complexity. You can also tell when a task doesn't need an agent at all, which is a more common answer than the current enthusiasm suggests.",
    "Take the loop from example 3, point it at a genuinely tedious task in your own work, and run it with the tool-call logging on. The first trace where it does something you didn't expect is where the real learning starts.",
  ],

  cta: {
    headline: "Ready to put an agent somewhere it matters?",
    body: "We build agentic systems with real guardrails, tracing and human checkpoints — designed for the day something goes wrong, not just the demo.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
