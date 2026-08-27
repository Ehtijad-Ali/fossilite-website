import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "market-basket-analysis",
  seoTitle: "What Gets Bought Together, and What That Is Worth",
  metaDescription:
    "Association rules explained in plain English. The three numbers that separate a useful finding from an obvious one, and why most of what comes out is worthless.",
  title: "What Gets Bought Together",
  keywords: [
    "market basket analysis explained",
    "association rules business",
    "products bought together",
    "cross sell analysis",
    "apriori explained simply",
    "basket analysis retail",
  ],
  category: "data-science",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "Take every basket, every order, every job sheet from the last two years and ask a simple question. Which things keep turning up together? Not because anybody planned it, just because that is what customers do.",
    "This is called market basket analysis and it is one of the oldest ideas in the field. It produces statements of the form: when somebody buys this, they also buy that, roughly this often. Thousands of them, automatically, from data you already have.",
    "The catch is that most of what comes out is useless. Bread and milk go together. Large orders contain more items. Your best-selling product appears in lots of baskets. All true, all worthless. The skill is entirely in separating the few findings that are worth acting on from the many that are merely correct.",
  ],

  whyItMatters: [
    "The data is already sitting there. Every business that records what went into an order or a job has years of this waiting, and hardly anybody has looked at it beyond the obvious top sellers.",
    "It also goes far beyond shopping. Which services clients buy together. Which parts fail together on the same machine. Which clauses appear together in contracts that go badly. Which symptoms turn up together on tickets that end up escalated.",
    "And it produces something you can act on without building a system. A finding that two products sell together far more often than chance can become a bundle, a shelf change, a prompt in an order screen, or a conversation an account manager has. None of that needs a model running anywhere.",
  ],

  coreConcepts: [
    {
      term: "It finds things that turn up together",
      explain:
        "Go through every basket. Count how often each combination appears. Report the combinations that appear together more than you would expect.",
      detail:
        "That is genuinely all of it. There is no prediction and no learning in the usual sense. It is careful counting across a very large number of combinations.",
    },
    {
      term: "Three numbers, and you need all three",
      explain:
        "How often does this combination happen at all. When somebody buys the first thing, how often do they buy the second. And is that more than you would expect from the second thing's popularity alone.",
      detail:
        "Those three questions are the entire discipline. Most nonsense findings come from looking at one or two of them and ignoring the third.",
    },
    {
      term: "Popular things appear with everything",
      explain:
        "If a product is in a third of all baskets, it will appear alongside almost every other product. That is not a relationship, it is popularity.",
      detail:
        "This is the trap the third number exists to catch. Always ask whether the pairing happens more than you would expect given how often each item sells on its own.",
    },
    {
      term: "Rare combinations are usually noise",
      explain:
        "A combination appearing in eleven baskets out of four hundred thousand might have a striking pattern and it means nothing. With enough combinations, something will look remarkable by chance.",
      detail:
        "Set a minimum before you start. If a finding is not backed by a meaningful number of real baskets, it does not go on the list, however interesting it looks.",
    },
    {
      term: "Most of what comes out is obvious",
      explain:
        "You will get thousands of rules and most will be things anybody in the business already knew. That is not a failure, it is the nature of the exercise.",
      detail:
        "Expect to throw away the overwhelming majority. Work through the list with somebody experienced and keep the handful that make them stop and think.",
    },
    {
      term: "Together is not because of",
      explain:
        "Two things selling together does not mean one causes the other, or that promoting one will sell more of the other. They might both be driven by something else entirely.",
      detail:
        "This matters the moment somebody wants to act. The finding is a lead. Whether acting on it works is a separate question and usually needs a test.",
    },
    {
      term: "Direction matters and is often forgotten",
      explain:
        "People who buy the expensive machine nearly always buy the cheap consumable. People who buy the cheap consumable mostly do not buy the machine. Those are very different facts.",
      detail:
        "Ask which way round any finding runs before acting on it. Prompting machine buyers about consumables is sensible. Prompting consumable buyers about machines is not.",
    },
    {
      term: "It applies to far more than shopping",
      explain:
        "Any situation where things occur together in a group. Services on a client account. Parts on a repair. Options on a configured product. Clauses in a contract. Symptoms on a ticket.",
      detail:
        "The retail framing hides how broadly useful this is. If your business records sets of things that happen together, this technique applies to it.",
    },
    {
      term: "The finding is not the deliverable",
      explain:
        "Knowing two things sell together tells you nothing about whether bundling them, moving them or prompting about them will help.",
      detail:
        "Take the best few findings and test one. Without that, this becomes an interesting slide deck, which is how most of these exercises end.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "A striking pattern that was just popularity.",
      walkthrough:
        "The problem: a team presented a finding that eighty per cent of people who bought a particular accessory also bought a specific own-brand item. It looked like a strong relationship worth building a promotion around. What was happening: a BA asked what proportion of all baskets contained that own-brand item. About seventy-eight per cent. It was in almost everything.",
      result:
        "What changed: the finding disappeared. Eighty per cent against a background of seventy-eight is nothing at all. Always ask how often the second item appears on its own before getting interested in how often it appears alongside something else. That one question kills most of the impressive-looking findings.",
    },
    {
      kind: "illustration",
      scenario: "The parts that failed together.",
      walkthrough:
        "The problem: a maintenance business wanted to reduce repeat callouts. Engineers kept going back to the same machines within a few weeks. What was happening: instead of looking at shopping baskets, they applied the same counting to repair jobs, treating each job as a basket of parts replaced. Two particular components turned up together far more often than their individual rates would suggest, and in many cases they had been replaced weeks apart rather than on the same visit.",
      result:
        "What changed: engineers were prompted to check the second component whenever they replaced the first. Repeat visits on those machines dropped noticeably. The technique is described as retail and the data was job sheets. Any records of things occurring together will do.",
    },
    {
      kind: "illustration",
      scenario: "Three thousand rules and four worth reading.",
      walkthrough:
        "The problem: a business ran the analysis and got back over three thousand findings. Nobody knew what to do with a list that long. What was happening: a BA set a minimum number of real baskets, filtered out anything where the pairing was no stronger than the items' individual popularity, and then sat with a category manager and read through what was left.",
      result:
        "What changed: about forty findings survived the filtering, and of those the manager pointed at four that genuinely surprised her. Those four became one bundling test. The other three thousand were correct and useless. This is the normal ratio and it is worth telling people in advance so a big list does not look like a big result.",
    },
  ],

  learningPath: [
    {
      title: "Work out what counts as a basket",
      body: "One order, one job, one client account, one contract. Be specific, because it decides everything. An order and a monthly account are very different groupings.",
      effort: "30 minutes",
      outcome: "A definition everybody agrees on before any counting happens.",
    },
    {
      title: "Set a minimum before you look",
      body: "How many real baskets must a combination appear in before it counts? Decide it in advance so you are not tempted by an exciting finding backed by nine cases.",
      effort: "A conversation",
      outcome: "Protection against the noise that a very large number of combinations guarantees.",
    },
    {
      title: "Always compare against how often each item sells alone",
      body: "The third number. Without it, popular items will dominate every finding and you will chase relationships that are just popularity.",
      effort: "Part of the analysis",
      outcome: "The filter that removes most of the nonsense.",
    },
    {
      title: "Check which way round each finding runs",
      body: "Buying A leads to B is not the same as buying B leads to A. Look at both directions before deciding what to do.",
      effort: "Part of the analysis",
      outcome: "Prompts that make sense rather than ones that annoy people.",
    },
    {
      title: "Read the survivors with somebody experienced",
      body: "A category manager, an engineer, an account manager. Ask which ones they already knew and which surprise them.",
      effort: "1 hour",
      outcome: "The handful worth acting on, separated from the many that are merely correct.",
    },
    {
      title: "Test one finding properly",
      body: "Pick the best one, make one change, and measure against a comparable group you left alone. Two things selling together is not evidence that acting on it helps.",
      effort: "Weeks",
      outcome: "The difference between a slide deck and a result.",
    },
  ],

  exercises: [
    {
      title: "Check a finding against background popularity",
      brief:
        "Take any claim in your business that two things go together. Work out how often the second one appears on its own across all baskets, and compare.",
      success:
        "You can say whether the pairing is real or just reflects one item's popularity, which usually settles it.",
      time: "45 minutes",
    },
    {
      title: "Apply it outside retail",
      brief:
        "Find somewhere in your business that records sets of things happening together: parts on a repair, services on an account, options on a configuration. Count the most common pairs by hand.",
      success:
        "You have a list of pairs from a source nobody thought of as basket data, and at least one is worth a conversation.",
      time: "2 hours",
    },
    {
      title: "Check the direction",
      brief:
        "For any cross-sell prompt currently running in your business, check both directions. Of people who bought A, how many bought B, and of people who bought B, how many bought A.",
      success:
        "You can say whether the prompt is pointed the sensible way round, and sometimes it is not.",
      time: "30 minutes",
    },
  ],

  caseStudy: {
    business:
      "An independent hardware and DIY shop. One large site, about eleven thousand product lines, till data going back four years.",
    problem:
      "The owner rearranged the shop every couple of years based on instinct and on what the reps told him. He wanted to know what actually goes together, and he had a specific worry: he suspected he was discounting things people would have bought anyway.",
    analysis: [
      "Four years of till receipts is the entire dataset and it already exists. No collection project, no integration, nothing to buy. This is the cheapest analysis in the whole library to get started on.",
      "The first pass produces obvious rubbish, and it is important to expect that. The strongest associations were things like paint and paint. Frequently bought together simply reflects the things that sell most.",
      "So the useful measure is not how often two things appear together. It is whether they appear together more often than you would expect given how often each sells on its own. That single correction is what separates a finding from a description of your bestsellers.",
      "With that applied, three genuinely useful patterns emerged. A plumbing fitting and a specific sealant, sold in different aisles at opposite ends of the shop. Timber and a particular fixing, where customers frequently returned the next day for the fixing. And a seasonal one around a particular garden product.",
      "The timber pattern was the valuable one and it was not really about layout. Customers were coming back the next day, which means they got home and could not finish the job.",
    ],
    aiApproach: [
      {
        step: "Correct for popularity or you learn nothing",
        detail:
          "Compare how often two items appear together against how often you would expect them to by chance. Without this you get a ranked list of your bestsellers described as insights, which is the single most common failure of this analysis.",
      },
      {
        step: "Set a floor on how often it must occur",
        detail:
          "A pattern appearing in four receipts out of a hundred thousand is noise, however striking it looks. Setting a minimum before you start stops you acting on coincidence.",
      },
      {
        step: "Look for pairs across time, not just within a basket",
        detail:
          "What gets bought the next day after something is often more useful than what is in the same basket, because it points at an incomplete purchase. The timber finding came from here and would have been invisible in a same-basket analysis.",
      },
      {
        step: "Ignore anything you cannot act on",
        detail:
          "Plenty of true patterns have no available response. The test is whether it changes a layout, a range decision, a prompt at the till or a bundle. If not, it is trivia, and a report full of unactionable truths trains people to stop reading it.",
      },
      {
        step: "Check whether the pattern is just the season",
        detail:
          "Two garden items appearing together in July is not a relationship between the items. Run it within seasons before believing anything.",
      },
    ],
    solution: [
      "The plumbing fitting and its sealant relocated to the same aisle.",
      "A prompt at the till when timber is scanned without the fixing, phrased as a question rather than an upsell.",
      "Three bundle offers built from real co-purchase rather than from what the reps were pushing.",
      "One long-standing discount stopped, because the analysis showed the two items sold together regardless.",
      "The analysis rerun each quarter, since ranges and seasons move.",
    ],
    impact: [
      "The next-day return trip for a missing fixing became less common, which is a better customer experience and an extra sale in the same visit.",
      "The owner stopped discounting a pairing that needed no encouragement, which was his original suspicion and it turned out to be correct.",
      "Layout decisions started coming from receipts rather than from reps, which changed who had influence over the shop floor.",
      "Several striking-looking patterns were correctly ignored because nothing could be done about them.",
    ],
    whatWouldHaveKilledIt:
      "Acting on raw co-occurrence. The first output was a list of bestsellers dressed up as insight, and rearranging a shop around it would have achieved nothing while looking data-driven. The other trap is the famous story everyone repeats about supermarket purchases, which is almost certainly not true and which sets an expectation of one dramatic revelation. Real findings from this are small, plural and mildly useful, and that is fine.",
  },

  mistakes: [
    {
      mistake: "Ignoring how popular each item is on its own",
      why: "A product in a third of baskets appears alongside nearly everything. Findings involving it look strong and mean nothing.",
      fix: "Always compare the pairing against what you would expect from each item's individual rate. This kills most impressive-looking findings.",
    },
    {
      mistake: "Chasing a striking pattern in very few cases",
      why: "With thousands of combinations, some will look remarkable by chance. A rule backed by eleven baskets is noise.",
      fix: "Set a minimum number of real baskets before you start looking, and hold to it.",
    },
    {
      mistake: "Presenting the whole list",
      why: "Three thousand findings is not a result, it is a wall. The reader picks whichever one appeals and the useful ones get lost.",
      fix: "Filter, then read the survivors with an experienced person, then present the four that surprised them.",
    },
    {
      mistake: "Treating together as because of",
      why: "Two things selling together does not mean promoting one sells more of the other. They may both follow from something else.",
      fix: "Treat every finding as a lead and test one before rolling anything out.",
    },
    {
      mistake: "Getting the direction wrong",
      why: "Prompting people who bought a cheap item about an expensive one, because the expensive buyers all bought the cheap one, produces irrelevant prompts and irritated customers.",
      fix: "Check both directions explicitly before designing any prompt.",
    },
    {
      mistake: "Stopping at the findings",
      why: "The analysis is interesting and interesting is not valuable. Most of these exercises end as a slide deck nobody acts on.",
      fix: "Pick one finding and test it against a comparable group. That is the deliverable.",
    },
  ],

  bestPractices: [
    "Define precisely what counts as one basket.",
    "Set a minimum number of real baskets before you look.",
    "Always compare against how often each item occurs on its own.",
    "Check which direction each finding runs in.",
    "Expect to discard the overwhelming majority of what comes out.",
    "Read the survivors with somebody who knows the business.",
    "Treat findings as leads rather than conclusions.",
    "Test one change against a comparable group before rolling out.",
  ],

  proTips: [
    "Ask the category manager or the engineer which findings they already knew before showing them the numbers. Anything they can predict is not worth your time, and the two or three that make them pause are worth the whole exercise. That conversation is the actual analysis.",
    "Try it on something that is not shopping. Parts replaced on a repair, services held on an account, options chosen on a configured product, clauses in contracts that ended in dispute. The technique is generic and the retail framing stops most businesses realising they already have the data.",
    "Look for pairs that are strong and rare rather than strong and common. Common pairs are already known and already exploited. A pairing that only happens in two per cent of baskets and happens far more than chance is where the unexploited value usually sits.",
    "When somebody wants to act on a finding, ask what they think would happen if the relationship is real but not causal. Frequently the honest answer is that the change costs almost nothing and might help, which is a perfectly good reason to try it as a test rather than a reason to roll it out everywhere.",
  ],

  businessApplications: [
    "Deciding what to bundle, or what to prompt about at the point of order.",
    "Shelf and catalogue layout, physical or online.",
    "Prompting an account manager about which service a client is missing.",
    "Spotting components that fail together, to reduce repeat visits.",
    "Finding options that are always configured together, which may point to a standard package.",
    "Looking at what appears together in cases that ended badly, as an investigation.",
  ],

  checklist: [
    "Definition of one basket agreed.",
    "Minimum number of supporting baskets set in advance.",
    "Every finding compared against individual item popularity.",
    "Direction of each finding checked.",
    "List filtered before anybody sees it.",
    "Survivors reviewed with somebody who knows the business.",
    "Findings treated as leads rather than conclusions.",
    "One change tested against a comparable group.",
  ],

  faqs: [
    {
      q: "Why does most of the output turn out to be useless?",
      a: "Because the technique counts every combination and there are enormous numbers of them. Most real combinations are either already obvious to the business or reflect one item simply being popular. That is normal, and expecting it stops a long list looking like a big result.",
    },
    {
      q: "What are the three numbers I should ask for?",
      a: "How often the combination happens at all, how often the second item follows the first, and whether that is more than you would expect given the second item's own popularity. The third is the one people forget and it kills most nonsense findings.",
    },
    {
      q: "Does this only apply to retail?",
      a: "No, and the retail name stops businesses realising it. Any records of things occurring together work: parts on a repair, services on an account, options on a configuration, clauses in a contract, symptoms on a ticket.",
    },
    {
      q: "Can we act on a finding straight away?",
      a: "Treat it as a lead. Two things occurring together does not mean promoting one sells the other. Pick the best finding, make one change, and measure against a comparable group you left alone.",
    },
    {
      q: "How many baskets do we need?",
      a: "Enough that a combination appearing in a small percentage still means hundreds of real cases. For most businesses a year or two of orders is plenty. What matters more is setting the minimum before you look.",
    },
    {
      q: "Is this the same as a recommendation system?",
      a: "Related and simpler. This produces general statements about what goes with what. A recommendation system produces suggestions personalised to one customer. Basket findings are frequently a good first step towards one.",
    },
  ],

  tools: [
    { name: "A clear definition of one basket", what: "Order, job, account, contract. Decides everything downstream.", cost: "Free" },
    { name: "A minimum support threshold, set in advance", what: "Protection against the noise that thousands of combinations guarantee.", cost: "Free" },
    { name: "Background popularity for every item", what: "The comparison that removes most impressive-looking nonsense.", cost: "Free" },
    { name: "An hour with a category manager or engineer", what: "Separates the few surprising findings from the many obvious ones.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "recommending-the-next-thing", anchor: "turning this into personalised suggestions", context: "Next step" },
    { slug: "clustering-to-find-customer-groups", anchor: "grouping customers rather than items", context: "Related" },
    { slug: "measuring-whether-it-worked", anchor: "testing whether acting on a finding helps", context: "Proving it" },
  ],

  relatedGuides: ["recommending-the-next-thing", "clustering-to-find-customer-groups", "measuring-whether-it-worked"],

  conclusion: [
    "Take any claim in your business that two things go together and check how often the second one appears on its own across all orders. That single comparison takes forty-five minutes and it removes most of the findings people get excited about.",
  ],
};

export default guide;
