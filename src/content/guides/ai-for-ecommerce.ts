import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "ai-for-ecommerce",
  seoTitle: "AI for Ecommerce: Product Data, Search and Support",
  metaDescription:
    "Where AI earns money in an online shop: product data quality, search that understands intent, support deflection, and the automated pricing mistakes to avoid.",
  title: "AI for Ecommerce",
  keywords: [
    "ai for ecommerce",
    "product description ai",
    "ecommerce search ai",
    "ai product data",
    "ecommerce personalisation",
    "ai pricing ecommerce",
  ],
  category: "sales",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "Ask most online retailers where AI would help and they say product descriptions. It is the visible, tedious job, so it is the one that comes to mind. It is also rarely where the money is.",
    "The money is usually in two less glamorous places: the product data underneath the descriptions, which is incomplete in ways that quietly suppress conversion, and search, which is where customers with intent go and where a surprising share of them fail to find something you actually stock.",
    "This guide covers the applications that move revenue in an online shop, the two that carry real risk, and how to tell whether a change helped rather than coincided with a good week.",
  ],

  whyItMatters: [
    "Ecommerce is one of the few places where the effect of a change is measurable quickly and honestly. You have traffic, conversion and revenue per session already, which removes the usual argument about whether a project worked.",
    "That also means the failure modes are measurable. A search change that reduces zero-result rate but hurts conversion is visible within a week if you are looking at both, and invisible for a quarter if you are only reporting the first.",
    "And the category has a specific asymmetry: a bad product description costs you a sale, while a bad automated price or a wrong stock promise costs you the order, the margin and often the customer.",
  ],

  coreConcepts: [
    {
      term: "Product data quality beats product copy",
      explain:
        "Missing attributes are why filters return nothing and why customers leave. Extracting material, dimensions, compatibility and care instructions from supplier documents fixes a problem copy cannot.",
      detail:
        "This is unglamorous and it is usually the highest-return work available in a catalogue of any size.",
    },
    {
      term: "Search is where intent lives",
      explain:
        "Customers who search convert at much higher rates than browsers. Every zero-result search for something you stock is a sale you declined.",
      detail:
        "Pull your top zero-result queries. Most retailers find items they carry under a different name, which is a data problem with a straightforward fix.",
    },
    {
      term: "Semantic search understands the customer's words",
      explain:
        "Shoppers search for what a thing does, not what you called it. Meaning-based retrieval bridges the gap between their vocabulary and your catalogue.",
      detail:
        "Keep keyword search alongside it. Exact matches on part numbers and brand names must keep working.",
    },
    {
      term: "Support deflection has a hard boundary",
      explain:
        "Where is my order, what is your returns policy and how do I start a return are high volume, factual and safe. Anything about a specific unhappy order is not.",
      detail:
        "Ground every answer in your actual policy, and never let the system invent a resolution it cannot deliver.",
    },
    {
      term: "Automated pricing is the highest-risk application",
      explain:
        "A pricing model commits you to a transaction. Errors are not corrected by review because there is no review.",
      detail:
        "If you do it at all, bound it: floors, ceilings, maximum change per period, and an alert on unusual movement.",
    },
    {
      term: "Personalisation is a feedback loop",
      explain:
        "Recommending what people already click narrows what they see, which narrows what they click. The metric improves while the catalogue effectively shrinks.",
      detail:
        "Reserve a share of slots for genuine exploration and watch catalogue coverage as a health metric.",
    },
    {
      term: "Generated copy at scale is a search risk",
      explain:
        "Thousands of near-identical descriptions are exactly the pattern search guidance targets. Volume is not the win here.",
      detail:
        "Use generation to fill genuine gaps and to enforce structure, not to multiply pages.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "An automated pricing model that committed a company to its own errors.",
      walkthrough:
        "Zillow Offers priced homes it bought and resold using a model. Competing on speed meant committing quickly, and the model failed to anticipate how far and fast prices would move, buying above what properties could later be sold for. The error compounded across thousands of transactions.",
      result:
        "The company announced roughly $304 million of inventory write-down in Q3 2021 and wound the business down. The ecommerce parallel is exact even at a smaller scale: a model whose output is a binding commitment removes the human check that would have caught a drift. Bound automated pricing with floors, ceilings and change limits, and alert on movement rather than trusting the model to notice.",
      source: {
        label: "Zillow Group Q3 2021 results and plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "documented",
      scenario: "A retailer bound by what its automated assistant promised.",
      walkthrough:
        "Air Canada's website chatbot described a bereavement fare policy that did not match the airline's actual terms. The customer relied on it, the refund was refused, and the British Columbia Civil Resolution Tribunal found the airline responsible for information published on its own site regardless of how it was generated.",
      result:
        "For ecommerce this covers delivery promises, returns windows, discount eligibility and stock availability. If your assistant tells a customer something, you have said it. Ground answers in the live policy and the live stock position rather than in general knowledge.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
  ],

  mistakes: [
    {
      mistake: "Starting with product descriptions",
      why: "It is the visible job, not the valuable one. Descriptions rarely constrain conversion as much as missing attributes and failing search do.",
      fix: "Fix attribute coverage and zero-result searches first. Then improve copy where traffic already exists.",
    },
    {
      mistake: "Replacing keyword search entirely",
      why: "Customers searching a part number or exact brand name need an exact match, and semantic search can helpfully return something similar instead of the right thing.",
      fix: "Run both and blend. Exact matches keep priority.",
    },
    {
      mistake: "Letting an assistant answer on stock or delivery without live data",
      why: "A confident wrong delivery promise is a refund, a complaint and, as the case above shows, potentially a binding one.",
      fix: "Connect to live stock and policy, and have the assistant decline rather than estimate.",
    },
    {
      mistake: "Judging personalisation on click-through alone",
      why: "Narrowing recommendations improves click-through while shrinking the effective catalogue and, eventually, revenue per visitor.",
      fix: "Track catalogue coverage and revenue per session alongside engagement.",
    },
    {
      mistake: "Generating thousands of pages because it is cheap",
      why: "Near-duplicate low-value pages at scale is the pattern search engines actively discount.",
      fix: "Generate to fill real gaps on pages that have a reason to exist.",
    },
  ],

  bestPractices: [
    "Export your top zero-result search queries this week. It is the cheapest revenue finding available.",
    "Extract missing product attributes from supplier documentation before touching copy.",
    "Blend semantic and keyword search rather than replacing one with the other.",
    "Ground support answers in live stock, live policy and the customer's actual order.",
    "Bound any automated pricing with floors, ceilings and per-period change limits.",
    "Reserve recommendation slots for exploration and monitor catalogue coverage.",
    "Measure revenue per session, not just conversion rate, when evaluating a change.",
    "Keep a human route visible in support at every step.",
  ],

  businessApplications: [
    "Attribute extraction from supplier PDFs and spec sheets into structured product data.",
    "Semantic search over the catalogue, blended with existing keyword matching.",
    "Zero-result query analysis, mapping customer vocabulary onto your product names.",
    "Order status, returns and policy answers grounded in live systems.",
    "Review summarisation into the recurring themes buyers actually raise.",
    "Category and tag suggestion for new products at upload time.",
    "Draft responses for customer service agents to edit and send.",
  ],

  faqs: [
    {
      q: "Will AI-written product descriptions hurt my SEO?",
      a: "Thin near-duplicate pages produced at scale carry risk regardless of how they were written. Descriptions that add genuine specification detail on pages that deserve to exist do not.",
    },
    {
      q: "What is the highest-return place to start?",
      a: "Zero-result searches and missing product attributes. Both are quick to measure, cheap to fix and directly connected to revenue.",
    },
    {
      q: "Can a chatbot handle order enquiries?",
      a: "Yes, when connected to live order data and your real policy, and when it is willing to hand over to a person. Not from general knowledge.",
    },
    {
      q: "Is automated pricing worth it?",
      a: "It is the highest-risk application in ecommerce because each output is a commitment. If you do it, bound it tightly and alert on unusual movement.",
    },
    {
      q: "How do I know a change actually worked?",
      a: "Compare revenue per session against a holdout group over a full cycle. Conversion rate alone will mislead you when average order value moves.",
    },
  ],

  tools: [
    { name: "Your ecommerce platform's native search", what: "Check what it already supports before buying. Many now include semantic ranking.", cost: "Varies" },
    { name: "A vector database", what: "Semantic product search, blended with your existing keyword index.", cost: "Freemium" },
    { name: "Anthropic API", what: "Attribute extraction from supplier documents and review summarisation.", cost: "Paid", url: "https://console.anthropic.com" },
    { name: "Your analytics platform", what: "Zero-result queries and revenue per session are almost certainly already being recorded.", cost: "Varies" },
  ],

  resources: [
    { title: "Google Search Essentials: spam policies", kind: "Docs", note: "What search actually penalises for generated content, which matters if you have a large catalogue.", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { title: "Contextual Retrieval", kind: "Docs", note: "Practical technique for improving retrieval quality, directly applicable to catalogue search.", url: "https://www.anthropic.com/news/contextual-retrieval" },
  ],

  internalLinks: [
    { slug: "ai-for-customer-support", anchor: "designing support deflection properly", context: "Support" },
    { slug: "rag-explained", anchor: "how semantic search works underneath", context: "Search" },
    { slug: "ai-for-marketing-teams", anchor: "the content volume trap", context: "Copy and content" },
  ],

  relatedGuides: ["ai-for-customer-support", "ai-for-marketing-teams", "rag-explained"],

  conclusion: [
    "Export the top hundred searches that returned nothing this month. You will find products you actually stock, and fixing those names is the fastest revenue this guide can give you.",
  ],

  cta: {
    headline: "Losing sales in search and not sure where?",
    body: "Zero-result queries and attribute gaps are measurable problems with concrete fixes. We can find yours quickly.",
    label: "Review your catalogue and search",
    href: "/contact",
  },
};

export default guide;
