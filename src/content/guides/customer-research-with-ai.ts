import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "customer-research-with-ai",
  seoTitle: "Customer Research with AI: Synthesis, Not Substitution",
  metaDescription:
    "Using AI to turn interviews, reviews and support tickets into decisions you can act on, and why simulated customers cannot replace the conversations themselves.",
  title: "Customer Research with AI",
  keywords: [
    "ai customer research",
    "interview analysis ai",
    "voice of customer ai",
    "synthetic personas",
    "review analysis ai",
    "customer insight automation",
  ],
  category: "entrepreneurship",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 9,

  intro: [
    "Customer research has a bottleneck, and it is not gathering. Most companies already hold far more customer input than they read: support tickets, reviews, sales call notes, churn surveys, recordings nobody transcribed. The bottleneck is turning that into something a person can act on this week.",
    "That is exactly what AI is good at, and it is a real change. Work that used to require a dedicated researcher and a fortnight now takes an afternoon, which means it actually happens.",
    "There is also a tempting shortcut in this area that does not work, and it is worth naming early: asking a model to play your customer. This guide covers both the genuine capability and the shortcut.",
  ],

  coreConcepts: [
    {
      term: "Synthesis is the win, gathering is not",
      explain:
        "You almost certainly already have more customer input than anyone has read. Compressing it into themes is the step that was missing.",
      detail:
        "Start with what you have before designing new research. Most companies find the answer was already sitting in their support queue.",
    },
    {
      term: "A simulated customer is not a customer",
      explain:
        "A model asked to role-play your buyer will produce fluent, plausible, agreeable answers drawn from general patterns. It cannot tell you what your specific market believes.",
      detail:
        "The useful thing about a real interview is being surprised. A simulation is constitutionally incapable of surprising you with information it does not have.",
    },
    {
      term: "Quote, do not paraphrase",
      explain:
        "Require the analysis to attach real verbatim quotes to every theme. It keeps the summary honest and gives you the language customers actually use.",
      detail:
        "Customer vocabulary is worth as much as the theme. It is what you should use in your copy and your product labels.",
    },
    {
      term: "Ask about last time, not about generally",
      explain:
        "People are unreliable about what they would do and reasonably reliable about what they did. Structure interviews and analysis around specific past events.",
      detail:
        "This is a research discipline that AI does not change. It only makes analysing the answers faster.",
    },
    {
      term: "Watch for the model agreeing with you",
      explain:
        "If you ask it to find support for a hypothesis, it will find support. The framing of the prompt decides the finding more than the data does.",
      detail:
        "Ask for the strongest evidence against your belief as a separate, explicit pass. The asymmetry in what comes back is informative on its own.",
    },
    {
      term: "Count as well as summarise",
      explain:
        "A theme mentioned twice and a theme mentioned forty times read identically in a narrative summary. Ask for frequency.",
      detail:
        "Without counts you will act on whichever complaint was phrased most memorably, which is not the same as the most common one.",
    },
    {
      term: "Segment before you synthesise",
      explain:
        "Aggregating across customer types produces an average nobody is. The interesting findings are usually differences between segments.",
      detail:
        "Run the analysis separately for churned and retained, or new and established, and compare.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What founders themselves say went wrong.",
      walkthrough:
        "CB Insights compiled post-mortems written by failed startups. Across the original set of more than 110 companies, no market need was the most commonly cited contributing factor, named by 42%. Later analyses of venture-backed failures found a comparable pattern around product-market fit.",
      result:
        "The relevance to research tooling is direct. The dominant failure is building something nobody needed, which is a research failure rather than an execution one. Anything that shortens the loop between a customer saying something and a team acting on it is valuable. Anything that lets you skip the customer saying it is the opposite, however fast it feels.",
      source: {
        label: "CB Insights: The Top Reasons Startups Fail",
        url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/",
      },
    },
    {
      kind: "illustration",
      scenario: "The synthesis that found what the team already believed.",
      walkthrough:
        "A product team analyses two hundred support tickets with a prompt asking which features customers are requesting. The output confirms the roadmap. Later someone runs a different prompt asking what customers were trying to do when they contacted support at all. A large cluster appears around a workflow the product handled badly, which nobody had logged as a feature request because customers had described it as confusion rather than as a missing feature.",
      result:
        "Same data, different question, different roadmap. The prompt is part of the method, not a neutral instruction. Ask at least one question designed to surface what you were not looking for.",
    },
  ],

  mistakes: [
    {
      mistake: "Using a model as a stand-in for customers",
      why: "It generates a confident average of everything it has read about people like your customer, which is precisely the generic assumption you were trying to test.",
      fix: "Use it to prepare questions and analyse answers. The conversations themselves are the irreducible part.",
    },
    {
      mistake: "Asking a leading question of your own data",
      why: "'Find evidence that customers want X' will produce evidence that customers want X, drawn from ambiguous statements read generously.",
      fix: "Run the opposite prompt as well and compare what each returns.",
    },
    {
      mistake: "Accepting themes without counts or quotes",
      why: "A narrative summary flattens frequency, so a memorable one-off reads like a pattern.",
      fix: "Require a count and at least two verbatim quotes per theme, and check a sample against the source.",
    },
    {
      mistake: "Aggregating across segments",
      why: "The average of your power users and your trial abandoners describes nobody, and hides the differences that would actually change a decision.",
      fix: "Segment first, analyse separately, then compare the outputs.",
    },
    {
      mistake: "Researching instead of deciding",
      why: "Cheap analysis makes it easy to keep gathering. More research becomes a way of postponing a decision that already has enough evidence.",
      fix: "Write down what you will do differently depending on the finding, before you run the analysis.",
    },
  ],

  bestPractices: [
    "Start with the customer input you already hold before designing new research.",
    "Require verbatim quotes and frequency counts against every theme.",
    "Run a deliberately contrary prompt alongside your main one.",
    "Segment before synthesising, then compare segments.",
    "Ask about specific past events rather than hypothetical intentions.",
    "Spot-check a sample of quotes against the source transcript every time.",
    "Decide in advance what each possible finding would change.",
  ],

  businessApplications: [
    "Turning a quarter of support tickets into ranked themes with counts and quotes.",
    "Summarising sales call notes into the objections that recur and how they were handled.",
    "Analysing churn survey responses separately from retention survey responses.",
    "Extracting the language customers use for your product, for use in copy and labels.",
    "Reading competitor reviews for the complaints that describe an opening.",
    "Preparing interview guides from what you already know, so the conversation covers new ground.",
    "Producing a monthly voice-of-customer digest that people actually read because it is short.",
  ],

  exercises: [
    {
      title: "The two-prompt test",
      brief:
        "Take one set of customer input. Run your intended analysis prompt, then run one asking what you would have missed. Compare the two outputs side by side.",
      success: "The second prompt surfaces at least one theme the first did not.",
      time: "2 hours",
    },
    {
      title: "The quote audit",
      brief:
        "Take the themes from your last synthesis and check ten quotes against the original transcripts. Confirm they exist and mean what the summary implied.",
      success: "Every quote is real and in context, or you have found a reason to tighten the prompt.",
      time: "1 hour",
    },
  ],

  faqs: [
    {
      q: "Can AI replace customer interviews?",
      a: "No. It can prepare you for them and analyse them afterwards. The information you need does not exist anywhere a model can read, which is the entire reason to do the interview.",
    },
    {
      q: "Are synthetic personas useful at all?",
      a: "As a rehearsal tool for practising questions, mildly. As evidence about your market, no. They return the average of public writing about people like your customer.",
    },
    {
      q: "How many interviews before analysis is worth it?",
      a: "Ten or so is enough for themes to start repeating. Below that you are reading, not analysing, and you should just read them.",
    },
    {
      q: "How do I stop it telling me what I want to hear?",
      a: "Ask the opposite question as a separate pass, require verbatim quotes, and check a sample yourself. The prompt shapes the finding more than most people expect.",
    },
  ],

  tools: [
    { name: "A transcription tool", what: "The prerequisite. Recordings you have not transcribed are research you have not done.", cost: "Freemium" },
    { name: "Anthropic API", what: "Synthesis across transcripts, tickets and reviews with quotes attached.", cost: "Paid", url: "https://console.anthropic.com" },
    { name: "Your support ticketing system", what: "Already holds the largest body of customer input most companies own.", cost: "Varies" },
  ],

  resources: [
    { title: "The Top Reasons Startups Fail", kind: "Docs", note: "Founder post-mortems. A reminder of what research is actually for.", url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/" },
  ],

  internalLinks: [
    { slug: "validating-a-product-idea", anchor: "how to run the interviews themselves", context: "Before analysis" },
    { slug: "thinking-critically-about-evidence", anchor: "reading your own findings sceptically", context: "Analysis discipline" },
    { slug: "ai-for-startup-growth", anchor: "where else the leverage is real at small scale", context: "Wider context" },
  ],

  relatedGuides: ["validating-a-product-idea", "thinking-critically-about-evidence", "ai-for-startup-growth"],

  conclusion: [
    "Take last quarter's support tickets and ask what customers were trying to do, rather than what they asked for. That one change of question is where most teams find something they did not know.",
  ],
};

export default guide;
