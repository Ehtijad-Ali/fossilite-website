import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "choosing-the-right-model-for-the-job",
  seoTitle: "Which Model for Which Problem: A Plain Guide",
  metaDescription:
    "Five questions that get you to the right family of approaches, a one-page comparison, and the two things that matter more than the choice itself.",
  title: "Which Model for Which Problem",
  keywords: [
    "choosing a machine learning model",
    "which model to use business",
    "model selection guide",
    "machine learning decision guide",
    "regression vs classification vs clustering",
    "picking the right algorithm",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 13,

  intro: [
    "There are hundreds of approaches and you need to know about six. More usefully, you need five questions that get you to the right family in about ten minutes, and then a way of judging whether the specific choice inside that family matters.",
    "The honest position is that the choice of approach matters less than people think. What matters far more is whether you framed the problem right, whether you have decent information, and whether anybody acts on the answer. Teams argue about the choice because it feels like the technical decision, and it is rarely where the project succeeds or fails.",
    "That said, choosing badly does waste months. This is the short version of how to get to roughly the right place without needing to understand how any of them work.",
  ],

  whyItMatters: [
    "The main cost of choosing badly is time. Committing to something heavyweight for a problem that a simpler approach handles means months of specialist effort for an outcome that was available in a fortnight.",
    "The second cost is the ongoing one. Some choices commit you to specialist people and specialist infrastructure for as long as the thing is in service, and that rarely shows up in the original proposal.",
    "And there is a decision-quality cost. Some approaches you can explain and some you cannot, and finding out after building that somebody needed an explanation is an expensive way to learn.",
  ],

  coreConcepts: [
    {
      term: "Question one: what shape is the answer?",
      explain:
        "A number, such as how much or how long. A yes or no. Which of several categories. Or no answer at all, because you want to find groups.",
      detail:
        "This one question eliminates most of the options. A number and a yes or no need different approaches and, importantly, get judged in completely different ways.",
    },
    {
      term: "Question two: what shape is the information?",
      explain:
        "Rows and columns, which is most business data. Or images, sound, or free-flowing language, where the arrangement carries the meaning.",
      detail:
        "If it is rows and columns, stay with approaches built for tables and you will nearly always do better. If it is the other kind, you need something built for it, and you should ask whether you can turn it into columns first.",
    },
    {
      term: "Question three: does anybody need an explanation?",
      explain:
        "Does a customer, a regulator or an internal committee have a right to know precisely why a decision went a particular way?",
      detail:
        "If yes, that rules out a lot and points you at things you can read, like a flowchart. Establish this before choosing rather than after, because it is not something you can add later.",
    },
    {
      term: "Question four: how much history have you got?",
      explain:
        "Hundreds of examples, thousands, or hundreds of thousands? And how many of them have a confirmed answer attached?",
      detail:
        "Small amounts of history point towards simpler approaches and towards starting from what you already know. Large amounts open up more options. Counting first avoids committing to something you cannot feed.",
    },
    {
      term: "Question five: is time part of the problem?",
      explain:
        "Are you predicting the next period, where this week depends on last week and December looks like last December? Or is each case independent?",
      detail:
        "Anything over time needs approaches that understand seasons and trends. Treating it as ordinary prediction throws away most of what makes it predictable.",
    },
    {
      term: "The short version for tables",
      explain:
        "Start with something simple. Then try a forest or a boosting approach. Compare all three. That covers the overwhelming majority of business prediction.",
      detail:
        "Do not skip the simple one. Its job is to tell you whether anything else was worth it, and occasionally it is good enough on its own.",
    },
    {
      term: "The two things that matter more than the choice",
      explain:
        "Whether your information actually contains the signal, and whether anybody acts on the output. Both beat the choice of approach comfortably.",
      detail:
        "If a project is not working, the odds are much better that the answer is better information or a clearer action than a cleverer method. That is where to look first.",
    },
    {
      term: "Always build the simple version",
      explain:
        "Whatever else you do, build something straightforward first and measure it honestly. It costs a day or two and it changes every subsequent conversation.",
      detail:
        "Without it, any accuracy figure sounds impressive. With it, you can say how much the sophisticated thing actually bought, which is the only question that matters.",
    },
    {
      term: "Consider what it costs to keep running",
      explain:
        "Who maintains it, on what, and what happens when they leave. Some choices commit you to specialist people indefinitely.",
      detail:
        "A slightly less accurate thing your existing team can look after is frequently the better business decision, and that trade almost never appears in the technical comparison.",
    },
  ],

  codeExamples: [
    {
      title: "The one-page version",
      language: "markdown",
      intro:
        "Print this. It gets you to roughly the right family in a few minutes without needing to understand how any of them work. The right-hand column is the thing people most often forget to ask about.",
      code: `WHAT SHAPE IS THE ANSWER?

  A number (how much, how long, how many)
    -> Start simple, then try a forest or boosting
    -> Judge it by: how far out is it typically, in business units

  Yes or no (will they leave, is this fraud)
    -> Start simple, then try a forest or boosting
    -> Judge it by: how much of the real thing did we catch,
       and how much of what we flagged was real
    -> NEVER judge it by accuracy alone

  Which of several categories
    -> Same family as yes or no
    -> Judge it by: which categories it confuses with which

  No answer given, find natural groups
    -> Clustering
    -> Judge it by: can experienced people name the groups,
       and would you treat them differently

  Something is odd and I cannot describe what
    -> Anomaly detection
    -> Judge it by: alert volume against what a person can review


WHAT SHAPE IS THE INFORMATION?

  Rows and columns (most business data)
    -> Stay with table-based approaches. They usually win.

  Images, sound, or free-flowing language
    -> Neural networks, and ask first whether you can
       turn it into columns instead

  Measurements over time, with seasons
    -> Forecasting approaches, not ordinary prediction


DOES ANYBODY NEED AN EXPLANATION?

  Yes, a precise defensible reason
    -> A readable approach such as a shallow decision tree
    -> Accept that you will lose some accuracy

  Roughly, for internal confidence
    -> Anything, plus the approximate explanations
       most tools can now produce

  No
    -> Whatever performs best


HOW MUCH HISTORY?

  Hundreds of examples
    -> Simple approaches, few factors, be careful
    -> Consider starting from what you already believe

  Thousands
    -> Forests and boosting work well here

  Hundreds of thousands, and images or text
    -> Neural networks become worth considering


WHATEVER YOU CHOOSE

  Build the simple version first and measure it.
  Ask who maintains this in three years.
  Ask what happens to the output and who acts on it.`,
      note:
        "The last three lines are the ones that actually decide whether a project works. The rest of the page decides how long it takes.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Five questions in ten minutes.",
      walkthrough:
        "The problem: a team had been arguing for two weeks about the right approach for predicting which maintenance jobs would overrun. What was happening: a BA asked the five questions in order. The answer is a number, so that is one family. The information is already a table of job attributes, so table-based approaches. Nobody needs an explanation, because it feeds an internal scheduling decision. They had about four thousand past jobs. Time is not really involved, since each job is independent.",
      result:
        "What changed: the answer was start simple, then try a forest and a boosting approach, and compare all three. That took two days rather than two weeks of debate. The five questions do not need any technical knowledge and they eliminate most of the argument.",
    },
    {
      kind: "illustration",
      scenario: "The question that should have been asked in week one.",
      walkthrough:
        "The problem: a lender spent four months building something to assess applications, choosing an approach on the basis of accuracy alone. What was happening: at the point of go-live, compliance asked what an applicant would be told if they were declined. Nobody could produce a precise reason. The approach that had been chosen could only give an approximate one.",
      result:
        "What changed: they had to rebuild the decline decision using something readable, and kept the accurate approach only for prioritising which applications got looked at first. Asking whether anybody has a right to an explanation takes thirty seconds in week one and cost four months when left until the end.",
    },
    {
      kind: "illustration",
      scenario: "The simple version was good enough.",
      walkthrough:
        "The problem: a business wanted to predict which quotes would convert, and the technical team proposed a substantial project. What was happening: a BA asked for the simple version first, as a comparison. It took two days. It got about eighty per cent of the way to what the team estimated the sophisticated version would achieve.",
      result:
        "What changed: they used the simple version, put the saved time into improving the information going in, and revisited a year later with better data. The simple version is not just a comparison. Occasionally it is the answer, and you only find that out by building it.",
    },
  ],

  learningPath: [
    {
      title: "Answer the five questions",
      body: "Shape of the answer, shape of the information, explanation needed, how much history, is time involved. Write the answers down.",
      effort: "30 minutes",
      outcome: "The right family, without needing to understand any of them.",
    },
    {
      title: "Establish the explanation requirement properly",
      body: "Ask compliance, legal, or whoever owns the customer relationship. Do not assume. This is the question most often left too late.",
      effort: "A conversation",
      outcome: "A constraint found while you can still act on it.",
    },
    {
      title: "Count your history honestly",
      body: "Complete examples with confirmed answers, not rows in a table. This decides which options are actually open to you.",
      effort: "Half a day",
      outcome: "A realistic shortlist.",
    },
    {
      title: "Build the simple version and measure it",
      body: "Whatever the eventual choice. A day or two, measured in business units on cases it never saw.",
      effort: "1-2 days",
      outcome: "The number everything else has to beat.",
    },
    {
      title: "Try two or three from the right family and compare",
      body: "Same data, same test cases, same measure. Report the differences in business terms rather than technical scores.",
      effort: "3-5 days",
      outcome: "A choice based on evidence rather than preference.",
    },
    {
      title: "Ask what it costs to keep running",
      body: "Who maintains it, on what, and what happens when they leave. Factor that into the comparison alongside accuracy.",
      effort: "A conversation",
      outcome: "A decision that accounts for the next three years, not just the build.",
    },
  ],

  exercises: [
    {
      title: "Run the five questions on a live project",
      brief:
        "Take any machine learning project in your business and answer the five questions. Compare your answer against what they are actually building.",
      success:
        "They match, or you have found a mismatch worth raising, which happens more often than you would expect.",
      time: "30 minutes",
    },
    {
      title: "Ask about the simple comparison",
      brief:
        "For any model in your business, ask what a straightforward approach achieves on the same data and what the difference is.",
      success:
        "You get a number showing what the sophistication bought, or you discover nobody has checked.",
      time: "20 minutes",
    },
    {
      title: "Ask the explanation question",
      brief:
        "For any model that affects customers, ask what somebody would be told if they wanted to know why the decision went against them. Ask compliance rather than the technical team.",
      success:
        "You get a clear answer, or you have found a requirement nobody has considered.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Choosing before the five questions",
      why: "Teams commit to an approach for reasons of familiarity or fashion, and then discover the problem needed something else entirely.",
      fix: "Answer the five questions first. It takes half an hour and needs no technical background.",
    },
    {
      mistake: "Leaving the explanation question until the end",
      why: "It is not something you can add afterwards. Discovering the requirement at go-live means a rebuild or a compliance problem.",
      fix: "Ask compliance or legal in the first week, not the technical team.",
    },
    {
      mistake: "Skipping the simple version",
      why: "Without it nobody knows what the sophistication bought, and occasionally the simple one would have been enough on its own.",
      fix: "Always build it. A day or two, and it changes every subsequent conversation.",
    },
    {
      mistake: "Comparing on technical scores only",
      why: "The business cannot judge those, and they leave out what it costs to run, whether it can be explained and who maintains it.",
      fix: "Compare in business units and include the ongoing cost and the maintenance question.",
    },
    {
      mistake: "Assuming more sophisticated means better",
      why: "On table-shaped data the sophisticated options frequently lose to the middling ones, and always cost more to run and explain.",
      fix: "Match the approach to the shape of the information, and make everything beat the simple version.",
    },
    {
      mistake: "Arguing about the choice when the information is the problem",
      why: "If the signal is not in the data, no approach will find it. Weeks get spent on method when the answer was to collect something different.",
      fix: "When results are poor, look at the information going in before looking at the method.",
    },
  ],

  bestPractices: [
    "Answer the five questions before considering any specific approach.",
    "Ask about explanation requirements in the first week, from compliance rather than the technical team.",
    "Count complete examples with confirmed answers.",
    "Match the approach to the shape of the information.",
    "Always build the simple version and measure it.",
    "Compare two or three options in business units.",
    "Include what it costs to keep running in the comparison.",
    "When results are poor, look at the information before the method.",
  ],

  proTips: [
    "Print the one-page version and take it to the meeting. Most arguments about which approach to use are really arguments between people who have not agreed what shape the answer is or whether anybody needs an explanation. Working through the page in front of everybody usually resolves it in ten minutes.",
    "Ask what the technical team would choose if they had to hand it over to somebody else in a year. That question surfaces the maintenance cost, which is real, ongoing and almost never in the comparison. Sometimes the answer changes the choice.",
    "When the results are disappointing, resist the pull towards a cleverer method. In my experience it is nearly always the information that is the problem, and adding one genuinely useful field beats changing approach almost every time.",
    "Ask what happens to the output before asking what should produce it. If nobody has decided what action follows, the choice of approach is entirely academic, and that conversation is more urgent than any technical one.",
  ],

  businessApplications: [
    "Reviewing a proposal to check the approach matches the problem.",
    "Settling an internal argument about which method to use.",
    "Sizing whether a project is a fortnight or six months.",
    "Checking that explanation requirements were considered.",
    "Comparing what a supplier proposes against the obvious alternatives.",
    "Deciding whether a disappointing project needs a different method or better information.",
  ],

  checklist: [
    "Shape of the answer established.",
    "Shape of the information established.",
    "Explanation requirement confirmed with compliance or legal.",
    "Complete examples with confirmed answers counted.",
    "Whether time is part of the problem established.",
    "Simple version built and measured in business units.",
    "Two or three options from the right family compared.",
    "Ongoing maintenance cost and owner established.",
    "The action that follows the output agreed.",
  ],

  faqs: [
    {
      q: "Does the choice of approach really matter less than people think?",
      a: "For most business problems, yes. Framing the problem, having the right information and having somebody act on the output all matter more. The choice matters enough that a bad one wastes months, which is why the five questions are worth half an hour.",
    },
    {
      q: "What if we do not know how much history we have?",
      a: "Find out before anything else. Count complete examples with confirmed answers, not rows in a table. It is the constraint that most often makes a proposed approach impossible, and it takes half a day to establish.",
    },
    {
      q: "Should we always start with the simple version?",
      a: "Yes. It costs a day or two, it gives you an honest comparison, and occasionally it is good enough on its own. There is no situation where skipping it makes the project better.",
    },
    {
      q: "How do we choose between a forest and a boosting approach?",
      a: "Try both and compare on your data. Boosting is usually a little more accurate and needs more care. A forest is more forgiving and needs less attention. If you have nobody to tune things, the forest is frequently the better business choice.",
    },
    {
      q: "When is a neural network actually right?",
      a: "When the information is images, sound or free-flowing language, where the arrangement carries the meaning. If the data is already a table, the reason for choosing one has usually been thrown away.",
    },
    {
      q: "What if the project is not working?",
      a: "Look at the information before the method. Adding one genuinely useful field beats switching approach in most cases, and it is much cheaper to try.",
    },
  ],

  tools: [
    { name: "The one-page version", what: "Printed and taken to the meeting. Resolves most method arguments in ten minutes.", cost: "Free" },
    { name: "A count of complete examples", what: "With confirmed answers. The constraint that most often decides what is possible.", cost: "Free" },
    { name: "The simple version, measured", what: "The number everything else has to beat, and occasionally the answer.", cost: "Free" },
    { name: "A maintenance question", what: "Who runs this in three years and on what. Almost never in the technical comparison.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "framing-a-business-problem-as-a-prediction", anchor: "checking it is a prediction problem first", context: "Before choosing" },
    { slug: "what-data-you-need-before-you-start", anchor: "whether you have enough to work with", context: "Feasibility" },
    { slug: "when-a-simple-rule-beats-a-model", anchor: "whether you need any of this", context: "Simplest option" },
  ],

  relatedGuides: ["framing-a-business-problem-as-a-prediction", "what-data-you-need-before-you-start", "when-a-simple-rule-beats-a-model"],

  conclusion: [
    "Take any model project running in your business and answer the five questions yourself: shape of the answer, shape of the information, explanation needed, how much history, is time involved. Then compare your answer against what they are building. It takes half an hour and needs no technical knowledge.",
  ],
};

export default guide;
