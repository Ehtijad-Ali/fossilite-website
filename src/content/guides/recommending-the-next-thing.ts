import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "recommending-the-next-thing",
  seoTitle: "People Like You Also Bought: How Recommendations Work",
  metaDescription:
    "Two simple ideas behind every recommendation you have ever seen, why they get stuck in a loop, and what to do about brand new customers and products.",
  title: "How Recommendations Actually Work",
  keywords: [
    "recommendation system explained",
    "collaborative filtering simply",
    "product recommendations business",
    "cross sell model",
    "next best action",
    "recommendation engine business use",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 14,

  brief: {
    inOneMinute:
      "For trade customers, the opportunity is not showing them something new. It is stopping them ordering incompletely and paying carriage twice.",
    problem: {
      headline: "Order values are flat while the customer count grows",
      detail:
        "A distributor of industrial fasteners with 1,100 trade accounts, half of them ordering by telephone.",
    },
    wrongApproach: {
      what: "Put a recommendation panel on the website",
      why: "Trade buyers know their part numbers and nobody discovers fasteners for fun. It would also miss the telephone entirely, which is half the revenue, and get measured on clicks.",
    },
    rightApproach: {
      what: "Predict the gap, not the taste",
      why: "A large number of orders were followed within a fortnight by a small second order for a consumable that goes with the first item. That is forgetting, not preference, and it costs the customer a delivery charge.",
    },
    context: {
      where: "B2B distribution, trade counters, parts and consumables.",
      decision: "Which three lines to mention while the order is being taken.",
      metric: "Repeat small orders within a fortnight, and average order value.",
    },
    takeaway:
      "The phone operators got the biggest benefit, and that was the part nobody planned, because everyone had been thinking about the website.",
  },

  story: {
    title: "A completeness check, not a suggestion",
    caption:
      "Measured on whether the second order stops happening, not on clicks. A recommendation that gets clicked and adds nothing measures as a success.",
    stages: [
      { stage: "Problem", label: "Flat order values, growing customers", detail: "And a plan to fix it with discounting, which was not the problem." },
      { stage: "Data", label: "Two years of order lines", detail: "What appears together in an order, and what follows an order within a fortnight." },
      { stage: "Model", label: "Rank likely gaps", detail: "Weighted by this account's own history, which is a far stronger signal than what other accounts do." },
      { stage: "Prediction", label: "Three suggestions, never more", detail: "A panel of twenty is ignored as furniture. The cap is chosen for how people behave." },
      { stage: "Decision", label: "Shown at the basket and on the phone screen", detail: "Framed as commonly ordered with this, which is what made it acceptable to trade buyers." },
      { stage: "Result", label: "Fewer second orders, and no discount", detail: "Customers saved a second carriage charge, which changed how the change was received." },
    ],
  },

  intro: [
    "Every recommendation you have ever seen comes from one of two ideas, and both are simple enough to explain in a sentence.",
    "The first: this thing resembles that thing, so if you liked one you might like the other. Same category, same price bracket, same author, similar description. The second: people who behaved like you also bought this. It does not know anything about the products at all. It knows that customers who bought the same four things you bought tended to buy a fifth.",
    "The second one is the surprising one, because it works without understanding anything. It has no idea what a drill is. It knows that people who bought this drill overwhelmingly bought that particular size of bit, and that is enough to be useful.",
  ],

  whyItMatters: [
    "This is one of the few areas where a modest improvement translates directly into revenue, and where you can test it properly. If a better set of suggestions lifts the average order by a couple of per cent, that arithmetic is easy to do and easy to defend.",
    "It also applies far beyond online retail. Which service should we offer this client next. Which article should we put in front of this reader. Which job should we show this applicant. Which product should the account manager mention on the next call.",
    "And it has two failure modes that are easy to understand and easy to miss. It gets stuck in a loop recommending what it already recommends, and it has nothing to say about anybody or anything new.",
  ],

  coreConcepts: [
    {
      term: "Idea one: this resembles that",
      explain:
        "Compare the things themselves. Same category, similar price, similar description, same author or manufacturer. If you looked at one, here are others like it.",
      detail:
        "Straightforward, easy to explain, and works from day one for a brand new product because you know its attributes. The weakness is that it only ever offers you more of the same.",
    },
    {
      term: "Idea two: people like you also bought",
      explain:
        "Ignore what the products are. Look at who bought what. Find customers whose purchases overlap with yours, and suggest what they bought that you have not.",
      detail:
        "This is the one that produces surprising and useful suggestions, because it picks up connections nobody would think to write down. It also needs a lot of purchase history before it says anything sensible.",
    },
    {
      term: "Most real systems use both",
      explain:
        "Use the resemblance idea for new customers and new products, and the behaviour idea once you know enough about somebody. Blend them in between.",
      detail:
        "When somebody presents a recommendation system, ask which of the two it uses and what it does when it has neither. That question covers most of what can go wrong.",
    },
    {
      term: "The new customer problem",
      explain:
        "Somebody who just arrived has no history, so the behaviour idea has nothing to work with. The same is true of a product you launched this morning.",
      detail:
        "Every business hits this and it needs an explicit answer. Usually the answer is to fall back on what is generally popular or on the resemblance idea until you know enough, and somebody has to decide when to switch.",
    },
    {
      term: "It recommends what it already recommends",
      explain:
        "If a product appears in recommendations, more people see it, so more people buy it, so it looks even more popular, so it gets recommended more. The system quietly narrows.",
      detail:
        "The consequence is that your long tail never gets seen and your recommendations become boring. Deliberately mixing in some variety is not a nicety, it is how you stop the thing collapsing in on itself.",
    },
    {
      term: "Useful is not the same as obvious",
      explain:
        "Recommending a phone case to somebody who just bought a phone is accurate and adds nothing. They were going to buy one anyway.",
      detail:
        "The value is in suggestions somebody would not have found. Judge it on whether it changes behaviour, not on whether the suggestions look sensible, because the most sensible-looking ones are frequently the most useless.",
    },
    {
      term: "Test it against showing the popular things",
      explain:
        "The honest comparison is not against nothing. It is against simply showing your best sellers, which costs almost nothing to build.",
      detail:
        "Plenty of sophisticated systems barely beat that. Insist on the comparison, because it is the difference between a system that earns its keep and one that produces impressive-looking output.",
    },
    {
      term: "Where it appears matters as much as what it says",
      explain:
        "The same suggestions produce very different results at the bottom of a product page, in the basket, in an email a week later, or in an account manager's call notes.",
      detail:
        "This is a business decision and it usually has more effect than improvements to the underlying method. Work out the placement first and then worry about making the suggestions better.",
    },
    {
      term: "Be careful what you optimise for",
      explain:
        "A system aiming purely at what gets clicked will learn to recommend whatever is eye-catching. One aiming at long-term value behaves differently.",
      detail:
        "Decide what you actually want more of before it goes live. Returns, cancellations and unsubscribes are the signals that tell you whether it is helping or quietly annoying people.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The fastener distributor: three suggestions, while the order is still open",
      caption:
        "The phone operator's screen turned out to be where most of the value was, and it was the part nobody planned for, because everybody assumed this kind of thing belonged on a website.",
      trigger: "While an order is being placed, on the basket or on the phone",
      runtime: "Under a second, on the screen the operator already has open.",
      stages: [
        {
          actor: "system",
          label: "Read the lines already on this order",
          output: "the basket as it stands, plus this account's two years of history",
        },
        {
          actor: "rule",
          label: "Look for the forgetting, not the taste",
          detail: "The problem worth solving is the second small order a fortnight later, with its own carriage on it.",
          output: "the gaps, rather than the upsells",
        },
        {
          actor: "model",
          label: "Rank likely gaps, weighted by this account's own ordering",
          detail: "What is normally on an order like this one, from a customer like this one, and is missing today.",
          output: "a ranked list of what is not there and usually is",
          exception: "A brand new account has no history to weight against. It gets nothing rather than a generic guess.",
        },
        {
          actor: "rule",
          label: "Three suggestions, never more",
          detail: "A longer list gets ignored for a fortnight and switched off in the third week.",
          output: "three items, each with the reason it is there",
        },
        {
          actor: "person",
          label: "The operator sees them mid-call and asks",
          detail: "Not a prompt to close a sale. A question about whether the job is complete.",
          output: "added, or declined",
        },
      ],
      loop: "Measured on second orders that no longer needed to happen, not on clicks.",
      outcome:
        "The customer stops placing a small follow-up order a fortnight later, and the carriage on it stops being yours.",
    },
    {
      kind: "tree",
      title: "Should we suggest this at all?",
      caption:
        "Trade buyers know their part numbers, so the bar for interrupting them is high. Most of this filter is about what NOT to show, which is the opposite of how retail recommendation is usually built.",
      question: "Has this account ever bought from this category?",
      branches: [
        {
          answer: "Never, in three years",
          outcome: "Show nothing. Their own history is the strongest signal you have.",
        },
        {
          answer: "Yes",
          question: "Is this a completeness gap or a taste guess?",
          sub: [
            { answer: "It goes with what is in the basket", outcome: "Suggest it. Framed as commonly ordered with this." },
            { answer: "It is a different product they might like", outcome: "Leave it. This is not a discovery shop." },
          ],
        },
      ],
    },
    {
      kind: "flow",
      title: "The fastener distributor: a completeness check, not a suggestion",
      caption:
        "The phone operator's screen was where most of the value turned out to be, and it was the part nobody had planned for because everyone had been thinking about the website.",
      steps: [
        { label: "Two years of order lines", note: "What goes together, and what follows a fortnight later", tone: "input" },
        { label: "Find the forgetting, not the taste", note: "The second small order is the problem" },
        { label: "Rank likely gaps", note: "Weighted by this account's own history", tone: "model" },
        { label: "Three suggestions, never more", note: "Basket screen and phone operator alike" },
        { label: "Measured on repeat orders", note: "Not on clicks", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Accurate suggestions that changed nothing.",
      walkthrough:
        "The problem: a retailer put in a recommendation system and it performed well by its own measures. People clicked the suggestions often. Revenue did not move. What was happening: a BA looked at what it was suggesting. Overwhelmingly it recommended accessories for the item just bought. Cases for phones, bags for laptops, cables for cameras. People clicked because they wanted those things and would have found them anyway.",
      result:
        "What changed: they started measuring against a comparison group who saw no recommendations at all, rather than measuring clicks. The accessory suggestions turned out to add almost nothing. Suggestions from further afield, based on what similar customers bought weeks later, added considerably more. Judge these on whether behaviour changed, not on whether the suggestions look right.",
    },
    {
      kind: "illustration",
      scenario: "The narrowing loop.",
      walkthrough:
        "The problem: a business noticed that the same forty products accounted for a steadily growing share of sales, and their range of two thousand was increasingly dead stock. What was happening: those forty were the ones the recommendation system surfaced. Being surfaced made them sell more, which made them look more popular, which made them get surfaced more. Nothing outside that group ever got a chance to be discovered.",
      result:
        "What changed: they reserved a proportion of the recommendation slots for products the system was less sure about, deliberately, and measured what happened. Sales spread out, several previously invisible lines started moving, and total revenue went up rather than down. Left alone these systems narrow, and the fix is to build in some deliberate variety.",
    },
    {
      kind: "illustration",
      scenario: "Barely beating the best sellers list.",
      walkthrough:
        "The problem: a business was six months into building a sophisticated recommendation system and wanted to justify continuing. What was happening: a BA suggested a comparison. Show one group the model's suggestions and another group simply the current best sellers in the same category. Run it for a month.",
      result:
        "What changed: the model beat the best sellers list by a small margin, enough to be real and not enough to justify the ongoing cost of running and maintaining it at that stage. They kept the simple version, banked the difference, and revisited when they had considerably more purchase history. Comparing against the obvious cheap option is a question worth asking before six months, not after.",
    },
  ],

  learningPath: [
    {
      title: "Decide what you want more of",
      body: "More items per order, more repeat purchases, longer customer life, fewer support calls. This decides everything else, including what counts as success.",
      effort: "A conversation",
      outcome: "A target that is about the business rather than about clicks.",
    },
    {
      title: "Work out where suggestions will appear",
      body: "Product page, basket, email, call notes, account review. This usually has more effect than the method and it is a business decision.",
      effort: "1 hour",
      outcome: "The placement decided before anybody builds anything.",
    },
    {
      title: "Build the cheap comparison first",
      body: "Best sellers in the same category. Costs almost nothing and is the thing anything else has to beat.",
      effort: "1-2 days",
      outcome: "An honest bar, and sometimes a discovery that it is good enough.",
    },
    {
      title: "Decide what happens for new customers and new products",
      body: "Explicitly. What gets shown when you know nothing, and at what point do you switch to behaviour-based suggestions.",
      effort: "A conversation",
      outcome: "An answer to the problem every one of these systems hits.",
    },
    {
      title: "Build in deliberate variety",
      body: "Reserve some proportion of slots for things the system is less certain about. Otherwise it narrows over months and nobody notices until the range is dead.",
      effort: "Part of the build",
      outcome: "Protection against the loop that quietly kills your long tail.",
    },
    {
      title: "Test against a group who see nothing",
      body: "Not clicks. Actual outcome, against a comparable group who got no suggestions at all. That is the only honest measure.",
      effort: "A month of running",
      outcome: "A number you can put in a business case rather than an engagement statistic.",
    },
    {
      title: "Watch the warning signals",
      body: "Returns, cancellations, unsubscribes and complaints. These tell you whether it is helping people or quietly irritating them.",
      effort: "Ongoing",
      outcome: "Early warning that good numbers are hiding a bad experience.",
    },
  ],

  exercises: [
    {
      title: "Check what is being recommended",
      brief:
        "Pull a hundred recommendations your business currently makes and sort them into obvious accessories, more of the same, and genuinely different. Count each group.",
      success:
        "You can say what proportion are suggestions the customer would have found anyway, and it is usually most of them.",
      time: "1 hour",
    },
    {
      title: "Measure the concentration",
      brief:
        "Work out what share of your sales come from your top forty products, this year and two years ago. Compare.",
      success:
        "You can say whether your sales are concentrating, which is the visible symptom of a recommendation system narrowing.",
      time: "1 hour",
    },
    {
      title: "Ask about new customers",
      brief:
        "For any recommendation system in your business, find out exactly what a brand new customer sees, and at what point it switches to personalised suggestions.",
      success:
        "You get a specific answer, or you discover that nobody decided and it is doing something arbitrary.",
      time: "30 minutes",
    },
  ],

  caseStudy: {
    business:
      "A distributor of industrial fasteners and consumables. Around eleven hundred trade accounts ordering through a web shop and by phone.",
    problem:
      "Order values had been flat for two years while the customer count grew. The obvious move was a recommendation panel on the web shop, and the obvious version of that would have been useless, because half the revenue comes down a telephone line and the products are not interesting to browse. Nobody discovers fasteners for fun.",
    analysis: [
      "First correction: this is not a retail discovery problem. Trade customers know what they want. The opportunity is not showing them something new, it is stopping them ordering incompletely and then paying carriage twice.",
      "The counting found the actual problem. A large number of orders were followed within a fortnight by a small second order from the same account, and the second order was usually a consumable that goes with the first item.",
      "That is not a preference to be predicted. It is a forgetting problem, and it costs the customer a delivery charge and the distributor a pick and a van slot.",
      "Two years of order lines gave what was needed: which items appear together in an order, and which items appear in a follow-up shortly after another item.",
      "Ruled out: discounting. The flat order value was not a price problem. Customers were buying what they meant to buy and coming back for the bit they forgot.",
    ],
    aiApproach: [
      {
        step: "Predict the gap, not the taste",
        detail:
          "The question is which item this customer is likely to need alongside what is in the basket, based on what similar orders have historically contained. Framing it as a completeness check rather than a suggestion is what made it acceptable to trade buyers.",
      },
      {
        step: "Use both kinds of signal",
        detail:
          "What goes together in one order, and what tends to follow an order within a fortnight. The second one was where the value was and it is the one most recommendation work ignores, because retail thinking looks at the basket and not at the week after.",
      },
      {
        step: "Respect the customer's own history",
        detail:
          "A customer who has never bought a category once in three years should not be shown it. The strongest signal for a trade account is its own repeat pattern, which is more useful and far less annoying than what other accounts do.",
      },
      {
        step: "Cap it hard",
        detail:
          "Three suggestions, never more. A panel of twenty is ignored as furniture. This is a constraint chosen for how people behave rather than for what the technique can produce.",
      },
      {
        step: "Measure the right thing",
        detail:
          "Not clicks. Whether the second order within a fortnight becomes less common, and whether average order value moves. A recommendation that gets clicked and adds nothing to the order is a distraction that measures as a success.",
      },
    ],
    solution: [
      "Three suggested lines at the basket stage, framed as commonly ordered with this rather than as recommendations.",
      "The same three shown on the phone operator's screen while the order is being taken, which is where half the revenue actually is.",
      "Nothing suggested from a category the account has never bought.",
      "A reorder prompt for consumables based on that account's own historical interval.",
      "The follow-up order rate tracked monthly as the actual measure of whether it works.",
    ],
    impact: [
      "The repeat small order within a fortnight, which was costing both sides money, became less frequent.",
      "The phone operators got the biggest benefit, and that was the part nobody had planned for because everyone had been thinking about the website.",
      "Customers were saved a second carriage charge, which changed how the change was received.",
      "Order value moved without a discount, which was the original objective.",
    ],
    whatWouldHaveKilledIt:
      "Building it as a retail-style discovery panel on the web shop only. It would have been ignored by trade buyers who know their part numbers, it would have missed the telephone channel entirely, and it would have been measured on clicks, which would have made it look like a modest success while doing nothing for the business.",
  },

  mistakes: [
    {
      mistake: "Measuring clicks instead of outcome",
      why: "Suggestions people were going to find anyway get clicked a lot and add nothing. You end up optimising for the least valuable recommendations.",
      fix: "Test against a comparable group who see no suggestions at all, and measure the business outcome.",
    },
    {
      mistake: "Never comparing against the best sellers list",
      why: "That comparison costs almost nothing to build, and plenty of sophisticated systems barely beat it. Without it you cannot say whether the investment is earning anything.",
      fix: "Build the simple version first and make everything else beat it by a stated margin.",
    },
    {
      mistake: "Letting it narrow unchecked",
      why: "Popular things get recommended, which makes them more popular, which gets them recommended more. Over a year your range dies and nobody connects the two.",
      fix: "Reserve a proportion of slots for less certain suggestions and watch how concentrated your sales are becoming.",
    },
    {
      mistake: "No answer for new customers or new products",
      why: "Every system hits this and if nobody decided, it does something arbitrary. New products never get discovered and new customers see nothing useful.",
      fix: "Decide explicitly what gets shown when you know nothing, and when it switches.",
    },
    {
      mistake: "Optimising for whatever gets attention",
      why: "It learns to recommend eye-catching things rather than useful ones, and the returns and complaints follow a few months later.",
      fix: "Decide what you want more of before it goes live, and watch returns, cancellations and unsubscribes as warning signals.",
    },
    {
      mistake: "Worrying about the method before the placement",
      why: "Where suggestions appear usually matters more than how they are generated, and it is much cheaper to change.",
      fix: "Settle the placement first and test that, before spending on a better method.",
    },
  ],

  bestPractices: [
    "Decide what business outcome you want more of, before anything else.",
    "Settle where suggestions will appear before worrying about the method.",
    "Build the best sellers comparison first.",
    "Decide explicitly what new customers and new products get.",
    "Reserve some slots for deliberate variety.",
    "Test against a group who see no suggestions at all.",
    "Measure outcomes rather than clicks.",
    "Watch returns, cancellations and unsubscribes as warning signals.",
    "Track how concentrated your sales are becoming.",
  ],

  proTips: [
    "Look at what is actually being recommended before looking at any performance figure. If most of it is accessories for the thing just bought, the system is taking credit for purchases that would have happened anyway. Ten minutes of reading the suggestions tells you more than the dashboard.",
    "Track what share of sales comes from your top forty products, year on year. A steadily rising figure is the visible symptom of a recommendation system narrowing, and it usually goes unnoticed for a long time because each individual quarter looks fine.",
    "Ask what an account manager would suggest, for a business where recommendations happen in conversation rather than on a website. Their reasoning is a working recommendation system that already exists, and writing it down is both the comparison and often the better answer.",
    "Be careful about recommending things somebody already owns or has already declined. It is a small detail and it does more damage to trust than a mediocre suggestion, because it visibly demonstrates the system does not know anything about them.",
  ],

  businessApplications: [
    "Suggesting products alongside an online purchase or in the basket.",
    "Prompting an account manager with what to raise on the next call.",
    "Choosing which content or article to put in front of a reader.",
    "Suggesting which service a professional firm should offer a client next.",
    "Matching applicants to roles, or roles to applicants.",
    "Deciding which of your products to feature in an email to a specific customer.",
  ],

  checklist: [
    "Business outcome to increase agreed.",
    "Placement decided before any method work.",
    "Best sellers comparison built and measured.",
    "Behaviour for new customers and new products decided explicitly.",
    "Some slots reserved for deliberate variety.",
    "Comparison group who see no suggestions set up.",
    "Outcome measured rather than clicks.",
    "Returns, cancellations and unsubscribes monitored.",
    "Sales concentration tracked over time.",
  ],

  faqs: [
    {
      q: "Which of the two ideas should we use?",
      a: "Both, usually. Resemblance for new customers and new products, behaviour once you know enough about somebody. What matters is that somebody has decided which applies when, rather than it happening by accident.",
    },
    {
      q: "How much purchase history do we need?",
      a: "For the behaviour-based idea, considerably more than people expect, because it depends on finding enough overlap between customers. If you have a few thousand orders, start with resemblance and popularity and revisit later.",
    },
    {
      q: "How do we know whether it is working?",
      a: "Compare against a group who see no suggestions and measure the business outcome. Clicks tell you people noticed. They do not tell you anything was bought that would not have been anyway.",
    },
    {
      q: "Why do our recommendations feel repetitive?",
      a: "Because the system is feeding itself. What it shows gets bought, which makes it look more popular, which gets it shown more. Reserve some slots for less certain suggestions to break the loop.",
    },
    {
      q: "Does this work for business to business?",
      a: "Yes, and it usually looks different. Fewer customers, larger orders and longer cycles mean the behaviour-based idea has less to work with. Prompting an account manager with what similar clients bought next is frequently the practical version.",
    },
    {
      q: "Should we recommend things they have already bought?",
      a: "Only for things people genuinely repurchase, such as consumables. Otherwise it visibly shows the system knows nothing about them, and that costs more trust than a mediocre suggestion does.",
    },
  ],

  tools: [
    { name: "A best sellers list", what: "The cheap comparison that anything else has to beat. Costs almost nothing to build.", cost: "Free" },
    { name: "A group who see no suggestions", what: "The only honest way to know whether any of it changed behaviour.", cost: "Free" },
    { name: "A sample of a hundred actual recommendations", what: "Read them. Ten minutes tells you more than any dashboard.", cost: "Free" },
    { name: "A concentration measure", what: "Share of sales from your top products, tracked over time. The early warning that it is narrowing.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "clustering-to-find-customer-groups", anchor: "grouping customers rather than suggesting to them", context: "Related" },
    { slug: "measuring-whether-it-worked", anchor: "proving a change actually helped", context: "Proving it" },
    { slug: "when-a-simple-rule-beats-a-model", anchor: "when the best sellers list is enough", context: "Simpler option" },
  ],

  relatedGuides: ["clustering-to-find-customer-groups", "measuring-whether-it-worked", "when-a-simple-rule-beats-a-model"],

  conclusion: [
    "Pull a hundred recommendations your business currently makes and sort them into obvious accessories, more of the same, and genuinely different. If most fall in the first two groups, your system is taking credit for purchases that were going to happen anyway.",
  ],
};

export default guide;
