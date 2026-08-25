import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "logistic-regression-and-scorecards",
  seoTitle: "Points-Based Scorecards: The Model Behind Most Decisions",
  metaDescription:
    "Logistic regression explained as what it usually becomes: a points table. Why regulated industries still use it, and the trap hiding inside every scorecard.",
  title: "The Points-Based Scorecard",
  keywords: [
    "logistic regression explained simply",
    "credit scorecard explained",
    "scorecard model business",
    "explainable credit decisions",
    "logistic regression business use",
    "regulated decision model",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "If you have ever been refused credit, quoted an insurance premium, or had an application assessed, there is a good chance the decision came from a points table. Been at your address more than three years, add twelve points. In this age band, add eight. Applied for four other things this month, subtract twenty. Total it up, and above a certain number you are accepted.",
    "That table almost always comes from something called logistic regression. It is one of the oldest and least fashionable tools in this whole area, and it is still the workhorse of nearly every industry where somebody has to be told why.",
    "The reason is not sentiment. It is that you can print it. When a customer asks why they were declined, you can point at the three lines that cost them the most points. Nothing more sophisticated can do that as cleanly, and in a lot of businesses that is not a preference, it is a legal requirement.",
  ],

  whyItMatters: [
    "This is the model behind an enormous number of real decisions about real people, and most business people have never had it explained. Knowing what a scorecard is and where the numbers come from makes you far more useful in any conversation about lending, insurance, eligibility or risk.",
    "It is also the answer whenever explainability is the constraint rather than accuracy. Businesses reach for something more powerful, discover at the last minute that somebody has a right to a reason, and have to go back. Knowing this option exists prevents that.",
    "And it has one specific trap that is worth understanding, because it catches out organisations that are trying hard to do the right thing. A scorecard cannot use a characteristic you are not allowed to consider, and it can very easily use something that stands in for it.",
  ],

  coreConcepts: [
    {
      term: "It works out how many points each thing is worth",
      explain:
        "Given thousands of past cases where you know what happened, it works out how much each characteristic pushes the answer towards yes or towards no. Those weightings become points.",
      detail:
        "That is genuinely the whole thing. It is doing the same job as an experienced underwriter who has learned that certain combinations go badly, except it worked out the weightings from the record rather than from memory.",
    },
    {
      term: "The output is a likelihood, not a decision",
      explain:
        "What comes out is a score that translates into something like a seventy per cent chance of repaying. Somebody in the business then decides what score is good enough.",
      detail:
        "Where that cut-off goes is a commercial decision about how much risk you want and how many customers you are willing to turn away. It is not a technical setting and it should not be left to one.",
    },
    {
      term: "You can print it and argue with it",
      explain:
        "The whole model fits on a page. Anybody can read which characteristics earn points, how many, and in which direction.",
      detail:
        "This is why it survives. A compliance officer can review it, a manager can challenge a weighting, and a customer can be given a genuine reason. Almost nothing else in this area offers that.",
    },
    {
      term: "The reason for a decision falls out naturally",
      explain:
        "For any individual case you can list the three or four things that cost them the most points. That is a real explanation, not an approximation of one.",
      detail:
        "Ask for this to be built in from the start. Retrofitting reason codes onto a live decision process is far more work than including them at the beginning.",
    },
    {
      term: "The trap: things that stand in for other things",
      explain:
        "You are not allowed to use certain characteristics about people. A scorecard will happily use something that closely tracks one of them without anybody intending it.",
      detail:
        "Postcode is the classic. Nobody put a protected characteristic in the model, and postcode may carry a great deal of information about one. The model has no concept of what it is not allowed to know.",
    },
    {
      term: "Check the outcomes by group afterwards",
      explain:
        "You cannot spot the problem above by looking at the model. You spot it by looking at who is being accepted and refused, broken down by group, after it has been running.",
      detail:
        "Somebody has to be given that job before go-live. It is not a technical check and it will not happen by itself, and it is the only reliable way to catch it.",
    },
    {
      term: "It handles straight-line relationships, and reality often bends",
      explain:
        "In its simplest form it assumes each extra year at an address is worth the same as the last. Frequently the first two years matter enormously and the next ten barely at all.",
      detail:
        "In practice this gets handled by grouping things into bands, which is exactly why real scorecards have bands rather than continuous numbers. That is a feature rather than a simplification.",
    },
    {
      term: "It will usually be beaten on accuracy",
      explain:
        "Something built purely for performance will typically do better. The gap is often smaller than people expect, and sometimes it is meaningful.",
      detail:
        "The honest question is whether that gap is worth giving up the ability to explain every decision. In a regulated setting the answer is frequently no, and that is a legitimate business choice rather than a technical compromise.",
    },
    {
      term: "It needs reviewing like anything else",
      explain:
        "The relationships it learned came from a particular period. Customer behaviour, the economy and your own product range all move.",
      detail:
        "Scorecards get reviewed and rebuilt on a schedule in industries that have been doing this for decades, and that discipline is worth copying wherever you use one.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A model that faithfully learned a pattern nobody would endorse.",
      walkthrough:
        "Amazon developed a system to score job applicants, trained on CVs submitted over the previous decade. Because that pool was overwhelmingly male, the model learned that male candidates had been preferred. By 2015 it was penalising CVs containing the word women's and favouring verbs more common on men's applications. The company concluded it could not reliably make the model neutral and abandoned it.",
      result:
        "Nothing in the engineering was wrong. The model fitted its data faithfully. The lesson for anybody building a scorecard is that it learns whatever pattern is in the history, including one you would never write into a rule, and no accuracy figure will show you. Checking outcomes by group after it is running is the only reliable way to catch it, and somebody has to be given that job.",
      source: {
        label: "Dastin, Reuters (10 October 2018). Amazon scraps secret AI recruiting tool that showed bias against women",
        url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women",
      },
    },
    {
      kind: "illustration",
      scenario: "The characteristic that was standing in for something else.",
      walkthrough:
        "The problem: a lender reviewed a scorecard that had been running for two years. No protected characteristic appeared anywhere in it. What was happening: an analyst broke down acceptance rates by group after the fact and found a clear difference. Working backwards, one heavily weighted item was a postcode-based measure, and in that particular market the postcode tracked one of the characteristics they were not permitted to consider extremely closely.",
      result:
        "What changed: they removed the postcode measure and replaced it with characteristics about the individual rather than the area. Accuracy dropped slightly. The point is that nobody had done anything wrong at the point of building it. The problem was only visible in the outcomes, which is exactly why somebody has to be looking at them.",
    },
    {
      kind: "illustration",
      scenario: "Choosing the printable one on purpose.",
      walkthrough:
        "The problem: a business was choosing between two approaches for assessing applications. One was noticeably more accurate. The other was a scorecard anybody could read. What was happening: a BA asked what an applicant would be told if they were declined. Under the accurate approach, nobody could give a straight answer.",
      result:
        "What changed: they used the scorecard for the decline decision, where somebody has a right to a reason, and the more accurate approach only for deciding which applications got looked at first, where nobody is told anything. Two models, one business, chosen for two different jobs. That is a sensible answer and it needs somebody to ask the question early.",
    },
  ],

  learningPath: [
    {
      title: "Establish the explanation requirement first",
      body: "Ask compliance or legal what an applicant has to be told if the answer is no. That question decides whether this is the right family before anybody looks at accuracy.",
      effort: "A conversation",
      outcome: "The constraint that most often decides the approach, found in week one.",
    },
    {
      title: "Get the list of characteristics you may not use",
      body: "In writing, from legal. Then ask separately which of your available fields might track any of them closely.",
      effort: "A conversation",
      outcome: "A list of fields to watch, which is different from the list you are forbidden to use.",
    },
    {
      title: "Build it and print it",
      body: "The whole model should fit on a page. Take that page to compliance, to a manager and to somebody in the front line and ask what looks wrong.",
      effort: "Part of the build",
      outcome: "Three different kinds of review that no accuracy figure would substitute for.",
    },
    {
      title: "Build the reason codes in from the start",
      body: "For every decision, the three or four things that most affected it, in customer-facing language. Retrofitting these later is far more work.",
      effort: "Part of the build",
      outcome: "A genuine explanation for every individual decision.",
    },
    {
      title: "Set the cut-off as a commercial decision",
      body: "How much risk you want against how many applicants you turn away. Get both numbers from the business and decide deliberately.",
      effort: "A conversation",
      outcome: "A cut-off somebody chose rather than one that landed on a default.",
    },
    {
      title: "Assign somebody to check outcomes by group",
      body: "After go-live, regularly. Acceptance rates broken down by whatever groups matter legally and commercially.",
      effort: "Ongoing, half a day a month",
      outcome: "The only reliable way to catch a characteristic standing in for another.",
    },
    {
      title: "Put it on a review schedule",
      body: "Rebuild on a defined cycle rather than when somebody notices a problem. This is standard practice in industries that have used scorecards for decades.",
      effort: "A conversation",
      outcome: "A model that stays current rather than quietly drifting.",
    },
  ],

  exercises: [
    {
      title: "Read a scorecard",
      brief:
        "Get hold of any scorecard in your business, or a published example, and read it. For each item, ask why it earns the points it does and whether that makes sense.",
      success:
        "You can explain what the model does to somebody else, and you have at least one question about a weighting.",
      time: "1 hour",
    },
    {
      title: "Look for the stand-ins",
      brief:
        "Take the list of characteristics your business is not permitted to use. For each, ask which of your available fields might track it closely in your particular market.",
      success:
        "You have a list of fields to watch, and usually at least one that had not been considered.",
      time: "1 hour",
    },
    {
      title: "Ask what a declined applicant is told",
      brief:
        "For any automated decision in your business, ask exactly what somebody is told if the answer is no, and who wrote that wording.",
      success:
        "You get specific wording, or you have found that nobody has decided, which is worth raising.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Choosing on accuracy before asking about explanations",
      why: "Discovering at go-live that somebody has a right to a precise reason means either a rebuild or a compliance problem, both expensive.",
      fix: "Ask compliance in week one what a declined applicant has to be told.",
    },
    {
      mistake: "Assuming the model is neutral because you left certain fields out",
      why: "It will use anything that tracks a characteristic closely. Nobody has to intend it and nothing in the model shows it.",
      fix: "List the fields that might stand in for something, and check outcomes by group after it goes live.",
    },
    {
      mistake: "Never checking the outcomes",
      why: "This is the only way to catch the problem above, and it does not happen unless somebody is given the job with a schedule.",
      fix: "Name somebody, give them a monthly slot, and have them report by group.",
    },
    {
      mistake: "Letting the technical team set the cut-off",
      why: "Where the line goes is a trade between risk accepted and business turned away. Both are commercial numbers and neither is technical.",
      fix: "Get both from the business and set the cut-off deliberately.",
    },
    {
      mistake: "Adding reason codes afterwards",
      why: "Working backwards from a live decision process to produce customer-facing explanations is far more work than building them in.",
      fix: "Specify the reason codes as part of the original requirement.",
    },
    {
      mistake: "Never rebuilding it",
      why: "The relationships came from a particular period. Behaviour, the economy and your own products all move, and the scorecard does not.",
      fix: "Put it on a defined review cycle, as regulated industries have done for decades.",
    },
  ],

  bestPractices: [
    "Ask about the explanation requirement before anything else.",
    "Get the list of characteristics you may not use, in writing.",
    "Separately list fields that might track one of them closely.",
    "Print the model and review it with compliance, a manager and somebody in the front line.",
    "Build reason codes in from the start.",
    "Set the cut-off as a commercial decision with two numbers behind it.",
    "Check acceptance rates by group after go-live, on a schedule.",
    "Put the model on a defined rebuild cycle.",
  ],

  proTips: [
    "Print the scorecard and show it to somebody in the front line who deals with customers. They will tell you within minutes whether an item earning heavy points matches what they see, and they will occasionally spot something that reflects an old process rather than a real signal.",
    "Ask which fields might track a characteristic you are not allowed to use, and ask it of somebody who knows the market rather than somebody who knows the data. Postcode, occupation, the name of a previous employer and the type of email address can all carry far more than they appear to, and that knowledge sits with the business rather than the technical team.",
    "When a scorecard performs noticeably worse than an alternative, ask what the gap is worth in money and what the explanation is worth in avoided complaints and regulatory attention. Both are real numbers and putting them side by side turns a technical argument into a business decision.",
    "Look at what a declined applicant is actually sent. Frequently the reason codes exist in the system and the letter says something generic, which loses the entire benefit of having chosen a printable model in the first place.",
  ],

  businessApplications: [
    "Credit and lending decisions, where a reason has to be given.",
    "Insurance underwriting and pricing.",
    "Eligibility decisions for a service or a benefit.",
    "Any decision about a person where a regulator or a customer may ask why.",
    "Risk assessment where a committee has to review and approve the logic.",
    "Situations where the model has to be handed over to a team who did not build it.",
  ],

  checklist: [
    "Explanation requirement confirmed with compliance or legal.",
    "List of characteristics that may not be used, in writing.",
    "Fields that might track one of those identified.",
    "Model printed and reviewed by compliance, a manager and a front line person.",
    "Reason codes built in and worded for customers.",
    "Cut-off set from risk appetite and volume, by the business.",
    "Somebody named to check outcomes by group, with a schedule.",
    "Rebuild cycle agreed.",
    "Wording of the actual decline letter checked.",
  ],

  faqs: [
    {
      q: "Why is such an old approach still used so widely?",
      a: "Because it can be printed, reviewed and explained. In lending, insurance and anything where somebody has a right to a reason, that is a requirement rather than a preference, and nothing more sophisticated does it as cleanly.",
    },
    {
      q: "How much accuracy do we give up?",
      a: "Usually some, and often less than people expect. The right question is whether the gap is worth more than being able to explain every decision, which in a regulated setting it frequently is not.",
    },
    {
      q: "We left out all the protected characteristics. Are we safe?",
      a: "No. The model will use anything that tracks one closely, without anybody intending it. Postcode is the usual example. The only reliable check is looking at outcomes by group after it has been running.",
    },
    {
      q: "Who should set the score cut-off?",
      a: "The business, from two numbers: how much risk you are willing to take and how many applicants you can afford to turn away. It is a commercial decision that frequently gets left to a technical default.",
    },
    {
      q: "Why do real scorecards use bands rather than exact numbers?",
      a: "Because relationships in real life bend. The first two years at an address may matter enormously and the next ten hardly at all. Banding handles that, which is why it appears in nearly every scorecard you will see.",
    },
    {
      q: "How often should it be rebuilt?",
      a: "On a defined cycle rather than when somebody notices a problem. Industries that have used these for decades review them regularly, and that discipline is worth copying wherever you use one.",
    },
  ],

  tools: [
    { name: "The printed scorecard", what: "One page. Reviewable by compliance, a manager and somebody in the front line, which nothing else offers.", cost: "Free" },
    { name: "A written list of prohibited characteristics", what: "From legal, plus a separate list of fields that might track them.", cost: "Free" },
    { name: "Reason codes, worded for customers", what: "Built in from the start. Retrofitting them is far more work.", cost: "Free" },
    { name: "A monthly outcome check by group", what: "The only reliable way to catch a field standing in for something it should not.", cost: "Free" },
  ],

  resources: [
    { title: "Amazon scraps secret AI recruiting tool", kind: "Docs", note: "The clearest documented case of a competently built model learning a pattern from its history that nobody would endorse, invisible in any accuracy figure.", url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women" },
  ],

  internalLinks: [
    { slug: "predicting-yes-or-no", anchor: "the wider family this belongs to", context: "Background" },
    { slug: "explaining-an-ai-decision", anchor: "giving somebody a reason properly", context: "Explanations" },
    { slug: "decision-trees-for-business", anchor: "the other readable option", context: "Alternative" },
  ],

  relatedGuides: ["predicting-yes-or-no", "explaining-an-ai-decision", "decision-trees-for-business"],

  conclusion: [
    "Take the list of characteristics your business is not permitted to use in a decision, and ask somebody who knows your market which of your available fields might track any of them closely. That hour produces a watchlist that no technical review would have generated.",
  ],
};

export default guide;
