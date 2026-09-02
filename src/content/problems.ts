// ─────────────────────────────────────────────────────────────────────────────
// The library, indexed by the problem rather than by the technique.
//
// The categories are named the way the subject is organised: Data Science,
// Deep Learning, Automation. That is correct and it is useless to somebody who
// arrives thinking "cash is tight even though we're busy". They do not know
// that their problem is a classification problem, and telling them so is not
// where the conversation should start.
//
// So each entry leads with the sentence an owner would actually say out loud,
// and only then names what it turns out to be. Every `slug` must resolve to a
// published guide; the view drops any that do not, so a renamed guide degrades
// to a shorter list rather than a broken link.
// ─────────────────────────────────────────────────────────────────────────────

export interface BusinessProblem {
  id: string;
  /** What the owner says. First person, unpolished, no jargon. */
  said: string;
  /** The short name for it, once somebody has looked properly. */
  reallyIs: string;
  /** One or two lines on why the obvious response usually fails. */
  note: string;
  /** Guides in the order they should be read. */
  slugs: string[];
}

export const PROBLEMS: BusinessProblem[] = [
  {
    id: "cash",
    said: "We're busy and profitable on paper, and I still watch the bank balance every Monday.",
    reallyIs: "A timing problem, not a margin problem",
    note: "Almost always the invoices, and almost always concentrated on a few customers or one avoidable admin gap rather than spread evenly.",
    slugs: ["predicting-yes-or-no", "logistic-regression-and-scorecards", "the-cost-of-being-wrong"],
  },
  {
    id: "capacity",
    said: "We keep hiring and we're not getting through any more work.",
    reallyIs: "Capacity going into rework, not into volume",
    note: "The waste is rarely where management thinks. Usually it is something small happening forty times a day rather than the annual nightmare everyone complains about.",
    slugs: ["where-inefficiency-hides", "forecasting-demand-and-staffing", "working-out-the-best-combination"],
  },
  {
    id: "churn",
    said: "Customers are leaving and nobody can tell me why.",
    reallyIs: "A when question being asked as a whether question",
    note: "Everybody leaves eventually, so predicting whether is close to useless. Predicting when, and finding where the risk concentrates, is what you can act on.",
    slugs: ["how-long-until-it-happens", "clustering-to-find-customer-groups", "finding-themes-in-free-text"],
  },
  {
    id: "marketing",
    said: "We spend a lot on marketing and I cannot tell you what it bought.",
    reallyIs: "Measuring response instead of measuring effect",
    note: "Targeting your best customers produces excellent response rates because they were coming anyway. The discount is margin given away.",
    slugs: ["who-will-change-their-mind", "learning-by-trying", "framing-a-business-problem-as-a-prediction"],
  },
  {
    id: "quoting",
    said: "Half our jobs run over and the other half we price too high and lose.",
    reallyIs: "An estimating problem, usually one person's private skill",
    note: "The overruns are rarely random. They cluster on something the person quoting was never told to ask about.",
    slugs: ["predicting-a-number-with-regression", "finding-the-most-similar-past-cases", "decision-trees-for-business"],
  },
  {
    id: "stock",
    said: "We're carrying too much stock, and still running out of the things people want.",
    reallyIs: "A reorder rule nobody has scored",
    note: "Start with the dumbest possible rule and backtest it. Very often it is close enough, and the gap has a cause somebody in the business already knows about.",
    slugs: ["when-a-simple-rule-beats-a-model", "market-basket-analysis", "forecasting-demand-and-staffing"],
  },
  {
    id: "forecast",
    said: "Our forecasts are always wrong and we plan around them anyway.",
    reallyIs: "A single line where there should be a range",
    note: "Rostering or ordering to one number is wrong half the time by construction. And a forecast that worked last year may have quietly stopped.",
    slugs: ["forecasting-demand-and-staffing", "why-models-stop-working", "predicting-versus-deciding"],
  },
  {
    id: "admin",
    said: "We're drowning in email and someone spends every morning sorting it.",
    reallyIs: "A sorting problem, and the training data already exists",
    note: "Years of somebody forwarding things to the right team is a labelled dataset created for free. This is usually the cheapest project in the building.",
    slugs: ["naive-bayes-for-sorting-text", "putting-a-model-into-a-real-process", "when-a-simple-rule-beats-a-model"],
  },
  {
    id: "customers",
    said: "I don't know which customers or leads are worth chasing.",
    reallyIs: "A ranking problem with a hard capacity limit",
    note: "You do not need a yes or no. You need today's list in order, cut to however many calls actually fit in a day.",
    slugs: ["logistic-regression-and-scorecards", "clustering-to-find-customer-groups", "recommending-the-next-thing"],
  },
  {
    id: "surprises",
    said: "Things go wrong and we only find out when a customer tells us.",
    reallyIs: "No definition of normal, so nothing can look abnormal",
    note: "Thresholds miss everything underneath them. And what counts as normal has to be defined per site and per season, or you spend every winter crying wolf.",
    slugs: ["spotting-the-unusual", "why-many-small-models-beat-one", "too-many-columns"],
  },
  {
    id: "sold",
    said: "A supplier has quoted us for AI and I cannot judge whether it is any good.",
    reallyIs: "An accuracy figure doing work it cannot do",
    note: "Ask what the thing you care about happens how often. If it is rare, a system that always says no scores brilliantly and is worth nothing.",
    slugs: ["knowing-if-a-model-is-any-good", "when-a-simple-rule-beats-a-model", "the-cost-of-being-wrong"],
  },
  {
    id: "data",
    said: "Everyone says we're sitting on valuable data and nobody can tell me what to do with it.",
    reallyIs: "No decision attached to the idea",
    note: "The question that settles it in an afternoon: what would you do differently if you knew? If the answer is nothing specific, it is a wish rather than a project.",
    slugs: ["framing-a-business-problem-as-a-prediction", "what-data-you-need-before-you-start", "choosing-the-right-model-for-the-job"],
  },
];
