import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "finding-the-most-similar-past-cases",
  seoTitle: "How Did We Handle One Like This Last Time?",
  metaDescription:
    "Nearest neighbours explained simply. The model that does what an experienced person does: look up the most similar past cases and see what happened.",
  title: "How Did We Handle One Like This Before?",
  keywords: [
    "k nearest neighbours explained",
    "knn business use case",
    "similarity search business",
    "case based reasoning",
    "finding similar customers",
    "nearest neighbour model",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "When an experienced estimator gets a new job in, the first thing they do is think of the last few that looked like it. Similar size, similar customer, similar time of year. Then they think about how those went, and they quote accordingly.",
    "There is a model that does exactly that and nothing else. Show it a new case and it goes through your history, finds the handful of past cases most like it, and reports what happened to those. It is called nearest neighbours, and of everything in this area it is the easiest to explain to somebody who has never thought about any of it.",
    "It has one enormous advantage in a business setting. When somebody asks why, the answer is not a percentage or a chain of reasoning. It is here are the five most similar jobs we have done and here is what happened to each of them. People argue with that in a productive way, because they recognise the cases.",
  ],

  whyItMatters: [
    "It is often the fastest route to something useful, because there is very little to build. You need a way of measuring how similar two cases are and a way of looking them up, and you are most of the way there.",
    "It is also the most naturally explainable thing available. Any answer comes with its evidence attached, in the form of real cases people can go and read. That is worth a great deal when the people using it have their own strong opinions.",
    "And even where you end up using something else, this is a very good way to find out whether your data contains a useful signal at all. If the most similar past cases had wildly different outcomes, that tells you something important before you spend three months on a proper model.",
  ],

  coreConcepts: [
    {
      term: "It looks up the most similar past cases",
      explain:
        "New job comes in. Go through the history, find the five or ten most alike, look at what happened to them, report the average or the most common outcome.",
      detail:
        "That is the whole method. There is no learning phase in the usual sense. The history is the model, which is why it is sometimes described as the lazy approach, meaning it does the work at the moment you ask rather than in advance.",
    },
    {
      term: "You have to define what similar means",
      explain:
        "Similar on what? Size, region, customer type, time of year, product mix. That choice is yours and it decides everything the model does.",
      detail:
        "This is the real work and it is a business decision. Ask whoever does this job today what makes two cases comparable in their eyes, and start there rather than throwing in every column you have.",
    },
    {
      term: "Fields measured on different scales will dominate",
      explain:
        "If one field is a value in the thousands and another is a count from one to five, the value will swamp everything. Every case will look similar or dissimilar based almost entirely on that one field.",
      detail:
        "You do not need to know how this gets handled. You need to ask whether it was done, because if not, you have built something that only really looks at one column while appearing to look at eight.",
    },
    {
      term: "How many neighbours you look at matters",
      explain:
        "Look at one and you are at the mercy of a single odd case. Look at fifty and you are basically reporting the average of everything.",
      detail:
        "Somewhere in between is right and it is worth asking what number was used and why. Five to twenty is common. The answer should come from testing rather than from a default.",
    },
    {
      term: "The answer comes with its evidence attached",
      explain:
        "Show the person the neighbours. Here are the five jobs we thought were most like this one, here is what each of them cost, here is what we are suggesting.",
      detail:
        "This is the single best thing about it. It turns a prediction into a conversation, and experienced people can immediately say whether the comparison cases make sense, which is a quality check nothing else gives you.",
    },
    {
      term: "It struggles when you have a lot of columns",
      explain:
        "With five or six pieces of information, similarity means something. With two hundred, almost everything looks equally far from everything else and the idea stops working.",
      detail:
        "So keep the list of what defines similarity short and chosen deliberately. This is one place where more information genuinely makes things worse rather than better.",
    },
    {
      term: "It gets slow as your history grows",
      explain:
        "Every question means searching the whole history. With a few thousand past cases that is instant. With tens of millions and a need for an answer in a fraction of a second, it needs more thought.",
      detail:
        "For most business volumes this is a non-issue. Worth asking about only if you need answers immediately at high volume.",
    },
    {
      term: "It has nothing to say about genuinely new situations",
      explain:
        "If nothing in your history resembles the new case, it will still confidently give you the average of the least dissimilar cases, which is meaningless.",
      detail:
        "Ask for a measure of how similar the neighbours actually were. When the closest match is still a long way off, that case should go to a person rather than getting an automatic answer.",
    },
    {
      term: "It is a very good first test of whether the data has anything in it",
      explain:
        "If the most similar past cases had wildly different outcomes, no model is going to do well, because the information you have does not separate the cases.",
      detail:
        "That is worth knowing in week one rather than month four. It costs a couple of days and it can save a project or redirect it towards collecting better information.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The quote that came with its working.",
      walkthrough:
        "The problem: a joinery firm wanted to speed up quoting. The estimator was the bottleneck and quotes took days. What was happening: they had eleven years of jobs recorded with room count, floor area, timber type, finish level, region and final price. Rather than building a model that produced a number, they built something that pulled up the six most similar past jobs and showed them side by side.",
      result:
        "What changed: the sales team could give an indicative figure on the first call, and more importantly the estimator trusted it, because he could see which jobs it had matched against. Twice in the first month he looked at the comparison jobs and said those are not alike, here is why, which improved the definition of similarity. A prediction he could argue with got adopted where a number would have been ignored.",
    },
    {
      kind: "illustration",
      scenario: "One column doing all the work.",
      walkthrough:
        "The problem: a team built something to find similar customers and the results looked odd. Companies that seemed nothing alike were being matched. What was happening: a BA asked what fields were being used and whether they had been put on a common scale. Annual revenue, in pounds, was in there alongside employee count and a handful of yes-or-no flags. Nobody had evened out the scales, so revenue was millions and the flags were zero or one.",
      result:
        "What changed: once the scales were evened out, similarity started meaning something. Before that the system was effectively grouping purely by revenue while giving the impression of considering eight things. Asking whether the scales were evened out is one question and it catches an entirely invisible problem.",
    },
    {
      kind: "illustration",
      scenario: "Finding out in week one that it would not work.",
      walkthrough:
        "The problem: a business wanted to predict which service contracts would be unprofitable, and a substantial project was being scoped. What was happening: before committing, a BA had somebody spend two days building the simplest possible version, which pulled up the ten most similar past contracts for each new one and looked at how they had gone. The outcomes of those ten were all over the place. Very similar-looking contracts had turned out completely differently.",
      result:
        "What changed: they stopped and asked why. It turned out profitability depended almost entirely on how the client behaved after signing, which was not recorded anywhere at the point of quoting. That is a data problem, not a modelling problem. Two days of work replaced a project that would have failed slowly over several months.",
    },
  ],

  learningPath: [
    {
      title: "Ask what makes two cases comparable",
      body: "Sit with whoever does this by hand and ask what they look at when they think of similar past cases. Their answer is your definition of similarity.",
      effort: "2 hours",
      outcome: "A short, sensible list rather than every column you happen to have.",
    },
    {
      title: "Keep the list short on purpose",
      body: "Five to ten things. This is the one approach where adding more information actively makes it worse, because everything starts looking equally far from everything else.",
      effort: "Part of the design",
      outcome: "Similarity that still means something.",
    },
    {
      title: "Check the scales were evened out",
      body: "Ask directly. If fields measured in thousands sit alongside fields measured in single digits, the big one dominates entirely.",
      effort: "One question",
      outcome: "A quick catch for an invisible and common problem.",
    },
    {
      title: "Show the neighbours, always",
      body: "Never present just an answer. Present the answer plus the past cases it was based on, so people can judge the comparison for themselves.",
      effort: "Part of the build",
      outcome: "The thing that gets it adopted rather than overridden.",
    },
    {
      title: "Add a measure of how close the matches were",
      body: "When the nearest case is still a long way off, flag it. Those cases should go to a person rather than getting a confident automatic answer.",
      effort: "Part of the build",
      outcome: "Protection against the failure that costs most.",
    },
    {
      title: "Use it as a cheap feasibility test",
      body: "Before committing to anything bigger, check whether similar past cases had similar outcomes. If they did not, no model will help and you have a data problem.",
      effort: "2 days",
      outcome: "A project saved or redirected in week one rather than month four.",
    },
  ],

  exercises: [
    {
      title: "Ask what similar means",
      brief:
        "Find whoever makes a judgement by comparing to past cases in your business. Ask them to talk through the last three and note exactly what made them think of the comparisons they used.",
      success:
        "You have a list of five to ten factors, in their words, and you know how many of those are recorded anywhere.",
      time: "2 hours",
    },
    {
      title: "Look up the neighbours by hand",
      brief:
        "Take one recent case and manually find the five most similar past cases using a spreadsheet. Look at what happened to each. Compare against what actually happened to the new one.",
      success:
        "You have a sense of whether similar cases really do have similar outcomes in your business, which is the whole feasibility question.",
      time: "Half a day",
    },
    {
      title: "Check for the dominant column",
      brief:
        "For any similarity or matching system in your business, ask which fields it uses and whether they were put on a common scale. If not, work out which field has the biggest numbers.",
      success:
        "You can say whether the system is really looking at everything it claims to, and often it is not.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Not evening out the scales",
      why: "A field measured in thousands swamps everything else. You end up matching on one column while believing you used eight, and nothing in the output shows you.",
      fix: "Ask whether it was done. One question, and it catches a completely invisible problem.",
    },
    {
      mistake: "Throwing in every available column",
      why: "This is the one approach where more information makes it worse. With too many fields everything looks equally far from everything else and similarity stops meaning anything.",
      fix: "Keep the list to five or ten, chosen with somebody who understands the cases.",
    },
    {
      mistake: "Showing the answer without the neighbours",
      why: "You throw away the best thing about this approach, which is that the evidence comes attached. People then override it exactly as they would any other number.",
      fix: "Always show the comparison cases alongside the answer.",
    },
    {
      mistake: "Not flagging when nothing is really similar",
      why: "It will give a confident answer for a case unlike anything in your history, based on the least dissimilar of a bad set.",
      fix: "Report how close the nearest matches were, and route poor matches to a person.",
    },
    {
      mistake: "Letting the history go stale",
      why: "If the comparison cases are all from three years ago, the answer reflects prices, processes and customers that have moved on.",
      fix: "Weight recent cases more heavily, or exclude anything older than a sensible cut-off, and say what that cut-off is.",
    },
    {
      mistake: "Using it at high volume without checking speed",
      why: "Every question means searching the whole history. That is instant at business scale and becomes a problem if you need immediate answers across millions of records.",
      fix: "Ask about volume and required response time early. For most businesses this never comes up.",
    },
  ],

  bestPractices: [
    "Ask whoever does this by hand what makes two cases comparable.",
    "Keep the list of factors short, five to ten.",
    "Check the fields were put on a common scale.",
    "Ask how many neighbours are used and why.",
    "Always show the comparison cases alongside the answer.",
    "Report how close the nearest matches were.",
    "Route poor matches to a person.",
    "Weight recent cases more heavily than old ones.",
    "Use it as a cheap test of whether the data has any signal in it.",
  ],

  proTips: [
    "Show the neighbours to the experienced person and watch their reaction. When they say those two are nothing alike and here is why, you have just been given a better definition of similarity for free. That feedback loop is available with this approach and with almost nothing else.",
    "Use it as your first two days on any prediction project, whatever you eventually build. If similar past cases had wildly different outcomes, the information you hold does not separate the cases and no method will rescue that. Finding out in week one is worth a great deal.",
    "Ask what proportion of new cases have a genuinely close match in the history. If a third of them do not, you have learned something important about how varied your work is, and it argues for a person handling those rather than any automatic answer.",
    "For anything where people already look up past cases manually, the honest question is whether they need a model at all or just a better search. Frequently the real problem is that finding comparable jobs takes twenty minutes of digging, and fixing that is a smaller and more certain project.",
  ],

  businessApplications: [
    "Quoting and estimating, where the answer comes with comparable past jobs attached.",
    "Matching a new customer or supplier to similar existing ones.",
    "Support, where finding how a similar issue was resolved is the whole task.",
    "Pricing, where you want a figure justified by comparable transactions.",
    "Assessing claims or applications by reference to similar past ones.",
    "A quick feasibility test before committing to a bigger modelling project.",
  ],

  checklist: [
    "Definition of similarity agreed with whoever does the job today.",
    "List of factors kept short and deliberate.",
    "Fields confirmed as put on a common scale.",
    "Number of neighbours chosen by testing rather than default.",
    "Comparison cases shown alongside every answer.",
    "Closeness of the nearest matches reported.",
    "Poor matches routed to a person.",
    "Age of the history considered, with a cut-off or weighting.",
    "Used as a feasibility check before any larger project.",
  ],

  faqs: [
    {
      q: "Is this really machine learning?",
      a: "Yes, and it is the least mysterious kind. There is no training in the usual sense. The history is the model, and the work happens when you ask a question rather than in advance.",
    },
    {
      q: "How many similar cases should it look at?",
      a: "Usually somewhere between five and twenty. One leaves you at the mercy of a single odd case. Fifty is close to just reporting the overall average. The number should come from testing rather than from a default.",
    },
    {
      q: "Why does having lots of columns make it worse?",
      a: "Because with enough fields, every case ends up roughly equally far from every other one, so nothing is meaningfully nearest. This is the one approach where trimming the information down helps rather than hurts.",
    },
    {
      q: "When would we use something else instead?",
      a: "When you have many columns, very large volumes with a need for instant answers, or when a more powerful approach clearly beats it. Even then, keep this one around as the explanation people can look at.",
    },
    {
      q: "Can it handle categories as well as numbers?",
      a: "Yes, with a bit of care about how you measure similarity between two categories. Ask how that was handled, because a careless treatment of categories is another way one field ends up dominating.",
    },
    {
      q: "What if our business has changed a lot?",
      a: "Then old cases are misleading and you should weight recent ones more heavily or exclude anything before the change. Say what the cut-off is, because a comparison to a job from before a price restructure is worse than no comparison.",
    },
  ],

  tools: [
    { name: "A definition of similarity from the experts", what: "What makes two cases comparable, in their words. The real work and a business decision.", cost: "Free" },
    { name: "A common scale across fields", what: "Otherwise the biggest numbers dominate entirely and nothing shows you.", cost: "Free" },
    { name: "The comparison cases, shown", what: "The best feature of this approach. Turns a prediction into a conversation.", cost: "Free" },
    { name: "A closeness measure", what: "So you can route cases with no real match to a person.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "predicting-a-number-with-regression", anchor: "the other way of predicting a number", context: "Alternative" },
    { slug: "what-data-you-need-before-you-start", anchor: "checking your data has anything in it", context: "Feasibility" },
    { slug: "choosing-the-right-model-for-the-job", anchor: "when to use this rather than something else", context: "Choosing" },
  ],

  relatedGuides: ["predicting-a-number-with-regression", "what-data-you-need-before-you-start", "choosing-the-right-model-for-the-job"],

  conclusion: [
    "Take one recent case and find the five most similar past ones by hand in a spreadsheet. Look at what happened to each. If those five went completely differently, you have learned in an afternoon that no model is going to help until you record something you are not recording today.",
  ],
};

export default guide;
