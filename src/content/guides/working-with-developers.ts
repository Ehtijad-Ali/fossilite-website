import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "working-with-developers",
  seoTitle: "Working With Developers as a Business Analyst",
  metaDescription:
    "What development teams actually need from a BA, how to handle technical pushback, when easy and hard mean something else, and how to stay useful through a build.",
  title: "Working With Developers",
  keywords: [
    "business analyst working with developers",
    "ba and development team",
    "backlog refinement",
    "technical constraints business analysis",
    "ba developer collaboration",
    "agile business analyst",
  ],
  category: "communication",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Most advice about this relationship is about translation, as if the difficulty were vocabulary. It is not. Developers understand business language perfectly well. The friction comes from something more specific: a BA who hands over decisions dressed as requirements, disappears during the build, and reappears at testing surprised by what was made.",
    "The developers I have worked best with wanted three things from me, consistently. Tell us why, so we can make the fifty small decisions you did not anticipate. Tell us what happens when it goes wrong, because that is most of the code. And be available, because a question answered in five minutes saves a day of building the wrong thing.",
    "This guide covers what to hand over and in what form, how to respond when a developer tells you something is hard, what to do when they propose a different solution, and how to stay useful through a build rather than becoming a document that arrived once.",
  ],

  whyItMatters: [
    "During any build, dozens of decisions get taken that were not in the specification. What happens to a partially completed record, whether an operation retries, what an error message says, whether an old value is preserved. Each is small and each has business consequences, and they are taken by whoever is present.",
    "Being present is therefore the job. A BA who is available during the build influences those decisions. A BA who is not finds out about them at acceptance testing, when changing them means rework and an awkward conversation about who should have specified it.",
    "There is a long-term dimension too. Developers who trust a BA bring problems early: this rule cannot work the way you described, this data does not exist, this will be slow at your stated volume. That early warning is worth more than any document you will write, and it is only given to people who have shown they will not treat it as obstruction.",
  ],

  coreConcepts: [
    {
      term: "Always give the why",
      explain:
        "The reason behind a requirement is what lets a developer make a sensible decision about the case you did not anticipate, and there will be several of those every day.",
      detail:
        "Without it, they build exactly what is written, which is the correct professional response and produces something brittle. With it, you get judgement applied on your behalf by someone who is genuinely trying to help.",
    },
    {
      term: "Specify the failure paths, because that is where the work is",
      explain:
        "Most of the code in any system deals with things not going to plan. If your specification covers only the successful path, you have specified the minority of the work.",
      detail:
        "For every dependency and every rejection: what does the user see, what gets recorded, does it retry, and is anything left half-done. Those are business decisions and leaving them out means somebody else takes them.",
    },
    {
      term: "Hand over decisions made, not decisions to make",
      explain:
        "A specification that says the system will handle exceptions appropriately has passed a business decision to a technical person with no business context and no authority to take it.",
      detail:
        "Where a decision genuinely has not been taken, mark it as open with a named owner and a date. That is honest and actionable. Vague wording is neither, and it reads as if you did not notice.",
    },
    {
      term: "When a developer says it is hard, ask what makes it hard",
      explain:
        "Hard usually means one of three things: the data does not support it, the existing architecture fights it, or it is a large amount of straightforward work. The three have completely different implications.",
      detail:
        "The first is a finding you need to take back to the business immediately. The second is a conversation about whether a slightly different requirement is much cheaper. The third is a planning matter. Treating all three as pushback wastes the most useful signal you get.",
    },
    {
      term: "When a developer says it is easy, check what they heard",
      explain:
        "Easy frequently means easy for the case they have in mind. Ask them to describe what they will build and listen for the exception you specified.",
      detail:
        "This is a much more common source of defects than difficulty is. A confident estimate given against a partial understanding is far more dangerous than an honest statement that something will be slow.",
    },
    {
      term: "Take the alternative seriously when it is offered",
      explain:
        "A developer proposing a different approach is usually optimising for something real: less code to maintain, a pattern already in use, or avoiding a known problem area.",
      detail:
        "Ask what it means for the business behaviour, not whether it is technically preferable. If the business outcome is the same and it is cheaper, take it and say thank you. If it changes behaviour, explain precisely how and let them tell you the cost of doing it your way.",
    },
    {
      term: "Batch your questions, and be reachable for the ones that block",
      explain:
        "Development requires long uninterrupted stretches. A steady drip of small questions costs more than the questions are worth.",
      detail:
        "Agree a convention: anything blocking gets asked immediately, everything else goes on a list and gets covered once a day. Then honour your side by answering the blocking ones fast, because the convention only works if the fast channel is genuinely fast.",
    },
    {
      term: "Refinement is where specification quality gets tested",
      explain:
        "The point of walking through work before it is estimated is to find what is missing while it is still free to fix.",
      detail:
        "Go in expecting to be wrong about something, and write down every question rather than defending the document. A refinement session where nobody found a gap usually means nobody read it carefully.",
    },
    {
      term: "Watch for technical decisions that change business behaviour",
      explain:
        "A caching decision that makes data a few minutes stale, a validation moved to a different layer, a timeout that silently drops a message. Each is a reasonable engineering choice and each can change what the business experiences.",
      detail:
        "You will not catch these by reading code. You catch them by being in the conversations and asking one question repeatedly: does that change what somebody sees or what they can do?",
    },
    {
      term: "Learn enough technically to hold the conversation",
      explain:
        "Enough to read a data model, understand what an API does, know why a batch differs from a real-time interface, and grasp roughly why some things are expensive.",
      detail:
        "You do not need to write production code. You do need to be able to tell the difference between this is genuinely hard and this is unfamiliar, and that judgement only comes from understanding the shape of the work.",
    },
    {
      term: "Never relay an estimate you do not understand",
      explain:
        "If you cannot explain to the business why something takes three weeks, you cannot defend it, and when it is challenged the team will be overruled by someone with more authority and less information.",
      detail:
        "Ask what the three weeks consists of until you could describe it in two sentences. Developers almost always welcome this, because being able to explain their estimate is exactly what they need from you.",
    },
    {
      term: "Keep the question log and use it on yourself",
      explain:
        "Every question asked during a build is a piece of specification that existed only in your head. Logged and reviewed, it is the most honest feedback you will ever get on your own writing.",
      detail:
        "After two projects, the pattern is personal and obvious. Some analysts consistently miss permissions, some miss failure paths, some miss data volume. Knowing yours is worth more than any template.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Hard meant the data does not exist.",
      walkthrough:
        "A BA specifies that a customer's preferred contact time should determine when automated reminders are sent. The developer says it is hard. The BA asks what makes it hard, and the answer is that the field exists on the customer record but is populated on a small minority of accounts, and only for customers acquired through one channel. Building the logic is trivial. Having it do anything useful is not.",
      result:
        "That is a business finding, not a technical objection, and it was delivered by a developer who had profiled the data because they needed to write the query. Had the BA heard hard as resistance and escalated it, they would have won an argument and shipped a feature that did nothing for most customers.",
    },
    {
      kind: "illustration",
      scenario: "The reasonable decision taken at four in the afternoon.",
      walkthrough:
        "A specification for an order confirmation email says nothing about what happens if the mail service rejects the address. The developer, reaching this at the end of a sprint, logs the failure and continues, on the reasonable grounds that failing an order over an email seems disproportionate. Weeks later customer services notice a pattern of customers who never received confirmation and were never contacted by anyone.",
      result:
        "The developer's judgement was sound and it was a business decision they were not equipped to take. One line in the specification about whether an undeliverable confirmation raises a task would have settled it. Every unstated failure path gets resolved by whoever meets it first, under time pressure, with the least business context.",
    },
    {
      kind: "illustration",
      scenario: "The alternative that was better.",
      walkthrough:
        "A BA specifies a nightly synchronisation between two systems. The lead developer suggests publishing an event when the record changes instead, because an equivalent mechanism already exists for another integration and would take less time to build and less effort to maintain. The BA's first reaction is that the specification says nightly.",
      result:
        "Rather than defending the wording, she asked the only question that mattered: does the business see anything different? The answer was yes, and better, because data would be current within seconds rather than up to a day old. The requirement said nightly because that was what the previous system did. Technical proposals are worth evaluating on business outcome, and quite often the outcome improves.",
    },
  ],

  learningPath: [
    {
      title: "Add the why to every requirement you currently hold",
      body: "One sentence per requirement explaining what the business is trying to achieve. Go back through your current backlog and add it where it is missing.",
      effort: "2 hours",
      outcome: "The context that lets a developer decide well when your specification runs out.",
    },
    {
      title: "Specify the failure paths for one piece of work",
      body: "Every dependency, every rejection, every partial completion. What the user sees, what is recorded, whether it retries, what is left half-done.",
      effort: "2 hours",
      outcome: "A specification that covers where the majority of the code actually goes.",
    },
    {
      title: "Agree a question protocol with the team",
      body: "Blocking questions come immediately through a fast channel. Everything else goes on a list you cover once a day. Agree it explicitly rather than assuming it.",
      effort: "15 minutes",
      outcome: "Fewer interruptions for them, faster answers for the things that matter, and a stated commitment you can be held to.",
    },
    {
      title: "Sit in refinement expecting to be wrong",
      body: "Walk through the work, ask them to tell you what is missing, and write down every question without defending the document.",
      effort: "1-2 hours per session",
      outcome: "Gaps found while they are still free to fix, and a visible signal that you want the feedback.",
    },
    {
      title: "Learn to ask the three follow-up questions",
      body: "What makes it hard, what would make it easier, and what does that mean for the business. Use them every time a technical objection appears.",
      effort: "Ongoing",
      outcome: "The ability to tell a data problem from an architecture problem from a size problem.",
    },
    {
      title: "Keep the question log and review it at the end",
      body: "Record every question you are asked during the build. At the end, categorise: missing rule, missing data definition, missing failure path, missing permission.",
      effort: "Minutes each, one hour at the end",
      outcome: "A precise, personal map of what your specifications leave out.",
    },
  ],

  exercises: [
    {
      title: "The why audit",
      brief:
        "Take ten items from a current backlog and check whether each states why the business wants it, in a form a developer could use to make a decision. Rewrite the ones that do not.",
      success:
        "Every item has a one-sentence purpose that would help somebody choose between two reasonable implementations.",
      time: "1 hour",
    },
    {
      title: "Ask what makes it hard",
      brief:
        "The next three times a developer says something is difficult, ask what specifically makes it difficult and write the answer down. Categorise each as data, architecture or size.",
      success:
        "At least one turns out to be a business finding you need to take back to a stakeholder rather than a technical constraint to work around.",
      time: "Ongoing over a sprint",
    },
    {
      title: "Explain an estimate back",
      brief:
        "Take an estimate your team has given and ask questions until you could explain to a non-technical sponsor, in two sentences, what the time consists of. Then write those two sentences.",
      success:
        "A developer reads your two sentences and agrees they are accurate, and you could defend the estimate without them in the room.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Handing over what without why",
      why: "Developers then build exactly what is written, which is correct and brittle. Every case you did not anticipate gets handled literally rather than sensibly.",
      fix: "One sentence of purpose on every requirement. It is the cheapest quality improvement available in a handover.",
    },
    {
      mistake: "Hearing a technical objection as resistance",
      why: "You lose the earliest and best warning you get. Developers who feel their concerns are treated as obstruction stop raising them and start absorbing them silently.",
      fix: "Ask what makes it hard, then what would make it easier. Treat the answer as analysis input rather than negotiation.",
    },
    {
      mistake: "Disappearing during the build",
      why: "Dozens of unspecified decisions get taken without you. Individually reasonable, collectively they produce something the business did not expect.",
      fix: "Be reachable, attend the walkthroughs, and review the thing as it emerges rather than at the end.",
    },
    {
      mistake: "Interrupting constantly",
      why: "Development needs uninterrupted stretches. A drip of small questions costs the team more than the answers are worth and makes you the problem.",
      fix: "Batch non-blocking questions to once a day, and hold a genuinely fast channel for anything that stops work.",
    },
    {
      mistake: "Relaying an estimate you cannot explain",
      why: "When it is challenged you cannot defend it, so it gets overruled by whoever has more authority, and the team learns that estimates are decorative.",
      fix: "Ask what the time consists of until you can describe it in two sentences, then use those sentences with the business.",
    },
    {
      mistake: "Rejecting a technical alternative because it is not what you wrote",
      why: "You lose a cheaper solution and you teach the team not to offer ideas, which is a permanent cost for a temporary point.",
      fix: "Ask whether the business behaviour changes. If it does not and it is cheaper, take it. If it does, quantify the difference and decide together.",
    },
    {
      mistake: "Writing appropriately and as required",
      why: "It looks like a requirement and functions as a decision handed to someone with no authority to make it, who will then be blamed for the outcome.",
      fix: "Replace with a rule or a number, or mark it as an open decision with an owner and a date.",
    },
    {
      mistake: "Treating build-time questions as an annoyance",
      why: "They are the highest quality review your specification will ever receive, and being defensive teaches people to guess instead of asking.",
      fix: "Log every one, answer quickly, and review the log at the end to find your own recurring gap.",
    },
  ],

  bestPractices: [
    "Give the why with every requirement.",
    "Specify failure behaviour for every dependency and rejection.",
    "Hand over decisions made, and mark genuinely open ones with an owner and a date.",
    "Ask what makes it hard before responding to any technical objection.",
    "Check what a developer heard when they say something is easy.",
    "Evaluate technical alternatives on business outcome, not on wording.",
    "Agree a question protocol: blocking immediately, everything else batched.",
    "Attend refinement expecting to be wrong and write down every gap.",
    "Ask whether each technical decision changes what a user sees or can do.",
    "Understand every estimate well enough to explain it in two sentences.",
    "Stay present through the build and review as it emerges.",
    "Log build-time questions and review them against yourself afterwards.",
  ],

  proTips: [
    "Ask a developer to read your specification before the estimate rather than after. Questions raised during estimation are free, and the same questions raised during build cost a rebuild. It also changes how carefully your documents get read, permanently and in your favour.",
    "When you do not understand something technical, say so plainly and ask. Pretending is transparent and it costs you far more than the moment of ignorance would. In my experience the fastest way to earn a development team's respect is to ask a basic question without embarrassment and then remember the answer.",
    "Sit near the team if you possibly can, and if you cannot, be visibly present in whatever channel they use. Most of the useful information you get during a build arrives in fragments nobody would think to send you: a comment about a table being slower than expected, an offhand remark that a field is never populated. None of that reaches a scheduled meeting.",
    "Ask what you could do to make the next piece of work easier, and then actually do it. Almost nobody asks developers this. The answers are specific and cheap: give us the reference data list up front, tell us the expected volumes, stop changing the acceptance criteria after refinement. Acting on one of them buys you more goodwill than a year of good intentions.",
  ],

  businessApplications: [
    "Agile delivery, where the BA role is largely refinement, availability and acceptance rather than a document handover.",
    "Offshore or outsourced development, where availability windows are limited and specification quality has to carry more weight.",
    "Integration projects, where the technical constraints genuinely determine what business behaviour is affordable.",
    "Legacy modernisation, where developers hold knowledge about the old system that exists in no document.",
    "Vendor implementations, where the configuration team needs the same context and rarely receives it.",
    "Support handover, where the failure paths you specified determine whether the support team can operate the thing.",
  ],

  checklist: [
    "Every requirement carries a one-sentence purpose.",
    "Failure paths specified for every dependency and rejection.",
    "No untestable adjectives remain in the handover.",
    "Open decisions marked with an owner and a date.",
    "Question protocol agreed with the team.",
    "Refinement attended, with gaps recorded rather than defended.",
    "Every technical objection explored with what makes it hard.",
    "Technical alternatives assessed against business outcome.",
    "Estimates understood well enough to explain in two sentences.",
    "Technical decisions checked for changes to what users see or can do.",
    "Question log maintained through the build.",
    "Log reviewed at the end and categorised.",
  ],

  faqs: [
    {
      q: "How technical does a Business Analyst need to be?",
      a: "Enough to read a data model, understand what an API does, know why a batch differs from a real-time interface, and tell genuinely hard from unfamiliar. For a Business Systems Analyst, more, including SQL. Writing production code is not part of the role.",
    },
    {
      q: "What do I do when the team says my requirement is impossible?",
      a: "Ask what specifically makes it impossible, and what would be possible. Impossible almost always means impossible given the current data, architecture or timescale, and each of those has a different response, one of which is a genuine business finding.",
    },
    {
      q: "How much detail do developers actually want?",
      a: "Ask them, because it varies by team and by domain. Most want the rules, the exceptions, the data definitions and the failure behaviour, and do not want screen descriptions or prose explaining what they can see for themselves.",
    },
    {
      q: "Should the BA write acceptance criteria alone?",
      a: "Draft them, then improve them with the team. You supply the business rules and exceptions, developers and testers find the technical cases. Written entirely by one side they consistently miss half of what they should cover.",
    },
    {
      q: "What if a developer changes behaviour without telling me?",
      a: "Usually they did not realise it was a business change. Ask to be told when a decision affects what a user sees or can do, give one concrete example of why, and check the emerging build regularly rather than relying on notification.",
    },
    {
      q: "How do I handle being cut out of technical discussions?",
      a: "Ask to attend rather than to be informed, and be useful when you are there by answering business questions quickly. The fastest route into those conversations is being the person who unblocks them.",
    },
  ],

  tools: [
    { name: "A question log", what: "Every question asked during a build, categorised at the end. The most honest review your specification will receive.", cost: "Free" },
    { name: "An agreed question protocol", what: "Blocking questions immediately, everything else batched daily. Costs fifteen minutes to agree.", cost: "Free" },
    { name: "Read access to the data", what: "Lets you answer your own questions and check a claim rather than asking a developer to stop and run a query.", cost: "Varies" },
    { name: "The team's own board and channel", what: "Being present where the work happens beats any status report, and most useful information arrives as fragments.", cost: "Varies" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "the specification this depends on", context: "Handover" },
    { slug: "running-user-acceptance-testing", anchor: "proving it does what was agreed", context: "Acceptance" },
    { slug: "api-integration-that-doesnt-break", anchor: "understanding integration constraints", context: "Technical context" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "running-user-acceptance-testing", "api-integration-that-doesnt-break"],

  conclusion: [
    "The next time a developer tells you something is hard, ask what specifically makes it hard and write the answer down. Do it three times. At least one of those answers will turn out to be a business finding you needed and would never have discovered from the business side.",
  ],
};

export default guide;
