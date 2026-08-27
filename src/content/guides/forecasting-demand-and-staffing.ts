import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "forecasting-demand-and-staffing",
  seoTitle: "Forecasting: How Much Next Week, Next Month, Next Year",
  metaDescription:
    "Predicting over time is different from other predictions. Seasons, trends, one-off events, and why the average forecast is the wrong thing to plan around.",
  title: "Forecasting How Much and When",
  keywords: [
    "demand forecasting business",
    "time series forecasting explained",
    "staffing forecast model",
    "sales forecasting machine learning",
    "seasonality forecasting",
    "forecast accuracy business",
  ],
  category: "data-science",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "How many orders will we get next month. How many people do we need on the phones on Saturday. How much stock should we hold in November. These questions look like ordinary predictions and they behave differently, because time is involved.",
    "The difference is that with most predictions each case is independent. This customer's behaviour has nothing to do with that customer's. With anything over time, next week depends on this week, December looks like last December, and there is often a trend running underneath the whole thing.",
    "That gives you more to work with and it also introduces a specific set of traps. This guide is about the business side of it: what a forecast can and cannot tell you, why the single number you get handed is usually the wrong thing to plan around, and how to tell a genuinely useful forecast from one that just extrapolates a line.",
  ],

  whyItMatters: [
    "Almost every operational decision rests on a forecast, whether or not anybody calls it that. Staffing, stock, cash, capacity, opening hours. Getting it wrong shows up as either paying for people you did not need or turning customers away.",
    "It is also one of the few areas where a modest improvement translates straight into money. If you can reduce how far out you typically are by a quarter, that is less safety stock, or fewer agency staff booked in case, and the arithmetic is easy to do.",
    "And it is the area where the gap between what gets produced and what gets used is widest. A great many businesses have a forecast that nobody plans around, because it arrives as a single number with no sense of how wrong it might be.",
  ],

  coreConcepts: [
    {
      term: "Three things are usually going on at once",
      explain:
        "A general direction over time, whether growing or shrinking. A repeating pattern, such as busier in December or on Mondays. And random variation on top of both.",
      detail:
        "Any decent forecast separates those. If somebody hands you a number without being able to say how much of it is the trend and how much is the seasonal pattern, they have probably just fitted a line.",
    },
    {
      term: "There is usually more than one repeating pattern",
      explain:
        "A contact centre has a daily pattern, a weekly pattern and a yearly pattern all running at once. Busy in the morning, busy on Mondays, busy in January.",
      detail:
        "Most simple approaches only handle one of those. It is worth asking which patterns have been accounted for, because missing the weekly one while capturing the yearly one produces a forecast that is right on average and wrong every Monday.",
    },
    {
      term: "The single number is the least useful part",
      explain:
        "A forecast of four hundred orders is not a plan. Four hundred orders, and it is rarely below three hundred and twenty or above five hundred, is a plan.",
      detail:
        "You staff for the range, not the middle. If somebody gives you a forecast without a range, ask for one, because the range is what actually determines what you should do.",
    },
    {
      term: "Being wrong high and being wrong low cost different amounts",
      explain:
        "Too much stock costs you storage and eventually waste. Too little costs you a sale and sometimes a customer. Too many staff costs a shift. Too few costs a queue and a complaint.",
      detail:
        "Once you know both costs you can decide deliberately whether to plan above or below the middle of the forecast. Almost nobody does this and it is one of the highest-value conversations available.",
    },
    {
      term: "Known events matter more than clever methods",
      explain:
        "A bank holiday, a promotion, a competitor closing, the school holidays. These explain more of the variation in most businesses than any sophistication in the approach.",
      detail:
        "Getting a calendar of known events into the forecast is usually the single biggest improvement available, and it is not technically difficult. It is mostly a matter of somebody maintaining the calendar.",
    },
    {
      term: "Further ahead means less accurate, and say by how much",
      explain:
        "Next week is much more predictable than next quarter. A forecast that reports the same confidence at both is not being honest.",
      detail:
        "Ask how far out it is typically wrong at one week, one month and one quarter. Those three numbers tell you what horizon you can actually plan on, which is often shorter than people assume.",
    },
    {
      term: "Check it against the obvious simple answer",
      explain:
        "Same as last week. Same as this month last year. The average of the last four weeks. Those are real forecasts and they are sometimes hard to beat.",
      detail:
        "Any proposed method should be measured against them. If a sophisticated approach only just beats same as last year, it may not be worth what it costs to run and maintain.",
    },
    {
      term: "Your own actions distort your history",
      explain:
        "If you ran out of stock in March, your sales history for March shows what you sold, not what people wanted. If you were short-staffed on Saturday, your call data shows how many got through, not how many rang.",
      detail:
        "This catches out a lot of forecasting work. The model learns from a record shaped by your own constraints and then confidently forecasts the constraint rather than the demand.",
    },
    {
      term: "Somebody has to own the change from forecast to plan",
      explain:
        "A forecast is not a rota and not a purchase order. Somebody converts it into a decision, applying judgement about cost, risk and what they know that the numbers do not.",
      detail:
        "That person should be named, and they should be able to override with a reason recorded. A forecast fed straight into an automated decision with no human step is a good way to be confidently wrong at scale.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The forecast that was right on average and wrong every Monday.",
      walkthrough:
        "The problem: a contact centre had a forecast that looked reasonable month to month, and the team was constantly either overwhelmed or idle. What was happening: the forecast handled the yearly pattern well and treated every day within a month as the same. Mondays and the day after a bank holiday ran about forty per cent above the daily average, and Fridays ran well below.",
      result:
        "What changed: they added the day-of-week pattern and a flag for the day after a closure. Monthly accuracy barely moved, which is why nobody had spotted the problem. Daily accuracy improved a great deal and the staffing problem largely went away. Ask which repeating patterns have been accounted for, not whether the forecast is accurate.",
    },
    {
      kind: "illustration",
      scenario: "Forecasting the shortage rather than the demand.",
      walkthrough:
        "The problem: a retailer's forecast for a popular line kept coming in low, and they kept running out. What was happening: the model was learning from sales history. In every previous peak they had run out partway through, so the recorded sales flattened off. The model saw a ceiling, learned the ceiling, and forecast the ceiling.",
      result:
        "What changed: they started recording when an item went out of stock and treated those periods differently, so the model knew that those figures were limited by supply rather than by demand. Wherever your own capacity has constrained what got recorded, your history is a record of what you could do, not what people wanted.",
    },
    {
      kind: "illustration",
      scenario: "Two costs that changed how they planned.",
      walkthrough:
        "The problem: an operations team argued every month about whether to staff to the forecast or above it. What was happening: a BA asked for two numbers. An extra person on a shift costs a known amount. A queue that goes beyond a certain length produces complaints and, at busy times, abandoned calls that come back the next day and cost more to handle.",
      result:
        "What changed: with both numbers side by side it was obvious they should be planning somewhat above the middle of the forecast rather than at it. Nobody had been unreasonable. They had been arguing about a judgement without the two figures that settle it, and getting those took one conversation.",
    },
  ],

  learningPath: [
    {
      title: "Work out what decision the forecast feeds",
      body: "Staffing, stock, cash, capacity. Then find out how far ahead that decision has to be made, because that sets the horizon you actually need.",
      effort: "1 hour",
      outcome: "A forecast aimed at a decision rather than produced because somebody asked.",
    },
    {
      title: "Build the obvious simple version first",
      body: "Same as last week. Same period last year. Average of the last four. Measure how far out each is. This is your comparison and it is sometimes surprisingly hard to beat.",
      effort: "Half a day",
      outcome: "A number anything more elaborate has to justify itself against.",
    },
    {
      title: "Get the calendar of known events",
      body: "Bank holidays, promotions, school holidays, invoicing cycles, anything the business does on a schedule. Somebody has to own keeping this current.",
      effort: "1-2 days",
      outcome: "Usually the biggest single improvement available, and not a technical one.",
    },
    {
      title: "Check whether your own limits shaped the history",
      body: "Find the periods where you ran out, were short-staffed or turned work away. Those records show your capacity rather than the demand.",
      effort: "Half a day",
      outcome: "Protection against forecasting your own constraint back at yourself.",
    },
    {
      title: "Ask for accuracy at each horizon",
      body: "How far out is it typically, one week ahead, one month ahead, one quarter ahead? Three separate numbers, not one.",
      effort: "One question",
      outcome: "An honest sense of how far ahead you can actually plan.",
    },
    {
      title: "Get the two costs and set the planning level",
      body: "What being over costs and what being under costs. Then decide deliberately whether to plan at, above or below the middle of the forecast.",
      effort: "A conversation",
      outcome: "The highest-value hour in most forecasting work, and one hardly anybody spends.",
    },
    {
      title: "Name who turns the forecast into a plan",
      body: "One person, able to override with a reason recorded. Keep the record so you can see later whether the overrides were right.",
      effort: "A conversation",
      outcome: "A clear line between predicting and deciding, with somebody accountable.",
    },
  ],

  exercises: [
    {
      title: "Measure the naive forecast",
      brief:
        "For something your business forecasts, work out how far out you would have been last year using only same as last month and same as this month last year. Compare against your actual forecast.",
      success:
        "You have a comparison number, and sometimes the discovery that the simple version is nearly as good.",
      time: "Half a day",
    },
    {
      title: "Find the constrained periods",
      brief:
        "Look through the last two years and find every period where you ran out, turned work away or were short-staffed. Mark them in the history.",
      success:
        "You know what proportion of your history reflects your own limits rather than real demand, and it is usually more than expected.",
      time: "2 hours",
    },
    {
      title: "Get the two costs",
      brief:
        "Ask the business what it costs to be over and what it costs to be under, for one specific decision the forecast feeds. Rough numbers are fine.",
      success:
        "You have two figures, and it is usually obvious from them whether you should be planning above or below the forecast.",
      time: "45 minutes",
    },
  ],

  caseStudy: {
    business:
      "The contact centre of a regional utility. Around sixty advisers taking calls about billing, meter readings and faults.",
    problem:
      "Some days the queue was twenty minutes and complaints followed. Other days advisers sat idle. The rota was built four weeks ahead from last year's same week, adjusted by whatever the planner remembered. Everyone knew it was wrong and nobody had a better method.",
    analysis: [
      "Two things were being conflated. How many calls will arrive is a forecasting question. How many people do we roster is a decision that depends on the forecast plus cost, service target and what the staff will accept. Mixing them is why the previous attempts had gone nowhere.",
      "Call volume was recorded by half hour going back six years, which is an unusually good position to start from.",
      "The shape was strongly repetitive. Monday is the busiest day, mornings beat afternoons, and the month around bill issue dates dwarfs everything else. Most of the pattern is calendar, which is good news because the calendar is known in advance.",
      "The spikes were the problem, and they split into two kinds. Predictable ones tied to billing runs and tariff changes, which are on a schedule somebody already has. And genuinely unpredictable ones driven by weather events causing faults.",
      "That split determined the whole design. You forecast the predictable part and you build a response for the rest, because trying to forecast a storm three weeks out is a waste of effort.",
    ],
    aiApproach: [
      {
        step: "Separate the repeating pattern from everything else",
        detail:
          "The first job is pulling apart the underlying trend, the weekly and daily cycles, and the annual shape. Most of the volume is explained by these, and seeing them separated is immediately useful even before a forecast exists.",
      },
      {
        step: "Feed in the calendar you already have",
        detail:
          "Billing run dates, tariff change dates, bank holidays. These are known weeks ahead and they drove the largest predictable spikes. A forecast that ignores a calendar the business already publishes is leaving the easiest accuracy on the table.",
      },
      {
        step: "Forecast a range, because a single line is a lie",
        detail:
          "The output is a likely volume plus a realistic high and low. Rostering to the middle guarantees being wrong half the time. The range is what lets the business choose how much cover to buy.",
      },
      {
        step: "Test it the way it will be used",
        detail:
          "The rota is set four weeks ahead, so test it forecasting four weeks ahead, repeatedly, across history. Testing at one week ahead produces a flattering number for a forecast nobody can act on.",
      },
      {
        step: "Handle the unpredictable separately",
        detail:
          "Storms are not forecastable at four weeks. What is available is a standing arrangement: a group of trained staff who can be called in at short notice, triggered by the weather warning rather than by the model.",
      },
    ],
    solution: [
      "A four-week-ahead forecast by half hour, given as a range.",
      "The rota built to the middle of the range with a defined flex either side, rather than to a single number.",
      "A weekly refresh so the last week before a shift is built on better information.",
      "A separate short-notice arrangement triggered by weather warnings, entirely outside the forecast.",
      "Forecast against actual reviewed each month, which is how anybody notices the model going stale.",
    ],
    impact: [
      "The predictable spikes stopped being surprises, because they were on a calendar the business had all along and had never connected to the rota.",
      "Rostering became a decision about how much cover to buy against a known range, rather than a guess presented as a plan.",
      "The idle days and the twenty-minute queues both reduced in frequency, because they were largely the same problem from opposite sides.",
      "The storm response improved by being taken out of the forecast rather than being expected of it.",
    ],
    whatWouldHaveKilledIt:
      "Judging it on the storm days. Every review meeting wanted to talk about the worst week of the year, which was unforecastable and always would be. A forecast is not a promise about the exceptional day, and a business that measures it that way will abandon a tool that was working perfectly well for the other fifty weeks. The other failure would have been rostering to a single number, which converts a decent forecast into a rota that is wrong half the time by construction.",
  },

  mistakes: [
    {
      mistake: "Planning to the middle number",
      why: "The middle is the most likely single value and it is not the best thing to plan around, because the cost of being over and the cost of being under are almost never equal.",
      fix: "Get both costs and decide deliberately where in the range to plan.",
    },
    {
      mistake: "Missing one of the repeating patterns",
      why: "A forecast that handles the yearly pattern and ignores the weekly one looks accurate monthly and is wrong every Monday, which is exactly when it matters.",
      fix: "Ask which patterns have been accounted for, and check accuracy at the level you actually plan at.",
    },
    {
      mistake: "Learning from history shaped by your own limits",
      why: "Periods where you ran out or were short-staffed record your capacity, not demand. The model then forecasts the ceiling and you keep running out.",
      fix: "Identify constrained periods and handle them separately rather than treating them as normal observations.",
    },
    {
      mistake: "Not maintaining the calendar of known events",
      why: "Known events explain more variation than any clever method. A calendar that was accurate at launch and never updated quietly degrades the forecast.",
      fix: "Give somebody the job of keeping it current, and treat it as part of running the forecast.",
    },
    {
      mistake: "Reporting one accuracy figure for all horizons",
      why: "Next week and next quarter are very different problems. A single figure hides how quickly it degrades and leads people to plan further ahead than they should.",
      fix: "Report accuracy separately at each horizon the business plans on.",
    },
    {
      mistake: "Feeding the forecast straight into an automatic decision",
      why: "You lose the person who knows the things the numbers do not, such as a customer having flagged a big order or a competitor closing.",
      fix: "Name somebody who converts forecast into plan and can override with a recorded reason.",
    },
  ],

  bestPractices: [
    "Start from the decision the forecast feeds and how far ahead it is made.",
    "Build the obvious simple forecast first as a comparison.",
    "Get a calendar of known events and keep it current.",
    "Identify periods where your own limits shaped the history.",
    "Ask which repeating patterns have been accounted for.",
    "Report accuracy separately at each planning horizon.",
    "Always present a range alongside the number.",
    "Get both costs and set the planning level deliberately.",
    "Name who turns the forecast into a plan, with recorded overrides.",
  ],

  proTips: [
    "Keep every forecast you produce alongside what actually happened, and look at the two together each month. Almost nobody does this, and after six months it tells you far more than any accuracy statistic. You see which periods you are consistently wrong about, which is where the improvement is.",
    "Record the overrides. When the person converting the forecast into a plan changes the number, capture why. After a year you can check whether the overrides improved things or made them worse, and the answer decides whether that step is adding judgement or noise.",
    "Ask what the business does when the forecast is wrong in each direction. The answer tells you where to focus. If being under simply means overtime, that is manageable. If it means turning customers away permanently, the whole planning level should shift and probably has not.",
    "Watch out for a forecast that has been quietly adjusted by somebody to be more optimistic because it feeds a target. This happens more often than anybody admits, and once it does the forecast is a negotiating position rather than a prediction. Ask whether the forecast and the target are the same number.",
  ],

  businessApplications: [
    "Staffing rotas, where daily and hourly patterns matter more than monthly totals.",
    "Stock and purchasing, where being over and being under cost very different amounts.",
    "Cash flow, where the timing matters as much as the total.",
    "Capacity planning for equipment, space or vehicles.",
    "Budgeting, where a range is far more useful than a single figure.",
    "Deciding opening hours or shift patterns from actual demand patterns.",
  ],

  checklist: [
    "The decision the forecast feeds is identified, with its lead time.",
    "Simple naive forecasts measured as a comparison.",
    "Calendar of known events assembled, with an owner.",
    "Periods constrained by your own capacity identified.",
    "All relevant repeating patterns accounted for.",
    "Accuracy reported separately at each planning horizon.",
    "A range presented alongside every number.",
    "Cost of being over and cost of being under obtained.",
    "Planning level set deliberately from those two costs.",
    "Named owner for turning forecast into plan, with overrides recorded.",
  ],

  faqs: [
    {
      q: "How far ahead can we usefully forecast?",
      a: "Ask for the typical error at one week, one month and one quarter and you will see it for yourself. In most businesses it degrades faster than people assume, and knowing where it becomes useless is more valuable than the forecast itself.",
    },
    {
      q: "Do we need machine learning for this?",
      a: "Often not. Established forecasting methods handle trends and seasons well and are easier to run and explain. Machine learning helps most when you have many outside factors to feed in, such as weather, prices and competitor activity.",
    },
    {
      q: "Why does our forecast keep underestimating our busy periods?",
      a: "Very often because you ran out or were short-staffed during previous busy periods, so the history records what you managed rather than what was wanted. Check whether your own limits shaped the data before blaming the method.",
    },
    {
      q: "Should the forecast be the same as the target?",
      a: "No, and keeping them separate matters. A forecast is what you think will happen. A target is what you want to happen. Merging them turns the forecast into a negotiation and you lose the ability to plan honestly.",
    },
    {
      q: "How do we handle a one-off event like a promotion?",
      a: "Flag it in the history so the model knows that period was unusual, and put upcoming ones in the calendar. Otherwise the model treats a promotional spike as normal and expects it to happen again.",
    },
    {
      q: "What accuracy should we expect?",
      a: "Compare against the naive versions rather than against perfection. If same as last year is typically twenty per cent out and your forecast is thirteen, that is a real improvement even though thirteen sounds unimpressive.",
    },
  ],

  tools: [
    { name: "A calendar of known events", what: "Bank holidays, promotions, school terms, billing cycles. Usually the biggest single improvement and not a technical one.", cost: "Free" },
    { name: "Naive forecasts as a comparison", what: "Same as last week, same as last year. Real forecasts and sometimes hard to beat.", cost: "Free" },
    { name: "A record of forecast against actual", what: "Kept every period. Tells you where you are consistently wrong, which is where the improvement is.", cost: "Free" },
    { name: "Two cost figures", what: "What being over costs and what being under costs. Settles where in the range to plan.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "capacity-and-volume-analysis", anchor: "turning a forecast into staffing decisions", context: "Application" },
    { slug: "predicting-a-number-with-regression", anchor: "predicting numbers where time is not involved", context: "Comparison" },
    { slug: "the-cost-of-being-wrong", anchor: "deciding where in the range to plan", context: "Deciding" },
  ],

  relatedGuides: ["capacity-and-volume-analysis", "predicting-a-number-with-regression", "the-cost-of-being-wrong"],

  conclusion: [
    "Work out how far out you would have been last year using nothing but same as this month last year. That single number is what your forecast has to beat, it takes an afternoon to produce, and it changes how people talk about whether the forecast is any good.",
  ],
};

export default guide;
