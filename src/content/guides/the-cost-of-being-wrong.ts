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
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  brief: {
    inOneMinute:
      "There are two ways to be wrong and they almost never cost the same. Set the threshold from what each mistake costs, not from being right as often as possible.",
    problem: {
      headline: "We want to fix boilers before the customer is cold",
      detail:
        "A heating firm with 4,000 annual cover plans. The technical question was easy; nobody had asked what each kind of mistake costs.",
    },
    wrongApproach: {
      what: "Tune it to be right as often as possible",
      why: "That setting sends almost nobody, because failures are uncommon, and it gets defended with a good-looking accuracy figure while delivering nothing at all.",
    },
    rightApproach: {
      what: "Price both mistakes, then deliberately over-call",
      why: "An unnecessary visit costs a visit. A missed failure in January costs an emergency callout, an unhappy customer, and often the renewal. When the second is several times the first, the right threshold is far lower than the balanced one.",
    },
    context: {
      where: "Maintenance, fraud, safety, credit, quality. Anywhere the two errors differ.",
      decision: "Where to set the line, and whether it should move with the season.",
      metric: "Money. Visits made, failures avoided, failures missed, all in pounds.",
    },
    takeaway:
      "Reducing the cost of a mistake is an alternative to predicting better, and it is usually cheaper. Bundling proactive visits with the annual service made false alarms cheap enough to lower the threshold further.",
  },

  story: {
    title: "Setting the threshold from money rather than accuracy",
    caption:
      "The biggest term was the renewal effect, which lived in nobody's system. A rough estimate of the largest cost beats a precise treatment that leaves it out.",
    stages: [
      { stage: "Problem", label: "Cold customers in January", detail: "And an emergency callout rate that makes the whole cover plan look marginal." },
      { stage: "Data", label: "Two costs, agreed with operations", detail: "What a planned visit costs, and what a failure costs including out-of-hours rates." },
      { stage: "Model", label: "A failure risk per boiler", detail: "Refreshed monthly. The easy part, and not where the value is." },
      { stage: "Prediction", label: "A threshold set from the costs", detail: "Deliberately over-calling. It will look worse on accuracy while being worth considerably more." },
      { stage: "Decision", label: "Lower in winter, higher in July", detail: "Because the cost of a missed failure is not constant, so the line should not be either." },
      { stage: "Result", label: "Reported in pounds, not percentages", detail: "Which keeps the operations meeting talking about the business rather than about the model." },
    ],
  },

  calculator: {
    title: "Where should your threshold sit?",
    intro:
      "Put in what each kind of mistake costs you. The curve shows total cost as the system gets more willing to call something out, and the marker is where your two costs put the best setting.",
    inputs: [
      { id: "cheap", label: "Cost of a false alarm", min: 10, max: 500, step: 10, value: 90, prefix: "\u00a3", help: "An unnecessary visit, check or call." },
      { id: "costly", label: "Cost of missing one", min: 50, max: 5000, step: 50, value: 950, prefix: "\u00a3", help: "The emergency, the complaint, the lost customer." },
      { id: "events", label: "How many happen a year", min: 5, max: 1000, step: 5, value: 120 },
    ],
    compute: (v) => {
      const ratio = v.costly / v.cheap;
      // With one error k times dearer than the other, the balance point is not
      // 50/50. It sits at 1/(1+k), which is why a cost-aware setting deliberately
      // over-calls and scores worse on plain accuracy.
      const best = 1 / (1 + ratio);
      const pts: [number, number][] = [];
      for (let i = 0; i <= 100; i += 2) {
        const th = Math.max(0.02, i / 100);
        // Loosening the threshold trades missed events for false alarms.
        const missed = v.events * th;
        const alarms = v.events * (1 / th - 1) * 0.5;
        pts.push([i, missed * v.costly + alarms * v.cheap]);
      }
      const max = Math.max(...pts.map((p) => p[1])) || 1;
      const scaled = pts.map((p) => [p[0], (p[1] / max) * 100] as [number, number]);
      const bx = best * 100;
      const near = scaled.reduce((a, b) => (Math.abs(b[0] - bx) < Math.abs(a[0] - bx) ? b : a));
      const naive = v.events * 0.5 * v.costly + v.events * 0.5 * v.cheap;
      const tuned = v.events * best * v.costly + v.events * (1 / Math.max(best, 0.02) - 1) * 0.5 * v.cheap;
      return {
        outputs: [
          {
            label: "Missing one costs this much more",
            value: `${ratio.toFixed(1)}x a false alarm`,
            hero: true,
            tone: ratio > 3 ? "bad" : "neutral",
            note: ratio > 3
              ? "Well out of balance. Tuning this to be right as often as possible would be an expensive mistake."
              : "Fairly close to balanced, so a conventional setting is defensible here.",
          },
          {
            label: "Roughly where the line should sit",
            value: `Flag anything above ${(best * 100).toFixed(0)}% risk`,
            note: "Deliberately lower than the setting that maximises being right. It will look worse on accuracy and be worth more.",
          },
          {
            label: "Against a balanced setting",
            value: naive > tuned ? `About \u00a3${Math.round(naive - tuned).toLocaleString()} a year` : "Little to gain",
            tone: naive > tuned ? "good" : "neutral",
            note: "Very rough, and it moves a lot with your two costs. Treat it as an order of magnitude.",
          },
        ],
        plot: {
          xLabel: "more willing to call it out",
          yLabel: "total cost",
          points: scaled,
          marker: near,
          markerLabel: "your best setting",
        },
      };
    },
    footnote:
      "A simplified model, deliberately. It assumes loosening the threshold trades missed events for false alarms at a steady rate, which real systems only roughly do. The point is the direction and the size of the gap, not the third decimal place.",
  },

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

  diagrams: [
    {
      kind: "workflow",
      title: "The heating contractor: the winter round, and why it deliberately over-calls",
      caption:
        "Step three is the one that makes this work, and it is not a modelling step. Once a wasted visit and a January failure have prices on them, the threshold stops being a technical setting and becomes a business one.",
      trigger: "The first Monday of the month, through the winter",
      runtime: "Runs overnight. The list is on the scheduler's screen at eight.",
      stages: [
        {
          actor: "system",
          label: "Pull the service history for every boiler on contract",
          detail: "Age, model, parts fitted, when it was last seen and what was found.",
          output: "one row per boiler, and there are several thousand",
        },
        {
          actor: "model",
          label: "Score the chance of a failure in the next sixty days",
          output: "a likelihood for each boiler",
          exception: "A model with too little history behind it, or a contract only weeks old, stays on the ordinary service cycle rather than being guessed at.",
        },
        {
          actor: "rule",
          label: "Set the threshold from what each mistake costs",
          detail: "A planned visit has a known price. An emergency callout in January costs several times that, and it puts the renewal at risk.",
          output: "a threshold that sends engineers out more often than accuracy would",
        },
        {
          actor: "person",
          label: "The scheduler bundles flagged jobs into rounds already going that way",
          detail: "A visit that adds no travel changes the sum completely, and no model can see the map in her head.",
          output: "a week of routes, rather than a list of alarms",
        },
        {
          actor: "system",
          label: "Record which visits found something and which found nothing",
          detail: "The ones that found nothing are the price of the ones that did. They are not failures.",
        },
      ],
      loop: "Both costs are reviewed each spring, and the threshold moves with them rather than staying where it was set on day one.",
      outcome:
        "The system scores worse on accuracy than one tuned to be right as often as possible, on purpose, and it is worth considerably more.",
    },
    {
      kind: "matrix",
      lesson: {
        problem: "Send an engineer to a boiler that was fine, or miss one that fails in January?",
        wrong: {
          label: "Treat both errors alike",
          why: "Tune it to be right as often as possible and it quietly treats these two boxes as equally bad. Because failures are uncommon, it learns to send almost nobody.",
        },
        right: {
          label: "Price each error",
          why: "A planned visit has a known cost. An emergency callout in January costs several times that, plus a renewal. Once those two numbers exist, the threshold sets itself.",
        },
        discovery: "When one error costs several times the other, the right setting deliberately over-calls. It scores worse on accuracy and is worth considerably more.",
        decisions: [
          { tone: "protect", label: "Lower the threshold in winter" },
          { tone: "monitor", label: "Cost per unnecessary visit" },
          { tone: "investigate", label: "Bundle visits with the annual service" },
        ],
        takeaway: "Being wrong in the cheap direction is not a failure. It is the plan.",
      },
      title: "Two ways to be wrong, and they are nowhere near the same size",
      caption:
        "Tuned to be right as often as possible, a system treats these two boxes as equal. They are not. The bottom-left costs a visit; the top-right costs an emergency callout in January and sometimes the customer.",
      rowLabel: "what the boiler did",
      colLabel: "what we predicted",
      rows: ["It failed", "It was fine"],
      cols: ["Sent an engineer", "Sent nobody"],
      cells: [
        { label: "Caught before the customer was cold", note: "A planned visit at a known cost", tone: "good" },
        { label: "Emergency callout", note: "Out-of-hours rate, and a renewal at risk", tone: "bad" },
        { label: "An unnecessary visit", note: "Cheap, and cheaper still if bundled with the annual service", tone: "bad" },
        { label: "Correctly left alone", note: "No cost at all", tone: "good" },
      ],
    },
    {
      kind: "flow",
      title: "The boiler cover firm: setting the threshold from money, not from accuracy",
      caption:
        "Reducing the cost of a mistake is an alternative to predicting better, and it is usually cheaper. Bundling proactive visits with scheduled services made false alarms cheap enough to lower the threshold further.",
      steps: [
        { label: "Price both mistakes, in money", note: "Agreed with the people who carry the consequence", tone: "input" },
        { label: "Add the cost that is not in the accounts", note: "The renewal effect was the biggest term" },
        { label: "Set the threshold from the costs", note: "Deliberately over-call. It will look worse on accuracy.", tone: "model" },
        { label: "Let it move with the season", note: "Lower in winter, higher in July" },
        { label: "Report in pounds, not percentages", note: "Keeps the meeting about the business", tone: "output" },
      ],
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

  caseStudy: {
    business:
      "A domestic heating firm servicing and repairing boilers under annual cover plans. About four thousand plans on the books.",
    problem:
      "Predict which boilers will fail so an engineer can be sent before the customer is cold. The technical question was easy. The question nobody had asked was what each kind of mistake costs, and the two mistakes here are wildly unequal.",
    analysis: [
      "Two ways to be wrong. Send an engineer to a boiler that was fine, which costs a visit. Or fail to send one and have the boiler fail, which costs an emergency callout, an unhappy customer, and in January a customer who leaves.",
      "Those are not remotely the same size, and any system tuned to be right as often as possible will treat them as though they are. That is the entire point of this case.",
      "The costs were worked out with the operations manager rather than estimated. A planned visit has a known cost. An emergency callout in winter has a much higher known cost, including out-of-hours rates.",
      "Then the part that does not appear in the accounts. A failure during a cold snap has a materially higher chance of the customer not renewing. That is the largest cost in the whole picture and it was not in any system.",
      "The asymmetry also moves with the season. A failure in July is an inconvenience. The same failure in January is a different event entirely, and a single fixed threshold across the year ignores that.",
    ],
    aiApproach: [
      {
        step: "Price both mistakes before tuning anything",
        detail:
          "Write down what an unnecessary visit costs and what a missed failure costs, in money, agreed with the people who carry the consequence. Until those two numbers exist there is no basis for setting any threshold, and the default is to treat them as equal, which is always wrong.",
      },
      {
        step: "Set the threshold from the costs, not the accuracy",
        detail:
          "When missing a failure costs several times an unnecessary visit, the correct threshold is far lower than the one that maximises being right. The system should deliberately over-call, and it will look worse on accuracy while being worth considerably more.",
      },
      {
        step: "Let the threshold move with the season",
        detail:
          "The cost of a missed failure is not constant, so the threshold should not be either. Lower in winter, higher in summer. This is a small change and it captures a large part of the available value.",
      },
      {
        step: "Include the cost that is not in the accounts",
        detail:
          "The renewal effect was the biggest single term and it lived in nobody system. Estimating it roughly and including it beats leaving it out because it cannot be measured precisely.",
      },
      {
        step: "Report in money, not in percentages",
        detail:
          "The review question is what this saved and what it cost, both in pounds. Reporting precision and recall to an operations meeting invites a discussion about the model rather than about the business.",
      },
    ],
    solution: [
      "A failure risk score per boiler, refreshed monthly.",
      "A threshold set from the two costs rather than from accuracy, deliberately generating more visits than a balanced setting would.",
      "A seasonal adjustment, lower in the cold months.",
      "Proactive visits bundled with the annual service where the timing allowed, which cut the cost of being wrong.",
      "Monthly reporting in money: visits made, failures avoided, failures missed.",
    ],
    impact: [
      "The system was deliberately tuned to be wrong more often in the cheap direction, which is what a cost-aware threshold means and it needed explaining more than once.",
      "Bundling proactive visits with scheduled services reduced the cost of a false alarm, which allowed the threshold to go lower still. Reducing the cost of a mistake is an alternative to predicting better and it is usually cheaper.",
      "The renewal effect entered the conversation for the first time, and it changed where the threshold sat more than any modelling improvement did.",
      "Reporting in money kept the operations meeting talking about outcomes rather than about the model.",
    ],
    whatWouldHaveKilledIt:
      "Tuning it to be right as often as possible. That setting sends almost nobody, because failures are uncommon, and it would have been defended with a good-looking accuracy figure while delivering nothing. The other near-miss was leaving the renewal cost out on the grounds that it could not be measured accurately. A rough estimate of the largest term beats a precise treatment that omits it.",
  },

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
