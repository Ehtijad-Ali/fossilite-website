import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "when-a-simple-rule-beats-a-model",
  seoTitle: "When a Rule Somebody Wrote Beats a Model",
  metaDescription:
    "A rule written in an afternoon frequently gets most of the way. How to build the comparison, what a model has to beat it by, and when the rule should win.",
  title: "When a Simple Rule Beats a Model",
  keywords: [
    "baseline model business",
    "simple rules vs machine learning",
    "when not to use ai",
    "heuristics business decisions",
    "rules based approach",
    "model baseline comparison",
  ],
  category: "business-analysis",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 14,

  brief: {
    inOneMinute:
      "Build the dumb version first and score it. Very often it is close enough, and the cases it misses turn out to be things somebody in the business already knew.",
    problem: {
      headline: "Quoted a substantial sum for a demand forecasting system",
      detail:
        "A speciality coffee roaster buying green coffee for ninety cafe accounts. Buy too much and it ages; buy too little and you lose a cafe.",
    },
    wrongApproach: {
      what: "Buy the system",
      why: "It would probably have worked, at a large cost, to beat a spreadsheet by a small margin, in a business where nobody could have maintained it.",
    },
    rightApproach: {
      what: "Backtest a rule you can write on one page",
      why: "Twelve-week average, plus a buffer, reorder at the lead time. Run over three years of history it would have avoided almost every stockout. Then look only at what it missed.",
    },
    context: {
      where: "Stock, reordering, staffing, anywhere a spreadsheet is doing the job today.",
      decision: "Whether there is enough left on the table to justify a project.",
      metric: "Stockouts and ageing stock, against what the simple rule already achieves.",
    },
    takeaway:
      "Both remaining failures had causes the business already knew about. A new account is not something to predict; somebody in sales signed them weeks ago.",
  },

  story: {
    title: "How a large quote went unspent",
    caption:
      "Step one is skipped almost every time because it is not interesting. Without it, any model looks impressive, because nothing is being compared to it.",
    stages: [
      { stage: "Problem", label: "A big number on a quote", detail: "And no way to tell whether the problem it solves is worth that." },
      { stage: "Data", label: "Three years of usage", detail: "Already in the system. Nothing to collect and nothing to buy." },
      { stage: "Model", label: "The simplest possible rule", detail: "Arithmetic in a spreadsheet, backtested across the whole history." },
      { stage: "Prediction", label: "It would have avoided nearly everything", detail: "So the question narrows to what is left, which is ten or twenty specific occasions." },
      { stage: "Decision", label: "Read those misses individually", detail: "New accounts ramping up, and one seasonal line. Both are calendar facts the business already held." },
      { stage: "Result", label: "Improve the rule instead of replacing it", detail: "Still one page, and a written condition for when something more sophisticated would be justified." },
    ],
  },

  calculator: {
    title: "Is there enough left on the table to justify a project?",
    intro:
      "Score the problem before anybody quotes for it. Put in the size of the problem and how much of it a simple spreadsheet rule already handles.",
    inputs: [
      { id: "events", label: "Times a month it goes wrong", min: 1, max: 500, step: 1, value: 40 },
      { id: "cost", label: "What each one costs you", min: 5, max: 2000, step: 5, value: 120, prefix: "\u00a3" },
      { id: "rule", label: "How much a simple rule already catches", min: 0, max: 100, step: 5, value: 80, suffix: "%", help: "Backtest the dumbest rule you can write. Usually higher than people expect." },
      { id: "model", label: "How much you think a model would catch", min: 0, max: 100, step: 5, value: 90, suffix: "%" },
    ],
    compute: (v) => {
      const annual = v.events * v.cost * 12;
      const gap = Math.max(0, (v.model - v.rule) / 100) * annual;
      const ruleValue = (v.rule / 100) * annual;
      const worth = gap > 15000 ? "good" : gap > 5000 ? "neutral" : "bad";
      return {
        outputs: [
          {
            label: "What the remaining gap is worth a year",
            value: `\u00a3${Math.round(gap).toLocaleString()}`,
            hero: true,
            tone: worth,
            note: gap < 5000
              ? "Not much. Improve the rule, spend the money elsewhere, and write down what would change your mind."
              : gap < 15000
                ? "Marginal. Worth a conversation, and worth being honest about who would maintain it."
                : "Enough to be worth a proper look. Now check the data actually exists.",
          },
          { label: "The whole problem costs", value: `\u00a3${Math.round(annual).toLocaleString()} a year` },
          {
            label: "The simple rule already saves",
            value: `\u00a3${Math.round(ruleValue).toLocaleString()}`,
            tone: "good",
            note: "For an afternoon of work in a spreadsheet, which is the comparison every quote should be judged against.",
          },
        ],
      };
    },
    footnote:
      "The honest version of this needs you to actually backtest the simple rule rather than guess at it. That takes an afternoon over your own history, and it is the number the whole decision turns on.",
  },

  intro: [
    "Before anybody builds a model, somebody should spend an afternoon writing down the rule an experienced person would use. Chase anything over five hundred pounds that is more than a week overdue. Flag any order going to a new address from an account opened this month.",
    "Then measure how well that rule would have done against last year. That single number changes every conversation that follows, because it is what any model has to beat, and quite often it is closer than anybody expects.",
    "This is not an argument against models. It is an argument for knowing what you are comparing against. Without it, an accuracy figure sounds impressive on its own, and impressive on its own is not a reason to spend six months and take on something that needs maintaining forever.",
  ],

  whyItMatters: [
    "The comparison decides whether a project is worth doing, and it is the cheapest piece of analysis available. An afternoon of work regularly saves months.",
    "There is also an ongoing cost that never appears in the original comparison. A rule sits in your existing system and needs nobody. A model needs monitoring, refreshing, somebody who understands it, and an answer to what happens when they leave. A modest accuracy gain has to be worth all of that.",
    "And rules have a property models do not, which is that a person can read them, argue with them and change them in an afternoon when the business changes. That is worth real money in an operational setting.",
  ],

  coreConcepts: [
    {
      term: "Write the rule an experienced person would use",
      explain:
        "Sit with whoever does this job today and ask what they look at. Turn their answer into two or three conditions. That is your comparison.",
      detail:
        "It usually takes an afternoon and it is nearly always better than people expect, because experienced people have been quietly running a decent model in their heads for years.",
    },
    {
      term: "Measure it against last year",
      explain:
        "Apply the rule to a period of past cases and count how it would have done. Same measures you would use on a model.",
      detail:
        "This is the step people skip. Without a number, the rule is dismissed as unsophisticated. With one, it becomes the thing everything else is judged against.",
    },
    {
      term: "Ask what the model has to beat it by",
      explain:
        "Agree in advance how much better a model has to be to justify the extra cost and the ongoing maintenance. Then hold to it.",
      detail:
        "Agreeing this before you see the result is the whole discipline. Afterwards, whatever margin the model achieves will be argued to be sufficient.",
    },
    {
      term: "Count the ongoing cost, not just the build",
      explain:
        "Monitoring, refreshing, somebody who understands it, and what happens when that person moves on. A rule has none of that.",
      detail:
        "This routinely tips a marginal decision. A model that is three per cent better and needs a specialist forever is frequently a worse business choice than a rule that anybody can maintain.",
    },
    {
      term: "Rules can be changed in an afternoon",
      explain:
        "When the business shifts, somebody edits the rule. When a model needs to change, you retrain, revalidate and redeploy.",
      detail:
        "In a fast-moving operation that flexibility is worth a lot, and it never appears in an accuracy comparison.",
    },
    {
      term: "Rules can be explained and argued with",
      explain:
        "Anybody can read the rule, disagree with a threshold, and have that conversation. That surfaces disagreements that a model buries.",
      detail:
        "It also means the people using it trust it, which matters more for whether anything actually changes than a few points of accuracy do.",
    },
    {
      term: "Where rules genuinely lose",
      explain:
        "When the answer depends on many factors combining in ways nobody would write down. When it needs to be different for each customer. When the pattern shifts constantly.",
      detail:
        "Those are real situations and models are genuinely better in them. Knowing which situation you are in is the whole skill, and you only find out by building the rule and measuring it.",
    },
    {
      term: "The model built from the rule",
      explain:
        "Often the best answer is a middle option. Take the rule, and use data to set the thresholds properly rather than by somebody's guess from years ago.",
      detail:
        "You keep everything readable and changeable, and you fix the part that was actually wrong, which is usually the numbers rather than the logic.",
    },
    {
      term: "Where did the current threshold come from?",
      explain:
        "Almost every business rule has a number in it that somebody chose once. Ask when, and on what basis.",
      detail:
        "The answer is frequently that it was set when the business was a third of the size and has never been reviewed. Fixing that number is often worth more than replacing the rule entirely.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The coffee roaster: the week that saved a substantial quote",
      caption:
        "Step one is skipped almost every time, because it is not interesting. Without it any model looks impressive, since there is nothing to compare it against.",
      trigger: "Before any quote for a forecasting system is signed",
      runtime: "About a week, and it may well end the project.",
      stages: [
        {
          actor: "person",
          label: "Build the dumb version first",
          detail: "Twelve week average, a buffer, the lead time. An afternoon in a spreadsheet anybody can check.",
          output: "a rule, on one page",
        },
        {
          actor: "system",
          label: "Backtest it over three years",
          detail: "Count exactly what it would have got wrong, and when, rather than arguing about whether it would.",
          output: "every stockout and every overstock it would have caused",
        },
        {
          actor: "person",
          label: "Read only the misses, one at a time",
          detail: "Ten or twenty cases, read individually. A summary of them tells you nothing you can fix.",
          exception: "A miss nobody can explain is the one that justifies looking further. Set it aside rather than averaging it away.",
          output: "the reasons, in categories",
        },
        {
          actor: "rule",
          label: "Improve the rule rather than replacing it",
          detail: "New accounts flagged separately, and the seasonal line pulled out onto its own.",
          output: "a better rule, still one page",
        },
        {
          actor: "person",
          label: "Write down what would justify a model",
          detail: "So the decision is current rather than permanent, and nobody has to reopen the argument from scratch.",
          output: "a threshold, and a date to revisit it",
        },
      ],
      loop: "Revisited on the date that was written down, and against the rule as it now stands rather than the one it replaced.",
      outcome:
        "A substantial quote goes unspent, and the reordering gets better anyway. Both of those are the same result.",
    },
    {
      kind: "tree",
      title: "Read the cases the rule missed, then ask this",
      caption:
        "Both of the roaster's remaining failures fell down the right-hand branch. Building a model to infer a fact somebody in the business could simply tell you is the most avoidable waste in this whole field.",
      question: "The simple rule got these wrong. Why?",
      branches: [
        {
          answer: "Genuinely unpredictable",
          outcome: "Accept it, or buy a buffer. No model helps here either.",
        },
        {
          answer: "Predictable from data you hold",
          outcome: "Now a model might be worth it. Score it against the simple rule.",
        },
        {
          answer: "Somebody already knows",
          outcome: "Not a prediction problem. A new account was signed weeks ago. Ask them.",
        },
      ],
    },
    {
      kind: "flow",
      title: "The coffee roaster: how a substantial quote went unspent",
      caption:
        "Step one is skipped almost every time because it is not interesting. Without it any model looks impressive, because there is nothing to compare it against.",
      steps: [
        { label: "Build the dumb version first", note: "Twelve-week average, buffer, lead time", tone: "input" },
        { label: "Backtest it over three years", note: "Count exactly what it would have got wrong" },
        { label: "Read only the misses", note: "Ten or twenty cases, read individually" },
        { label: "Improve the rule, do not replace it", note: "New accounts flagged, seasonal line separated" },
        { label: "Write down what would justify a model", note: "So the decision is current, not permanent", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The afternoon that saved six months.",
      walkthrough:
        "The problem: a business was scoping a project to predict which invoices would be paid late. What was happening: before agreeing to it, a BA spent an afternoon with the credit control team. Their rule, roughly, was to worry about anything from a customer who had been late twice in the last six months, and anything over a certain value from an account less than a year old. She applied that to the previous year's invoices and measured it.",
      result:
        "What changed: the rule caught roughly two thirds of the invoices that ended up late. The project went ahead with a much clearer question, which was whether a model could get meaningfully past two thirds and whether the difference justified the cost. It could and it did, by a smaller margin than anybody had assumed, and the conversation about whether to proceed was an informed one.",
    },
    {
      kind: "illustration",
      scenario: "Fixing the number rather than replacing the rule.",
      walkthrough:
        "The problem: a manufacturer had a rule sending anything over a certain value for a second check. The queue for those checks was a bottleneck. What was happening: a BA asked where the threshold came from. Nobody knew. It predated the current system. Checking the data, the value distribution had shifted so much that the rule was now capturing about four times the proportion of orders it was originally designed to catch.",
      result:
        "What changed: they set the threshold from the data so it caught the intended proportion, and added one extra condition the checkers said actually mattered. The bottleneck largely disappeared. No model, two days of work, and the logic stayed readable and adjustable. Ask where the number came from before assuming the rule needs replacing.",
    },
    {
      kind: "illustration",
      scenario: "The model that won and did not last.",
      walkthrough:
        "The problem: a business replaced a simple rule with a model that performed noticeably better in testing. What was happening: eighteen months later the model had drifted, the person who built it had left, nobody knew how to retrain it, and it had quietly been switched off. The old rule was still sitting in the system and had been quietly doing the work for six months.",
      result:
        "What changed: they rebuilt it deliberately with a named owner, a refresh schedule and documentation. The lesson was not that the model was wrong to build. It was that nobody had costed keeping it alive, and a modest accuracy gain does not survive an owner leaving. Ask who runs this in three years before comparing on accuracy alone.",
    },
  ],

  learningPath: [
    {
      title: "Sit with whoever does this today",
      body: "Ask them to talk through their last five decisions out loud and write down every factor. Turn it into two or three conditions.",
      effort: "2 hours",
      outcome: "A rule based on experience rather than guesswork, and a person who now has a stake in it.",
    },
    {
      title: "Measure the rule against last year",
      body: "Apply it to past cases and count how it would have performed, using the same measures you would apply to a model.",
      effort: "Half a day",
      outcome: "The number that changes every subsequent conversation.",
    },
    {
      title: "Ask where the current thresholds came from",
      body: "When were they set, by whom, on what basis. Then check whether the underlying distribution has moved since.",
      effort: "1 hour",
      outcome: "Frequently a two-day fix that is worth more than a six-month project.",
    },
    {
      title: "Agree the margin a model must beat it by",
      body: "Before anybody builds anything. How much better does it have to be to justify the cost and the ongoing maintenance?",
      effort: "A conversation",
      outcome: "A test agreed while nobody is invested in the answer.",
    },
    {
      title: "Cost the ongoing side of both options",
      body: "Who monitors, who refreshes, who understands it, what happens when they leave. A rule has almost none of that.",
      effort: "A conversation",
      outcome: "The comparison that usually tips a marginal decision.",
    },
    {
      title: "Consider the middle option",
      body: "Keep the rule and set its numbers from the data. Readable, adjustable, and fixes the part that was actually wrong.",
      effort: "2-3 days",
      outcome: "Often most of the benefit with none of the ongoing cost.",
    },
  ],

  exercises: [
    {
      title: "Write and measure a rule",
      brief:
        "For any prediction your business wants, write the rule an experienced person would use and apply it to last year's cases. Count how it would have done.",
      success:
        "You have a number, and it is usually higher than people expected before you measured it.",
      time: "Half a day",
    },
    {
      title: "Trace a threshold",
      brief:
        "Take any numeric threshold in a business rule and find out when it was set, by whom, and on what basis. Then check whether the distribution of the underlying values has moved.",
      success:
        "You can say whether the rule is still doing what it was designed to do, and often it is not.",
      time: "1 hour",
    },
    {
      title: "Cost the ongoing side",
      brief:
        "For any model in your business, ask who monitors it, who refreshes it, who understands it, and what happens if that person leaves. Write down the answers.",
      success:
        "You have a real ongoing cost to put alongside the accuracy figure, and sometimes a risk nobody had noticed.",
      time: "45 minutes",
    },
  ],

  caseStudy: {
    business:
      "A speciality coffee roaster. Roasts to order for about ninety cafe accounts and a small direct-to-consumer line.",
    problem:
      "Green coffee buying. Buy too much and it ages in the warehouse and loses quality. Buy too little and you disappoint a cafe, which in that trade means losing them. The owner had been quoted a substantial sum for a demand forecasting system and asked whether it was worth it.",
    analysis: [
      "The honest first question is what happens if we do the simplest possible thing, and it is skipped almost every time because it is not interesting.",
      "The simplest possible thing here: order enough to cover the last twelve weeks average usage plus a buffer, and reorder when stock falls below the lead time requirement. That is arithmetic. It fits in a spreadsheet.",
      "Backtested against three years of actual usage, that rule would have avoided almost every stockout and most of the ageing. Not all. Almost.",
      "Then the question becomes narrow and answerable: what does the remainder look like, and would a model catch it? The remainder was two things. New cafe accounts ramping up, and a seasonal single-origin that behaves unlike everything else.",
      "Neither of those is a forecasting problem. A new account is known about in advance because somebody signed them. The seasonal line has a known season. Both are calendar facts the business already possessed and had not written into the rule.",
    ],
    aiApproach: [
      {
        step: "Build the dumb version first and score it properly",
        detail:
          "Run the simple rule across three years of history and count what it would have got wrong. This takes an afternoon and it is the benchmark everything else has to beat. Without it, any model looks impressive because there is nothing to compare it to.",
      },
      {
        step: "Look at only the cases the rule missed",
        detail:
          "Not the overall performance, the residue. Ten or twenty specific occasions. Read them individually. In this case reading them was enough to identify both causes without any statistics at all.",
      },
      {
        step: "Ask whether the misses are predictable or just known",
        detail:
          "This is the distinction that decided it. A new account is not something to predict, it is something the sales side already knows. Building a model to infer a fact somebody in the business could simply tell you is the most avoidable waste in this whole field.",
      },
      {
        step: "Improve the rule rather than replacing it",
        detail:
          "Two additions: flag new accounts for manual uplift in their first eight weeks, and treat the seasonal line separately with its own known pattern. Still arithmetic, still on one page, and it closed most of the remaining gap.",
      },
      {
        step: "Write down what would justify a model later",
        detail:
          "If the account base triples, or if the range grows past what one person can hold in their head, revisit. Stated as a condition so the decision is not permanent, just current.",
      },
    ],
    solution: [
      "A reorder rule on one page: twelve-week average, buffer, lead time trigger.",
      "New accounts flagged for manual uplift during their ramp-up, because somebody already knows they exist.",
      "The seasonal single-origin handled on its own known calendar.",
      "A monthly ten-minute check of what the rule would have done against what actually happened.",
      "A written condition for when to look at something more sophisticated.",
    ],
    impact: [
      "The substantial quote was not spent, and the problem it was going to solve was largely solved by an afternoon of arithmetic.",
      "The two remaining failure types were identified precisely, and both had causes the business already knew about and had never connected to buying.",
      "The rule is understood by everyone who uses it, which means it survives the person who built it leaving.",
      "The monthly check means somebody will notice when the rule stops working, which is the part most spreadsheet solutions lack.",
    ],
    whatWouldHaveKilledIt:
      "Buying the system. It would probably have worked, and it would have been a large cost to beat a spreadsheet by a small margin, in a business where nobody could have maintained it. The other failure is subtler and nearly happened: proposing a model to predict new account ramp-up, when the sales team already knew every new account weeks in advance and simply had not been asked.",
  },

  mistakes: [
    {
      mistake: "Never building the rule",
      why: "Without it, any accuracy figure sounds impressive. You cannot say whether the model earned its keep, and nobody can challenge the decision to build it.",
      fix: "Spend an afternoon with the experienced person and measure their rule. It is the cheapest analysis available.",
    },
    {
      mistake: "Agreeing the required margin after seeing the result",
      why: "Whatever the model achieves will then be argued to be sufficient, because everybody is already invested by that point.",
      fix: "Agree how much better it has to be before anybody builds anything.",
    },
    {
      mistake: "Comparing build cost only",
      why: "Monitoring, refreshing, and having somebody who understands it continue for as long as the model exists. A rule has none of that and the comparison usually ignores it.",
      fix: "Cost the ongoing side of both options and put them side by side.",
    },
    {
      mistake: "Replacing a rule when the number was the problem",
      why: "Most business rules have a threshold somebody set years ago. Setting it properly from data is often a two-day fix that gets most of the benefit.",
      fix: "Always ask where the number came from before assuming the logic needs replacing.",
    },
    {
      mistake: "Ignoring how easily a rule can be changed",
      why: "When the business shifts, a rule gets edited in an afternoon. A model needs retraining and revalidating. That flexibility never appears in an accuracy comparison.",
      fix: "Factor in how often the business changes and how quickly each option can respond.",
    },
    {
      mistake: "Building a model nobody will maintain",
      why: "It drifts, the person who built it leaves, and eighteen months later it has quietly been switched off with nobody noticing.",
      fix: "Name the owner and the refresh schedule before building. If you cannot, the rule is the better business choice.",
    },
  ],

  bestPractices: [
    "Write the rule an experienced person would use, before anything else.",
    "Measure the rule against last year using the same measures as a model.",
    "Ask where every existing threshold came from and whether it has been reviewed.",
    "Agree the margin a model must beat it by, in advance.",
    "Cost the ongoing side of both options.",
    "Consider setting the rule's numbers from data as a middle option.",
    "Factor in how quickly each option can respond to business change.",
    "Name the owner and refresh schedule before choosing a model.",
  ],

  proTips: [
    "Ask the experienced person how often their own rule is wrong, and in which direction. They usually know, and their honest answer gives you both the comparison and a sense of where the real headroom is. It is also a much better conversation to have with them than turning up later with a model that replaces their judgement.",
    "When somebody presents an accuracy figure, ask what the simple rule gets. If they do not know, that is the more urgent piece of work. In my experience the gap is smaller than expected often enough that the question is always worth asking.",
    "Look for a rule with a round number in it. Five hundred pounds, thirty days, ten per cent. Round numbers are the fingerprint of somebody guessing, and setting that number from data is usually a two-day job with a real payback.",
    "Ask what happens if the person who built the model leaves next month. If the honest answer is that nobody could maintain it, that is not a small risk. It is the most common way these things quietly stop working, and it belongs in the comparison rather than in a risk log nobody reads.",
  ],

  businessApplications: [
    "Deciding whether a proposed model project is worth doing at all.",
    "Reviewing rules that have been running for years with thresholds nobody set deliberately.",
    "Providing something to work with immediately while a longer project runs.",
    "Situations where the business changes faster than a model could be retrained.",
    "Anywhere the people using the output need to trust and challenge it.",
    "Small businesses without anybody to maintain a model long term.",
  ],

  checklist: [
    "Rule written with the experienced person who does this today.",
    "Rule measured against last year with the same measures as a model.",
    "Origin of every existing threshold established.",
    "Required margin for a model agreed in advance.",
    "Ongoing cost of both options established.",
    "Middle option of data-set thresholds considered.",
    "Speed of response to business change compared.",
    "Named owner and refresh schedule in place if a model is chosen.",
  ],

  faqs: [
    {
      q: "Is this just an argument against machine learning?",
      a: "No. It is an argument for knowing what you are comparing against. Models frequently win. The point is to be able to say by how much, and whether that margin justifies the cost and the ongoing maintenance.",
    },
    {
      q: "How much better does a model need to be?",
      a: "Enough to be worth the build cost, the monitoring, the refreshing and the key person risk. Agree the figure before you see the result, because afterwards whatever it achieves will be argued to be sufficient.",
    },
    {
      q: "What if the experienced person's rule is very good?",
      a: "Then you have learned something valuable cheaply. Consider setting their thresholds properly from data, which keeps everything readable while fixing the part that was actually guesswork.",
    },
    {
      q: "When do rules genuinely lose?",
      a: "When many factors combine in ways nobody would think to write down, when the answer needs to differ for each customer, or when the pattern changes constantly. Those are real and models are genuinely better in them.",
    },
    {
      q: "Where do the thresholds in our current rules come from?",
      a: "Ask. The answer is usually that somebody set them years ago when the business was a different size, and nobody has looked since. Round numbers are a giveaway that somebody guessed.",
    },
    {
      q: "Can we use both?",
      a: "Yes, and it is frequently sensible. Use a rule for the clear cases where anybody would agree, and a model for the difficult middle. That keeps most decisions explainable and puts the sophistication where it earns its keep.",
    },
  ],

  tools: [
    { name: "An afternoon with the experienced person", what: "Their rule, in their words. The cheapest comparison available and usually better than expected.", cost: "Free" },
    { name: "Last year's cases", what: "For measuring the rule with the same measures you would apply to a model.", cost: "Free" },
    { name: "An agreed margin, written down in advance", what: "How much better a model has to be. Agreed before anybody is invested in the answer.", cost: "Free" },
    { name: "An ongoing cost comparison", what: "Monitoring, refreshing, key person risk. The thing that tips most marginal decisions.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "framing-a-business-problem-as-a-prediction", anchor: "checking a model is needed at all", context: "Before this" },
    { slug: "business-rules-and-decision-tables", anchor: "writing the rule down properly", context: "The rule" },
    { slug: "knowing-if-a-model-is-any-good", anchor: "measuring both fairly", context: "Comparison" },
  ],

  relatedGuides: ["framing-a-business-problem-as-a-prediction", "business-rules-and-decision-tables", "knowing-if-a-model-is-any-good"],

  conclusion: [
    "Spend one afternoon with whoever makes this decision today, write down their rule, and measure it against last year's cases. That number is what any model has to beat, and having it changes every conversation that follows.",
  ],
};

export default guide;
