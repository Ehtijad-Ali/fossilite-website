import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "ai-for-startup-growth",
  seoTitle: "AI for Startup Growth: Leverage Without a Bigger Team",
  metaDescription:
    "How a small company uses AI to move faster without burning its reputation: where the leverage is real, where volume backfires, and what to measure before scaling anything.",
  title: "AI for Startup Growth",
  keywords: [
    "ai for startups",
    "startup growth ai",
    "ai marketing small team",
    "startup automation",
    "ai product market fit",
    "growth without headcount",
  ],
  category: "startup-growth",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "The pitch to a startup is always leverage: do the work of a team of ten with a team of three. Some of that is true, and the part that is true is not the part most founders reach for first.",
    "What AI genuinely gives a small company is speed on the work that used to require hiring someone: research, drafting, support coverage, analysis. What it does not give you is a reason to skip the work that decides whether the company survives, which is talking to people who might pay you.",
    "This guide is about where the leverage is real at small scale, the growth tactics that look efficient and quietly cost you more than they return, and how to tell the difference before you have spent three months on it.",
  ],

  whyItMatters: [
    "A startup's scarcest resource is not money, it is the number of decisions you can make before running out of runway. Anything that shortens the loop between question and answer is worth more to you than to a large company.",
    "But small companies also have the least margin for reputational damage. A large brand survives a bad automated email campaign. A company nobody has heard of gets one impression, and if the first one is generated outreach, there is no second.",
    "The asymmetry means the same tool can be your best hire or your worst decision depending entirely on which side of the customer boundary you point it at.",
  ],

  coreConcepts: [
    {
      term: "Leverage is internal before it is external",
      explain:
        "Research, synthesis, drafting, analysis and support tooling all sit inside your company. Mistakes there are cheap and correctable. Anything reaching a prospect carries your entire reputation.",
      detail:
        "Sequence accordingly. Get months of value internally before you point anything at the market.",
    },
    {
      term: "AI cannot tell you whether anyone wants this",
      explain:
        "It can summarise interviews, draft questions and spot themes. It cannot substitute for the conversations, because the information you need does not exist anywhere it can read.",
      detail:
        "The most common startup failure is building something nobody needed. No amount of generated content addresses that, and moving faster in the wrong direction is not an improvement.",
    },
    {
      term: "Volume is the trap, specificity is the moat",
      explain:
        "Generated outreach at scale is the single most tempting and most damaging application for a small company. Recipients recognise it, reply rates fall, and your sending domain suffers.",
      detail:
        "The damage is not confined to the campaign. A flagged domain affects your invoices and password resets too, and recovering takes months you do not have.",
    },
    {
      term: "Small teams should automate the second occurrence, not the first",
      explain:
        "Building tooling for something you have done once is speculation. Building it the third time is a decision with evidence behind it.",
      detail:
        "The exception is anything with a compounding cost, like support questions, where the third occurrence already implies fifty more.",
    },
    {
      term: "Support is where a small team looks bigger than it is",
      explain:
        "Answering common questions instantly and accurately is genuinely achievable at small scale, and it is one of the few places automation improves the customer experience rather than diluting it.",
      detail:
        "This only holds if answers come from your actual documentation. Ungrounded support is worse than slow support.",
    },
    {
      term: "Speed to insight beats volume of output",
      explain:
        "The valuable use is turning twenty customer conversations into a clear picture in an afternoon, not turning one idea into forty blog posts.",
      detail:
        "One is compression of information you gathered. The other is dilution of information you did not.",
    },
    {
      term: "Do not build what you can rent yet",
      explain:
        "At seed stage, custom AI infrastructure is almost always the wrong use of engineering time. Use the hosted thing until it visibly stops fitting.",
      detail:
        "The exception is anything that is your actual product. Then it is not infrastructure, it is the company.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What actually kills startups, and what it implies about growth tactics.",
      walkthrough:
        "CB Insights has repeatedly compiled post-mortems written by failed startups themselves. Across the original set of more than 110 companies, 42% cited no market need as a contributing reason, making it the most commonly named factor. A later analysis of several hundred venture-backed failures found a comparable pattern, with poor product-market fit alongside running out of capital.",
      result:
        "The implication for AI-assisted growth is uncomfortable. The dominant failure mode is building something nobody wanted, and every tactic that increases output without increasing understanding makes that failure arrive faster and with more content attached to it. Use AI to shorten the distance to a real conversation, not to increase the volume of things you say before having one.",
      source: {
        label: "CB Insights: The Top Reasons Startups Fail",
        url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/",
      },
    },
    {
      kind: "illustration",
      scenario: "The outreach campaign that cost a company its email.",
      walkthrough:
        "A two-person startup generates personalised-sounding emails for a large prospect list. The first week produces a few replies and a lot of nothing. Complaints accumulate quietly. The sending domain picks up a poor reputation, and then invoices start landing in spam, along with password resets and replies to existing customers.",
      result:
        "The campaign was judged on reply rate, which looked mediocre. The actual cost sat somewhere nobody was measuring. If you do send at volume, separate your outreach domain from the one that carries transactional mail, and treat complaint rate as the metric that can end the experiment.",
    },
  ],

  mistakes: [
    {
      mistake: "Using AI to avoid customer conversations",
      why: "Generated market research reads plausibly and contains nothing your competitors could not also generate. The information that matters is what a specific person says when you ask why they have not solved this already.",
      fix: "Book fifteen conversations. Use AI to prepare for them and to synthesise them afterwards, not to replace them.",
    },
    {
      mistake: "Publishing volume because production became cheap",
      why: "When everyone's output cost drops, output stops being a differentiator. Thin content also risks your search visibility rather than building it.",
      fix: "Publish less, from something you actually know. One piece with a number nobody else has beats twenty summaries of public material.",
    },
    {
      mistake: "Automating a process you have run twice",
      why: "You do not yet know which parts are stable. You will encode the exceptions as if they were rules and then maintain that mistake.",
      fix: "Run it manually until the shape stops changing, then automate the part that stopped changing.",
    },
    {
      mistake: "Building custom infrastructure at seed stage",
      why: "Engineering time is your most constrained resource, and infrastructure is the least differentiated thing you can spend it on.",
      fix: "Rent everything that is not your product. Revisit when the hosted option visibly stops fitting, not before.",
    },
    {
      mistake: "Measuring activity instead of outcome",
      why: "Emails sent, posts published and tickets deflected all rise when you add AI. None of them is revenue, and some of them move in the wrong direction while looking healthy.",
      fix: "Pick one outcome metric per experiment and decide the threshold before you start.",
    },
  ],

  bestPractices: [
    "Point AI at internal work first. Earn the confidence somewhere mistakes are cheap.",
    "Use it to prepare for and synthesise customer conversations, never to replace them.",
    "Separate your outreach sending domain from the one carrying invoices and password resets.",
    "Ground any customer-facing answer in your own documentation, with the source visible.",
    "Automate on the third occurrence, not the first.",
    "Set the success threshold before running an experiment, so the result can disappoint you.",
    "Rent infrastructure until it stops fitting. Build only what is actually your product.",
  ],

  businessApplications: [
    "Turning customer interview recordings into a themed summary you can act on the same day.",
    "Competitive research: reading public material and producing a positioning brief rather than a list of links.",
    "Support coverage outside working hours, grounded in your help documentation.",
    "Drafting investor updates from your own metrics, with a human editing the narrative.",
    "Onboarding documentation, which every small company needs and nobody has time to write.",
    "Analysing product usage data to find where people stop, without hiring an analyst.",
    "Preparing for sales calls: a brief on the company, the person and your prior history with them.",
  ],

  faqs: [
    {
      q: "Can AI replace hiring a marketer?",
      a: "It replaces some of the production, not the judgement about what to say. A small team gets more from using it to publish less and better than to publish more.",
    },
    {
      q: "Should we build our own AI features or use an API?",
      a: "Use an API unless the model itself is your product. At small scale, custom infrastructure consumes the engineering time you needed for the thing customers pay for.",
    },
    {
      q: "Is AI-generated content bad for SEO?",
      a: "Search guidance targets low-value content produced at scale, regardless of how it was made. Thin generated pages are a risk. Genuinely useful content is not, whatever tool helped write it.",
    },
    {
      q: "What is the single highest-return use for a startup?",
      a: "Compressing customer conversations into decisions. It is the thing you most need to do quickly and the thing least likely to damage anything if you get it slightly wrong.",
    },
    {
      q: "How do we avoid sounding like everyone else?",
      a: "Say things only you can say. Your own numbers, your own customer stories, your own failures. Anything reconstructible from public material will read as generic no matter who wrote it.",
    },
  ],

  tools: [
    { name: "Anthropic API", what: "Synthesis, drafting and analysis behind your own tooling.", cost: "Paid", url: "https://console.anthropic.com" },
    { name: "A transcription tool", what: "Turning customer calls into text you can actually search and summarise.", cost: "Freemium" },
    { name: "Your analytics platform", what: "The usage data you already collect is the input worth analysing first.", cost: "Varies" },
    { name: "A separate outreach domain", what: "Cheap insurance for your transactional email if you ever send at volume.", cost: "Paid" },
  ],

  resources: [
    { title: "The Top Reasons Startups Fail", kind: "Docs", note: "Post-mortems written by founders. Worth reading before deciding what to automate.", url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/" },
    { title: "Google Search Essentials: spam policies", kind: "Docs", note: "What search actually penalises, which is not the same as what people assume.", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  ],

  internalLinks: [
    { slug: "validating-a-product-idea", anchor: "test the idea before building it", context: "Before any growth work" },
    { slug: "ai-for-marketing-teams", anchor: "where AI helps marketing and where it damages it", context: "Content and campaigns" },
    { slug: "ai-for-sales-teams", anchor: "the outreach volume trap", context: "Sales" },
  ],

  relatedGuides: ["validating-a-product-idea", "ai-for-marketing-teams", "ai-for-sales-teams"],

  conclusion: [
    "Take your last ten customer conversations, run them through a synthesis prompt, and see whether the themes match what you believed. If they do not, that is the most valuable thing AI will do for you this quarter.",
  ],

  cta: {
    headline: "Small team, and not sure what to build first?",
    body: "We help early companies pick the one or two things worth automating and talk them out of the rest.",
    label: "Talk through your priorities",
    href: "/contact",
  },
};

export default guide;
