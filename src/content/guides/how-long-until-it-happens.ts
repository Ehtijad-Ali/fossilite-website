import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "how-long-until-it-happens",
  seoTitle: "Not Whether, But When: Predicting Timing",
  metaDescription:
    "Survival analysis in plain English. The technique that uses your customers who have not left yet, which every other approach throws away.",
  title: "Not Whether, But When",
  keywords: [
    "survival analysis business",
    "time to event modelling",
    "customer lifetime prediction",
    "predicting when churn happens",
    "censored data explained",
    "equipment failure timing",
  ],
  category: "data-science",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  brief: {
    inOneMinute:
      "Everybody cancels eventually, so predicting whether is nearly useless. Predicting when tells you where the risk concentrates, and that is something you can aim an intervention at.",
    problem: {
      headline: "A churn model that was technically fine and changed nothing",
      detail:
        "A subscription box company with 18,000 subscribers. It had a model predicting whether somebody would cancel, and it had been in place a year doing nothing.",
    },
    wrongApproach: {
      what: "Ask whether they will cancel",
      why: "The honest answer for almost everybody is yes, at some point. It also forced a choice between throwing away everyone who had not cancelled yet, or pretending they never would.",
    },
    rightApproach: {
      what: "Ask how long they will stay, and use the unfinished stories",
      why: "Somebody subscribed for two years and still here carries real information: they lasted at least two years. Using that properly is what makes this its own technique rather than a broken classification.",
    },
    context: {
      where: "Subscriptions, memberships, contracts, equipment life, staff retention.",
      decision: "When to intervene, and what an acquisition channel is actually worth.",
      metric: "Expected tenure, and lifetime value by channel.",
    },
    takeaway:
      "Risk was not constant. It spiked sharply around the third and fourth delivery and rose again at eighteen months for an entirely different reason. Two problems, two responses.",
  },

  story: {
    title: "Not whether, but when",
    caption:
      "Channels that looked identical on annual churn had very different shapes. One brought people who left fast; another brought slow starters who then stayed for years.",
    stages: [
      { stage: "Problem", label: "A model nobody could act on", detail: "It predicted cancellation and offered no moment at which to do anything." },
      { stage: "Data", label: "Four years, most of them unfinished", detail: "Signup date, cancellation date where there is one, channel, skips, box size changes, complaints." },
      { stage: "Model", label: "Keep the people still subscribed", detail: "Discarding them would throw away most of the customer base and leave a picture built only from people who already left." },
      { stage: "Prediction", label: "A curve, not a probability", detail: "Of subscribers who look like this one, how many are still here at three months, six, a year." },
      { stage: "Decision", label: "Aim at the third and fourth box", detail: "Where the risk actually concentrates, instead of spreading the same effort across everybody." },
      { stage: "Result", label: "The acquisition budget moves", detail: "Comparing channels on expected lifetime reversed the ranking that cost per signup had produced." },
    ],
  },

  calculator: {
    title: "What is a customer actually worth, and where should you intervene?",
    intro:
      "Cancellations are not spread evenly across a customer's life. Put in your own numbers and see what shifting the early drop-off is worth.",
    inputs: [
      { id: "monthly", label: "What a customer pays a month", min: 5, max: 1000, step: 5, value: 32, prefix: "\u00a3" },
      { id: "tenure", label: "Average months they stay", min: 2, max: 120, step: 1, value: 14 },
      { id: "early", label: "How many leave in the first three months", min: 5, max: 80, step: 5, value: 35, suffix: "%" },
      { id: "acq", label: "Cost to acquire one", min: 1, max: 500, step: 1, value: 45, prefix: "\u00a3" },
    ],
    compute: (v) => {
      const ltv = v.monthly * v.tenure;
      const margin = ltv - v.acq;
      const earlyLoss = v.monthly * 2 * (v.early / 100);
      // Rescuing a quarter of the early leavers is a deliberately modest target
      // for an intervention aimed at a known window.
      const rescued = (v.early / 100) * 0.25;
      const uplift = rescued * (v.tenure - 2) * v.monthly;
      return {
        outputs: [
          {
            label: "Lifetime value, before acquisition cost",
            value: `\u00a3${Math.round(ltv).toLocaleString()}`,
            hero: true,
            tone: margin > v.acq * 2 ? "good" : margin > 0 ? "neutral" : "bad",
            note: margin > 0
              ? `\u00a3${Math.round(margin).toLocaleString()} after paying to acquire them.`
              : "You are paying more to acquire them than they are worth. Nothing else matters until that changes.",
          },
          {
            label: "Lost to early leavers, per customer acquired",
            value: `\u00a3${Math.round(earlyLoss).toLocaleString()}`,
            tone: "bad",
            note: "People who never got far enough to be worth having. This is where the risk concentrates.",
          },
          {
            label: "If an early intervention rescues a quarter of them",
            value: `+\u00a3${Math.round(uplift).toLocaleString()} per customer`,
            tone: "good",
            note: "Aimed at the specific weeks where people leave, rather than spread across the whole customer base.",
          },
        ],
      };
    },
    footnote:
      "A flat monthly value and a simple average tenure, which is a simplification of exactly the kind this guide argues against. Use it to size the prize; use a real survival curve to decide when to act.",
  },

  intro: [
    "Will this customer leave is a useful question. When will this customer leave is a far more useful one, because it tells you not just who to worry about but when to do something and how much they are worth in the meantime.",
    "There is a family of techniques built specifically for questions about timing, and it has one property that makes it genuinely different from everything else. It knows how to use the customers who have not left yet.",
    "That sounds like a technicality and it is the whole point. If you only learn from customers who have already gone, you are throwing away most of your data and quietly biasing what remains towards people who left quickly. Everybody who is still with you after four years is telling you something important, and almost every business ignores it.",
  ],

  whyItMatters: [
    "Timing changes what you do. Knowing that a customer will probably leave at some point is not actionable. Knowing that customers like this one usually go around month fourteen tells you to do something in month eleven.",
    "It also produces the number underneath customer value. How long somebody is likely to stay, multiplied by what they are worth per month, is the figure a lot of businesses guess at and this is the honest way to work it out.",
    "And it applies well beyond customers. When will this machine need attention. How long until this invoice gets paid. How long do new starters stay. All the same shape of question and all usually answered with a rough average that hides everything interesting.",
  ],

  coreConcepts: [
    {
      term: "The question is when, not whether",
      explain:
        "You are predicting a length of time until something happens, rather than whether it happens at all. That difference changes what you can do with the answer.",
      detail:
        "It also changes how you judge it. There is no simple right or wrong per case, because a customer who has not left yet has not proved you wrong. They have just not left yet.",
    },
    {
      term: "The people it has not happened to yet still count",
      explain:
        "A customer who has been with you three years and is still here has not left. That is not missing information, it is a real fact: they lasted at least three years.",
      detail:
        "This is the central idea and it is the reason to use this family at all. Every other approach either throws those records away or has to pretend they left, and both distort the answer badly.",
    },
    {
      term: "Throwing them away biases everything",
      explain:
        "If you only study customers who have already gone, your sample is made entirely of people who left, which over-represents the quick departures and makes lifetimes look shorter than they are.",
      detail:
        "This is not a subtle effect. Businesses that do it routinely underestimate how long customers stay, and then make decisions about what a customer is worth on the low figure.",
    },
    {
      term: "What comes out is a curve, not a number",
      explain:
        "The natural output is a picture: of everybody who started, what proportion are still here after one month, three months, a year, two years. It usually drops steeply and then flattens.",
      detail:
        "That shape is itself the finding. A steep early drop followed by a long flat stretch means you have an onboarding problem and a loyal core, which is a completely different business situation from a steady slow decline.",
    },
    {
      term: "The average lifetime is usually the wrong number",
      explain:
        "If a lot of customers leave in the first two months and the rest stay for years, the average describes almost nobody.",
      detail:
        "Ask for the point at which half have gone, and ask what the curve looks like. Both are more useful than an average, and the average is what most businesses currently quote.",
    },
    {
      term: "Risk changes over time",
      explain:
        "The chance of leaving is not constant. It is often high in the first few weeks, drops sharply, and then rises again around a renewal or a contract anniversary.",
      detail:
        "Knowing where those danger points sit tells you when to intervene, and that timing is frequently more valuable than knowing who is at risk in general.",
    },
    {
      term: "You can compare groups directly",
      explain:
        "Draw the curve separately for customers acquired through different channels, on different products, or in different regions, and put them on the same chart.",
      detail:
        "This is one of the most immediately useful things you can do with an afternoon. The differences are usually visible, unarguable and actionable, and they need no modelling at all.",
    },
    {
      term: "It handles things that have not happened yet, in both directions",
      explain:
        "Somebody who joined last month has only been observed for a month. Somebody who cancelled because they moved abroad left for a reason unrelated to your service.",
      detail:
        "Both are handled sensibly by this family, whereas simpler approaches force you to either drop them or misrepresent them. Ask how each case is being treated.",
    },
    {
      term: "It is the honest basis for customer value",
      explain:
        "Expected remaining lifetime multiplied by what they are worth per period. Most businesses use a rule of thumb or an average that was never checked.",
      detail:
        "Doing it properly frequently changes what a business is willing to spend to acquire or retain somebody, which is a decision with real money attached.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The subscription box: the monthly run that produces a curve, not a percentage",
      caption:
        "Step two is what makes this its own technique. A subscriber still active at fourteen months has not finished their story, and both throwing them away and counting them as cancelled give you the wrong answer.",
      trigger: "Monthly, on the whole subscriber base",
      runtime: "Half an hour. The output is a shape, and shapes are what people remember.",
      stages: [
        {
          actor: "system",
          label: "Take four years of subscriptions, including the ones still running",
          output: "start date, end date where there is one, and the channel that brought them in",
        },
        {
          actor: "rule",
          label: "Keep the unfinished ones",
          detail: "They lasted at least this long, which is real information rather than a missing value.",
          output: "every subscriber, with how long they have lasted so far",
        },
        {
          actor: "model",
          label: "Ask when, not whether",
          detail: "Everybody cancels eventually. When is the only part anybody can do something about.",
          output: "a curve showing where the risk actually concentrates",
        },
        {
          actor: "person",
          label: "Find the spikes, and find out why",
          detail: "One sits around the third and fourth delivery. A gentler second rise at eighteen months has a completely different cause.",
          exception: "A spike nobody can explain gets investigated before anything is built around it. The shape is a question, not an answer.",
        },
        {
          actor: "rule",
          label: "Compare acquisition channels on expected lifetime, not cost per signup",
          detail: "Which reversed the ranking the marketing budget had been built on.",
          output: "a different channel mix, with the reasoning attached",
        },
      ],
      loop: "Each month of new cancellations sharpens the curve, particularly late in a subscriber's life where the data is thinnest.",
      outcome:
        "An average rate tells you how many. A curve tells you when, and when is the only part you can put a person or a phone call against.",
    },
    {
      kind: "curve",
      lesson: {
        problem: "Subscribers leave, and the churn model tells us who without telling us when.",
        wrong: {
          label: "One churn rate",
          why: "A single flat percentage. It is true, it is the number in every board pack, and it gives nobody a moment at which to actually do something.",
        },
        right: {
          label: "When they leave",
          why: "The same customers as a curve. Risk is not spread evenly at all, and the shape shows exactly where it concentrates.",
        },
        discovery: "The drop is steep around the third and fourth delivery, then flattens. A second, gentler rise at eighteen months has a completely different cause.",
        decisions: [
          { tone: "investigate", label: "The third and fourth box" },
          { tone: "monitor", label: "Range fatigue at 18 months" },
          { tone: "protect", label: "Anyone past six months" },
        ],
        takeaway: "An average rate tells you how many. A curve tells you when, which is the only part you can act on.",
      },
      naive: {
        series: [
          { name: "Monthly churn rate", points: [[0, 42], [20, 42], [40, 42], [60, 42], [80, 42], [100, 42]] },
        ],
        notes: [{ x: 40, y: 42, text: "true, and nothing to act on" }],
      },
      title: "Everybody cancels eventually, so when is the only useful question",
      caption:
        "Of subscribers who look like this, how many are still here at each point. The steep drop is the third and fourth box, and it is completely invisible in an overall churn rate. Two different problems, needing two different responses.",
      xLabel: "months subscribed",
      yLabel: "still subscribed",
      series: [
        {
          name: "Still subscribed",
          points: [[0, 100], [6, 92], [12, 74], [18, 58], [24, 52], [36, 49], [48, 46], [60, 43], [72, 36], [84, 28], [100, 20]],
        },
      ],
      notes: [
        { x: 12, y: 74, text: "the third and fourth box" },
        { x: 72, y: 36, text: "range fatigue, a different cause" },
      ],
    },
    {
      kind: "flow",
      title: "The subscription box: using the people who have not cancelled yet",
      caption:
        "Step two is what makes this its own technique. A subscriber active at fourteen months has not finished their story, and both throwing them away and treating them as never cancelling get the answer badly wrong.",
      steps: [
        { label: "Four years of subscriptions", note: "Most of them still running", tone: "input" },
        { label: "Keep the unfinished ones", note: "They lasted at least this long, which is real information" },
        { label: "Ask when, not whether", note: "The output is a curve, not a probability", tone: "model" },
        { label: "Find where the risk concentrates", note: "Two spikes, two different causes" },
        { label: "Compare channels on expected lifetime", note: "Which reversed the cost-per-signup ranking", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Throwing away everybody who was still a customer.",
      walkthrough:
        "The problem: a subscription business calculated average customer lifetime by looking at everybody who had cancelled and averaging how long they had stayed. The answer came out at about eleven months and was used for every decision about acquisition spend. What was happening: a BA pointed out that the calculation only included people who had left. Everybody still subscribed, including a substantial group who had been there for years, was excluded entirely.",
      result:
        "What changed: doing it properly, counting the people still present as having lasted at least as long as they had so far, produced a considerably longer figure. The business had been underestimating what a customer was worth and had been unwilling to spend enough to acquire them. One methodological fix changed the acquisition budget.",
    },
    {
      kind: "illustration",
      scenario: "The shape of the curve was the finding.",
      walkthrough:
        "The problem: a business knew it had a retention problem and had been running general loyalty initiatives with little effect. What was happening: an analyst drew the curve. It fell very steeply in the first six weeks, then flattened almost completely. Customers who made it past six weeks mostly stayed for years.",
      result:
        "What changed: this was not a retention problem in any general sense. It was an onboarding problem wearing a retention costume. They redirected the effort into the first six weeks, and the loyalty initiatives aimed at long-standing customers were stopped because that group was not leaving. The shape told them that in about ten minutes.",
    },
    {
      kind: "illustration",
      scenario: "Two acquisition channels, two completely different curves.",
      walkthrough:
        "The problem: a business judged its acquisition channels purely on cost per customer, and one channel was clearly the cheapest. What was happening: a BA drew the curve for each channel separately on one chart. The cheapest channel dropped away very fast. The most expensive channel produced customers who stayed roughly three times as long.",
      result:
        "What changed: on cost per customer the cheap channel won easily. On cost per year of customer it lost badly. They shifted spend and the picture that made the argument took an afternoon to produce and needed no model at all.",
    },
  ],

  learningPath: [
    {
      title: "Define the event and the starting point precisely",
      body: "What exactly counts as the thing happening, and when does the clock start? First payment, contract signature, installation date. Vague definitions make everything downstream meaningless.",
      effort: "1 hour",
      outcome: "A definition somebody could apply to a past case without asking you.",
    },
    {
      title: "Include everybody, not just those it happened to",
      body: "Everybody who started, whether or not the event has occurred. The ones it has not happened to yet carry real information about how long people last.",
      effort: "Part of the analysis",
      outcome: "The single change that most improves the honesty of the answer.",
    },
    {
      title: "Draw the curve before modelling anything",
      body: "Of everybody who started, what proportion are still here at each point. This alone frequently answers the business question.",
      effort: "Half a day",
      outcome: "A picture that usually makes the finding obvious without any further work.",
    },
    {
      title: "Split it by whatever matters commercially",
      body: "Channel, product, region, size. Put the curves on one chart. Differences are usually visible immediately.",
      effort: "Half a day",
      outcome: "Arguments settled with a picture rather than a debate.",
    },
    {
      title: "Find where the risk peaks",
      body: "Look for the points where the drop steepens. First weeks, renewal dates, contract anniversaries. Those are your intervention points.",
      effort: "2 hours",
      outcome: "Timing for action, which is usually more valuable than knowing who is at risk.",
    },
    {
      title: "Replace the average with the halfway point",
      body: "Report the time by which half have gone, plus the shape of the curve. Stop quoting an average that describes nobody.",
      effort: "A conversation",
      outcome: "A number the business can actually reason about.",
    },
    {
      title: "Rebuild customer value on the honest figure",
      body: "Expected remaining lifetime times value per period. Compare against whatever rule of thumb is currently in use.",
      effort: "1-2 days",
      outcome: "Frequently a material change to what the business will spend on acquisition or retention.",
    },
  ],

  exercises: [
    {
      title: "Check how your lifetime figure is calculated",
      brief:
        "Find out how your business works out average customer lifetime. Ask specifically whether customers who are still active are included in the calculation.",
      success:
        "You can say whether the figure is honest, and frequently you have found that everybody still present was excluded.",
      time: "45 minutes",
    },
    {
      title: "Draw the curve",
      brief:
        "Take everybody who started in a given year and work out what proportion were still customers at each month afterwards. Plot it.",
      success:
        "You have the shape, and the shape usually tells you whether you have an onboarding problem or a long-term one.",
      time: "Half a day",
    },
    {
      title: "Compare two groups",
      brief:
        "Draw the same curve separately for two acquisition channels, two products or two regions, on one chart.",
      success:
        "You can see a difference or confidently say there is not one, and either settles an argument that has probably been running on opinion.",
      time: "Half a day",
    },
  ],

  caseStudy: {
    business:
      "A subscription box company sending a monthly food and drink selection. Around eighteen thousand active subscribers.",
    problem:
      "Cancellations. The company had a churn model that predicted whether somebody would cancel and it was not much use, because everybody cancels eventually. What the business needed to know was when, and it had never framed the question that way.",
    analysis: [
      "Will they cancel is close to useless as a question, because the honest answer for almost every subscriber is yes, at some point. The useful question is how long they are likely to stay, which is a different shape of answer.",
      "There is a complication that makes this its own technique. Most subscribers have not cancelled yet. A conventional approach either throws those people away, which discards most of the data, or treats them as never cancelling, which is worse.",
      "But somebody who has been subscribed for two years and is still here carries real information: they lasted at least two years. Using that partial information properly is the entire point of this family of methods and it is why the ordinary approach fails here.",
      "Four years of subscription history gave signup date, cancellation date where applicable, acquisition channel, whether they had ever skipped a month, whether they had changed their box size, and complaint history.",
      "The counting found the shape. Cancellation risk was not constant. It spiked sharply around the third and fourth deliveries, dropped substantially for those who got past that, and rose gently after about eighteen months for a different reason.",
      "Those are two different problems requiring two different responses, and the single yes-or-no churn model had blended them into one number that pointed at neither.",
    ],
    aiApproach: [
      {
        step: "Use the people who have not cancelled yet",
        detail:
          "This is what distinguishes the technique. A subscriber still active at fourteen months tells you something real even though the ending is unknown. Discarding them would have thrown away most of the customer base.",
      },
      {
        step: "Ask when, not whether",
        detail:
          "The output is a survival curve rather than a probability: of subscribers who look like this one, how many are still here at three months, at six, at a year. That is a shape a marketing team can plan against.",
      },
      {
        step: "Look at when the risk is concentrated",
        detail:
          "The spike at the third and fourth box was the finding. It is invisible in an overall churn rate and it is the single most actionable thing the analysis produced.",
      },
      {
        step: "Compare groups on the curve, not on a rate",
        detail:
          "Acquisition channels that looked similar on annual churn had very different shapes. One brought subscribers who left fast, another brought slow starters who then stayed for years. Comparing a single rate had been hiding that completely.",
      },
      {
        step: "Turn it into expected lifetime value",
        detail:
          "Once you have expected duration by group, you can say what a subscriber from each channel is worth, which is what actually decides where the acquisition budget goes.",
      },
    ],
    solution: [
      "Expected tenure predicted per subscriber rather than a cancel or stay flag.",
      "A specific intervention built around the third and fourth box, which is where the risk concentrates.",
      "The eighteen-month rise handled separately, since its cause was range fatigue rather than early disappointment.",
      "Acquisition channels compared on expected lifetime value instead of on cost per signup.",
      "Curves reviewed quarterly, because the shape moves when the product changes.",
    ],
    impact: [
      "The intervention could be aimed at the weeks that mattered instead of being spread evenly across the subscriber base, which is a much cheaper way to spend the same effort.",
      "The channel comparison changed where the acquisition budget went, and it reversed the ranking that cost per signup had produced.",
      "Two distinct problems were separated, where the old model had averaged them into something that addressed neither.",
      "The business stopped asking who will churn and started asking how long will they stay, which is a better question and produced better meetings.",
    ],
    whatWouldHaveKilledIt:
      "Keeping the yes-or-no framing. It produced a technically fine model answering a question with no useful action attached, and it had been in place for a year doing nothing. The other error, which the first attempt made, was excluding everybody who had not yet cancelled. That threw away most of the subscriber base and produced a picture based entirely on people who had already left.",
  },

  mistakes: [
    {
      mistake: "Only studying the ones it has already happened to",
      why: "Your sample becomes entirely people who left, which over-represents quick departures and makes lifetimes look far shorter than they are.",
      fix: "Include everybody who started. Somebody still present after three years lasted at least three years, and that is real information.",
    },
    {
      mistake: "Quoting an average lifetime",
      why: "When a lot leave early and the rest stay for years, the average describes almost nobody and hides the shape that matters.",
      fix: "Report the point at which half have gone, and show the curve.",
    },
    {
      mistake: "Treating risk as constant",
      why: "It is usually high early, low in the middle and high again around renewals. Acting uniformly across the lifetime wastes effort in the safe periods.",
      fix: "Find where the drop steepens and concentrate intervention there.",
    },
    {
      mistake: "Vague definition of the event",
      why: "If nobody agrees when a customer has actually left, different people count differently and every figure is unreliable.",
      fix: "Write a definition somebody could apply to a past case without asking you, and check it with two people.",
    },
    {
      mistake: "Not separating people who left for unrelated reasons",
      why: "A customer who moved abroad or went out of business did not leave because of your service, and treating them the same distorts what you learn.",
      fix: "Ask how those cases are being handled. This family can treat them sensibly and somebody has to decide to.",
    },
    {
      mistake: "Building customer value on a guess",
      why: "Acquisition and retention spending gets set from a lifetime figure that was never checked, frequently one that excludes your longest-standing customers.",
      fix: "Rebuild it on the honest figure and compare against whatever is currently in use.",
    },
  ],

  bestPractices: [
    "Define the event and the starting point precisely.",
    "Include everybody who started, not just those it has happened to.",
    "Draw the curve before building any model.",
    "Split the curve by whatever matters commercially.",
    "Look for where the risk peaks and intervene there.",
    "Report the halfway point and the shape rather than an average.",
    "Handle people who left for unrelated reasons separately.",
    "Rebuild customer value on the honest lifetime figure.",
  ],

  proTips: [
    "Ask how your business currently calculates average customer lifetime and listen for whether active customers are included. In my experience they usually are not, which means the figure is built entirely from people who left and is systematically too low. That one question can change what a business is willing to spend to win a customer.",
    "Draw the curve before anybody suggests modelling anything. The shape answers the business question surprisingly often, it takes half a day, and it is a picture that a board understands immediately in a way no model output ever is.",
    "Split the curve by acquisition channel and put both lines on one chart. Cost per customer is what most businesses judge channels on, and cost per year of customer is what actually matters. The gap between those two views is frequently large enough to redirect a budget.",
    "Look for where the curve steepens rather than where it is low. A flat stretch means those customers are safe and effort spent there is wasted. The steep parts tell you when to act, and that timing is usually more actionable than any list of at-risk names.",
  ],

  businessApplications: [
    "Working out how long customers really stay, and what that makes them worth.",
    "Deciding when to intervene rather than just who to worry about.",
    "Comparing acquisition channels on the lifetime they produce rather than the cost per sign-up.",
    "Predicting when equipment will need attention, for maintenance scheduling.",
    "Understanding how long new starters stay, and when they leave.",
    "Estimating how long invoices take to be paid, including the ones still outstanding.",
  ],

  checklist: [
    "Event and starting point defined precisely and checked with two people.",
    "Everybody who started included, not just those it happened to.",
    "Curve drawn before any modelling.",
    "Curve split by commercially important groups.",
    "Points where risk peaks identified.",
    "Halfway point reported instead of an average.",
    "People who left for unrelated reasons handled separately.",
    "Customer value recalculated on the honest figure and compared with current practice.",
  ],

  faqs: [
    {
      q: "Why can we not just use ordinary prediction?",
      a: "Because it has no way of using customers who have not left yet. You either drop them, losing most of your data, or pretend they stayed, which is wrong. This family is built specifically to handle that and it is the main reason to use it.",
    },
    {
      q: "What is wrong with average customer lifetime?",
      a: "Two things. It is usually calculated only from customers who left, which biases it low. And when many leave early and the rest stay for years, an average describes almost nobody.",
    },
    {
      q: "Do we need a model, or is the curve enough?",
      a: "Very often the curve is enough. Drawing it, and splitting it by channel or product, answers most business questions in half a day. Build a model when you need a prediction for an individual customer rather than a picture of a group.",
    },
    {
      q: "How do we handle customers who left for reasons nothing to do with us?",
      a: "Ask for them to be treated separately rather than counted as ordinary departures. Somebody who moved abroad tells you nothing about your service, and including them distorts what you learn.",
    },
    {
      q: "Does this only apply to customers?",
      a: "No. Any question about how long until something happens fits: equipment failure, time to payment, how long staff stay, how long a case takes to resolve. The shape of the question is what matters.",
    },
    {
      q: "How much history do we need?",
      a: "Enough that a reasonable number of people have been observed for as long as you want to predict. If you want to say something about year three, you need customers who have been around for three years, and if you do not have them you should say so.",
    },
  ],

  tools: [
    { name: "A precise definition of the event", what: "What counts as it having happened, and when the clock starts. Everything depends on it.", cost: "Free" },
    { name: "The curve", what: "Proportion still present at each point. Half a day, and it usually answers the question on its own.", cost: "Free" },
    { name: "Curves split by group, on one chart", what: "Settles arguments about channels and products with a picture.", cost: "Free" },
    { name: "The halfway point", what: "The time by which half have gone. More useful than any average and rarely quoted.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "predicting-yes-or-no", anchor: "predicting whether rather than when", context: "Comparison" },
    { slug: "forecasting-demand-and-staffing", anchor: "the other kind of prediction over time", context: "Related" },
    { slug: "who-will-change-their-mind", anchor: "deciding who is worth intervening with", context: "Acting on it" },
  ],

  relatedGuides: ["predicting-yes-or-no", "forecasting-demand-and-staffing", "who-will-change-their-mind"],

  conclusion: [
    "Find out how your business calculates average customer lifetime and ask whether customers who are still active are included. If they are not, the figure is built only from people who left, it is too low, and it is probably setting your acquisition budget.",
  ],
};

export default guide;
