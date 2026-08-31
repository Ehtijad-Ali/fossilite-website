import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "why-models-stop-working",
  seoTitle: "Why Models Quietly Stop Working, and Nobody Notices",
  metaDescription:
    "A model learns the world as it was. The world moves and it does not. How that happens, what it looks like, and the simple monitoring that catches it.",
  title: "Why Models Quietly Stop Working",
  keywords: [
    "model drift explained",
    "why models degrade",
    "monitoring machine learning",
    "model maintenance business",
    "retraining a model",
    "model performance over time",
  ],
  category: "machine-learning",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "A model learns the world as it was during the period it was trained on. Then the world moves and the model does not. That is the whole problem, and it is the single most reliable way for a successful project to become a quiet failure.",
    "The unnerving part is that it does not announce itself. It does not error, it does not stop, it does not produce anything obviously strange. It carries on giving confident answers that are slowly getting worse, and because nobody is checking, everybody carries on acting on them.",
    "Most businesses discover this months later, usually because somebody happens to notice that the numbers do not feel right. By then the thing has been quietly wrong for a long time and a lot of decisions have been made on it.",
  ],

  whyItMatters: [
    "It converts a working system into a harmful one without anybody deciding to. Nobody chose to keep using a model that no longer works. It just carried on being used, because nothing told anybody to stop.",
    "It is also the cost that never appears in a business case. Building it is a project with a budget. Keeping it working is an ongoing commitment that gets forgotten between the proposal and the reality.",
    "And catching it is cheap. Three or four simple checks running weekly will catch nearly all of it. The reason it goes uncaught is not difficulty, it is that nobody was given the job.",
  ],

  coreConcepts: [
    {
      term: "The world changes underneath it",
      explain:
        "Customers behave differently. Prices move. A competitor appears or disappears. Your own process changes. A supplier changes their format. The relationships the model learned no longer hold.",
      detail:
        "None of these are unusual events. They are what businesses do. Which is why this is not an edge case to be planned for, it is a normal and inevitable part of running anything that learns from history.",
    },
    {
      term: "Sometimes what is arriving changes rather than the relationship",
      explain:
        "You start selling to a different kind of customer, or in a new region, or through a new channel. The model is now being asked about cases unlike anything it learned from.",
      detail:
        "This is more common than the relationships changing and it is easier to spot, because you can watch what is coming in without needing to know the outcomes yet.",
    },
    {
      term: "The model does not know it has stopped working",
      explain:
        "It has no way of telling that the world moved. It gives the same confident answers on an unfamiliar case as on a familiar one.",
      detail:
        "This is the crucial thing for a business audience. Confidence is not competence. There is no internal alarm and nobody will be told unless somebody has set up a check.",
    },
    {
      term: "Your own actions cause some of it",
      explain:
        "If you use a model to decide who gets chased, you only ever find out what happened to the ones you chased. The people you left alone stop appearing in your evidence.",
      detail:
        "Over time you are training on data your own decisions shaped. It quietly narrows and reinforces itself, and holding back a small random group is the standard protection.",
    },
    {
      term: "Watch three things, weekly",
      explain:
        "What is coming in, whether it looks like what the model learned from. What is going out, whether the mix of answers has shifted. And how well it is doing, wherever you can find out the real outcome.",
      detail:
        "The first two you can check immediately without waiting for outcomes. The third is the real measure and it arrives late. Do all three and you catch most problems within a week or two.",
    },
    {
      term: "The outcome always arrives later",
      explain:
        "If you predict whether somebody will renew in a year, you cannot check that for a year. So you need the earlier signals as well.",
      detail:
        "Ask how long before you would know the model was wrong. If the answer is months, the earlier checks are not optional, they are the only warning you will get in time.",
    },
    {
      term: "Somebody has to own it",
      explain:
        "A named person who looks at the checks, who decides when to refresh, and who has the authority to switch it off.",
      detail:
        "Without a name, this is nobody's job and it does not happen. The most common version of this failure is not a technical one, it is that the person who built it moved on and nobody replaced them.",
    },
    {
      term: "Decide in advance what triggers a rebuild",
      explain:
        "Agree the level at which performance is unacceptable, and what happens then. Refresh it, escalate it, or turn it off.",
      detail:
        "Agreed while everybody is calm, this is a routine procedure. Left until performance has dropped, it becomes a difficult conversation about whether the project was a good idea.",
    },
    {
      term: "Some things change on a schedule you already know",
      explain:
        "A price change, a new product line, a system migration, a regulatory change. These are foreseeable and they will affect the model.",
      detail:
        "Whoever owns the model should be on the distribution list for changes like that, and should check performance deliberately afterwards rather than waiting to be told something is wrong.",
    },
  ],

  diagrams: [
    {
      kind: "curve",
      title: "Three different causes, and a routine retrain fixes only one",
      caption:
        "The gradual slide is a competitor opening. The cliff is a menu change, and no amount of retraining fixes predicting demand for items that no longer exist. The real failure was that nobody was watching, so all of this was found through complaints months later.",
      xLabel: "months since it went live",
      yLabel: "how close the prediction was",
      series: [
        {
          name: "Prediction quality",
          points: [[0, 86], [8, 88], [16, 85], [24, 82], [32, 70], [40, 62], [48, 58], [56, 56], [62, 55], [64, 26], [72, 24], [84, 22], [100, 20]],
        },
        {
          name: "Where somebody should have looked",
          dashed: true,
          points: [[0, 72], [100, 72]],
        },
      ],
      notes: [
        { x: 32, y: 70, text: "competitor opened, gradual" },
        { x: 64, y: 26, text: "menu change, a cliff" },
      ],
    },
    {
      kind: "flow",
      title: "The takeaway chain: making decay visible in weeks rather than months",
      caption:
        "The override log was already there. Kitchen managers had been correcting it for months, and every correction was a recorded signal nobody was reading.",
      steps: [
        { label: "Predicted against actual, weekly", note: "On the same report as waste", tone: "input" },
        { label: "Watch the inputs too", note: "They shift before the accuracy does" },
        { label: "Tie business changes to reviews", note: "A menu change triggers one before it goes live", tone: "model" },
        { label: "Tell a rebuild from a refresh", note: "One cause needed retraining, one needed rethinking" },
        { label: "Read the override log monthly", note: "The earliest warning you have, and it is free", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A system that worked well and then quietly stopped.",
      walkthrough:
        "Google Flu Trends estimated how much flu was going around from search volume, and it performed impressively when it launched. Over subsequent seasons its estimates drifted a long way from the reference data. Search behaviour had changed, partly because of media coverage of flu and partly because of changes to the search product itself, while the model carried on assuming the old relationship held.",
      result:
        "Nothing broke and nothing errored. The model kept producing confident estimates that were increasingly wrong, because the connection between searching and being ill had shifted underneath it. This is the shape of the problem exactly, and the only defence is somebody checking regularly against what actually happened.",
      source: {
        label: "Lazer, Kennedy, King and Vespignani, Science 343:1203-1205 (2014). The Parable of Google Flu",
        url: "https://www.science.org/doi/10.1126/science.1248506",
      },
    },
    {
      kind: "illustration",
      scenario: "The supplier who changed a field and told nobody.",
      walkthrough:
        "The problem: a model scoring incoming orders started performing noticeably worse and nobody noticed for around seven weeks. What was happening: a supplier had changed the format of a reference code in their feed. The field was still arriving, still populated, and now meant something slightly different. Nothing errored because the data looked perfectly valid.",
      result:
        "What changed: they set up a weekly check on what is arriving, comparing the shape of each important field against what it looked like when the model was built. The next time something changed at a supplier's end it was flagged within a week. Watching what comes in catches things you can see immediately, without waiting months for outcomes.",
    },
    {
      kind: "illustration",
      scenario: "The model that was training on its own decisions.",
      walkthrough:
        "The problem: a collections model had been running for two years and was getting steadily worse in a way nobody could explain. What was happening: it decided who got chased. Only chased accounts produced an outcome anybody recorded. So each retraining used data consisting entirely of accounts the previous version had already selected, and the model gradually narrowed onto a smaller and smaller kind of case.",
      result:
        "What changed: they started leaving a small random group unchased each month specifically to keep learning about the accounts the model would not have picked. Performance recovered over the following two quarters. If a model decides who gets acted on, it shapes the evidence it will be trained on next, and a random held-back group is the standard protection.",
    },
  ],

  learningPath: [
    {
      title: "Ask how long before you would know",
      body: "If the model started being wrong today, when would anybody find out? If the honest answer is months, you need earlier warning signals.",
      effort: "One question",
      outcome: "A realistic picture of your current exposure, which is usually worse than assumed.",
    },
    {
      title: "Set up the incoming check",
      body: "Weekly. Does what is arriving look like what the model learned from? Counts, how full each field is, the spread of values, the mix of customer types.",
      effort: "2-3 days",
      outcome: "Warning that does not have to wait for outcomes.",
    },
    {
      title: "Set up the outgoing check",
      body: "Has the mix of answers shifted? If it used to flag three per cent and now flags eleven, something changed even if you do not yet know what.",
      effort: "1 day",
      outcome: "A second early signal, cheap to build.",
    },
    {
      title: "Set up the real measure wherever you can",
      body: "Wherever outcomes eventually arrive, compare what the model said against what happened. Even on a subset, even late.",
      effort: "2-3 days",
      outcome: "The actual answer, which the earlier signals only hint at.",
    },
    {
      title: "Name the owner",
      body: "One person who looks at the checks, decides on refreshing, and can switch it off. Not a team.",
      effort: "A conversation",
      outcome: "The single thing that most decides whether any of this happens.",
    },
    {
      title: "Agree what triggers a rebuild",
      body: "The level at which performance is unacceptable, and what happens then. Agreed while everybody is calm.",
      effort: "A conversation",
      outcome: "A routine procedure rather than a difficult conversation later.",
    },
    {
      title: "Hold back a random group if the model decides who gets acted on",
      body: "A small percentage who do not get the action, so you keep learning about the cases the model would not have picked.",
      effort: "Part of the design",
      outcome: "Protection against the model quietly narrowing onto its own choices.",
    },
  ],

  exercises: [
    {
      title: "Ask when anybody would find out",
      brief:
        "For any model running in your business, ask how somebody would know if it stopped working, and how long that would take. Ask the person who owns it, if there is one.",
      success:
        "You get a specific answer, or you have found that nothing would tell anybody, which is the more common result.",
      time: "20 minutes",
    },
    {
      title: "Compare then and now",
      brief:
        "For a model that has been running a while, compare what is arriving now against what it was built on. How full each field is, the spread of values, the mix of case types.",
      success:
        "You can say whether the incoming data still resembles what it learned from, and you have often found something.",
      time: "Half a day",
    },
    {
      title: "Find the owner",
      brief:
        "For every model running in your business, find out who is named as responsible for checking it works and refreshing it. Write down the names.",
      success:
        "You have a list, and any blank entry is a system running with nobody watching it.",
      time: "1 hour",
    },
  ],

  caseStudy: {
    business:
      "A chain of eleven takeaway outlets. Prep quantities are decided each morning for the evening trade.",
    problem:
      "A demand model built eighteen months earlier had been good and had quietly stopped being good. Nobody could say when. Waste had crept up, the kitchen managers had started overriding it, and by the time anybody looked at it properly most of them had gone back to guessing.",
    analysis: [
      "The first thing to establish is what changed, because a model going stale is always caused by something and the something is usually knowable.",
      "Three things had changed and each affected it differently. The menu had been revised, with two popular items removed. A competitor had opened near two of the outlets. And delivery platform mix had shifted heavily towards one app.",
      "The menu change is the clean case. The model was predicting demand for items that no longer existed and had no history for their replacements. That is not drift, that is a broken input, and it should have triggered a rebuild the day the menu changed.",
      "The competitor is genuine drift. The relationship between day, weather and demand at those two sites simply moved, gradually, over a couple of months.",
      "The delivery mix is the sneaky one. Orders through the dominant app arrive in a different pattern across the evening, so the totals could be right while the timing was wrong, which is what the kitchen actually experienced.",
      "The real failure was none of these. It was that nobody was watching. There was no measure being tracked, so the decay was discovered through complaints months after it started.",
    ],
    aiApproach: [
      {
        step: "Measure the prediction against reality continuously",
        detail:
          "Predicted versus actual, tracked weekly from the day it goes live. This is a small piece of reporting and its absence is why this failure is so common. Without it, the first signal is somebody complaining.",
      },
      {
        step: "Watch the inputs as well as the output",
        detail:
          "Track whether what is arriving still looks like what it was trained on. The delivery mix shift would have been visible here months before it showed up in the results, because the inputs change before the accuracy does.",
      },
      {
        step: "Tie business changes to model reviews",
        detail:
          "A menu change, a new site, a price change, a competitor opening. These are known events and each should force a review. Waiting for the numbers to degrade is choosing to find out late when somebody could have told you in advance.",
      },
      {
        step: "Distinguish a rebuild from a refresh",
        detail:
          "The competitor effect needed retraining on recent data. The menu change needed rethinking what the model predicts. Treating both as retrain the model would have fixed one and left the other broken.",
      },
      {
        step: "Read the overrides",
        detail:
          "The kitchen managers had been correcting it for months and every correction was a recorded signal that something was wrong. Nobody was reading them. That log is a free early warning system that most businesses collect and never look at.",
      },
    ],
    solution: [
      "A weekly predicted-versus-actual figure per outlet, on the same report as waste.",
      "An alert when it drifts past a set band for two consecutive weeks.",
      "A standing rule that a menu change triggers a review before it goes live, not after.",
      "Retraining on a rolling recent window so gradual shifts are absorbed automatically.",
      "The override log reviewed monthly, because it is the earliest signal available.",
    ],
    impact: [
      "The decay became visible in weeks rather than being discovered through complaints months later, which is the whole objective.",
      "The three causes were separated and treated differently, where a single retrain would have addressed only one of them.",
      "The kitchen managers regained trust because their overrides were visibly being used, and that mattered more to adoption than the accuracy did.",
      "The business learned that a model is a thing you maintain rather than a thing you install, which changed how the next one was budgeted.",
    ],
    whatWouldHaveKilledIt:
      "What did nearly kill it: shipping it with no monitoring. A model that works on day one and is not watched will decay, and the only question is whether you notice before your customers do. The second failure was assuming one cause. The menu change was obvious in hindsight and would have been missed entirely by a routine retrain, because retraining does not fix predicting something that no longer exists.",
  },

  mistakes: [
    {
      mistake: "Assuming it will keep working",
      why: "It learned the world as it was. Businesses change constantly, so degrading is the normal case rather than an unusual failure.",
      fix: "Treat ongoing monitoring as part of the cost of having a model, and put it in the business case.",
    },
    {
      mistake: "Only checking outcomes",
      why: "Outcomes arrive months later for many predictions. By the time performance shows a problem, a great many decisions have already been made on bad answers.",
      fix: "Watch what is coming in and what is going out as well. Both give you warning without waiting.",
    },
    {
      mistake: "Nobody named as responsible",
      why: "It becomes nobody's job. The most common version of this is that the person who built it moved on and nothing replaced them.",
      fix: "Name one person, with the authority to refresh it or switch it off.",
    },
    {
      mistake: "Not deciding in advance what triggers action",
      why: "When performance drops, the conversation becomes about whether the project was a good idea rather than about refreshing a model.",
      fix: "Agree the level and the response while everybody is calm and nothing is wrong.",
    },
    {
      mistake: "Letting the model shape its own future training data",
      why: "If it decides who gets acted on, you only learn about the ones it picked. It narrows onto its own choices and gets steadily worse in a way that is hard to diagnose.",
      fix: "Hold back a small random group from the action, permanently.",
    },
    {
      mistake: "Not being told about business changes",
      why: "A price change, a new product or a system migration will affect the model, and the person who owns it usually finds out afterwards.",
      fix: "Put whoever owns the model on the distribution list for planned changes and check performance deliberately after each one.",
    },
  ],

  bestPractices: [
    "Treat monitoring as part of the cost of having a model.",
    "Watch what comes in, what goes out, and how well it does.",
    "Check weekly, not when somebody happens to wonder.",
    "Ask how long before anybody would know something was wrong.",
    "Name one person as owner, with authority to switch it off.",
    "Agree in advance what performance level triggers a rebuild.",
    "Hold back a random group where the model decides who gets acted on.",
    "Get the model owner onto the list for planned business changes.",
  ],

  proTips: [
    "Ask when the model was last refreshed and who decided. If the answer is that it has not been since it went live two years ago, you have found something worth raising, and you did not need any technical knowledge to find it.",
    "Watch the mix of answers as a number in its own right. If something used to flag three per cent of cases and now flags eleven, that is worth investigating even before you know whether it is right. It is the cheapest early warning available and it needs no outcomes.",
    "Put the model owner on the distribution list for anything that changes a form, a feed, a price list or a process. Most degradation traces back to a change somebody made for perfectly good reasons without knowing it fed a model. That is a communication fix rather than a technical one.",
    "Ask what would happen if the person who built it left next month. If nobody else could refresh it, the model has a life expectancy tied to one person's employment, and that belongs in the risk conversation rather than being discovered later.",
  ],

  businessApplications: [
    "Any model that has been running for more than a few months.",
    "Reviewing why something that tested well is no longer delivering.",
    "Working out what ongoing cost to put in a business case.",
    "Deciding whether a model should be refreshed, rebuilt or switched off.",
    "Checking after a significant business change, such as a new product or a system migration.",
    "Assessing what a supplier commits to about keeping their model current.",
  ],

  checklist: [
    "Time before anybody would notice a problem established.",
    "Weekly check on incoming data in place.",
    "Weekly check on the mix of answers in place.",
    "Comparison of predictions against actual outcomes wherever possible.",
    "One named owner, with authority to switch it off.",
    "Trigger level for refreshing agreed in advance.",
    "Random held-back group where the model decides who gets acted on.",
    "Model owner on the distribution list for planned business changes.",
  ],

  faqs: [
    {
      q: "How often should we retrain?",
      a: "Let the monitoring decide rather than the calendar. A rough starting point is checking weekly and expecting to refresh a few times a year, and immediately after any significant change in how the business works.",
    },
    {
      q: "How would we know if it had stopped working?",
      a: "Only if somebody set up a check. It will not error and it will not tell you. That is the whole problem, and it is why the question of how long before anybody would notice is worth asking of every model you run.",
    },
    {
      q: "What is the cheapest thing to monitor?",
      a: "What is coming in. Counts, how full each field is, the spread of values, compared against what the model was built on. It needs no outcomes, catches a lot, and takes a couple of days to set up.",
    },
    {
      q: "Why does using the model make the data worse?",
      a: "Because you only find out what happened to the cases it picked. Over time you are training on data your own decisions shaped, and it narrows. Holding back a small random group is the standard protection.",
    },
    {
      q: "Who should own this?",
      a: "One named person in the business, not a team and not the supplier. They need authority to refresh it and to switch it off, and they need to be told when things change elsewhere in the business.",
    },
    {
      q: "What if we bought the model from a supplier?",
      a: "Ask how they monitor for this, how often they refresh, and what they would tell you if performance dropped. A supplier without a clear answer is selling you today's performance indefinitely.",
    },
  ],

  tools: [
    { name: "A weekly check on incoming data", what: "Counts, completeness, spread, compared against what it was built on. Cheapest early warning there is.", cost: "Free" },
    { name: "A weekly check on the mix of answers", what: "Has the proportion being flagged shifted? Needs no outcomes and catches a lot.", cost: "Free" },
    { name: "A named owner", what: "One person, with authority to refresh or switch off. The single thing that most decides whether monitoring happens.", cost: "Free" },
    { name: "A random held-back group", what: "Where the model decides who gets acted on. Keeps you learning about the cases it would not pick.", cost: "Free" },
  ],

  resources: [
    { title: "The Parable of Google Flu", kind: "Paper", note: "Lazer and colleagues, Science 2014. The clearest documented case of a model that worked well and then drifted while continuing to produce confident answers.", url: "https://www.science.org/doi/10.1126/science.1248506" },
  ],

  internalLinks: [
    { slug: "putting-a-model-into-a-real-process", anchor: "building the monitoring in from the start", context: "Deployment" },
    { slug: "knowing-if-a-model-is-any-good", anchor: "measuring it properly in the first place", context: "Measurement" },
    { slug: "spotting-the-unusual", anchor: "watching for changes in your data", context: "Technique" },
  ],

  relatedGuides: ["putting-a-model-into-a-real-process", "knowing-if-a-model-is-any-good", "spotting-the-unusual"],

  conclusion: [
    "For every model running in your business, ask two questions: who is named as responsible for checking it still works, and how long before anybody would notice if it stopped. Any blank answer is a system making decisions with nobody watching.",
  ],
};

export default guide;
