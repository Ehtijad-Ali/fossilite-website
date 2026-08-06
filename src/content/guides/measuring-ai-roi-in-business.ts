import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "measuring-ai-roi-in-business",
  seoTitle: "Measuring AI ROI: Building a Business Case That Holds",
  metaDescription:
    "How to work out whether an AI project pays back: baselines, the costs nobody forecasts, and why most reported AI ROI figures don't survive scrutiny.",
  title: "Measuring AI ROI in Business",
  keywords: [
    "ai roi",
    "ai business case",
    "measuring ai value",
    "ai project payback",
    "ai cost benefit analysis",
    "ai pilot metrics",
  ],
  category: "business-strategy",
  level: "Intermediate",
  updated: "2026-08-05",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "Most AI business cases are built backwards. Someone decides to do the project, then assembles numbers that justify it. The numbers are usually time-saved multiplied by a loaded hourly rate, which produces an impressive figure and predicts almost nothing about whether the project pays back.",
    "The honest version is harder and much shorter. What does this cost today, measured rather than estimated? What will it cost to build, run and maintain? What's the realistic share of the work AI actually removes, as opposed to shifts? And how will you know if it stops working?",
    "This guide covers how to build that case, the costs teams reliably omit, why time-saved is the weakest metric available, and how to read the ROI claims you'll be shown by vendors — including the most-quoted AI success story in business, which is more complicated than the headline.",
  ],

  whyItMatters: [
    "AI projects fail commercially far more often than they fail technically. The system works, the demo impressed everyone, and eighteen months later nobody can say whether it made money. That's a measurement failure, and it's avoidable with a few hours of work before anything is built.",
    "It also determines what you build. A properly constructed case usually reveals that the exciting project has weak economics and a boring one has excellent economics. Teams that skip the analysis systematically pick the wrong projects: not through incompetence, but because enthusiasm and payback aren't correlated.",
    "And you will be sold to using ROI numbers. Knowing how those are constructed — what's counted, what's omitted, what timeframe — is the difference between evaluating a claim and being impressed by one.",
  ],

  coreConcepts: [
    {
      term: "Measure the baseline before you build",
      explain:
        "You cannot demonstrate improvement without a before. Measure current volume, handling time, error rate and cost per unit while the process is still entirely manual.",
      detail:
        "This is the step that gets skipped, and it's unrecoverable — once the AI is live you can never go back and measure what it replaced. A week of measurement now saves an unanswerable argument later.",
    },
    {
      term: "Time saved is the weakest metric",
      explain:
        "Hours saved multiplied by an hourly rate assumes the freed time converts to value. Usually it disperses into other work, and no cost line ever changes.",
      detail:
        "Time saved is real but it isn't money unless something else happens: headcount doesn't grow, work that was queued gets done, or capacity is sold. Say which one, or don't count it.",
    },
    {
      term: "Count the costs that don't appear on the invoice",
      explain:
        "Build cost is visible. Inference cost, maintenance, monitoring, human review, prompt and model updates, and the internal time spent on all of it are not, and together they usually exceed the build.",
      detail:
        "Review time is the most-omitted line. If a person checks every output, you've bought speed rather than headcount, and the business case needs to say so.",
    },
    {
      term: "Error cost belongs in the model",
      explain:
        "AI changes the error profile, not just the speed. Fewer errors of one kind, new errors of another, and different detection times. That has a cost, positive or negative.",
      detail:
        "A process where errors were caught by the person doing the work, and are now caught by a customer, has moved cost onto the most expensive detection point available.",
    },
    {
      term: "Distinguish removed work from shifted work",
      explain:
        "Automation that moves a task from one team to another, or from doing to checking, hasn't removed cost. It's redistributed it, sometimes usefully and sometimes not.",
      detail:
        "The test: after deployment, does total organisational effort on this process fall? If nobody's workload changed, the saving is theoretical.",
    },
    {
      term: "Pilot on a slice, measure honestly, then decide",
      explain:
        "Run on a defined subset with the baseline already captured, for long enough to see maintenance and edge cases, then compare against the same period's manual equivalent.",
      detail:
        "Pilots that are declared successful in week two have measured novelty. Most of the real cost — drift, exceptions, the work of keeping it current — shows up after month two.",
    },
    {
      term: "Some value is real and unquantifiable",
      explain:
        "Faster response times, fewer things falling through, work getting done that previously didn't. These matter and resist a clean number.",
      detail:
        "State them separately as qualitative benefits rather than inventing a value to make the spreadsheet work. A case with an honest qualitative section is more persuasive than one with a fabricated number in it.",
    },
    {
      term: "Plan for the decay",
      explain:
        "Models drift, processes change, upstream formats move. Performance degrades without anyone changing anything, so ongoing measurement is part of the cost.",
      detail:
        "A project with no monitoring will keep reporting its launch-week numbers indefinitely, long after they've stopped being true.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The most-quoted AI ROI figure in business, and what the headline leaves out.",
      walkthrough:
        "In February 2024 Klarna reported its AI assistant handling two-thirds of customer service chats in month one — 2.3 million conversations, resolution time down from 11 minutes to under 2, a 25% drop in repeat inquiries, and an estimated $40 million profit improvement for 2024, described as equivalent to the work of 700 full-time agents. It became the reference case for AI ROI. In May 2025 the CEO told Bloomberg the cost-cutting had gone too far and the company began rehiring human agents, saying: \"We focused too much on cost. The result was lower quality.\"",
      result:
        "Three lessons for anyone building a case. The gains were real, measured against a genuine baseline — that part is exemplary. The \"700 agents\"figure was a modelled equivalence rather than a headcount, which is exactly the kind of distinction that disappears when a number is quoted back at you. And the case omitted a cost that only appeared later: the quality decline on complex contacts, and the expense of reversing. A twelve-month ROI figure would have looked excellent; the eighteen-month one was different.",
      source: {
        label: "Klarna press release (Feb 2024) and Forbes coverage of the May 2025 reversal",
        url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/",
      },
    },
    {
      kind: "documented",
      scenario: "A forecasting model whose errors were invisible until they weren't.",
      walkthrough:
        "Zillow Offers used a model to price homes it bought directly and resold. Competing on speed meant committing to offers quickly, and the model failed to anticipate how far and fast prices would move post-pandemic. It bought above what properties could later be sold for — an error compounding across thousands of transactions before it was visible in the accounts.",
      result:
        "In its Q3 2021 results Zillow announced roughly $304 million of inventory write-down, attributing it to purchasing homes at prices above its own current estimates of future selling prices, and wound the business down with a workforce reduction of about 25%. The ROI lesson is about error cost: a modest per-unit forecasting error looked acceptable in isolation and was catastrophic once each prediction triggered an irreversible purchase. Any business case for a model that acts must price the error, not just the efficiency.",
      source: {
        label: "Zillow Group Q3 2021 results & plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "illustration",
      scenario: "The saving that never reached a cost line.",
      walkthrough:
        "A recognisable outcome. A tool saves each of twelve people about forty minutes a day. The business case multiplies that out to roughly two full-time equivalents and a healthy annual figure. A year later the tool is well liked, nobody wants it removed, and no cost line in the business has changed. Headcount is the same, the payroll is the same, and the forty minutes went into other work — some valuable, some not.",
      result:
        "The saving was real as time and never real as money, because no decision converted it. Time saved becomes financial only when something specific follows: a role isn't backfilled, queued work gets done, or capacity is sold. A business case that claims time savings should name which of those three it's relying on: and if it can't, it should present the benefit qualitatively rather than as a number.",
    },
  ],

  learningPath: [
    {
      title: "Pick one process and measure it manually",
      body: "Choose a specific process, not a department. Measure volume, time per unit, error rate and who touches it — for at least two weeks, before anything is built.",
      effort: "1–2 weeks, low effort",
      outcome: "A baseline you can never reconstruct later.",
    },
    {
      title: "Write down what a mistake costs",
      body: "For this process, what happens when it goes wrong now? Who catches it, how fast, what does fixing it cost? You need this to price the change in error profile.",
      effort: "2–3 hours",
      outcome: "An error cost, in money and detection time.",
    },
    {
      title: "Build the full cost side",
      body: "Build, inference, maintenance, monitoring, human review, and the internal time on all of it. Add an annual maintenance figure. It's the line most often omitted and rarely small.",
      effort: "3–4 hours",
      outcome: "A cost total that includes the invisible lines.",
    },
    {
      title: "State the conversion mechanism",
      body: "If you're claiming time savings, name what converts them: a role not backfilled, queued work completed, capacity sold. If none applies, move the benefit to the qualitative section.",
      effort: "1 hour",
      outcome: "A benefits figure that would survive a finance review.",
    },
    {
      title: "Set the decision threshold before the pilot",
      body: "Write the number that means proceed and the number that means stop, and share it with someone who'll hold you to it. Deciding after seeing results is how every pilot succeeds.",
      effort: "1 hour",
      outcome: "A pre-committed threshold with a witness.",
    },
    {
      title: "Pilot on a slice for long enough",
      body: "Run on a defined subset for at least two months. The first fortnight measures novelty; drift, exceptions and maintenance appear later.",
      effort: "2–3 months",
      outcome: "Numbers that include the boring costs.",
    },
    {
      title: "Compare like with like, then decide",
      body: "Set pilot results against the same period's manual baseline. Include the review time and the maintenance actually incurred, not the forecast.",
      effort: "1 week",
      outcome: "A go/no-go you can defend to a sceptic.",
    },
    {
      title: "Instrument it before scaling",
      body: "Decide what you'll monitor and what threshold triggers a review. Without this the project reports its launch-week numbers forever.",
      effort: "1 week",
      outcome: "You'd notice degradation before it costs you.",
    },
  ],

  mistakes: [
    {
      mistake: "Not capturing a baseline",
      why: "Once the process changes, the pre-AI numbers are gone. Every later claim becomes an argument between recollections.",
      fix: "Measure for two weeks before building anything. It's the cheapest and most irreversible step in the whole project.",
    },
    {
      mistake: "Counting time saved as money by default",
      why: "Freed time disperses into other work unless a decision converts it. The spreadsheet says two FTEs; the payroll says nothing changed.",
      fix: "Name the conversion mechanism, or report the benefit qualitatively. Both are honest; the unexamined multiplication isn't.",
    },
    {
      mistake: "Omitting review and maintenance",
      why: "They're the largest ongoing costs and neither appears on an invoice. A process where a human checks every output has not removed the human.",
      fix: "Cost review time at a real rate and add an annual maintenance estimate before deciding.",
    },
    {
      mistake: "Ignoring the change in error profile",
      why: "AI usually reduces one error type and introduces another, often detected later and by someone more expensive — a customer.",
      fix: "Model errors explicitly: what kind, caught by whom, how fast, at what cost. Compare against the manual profile.",
    },
    {
      mistake: "Declaring success in week two",
      why: "Early results measure novelty and the easy cases. Drift, exceptions and maintenance are all later phenomena.",
      fix: "Run at least two months before drawing conclusions, and require the pilot to survive a awkward period.",
    },
    {
      mistake: "Setting the success threshold after seeing results",
      why: "Given a range of metrics and an outcome, anyone can find the framing that justifies continuing. Every pilot succeeds under those conditions.",
      fix: "Write the go/no-go number first and tell someone else what it is.",
    },
    {
      mistake: "Cutting headcount on a forecast",
      why: "Savings arrive later than modelled and quality costs arrive sooner. Rehiring is slower and more expensive than not firing.",
      fix: "Let the workload shift demonstrably, then redeploy. Treat headcount as the last lever.",
    },
    {
      mistake: "Accepting vendor ROI figures at face value",
      why: "They're constructed from a favourable baseline over a favourable window, and rarely include the customer's own review and maintenance burden.",
      fix: "Ask what the baseline was, what timeframe, what's excluded, and what happened in the following year. The good vendors answer readily.",
    },
  ],

  bestPractices: [
    "Measure the manual baseline before building. It is unrecoverable afterwards.",
    "Price the current error profile: type, detector, detection time, cost to fix.",
    "Include inference, maintenance, monitoring, review and internal time on the cost side.",
    "Name the mechanism that converts time saved into money, or report it qualitatively.",
    "Write the go/no-go threshold before the pilot and give it to someone else.",
    "Pilot on a defined slice for at least two months.",
    "Compare pilot results against the same period's manual baseline, not against the forecast.",
    "Report qualitative benefits separately and honestly rather than assigning them invented values.",
    "Instrument for drift before scaling, with a threshold that triggers review.",
    "Re-measure quarterly. A number from launch week stops being true quickly.",
  ],

  proTips: [
    "The single highest-return hour in an AI project is the one spent measuring the manual process before you touch it. Nothing else you do later can substitute for it.",
    "Ask 'whose budget line falls?' about every claimed saving. If nobody can name one, you have a productivity story rather than a financial one — which is fine, as long as it's presented that way.",
    "Model the eighteen-month case, not the twelve. Most AI reversals become visible in the second year, after the novelty and before the maintenance has been priced properly.",
    "Track cost per successfully completed task, not per API call. Systems that look cheap per call and fail often are frequently the most expensive per outcome.",
    "When a vendor quotes a customer's ROI, ask what that customer's baseline was. A surprising share of impressive figures are measured against a process nobody had optimised.",
    "Keep a written record of what you predicted versus what happened. Calibrating your own forecasting is worth more over five years than any individual project's result.",
  ],

  businessApplications: [
    "Investment decisions between competing AI proposals, where the boring one frequently has the better economics.",
    "Vendor evaluation — the questions in this guide separate substantiated claims from constructed ones.",
    "Board and investor reporting, where an honest qualitative section is more credible than a fabricated number.",
    "Pilot design, so a trial produces a decision rather than an impression.",
    "Post-implementation review, comparing what actually happened against the case that funded it.",
    "Budget forecasting for inference and maintenance, which are ongoing and routinely under-provisioned.",
  ],

  exercises: [
    {
      title: "Capture a baseline",
      brief:
        "Pick one process. Measure volume, time per unit, error rate and touchpoints for two weeks, changing nothing.",
      success: "Four numbers you didn't have before, from observation rather than estimate.",
      time: "2 weeks, light",
    },
    {
      title: "Price the errors",
      brief:
        "For that process, document what goes wrong now, who catches it, how long that takes and what it costs to fix.",
      success: "An error cost you'd defend in a finance meeting.",
      time: "2–3 hours",
    },
    {
      title: "The conversion test",
      brief:
        "Take an existing claimed time saving in your business. Identify which budget line it reduced. If none, rewrite the claim.",
      success: "Either a named cost line, or an honest reclassification.",
      time: "1–2 hours",
    },
    {
      title: "Interrogate a vendor case study",
      brief:
        "Take any published AI ROI claim. Work out the baseline, the timeframe, what's excluded and what happened afterwards.",
      success: "A written list of what the number doesn't tell you.",
      time: "1–2 hours",
    },
  ],

  checklist: [
    "A manual baseline was captured before building",
    "The current error profile is documented with costs",
    "Cost includes build, inference, maintenance, monitoring, review and internal time",
    "Annual maintenance is estimated, not omitted",
    "Any time-saving claim names its conversion mechanism",
    "The go/no-go threshold was written before the pilot and shared",
    "The pilot ran at least two months on a defined slice",
    "Results are compared against the same period's manual baseline",
    "Qualitative benefits are stated separately, without invented values",
    "Monitoring exists with a threshold that triggers review",
    "The case models eighteen months, not twelve",
  ],

  faqs: [
    {
      q: "What's a realistic ROI for an AI project?",
      a: "There's no benchmark that transfers — it depends entirely on your current cost per unit and how much of the work is routine. Anyone quoting a universal figure is selling something. Measure your own baseline.",
    },
    {
      q: "Why shouldn't I count hours saved as money?",
      a: "Because freed hours only become money if something converts them: a role isn't backfilled, queued work gets done, or capacity is sold. Without one of those, the hours disperse and no cost line changes.",
    },
    {
      q: "How long should a pilot run?",
      a: "At least two months. The first fortnight measures novelty and the easy cases; drift, exceptions and maintenance — the costs that decide viability — appear later.",
    },
    {
      q: "What costs do people most often forget?",
      a: "Human review time, ongoing maintenance, and the internal hours spent on both. If a person checks every output, you've bought speed rather than headcount, and the case should say so plainly.",
    },
    {
      q: "How do I evaluate a vendor's ROI claim?",
      a: "Ask four things: what was the baseline, over what window, what's excluded from the cost side, and what happened in the following year. The most-quoted AI ROI story in business looks materially different at eighteen months than at twelve.",
    },
    {
      q: "What if the benefits are real but unquantifiable?",
      a: "State them qualitatively and separately. Faster response, fewer things dropped, work that previously didn't happen — these are legitimate. Inventing a number for them weakens an otherwise sound case.",
    },
    {
      q: "Should we cut headcount to realise the savings?",
      a: "Not on a forecast. The documented reversals came from cutting early then rehiring at higher cost. Let the workload shift demonstrably, then redeploy people onto work that needs judgement.",
    },
  ],

  tools: [
    { name: "A spreadsheet", what: "Genuinely sufficient. The difficulty is honesty about inputs, not modelling sophistication.", cost: "Free" },
    { name: "Time tracking", what: "For the baseline. Two weeks of real measurement beats any estimate.", cost: "Freemium" },
    { name: "Provider usage dashboards", what: "Actual inference cost per period. Forecast it from real usage, not from a pricing page.", cost: "Free" },
    { name: "Your helpdesk or process analytics", what: "Whatever already records volume and handling time — the baseline is often sitting there unexported.", cost: "Paid" },
  ],

  resources: [
    { title: "Klarna AI assistant press release", kind: "Docs", note: "The reference AI ROI case. Read alongside the 2025 reversal — the pair is the lesson.", url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/" },
    { title: "Zillow Group Q3 2021 results", kind: "Docs", note: "What happens when a model's error cost isn't priced. Primary source, not commentary.", url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx" },
    { title: "Google's Rules of Machine Learning", kind: "Docs", note: "Rule one is essentially 'try it without ML first' — the same discipline this guide applies to spending.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "ai-for-customer-support", anchor: "the support metrics worth pairing", context: "In the baseline concept" },
    { slug: "evaluating-ai-systems", anchor: "measuring whether the system works at all", context: "In the monitoring concept" },
    { slug: "automation-worth-building", anchor: "the same payback maths for non-AI automation", context: "In the introduction" },
  ],

  relatedGuides: [
    "ai-for-customer-support",
    "automation-worth-building",
    "evaluating-ai-systems",
  ],

  conclusion: [
    "Start with two weeks of measuring one process, changing nothing. It's the cheapest step, it's the only irreversible one, and almost nobody does it.",
  ],

  cta: {
    headline: "Need a number before you can get approval?",
    body:
      "We'll help you build a case with a threshold set in advance, so the project can be judged honestly rather than defended after the fact.",
    label: "Build the business case",
    href: "/contact",
  },
};

export default guide;
