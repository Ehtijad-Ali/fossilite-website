import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "building-a-business-website-with-ai",
  seoTitle: "Building a Business Website with AI: What It Can't Do",
  metaDescription:
    "Using AI to build and run a business website: where it genuinely accelerates the work, the generated-content trap, and the technical basics it will not fix for you.",
  title: "Building a Business Website with AI",
  keywords: [
    "ai website builder",
    "build website with ai",
    "ai web content",
    "small business website",
    "ai seo content",
    "website copy ai",
  ],
  category: "web-development",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 9,

  intro: [
    "AI has made the first ninety percent of a business website considerably faster to produce, which has made the last ten percent more important rather than less. Anyone can now have a competent-looking site with plausible copy in a weekend.",
    "That is a real gain if you understand what it did and did not solve. It removed the production cost of pages. It did not tell you what your business does better than the alternatives, and it did not make search engines want to rank you.",
    "This guide covers where these tools genuinely accelerate the work, the content trap that catches small businesses hardest, and the unglamorous technical things that decide whether a site performs.",
  ],

  coreConcepts: [
    {
      term: "Positioning is the part it cannot do",
      explain:
        "The hardest sentence on any business site is the one saying who this is for and why they should choose you. That requires knowing your market, not language.",
      detail:
        "If you cannot state it, generated copy will paper over the gap with fluent generic phrasing and you will not notice until nobody converts.",
    },
    {
      term: "Publishing volume is the trap",
      explain:
        "Cheap production makes it tempting to add fifty pages. Thin near-duplicate pages produced at scale is precisely the pattern search guidance targets.",
      detail:
        "A small number of pages that genuinely answer something beats a large number that summarise what is already ranked.",
    },
    {
      term: "Speed and structure still decide performance",
      explain:
        "Image sizes, layout stability, how quickly the main content appears, whether the page works on a phone. None of this is helped by better copy.",
      detail:
        "These are measurable and fixable, and they are usually where a small business site is actually losing.",
    },
    {
      term: "Say what only you can say",
      explain:
        "Your prices, your process, your service area, your actual work, your real people. Everything reconstructible from public sources reads as generic because it is.",
      detail:
        "This is also what earns links and shares, which is what search engines are trying to detect.",
    },
    {
      term: "Anything a customer relies on must be true and current",
      explain:
        "Opening hours, delivery promises, prices, policies. Generated approximations here become commitments a customer will act on.",
      detail:
        "The same applies to any chat widget you add. Ground it in your real policy or do not ship it.",
    },
    {
      term: "Accessibility is not optional and is easy to get wrong",
      explain:
        "Colour contrast, keyboard navigation, alt text, form labels. Generated templates frequently fail these, and in many jurisdictions it is a legal requirement.",
      detail:
        "Run an automated checker, then try navigating your own site with only a keyboard. The second test finds what the first misses.",
    },
    {
      term: "Understand what the tool generated",
      explain:
        "A site you cannot modify is a site you will pay someone to modify. Know at minimum where the content lives and how to change it.",
      detail:
        "Ask before committing: can you export the content, and does it work without the vendor.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The fifty-page site that ranked worse than the five-page one.",
      walkthrough:
        "A trades business generates a page for every service and every town within fifty miles. The pages are grammatical, broadly accurate and almost identical apart from the place name. Traffic does not arrive. A competitor with five pages, real photographs of completed work, actual prices and a page explaining what typically goes wrong on these jobs ranks above them for most terms.",
      result:
        "The five-page site contained information nobody else had. The fifty-page one contained information available everywhere, multiplied. Search engines are built to detect exactly that difference, and volume made the problem larger rather than smaller.",
    },
    {
      kind: "documented",
      scenario: "A website statement the company was held to.",
      walkthrough:
        "Air Canada's website chatbot described a bereavement fare policy that did not match the airline's terms. The customer relied on it and was refused a refund. The British Columbia Civil Resolution Tribunal found the airline responsible for information on its own website regardless of how it was produced.",
      result:
        "If you add a chat widget or generate policy pages, you are making statements your business is bound by. Ground anything a customer could rely on in the real policy, and keep it current, because 'the tool wrote it' is not a position that survives contact with a tribunal.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
  ],

  mistakes: [
    {
      mistake: "Generating a page per service per location",
      why: "It is the most obvious use of cheap production and the one search guidance most directly targets. The pages compete with each other and dilute the site.",
      fix: "One strong page per service, with genuine local detail only where you have some.",
    },
    {
      mistake: "Letting generated copy hide missing positioning",
      why: "Fluent text about quality and dedication reads fine and communicates nothing. You will not notice the gap until conversion data does.",
      fix: "Write the who-it-is-for sentence yourself, in plain words, before generating anything around it.",
    },
    {
      mistake: "Ignoring performance because the site looks finished",
      why: "Unoptimised images and heavy templates cost you visitors on mobile connections, silently, and no amount of copy compensates.",
      fix: "Run a page speed test, fix the images first, and re-test. It is usually the single biggest win available.",
    },
    {
      mistake: "Publishing prices or policies the model estimated",
      why: "Customers act on them, and you are bound by them. An approximate opening hour is a wrong opening hour.",
      fix: "Every factual claim on the site gets checked by a person who knows the answer.",
    },
    {
      mistake: "Skipping accessibility",
      why: "Templates often fail contrast and keyboard navigation by default, and in many places this is a legal obligation rather than a nicety.",
      fix: "Run an automated check, then navigate the site yourself using only the keyboard.",
    },
  ],

  bestPractices: [
    "Write your positioning sentence yourself before generating any copy.",
    "Publish fewer pages, each containing something only you can provide.",
    "Put real prices, real photographs and real process on the site.",
    "Check every factual claim with someone who knows the answer.",
    "Test page speed and fix image sizes before anything else.",
    "Run an accessibility check, then a keyboard-only navigation test.",
    "Ground any chat widget in your actual policy, or leave it off.",
    "Confirm you can export your content and edit the site without the vendor.",
  ],

  businessApplications: [
    "Drafting service page structure, then filling it with your own specifics.",
    "Turning your real customer questions into an FAQ that answers them properly.",
    "Writing alt text for existing images, which almost every small site is missing.",
    "Rewriting copy for clarity where the meaning is right and the sentences are long.",
    "Generating structured data markup so search engines parse your pages correctly.",
    "Summarising completed jobs into case studies you then verify and approve.",
  ],

  faqs: [
    {
      q: "Will Google penalise an AI-written site?",
      a: "Search guidance targets low-value content produced at scale, however it was made. Genuinely useful pages are fine. Fifty near-identical location pages are the risk.",
    },
    {
      q: "Is an AI website builder good enough for a small business?",
      a: "For a straightforward brochure site, usually yes. Check before committing that you can export your content and that the site works without the vendor.",
    },
    {
      q: "How many pages should a small business site have?",
      a: "As many as have something distinct to say. For most, that is fewer than ten. Adding pages without adding information does not help.",
    },
    {
      q: "What matters most for ranking?",
      a: "Having something worth linking to, then the technical basics: speed, mobile layout and clear structure. Copy quality matters after those.",
    },
    {
      q: "Should I add a chatbot?",
      a: "Only if it answers from your real policy and stock. An ungrounded widget on a business site creates statements you are legally bound by.",
    },
  ],

  tools: [
    { name: "PageSpeed Insights", what: "Free performance measurement with specific fixes ranked by impact.", cost: "Free", url: "https://pagespeed.web.dev" },
    { name: "A hosted site builder", what: "Fine for brochure sites. Check content export before committing.", cost: "Freemium" },
    { name: "An accessibility checker", what: "Catches contrast and label problems that templates ship by default.", cost: "Free" },
    { name: "Anthropic API or chat interface", what: "Drafting, alt text and structured data markup.", cost: "Freemium", url: "https://console.anthropic.com" },
  ],

  resources: [
    { title: "Google Search Essentials: spam policies", kind: "Docs", note: "The actual rules on scaled content, rather than the folklore about them.", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  ],

  internalLinks: [
    { slug: "ai-for-marketing-teams", anchor: "the content volume trap in full", context: "Content strategy" },
    { slug: "clear-writing-that-gets-read", anchor: "writing copy people finish", context: "Craft" },
    { slug: "ai-for-ecommerce", anchor: "if you are selling online", context: "Ecommerce" },
  ],

  relatedGuides: ["ai-for-marketing-teams", "ai-for-ecommerce", "clear-writing-that-gets-read"],

  conclusion: [
    "Run your site through a page speed test today and fix the images. It takes an afternoon and it is almost always worth more than another ten pages of copy.",
  ],
};

export default guide;
