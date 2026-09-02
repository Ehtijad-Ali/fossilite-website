import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "predicting-a-number-with-regression",
  seoTitle: "Predicting a Number: How Much, How Many, How Long",
  metaDescription:
    "Regression in plain English. What it does, the business questions it answers, why it is usually the right place to start, and where it quietly goes wrong.",
  title: "Predicting a Number",
  keywords: [
    "regression business use cases",
    "linear regression explained simply",
    "predicting a number machine learning",
    "demand forecasting model",
    "price prediction model",
    "regression for business",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 16,

  brief: {
    inOneMinute:
      "When you are guessing a number for a customer, the guess has a shape. Past jobs tell you what each thing adds, and the estimate stops depending on who picked up the phone.",
    problem: {
      headline: "Half our jobs run over and the other half we price too high and lose",
      detail:
        "A removals firm. The quote is made in five minutes on the phone by whoever answers it, and nobody has ever checked those quotes against what actually happened.",
    },
    wrongApproach: {
      what: "Trust experience and quote from the gut",
      why: "Different people quote differently for the same job, and the low one was the person who had never done a removal. Nobody had spotted it because nobody was comparing quoted hours against real hours.",
    },
    rightApproach: {
      what: "Work out what each factor adds, from three years of finished jobs",
      why: "A baseline, plus so much per bedroom, plus so much for a second floor with no lift, plus so much for a long carry. It is arithmetic, it fits on a card, and reading the numbers changes how the phone call goes on day one.",
    },
    context: {
      where: "Quoting, estimating and scheduling in any job-based trade.",
      decision: "What to charge, how many people to send, and whether a second job fits that day.",
      metric: "How often jobs land inside the quoted hours.",
    },
    takeaway:
      "Half the value arrives before anything is automated: seeing that a long carry costs more time than an extra bedroom changes what you ask on the phone.",
  },

  story: {
    title: "From a five-minute guess to an estimate with a range",
    caption:
      "The estimate has to arrive while the customer is still on the phone. A number that appears after they hang up is worth nothing.",
    stages: [
      { stage: "Problem", label: "Quotes are a coin toss", detail: "Overruns get swallowed, overpriced jobs get lost, and nobody knows which way the business is leaning." },
      { stage: "Data", label: "Three years of jobs", detail: "Quoted hours and actual hours, plus bedrooms, floor level, lift, parking distance and what was being moved." },
      { stage: "Model", label: "What each thing adds", detail: "The simplest possible version. A baseline plus a weight for each factor, printable on a card." },
      { stage: "Prediction", label: "Hours, as a range", detail: "With the two biggest drivers shown beside it, so whoever is quoting can explain the number." },
      { stage: "Decision", label: "Price, crew size, and the day's plan", detail: "All three come off the same estimate, so a job no longer gets the wrong number of people." },
      { stage: "Result", label: "The worst overruns get caught while they can still be repriced", detail: "Rather than being discovered on the morning of the move." },
    ],
  },

  calculator: {
    title: "What are your quoting errors worth?",
    intro:
      "Estimating badly costs you twice: on the jobs that overrun, and on the ones you priced out of. Put in your own numbers and see the size of both.",
    inputs: [
      { id: "jobs", label: "Jobs quoted a month", min: 5, max: 500, step: 5, value: 50 },
      { id: "value", label: "Average job value", min: 100, max: 50000, step: 100, value: 900, prefix: "\u00a3" },
      { id: "over", label: "How many overrun", min: 0, max: 80, step: 1, value: 35, suffix: "%" },
      { id: "amount", label: "Typical overrun", min: 5, max: 100, step: 5, value: 25, suffix: "%", help: "How far past the quoted hours those jobs go." },
    ],
    compute: (v) => {
      const overJobs = v.jobs * (v.over / 100);
      const swallowed = overJobs * v.value * (v.amount / 100) * 12;
      // Estimating badly is symmetric: the same imprecision that overruns some
      // jobs prices you out of others, and that half is invisible in the accounts.
      const lostJobs = overJobs * 0.6;
      const lost = lostJobs * v.value * 12 * 0.25;
      return {
        outputs: [
          {
            label: "Swallowed on overrunning jobs, a year",
            value: `\u00a3${Math.round(swallowed).toLocaleString()}`,
            hero: true,
            tone: "bad",
            note: "Work you did and did not charge for.",
          },
          {
            label: "The half you cannot see",
            value: `About \u00a3${Math.round(lost).toLocaleString()}`,
            note: "Margin on jobs you priced too high and lost. It never appears in the accounts, which is why businesses only ever fix the overruns.",
          },
          {
            label: "Overrunning jobs a month",
            value: `${Math.round(overJobs)}`,
            note: overJobs > 12
              ? "Enough that the pattern will be readable. Sort last year's jobs by size of error and read the worst ten."
              : "Few enough that you can read every one of them individually, which is the better approach at this volume.",
          },
        ],
      };
    },
    footnote:
      "The lost-jobs figure is an estimate built on an assumption, not a measurement: that imprecise quoting misses in both directions at roughly similar rates. Treat it as an argument for looking, not as a number for a business case.",
  },

  intro: [
    "There is one kind of question that comes up constantly in business. How much will this cost. How long will this take. How many will we sell. How much is this house worth. All of them want a number back.",
    "The tool for that is called regression, which is an unhelpful name for something quite simple. It looks at lots of past examples where you know both the details and the answer, works out how the details relate to the answer, and then gives you an answer for something new.",
    "Think of an experienced estimator in a building firm. They have seen four hundred jobs. They know that a bigger floor area means more money, that certain postcodes are more expensive, that jobs in winter take longer. When a new job comes in, they combine all of that and give you a figure. Regression is a machine doing the same thing, with more examples and less memory of the awkward ones.",
  ],

  whyItMatters: [
    "This is the most common shape of business prediction and the most underrated. A lot of teams reach for something complicated when what they need is a number, and a straightforward approach would have got them most of the way in a fraction of the time.",
    "It is also the easiest kind to explain to people who have to use it. You can show somebody which things pushed the number up and which pushed it down, in words they recognise, which is a large part of whether anybody trusts it.",
    "And it gives you something to compare against. Even when you eventually use something more powerful, you want to know how much better it actually is than the simple version, and this is the simple version.",
  ],

  coreConcepts: [
    {
      term: "It answers how much, not whether",
      explain:
        "Use this when the answer you want is a quantity. Pounds, days, units, minutes, percentage. If the answer you want is yes or no, or which category, that is a different tool.",
      detail:
        "That distinction sounds trivial and it decides everything downstream, including how you check whether the thing is any good.",
    },
    {
      term: "It works out how much each thing matters",
      explain:
        "Given enough past jobs, it works out roughly how much an extra square metre adds, how much a particular region adds, how much being in December adds. Then it adds them all up for the new one.",
      detail:
        "That is genuinely most of what is happening. It is not magic and it is not thinking. It is finding the combination of weightings that would have got the past answers closest to right.",
    },
    {
      term: "You get an answer plus a spread",
      explain:
        "The single number is only half of it. You also want to know how far out it typically is. Fourteen days, give or take three, is a completely different thing to plan around than fourteen days, give or take twelve.",
      detail:
        "Always ask for the typical error alongside the prediction. Most people give you the number and stop, and the spread is what tells you whether it is safe to act on.",
    },
    {
      term: "It assumes tomorrow looks like yesterday",
      explain:
        "It learned from your history. If something fundamental changes, a new supplier, a new market, a new pricing structure, the relationships it learned may no longer hold.",
      detail:
        "This is why anything predicting money needs watching. The relationship between size and cost was true last year and might not be true after a supplier change nobody told the model about.",
    },
    {
      term: "Two things moving together is not proof one causes the other",
      explain:
        "It will happily learn that jobs quoted by one particular salesperson cost more. That does not mean the salesperson causes the cost. They might just handle the difficult jobs.",
      detail:
        "This matters when somebody wants to act on what the model found. Using it to predict is fine. Using it to conclude that we should stop that salesperson quoting is a leap it cannot support.",
    },
    {
      term: "Straight lines and bendy ones",
      explain:
        "The simplest version assumes that doubling something doubles its effect. Real life is often not like that. The first hundred customers cost more each to serve than the next thousand.",
      detail:
        "You do not need to know how this is handled technically. You need to know it is a question worth asking, because a model assuming a straight line where reality bends will be reliably wrong at the extremes.",
    },
    {
      term: "The extremes are where it lets you down",
      explain:
        "It is at its best in the middle of what it has seen. Ask it about a job ten times bigger than anything in its history and it will still give you a confident number, and that number will be a guess dressed up.",
      detail:
        "Always ask what the biggest and smallest examples in the history were. Anything outside that range should be flagged for a person to look at rather than answered automatically.",
    },
    {
      term: "You can see what drove the answer",
      explain:
        "One of the best things about this approach is that you can show somebody why. This job came out at a certain figure because of the size, the region and the time of year, and here is roughly how much each contributed.",
      detail:
        "That is worth a lot in a business setting. People act on numbers they can interrogate and quietly ignore numbers that arrive with no explanation.",
    },
    {
      term: "Start here even when you will not finish here",
      explain:
        "It takes very little time to build a simple version and it gives you an honest baseline. If something more sophisticated only improves on it slightly, that tells you something important.",
      detail:
        "This is the single most useful habit in this area. Anybody proposing a complicated approach should have to say how much better it is than the simple one, and somebody has to build the simple one for that to be possible.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The removals firm: pricing a job with the two questions nobody was asking",
      caption:
        "The whole gain here came from two lines added to a phone script. The modelling was ordinary. Finding out which two questions to ask was not.",
      trigger: "A survey is booked, before the quote is sent",
      runtime: "Instant, inside the quoting screen the estimator already uses.",
      stages: [
        {
          actor: "system",
          label: "Pull what the surveyor has already typed",
          output: "volume, distance, and the property details",
        },
        {
          actor: "rule",
          label: "Ask which floor, and how far from the door to the van",
          detail: "Two questions added to the script. The overruns were never random; they sat almost entirely on upper floors and long carries.",
          output: "the two facts that explain most of the difference",
        },
        {
          actor: "model",
          label: "Predict the hours, not just the price",
          detail: "Hours are what actually overrun. Price is what happens to hours afterwards.",
          output: "an estimate, with a range either side of it",
        },
        {
          actor: "person",
          label: "The estimator sees the range and the three most similar past jobs",
          detail: "A number on its own gets argued with. Three comparable jobs do not.",
          exception: "No close match in the whole history means a survey in person, rather than a confident figure produced from nothing like it.",
          output: "a price he can stand behind",
        },
        {
          actor: "system",
          label: "Record the actual hours against the estimate",
          detail: "Quoted against actual, every time, including the ones that went fine.",
        },
      ],
      loop: "Every completed job narrows the range on the next one like it.",
      outcome:
        "Overruns stop being bad luck the firm swallows and become a known, quotable surcharge on access.",
    },
    {
      kind: "flow",
      title: "The removals firm: from a five-minute phone guess to an estimate with a range",
      caption:
        "The estimate goes back into the same phone call it came from. A number that arrives after the customer has hung up is worth nothing.",
      steps: [
        { label: "Three years of jobs", note: "Quoted hours and actual hours", tone: "input" },
        { label: "What made them differ", note: "Floor, lift, carry distance, piano" },
        { label: "Work out what each adds", note: "A baseline plus so much per thing", tone: "model" },
        { label: "Ask those things on the call", note: "In the order that matters most" },
        { label: "Hours as a range, live", note: "Plus the two biggest drivers", tone: "output" },
      ],
    },
    {
      kind: "scatter",
      lesson: {
        problem: "Half our removals run over and we swallow the difference. Which ones, and why?",
        wrong: {
          label: "Quoted against actual",
          why: "A cloud of jobs, some over and some under. It looks like ordinary noise, which is exactly why the business concluded that estimating is just hard and left it there.",
        },
        right: {
          label: "Split by access",
          why: "The same jobs, separated by whether there was a lift and how far the carry was. The overruns are not scattered at all. They sit almost entirely in one group.",
        },
        discovery: "The overruns cluster on upper floors and long carries, which is something the person quoting on the phone was never told to ask about.",
        decisions: [
          { tone: "protect", label: "Ground floor jobs, quote as now" },
          { tone: "monitor", label: "Anything above the first floor" },
          { tone: "investigate", label: "Jobs with a long carry" },
        ],
        takeaway: "If the error looks random, you have not found the column that explains it yet.",
      },
      naive: {
        groups: [
          {
            name: "All jobs",
            points: [[12, 14], [20, 19], [26, 28], [34, 33], [42, 44], [50, 48], [58, 60], [66, 64], [74, 76], [30, 31], [46, 45], [62, 63], [16, 34], [24, 46], [32, 55], [40, 66], [48, 74], [22, 41], [36, 62], [28, 50], [44, 70], [18, 38]],
          },
        ],
      },
      title: "Why the overruns were not random",
      caption:
        "Each dot is a past job. Anything above the diagonal took longer than quoted. The overruns cluster rather than scatter, and that clustering is what made the problem fixable.",
      xLabel: "hours quoted",
      yLabel: "hours actually taken",
      groups: [
        {
          name: "Ground floor, close parking",
          points: [[12, 14], [20, 19], [26, 28], [34, 33], [42, 44], [50, 48], [58, 60], [66, 64], [74, 76], [30, 31], [46, 45], [62, 63]],
        },
        {
          name: "Upper floor or long carry",
          points: [[16, 34], [24, 46], [32, 55], [40, 66], [48, 74], [22, 41], [36, 62], [28, 50], [44, 70], [18, 38]],
        },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The quote that took three days and now takes a minute.",
      walkthrough:
        "The problem: a commercial cleaning business took two or three days to quote a new contract, because the estimate depended on one experienced manager visiting the site. He was the bottleneck for every new piece of business. What was happening: they had eight years of contracts recorded with floor area, building type, number of floors, region, hours per week and the final price. The relationship turned out to be fairly strong.",
      result:
        "What changed: sales staff can now produce an indicative price in the first phone call, with a note saying it is indicative and a range around it. The manager still visits for anything unusual or over a certain size. Quoting time dropped from days to minutes for the ordinary cases, and he got most of his week back for the ones that actually need judgement.",
    },
    {
      kind: "illustration",
      scenario: "Confidently wrong about the biggest job of the year.",
      walkthrough:
        "The problem: a fabrication business used a model to estimate build hours, and it was accurate enough that people had stopped checking it. What was happening: a job came in roughly four times bigger than anything they had ever done. The model gave a number, the number went into the quote, and the job took far longer than that. Looking back, the largest job in the history it had learned from was a quarter of the size.",
      result:
        "What changed: they added a simple check. Anything outside the range of what the model has seen before gets flagged and goes to a person. That took an afternoon to add. The model was not really wrong so much as being asked a question it had no basis for answering, and it had no way of saying so.",
    },
    {
      kind: "illustration",
      scenario: "The number nobody could argue with, and nobody trusted.",
      walkthrough:
        "The problem: a logistics team built something to predict delivery times and put the number on the planner's screen. Planners kept overriding it. What was happening: when asked why, they said they had no idea where it came from and their own experience said otherwise. The model was actually more accurate than they were on average, and it did not matter.",
      result:
        "What changed: they added three lines under the number saying what pushed it up or down. Distance, the drop count, and the time of day. Overrides dropped sharply, and the ones that remained turned out to be genuinely useful, because the planners knew things about specific customers the model did not. Showing why is not decoration. It is what turns a prediction into something people use.",
    },
  ],

  learningPath: [
    {
      title: "Write down exactly what number you want",
      body: "The unit and the moment. Cost in pounds, at the point of quoting. Days from order to delivery. Be specific about when you need it, because that decides what information you can use.",
      effort: "30 minutes",
      outcome: "A clear target, which is more than half the work.",
    },
    {
      title: "Find the history",
      body: "Past cases with both the details and the final answer. You want hundreds at least. Check how far back the records are consistent, because a change of system or process part way through causes trouble.",
      effort: "1-2 days",
      outcome: "A realistic view of whether you have enough to work with.",
    },
    {
      title: "List what somebody experienced would look at",
      body: "Sit with the person who currently estimates this and write down everything they consider. That list is your starting point for what information to feed in.",
      effort: "2 hours",
      outcome: "A far better starting point than guessing, and a person who now has a stake in it.",
    },
    {
      title: "Check every item is known at the time",
      body: "Go through your list and cross off anything you would not have when the prediction is needed. This step catches the most common and most embarrassing mistake.",
      effort: "1 hour",
      outcome: "An honest model rather than one that looks brilliant and fails in use.",
    },
    {
      title: "Build the simple version and measure how far out it is",
      body: "Typical error in the units the business cares about. Not a technical score. How many days out, on average, and how bad the worst cases are.",
      effort: "1-2 days",
      outcome: "A number the business can judge, and the comparison point for anything fancier.",
    },
    {
      title: "Add the explanation and the range",
      body: "Show what drove the answer and how far out it typically is. Both matter more than another point of accuracy for whether people use it.",
      effort: "1 day",
      outcome: "Something people will actually act on.",
    },
    {
      title: "Flag anything outside what it has seen",
      body: "Work out the smallest and largest examples in the history and send anything beyond that to a person.",
      effort: "Half a day",
      outcome: "Protection against the failure that costs the most.",
    },
  ],

  exercises: [
    {
      title: "Ask what the estimator looks at",
      brief:
        "Find whoever estimates something in your business by hand. Ask them to talk you through the last three, out loud, and write down every factor they mention. Count how many of those are recorded anywhere.",
      success:
        "You have a list of factors, and you know what share of them exist in a system versus living in that person's head.",
      time: "2 hours",
    },
    {
      title: "Measure the human baseline",
      brief:
        "Take fifty past cases where somebody estimated a number and you know what actually happened. Work out how far out the human estimates typically were.",
      success:
        "You have a figure that any model has to beat, and often it is better than people assume.",
      time: "Half a day",
    },
    {
      title: "Find the edges",
      brief:
        "For any prediction your business already uses, find the smallest and largest cases in the history it learned from. Then check how many recent cases fall outside that range.",
      success:
        "You can say what proportion of live cases the model has no real basis for, which is usually a surprise.",
      time: "1 hour",
    },
  ],

  caseStudy: {
    business:
      "A domestic removals firm. Two lorries, a van, six staff, around six hundred house moves a year across one county.",
    problem:
      "The owner's version: half our jobs run over and we swallow the difference, and the other half we have quoted too high and lost to somebody cheaper. The quote is a guess made in five minutes on the phone by whoever picks it up.",
    analysis: [
      "This is a predicting-a-number problem and the number is hours on site. Everything else follows from it: the price, the crew size, whether a second job fits the same day.",
      "The first useful finding arrived before any modelling. Different people quoted differently for the same job, and one of them was consistently low. It was the person who had never actually done a removal.",
      "Three years of jobs sat in the diary and the invoices. For each: quoted hours, actual hours, bedrooms, floor level, lift or no lift, carrying distance from the parking, packing included or not, distance between properties, and the month.",
      "Plot actual against quoted and the pattern is immediate. The overruns are not random. They cluster on flats above the first floor, on long carries from the van, and on anything involving a piano or a large appliance.",
      "None of that surprised the crews. All of it was missing from the quoting call, because the person on the phone did not know to ask.",
      "Ruled out: that the crews were slow. Their hours per box were steady across the three years. The estimate was wrong, not the work.",
    ],
    aiApproach: [
      {
        step: "Pick the number and check it is honestly recorded",
        detail:
          "Hours on site, from the timesheets. Not an invented productivity score. If the thing you want to predict is not already recorded truthfully, fix that first and come back in three months.",
      },
      {
        step: "Start with the version that is just arithmetic",
        detail:
          "The simplest form works out what each thing adds. A baseline, plus so much per bedroom, plus so much for a second floor with no lift, plus so much for a long carry. You can print it on a card, and for a business this size that alone would have been worth the exercise.",
      },
      {
        step: "Read the weights, because that is half the value",
        detail:
          "The numbers it produces are themselves the finding. Seeing that a long carry adds more time than an extra bedroom changes how the phone call goes, and it does that on day one whether or not anything ever gets automated.",
      },
      {
        step: "Test it against the quotes you actually gave",
        detail:
          "Run it over last year and compare its estimate against both the quote and the real hours. The bar is not perfection. The bar is whether it lands closer, more often, than the person on the phone.",
      },
      {
        step: "Read the misses, not the average",
        detail:
          "A small average error hides a handful of jobs that were out by most of a day. Sort by size of error and read the worst ten. Here they were all the same thing: customers who had underdescribed what they owned.",
      },
    ],
    solution: [
      "A short set of questions on the enquiry call, asked in the order the analysis said mattered most.",
      "An estimate of hours produced while the call is still happening, given as a range rather than a single figure.",
      "The two biggest drivers displayed next to it, so whoever is quoting can say why it is what it is.",
      "A flag when the answers resemble the jobs that historically went badly, which triggers a video walkthrough before any price is given.",
      "Actual hours fed back weekly, which is the part that keeps it honest as the business changes.",
    ],
    impact: [
      "Quoting stopped depending on who answered the phone, which was the largest single source of variation and nobody had spotted it.",
      "Crews stopped arriving at jobs in the wrong number, because crew size came off the same estimate.",
      "The worst overruns moved from being discovered on the day to being flagged while the job could still be repriced.",
      "The owner finally had a real answer to whether the business was underpricing, instead of a feeling formed by the jobs that went badly.",
    ],
    whatWouldHaveKilledIt:
      "Hiding the estimate inside something nobody can explain. The person quoting has to justify a number to a customer standing in front of them, and a figure they cannot defend is a figure they will override within a fortnight. It would also have failed if the timesheets had been optimistic, which they usually are when they feed a bonus. It learns whatever the records say, fiction included.",
  },

  mistakes: [
    {
      mistake: "Giving a number with no sense of the spread",
      why: "Fourteen days sounds precise. Fourteen days give or take twelve is a different planning problem entirely, and the person receiving it cannot tell which they have.",
      fix: "Always present the typical error alongside the number, in the units the business uses.",
    },
    {
      mistake: "Trusting it outside what it has seen",
      why: "It will produce a confident number for a case four times bigger than anything in its history, and that number is a guess with no basis.",
      fix: "Work out the range of the history and route anything beyond it to a person automatically.",
    },
    {
      mistake: "Treating what it found as cause and effect",
      why: "It learns which things go together, not which things cause which. Acting on that as if it were causal leads to changes that do nothing or make things worse.",
      fix: "Use it to predict. When somebody wants to change something based on what it found, that needs separate evidence.",
    },
    {
      mistake: "Not showing why",
      why: "People override numbers they cannot interrogate. You end up with something more accurate than the humans that nobody uses.",
      fix: "Show the two or three biggest factors behind each answer, in business language.",
    },
    {
      mistake: "Skipping the simple version",
      why: "Without it, nobody knows whether the complicated thing was worth building. Any accuracy figure sounds impressive on its own.",
      fix: "Build the straightforward version first and make everything else beat it by a stated margin.",
    },
    {
      mistake: "Letting it run unchecked after a business change",
      why: "It learned relationships from a world that has since changed. A new supplier, a new price list or a new process can quietly break it while it keeps producing confident numbers.",
      fix: "Check how far out it is every month, and check it deliberately whenever something significant changes.",
    },
  ],

  bestPractices: [
    "Be specific about the unit and the moment you need the number.",
    "Ask whoever estimates it now what they look at.",
    "Only use information available at the moment of prediction.",
    "Measure how far out it is in units the business understands.",
    "Always present a range alongside the number.",
    "Show the two or three biggest factors behind each answer.",
    "Flag anything outside the range of the history.",
    "Build the simple version first and make everything else beat it.",
    "Recheck after any significant business change.",
  ],

  proTips: [
    "Ask what the person doing this by hand gets wrong, and in which direction. Most human estimators are consistently out one way, usually optimistic, and knowing that tells you both what good looks like and how much room there is to improve.",
    "When somebody presents an accuracy figure, ask for the worst cases rather than the average. The average hides the ones that hurt, and in most businesses it is the handful of badly wrong estimates that cost real money rather than the general level of precision.",
    "Ask what would happen if the number were simply the average of the last twenty similar jobs. Sometimes that gets you surprisingly close, and knowing that changes the conversation about whether anything more is worth building.",
    "Watch out for a factor that is really a proxy for something else. If quotes from one office come out higher, find out why before treating it as a real effect. Usually that office handles a different kind of work, and the model has learned the wrong lesson from a true pattern.",
  ],

  businessApplications: [
    "Quoting and estimating, where the goal is a price or an amount of work.",
    "Predicting how long something will take, for planning and for telling customers.",
    "Forecasting demand for a product or a service.",
    "Estimating the value of an asset, a property or a piece of stock.",
    "Predicting how much a customer is likely to spend over time.",
    "Working out how many people you will need, given known volumes.",
  ],

  checklist: [
    "The unit and the moment of prediction written down.",
    "Enough past cases found, with the final answer recorded.",
    "History checked for a point where the process or system changed.",
    "Factors listed by whoever estimates it today.",
    "Every factor checked for being known at the time.",
    "Simple version built and measured in business units.",
    "Typical error presented alongside every number.",
    "The main factors behind each answer shown.",
    "Range of the history established, with anything beyond it flagged.",
    "A monthly check on how far out it is.",
  ],

  faqs: [
    {
      q: "Is this the same as the trend line in a spreadsheet?",
      a: "The simplest version is essentially that idea with more factors. That is genuinely useful to know, because it means you can often try something meaningful in a spreadsheet before anybody writes any code.",
    },
    {
      q: "How accurate should we expect it to be?",
      a: "Compare it against the person doing it now rather than against perfection. If your estimator is typically twenty per cent out and the model is twelve, that is a real improvement even though twelve sounds unimpressive on its own.",
    },
    {
      q: "What if we only have a couple of hundred past cases?",
      a: "You can still try, and be careful about reading too much into it. With small amounts of history, keep the number of factors small too, and check it against cases it has never seen before believing any of it.",
    },
    {
      q: "Can it tell us what to change to get a better outcome?",
      a: "Not reliably. It finds things that go together, which is not the same as things that cause each other. Use it to predict, and treat any change it seems to suggest as a theory that needs testing separately.",
    },
    {
      q: "When should we move to something more sophisticated?",
      a: "When the simple version is not good enough for the decision and you can say by how much. If a more powerful approach improves things by a small margin and costs far more to run and explain, the simple one usually wins on balance.",
    },
    {
      q: "What if the thing we predict is influenced by our own actions?",
      a: "Then be careful. If you quote high on jobs you expect to be difficult, and difficult jobs then cost more, the model learns from a world your own behaviour shaped. That is worth flagging out loud, because it makes the history less reliable than it looks.",
    },
  ],

  tools: [
    { name: "A spreadsheet", what: "Genuinely enough to try the idea on a few hundred rows before anybody builds anything.", cost: "Varies" },
    { name: "Your existing estimator's checklist", what: "What an experienced person looks at. A far better starting point than guessing.", cost: "Free" },
    { name: "A held-back set of past cases", what: "Cases the model never saw, used to check it honestly rather than on the ones it learned from.", cost: "Free" },
    { name: "A monthly check on how far out it is", what: "The thing that catches it quietly breaking after a business change.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "framing-a-business-problem-as-a-prediction", anchor: "checking this is a prediction problem at all", context: "Before building" },
    { slug: "knowing-if-a-model-is-any-good", anchor: "working out whether it is accurate enough", context: "Checking it" },
    { slug: "choosing-the-right-model-for-the-job", anchor: "when a different kind would suit better", context: "Alternatives" },
  ],

  relatedGuides: ["framing-a-business-problem-as-a-prediction", "knowing-if-a-model-is-any-good", "choosing-the-right-model-for-the-job"],

  conclusion: [
    "Take something your business estimates by hand and work out how far out those estimates typically are, using fifty past cases. That number is what any model would have to beat, almost nobody has measured it, and it takes an afternoon.",
  ],
};

export default guide;
