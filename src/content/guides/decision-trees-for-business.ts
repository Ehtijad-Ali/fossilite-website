import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "decision-trees-for-business",
  seoTitle: "Decision Trees: A Flowchart the Computer Worked Out",
  metaDescription:
    "The one kind of model anybody can read. What a decision tree is, where it beats cleverer things, and the trap that makes it look better than it is.",
  title: "Decision Trees: A Flowchart It Worked Out Itself",
  keywords: [
    "decision tree explained simply",
    "decision tree business use case",
    "explainable machine learning",
    "rules from data",
    "decision tree vs regression",
    "interpretable model business",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Every business has flowcharts. If the order is over this amount, send it to a manager. If the customer has been with us more than a year, waive the fee. Somebody sat down and wrote those rules based on experience.",
    "A decision tree is the same thing, except the computer worked out the rules by looking at what actually happened. It goes through your history asking, in effect, what single question would best split these cases into the ones that went well and the ones that did not. Then it does the same again inside each branch.",
    "What comes out is a flowchart you can print and put on a wall. That is the whole appeal. Of everything in this area, this is the one kind that a person with no technical background can read, argue with, and spot a mistake in.",
  ],

  whyItMatters: [
    "Being able to see the reasoning is worth a lot in business, and it is worth more than people give it credit for. A slightly less accurate thing that a manager can read and challenge often produces better outcomes than a more accurate thing nobody trusts.",
    "There are also situations where you have no choice. If you have to explain to a customer why they were refused, or to a regulator why a decision went a certain way, something you can trace beats something you cannot.",
    "And it is an excellent way to learn what is in your own data. Even when you end up using something else, growing one of these first shows you what actually separates your good cases from your bad ones, in language everybody understands.",
  ],

  coreConcepts: [
    {
      term: "It is a series of yes or no questions",
      explain:
        "Is the order over five hundred pounds? If yes, has this customer ordered before? If no, is the delivery address different from the billing address? Each answer takes you down a branch until you reach an outcome.",
      detail:
        "That is genuinely all it is. The clever part is not the shape, it is that the machine worked out which questions to ask, in which order, from the history rather than from somebody's opinion.",
    },
    {
      term: "It picks the question that separates cases best",
      explain:
        "At every point it tries every possible question and keeps the one that does the best job of splitting the cases into cleaner groups. Then it repeats inside each group.",
      detail:
        "You can explain this to anybody. If you were sorting a pile of past claims into fraudulent and genuine, and you could only ask one question first, which would you ask? That is exactly what it is doing.",
    },
    {
      term: "Anybody can read the result",
      explain:
        "You can print it. You can walk a manager through a specific case and show them the exact path it took and why.",
      detail:
        "This is the reason to use one. When the person receiving the answer has to defend it, or when somebody has a right to know why, being able to point at the path is worth more than a couple of points of accuracy.",
    },
    {
      term: "Left alone, it will memorise rather than learn",
      explain:
        "If you let it keep splitting, it will eventually make a branch for every single past case. It will then be perfect on the history and hopeless on anything new.",
      detail:
        "This is the trap. A tree that is one hundred per cent right on the cases it learned from has almost certainly just memorised them. Ask how deep it is allowed to go and how it did on cases it had never seen.",
    },
    {
      term: "Keep it shallow enough to read",
      explain:
        "A tree four or five questions deep can be read and argued with. One twenty questions deep cannot, and you have given up the only real advantage.",
      detail:
        "Deliberately limiting the depth usually costs you a little accuracy and buys you something people will actually use. That is a trade worth making more often than it gets made.",
    },
    {
      term: "It is nervous about small changes",
      explain:
        "Change a handful of cases in the history and you can get a noticeably different tree. It is more sensitive than most people expect.",
      detail:
        "So do not treat the specific questions as deep truths about your business. Treat them as one plausible way of splitting the cases. If somebody says the model proves that region matters most, that is over-reading it.",
    },
    {
      term: "It is very good at combinations",
      explain:
        "Where it shines is finding that something matters only in combination with something else. New customers are fine, and large orders are fine, and new customers placing large orders to a different address are the problem.",
      detail:
        "That kind of pattern is exactly what a person writing rules by hand tends to miss, because it only shows up when you look at how factors combine rather than one at a time.",
    },
    {
      term: "It is usually not the most accurate thing available",
      explain:
        "On its own, a single tree is generally beaten by approaches that combine many of them. That is a real trade, not a technicality.",
      detail:
        "The question is whether the extra accuracy is worth losing the ability to explain. Sometimes clearly yes, sometimes clearly no, and you should decide it deliberately rather than defaulting to whichever the technical team prefers.",
    },
    {
      term: "Use it to learn even when you will not deploy it",
      explain:
        "Growing one and reading it is one of the fastest ways to find out what actually separates your good cases from your bad ones.",
      detail:
        "Show the tree to the people who do the work. They will tell you which branches make sense, which are obvious, and which are surprising, and the surprising ones are where the interesting conversation is.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The tree that found what the fraud team already suspected.",
      walkthrough:
        "The problem: an online retailer wanted to reduce card fraud without making checkout harder for everybody. What was happening: they grew a small tree on a couple of years of orders. The top split was whether the delivery address matched the billing address. Below that, whether the account was less than a day old. Below that, order value over a threshold. The fraud team looked at it and said they had always thought that combination was the problem and had never been able to prove it.",
      result:
        "What changed: they turned the top three branches into an actual rule in the checkout, which added a verification step for that specific combination and left everybody else alone. Because it was a flowchart, the fraud team could argue with it, the risk committee could approve it, and customer services could explain it to anybody who asked.",
    },
    {
      kind: "illustration",
      scenario: "One hundred per cent accurate and completely worthless.",
      walkthrough:
        "The problem: somebody presented a tree that correctly classified every single case in the historical data. Everybody was impressed. What was happening: a BA asked how it did on cases from the following quarter, which it had never seen. It was barely better than guessing. The tree had been allowed to keep splitting until it had effectively made a branch per case, so it had memorised the answers rather than learned anything.",
      result:
        "What changed: they limited it to five questions deep and rebuilt. The accuracy on the history dropped a long way, and the performance on new cases roughly doubled. Perfect performance on the data something learned from is a warning sign, not an achievement, and it is worth knowing that as a non-technical reviewer.",
    },
    {
      kind: "illustration",
      scenario: "Choosing the readable one on purpose.",
      walkthrough:
        "The problem: a lender was choosing between two approaches for assessing small business applications. One was noticeably more accurate. The other was a simple tree that anybody could read. What was happening: the BA asked what happens when an applicant asks why they were declined. Under the accurate approach, nobody could give a straight answer. Under the tree, you could point at the path.",
      result:
        "What changed: they went with the tree for the decline decision and used the more accurate approach only to prioritise which applications got looked at first, where nobody has to be given a reason. Same business, two models, chosen for two different jobs. Being able to explain something is a requirement in some places and a nice-to-have in others, and that is a business decision rather than a technical one.",
    },
  ],

  learningPath: [
    {
      title: "Get the history with outcomes",
      body: "Past cases where you know both the details and how it turned out. The same starting point as any prediction work, and the same warning about only using information you would have at the time.",
      effort: "1-2 days",
      outcome: "Something to grow a tree from.",
    },
    {
      title: "Grow a small one on purpose",
      body: "Limit it to four or five questions deep from the start. You are trying to learn something readable, not to win on accuracy.",
      effort: "Half a day",
      outcome: "A flowchart you can print.",
    },
    {
      title: "Show it to the people who do the work",
      body: "Print it and walk through it with them. Ask which branches make sense, which are obvious, and which are surprising.",
      effort: "1 hour",
      outcome: "Their reaction, which is worth more than the accuracy figure at this stage.",
    },
    {
      title: "Check it against cases it never saw",
      body: "Cases from a later period. Compare how it does there against how it did on the history. A big gap means it memorised rather than learned.",
      effort: "Half a day",
      outcome: "An honest picture and an early warning about depth.",
    },
    {
      title: "Decide whether readability matters here",
      body: "Does somebody have to be given a reason? Does a regulator or a committee need to see it? Does the person acting on it need to trust it? Answer those before comparing accuracy.",
      effort: "A conversation",
      outcome: "A deliberate choice rather than a default.",
    },
    {
      title: "Consider turning the top branches into a plain rule",
      body: "Often the first two or three splits capture most of the value and can simply become a rule in a system, with no model to run at all.",
      effort: "1 day",
      outcome: "Something far simpler to operate, which frequently gets most of the benefit.",
    },
  ],

  exercises: [
    {
      title: "Draw the tree your business already uses",
      brief:
        "Take an existing rule in your business, such as which orders go for manual review, and draw it as a flowchart. Then ask where each threshold came from.",
      success:
        "You have a picture of the current rule and you know how many of the thresholds have any evidence behind them, which is usually few.",
      time: "1 hour",
    },
    {
      title: "Ask about the depth",
      brief:
        "For any tree-based model in your business, ask how many questions deep it goes, and how it did on cases from a later period than it was trained on.",
      success:
        "You can say whether it learned or memorised, using two questions and no technical knowledge.",
      time: "30 minutes",
    },
    {
      title: "Read a tree with the people who do the work",
      brief:
        "Print any tree and walk through it with two people who handle these cases daily. Note which branches they find obvious and which surprise them.",
      success:
        "At least one branch surprises them, and you can find out whether it is a real pattern or something odd in the data.",
      time: "1 hour",
    },
  ],

  caseStudy: {
    business:
      "An independent used car dealership. Around thirty cars on the forecourt, most taken in part exchange against a newer vehicle.",
    problem:
      "Every part exchange forces a decision within a day or two: put it through the workshop and sell it on the forecourt, or send it straight to auction. Get it wrong in one direction and you spend money on a car that sits for four months. Get it wrong in the other and you hand a good margin to somebody else. The sales manager decided by eye, and when he was on holiday nobody else would touch it.",
    analysis: [
      "The decision was real, repeated, and undocumented, which is the exact shape of thing worth attacking. It happened maybe three hundred times a year and it was held entirely in one man's head.",
      "So the first job was watching him do it and writing down what he actually looked at. Age, mileage, service history, make, how many of that model were already on the forecourt, the time of year, and what the paintwork looked like.",
      "Three years of part exchanges were reconstructed from the stock book: what was taken in, what was decided, what was spent, what it sold for, and how long it sat there.",
      "The counting produced one clear finding nobody had articulated: the losses were almost never on the cars sent to auction. They were on reconditioned cars that sat past ninety days, and those clustered around a particular thing, which was having two of the same model already unsold on the forecourt.",
      "Ruled out: reconditioning cost overruns. The workshop estimates were reasonably accurate. The problem was choosing the wrong cars to recondition, not the cost of doing it.",
    ],
    aiApproach: [
      {
        step: "Use the technique that produces a diagram",
        detail:
          "This is the case for a decision tree specifically. Not because it is the most accurate option, but because the output is a series of yes-or-no questions you can print on one page and pin up in the office. That is the whole requirement here.",
      },
      {
        step: "Train it on the decisions and their outcomes",
        detail:
          "For every past part exchange, what was known at the time and whether the outcome was good. Good was defined up front as sold within ninety days at or above the target margin, because a fuzzy definition of good produces a tree that splits on nothing useful.",
      },
      {
        step: "Keep it deliberately shallow",
        detail:
          "Left alone these things grow until every historical car has its own branch, which fits the past perfectly and predicts nothing. Capped at four questions deep, it stayed readable and worked better on cars it had not seen. Shallow is not a compromise here, it is the point.",
      },
      {
        step: "Show it to the person whose judgement it copied",
        detail:
          "The sales manager read the tree and agreed with most of it, argued with one branch, and was visibly surprised by the branch about duplicate stock. That conversation is the real test. A tree that the expert cannot recognise is either wrong or has found something, and you need to know which.",
      },
      {
        step: "Check it on the most recent year",
        detail:
          "Trained on the older two years, tested on the newest. Whether it would have made better calls than were actually made, on cars it had never seen.",
      },
    ],
    solution: [
      "A single laminated page: four questions in order, ending in recondition or auction.",
      "The duplicate stock question built in explicitly, because it was the finding the business did not know it had.",
      "Anyone on the team can now make the call, including on a Saturday when the manager is not in.",
      "The recommendation can be overridden, with a one-line reason typed in.",
      "The overrides get read once a month, because they are where the next version comes from.",
    ],
    impact: [
      "The decision stopped being one person's private knowledge and became something the business owns, which also removed a genuine risk that nobody had costed.",
      "The specific failure of reconditioning a third identical car stopped happening, because it was now a question on the page rather than something you would only notice if you thought about it.",
      "Arguments about individual cars got shorter, because they became arguments about which branch applied rather than about instinct.",
      "New staff got useful within days on a decision that had previously taken a year of watching to learn.",
    ],
    whatWouldHaveKilledIt:
      "Chasing accuracy. A more powerful method would have scored slightly better and produced something nobody could put on a wall, which in this business is worth nothing at all. The other risk was the depth: the first version was allowed to grow freely, matched the historical decisions almost perfectly, and fell apart on the test year. That is the classic failure of this technique and it looks like success right up until you check.",
  },

  mistakes: [
    {
      mistake: "Letting it grow as deep as it likes",
      why: "It will memorise the history and be useless on anything new, while looking perfect in testing to anybody who does not know to check.",
      fix: "Limit the depth deliberately and always compare performance on the history against performance on later cases.",
    },
    {
      mistake: "Believing the specific questions are deep truths",
      why: "Trees shift noticeably with small changes in the data. The exact ordering of the splits is one plausible view rather than a discovery about your business.",
      fix: "Treat surprising branches as things to investigate, not as conclusions. Check them against what the people doing the work know.",
    },
    {
      mistake: "Giving up readability without noticing",
      why: "A tree twenty levels deep is no more readable than anything else, so you have taken the accuracy hit and lost the benefit that justified it.",
      fix: "If it has to be deep to work, use something designed to be accurate and accept that you will need a different way to explain decisions.",
    },
    {
      mistake: "Not asking whether an explanation is required",
      why: "In some situations there is a legal or contractual duty to give a reason. Discovering that after choosing an approach nobody can explain is expensive.",
      fix: "Ask early who has a right to know why, and what they have to be told.",
    },
    {
      mistake: "Skipping the conversation with the people who do the work",
      why: "You lose the fastest quality check available. They will spot a branch that reflects something odd in the data within minutes.",
      fix: "Print it and walk through it with two of them before doing anything else with it.",
    },
  ],

  bestPractices: [
    "Limit the depth deliberately so a person can read it.",
    "Compare performance on the history against performance on later cases.",
    "Print it and walk through it with the people who do the work.",
    "Treat surprising branches as things to investigate, not conclusions.",
    "Ask early whether anybody has a right to an explanation.",
    "Consider turning the top two or three splits into a plain rule.",
    "Use one to learn what is in your data even if you deploy something else.",
    "Decide the readability trade deliberately rather than by default.",
  ],

  proTips: [
    "Ask what the tree says about a case everybody in the room knows. Take a real customer, walk them down the branches, and see whether the answer matches what the experienced people would have said. Ten minutes of that finds problems no summary statistic will.",
    "If the very first split is something you did not expect, check whether that field is really available at the moment of the decision. An unexpected top split is quite often a piece of information that leaked in from later in the process, and this is where it shows up most visibly.",
    "Try building the tree, then throwing away everything below the third level and turning what remains into a plain rule in your existing system. Compare how well that does. Surprisingly often the simple rule gets most of the way, and it needs nothing running and nobody maintaining it.",
    "Show the same tree to two different teams. Where one team says obviously and the other says that cannot be right, you have found a genuine difference in how two parts of the business understand the same process, which is usually worth more than the model.",
  ],

  businessApplications: [
    "Deciding which orders or claims go for manual review, where somebody has to defend the rule.",
    "Credit and eligibility decisions, where the applicant has a right to a reason.",
    "Working out which combination of factors leads to problems, as an investigation rather than a system.",
    "Turning years of experience into a written rule that survives the person leaving.",
    "Segmenting cases into a handful of groups a team can be trained on.",
    "Producing a first version of a rule that gets replaced later by something better once the value is proved.",
  ],

  checklist: [
    "History assembled with outcomes and no information from after the decision point.",
    "Depth deliberately limited.",
    "Performance compared between the history and a later period.",
    "Tree printed and walked through with the people who do the work.",
    "Surprising branches investigated rather than accepted.",
    "Requirement for explanation established with the business.",
    "Option of a plain rule from the top branches considered and measured.",
    "Readability trade decided deliberately.",
  ],

  faqs: [
    {
      q: "Is this the same as the rules we already have?",
      a: "Same shape, different origin. Your existing rules came from somebody's experience and often from a threshold set years ago. This one comes from what actually happened. Comparing the two is frequently more useful than either on its own.",
    },
    {
      q: "How deep should it be?",
      a: "Shallow enough that somebody can read it, which usually means four or five questions. If it needs to be much deeper to be useful, you are probably better off with something built for accuracy and a different way of explaining decisions.",
    },
    {
      q: "Why is a perfect score on the history a bad sign?",
      a: "Because the easiest way to be perfect on cases you have already seen is to memorise them. That teaches nothing about new cases. Always ask how it did on cases from a later period.",
    },
    {
      q: "Should we act on what the branches tell us?",
      a: "Investigate rather than act. A branch shows that those cases tend to go together. It does not show that changing one would change the outcome. Treat it as a lead worth checking, not a conclusion.",
    },
    {
      q: "When would we use something else instead?",
      a: "When accuracy matters more than being able to explain, and nobody has a right to a reason. In practice a lot of businesses end up using both, for different decisions, which is a perfectly sensible answer.",
    },
    {
      q: "Can we just use the tree as our new process?",
      a: "Often yes, and that is one of the best outcomes available. Take the top few branches, write them as a rule in the system you already have, and you get most of the benefit with nothing to run or maintain.",
    },
  ],

  tools: [
    { name: "A printed copy of the tree", what: "The single most useful artefact. People argue with things they can see and hold.", cost: "Free" },
    { name: "A depth limit", what: "Set deliberately before building. Protects both readability and honesty.", cost: "Free" },
    { name: "Cases from a later period", what: "The only honest test. A large gap between this and the history means memorising.", cost: "Free" },
    { name: "Two people who do the work daily", what: "They will spot a nonsense branch in minutes. The fastest quality check available.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "why-many-small-models-beat-one", anchor: "what happens when you combine lots of these", context: "Next step" },
    { slug: "when-a-simple-rule-beats-a-model", anchor: "turning the top branches into a plain rule", context: "Simpler option" },
    { slug: "explaining-an-ai-decision", anchor: "when you have to give somebody a reason", context: "Explainability" },
  ],

  relatedGuides: ["why-many-small-models-beat-one", "when-a-simple-rule-beats-a-model", "explaining-an-ai-decision"],

  conclusion: [
    "Take an existing rule in your business, such as which orders get reviewed by hand, draw it as a flowchart, and then ask where each threshold came from. The ones nobody can explain are the ones worth checking against what actually happened.",
  ],
};

export default guide;
