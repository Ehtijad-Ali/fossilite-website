import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "explaining-an-ai-decision",
  seoTitle: "Explaining an AI Decision to the Person It Affected",
  metaDescription:
    "How to answer 'why was I rejected?' when a model was involved. What counts as an explanation, what does not, and the four things you must be able to produce.",
  title: "Explaining an AI Decision",
  keywords: [
    "explainable ai",
    "ai decision explanation",
    "why was i rejected ai",
    "ai transparency",
    "automated decision explanation",
    "ai accountability",
  ],
  category: "critical-thinking",
  level: "Intermediate",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "Someone applied, and the answer was no, and now they are asking why. If a model was anywhere near that decision, the question you are actually being asked is whether the decision was reasoned or whether it was produced.",
    "Most companies answer badly, and not from bad faith. They answer with the mechanism ('our system considers a range of factors') when the person wanted the reason ('your account has been open under six months'). Those sound similar and they are not remotely the same thing.",
    "This is about producing the second kind. It is harder, it constrains what you can build, and in several jurisdictions it is becoming something you have to do anyway.",
  ],

  whyItMatters: [
    "An unexplainable decision is indistinguishable from an arbitrary one, from the outside. That is true even when the model is excellent, which is why 'but it is accurate' is never a satisfying answer to the person on the receiving end.",
    "There is also a practical reason that has nothing to do with fairness. If you cannot explain a decision, you cannot audit it, and if you cannot audit it you will not find out it has drifted until something else forces you to.",
  ],

  coreConcepts: [
    {
      term: "An explanation names the specific thing, not the process",
      explain:
        "'Your application was assessed against our criteria' describes a process. 'Your reported income was below the threshold for this product' names the thing. Only the second lets a person do anything.",
      detail:
        "The test: could the person act on it? If the answer leaves them no better informed about what to change, it was a description, not an explanation.",
    },
    {
      term: "The four things you must be able to produce",
      explain:
        "What data about them was used. What the decision was. The main factors behind it. How to get it reviewed by a person.",
      detail:
        "If your system cannot produce all four for any individual case, you have an explainability gap regardless of what your documentation claims.",
    },
    {
      term: "Design for explanation before you build",
      explain:
        "Explainability is not something you add to a finished model. It is a constraint on what you are allowed to build, in the same way that auditability constrains a finance system.",
      detail:
        "In practice this means preferring stated criteria you can articulate over patterns learned from historical outcomes, wherever the decision affects a person.",
    },
    {
      term: "Learned patterns explain badly because they encode the past",
      explain:
        "A model trained on who was previously accepted has learned your prior decisions, including the ones you would not defend. When you explain its output honestly you are explaining your history.",
      detail:
        "This is why explainability and fairness turn out to be the same project. The moment you have to say why, you find out what the system is actually using.",
    },
    {
      term: "Proxies are the hard part",
      explain:
        "Remove the protected field and a model finds a correlate: the postcode, the university, the gap in employment. The explanation you give is technically accurate and misses the real mechanism.",
      detail:
        "You cannot audit for a variable you did not know was being used, which is the argument for explicit criteria rather than inferred ones in any decision about a person.",
    },
    {
      term: "Never explain something you did not check",
      explain:
        "Post-hoc explanation tools produce plausible-sounding factor lists. If you have not validated that the list reflects what actually drove the output, you are generating reassurance rather than reporting a reason.",
      detail:
        "A confident wrong explanation is worse than 'a person will review this', because it forecloses the appeal.",
    },
    {
      term: "The route to a human is part of the explanation",
      explain:
        "Every explanation ends with how to challenge it and who will look. In several jurisdictions this is required for decisions with significant effect; everywhere else it is what makes the explanation credible.",
      detail:
        "An explanation with no appeal reads as a justification, and people respond to justifications differently from reasons.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A model whose honest explanation would have been indefensible.",
      walkthrough:
        "Amazon developed a system to score job applicants, trained on CVs submitted over the previous decade. Because that pool was overwhelmingly male, the model learned that male candidates had been preferred. By 2015 it was penalising CVs containing the word 'women's' and favouring verbs more common on men's applications. The company concluded it could not reliably make the model neutral and abandoned it.",
      result:
        "Imagine writing the explanation letter. 'Your application scored lower partly because of the phrase women's chess club captain.' The engineering was competent and the model fit its data faithfully. The explanation is where the problem becomes undeniable, which is exactly why forcing yourself to write one is a design tool and not just a compliance step.",
      source: {
        label: "Dastin, Reuters (10 October 2018). Amazon scraps secret AI recruiting tool that showed bias against women",
        url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women",
      },
    },
    {
      kind: "documented",
      scenario: "An explanation that survived scrutiny because someone could reproduce the working.",
      walkthrough:
        "Herndon, Ash and Pollin obtained the working spreadsheet behind a widely cited finding about public debt and growth. Having the actual calculation available let them identify a coding error in the averaging range, selective exclusion of data and an unconventional weighting choice, and recompute the result.",
      result:
        "The relevant part is not that the original was wrong. It is that the working was available, so the question could be settled. Systems that make decisions about people need the equivalent: enough recorded about each case that someone outside the team could reconstruct why it went that way.",
      source: {
        label: "Herndon, Ash and Pollin (2013), PERI/UMass Amherst: critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "Two letters, same decision.",
      walkthrough:
        "The first says the application was unsuccessful following an assessment of the information provided, and invites the applicant to reapply in six months. The second says the account was declined because the trading history supplied covered four months and the product requires twelve, that this was an automated check, and that a named team will review it on request within five working days.",
      result:
        "The second letter produced fewer complaints and more successful reapplications. It also, unexpectedly, produced fewer review requests. People appeal when they cannot tell whether the decision was considered; being told the specific threshold usually settles it.",
    },
  ],

  learningPath: [
    {
      title: "Pick one real declined case",
      body: "Not a hypothetical. An actual decision your system made about an actual person in the last month.",
      effort: "10 minutes",
      outcome: "A concrete case to test against.",
    },
    {
      title: "Try to produce the four things",
      body: "What data was used, what the decision was, the main factors, and the route to a human. Write them out as though sending them.",
      effort: "1 hour",
      outcome: "Either four answers or a precise list of what you cannot currently produce.",
    },
    {
      title: "Check the factors are real",
      body: "Verify that the factors you listed actually drove the output rather than being a plausible reconstruction. If you cannot verify, do not send them.",
      effort: "Varies",
      outcome: "An honest assessment of whether you are explaining or guessing.",
    },
    {
      title: "Write the letter a person would receive",
      body: "Plain language, the specific threshold or factor, the appeal route with a timeframe. Read it as though it were about you.",
      effort: "1 hour",
      outcome: "A template, and usually a list of things the system needs to record that it currently does not.",
    },
    {
      title: "Fix the recording gaps",
      body: "Whatever you could not produce is a logging requirement. Capture it at decision time; reconstructing it later is close to impossible.",
      effort: "Varies",
      outcome: "A system that can answer the question next time without an investigation.",
    },
  ],

  mistakes: [
    {
      mistake: "Explaining the process instead of the decision",
      why: "It sounds responsive and gives the person nothing. It also reads as evasion, which turns a query into a complaint.",
      fix: "Name the specific factor or threshold. If you cannot, say a person will review it rather than filling the space with process language.",
    },
    {
      mistake: "Generating explanations you have not validated",
      why: "Post-hoc tools produce confident factor lists that may not reflect what drove the output. You are then defending a fiction.",
      fix: "Only state factors you can verify. Otherwise route to human review and say so.",
    },
    {
      mistake: "Assuming removing protected fields makes it explainable",
      why: "The model finds proxies, so your explanation names an innocuous variable that is standing in for something else.",
      fix: "Prefer explicit stated criteria for decisions about people. Audit outcomes by group regardless of what the inputs contain.",
    },
    {
      mistake: "Offering an explanation with no appeal",
      why: "It reads as a justification rather than a reason, and it is increasingly not sufficient where the decision significantly affects someone.",
      fix: "Every explanation ends with who will review it and by when.",
    },
    {
      mistake: "Leaving explainability to the end",
      why: "By then the architecture is fixed and the data you would have needed was never recorded.",
      fix: "Write the explanation letter during design, before the model exists. It is the cheapest requirements exercise available.",
    },
  ],

  bestPractices: [
    "Write the explanation letter before you build the model.",
    "Produce all four: data used, decision, main factors, route to a human.",
    "Name the specific threshold or factor, not the process.",
    "Only state factors you have verified actually drove the output.",
    "Prefer explicit criteria over learned patterns for decisions about people.",
    "Record what you will need to explain at decision time, not afterwards.",
    "Audit outcomes by group even when protected fields are not inputs.",
    "End every explanation with the appeal route and a timeframe.",
  ],

  faqs: [
    {
      q: "Are we legally required to explain?",
      a: "In several jurisdictions, for decisions with significant effect on a person, yes, and the scope is widening. Take advice for the places you operate. Where it is not required, it is still the thing that stops a query becoming a complaint.",
    },
    {
      q: "What if the model genuinely is not interpretable?",
      a: "Then it should not be making that decision alone. Use it to prioritise or to prepare a case for a person who decides, and explain the human's reasoning.",
    },
    {
      q: "Do explainability tools solve this?",
      a: "They help you investigate. They do not produce a sentence you can safely put in a letter unless you have validated it against the actual behaviour, which most teams never do.",
    },
    {
      q: "Does it apply to recommendations, not just rejections?",
      a: "The obligation usually attaches to significant effects, so a product recommendation is different from a credit decline. The design habit is worth keeping either way.",
    },
    {
      q: "How specific should we be?",
      a: "Specific enough that the person can act, general enough not to publish a recipe for gaming the system. Naming the factor and the direction usually achieves both.",
    },
  ],

  tools: [
    { name: "A decision log", what: "Inputs, output and factors captured at decision time. Everything else depends on this existing.", cost: "Varies" },
    { name: "Outcome auditing by group", what: "The only way to catch proxies, since the inputs will not show you them.", cost: "Varies" },
    { name: "Legal advice for regulated decisions", what: "Necessary wherever the decision affects credit, employment, housing or access to a service.", cost: "Paid" },
  ],

  resources: [
    { title: "Amazon scraps secret AI recruiting tool", kind: "Docs", note: "The clearest case of a model whose honest explanation was the thing that condemned it.", url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women" },
    { title: "Critique of Reinhart and Rogoff", kind: "Paper", note: "On why keeping the working matters more than getting it right first time.", url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/" },
  ],

  internalLinks: [
    { slug: "ai-for-hiring-and-hr", anchor: "the highest-risk decisions about people", context: "Where this matters most" },
    { slug: "human-in-the-loop-design", anchor: "putting a person in front of the decision", context: "When explanation is not possible" },
    { slug: "the-ai-trust-audit", anchor: "the audit that surfaces this gap", context: "Before launch" },
  ],

  relatedGuides: ["ai-for-hiring-and-hr", "human-in-the-loop-design", "the-ai-trust-audit"],

  conclusion: [
    "Take one real declined case from last month and try to write the letter. Whatever you cannot produce is your logging requirement, and you will find it faster this way than in any design review.",
  ],
};

export default guide;
