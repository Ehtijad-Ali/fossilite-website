import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "framing-a-business-problem-as-a-prediction",
  seoTitle: "Is This Actually a Prediction Problem?",
  metaDescription:
    "Most business problems are not prediction problems. The three things that have to be true before a model helps, and what to do when one of them is missing.",
  title: "Is This Actually a Prediction Problem?",
  keywords: [
    "machine learning use cases",
    "when to use machine learning",
    "framing a prediction problem",
    "business problem for ai",
    "predictive analytics business",
    "ml problem definition",
  ],
  category: "business-analysis",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Somebody in your business has probably suggested using machine learning for something. Most of the time they are pointing at a real problem and the wrong tool, and working out which is which takes about twenty minutes if you know what to ask.",
    "A model does exactly one thing. It looks at things that already happened and guesses what will happen with something new. That is it. It cannot decide, it cannot explain why, and it cannot tell you what you should do about the answer.",
    "So the question is not whether machine learning is clever enough. It is whether your problem has the shape that a guess about the future would actually help with. Three things have to be true, and if any one of them is missing, a model will not help however good it is.",
  ],

  whyItMatters: [
    "Projects that start from the technology rather than the problem tend to produce something that works technically and changes nothing. The model predicts accurately, everybody is pleased, and no decision in the business happens differently as a result.",
    "It is also an expensive way to find out. By the time a model exists, somebody has spent months on data, and unpicking whether the problem was ever a prediction problem in the first place has become politically awkward.",
    "Twenty minutes of asking the right three questions at the start avoids nearly all of it, and it is exactly the sort of thing a Business Analyst should be doing before anybody talks about tools.",
  ],

  coreConcepts: [
    {
      term: "One: is there something you genuinely do not know yet?",
      explain:
        "A model earns its keep when you have to act before you know the answer. Will this customer leave. Will this invoice be paid late. How many people will we need on Saturday.",
      detail:
        "If the answer is already sitting somewhere, you do not need a prediction, you need a report or a better connection between two systems. That is a much cheaper project and it happens far more often than people expect.",
    },
    {
      term: "Two: has it happened enough times before?",
      explain:
        "A model learns patterns from history. That means you need a decent amount of history, and it has to include the answer you want to predict.",
      detail:
        "You need past cases where you know how it turned out. Hundreds at the very least, usually thousands. If the thing happens twice a year, or you only started recording the outcome last month, this is not going to work yet.",
    },
    {
      term: "Three: would you actually do something different?",
      explain:
        "This is the one people skip. If you knew the answer in advance, what would change? Who does what differently, and when?",
      detail:
        "Ask it out loud and listen for a specific action. If the answer is that we would understand things better, that is interesting rather than valuable, and a report will do. If the answer is that we would ring that customer on Tuesday instead of Friday, you have something.",
    },
    {
      term: "Predicting is not deciding",
      explain:
        "A model tells you it thinks something is likely. It does not tell you whether to act on that. Somebody still has to decide what to do at what level of likelihood, and that is a business decision.",
      detail:
        "The clearest sign this has been skipped is a project that delivers a percentage on a screen and nobody knows what to do with it. Work out the action first and the number second.",
    },
    {
      term: "Write the sentence before anything else",
      explain:
        "For each [thing], predict [outcome], using [information available at the time], so that [somebody] can [do something specific].",
      detail:
        "For each open invoice, predict whether it will be paid more than thirty days late, using what we know when the invoice is raised, so that credit control can chase the risky ones first. That one sentence is the whole specification, and if you cannot fill in all four blanks, do not start.",
    },
    {
      term: "Only use information you would actually have at the time",
      explain:
        "This catches out almost everybody the first time. If you are predicting whether an order will be late, you cannot use the delivery date, because you do not have it yet.",
      detail:
        "It sounds obvious and it is very easy to do by accident, because your historical data has everything in it. The result is a model that looks brilliant in testing and is useless in real life. When somebody shows you a suspiciously good result, this is the first thing to check.",
    },
    {
      term: "Ask what happens when it is wrong, in both directions",
      explain:
        "Every model is wrong sometimes. Being wrong one way usually costs something different from being wrong the other way, and the difference decides how you use it.",
      detail:
        "Flagging a good customer as a fraud risk costs you an annoyed customer. Missing a real fraud costs you money. Those are not the same and the model does not know that. Somebody in the business has to tell it.",
    },
    {
      term: "Sometimes the honest answer is a rule",
      explain:
        "A lot of business problems are handled well by something simple that a person wrote. Chase anything over a certain value that is more than a week overdue.",
      detail:
        "Always work out what a sensible rule would get you first. If a rule gets you most of the way, the model has to be a lot better to be worth the cost and the complexity of running it.",
    },
    {
      term: "Check whether anybody would trust it",
      explain:
        "A prediction that people will not act on is worth nothing, however accurate. Ask who has to use it and whether they will believe it.",
      detail:
        "This is not a soft consideration. If the person receiving the number cannot see why it says what it says, they will quietly ignore it and carry on using their own judgement, and you will have spent months on something nobody uses.",
    },
  ],

  diagrams: [
    {
      kind: "tree",
      title: "The three questions that turn a wish into a project",
      caption:
        "Run any idea down this before anybody costs it. Most stop at the first or the last box, and stopping there is a good outcome rather than a failed one.",
      question: "What would you do differently if you knew?",
      branches: [
        {
          answer: "Nothing specific",
          outcome: "Stop. This is a wish, not a project. Go back and find the decision.",
        },
        {
          answer: "A named, repeated decision",
          question: "Is the answer already recorded in your history?",
          sub: [
            { answer: "No outcome recorded", outcome: "Not learnable yet. Start recording it and come back." },
            { answer: "Yes, for every past case", outcome: "Now ask the last one: if we knew, could we actually act in time?" },
          ],
        },
      ],
    },
    {
      kind: "flow",
      title: "The coach hire firm: from I want to grow to a list of fifteen calls",
      caption:
        "Notice how little of this is the model. Four of the five boxes are decisions about the business, and they are the ones that decide whether anything gets used.",
      steps: [
        { label: "Four years of quotes", note: "Each one taken up or not", tone: "input" },
        { label: "Only what you knew when you quoted", note: "Date, destination, vehicle, repeat customer" },
        { label: "Score each open quote", note: "Likelihood it converts", tone: "model" },
        { label: "Rank, cut to fifteen", note: "As many calls as fit in a day" },
        { label: "She calls the top of the list", note: "Not the top of the pile", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The prediction that was already sitting in another system.",
      walkthrough:
        "The problem: an operations team wanted a model to predict which deliveries would be late, so they could warn customers. What was happening: before agreeing, the BA asked where the information about lateness comes from. It turned out the courier sends a status update several hours before the delivery window, and that update already says whether it is running behind. Nobody in customer service could see it, because it went into a system they had no access to.",
      result:
        "What changed: they connected the two systems and put the status on the customer service screen. No model, no history, no data science, and customers got warned earlier than any prediction could have managed. Before building anything that guesses, always check whether somebody already knows.",
    },
    {
      kind: "illustration",
      scenario: "The model that predicted the answer using the answer.",
      walkthrough:
        "The problem: a team built something to predict which support tickets would need escalating, and it was startlingly accurate in testing. What was happening: a BA asked what information it was using. One of the fields was the name of the team the ticket ended up with. Escalated tickets end up with the senior team, so the model had effectively been told the answer.",
      result:
        "What changed: they rebuilt it using only what is known when a ticket arrives, and the accuracy dropped a long way, which was the honest number. When a result looks too good, check every piece of information going in and ask whether you would really have it at the moment you need the prediction.",
    },
    {
      kind: "illustration",
      scenario: "An accurate prediction nobody acted on.",
      walkthrough:
        "The problem: a business built something that predicted which customers were likely to leave in the next quarter. It worked reasonably well. What was happening: the output was a list with a percentage next to each name, sent to the account team every Monday. Six months later a BA asked what they did with it. Nothing, mostly. Nobody had agreed what score was worth acting on, what the action was, or who had time to do it.",
      result:
        "What changed: they went back and agreed the action first. Anybody above a certain score gets a call from their account manager within two working days, and the account managers got that time protected. The model had never been the problem. Nobody had answered the question of what we would do differently.",
    },
  ],

  learningPath: [
    {
      title: "Write the one-sentence version",
      body: "For each [thing], predict [outcome], using [what we know at the time], so that [somebody] can [do something]. Fill in all four blanks or stop.",
      effort: "30 minutes",
      outcome: "Either a clear problem or an early discovery that this is not one.",
    },
    {
      title: "Check whether somebody already knows the answer",
      body: "Ask where the outcome gets recorded and whether anything upstream already indicates it. Surprisingly often something does, and nobody can see it.",
      effort: "2 hours",
      outcome: "Either a much cheaper project, or confidence that a prediction is genuinely needed.",
    },
    {
      title: "Count how much history you have",
      body: "How many past cases, and how many of them have the outcome recorded? Not how many rows exist, how many complete examples.",
      effort: "Half a day",
      outcome: "A realistic view of whether this is possible yet.",
    },
    {
      title: "Agree the action before the number",
      body: "Who does what, at what point, and do they have the time. Get it agreed by the person whose team will do it.",
      effort: "A conversation",
      outcome: "The thing that decides whether any of this is worth doing.",
    },
    {
      title: "Work out what a sensible rule would achieve",
      body: "Write the rule a knowledgeable person would use and check how well it does against your history. This is your comparison point.",
      effort: "Half a day",
      outcome: "A number the model has to beat to justify itself.",
    },
    {
      title: "Ask what being wrong costs, each way",
      body: "What happens when it says yes and it is wrong, and when it says no and it is wrong. Get both from the business, not from the technical team.",
      effort: "1 hour",
      outcome: "The information that decides how cautious the thing should be.",
    },
  ],

  exercises: [
    {
      title: "Fill in the four blanks",
      brief:
        "Take any request for a model in your business and write the sentence: for each thing, predict outcome, using what we know at the time, so that somebody can do something. Show it to whoever asked.",
      success:
        "Either all four blanks fill in easily, or you have found which one is missing, which is the actual finding.",
      time: "30 minutes",
    },
    {
      title: "Find out what happens to the answer",
      brief:
        "For any prediction your business already produces, find out who receives it, what they do with it, and how often. Ask them, do not assume.",
      success:
        "You can name the specific action taken as a result, or you have found that there isn't one.",
      time: "1 hour",
    },
    {
      title: "Write the rule first",
      brief:
        "For a problem somebody wants a model for, write down the rule an experienced person would use. Then check how often that rule would have been right against last year's cases.",
      success:
        "You have a number that any model would have to beat, and sometimes the rule is good enough on its own.",
      time: "Half a day",
    },
  ],

  caseStudy: {
    business:
      "A regional coach and minibus hire company. Fourteen vehicles, school contracts during term time, private hire and day trips the rest of the year.",
    problem:
      "The owner had been told by three separate people that he ought to be using AI, and arrived at the meeting to say so. What he actually wanted, when pushed, was this: I want to grow the business and I do not know where the growth is. That is not a prediction problem. It is a wish.",
    analysis: [
      "The entire job at this stage is turning a wish into a question with an answer you can look up. Until you can do that there is nothing to build, and nobody should be spending money.",
      "So the first question is not about data at all. It is: what would you do differently if you knew? He had three answers. Which quotes to chase harder. Whether to buy a fifteenth vehicle. Which school contracts to bid for at renewal.",
      "Those are three different projects and only one was urgent. Ranking them took an afternoon and stopped the budget going on the wrong one.",
      "Chasing quotes won. About four hundred quotes went out a year and a minority came back as bookings. Nobody knew which were worth a follow-up call, so follow-up happened whenever somebody had a spare hour.",
      "Now it is a question with a lookable-up answer: for a quote we sent, did it become a booking, yes or no? Every past quote already has that answer sitting in the system.",
      "Last check before starting, and the one most often skipped: if we knew, could we act? Yes. One person makes the calls and can only make so many a day, so a ranked list genuinely changes her Monday morning. Had the answer been no, the right decision would have been to stop there.",
    ],
    aiApproach: [
      {
        step: "State the question in one sentence",
        detail:
          "Will this quote convert into a booking? Write it down and make whoever asked for the project agree to the wording. Most failures here are failures of that sentence rather than of any technology.",
      },
      {
        step: "Check the answer exists in your history",
        detail:
          "You can only learn from outcomes you can see. Four years of quotes, each either taken up or not. That is what makes it learnable. A question like which customers are happiest has no recorded answer anywhere, so it is a survey problem, not a prediction problem.",
      },
      {
        step: "List only what you knew at the moment of the decision",
        detail:
          "This catches people out constantly. You may use the date, the destination, the vehicle size, how the enquiry arrived, whether they had booked before, how fast you replied. Anything recorded afterwards is not allowed. Include it and you get a model that looks superb and predicts nothing.",
      },
      {
        step: "Agree what good enough means before building",
        detail:
          "She can make roughly fifteen calls a day. So: if we rank the open quotes and she works down the list, does she win more than working the pile in date order? That is the bar, and it is far lower than perfect.",
      },
      {
        step: "Only now think about the model",
        detail:
          "By this point the choice of technique barely matters and something simple will do. Everybody wants to start here, and starting here is the most reliable way to build something nobody uses.",
      },
    ],
    solution: [
      "A ranked list of open quotes each morning, most likely to convert at the top.",
      "Beside each one, the two or three things pushing it up or down, so the caller has an opening line.",
      "The list is fifteen long, because that is how many calls fit in a day. Two hundred would be ignored.",
      "A note of what happened on every call, which quietly becomes next year's training data.",
    ],
    impact: [
      "Follow-up stopped being whatever sat on top of the pile and became the quotes most likely to be winnable.",
      "The wish turned into a project small enough to finish. Grow the business is not something anyone can start on a Monday. Rank today's quotes is.",
      "Two of the three original ideas were parked with written reasons, so they stopped resurfacing in every meeting.",
      "The exercise produced a reusable test. Every later idea got the same three questions: what decision changes, is the answer already in our history, and could we act on it if we knew.",
    ],
    whatWouldHaveKilledIt:
      "Starting with the technology. Had the first meeting been about which tool to buy, the project would have been about growing the business, which cannot be finished, rather than ranking quotes, which can. The other killer showed up early: a first version accidentally included whether a deposit had been received, which of course predicts booking almost perfectly and tells you precisely nothing.",
  },

  mistakes: [
    {
      mistake: "Starting from the technology",
      why: "Somebody wants to use machine learning and goes looking for a problem to attach it to. You end up with something that works and changes nothing.",
      fix: "Start from a decision somebody has to make without enough information, and only then ask whether a prediction would help.",
    },
    {
      mistake: "Not asking what would be done differently",
      why: "You deliver an accurate number that lands on a screen nobody acts on. All the cost, none of the benefit, and it is very hard to admit afterwards.",
      fix: "Agree the action, the person and the timing before agreeing to build anything.",
    },
    {
      mistake: "Using information you would not really have",
      why: "It produces a result that looks wonderful and collapses in real use. It is easy to do by accident because your history contains everything.",
      fix: "For every piece of information going in, ask whether you would have it at the moment the prediction is needed. Check this first when a result looks too good.",
    },
    {
      mistake: "Assuming you have enough history",
      why: "A model needs many past examples with known outcomes. Something that happens a few times a year will not produce enough for years.",
      fix: "Count complete examples with recorded outcomes, not rows in a table, before promising anything.",
    },
    {
      mistake: "Skipping the sensible rule",
      why: "Without something to compare against, any accuracy figure sounds impressive. A rule somebody wrote in an afternoon frequently gets most of the way.",
      fix: "Always build the rule first and measure it. The model has to beat it by enough to be worth the extra cost.",
    },
    {
      mistake: "Treating the prediction as a decision",
      why: "A likelihood is not an instruction. Left undecided, everybody makes their own call about what to do at what level, and the business behaves inconsistently.",
      fix: "Agree what happens above and below a chosen level, and who owns that choice.",
    },
  ],

  bestPractices: [
    "Write the one-sentence version with all four blanks filled in.",
    "Check whether the answer is already known somewhere before predicting it.",
    "Count complete historical examples with recorded outcomes.",
    "Agree the action, the person and the timing before the number.",
    "Only use information you would genuinely have at the time.",
    "Work out what a sensible rule would achieve first.",
    "Ask what being wrong costs in each direction.",
    "Check that the people receiving it will actually trust it.",
    "Keep predicting and deciding as two separate things.",
  ],

  proTips: [
    "Ask the person requesting it to describe the last time they had to make this decision, and what they wished they had known. That gets you the real problem far faster than asking what they want to predict, and about a third of the time it turns out to be a reporting question rather than a prediction one.",
    "Ask who would be blamed if the prediction was wrong and somebody acted on it. If nobody can answer, the thing will not get used, because the person receiving it has all the downside and none of the authority. That question predicts adoption better than accuracy does.",
    "Find out whether anybody is doing this by hand today, even badly. If somebody in the business already looks at a list every morning and picks out the ones that worry them, you have found both your training data and the person who will tell you which information actually matters.",
    "Be very suspicious of any project where the outcome is hard to define. Predicting whether a customer is happy is hard because nobody agrees what happy means. Predicting whether they renewed is easy because it is in the system. The second is usually good enough and it is a hundred times easier.",
  ],

  businessApplications: [
    "Deciding whether a request for machine learning is really a reporting or a systems problem.",
    "Sizing whether a prediction project is even possible with the history you have.",
    "Working out the action and the owner before any technical work starts.",
    "Comparing a proposed model against the rule a knowledgeable person would use.",
    "Reviewing a model that already exists and is not being used.",
    "Choosing between several candidate projects by how clear the resulting action is.",
  ],

  checklist: [
    "One-sentence version written with all four blanks filled.",
    "Checked whether the answer is already known somewhere.",
    "Complete historical examples counted, with outcomes recorded.",
    "The specific action agreed, with a named person and a timing.",
    "Every piece of information checked for being available at the time.",
    "A sensible rule written and measured as a comparison.",
    "Cost of being wrong established in both directions.",
    "The people who will receive it asked whether they would use it.",
  ],

  faqs: [
    {
      q: "How much history do we actually need?",
      a: "It depends on the problem, but as a rough guide you want hundreds of past cases at the absolute minimum and usually thousands, all with the outcome recorded. Something that happens a handful of times a year is not a candidate yet.",
    },
    {
      q: "What if the outcome is hard to define?",
      a: "Pick something that is already recorded, even if it is a rough substitute. Did they renew is easier than are they happy, and it is in the system. A slightly imperfect outcome you can actually measure beats a perfect one you cannot.",
    },
    {
      q: "Can we predict something rare?",
      a: "Yes, and it needs more care, because with something rare a model that always says no will look highly accurate while being useless. This is one of the main reasons accuracy on its own is a misleading number.",
    },
    {
      q: "Who should own this on the business side?",
      a: "Whoever owns the action. Not whoever owns the data and not the technical team. If nobody in the business owns the thing that happens after the prediction, the project has no owner however many people are working on it.",
    },
    {
      q: "How do we know it is worth doing before we build it?",
      a: "Work out roughly how many cases you would catch that you currently miss, and what each one is worth. If the rule you already have catches most of them, the model needs to be a lot better to justify itself.",
    },
    {
      q: "What if the business insists on machine learning specifically?",
      a: "Do the analysis anyway and show the comparison against the simple rule. If a model genuinely wins, you have strengthened their case with evidence. If it does not, the numbers make the argument rather than you.",
    },
  ],

  tools: [
    { name: "A one-sentence template", what: "For each thing, predict outcome, using what we know at the time, so that somebody can do something. Four blanks, all compulsory.", cost: "Free" },
    { name: "A count of complete historical examples", what: "Rows with a known outcome, not rows in a table. The number that decides whether this is possible yet.", cost: "Free" },
    { name: "A sensible rule, written and measured", what: "The comparison point. Without it, any accuracy figure sounds impressive.", cost: "Free" },
    { name: "A named owner for the action", what: "Whoever does something differently as a result. Without one, the project has no real owner.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "choosing-the-right-model-for-the-job", anchor: "picking the right kind of model once you know it is a prediction", context: "Next step" },
    { slug: "when-a-simple-rule-beats-a-model", anchor: "checking whether you need a model at all", context: "Comparison" },
    { slug: "symptom-versus-problem", anchor: "making sure you are solving the real problem", context: "Before anything" },
  ],

  relatedGuides: ["choosing-the-right-model-for-the-job", "when-a-simple-rule-beats-a-model", "symptom-versus-problem"],

  conclusion: [
    "Take the next request for a model that lands on your desk and try to fill in the four blanks: for each thing, predict outcome, using what we know at the time, so that somebody can do something specific. The blank you cannot fill in is the conversation worth having this week.",
  ],
};

export default guide;
