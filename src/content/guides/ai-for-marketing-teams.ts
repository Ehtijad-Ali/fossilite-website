import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "ai-for-marketing-teams",
  seoTitle: "AI for Marketing Teams: Volume Isn't the Opportunity",
  metaDescription:
    "How marketing teams get real value from AI — research, repurposing, testing and analysis — and why mass-generated content is a liability, not a strategy.",
  title: "AI for Marketing Teams",
  keywords: [
    "ai for marketing",
    "ai content marketing",
    "ai seo content",
    "marketing automation ai",
    "ai copywriting business",
    "content repurposing ai",
  ],
  category: "marketing",
  level: "Beginner",
  updated: "2026-08-05",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "The obvious use of AI in marketing is producing more content, faster. It's also the one most likely to leave you worse off than before — with a site full of material that ranks for nothing, sounds like everyone else, and quietly signals to both readers and search engines that nobody was really paying attention.",
    "The less obvious uses are where the return is. Research that would take a day. Turning one substantial piece into eight formats. Analysing what actually performed and why. Testing more variants than a team could write. These are unglamorous and they compound.",
    "This guide covers where AI genuinely helps a marketing function, why scaled content generation is a trap that search engines now explicitly penalise, and how to use it without your brand voice dissolving into the same register as everyone else's.",
  ],

  whyItMatters: [
    "Marketing is the function where AI adoption is fastest and least examined. The tools are cheap, the output is instant, and the quality bar is subjective enough that bad work can ship for months before anyone notices the numbers haven't moved.",
    "The competitive dynamic has also inverted. When generating competent-sounding content costs almost nothing, competent-sounding content stops being a differentiator. What becomes scarce is anything demonstrably grounded in real experience, real data or a real point of view — which is exactly what AI can't supply on its own.",
    "And there's a durable risk. Search engines have moved explicitly against content produced at scale primarily to game rankings. A library of generated articles isn't a neutral asset; it can be a liability attached to the same domain as everything else you publish.",
  ],

  coreConcepts: [
    {
      term: "Generation is the weakest application",
      explain:
        "Producing finished content is what AI is worst at commercially, because everyone can do it and the output converges on the same register. The value was never in the typing.",
      detail:
        "If a piece could have been written by any competitor using the same tool, it isn't doing marketing work — it's occupying a URL.",
    },
    {
      term: "Repurposing is the highest-return application",
      explain:
        "One genuinely good piece — a customer interview, an original analysis, a real case study — can become a newsletter, a series of posts, a script, a landing page section and a talk outline.",
      detail:
        "The scarce input is the original substance. AI multiplies distribution of something real rather than manufacturing substance that isn't there.",
    },
    {
      term: "Scaled content abuse is a documented policy violation",
      explain:
        "Search engines have explicit policies against generating many pages primarily to manipulate rankings, regardless of whether AI or humans produced them.",
      detail:
        "The test they apply is intent and value to the reader, not the production method. AI-assisted content that genuinely helps is fine; volume produced to rank is not.",
    },
    {
      term: "Research and synthesis beat drafting",
      explain:
        "Summarising customer interviews, analysing competitor positioning, extracting themes from reviews and support tickets — turning unstructured input into something a marketer can act on.",
      detail:
        "This is where a small team gets genuine leverage, because it's the work that usually doesn't happen at all for lack of time.",
    },
    {
      term: "Your customers' words beat your own",
      explain:
        "Support tickets, sales call transcripts and reviews contain the exact language your market uses about its problems. AI can extract those patterns at a scale no one would do manually.",
      detail:
        "That vocabulary is the highest-converting copy you'll ever have, and it's already sitting in systems you own.",
    },
    {
      term: "Testing variants is a real volume win",
      explain:
        "Subject lines, ad copy, headlines, landing page hooks — places where more variants genuinely helps because a test decides, not an opinion.",
      detail:
        "This is the one legitimate volume application: quantity feeding a measurement process, not quantity substituting for one.",
    },
    {
      term: "Voice needs a reference, not an adjective",
      explain:
        "Asking for content that's 'professional but friendly' produces the statistical average of those words. Supplying three pieces of your actual writing produces something closer to you.",
      detail:
        "Maintain a voice reference — real examples plus explicit rules about what you never say — and use it on everything.",
    },
    {
      term: "Someone must own the final read",
      explain:
        "Every piece needs a named person who has read it and is accountable for it being true and on-brand. Volume makes this harder, which is itself an argument for less volume.",
      detail:
        "If your publishing rate exceeds your review capacity, the rate is wrong.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Fabricated citations, and why unreviewed AI content is a business risk.",
      walkthrough:
        "A lawyer used ChatGPT to research precedent and filed a brief citing six court decisions that did not exist, complete with fabricated quotations. Asked to confirm the cases were real, the model said yes.",
      result:
        "The court sanctioned the lawyers $5,000 in June 2023. The marketing lesson is the mechanism rather than the setting: models produce the *form* of a well-sourced claim — plausible statistics, confident attributions, realistic-sounding studies — whether or not any source exists. Any content function publishing statistics or citing research without checking is running exactly this risk, in public, under the brand.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "documented",
      scenario: "Why marketing more is often the wrong response.",
      walkthrough:
        "CB Insights has repeatedly compiled post-mortems written by failed startups. In the original set of 110+, 42% cited no market need — the most frequently given reason. A later analysis of 431 venture-backed failures attributed 43% to poor product-market fit.",
      result:
        "AI makes it cheap to increase marketing output, which makes it cheap to scale past a positioning problem without noticing. If content isn't converting, producing more of it addresses the symptom. The uncomfortable question — whether the offer resonates at all — is the one that determines the outcome, and no amount of generated content answers it.",
      source: {
        label: "CB Insights — The Top Reasons Startups Fail",
        url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/",
      },
    },
    {
      kind: "illustration",
      scenario: "The content library that ranked for nothing.",
      walkthrough:
        "A recognisable trajectory. A team goes from four posts a month to forty using AI. Six months later the site has 240 new pages. Organic traffic is flat. The pages are grammatical, on-topic, and indistinguishable from what three competitors published on the same keywords using the same tools. Nobody links to them because there's nothing in them worth citing, and nobody finishes them because they say what the reader already assumed.",
      result:
        "The scarce resource was never production capacity — it was something worth saying. A single piece containing original data, a real customer story, or a genuinely contrarian argument outperforms the forty, and can be repurposed into a month of distribution. Volume is only leverage when there's substance to multiply.",
    },
  ],

  learningPath: [
    {
      title: "Mine what you already have",
      body: "Feed support tickets, sales call transcripts and reviews through analysis to extract recurring questions, objections and the exact phrases customers use. Do this before writing anything new.",
      effort: "1 week",
      outcome: "A list of real customer language and unanswered questions.",
    },
    {
      title: "Build a voice reference",
      body: "Collect three to five pieces of your best existing writing, plus explicit rules about what you never say. Use it on every generation task rather than describing your tone in adjectives.",
      effort: "3–4 hours",
      outcome: "Output that sounds like you rather than like everyone.",
    },
    {
      title: "Repurpose one strong piece properly",
      body: "Take your single best asset and turn it into a newsletter, a post series, a landing page section and a video script. Measure distribution against the original.",
      effort: "1 week",
      outcome: "Evidence of what multiplying real substance is worth.",
    },
    {
      title: "Use AI for research, not drafts",
      body: "Competitor positioning analysis, review theme extraction, question mining. This is the work that usually doesn't happen at all, and it's where a small team gains most.",
      effort: "Ongoing",
      outcome: "Decisions informed by synthesis you couldn't previously afford.",
    },
    {
      title: "Test variants at volume",
      body: "Generate many subject lines, headlines and ad variants, and let tests decide. This is the legitimate volume play — quantity feeding measurement.",
      effort: "2–3 weeks",
      outcome: "Better-performing copy chosen by data rather than opinion.",
    },
    {
      title: "Establish the review rule",
      body: "Every published piece has a named owner who has read it. If your publishing rate exceeds review capacity, lower the rate rather than the standard.",
      effort: "1 hour to decide",
      outcome: "A rate you can actually stand behind.",
    },
    {
      title: "Check every statistic",
      body: "Any number, citation or study reference gets verified against a real source before publication. Models produce convincing citations for things that don't exist.",
      effort: "Ongoing",
      outcome: "A content library you'd defend if challenged.",
    },
  ],

  mistakes: [
    {
      mistake: "Scaling content production as the primary strategy",
      why: "It produces material indistinguishable from competitors using the same tools, attracts no links, and risks search penalties for scaled content produced primarily to rank.",
      fix: "Increase substance, not volume. One piece with original data or a real customer story outperforms forty generic ones and gives you something to repurpose.",
    },
    {
      mistake: "Publishing statistics without verifying them",
      why: "Models generate convincing citations for studies that don't exist. Publishing a fabricated statistic under your brand is a credibility problem that outlasts the traffic.",
      fix: "Verify every number and citation against a primary source. If you can't find it, cut the claim.",
    },
    {
      mistake: "Describing voice in adjectives",
      why: "'Professional but approachable' produces the statistical average of everything written in that register — which is precisely the generic tone you're trying to avoid.",
      fix: "Supply real examples of your writing and explicit rules about what you never say.",
    },
    {
      mistake: "Publishing faster than you can review",
      why: "Volume without review is how a fabricated claim, an off-brand statement or a factual error reaches your audience under your name.",
      fix: "Cap publishing at your genuine review capacity. Every piece has a named owner who has read it.",
    },
    {
      mistake: "Ignoring the data you already own",
      why: "Support tickets, call transcripts and reviews contain the exact language your market uses. Teams generate new content while sitting on the highest-converting copy they'll ever have.",
      fix: "Mine your own systems first. Customer vocabulary beats invented positioning every time.",
    },
    {
      mistake: "Treating more marketing as the answer to weak conversion",
      why: "If the offer doesn't resonate, more content scales the wrong thing. Fit problems get misdiagnosed as volume problems, and AI makes that mistake cheaper to make.",
      fix: "Check whether volume is genuinely the constraint before automating it.",
    },
    {
      mistake: "Letting AI write the strategy",
      why: "Positioning, audience choice and what to stand for require judgement about your specific market and capabilities. Generated strategy is generic strategy.",
      fix: "Use AI for research and synthesis that informs the decision; make the decision yourself.",
    },
  ],

  bestPractices: [
    "Mine your own support, sales and review data before producing anything new.",
    "Maintain a voice reference of real examples plus explicit never-say rules.",
    "Multiply substance through repurposing rather than manufacturing volume.",
    "Use AI for research and synthesis — the work that otherwise doesn't happen.",
    "Reserve volume for variant testing, where measurement decides.",
    "Verify every statistic and citation against a primary source.",
    "Give every published piece a named owner who has read it.",
    "Cap publishing rate at genuine review capacity.",
    "Judge content on conversion, links and engagement — not pieces published.",
    "Keep positioning and strategy decisions human.",
  ],

  proTips: [
    "Run a support-ticket extraction before your next content plan. The questions customers actually ask, ranked by frequency, is a better brief than anything a keyword tool will give you — and it's already in a system you own.",
    "Ask whether a competitor could publish your piece unchanged. If they could, it isn't doing marketing work. Original data, a named customer, or a genuine opinion are the only reliable differentiators left.",
    "Keep one file of your best writing and paste it in as a voice reference every time. It takes ten seconds and does more for tone than any amount of adjective-based prompting.",
    "Check the first statistic in any AI-assisted draft, always. If it's wrong or unfindable, assume the rest need checking too — the failure clusters.",
    "Track links earned per piece, not just traffic. Generated content rarely earns citations, and that gap shows up in rankings long before it shows up anywhere else.",
    "When output volume rises and results don't, the honest next step is publishing less and investing the time in one thing worth reading.",
  ],

  businessApplications: [
    "Extracting recurring questions, objections and customer vocabulary from support and sales data.",
    "Repurposing one substantial asset across newsletter, social, video script and landing page.",
    "Competitor positioning analysis synthesised from public material.",
    "Review and feedback theme extraction at a scale nobody would do manually.",
    "Variant generation for subject lines, headlines and ad copy, decided by testing.",
    "First drafts from structured briefs, with a marketer editing and owning the result.",
    "Translating one piece into multiple markets, with native review before publishing.",
    "Summarising campaign performance data into readable narrative for stakeholders.",
  ],

  exercises: [
    {
      title: "Mine your own tickets",
      brief:
        "Extract the top 30 recurring questions from support and sales conversations. Rank by frequency. Compare against your current content plan.",
      success: "A ranked question list, and probably a revised plan.",
      time: "1 day",
    },
    {
      title: "The competitor test",
      brief:
        "Take your last five published pieces. For each, ask whether a competitor could publish it unchanged. Count how many pass.",
      success: "An honest number, and a definition of what to change.",
      time: "1 hour",
    },
    {
      title: "Build the voice reference",
      brief:
        "Collect three to five pieces of your best writing and write explicit never-say rules. Generate the same brief with and without it, and compare.",
      success: "A visible difference in tone from the same prompt.",
      time: "3 hours",
    },
    {
      title: "Verify the numbers",
      brief:
        "Take any AI-assisted draft containing statistics. Try to find a primary source for each. Note how many you can't.",
      success: "A verification rate, and a policy that follows from it.",
      time: "2 hours",
    },
  ],

  checklist: [
    "Customer language has been mined from support, sales and review data",
    "A voice reference of real writing exists and is used every time",
    "Content strategy multiplies substance rather than manufacturing volume",
    "Every statistic and citation is verified against a primary source",
    "Every published piece has a named owner who has read it",
    "Publishing rate does not exceed review capacity",
    "Volume is reserved for variant testing, where measurement decides",
    "Positioning and strategy decisions are made by people",
    "Performance is judged on conversion and links earned, not pieces published",
    "Pieces are tested against 'could a competitor publish this unchanged?'",
  ],

  faqs: [
    {
      q: "Will AI content hurt our search rankings?",
      a: "AI assistance isn't penalised; content produced at scale primarily to manipulate rankings is, regardless of how it was made. The test applied is whether it genuinely helps a reader. Generic volume fails that test whoever wrote it.",
    },
    {
      q: "What's the best use of AI in marketing?",
      a: "Repurposing genuinely good material across formats, and research and synthesis you couldn't otherwise afford. Both multiply something real rather than manufacturing substance that isn't there.",
    },
    {
      q: "How do we stop everything sounding generic?",
      a: "Stop describing your voice in adjectives and start supplying examples. Three pieces of your actual writing plus explicit never-say rules does more than any amount of tone instruction.",
    },
    {
      q: "Can AI replace our copywriter?",
      a: "It can replace the typing and not the judgement — what to say, to whom, what's true, and what you'd stand behind. Teams that removed the judgement generally publish more and convert less.",
    },
    {
      q: "Is it safe to publish AI-written statistics?",
      a: "Not without verification. Models produce convincing citations for studies that don't exist — a lawyer was sanctioned for filing six fabricated cases. Check every number against a primary source.",
    },
    {
      q: "How much content should we publish?",
      a: "As much as you can genuinely review and stand behind, and not more. If output rose and results didn't, publishing less and investing in one thing worth reading is the correct response.",
    },
  ],

  tools: [
    { name: "Your support and CRM data", what: "The highest-value marketing input you already own. Mine it before generating anything new.", cost: "Free" },
    { name: "A voice reference file", what: "Three to five pieces of your best writing plus never-say rules. Not a tool, and more effective than most of them.", cost: "Free" },
    { name: "Analytics with link tracking", what: "Links earned per piece is the metric that exposes generic content before rankings do.", cost: "Freemium" },
    { name: "A/B testing tooling", what: "Whatever lets tests decide between variants — the one place volume genuinely helps.", cost: "Freemium" },
  ],

  resources: [
    { title: "Google Search Central — spam policies", kind: "Docs", note: "The authoritative statement on scaled content abuse. Read the actual policy rather than commentary about it.", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { title: "CB Insights — The Top Reasons Startups Fail", kind: "Docs", note: "Why fit problems get misdiagnosed as marketing volume problems.", url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/" },
    { title: "Mata v. Avianca", kind: "Docs", note: "What unverified AI output costs when it reaches the public record.", url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/" },
  ],

  internalLinks: [
    { slug: "clear-writing-that-gets-read", anchor: "the writing principles underneath good copy", context: "In the voice concept" },
    { slug: "ai-for-sales-teams", anchor: "the same discipline applied to outreach", context: "In the volume trap concept" },
    { slug: "thinking-critically-about-evidence", anchor: "verifying a statistic before publishing it", context: "In the documented Mata example" },
  ],

  relatedGuides: [
    "ai-for-sales-teams",
    "clear-writing-that-gets-read",
    "measuring-ai-roi-in-business",
  ],

  conclusion: [
    "The one discipline that protects everything else is review. Every piece needs a named person who has read it and checked its claims. If your publishing rate has outgrown that, the rate is what's wrong.",
  ],

  cta: {
    headline: "Producing more and getting less back?",
    body:
      "When production becomes free, the scarce thing is having something worth saying. We'd rather help you with that than with volume.",
    label: "Talk about your content",
    href: "/contact",
  },
};

export default guide;
