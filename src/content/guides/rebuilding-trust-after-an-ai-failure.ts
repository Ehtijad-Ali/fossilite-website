import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "rebuilding-trust-after-an-ai-failure",
  seoTitle: "Rebuilding Trust After an AI Project Fails",
  metaDescription:
    "What to do after an AI deployment damages confidence internally or with customers. Why the second attempt is harder, and the sequence that gets you a second attempt at all.",
  title: "Rebuilding Trust After an AI Failure",
  keywords: [
    "ai project failure",
    "recovering from failed ai",
    "ai trust recovery",
    "second ai project",
    "ai rollback",
    "restoring confidence ai",
  ],
  category: "leadership",
  level: "Intermediate",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "Something went out, it did not work, and now the word 'AI' produces a particular expression in your organisation. Maybe customers were affected. Maybe it was internal and the damage is that nobody believes the next proposal.",
    "This is a recoverable position and it is recovered in a specific order. The instinct is to fix the technology and come back with a better version, which is almost exactly wrong, because the problem is no longer technical and a better version arriving too soon confirms what people already think.",
    "Five steps. The first three have nothing to do with building anything, and the last one is the one everybody wants to start with.",
  ],

  whyItMatters: [
    "Trust rebuilds at a different rate from the one at which it collapses. A single visible failure can undo a year of quiet correct behaviour, and the arithmetic does not run in reverse. You do not get to make one good announcement and be level again.",
    "The practical consequence is that the second project has a much higher evidence bar than the first, and the organisation is right to set it there. Arguing about the bar is a losing move. Clearing it is faster.",
  ],

  coreConcepts: [
    {
      term: "Step one: stop it properly, not partially",
      explain:
        "Turn the thing off or narrow it to the part that demonstrably works. Half measures keep producing the failures people are already talking about, which resets the clock daily.",
      detail:
        "A visible, complete stop is also a signal. It tells people the decision was made by someone paying attention rather than defended by someone invested.",
    },
    {
      term: "Step two: say what happened, before you are asked",
      explain:
        "What went wrong, who was affected, what you did. To customers if they were affected, internally always. Volunteered beats extracted by a wide margin.",
      detail:
        "The account has to be recognisable to the people who watched it happen. A sanitised version confirms that the organisation cannot see clearly, which is a worse finding than the original failure.",
    },
    {
      term: "Step three: name the cause without blaming a person",
      explain:
        "Almost every AI failure I have looked at was a missing control rather than an individual error. No detection route, no threshold, no approval on an irreversible action.",
      detail:
        "Naming a person ends the investigation early and stops future reporting. Naming the missing control is both more accurate and more useful, because controls can be added.",
    },
    {
      term: "Step four: fix the class, not the incident",
      explain:
        "The specific bug is the smallest part. The question worth answering is what category of failure this was and where else that category applies.",
      detail:
        "If the failure was an ungrounded answer, audit everywhere else you generate answers. Fixing one and leaving three is how the second failure arrives before trust has recovered from the first.",
    },
    {
      term: "Step five: return small, boring and measured",
      explain:
        "The next project should be low-stakes, internal if possible, obviously useful and easy to measure. Not the impressive one. Not a better version of the thing that failed.",
      detail:
        "Coming back with the same project improved is the most common mistake and it reads as not having listened. Come back with something small enough that success is undeniable and failure is cheap.",
    },
    {
      term: "Publish the stopping condition next time",
      explain:
        "State up front what result would make you stop. The organisation has just watched a project that did not stop when it should have, and this is the sentence that answers the fear directly.",
      detail:
        "It costs nothing and it is the single most effective thing you can put in the second proposal.",
    },
    {
      term: "The sceptics are now your best reviewers",
      explain:
        "Whoever warned you was right. Bringing them into the second project converts your loudest critics into people with a stake in it working.",
      detail:
        "This is not a management trick; they genuinely see failure modes that advocates do not. It is also visible to everyone else, which is half the benefit.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A public correction that landed better than a quiet one would have.",
      walkthrough:
        "Klarna announced in February 2024 that its AI assistant was handling two-thirds of customer service chats with sharply reduced resolution times. In May 2025 the chief executive told Bloomberg the cost-cutting had gone too far, that the result was lower quality, and the company began recruiting human agents again so customers would always have the option of a person.",
      result:
        "The second statement is step two done in public and at scale. It would have been easy to re-hire quietly and let the earlier claims stand. Saying plainly that the balance was wrong is what let the company keep the parts that worked, and the automation on routine volume was never the problem. Correcting in the open preserves the credibility you need to keep going.",
      source: {
        label: "Klarna press release (February 2024) and coverage of the May 2025 reversal",
        url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/",
      },
    },
    {
      kind: "documented",
      scenario: "Stopping properly rather than patching.",
      walkthrough:
        "Amazon developed a CV-screening model trained on a decade of applications and found it had learned that male candidates had historically been preferred, penalising CVs containing the word 'women's'. The company concluded it could not reliably make the model gender-neutral and abandoned the project.",
      result:
        "This is step one done correctly, and it is worth noticing how unusual it is. The engineering was competent; the problem was conceptual, in the labels. A team under pressure to salvage the investment would have patched it and shipped, and the failure would have been harder to see the second time. Sometimes the recoverable decision is to stop entirely.",
      source: {
        label: "Dastin, Reuters (10 October 2018). Amazon scraps secret AI recruiting tool that showed bias against women",
        url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women",
      },
    },
    {
      kind: "illustration",
      scenario: "The comeback project that worked.",
      walkthrough:
        "After an automated email feature sent several customers incorrect delivery commitments, a company switched it off entirely, wrote to everyone affected, and did not propose anything for two months. The next project was internal: summarising long support threads for agents at handover. No customer contact, no irreversible action, easy to measure.",
      result:
        "It saved a modest amount of time and nobody wrote a case study about it. Its actual output was that six months later the same team got approval for something customer-facing, with the sceptic from the first project on the review. The small boring project was not a step back; it was the mechanism.",
    },
  ],

  learningPath: [
    {
      title: "Stop it completely",
      body: "Off, or narrowed to the part you can demonstrate works. Do this before writing anything or planning anything.",
      effort: "Same day",
      outcome: "The failures stop accumulating while you work out what to do.",
    },
    {
      title: "Write the account",
      body: "What happened, who was affected, what you did, in language the people who watched it would recognise. Send it before anyone has to ask.",
      effort: "1 day",
      outcome: "The version of events everyone is working from is yours and it is accurate.",
    },
    {
      title: "Find the missing control",
      body: "Not the bug. The control whose absence let the bug reach someone. Usually detection, a threshold, or an approval on an irreversible action.",
      effort: "2 days",
      outcome: "A cause that can be fixed rather than a person who can be blamed.",
    },
    {
      title: "Audit everywhere else that class applies",
      body: "Same category of failure, other systems. This is the step that prevents a second incident arriving before recovery from the first.",
      effort: "1 week",
      outcome: "A list, and usually one or two other things worth fixing quietly.",
    },
    {
      title: "Wait, deliberately",
      body: "Weeks, not days. Coming back quickly reads as not having absorbed it, however good the next proposal is.",
      effort: "Weeks",
      outcome: "A gap that lets the next proposal be judged on its merits.",
    },
    {
      title: "Return with something small",
      body: "Internal if possible, obviously useful, easy to measure, with the stopping condition stated. Invite whoever was most sceptical to review it.",
      effort: "Varies",
      outcome: "A win nobody argues with, and the standing to try something larger.",
    },
  ],

  mistakes: [
    {
      mistake: "Coming back with a better version of the thing that failed",
      why: "It reads as not having listened, and it puts the organisation back into the argument it just had. Being right about the technology does not help here.",
      fix: "Different problem, smaller, lower stakes. Return to the original idea much later, if at all.",
    },
    {
      mistake: "Minimising in the account",
      why: "People who watched it happen know what they saw. A sanitised version tells them leadership cannot see clearly, which is more damaging than the incident.",
      fix: "Write it so someone who was there would recognise it. Have one of them read it first.",
    },
    {
      mistake: "Blaming an individual",
      why: "It ends the investigation before the missing control is found, and it guarantees the next problem is handled quietly by someone hoping it goes away.",
      fix: "Blameless about people, pointed about the control that was not there.",
    },
    {
      mistake: "Returning too fast",
      why: "Speed signals that the failure was treated as a setback rather than as information. The proposal is then judged as a continuation of the argument.",
      fix: "Leave a visible gap. Weeks. Use it for the class audit.",
    },
    {
      mistake: "Excluding the people who were right",
      why: "They warned you, they were correct, and leaving them out is noticed by everyone. It also loses you the best reviewers available.",
      fix: "Put the loudest sceptic on the review for the next one, publicly.",
    },
  ],

  bestPractices: [
    "Stop completely before doing anything else.",
    "Volunteer the account. Do not wait to be asked.",
    "Write it so someone who was there recognises it.",
    "Name the missing control, never the person.",
    "Audit the whole class of failure, not the instance.",
    "Leave a deliberate gap before proposing anything.",
    "Return with something small, internal and measurable.",
    "State the stopping condition in the next proposal.",
    "Put the sceptic on the review.",
  ],

  faqs: [
    {
      q: "How long before we try again?",
      a: "Long enough that the next proposal is judged on its own merits, which is usually weeks rather than days. Use the gap for the class audit so the time is doing work.",
    },
    {
      q: "Do we have to tell customers?",
      a: "If they were affected, yes, individually and before they ask. If it was internal, tell the organisation. Volunteered accounts consistently land better than discovered ones.",
    },
    {
      q: "What if leadership wants to press on?",
      a: "Ask what result would make them stop, and get it in writing. That converts an argument about optimism into a decision rule, and it is a much easier conversation than a direct disagreement.",
    },
    {
      q: "Is the whole AI programme now dead?",
      a: "Rarely, unless the response is handled badly. What usually dies is the appetite for large first projects, which is a healthy outcome that most organisations should have reached anyway.",
    },
    {
      q: "How do we stop the team becoming risk-averse?",
      a: "Fix the control rather than adding process. Teams become cautious when the lesson is 'be careful' and stay bold when the lesson is 'that specific gap is now closed'.",
    },
  ],

  tools: [
    { name: "A written account, sent early", what: "The cheapest and most effective step, and the one most often delayed until it is extracted instead.", cost: "Free" },
    { name: "A class audit", what: "Same failure category, every other system. Prevents the second incident.", cost: "Free" },
    { name: "The stopping condition", what: "One sentence in the next proposal. Answers the fear the organisation now has.", cost: "Free" },
  ],

  resources: [
    { title: "Amazon scraps secret AI recruiting tool", kind: "Docs", note: "A team stopping entirely rather than patching. Rarer than it should be.", url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women" },
    { title: "Klarna AI assistant announcement", kind: "Docs", note: "Read alongside the 2025 reversal. Correcting in public preserved more than a quiet retreat would have.", url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/" },
  ],

  internalLinks: [
    { slug: "when-your-ai-gets-it-wrong", anchor: "the first hour, before any of this", context: "Immediate response" },
    { slug: "the-ai-trust-audit", anchor: "the audit that finds the missing control", context: "Step three" },
    { slug: "the-honest-ai-business-case", anchor: "writing the second proposal", context: "Coming back" },
  ],

  relatedGuides: ["when-your-ai-gets-it-wrong", "the-ai-trust-audit", "the-honest-ai-business-case"],

  conclusion: [
    "If something has already gone wrong, write the account this week and send it before anyone asks for it. Everything else on this list gets easier once that is done, and it gets harder every day it is not.",
  ],

  cta: {
    headline: "Second attempt, and it has to land?",
    body: "We are often brought in after a first project went badly, which usually means the work is choosing a small enough second one and making the evidence undeniable.",
    label: "Talk about the next one",
    href: "/contact",
  },
};

export default guide;
