import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "writing-an-ai-system-card",
  seoTitle: "Writing an AI System Card Your Buyers Will Read",
  metaDescription:
    "A one-page document describing what your AI system does, what it cannot do and who owns it. The nine fields, and why it answers procurement faster than a security questionnaire.",
  title: "Writing an AI System Card",
  keywords: [
    "ai system card",
    "model card",
    "ai documentation",
    "ai procurement questions",
    "ai transparency document",
    "ai due diligence",
  ],
  category: "business-strategy",
  level: "Beginner",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 9,

  intro: [
    "The first enterprise buyer who takes your AI feature seriously will send you a questionnaire. It will have somewhere between forty and three hundred questions, most of them irrelevant, and answering it will consume a week of someone's time.",
    "You can shorten that considerably by having already written the answers down. Not as a marketing page, as a plain document that says what the system does, what it does not do, where data goes and who is responsible.",
    "It has a second use that is less obvious and possibly more valuable. Writing it forces you to find out whether you know. Every team I have watched draft one has discovered at least one thing about their own system that nobody could answer.",
  ],

  coreConcepts: [
    {
      term: "Field one: what it does, in one sentence",
      explain:
        "The specific task, not the capability. 'Drafts replies to order status enquiries for an agent to send' rather than 'AI-powered customer service'.",
      detail:
        "If the sentence needs an 'and', you probably have two systems and they may need different answers to everything below.",
    },
    {
      term: "Field two: what it is not for",
      explain:
        "The uses you do not support. Explicitly out of scope, in writing, before someone assumes otherwise.",
      detail:
        "This is the field buyers read most carefully and the one teams most want to leave vague. Vagueness here is how scope expands until quality tells you where the limit was.",
    },
    {
      term: "Field three: what goes in and where it goes",
      explain:
        "What data the system receives, which provider processes it, in which country, retained for how long, and whether it is used for training.",
      detail:
        "This single field answers a large share of any security questionnaire. Get it exactly right, including the subprocessors, because it is the one that gets checked.",
    },
    {
      term: "Field four: how well it works, with the method",
      explain:
        "A number, what it was measured on, when, and how the sample was selected. Straight-through rate rather than accuracy on handled cases.",
      detail:
        "A figure without a method is marketing. Stating the method is what makes a modest number more persuasive than an impressive one.",
    },
    {
      term: "Field five: how it fails",
      explain:
        "The known failure modes, named. Which inputs it handles badly, what happens when it is unsure, whether it can produce confident wrong answers.",
      detail:
        "Buyers assume every system has failure modes. Listing yours signals that you have looked; omitting them signals that you have not.",
    },
    {
      term: "Field six: where the human is",
      explain:
        "Which actions require approval, which are sampled afterwards, and what triggers an escalation.",
      detail:
        "Answers the oversight question directly, which otherwise generates a dozen questionnaire items and a call.",
    },
    {
      term: "Field seven: who owns it",
      explain:
        "A named person accountable for the system, and how to report a problem with it.",
      detail:
        "A team name is not an answer. Buyers reading this are trying to work out who they would ring.",
    },
    {
      term: "Field eight: what changed recently",
      explain:
        "A short dated log. Model version changes, scope changes, notable incidents and what was done.",
      detail:
        "Including an incident is counter-intuitive and it is the single strongest trust signal in the document. Systems that have never had an incident are systems nobody is watching.",
    },
    {
      term: "Field nine: the review date",
      explain:
        "When this document was last checked and who checks it next.",
      detail:
        "An undated system card is worse than none, because it presents stale claims with the authority of documentation.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A field-two failure with a legal outcome.",
      walkthrough:
        "Air Canada's chatbot answered a question about bereavement fare policy and got it wrong. The customer relied on it, the refund was refused, and a tribunal found the airline responsible for the information on its own site.",
      result:
        "Field two is where this is prevented, not field four. A system card saying the assistant answers order-status and delivery questions and does not confirm policy or eligibility would have set the scope explicitly, and scope written down is scope somebody enforces. Accuracy was not the failing; unbounded scope was.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "documented",
      scenario: "Why field eight needs a review date attached.",
      walkthrough:
        "Google Flu Trends performed well at launch and drifted substantially over later seasons as search behaviour changed while the model kept assuming the old relationship held.",
      result:
        "A system card written at launch would have been accurate and would have stayed on the website being inaccurate for years. That is the argument for fields eight and nine together: the document has to record change and carry a date, or it becomes a confident historical claim.",
      source: {
        label: "Lazer, Kennedy, King and Vespignani, Science 343:1203-1205 (2014). The Parable of Google Flu",
        url: "https://www.science.org/doi/10.1126/science.1248506",
      },
    },
    {
      kind: "illustration",
      scenario: "The draft that found the gap.",
      walkthrough:
        "A team sits down to write field three: what data goes where. Two hours in they establish that a logging integration added months earlier was sending full request payloads, including customer names, to a third-party service that had never been added to the processor register.",
      result:
        "Nothing had gone wrong and nobody had been careless; the integration was added for a good reason by someone who did not think of it as a data flow. The document did not create the problem or fix it. It made it visible, which is most of what documentation is for.",
    },
  ],

  learningPath: [
    {
      title: "Draft fields one and two first",
      body: "What it does in one sentence, and what it is explicitly not for. If the first sentence needs an 'and', split the system.",
      effort: "1 hour",
      outcome: "A scope statement, and usually an argument worth having.",
    },
    {
      title: "Trace the data, properly",
      body: "Follow a single request end to end. Every service it touches, every log it lands in, every retention window. Do not work from the architecture diagram; work from the request.",
      effort: "Half a day",
      outcome: "Field three, and frequently a surprise.",
    },
    {
      title: "Put a real number in field four",
      body: "Measured on a described sample, with the date. If you do not have one, that is the next piece of work and the card should say so rather than guess.",
      effort: "Varies",
      outcome: "A figure that survives a follow-up question.",
    },
    {
      title: "List the failure modes you already know",
      body: "Ask the support team. They know the inputs it handles badly better than the engineers do.",
      effort: "1 hour",
      outcome: "Field five, written by the people who see the complaints.",
    },
    {
      title: "Name the owner and the review date",
      body: "A person, not a team. A date, not 'periodically'. Put both at the top where they cannot be missed.",
      effort: "15 minutes",
      outcome: "A document with an accountable human attached.",
    },
    {
      title: "Give it to someone outside the team to read",
      body: "Ask them what they still do not know. Their questions are the ones procurement will ask.",
      effort: "1 hour",
      outcome: "A card that answers the questionnaire before it arrives.",
    },
  ],

  mistakes: [
    {
      mistake: "Writing it as marketing",
      why: "The audience is a buyer's security or legal reviewer. Promotional language makes them assume the substance is missing, and they start digging.",
      fix: "Plain declarative sentences. No adjectives about the technology.",
    },
    {
      mistake: "Leaving field two vague",
      why: "Undefined scope expands until something goes wrong at the edge of it, and then the question is what you had said it was for.",
      fix: "List the out-of-scope uses explicitly, including the tempting ones.",
    },
    {
      mistake: "Giving an accuracy figure with no method",
      why: "The first follow-up question is always 'measured on what?', and not having an answer costs more than the number gained.",
      fix: "Number, sample, selection method, date. Four clauses.",
    },
    {
      mistake: "Omitting incidents",
      why: "A card with no incidents reads as either very new or unmonitored, and reviewers assume the second.",
      fix: "Record incidents and what you changed. It is the strongest trust signal in the document.",
    },
    {
      mistake: "Writing it once",
      why: "Model versions change, scope creeps, vendors change terms. A stale card is a set of confident inaccurate claims with your name on it.",
      fix: "Review date on the document, owner named, quarterly.",
    },
  ],

  bestPractices: [
    "One page. Length reduces the chance anyone reads it.",
    "Plain sentences, no promotional language.",
    "State what it is explicitly not for.",
    "Trace a real request to fill in the data flow rather than using the diagram.",
    "Every number carries its method, sample and date.",
    "List failure modes, sourced from the support team.",
    "Name an accountable person, not a team.",
    "Record incidents. Date the document and review it quarterly.",
  ],

  checklist: [
    "One sentence describing the task, with no 'and'.",
    "Explicit out-of-scope uses listed.",
    "Data flow traced from a real request, subprocessors included.",
    "A performance figure with sample, method and date.",
    "Known failure modes named.",
    "Human oversight points described.",
    "A named owner and a route to report problems.",
    "A dated change log including incidents.",
    "A review date and a next reviewer.",
  ],

  faqs: [
    {
      q: "Is this the same as a model card?",
      a: "Related but narrower in a useful way. Model cards describe a model. This describes your system: the model plus the prompt, the data, the oversight and the scope, which is what a buyer is actually purchasing.",
    },
    {
      q: "Should we publish it?",
      a: "Publish the version that says what the system does, its limits and who owns it. Keep the detailed data flow for the buyers who ask. Publishing something is a differentiator; almost nobody does.",
    },
    {
      q: "Who writes it?",
      a: "Whoever owns the system, with the support team for field five and whoever owns data protection for field three. It is not a documentation task to hand off, because the value is in the finding out.",
    },
    {
      q: "What if we cannot fill in a field?",
      a: "Write that you cannot, and what would be needed. A card with an honest gap is more useful than one with a plausible guess, and the gap is your next piece of work.",
    },
    {
      q: "Does it reduce liability?",
      a: "It is not a shield. What it does is set expectations, which changes what a customer is entitled to assume, and it demonstrates that you looked. Both matter when something goes wrong.",
    },
  ],

  tools: [
    { name: "One page in your existing docs", what: "Wherever your team already reads. A card in a system nobody opens is not a card.", cost: "Free" },
    { name: "Your processor register", what: "Field three should agree with it exactly. Where they disagree, one of them is wrong and it matters which.", cost: "Free" },
    { name: "A colleague outside the team", what: "Reads the draft and says what they still do not know. Those are the procurement questions.", cost: "Free" },
  ],

  resources: [
    { title: "The Parable of Google Flu", kind: "Paper", note: "Why a document without a review date becomes a confident historical claim.", url: "https://www.science.org/doi/10.1126/science.1248506" },
  ],

  internalLinks: [
    { slug: "choosing-an-ai-vendor", anchor: "the questions buyers will ask you", context: "The other side of this" },
    { slug: "data-privacy-and-ai", anchor: "getting the data flow right", context: "Field three" },
    { slug: "the-ai-trust-audit", anchor: "the audit that produces most of these answers", context: "Before writing" },
  ],

  relatedGuides: ["choosing-an-ai-vendor", "data-privacy-and-ai", "the-ai-trust-audit"],

  conclusion: [
    "Write field two for your main system this week: what it is explicitly not for. It takes twenty minutes, it is the field buyers read hardest, and drafting it usually starts an argument the team needed to have.",
  ],
};

export default guide;
