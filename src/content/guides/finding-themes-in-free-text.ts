import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "finding-themes-in-free-text",
  seoTitle: "Forty Thousand Complaints and Nobody Has Read Them",
  metaDescription:
    "Topic modelling in plain English. Finding recurring themes in text nobody has time to read, why humans have to name them, and when word counting is enough.",
  title: "Finding Themes in Text Nobody Has Read",
  keywords: [
    "topic modelling explained simply",
    "analysing free text comments",
    "complaint analysis method",
    "survey free text analysis",
    "themes in customer feedback",
    "text clustering business",
  ],
  category: "data-science",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "Almost every business is sitting on a large pile of writing that nobody has read. Complaints, review comments, the free text box at the end of a survey, support ticket descriptions, exit interview notes. Somebody reads a sample when a crisis happens and the rest sits there.",
    "There is a family of techniques for finding the recurring themes in that pile without anybody reading all of it. You give it forty thousand complaints and it comes back with something like: there appear to be nine recurring themes here, and here are the words that characterise each one.",
    "It has the same fundamental property as grouping customers, and the same warning attached. There is no right answer to check against. It will always produce themes. Whether those themes mean anything is a judgement, and the judgement has to be made by somebody who knows the business.",
  ],

  whyItMatters: [
    "This text is frequently the most honest information a business has about itself, and it goes unread purely because of volume. Customers write down exactly what went wrong, in their own words, and nobody has the hours.",
    "It also changes what you can count. Once you know the recurring themes, you can count how many complaints fall into each one, watch how that moves month to month, and connect a rising theme to something that changed. That is far more useful than a satisfaction score.",
    "And the alternative most businesses use, which is reading a sample when somebody complains loudly, is systematically biased towards whatever prompted the reading.",
  ],

  coreConcepts: [
    {
      term: "It finds words that keep appearing together",
      explain:
        "It looks across all the documents for groups of words that tend to show up in the same pieces of text, and reports those groups as themes.",
      detail:
        "It does not understand anything. A theme is a bundle of words that co-occur. That is enough to be genuinely useful, and it explains why the output needs interpreting rather than reading directly.",
    },
    {
      term: "You have to name the themes yourself",
      explain:
        "What comes back is a list of words per theme. Delivery, late, driver, missing, waiting. A person has to look at that and say this is about things not arriving on time.",
      detail:
        "This is not a limitation to work around, it is the job. Do it with somebody who handles these cases daily, because they will name a theme in seconds that would take you an hour to work out.",
    },
    {
      term: "There is no right answer to check against",
      explain:
        "Like grouping customers, this has no correct output. Ask for nine themes and you get nine, whether or not there are nine real ones.",
      detail:
        "So the tests are practical rather than statistical. Can experienced people name them? Do they hold up if you run it on a different period? Would you do anything differently for each?",
    },
    {
      term: "Read actual examples from each theme",
      explain:
        "For every theme, pull ten real pieces of text it assigned there and read them. Do they belong together?",
      detail:
        "This is the check that matters and it takes an hour. A theme that looks coherent as a word list frequently falls apart the moment you read the actual complaints assigned to it.",
    },
    {
      term: "Counting words often gets you most of the way",
      explain:
        "Before anything else, count the most common words and phrases across the whole pile, and count how many documents contain particular terms you already care about.",
      detail:
        "For a lot of businesses that is the entire finding. If four thousand complaints mention delivery and eleven hundred mention refund, you have learned something substantial in an afternoon.",
    },
    {
      term: "The most common words are usually useless",
      explain:
        "Your product name, your company name and ordinary connecting words will dominate everything unless somebody removes them.",
      detail:
        "Ask what was excluded. If a theme is characterised by your own brand name, somebody has skipped this, and every theme will be contaminated by it.",
    },
    {
      term: "How many themes is a business decision",
      explain:
        "Ask for five and you get broad ones. Ask for fifty and you get narrow overlapping ones. There are ways to suggest a number and none is definitive.",
      detail:
        "The practical constraint is how many distinct things the business could act on. Nine themes that each lead somewhere beat forty that nobody can hold in their head.",
    },
    {
      term: "Check it holds up across two periods",
      explain:
        "Run it separately on this year and last year. Themes that appear in both are probably real. Themes that appear once are probably artefacts.",
      detail:
        "Hardly anybody does this and it is the nearest thing to a proper test available here. It takes an afternoon and it stops you building on something that was noise.",
    },
    {
      term: "Once you have themes, counting them over time is the value",
      explain:
        "The themes themselves are interesting. Counting how many complaints fall into each one each month, and watching what moves, is what makes it operational.",
      detail:
        "A theme rising sharply after a product change or a process change is the kind of finding that leads directly to action, and it is impossible without having established the themes first.",
    },
  ],

  diagrams: [
    {
      kind: "curve",
      title: "The value is the movement, not the snapshot",
      caption:
        "A single report of what people are writing about gets admired once and filed. Counting the same themes month after month is what makes one property's rising problem visible while it is still small.",
      xLabel: "months",
      yLabel: "share of reviews mentioning it",
      series: [
        {
          name: "Check-in queue at one property",
          points: [[0, 12], [14, 14], [28, 18], [42, 26], [56, 38], [70, 52], [84, 64], [100, 71]],
        },
        {
          name: "Breakfast, group-wide",
          points: [[0, 44], [14, 42], [28, 45], [42, 43], [56, 41], [70, 44], [84, 42], [100, 43]],
        },
        {
          name: "Room cleanliness",
          dashed: true,
          points: [[0, 30], [14, 28], [28, 27], [42, 24], [56, 22], [70, 21], [84, 19], [100, 18]],
        },
      ],
      notes: [{ x: 70, y: 52, text: "fits none of the four existing categories" }],
    },
    {
      kind: "flow",
      title: "The hotel group: two thousand a month and nobody reading them",
      caption:
        "Step four is not optional. The method groups words that co-occur and understands nothing, so a theme can look coherent from its top words and contain two unrelated things.",
      steps: [
        { label: "Written feedback, several platforms", note: "The scores say something is wrong. Only the text says what.", tone: "input" },
        { label: "Strip the words that are everywhere", note: "Hotel, room, stay, night, property names" },
        { label: "Let the themes come out of the words", note: "Rather than forcing them into four existing categories", tone: "model" },
        { label: "Read ten real reviews per theme", note: "A list of top words is not a finding" },
        { label: "Count them month on month", note: "Alert when one rises sharply at one site", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The theme that appeared two months after a change.",
      walkthrough:
        "The problem: a business had two years of complaint free text nobody had analysed. Satisfaction scores were drifting down and nobody could say why. What was happening: an analyst found the recurring themes and then counted how many complaints fell into each one by month. One theme, characterised by words about being passed between departments and repeating information, had roughly doubled starting about two months after a reorganisation of the support teams.",
      result:
        "What changed: the connection had not been visible in any score or any report. The satisfaction number had moved slightly and told nobody why. Establishing themes and then counting them over time is what turned a pile of text into something that pointed at a specific decision.",
    },
    {
      kind: "illustration",
      scenario: "The word count that was enough.",
      walkthrough:
        "The problem: a business wanted to understand thirty thousand review comments and a project was being scoped. What was happening: before agreeing, a BA spent an afternoon counting how many comments contained each of about forty terms the business already cared about. Delivery, price, quality, staff, website, returns, and specific product names.",
      result:
        "What changed: the counts alone showed that one product line accounted for a wildly disproportionate share of negative mentions, which nobody had known. They acted on that and revisited the larger project later. Always count the obvious words first, because sometimes that is the whole answer and it costs an afternoon.",
    },
    {
      kind: "illustration",
      scenario: "Themes that fell apart when somebody read them.",
      walkthrough:
        "The problem: a team presented eight themes from customer feedback, each with a name and a word list. It looked convincing. What was happening: a BA asked to see ten real comments from each theme. Two of the eight held together well. One turned out to be mostly comments containing the company's own name, which had not been excluded. Another was a mixture of unrelated complaints that happened to be unusually long.",
      result:
        "What changed: they excluded the obvious words, reran it, and checked every theme by reading examples before presenting anything. Reading ten real examples per theme takes an hour and it is the only check that reliably catches this. A word list can look coherent while the documents behind it are not.",
    },
  ],

  learningPath: [
    {
      title: "Count the obvious words first",
      body: "Before anything else, count how many documents mention each of the terms the business already cares about. An afternoon, and sometimes it is the whole answer.",
      effort: "Half a day",
      outcome: "A real finding cheaply, and the comparison anything else has to beat.",
    },
    {
      title: "Get the obvious words excluded",
      body: "Your brand name, your product names, ordinary connecting words. Ask what was excluded, because without this every theme is contaminated.",
      effort: "One question",
      outcome: "Themes about the business rather than about your own name.",
    },
    {
      title: "Ask for a number of themes the business could act on",
      body: "Nine that each lead somewhere beat forty nobody can hold in their head. Start from how many distinct things you could actually do something about.",
      effort: "A conversation",
      outcome: "An output sized for use rather than for completeness.",
    },
    {
      title: "Name the themes with people who handle these cases",
      body: "Show them the word lists without telling them what you think each is. Their instant recognition, or lack of it, is the best signal you will get.",
      effort: "1 hour",
      outcome: "Named themes, and early warning about any that describe nothing.",
    },
    {
      title: "Read ten real examples from every theme",
      body: "Not the word list, the actual documents assigned there. Check they belong together.",
      effort: "1 hour",
      outcome: "The check that most reliably catches a theme that is not real.",
    },
    {
      title: "Run it on two periods and compare",
      body: "This year and last year separately. Keep the themes that appear in both and be cautious about the rest.",
      effort: "Half a day",
      outcome: "The nearest thing to a proper test this technique has.",
    },
    {
      title: "Count the themes over time",
      body: "Once established, count how many documents fall into each theme each month and watch what moves. Line up any rises against changes in the business.",
      effort: "1-2 days",
      outcome: "The step that turns interesting analysis into something operational.",
    },
  ],

  exercises: [
    {
      title: "Count the obvious terms",
      brief:
        "Take any pile of free text your business holds and count how many documents contain each of thirty terms you already care about. Rank them.",
      success:
        "You have a ranked list, and usually at least one count is surprising enough to be worth investigating.",
      time: "Half a day",
    },
    {
      title: "Read ten from each theme",
      brief:
        "For any set of themes produced in your business, pull ten real documents from each and read them. Note which themes hold together and which do not.",
      success:
        "You can say which themes are real, and usually at least one falls apart.",
      time: "1 hour",
    },
    {
      title: "Find the unread pile",
      brief:
        "Find out how much free text your business collects and how much of it anybody reads. Complaints, survey comments, ticket descriptions, exit interviews.",
      success:
        "You have a figure for how much honest information about your business is going unread, and it is usually most of it.",
      time: "1 hour",
    },
  ],

  caseStudy: {
    business:
      "A hotel group with fourteen properties. Reviews arrive from several booking platforms and its own post-stay survey.",
    problem:
      "Around two thousand pieces of written feedback a month and nobody reading them. The star ratings were tracked closely and the written comments, which are where the actual information is, were opened only when a general manager wanted ammunition for an argument.",
    analysis: [
      "The scores tell you something is wrong. Only the text tells you what. That gap was the whole problem: a property could slide a quarter of a star and nobody could say why for months.",
      "Reading a sample by hand first is not optional and it is always skipped. Two hundred reviews read manually established roughly what was in there and gave something to check the automated results against.",
      "The categories the group already used were the wrong ones. Feedback was tagged as room, food, staff or facilities, which is how the business is organised rather than how guests experience a stay. Nothing about the check-in queue at a specific time of day fits into those four boxes.",
      "Letting the themes emerge from the text rather than assigning them to existing categories is the entire point. It produces the divisions actually present in what people wrote.",
      "The obvious risk was noise. Hotel reviews are full of words like room, stay, hotel and night, which appear everywhere and separate nothing. The property names had the same problem.",
    ],
    aiApproach: [
      {
        step: "Let the themes come out of the words",
        detail:
          "The method finds groups of words that tend to appear together in the same reviews. It has no idea what they mean. It is finding co-occurrence, and that is both its power and its limit.",
      },
      {
        step: "Strip out the words that appear everywhere",
        detail:
          "Hotel, room, stay, night, and every property name. These dominate and produce a theme that is simply the fact that these are hotel reviews. Removing them is what lets the real distinctions surface.",
      },
      {
        step: "Name the themes by reading real reviews",
        detail:
          "Ten actual reviews per theme, read by a person. A theme is not a theme until somebody in the business can say what it is. A list of top words is not a finding.",
      },
      {
        step: "Choose how many themes by what can be acted on",
        detail:
          "Too few and everything blends into one. Too many and you get thirty overlapping slivers nobody can respond to. The right number is roughly what the operations team could actually run a project against.",
      },
      {
        step: "Count them over time, which is where the value is",
        detail:
          "A single snapshot is mildly interesting. The theme rising month on month at one property is the thing that changes what somebody does on Monday.",
      },
    ],
    solution: [
      "Written feedback assigned to themes automatically each week.",
      "Themes named by people, not by word lists, and reviewed twice a year.",
      "A monthly trend per property showing which themes are growing.",
      "Alerts when a theme rises sharply at one site, which is how a local problem gets caught early.",
      "Ten real reviews attached to every theme in the report, so nobody has to trust the label.",
    ],
    impact: [
      "The reason behind a falling score became visible in weeks rather than being reconstructed months later.",
      "A theme about check-in queues at a specific time emerged that fitted none of the four existing categories, and it had been present in the text for a year.",
      "General managers started reading a themed summary rather than either ignoring the text or cherry-picking from it.",
      "The group learned which of its problems were group-wide and which were one property, which had been genuinely unclear.",
    ],
    whatWouldHaveKilledIt:
      "Trusting the theme labels without reading the underlying reviews. The method groups words that co-occur and has no understanding at all, so a theme can look coherent from its top words and contain two unrelated things. Somebody has to read ten real reviews per theme. The other failure is presenting a one-off snapshot: the value is entirely in the movement over time, and a single report gets admired once and filed.",
  },

  mistakes: [
    {
      mistake: "Believing themes because the word lists look coherent",
      why: "A list of words can read as a sensible theme while the actual documents assigned to it are a mixture of unrelated things.",
      fix: "Read ten real examples from every theme. One hour, and it catches this reliably.",
    },
    {
      mistake: "Not excluding the obvious words",
      why: "Your brand name and ordinary connecting words dominate everything, and every theme ends up partly about your own company name.",
      fix: "Ask what was excluded. If a theme is characterised by your product name, somebody skipped it.",
    },
    {
      mistake: "Producing more themes than anybody can act on",
      why: "Forty overlapping themes is a wall. Nothing gets done and the exercise becomes a slide deck.",
      fix: "Start from how many distinct things the business could act on, which is usually under ten.",
    },
    {
      mistake: "Skipping the word count",
      why: "It costs an afternoon and it frequently contains the whole finding. Businesses go straight to something elaborate and never establish what the simple version would have shown.",
      fix: "Count the obvious terms first, always.",
    },
    {
      mistake: "Never checking whether themes persist",
      why: "A theme that appears in one period and not the next was probably an artefact, and anything built on it will not hold.",
      fix: "Run it on two periods and keep what appears in both.",
    },
    {
      mistake: "Stopping at the themes",
      why: "Knowing there are nine themes is interesting. Counting them over time and connecting a rise to something that changed is what leads to action.",
      fix: "Build the monthly counts as part of the work rather than as a follow-up nobody funds.",
    },
  ],

  bestPractices: [
    "Count the obvious terms before anything else.",
    "Make sure brand names and common words are excluded.",
    "Size the number of themes to what the business can act on.",
    "Have experienced people name the themes without being told what you think they are.",
    "Read ten real documents from every theme.",
    "Run it on two periods and keep what persists.",
    "Count themes over time and line up rises against business changes.",
    "Keep the original text available so anybody can go and read it.",
  ],

  proTips: [
    "Show the word lists to somebody who handles complaints daily and ask them to name each theme, without telling them what you think it is. Instant recognition means it is real. A long pause and a hedged answer means it probably is not, and that judgement is more reliable than any statistic available here.",
    "Count the obvious terms first and be prepared for that to be the whole project. If eleven hundred comments mention one product line and it accounts for a small share of sales, you have found something substantial in an afternoon, and nobody needed to build anything.",
    "Once you have themes, the value is almost entirely in counting them month by month and lining the movements up against things the business changed. A theme doubling two months after a reorganisation is the kind of finding that gets acted on, and it is invisible without the themes existing first.",
    "Always keep the original text one click away from any chart. The moment a theme rises, somebody will want to read the actual comments, and a report that shows a count without letting anybody read the underlying complaints gets distrusted very quickly.",
  ],

  businessApplications: [
    "Understanding what customers actually complain about, at volume.",
    "Analysing free text answers at the end of surveys that nobody currently reads.",
    "Finding recurring themes in support ticket descriptions.",
    "Reviewing exit interview notes for patterns in why people leave.",
    "Making sense of online reviews across products.",
    "Spotting a new problem emerging after a product or process change.",
  ],

  checklist: [
    "Obvious terms counted first as a comparison.",
    "Brand names and common words excluded.",
    "Number of themes sized to what the business can act on.",
    "Themes named by people who handle these cases daily.",
    "Ten real documents read from every theme.",
    "Exercise run on two periods and results compared.",
    "Themes counted over time, month by month.",
    "Rises lined up against known business changes.",
    "Original text accessible from any reporting.",
  ],

  faqs: [
    {
      q: "How do we know the themes are real?",
      a: "There is no statistical answer, which is the defining feature of this technique. Use the practical tests: can experienced people name them, do ten real documents from each theme belong together, and do the themes appear again in a different period.",
    },
    {
      q: "How many themes should we ask for?",
      a: "Start from how many distinct things the business could actually act on, which is usually fewer than ten. Forty overlapping themes produces nothing except a long document.",
    },
    {
      q: "Is simple word counting really enough?",
      a: "Often, yes. Counting how many documents mention each of the terms you already care about takes an afternoon and frequently contains the finding. Always do it first, because sometimes it is the answer.",
    },
    {
      q: "Should we use a large language tool instead?",
      a: "It will do a better job of grouping by meaning and cost considerably more. Start with counting and with the simpler grouping techniques, and move up if the distinctions you need genuinely depend on meaning rather than vocabulary.",
    },
    {
      q: "Why does excluding common words matter so much?",
      a: "Because your brand name, product names and ordinary connecting words appear everywhere, so they dominate every theme. Without excluding them, several of your themes will effectively be about your own company name.",
    },
    {
      q: "What do we do once we have the themes?",
      a: "Count them over time. The themes on their own are interesting. Watching a theme rise sharply two months after something changed in the business is what leads to action.",
    },
  ],

  tools: [
    { name: "A count of obvious terms", what: "Thirty words the business already cares about. An afternoon, and sometimes the whole finding.", cost: "Free" },
    { name: "An exclusion list", what: "Brand names, product names, common connecting words. Without it every theme is contaminated.", cost: "Free" },
    { name: "Ten real documents per theme", what: "The check that reliably catches a theme that is not real. One hour.", cost: "Free" },
    { name: "Monthly counts per theme", what: "What turns interesting analysis into something operational.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "naive-bayes-for-sorting-text", anchor: "sorting text once you have categories", context: "Next step" },
    { slug: "clustering-to-find-customer-groups", anchor: "the same idea applied to customers", context: "Related" },
    { slug: "customer-journey-mapping", anchor: "using what customers say about their experience", context: "Application" },
  ],

  relatedGuides: ["naive-bayes-for-sorting-text", "clustering-to-find-customer-groups", "customer-journey-mapping"],

  conclusion: [
    "Find out how much free text your business collects and how much of it anybody actually reads. Then spend one afternoon counting how many of those documents mention each of thirty terms you already care about. That count alone regularly turns up something nobody knew.",
  ],
};

export default guide;
