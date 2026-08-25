import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "predicting-versus-deciding",
  seoTitle: "A Prediction Is Not a Decision",
  metaDescription:
    "Knowing what will happen and knowing what to do are two different problems needing two different tools. Why most projects deliver the first and stop.",
  title: "A Prediction Is Not a Decision",
  keywords: [
    "prediction versus decision",
    "optimisation vs prediction",
    "decision science business",
    "acting on model output",
    "prescriptive analytics",
    "turning predictions into action",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "Here is a forecast: we will sell around four hundred of these next week. Here is a question: how many should we order? Those are not the same problem and the second one does not follow from the first.",
    "If you order four hundred and demand comes in at three hundred and twenty, you are carrying a hundred you did not need. If demand comes in at five hundred you have turned eighty customers away. The right order quantity depends on what those two outcomes cost you, and the forecast says nothing about that.",
    "This is the gap that swallows an enormous number of projects. Somebody delivers an accurate prediction, everybody agrees it is accurate, and nothing changes, because the hard part was never predicting. The hard part was deciding what to do given the prediction, the costs, and the constraints you are actually operating under.",
  ],

  whyItMatters: [
    "Most of the value sits on the decision side and most of the effort goes into the prediction side. Businesses spend months improving accuracy by a few per cent when the decision rule sitting on top of it was set by somebody's guess and has never been examined.",
    "It is also where predictions quietly stop being useful. A list of a thousand customers likely to leave is not a plan when you have capacity to call forty. Somebody has to decide which forty, and that is a different question with different inputs.",
    "And it explains the most common disappointment in this area, which is a technically successful project that changes nothing. Recognising the gap early is one of the more valuable things a Business Analyst can do.",
  ],

  coreConcepts: [
    {
      term: "Predicting tells you what. Deciding needs to know what it costs.",
      explain:
        "A prediction is a statement about the world. A decision needs the prediction plus what each possible mistake costs plus what you are actually able to do.",
      detail:
        "That is why an accurate prediction on its own so often changes nothing. Two of the three ingredients are missing and nobody noticed, because the prediction is the visible part.",
    },
    {
      term: "The right answer is usually not the middle of the forecast",
      explain:
        "If running out costs far more than carrying spare, you order above the forecast. If holding stock is expensive and running out is a minor inconvenience, you order below it.",
      detail:
        "This is one of the most useful ideas in the whole area and it is barely known outside operations research. Where you land depends on the two costs, not on the prediction, and the prediction cannot tell you.",
    },
    {
      term: "Your constraints change the answer completely",
      explain:
        "Ten thousand customers might leave. You can call forty. So the question is not who is most likely to leave. It is which forty calls will save the most.",
      detail:
        "Those give different answers. Somebody very likely to leave who was never going to be persuaded is a worse call than somebody less likely to leave who a conversation would keep.",
    },
    {
      term: "Predicting the wrong thing entirely",
      explain:
        "Businesses commonly predict who will leave when the useful question is who would stay if we called. Or who will default, when the useful question is who would repay under different terms.",
      detail:
        "The difference is between what will happen and what would change if we acted. The second is harder and it is what the decision actually needs, and it usually requires having tried the action on some people and not others.",
    },
    {
      term: "Optimisation is the tool for the second half",
      explain:
        "Given predictions, costs and constraints, work out the best combination of actions. Which vehicles go where, which forty customers to call, how much of each product to order.",
      detail:
        "It is a completely different family of tools from anything that learns from history, and it is a mature and unglamorous one. Most businesses do this half with a spreadsheet and a rule of thumb without realising there is an alternative.",
    },
    {
      term: "Sometimes the decision rule is worth more than the prediction",
      explain:
        "Improving a forecast from twenty per cent out to fifteen might be worth less than changing how you turn that forecast into an order quantity.",
      detail:
        "Ask which half has had more attention. Almost always it is the prediction, because it is the part that feels technical, and almost always the decision rule is where the easy improvement is.",
    },
    {
      term: "Write down the rule that exists today",
      explain:
        "There is always one, even if nobody has written it down. Order what we sold last month plus ten per cent. Call whoever is at the top of the list until Friday.",
      detail:
        "Writing it down does two things. It shows you what you are actually trying to beat, and it usually reveals that nobody has looked at it since it was invented years ago.",
    },
    {
      term: "The decision belongs to somebody",
      explain:
        "A prediction can be produced by a system. A decision has an owner who is accountable for the consequences and who can override it.",
      detail:
        "Where those get merged, and a system starts making decisions automatically, you need to be deliberate about it. That is a legitimate choice and it should be a choice rather than a drift.",
    },
    {
      term: "Check whether the action was ever tested",
      explain:
        "Somebody predicted these customers might leave, so we called them. Did calling help? Very often nobody knows, because everybody who was flagged got called.",
      detail:
        "Leave some out deliberately and compare. Without that you cannot tell whether the whole thing works, and you will keep spending on an action that might be doing nothing.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Improving the forecast when the rule was the problem.",
      walkthrough:
        "The problem: a business had spent months improving their demand forecast, moving from around twenty-two per cent typically out to about seventeen. Stock problems had barely improved. What was happening: a BA asked how the forecast turned into an order. The answer was a rule from years earlier: order the forecast plus a fixed percentage, the same percentage for every product. That percentage had been chosen by somebody who had since left.",
      result:
        "What changed: they worked out, per product, what running out cost against what carrying spare cost. For fast-moving cheap items the answer was to order well above the forecast. For expensive slow-moving ones it was to order below. Applying that took a fortnight and did more than the five percentage points of forecast improvement had.",
    },
    {
      kind: "illustration",
      scenario: "Ranking by the wrong thing.",
      walkthrough:
        "The problem: a subscription business ranked customers by likelihood of leaving and worked down the list with the calls they had capacity for. Retention barely moved. What was happening: the very top of the list was dominated by customers who had already decided, had usually already tried to cancel, and were not going to be talked round. The team was spending its limited capacity on the least persuadable people.",
      result:
        "What changed: they ran a proper test, calling a random selection of people at various likelihood levels and leaving comparable people alone. The biggest effect was in the middle of the list, not the top. They re-ranked by how much a call seemed to change the outcome rather than by likelihood of leaving, and the same number of calls produced considerably more.",
    },
    {
      kind: "illustration",
      scenario: "Nobody ever checked whether the action helped.",
      walkthrough:
        "The problem: a business had been running a retention programme for two years based on a churn model. It was considered a success. What was happening: a BA asked how they knew the calls helped. Everybody flagged got called, so there was no comparison. The measure being used was that most people who got called stayed, which tells you nothing, because most customers stay anyway.",
      result:
        "What changed: they held back a random ten per cent for three months and compared. The calls did help, by less than everybody assumed, and the effect was concentrated in one particular customer group. The programme carried on with a much better idea of where to spend its time. Holding some back costs almost nothing and it is the only way to know.",
    },
  ],

  learningPath: [
    {
      title: "Write down the decision rule that exists now",
      body: "Whatever happens today with the prediction, or without one. Order last month plus ten per cent. Call the top forty. Write it down exactly.",
      effort: "1 hour",
      outcome: "The thing you are actually trying to improve, which is frequently not the prediction.",
    },
    {
      title: "Get both costs",
      body: "What being over costs and what being under costs, for this specific decision. Rough figures from the business are fine and they are what determines everything.",
      effort: "A conversation",
      outcome: "The inputs the prediction cannot give you.",
    },
    {
      title: "Establish the constraint",
      body: "How many calls, how much stock, how many vehicles, how many hours. The decision is always shaped by what you can actually do.",
      effort: "1 hour",
      outcome: "The difference between a theoretical answer and a usable one.",
    },
    {
      title: "Ask whether you are predicting the right thing",
      body: "Are you predicting what will happen, or what would change if you acted? For anything involving an intervention, the second is what the decision needs.",
      effort: "A conversation",
      outcome: "Occasionally a complete reframing of the project, in a good way.",
    },
    {
      title: "Work out what a better rule would be worth",
      body: "Before improving the prediction further, estimate what changing the decision rule alone would achieve. Compare the two.",
      effort: "1-2 days",
      outcome: "Effort spent on whichever half actually has room in it.",
    },
    {
      title: "Hold some back and measure",
      body: "A random group who do not get the action. Compare after a defined period. Without this you cannot tell whether any of it works.",
      effort: "A month or more of running",
      outcome: "The only honest answer to whether the whole thing helps.",
    },
  ],

  exercises: [
    {
      title: "Write down today's rule",
      brief:
        "For any prediction your business produces, find out exactly what happens to it. What rule turns it into an action, who set that rule, and when.",
      success:
        "You have the rule in writing and you know how old it is. Usually nobody has examined it since it was invented.",
      time: "1 hour",
    },
    {
      title: "Check whether the action was ever tested",
      brief:
        "For any intervention driven by a model in your business, ask how they know the action helps. Listen for whether anybody was deliberately left out as a comparison.",
      success:
        "You either find a proper comparison or you have established that nobody knows whether the action does anything.",
      time: "30 minutes",
    },
    {
      title: "Compare the two costs",
      brief:
        "Take one operational decision that rests on a forecast and get rough figures for what being over costs and what being under costs. Then check where the current rule sits relative to those.",
      success:
        "You can say whether the current rule is deliberately positioned or whether it sits in the middle by default.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Delivering a prediction and stopping",
      why: "The prediction is the visible part and the decision is where the value is. You end up with an accurate number that changes nothing and a project nobody can defend.",
      fix: "Agree the decision rule, the costs and the constraint before the prediction work starts.",
    },
    {
      mistake: "Acting on the middle of the forecast",
      why: "The middle is only correct when being over and being under cost the same, which they almost never do.",
      fix: "Get both costs and position the decision deliberately above or below the forecast.",
    },
    {
      mistake: "Ranking by likelihood rather than by what would change",
      why: "The most likely cases are frequently the least persuadable ones, so your limited capacity gets spent where it does least good.",
      fix: "Test the action at different likelihood levels and rank by where it makes the most difference.",
    },
    {
      mistake: "Never holding anybody back",
      why: "If everybody flagged gets the action, you can never tell whether the action works. Most customers stay anyway, so most retention programmes look successful whether or not they do anything.",
      fix: "Hold back a random group and compare. It costs almost nothing and it is the only honest measure.",
    },
    {
      mistake: "Improving the prediction when the rule is the bottleneck",
      why: "Months of effort for a few percentage points, when a fortnight on the decision rule would have achieved more. It happens because the prediction feels like the technical part.",
      fix: "Estimate what a better rule alone would be worth before committing to more accuracy work.",
    },
    {
      mistake: "Letting a system decide without anybody deciding that it should",
      why: "Automation drifts in. Nobody chose to hand over the decision, and nobody owns the consequences when it goes wrong at scale.",
      fix: "Make automating a decision an explicit choice with a named owner and an override route.",
    },
  ],

  bestPractices: [
    "Write down the decision rule that exists today.",
    "Get the cost of being over and the cost of being under.",
    "Establish what you are actually able to do, as a hard constraint.",
    "Ask whether you should be predicting what will happen or what would change.",
    "Estimate the value of a better rule before improving the prediction further.",
    "Hold back a random group and compare.",
    "Rank by where the action makes a difference, not by likelihood.",
    "Make any move to automatic decisions an explicit choice with an owner.",
  ],

  proTips: [
    "Ask what happens to the prediction after it is produced, and follow it all the way to the action. The number of times that trail goes cold at a spreadsheet somebody built years ago is remarkable, and that spreadsheet is usually where the improvement is.",
    "When somebody proposes improving accuracy, ask what the improvement would be worth in the decision. Going from twenty per cent out to fifteen sounds meaningful and sometimes changes nothing at all, because the decision rule rounds it away. That question saves months.",
    "For anything involving contacting people, insist on holding some back from the start rather than adding it later. Once a programme has been running for two years with no comparison group, introducing one becomes politically difficult because it means admitting nobody knows whether it works.",
    "Ask whether the most likely cases are actually the most winnable ones. In retention, collections and sales, they usually are not, and the people at the very top of the list are frequently the ones already lost. That single question often reorders where a team spends its week.",
  ],

  businessApplications: [
    "Deciding order quantities from a demand forecast, where over and under cost different amounts.",
    "Choosing which customers to contact when capacity is far smaller than the list.",
    "Routing vehicles or scheduling staff given predicted demand.",
    "Deciding credit limits or terms rather than just predicting risk.",
    "Prioritising maintenance given predictions about many pieces of equipment.",
    "Any situation where a prediction is produced and somebody has to turn it into an action.",
  ],

  checklist: [
    "The decision the prediction feeds is written down.",
    "The current rule for turning prediction into action is documented, with its origin.",
    "Cost of being over and cost of being under obtained.",
    "The real constraint established.",
    "Considered whether you should predict outcome or effect of acting.",
    "Value of improving the rule estimated against value of improving the prediction.",
    "A held-back group set up before the action starts.",
    "Ranking based on where the action makes a difference.",
    "Named owner for the decision, with an override route.",
  ],

  faqs: [
    {
      q: "Why does an accurate prediction not automatically help?",
      a: "Because knowing what will happen does not tell you what to do about it. That needs the costs of each possible mistake and the constraints you operate under, and neither is in the prediction.",
    },
    {
      q: "What is optimisation, in plain terms?",
      a: "Working out the best combination of actions given what you predict, what things cost and what you are able to do. It is a mature and unglamorous set of tools, and most businesses do this half with a spreadsheet and a rule of thumb.",
    },
    {
      q: "Should we rank by likelihood or by something else?",
      a: "By where the action makes the most difference, which is frequently not the same. The most likely cases are often already lost, so ranking by likelihood spends your capacity on the least winnable ones.",
    },
    {
      q: "How do we know whether our intervention works?",
      a: "Hold back a random group and compare. There is no other honest way. Most customers stay anyway, so a retention programme looks successful whether or not it does anything.",
    },
    {
      q: "Where should we spend effort, the prediction or the rule?",
      a: "Estimate both before choosing. In my experience the rule has usually had far less attention and has more room in it, because it does not feel like the technical part of the problem.",
    },
    {
      q: "Should the system make the decision automatically?",
      a: "Sometimes, and it should be an explicit choice rather than something that drifts in. Decide it deliberately, name who owns the consequences, and keep a route for a person to override with a recorded reason.",
    },
  ],

  tools: [
    { name: "The decision rule, written down", what: "Whatever happens today. Usually reveals a rule nobody has examined in years.", cost: "Free" },
    { name: "Two cost figures", what: "Being over and being under. What decides where the action should sit relative to the prediction.", cost: "Free" },
    { name: "The real constraint", what: "How many calls, how much stock, how many hours. Turns a theoretical answer into a usable one.", cost: "Free" },
    { name: "A held-back group", what: "A random selection who do not get the action. The only honest way to know whether it helps.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "framing-a-business-problem-as-a-prediction", anchor: "checking the problem is the right shape", context: "Before building" },
    { slug: "the-cost-of-being-wrong", anchor: "getting the two costs and using them", context: "The costs" },
    { slug: "measuring-whether-it-worked", anchor: "proving the action actually helped", context: "Proving it" },
  ],

  relatedGuides: ["framing-a-business-problem-as-a-prediction", "the-cost-of-being-wrong", "measuring-whether-it-worked"],

  conclusion: [
    "Take any prediction your business produces and follow it all the way to the action somebody takes. Write down the rule in between, and find out who set it and when. That rule is usually where the improvement is, and almost nobody has looked at it.",
  ],
};

export default guide;
