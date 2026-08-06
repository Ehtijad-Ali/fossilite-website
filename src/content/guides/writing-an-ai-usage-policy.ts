import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "writing-an-ai-usage-policy",
  seoTitle: "Writing an AI Usage Policy Your Team Will Follow",
  metaDescription:
    "A practical one-page AI policy: which tools are approved, what must never be pasted anywhere, who signs off on customer-facing output, and how to keep it current.",
  title: "Writing an AI Usage Policy",
  keywords: [
    "ai usage policy",
    "ai policy template",
    "company ai guidelines",
    "ai governance",
    "ai data protection",
    "acceptable use ai",
  ],
  category: "business-strategy",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 9,

  intro: [
    "Your team is already using AI. That is true whether or not you have bought anything, and it has been true for a while. The only open question is whether they are doing it under rules you wrote or rules they invented.",
    "Most policies fail because they are written to protect the company from its employees rather than to help employees make good calls. They arrive as four pages of prohibitions, get skimmed once, and change nothing about what gets pasted into a browser tab at four in the afternoon.",
    "A policy that works is short, specific, and answers the questions people actually have: which tool am I allowed to use, what can I put in it, and who checks this before a customer sees it.",
  ],

  coreConcepts: [
    {
      term: "Write it before the tools arrive, not after",
      explain:
        "In the absence of guidance, people make individually reasonable decisions that add up to an exposure nobody chose.",
      detail:
        "Retrofitting a policy onto established habits is much harder than setting the habit. If tools are already in use, publish this week rather than perfectly.",
    },
    {
      term: "Name approved tools explicitly",
      explain:
        "'Use approved tools' with no list is not a policy. People need a name they can check against.",
      detail:
        "Make the approved path easier than the alternatives. If the sanctioned tool is slower to access, the policy loses to convenience every time.",
    },
    {
      term: "The consumer and business versions are different products",
      explain:
        "A personal account and a business agreement can differ substantially in whether your input is retained or used for training.",
      detail:
        "This distinction is the single most common gap. People assume the account type does not matter because the interface looks the same.",
    },
    {
      term: "Define the never list concretely",
      explain:
        "Abstract categories get interpreted generously under time pressure. Name the actual things: customer personal data, unreleased financials, credentials, contracts under NDA, health data, anything about a named individual's performance.",
      detail:
        "Concrete lists are also easier to remember, which is the property that decides whether a policy works.",
    },
    {
      term: "A human owns every customer-facing output",
      explain:
        "Not a review step in principle, a named person who is accountable for the words. This is the control that prevents most of the serious failures.",
      detail:
        "Legal exposure follows this rule. Your organisation is responsible for what its systems tell customers, regardless of how the text was produced.",
    },
    {
      term: "Separate the high-risk uses and treat them differently",
      explain:
        "Hiring, performance, credit, discipline and anything affecting a person's rights carry legal requirements that ordinary drafting does not.",
      detail:
        "These need explicit sign-off and usually specific advice. Do not let them sit under the same paragraph as summarising a meeting.",
    },
    {
      term: "Disclosure rules should be decided, not improvised",
      explain:
        "Whether you tell customers, candidates or readers that AI was involved is a decision with reputational consequences either way.",
      detail:
        "In some jurisdictions and contexts it is becoming a requirement. Decide the position once so individuals are not deciding it case by case.",
    },
    {
      term: "Date it and review it",
      explain:
        "The capability, the vendors and the law are all moving. An undated policy is quietly obsolete within a year.",
      detail:
        "Put the review date on the document itself and give it an owner. Quarterly is realistic for most companies.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A company held to what its automated system told a customer.",
      walkthrough:
        "Air Canada's website chatbot told a customer that a bereavement fare could be claimed retroactively, which contradicted the airline's published policy. The refund was refused and the case reached the British Columbia Civil Resolution Tribunal, where the airline argued the chatbot was a separate entity responsible for its own statements.",
      result:
        "The tribunal rejected that argument and found the airline liable for information on its own website however it was generated. The policy implication is precise: an AI answer given to a customer is your company's answer. Any policy that permits customer-facing generated output without a named accountable human has left that exposure open.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "illustration",
      scenario: "The policy that was too long to work.",
      walkthrough:
        "A company publishes a detailed AI policy covering definitions, risk categories, model governance and escalation. It is thorough and accurate. Six months later a survey finds most staff cannot say which tools are approved, and several have been using personal accounts for customer correspondence throughout.",
      result:
        "Nothing in the document was wrong. It failed because a policy is only useful at the moment someone is about to paste something, and at that moment nobody opens a nine-page PDF. The version that worked was one page, listed three approved tools by name, and had a short never list people could recall.",
    },
  ],

  mistakes: [
    {
      mistake: "Banning AI outright",
      why: "It does not stop usage, it moves it somewhere you cannot see, on personal accounts with no agreement about data handling. You have swapped a manageable risk for an invisible one.",
      fix: "Approve a small number of tools and make them easy to access. Visible usage you can govern beats invisible usage you cannot.",
    },
    {
      mistake: "Writing categories instead of examples",
      why: "'Confidential information' means different things to different people, especially when they are busy and the deadline is today.",
      fix: "List the actual items. Customer records, unreleased results, credentials, contracts under NDA, anything about a named person.",
    },
    {
      mistake: "Ignoring the account type",
      why: "The same interface can be a consumer product or a business agreement, with materially different terms about retention and training.",
      fix: "State which account tier is approved, and have IT provision it so people are not choosing.",
    },
    {
      mistake: "Treating all uses as equally risky",
      why: "A policy that treats summarising a meeting the same as screening candidates either strangles ordinary work or under-controls the risky part.",
      fix: "Two tiers. Ordinary use with light guidance, and a named high-risk list requiring sign-off.",
    },
    {
      mistake: "Publishing it once and moving on",
      why: "Vendors change terms, new tools appear, and regulation moves. A stale policy is followed until the day it is embarrassing.",
      fix: "Put a review date and an owner on the document, and actually hold the review.",
    },
  ],

  bestPractices: [
    "Keep it to one page. Length trades directly against compliance.",
    "Name approved tools explicitly, and make them the easiest option available.",
    "Specify the account tier, not just the product.",
    "Write the never list as concrete items, not categories.",
    "Require a named human owner for anything a customer will see.",
    "Separate high-risk uses (hiring, performance, credit, discipline) and require sign-off.",
    "Decide your disclosure position once, centrally.",
    "Date it, name an owner, and review quarterly.",
  ],

  checklist: [
    "Approved tools are listed by name, with the account tier specified.",
    "The never list is concrete and short enough to remember.",
    "Someone is named as accountable for customer-facing output.",
    "High-risk uses are separated and require explicit sign-off.",
    "The position on disclosure to customers and candidates is stated.",
    "There is a named person to ask when something is unclear.",
    "The document carries a date, an owner and a review cycle.",
    "It fits on one page and someone outside the drafting group has read it and understood it.",
  ],

  faqs: [
    {
      q: "How long should an AI policy be?",
      a: "One page. It has to be usable at the moment someone is deciding whether to paste something, and nobody opens a long document at that moment.",
    },
    {
      q: "Should we ban AI for customer communication?",
      a: "Banning drafting is usually overreach. Requiring that a named person reads and owns anything sent is the control that actually matters.",
    },
    {
      q: "What about code written with AI assistance?",
      a: "Treat it like any other contribution: reviewed before merge, and licence-checked if a suggestion looks like it was reproduced verbatim from somewhere.",
    },
    {
      q: "Do we have to tell customers when AI was involved?",
      a: "It depends on jurisdiction and context, and it is moving. Decide a position centrally rather than leaving individuals to improvise, and take advice for regulated areas.",
    },
    {
      q: "Who should own the policy?",
      a: "Whoever owns data protection, with input from legal and from the teams actually using the tools. An IT-only policy tends to miss how the work is really done.",
    },
  ],

  tools: [
    { name: "Your data protection lead", what: "The right first conversation. Most of the constraints are already written down in your existing obligations.", cost: "Free" },
    { name: "Business-tier AI accounts", what: "The agreement that keeps your input out of training. Provision centrally so people are not choosing.", cost: "Paid" },
    { name: "Employment law advice", what: "Necessary before anything touches hiring, performance or discipline.", cost: "Paid" },
    { name: "A shared prompt library", what: "The positive half of governance: showing people the approved way to do a thing.", cost: "Free" },
  ],

  resources: [
    { title: "Google Search Essentials: spam policies", kind: "Docs", note: "Useful precedent for how a large platform frames acceptable automated content, if you publish anything.", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  ],

  internalLinks: [
    { slug: "ai-for-hiring-and-hr", anchor: "why hiring is the highest-risk application", context: "High-risk uses" },
    { slug: "leading-an-ai-rollout", anchor: "publish the policy before the tools arrive", context: "Rollout sequencing" },
    { slug: "cybersecurity-basics-for-builders", anchor: "the data handling fundamentals underneath it", context: "Security" },
  ],

  relatedGuides: ["leading-an-ai-rollout", "ai-for-hiring-and-hr", "data-privacy-and-ai"],

  conclusion: [
    "Write the never list this week, on one page, and send it round before you buy anything else. It is the highest-return hour available in this whole subject.",
  ],
};

export default guide;
