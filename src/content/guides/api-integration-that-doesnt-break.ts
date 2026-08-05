import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "api-integration-that-doesnt-break",
  seoTitle: "API Integration That Doesn't Break: A Practical Guide",
  metaDescription:
    "Retries, idempotency, timeouts, webhooks and rate limits — how to integrate with an API you don't control so it survives the day it misbehaves.",
  title: "API Integration That Doesn't Break",
  keywords: [
    "api integration best practices",
    "retry with exponential backoff",
    "idempotency key",
    "webhook handling",
    "rate limit handling",
    "api error handling python",
  ],
  category: "api-integration",
  level: "Intermediate",
  updated: "2026-08-05",
  author: EHTIJAD_ALI,
  readingTime: 12,

  intro: [
    "Integrating with an API is easy on the happy path and that's the problem. The request works, the JSON parses, the feature ships. Then one Tuesday the upstream service is slow rather than down, your requests pile up behind a default timeout you never set, and the whole thing falls over in a way nobody anticipated because nobody tested it.",
    "Everything difficult about integration is failure handling. Not exotic failure — ordinary failure. Transient errors, slowness, rate limits, duplicate deliveries, a field that changed shape. These aren't edge cases; at any volume they're weekly events.",
    "This guide covers the patterns that make an integration survive contact with a service you don't control. It assumes you can already make a request and parse a response, and that you've been bitten at least once.",
  ],

  whyItMatters: [
    "Integration failures are disproportionately expensive because they're usually invisible until they're not. A retry loop with no backoff turns a brief upstream blip into a self-inflicted denial of service. A missing idempotency key turns one network timeout into a double charge. Neither shows up in testing.",
    "They also fail in the direction of data corruption rather than error. A duplicate webhook processed twice creates a duplicate record. A partial write on a failed batch leaves inconsistent state. Errors get noticed; quietly wrong data does not.",
    "And the patterns are transferable. Retries, idempotency, timeouts and circuit breakers apply to every service you'll ever integrate with, including internal ones. Learning them once is a permanent upgrade to everything you build.",
  ],

  coreConcepts: [
    {
      term: "Retry only what's safe to retry",
      explain:
        "Transient failures — timeouts, 429, 5xx, connection resets — are worth retrying. Client errors like 400 and 404 are not; the same request will fail identically forever.",
      detail:
        "Retrying a 400 is a busy loop with extra steps. Classify by status before deciding, and treat anything you didn't explicitly classify as non-retryable.",
    },
    {
      term: "Exponential backoff with jitter",
      explain:
        "Wait longer after each failure — 1s, 2s, 4s — and add randomness. The randomness matters as much as the backoff.",
      detail:
        "Without jitter, every client that failed at the same moment retries at the same moment, hammering a recovering service in synchronised waves. This is the thundering herd, and jitter is a one-line fix.",
    },
    {
      term: "Idempotency keys make retries safe",
      explain:
        "A unique key per logical operation lets the server recognise a repeat and return the original result instead of performing the action twice.",
      detail:
        "Essential for anything that creates or charges. The dangerous case is a request that succeeded upstream and timed out on your side — you cannot tell that from a genuine failure, so you must be able to retry safely.",
    },
    {
      term: "Always set an explicit timeout",
      explain:
        "Most HTTP clients default to no timeout or a very long one. A hung connection then holds a worker indefinitely, and enough of them exhaust your pool.",
      detail:
        "Slow is worse than down. A service returning errors fast lets you fail fast; one responding in ninety seconds quietly consumes your capacity.",
    },
    {
      term: "Circuit breakers stop you making it worse",
      explain:
        "After repeated failures, stop calling for a cooling-off period and fail immediately instead. Try again periodically to see if it recovered.",
      detail:
        "This protects both sides — you stop wasting capacity on calls that will fail, and you stop adding load to something already struggling.",
    },
    {
      term: "Rate limits are documentation, headers are truth",
      explain:
        "Published limits are a starting point. The response headers tell you your actual remaining quota and when it resets, and a 429 usually carries `Retry-After`.",
      detail:
        "Read and honour those headers rather than hard-coding a delay. A `Retry-After` you ignore is the fastest route to a longer ban.",
    },
    {
      term: "Webhooks arrive more than once",
      explain:
        "Delivery is usually at-least-once. The same event will be delivered twice — after a timeout on your side, or a provider retry — and out of order is common too.",
      detail:
        "Make handlers idempotent on the event id, and drive state from the resource you fetch rather than from delivery order.",
    },
    {
      term: "Verify webhook signatures",
      explain:
        "A webhook endpoint is a public URL that mutates your state. Without signature verification, anyone who learns it can send you events.",
      detail:
        "Verify against the raw request body. Frameworks that parse and re-serialise JSON change the bytes and break the signature — a common and confusing failure.",
    },
    {
      term: "Fail loudly, degrade deliberately",
      explain:
        "Decide per integration what happens when it's unavailable: queue for later, serve stale data, or surface an error. Silent swallowing is the one option that's always wrong.",
      detail:
        "An exception caught and logged at debug level is a failure nobody will notice until a user reports missing data weeks later.",
    },
  ],

  codeExamples: [
    {
      title: "Retry with backoff, jitter and classification",
      language: "python",
      intro:
        "The core pattern. Note what it refuses to retry — retrying a 400 is an infinite loop that looks like resilience.",
      code: `import random
import time
import httpx

RETRYABLE_STATUS = {408, 429, 500, 502, 503, 504}
MAX_ATTEMPTS = 5


def request_with_retry(client: httpx.Client, method: str, url: str, **kwargs) -> httpx.Response:
    last_error: Exception | None = None

    for attempt in range(MAX_ATTEMPTS):
        try:
            # Explicit timeout. Without one, a hung connection holds this
            # worker forever and enough of them exhaust the pool.
            response = client.request(method, url, timeout=10.0, **kwargs)

            if response.status_code not in RETRYABLE_STATUS:
                response.raise_for_status()     # 4xx: fail now, don't retry
                return response

            # Honour the server's own instruction over our backoff schedule.
            retry_after = response.headers.get("Retry-After")
            if retry_after:
                time.sleep(float(retry_after))
                continue

        except (httpx.TimeoutException, httpx.ConnectError) as e:
            last_error = e
        except httpx.HTTPStatusError:
            raise                                # non-retryable, propagate

        if attempt == MAX_ATTEMPTS - 1:
            break

        # Exponential backoff PLUS jitter. Without the jitter every client
        # that failed together retries together and floors the recovering
        # service in synchronised waves.
        delay = (2 ** attempt) + random.uniform(0, 1)
        time.sleep(delay)

    raise RuntimeError(f"{method} {url} failed after {MAX_ATTEMPTS} attempts") from last_error`,
      note:
        "`Retry-After` takes precedence over your own schedule. Ignoring it when a service explicitly told you to wait is the fastest route from a rate limit to a ban.",
    },
    {
      title: "Idempotency for anything that creates or charges",
      language: "python",
      intro:
        "The scenario this exists for: your request succeeded upstream and the response never reached you. You cannot distinguish that from a genuine failure, so retrying must be safe.",
      code: `import uuid


def create_payment(client: httpx.Client, order_id: str, amount_pence: int) -> dict:
    """Create a payment that can be retried without charging twice."""

    # The key must be STABLE for the logical operation, not random per attempt.
    # Deriving it from the order id means a retry — even from a different
    # process after a crash — reuses the same key and the server dedupes.
    idempotency_key = f"payment-{order_id}"

    response = request_with_retry(
        client,
        "POST",
        "https://api.example.com/v1/payments",
        headers={"Idempotency-Key": idempotency_key},
        json={"order_id": order_id, "amount": amount_pence, "currency": "GBP"},
    )
    return response.json()


# WRONG — a fresh key per attempt defeats the entire mechanism. Each retry
# looks like a new operation to the server, and you charge the customer twice.
def create_payment_broken(client, order_id, amount_pence):
    return client.post(
        "https://api.example.com/v1/payments",
        headers={"Idempotency-Key": str(uuid.uuid4())},   # regenerated on retry
        json={"order_id": order_id, "amount": amount_pence},
    )`,
      note:
        "The broken version is the common mistake and it looks correct — a UUID per request feels like the point of a unique key. The key must identify the *operation*, not the attempt.",
    },
    {
      title: "Webhook handling: verify, dedupe, then act",
      language: "python",
      intro:
        "Three things in order. Verify against raw bytes, dedupe on event id because delivery is at-least-once, and fetch the resource rather than trusting the payload's ordering.",
      code: `import hashlib
import hmac
from flask import Flask, request, abort

app = Flask(__name__)
SIGNING_SECRET = os.environ["WEBHOOK_SIGNING_SECRET"]


@app.post("/webhooks/provider")
def handle_webhook():
    # 1. Verify against the RAW body. Frameworks that parse and re-serialise
    #    JSON change the bytes and silently break the signature.
    raw = request.get_data()
    expected = hmac.new(SIGNING_SECRET.encode(), raw, hashlib.sha256).hexdigest()
    provided = request.headers.get("X-Signature", "")

    if not hmac.compare_digest(expected, provided):   # constant-time compare
        abort(400, "invalid signature")

    event = request.get_json()
    event_id = event["id"]

    # 2. Dedupe. Delivery is at-least-once: the same event WILL arrive twice,
    #    after a timeout on our side or a provider retry.
    if already_processed(event_id):
        return "", 200                                 # ack, do nothing

    # 3. Fetch the resource rather than trusting the payload. Events arrive
    #    out of order, so an older event can otherwise overwrite newer state.
    resource = api.fetch(event["data"]["object_id"])
    apply_state(resource)

    mark_processed(event_id)

    # Return 2xx promptly. Slow handlers get retried, which creates the
    # duplicates step 2 exists to absorb.
    return "", 200`,
      note:
        "Step 3 is the one people skip. Driving state from the webhook payload means a delayed 'created' event can overwrite a newer 'updated' one — fetching the current resource makes ordering irrelevant.",
    },
  ],

  learningPath: [
    {
      title: "Audit your existing timeouts",
      body: "Find every outbound call in your codebase and check whether it sets a timeout. Most won't. This is the single highest-return audit available and it takes an afternoon.",
      effort: "2–4 hours",
      outcome: "No unbounded outbound calls.",
    },
    {
      title: "Classify your error handling",
      body: "For each integration, list which status codes you retry and which you don't. Anything unclassified should be non-retryable by default.",
      effort: "2–3 hours",
      outcome: "A written retry policy per integration.",
    },
    {
      title: "Add backoff with jitter",
      body: "Implement the retry helper and route calls through it. Then simulate a service failing for thirty seconds and confirm your retries spread out rather than bunching.",
      effort: "3–4 hours",
      outcome: "Retries that help a recovering service rather than flooring it.",
    },
    {
      title: "Add idempotency keys to writes",
      body: "For every operation that creates or charges, derive a stable key from the business identifier. Test by killing the process mid-request and retrying.",
      effort: "3–5 hours",
      outcome: "Writes you can safely retry after a timeout.",
    },
    {
      title: "Harden your webhook handlers",
      body: "Verify signatures against the raw body, dedupe on event id, and fetch the resource rather than trusting the payload. Then deliver the same event twice deliberately.",
      effort: "4–6 hours",
      outcome: "A handler that's correct under duplicate and out-of-order delivery.",
    },
    {
      title: "Test the failure modes",
      body: "Simulate slow responses, 429s, 500s and malformed JSON. Most integrations have never been tested against anything except success, which is why they surprise people.",
      effort: "4–6 hours",
      outcome: "Known behaviour under each failure, rather than assumptions.",
    },
    {
      title: "Decide the degradation policy",
      body: "For each integration, write down what happens when it's unavailable — queue, serve stale, or surface an error. Implement it explicitly rather than defaulting to an exception.",
      effort: "2–4 hours",
      outcome: "Deliberate behaviour instead of accidental behaviour.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "How breaches actually begin, and why credentials in integrations matter.",
      walkthrough:
        "Verizon's Data Breach Investigations Report analyses thousands of real incidents to identify initial access. It's the closest thing the field has to a base-rate reference.",
      result:
        "In the 2025 report, 22% of breaches began with credential abuse, and 88% of Basic Web Application attacks involved stolen credentials. For integration work specifically this sets the priority: API keys in environment variables rather than code, scoped to the minimum the integration needs, and rotated when exposed. The clever failure-handling matters less than not leaking the key.",
      source: {
        label: "Verizon 2025 Data Breach Investigations Report",
        url: "https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf",
      },
    },
    {
      kind: "illustration",
      scenario: "The retry storm you caused.",
      walkthrough:
        "A shape worth recognising. An upstream service has a brief wobble and returns 503 for twenty seconds. Your fleet retries immediately, three times each, with no backoff. The service — which was recovering — now receives several times its normal traffic from clients that all failed at the same instant. It stays down considerably longer than it would have, and your retries are the reason.",
      result:
        "Exponential backoff spreads the load over time; jitter spreads it across clients. Without jitter, backoff alone still produces synchronised waves at 1s, 2s and 4s. Both together turn a self-inflicted outage back into a twenty-second blip.",
    },
    {
      kind: "illustration",
      scenario: "The double charge from a successful request.",
      walkthrough:
        "The failure mode idempotency exists for, and it's counterintuitive. A payment request reaches the provider and succeeds. The response is lost — a network blip, a load balancer timeout. Your client sees a timeout, which it classifies as retryable, and retries. The provider has no way to know this is the same operation, so it charges again. Your logs show one failure and one success. The customer sees two charges.",
      result:
        "A stable idempotency key derived from the order id makes the retry safe: the provider recognises it and returns the original result. The key must identify the operation, not the attempt — a fresh UUID per request is the common mistake and it defeats the mechanism entirely.",
    },
  ],

  mistakes: [
    {
      mistake: "Not setting a timeout",
      why: "Most clients default to none or something very long. A hung connection holds a worker indefinitely, and enough of them exhaust the pool — turning one slow dependency into a full outage.",
      fix: "Set an explicit timeout on every outbound call. Slow is worse than down, because it consumes capacity silently.",
    },
    {
      mistake: "Retrying without backoff or jitter",
      why: "Immediate retries amplify load on a service that's already struggling, and synchronised retries across clients keep it down longer.",
      fix: "Exponential backoff plus random jitter. Both — backoff alone still produces synchronised waves.",
    },
    {
      mistake: "Retrying non-retryable errors",
      why: "A 400 or 404 will fail identically forever. The retry loop is a busy wait that looks like resilience and produces nothing.",
      fix: "Classify by status. Retry timeouts, 429 and 5xx; fail fast on 4xx; treat unclassified as non-retryable.",
    },
    {
      mistake: "Generating a fresh idempotency key per attempt",
      why: "It defeats the entire mechanism — each retry looks like a new operation. This is the common mistake because a unique key per request feels like the point.",
      fix: "Derive a stable key from the business identifier, so any retry from any process reuses it.",
    },
    {
      mistake: "Trusting webhook payloads for ordering",
      why: "Events arrive out of order. A delayed 'created' can overwrite a newer 'updated', leaving your state silently behind.",
      fix: "Fetch the current resource and drive state from that. Treat the webhook as a signal that something changed, not as the change.",
    },
    {
      mistake: "Verifying signatures against parsed JSON",
      why: "Frameworks that parse and re-serialise change the bytes, so the computed signature never matches. It fails confusingly and tempts people to skip verification.",
      fix: "Verify against the raw request body before any parsing, using a constant-time comparison.",
    },
    {
      mistake: "Swallowing integration errors",
      why: "An exception caught and logged at debug level is a failure nobody notices until a user reports missing data weeks later.",
      fix: "Decide the degradation policy explicitly per integration — queue, serve stale, or surface — and alert on the failure rate.",
    },
    {
      mistake: "Ignoring rate limit headers",
      why: "Published limits are approximate; the headers are authoritative. Ignoring `Retry-After` in particular escalates a temporary limit into a longer block.",
      fix: "Read remaining-quota and reset headers, and honour `Retry-After` over your own schedule.",
    },
  ],

  bestPractices: [
    "Set an explicit timeout on every outbound call, without exception.",
    "Classify errors before retrying, and default unclassified to non-retryable.",
    "Use exponential backoff with jitter, and cap total attempts.",
    "Derive idempotency keys from business identifiers so retries reuse them.",
    "Honour `Retry-After` and rate-limit headers over hard-coded delays.",
    "Verify webhook signatures against the raw body with a constant-time compare.",
    "Dedupe webhooks on event id and drive state from a fetched resource.",
    "Return 2xx from webhook handlers promptly; do slow work asynchronously.",
    "Store credentials in environment variables or a secret manager, scoped minimally.",
    "Log every outbound call with status and duration, and alert on failure rate.",
    "Write down the degradation policy per integration and implement it.",
  ],

  proTips: [
    "Audit timeouts first. It's an afternoon's work across a whole codebase and prevents the failure mode that turns one slow dependency into an outage.",
    "Test against a deliberately slow service, not just a broken one. Failures are easy; slowness is what actually takes systems down, and almost nobody tests it.",
    "Log the duration of every outbound call and watch the 99th percentile, not the mean. Degradation appears in the tail long before it appears in the average.",
    "Send yourself the same webhook twice during development. If the second one changes anything, your handler isn't idempotent yet.",
    "Keep a recorded fixture of each API's real responses, including its error shapes. Upstream error formats are rarely documented and always differ from what you'd assume.",
    "When an integration is flaky, check whether you're the cause before blaming upstream. Missing backoff turns their brief wobble into your sustained outage.",
  ],

  businessApplications: [
    "Payment processing, where idempotency is the difference between a retry and a double charge.",
    "Order and inventory synchronisation across systems, where duplicate webhooks create duplicate records.",
    "CRM and marketing platform integrations, which are rate-limited aggressively and rarely handled for it.",
    "Any AI system calling model providers — the same retry, timeout and rate-limit patterns apply directly.",
    "Partner and supplier data exchange, where you control neither the schedule nor the format stability.",
    "Internal service-to-service calls, which need exactly the same discipline and usually get less.",
  ],

  lifeApplications: [
    "Designing for the failure case rather than the happy path — a habit that transfers to plans, processes and commitments.",
    "Recognising that retrying harder often makes a struggling system worse, whether it's a server or a person.",
    "Building in explicit fallbacks rather than assuming things will work, and deciding in advance what happens when they don't.",
  ],

  exercises: [
    {
      title: "The timeout audit",
      brief:
        "Find every outbound HTTP call in a codebase and check for an explicit timeout. Add one everywhere it's missing.",
      success: "A count of how many were unbounded, and zero remaining.",
      time: "2–4 hours",
    },
    {
      title: "Simulate a retry storm",
      brief:
        "Point several concurrent clients at a service that fails for thirty seconds. Log retry timings with and without jitter, and compare the distribution.",
      success: "Visible clustering without jitter, and spread with it.",
      time: "2–3 hours",
    },
    {
      title: "Break idempotency on purpose",
      brief:
        "Make a create request, kill the process before the response arrives, then retry. Do it with a per-attempt key and with a stable one. Count the resulting records.",
      success: "Two records in the first case, one in the second.",
      time: "2 hours",
    },
    {
      title: "Deliver the same webhook twice",
      brief:
        "Send an identical event to your handler twice. Confirm the second is a no-op. Then send two events out of order and confirm state is still correct.",
      success: "Idempotent on repeat, order-independent on sequence.",
      time: "2–3 hours",
    },
  ],

  checklist: [
    "Every outbound call sets an explicit timeout",
    "Retryable and non-retryable statuses are classified in writing",
    "Retries use exponential backoff with jitter and a total cap",
    "`Retry-After` and rate-limit headers are honoured",
    "Idempotency keys derive from business identifiers, not per attempt",
    "Webhook signatures are verified against the raw body, constant-time",
    "Webhook handlers dedupe on event id",
    "State is driven from fetched resources, not payload ordering",
    "Handlers return 2xx promptly and defer slow work",
    "Credentials live in a secret manager, scoped minimally",
    "Outbound calls are logged with status and duration, with alerting on failure rate",
    "A degradation policy is written down per integration",
  ],

  faqs: [
    {
      q: "How many times should I retry?",
      a: "Three to five attempts with exponential backoff covers most transient failures. Beyond that you're usually looking at a real outage, and continuing adds load without improving your odds.",
    },
    {
      q: "What timeout should I set?",
      a: "Base it on the endpoint's observed p99 latency plus headroom — often 5–30 seconds. The specific number matters far less than having one at all.",
    },
    {
      q: "Do I need idempotency keys everywhere?",
      a: "For anything that creates, charges or mutates, yes. Reads are naturally idempotent. The test is whether performing the operation twice would be harmful.",
    },
    {
      q: "Why do I get duplicate webhooks?",
      a: "Delivery is at-least-once by design. If your handler is slow or returns a non-2xx, the provider retries — and network conditions produce duplicates independently. Dedupe on event id.",
    },
    {
      q: "Why does my signature verification always fail?",
      a: "Almost always because you're verifying against parsed-and-re-serialised JSON rather than the raw body. Frameworks like Flask and Express change the bytes when they parse.",
    },
    {
      q: "How should I handle rate limits?",
      a: "Read the headers rather than guessing. Honour `Retry-After` when present, track remaining quota, and consider client-side throttling so you approach the limit smoothly rather than hitting it.",
    },
    {
      q: "What's a circuit breaker for?",
      a: "After repeated failures it stops you calling at all for a cooling-off period. That protects your capacity from being consumed by calls that will fail, and stops you adding load to a service that's already struggling.",
    },
  ],

  tools: [
    { name: "httpx / requests", what: "HTTP clients for Python. httpx supports async and has clearer timeout configuration.", cost: "Free", url: "https://www.python-httpx.org" },
    { name: "tenacity", what: "Retry decorators with backoff, jitter and stop conditions, so you don't hand-roll the loop.", cost: "Free", url: "https://tenacity.readthedocs.io" },
    { name: "pybreaker", what: "Circuit breaker implementation for Python.", cost: "Free" },
    { name: "ngrok", what: "Expose a local endpoint for webhook development and replay deliveries.", cost: "Freemium", url: "https://ngrok.com" },
    { name: "VCR.py / responses", what: "Record real API responses as fixtures, including error shapes, and test against them.", cost: "Free" },
  ],

  resources: [
    { title: "Stripe API documentation", kind: "Docs", note: "The reference implementation for idempotency keys and webhook design. Worth reading even if you never use Stripe.", url: "https://docs.stripe.com/api/idempotent_requests" },
    { title: "AWS — Exponential Backoff and Jitter", kind: "Docs", note: "The clearest explanation of why jitter matters as much as backoff, with the data behind it.", url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" },
    { title: "Verizon Data Breach Investigations Report", kind: "Docs", note: "Base rates on how breaches begin — relevant to how you store integration credentials.", url: "https://www.verizon.com/business/resources/reports/dbir/" },
  ],

  internalLinks: [
    { slug: "cybersecurity-basics-for-builders", anchor: "handling credentials properly", context: "In the documented example on breaches" },
    { slug: "designing-agent-tools", anchor: "the same discipline applied to agent tools", context: "In the error handling concept" },
  ],

  relatedGuides: ["cybersecurity-basics-for-builders", "designing-agent-tools"],

  conclusion: [
    "Everything hard about API integration is failure handling, and the failures are ordinary rather than exotic. Transient errors, slowness, rate limits, duplicate deliveries. At any volume these are weekly events, and an integration that only handles success will meet all of them.",
    "The patterns are few and they transfer everywhere. Explicit timeouts. Classified retries with backoff and jitter. Stable idempotency keys. Signature verification on raw bytes. Deduped webhooks driven from fetched state. A written policy for what happens when the thing is down.",
    "If you do one thing, audit your timeouts. It takes an afternoon, most codebases have unbounded calls in them, and it prevents the specific failure where one slow dependency quietly consumes every worker you have.",
  ],

  cta: {
    headline: "Integrating systems that have to stay up?",
    body: "We build integrations with the retry, idempotency and monitoring discipline that keeps them working on the day something upstream misbehaves.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
