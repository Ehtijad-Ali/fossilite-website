import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "bayesian-thinking-for-business-decisions",
  seoTitle: "Starting From What You Already Know, Then Updating",
  metaDescription:
    "Bayesian thinking without the maths. Why the manager with twenty years of experience beats the spreadsheet with three weeks of data, and how to use both.",
  title: "Starting From What You Already Know",
  keywords: [
    "bayesian explained simply",
    "bayesian business decisions",
    "prior knowledge machine learning",
    "small data decisions",
    "ab testing bayesian",
    "updating beliefs with evidence",
  ],
  category: "data-science",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Somebody comes to you with a result. We tried the new checkout page on forty customers and twelve of them bought something, against eight out of forty on the old one. That is a fifty per cent improvement. Should we roll it out?",
    "The experienced person in the room says hang on. Twelve against eight, out of forty each. That could easily be luck. And they are right, and what they are doing has a name.",
    "Bayesian thinking means starting from what you already know and letting evidence move you, rather than pretending each new result arrives in a vacuum. The experienced manager already knows that checkout changes rarely produce a fifty per cent lift. That belief is not stubbornness. It is information, and the ordinary way of doing statistics throws it away.",
  ],

  whyItMatters: [
    "Most business decisions get made on small amounts of evidence. You rarely have forty thousand customers to test on. You have forty, and a deadline, and somebody wanting an answer. This is the way of thinking built for exactly that situation.",
    "It also matches how sensible people actually reason. Nobody genuinely arrives at a decision with no prior view. Making that view explicit, so it can be argued with, is better than pretending it is not there and letting it operate invisibly.",
    "And it gives you something more useful than a yes or no. Instead of the new page is significantly better, you get something like there is roughly a seventy per cent chance it is better, and if it is, the improvement is probably small. That is a much better basis for deciding what to do.",
  ],

  coreConcepts: [
    {
      term: "You already believe something, so say what it is",
      explain:
        "Before you see any new data, you have a view. Checkout changes usually move conversion by a couple of per cent, not fifty. Most marketing emails get opened by a small minority. This machine breaks about twice a year.",
      detail:
        "Writing that down before the test is the whole discipline. It stops you rewriting your beliefs after the fact to fit whatever the data happened to say.",
    },
    {
      term: "Evidence moves you, it does not replace you",
      explain:
        "A small amount of surprising evidence should move your view a little. A large amount should move it a lot. That is the entire idea and it matches common sense.",
      detail:
        "Twelve out of forty against eight out of forty should nudge you towards thinking the new page might be better. It should not convince you of a fifty per cent improvement, because your existing knowledge says that scale of change is very unlikely.",
    },
    {
      term: "The stronger your existing knowledge, the more evidence you need",
      explain:
        "If you have seen a hundred similar tests and none produced a big lift, one small test showing a big lift is more likely to be noise than a breakthrough.",
      detail:
        "This is why extraordinary claims need more evidence than ordinary ones. Not because anybody is being difficult, but because the existing knowledge is itself evidence and it has to be outweighed.",
    },
    {
      term: "You get a range, not a verdict",
      explain:
        "Instead of significant or not significant, you get something like there is a seventy per cent chance this is better, and the improvement is probably between one and four per cent.",
      detail:
        "That is far more usable for a business decision. Seventy per cent chance of a small improvement, with a cheap change, is an easy yes. Seventy per cent chance of a small improvement, with six months of work, is an easy no.",
    },
    {
      term: "It is designed for having very little data",
      explain:
        "When you have five sales in a new region, or three failures of a new machine, ordinary methods either say nothing useful or say something confidently wrong.",
      detail:
        "This is where the approach really earns its keep in business. Starting from what similar things have done before gives you something sensible to say when you have almost no direct evidence.",
    },
    {
      term: "It updates as you go",
      explain:
        "You do not have to wait until the end. Each new week of data moves the picture, and you can look at the current state of belief whenever you want.",
      detail:
        "That fits how businesses actually behave far better than a test you are not allowed to look at until it finishes. It is also why a lot of modern testing tools work this way underneath.",
    },
    {
      term: "Your starting belief has to be defensible",
      explain:
        "The obvious objection is that you could just pick a starting belief that gives you the answer you want. That is a real risk and the answer is to write it down first and have somebody else agree it.",
      detail:
        "Base it on something: past tests, industry norms, what the same product did last year. If the only justification is a feeling, say so, and use a weak starting belief that the data can easily override.",
    },
    {
      term: "It makes disagreements specific",
      explain:
        "When two people reach different conclusions from the same data, this framing shows you exactly where they differ: they started from different beliefs, and here they are.",
      detail:
        "That turns an argument about whether the result is real into a much more productive conversation about whose prior expectation is better supported.",
    },
    {
      term: "The maths is somebody else's problem",
      explain:
        "You do not need to know how the calculation works. You need to be able to ask what starting belief was used, where it came from, and what range of answers comes out.",
      detail:
        "Those three questions are the entire business contribution and they are enough to spot the two ways this goes wrong: a starting belief nobody can justify, and a range so wide the answer is really we do not know.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The fifty per cent improvement that was not.",
      walkthrough:
        "The problem: a small test on a new checkout page showed twelve purchases out of forty visitors against eight out of forty on the old one. The team wanted to roll it out. What was happening: a BA asked what the last ten checkout tests had produced. The biggest genuine improvement anybody could remember was about four per cent. Starting from that, twelve against eight out of forty each is well within what luck produces.",
      result:
        "What changed: they kept the test running rather than deciding. After several thousand visitors each, the new page was ahead by about two per cent, which was real and worth having and nothing like fifty. Nobody had done anything wrong. They had simply looked at a small result without holding it against everything they already knew.",
    },
    {
      kind: "illustration",
      scenario: "Making a decision with almost no data.",
      walkthrough:
        "The problem: a company opened in a new region and after two months had made eleven sales. Somebody needed to forecast the year and decide whether to keep the office open. Eleven sales is not enough for ordinary forecasting to say anything useful. What was happening: the BA gathered what they knew from three previous regional openings, where the first year had followed a fairly consistent shape, slow for four months and then picking up.",
      result:
        "What changed: they built a forecast starting from the pattern of the previous openings and let the eleven sales adjust it. The answer came with a wide range attached, which was honest, and the range was narrow enough to make the decision clear. Without the previous openings there was nothing to say. Using them explicitly, rather than as vague reassurance, made a decision possible.",
    },
    {
      kind: "illustration",
      scenario: "Two people, same numbers, different conclusions.",
      walkthrough:
        "The problem: a marketing team and a finance team looked at the same campaign results and reached opposite conclusions about whether to repeat it. What was happening: rather than arguing about the numbers, a BA asked each side what they had expected before the campaign ran. Marketing had expected a strong response because a similar campaign had worked well elsewhere. Finance had expected very little because the last three campaigns in this market had done nothing.",
      result:
        "What changed: the disagreement was never about the data. It was about which previous experience was the relevant comparison, and that turned out to be a question they could actually investigate. Making the starting beliefs explicit turned an unresolvable argument into a specific question with an answer.",
    },
  ],

  learningPath: [
    {
      title: "Write down what you expect before you look",
      body: "Before any test or analysis, write what you think will happen and roughly how big the effect will be. Get somebody else to agree it is reasonable.",
      effort: "20 minutes",
      outcome: "The discipline that stops you rewriting your expectations to fit the result.",
    },
    {
      title: "Gather what similar things have done before",
      body: "Past tests, previous launches, comparable products, industry figures. This is the evidence behind your starting belief and it makes it defensible.",
      effort: "Half a day",
      outcome: "A starting point based on something rather than on a feeling.",
    },
    {
      title: "Ask for a range rather than a verdict",
      body: "Whoever does the analysis should be able to give you a likelihood and a range, not just significant or not significant. Ask for it in those terms.",
      effort: "One conversation",
      outcome: "Something you can actually make a decision with.",
    },
    {
      title: "Check how much the starting belief is doing",
      body: "Ask what the answer would be with a much weaker starting belief. If it changes completely, your conclusion is mostly your assumption, and that needs saying.",
      effort: "One question",
      outcome: "An honest sense of whether the data is really driving the answer.",
    },
    {
      title: "Decide against the range, not the midpoint",
      body: "Look at the worst end of the range as well as the middle. Would you still make this decision if the true effect were at the pessimistic end?",
      effort: "30 minutes",
      outcome: "A decision that survives the effect being smaller than hoped, which it usually is.",
    },
    {
      title: "Update as more comes in",
      body: "Revisit as data accumulates rather than treating the first result as final. Each new batch should move the picture a bit.",
      effort: "Ongoing",
      outcome: "A view that improves rather than a decision frozen at the moment of least information.",
    },
  ],

  exercises: [
    {
      title: "Write your expectation first",
      brief:
        "For the next test or launch in your business, write down before it starts what you expect to happen and how big an effect you expect. Seal it. Compare afterwards.",
      success:
        "You find out whether your expectations are well calibrated, and you have a starting belief you did not construct after the fact.",
      time: "20 minutes",
    },
    {
      title: "Find the historical range",
      brief:
        "For a kind of change your business makes often, such as a website test or a pricing change, gather the last ten results and work out the range of effects actually observed.",
      success:
        "You have a defensible starting expectation, and often a surprise about how small real effects usually are.",
      time: "Half a day",
    },
    {
      title: "Ask what would change your mind",
      brief:
        "For any decision currently being argued about, ask each side what result would make them change their view. Write both answers down.",
      success:
        "Either you get two testable answers, or you discover somebody's position is not responsive to evidence, which is also useful to know.",
      time: "30 minutes",
    },
  ],

  caseStudy: {
    business:
      "A twelve-room country hotel. Bookings come from its own website, from two of the big travel sites, and from the phone.",
    problem:
      "The owner had signed up to a new booking channel three months earlier. It had produced forty bookings and a commission bill, and the question in front of her was whether to keep it for the year. Forty is not enough to be sure of anything, and the pressure was to decide anyway.",
    analysis: [
      "Small numbers are the whole difficulty here. With forty bookings you cannot simply compare average values and declare a winner, because the difference you are looking at could easily be luck.",
      "The first correction was to the question. She had been asking whether the channel was good. The answer she needed was whether it was better than what the rooms would otherwise have earned, which is a different and harder question because some of those guests would have booked anyway.",
      "Three years of booking data gave a solid picture of the existing channels: average nightly rate, average length of stay, how often guests ate dinner in the restaurant, and cancellation rate.",
      "That history is the useful part, and it is what most people throw away. You do not start from nothing when you assess the new channel. You start from a well-founded expectation of how a booking behaves at this hotel, and update it with the forty.",
      "The forty bookings came in at a lower nightly rate and a longer average stay, and ate in the restaurant more often. Whether those differences were real or noise was exactly the question.",
    ],
    aiApproach: [
      {
        step: "Start from what you already believe, and say it out loud",
        detail:
          "This is the whole idea. You have three years of history telling you what a booking here normally looks like. That is a starting position, and writing it down explicitly is not cheating, it is the thing that stops forty bookings from being read as though they arrived from nowhere.",
      },
      {
        step: "Update it with the new evidence in proportion to its weight",
        detail:
          "Forty bookings move your view a bit. Four hundred would move it a lot. The arithmetic handles that proportionality for you, which is precisely what a simple comparison of averages fails to do.",
      },
      {
        step: "Produce a range, not a number",
        detail:
          "The output is not the new channel is worth this much per booking. It is: given what we knew and what we have seen, the value is somewhere in this range, and here is how confident we are. A single number invites a confidence nobody has earned.",
      },
      {
        step: "Ask the decision question, not the truth question",
        detail:
          "She does not need to know the exact value. She needs to know the chance it is worse than the alternative. That is a question this approach answers directly and most others answer badly.",
      },
      {
        step: "Set a point at which you will look again",
        detail:
          "Rather than deciding once, decide with a review at a stated number of further bookings. That is how this way of thinking is supposed to be used, and it removes most of the pressure from the first decision.",
      },
    ],
    solution: [
      "A written statement of what a normal booking is worth at this hotel, drawn from three years of history.",
      "That expectation updated with the new channel's forty bookings, giving a range rather than a figure.",
      "The restaurant spend included, because the channel looked worse on room rate alone and better once dinner was counted.",
      "A decision to continue with a review at a hundred and fifty bookings, with the number written into the diary.",
      "The same treatment applied afterwards to the two existing channels, which had never been assessed this way.",
    ],
    impact: [
      "The decision stopped being a coin toss dressed up as analysis, and became a stated range with a stated confidence.",
      "Counting restaurant spend changed the answer, and that was a consequence of asking what a booking is worth rather than what a room night is worth.",
      "The review point removed the need to be right first time, which was where all the anxiety had been.",
      "The habit transferred. The next new supplier, the next marketing spend, got assessed the same way instead of on the first month's figures.",
    ],
    whatWouldHaveKilledIt:
      "Treating the forty bookings as though they were the whole truth. The average nightly rate across forty bookings looked meaningfully lower than the house average, and a straight comparison would have got the channel cancelled. It was well within the range you would expect from forty bookings of ordinary variation. Deciding on a small sample as if it were a large one is the most expensive habit in small business analysis.",
  },

  mistakes: [
    {
      mistake: "Treating each result as if nothing were known before",
      why: "You end up believing a big effect from a small sample, because you have thrown away everything your business already learned about how big effects usually are.",
      fix: "Write down what you expect and why, before the result arrives, based on comparable past cases.",
    },
    {
      mistake: "Choosing the starting belief after seeing the data",
      why: "That is the obvious way to abuse this, and it is easy to do without noticing when you are hoping for a particular answer.",
      fix: "Record it in advance and have somebody else agree it is reasonable. Base it on past evidence, not on a feeling.",
    },
    {
      mistake: "Reporting the middle of the range and ignoring the ends",
      why: "The midpoint is the most flattering single number. If the pessimistic end would change the decision, presenting only the middle is misleading.",
      fix: "Always present the range and test the decision against the pessimistic end.",
    },
    {
      mistake: "Not checking how much the assumption is doing",
      why: "If the answer barely moves when you change the starting belief, the data is driving it. If it flips, you have mostly reported your own assumption.",
      fix: "Ask what the answer would be with a much weaker starting belief, every time.",
    },
    {
      mistake: "Stopping the moment the result looks good",
      why: "If you keep checking and stop as soon as you like the answer, you will find a favourable result eventually whether or not one exists.",
      fix: "Agree in advance what would make you stop, and hold to it even when an early look is encouraging.",
    },
  ],

  bestPractices: [
    "Write down what you expect before you look at any result.",
    "Base your starting expectation on comparable past cases.",
    "Have somebody else agree the starting expectation is reasonable.",
    "Ask for a likelihood and a range rather than a verdict.",
    "Check how much the answer depends on the starting assumption.",
    "Decide against the pessimistic end of the range, not the middle.",
    "Agree stopping rules in advance and keep to them.",
    "Update as more evidence arrives rather than freezing the first answer.",
  ],

  proTips: [
    "Collect the results of the last ten changes of whatever kind you are about to test, and work out the range of effects your business actually achieves. That one exercise permanently changes how people react to a promising early result, and it is the single most useful thing you can do in this area.",
    "When two people disagree about a result, stop discussing the data and ask each of them what they expected beforehand. Almost always the disagreement is there rather than in the numbers, and it is a much more productive thing to argue about because it can be checked.",
    "Ask what result would change your mind before you run anything. If somebody cannot answer, the test is decorative, because their conclusion is already fixed. That question saves a lot of wasted measurement.",
    "Be very wary of anybody who keeps peeking at a running test and wants to stop as soon as it looks favourable. Left long enough, almost any test will look good at some point by luck. Agreeing in advance when you will stop is the only protection.",
  ],

  businessApplications: [
    "Deciding on the basis of small tests, where you cannot wait for thousands of cases.",
    "Forecasting for a new product, region or channel with almost no direct history.",
    "Combining what experienced people know with the limited data you have.",
    "Website and pricing tests, where modern tools frequently work this way underneath.",
    "Estimating how often something rare happens, such as a particular kind of failure.",
    "Resolving arguments where two teams reach different conclusions from the same numbers.",
  ],

  checklist: [
    "Expectation written down before the result was seen.",
    "Starting expectation based on comparable past cases.",
    "Somebody independent agreed it was reasonable.",
    "Result expressed as a likelihood and a range.",
    "Sensitivity to the starting assumption checked.",
    "Decision tested against the pessimistic end of the range.",
    "Stopping rule agreed in advance.",
    "A plan for updating as more data arrives.",
  ],

  faqs: [
    {
      q: "Is this not just letting people put their opinion into the analysis?",
      a: "It is making the opinion explicit rather than pretending it is not there. Everybody brings prior expectations to a result. The difference here is that yours gets written down where somebody can argue with it.",
    },
    {
      q: "What if we genuinely have no prior expectation?",
      a: "Then use a weak one that lets the data dominate, and say that is what you have done. That is a legitimate position. What is not legitimate is a strong assumption nobody can justify.",
    },
    {
      q: "Do I need to understand the maths?",
      a: "No. You need to ask three things: what starting belief was used, where it came from, and what range comes out. Those cover the business contribution and catch the two ways this goes wrong.",
    },
    {
      q: "How is this different from ordinary statistics?",
      a: "Ordinary methods answer how surprising this result would be if nothing were really happening. This answers how likely it is that something is really happening, given what we already knew. The second is the question businesses actually want answered.",
    },
    {
      q: "Can we look at a test while it is running?",
      a: "This approach handles that more gracefully than the traditional one, and it still does not protect you from stopping the moment you see what you want. Agree the stopping rule in advance either way.",
    },
    {
      q: "When is this most worth using?",
      a: "When you have little data, when you have relevant experience from similar situations, and when you need to make a decision rather than publish a finding. That describes most business situations.",
    },
  ],

  tools: [
    { name: "A written expectation, dated", what: "Recorded before the result. The single discipline that makes the rest of this honest.", cost: "Free" },
    { name: "The last ten comparable results", what: "The evidence behind your starting expectation, and usually a surprise about how small real effects are.", cost: "Free" },
    { name: "A range rather than a verdict", what: "Likelihood plus a spread. What you actually need to make a decision.", cost: "Free" },
    { name: "A stopping rule agreed in advance", what: "Protection against looking until you like the answer.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "thinking-critically-about-evidence", anchor: "reading results sceptically in general", context: "Related thinking" },
    { slug: "knowing-if-a-model-is-any-good", anchor: "checking whether a result means anything", context: "Measurement" },
    { slug: "measuring-whether-it-worked", anchor: "applying this to whether a change worked", context: "Application" },
  ],

  relatedGuides: ["thinking-critically-about-evidence", "knowing-if-a-model-is-any-good", "measuring-whether-it-worked"],

  conclusion: [
    "Gather the results of the last ten changes of the kind you are about to test, and work out the range of effects your business actually achieves. That range is your starting expectation, and having it written down permanently changes how the next promising early result gets treated.",
  ],
};

export default guide;
