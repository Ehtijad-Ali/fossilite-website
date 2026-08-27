import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "spotting-the-unusual",
  seoTitle: "Finding What Does Not Look Like the Rest",
  metaDescription:
    "Anomaly detection in plain English. For when you cannot describe what you are looking for, only that it is different. And why alarm fatigue kills most of these.",
  title: "Finding What Does Not Look Like the Rest",
  keywords: [
    "anomaly detection business",
    "outlier detection explained",
    "fraud detection without examples",
    "equipment failure detection",
    "data quality monitoring",
    "unusual activity detection",
  ],
  category: "data-science",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Sometimes you know something is wrong and you cannot describe what wrong looks like. A supplier invoice that is technically valid and somehow not right. A machine that is about to fail in a way it has never failed before. An expenses claim that ticks every box and makes an experienced person uneasy.",
    "You cannot build a model to predict something you cannot give examples of. What you can do is describe what normal looks like in enough detail that anything sitting a long way from normal gets flagged for somebody to look at.",
    "That is the whole idea. It is closer to a very attentive new employee than to a detective. It does not know what fraud is. It knows that in two years of invoices it has never seen one quite like this, and it is telling you so.",
  ],

  whyItMatters: [
    "It covers the situations that other approaches cannot reach. Genuine fraud is rare and inventive, equipment fails in new ways, and data goes wrong in ways nobody anticipated. In all three you have plenty of examples of normal and almost none of the thing you want to catch.",
    "It is also the cheapest form of safety net for data quality. A great many businesses discover a broken feed weeks later, when somebody notices the numbers look odd. Something watching for the day the pattern changes catches it the same morning.",
    "And it fails in one specific and predictable way, which is that it produces too many alerts, everybody stops looking, and the whole thing quietly becomes decoration. Knowing that in advance is most of the battle.",
  ],

  coreConcepts: [
    {
      term: "It learns normal, not bad",
      explain:
        "You show it lots of ordinary examples. It builds a picture of what ordinary looks like across all the dimensions at once. Then anything far from that picture gets flagged.",
      detail:
        "This is why it works when you cannot describe what you are hunting. You are not describing the problem. You are describing everything else and letting the leftovers be interesting.",
    },
    {
      term: "Unusual is not the same as wrong",
      explain:
        "Your biggest customer placing their largest ever order is highly unusual and completely fine. A senior person travelling somewhere new is unusual and legitimate.",
      detail:
        "So what comes out is always a list for a person to look at, never a decision. Anybody planning to act automatically on this has misunderstood what it produces.",
    },
    {
      term: "It notices combinations, not just extremes",
      explain:
        "An amount of four thousand pounds is normal. A Sunday submission is normal. A new supplier is normal. All three together, from somebody who has never done any of them, may not be.",
      detail:
        "This is where it beats the threshold rules most businesses already have. A rule catches things over a limit. This catches an ordinary-looking case that is odd in how its parts fit together.",
    },
    {
      term: "Normal drifts, so it has to keep learning",
      explain:
        "Your business changes. New products, new suppliers, a new season, a new way of working. What was unusual last year is routine now.",
      detail:
        "Something set up once and left alone starts flagging everything, because the world moved and it did not. Ask how often it refreshes its idea of normal and who checks that.",
    },
    {
      term: "Too many alerts is how these die",
      explain:
        "If it flags fifty things a day and a person can look at eight, they will look at the first eight and then stop. Within a month nobody opens it at all.",
      detail:
        "This is the single most common failure and it is entirely predictable. Set the sensitivity from how many a person can genuinely investigate, not from a technical target.",
    },
    {
      term: "The team decides what unusual enough means",
      explain:
        "Like anything that produces a score, somebody has to draw the line. Here the practical way to draw it is by capacity.",
      detail:
        "Ask how many of these somebody can properly investigate in a day, then set it so roughly that many come out, ranked with the strangest first. That is a far better basis than any statistical threshold.",
    },
    {
      term: "You need to know what happened to each alert",
      explain:
        "Was it real or not? Without that feedback you can never tell whether the thing is working and you can never improve it.",
      detail:
        "This is dull and it is the difference between a system that gets better and one that decays. A tick box on each investigation is enough, and somebody has to look at the totals monthly.",
    },
    {
      term: "It is very good at catching your own broken data",
      explain:
        "Frequently the most valuable use is not fraud at all. It is noticing the morning that a feed stopped, a field started arriving empty, or a system change quietly altered a format.",
      detail:
        "That application is easy to set up, easy to justify and easy to prove. It is worth doing on its own even if you never use this for anything more interesting.",
    },
    {
      term: "Somebody has to be able to say why it was flagged",
      explain:
        "An alert saying this is unusual is not actionable. An alert saying this is unusual because the amount, the timing and the supplier are an unfamiliar combination is.",
      detail:
        "Insist on that. Without a reason, the person receiving it has to reconstruct your thinking from scratch on every case, which is exactly why they stop opening it.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Fifty alerts a day and nobody looking.",
      walkthrough:
        "The problem: a finance team had unusual-transaction monitoring that produced around fifty alerts every morning. What was happening: one person had a couple of hours a day for this, which is roughly eight or ten proper investigations. So they worked down from the top, ran out of time, and the rest were closed unreviewed at the end of the week. After two months they had stopped opening it, because the list felt meaningless.",
      result:
        "What changed: they asked how many could genuinely be investigated properly, got the answer of about ten, and moved the sensitivity until roughly ten came out, ranked with the strangest first. The number of real problems found went up, because ten investigated properly beats fifty skimmed. Set the sensitivity from capacity, not from a technical setting.",
    },
    {
      kind: "illustration",
      scenario: "The combination that no rule would have caught.",
      walkthrough:
        "The problem: a business had threshold rules on expenses. Anything over a limit, anything in certain categories, anything from certain countries. What was happening: they added something watching for unusual combinations instead. It flagged a series of claims that broke no rule at all. Each was under every threshold, in an ordinary category, from an ordinary place. What made them stand out was the combination of a particular submitter, always on the same day of the month, always just under one specific limit.",
      result:
        "What changed: the investigation confirmed a real problem that had been running for over a year underneath every rule the business had. Rules catch things that cross a line. This catches things that are unremarkable individually and odd together, and that is a genuinely different capability.",
    },
    {
      kind: "illustration",
      scenario: "Catching a broken feed the same morning.",
      walkthrough:
        "The problem: a business had twice discovered, weeks after the fact, that a data feed from a partner had been arriving with an empty field following a change at the partner's end. Both times somebody eventually noticed the reports looked odd. What was happening: they set up something very simple to watch the daily shape of that feed. Row counts, how full each field was, the range of values.",
      result:
        "What changed: the next time something changed at the partner's end, it flagged on the first morning rather than five weeks later. This is the least glamorous use of the idea and frequently the one with the clearest payback, because you can point at exactly what it caught and what the delay used to cost.",
    },
  ],

  learningPath: [
    {
      title: "Decide what you are watching and why",
      body: "Transactions, invoices, sensor readings, a data feed. Be specific about what counts as one thing being watched, and what somebody would do if one were flagged.",
      effort: "1 hour",
      outcome: "A clear target rather than a general wish to catch problems.",
    },
    {
      title: "Ask how many can be investigated properly per day",
      body: "Ask the team, not a manager. Then treat that as the number of alerts you are aiming to produce.",
      effort: "One conversation",
      outcome: "The number that decides whether this survives its first month.",
    },
    {
      title: "Start with the data quality version",
      body: "Watch the shape of your own feeds. Counts, how full each field is, the spread of values. Easy to build, easy to prove, and it earns the credibility for anything more interesting.",
      effort: "2-3 days",
      outcome: "An early visible win and a safety net you should have anyway.",
    },
    {
      title: "Insist that every alert says why",
      body: "Which factors made this unusual, in business language. Without it the person receiving the alert starts from nothing every time.",
      effort: "Part of the build",
      outcome: "The difference between a list people work and a list people close.",
    },
    {
      title: "Set up the feedback loop from day one",
      body: "Was it real or not? A tick box on each investigation. Somebody looks at the monthly totals.",
      effort: "Half a day",
      outcome: "The only way you will ever know whether this is working.",
    },
    {
      title: "Agree how often it relearns normal",
      body: "Your business changes. Decide how often it refreshes and who confirms that happened.",
      effort: "A conversation",
      outcome: "Protection against it slowly flagging everything as the world moves.",
    },
  ],

  exercises: [
    {
      title: "Count the alerts against the capacity",
      brief:
        "For any alerting in your business, count how many are produced per day and ask the team how many they can properly investigate. Compare the two numbers.",
      success:
        "You can say whether the volume is workable, and usually it is several times too high.",
      time: "45 minutes",
    },
    {
      title: "Find out what happens to closed alerts",
      brief:
        "Ask what proportion of alerts in the last month were investigated, and of those, how many turned out to be real. If nobody knows, that is the finding.",
      success:
        "You either have the two numbers or you have established that nobody can tell whether the system works.",
      time: "1 hour",
    },
    {
      title: "Watch one feed for a week",
      brief:
        "Pick one incoming data feed and record daily: how many rows, how full each important field is, the highest and lowest values. Do it manually for five days.",
      success:
        "You have a picture of normal for that feed and would spot a change, which is the whole idea in its simplest form.",
      time: "20 minutes a day for a week",
    },
  ],

  caseStudy: {
    business:
      "A care provider running eleven residential homes. Each home has a manager with a purchasing card for food, supplies and small maintenance.",
    problem:
      "The finance director had a nagging sense that spend was drifting and no way to check it. Eleven homes, thousands of small transactions a month, and a finance team of three. The existing control was a monthly review of anything over a threshold, which by definition missed everything below it.",
    analysis: [
      "The first thing to get straight, and it needed saying repeatedly, is that unusual does not mean wrong. Most unusual transactions have an innocent explanation. The output of this is a question, never an accusation, and if the business cannot hold that line the whole thing becomes corrosive.",
      "Two years of card transactions were available: amount, date, supplier, category, and which home.",
      "The threshold control was the wrong shape. Fraud and error do not respect thresholds, and the genuinely odd things were often small. Meanwhile plenty of large transactions were entirely routine and were being reviewed every month for no reason.",
      "What normal looks like has to be defined per home, not across the group. A large home spends more on food than a small one, and comparing them produces alerts that are just a description of size.",
      "It also has to be defined per category and per time of year. Heating spend in January is not comparable to heating spend in June, and a system that does not know that will spend every winter crying wolf.",
    ],
    aiApproach: [
      {
        step: "Learn normal from history rather than setting rules",
        detail:
          "Nobody can write down rules for eleven homes across a dozen categories, and if they did the rules would be out of date within months. Instead you let it learn what ordinary looks like for each home and category, and flag the departures.",
      },
      {
        step: "Compare like with like",
        detail:
          "Normal is defined within a home, within a category, and with the time of year accounted for. Getting this wrong is the main reason these systems produce alerts nobody acts on, and once people stop trusting the alerts you cannot get that trust back.",
      },
      {
        step: "Look at patterns as well as individual transactions",
        detail:
          "A single payment can be unremarkable while a sequence is odd: the same supplier appearing on a new day of the week, a steady drift upward in a routine order, several payments just under a threshold. The pattern cases were the ones that mattered here.",
      },
      {
        step: "Tune the volume to what the team can actually review",
        detail:
          "Three people cannot review two hundred alerts a month. Set the sensitivity so it produces a number they can genuinely look at, which is a resourcing decision rather than a technical one. An unreviewed alert has negative value.",
      },
      {
        step: "Record the outcome of every alert",
        detail:
          "Explained, corrected, or escalated. That record is what stops it flagging the same recurring thing forever, and it is the only evidence you will have that the system is worth its cost.",
      },
    ],
    solution: [
      "A weekly list of a manageable number of transactions and patterns to ask about.",
      "Each one shown with what normal looks like for that home and category, so the reviewer sees why it surfaced.",
      "A neutral standing form of words for the query, agreed with the home managers in advance.",
      "An outcome recorded on every item, feeding back so that explained recurring items stop reappearing.",
      "Home managers were told about the system before it started, which mattered more than any part of the build.",
    ],
    impact: [
      "The largest category of findings was not dishonesty. It was duplicate payments, price rises nobody had noticed, and subscriptions still being paid for services no longer used.",
      "Reviewing effort moved from everything above a threshold to the things that were actually unusual, which is a better use of three people.",
      "The drift in routine orders, which was the finance director's original nagging feeling, turned out to be real and to have a mundane cause.",
      "Because managers were told in advance, the system read as a control rather than as surveillance, which is the difference between it lasting and being quietly killed.",
    ],
    whatWouldHaveKilledIt:
      "Launching it without telling the home managers. The first query would have arrived as an accusation from a system nobody knew existed, and the working relationship would have taken longer to repair than the project took to build. The other reliable failure is producing more alerts than anyone can review, which within two months converts the whole thing into a report that gets filed unopened.",
  },

  mistakes: [
    {
      mistake: "Producing more alerts than anybody can investigate",
      why: "People work down the list until they run out of time and then stop opening it entirely. The system then catches nothing while appearing to be in place.",
      fix: "Set the sensitivity from how many a person can properly investigate, and rank so the strangest are at the top.",
    },
    {
      mistake: "Treating unusual as wrong",
      why: "Your biggest customer's biggest order is highly unusual and entirely legitimate. Acting automatically on unusualness insults good customers and blocks good business.",
      fix: "Always route to a person. This produces a list for review, never a decision.",
    },
    {
      mistake: "Not recording what happened to each alert",
      why: "Without it you can never say whether it is working, and you cannot tell a system catching real problems from one producing noise.",
      fix: "A tick box on every investigation and a monthly look at the totals. Dull and essential.",
    },
    {
      mistake: "Letting it learn normal once and never again",
      why: "Your business changes and the model does not, so it starts flagging routine new activity and the alert volume climbs until people give up.",
      fix: "Agree a refresh schedule and name who confirms it happened.",
    },
    {
      mistake: "Sending alerts with no reason attached",
      why: "The person receiving it has to work out from scratch why this one is here, on every single case, and that is why they stop.",
      fix: "Require that each alert names the factors that made it unusual, in business language.",
    },
    {
      mistake: "Skipping the data quality version",
      why: "It is the easiest thing to build, the easiest to prove and the most immediately useful. Teams skip it because it is unglamorous and then struggle to justify anything more ambitious.",
      fix: "Start there. It buys credibility and it catches problems you currently find weeks late.",
    },
  ],

  bestPractices: [
    "Be specific about what you are watching and what happens when one is flagged.",
    "Set alert volume from what a person can properly investigate.",
    "Rank so the strangest come first.",
    "Always route to a person rather than acting automatically.",
    "Require a reason on every alert, in business language.",
    "Record whether each alert turned out to be real.",
    "Review the totals monthly.",
    "Agree how often it relearns normal, with a named owner.",
    "Start with watching your own data feeds.",
  ],

  proTips: [
    "Ask the team what they already find suspicious and cannot explain. Experienced people in finance, claims or operations often have a feel for something being off without being able to say why. That feel is describing a combination, which is exactly what this technique is for, and their examples are the best starting point you will get.",
    "Watch the alert volume as a number in its own right. A sudden rise usually means something changed in the business rather than that fraud has suddenly increased. It is one of the more useful early warnings available and hardly anybody tracks it.",
    "Before building anything, ask what proportion of current alerts turn out to be real. If nobody knows, you have found the actual problem, and fixing that costs a tick box rather than a project. It also tells you whether the existing thing is worth keeping.",
    "Give the team an easy way to say this one is fine and here is why. Over a year those explanations become the best description of what normal actually means in your business, and they are far more useful than anything you could have specified at the start.",
  ],

  businessApplications: [
    "Watching for unusual transactions, expenses or invoices where you cannot describe the problem in advance.",
    "Monitoring equipment for behaviour outside its normal pattern, before a failure you have not seen before.",
    "Catching broken data feeds and quiet format changes on the day they happen.",
    "Spotting unusual access or usage patterns in a system.",
    "Flagging orders or claims that are odd in combination rather than extreme in any one field.",
    "Quality checking a process by watching for cases that do not resemble the rest.",
  ],

  checklist: [
    "What is being watched defined precisely.",
    "Capacity for proper investigation established with the team.",
    "Alert volume set from that capacity.",
    "Output ranked with the strangest first.",
    "Every alert carries a reason in business language.",
    "Alerts routed to a person, never acted on automatically.",
    "Feedback recorded on whether each alert was real.",
    "Monthly review of totals scheduled.",
    "Refresh schedule for relearning normal, with an owner.",
  ],

  faqs: [
    {
      q: "How is this different from the threshold rules we already have?",
      a: "Rules catch things that cross a line you set. This catches things that are unremarkable on every individual measure and odd in how they combine. They complement each other, and the rules should stay.",
    },
    {
      q: "Do we need examples of fraud to build it?",
      a: "No, and that is the point. You need lots of examples of normal. That is why it works for problems where the thing you want to catch is rare, inventive or has never happened to you yet.",
    },
    {
      q: "How many alerts should we expect?",
      a: "As many as somebody can properly investigate in a day, and no more. That number comes from the team. Anything above it means people skim, and skimming finds less than investigating fewer cases properly.",
    },
    {
      q: "Can we act on these automatically?",
      a: "No. Unusual and wrong are different things, and your best customers are frequently your most unusual ones. This produces a list for a person, always.",
    },
    {
      q: "How do we know it is working?",
      a: "Record whether each alert turned out to be real, and review the totals monthly. Without that you have no way to tell a working system from an expensive random number generator.",
    },
    {
      q: "What is the easiest place to start?",
      a: "Watching your own data feeds. Row counts, how full each field is, the range of values. It is simple, it catches problems you currently find weeks late, and it is easy to show the value of.",
    },
  ],

  tools: [
    { name: "A capacity figure from the team", what: "How many alerts somebody can properly investigate per day. Decides whether this survives its first month.", cost: "Free" },
    { name: "A reason attached to every alert", what: "Which factors made it unusual, in business language. The difference between a worked list and an ignored one.", cost: "Free" },
    { name: "A tick box for what happened", what: "Real or not. Dull, cheap, and the only way to know whether any of it works.", cost: "Free" },
    { name: "A simple watch on your data feeds", what: "Counts, completeness, ranges. The easiest version and often the most valuable.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "predicting-yes-or-no", anchor: "the approach for when you do have examples", context: "Alternative" },
    { slug: "why-models-stop-working", anchor: "why normal drifts and what to do about it", context: "Maintenance" },
    { slug: "data-cleaning-fundamentals", anchor: "the data quality problems this catches", context: "Application" },
  ],

  relatedGuides: ["predicting-yes-or-no", "why-models-stop-working", "data-cleaning-fundamentals"],

  conclusion: [
    "Count how many alerts your business produces each day and ask the team how many they can properly investigate. If the first number is several times the second, which it usually is, you have found why nobody is looking at them.",
  ],
};

export default guide;
