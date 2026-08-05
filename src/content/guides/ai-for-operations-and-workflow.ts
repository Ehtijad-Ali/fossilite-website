import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "ai-for-operations-and-workflow",
  seoTitle: "AI for Operations: Finding the Work Worth Automating",
  metaDescription:
    "A practical method for applying AI to business operations — document processing, approvals, reporting and back-office workflow, without automating chaos.",
  title: "AI for Operations and Workflow",
  keywords: [
    "ai business operations",
    "workflow automation ai",
    "document processing ai",
    "back office automation",
    "ai invoice processing",
    "operations efficiency ai",
  ],
  category: "automation",
  level: "Beginner",
  updated: "2026-08-05",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "Operations is where AI produces the most boring wins and the best returns. There's no customer watching, the work is genuinely repetitive, the cost is already measurable, and mistakes are usually caught internally before they reach anyone who matters.",
    "It's also where the most common mistake happens: automating a process nobody has looked at properly. Writing down every step of a workflow reliably reveals that two exist because of a system replaced three years ago, one is a workaround for a bug that got fixed, and the approval nobody can explain is genuinely nobody's requirement.",
    "This guide covers how to find operations work worth automating, the document-processing applications that pay back most reliably, why unstructured input is where AI earns its keep, and how to keep an automated process from quietly breaking.",
  ],

  whyItMatters: [
    "Back-office work is invisible until it fails. It rarely appears in a strategy document, nobody's promotion depends on it, and it consumes an enormous number of hours across finance, admin, procurement and compliance. That combination — high volume, low visibility, no advocate — is why it stays manual long after it should.",
    "It's also the area where AI's specific capability matters most. Rule-based automation could never handle a supplier invoice in an unexpected format or an email describing a request in prose. Handling unstructured input is the genuinely new thing, and operations is full of it.",
    "And the errors here compound quietly. A misprocessed invoice, a missed renewal, a reconciliation that silently drifts — these don't announce themselves. Getting the checks right matters more than getting the speed right.",
  ],

  coreConcepts: [
    {
      term: "Map the process before automating it",
      explain:
        "Write down every step including exceptions and who touches it. This routinely reveals steps that exist for reasons that no longer apply.",
      detail:
        "Frequently the mapping is more valuable than the automation. Deleting three steps beats automating five, and it's faster.",
    },
    {
      term: "Unstructured input is where AI is genuinely new",
      explain:
        "Invoices in fifty layouts, emails describing requests in prose, scanned documents, free-text forms. Rule-based automation never handled these; AI does.",
      detail:
        "If a process is already structured and rule-based, ordinary software is cheaper, faster and more reliable. Reach for AI where the input resists rules.",
    },
    {
      term: "Extract, validate, then act — as separate stages",
      explain:
        "Pull the fields, check them against something authoritative, then take action. Collapsing these into one step removes the place where errors get caught.",
      detail:
        "Validation is what makes the difference between a useful system and a fast way to be wrong. Check totals, match against purchase orders, verify against master data.",
    },
    {
      term: "Confidence thresholds route the work",
      explain:
        "High-confidence extractions proceed automatically; low-confidence ones go to a person. This is the design that makes operations AI safe at volume.",
      detail:
        "Tune the threshold by the cost of the error. A misfiled document is cheap; a mispaid invoice is not.",
    },
    {
      term: "Exceptions are the actual work",
      explain:
        "The straightforward cases are easy to automate and rarely where the time goes. Exceptions — the unusual supplier, the disputed amount, the missing reference — consume the hours.",
      detail:
        "Automate the routine, route exceptions cleanly, and measure how many there really are. Teams are often surprised the exception rate is the number that matters.",
    },
    {
      term: "Silent failure is the operational risk",
      explain:
        "An automation that stops working without telling anyone is worse than the manual process, because nobody notices for weeks and the backlog has to be reconstructed.",
      detail:
        "Alert on failure and on non-execution. A job that didn't run is the failure mode people forget to monitor.",
    },
    {
      term: "Keep the manual path documented",
      explain:
        "When the automation is down — and it will be — someone needs to do the work. If the knowledge left with the automation, you have an outage rather than a slowdown.",
      detail:
        "Document the manual process and check periodically that someone could still follow it.",
    },
    {
      term: "Reconciliation is an ideal first project",
      explain:
        "Comparing records across two systems is tedious, well-defined, high volume, and the output is a list for humans to investigate rather than an autonomous action.",
      detail:
        "Low risk, obvious value, and it produces a data-quality picture that improves everything else you attempt afterwards.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What manual data handling costs in errors rather than hours.",
      walkthrough:
        "Ziemann, Eren and El-Osta examined 3,597 genomics papers published between 2005 and 2015, covering 7,467 supplementary gene lists produced in Excel. With default settings, Excel silently converts certain gene symbols into dates — SEPT2 becomes 2-Sep. No warning appears and the converted value looks entirely normal.",
      result:
        "19.6% of the papers examined contained conversion errors. Careful people, ordinary use of a standard tool, and it survived peer review. The operations lesson is that manual data steps produce errors nobody counts — so a business case built purely on time saved understates the value, and any automation replacing those steps needs validation built in rather than assumed.",
      source: {
        label: "Ziemann, Eren & El-Osta (2016) — Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "documented",
      scenario: "A pricing model whose per-unit error became a nine-figure loss.",
      walkthrough:
        "Zillow Offers used a model to price homes it bought and resold. Competing on speed meant committing to offers quickly, and the model failed to anticipate how far and fast prices would move. It bought above what properties could later be sold for, compounding across thousands of transactions before it appeared in the accounts.",
      result:
        "Zillow announced roughly $304 million of inventory write-down in Q3 2021 and wound the business down, cutting about 25% of its workforce. For operations the lesson is about irreversibility: a modest error rate is survivable when a human reviews before action and catastrophic when each output triggers a commitment. Route by consequence, not just by confidence.",
      source: {
        label: "Zillow Group Q3 2021 results & plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "illustration",
      scenario: "The approval step nobody could explain.",
      walkthrough:
        "A pattern that appears in most process-mapping exercises. A purchase workflow has four approval stages. Asked why the third exists, nobody knows — the person who required it left, the threshold it enforced was set when the company was a fifth of its size, and the approver rubber-stamps everything because they have no context to evaluate it. The team's plan had been to automate the routing between stages.",
      result:
        "Removing the stage was faster than automating it, and improved cycle time more. Process mapping frequently produces this result, which is why it belongs before any automation work rather than after. The steps worth automating are the ones that survive the question 'what happens if we stop doing this?'",
    },
  ],

  learningPath: [
    {
      title: "Inventory the recurring work",
      body: "For two weeks, log every operational task done more than weekly, with duration and frequency. Rank by annual hours rather than by irritation — the expensive tasks are usually short and frequent.",
      effort: "5 minutes a day",
      outcome: "A ranked list with real hours attached.",
    },
    {
      title: "Map your top candidate properly",
      body: "Write out every step including exceptions, decision points and who touches it. Ask of each step: what happens if we stop doing this?",
      effort: "1 day",
      outcome: "A documented process, and usually a shorter one.",
    },
    {
      title: "Delete before you automate",
      body: "Remove the steps that survived the question badly. This is faster than automating them, improves cycle time immediately, and reduces what you have to build.",
      effort: "Varies",
      outcome: "A leaner process before any technology is involved.",
    },
    {
      title: "Start with reconciliation or extraction",
      body: "Comparing records across systems, or pulling structured fields from unstructured documents. Both are high volume, well-defined, and produce output a human reviews.",
      effort: "3–6 weeks",
      outcome: "A working automation with no autonomous action.",
    },
    {
      title: "Add validation as a separate stage",
      body: "Check extracted values against authoritative sources — totals, purchase orders, master data, plausible ranges. This is where errors get caught, and it must be its own step.",
      effort: "2–3 weeks",
      outcome: "Errors surfaced before they propagate.",
    },
    {
      title: "Introduce confidence routing",
      body: "High-confidence results proceed; low-confidence ones queue for review. Set the threshold by what an error costs, and start conservative.",
      effort: "2 weeks",
      outcome: "Volume handled automatically with exceptions caught.",
    },
    {
      title: "Instrument for silence",
      body: "Alert on failure and on non-execution. A job that quietly didn't run is the failure mode that costs most, because nobody notices until the backlog surfaces.",
      effort: "1 week",
      outcome: "You'd know within a day rather than a month.",
    },
    {
      title: "Document the manual fallback",
      body: "Write down how to do the work by hand and check periodically that someone still could. Automation goes down; knowledge shouldn't go with it.",
      effort: "1 week",
      outcome: "A slowdown when it breaks, rather than an outage.",
    },
  ],

  mistakes: [
    {
      mistake: "Automating before mapping",
      why: "You encode the current mess, including the steps that exist for reasons that expired. The automation then makes the wrong process faster and harder to change.",
      fix: "Map first, delete what doesn't survive scrutiny, then automate what's left.",
    },
    {
      mistake: "Skipping the validation stage",
      why: "Extraction without checking is a fast way to be confidently wrong. The manual process had a person implicitly validating; removing them removes that check.",
      fix: "Make validation an explicit stage — totals, cross-references, plausible ranges, master data matching.",
    },
    {
      mistake: "Routing by confidence but not by consequence",
      why: "A 95%-confident extraction is fine for filing a document and not fine for paying an invoice. Confidence alone ignores what an error costs.",
      fix: "Route on both. Irreversible or expensive actions need review regardless of confidence.",
    },
    {
      mistake: "No alert for non-execution",
      why: "Failures get noticed; silence doesn't. A scheduled job that stopped running produces no error and no output, and the gap is found weeks later.",
      fix: "Alert on absence as well as on failure. Expect a run; complain if it doesn't happen.",
    },
    {
      mistake: "Losing the manual process",
      why: "When the automation breaks and nobody remembers how the work was done, a temporary fault becomes an operational outage.",
      fix: "Document the manual path and verify periodically that someone could still follow it.",
    },
    {
      mistake: "Automating an unstable process",
      why: "A process under active revision means rebuilding the automation repeatedly, and you'll likely encode a version already being changed.",
      fix: "Wait for stability. Lower-volume but settled processes are usually the better investment.",
    },
    {
      mistake: "Ignoring the exception rate",
      why: "Automating the routine 80% while exceptions consume most of the actual hours produces a disappointing result that looks like a technology failure.",
      fix: "Measure how much time exceptions really take before deciding what to build.",
    },
    {
      mistake: "Building without an owner",
      why: "Unowned automations rot. Formats change, credentials expire, and it becomes easier to work around it than to fix it.",
      fix: "Name an owner before building, and schedule a review twice a year.",
    },
  ],

  bestPractices: [
    "Map the process and delete indefensible steps before automating anything.",
    "Rank candidates by annual hours, not by how irritating they are.",
    "Reach for AI where input is unstructured; use ordinary software where it isn't.",
    "Separate extraction, validation and action into distinct stages.",
    "Validate against authoritative sources rather than trusting the extraction.",
    "Route by confidence and by consequence, not confidence alone.",
    "Keep a human in front of anything irreversible or expensive.",
    "Alert on failure and on non-execution.",
    "Document the manual fallback and verify it periodically.",
    "Name an owner and review twice a year.",
    "Measure exception rate — it's usually where the time actually goes.",
  ],

  proTips: [
    "Ask of every process step: what happens if we stop doing this? The answers reliably delete more work than any automation you were planning, and it costs an afternoon.",
    "Count errors in the current manual process, not just hours. Manual data handling produces mistakes nobody is measuring, and that's often the larger half of the business case.",
    "Write the failure alert before writing the automation. It forces you to define what 'working' means, and it's the piece that gets skipped when you're nearly finished.",
    "Start with reconciliation. It's tedious, well-defined, produces a list rather than an action, and the output tells you how bad your data quality is — which shapes everything you attempt next.",
    "Track the exception rate weekly. A rising rate is the earliest signal that something upstream changed, well before anyone reports a problem.",
    "Keep the manual runbook current enough that a new starter could follow it. That's the real test of whether the knowledge survived automation.",
  ],

  businessApplications: [
    "Invoice and receipt processing — extracting fields from varied layouts, validating against purchase orders, routing exceptions.",
    "Reconciliation between systems that don't integrate, producing a discrepancy list for investigation.",
    "Contract and document review — pulling key terms, dates and obligations into a structured register.",
    "Purchase and expense approval routing, with policy checks applied consistently.",
    "Supplier onboarding: extracting details from submitted documents and checking them against requirements.",
    "Compliance monitoring — flagging records that fall outside policy for human review.",
    "Recurring report assembly from multiple sources, with a person reviewing before distribution.",
    "Inbox triage for shared operational mailboxes, classifying and routing with context attached.",
  ],

  exercises: [
    {
      title: "The two-week inventory",
      brief:
        "Log every operational task done more than weekly, with duration and frequency. Rank by annual hours.",
      success: "A ranked list that differs from what you'd have guessed.",
      time: "5 minutes a day",
    },
    {
      title: "Map and interrogate",
      brief:
        "Document every step of your top candidate, including exceptions. Ask of each: what happens if we stop? Note how many have no good answer.",
      success: "At least one step removed before any automation.",
      time: "1 day",
    },
    {
      title: "Count the exceptions",
      brief:
        "For one process, measure what share of items are exceptions and what share of total time they consume. Compare the two numbers.",
      success: "Evidence about whether automating the routine cases is worth it.",
      time: "1 week",
    },
    {
      title: "Break it on purpose",
      brief:
        "Feed malformed, missing and unusual inputs into an existing automation. Confirm each fails loudly rather than silently proceeding.",
      success: "Every failure produces an alert someone would see.",
      time: "3–4 hours",
    },
  ],

  checklist: [
    "The process is mapped, including exceptions and touchpoints",
    "Steps that couldn't survive 'what if we stop?' have been removed",
    "Candidates were ranked by annual hours, not irritation",
    "The input genuinely resists rule-based handling",
    "Extraction, validation and action are separate stages",
    "Validation checks against an authoritative source",
    "Routing considers consequence as well as confidence",
    "Anything irreversible passes a human first",
    "Alerts fire on failure and on non-execution",
    "The manual fallback is documented and still followable",
    "An owner is named and a review is scheduled",
    "Exception rate is measured and tracked",
  ],

  faqs: [
    {
      q: "What's the best first operations automation?",
      a: "Reconciliation between two systems, or extraction from unstructured documents. Both are high volume, well-defined, and produce output a human reviews rather than an autonomous action.",
    },
    {
      q: "When should I use AI rather than ordinary automation?",
      a: "When the input resists rules — varied document layouts, prose requests, scanned material, free-text fields. If the input is already structured, conventional software is cheaper, faster and more reliable.",
    },
    {
      q: "How accurate does extraction need to be?",
      a: "It depends entirely on what an error costs and who catches it. Route by consequence: high-confidence results can proceed for cheap, reversible actions; anything expensive or irreversible needs a human regardless of confidence.",
    },
    {
      q: "What's the most common operations mistake?",
      a: "Automating before mapping. Process mapping routinely finds steps that exist for expired reasons, and deleting them is faster than automating them — and improves cycle time more.",
    },
    {
      q: "How do I stop it failing silently?",
      a: "Alert on non-execution as well as on failure. A job that didn't run produces no error and no output, and that's the failure mode that costs the most because nobody notices.",
    },
    {
      q: "Should we keep doing it manually as a backup?",
      a: "Keep the knowledge, not the duplicate work. Document the manual process and verify periodically that someone could still follow it — otherwise a temporary fault becomes an outage.",
    },
    {
      q: "How do we handle exceptions?",
      a: "Route them cleanly to a person with the context attached, and measure how many there are. If exceptions consume most of the time, automating the routine cases will disappoint — and that's worth knowing before you build.",
    },
  ],

  tools: [
    { name: "Document extraction services", what: "Azure Document Intelligence, AWS Textract and similar for varied layouts and scans.", cost: "Paid" },
    { name: "n8n / Make / Zapier", what: "Workflow orchestration between systems. n8n self-hosts if data can't leave your infrastructure.", cost: "Freemium" },
    { name: "Python + a scheduler", what: "Unglamorous and durable. Often the right answer where real logic is involved.", cost: "Free" },
    { name: "Monitoring with dead-man's-switch alerting", what: "Alerts when a job doesn't run, not just when it errors. The piece most often missing.", cost: "Freemium" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "What manual data steps cost in errors rather than hours. Two pages.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
    { title: "Zillow Group Q3 2021 results", kind: "Docs", note: "Why irreversible actions need routing by consequence, not just confidence.", url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx" },
    { title: "Google's Rules of Machine Learning", kind: "Docs", note: "Rule one is essentially 'try it without ML first' — sound operations advice generally.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "automation-worth-building", anchor: "the payback maths for automation generally", context: "In the introduction" },
    { slug: "data-cleaning-fundamentals", anchor: "validating extracted data properly", context: "In the validation concept" },
    { slug: "measuring-ai-roi-in-business", anchor: "building the case with error costs included", context: "In the documented gene-name example" },
  ],

  relatedGuides: [
    "automation-worth-building",
    "measuring-ai-roi-in-business",
    "data-cleaning-fundamentals",
  ],

  conclusion: [
    "Start by mapping one process properly and asking of every step what would happen if you stopped. That afternoon deletes more work than the automation would have saved, and it makes whatever you build afterwards worth building.",
  ],

  cta: {
    headline: "Back-office process eating hours?",
    body:
      "Map it before automating it — sometimes that alone is the answer. We'll walk a process with you and say honestly whether AI belongs in it.",
    label: "Walk a process with us",
    href: "/contact",
  },
};

export default guide;
