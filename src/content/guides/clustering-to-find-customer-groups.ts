import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "clustering-to-find-customer-groups",
  seoTitle: "Finding Groups in Your Customers Without Deciding First",
  metaDescription:
    "Clustering explained simply. Letting the data suggest the groups instead of assuming them, why there is no right answer, and how to tell a useful group from a meaningless one.",
  title: "Finding the Groups in Your Customers",
  keywords: [
    "customer segmentation machine learning",
    "clustering explained simply",
    "k means business use case",
    "unsupervised learning business",
    "finding customer groups",
    "segmentation analysis",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Most businesses already have customer groups. Small, medium and large. New and existing. Retail and trade. Somebody decided those categories years ago, usually based on one thing that was easy to measure, and everybody has worked with them ever since.",
    "Clustering does something different. Instead of you deciding the groups, you give it everything you know about your customers and ask which ones naturally resemble each other. It comes back with groups you did not define, and sometimes they cut across the ones you have been using.",
    "The thing to understand before anything else is that there is no correct answer here. Unlike predicting whether somebody will pay late, where there is a right answer you can check against, this has no right answer. It will always give you groups. Whether they mean anything is entirely a judgement you have to make.",
  ],

  whyItMatters: [
    "The groups a business uses tend to be historical accidents. They were set up around what the old system could report on, and everybody has been designing products, campaigns and service levels around them ever since without checking whether they still describe anything real.",
    "Finding that your customers naturally fall into different groups than the ones you use is genuinely valuable, because everything downstream is currently aimed at the wrong divisions.",
    "It is also the easiest thing in this whole area to do badly and not notice. It will always produce groups, they will always look plausible when somebody presents them, and there is no accuracy figure to catch a meaningless result.",
  ],

  coreConcepts: [
    {
      term: "Nobody tells it the answer",
      explain:
        "With most prediction work you show it thousands of cases where you know how things turned out. Here there is no outcome. You just hand over the information and ask what resembles what.",
      detail:
        "That is why there is nothing to check it against. Every other kind of model can be scored on whether it got things right. This one cannot, which changes how you have to judge it.",
    },
    {
      term: "It will always give you groups",
      explain:
        "Ask for five groups and you get five, whether or not your customers naturally fall into five kinds. Ask for nine and you get nine.",
      detail:
        "This is the trap. A presentation showing five neat customer types looks convincing regardless of whether the groups reflect anything real. The output looking sensible is not evidence that it is.",
    },
    {
      term: "What you feed in decides what you get",
      explain:
        "Give it spending and it will group by spending. Give it spending, frequency and product mix and you get something quite different. Nothing is discovered that was not in what you provided.",
      detail:
        "So the choice of what to include is the real decision, and it is a business one. It should be made deliberately by somebody who understands the customers rather than by whoever happened to have the data to hand.",
    },
    {
      term: "Things measured on different scales need evening out",
      explain:
        "If one field is in pounds and runs into the thousands, and another is a count that runs from one to five, the pounds will dominate completely.",
      detail:
        "You do not need to know how this gets handled. You need to know that if nobody did it, the answer is mostly just grouping by whichever field has the biggest numbers, and asking about it is a good check.",
    },
    {
      term: "A useful group is one you would treat differently",
      explain:
        "The test is not whether the groups look tidy. It is whether you would do something different for each one. Different pricing, different service, a different conversation.",
      detail:
        "If you would treat two groups identically, they are not useful groups even if they are statistically distinct. This one question filters out most meaningless results in about a minute.",
    },
    {
      term: "Somebody has to be able to name them",
      explain:
        "Take the groups to the people who deal with customers every day and ask them to name each one. Group three should get a name like the trade customers who order weekly and never call us.",
      detail:
        "If experienced people cannot recognise a group or find a name for it, that is a strong signal it is an artefact of the numbers rather than a real kind of customer. This check costs an hour and is worth more than any statistic.",
    },
    {
      term: "How many groups is a business decision",
      explain:
        "There are technical ways of suggesting a number and they are suggestions. The real constraint is usually how many different treatments your business can actually operate.",
      detail:
        "If marketing can run three campaigns, eleven groups is useless however well they separate. Ask how many different things you could genuinely do, and start there.",
    },
    {
      term: "Check whether they hold together over time",
      explain:
        "Run it on last year and on this year separately and see whether similar groups appear. Real kinds of customer tend to persist. Artefacts do not.",
      detail:
        "This is the closest thing to a proper test available here, and hardly anybody does it. If the groups look completely different from one period to the next, they were not describing anything durable.",
    },
    {
      term: "Groups are a starting point, not a conclusion",
      explain:
        "Finding a group is interesting. It does not tell you what to do about them, whether they are worth pursuing, or whether treating them differently would help.",
      detail:
        "Those are separate questions needing separate work, and usually a test. The most common failure is treating the groups themselves as the deliverable and stopping there.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The group that cut across the official categories.",
      walkthrough:
        "The problem: a distributor had used three customer tiers based on annual spend for over a decade. Everything from pricing to account management was built around them. What was happening: a clustering exercise using order frequency, product breadth, seasonality and how often they contacted support produced groups that ignored the spend tiers entirely. One group spanned all three tiers: customers who order the same narrow set of products very frequently and almost never contact anybody.",
      result:
        "What changed: the account team recognised that group immediately and had a name for them within seconds. They were the ones who needed almost no service and were quietly the most profitable per pound of revenue, and several of them were being ignored because they sat in the bottom spend tier. Two of them had left in the previous year and nobody had noticed.",
    },
    {
      kind: "illustration",
      scenario: "Five tidy groups that meant nothing.",
      walkthrough:
        "The problem: a business presented five customer segments with names, colours and a slide each. Everybody was impressed. What was happening: a BA asked two questions. What information went in, and would you treat any of these differently? The answer to the first was total spend and account age. The answer to the second, after some thought, was no.",
      result:
        "What changed: the exercise got redone with a wider set of information chosen by people who actually deal with customers, and with the useful-group test applied from the start. The original groups were essentially spend bands with better graphics. Would you treat these differently is the fastest way to find that out, and it takes a minute.",
    },
    {
      kind: "illustration",
      scenario: "Groups that did not survive the following year.",
      walkthrough:
        "The problem: a subscription business built a segmentation and started designing around it. What was happening: before committing, a BA suggested running the same exercise separately on the previous year's data. Three of the five groups came out recognisably the same. Two were completely different, and one of those two had been the basis for a planned product change.",
      result:
        "What changed: they built on the three stable groups and dropped the plan resting on an unstable one. Running it on two periods and comparing takes an afternoon, almost nobody does it, and it is the nearest thing to a real test this technique has.",
    },
  ],

  learningPath: [
    {
      title: "Decide what to include, with the business",
      body: "Sit with people who deal with customers and ask what genuinely distinguishes one kind from another. Their answer is a much better starting list than whatever data is easiest to get.",
      effort: "2 hours",
      outcome: "The decision that most affects the result, made by the right people.",
    },
    {
      title: "Ask how many treatments you could actually run",
      body: "How many different campaigns, service levels or pricing approaches can the business genuinely operate? That number is your practical starting point.",
      effort: "A conversation",
      outcome: "A number of groups that could lead to action rather than a slide.",
    },
    {
      title: "Check the scales were evened out",
      body: "Ask whether fields measured in very different units were adjusted before grouping. If not, the result is mostly grouping by the biggest numbers.",
      effort: "One question",
      outcome: "A quick way to catch a common and invisible mistake.",
    },
    {
      title: "Take the groups to people who know customers",
      body: "Ask them to name each one. Watch for recognition. A group nobody can name or recognise is probably not real.",
      effort: "1 hour",
      outcome: "The most valuable check available, and one anybody can run.",
    },
    {
      title: "Apply the would-you-treat-them-differently test",
      body: "For each pair of groups, ask what you would do differently. Merge any pair where the honest answer is nothing.",
      effort: "1 hour",
      outcome: "A smaller set of groups that could actually change something.",
    },
    {
      title: "Run it on two periods and compare",
      body: "Do the same exercise on last year and this year separately. Keep the groups that appear in both. Be cautious about the ones that do not.",
      effort: "Half a day",
      outcome: "The closest thing to a proper test this technique offers.",
    },
    {
      title: "Test one difference in treatment before rolling out",
      body: "Pick one group and one change and try it, measuring against a comparable group you left alone. Finding a group is not evidence that treating them differently helps.",
      effort: "Weeks",
      outcome: "Evidence that the groups are worth acting on rather than only worth looking at.",
    },
  ],

  exercises: [
    {
      title: "Ask where your current groups came from",
      brief:
        "Find out where your existing customer categories originated, when, and on what basis. Ask whether the thresholds have ever been reviewed.",
      success:
        "You can say how old they are and what they were based on, and usually the answer is a system limitation from years ago.",
      time: "1 hour",
    },
    {
      title: "The would-you-treat-them-differently test",
      brief:
        "Take any existing segmentation in your business and, for each pair of groups, ask what you actually do differently. Write it down.",
      success:
        "You can identify which pairs get identical treatment, which means they are not functioning as groups at all.",
      time: "45 minutes",
    },
    {
      title: "Name the groups with the account team",
      brief:
        "Show any set of clusters to two people who deal with customers daily and ask them to name each one without being told what defines it.",
      success:
        "At least one gets an immediate confident name, and at least one produces confusion. Both results are informative.",
      time: "1 hour",
    },
  ],

  caseStudy: {
    business:
      "A wholesale bakery supplying cafes, delis and small independent shops across a city. About two hundred and forty accounts.",
    problem:
      "Every customer was treated the same way. The same delivery schedule, the same price list, the same monthly email. The owner had a strong sense that this was wrong and no way to describe the differences. When asked to name the customer types he said good ones and difficult ones, which is not a segmentation.",
    analysis: [
      "The temptation is to segment by size, because turnover is the easiest number to sort by. That produces three groups called big, medium and small, which everybody already knew and nobody can act on.",
      "The useful question is different: what makes two customers behave alike? Order frequency, order size, how much it varies week to week, product mix, how much notice they give, how often they change an order after placing it, payment behaviour, and how seasonal they are.",
      "Two years of order history covered all of that without anybody collecting anything new.",
      "The point of letting the grouping emerge, rather than defining the groups in advance, is that you get the divisions actually present in the behaviour instead of the ones you assumed. That is the entire value and it is why this is worth doing.",
      "What emerged did not match turnover at all. One of the most valuable groups was made up of small accounts ordering the same thing every week with no fuss, and one of the least profitable contained several of the largest accounts by revenue.",
    ],
    aiApproach: [
      {
        step: "Choose behaviour, not identity",
        detail:
          "Feed it what customers do, not who they are. Sector and size describe them. Ordering patterns describe how they behave, and behaviour is what you can respond to.",
      },
      {
        step: "Put the measures on a comparable footing",
        detail:
          "Order value runs into hundreds and order frequency into single figures. Left as they are, the larger numbers dominate and the grouping becomes a sort by turnover with extra steps. Rescaling first is a small technical detail with a large effect on whether the answer is useful.",
      },
      {
        step: "Do not accept the first number of groups you try",
        detail:
          "You have to choose how many groups you want, and there is no correct answer. The real test is whether a group can be described in a sentence and whether the business could do something different for it. Anything else is arithmetic for its own sake.",
      },
      {
        step: "Name them by reading real customers",
        detail:
          "Pull ten actual accounts out of each group and look at them. If somebody in the business can say oh, those are the ones who, you have something. If nobody recognises the group, it is not real, however clean it looks on a chart.",
      },
      {
        step: "Check it holds next quarter",
        detail:
          "Rerun it on a later period. Groups that dissolve were patterns in one quarter's noise. Groups that survive are worth building a plan around.",
      },
    ],
    solution: [
      "Five groups, each describable in a sentence, each with a name the sales team recognised.",
      "The steady weekly group moved to a standing order with a small discount, which cut the admin on both sides.",
      "The high-variation group got a later cutoff and a different delivery slot, because their problem was notice rather than volume.",
      "The group containing several large but unprofitable accounts got a pricing conversation, which had never happened because their revenue made them look like good customers.",
      "New accounts get assigned to a group after eight weeks of ordering.",
    ],
    impact: [
      "The finding that revenue and profitability pointed in different directions changed which accounts the owner chased, and that was the single most valuable output.",
      "Good ones and difficult ones became five described groups, which meant the sales team could talk about accounts precisely.",
      "The standing order change removed a repeated weekly task for a whole group of customers.",
      "The pricing conversation with the large unprofitable accounts happened at all, which it would not have done otherwise.",
    ],
    whatWouldHaveKilledIt:
      "Segmenting by turnover, which is what everybody expects and which would have confirmed what the business already believed while changing nothing. The other failure is treating the groups as fixed truths. They are a description of behaviour in a period, they move, and a business that files them away as permanent customer types will be acting on last year's pattern within a year.",
  },

  mistakes: [
    {
      mistake: "Believing the groups because they look tidy",
      why: "It will always produce neat-looking groups whether or not your customers naturally divide that way. Presentation quality is no evidence at all.",
      fix: "Apply the naming test and the would-you-treat-them-differently test before believing anything.",
    },
    {
      mistake: "Letting whoever has the data choose what goes in",
      why: "What you feed in determines the groups you get. Chosen by convenience, you get groups organised around whatever was easy to extract.",
      fix: "Choose the inputs with people who understand customers, based on what genuinely distinguishes them.",
    },
    {
      mistake: "Not evening out different scales",
      why: "A field measured in thousands will swamp a field measured in single digits, so you end up grouping by one thing while believing you used six.",
      fix: "Ask whether it was done. One question, and it catches an invisible and common mistake.",
    },
    {
      mistake: "Producing more groups than the business can act on",
      why: "Eleven segments when marketing can run three campaigns means nothing happens, and the work becomes a slide deck.",
      fix: "Start from how many different treatments the business can genuinely operate.",
    },
    {
      mistake: "Never checking whether the groups persist",
      why: "Groups that appear one year and vanish the next were not describing real kinds of customer, and anything built on them will not work.",
      fix: "Run it on two periods and keep the groups that appear in both.",
    },
    {
      mistake: "Treating the groups as the deliverable",
      why: "Finding a group tells you nothing about whether treating them differently helps. Businesses roll out different treatment and never check whether it worked.",
      fix: "Test one difference in treatment against a comparable group before rolling anything out.",
    },
  ],

  bestPractices: [
    "Choose what goes in with people who understand customers.",
    "Start from how many treatments the business can actually operate.",
    "Check that different scales were evened out.",
    "Ask experienced people to name each group.",
    "Merge any pair you would not treat differently.",
    "Run it on two periods and keep what persists.",
    "Treat the groups as a starting point, not a conclusion.",
    "Test one difference in treatment before rolling out.",
  ],

  proTips: [
    "Ask the account team to name the groups before you tell them what defines each one. Genuine recognition is instant and specific. If somebody says oh that is the trade customers who order every Friday, you have found something real. If they pause and say I suppose that could be the mid-sized ones, you have not.",
    "Compare the new groups against your existing categories and look specifically at where they disagree. Customers who sit in your top tier but cluster with your low-value group, and the reverse, are the most interesting list this exercise produces. Those are the ones being mistreated by the current categories.",
    "Ask what would have to be true for these groups to be wrong. Usually the honest answer is that nothing would show it, which is exactly why the naming test and the two-period check matter so much here. This is the one technique with no built-in way of telling you it has failed.",
    "Watch out for a group that is really just customers who joined recently, or customers with missing data. Both show up constantly and both look like a genuine group. Check the average age of accounts in each cluster and how complete their records are before getting excited.",
  ],

  businessApplications: [
    "Reviewing customer categories that were set up years ago and never revisited.",
    "Finding groups of customers who need different service levels.",
    "Grouping products by how they actually sell rather than by catalogue category.",
    "Understanding which kinds of case a team handles, for training and staffing.",
    "Identifying groups of suppliers or branches that behave similarly.",
    "Spotting customers who sit in the wrong tier under your current rules.",
  ],

  checklist: [
    "Inputs chosen with people who understand customers.",
    "Number of groups anchored to how many treatments are possible.",
    "Different scales evened out, and confirmed.",
    "Groups named by experienced people without being told the definitions.",
    "Would-you-treat-them-differently test applied to every pair.",
    "Exercise run on two periods and the results compared.",
    "Checked that no group is simply recent customers or incomplete records.",
    "A plan to test one difference in treatment before rolling out.",
  ],

  faqs: [
    {
      q: "How do we know if the groups are right?",
      a: "There is no right answer to check against, which is the defining feature of this technique. The practical tests are whether experienced people recognise and can name the groups, whether you would treat them differently, and whether they appear again in a different period.",
    },
    {
      q: "How many groups should we ask for?",
      a: "Start from how many different treatments the business can actually run. Technical methods can suggest a number and they cannot tell you what your marketing team has capacity for, which is usually the binding constraint.",
    },
    {
      q: "Can we use our existing customer tiers instead?",
      a: "You can, and it is worth finding out where they came from. Most business categories were set up around what an old system could report on. Comparing them against what the data suggests is frequently the most useful part of the whole exercise.",
    },
    {
      q: "What if the groups do not match what anybody expects?",
      a: "That is either the most interesting finding or a sign something went wrong with the inputs. Check the scaling, check for groups that are really just new customers or missing data, then take it to the account team and see if they recognise it.",
    },
    {
      q: "Does finding a group mean we should target them?",
      a: "No. It means they resemble each other. Whether treating them differently helps is a separate question needing a test, and skipping that step is the most common way these projects deliver nothing.",
    },
    {
      q: "How often should we redo it?",
      a: "Yearly is plenty for most businesses, and sooner after a significant change such as a new product line or entering a new market. Running it too often produces churn in the groups that nobody can act on.",
    },
  ],

  tools: [
    { name: "The account team's naming test", what: "Show them the groups and ask for names. The single best check available and it takes an hour.", cost: "Free" },
    { name: "A list of what genuinely distinguishes customers", what: "From people who deal with them, not from whoever has the easiest data.", cost: "Free" },
    { name: "The number of treatments you can operate", what: "The practical constraint on how many groups are worth having.", cost: "Free" },
    { name: "Two periods of data", what: "Run separately and compared. The closest thing to a proper test this technique has.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "framing-a-business-problem-as-a-prediction", anchor: "how this differs from predicting something", context: "Context" },
    { slug: "customer-journey-mapping", anchor: "understanding what those groups actually experience", context: "Next step" },
    { slug: "measuring-whether-it-worked", anchor: "checking whether different treatment helped", context: "Proving it" },
  ],

  relatedGuides: ["framing-a-business-problem-as-a-prediction", "customer-journey-mapping", "measuring-whether-it-worked"],

  conclusion: [
    "Take your existing customer categories and, for each pair, write down what you actually do differently. The pairs that get identical treatment are not really groups, and finding that out takes forty-five minutes and no data science at all.",
  ],
};

export default guide;
