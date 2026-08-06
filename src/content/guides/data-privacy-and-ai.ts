import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "data-privacy-and-ai",
  seoTitle: "Data Privacy and AI: What You Can Safely Send a Model",
  metaDescription:
    "Practical data protection for businesses using AI: what leaves your building when you paste something, which account terms matter, and the controls that keep you compliant.",
  title: "Data Privacy and AI",
  keywords: [
    "ai data privacy",
    "gdpr ai",
    "ai data protection",
    "is chatgpt safe for business data",
    "ai compliance",
    "personal data ai",
  ],
  category: "cybersecurity-basics",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "When someone pastes a customer email into a chat tool, they are sending personal data to a third party in another country and probably another legal jurisdiction. Almost nobody thinks of it that way at the time, because the action feels like using a search box.",
    "That mismatch between how it feels and what it is causes most of the trouble in this area. The failures are rarely dramatic. They are ordinary people doing their jobs efficiently with a tool nobody told them the rules for.",
    "This guide covers what actually happens to data you send a model, which contractual differences matter, the specific things that should never leave your systems, and the controls that make the safe path the easy one.",
  ],

  coreConcepts: [
    {
      term: "Pasting is transferring",
      explain:
        "Text put into a hosted model leaves your infrastructure and is processed by a supplier, often outside your own country. Under most data protection regimes that is a processing activity you are accountable for.",
      detail:
        "It does not matter that it felt like typing into a text box. The obligation attaches to what happened, not how it felt.",
    },
    {
      term: "Consumer and business tiers have different terms",
      explain:
        "The same product can retain your input and use it to improve services on a personal plan, and contractually exclude both on a business agreement.",
      detail:
        "This is the single most consequential distinction in the whole subject, and it is invisible in the interface. Provision business accounts centrally so nobody is choosing.",
    },
    {
      term: "Know your lawful basis before you process",
      explain:
        "Under GDPR-style regimes you need a reason to process personal data, and 'it was convenient' is not one of the available ones.",
      detail:
        "If you cannot state the basis for putting a customer record through a model, that is the finding, not a technicality.",
    },
    {
      term: "Special category data deserves a hard stop",
      explain:
        "Health, biometrics, race, religion, sexual orientation, trade union membership and criminal records carry stricter conditions almost everywhere.",
      detail:
        "The simplest workable rule for most businesses is that these never go into a general-purpose AI tool at all.",
    },
    {
      term: "Minimise before you send",
      explain:
        "Most tasks do not need the name, the account number or the address. Strip what is not required and the risk drops without the usefulness dropping.",
      detail:
        "Redaction before the call is a genuinely effective control and one of the few that costs almost nothing.",
    },
    {
      term: "Retrieval must respect your permission model",
      explain:
        "A system that can search company documents will happily surface something the asker was never entitled to read, unless scoping is enforced at query time.",
      detail:
        "Filter server-side from the authenticated session. Never let the model or the client supply the scope.",
    },
    {
      term: "Deletion has to reach everywhere",
      explain:
        "If a person exercises a deletion right, the obligation covers your logs, your vector index and your prompt history, not just the primary database.",
      detail:
        "Design for this before you build, because retrofitting deletion across an index is considerably harder than including it.",
    },
    {
      term: "Keep a record of what you send where",
      explain:
        "Regulators and enterprise customers both ask which processors you use and what goes to them. An honest answer requires having tracked it.",
      detail:
        "Add AI vendors to your processor register the same way you would any other supplier.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Why unverified output about people is a legal question, not only a quality one.",
      walkthrough:
        "Amazon trained a CV-screening model on a decade of applications and it learned that male candidates had historically been preferred, penalising CVs containing the word 'women's'. The company could not reliably make the model neutral and abandoned it.",
      result:
        "The privacy dimension is easy to miss behind the discrimination story. Automated processing that significantly affects individuals attracts specific obligations in many jurisdictions, including transparency about the logic involved and, often, a right to human review. If you cannot explain how a decision about a person was reached, you have a compliance problem as well as a fairness one.",
      source: {
        label: "Dastin, Reuters (10 October 2018). Amazon scraps secret AI recruiting tool that showed bias against women",
        url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women",
      },
    },
    {
      kind: "illustration",
      scenario: "The support workflow that quietly became an international transfer.",
      walkthrough:
        "A support team starts pasting customer emails into a chat tool to draft replies faster. Quality improves and handling time drops. Nobody has recorded that customer names, addresses and order histories are now routinely processed by a supplier that does not appear on the company's processor register. It surfaces during an enterprise customer's security review.",
      result:
        "Nothing malicious happened and the team was being sensible. The gap was that no approved path existed, so people built their own. The fix is not a prohibition, it is provisioning a business-tier account, adding it to the register, and telling people that is the one to use.",
    },
  ],

  mistakes: [
    {
      mistake: "Assuming a personal account behaves like a business one",
      why: "Retention and training terms can differ substantially, and the interface gives you no indication which set applies.",
      fix: "Provision business accounts centrally and disable the alternative where you can.",
    },
    {
      mistake: "Sending more data than the task needs",
      why: "Full records get pasted because selecting the relevant part takes effort. The extra fields add risk and nothing else.",
      fix: "Strip identifiers before the call. For most tasks the model does not need the name to do the work.",
    },
    {
      mistake: "Building retrieval without permission scoping",
      why: "An internal search that ignores access rules will eventually show someone a document about themselves, or about a colleague's salary.",
      fix: "Enforce scope server-side at query time, and test with a deliberately low-privilege account.",
    },
    {
      mistake: "Ignoring logs when handling a deletion request",
      why: "Prompt logs, traces and vector indexes all contain the data and all sit outside the primary database people think of first.",
      fix: "Map every place data lands before launch, and make deletion cover all of them.",
    },
    {
      mistake: "Writing a prohibition instead of providing a path",
      why: "Banning the tool moves usage onto personal accounts where you have no agreement and no visibility. The risk went up, not down.",
      fix: "Approve a small number of tools, make them easy to reach, and be specific about what must never go into any of them.",
    },
  ],

  bestPractices: [
    "Provision business-tier accounts centrally and make them the easiest option available.",
    "Publish a concrete never list rather than abstract categories.",
    "Minimise and redact before sending. Most tasks do not need identifiers.",
    "Treat special category data as a hard stop for general-purpose tools.",
    "Enforce retrieval scope server-side and test with a low-privilege account.",
    "Map every place data lands, including logs and indexes, before you launch.",
    "Add AI vendors to your processor register like any other supplier.",
    "Keep a human decision-maker in anything that significantly affects an individual.",
  ],

  checklist: [
    "Approved tools are named, and the account tier is a business agreement.",
    "A concrete never list exists and people can recall it.",
    "Identifiers are stripped where the task does not need them.",
    "Special category data is excluded from general-purpose tools entirely.",
    "Retrieval is scoped server-side and has been tested with a restricted account.",
    "Logs, traces and indexes are covered by your deletion process.",
    "AI vendors appear on the processor register with transfer arrangements recorded.",
    "Any decision materially affecting a person has a named human owner.",
  ],

  faqs: [
    {
      q: "Is it safe to paste customer data into a chat tool?",
      a: "Not into a personal account. With a business agreement that excludes training and retention, and with identifiers stripped where possible, it becomes a documented processing activity rather than an unmanaged one.",
    },
    {
      q: "Does GDPR allow using AI on personal data?",
      a: "It is not prohibited. You need a lawful basis, transparency about what you do, and additional safeguards where processing significantly affects someone. Take advice for anything in that last category.",
    },
    {
      q: "What about data leaving the country?",
      a: "International transfers need an appropriate mechanism. Check where your vendor processes and stores data, and record it, because enterprise customers will ask.",
    },
    {
      q: "Can we delete data we already sent?",
      a: "Depends on the vendor's retention terms, which is a reason to read them before you start rather than during an incident. Your own logs and indexes are within your control and must be covered.",
    },
    {
      q: "What is the single most effective control?",
      a: "Data minimisation. Sending less is the only measure that reduces every category of risk at once, and it costs almost nothing to implement.",
    },
  ],

  tools: [
    { name: "Your data protection lead or DPO", what: "The first conversation. Most constraints already exist in obligations you have.", cost: "Free" },
    { name: "Business-tier AI agreements", what: "Contractual exclusion of training and defined retention. The difference that matters most.", cost: "Paid" },
    { name: "A redaction step in your pipeline", what: "Strip identifiers before the model call. Cheap, and it reduces every risk simultaneously.", cost: "Varies" },
    { name: "Your processor register", what: "You almost certainly have one. AI vendors belong on it.", cost: "Free" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "Not privacy, but the clearest demonstration that silent data transformation is real and goes unnoticed for years.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
  ],

  internalLinks: [
    { slug: "cybersecurity-basics-for-builders", anchor: "the security fundamentals underneath this", context: "Security" },
    { slug: "writing-an-ai-usage-policy", anchor: "turn this into a one-page policy", context: "Governance" },
    { slug: "ai-for-hiring-and-hr", anchor: "the highest-risk processing of personal data", context: "High-risk uses" },
  ],

  relatedGuides: ["cybersecurity-basics-for-builders", "writing-an-ai-usage-policy", "ai-for-hiring-and-hr"],

  conclusion: [
    "Find out this week which account tier your team is actually using. If the answer is personal accounts, that is the whole project until it is fixed.",
  ],

  cta: {
    headline: "Not sure what your team is sending where?",
    body: "We help businesses work out what is actually happening, then build the approved path so the safe route is the convenient one.",
    label: "Review your data handling",
    href: "/contact",
  },
};

export default guide;
