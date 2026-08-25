import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "the-cost-of-being-wrong",
  seoTitle: "What Does It Cost When the Model Gets It Wrong?",
  metaDescription:
    "Every model is wrong sometimes. Being wrong one way usually costs far more than the other, and that difference should decide how you use it. Usually nobody works it out.",
  title: "What It Costs When It Gets It Wrong",
  keywords: [
    "cost of false positives",
    "asymmetric error costs",
    "model threshold business decision",
    "risk of automation errors",
    "irreversible decisions ai",
    "setting a model threshold",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "Every model is wrong sometimes. That is not a flaw, it is the nature of the thing. What matters is not how often it is wrong but what happens when it is, and that depends entirely on which way the mistake goes.",
    "Flagging a good customer as a fraud risk costs you an awkward phone call. Missing a real fraud costs you the money. Ordering too much stock costs you storage. Ordering too little costs you a customer who goes elsewhere permanently. Those pairs are not remotely equal and the model has no idea.",
    "So somebody in the business has to work out both costs and use them. It is a short conversation, it usually produces two rough numbers, and those two numbers settle most of the arguments people have about whether a model is set up correctly.",
  ],

  whyItMatters: [
    "Where you draw the line is a business decision and it gets made by default more often than by anybody. Left to a technical setting, it lands wherever a default put it, and that is almost never where the two costs would have put it.",
    "It is also the thing that decides whether a model can act on its own. A modest error rate is entirely manageable when a person checks before anything irreversible happens, and dangerous when every answer becomes a commitment.",
    "And it settles arguments quickly. Two teams disagreeing about how cautious a system should be are usually arguing without the two figures that resolve it, and getting them takes one conversation.",
  ],

  coreConcepts: [
    {
      term: "Two kinds of mistake, and they rarely cost the same",
      explain:
        "Saying yes when the answer was no. Saying no when the answer was yes. Write down what each one costs your business, roughly.",
      detail:
        "Rough is fine. Twenty minutes of an assessor's time against several thousand pounds is enough to tell you which way to lean. Precision is not the point, the ratio is.",
    },
    {
      term: "The two costs decide where the line goes",
      explain:
        "If missing something costs far more than a false alarm, you set the model to flag more and accept more false alarms. If the reverse, you set it to flag less.",
      detail:
        "This is the whole practical use. Once the two figures are on the table, the right setting is usually obvious to everybody in the room within a few minutes.",
    },
    {
      term: "Can the mistake be undone?",
      explain:
        "A wrongly flagged invoice is a five-minute review. A wrongly declined mortgage application is a lost customer. A wrongly purchased house is a house you own.",
      detail:
        "This matters more than the error rate. Ask what it takes to reverse a mistake, and if the honest answer is that you cannot, that alone should put a person in the loop.",
    },
    {
      term: "Ask how bad a run of mistakes could get",
      explain:
        "Not one error, a run of them before anybody notices. If the model acts a thousand times a day and nobody checks for a week, what does that add up to?",
      detail:
        "This is where automated decisions cause real damage. A perfectly acceptable error rate multiplied by volume and by the delay before detection produces a number that changes the design.",
    },
    {
      term: "Some mistakes cost more than money",
      explain:
        "Being wrong about somebody's application, their claim or their job costs trust, and sometimes has legal consequences. That does not appear in an arithmetic comparison.",
      detail:
        "For anything affecting people, the two costs need to include what it does to the relationship and what obligations you have. Ask compliance rather than working it out yourself.",
    },
    {
      term: "Set the line from costs and from capacity",
      explain:
        "The two costs tell you which way to lean. What your team can actually handle tells you how far you can go in that direction.",
      detail:
        "Both matter. Costs might say flag everything remotely suspicious, and if that produces six hundred alerts for a team of three, it produces nothing at all.",
    },
    {
      term: "Different cases deserve different lines",
      explain:
        "One threshold for everything treats a fifty pound order the same as a fifty thousand pound one. Frequently the sensible answer is different settings for different value bands.",
      detail:
        "This is easy to do and rarely done. Ask whether the same line applies everywhere, and whether it should.",
    },
    {
      term: "A person in the loop changes the arithmetic entirely",
      explain:
        "If somebody checks before anything irreversible happens, you can tolerate a much higher error rate, because the errors get caught.",
      detail:
        "That is why the same model can be perfectly safe in one design and dangerous in another. The question is not how accurate it is. It is what happens between the answer and the consequence.",
    },
    {
      term: "Write both costs down and keep them",
      explain:
        "They become the reference point for every future argument about the setting, and they need revisiting when the business changes.",
      detail:
        "Without them written down, the line drifts as different people adjust it for different reasons and nobody can say what it should be.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "An acceptable error rate and an unacceptable failure mode.",
      walkthrough:
        "Zillow Offers used a model to price homes the company bought and resold. Competing on speed meant committing to offers quickly, so each prediction became a binding commitment to buy a house. The model did not anticipate how far and fast prices would move, so it bought above what the properties could later be sold for, and the error compounded across thousands of transactions before it showed in the accounts.",
      result:
        "The company announced roughly $304 million of inventory write-down in the third quarter of 2021 and wound the business down. The transferable point is not that the model was unusually bad. It is that every answer triggered something irreversible, at volume, with a long delay before anybody could see the total. Ask what a run of errors costs before anybody notices, and ask whether each one can be undone.",
      source: {
        label: "Zillow Group Q3 2021 results and plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "illustration",
      scenario: "Two numbers ended a six-week argument.",
      walkthrough:
        "The problem: an insurer had been arguing for weeks about how aggressive their fraud flagging should be. The technical team wanted fewer false alarms. The claims team wanted to catch more. What was happening: a BA asked both sides for rough figures. Reviewing a legitimate claim that got flagged takes about twenty minutes of an assessor's time. A fraudulent claim that gets paid costs, on average, several thousand pounds.",
      result:
        "What changed: with those two side by side, the argument resolved itself in about ten minutes. It is worth reviewing a great many legitimate claims to catch one fraudulent one, so the setting moved to flag considerably more. Nobody had been unreasonable. They had been arguing about a trade-off without the two numbers that settle it.",
    },
    {
      kind: "illustration",
      scenario: "Different lines for different values.",
      walkthrough:
        "The problem: a business had one threshold for sending orders to manual review, applied to everything. Small orders were clogging the review queue and large ones were slipping through. What was happening: a BA pointed out that the cost of a mistake on a fifty pound order and a fifty thousand pound order are not remotely the same, and neither should the threshold be.",
      result:
        "What changed: they set three thresholds by value band, cautious on the large ones and relaxed on the small. The review queue halved, the value of what was being caught went up, and it took two days. One threshold for everything is a default that nobody chose, and asking whether it should apply everywhere is a thirty-second question.",
    },
  ],

  learningPath: [
    {
      title: "Get both costs, roughly",
      body: "What does a false alarm cost, and what does a miss cost? Ask the business, not the technical team. Rough figures are completely fine.",
      effort: "A conversation",
      outcome: "The two numbers that settle most arguments about the setting.",
    },
    {
      title: "Ask whether each mistake can be undone",
      body: "What does it take to reverse a wrong answer? If the honest answer is that you cannot, that alone argues for a person in the loop.",
      effort: "30 minutes",
      outcome: "The question that matters more than the error rate.",
    },
    {
      title: "Work out what a run of errors costs",
      body: "How many decisions a day, how long before anybody would notice a problem, and what that multiplies to. Do the arithmetic.",
      effort: "1 hour",
      outcome: "Frequently a number that changes the whole design.",
    },
    {
      title: "Ask about consequences beyond money",
      body: "For anything affecting people, ask compliance and whoever owns the customer relationship what a wrong decision costs in trust and in obligations.",
      effort: "A conversation",
      outcome: "Costs that never show up in an arithmetic comparison.",
    },
    {
      title: "Get the capacity figure",
      body: "How many flagged cases can somebody properly handle? The costs say which way to lean, capacity says how far you can go.",
      effort: "One question",
      outcome: "A setting that produces a workable volume rather than a wall.",
    },
    {
      title: "Ask whether one line should apply everywhere",
      body: "Should a small case and a large one get the same treatment? Usually not, and setting different lines by value band is a couple of days of work.",
      effort: "1 hour to decide, days to build",
      outcome: "Often a large improvement for very little effort.",
    },
    {
      title: "Write both costs down and revisit them",
      body: "Keep them as the reference point. Review whenever the business changes materially, because both numbers move.",
      effort: "30 minutes",
      outcome: "A setting that stays deliberate rather than drifting.",
    },
  ],

  exercises: [
    {
      title: "Get the two numbers",
      brief:
        "For any model or alert in your business, ask what a false alarm costs and what a miss costs. Rough figures. Put them side by side.",
      success:
        "You have two numbers, and it is usually obvious from the ratio which way the setting should lean.",
      time: "45 minutes",
    },
    {
      title: "Do the run-of-errors arithmetic",
      brief:
        "For any model that acts automatically, work out how many decisions it makes a day, how long before somebody would notice a problem, and what a sustained error rate over that period would cost.",
      success:
        "You have a figure, and quite often it is uncomfortable enough to change how the thing is designed.",
      time: "1 hour",
    },
    {
      title: "Check whether one line fits everything",
      brief:
        "For any threshold in your business, ask whether the same setting applies to your smallest and largest cases. Then ask whether the cost of a mistake is the same for both.",
      success:
        "You can say whether the current single threshold is deliberate or a default nobody chose.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Letting the technical team set the line",
      why: "Where the line goes is a trade between two business costs. Without those, it lands wherever a default put it, which is almost never right.",
      fix: "Get both costs from the business and set the line from them.",
    },
    {
      mistake: "Only counting the error rate",
      why: "A modest error rate is fine when somebody checks before anything irreversible happens and catastrophic when every answer is a commitment. The rate on its own tells you nothing about the risk.",
      fix: "Ask what happens between the answer and the consequence, and whether the consequence can be undone.",
    },
    {
      mistake: "Not considering a run of errors",
      why: "One mistake is manageable. A thousand a day for a week before anybody notices is a different situation, and that is how automated decisions cause real damage.",
      fix: "Multiply the error rate by the volume and by how long before detection. Do the arithmetic explicitly.",
    },
    {
      mistake: "Ignoring costs that are not money",
      why: "Wrong decisions about people cost trust and sometimes carry obligations, and neither appears in a straightforward cost comparison.",
      fix: "For anything affecting people, get the non-financial costs from compliance and from whoever owns the relationship.",
    },
    {
      mistake: "One threshold for everything",
      why: "It treats a small case and a large one identically, when the cost of a mistake differs by orders of magnitude. Small cases clog the queue and large ones slip through.",
      fix: "Set different lines by value band. It is usually a couple of days of work.",
    },
    {
      mistake: "Setting the line without checking capacity",
      why: "The costs might say flag everything remotely suspicious. If that produces six hundred alerts for three people, it produces nothing.",
      fix: "Use the costs to decide direction and capacity to decide how far.",
    },
  ],

  bestPractices: [
    "Get rough costs for both kinds of mistake, from the business.",
    "Ask whether each mistake can be undone.",
    "Work out what a run of errors costs before anybody would notice.",
    "Include costs that are not money, for anything affecting people.",
    "Set the direction from the costs and the extent from capacity.",
    "Use different lines for different value bands.",
    "Put a person between the answer and anything irreversible.",
    "Write both costs down and revisit when the business changes.",
  ],

  proTips: [
    "Ask both teams separately what they think a mistake costs, before putting them in a room. When two sides are arguing about how cautious a system should be, they usually have different numbers in their heads and have never compared them. Getting both written down first turns a six-week argument into a ten-minute conversation.",
    "For anything that acts automatically, ask what the longest plausible gap is between something going wrong and somebody noticing. That gap multiplied by the volume is the real exposure, and it is almost never in the business case. It is also the number that most often changes whether a person stays in the loop.",
    "Ask what it would take to undo a wrong decision, and get a specific answer rather than in principle. If the honest answer involves a customer who has already gone elsewhere, or an asset you now own, that is the argument for a checking step and it makes itself.",
    "Revisit both cost figures annually or whenever something significant changes. Both move. The cost of a false alarm falls as a team gets more efficient at reviewing them, and the cost of a miss rises as your average transaction value grows. A setting that was right two years ago is quietly wrong now.",
  ],

  businessApplications: [
    "Setting how aggressive fraud or risk flagging should be.",
    "Deciding how much stock to order given a forecast and two different costs.",
    "Deciding whether a model can act automatically or needs a person first.",
    "Setting different thresholds for different customer or value segments.",
    "Working out how much checking a process needs given what mistakes cost.",
    "Settling an argument between two teams about how cautious a system should be.",
  ],

  checklist: [
    "Cost of a false alarm obtained from the business.",
    "Cost of a miss obtained from the business.",
    "Reversibility of each kind of mistake established.",
    "Run-of-errors arithmetic done: volume times rate times time to detection.",
    "Non-financial costs obtained for anything affecting people.",
    "Capacity figure obtained from the team.",
    "Line set deliberately from costs and capacity.",
    "Whether one line should apply everywhere considered.",
    "Both costs written down with a review date.",
  ],

  faqs: [
    {
      q: "How precise do the cost figures need to be?",
      a: "Rough is fine. What matters is the ratio. Twenty minutes against several thousand pounds tells you everything you need, and arguing about whether it is twenty minutes or twenty-five wastes the conversation.",
    },
    {
      q: "Who should provide these numbers?",
      a: "The business, specifically whoever bears the consequences. Not the technical team, who will produce something reasonable and are not the ones dealing with an annoyed customer or a written-off claim.",
    },
    {
      q: "What if one of the costs is not money?",
      a: "Describe it anyway, and get compliance involved if there are obligations attached. A wrong decision about somebody's application costs trust and sometimes carries legal weight, and neither appears in arithmetic.",
    },
    {
      q: "When should a person be in the loop?",
      a: "Whenever the consequence is hard to undo, whenever a run of errors could build up before anybody notices, and whenever the decision affects a person significantly. Any one of those is enough.",
    },
    {
      q: "Should the threshold ever change?",
      a: "Yes, and deliberately. Both costs move over time as your team gets more efficient and your average transaction value changes. Review the figures annually and whenever something significant changes.",
    },
    {
      q: "Can we have different thresholds for different cases?",
      a: "Yes, and you probably should. Treating a small case and a large one identically ignores that the cost of a mistake differs enormously. Setting bands is usually a couple of days of work and it is rarely done.",
    },
  ],

  tools: [
    { name: "Two rough cost figures", what: "False alarm and miss. Settles most arguments about the setting in about ten minutes.", cost: "Free" },
    { name: "The run-of-errors calculation", what: "Volume times rate times time to detection. Frequently changes the design.", cost: "Free" },
    { name: "A reversibility question", what: "What does it take to undo a wrong answer, specifically. The argument for a checking step usually makes itself.", cost: "Free" },
    { name: "A capacity figure", what: "How many flagged cases a team can properly handle. Decides how far you can lean.", cost: "Free" },
  ],

  resources: [
    { title: "Zillow Group Q3 2021 results", kind: "Docs", note: "Primary source. Read it as a question about irreversibility and volume rather than about accuracy.", url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx" },
  ],

  internalLinks: [
    { slug: "predicting-yes-or-no", anchor: "why the line has to be set by somebody", context: "Background" },
    { slug: "predicting-versus-deciding", anchor: "turning a prediction into an action", context: "Deciding" },
    { slug: "human-in-the-loop-design", anchor: "designing the checking step properly", context: "Design" },
  ],

  relatedGuides: ["predicting-yes-or-no", "predicting-versus-deciding", "human-in-the-loop-design"],

  conclusion: [
    "For any model or alert in your business, ask two people what a false alarm costs and what a miss costs, separately, and then put the two answers side by side. That conversation takes forty-five minutes and it settles arguments that have been running for months.",
  ],
};

export default guide;
