import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "why-many-small-models-beat-one",
  seoTitle: "Why Asking a Hundred Models Beats Asking One",
  metaDescription:
    "Random forests explained without maths. Why a crowd of mediocre guesses beats one confident expert, and what you give up to get it.",
  title: "Why a Crowd Beats One Expert",
  keywords: [
    "random forest explained simply",
    "ensemble models business",
    "random forest business use case",
    "bagging explained",
    "combining models",
    "why ensembles work",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  brief: {
    inOneMinute:
      "When no single column explains the problem, stop looking for the one cause. Hundreds of weak opinions voting together find combinations that no chart of any single factor can show.",
    problem: {
      headline: "Batches fail quality control and nobody can predict which",
      detail:
        "A bakery supplying supermarkets. A failed batch is thrown away; one that fails at the customer costs a complaint and a credit note.",
    },
    wrongApproach: {
      what: "Chase the one thing everybody blames",
      why: "The production manager blamed a particular oven. It ran the most batches, so it had the most failures, and per batch it was fine. Counting settled it in an afternoon and saved the cost of replacing it.",
    },
    rightApproach: {
      what: "Build many small models and let them vote",
      why: "Each one sees a random slice of the history and a few of the factors. Individually mediocre, and their mistakes point in different directions, so together they find the combination that matters.",
    },
    context: {
      where: "Manufacturing quality, equipment failure, anywhere causes are tangled.",
      decision: "Which batches get an extra check before they leave.",
      metric: "Failures caught in-house rather than at the customer.",
    },
    takeaway:
      "The real finding was a combination: a flour batch that was fine normally and marginal when the room was humid and proving ran short. No single column showed anything.",
  },

  story: {
    title: "Hundreds of mediocre opinions, one good answer",
    caption:
      "Failures were rare, which shaped everything. Left alone the models learn to say pass every time and score brilliantly while catching nothing.",
    stages: [
      { stage: "Problem", label: "Waste, and complaints", detail: "Batches fail unpredictably, and the theory everybody holds has never been tested." },
      { stage: "Data", label: "Every batch, three years", detail: "Flour supplier, room temperature and humidity, proving time, oven, shift, operator, time since deep clean." },
      { stage: "Model", label: "Many small trees, voting", detail: "Weighted so that missing a failure costs more than raising a false alarm, which is a business decision rather than a technical one." },
      { stage: "Prediction", label: "A risk flag during proving", detail: "Early enough that somebody can still do something about it." },
      { stage: "Decision", label: "Flagged batches get an extra check", detail: "Instead of spreading the same checking effort evenly across everything." },
      { stage: "Result", label: "Failures caught before dispatch", detail: "And the oven theory settled with evidence, so the replacement budget was not spent." },
    ],
  },

  intro: [
    "There is an old party trick where you ask a hundred people to guess the number of sweets in a jar. Individually most of them are miles out. Average all the guesses together and the answer is often remarkably close, closer than nearly any single person managed.",
    "That is the whole idea behind a random forest, which is one of the most widely used approaches in ordinary business work. Instead of building one careful flowchart, you build hundreds of slightly different ones, each shown a different random slice of the history, and then you let them vote.",
    "Why it works is worth understanding, because it explains something important. Each individual flowchart is a bit wrong, but they are wrong in different directions. When you average them, a lot of the individual errors cancel each other out and what is left is the signal they agreed on.",
  ],

  whyItMatters: [
    "This is the approach a lot of businesses should be using and are not, because it does not sound impressive. It handles ordinary business tables well, it does not need much tuning, and it is hard to make it fail badly.",
    "It also fixes the main weakness of a single flowchart, which is that one tree is jumpy and unreliable. Combining hundreds of them removes most of that jumpiness without you having to be clever about it.",
    "And it gives you something genuinely useful for free: a ranking of which pieces of information mattered most. That list is often more valuable to the business than the predictions, because it tells you where to look.",
  ],

  coreConcepts: [
    {
      term: "Build lots of slightly different versions and let them vote",
      explain:
        "Each one gets a different random sample of your history and is only allowed to consider a random subset of the available information. So each ends up with a different view of the world.",
      detail:
        "The randomness is deliberate. If they all saw the same data and the same fields, they would all make the same mistakes, and averaging identical guesses gets you nowhere.",
    },
    {
      term: "Errors in different directions cancel out",
      explain:
        "One version might be too pessimistic about a particular kind of customer. Another might be too optimistic. Average enough of them and those pull against each other, leaving what they broadly agree on.",
      detail:
        "This is why a crowd of mediocre guessers beats one confident expert. It is not that the crowd is cleverer. It is that their mistakes are unrelated and yours are not.",
    },
    {
      term: "It is hard to make it go badly wrong",
      explain:
        "Compared with most things in this area, it is forgiving. It does not need much adjustment, it copes with a mix of numbers and categories, and it does not fall apart if a couple of fields are odd.",
      detail:
        "That matters more in a business than it sounds. Something that works reasonably well with little fuss and keeps working is often more valuable than something better that needs an expert to maintain.",
    },
    {
      term: "You get a ranking of what mattered",
      explain:
        "It can tell you which pieces of information it leaned on most across all those versions. Order value mattered most, then how long they have been a customer, then region.",
      detail:
        "That list is frequently the most useful output. Even if you never deploy the model, knowing what actually separates your good cases from your bad ones is worth having, and this gives it to you in an afternoon.",
    },
    {
      term: "The ranking tells you what it used, not what causes things",
      explain:
        "A field appearing near the top means the model found it useful for predicting. It does not mean changing that field would change the outcome.",
      detail:
        "This gets misread constantly. If postcode ranks high for loan defaults, that does not mean the postcode causes defaults. It means postcode is standing in for something else, and treating it as causal leads somewhere bad.",
    },
    {
      term: "You lose the ability to read it",
      explain:
        "One flowchart you can print. Three hundred of them you cannot. There are ways to get a rough explanation for an individual case, and they are approximations rather than the real reasoning.",
      detail:
        "This is the trade. If somebody has a right to know exactly why they were declined, that is a genuine problem. If you are ranking which accounts to chase first, nobody minds.",
    },
    {
      term: "It is slower and heavier to run",
      explain:
        "Hundreds of flowcharts take more computing and more memory than one. For most business volumes this is irrelevant, and occasionally it matters.",
      detail:
        "Worth asking about only when you need an answer in a fraction of a second, or on a device with limited power. For a nightly batch or a screen that takes a moment to load, it is a non-issue.",
    },
    {
      term: "It is a strong default for ordinary business data",
      explain:
        "If your information sits in a table with rows and columns, which describes most business data, this is a very reasonable first serious attempt.",
      detail:
        "Neural networks get the attention and they are aimed at a different kind of problem. For customers, orders, claims and transactions in rows, a forest is usually competitive and far less effort.",
    },
    {
      term: "It still cannot see anything you did not give it",
      explain:
        "Combining hundreds of views of the same information does not create new information. If the thing that actually drives your outcome is not in the data, no amount of voting will find it.",
      detail:
        "Worth saying because the technique sounds powerful enough that people expect it to overcome bad inputs. It cannot. Better information beats a better method almost every time.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The bakery: the nightly check that finally got off the oven",
      caption:
        "Every single-factor chart said nothing was wrong, which is exactly how the oven theory survived two years. Only something that weighs several ordinary things at once was ever going to find this.",
      trigger: "Nightly, on the day's production records",
      runtime: "Runs while the plant is cold. The report is there at six.",
      stages: [
        {
          actor: "system",
          label: "Pull the day's batches with the conditions they were made in",
          output: "flour lot, humidity, proving time, oven, and the quality result",
        },
        {
          actor: "rule",
          label: "Stop looking for the one cause",
          detail: "Humidity alone said nothing. Proving time alone said nothing. That was the finding, not the dead end.",
          output: "all the factors together, rather than one chart at a time",
        },
        {
          actor: "model",
          label: "Many small models, each working on the last one's mistakes",
          detail: "No single one of them is clever. What they collectively pick up is a combination no individual factor shows.",
          output: "a risk score per batch, plus the factors that drove it",
        },
        {
          actor: "person",
          label: "The production manager sees the combination, not a verdict",
          detail: "A certain flour was perfectly fine in normal conditions and marginal when the room was humid and proving had run short.",
          exception: "A batch flagged on a combination the system has never seen before is sampled more heavily, not scrapped.",
        },
        {
          actor: "rule",
          label: "Sample harder only in the flagged conditions",
          detail: "The same quality control hours, spent where the failures actually are.",
          output: "a testing plan that changes with the weather",
        },
      ],
      loop: "Every quality result is another example, and the combinations sharpen through the seasons.",
      outcome:
        "The blame moves off one oven and onto a combination of three ordinary things, none of which looked wrong on its own.",
    },
    {
      kind: "flow",
      title: "The bakery: hundreds of mediocre opinions, one good answer",
      caption:
        "Each tree sees a different slice of the history and a different subset of the factors. They are individually unimpressive, and their mistakes point in different directions, which is why the vote beats any one of them.",
      steps: [
        { label: "Every batch, three years", note: "Flour, humidity, proving time, oven, shift", tone: "input" },
        { label: "Weight the rare failures", note: "Or it learns to say pass every time" },
        { label: "Hundreds of small trees vote", note: "Each on a random slice", tone: "model" },
        { label: "Risk flag during proving", note: "While there is still time to act" },
        { label: "Extra check before dispatch", note: "Caught here, not at the customer", tone: "output" },
      ],
    },
    {
      kind: "scatter",
      lesson: {
        problem: "Batches fail quality control, and the production manager blames one oven.",
        wrong: {
          label: "Look at one factor",
          why: "Plot failures against humidity alone, or proving time alone, and they sit right through the normal batches. Every single-factor chart says nothing is wrong, which is why the oven theory survived for two years.",
        },
        right: {
          label: "Look at the combination",
          why: "Both factors at once, and the failures pull into a corner. Certain flour was fine in normal conditions and marginal when the room was humid AND proving ran short.",
        },
        discovery: "No column caused this. A combination did, and only something that weighs several factors together was ever going to find it.",
        decisions: [
          { tone: "protect", label: "Normal conditions, sample as usual" },
          { tone: "monitor", label: "Humid days" },
          { tone: "investigate", label: "Humid AND short proving" },
        ],
        takeaway: "When no single column explains it, stop looking for the one cause.",
      },
      naive: {
        groups: [
          {
            name: "Every batch, by humidity alone",
            points: [[10, 46], [22, 50], [35, 44], [48, 52], [60, 48], [15, 54], [28, 42], [40, 56], [12, 48], [55, 46], [68, 52], [30, 44], [44, 50], [20, 54], [72, 46], [8, 50], [52, 44], [64, 52], [36, 48], [25, 46], [74, 50], [82, 46], [78, 52], [88, 48], [70, 44], [85, 50], [76, 54]],
          },
        ],
        notes: [{ x: 82, y: 46, text: "failures hide in here" }],
      },
      title: "Why no single column found it",
      caption:
        "Failures are the ringed points. Look along either axis on its own and the failures are spread through the normal batches. Only the corner where both conditions hold separates them, and no single-factor chart can show that.",
      xLabel: "humidity in the mixing room",
      yLabel: "how short the proving time ran",
      groups: [
        {
          name: "Passed",
          points: [[10, 20], [22, 14], [35, 30], [48, 18], [60, 26], [15, 55], [28, 68], [40, 48], [12, 38], [55, 12], [68, 34], [30, 22], [44, 62], [20, 44], [72, 20], [8, 66], [52, 40], [64, 55], [36, 12], [25, 30]],
        },
        {
          name: "Failed quality control",
          ring: true,
          points: [[74, 78], [82, 70], [78, 86], [88, 76], [70, 82], [85, 88], [76, 72]],
        },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The list of what mattered was the real finding.",
      walkthrough:
        "The problem: a service business wanted to predict which customers would not renew. What was happening: the model was built and its predictions were reasonable but not dramatic. The more interesting output was the ranking of what it had leaned on. Near the top, above contract value and above how long they had been a customer, was the number of support tickets raised in the first ninety days.",
      result:
        "What changed: nobody had connected early support volume with renewal a year later. That prompted a piece of work looking at what those early tickets were about, which turned out to be mostly confusion during setup. Fixing the setup process did more for renewals than the prediction ever did. The ranking of what mattered pointed at a problem, which is often worth more than the predictions.",
    },
    {
      kind: "illustration",
      scenario: "A single flowchart that would not sit still.",
      walkthrough:
        "The problem: a team had built a decision tree for flagging risky orders, and every time they rebuilt it with a few more months of data the shape changed noticeably. Managers lost confidence, reasonably, because it looked arbitrary. What was happening: single trees are genuinely jumpy. Small changes in the history produce visibly different flowcharts even when the underlying reality has not moved.",
      result:
        "What changed: they switched to combining hundreds of them. The predictions became stable month to month, which restored confidence, and the accuracy improved as well. They kept one small readable tree alongside it purely to explain the general logic to new staff, which is a sensible way to have both.",
    },
    {
      kind: "illustration",
      scenario: "The field near the top that should not have been there.",
      walkthrough:
        "The problem: a model predicting which insurance claims would be disputed had one field ranked far above everything else, which was the name of the assessor handling the claim. What was happening: a BA asked why that would be. It was not that particular assessors cause disputes. It was that the two most senior assessors get given the difficult claims, so their name is effectively a label saying this one was already known to be tricky.",
      result:
        "What changed: they removed the field, because using it would have meant the model was partly just reading a decision somebody had already made. The accuracy dropped and the model became honest. When something unexpected ranks very high, the explanation is usually that it is standing in for something else, and it is worth ten minutes of asking why.",
    },
  ],

  learningPath: [
    {
      title: "Start from the same place as any prediction",
      body: "History with outcomes, only information available at the time, a clear definition of what you are predicting.",
      effort: "1-2 days",
      outcome: "The foundation, which is the same regardless of which approach you use.",
    },
    {
      title: "Build a simple version first",
      body: "One straightforward model, measured honestly. You need something to compare against or you cannot tell whether the forest was worth it.",
      effort: "1 day",
      outcome: "Your comparison point.",
    },
    {
      title: "Build the forest and compare",
      body: "Same data, same test cases from a later period. Compare in units the business understands rather than in technical scores.",
      effort: "1 day",
      outcome: "A number that says how much this actually bought you.",
    },
    {
      title: "Get the ranking of what mattered and read it",
      body: "Ask for the list of which information it leaned on most. Sit with somebody who knows the business and go through it.",
      effort: "2 hours",
      outcome: "Often the most valuable output of the whole exercise.",
    },
    {
      title: "Investigate anything unexpectedly high",
      body: "For any field near the top that surprises you, ask why. Check specifically whether it is standing in for something else, or whether it reflects a decision somebody already made.",
      effort: "Half a day",
      outcome: "Either a genuine insight or the discovery that your model is partly cheating.",
    },
    {
      title: "Decide whether you need to explain individual decisions",
      body: "If somebody has a right to know why, work out now what you would tell them. There are ways to approximate an explanation, and they are approximations.",
      effort: "A conversation",
      outcome: "A decision made before you commit rather than after somebody asks.",
    },
  ],

  exercises: [
    {
      title: "Read a ranking with somebody experienced",
      brief:
        "Get the list of what mattered from any model in your business and go through the top ten with somebody who has done the job for years. Note which they expected and which surprised them.",
      success:
        "At least one surprises them, and you can investigate whether it is real or standing in for something else.",
      time: "1 hour",
    },
    {
      title: "Check for a field that already knows the answer",
      brief:
        "Look at the top three fields in any model's ranking. For each, ask whether it reflects a decision or judgement somebody made after the point where you need the prediction.",
      success:
        "You can say for each whether it is legitimately available at the time, and you have found any that are not.",
      time: "45 minutes",
    },
    {
      title: "Test the crowd idea yourself",
      brief:
        "Ask ten colleagues to independently estimate something with a knowable answer, such as next month's order volume. Compare the average of their guesses against the best individual guess.",
      success:
        "You have seen the effect first hand, which makes explaining it to anybody else considerably easier.",
      time: "30 minutes",
    },
  ],

  caseStudy: {
    business:
      "A mid-sized bakery supplying supermarkets and cafes. Several product lines, three shifts, and a quality check on every batch before it leaves.",
    problem:
      "Batches fail quality control and nobody can predict which. A failed batch is thrown away, and worse, a batch that fails at the customer end triggers a complaint and a credit note. The production manager had a long-standing theory involving one particular oven, and the theory had never been tested.",
    analysis: [
      "Failure was uncommon, which matters enormously and shaped everything that followed. Most batches are fine, so anything that simply predicts fine every time looks excellent and is worthless.",
      "The recorded data was better than expected: flour supplier and batch, ambient temperature and humidity in the mixing room, proving time, oven number, shift, operator, and time since the last deep clean.",
      "Plotting failures against each single factor produced almost nothing. No one thing stood out. That is exactly the situation where a single simple rule fails and where combining many weak signals starts to earn its keep.",
      "The oven theory did not survive contact with the counting. That oven ran the most batches, so it had the most failures, and it was fine per batch. Correcting that took one afternoon and would have been worth doing even if the rest of the project had been abandoned.",
      "The real pattern was a combination. Certain flour batches were fine in normal conditions and marginal when the room was humid and the proving time ran at the short end. No single factor was the cause and no single factor could have found it.",
    ],
    aiApproach: [
      {
        step: "Use many small models rather than one",
        detail:
          "Instead of one big decision tree, build hundreds of small ones, each on a random slice of the history and a random subset of the factors, and let them vote. Each individual tree is mediocre. Their combined answer is markedly better, because their mistakes are different from one another and cancel out.",
      },
      {
        step: "Deal with the fact that failure is rare",
        detail:
          "Left alone it would learn to say pass every time and be right most of the time. The counting has to be weighted so that missing a failure costs it more than raising a false alarm, and that weighting is a business decision, not a technical one.",
      },
      {
        step: "Ask which factors it is leaning on",
        detail:
          "This approach will tell you which inputs are carrying the prediction. That ranking is a useful output in its own right, and it is what finally settled the oven argument with evidence rather than opinion.",
      },
      {
        step: "Judge it on the two numbers that matter",
        detail:
          "Of the batches it flags, how many really do fail? And of the failures, how many does it miss? Overall accuracy is meaningless when the thing you care about is rare, and quoting it is the fastest way to mislead a management meeting.",
      },
      {
        step: "Accept you cannot get a simple explanation out of it",
        detail:
          "Hundreds of trees voting cannot be printed on a card. That is the trade for the accuracy, and it is acceptable here because the output triggers an extra check rather than a decision anybody has to justify to a customer.",
      },
    ],
    solution: [
      "A risk flag on each batch as it goes into proving, while there is still time to do something.",
      "Flagged batches get an additional check before dispatch instead of the sampling regime.",
      "A weekly list of which conditions are driving the flags, which is what makes it actionable rather than just alarming.",
      "The humidity finding fed straight into a change in the mixing room that needed no model at all.",
    ],
    impact: [
      "Failures started being caught before dispatch rather than at the customer, which is the difference between waste and a complaint.",
      "The oven theory was settled, and the money earmarked for replacing it was not spent.",
      "The combination finding was something no amount of staring at spreadsheets would have produced, because no single column showed anything.",
      "Extra checking effort went to the batches that warranted it instead of being spread evenly across everything.",
    ],
    whatWouldHaveKilledIt:
      "Reporting accuracy. An early version was ninety-something percent accurate and caught almost no failures, because saying pass every time gets you ninety-something percent when failures are rare. Presented in a meeting without the other two numbers, that would have been declared a success and rolled out, and it would have done nothing whatsoever.",
  },

  mistakes: [
    {
      mistake: "Reading the ranking as cause and effect",
      why: "It tells you what was useful for predicting, not what drives the outcome. Acting on it as if it were causal produces changes that do nothing.",
      fix: "Treat every high-ranking field as a lead to investigate. Ask why it might be there before drawing any conclusion.",
    },
    {
      mistake: "Not noticing that a field already contains the answer",
      why: "Something like which team handled it, or what discount was applied, can reflect a judgement somebody already made. The model then looks impressive and is partly just reading that decision.",
      fix: "Check the top-ranked fields specifically for this. It shows up here more visibly than anywhere else.",
    },
    {
      mistake: "Choosing it without checking whether you need explanations",
      why: "You commit to something you cannot fully explain, and then discover that a regulator, a customer or a committee expects a reason.",
      fix: "Establish early who has a right to know why, and what they need to be told.",
    },
    {
      mistake: "Skipping the simple comparison",
      why: "Without it, nobody knows whether all this bought anything. It might have improved on a straightforward approach by a trivial amount.",
      fix: "Always build the simple version first and report the difference in business units.",
    },
    {
      mistake: "Expecting it to rescue poor information",
      why: "Combining hundreds of views of the same data does not create information that was never there. Teams sometimes reach for a more powerful method when the real problem is what they are feeding it.",
      fix: "If it is not working, spend the effort on better information rather than on a cleverer method.",
    },
  ],

  bestPractices: [
    "Build a simple version first as a comparison.",
    "Compare in units the business understands.",
    "Always ask for the ranking of what mattered and read it with somebody experienced.",
    "Investigate anything unexpectedly near the top.",
    "Check top fields for information that reflects a later decision.",
    "Treat the ranking as leads to investigate, never as causes.",
    "Establish whether individual decisions have to be explainable.",
    "Spend effort on better information before reaching for a cleverer method.",
  ],

  proTips: [
    "Ask for the ranking of what mattered even on projects you are not sure about. It takes almost no extra effort to produce and it is frequently the thing the business actually gets value from. I have seen the prediction quietly abandoned and the ranking start a piece of work that mattered far more.",
    "When somebody says the model is too complicated to explain, ask whether you need to explain every decision or just the general logic. Those are very different requirements. A small readable tree alongside the forest often satisfies the second at no cost, which keeps managers comfortable while the accurate thing does the work.",
    "Use the crowd analogy when explaining this to non-technical people and use a real example they can check. Ask the room to guess something, average the guesses, and show the result. It takes two minutes and it makes the whole idea intuitive in a way no diagram does.",
    "If two fields rank high and you suspect they are saying the same thing, try removing one and see whether performance changes. Frequently it barely moves, which tells you something useful about your data and simplifies what you have to collect going forward.",
  ],

  businessApplications: [
    "Predicting which customers are likely to leave, using ordinary account and usage data.",
    "Scoring which invoices, claims or applications need attention first.",
    "Estimating a number such as demand or cost, where the relationship is not a simple straight line.",
    "Finding out which pieces of information actually matter, as an investigation in its own right.",
    "Any problem where your data is a table of rows and columns and you want a solid first serious attempt.",
    "Situations where the model has to keep working with minimal maintenance.",
  ],

  checklist: [
    "History assembled with outcomes and no information from after the decision.",
    "Simple version built and measured as a comparison.",
    "Forest compared on cases from a later period, in business units.",
    "Ranking of what mattered obtained.",
    "Ranking read through with somebody who knows the business.",
    "Anything unexpectedly high investigated.",
    "Top fields checked for reflecting a later decision.",
    "Explainability requirement established with the business.",
  ],

  faqs: [
    {
      q: "How many of these small models do you need?",
      a: "Usually hundreds, and the exact number is not something the business needs to worry about. Past a certain point adding more stops helping. This is one of the parameters that genuinely does not need much thought.",
    },
    {
      q: "Is this better than a single decision tree?",
      a: "Almost always more accurate and much more stable. What you lose is the ability to print it and read it, which is sometimes a real cost and sometimes not. Decide that on whether anybody needs an explanation.",
    },
    {
      q: "Can we see why it made a particular decision?",
      a: "Roughly. There are ways to produce an approximate explanation for one case, and they are genuinely approximations rather than the real reasoning. If you need a precise reason you can defend, use something built to be readable.",
    },
    {
      q: "Does it need a lot of adjustment to work well?",
      a: "Much less than most alternatives, which is a large part of why it gets used so widely. It tends to give a reasonable answer with default settings, which makes it a good first serious attempt.",
    },
    {
      q: "Why does averaging lots of mediocre guesses work at all?",
      a: "Because the guesses are wrong in different directions, so the errors partly cancel while the thing they agree on survives. It only works if they are genuinely different, which is why the randomness is deliberate.",
    },
    {
      q: "Should we use this or a neural network?",
      a: "If your data is a table of rows and columns, start here. Neural networks are aimed at images, sound and language, where the information has structure a table cannot capture. For business tables they usually are not worth the extra effort.",
    },
  ],

  tools: [
    { name: "A simple model as comparison", what: "Without one, nobody can say whether the forest bought anything.", cost: "Free" },
    { name: "The ranking of what mattered", what: "Costs nothing extra and is frequently the most useful thing produced.", cost: "Free" },
    { name: "Somebody who knows the business", what: "To read the ranking with. They spot a nonsense entry in minutes.", cost: "Free" },
    { name: "One small readable tree alongside", what: "For explaining the general logic to managers and new staff while the forest does the work.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "decision-trees-for-business", anchor: "the single readable version this is built from", context: "Foundation" },
    { slug: "xgboost-for-everyday-business-data", anchor: "the other way of combining lots of models", context: "Alternative" },
    { slug: "choosing-the-right-model-for-the-job", anchor: "when to use this rather than something else", context: "Choosing" },
  ],

  relatedGuides: ["decision-trees-for-business", "xgboost-for-everyday-business-data", "choosing-the-right-model-for-the-job"],

  conclusion: [
    "Get the ranking of what mattered from any model your business already runs and read the top ten with somebody who has done the job for years. The entry that surprises them is the conversation worth having, and it takes an hour.",
  ],
};

export default guide;
