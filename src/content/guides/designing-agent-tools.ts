import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "designing-agent-tools",
  seoTitle: "Designing Agent Tools: Schemas, Errors and Permissions",
  metaDescription:
    "Most agent failures are tool design failures. How to write schemas, descriptions and error messages that make an agent reliable — with working code.",
  title: "Designing Agent Tools That Work",
  keywords: [
    "agent tool design",
    "function calling schema",
    "tool description best practices",
    "json schema tool use",
    "agent tool errors",
    "least privilege agent",
  ],
  category: "artificial-intelligence",
  level: "Intermediate",
  updated: "2026-08-04",
  author: PETER_NGUYEN,
  readingTime: 13,

  intro: [
    "When an agent behaves badly, the instinct is to rewrite the system prompt. It's almost always the wrong place to look. The model's decisions about which tool to call, and with what arguments, are driven overwhelmingly by the tool definitions — the names, the descriptions, the schemas, and the error messages that come back. Those are the interface, and the prompt is commentary on it.",
    "This is good news, because tool definitions are code. They can be tested, validated and versioned, in a way that a paragraph of prompt instruction can't. Moving a behaviour from the prompt into the schema converts a hope into a constraint.",
    "This guide covers how to design that surface: how granular a tool should be, how to write a description the model can act on, how to make schemas that reject bad calls before they execute, what an error message should say, and where permissions belong. It assumes you've built a basic agent: if not, start there.",
  ],

  whyItMatters: [
    "Tool design is the highest-leverage work in an agent project and the most consistently neglected. Teams spend days tuning prompts to stop an agent misusing a tool whose description says what it does but never says when to use it. The fix is usually one sentence in the wrong file.",
    "It's also where the security boundary sits. The model emits a request; your tool function decides what happens. Every validation, permission check, rate limit and audit log belongs there. A guardrail expressed in the prompt is a preference; the same rule in the tool function is enforcement.",
    "And it determines operating cost more than model choice does. Vague schemas produce malformed calls that get retried. Uninformative errors produce loops. A well-designed tool surface can cut the number of steps a task takes several-fold, and steps are what you pay for.",
  ],

  coreConcepts: [
    {
      term: "The description is a trigger condition, not a summary",
      explain:
        "'Gets the current weather' tells the model what the tool does. 'Call this whenever the user asks about current conditions, temperature, or whether they need an umbrella' tells it when to reach for it — which is the decision it actually has to make.",
      detail:
        "Recent models reach for tools more conservatively than their predecessors, so prescriptive descriptions matter more than they used to. This is measurable: adding trigger conditions reliably lifts should-call rate.",
    },
    {
      term: "Schemas are validation, not documentation",
      explain:
        "A JSON Schema with enums, required fields and formats constrains what the model can send. With strict tool use enabled, the API guarantees inputs validate against it before they ever reach your function.",
      detail:
        "Strict mode requires `additionalProperties: false` and a `required` list. That's a small amount of extra rigour for a guarantee you'd otherwise have to enforce yourself, imperfectly.",
    },
    {
      term: "Granularity: one tool, one decision",
      explain:
        "A tool should correspond to a single action the model chooses to take. A `manage_user` tool with a `mode` parameter switching between create, update and delete is three tools wearing a trench coat, and it can't be gated separately.",
      detail:
        "The practical test is whether you'd want to approve, log or rate-limit the variants differently. If yes, they're separate tools.",
    },
    {
      term: "Promote an action to a tool when you need to control it",
      explain:
        "A general `bash` tool gives an agent enormous reach and gives your harness an opaque command string. A dedicated `send_email` tool gives you typed arguments you can intercept, render for approval, and audit.",
      detail:
        "Start broad for exploration, then promote the actions that need gating, custom UI, or parallel-safety marking. Reversibility is the useful criterion: hard-to-undo actions want dedicated tools.",
    },
    {
      term: "Error messages are prompt content",
      explain:
        "Whatever your tool returns on failure goes straight into the model's context and shapes the next action. 'Error' produces a retry. 'Invalid date: expected YYYY-MM-DD, got 03/04/2026' produces a correction.",
      detail:
        "Write error strings for the model that has to act on them, not for your log aggregator. Say what was wrong, what was expected, and where relevant what to do instead.",
    },
    {
      term: "Least privilege applies to tools",
      explain:
        "A tool's permissions define the blast radius of any misunderstanding or injection. A read-only query scoped to one table is a completely different risk profile from a general database connection.",
      detail:
        "Scope at the tool boundary, not in the prompt. The model should be structurally unable to reach what it shouldn't, rather than instructed not to.",
    },
    {
      term: "Too many tools degrades everything",
      explain:
        "Every tool occupies context and adds an option to choose between. Past a certain count, accuracy drops across the whole set, not just the marginal tool.",
      detail:
        "If you need a large library, tool search lets schemas load on demand rather than all up front — and it appends rather than swapping, which preserves the prompt cache.",
    },
    {
      term: "Return shape matters as much as input shape",
      explain:
        "A tool that returns a 40,000-character JSON blob fills the context with material the model must attend across. A tool that returns the three fields the task needs leaves room to think.",
      detail:
        "Design the return value for consumption, not for completeness. Summarise, paginate, or return a reference the model can follow if it needs more.",
    },
  ],

  codeExamples: [
    {
      title: "A weak tool definition and a strong one",
      language: "python",
      intro:
        "Same capability, very different call accuracy. The differences are all in text the model reads: description, field descriptions, and constrained types.",
      code: `# WEAK — the model must guess when to call it and what the fields mean
weak = {
    "name": "search",
    "description": "Searches records",
    "input_schema": {
        "type": "object",
        "properties": {
            "q": {"type": "string"},
            "type": {"type": "string"},
            "n": {"type": "integer"},
        },
    },
}

# STRONG — trigger condition, described fields, constrained values, strict mode
strong = {
    "name": "search_customer_records",
    "description": (
        "Search customer records by name, email or account number. "
        "Call this whenever the user refers to a specific customer and you"
        "do not already have their details in the conversation. Do not call"
        "it for general questions about policy or pricing."
    ),
    "strict": True,
    "input_schema": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Search term: full or partial name, email, or account number",
            },
            "search_field": {
                "type": "string",
                "enum": ["name", "email", "account_number"],
                "description": "Which field to search. Use 'name' if unsure.",
            },
            "limit": {
                "type": "integer",
                "description": "Maximum results to return. Use 5 unless the user asks for more.",
            },
        },
        "required": ["query", "search_field", "limit"],
        "additionalProperties": False,
    },
}`,
      note:
        "`strict: True` requires both `additionalProperties: False` and a complete `required` list. In exchange, the API guarantees the input validates before your function sees it — which removes a whole category of defensive code.",
    },
    {
      title: "Error messages the model can act on",
      language: "python",
      intro:
        "The single highest-return change in most agent codebases. Compare the two failure paths: the first produces retry loops, the second produces corrections.",
      code: `from datetime import datetime

# BAD — the model learns nothing and will try again identically
def book_bad(date: str) -> tuple[str, bool]:
    try:
        datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        return "Error", True
    return "Booked", False

# GOOD — says what was wrong, what was expected, and what to do
def book_good(date: str) -> tuple[str, bool]:
    try:
        parsed = datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        return (
            f"Invalid date format: got '{date}', expected YYYY-MM-DD "
            f"(for example 2026-03-14). Reformat and call again.",
            True,
        )

    if parsed.date() < datetime.now().date():
        return (
            f"Cannot book {date} because it is in the past. Today is "
            f"{datetime.now():%Y-%m-%d}. Ask the user which future date they meant.",
            True,
        )

    return f"Booked for {date}.", False`,
      note:
        "Notice the second error doesn't just reject — it tells the model to ask the user. An error message is the right place to redirect the agent, because it arrives exactly when the decision is being made.",
    },
    {
      title: "Permissions at the tool boundary",
      language: "python",
      intro:
        "Scope enforcement belongs in the function, where it holds regardless of what the model was told. The prompt can ask; only this can guarantee.",
      code: `ALLOWED_TABLES = {"orders", "products"}          # never "users", never "payments"
MAX_ROWS = 100

def query_database(table: str, filters: dict, requesting_user_id: str) -> tuple[str, bool]:
    """Read-only query, scoped to safe tables and to the requesting user's rows."""

    # 1. Allowlist, not blocklist. Anything unlisted is refused by default.
    if table not in ALLOWED_TABLES:
        return (
            f"Table '{table}' is not available to this agent. "
            f"Available tables: {', '.join(sorted(ALLOWED_TABLES))}.",
            True,
        )

    # 2. Tenant scoping is injected here, not requested from the model.
    #    The model cannot widen it because it never supplies it.
    filters = {**filters, "user_id": requesting_user_id}

    # 3. Bound the result size so one call can't flood the context window.
    rows = db.select(table, filters, limit=MAX_ROWS)   # parameterised, never string-built

    if not rows:
        return f"No rows in {table} matched {filters}.", False

    truncated = " (truncated)" if len(rows) == MAX_ROWS else ""
    return f"{len(rows)} rows{truncated}:\\n" + format_rows(rows), False`,
      note:
        "The tenant filter is the important line. Because `requesting_user_id` comes from your session rather than from the model's arguments, no prompt injection can widen the query — the capability simply isn't exposed.",
    },
    {
      title: "Returning a shape the model can use",
      language: "python",
      intro:
        "A tool that dumps raw API output fills the context with noise the model then has to attend across. Return what the task needs, and say when there's more.",
      code: `import json

# BAD — 40KB of nested JSON, most of it irrelevant to any question asked
def get_order_bad(order_id: str) -> str:
    return json.dumps(api.fetch_order(order_id))   # every field, every nested object

# GOOD — the fields that answer real questions, plus a pointer to the rest
def get_order_good(order_id: str) -> tuple[str, bool]:
    order = api.fetch_order(order_id)
    if order is None:
        return f"No order found with id '{order_id}'. Check the id and try again.", True

    summary = {
        "id": order["id"],
        "status": order["status"],
        "placed": order["created_at"][:10],
        "total": f"{order['currency']} {order['total']:.2f}",
        "items": [f"{i['qty']}x {i['name']}" for i in order["line_items"]],
        "delivery_estimate": order.get("eta", "not available"),
    }
    return (
        json.dumps(summary, indent=2)
        + "\\n\\nFor payment history or full item detail, call get_order_detail.",
        False,
    )`,
      note:
        "The closing sentence is a second trigger condition, delivered at the moment it's relevant. Tools can point at each other, and doing so is usually more effective than describing the relationship in the system prompt.",
    },
  ],

  learningPath: [
    {
      title: "Audit your existing tool descriptions",
      body: "Read each description and ask: does it say when to call this? If it only says what the tool does, rewrite it with a trigger condition. Measure call accuracy on a fixed set of inputs before and after.",
      effort: "2–3 hours",
      outcome: "A measured improvement from description changes alone.",
    },
    {
      title: "Tighten every schema",
      body: "Add descriptions to every field. Replace free-text strings with enums wherever the value set is known. Add `additionalProperties: false`, a complete `required` list, and turn on strict mode.",
      effort: "3–4 hours",
      outcome: "Malformed calls become impossible rather than merely unlikely.",
    },
    {
      title: "Rewrite your error messages",
      body: "Go through every failure path and make the message say what was wrong, what was expected, and what to do next. Then run the inputs that trigger each one and count loop iterations before and after.",
      effort: "3–4 hours",
      outcome: "Fewer retry loops, with numbers to prove it.",
    },
    {
      title: "Split overloaded tools",
      body: "Find any tool with a `mode`, `action` or `type` parameter that switches behaviour. Split it into separate tools. Note how much easier each is to describe, gate and log.",
      effort: "2–4 hours",
      outcome: "Tools you can permission and audit independently.",
    },
    {
      title: "Move permissions into the functions",
      body: "For each tool, identify what it could reach if the model asked for the worst thing it could ask for. Add allowlists, tenant scoping and result limits inside the function.",
      effort: "4–6 hours",
      outcome: "Constraints that survive a prompt injection.",
    },
    {
      title: "Trim the return shapes",
      body: "Log the size of every tool return over a realistic run. For anything large, cut it to the fields that answer the questions users actually ask, and point at a detail tool for the rest.",
      effort: "3–5 hours",
      outcome: "Shorter runs and noticeably lower token spend.",
    },
    {
      title: "Test the surface adversarially",
      body: "Try to make each tool do something it shouldn't, by prompting the agent directly. Feed it a document containing instructions. Confirm the function-level constraints hold when the prompt-level ones don't.",
      effort: "3–4 hours",
      outcome: "Evidence that your guardrails are in the right layer.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Measuring what each stage of a pipeline is actually worth.",
      walkthrough:
        "Anthropic benchmarked a retrieval pipeline by isolating one metric — how often the correct passage was missing from the top twenty results — then adding one component at a time and remeasuring after each.",
      result:
        "Against a 5.7% baseline failure rate: added context per chunk cut failures 35%, keyword search took it to 49%, re-ranking to 67%. The method transfers directly to tool design: change one thing, measure against a fixed input set, and you learn which changes earn their cost. Changing three tool descriptions at once and observing 'it seems better' teaches you nothing.",
      source: {
        label: "Anthropic (2024) — Introducing Contextual Retrieval",
        url: "https://www.anthropic.com/news/contextual-retrieval",
      },
    },
    {
      kind: "illustration",
      scenario: "The overloaded tool nobody can gate.",
      walkthrough:
        "A shape worth recognising in your own code. You build `manage_record(action, record_id, data)` where `action` is one of create, update or delete. It's compact and it works. Then you need approval on deletes only: and there's no way to express that, because the harness sees one tool name and an opaque argument. You end up parsing the arguments in the approval layer to work out what the agent is actually about to do.",
      result:
        "Three separate tools cost a few more lines and make the whole surface tractable: `delete_record` can require approval, `create_record` can be rate-limited, `update_record` can be logged differently. The granularity that feels redundant when you write it is what makes the harness able to do its job.",
    },
    {
      kind: "illustration",
      scenario: "The tool return that ate the context window.",
      walkthrough:
        "A tool wraps an internal API and returns its response verbatim: deeply nested JSON, several hundred fields, most irrelevant. Each call consumes a large share of the window. After four calls the agent's original instructions are buried in the middle of a mass of API payloads, and its behaviour degrades in ways that look like the model getting confused rather than like a design problem.",
      result:
        "Returning a shaped summary with a pointer to a detail tool typically shortens runs substantially and improves instruction-following, because the goal is no longer competing with thousands of tokens of irrelevant structure. Return shape is a context-management decision, not a formatting preference.",
    },
  ],

  mistakes: [
    {
      mistake: "Descriptions that say what, not when",
      why: "The model's actual decision is whether to reach for this tool right now. A description that only describes capability leaves that decision unguided, producing both missed calls and spurious ones.",
      fix: "Add the trigger condition explicitly, including when *not* to call it. One sentence, measurable effect.",
    },
    {
      mistake: "Free-text strings where an enum belongs",
      why: "An unconstrained string invites values your code doesn't handle — a status of 'in progress' when your system expects 'in_progress'. The call succeeds and the downstream logic breaks.",
      fix: "Use `enum` for every field with a known value set, and turn on strict mode so violations are rejected before execution.",
    },
    {
      mistake: "Overloading one tool with a mode parameter",
      why: "It collapses several distinct actions into one name, so approval, rate limiting, logging and parallel-safety can't be applied differently to each.",
      fix: "One tool per action. The extra definitions cost less than the harness gymnastics they save.",
    },
    {
      mistake: "Uninformative error strings",
      why: "The error goes into the prompt. 'Failed' gives the model nothing to change, so its most reasonable next action is to try again identically — repeatedly.",
      fix: "State the problem, the expectation, and the corrective action. Write it for the model, not for your logs.",
    },
    {
      mistake: "Relying on the prompt for permission boundaries",
      why: "A prompt is a request to a probabilistic system, and untrusted content in the conversation can argue with it. Neither is true of an allowlist in your function.",
      fix: "Enforce scope, limits and allowlists inside the tool. Let the prompt explain intent and the code make it real.",
    },
    {
      mistake: "Letting the model supply the tenant or user identifier",
      why: "Any value the model provides can be influenced by content it read. If `user_id` is an argument, a crafted document can change whose data gets returned.",
      fix: "Inject identity from your session context, never from tool arguments. The model shouldn't be able to express the wrong value.",
    },
    {
      mistake: "Returning raw upstream payloads",
      why: "Large returns crowd the context, push the goal into the least-attended position, and cost tokens on every subsequent turn of the run.",
      fix: "Shape the return for the questions being asked, indicate truncation explicitly, and point at a detail tool for the rest.",
    },
    {
      mistake: "Adding tools until accuracy drops",
      why: "Each tool is context and another option. Beyond a threshold, performance degrades across the whole set, and the cause isn't obvious from any single failure.",
      fix: "Keep the working set focused. For large libraries, use tool search so schemas load on demand.",
    },
  ],

  bestPractices: [
    "Write every description as a trigger condition: when to call, and when not to.",
    "Describe every field in the schema. An undescribed parameter is a guess waiting to happen.",
    "Use enums wherever the value set is known, and enable strict tool use with `additionalProperties: false`.",
    "One tool per action the model chooses between. Split anything with a mode switch.",
    "Make error messages actionable: what was wrong, what was expected, what to do next.",
    "Enforce allowlists, tenant scoping and result limits inside the function, never only in the prompt.",
    "Inject identity and permissions from session context — never accept them as tool arguments.",
    "Shape return values for the task and flag truncation explicitly.",
    "Log every call with tool, arguments, result size and duration. Tool-level telemetry is where agent performance problems become visible.",
    "Test each tool in isolation against malformed and adversarial inputs before wiring it to an agent.",
  ],

  proTips: [
    "Measure call accuracy on a fixed set of twenty inputs before and after any description change. It's the only way to tell an improvement from a coincidence, and description changes are where the wins are.",
    "Read your tool descriptions as if you were a competent new colleague with no context. Anywhere you'd have to ask a clarifying question is where the model will guess.",
    "Log the character length of every tool return. The distribution usually contains one tool that's quietly consuming most of your context budget.",
    "When the model calls a tool with a wrong argument, fix the field description before touching the system prompt. The model is usually doing its best with a vague schema.",
    "Give related tools cross-references in their return values — 'for full detail, call X'. A pointer delivered at the moment of relevance beats a relationship described up front.",
    "Name tools with a verb and an object: `search_customer_records`, not `customers`. The name is read as an instruction, and a bare noun doesn't say what will happen.",
  ],

  businessApplications: [
    "Any internal agent touching customer data, where tenant scoping at the tool boundary is the difference between a feature and an incident.",
    "Support automation: separate read tools from write tools so only the writes need approval.",
    "Finance and procurement workflows, where per-action rate limits and spend ceilings belong in the tool function.",
    "Reducing operating cost: trimming return shapes and fixing error messages typically cuts steps per task noticeably, and steps are the bill.",
    "Compliance and audit: per-tool logging gives you a defensible record of what an automated system did and on whose behalf.",
    "Vendor evaluation — asking an agent platform how tool permissions and error handling work separates serious products from demos.",
  ],

  exercises: [
    {
      title: "The description A/B test",
      brief:
        "Take one tool. Write a weak description and a strong one with a trigger condition. Run twenty varied requests against each and count correct calls, missed calls and spurious calls.",
      success: "Three numbers per version, showing where the difference is.",
      time: "2 hours",
    },
    {
      title: "Strict mode conversion",
      brief:
        "Convert your schemas to strict: describe every field, add enums, set `additionalProperties: false`, complete the `required` list. Note every place the API now rejects a call it previously allowed.",
      success: "At least one malformed call caught that used to slip through.",
      time: "2–3 hours",
    },
    {
      title: "Error message rewrite",
      brief:
        "Take your worst failure path. Count agent loop iterations with the current message, rewrite it to be specific and actionable, and count again.",
      success: "A measured reduction in iterations from a text change.",
      time: "1–2 hours",
    },
    {
      title: "The privilege audit",
      brief:
        "For each tool, write down the worst thing it could do if the model asked for it. Add allowlists and scoping until the worst case is acceptable.",
      success: "A written worst-case per tool, and constraints in code for each.",
      time: "3–4 hours",
    },
    {
      title: "Return-size profiling",
      brief:
        "Log the length of every tool return across a realistic run. Rank them. Trim the largest and re-run, comparing total tokens and step count.",
      success: "A measured drop in tokens per completed task.",
      time: "2–3 hours",
    },
  ],

  checklist: [
    "Every description states when to call the tool, not just what it does",
    "Every schema field has a description",
    "Known value sets are enums, not free-text strings",
    "Strict mode is on, with `additionalProperties: false` and complete `required`",
    "No tool switches behaviour on a mode or action parameter",
    "Error messages say what was wrong, what was expected, and what to do",
    "Allowlists and scoping are enforced inside the function",
    "Identity and permissions come from session context, never from tool arguments",
    "Return values are shaped for the task, with truncation flagged",
    "Every call is logged with tool, arguments, result size and duration",
    "Each tool has been tested in isolation against adversarial input",
  ],

  faqs: [
    {
      q: "How detailed should a tool description be?",
      a: "Long enough to state what it does, when to call it, and when not to. That's usually two or three sentences. Detail in the description is cheap; a wrong tool call is not.",
    },
    {
      q: "Should I use one flexible tool or several specific ones?",
      a: "Several specific ones, in almost every case. The test is whether you'd want to approve, log or rate-limit the variants differently — if so, they must be separate tools, because the harness only sees the tool name.",
    },
    {
      q: "What is strict tool use and should I turn it on?",
      a: "It guarantees the model's arguments validate against your schema before execution. Yes, turn it on — it requires `additionalProperties: false` and a complete `required` list, and removes a whole class of defensive parsing.",
    },
    {
      q: "How many tools is too many?",
      a: "There's no fixed number, but accuracy degrades as the set grows because each tool is context and another choice. If you need a large library, use tool search so schemas load on demand rather than all at once.",
    },
    {
      q: "Where should permission checks live?",
      a: "Inside the tool function. A prompt instruction is a request that untrusted content can argue with; an allowlist in code is not. Put intent in the prompt and enforcement in the function.",
    },
    {
      q: "Should a tool ever return an exception?",
      a: "Never let one propagate — a crash tells the model nothing and loses the run. Catch it and return a `tool_result` with `is_error: true` and a message specific enough to act on.",
    },
    {
      q: "How do I stop a tool returning too much data?",
      a: "Cap the result size in the function, shape the response to the fields the task needs, and say explicitly when output was truncated so the model knows more exists.",
    },
  ],

  tools: [
    { name: "Pydantic", what: "Strict schema validation for tool arguments and returns, and schema generation from type hints.", cost: "Free", url: "https://docs.pydantic.dev" },
    { name: "anthropic (Python SDK)", what: "Tool definitions, strict mode, and the `@beta_tool` decorator that derives schemas from signatures.", cost: "Free", url: "https://github.com/anthropics/anthropic-sdk-python" },
    { name: "LangSmith", what: "Per-call tracing: which tool, what arguments, what came back. Where tool problems become visible.", cost: "Freemium", url: "https://smith.langchain.com" },
    { name: "Promptfoo", what: "Fixed-test-set evaluation, usable for measuring tool-call accuracy across description changes.", cost: "Free", url: "https://promptfoo.dev" },
  ],

  resources: [
    { title: "Anthropic tool use documentation", kind: "Docs", note: "Authoritative reference for schemas, strict mode, tool_choice and parallel calls.", url: "https://docs.anthropic.com" },
    { title: "Building Effective Agents — Anthropic", kind: "Docs", note: "Includes the bash-versus-dedicated-tool tradeoff and when to promote an action to its own tool.", url: "https://www.anthropic.com/research/building-effective-agents" },
    { title: "OWASP Top 10 for LLM Applications", kind: "Docs", note: "Why tool permissions and identity injection are security controls rather than design preferences.", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
    { title: "JSON Schema documentation", kind: "Docs", note: "The reference for enums, formats and constraints. Worth reading properly once.", url: "https://json-schema.org/learn" },
  ],

  internalLinks: [
    { slug: "building-your-first-ai-agent", anchor: "the agent loop these tools plug into", context: "In the introduction" },
    { slug: "ai-agents-explained", anchor: "why guardrails belong in code", context: "In the permissions concept" },
    { slug: "cybersecurity-basics-for-builders", anchor: "least privilege as a general principle", context: "In the permissions concept" },
  ],

  relatedGuides: [
    "building-your-first-ai-agent",
    "ai-agents-explained",
    "cybersecurity-basics-for-builders",
  ],

  conclusion: [
    "Start with your error messages. Pick the failure path your agent hits most often, rewrite the message to say what was wrong and what to do, and count the loop iterations before and after. It's an hour's work and the effect is usually immediate.",
  ],

  cta: {
    headline: "Agent calling the wrong tool?",
    body:
      "It's almost always the descriptions and the schema rather than the model. That's a fixable problem and usually a quick one.",
    label: "Get your tools reviewed",
    href: "/contact",
  },
};

export default guide;
