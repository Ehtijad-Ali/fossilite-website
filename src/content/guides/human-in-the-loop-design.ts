import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "human-in-the-loop-design",
  seoTitle: "Human in the Loop: Where to Put the Person",
  metaDescription:
    "A decision framework for placing human review in an AI workflow. The two questions that decide it, the four patterns, and how to tell when review has become a rubber stamp.",
  title: "Human in the Loop Design",
  keywords: [
    "human in the loop",
    "ai human review",
    "approval workflow ai",
    "ai oversight design",
    "human oversight automation",
    "ai review process",
  ],
  category: "artificial-intelligence",
  level: "Intermediate",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "'We keep a human in the loop' is the most common answer to an AI risk question and one of the least informative. It can mean a person approves every action, or it can mean someone glances at a dashboard weekly, and those are entirely different systems.",
    "The useful conversation is about placement. Where exactly does the person sit, what are they looking at, how long do they have, and what happens when they are busy. Get that right and a system with a mediocre model is safe. Get it wrong and an excellent model is a liability.",
    "Two questions decide it. Everything else in this guide follows from them.",
  ],

  coreConcepts: [
    {
      term: "Question one: is the action reversible?",
      explain:
        "Can you undo it cheaply, quickly and completely? A draft saved is reversible. An email sent, a payment made, a record deleted, a candidate rejected are not.",
      detail:
        "Reversibility, not accuracy, is the variable that should decide whether a person stands in front of an action. A ninety-nine percent accurate system doing irreversible things is worse than a ninety percent one doing reversible ones.",
    },
    {
      term: "Question two: what does an error cost, and who pays it?",
      explain:
        "A misfiled document costs a minute of someone's time. A wrongly rejected application costs a person something they cannot get back. Rank by who bears the cost, not by how bad it feels internally.",
      detail:
        "Errors borne by the customer or by a third party deserve more oversight than errors borne by you, even when yours are more expensive.",
    },
    {
      term: "Pattern one: review before action",
      explain:
        "The system prepares, a person approves, then it executes. The strongest control and the most expensive, because it puts a human in the critical path of every case.",
      detail:
        "Correct for irreversible, high-cost actions. Wrong for high volume with low stakes, where it becomes a queue nobody clears.",
    },
    {
      term: "Pattern two: confidence routing",
      explain:
        "High confidence proceeds, low confidence queues for a person. The workhorse pattern, and the one that makes volume survivable.",
      detail:
        "Set the threshold per field or per action type, weighted by what that specific thing costs when wrong. One global threshold is the most common mistake here.",
    },
    {
      term: "Pattern three: sampled review after the fact",
      explain:
        "Everything proceeds, a person reads a random sample afterwards. Cheap, and the only pattern that scales to very high volume.",
      detail:
        "Only acceptable when actions are reversible. Its real value is detection: it is how you find out the system has drifted before your customers tell you.",
    },
    {
      term: "Pattern four: escalation on signal",
      explain:
        "The system proceeds until something specific happens, then hands over. Frustration detected, second contact on the same issue, any mention of cancellation, legal or a regulator.",
      detail:
        "Best combined with one of the others. On its own it only catches what you thought to listen for.",
    },
    {
      term: "The rubber stamp test",
      explain:
        "Measure how often your reviewer changes anything. If the edit rate is near zero, you do not have review, you have a click, and everyone in the organisation believes a control exists that does not.",
      detail:
        "Anything under about five percent deserves investigation. Either the system is genuinely excellent, in which case widen automation and save the human effort, or the reviewer has stopped looking.",
    },
    {
      term: "Give the reviewer what they need to disagree",
      explain:
        "Show the source, the confidence, and what the system was uncertain about. A reviewer shown only a conclusion can only agree with it.",
      detail:
        "This is the single design change that most improves review quality, and it costs nothing but layout.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Automated pricing with no human in front of it.",
      walkthrough:
        "Zillow Offers used a model to price homes the company bought and resold. Competing on speed meant committing to offers quickly. The model failed to anticipate how far and fast prices moved, and it bought above what properties could later be sold for, compounding across thousands of transactions.",
      result:
        "The company announced roughly $304 million of inventory write-down in Q3 2021 and wound the business down. Apply question one: each output was a binding commitment to buy a house, which is about as irreversible as a business action gets. That alone puts it in pattern one territory regardless of how accurate the model was, and the speed advantage that made review feel impossible was the same thing that made the errors compound.",
      source: {
        label: "Zillow Group Q3 2021 results and plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "documented",
      scenario: "The oversight that was removed and then put back.",
      walkthrough:
        "Klarna reported in February 2024 that an AI assistant was handling two-thirds of its customer service chats in its first month, with resolution times falling sharply. In May 2025 the chief executive said the cost-cutting had gone too far and the company began recruiting human agents again so customers would always have the route to a person.",
      result:
        "Both statements are true, which is what makes this useful. Confidence routing worked on the routine tier. What was missing was pattern four: a reliable escalation on frustration and complexity, always available. The lesson is not that automation failed but that one pattern was doing a job that needed two.",
      source: {
        label: "Klarna press release (February 2024) and coverage of the May 2025 reversal",
        url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/",
      },
    },
    {
      kind: "illustration",
      scenario: "The approval queue that approved everything.",
      walkthrough:
        "A finance team routes low-confidence extractions to a reviewer. Six months in, someone checks the edit rate: under two percent. The reviewer is processing forty items an hour and the interface shows the extracted values but not the source document, so disagreeing would mean opening a second system.",
      result:
        "The fix was not more training or a stricter threshold. It was putting the document beside the values on one screen. The edit rate went into double figures immediately, which meant the errors had been there all along and the control had been decorative.",
    },
  ],

  learningPath: [
    {
      title: "List every action the system can take",
      body: "Not what it can read. What it can write, send, change or delete. Be exhaustive; this list is usually longer than the design document suggests.",
      effort: "2 hours",
      outcome: "A complete inventory of actions.",
    },
    {
      title: "Mark each one reversible or not",
      body: "Cheaply, quickly and completely reversible, or not. Be strict. 'We could send a correction email' is not reversibility.",
      effort: "1 hour",
      outcome: "The list split into two, which mostly decides your patterns for you.",
    },
    {
      title: "Note who bears the cost of each error",
      body: "You, the customer, or a third party. Anything where the customer or a third party pays gets more oversight than the internal cost alone would justify.",
      effort: "1 hour",
      outcome: "A ranking that is not the same as the financial one.",
    },
    {
      title: "Assign a pattern per action",
      body: "Irreversible and costly goes to review before action. High volume and reversible goes to confidence routing plus sampling. Add escalation triggers on top of anything customer-facing.",
      effort: "2 hours",
      outcome: "A written mapping from action to oversight pattern.",
    },
    {
      title: "Design the reviewer's screen",
      body: "Source, confidence, and the specific reason it was flagged, on one screen with the decision. Time how long one review takes.",
      effort: "Varies",
      outcome: "A per-review handling time you can put in the business case.",
    },
    {
      title: "Measure the edit rate after a month",
      body: "How often does the reviewer change something? Under five percent means investigate. It is either a rubber stamp or an argument for widening automation.",
      effort: "1 hour",
      outcome: "Evidence about whether your control is real.",
    },
  ],

  mistakes: [
    {
      mistake: "Choosing the pattern by accuracy rather than reversibility",
      why: "Accuracy tells you how often you will be wrong. Reversibility tells you what happens when you are. The second decides how much oversight you need.",
      fix: "Split the action list by reversibility first, and let accuracy tune the threshold afterwards.",
    },
    {
      mistake: "One confidence threshold for everything",
      why: "The cost of a wrong category and the cost of a wrong payment amount are not comparable, so one number cannot be right for both.",
      fix: "Threshold per field or per action type, weighted by what that thing costs when wrong.",
    },
    {
      mistake: "Reviewing without showing the source",
      why: "A reviewer shown a conclusion and no evidence can only agree. You have added a step and no control.",
      fix: "Source and conclusion on the same screen, always.",
    },
    {
      mistake: "Never measuring the edit rate",
      why: "A rubber stamp is indistinguishable from a working control on an org chart, and the difference only becomes visible during an incident.",
      fix: "Track it monthly. It is one query.",
    },
    {
      mistake: "Adding review without adding capacity",
      why: "A queue nobody has time to clear becomes a backlog, then a bottleneck, then something people find a way around.",
      fix: "Cost the review time before you commit to the pattern, and size the queue against real staffing.",
    },
  ],

  bestPractices: [
    "Decide by reversibility first, cost second, accuracy third.",
    "Put a person in front of every irreversible action.",
    "Route by confidence for volume, with thresholds set per action type.",
    "Sample reviewed output even when confidence is high. It is your drift detector.",
    "Add escalation triggers on anything customer-facing.",
    "Show source and confidence on the reviewer's screen.",
    "Measure the edit rate monthly and investigate anything under five percent.",
    "Cost the review time before committing to a pattern.",
  ],

  faqs: [
    {
      q: "Does a human in the loop remove our liability?",
      a: "No. It changes who made the decision and improves the outcome, both of which matter, but responsibility for what your system does stays with your organisation.",
    },
    {
      q: "How do we know if our review is real?",
      a: "The edit rate. If reviewers rarely change anything, either the system is excellent and you should widen automation, or the review has become a click. Both need action, and they need different action.",
    },
    {
      q: "What sample rate for after-the-fact review?",
      a: "Start higher than feels necessary, around ten percent, and reduce it once you have evidence about the error rate. Sampling too little early is how drift goes unnoticed.",
    },
    {
      q: "Can the AI review the AI?",
      a: "For flagging candidates and prioritising a queue, usefully. As the only oversight on an irreversible action, no. Correlated failures are the specific reason: the checker tends to be wrong about the same things the doer was.",
    },
    {
      q: "Is 100% human review ever right?",
      a: "Yes, for low volume and high stakes, and as the starting position for anything new. Then widen deliberately, using the edit rate as the evidence rather than the ambition.",
    },
  ],

  tools: [
    { name: "A review interface built for disagreement", what: "Source, confidence and reason for flag beside the decision. The highest-return thing you can build here.", cost: "Varies" },
    { name: "Edit rate tracking", what: "One query, run monthly. The difference between a control and a belief.", cost: "Free" },
    { name: "Confidence scores from your model or extraction service", what: "The input that makes routing possible at all.", cost: "Varies" },
  ],

  resources: [
    { title: "Rules of Machine Learning", kind: "Docs", note: "Google's engineering guidance, strong on where automation belongs and where it does not.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "the-ai-trust-audit", anchor: "the audit question this answers", context: "Question four" },
    { slug: "document-processing-with-ai", anchor: "confidence routing in practice", context: "Worked example" },
    { slug: "ai-for-customer-support", anchor: "escalation triggers worth building", context: "Pattern four" },
  ],

  relatedGuides: ["the-ai-trust-audit", "document-processing-with-ai", "ai-for-customer-support"],

  conclusion: [
    "Pull the edit rate on whatever review process you already run. If it is under five percent, you have either found a control that is not working or an argument for automating more, and both are worth the ten minutes it takes to check.",
  ],
};

export default guide;
