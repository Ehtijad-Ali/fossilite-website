import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "proving-ai-works-to-a-sceptic",
  seoTitle: "Proving Your AI Works to Someone Who Doubts It",
  metaDescription:
    "How to build an evidence pack that convinces a sceptical client or executive. The baseline nobody builds, the held-back sample, and why demos persuade the wrong people.",
  title: "Proving AI Works to a Sceptic",
  keywords: [
    "proving ai roi",
    "ai evidence",
    "ai pilot results",
    "convincing stakeholders ai",
    "ai baseline measurement",
    "ai proof of value",
  ],
  category: "entrepreneurship",
  level: "Intermediate",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "The sceptic in the room is doing you a favour and is usually treated as an obstacle. They are asking the question your investors, your auditors and your customers will ask later, at a point where the answer is more expensive.",
    "You cannot win that argument with a demo. Demos persuade people who already wanted to believe, and they make sceptics more suspicious, correctly, because a demo is a selected sample presented by an interested party.",
    "What works is an evidence pack: four artefacts, assembled in a specific order, where the first one has to exist before you build anything. Most projects skip it, which is why most projects end up arguing about whether they worked.",
  ],

  coreConcepts: [
    {
      term: "Artefact one: the baseline, measured before you build",
      explain:
        "Two weeks of measuring the current process, changing nothing. How long it takes, how often it goes wrong, what it costs. This is the only irreversible step in the whole project.",
      detail:
        "Once the new system exists, the old number is gone forever and every claim you make afterwards is a comparison against a memory. Almost nobody does this, and it is the reason most AI ROI arguments are unsettleable.",
    },
    {
      term: "Artefact two: the trivial baseline",
      explain:
        "What does the simplest possible approach achieve? Keyword matching, a rule, always guessing the most common answer. Measure it on the same data.",
      detail:
        "This is the question a sceptic asks that nobody has an answer to. If your model is barely beating a rule, that is worth knowing before you build the maintenance burden.",
    },
    {
      term: "Artefact three: a held-back sample scored by hand",
      explain:
        "A random sample of real cases that the system has never seen and that you did not choose. Score them yourself, by hand, against what actually happened.",
      detail:
        "Random and held back are both load-bearing. A sample your champion selected is a demo with more steps, and a sceptic will spot it in one question.",
    },
    {
      term: "Artefact four: the failure catalogue",
      explain:
        "Every case it got wrong, grouped into categories, with your honest assessment of which are fixable and which are inherent.",
      detail:
        "Bringing your own failures is the move that changes the temperature of the room. Someone who lists their weaknesses is trusted about their strengths, and the person who was going to find them anyway now has nothing to find.",
    },
    {
      term: "Report the rate you refuse, not just the rate you get right",
      explain:
        "Accuracy on cases the system handled tells you nothing about how many it declined. If it processes sixty percent and a person does the rest, the sixty is the number that matters.",
      detail:
        "Straight-through rate is the honest headline. Accuracy on handled cases is the number vendors quote and the number sceptics discount.",
    },
    {
      term: "Show the range, not the point estimate",
      explain:
        "One number invites an argument about that number. A range with the assumptions stated invites an argument about the assumptions, which is a more productive conversation and one you can actually resolve.",
      detail:
        "It also survives contact with reality better. A project that promised a range and landed inside it is a success; one that promised a figure and landed near it is a disappointment.",
    },
    {
      term: "Say what would change your mind",
      explain:
        "Name the result that would make you stop. Doing this in advance converts you from an advocate into someone assessing evidence, and sceptics respond to that shift more than to any number.",
      detail:
        "It is also genuinely useful. Projects without a stopping condition rarely stop.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Numbers that were real, and a headline that was not the whole story.",
      walkthrough:
        "Klarna reported in February 2024 that its AI assistant handled two-thirds of customer service chats in its first month, across many markets and languages, with resolution time falling from around eleven minutes to under two, and described the work as equivalent to hundreds of agents. In May 2025 the chief executive said the cost-cutting had gone too far and the company resumed hiring human agents.",
      result:
        "Both parts are evidence. The volume figures were measured against a genuine baseline, which is why they held up. The agent-equivalence figure was modelled rather than counted, and that is the kind of number a sceptic is right to push on. When you build your pack, mark which figures are measured and which are derived. The distinction is the difference between a claim and an estimate.",
      source: {
        label: "Klarna press release (February 2024) and coverage of the May 2025 reversal",
        url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/",
      },
    },
    {
      kind: "documented",
      scenario: "A system that looked proven and had no drift check.",
      walkthrough:
        "Google Flu Trends estimated influenza prevalence from search volume and performed impressively at launch. Over later seasons the estimates drifted substantially from reference data, because search behaviour changed while the model kept assuming the old relationship.",
      result:
        "This is the artefact nobody includes: evidence that you will notice when it stops working. A sceptic who has seen this pattern will ask how you would know, and 'we would notice' is not an answer. Put your drift check in the pack alongside the results.",
      source: {
        label: "Lazer, Kennedy, King and Vespignani, Science 343:1203-1205 (2014). The Parable of Google Flu",
        url: "https://www.science.org/doi/10.1126/science.1248506",
      },
    },
    {
      kind: "illustration",
      scenario: "The pilot that proved the wrong thing.",
      walkthrough:
        "A team pilots extraction on two hundred invoices from the twelve largest suppliers. Accuracy is high and the project is approved. In production the long tail arrives: photographed documents, handwriting, credit notes formatted like invoices. The exception rate is several times the pilot figure and the finance team is now doing review work on top of their old job.",
      result:
        "Nothing about the pilot was dishonest. The sample was unrepresentative in the one way that mattered, and a sceptic asking 'how did you choose those two hundred?' would have caught it in a sentence. Random selection is not a statistical nicety here; it is the whole defence.",
    },
  ],

  learningPath: [
    {
      title: "Measure the current process for two weeks",
      body: "Change nothing. Time it, count the errors, record the cost. Do this before any building starts, because you cannot go back for it.",
      effort: "Two weeks of light recording",
      outcome: "A baseline that makes every later claim settleable.",
    },
    {
      title: "Build the trivial version and measure it",
      body: "A rule, a keyword match, the most common answer. An hour of work that tells you what the sophisticated version has to beat.",
      effort: "Half a day",
      outcome: "The comparison a sceptic will ask for.",
    },
    {
      title: "Pull a random held-back sample",
      body: "Select it before the system sees it, using a method you can describe. Keep it out of any tuning.",
      effort: "2 hours",
      outcome: "The one result that carries weight with someone who doubts you.",
    },
    {
      title: "Score it by hand",
      body: "A person reads each case and marks it against what actually happened. Tedious and non-negotiable.",
      effort: "1 day",
      outcome: "Numbers you generated rather than numbers the system reported about itself.",
    },
    {
      title: "Catalogue the failures",
      body: "Group every miss into categories. Mark each one fixable or inherent, honestly.",
      effort: "Half a day",
      outcome: "The artefact that changes how the room treats you.",
    },
    {
      title: "Write the pack, with the stopping condition",
      body: "Baseline, trivial comparison, held-back result, failure catalogue, drift check, and the result that would make you stop. Six pages at most.",
      effort: "1 day",
      outcome: "A document that survives a hostile read.",
    },
  ],

  mistakes: [
    {
      mistake: "Skipping the baseline because you are in a hurry",
      why: "It is the only step you cannot do later. Every claim afterwards becomes a comparison against a memory, and memories favour whoever is arguing hardest.",
      fix: "Two weeks of measuring before anything is built. It is the cheapest step and the only irreversible one.",
    },
    {
      mistake: "Demoing instead of evidencing",
      why: "A demo is a selected sample presented by an interested party. Sceptics know this, and a polished demo increases suspicion rather than reducing it.",
      fix: "Lead with the held-back sample and the failure catalogue. Demo afterwards if at all.",
    },
    {
      mistake: "Letting the champion choose the test data",
      why: "They will choose cases the system handles, without meaning to. It is not dishonesty, it is familiarity.",
      fix: "Random selection, method described, sample held back from tuning.",
    },
    {
      mistake: "Reporting accuracy without the refusal rate",
      why: "Accuracy on handled cases hides how many were rejected, and the rejects are where the labour cost went.",
      fix: "Straight-through rate as the headline, accuracy as the supporting figure.",
    },
    {
      mistake: "Presenting one number",
      why: "It reads as more certain than the work supports, and when reality lands slightly off, the whole pack loses credibility rather than just that figure.",
      fix: "A range with the assumptions written next to it, and a label on which figures are measured and which are modelled.",
    },
  ],

  bestPractices: [
    "Measure the baseline before you build. It is the only irreversible step.",
    "Always include the trivial comparison. It is the first question a sceptic asks.",
    "Random, held-back sample, scored by hand.",
    "Bring the failure catalogue yourself.",
    "Report straight-through rate, not accuracy on handled cases.",
    "Label which figures are measured and which are modelled.",
    "State a range with assumptions, not a point estimate.",
    "Name in advance the result that would make you stop.",
  ],

  faqs: [
    {
      q: "We already built it and never took a baseline. What now?",
      a: "Reconstruct what you can from records and label it as an estimate. Then measure honestly from today so the next claim is settleable. Do not present a reconstruction as a measurement.",
    },
    {
      q: "How big should the held-back sample be?",
      a: "A hundred real cases is enough to be informative and small enough to score by hand in a day. Below about fifty you are looking at noise.",
    },
    {
      q: "Won't showing the failures undermine the case?",
      a: "The opposite, consistently. Someone who lists their own weaknesses is trusted about their strengths, and the sceptic who was going to find them now has nothing left to do but engage with the argument.",
    },
    {
      q: "What if the trivial baseline is nearly as good?",
      a: "Then you have saved yourself a maintenance burden and learned something valuable. Ship the rule. This outcome is more common than the industry admits.",
    },
    {
      q: "The sceptic is my client, not my colleague. Same approach?",
      a: "Same approach, more so. A client who has been oversold before is testing whether you are honest, and the failure catalogue answers that faster than any result.",
    },
  ],

  tools: [
    { name: "Two weeks of manual measurement", what: "A spreadsheet and some discipline. The highest-value artefact in the entire project.", cost: "Free" },
    { name: "A hand-scored held-back sample", what: "A hundred real cases. Nothing substitutes for it and no vendor can supply it.", cost: "Free" },
    { name: "A drift check with a threshold", what: "Evidence that you will notice when it stops working, which is the question nobody prepares for.", cost: "Varies" },
  ],

  resources: [
    { title: "The Parable of Google Flu", kind: "Paper", note: "On a proven system that quietly stopped being proven. Read before writing any results section.", url: "https://www.science.org/doi/10.1126/science.1248506" },
    { title: "Rules of Machine Learning", kind: "Docs", note: "Rule one is effectively 'try it without a model first', which is artefact two in this guide.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "measuring-ai-roi-in-business", anchor: "building the business case", context: "Before the pilot" },
    { slug: "evaluating-ai-systems", anchor: "how to build the evaluation set", context: "Artefact three" },
    { slug: "the-honest-ai-business-case", anchor: "getting buy-in without overselling", context: "Presenting it" },
  ],

  relatedGuides: ["measuring-ai-roi-in-business", "evaluating-ai-systems", "the-honest-ai-business-case"],

  conclusion: [
    "If you are about to start a project, spend the next two weeks measuring the process you intend to replace and change nothing. It is the cheapest thing on this list and the only one you cannot go back and do.",
  ],
};

export default guide;
