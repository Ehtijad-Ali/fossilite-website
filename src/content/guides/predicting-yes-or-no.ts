import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "predicting-yes-or-no",
  seoTitle: "Predicting Yes or No: Will This Customer Leave?",
  metaDescription:
    "Classification in plain English. Will they pay late, will they cancel, is this fraud. Why the answer is really a score, and why accuracy is the wrong measure.",
  title: "Predicting Yes or No",
  keywords: [
    "classification machine learning business",
    "churn prediction",
    "predicting customer behaviour",
    "fraud detection model",
    "logistic regression explained",
    "yes no prediction model",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "The second big shape of business question is not how much, it is whether. Will this customer cancel. Will this invoice be paid late. Is this claim fraudulent. Will this applicant repay. Will this machine break this month.",
    "The tool for that is called classification, and it works the same way as any other kind of learning from history. Show it thousands of past cases where you know how it turned out, and it works out what the ones that went wrong tend to have in common.",
    "There is one thing about it that trips people up constantly, and it is worth getting straight before anything else. It does not really answer yes or no. It gives you a score, something like seventy-two out of a hundred, and somebody in the business has to decide where to draw the line. That decision is not a technical one and it matters more than the model.",
  ],

  whyItMatters: [
    "This is where most business value in machine learning actually sits. Not clever chatbots, but knowing in advance which of the two thousand invoices you are holding are the ones to chase, and which of your customers are quietly about to leave.",
    "It is also where the most common measurement mistake happens. If two per cent of your customers cancel each month, something that always says no will be right ninety-eight per cent of the time and be completely worthless. That figure gets presented as success more often than you would believe.",
    "And the line you draw is a business decision with money on both sides of it. Draw it in the wrong place and you either miss most of what you were looking for or you drown a team in false alarms.",
  ],

  coreConcepts: [
    {
      term: "It gives you a score, not an answer",
      explain:
        "What comes out is something like this one is 72 out of 100 likely to be late. Turning that into a yes or a no means picking a cut-off, and that is somebody's decision in the business.",
      detail:
        "This is the single most useful thing to understand about it. Most disagreements about whether a model works turn out to be disagreements about where the line should be, which is a completely different and much easier conversation.",
    },
    {
      term: "Where you draw the line trades two mistakes against each other",
      explain:
        "Set the line low and you catch nearly everything you were looking for, and a lot of innocent cases with it. Set it high and you only flag the obvious ones and miss plenty.",
      detail:
        "There is no correct answer, only the right answer for your situation. Chasing a customer who was going to pay anyway costs a phone call. Missing a fraudulent claim costs the claim. Those are not the same, so the line goes in a different place.",
    },
    {
      term: "Accuracy on its own is nearly always misleading",
      explain:
        "If the thing you are looking for is rare, being right most of the time is trivially easy. Always say no and you will be right almost every time and never catch anything.",
      detail:
        "When somebody presents an accuracy figure, ask what proportion of cases are actually the thing you are hunting. If it is small, that figure tells you nothing at all and you need to ask two different questions instead.",
    },
    {
      term: "Ask the two questions that actually matter",
      explain:
        "Of everything that really was fraudulent, how much did we catch? And of everything we flagged, how much really was fraudulent? Those two numbers together tell you what you need to know.",
      detail:
        "You do not need the technical names for these. You need to ask both, every time, in plain words, and to notice that improving one usually makes the other worse.",
    },
    {
      term: "Work out what each mistake costs before you set the line",
      explain:
        "Get the business to put rough numbers on both. What does it cost us to chase somebody who would have paid anyway, and what does it cost us to miss somebody who does not.",
      detail:
        "Rough is fine. Ten pounds versus four hundred pounds is enough to tell you where the line should go. Without those two numbers, the line gets set by whatever the technical team thought looked reasonable.",
    },
    {
      term: "Match the line to how much capacity you have",
      explain:
        "If your credit control team can chase forty accounts a week, there is no point flagging six hundred. Set the line so the number coming out matches what somebody can actually do something about.",
      detail:
        "This is a much better way to set it than any technical target, and it is the version the business understands immediately. Give me the forty most likely, ordered, and I will work down the list.",
    },
    {
      term: "Rare things need more care, not more cleverness",
      explain:
        "When the thing you are hunting happens in one case out of a thousand, everything gets harder. There are fewer examples to learn from and it is easier to be fooled.",
      detail:
        "The practical answer is usually to lower your expectations of precision and accept a longer list of possibles for a person to work through. That is still enormously better than looking at all thousand.",
    },
    {
      term: "Check it against cases from a later period",
      explain:
        "The honest test is not how well it does on the cases it learned from. It is how well it does on cases from after that, which it has never seen.",
      detail:
        "This matters more here than people realise, because behaviour changes over time. Something trained on last year and tested on last year can look excellent and fall apart on this year.",
    },
    {
      term: "Someone still has to decide what happens next",
      explain:
        "A flag is not an action. Who gets contacted, by whom, saying what, and how quickly. And what happens to the ones that were flagged wrongly.",
      detail:
        "The clearest sign this got skipped is a daily list arriving in an inbox that nobody has time to work through. The model then gets blamed for something that was never a modelling problem.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Ninety-four per cent accurate and completely useless.",
      walkthrough:
        "The problem: a subscription business built something to predict which customers would cancel, and the team reported ninety-four per cent accuracy. What was happening: a BA asked what proportion of customers cancel in a given month. About six per cent. So something that simply said nobody will cancel would have been ninety-four per cent accurate too. When they asked the two useful questions instead, it turned out the model was catching about a fifth of the people who actually left.",
      result:
        "What changed: they stopped reporting accuracy entirely and reported the two real numbers instead. Catching a fifth was still worth having, and once it was described honestly, the conversation moved on to how to catch more rather than to congratulating each other. Whenever the thing you are hunting is rare, accuracy is not a measure of anything.",
    },
    {
      kind: "illustration",
      scenario: "Setting the line by how many people you have.",
      walkthrough:
        "The problem: a credit control team of three were being sent a list of six hundred at-risk accounts every Monday. They ignored it, because six hundred is not a list, it is a wall. What was happening: the BA asked how many accounts one person can properly chase in a week. About fifteen, so around forty-five for the team. They moved the cut-off until the list came out at forty-five, ordered with the most likely at the top.",
      result:
        "What changed: the list started getting worked through, every week. Nothing about the model changed at all. The only change was setting the line to match what a real team could act on, which is a business decision that had been left to whoever configured it.",
    },
    {
      kind: "illustration",
      scenario: "The two costs that moved the line.",
      walkthrough:
        "The problem: an insurer was arguing about how aggressive their fraud flagging should be. The technical team wanted fewer false alarms. The claims team wanted to catch more. What was happening: a BA asked both sides for rough numbers. Reviewing a legitimate claim that got flagged takes about twenty minutes of an assessor's time. A fraudulent claim that gets paid costs, on average, several thousand pounds.",
      result:
        "What changed: with those two figures side by side the argument resolved itself in about ten minutes. It is worth reviewing a lot of legitimate claims to catch one fraudulent one, so the line moved to flag far more. Nobody had been unreasonable. They had simply been arguing without the two numbers that settle it.",
    },
  ],

  learningPath: [
    {
      title: "Write down the yes and the no precisely",
      body: "What exactly counts as the thing you are predicting? Paid more than thirty days late. Cancelled within ninety days. Be specific, because a vague outcome makes everything downstream unreliable.",
      effort: "1 hour",
      outcome: "A definition somebody could apply to a past case without asking you.",
    },
    {
      title: "Find out how often it actually happens",
      body: "What proportion of cases are the thing you are hunting? This one number tells you how careful you have to be about measurement and how hard the problem is.",
      effort: "Half a day",
      outcome: "The context that stops anybody being impressed by an accuracy figure.",
    },
    {
      title: "Get rough costs for both kinds of mistake",
      body: "What does a false alarm cost, and what does a miss cost? Ask the business, not the technical team, and rough figures are completely fine.",
      effort: "A conversation",
      outcome: "The two numbers that decide where the line goes.",
    },
    {
      title: "Find out how much capacity there is",
      body: "How many flagged cases can somebody actually deal with each week? That number is usually a better guide to the cut-off than anything technical.",
      effort: "1 hour",
      outcome: "A list length people will actually work through.",
    },
    {
      title: "Check it against a later period",
      body: "Train on one period, test on the next. Never judge it on the cases it learned from, because behaviour shifts and that will hide it.",
      effort: "Part of the build",
      outcome: "An honest picture rather than a flattering one.",
    },
    {
      title: "Agree what happens to a flag",
      body: "Who acts, how fast, saying what, and what happens to the ones flagged wrongly. Get this agreed by whoever owns that team.",
      effort: "A conversation",
      outcome: "The difference between a working process and a list nobody opens.",
    },
  ],

  exercises: [
    {
      title: "Find the base rate",
      brief:
        "For any yes-or-no prediction your business makes or wants, work out what proportion of cases are actually the thing being hunted. Then work out what accuracy you would get by always guessing the common answer.",
      success:
        "You have both numbers, and you can say whether any accuracy figure being quoted is meaningful.",
      time: "1 hour",
    },
    {
      title: "Get the two costs",
      brief:
        "Ask the business what a false alarm costs and what a miss costs, in rough money or rough time. Write both down and put them side by side.",
      success:
        "You have two figures that differ by enough to make the right cut-off obvious, which is usually the case.",
      time: "1 hour",
    },
    {
      title: "Count what a team can actually handle",
      brief:
        "For any alert list in your business, ask how many items one person can properly deal with in a week, and compare that against how many the list contains.",
      success:
        "You can say whether the list is set to a workable length, and usually it is not.",
      time: "45 minutes",
    },
  ],

  caseStudy: {
    business:
      "A commercial plumbing and heating contractor. Twenty-five staff, working mostly for property managers and main contractors, invoicing on thirty-day terms.",
    problem:
      "The owner's version: we are busy, the jobs are profitable on paper, and I am still watching the bank balance every Monday morning wondering whether payroll is going to be tight. I chase invoices when I get a spare hour, which means I chase whatever is at the top of the pile rather than whatever matters.",
    analysis: [
      "The first thing to separate is profit from timing. This was not a margin problem. Every job was making money. The money was arriving too late and too unpredictably to be useful, which is a completely different problem with a completely different fix.",
      "Three years of invoices came out of the accounting package into a spreadsheet. For each one: when it was raised, when it was actually paid, the amount, the customer, the type of job, and whether a purchase order number appeared on it.",
      "Then just count. What share go past terms, and how far past? The important finding was that the lateness was not spread evenly. It clustered.",
      "It clustered in two places. A handful of customers were consistently slow regardless of the invoice. And separately, any invoice raised without a purchase order number on it was slow almost regardless of the customer.",
      "That second one is the useful finding, because it is a cause rather than a description. An invoice with no purchase order cannot be matched at the other end, so it drops out of the customer's own approval run and waits for somebody to chase it manually.",
      "What got ruled out: that customers were in financial trouble. They were not. The invoices were stuck in an approvals process, which is an administrative problem and a much easier one to solve.",
    ],
    aiApproach: [
      {
        step: "Write down the exact question",
        detail:
          "Not \"will this be paid\". The question is: will this invoice go more than fourteen days past its due date, yes or no? A vague question produces a model nobody can use. This one has an answer you can look up for every historical invoice, which is what makes it trainable at all.",
      },
      {
        step: "Use the accounting system as the dataset",
        detail:
          "Everything needed was already in the accounting package and exported to a spreadsheet in an afternoon. Nothing was bought and nothing was integrated until the idea had been shown to work.",
      },
      {
        step: "Build a scorecard rather than a black box",
        detail:
          "This is the points-based approach: no purchase order adds points, this customer adds points, an invoice over a certain size adds points. It is less powerful than the fancier options and it is the right choice here, because the credit controller has to be able to tell a customer why they are being called.",
      },
      {
        step: "Test it on invoices it has never seen",
        detail:
          "Train on the first two years, test on the third. Scoring it on invoices it learned from tells you nothing, and this is the step that gets skipped most often.",
      },
      {
        step: "Judge it on the right number",
        detail:
          "Overall accuracy is misleading here, because most invoices are paid roughly on time and a model that says everything is fine would score well. The two numbers that matter: of the invoices we flag, how many really do go late, and of the ones that go late, how many did we miss? Getting those wrong in either direction has a cost, and the business decides which cost it prefers.",
      },
    ],
    solution: [
      "Every invoice gets a flag the moment it is raised: expected on time, or expected slow.",
      "Slow ones get a short courtesy call a week before the due date, confirming the invoice arrived and has been approved. That call is not a chase, and it works far better than one made three weeks later.",
      "The reason is shown alongside the flag. No purchase order, this customer, this size. The controller knows what to ask about rather than making a general enquiry.",
      "The scores feed a thirteen-week cash view built on when money is expected to arrive rather than when terms say it should.",
      "A standing rule that came out of the analysis and needed no model at all: do not raise the invoice until the purchase order number is on it.",
    ],
    impact: [
      "Chasing effort moved to the invoices that were going to need it, and moved to before the due date rather than after, which is the difference between a helpful call and an awkward one.",
      "The purchase order finding fixed a chunk of the problem upstream and permanently, without any technology involved. That is common and it is worth saying out loud, because the analysis was the valuable part and the model was the thing that made the analysis happen.",
      "The cash forecast stopped being a straight line drawn from payment terms and started reflecting how customers actually behave.",
      "The owner gets several weeks of warning before a tight week rather than finding out on the Monday.",
    ],
    whatWouldHaveKilledIt:
      "Using the score to refuse work or put customers on credit hold. It predicts slow payment, not bad debt, and those are different things. A good customer who pays in fifty days is still a good customer, and turning a cash-planning tool into a credit-scoring tool would have cost more in lost work than the whole exercise saved.",
  },

  mistakes: [
    {
      mistake: "Judging it on accuracy",
      why: "When the thing you want is rare, accuracy is trivially high and completely uninformative. Something that never flags anything can look excellent.",
      fix: "Always ask both real questions: how much of the real thing did we catch, and how much of what we flagged was real.",
    },
    {
      mistake: "Letting the technical team set the cut-off",
      why: "Where the line goes is a trade between two business costs. Set without those costs, it lands wherever a default put it.",
      fix: "Get rough costs for a false alarm and a miss from the business, and set the line from those.",
    },
    {
      mistake: "Producing a list longer than anybody can work",
      why: "A list of six hundred gets ignored entirely, so a model that would have helped delivers nothing at all.",
      fix: "Set the cut-off so the volume matches real capacity, ordered with the most likely first.",
    },
    {
      mistake: "Testing on the same period it learned from",
      why: "Behaviour changes over time, and testing on the same window hides that completely. The thing looks great and then degrades in use.",
      fix: "Train on one period and test on the next, always.",
    },
    {
      mistake: "A vague definition of the outcome",
      why: "If nobody agrees what counts as churned, different people label the history differently and the model learns something incoherent.",
      fix: "Write a definition somebody could apply to a past case without asking you, and check it with two people.",
    },
    {
      mistake: "Not deciding what happens to a flag",
      why: "You get an accurate list arriving in an inbox with nobody assigned to act on it, and the model gets blamed for a process failure.",
      fix: "Agree the action, the person and the timing before anything gets built.",
    },
  ],

  bestPractices: [
    "Write a precise definition of what counts as yes.",
    "Find out how often it really happens before believing any accuracy figure.",
    "Ask both real questions: how much did we catch, and how much of what we flagged was real.",
    "Get rough costs for a false alarm and for a miss.",
    "Set the cut-off from those costs and from real capacity.",
    "Order the list so the most likely are at the top.",
    "Test on a later period than the one it learned from.",
    "Agree the action, the owner and the timing before building.",
    "Recheck it every few months, because behaviour moves.",
  ],

  proTips: [
    "Ask what the team currently does to spot these cases by hand. There is almost always somebody with a rough rule and a gut feel, and measuring how well they do gives you the comparison that makes any result meaningful. It also gives you the person who knows which information actually matters.",
    "When somebody quotes a single number for how good it is, ask to see the list. Look at the top twenty and the bottom twenty. Ten minutes of looking at real cases tells you more about whether it is sensible than any summary figure, and it usually turns up something odd.",
    "Ask what happens to a case that gets flagged wrongly. If a customer gets a chasing call they did not deserve, does anybody know, and does anything get fed back? Without that loop the same mistakes repeat forever and nobody in the business finds out.",
    "Give the team the score rather than just the flag, and let them see the ordering. People work down a ranked list far more willingly than they work through a set of yes-or-no flags, because the ranking respects their judgement about where to stop.",
  ],

  businessApplications: [
    "Predicting which customers are likely to leave, so somebody can talk to them first.",
    "Spotting invoices likely to be paid late, so credit control can prioritise.",
    "Flagging claims or transactions that look like fraud for a human to review.",
    "Working out which sales leads are worth an early phone call.",
    "Predicting which equipment is likely to fail before it does.",
    "Deciding which applications need a closer look and which can go through quickly.",
  ],

  checklist: [
    "Precise definition of the outcome, checked with two people.",
    "How often it happens established.",
    "Both real questions asked instead of accuracy.",
    "Rough cost of a false alarm and of a miss obtained from the business.",
    "Team capacity established.",
    "Cut-off set from costs and capacity, not from a default.",
    "Output ordered with the most likely first.",
    "Tested on a later period than it learned from.",
    "Action, owner and timing agreed.",
    "A regular recheck scheduled.",
  ],

  faqs: [
    {
      q: "Why does everybody warn about accuracy?",
      a: "Because when the thing you are hunting is rare, always guessing the common answer scores highly and catches nothing. If two per cent of customers cancel, doing nothing is ninety-eight per cent accurate. It is not a measure of usefulness.",
    },
    {
      q: "Where should we set the cut-off?",
      a: "From two things: what a false alarm costs compared with a miss, and how many cases your team can actually handle. Both are business facts. Technical defaults ignore both.",
    },
    {
      q: "What if the thing we want to predict almost never happens?",
      a: "It gets harder and it is still often worth doing. Expect a longer list with more false alarms in it, and judge it against how many you would find by looking at everything, which is usually the honest alternative.",
    },
    {
      q: "Should the team see the score or just the flag?",
      a: "The score, ordered. People work down a ranked list much more willingly, and the ranking lets them apply their own judgement about where to stop, which they will do anyway.",
    },
    {
      q: "How often should we rebuild it?",
      a: "Check how it is doing monthly and expect to refresh it a few times a year, sooner if something changes in the business. Customer behaviour moves and the patterns it learned go stale quietly.",
    },
    {
      q: "Can it tell us why a customer is likely to leave?",
      a: "It can tell you what those customers tend to have in common, which is useful for spotting them. It cannot tell you that fixing one of those things would stop them leaving. That is a different question needing a different kind of evidence.",
    },
  ],

  tools: [
    { name: "A clear written definition of the outcome", what: "Something somebody could apply to a past case without asking you. Everything else depends on it.", cost: "Free" },
    { name: "The base rate", what: "How often the thing actually happens. One number that stops anybody being fooled by accuracy.", cost: "Free" },
    { name: "Two rough cost figures", what: "What a false alarm costs and what a miss costs. Settles most arguments about the cut-off in minutes.", cost: "Free" },
    { name: "A capacity figure from the team", what: "How many flagged cases somebody can genuinely deal with per week. The most practical way to set the line.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "knowing-if-a-model-is-any-good", anchor: "the measures to ask for instead of accuracy", context: "Checking it" },
    { slug: "the-cost-of-being-wrong", anchor: "setting the line from what mistakes cost", context: "The cut-off" },
    { slug: "framing-a-business-problem-as-a-prediction", anchor: "checking this is the right shape of problem", context: "Before building" },
  ],

  relatedGuides: ["knowing-if-a-model-is-any-good", "the-cost-of-being-wrong", "framing-a-business-problem-as-a-prediction"],

  conclusion: [
    "Take any yes-or-no prediction in your business and work out two numbers: how often the thing actually happens, and how many cases the team can deal with in a week. Those two settle most of the arguments people have about whether the model is working.",
  ],
};

export default guide;
