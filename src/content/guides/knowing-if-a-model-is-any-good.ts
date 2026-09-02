import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "knowing-if-a-model-is-any-good",
  seoTitle: "How to Tell Whether a Model Is Any Good",
  metaDescription:
    "Six questions anybody can ask, no technical background needed. Why accuracy is usually the wrong number and what to ask for instead.",
  title: "How to Tell if a Model Is Any Good",
  keywords: [
    "evaluating a machine learning model",
    "accuracy is misleading",
    "precision recall explained simply",
    "model evaluation business",
    "questions to ask about a model",
    "model performance business",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 14,

  brief: {
    inOneMinute:
      "Ninety-four percent accurate can describe a system that does nothing at all. Before you believe any accuracy figure, ask how often the thing you care about actually happens.",
    problem: {
      headline: "A supplier has quoted us for AI and I cannot judge it",
      detail:
        "A lettings agency, shown a system that predicts rent arrears with ninety-four percent accuracy. The managing director was ready to sign.",
    },
    wrongApproach: {
      what: "Judge it on the accuracy figure in the pitch",
      why: "About six percent of tenancies fall into arrears. So a note saying nobody will fall into arrears is ninety-four percent accurate. The demonstrated number was true and described a system worth nothing.",
    },
    rightApproach: {
      what: "Ask for two numbers instead, and always together",
      why: "Of the tenancies it flags, how many really do go into arrears. And of the ones that do, how many did it miss. Either number alone can be made to look excellent by making the other terrible.",
    },
    context: {
      where: "Buying any predictive system, or reviewing one you already own.",
      decision: "Whether to sign, and where to set the threshold once you have.",
      metric: "Problems caught early, against wasted effort chasing false alarms.",
    },
    takeaway:
      "Whenever the thing you care about is rare, accuracy is the wrong measure and it is the one everybody quotes. Ask what doing nothing would score before you look at anything else.",
  },

  story: {
    title: "How a true number described a worthless system",
    caption:
      "Nobody was lying. Accuracy is simply the wrong measure for rare events, and it gets quoted constantly because it is the one everybody recognises.",
    stages: [
      { stage: "Problem", label: "An impressive number, no way to judge it", detail: "Ninety-four percent accurate at predicting arrears, and a contract on the table." },
      { stage: "Data", label: "Count how often it happens first", detail: "Six tenancies in a hundred fall into meaningful arrears. That one figure explains everything that follows." },
      { stage: "Model", label: "Work out what doing nothing scores", detail: "A piece of paper saying no is right ninety-four times out of a hundred. That is the bar the supplier had to beat." },
      { stage: "Prediction", label: "Re-presented on the two real numbers", detail: "Tested on tenancies the model had never seen, not the ones it learned from." },
      { stage: "Decision", label: "The agency sets the threshold", detail: "Chosen by how many early conversations the team can actually hold each month, not by the supplier." },
      { stage: "Result", label: "A system they understand and can staff", detail: "Less impressive on paper, and worth having, which is a much healthier place to start." },
    ],
  },

  calculator: {
    title: "What would that accuracy figure actually mean?",
    intro:
      "Put in how often the thing you care about happens, and the accuracy a supplier is quoting. This works out what a system that simply says no would score.",
    inputs: [
      { id: "rate", label: "How often it happens", min: 1, max: 50, step: 1, value: 6, suffix: "%", help: "Out of every hundred cases, how many are the thing you want to catch?" },
      { id: "claimed", label: "Accuracy being claimed", min: 50, max: 100, step: 1, value: 94, suffix: "%" },
    ],
    compute: (v) => {
      const doNothing = 100 - v.rate;
      const beats = v.claimed - doNothing;
      return {
        outputs: [
          {
            label: "A note saying it never happens would score",
            value: `${doNothing}% accurate`,
            hero: true,
            tone: beats <= 0 ? "bad" : "neutral",
            note: "That is the number any real system has to beat, and it is almost never mentioned in a pitch.",
          },
          {
            label: "So the claim beats doing nothing by",
            value: beats > 0 ? `${beats.toFixed(0)} points` : `${Math.abs(beats).toFixed(0)} points WORSE`,
            tone: beats <= 0 ? "bad" : beats < 3 ? "bad" : "good",
            note: beats <= 0
              ? "The quoted figure is no better than a piece of paper saying no. Ask for the two real numbers instead."
              : beats < 3
                ? "Barely anything. Ask what it catches and what it misses before going further."
                : "Worth a proper look. Now ask for the two numbers that describe the trade.",
          },
          {
            label: "The two numbers to ask for instead",
            value: "Caught, and missed",
            note: "Of the cases it flags, how many were real? And of the real ones, how many did it miss? Always both, always on data it has never seen.",
          },
        ],
      };
    },
    footnote:
      "Accuracy counts every correct answer, including all the times it correctly said nothing was wrong. When the thing you care about is rare, that swamps everything else, which is why the figure can be true and useless at the same time.",
  },

  intro: [
    "Somebody presents a model. There is a percentage on the slide. Everybody nods. You have no technical background and you suspect the percentage is not telling you very much, and you are right.",
    "You do not need to understand how any of it works to tell whether a model is any good. You need six questions, all of them in plain English, and the answers will tell you more than the slide does.",
    "The most important of the six is the first one, and it is the reason accuracy is usually the wrong number to be looking at.",
  ],

  whyItMatters: [
    "Models get approved on figures that sound impressive and mean nothing, and then quietly fail to deliver. Being able to spot that in a meeting, without any technical background, is a genuinely useful thing to be able to do.",
    "It also improves the work. When people know they will be asked how it does on cases from a later period, and what a simple rule achieves, they do those things. The questions change the standard.",
    "And it protects the business from the specific failure where something works brilliantly in testing and does nothing in use, which is the most common way these projects disappoint.",
  ],

  coreConcepts: [
    {
      term: "Question one: how often does the thing actually happen?",
      explain:
        "If two per cent of customers cancel, anything that always says nobody will cancel is ninety-eight per cent accurate and completely useless.",
      detail:
        "Ask this before you look at any accuracy figure. If the thing being predicted is rare, accuracy is meaningless and you need the next question instead.",
    },
    {
      term: "Question two: how much did it catch, and how much of what it flagged was real?",
      explain:
        "Of everything that really was fraudulent, how much did we find? And of everything we flagged, how much really was fraudulent? Two numbers, both in plain English.",
      detail:
        "You do not need the technical names. You need both numbers, and you need to notice that improving one usually makes the other worse. Anybody quoting only one is showing you the flattering half.",
    },
    {
      term: "Question three: was it tested on cases it had never seen?",
      explain:
        "Ideally from a later time period. Testing something on the same cases it learned from is like marking your own homework with the answers open.",
      detail:
        "Ask specifically whether the test cases came from after the training period. Behaviour drifts, and a model tested on the same window can look excellent and fall apart on this year.",
    },
    {
      term: "Question four: what does a simple rule get?",
      explain:
        "Whatever the rule an experienced person would use achieves. That is the honest comparison, not comparison against nothing.",
      detail:
        "If the model beats the rule by a small margin, you are being asked to take on ongoing cost and maintenance for very little. That is a business decision that should be made openly.",
    },
    {
      term: "Question five: how far out is it, in units we use?",
      explain:
        "Not a technical score. How many days out, how many pounds out, how many cases missed per month. Something the business can judge.",
      detail:
        "If somebody cannot express it in your units, either they have not thought about the business context or they are hiding behind the technical framing. Both are worth pursuing.",
    },
    {
      term: "Question six: show me twenty real cases",
      explain:
        "The top ten it is most confident about and ten it got wrong. Look at them with somebody who knows the business.",
      detail:
        "Ten minutes of this tells you things no summary figure will. It is where you find the case that was obviously going to be a problem, or the field that was doing more work than it should.",
    },
    {
      term: "Be suspicious of very good results",
      explain:
        "In business problems, exceptionally high performance almost always means something has gone wrong rather than that somebody has been brilliant.",
      detail:
        "Usually a field has crept in that contains information from after the decision point. When something looks too good, ask what is going in and when each field gets filled.",
    },
    {
      term: "Ask how it does on the cases that matter",
      explain:
        "Overall performance can hide poor performance on your biggest customers, your newest ones, or the awkward cases.",
      detail:
        "Ask for the numbers broken down by whatever grouping matters commercially. Frequently the model is worst exactly where it costs most to be wrong.",
    },
    {
      term: "One number is never the answer",
      explain:
        "Any single figure hides something. A pair of numbers, broken down by the groups that matter, tested on later cases, compared against a simple rule, is a picture.",
      detail:
        "If somebody can only offer you one number, that is itself informative. Ask for the rest and see what comes back.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The lettings agency: five questions to ask before signing anything",
      caption:
        "Step one takes five minutes and almost nobody does it. Any accuracy figure quoted without it is either careless or hoping you will not ask.",
      trigger: "A supplier puts a contract on the table",
      runtime: "About an afternoon, and it can end the meeting.",
      stages: [
        {
          actor: "person",
          label: "Count how often the thing you care about actually happens",
          detail: "Six tenancies in a hundred fall into arrears. That single number sets what a blank sheet of paper scores.",
          output: "the base rate, written down before any demonstration",
        },
        {
          actor: "rule",
          label: "Insist the test period is one the system has never seen",
          detail: "Not the data it learned from, and not a period the supplier chose after the fact.",
          output: "a fair test, agreed in advance",
        },
        {
          actor: "model",
          label: "Ask for both numbers, always together",
          detail: "Of those it flagged, how many were real. Of those that happened, how many it caught. One without the other is meaningless.",
          output: "two numbers, rather than one accuracy figure",
        },
        {
          actor: "rule",
          label: "Beat the obvious free signal",
          detail: "One payment behind is already sitting in the system and costs nothing at all.",
          exception: "A system that cannot beat one payment behind is not a system. The meeting ends politely at this step.",
          output: "a comparison against simply doing the simple thing",
        },
        {
          actor: "person",
          label: "Set the threshold to your own capacity",
          detail: "How many conversations the team can genuinely have this month, not how many the supplier would like to report.",
          output: "a flag rate you can actually staff",
        },
      ],
      loop: "The same five questions get asked at renewal, against the year that has just happened rather than the demonstration.",
      outcome:
        "Ninety-four percent accurate stops sounding impressive the moment you know that saying nothing at all scores ninety-four.",
    },
    {
      kind: "bars",
      lesson: {
        problem: "A supplier is quoting a system that predicts rent arrears, and the contract is on the table.",
        wrong: {
          label: "Judge the accuracy",
          why: "It is the number in every pitch and the one everybody recognises, which is exactly why it gets quoted. It counts every correct answer, including all the times it said nothing was wrong.",
        },
        right: {
          label: "Compare against doing nothing",
          why: "Work out what a blank piece of paper would score first. Only then does an accuracy figure mean anything at all.",
        },
        discovery: "Six tenancies in a hundred fall into arrears, so a note saying nobody will is ninety-four percent accurate. The demonstrated figure was true and described a system worth nothing.",
        decisions: [
          { tone: "investigate", label: "Ask what doing nothing scores" },
          { tone: "monitor", label: "Of those flagged, how many were real" },
          { tone: "protect", label: "Set the threshold to your capacity" },
        ],
        takeaway: "When the thing you care about is rare, accuracy is the wrong measure and the one you will be shown.",
      },
      title: "What ninety-four percent accurate actually described",
      caption:
        "Worked arithmetic, not a measurement. If six in a hundred tenancies fall into arrears, then a system that simply says nobody will is right ninety-four times. That was the demonstrated figure. The number was true and the system was worth nothing.",
      unit: "%",
      bars: [
        { label: "Accuracy of a note saying nobody will fall into arrears", value: 94, tone: "bad" },
        { label: "Accuracy the supplier demonstrated", value: 94, tone: "muted" },
        { label: "Tenancies that actually do fall into arrears", value: 6, tone: "accent" },
      ],
    },
    {
      kind: "flow",
      title: "The lettings agency: what to ask before signing anything",
      caption:
        "Step one takes five minutes and it is the one nobody does. Any accuracy figure quoted without it is either careless or hoping you will not ask.",
      steps: [
        { label: "Count how often the thing happens", note: "This sets what doing nothing scores", tone: "input" },
        { label: "Test on a period it never saw", note: "Not the data it learned from" },
        { label: "Report both numbers, always together", note: "Of those flagged, how many right. Of those that happened, how many caught.", tone: "model" },
        { label: "Beat the obvious existing signal", note: "One payment behind is already free" },
        { label: "The business picks the threshold", note: "Set by how many calls the team can make", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Ninety-four per cent and worthless.",
      walkthrough:
        "The problem: a team presented a model predicting cancellations at ninety-four per cent accuracy. Everybody was pleased. What was happening: a BA asked question one. What proportion of customers cancel in a month? About six per cent. So a model that simply said nobody cancels would have scored ninety-four per cent as well. Asking question two revealed it was catching about a fifth of the people who actually left.",
      result:
        "What changed: they stopped quoting accuracy and started quoting the two real numbers. Catching a fifth was worth having, and once it was described honestly the conversation moved to how to catch more. One question, thirty seconds, and a complete change in what the meeting was about.",
    },
    {
      kind: "illustration",
      scenario: "Twenty cases that found the problem.",
      walkthrough:
        "The problem: a model for prioritising maintenance jobs was performing well by every measure and the engineers did not trust it. What was happening: a BA asked to see twenty real cases, the ten it was most confident about and ten it got wrong, and went through them with two engineers. Within ten minutes they pointed out that four of the top ten were machines that had been decommissioned months ago and were still in the system.",
      result:
        "What changed: they filtered out decommissioned equipment, which nobody had thought to do because it was not visible in any summary figure. The engineers' trust improved immediately, because they had seen it be wrong about something they understood and seen it fixed. Looking at twenty real cases finds things no number will.",
    },
    {
      kind: "illustration",
      scenario: "Worst exactly where it mattered most.",
      walkthrough:
        "The problem: a demand model was performing well overall and stock problems were concentrated in the highest value lines. What was happening: nobody had asked for the numbers broken down. When they did, the model was performing well on the many low-value fast movers, which dominated the overall figure, and poorly on the small number of expensive slow movers, which is where the money was.",
      result:
        "What changed: they treated the two groups separately and built something specific for the expensive lines. The overall figure had been hiding the only part anybody cared about. Always ask for performance broken down by whatever grouping matters commercially.",
    },
  ],

  learningPath: [
    {
      title: "Ask how often the thing happens",
      body: "Before looking at any performance figure. If it is rare, accuracy is meaningless and you need different numbers.",
      effort: "One question",
      outcome: "The context that stops you being impressed by a hollow figure.",
    },
    {
      title: "Ask for both real numbers",
      body: "How much of the real thing did we catch, and how much of what we flagged was real. In plain words, both of them.",
      effort: "One question",
      outcome: "An honest picture, and a note of which one they volunteered first.",
    },
    {
      title: "Ask what it was tested on",
      body: "Cases it had never seen, ideally from a later period than it learned from. Ask specifically.",
      effort: "One question",
      outcome: "A quick way to tell careful work from careless.",
    },
    {
      title: "Ask what a simple rule gets",
      body: "The rule an experienced person would use, measured the same way. This is the honest comparison.",
      effort: "One question, or an afternoon if nobody has done it",
      outcome: "The margin the model is actually delivering.",
    },
    {
      title: "Ask for it in your units",
      body: "Days, pounds, cases missed per month. If nobody can express it that way, keep asking.",
      effort: "One question",
      outcome: "Something the business can judge rather than take on trust.",
    },
    {
      title: "Ask to see twenty real cases",
      body: "Ten it is confident about, ten it got wrong. Look at them with somebody who knows the business.",
      effort: "1 hour",
      outcome: "The check that most reliably finds a real problem.",
    },
    {
      title: "Ask for a breakdown by what matters commercially",
      body: "Biggest customers, newest ones, highest value lines. Overall figures hide poor performance where it costs most.",
      effort: "One question",
      outcome: "Frequently the discovery that it is worst exactly where it matters.",
    },
  ],

  exercises: [
    {
      title: "Ask question one",
      brief:
        "The next time somebody presents an accuracy figure, ask what proportion of cases are actually the thing being predicted. Work out what always guessing the common answer would score.",
      success:
        "You can say whether the figure quoted means anything, using one question and no technical knowledge.",
      time: "5 minutes",
    },
    {
      title: "Look at twenty cases",
      brief:
        "For any model in your business, ask for its ten most confident predictions and ten it got wrong. Go through them with somebody who does the job.",
      success:
        "You find at least one thing wrong or surprising, which is the usual outcome.",
      time: "1 hour",
    },
    {
      title: "Ask for a breakdown",
      brief:
        "Ask for any model's performance broken down by your biggest customers, your newest customers, or your highest value products. Compare against the overall figure.",
      success:
        "You can say whether the overall figure is hiding weak performance where it matters most.",
      time: "30 minutes",
    },
  ],

  caseStudy: {
    business:
      "A lettings agency managing about nine hundred properties across a city, collecting rent monthly on behalf of landlords.",
    problem:
      "Arrears. The agency wanted to know which tenancies were heading for trouble so it could intervene early, and a supplier had already demonstrated something that was ninety-four percent accurate. The managing director was ready to sign. The number was true and it meant almost nothing.",
    analysis: [
      "Start by counting the thing being predicted. Around six percent of tenancies fell into meaningful arrears in a year. That single figure explains everything that followed.",
      "If six percent go into arrears, then a system that says nobody will go into arrears is ninety-four percent accurate. That is exactly what the demonstrated number described, and it is a system with no value whatsoever.",
      "So accuracy is the wrong measure whenever the thing you care about is rare, which in business is most of the time. Fraud is rare. Failures are rare. Serious complaints are rare.",
      "The two questions that do matter. Of the tenancies it flags, how many really do go into arrears? That determines how much wasted effort the team absorbs. And of the ones that go into arrears, how many did it miss? That determines what the whole thing is for.",
      "There is a trade between those two and it cannot be avoided. Flag more and you catch more and waste more. The agency had to choose where to sit, and that is a business decision about resource and about how an intervention feels to a tenant who was never going to miss a payment.",
    ],
    aiApproach: [
      {
        step: "Establish what doing nothing scores",
        detail:
          "Before evaluating anything, work out what the laziest possible answer achieves. Here it was ninety-four percent. Any result must be compared against that, and a supplier quoting accuracy without it is either careless or hoping you will not ask.",
      },
      {
        step: "Test on a period the model never saw",
        detail:
          "Train on earlier tenancies, test on later ones. Scoring a model on the data it learned from is the most common way a flattering number gets produced, and it is not always deliberate.",
      },
      {
        step: "Report the two numbers that describe the trade",
        detail:
          "Of those flagged, how many were right. Of those that happened, how many were caught. Always together. Either one alone can be made to look excellent by making the other terrible.",
      },
      {
        step: "Let the business choose the operating point",
        detail:
          "The team can handle a certain number of early conversations a month. That capacity, not the arithmetic, sets how many tenancies get flagged. Choosing this is a management decision and handing it to the supplier is how you end up with a system nobody can staff.",
      },
      {
        step: "Check it is not simply finding something you already knew",
        detail:
          "An early version was largely detecting tenancies already one payment behind, which the accounts system flags for free. Beating the obvious existing signal is the real bar, and it is a different and much harder question than beating random.",
      },
    ],
    solution: [
      "The supplier was asked to re-present using the two meaningful numbers on a period the model had not seen.",
      "The revised picture was considerably less impressive and was still worth having, which is a healthier place to start from.",
      "The flagging threshold set by how many early conversations the team could actually hold each month.",
      "A comparison against the existing one-payment-behind flag, so the agency could see what the model added over what it already had.",
      "Monthly reporting of both numbers, so drift would be visible.",
    ],
    impact: [
      "The agency bought a system it understood, at a threshold it could staff, rather than one that had been sold on a meaningless figure.",
      "The comparison against the existing flag reframed the purchase: the value was earliness, not detection, and that changed how the intervention was designed.",
      "The team was not swamped, because the volume was set by their capacity rather than by a default.",
      "The managing director now asks what the base rate is before looking at any accuracy figure, which will save more money than this project did.",
    ],
    whatWouldHaveKilledIt:
      "Signing on the ninety-four percent. It was a true statement about a system that could have been replaced by a piece of paper saying no. Nobody was lying. Accuracy is simply the wrong measure for rare events and it is quoted constantly because it is the one everybody recognises. The second failure would have been setting a threshold that generated more conversations than the team could hold, which turns a working model into an ignored report within two months.",
  },

  mistakes: [
    {
      mistake: "Accepting accuracy at face value",
      why: "When the thing being predicted is rare, accuracy is trivially high and tells you nothing. It is the most commonly quoted and least informative figure available.",
      fix: "Ask how often the thing actually happens, first, every time.",
    },
    {
      mistake: "Accepting one number",
      why: "Any single figure hides something. Improving how much you catch usually makes what you flag less reliable, and one number conceals that trade.",
      fix: "Ask for both, plus the breakdown by the groups that matter commercially.",
    },
    {
      mistake: "Not asking what it was tested on",
      why: "Testing on the same cases it learned from is marking your own homework, and it produces figures that fall apart in use.",
      fix: "Ask specifically whether the test cases came from a later period. One question, and it separates careful work from careless.",
    },
    {
      mistake: "Comparing against nothing",
      why: "Any performance sounds good on its own. Without knowing what a simple rule achieves, you cannot say whether the model earned its cost.",
      fix: "Ask what the rule an experienced person would use gets, measured the same way.",
    },
    {
      mistake: "Being reassured by a very high figure",
      why: "In business problems, exceptionally good results almost always mean something has leaked in from after the decision point rather than that somebody was brilliant.",
      fix: "When it looks too good, ask what fields are going in and when each one gets filled.",
    },
    {
      mistake: "Never looking at actual cases",
      why: "Summary figures cannot show you that four of the top ten are decommissioned machines or closed accounts. Ten minutes of looking finds what no statistic will.",
      fix: "Always ask for twenty real cases and review them with somebody who does the job.",
    },
  ],

  bestPractices: [
    "Ask how often the thing happens before looking at any figure.",
    "Ask for both real numbers, in plain words.",
    "Ask what it was tested on and whether those cases came later.",
    "Ask what a simple rule achieves.",
    "Ask for performance in units the business uses.",
    "Ask to see twenty real cases and review them with somebody who knows the job.",
    "Ask for a breakdown by whatever grouping matters commercially.",
    "Treat a very high figure as a reason to check the inputs.",
  ],

  proTips: [
    "Notice which number somebody volunteers first. If they lead with accuracy for a rare event, or with how much it caught without saying how much of what it flagged was real, they are showing you the flattering half. That is not usually dishonesty, it is habit, and asking for the other half changes the conversation.",
    "Ask to see the cases it got most confidently wrong. Not just the errors, the confident errors. Those are where the interesting problems live, and going through five of them with somebody experienced is the single most efficient review you can do.",
    "If somebody cannot tell you the performance in days or pounds or cases per month, keep asking. Either they have not connected the model to the business decision, which is a finding, or they are more comfortable in technical terms, in which case a bit of patience gets you there.",
    "Ask what the model does with a case where half the fields are empty. Business data is full of half-complete records, and performance on tidy cases tells you very little about performance on the ordinary awkward reality of your operation.",
  ],

  businessApplications: [
    "Reviewing a model somebody wants approval to deploy.",
    "Checking whether an existing model is still earning its keep.",
    "Assessing what a supplier is claiming about their product.",
    "Deciding between two competing approaches on evidence rather than presentation.",
    "Investigating why something that tested well is not delivering.",
    "Setting a standard for what any model proposal has to include.",
  ],

  checklist: [
    "How often the thing happens established.",
    "Both real numbers obtained, not just one.",
    "Confirmed it was tested on later cases it had never seen.",
    "Simple rule comparison obtained.",
    "Performance expressed in business units.",
    "Twenty real cases reviewed with somebody who knows the job.",
    "Breakdown by commercially important groups obtained.",
    "Very high figures investigated rather than accepted.",
  ],

  faqs: [
    {
      q: "Why is accuracy so misleading?",
      a: "Because when the thing you are predicting is rare, always guessing the common answer scores highly and catches nothing. If two per cent of customers leave, doing nothing scores ninety-eight per cent. It measures nothing useful.",
    },
    {
      q: "What should I ask for instead?",
      a: "Two numbers in plain words: how much of the real thing did we catch, and how much of what we flagged was real. Both, always, plus a breakdown by whatever matters commercially.",
    },
    {
      q: "How do I know if it was tested properly?",
      a: "Ask whether the test cases came from a later period than the ones it learned from. That one question separates careful work from careless, and it needs no technical knowledge to ask or to judge.",
    },
    {
      q: "What if the result seems too good?",
      a: "It almost certainly is. In business problems, exceptional performance usually means a field crept in that contains information from after the decision point. Ask what is going in and when each field gets filled.",
    },
    {
      q: "Do I need to understand the technical measures?",
      a: "No. Every one of them can be asked for in plain English, and if somebody cannot explain their figure without technical vocabulary, that is worth noticing in itself.",
    },
    {
      q: "How much better than a simple rule is enough?",
      a: "Enough to justify the build cost, the monitoring, the refreshing and the risk of the person who built it leaving. Agree that margin before you see the result, because afterwards whatever it achieves will be argued to be sufficient.",
    },
  ],

  tools: [
    { name: "The six questions, written down", what: "How often, both numbers, tested on what, what a rule gets, in our units, show me twenty cases.", cost: "Free" },
    { name: "Twenty real cases", what: "Ten confident, ten wrong. The check that most reliably finds a real problem.", cost: "Free" },
    { name: "Somebody who does the job", what: "To review the cases with. They spot a decommissioned machine or a closed account in seconds.", cost: "Free" },
    { name: "A simple rule, measured", what: "The honest comparison. Without it any figure sounds impressive.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "predicting-yes-or-no", anchor: "why the two numbers matter for yes or no problems", context: "Background" },
    { slug: "when-a-simple-rule-beats-a-model", anchor: "building the comparison", context: "The baseline" },
    { slug: "evaluating-ai-systems", anchor: "checking AI systems more broadly", context: "Wider version" },
  ],

  relatedGuides: ["predicting-yes-or-no", "when-a-simple-rule-beats-a-model", "evaluating-ai-systems"],

  conclusion: [
    "The next time somebody puts an accuracy figure on a slide, ask what proportion of cases are actually the thing being predicted. If the answer is a small number, the figure on the slide means nothing, and you will have established that in about thirty seconds.",
  ],
};

export default guide;
