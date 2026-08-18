import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "the-honest-ai-business-case",
  seoTitle: "The Honest AI Business Case: Buy-In Without Overselling",
  metaDescription:
    "How to get an AI project approved without promising what you cannot deliver. The costs everyone forgets, the sentence that protects you, and why the second project is the real prize.",
  title: "The Honest AI Business Case",
  keywords: [
    "ai business case",
    "ai project approval",
    "ai budget justification",
    "ai stakeholder buy-in",
    "ai cost estimation",
    "ai project proposal",
  ],
  category: "leadership",
  level: "Intermediate",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "There is a version of the AI business case that gets approved easily and destroys your credibility eleven months later. It promises a headline saving, understates the maintenance, and does not mention what happens to the people whose work is being automated.",
    "I have written that document. It gets funded. Then the saving turns out to be softer than claimed, someone asks why the team is the same size, and the next proposal you bring gets a much harder ride.",
    "The honest version is a slower sell and it buys something the other one cannot: the ability to come back. This is how to write it, including the three costs everyone leaves out and the one sentence that does most of the protecting.",
  ],

  coreConcepts: [
    {
      term: "The forgotten cost: maintenance, every year",
      explain:
        "Formats change, upstream systems get replaced, prompts drift when models update, the process itself gets revised. None of that is in the build estimate.",
      detail:
        "Assume a meaningful fraction of build cost annually. If the project only breaks even while ignoring that, it loses, and it is better to find that out in the spreadsheet than in year two.",
    },
    {
      term: "The forgotten cost: the review queue",
      explain:
        "Whatever the system cannot handle goes to a person. That person's time is a running cost of the automation and it usually appears nowhere in the case.",
      detail:
        "Cost it at your real exception rate, not the pilot's. If reviewing an exception takes longer than the original task, the automation has moved work rather than removed it.",
    },
    {
      term: "The forgotten cost: someone has to own it",
      explain:
        "Every deployed system needs a named owner a year from now, when the person who championed it has changed role and something upstream has moved.",
      detail:
        "If you cannot name that person in the proposal, you are asking for approval to build an orphan. Say so, or find the name.",
    },
    {
      term: "Freed time is not saved money unless you say what happens to it",
      explain:
        "Four hours a week freed across six people is not twenty-four hours of budget. It is twenty-four hours that will go somewhere, and if you do not name where, it goes nowhere visible.",
      detail:
        "Either the headcount changes, or the team takes on named work they cannot do today. Write which. This is the single most common place business cases quietly lie.",
    },
    {
      term: "The sentence that protects you",
      explain:
        "'Here is the result that would make me recommend stopping.' Put it in the proposal, with a number and a date.",
      detail:
        "It costs you nothing at approval and it is worth a great deal later. It converts you from an advocate into someone assessing evidence, and it means an underperforming project can be stopped without anyone losing face.",
    },
    {
      term: "Answer the jobs question in the document",
      explain:
        "Everyone reading it is wondering. If the proposal does not say, they will assume the worst and the process knowledge you need will quietly stop arriving.",
      detail:
        "Say what you actually intend regarding headcount. If it is genuinely undecided, write that instead of implying a guarantee you may have to break.",
    },
    {
      term: "Ask for the smallest version that proves the point",
      explain:
        "A large first ask invites scrutiny you have no evidence to withstand. A small one is approved on judgement and produces the evidence for the large one.",
      detail:
        "The second project is the real prize. Everything about the first should be optimised for making the second easy to approve.",
    },
    {
      term: "Name what you are not claiming",
      explain:
        "Listing what this will not do is the fastest way to be believed about what it will. It also prevents the scope from expanding into the gap you left.",
      detail:
        "Two lines. 'This does not reduce headcount. This does not handle the exceptions, which stay with the team.'",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A case built on a real baseline, and a figure that was modelled.",
      walkthrough:
        "Klarna's February 2024 announcement reported its AI assistant handling two-thirds of customer service chats in month one, with resolution time falling from around eleven minutes to under two, and an estimated profit improvement for the year. It also described the work as equivalent to hundreds of full-time agents. In May 2025 the chief executive said the cost-cutting had gone too far and hiring resumed.",
      result:
        "Three lessons for anyone writing a case. The volume gains were real and measured against a genuine baseline, which is exemplary. The agent-equivalence figure was modelled rather than counted, and modelled figures are the ones that get quoted back at you. And the reversal shows what happens when a case optimises for a saving without naming what quality it is trading against.",
      source: {
        label: "Klarna press release (February 2024) and coverage of the May 2025 reversal",
        url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/",
      },
    },
    {
      kind: "documented",
      scenario: "What happens when a model's errors become commitments.",
      walkthrough:
        "Zillow Offers priced homes it bought and resold using a model. Speed meant committing to offers quickly, and the model failed to anticipate how far and fast prices moved, buying above what properties could later be sold for. The company announced roughly $304 million of inventory write-down in Q3 2021 and wound the business down.",
      result:
        "The business case for that project would have looked strong on every metric a case usually contains. What it needed was a line about what happens when the error rate is normal but each output is a binding commitment. If your proposal involves irreversible actions at volume, that paragraph belongs in it, before the savings section.",
      source: {
        label: "Zillow Group Q3 2021 results and plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "illustration",
      scenario: "Two proposals for the same project.",
      walkthrough:
        "The first claims a six-figure annual saving, a three-month build and no ongoing cost. The second claims a range, states the annual maintenance assumption, costs the review queue at the measured exception rate, names the owner, says headcount is unchanged and the freed time goes to a named backlog, and includes the result that would trigger stopping.",
      result:
        "The first was approved faster. The second was still running two years later with a second phase funded, because when the numbers landed inside the stated range everyone treated it as a success rather than a shortfall. Approval speed is the wrong thing to optimise.",
    },
  ],

  learningPath: [
    {
      title: "Measure the current process for two weeks",
      body: "Before writing anything. Time, error rate, cost. Without it every figure in your case is an assertion.",
      effort: "Two weeks of light recording",
      outcome: "A baseline nobody can argue with later.",
    },
    {
      title: "Cost the three forgotten items",
      body: "Annual maintenance, the review queue at a realistic exception rate, and the named owner's time. Add them to the build estimate before you look at the return.",
      effort: "Half a day",
      outcome: "A total cost that will not embarrass you in year two.",
    },
    {
      title: "Decide what happens to the freed time",
      body: "Headcount change, or named work the team cannot do today. Write the sentence. If you cannot, the saving is soft and should be presented as such.",
      effort: "1 hour, plus a conversation you may be avoiding",
      outcome: "An honest benefit statement.",
    },
    {
      title: "Write the two lines about what this will not do",
      body: "Including the jobs answer. Uncomfortable to draft and it does more for your credibility than the rest of the document.",
      effort: "30 minutes",
      outcome: "A proposal people believe.",
    },
    {
      title: "Set the stopping condition",
      body: "The result and the date that would make you recommend halting. Put it in the document, not in your head.",
      effort: "30 minutes",
      outcome: "Protection for you and a decision rule for everyone else.",
    },
    {
      title: "Shrink the ask",
      body: "Cut the proposal to the smallest version that would settle the question. Approve-ability rises and the evidence you get back is the same.",
      effort: "1 hour",
      outcome: "A first project sized to make the second one easy.",
    },
  ],

  mistakes: [
    {
      mistake: "Presenting a point estimate",
      why: "It reads as more certain than the work supports. Land slightly off and the whole case loses credibility rather than just that number.",
      fix: "A range with the assumptions written beside it, and a label on which figures are measured and which are modelled.",
    },
    {
      mistake: "Counting freed time as money without saying where it goes",
      why: "It is the most common soft claim in AI business cases, and the one an experienced finance reader spots immediately.",
      fix: "Name the headcount change or the named work the time is being redirected to. If neither, present it as capacity, not saving.",
    },
    {
      mistake: "Leaving out maintenance",
      why: "It arrives in year two, when the person who wrote the case has moved on and the number is being compared against the original promise.",
      fix: "Assume a meaningful annual fraction of build cost. If the project only works without it, it does not work.",
    },
    {
      mistake: "Asking for the big version first",
      why: "A large ask attracts scrutiny you have no evidence to answer, and a refused proposal is much harder to bring back than a small approved one.",
      fix: "Ask for the smallest thing that settles the question. Spend the credibility on the second project.",
    },
    {
      mistake: "Avoiding the jobs question",
      why: "Silence is read as a yes. Cooperation drops exactly when you need people to explain how the process really works.",
      fix: "Answer it in the document, specifically, including the parts that are uncomfortable.",
    },
  ],

  bestPractices: [
    "Measure the baseline before writing the case.",
    "Cost maintenance, the review queue and the owner's time.",
    "Say where the freed time goes, or call it capacity rather than saving.",
    "Label measured figures and modelled figures differently.",
    "Present a range with its assumptions.",
    "Write two lines on what this will not do, including jobs.",
    "Include the result that would make you recommend stopping.",
    "Ask for the smallest version that proves the point.",
  ],

  faqs: [
    {
      q: "What if the honest case does not clear the bar?",
      a: "Then you have learned something cheaply. Either find a better first project or reduce the scope until the maths works. Building a project that only clears the bar on optimistic assumptions is a decision to have a difficult conversation later.",
    },
    {
      q: "How much should I assume for maintenance?",
      a: "A meaningful fraction of build cost annually is the working assumption most teams settle on. The precise figure matters less than including a line at all, because almost every case has it at zero.",
    },
    {
      q: "Should the stopping condition really go in writing?",
      a: "Yes. It is the single most credibility-generating sentence available to you, and it means an underperforming project can be stopped without it being anyone's defeat.",
    },
    {
      q: "Finance wants one number, not a range.",
      a: "Give the range and a central figure, clearly labelled as central. Refusing to give a number reads as evasion; giving one without a range sets you up to be judged against a precision you never had.",
    },
    {
      q: "How do I answer the jobs question if leadership has not decided?",
      a: "Say that it is undecided and when it will be decided. That is uncomfortable and it is better than an implied guarantee you might have to break.",
    },
  ],

  tools: [
    { name: "Two weeks of baseline measurement", what: "A spreadsheet and discipline. Everything in the case depends on it.", cost: "Free" },
    { name: "A one-page case template", what: "Baseline, costs including the three forgotten ones, benefit with its destination, what it will not do, stopping condition.", cost: "Free" },
    { name: "Someone in finance who will read it hostilely", what: "Free, and cheaper than discovering the holes at the approval meeting.", cost: "Free" },
  ],

  resources: [
    { title: "Zillow Group Q3 2021 results", kind: "Docs", note: "What a strong-looking case misses when each output is a binding commitment.", url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx" },
  ],

  internalLinks: [
    { slug: "measuring-ai-roi-in-business", anchor: "the measurement discipline underneath", context: "Baseline" },
    { slug: "proving-ai-works-to-a-sceptic", anchor: "the evidence pack that follows", context: "After approval" },
    { slug: "leading-an-ai-rollout", anchor: "what happens after the money is approved", context: "Delivery" },
  ],

  relatedGuides: ["measuring-ai-roi-in-business", "proving-ai-works-to-a-sceptic", "leading-an-ai-rollout"],

  conclusion: [
    "Open whatever case you are currently drafting and add the stopping condition. One sentence, with a number and a date. It is the line that will be worth the most to you a year from now.",
  ],
};

export default guide;
