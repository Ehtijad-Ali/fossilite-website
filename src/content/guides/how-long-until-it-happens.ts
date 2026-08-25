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
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 12,

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
