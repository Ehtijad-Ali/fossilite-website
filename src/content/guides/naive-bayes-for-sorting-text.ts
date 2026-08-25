import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "naive-bayes-for-sorting-text",
  seoTitle: "Sorting the Post: How Machines Categorise Text",
  metaDescription:
    "Naive Bayes explained by counting words. The old, simple approach that still sorts tickets, emails and complaints well enough, and why it works despite being wrong.",
  title: "Sorting the Post Automatically",
  keywords: [
    "naive bayes explained simply",
    "text classification business",
    "email routing model",
    "ticket categorisation machine learning",
    "spam filter how it works",
    "sorting complaints automatically",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "Imagine somebody new in the post room whose only job is to sort incoming letters into four trays. They cannot read properly. What they can do is notice that letters mentioning refund, damaged and returns almost always go in one tray, and letters mentioning invoice, statement and overdue almost always go in another.",
    "After a few thousand letters they get quite good at it, without ever understanding a single sentence. That is essentially what the oldest and simplest approach to sorting text does. It counts which words show up in which pile, and then for a new item it asks which pile these words look most like.",
    "It is called Naive Bayes, and the naive part is an admission built into the name. It assumes every word is independent of every other one, which is obviously untrue in any real language. It works remarkably well anyway, and understanding why tells you something useful about when to reach for it.",
  ],

  whyItMatters: [
    "Sorting incoming text is one of the most common and least glamorous problems in business. Support tickets, emails, complaints, applications, expense descriptions. In most businesses a person does it by hand and it eats hours.",
    "It is also the problem where people most often reach for something enormous when something small would do. The current wave of language tools can absolutely sort your tickets. So can counting words, at a fraction of the cost and with something your existing team can run.",
    "And it is a genuinely good place to start, because it takes very little to build and immediately tells you whether the words in your text actually separate your categories. If they do not, nothing more sophisticated is going to rescue that.",
  ],

  coreConcepts: [
    {
      term: "It counts which words appear in which category",
      explain:
        "Take a few thousand past items where somebody assigned a category. Count how often each word appears in each pile. For something new, ask which pile its words most resemble.",
      detail:
        "There is genuinely nothing more to it than counting and comparing. That simplicity is why it runs instantly, needs almost no computing, and can be built by somebody with ordinary technical skills.",
    },
    {
      term: "It assumes words are independent, which is wrong",
      explain:
        "It treats not and happy as two separate pieces of evidence, with no idea that not happy means something different from happy.",
      detail:
        "That assumption is plainly false and it is in the name. It works anyway because for sorting into categories you only need to get the ranking right, not the underlying likelihood, and the errors tend to cancel out across many words.",
    },
    {
      term: "It needs categories somebody has already assigned",
      explain:
        "You need past items with a label on them. A few thousand per category is comfortable. A few hundred can work for clearly distinct categories.",
      detail:
        "The good news is that most businesses already have this. Every ticket that somebody categorised by hand over the last two years is a labelled example sitting there waiting.",
    },
    {
      term: "Your existing categories are probably part of the problem",
      explain:
        "If a third of tickets go into a category called Other or General Enquiry, that category is not a category. The model will struggle exactly where your people do.",
      detail:
        "Before building anything, look at how the existing categories are used. Fixing a muddled set of categories frequently helps more than any modelling, and it is a business exercise rather than a technical one.",
    },
    {
      term: "It gives a score, so you can route only the confident ones",
      explain:
        "You do not have to accept every answer. Route the ones it is confident about automatically and send the rest to a person.",
      detail:
        "This is the design that makes these projects succeed. Automating seventy per cent of the sorting with high accuracy is worth far more than automating all of it badly.",
    },
    {
      term: "Language drifts and so must the model",
      explain:
        "New product names, new problems, new phrases customers start using. Words that meant nothing last year become important.",
      detail:
        "Retraining is cheap here because the method is simple. Schedule it, and pay particular attention after any product launch or process change.",
    },
    {
      term: "A handful of words does most of the work",
      explain:
        "Ask which words most strongly indicate each category. The list is usually short, obvious in hindsight, and genuinely interesting to the business.",
      detail:
        "It is also a good check. If a word that has nothing to do with a category is doing heavy lifting, something odd is going on, usually a quirk of how the historical examples were collected.",
    },
    {
      term: "A word list may get you most of the way",
      explain:
        "Before building anything, try the simplest possible rule. If it contains refund or return, send it to returns. Measure how well that does.",
      detail:
        "Frequently that gets you a long way, and it needs no model, no retraining and nobody to maintain it. It is also the comparison anything else has to beat.",
    },
    {
      term: "When to use something bigger",
      explain:
        "When meaning genuinely matters. When the difference between two categories depends on sentence structure, or sarcasm, or a phrase that means the opposite of its words.",
      detail:
        "For sorting into obvious operational buckets that is rarely the case. For understanding what somebody actually wants in a nuanced complaint, it is.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Two years of hand-sorted tickets sitting there already.",
      walkthrough:
        "The problem: a support team spent about ninety minutes every morning reading and routing incoming tickets to the right specialist queue. What was happening: a BA pointed out they had over four years of tickets that somebody had already categorised by hand, which is exactly the training data needed. The first version took a couple of days to build and got the routing right most of the time.",
      result:
        "What changed: they routed the confident ones automatically and sent the rest to a person, which handled roughly three quarters of the volume. The morning routing job went from ninety minutes to about twenty. The labelled examples had been sitting in the ticket system the whole time and nobody had thought of them as data.",
    },
    {
      kind: "illustration",
      scenario: "The category that was not a category.",
      walkthrough:
        "The problem: a model sorting complaints was performing badly and the team assumed it needed a more powerful approach. What was happening: a BA looked at how the existing categories were being used. Nearly forty per cent of historical complaints had been filed under General, because it was the first option in a dropdown and the fastest way for a busy person to close the form.",
      result:
        "What changed: they redesigned the categories with the complaints team, removed General entirely, and recategorised a sample by hand to create clean training examples. Performance improved dramatically with no change of method. When a model struggles to sort things, check whether the categories themselves make sense before assuming the method is at fault.",
    },
    {
      kind: "illustration",
      scenario: "The word list that was good enough.",
      walkthrough:
        "The problem: a finance team wanted to categorise expense descriptions automatically and a project was being scoped. What was happening: before agreeing, a BA spent an afternoon writing a list of about thirty words and phrases mapped to categories. Anything containing certain hotel chains went to accommodation, anything containing certain rail operators went to travel, and so on. She measured it against a year of already-categorised expenses.",
      result:
        "What changed: the word list got about eighty per cent right, needed no model, no retraining and nobody to maintain it beyond occasionally adding a supplier. They used it, and revisited a year later when the volume had grown. Always measure the obvious word list first, because sometimes it is the answer.",
    },
  ],

  learningPath: [
    {
      title: "Look at how your existing categories are used",
      body: "Count how many items are in each. If one is enormous, or one is called Other, that is your first problem and it is a business one.",
      effort: "2 hours",
      outcome: "Frequently a bigger improvement than any modelling, and a prerequisite for everything else.",
    },
    {
      title: "Count your labelled examples per category",
      body: "How many past items has somebody actually categorised, per category? Small categories with very few examples will not work well and need saying so up front.",
      effort: "1 hour",
      outcome: "A realistic view of which categories are learnable and which are not.",
    },
    {
      title: "Write and measure the word list first",
      body: "Thirty words and phrases mapped to categories. Measure against your history. This is your comparison and occasionally your answer.",
      effort: "Half a day",
      outcome: "A number anything else has to beat, produced in an afternoon.",
    },
    {
      title: "Build the counting version and compare",
      body: "Same historical data, tested on a later period. Compare against the word list in the same terms.",
      effort: "2-3 days",
      outcome: "A view on whether the model earns its keep over the simple list.",
    },
    {
      title: "Decide the confidence cut-off with the team",
      body: "How confident does it need to be before routing automatically? Set that so the automatic ones are reliably right and the rest go to a person.",
      effort: "A conversation",
      outcome: "The design decision that makes these projects work.",
    },
    {
      title: "Look at the words driving each category",
      body: "Ask for the strongest indicators per category and read them with the team. Check nothing odd is doing heavy lifting.",
      effort: "1 hour",
      outcome: "A sanity check that no summary figure provides, and often something interesting for the business.",
    },
    {
      title: "Schedule retraining, especially after launches",
      body: "Language moves. New products, new problems, new phrases. Retraining is cheap here so do it regularly and deliberately after changes.",
      effort: "A conversation",
      outcome: "A model that keeps up with what customers are actually saying.",
    },
  ],

  exercises: [
    {
      title: "Audit the categories",
      brief:
        "Count how your business's existing categories for tickets, complaints or emails are actually used. Find the biggest one and ask people why things end up there.",
      success:
        "You can say whether the categories are meaningful, and usually you have found one that is a dumping ground.",
      time: "2 hours",
    },
    {
      title: "Write the word list",
      brief:
        "For any sorting task in your business, write thirty words or phrases and the category each one implies. Test it against a hundred past items by hand.",
      success:
        "You have a percentage, and sometimes the realisation that this is good enough on its own.",
      time: "Half a day",
    },
    {
      title: "Find the labelled data you already have",
      brief:
        "Look for anywhere in your business where somebody has been categorising things by hand for years. Tickets, expenses, complaints, enquiries. Count how many labelled examples exist.",
      success:
        "You find a source of training data nobody had thought of as data, which is the usual outcome.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Building before fixing the categories",
      why: "If a large share of history is filed under a meaningless catch-all, the model learns that mess. No method rescues incoherent categories.",
      fix: "Audit how the categories are used first. It is a business exercise and it frequently helps more than any modelling.",
    },
    {
      mistake: "Trying to automate everything",
      why: "Forcing every item through automatically means accepting the low-confidence guesses, which is where all the errors are and where trust gets lost.",
      fix: "Route only the confident ones and send the rest to a person. Seventy per cent done reliably beats a hundred per cent done badly.",
    },
    {
      mistake: "Never measuring the word list",
      why: "Without it you cannot say whether the model was worth building, and sometimes a list of thirty phrases gets most of the way for no ongoing cost.",
      fix: "Write it and measure it in an afternoon, before anything else.",
    },
    {
      mistake: "Reaching for a large language tool by default",
      why: "It will work and it costs far more to run, needs specialist attention, and is harder to keep stable. For sorting into obvious operational buckets it is usually unnecessary.",
      fix: "Start with counting words. Move up only when meaning genuinely matters and you can show the simpler version failing.",
    },
    {
      mistake: "Never retraining",
      why: "New products, new problems and new customer phrasing all appear. The model was trained on last year's language and quietly gets worse.",
      fix: "Schedule retraining and do it deliberately after any product launch or process change. It is cheap here.",
    },
    {
      mistake: "Not looking at which words drive each category",
      why: "You miss the check that catches a quirk in how the historical examples were collected, which shows up as an unrelated word doing heavy lifting.",
      fix: "Ask for the strongest indicators per category and read them with the team.",
    },
  ],

  bestPractices: [
    "Audit how your existing categories are actually used, first.",
    "Count labelled examples per category and flag the thin ones.",
    "Write and measure a word list before building anything.",
    "Test on a later period than the one it learned from.",
    "Route only confident items automatically and send the rest to a person.",
    "Set the confidence cut-off with the team who receive the output.",
    "Read the strongest words per category with the business.",
    "Schedule retraining, and retrain deliberately after launches.",
  ],

  proTips: [
    "Look for labelled data your business has been creating for years without thinking of it as data. Every ticket somebody categorised, every expense somebody coded, every complaint somebody filed under a heading. That is training data, it is free, and it is usually sitting in a system nobody has connected to this idea.",
    "When a sorting model performs badly, look at the categories before looking at the method. A dumping-ground category that takes a third of the volume will defeat anything, and fixing it is a conversation with the team rather than a technical project.",
    "Ask which words most strongly indicate each category and read the list out loud to the people who do the sorting. They will confirm most of it instantly and occasionally point at something and say that is only there because of how we used to log things, which is exactly the check you want.",
    "Before agreeing to anything that reads text properly, ask whether the categories are genuinely subtle or just operational. Sorting into billing, delivery and technical is not a language problem. Working out whether somebody is about to complain to a regulator is. Only the second needs the heavier tools.",
  ],

  businessApplications: [
    "Routing support tickets or emails to the right team.",
    "Categorising complaints so they can be counted and reported.",
    "Coding expense descriptions to the right accounting category.",
    "Filtering out spam or junk before a person sees it.",
    "Tagging incoming enquiries by product or topic.",
    "Sorting documents into types before they are processed.",
  ],

  checklist: [
    "Existing categories audited for meaning and for dumping grounds.",
    "Labelled examples counted per category.",
    "Word list written and measured as a comparison.",
    "Model tested on a later period than it learned from.",
    "Confidence cut-off agreed with the receiving team.",
    "Low-confidence items routed to a person.",
    "Strongest words per category reviewed with the business.",
    "Retraining scheduled, with triggers after launches and process changes.",
  ],

  faqs: [
    {
      q: "Why does it work if the assumption behind it is wrong?",
      a: "Because for sorting into categories you only need the ranking to come out right, not the underlying likelihood. The errors from treating words as independent tend to cancel out across many words, so the winning category is usually still the winning category.",
    },
    {
      q: "How many examples do we need?",
      a: "A few thousand per category is comfortable and a few hundred can work if the categories are clearly distinct. The bigger constraint is usually that some categories have very few examples, and those will not work well however much data you have overall.",
    },
    {
      q: "Should we use a large language tool instead?",
      a: "For sorting into obvious operational buckets, usually not. It will work and it costs far more to run and maintain. Start with counting words and move up only when the distinction genuinely depends on meaning.",
    },
    {
      q: "What if a lot of our history is filed under Other?",
      a: "Fix that first. It is a business exercise with the team who do the filing, and it frequently improves things more than any change of method. A dumping ground category defeats every approach.",
    },
    {
      q: "Can it handle several categories at once?",
      a: "It naturally produces a score for every category, so yes, and you can act on the top two if that is useful. Ask for the scores rather than just the winner, because a close second is informative.",
    },
    {
      q: "How often should we retrain?",
      a: "Every few months, and deliberately after any product launch or process change. Retraining is cheap with this approach, so there is little reason to leave it.",
    },
  ],

  tools: [
    { name: "Your existing categorised history", what: "Tickets, expenses and complaints somebody already labelled. Free training data nobody thinks of as data.", cost: "Free" },
    { name: "A word list", what: "Thirty phrases mapped to categories, written in an afternoon. The comparison and sometimes the answer.", cost: "Free" },
    { name: "A confidence cut-off", what: "Route the sure ones, send the rest to a person. The design decision that makes these projects work.", cost: "Free" },
    { name: "The strongest words per category", what: "Read with the team. Catches quirks in how the history was collected.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "finding-themes-in-free-text", anchor: "when you do not have categories yet", context: "Alternative" },
    { slug: "neural-networks-when-they-are-worth-it", anchor: "when meaning genuinely matters", context: "Bigger tools" },
    { slug: "when-a-simple-rule-beats-a-model", anchor: "measuring the word list properly", context: "Comparison" },
  ],

  relatedGuides: ["finding-themes-in-free-text", "neural-networks-when-they-are-worth-it", "when-a-simple-rule-beats-a-model"],

  conclusion: [
    "Find somewhere in your business where people have been categorising things by hand for years, and count how many labelled examples that has produced. It is free training data, it is usually sitting in a system nobody thinks of as a data source, and it takes an hour to find.",
  ],
};

export default guide;
