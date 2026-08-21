import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "learning-a-business-fast",
  seoTitle: "Learning a Business Fast: A BA's First Thirty Days",
  metaDescription:
    "How to understand an operation you have just joined. Follow the money, follow one order end to end, find the workarounds, and the questions that make people talk.",
  title: "Learning a Business Fast",
  keywords: [
    "business analyst first 30 days",
    "understanding a business",
    "business domain knowledge",
    "ba onboarding",
    "learning a new domain",
    "business context analysis",
  ],
  category: "business-analysis",
  level: "Beginner",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "You have thirty days before people stop forgiving basic questions. That is not a rule anybody states, but it is real, and after it the cost of asking what a term means goes up sharply. So the first month is not about contributing. It is about buying context while questions are still cheap.",
    "Most people spend it reading documentation. Documentation describes the business somebody intended to build. You need the one that exists, which is a different organisation with the same name.",
    "What follows is the sequence I would use walking into any operation cold, whether that is a new employer, a new client, or a department you have never worked with inside a company you already know.",
  ],

  coreConcepts: [
    {
      term: "Follow the money first",
      explain:
        "Find out how the business makes money, at the level of a single transaction. Who pays, for what, how much, how often, and what has to be true for that payment to arrive.",
      detail:
        "Everything else in the operation exists to make that transaction happen or to stop it going wrong. Without this frame you cannot judge whether anything matters.",
    },
    {
      term: "Then follow one real case end to end",
      explain:
        "One order, one claim, one application. Track it from the moment it arrives to the moment the money settles, through every system and every pair of hands.",
      detail:
        "This single exercise teaches more than a fortnight of reading. It also gives you a shared reference: for the rest of your time there you can say 'like that Renfrew order' and people know what you mean.",
    },
    {
      term: "Ask for the last five, not a typical one",
      explain:
        "A typical case is a story people construct to explain their work. Real cases contain the exceptions, and the exceptions are where the business actually lives.",
      detail:
        "Expect at least one of the five to have gone somewhere nobody mentioned. That is the point of asking for five.",
    },
    {
      term: "Find the spreadsheets",
      explain:
        "Every serious gap between what the systems do and what the business needs is bridged by a spreadsheet somebody maintains privately. Find them and you have found the requirements backlog.",
      detail:
        "Ask directly and without judgement: what do you keep outside the system, and why? People answer this honestly if you make clear you are not there to take it away.",
    },
    {
      term: "Learn the vocabulary before you use it",
      explain:
        "Every business has words that mean something specific and local. 'Active', 'complete', 'customer' and 'order' are all landmines. Two departments will use one of them to mean two different things.",
      detail:
        "Keep a glossary from day one, with who told you and when. When you later find two definitions of the same word, you have found a real problem, not a vocabulary issue.",
    },
    {
      term: "Map the org chart that actually operates",
      explain:
        "The published one tells you reporting lines. You need the other one: who has to agree, who can stop things, and who everyone quietly asks when they are unsure.",
      detail:
        "The third category is the most useful and never appears on any chart. Find that person early and be useful to them.",
    },
    {
      term: "Get read access to the data",
      explain:
        "Ask on day one, because it takes three weeks. Being able to check a claim yourself changes the pace of everything you do afterwards.",
      detail:
        "It also changes how people treat you. A BA who can produce a count in an afternoon is a different colleague from one who raises a request.",
    },
    {
      term: "Say what you are doing and why",
      explain:
        "People are wary of an analyst arriving in their department. The fear is efficiency in the redundancy sense, and if you do not address it they will describe the process as designed rather than as run.",
      detail:
        "Be direct about what you are there for. If you do not know whether roles will change, say that rather than offering comfort you cannot guarantee.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The order that went through fourteen hands.",
      walkthrough:
        "A new BA asks to follow one real order. The published process has six steps. Following an actual order reveals fourteen touches, including two email approvals that exist because of an audit finding from years earlier, a manual credit check for one customer category, and a step where someone retypes a delivery address because two systems format it differently.",
      result:
        "None of that was in any documentation and all of it was normal to the people doing it. The retyping step alone turned out to be the source of most delivery failures. One order, one afternoon, and the project had its first genuine finding.",
    },
    {
      kind: "documented",
      scenario: "Why the spreadsheets matter more than they look.",
      walkthrough:
        "Herndon, Ash and Pollin obtained the working spreadsheet behind a widely cited economics finding and identified a coding error in the averaging range, selective data exclusion and an unconventional weighting choice. Recalculated, the headline result changed materially.",
      result:
        "Careful people, ordinary use of a standard tool, and a result that shaped debate for years. When you find the private spreadsheets in an operation, you have found both the unmet requirements and a category of risk nobody is monitoring. Treat them as evidence, not as bad practice.",
      source: {
        label: "Herndon, Ash and Pollin (2013), PERI/UMass Amherst: critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "One word, two meanings, six months of argument.",
      walkthrough:
        "In a services business, 'complete' means work finished to operations and payment received to finance. Two teams report completion rates monthly. The numbers never match, and for two years each side has assumed the other is careless with data.",
      result:
        "A glossary entry written in week one would have caught it. The BA who found it did so by writing down both definitions with the name of who supplied each, then noticing the collision. Vocabulary work looks like busywork right up until it explains a recurring disagreement.",
    },
  ],

  learningPath: [
    {
      title: "Day one: request data access and book the observation",
      body: "Access takes weeks, so ask immediately. At the same time, arrange to sit with whoever performs the core operational task, for two hours, watching rather than interviewing.",
      effort: "1 hour of admin",
      outcome: "The two things with the longest lead time are in motion.",
    },
    {
      title: "Week one: understand the transaction",
      body: "How does money arrive? Who pays, for what, how often, and what must be true for it to happen. Draw it on one page.",
      effort: "2 days",
      outcome: "The frame that lets you judge whether anything else matters.",
    },
    {
      title: "Week one to two: follow one case end to end",
      body: "Pick a real one. Track every system, every handover, every person. Note where it waits, because waiting is where cost hides.",
      effort: "2 to 3 days",
      outcome: "A concrete reference you will use for months, and usually your first real finding.",
    },
    {
      title: "Week two: ask for the last five",
      body: "Five actual recent cases, not a representative one. Compare them against the path you followed. Every divergence is an exception worth understanding.",
      effort: "1 day",
      outcome: "The exception map, which is what the documentation is missing.",
    },
    {
      title: "Week three: find the spreadsheets and the vocabulary",
      body: "Ask what people keep outside the system and why. Build the glossary as you go, recording who gave you each definition.",
      effort: "2 days",
      outcome: "An unmet-requirements list and an early warning system for definition clashes.",
    },
    {
      title: "Week four: write it down and show it to them",
      body: "One process model, one glossary, one list of open questions. Present it back and let people correct you. Being wrong in public here is cheap and buys enormous credibility.",
      effort: "2 days",
      outcome: "Shared understanding, and a reputation as someone who listened.",
    },
  ],

  mistakes: [
    {
      mistake: "Reading documentation first",
      why: "It describes the intended business. You will absorb its assumptions and then fail to notice where reality diverges, which is exactly where your value is.",
      fix: "Observe first, read second. Documentation is far more useful once you know what it is missing.",
    },
    {
      mistake: "Interviewing instead of watching",
      why: "People describe their work as a clean sequence because that is how memory compresses it. The messy parts are precisely the parts that get left out.",
      fix: "Two hours of sitting beside someone beats six interviews. Say almost nothing and write down what surprises you.",
    },
    {
      mistake: "Saving up questions to avoid looking ignorant",
      why: "The window where basic questions are free closes after about a month, and questions asked later cost you more credibility than the same question asked in week one.",
      fix: "Ask everything early. Being new is an asset with an expiry date.",
    },
    {
      mistake: "Not addressing why you are there",
      why: "Unspoken job-security fear makes people describe the process as designed rather than as run, and you will not know it is happening.",
      fix: "Say plainly what the work is for. If headcount implications are undecided, say that instead of reassuring.",
    },
    {
      mistake: "Building a beautiful model nobody validates",
      why: "A model you did not walk through with the operators is a record of your misunderstandings, presented with confidence.",
      fix: "Present it back in week four and invite correction. Expect several, and treat each one as a finding.",
    },
  ],

  bestPractices: [
    "Request data access on day one. It has the longest lead time.",
    "Understand the money transaction before anything else.",
    "Follow one real case end to end, through every system and pair of hands.",
    "Ask for the last five cases, never a typical one.",
    "Ask what people keep outside the system and why.",
    "Keep a glossary from day one, recording who gave you each definition.",
    "Find out who everyone asks when they are unsure.",
    "Present your model back within a month and invite correction.",
  ],

  proTips: [
    "Ask people what part of their job they would automate if they could, and then ask what they would never let a system do. The second answer is more informative than the first. It tells you where judgement genuinely lives and where you will meet resistance later.",
    "Note every place a case waits. Waiting is invisible in interviews because nobody experiences it as work, and it is usually most of the elapsed time. Cycle time reductions almost always come from removing waits, not from speeding up tasks.",
    "When someone says 'the system does not let us', find out whether that is true. Roughly half the time it is a permission nobody has requested, a setting nobody has changed, or a rule someone invented years ago and everybody has forgotten was optional.",
  ],

  businessApplications: [
    "Joining a new employer or client, where credibility is established in the first month or not at all.",
    "Taking over a department nobody in your team has worked with before.",
    "Pre-sales and scoping, where you must understand an unfamiliar operation fast enough to estimate.",
    "Due diligence, where the question is what the operation actually depends on.",
    "Post-merger work, where two businesses use the same words for different things.",
  ],

  faqs: [
    {
      q: "What if nobody has time to be shadowed?",
      a: "Ask for thirty minutes at the busiest moment rather than an hour at a quiet one. It is easier to grant, and you learn more, because pressure is when the workarounds come out.",
    },
    {
      q: "How do I learn a technical domain quickly?",
      a: "Learn the vocabulary and the transaction first, not the technology. You need enough to ask good questions and know when an answer is evasive. Depth arrives through the work.",
    },
    {
      q: "What if the documentation contradicts what I observe?",
      a: "That is a finding, not a nuisance. Record both and ask which is authoritative. The answer frequently surprises the person who owns the document.",
    },
    {
      q: "How do I handle a hostile stakeholder?",
      a: "Assume the hostility is rational until proven otherwise. Usually it is a previous project that promised something and delivered disruption. Ask what happened last time and listen properly.",
    },
    {
      q: "When should I start proposing anything?",
      a: "Later than feels comfortable. An early proposal that misses a known exception costs more credibility than a month of quiet observation. Show the process model first and let people see you understood.",
    },
  ],

  tools: [
    { name: "A notebook and a glossary file", what: "The two highest-value artefacts of a first month. Record who told you each definition.", cost: "Free" },
    { name: "Read-only data access", what: "Request on day one. Changes your speed and how colleagues treat you.", cost: "Varies" },
    { name: "A single-page process model", what: "Drawn after observation, walked through with operators. The deliverable that ends month one.", cost: "Free" },
  ],

  resources: [
    { title: "Critique of Reinhart and Rogoff", kind: "Paper", note: "What is hiding in the spreadsheets people maintain privately. Read before dismissing them.", url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/" },
  ],

  internalLinks: [
    { slug: "what-a-business-analyst-actually-does", anchor: "the job this sits inside", context: "Context" },
    { slug: "symptom-versus-problem", anchor: "separating symptoms from causes", context: "What comes next" },
    { slug: "asking-questions-that-get-answers", anchor: "the questions that actually work", context: "Technique" },
  ],

  relatedGuides: ["what-a-business-analyst-actually-does", "symptom-versus-problem", "asking-questions-that-get-answers"],

  conclusion: [
    "Book two hours this week to sit beside whoever performs the core task in your business and watch without interviewing. Note every surprise. That afternoon will teach you more than the documentation and it costs you one meeting slot.",
  ],
};

export default guide;
