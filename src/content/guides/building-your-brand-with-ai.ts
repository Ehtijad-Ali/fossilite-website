import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "building-your-brand-with-ai",
  seoTitle: "Building a Professional Brand with AI (Without Sounding Like It)",
  metaDescription:
    "Using AI to publish consistently without losing the voice that makes people trust you: what to delegate, what to never delegate, and how to keep sounding like yourself.",
  title: "Building Your Brand with AI",
  keywords: [
    "personal branding ai",
    "ai content writing voice",
    "linkedin ai content",
    "thought leadership ai",
    "professional brand",
    "ai writing authenticity",
  ],
  category: "personal-branding",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 9,

  intro: [
    "A professional reputation is built on people believing you know something. That belief comes from specificity: a number you measured, a mistake you made, a situation you were actually in. Everything else is decoration.",
    "This is awkward for AI-assisted publishing, because a model can produce the decoration endlessly and cannot produce the specificity at all. It has never run your project or lost your client.",
    "So the useful question is not whether to use it. It is which parts of publishing are craft you can delegate and which parts are the thing people are actually reading for.",
  ],

  coreConcepts: [
    {
      term: "The substance has to be yours",
      explain:
        "The reason anyone follows a professional is access to things they cannot get elsewhere. A model can only recombine what is already public.",
      detail:
        "If a post could have been written by someone who had never done the work, it does not build a reputation for having done the work.",
    },
    {
      term: "Delegate the craft, not the claim",
      explain:
        "Structure, tightening, headlines, adapting one piece for a different platform: all fair game. What you assert and what you claim to have seen: yours.",
      detail:
        "The line is whether a factual error in the output would be embarrassing. If it would, you own that sentence.",
    },
    {
      term: "Voice is specific, and generation regresses to average",
      explain:
        "A model trained on everything produces the middle of everything. Your voice is whatever is unusual about how you say things, which is exactly what gets smoothed away.",
      detail:
        "Keep a reference file of your own writing with explicit notes on what you never say. It helps, and it does not fully solve the problem.",
    },
    {
      term: "Publishing more is not the goal",
      explain:
        "Now that production is nearly free, output volume signals nothing. Frequency without substance actively reduces the value of your name.",
      detail:
        "One post a month containing a number nobody else has beats twelve summarising public material.",
    },
    {
      term: "Readers can tell, and increasingly they check",
      explain:
        "Generated professional content has recognisable patterns, and audiences have become fast at spotting them. Being caught is a trust cost that outlasts the post.",
      detail:
        "Being open about using AI to edit is unremarkable. Being caught passing off generated experience is not.",
    },
    {
      term: "Never invent credentials or experience",
      explain:
        "This is the one hard line. A fabricated case study or an implied client is a lie regardless of which tool produced the sentence.",
      detail:
        "It is also the easiest thing to do accidentally, because a model asked for an example will produce a plausible one and it reads like a memory.",
    },
    {
      term: "Use it hardest on the drafts you avoid writing",
      explain:
        "The real bottleneck is usually the blank page, not the words. A bad first draft you can react to is worth more than a good outline.",
      detail:
        "Draft badly on purpose, then rewrite in your own words. The rewrite is where the voice comes back.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Two consultants, same tooling, different results.",
      walkthrough:
        "One publishes three posts a week summarising industry developments, produced quickly and competently. The other publishes monthly, each time on a project they ran, including what the client pushed back on and what the numbers were afterwards. Both use AI to structure and tighten the writing.",
      result:
        "The second gets the inbound enquiries. The difference is not effort or frequency, it is that only one of them is publishing something a reader could not have got anywhere else. Volume was never the scarce resource. Access to real experience was.",
    },
    {
      kind: "illustration",
      scenario: "The case study that never happened.",
      walkthrough:
        "Someone asks a model to help write about their consulting approach and to include an illustrative client example. The model produces a specific, plausible scenario with figures. It reads well and goes into a post with only light editing. A prospect later asks about that project in a call.",
      result:
        "There was no intent to deceive, which is exactly why it happens. A model asked for an example will produce a concrete one, and concrete reads like recall. Anything specific about clients, results or numbers has to be written from your own records, not accepted from a draft.",
    },
  ],

  mistakes: [
    {
      mistake: "Publishing to a schedule you can only meet with generated filler",
      why: "The cadence starts driving the content, and the content becomes the kind that can be produced on demand, which is the kind nobody needs.",
      fix: "Set a frequency you can sustain with real material. Monthly with substance beats weekly without it.",
    },
    {
      mistake: "Accepting invented specifics",
      why: "Asked for an example, a model will supply one. It will be concrete, plausible and fictional, and it will read like something you remembered.",
      fix: "Write anything specific about clients, results or numbers from your own records. Treat every figure in a draft as unverified.",
    },
    {
      mistake: "Editing until it sounds professional",
      why: "Professional is the average register. The rough edges are usually the parts that sound like a person with opinions.",
      fix: "Edit for clarity, not for polish. If a sentence sounds like everyone, it is doing nothing for you.",
    },
    {
      mistake: "Outsourcing the opinion",
      why: "A balanced summary of a debate positions you as an observer. People follow professionals for their judgement, which requires taking a side.",
      fix: "Decide what you think first, write that down in one sentence, and use the tool to support it rather than to find it.",
    },
  ],

  bestPractices: [
    "Start from something only you know: a number, a mistake, a specific situation.",
    "Keep a voice reference file with real examples and explicit notes on what you never say.",
    "Treat every specific claim in a draft as unverified until you check your own records.",
    "Draft badly on purpose, then rewrite in your own words.",
    "Choose a publishing frequency your real material can sustain.",
    "State your view in one sentence before writing anything around it.",
    "Never let a model supply a client example, a credential or a result.",
  ],

  faqs: [
    {
      q: "Is it dishonest to use AI to write posts?",
      a: "Using it to edit and structure is unremarkable and widely done. Presenting generated experience as your own is the line, and it is a hard one.",
    },
    {
      q: "How do I keep my own voice?",
      a: "Write the first draft yourself, badly, then use the tool to tighten it. Reversing that order is how voice disappears, because you end up editing someone else's register.",
    },
    {
      q: "Should I disclose that I use AI?",
      a: "For editing assistance, most audiences neither expect nor need it. For anything where authorship is the point, be straightforward. The reputational cost of being caught exceeds the cost of saying so.",
    },
    {
      q: "How often should I publish?",
      a: "As often as you have something only you can say. That is the constraint, and it is usually less often than advice suggests.",
    },
  ],

  tools: [
    { name: "A voice reference file", what: "Your own best writing plus explicit rules about what you never say. The single most useful artefact here.", cost: "Free" },
    { name: "Anthropic API or chat interface", what: "Structural editing, tightening and platform adaptation.", cost: "Freemium", url: "https://console.anthropic.com" },
    { name: "Your own project notes", what: "The actual source material. Nothing else produces content nobody could copy.", cost: "Free" },
  ],

  resources: [
    { title: "Google Search Essentials: spam policies", kind: "Docs", note: "Useful framing on what scaled generated content is considered to be, if you publish on your own site.", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  ],

  internalLinks: [
    { slug: "clear-writing-that-gets-read", anchor: "the writing fundamentals underneath this", context: "Craft" },
    { slug: "finding-your-first-clients", anchor: "turning reputation into work", context: "Commercial outcome" },
    { slug: "ai-for-marketing-teams", anchor: "the same trap at company scale", context: "Wider context" },
  ],

  relatedGuides: ["clear-writing-that-gets-read", "finding-your-first-clients", "ai-for-marketing-teams"],

  conclusion: [
    "Write down one thing you learned this month that is not published anywhere else. If you cannot, that is the problem to solve, and no tool addresses it.",
  ],
};

export default guide;
