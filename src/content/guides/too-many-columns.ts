import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "too-many-columns",
  seoTitle: "Sixty Questions That Are Really Asking About Four Things",
  metaDescription:
    "Dimension reduction explained without maths. How to squash many overlapping measures into a few, and the cost you pay in being able to explain anything.",
  title: "When You Have Too Many Columns",
  keywords: [
    "principal component analysis explained",
    "dimension reduction business",
    "too many variables",
    "survey analysis method",
    "combining correlated measures",
    "pca for business",
  ],
  category: "data-science",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "A customer satisfaction survey has sixty questions. Look at the answers and you notice something. People who rate the delivery speed highly also rate the packaging highly, and the tracking, and the driver. Eight questions and one underlying opinion: they are happy with how it arrived.",
    "That happens constantly. Sixty questions are frequently asking about four or five things, dressed up as sixty. The same is true of sensor readings, financial ratios, engagement measures and almost any long list of numbers about the same thing.",
    "There is a family of techniques for squashing that down. It finds the handful of underlying patterns that account for most of the variation and gives you a few combined scores instead of sixty columns. The gain is real and so is the cost, and the cost is the part people forget.",
  ],

  whyItMatters: [
    "Long lists of overlapping measures cause practical problems. Charts become unreadable, models get confused by columns that all say the same thing, and nobody can tell which of the sixty things actually matters.",
    "Squashing them down fixes that and produces something you can actually plot. Being able to put your whole customer base on one chart, with similar customers near each other, is genuinely useful and impossible with sixty columns.",
    "But the combined scores you get back are not business quantities. They are mathematical mixtures, and the moment you try to explain one to a manager you discover the trade you made. Knowing that in advance decides whether this is the right tool.",
  ],

  coreConcepts: [
    {
      term: "It finds the patterns that several columns share",
      explain:
        "It looks for groups of measures that move together, and replaces them with a single combined score capturing what they have in common.",
      detail:
        "If eight delivery questions all rise and fall together, one number can carry nearly all of that information. You have lost a little detail and removed seven columns.",
    },
    {
      term: "The combined scores do not mean anything in business terms",
      explain:
        "What comes back is not customer satisfaction with delivery. It is a specific weighted mixture of eight questions, and nobody can describe it in a sentence.",
      detail:
        "This is the central trade. You gain simplicity and lose the ability to say what a number means. For anything that has to be explained to a manager or a customer, that is a serious cost.",
    },
    {
      term: "Somebody has to look at what went into each one",
      explain:
        "You can see which original questions contribute most to each combined score. Read that list and see whether it makes sense as a theme.",
      detail:
        "Frequently the first combined score is clearly about delivery, the second about price, the third about the website. Naming them makes them usable. If nobody can name one, it is probably not describing anything real.",
    },
    {
      term: "The scales have to be evened out first",
      explain:
        "If one measure runs into the thousands and another from one to five, the big one dominates the combined scores entirely.",
      detail:
        "Same trap as several other techniques. Ask whether it was done. If not, your combined scores are essentially the single biggest-numbered column wearing a disguise.",
    },
    {
      term: "How many to keep is a judgement",
      explain:
        "You can see how much of the total variation each combined score accounts for. Usually the first few cover most of it and the rest are noise.",
      detail:
        "There are conventions for choosing, and none is definitive. The practical question is how many you can actually name and use, which is usually three or four.",
    },
    {
      term: "It only finds patterns of a particular kind",
      explain:
        "It looks for measures that move together in straight lines. If two things are related in a more complicated way, it will miss it.",
      detail:
        "You do not need to know the detail. You need to know it is not a general-purpose pattern finder, and that a poor result may mean the relationships are not the shape it looks for.",
    },
    {
      term: "The chart is often the whole value",
      explain:
        "Squash sixty columns down to two and you can plot every customer as a dot on one page, with similar customers near each other.",
      detail:
        "For a lot of businesses that picture is the deliverable. It shows clusters, outliers and gaps that nobody could see in a spreadsheet, and it needs no further modelling.",
    },
    {
      term: "Sometimes the answer is to drop columns instead",
      explain:
        "If eight questions all say the same thing, you could combine them mathematically, or you could pick the best one and delete the other seven.",
      detail:
        "Dropping is cruder and it keeps everything explainable, because the survivor is still a real question with a real meaning. For business use that is frequently the better trade.",
    },
    {
      term: "It is often a step towards something else",
      explain:
        "Squashing the columns down and then feeding the result into a model is common. It speeds things up and stops the model being confused by many columns saying the same thing.",
      detail:
        "Ask whether that is what is happening. If so, the explainability cost applies to the final model too, and it needs raising before somebody discovers it at go-live.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Sixty questions asking about four things.",
      walkthrough:
        "The problem: a business ran a sixty-question satisfaction survey and reported all sixty scores every quarter. Nobody could see the wood for the trees and the report was ignored. What was happening: an analyst squashed the sixty down and found that four combined scores accounted for most of the variation. Reading what fed into each one, they were clearly about delivery, about price and value, about the website, and about how support handled problems.",
      result:
        "What changed: they reported four numbers with names instead of sixty without. The report started getting read and discussed. They kept all sixty questions in the survey, because the detail was still useful when investigating a drop, but the headline reporting became four things a director could hold in their head.",
    },
    {
      kind: "illustration",
      scenario: "The picture that showed a group nobody knew about.",
      walkthrough:
        "The problem: a business had around forty measures about each customer and no way of seeing the shape of its base. What was happening: they squashed the forty down to two and plotted every customer as a dot. Most sat in one large mass. A clearly separate group of a few hundred sat well away from everybody else.",
      result:
        "What changed: investigating that separate group found a set of customers who bought a narrow range very frequently through a channel the business barely thought about. Nobody had noticed them because they were invisible in every report. The chart took a day and the finding was worth considerably more than any model.",
    },
    {
      kind: "illustration",
      scenario: "Combined scores that could not be explained.",
      walkthrough:
        "The problem: a team squashed a set of financial ratios down and fed the result into a risk model. The model performed well. What was happening: at review, a manager asked why a particular customer had been scored as high risk. The answer involved a weighted mixture of eleven ratios that meant nothing to anybody in the room.",
      result:
        "What changed: they rebuilt the risk model using a smaller set of the original ratios, chosen with the credit team. Performance dropped slightly and every score became explainable. Squashing columns down is fine when nobody has to be given a reason and it is a serious problem when they do, and that question should be asked before rather than after.",
    },
  ],

  learningPath: [
    {
      title: "Check whether you actually have overlap",
      body: "Look at whether your measures move together. If they are all largely independent, there is nothing to squash and this will not help.",
      effort: "2 hours",
      outcome: "A view on whether the technique applies at all.",
    },
    {
      title: "Ask whether anybody needs an explanation",
      body: "Will a manager, a customer or a regulator ever ask why a particular score came out as it did? If so, be very careful here.",
      effort: "A conversation",
      outcome: "The constraint that most often decides against this approach.",
    },
    {
      title: "Check the scales were evened out",
      body: "Ask directly. Without it, the combined scores are dominated by whichever column has the biggest numbers.",
      effort: "One question",
      outcome: "A catch for an invisible and common mistake.",
    },
    {
      title: "Read what feeds each combined score and name it",
      body: "Look at which original measures contribute most to each one and try to give it a business name. Do this with somebody who knows the subject.",
      effort: "2 hours",
      outcome: "Either usable named themes or the discovery that one is not describing anything real.",
    },
    {
      title: "Keep only as many as you can name",
      body: "Three or four is typical. If you cannot describe the fifth in a sentence, it is unlikely to be useful even if it accounts for some variation.",
      effort: "Part of the analysis",
      outcome: "A set of scores the business can actually work with.",
    },
    {
      title: "Try simply dropping columns as the alternative",
      body: "Pick the best question from each overlapping group and delete the rest. Cruder, and everything stays explainable.",
      effort: "Half a day",
      outcome: "Frequently the better trade for business use, and worth measuring against.",
    },
    {
      title: "Plot it, if nothing else",
      body: "Squash to two and put everything on one chart. Look for separate groups, outliers and gaps.",
      effort: "1 day",
      outcome: "Often the most valuable single output of the whole exercise.",
    },
  ],

  exercises: [
    {
      title: "Find the overlap in a survey",
      brief:
        "Take any survey your business runs with more than ten questions. Check which questions' answers move together closely. Group them by hand.",
      success:
        "You can say roughly how many distinct things your survey is really asking about, and it is usually far fewer than the number of questions.",
      time: "2 hours",
    },
    {
      title: "Try dropping instead of combining",
      brief:
        "For any group of overlapping measures, pick the single best one and see how much information you lose compared with keeping all of them.",
      success:
        "You know whether the simple approach of dropping is good enough, which keeps everything explainable.",
      time: "Half a day",
    },
    {
      title: "Name the combined scores",
      brief:
        "For any set of combined scores in your business, look at which original measures feed each one and try to name them with somebody who knows the subject.",
      success:
        "You can name most of them, or you have found one that describes nothing recognisable, which is worth investigating.",
      time: "1 hour",
    },
  ],

  caseStudy: {
    business:
      "A drinks bottling plant. One filling line, running several product sizes, with a few hundred sensor readings logged every minute.",
    problem:
      "The engineering team wanted to predict line stoppages. They had an enormous quantity of sensor data and every attempt to use it had gone nowhere. The dashboards had four hundred and something readings on them, which meant nobody looked at any of them.",
    analysis: [
      "Four hundred columns and a modest number of recorded stoppages is a bad ratio, and it is the core difficulty. With that many measurements and comparatively few events, anything you build will find patterns that are not there.",
      "The second problem is that the readings are heavily duplicated. A dozen temperature sensors along one section move together almost perfectly. They are twelve columns carrying roughly one piece of information.",
      "That duplication is what makes reduction the right move here. You are not throwing information away so much as noticing that four hundred readings describe far fewer independent things.",
      "The counting supported it. A modest number of underlying patterns accounted for the large majority of all the variation across every sensor. In plain terms: the line has a handful of distinct states and four hundred ways of describing them.",
      "Ruled out: adding more sensors, which was the team's instinct and the standing budget request. The problem was never a shortage of measurement.",
    ],
    aiApproach: [
      {
        step: "Compress before predicting",
        detail:
          "Reduce the several hundred readings to a much smaller set of combined measures that capture most of the variation. The prediction is then built on those, which gives it a fighting chance given how few stoppages there are to learn from.",
      },
      {
        step: "Put the sensors on a comparable scale first",
        detail:
          "Pressure in one unit and temperature in another will otherwise let whichever has the largest raw numbers dominate entirely. This step is easy to skip and it invalidates everything downstream.",
      },
      {
        step: "Check what the combined measures represent",
        detail:
          "Each one is a weighted blend of original readings, and reading those weights is worth the time. Here the largest was essentially the whole line running warm together, and the second separated one section from the rest. Both were recognisable to the engineers, which is the check that the reduction is describing reality.",
      },
      {
        step: "Accept the loss of direct explanation",
        detail:
          "You can no longer say sensor forty-one is the problem, only that a combination shifted. That is a real cost. It was acceptable here because the output triggers an inspection rather than a decision anybody must justify.",
      },
      {
        step: "Watch the compressed measures directly",
        detail:
          "The unexpected win. Plotting the handful of combined measures gave an operator view of the line that four hundred gauges never could, and it was useful before any prediction existed.",
      },
    ],
    solution: [
      "Several hundred readings reduced to a small set of combined measures, updated continuously.",
      "A stoppage risk prediction built on those rather than on the raw sensors.",
      "An operator screen showing the handful of measures instead of four hundred gauges.",
      "An alert when the combined picture moves outside its normal range, which fires before any single sensor breaches its own limit.",
      "The sensor expansion budget request withdrawn.",
    ],
    impact: [
      "The prediction became possible at all, where every previous attempt had drowned in columns.",
      "The operator screen turned out to be the more valuable half, and it was a by-product. Four hundred gauges is the same as no gauges.",
      "Alerts started firing on the combined picture before individual sensors breached limits, which bought time.",
      "The instinct to buy more sensors was corrected, which saved a recurring budget line.",
    ],
    whatWouldHaveKilledIt:
      "Feeding all four hundred columns into a model with a few dozen stoppages to learn from. It would have found convincing patterns in noise, performed beautifully on history and failed in production, and the failure would have been slow and confusing. The other risk was the scaling step: skipped, the whole thing quietly becomes an analysis of whichever sensors happen to have the biggest numbers.",
  },

  mistakes: [
    {
      mistake: "Using it where decisions have to be explained",
      why: "The combined scores are mathematical mixtures with no business meaning. When somebody asks why a score came out as it did, there is no sentence that answers it.",
      fix: "Ask about explanation requirements before using this, and prefer dropping columns where reasons matter.",
    },
    {
      mistake: "Not evening out the scales",
      why: "One column measured in thousands will dominate every combined score, so you get an elaborate version of that single column.",
      fix: "Ask whether it was done. One question and it catches something otherwise invisible.",
    },
    {
      mistake: "Keeping more combined scores than you can name",
      why: "Scores nobody can describe do not get used, and their presence makes everything harder to explain for no benefit.",
      fix: "Keep only what you can name in a sentence with somebody who knows the subject.",
    },
    {
      mistake: "Treating the combined scores as real quantities",
      why: "People start talking about score two going up as if it were a business measure. It is a mixture, and it may not behave the way a real measure would.",
      fix: "Name them explicitly as approximations of themes and keep the original measures available for investigation.",
    },
    {
      mistake: "Reaching for it when dropping columns would do",
      why: "Picking the best question from each overlapping group is cruder, cheaper and keeps everything explainable, and it frequently loses very little.",
      fix: "Always try dropping first and measure the difference.",
    },
    {
      mistake: "Assuming it will find any pattern",
      why: "It looks for measures moving together in straight lines. Relationships of other shapes are invisible to it, so a poor result may not mean there is nothing there.",
      fix: "Treat a weak result as inconclusive rather than as evidence that your measures contain nothing.",
    },
  ],

  bestPractices: [
    "Check that your measures genuinely overlap before using this.",
    "Ask about explanation requirements first.",
    "Confirm the scales were evened out.",
    "Read what feeds each combined score and name it with a subject expert.",
    "Keep only as many combined scores as you can name.",
    "Try simply dropping columns as an alternative and measure the difference.",
    "Keep the original measures available for investigation.",
    "Plot the two-dimensional version, because the chart is often the real value.",
  ],

  proTips: [
    "Do the plot first even if you do nothing else. Squashing forty columns to two and putting every customer on one page takes a day, needs no modelling, and regularly turns up a group or an outlier that nobody knew existed. It is the cheapest insight available in this whole area.",
    "Try naming the combined scores with somebody from the business rather than doing it yourself. They will recognise a theme instantly or say that makes no sense, and both answers are useful. Your own interpretation of a weighted mixture is far less reliable than you think.",
    "Before agreeing to combine anything, ask what would happen if you simply deleted the redundant questions. Frequently the answer is very little, and you keep the enormous advantage that every remaining number is a real question with a real meaning that anybody can discuss.",
    "Watch for people starting to treat a combined score as a target. Once somebody says we need to improve score two, you have a problem, because nobody can act on a weighted mixture and the underlying questions have been hidden from the people who could actually do something.",
  ],

  businessApplications: [
    "Reducing a long survey to a handful of reportable themes.",
    "Making sense of many sensor readings from the same equipment.",
    "Plotting a whole customer base on one chart to see its shape.",
    "Condensing many financial or operational ratios into a few scores.",
    "Speeding up a model that is being confused by many overlapping columns.",
    "Spotting outliers and unexpected groups that are invisible in a spreadsheet.",
  ],

  checklist: [
    "Overlap between measures confirmed before starting.",
    "Explanation requirement established with the business.",
    "Scales confirmed as evened out.",
    "Contributing measures read for each combined score.",
    "Each retained score named by a subject expert.",
    "Number kept limited to what can be named.",
    "Dropping columns tried and measured as an alternative.",
    "Original measures retained and available.",
    "Two-dimensional plot produced and examined.",
  ],

  faqs: [
    {
      q: "What do the combined scores actually mean?",
      a: "Mathematically they are weighted mixtures of your original measures. In business terms they mean nothing on their own, which is why somebody has to read what feeds each one and give it a name. If nobody can name it, do not use it.",
    },
    {
      q: "How many should we keep?",
      a: "As many as you can name in a sentence, which is usually three or four. There are conventions based on how much variation each accounts for, and none is definitive, and the naming test is more practical.",
    },
    {
      q: "Is dropping columns just as good?",
      a: "Frequently, and it keeps everything explainable, because a surviving question is still a real question. It loses a little information. For business use that is often the better trade and it is worth measuring.",
    },
    {
      q: "Can we use it where decisions have to be explained?",
      a: "Be very careful. When somebody asks why a particular score came out as it did, the honest answer involves a weighted mixture nobody can describe. In regulated settings that is usually a reason to choose something else.",
    },
    {
      q: "Why does the scaling matter so much?",
      a: "Because a measure running into the thousands swamps one running from one to five. Without evening them out, your combined scores are effectively the biggest column in disguise, and nothing in the output reveals that.",
    },
    {
      q: "What if the result is disappointing?",
      a: "It may mean your measures are genuinely independent, which is useful to know. It may also mean the relationships are not the straight-line kind this looks for. Treat a weak result as inconclusive rather than as proof there is nothing there.",
    },
  ],

  tools: [
    { name: "A two-dimensional plot", what: "Every case as a dot on one page. Often the most valuable output and it takes a day.", cost: "Free" },
    { name: "The list of what feeds each score", what: "For naming them with a subject expert. If it cannot be named, it should not be used.", cost: "Free" },
    { name: "A dropping-columns comparison", what: "Pick the best from each overlapping group. Cruder, explainable, and frequently good enough.", cost: "Free" },
    { name: "The original measures, retained", what: "For investigating whenever a combined score moves.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "clustering-to-find-customer-groups", anchor: "finding groups once you can see the shape", context: "Next step" },
    { slug: "what-data-you-need-before-you-start", anchor: "checking your measures are worth having", context: "Data" },
    { slug: "explaining-an-ai-decision", anchor: "why explainability matters here", context: "The trade-off" },
  ],

  relatedGuides: ["clustering-to-find-customer-groups", "what-data-you-need-before-you-start", "explaining-an-ai-decision"],

  conclusion: [
    "Take any survey your business runs with more than ten questions and check which answers move together closely. You will usually find that a long questionnaire is really asking about four or five things, and knowing that changes how you report it.",
  ],
};

export default guide;
