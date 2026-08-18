import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "telling-customers-you-use-ai",
  seoTitle: "Telling Customers You Use AI: What to Say and When",
  metaDescription:
    "A disclosure framework for businesses using AI with customers. What to say, where to put it, the wording that backfires, and the three moments it is not optional.",
  title: "Telling Customers You Use AI",
  keywords: [
    "ai disclosure",
    "ai transparency customers",
    "should you tell customers ai",
    "ai labelling",
    "chatbot disclosure",
    "ai trust communication",
  ],
  category: "communication",
  level: "Beginner",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 9,

  intro: [
    "Most companies decide this by not deciding it. Someone ships a chat widget, nobody writes a line about what it is, and the policy becomes whatever the interface happens to imply. Then a customer finds out some other way and the conversation is no longer about the feature.",
    "Being found out is the expensive version. Telling people costs a sentence. That asymmetry is the whole argument, and it holds even where nothing obliges you to say anything.",
    "What follows is how to decide what to say, where to put it, and the specific wording that makes disclosure land badly. There are three moments where it is not a judgement call, and I will start with those.",
  ],

  coreConcepts: [
    {
      term: "The three moments disclosure is not optional",
      explain:
        "When a customer might reasonably think they are talking to a person. When AI materially affects a decision about them. When they are giving you data that will be processed by a third party they have not heard of.",
      detail:
        "Outside those three, it is a judgement call about tone and context. Inside them, treat it as a requirement regardless of what your jurisdiction currently says, because the direction of travel is one way.",
    },
    {
      term: "Disclose the consequence, not the technology",
      explain:
        "'We use AI' tells a customer nothing they can act on. 'This assistant answers from our help centre and can get you to a person any time' tells them what it can do and what their options are.",
      detail:
        "People do not want to know your architecture. They want to know whether they can rely on the answer and what to do if they cannot.",
    },
    {
      term: "Say it where the decision happens",
      explain:
        "Disclosure buried in a privacy policy is legally tidy and practically useless. It belongs at the point of interaction, in the interface, at the moment it is relevant.",
      detail:
        "A line at the top of the chat window beats a paragraph on page eleven of the terms, and it is the version that protects you when someone complains.",
    },
    {
      term: "Give the route out in the same breath",
      explain:
        "Announcing AI without an escape hatch reads as a warning. Announcing it with one reads as a choice. The words cost the same.",
      detail:
        "This is the single change that most reliably turns a negative reaction into a neutral one.",
    },
    {
      term: "Do not apologise for it",
      explain:
        "Hedging language signals that you think there is something to be embarrassed about, and customers take the hint. Say it plainly, once, in the same register as everything else on the page.",
      detail:
        "Compare 'Please note that some responses may be generated using artificial intelligence technology' with 'Answers come from our help centre. Ask for a person any time.' The second is shorter, clearer and less alarming.",
    },
    {
      term: "Label the output, not just the channel",
      explain:
        "If a draft was generated and a person approved it, the customer is dealing with your company's answer, and no label is needed. If nobody read it before it went out, that is a different product and it should look different.",
      detail:
        "The honest test: did a named human take responsibility for these specific words before the customer saw them?",
    },
    {
      term: "Never claim a human when there is not one",
      explain:
        "Human names on automated replies, invented agent photographs, signing off as a person who does not exist. This is the one that turns a disclosure question into a trust collapse.",
      detail:
        "It also converts an ordinary complaint into a story worth sharing, which is the mechanism by which small failures become large ones.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The disclosure that would have cost one sentence.",
      walkthrough:
        "Air Canada's chatbot described a bereavement fare policy that did not match the airline's terms. The customer relied on it. When the refund was refused, the tribunal found the airline responsible for information on its own website regardless of how it had been produced.",
      result:
        "Notice what disclosure would and would not have done here. It would not have made the wrong answer right; grounding the assistant in the real policy was the actual fix. But an interface that said what the assistant could and could not confirm, with a route to a person, changes what a reasonable customer would rely on. Disclosure is not a liability shield. It is part of setting what someone is entitled to assume.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "documented",
      scenario: "A company that changed its position in public, and was better for it.",
      walkthrough:
        "In February 2024 Klarna announced an AI assistant handling two-thirds of its customer service chats in its first month. In May 2025 the chief executive told Bloomberg the cost-cutting had gone too far and the company began recruiting human agents again so customers would always have the option of reaching a person.",
      result:
        "The second announcement is the interesting one. Saying plainly that you overshot and are correcting it is a disclosure of a different kind, and it did the company more good than quietly re-hiring would have. If you get the balance wrong, say so before your customers work it out.",
      source: {
        label: "Klarna press release (February 2024) and coverage of the May 2025 reversal",
        url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/",
      },
    },
    {
      kind: "illustration",
      scenario: "The same fact, three ways.",
      walkthrough:
        "A company tests three lines above its support chat. First: nothing. Second: 'This chat may use artificial intelligence. Responses are not guaranteed to be accurate.' Third: 'Answers come from our help centre. Type 'agent' any time for a person.'",
      result:
        "The second version increased requests for a human and reduced satisfaction, because it read as a disclaimer and disclaimers make people nervous. The third did neither. The content is nearly identical; the difference is that one describes a limitation and the other describes a capability and a choice.",
    },
  ],

  learningPath: [
    {
      title: "List every place a customer meets your AI",
      body: "Chat widgets, email replies, on-site search, recommendations, application forms, phone systems. Include anything where a generated answer reaches a person outside the company.",
      effort: "1 hour",
      outcome: "A list, which is usually longer than the person compiling it expected.",
    },
    {
      title: "Mark which of the three moments each one hits",
      body: "Could they think it is a person? Does it affect a decision about them? Does it send their data somewhere new? Anything ticking a box needs disclosure rather than a judgement call.",
      effort: "1 hour",
      outcome: "A short list of required disclosures and a longer list of optional ones.",
    },
    {
      title: "Write the line for each, in your own voice",
      body: "One sentence. What it does, where the answer comes from, how to reach a person. Read it aloud. If it sounds like a legal notice, rewrite it.",
      effort: "2 hours",
      outcome: "Draft copy that a customer would actually read.",
    },
    {
      title: "Put it where the decision happens",
      body: "In the interface, at the moment of interaction. Update the privacy policy too, but do not treat that as the disclosure.",
      effort: "Varies",
      outcome: "Disclosure a customer encounters without looking for it.",
    },
    {
      title: "Watch what changes",
      body: "Track requests for a human, satisfaction and complaint volume for a month either side. Wording changes here move numbers more than people expect.",
      effort: "Ongoing",
      outcome: "Evidence for which version to keep.",
    },
  ],

  mistakes: [
    {
      mistake: "Putting the disclosure only in the terms of service",
      why: "It satisfies a lawyer and nobody else. When a customer says they did not know, being technically covered is not the same as being believed.",
      fix: "Interface first, terms as well. The terms are the backup, not the mechanism.",
    },
    {
      mistake: "Writing it in legal register",
      why: "Formal hedging language reads as a warning and makes customers distrust an interaction they would otherwise have accepted without thinking.",
      fix: "Write it the way you would explain it to someone standing in front of you.",
    },
    {
      mistake: "Giving an automated agent a human name and face",
      why: "It works until it does not, and when it fails the customer feels deceived rather than disappointed. That is a much harder thing to recover from.",
      fix: "Name it something that is obviously not a person, or do not name it at all.",
    },
    {
      mistake: "Disclosing without offering a way out",
      why: "You have told someone they are talking to a machine and given them no alternative, which is the worst of both.",
      fix: "The route to a human goes in the same sentence, every time.",
    },
    {
      mistake: "Labelling human-reviewed work as AI-generated",
      why: "Over-labelling dilutes the label. If a person took responsibility for the words, it is your company's answer and marking it otherwise confuses the thing that matters.",
      fix: "Label by whether a named human owned the specific output, not by whether a tool was involved anywhere.",
    },
  ],

  bestPractices: [
    "Disclose the consequence and the choice, not the technology.",
    "Put it in the interface, at the moment of interaction.",
    "Always pair disclosure with a route to a person.",
    "Write it in the same voice as the rest of your product.",
    "Never present an automated agent as a named human.",
    "Label output by whether a person owned it, not by whether AI touched it.",
    "Decide the position centrally so individual teams are not improvising.",
    "Measure requests-for-human and satisfaction either side of a wording change.",
  ],

  faqs: [
    {
      q: "Are we legally required to disclose?",
      a: "It depends on jurisdiction and context, and the requirements are expanding. Rather than tracking the minimum, decide what you would be comfortable defending publicly, which is usually a slightly higher bar and does not move every year.",
    },
    {
      q: "Will disclosure reduce engagement with the feature?",
      a: "In practice the wording matters far more than the fact. Disclaimer language suppresses use. A clear statement of what it does and how to reach a person generally does not.",
    },
    {
      q: "Do we need to label AI-assisted marketing copy?",
      a: "If a person wrote, edited and approved it, that is your company's writing. The question is authorship and responsibility, not tooling.",
    },
    {
      q: "What about AI in hiring?",
      a: "That is the highest-exposure case and disclosure obligations are strictest there. Take employment advice for the places you hire before anything automated touches a candidate.",
    },
    {
      q: "Should we say which model or vendor we use?",
      a: "Customers rarely care. Enterprise procurement does, and will ask directly. Have the answer ready in writing rather than putting it on the marketing site.",
    },
  ],

  tools: [
    { name: "Your interface copy", what: "Where disclosure actually lives. Everything else is supporting documentation.", cost: "Free" },
    { name: "Support ticket tags", what: "The cheapest measurement of whether a wording change helped or hurt.", cost: "Varies" },
    { name: "Legal review for regulated contexts", what: "Necessary for hiring, credit, health and anything affecting rights.", cost: "Paid" },
  ],

  resources: [
    { title: "Moffatt v. Air Canada analysis", kind: "Docs", note: "Short read on what a company is bound by when its own system speaks for it.", url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot" },
  ],

  internalLinks: [
    { slug: "ai-for-customer-support", anchor: "designing the handover to a person", context: "The route out" },
    { slug: "writing-an-ai-usage-policy", anchor: "setting the position centrally", context: "Governance" },
    { slug: "the-ai-trust-audit", anchor: "the audit that surfaces where disclosure is needed", context: "Before launch" },
  ],

  relatedGuides: ["ai-for-customer-support", "writing-an-ai-usage-policy", "the-ai-trust-audit"],

  conclusion: [
    "Open your support chat and read the first thing a customer sees. If it does not say where answers come from and how to reach a person, you have a one-sentence job and it is worth doing today.",
  ],
};

export default guide;
