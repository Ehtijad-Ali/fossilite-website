import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "ai-for-saas-businesses",
  seoTitle: "AI in SaaS: Features Customers Keep Paying For",
  metaDescription:
    "Adding AI to a SaaS product without wrecking margins or trust: which features earn their cost, how usage-based inference changes unit economics, and what to promise.",
  title: "AI for SaaS Businesses",
  keywords: [
    "ai saas features",
    "saas ai pricing",
    "ai unit economics",
    "llm cost per user",
    "ai product features",
    "saas ai adoption",
  ],
  category: "saas",
  level: "Intermediate",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 11,

  intro: [
    "Almost every SaaS company has now shipped an AI feature, and a large share of them are being used by nobody. The pattern is consistent enough to be predictable: a summarise button appears, it gets a launch post, usage peaks in week one, and it settles at a few percent.",
    "The features that stick have something in common. They remove a step the user was already doing reluctantly, inside a workflow they were already in. The ones that fail ask the user to go somewhere new and think of something to type.",
    "There is also a margin question that SaaS founders meet for the first time with AI, because inference costs scale with usage in a way that traditional software does not. This guide covers both: which features earn their place, and what happens to your unit economics when they do.",
  ],

  whyItMatters: [
    "SaaS margins are built on the assumption that serving one more user costs almost nothing. Inference breaks that assumption. A heavy user of an AI feature can cost multiples of a light one, on a flat subscription price.",
    "That changes what a good feature looks like. It is no longer enough for it to be popular. It has to be popular in a way that correlates with the customer paying you more, or bounded so heavy use cannot outrun the price.",
    "And there is a trust dimension specific to software. A wrong answer inside a tool people rely on does not read as a quirky demo. It reads as your product being unreliable, and that assessment transfers to features that have nothing to do with AI.",
  ],

  coreConcepts: [
    {
      term: "Ship into the workflow, not beside it",
      explain:
        "A feature that lives where the user already is gets used. A separate AI panel requires the user to remember it exists and decide what to ask.",
      detail:
        "The best AI features are often invisible. Better search ranking, a pre-filled field, a suggested category. Nobody thinks of them as AI, which is why they get used.",
    },
    {
      term: "Inference cost is variable cost",
      explain:
        "Traditional SaaS marginal cost per user is close to zero. AI features make it a real number that scales with engagement.",
      detail:
        "Model cost per user per month, not per request. Then look at your worst-decile users, because they are the ones who decide whether the feature is viable.",
    },
    {
      term: "Bound the expensive paths",
      explain:
        "Caps, rate limits, cheaper models for cheap tasks, and caching are not degradations. They are what makes the feature survivable at your price point.",
      detail:
        "Route by task difficulty. A classification does not need your most expensive model, and most product surfaces are mostly classification.",
    },
    {
      term: "Ground answers in the customer's own data",
      explain:
        "The reason a customer would use your AI feature rather than a general chat tool is that yours can see their workspace. That is the entire differentiator.",
      detail:
        "It is also the compliance surface. Retrieval must respect the same permissions as the rest of your product, per tenant and per user.",
    },
    {
      term: "Tenant isolation is not optional",
      explain:
        "If retrieval can reach another customer's documents, you do not have a bug, you have an incident with disclosure obligations.",
      detail:
        "Scope every retrieval call server-side from the session. Never accept a tenant identifier from the model or the client.",
    },
    {
      term: "Decide whether AI is a tier or a meter",
      explain:
        "Bundling into an existing tier is simpler and risks margin. Metering protects margin and adds friction that suppresses adoption.",
      detail:
        "A common middle path is a generous included allowance with overage, which keeps the feature discoverable while capping the tail.",
    },
    {
      term: "Measure retention contribution, not usage",
      explain:
        "Usage tells you people clicked. The question that matters is whether accounts using the feature renew at a higher rate.",
      detail:
        "Compare cohorts. If the feature is expensive and shows no retention difference, it is a cost centre with a launch post.",
    },
    {
      term: "Say what it is, and what it is not",
      explain:
        "Customers forgive a feature that is honest about its limits. They do not forgive one that was described as reliable and was not.",
      detail:
        "Label generated output. Give users a way to see the source. Make correction easy and cheap.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What happens when an automated answer is treated as the company's word.",
      walkthrough:
        "Air Canada's website chatbot told a customer he could apply for a bereavement fare retroactively, which contradicted the airline's actual policy. When the refund was refused, the case went to the British Columbia Civil Resolution Tribunal. The airline argued, in effect, that the chatbot was responsible for its own statements.",
      result:
        "The tribunal rejected that and found the airline liable for information on its own website, however it was produced. For anyone shipping an AI feature into a product, the principle is direct: output your software generates is your representation to the customer. Ground it in real data, and do not describe it as advice unless you are prepared to stand behind it.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "illustration",
      scenario: "The AI feature that was popular and unprofitable.",
      walkthrough:
        "A project tool ships an assistant that summarises long threads. It is well received and adoption climbs. Nobody models cost per account until the invoice arrives. It turns out a small number of enterprise accounts, the ones with the longest threads and the most users, generate most of the spend, and they are on annual contracts signed before the feature existed.",
      result:
        "The feature was fine. The pricing was set before the cost structure was understood. Model the heaviest decile before launch, not the average, and prefer a generous cap to an unbounded promise you cannot reprice until renewal.",
    },
  ],

  mistakes: [
    {
      mistake: "Shipping a chat box because competitors have one",
      why: "A blank input asks the user to invent a task. Most will try it twice and never return, and you now pay to maintain a feature that proves nothing.",
      fix: "Find the step users already resent doing and remove it. Attach the model to that, in place, with no new surface to learn.",
    },
    {
      mistake: "Pricing on average usage",
      why: "AI usage is heavily skewed. The average tells you almost nothing about the accounts that will define your cost.",
      fix: "Model the ninetieth percentile account. Set caps there and price against that, not against the median.",
    },
    {
      mistake: "Using one expensive model for every task",
      why: "Most product surfaces are classification, extraction or short generation. Paying frontier prices for all of them is a margin decision made by accident.",
      fix: "Route by task. Reserve the expensive model for the work that visibly benefits, and measure whether it does.",
    },
    {
      mistake: "Retrieval that ignores your permission model",
      why: "Users expect AI answers to respect the same access rules as the rest of the product. If it surfaces a document they could not otherwise open, that is a breach whatever the intent.",
      fix: "Filter at query time from the server session. Test explicitly with a low-privilege account.",
    },
    {
      mistake: "Reporting usage as the success metric",
      why: "Usage rises after any launch. It does not tell you whether the feature caused anyone to stay, upgrade or recommend you.",
      fix: "Compare renewal and expansion between accounts that adopted the feature and comparable accounts that did not.",
    },
  ],

  bestPractices: [
    "Attach AI to a step users already do reluctantly, inside the screen where they do it.",
    "Model cost per account for the heaviest decile before you set a price.",
    "Route cheap tasks to cheap models and prove the expensive one earns its cost.",
    "Scope every retrieval server-side, per tenant and per user, and test with a low-privilege account.",
    "Label generated output and show its source so users can check it.",
    "Cache aggressively. A large share of product-surface requests repeat.",
    "Track retention and expansion by adoption cohort, not raw usage.",
    "Keep a kill switch. Any feature calling an external model needs a way to degrade gracefully when it is slow or down.",
  ],

  businessApplications: [
    "Semantic search across a customer's own workspace, which is the feature most consistently valued and least often built well.",
    "Summarising long threads, documents or activity histories at the point where a user opens them.",
    "Suggested categorisation and tagging, replacing dropdowns people leave at the default.",
    "Drafting the routine reply, comment or description with the user editing before it commits.",
    "Onboarding assistance grounded in your own documentation, which reduces support load on the highest-volume tier.",
    "Anomaly flagging on the customer's data, where a queue of things to look at is more useful than an answer.",
  ],

  faqs: [
    {
      q: "Should we charge separately for AI features?",
      a: "Bundle for discovery, meter for margin protection. A generous included allowance with overage is the common middle ground because it keeps adoption high without an unbounded tail.",
    },
    {
      q: "How do we stop AI costs running away?",
      a: "Caps per account, cheaper models for simple tasks, caching, and monitoring the top decile rather than the average. Set the caps before launch, because raising a limit is easy and lowering one is not.",
    },
    {
      q: "Do customers care that a feature uses AI?",
      a: "Mostly they care whether it works. Some enterprise buyers care a great deal about where their data goes, so have a clear answer about training, retention and subprocessors before procurement asks.",
    },
    {
      q: "What if the model gives a wrong answer inside our product?",
      a: "You are responsible for it, as the Air Canada ruling makes plain. Ground answers in real data, show the source, label the output and make correction easy.",
    },
    {
      q: "Is a chat interface ever the right choice?",
      a: "When the task genuinely varies and the user knows what they want. For anything with a predictable shape, a button that does the thing beats a box that asks them to describe it.",
    },
  ],

  tools: [
    { name: "Anthropic API", what: "Product features, with model routing by task difficulty.", cost: "Paid", url: "https://console.anthropic.com" },
    { name: "A vector database", what: "Retrieval over customer workspaces, with per-tenant filtering enforced at query time.", cost: "Freemium" },
    { name: "Usage metering in your billing system", what: "You cannot price what you do not measure per account.", cost: "Varies" },
    { name: "An evaluation set", what: "Build it yourself from real customer data. No vendor can give you this one.", cost: "Free" },
  ],

  resources: [
    { title: "Contextual Retrieval", kind: "Docs", note: "Practical technique for improving retrieval quality, which is what most in-product AI features actually depend on.", url: "https://www.anthropic.com/news/contextual-retrieval" },
    { title: "Rules of Machine Learning", kind: "Docs", note: "Google's engineering guidance, still the best short read on when not to use a model.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "rag-explained", anchor: "how retrieval actually works", context: "For workspace-grounded features" },
    { slug: "evaluating-ai-systems", anchor: "build an evaluation set", context: "Before shipping" },
    { slug: "measuring-ai-roi-in-business", anchor: "measure whether it earned its cost", context: "After shipping" },
  ],

  relatedGuides: ["rag-explained", "evaluating-ai-systems", "measuring-ai-roi-in-business"],

  conclusion: [
    "Before your next AI feature, price the heaviest ten percent of accounts using it. If that number surprises you, you have found the work that needed doing first.",
  ],

  cta: {
    headline: "Shipping AI into your product?",
    body: "We work on the parts that decide whether it survives contact with real usage: retrieval quality, tenant isolation and cost per account.",
    label: "Talk through your feature",
    href: "/contact",
  },
};

export default guide;
