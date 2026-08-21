import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "learning-a-business-fast",
  seoTitle: "Understanding a Business You Have Just Walked Into",
  metaDescription:
    "You have about thirty days before basic questions get expensive. Follow the money, follow one real order, find the spreadsheets, and learn the words people use.",
  title: "Understanding a Business Fast",
  keywords: [
    "business analyst first 30 days",
    "understanding a business",
    "business domain knowledge",
    "ba onboarding",
    "learning a new domain",
    "business context analysis",
  ],
  category: "business-analysis",
  level: "Beginner",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "You have about thirty days before people stop forgiving basic questions. Nobody states that rule and it is completely real, and after it the cost of asking what a word means goes up sharply. So the first month is not about contributing. It is about buying context while questions are still cheap.",
    "Most people spend it reading documentation. Documentation describes the business somebody intended to build. You need the one that exists, which is a different organisation with the same name.",
    "What follows is the order I would use walking into any business cold, whether that is a new employer, a new client, or a department you have never worked with inside a company you already know.",
  ],

  coreConcepts: [
    {
      term: "Follow the money first",
      explain:
        "Find out how this business makes money, at the level of one single transaction. Who pays, for what, how much, how often, and what has to happen for that payment to arrive.",
      detail:
        "Everything else in the operation exists to make that transaction happen or to stop it going wrong. Without that picture in your head you cannot judge whether anything else matters.",
    },
    {
      term: "Then follow one real case all the way through",
      explain:
        "One order, one claim, one application. Track it from the moment it arrives to the moment the money settles, through every system and every pair of hands.",
      detail:
        "This one exercise teaches more than a fortnight of reading. It also gives you something to point at: for the rest of your time there you can say like that Renfrew order and people know exactly what you mean.",
    },
    {
      term: "Ask for the last five, not a typical one",
      explain:
        "A typical case is a story people put together on the spot to explain their work. Real cases contain the exceptions, and the exceptions are where the business actually lives.",
      detail:
        "Expect at least one of the five to have gone somewhere nobody mentioned. That is the whole reason for asking for five.",
    },
    {
      term: "Find the spreadsheets",
      explain:
        "Every real gap between what the systems do and what the business needs gets bridged by a spreadsheet somebody keeps going privately. Find those and you have found the list of things that need building.",
      detail:
        "Ask directly and without any judgement: what do you keep outside the system, and why? People answer honestly if you make it clear you are not there to take it away.",
    },
    {
      term: "Learn the words before you use them",
      explain:
        "Every business has words that mean something specific and local. Active, complete, customer and order are all landmines. Two departments will use one of them to mean two different things.",
      detail:
        "Keep a list from day one, with who told you and when. Later, when you find two definitions of the same word, you have found a real problem rather than a vocabulary issue.",
    },
    {
      term: "Work out who actually decides things",
      explain:
        "The published chart tells you who reports to whom. You need the other one: who has to agree, who can stop things, and who everybody quietly asks when they are not sure.",
      detail:
        "That third group is the most useful and never appears on any chart. Find them early and be useful to them.",
    },
    {
      term: "Ask for access to the data on day one",
      explain:
        "Ask immediately, because it takes three weeks. Being able to check something yourself changes the pace of everything you do afterwards.",
      detail:
        "It also changes how people treat you. Somebody who can produce a count in an afternoon is a different colleague from somebody who has to raise a request and wait.",
    },
    {
      term: "Watch, do not just ask",
      explain:
        "People describe the process they believe they follow. The steps that have become automatic are exactly the ones they leave out, and those are usually where the trouble is.",
      detail:
        "Sit next to somebody for two hours and say almost nothing. Note what they open, what they type twice, what they check, and where they pause. None of that comes up in an interview.",
    },
    {
      term: "Find out what happens on the worst day",
      explain:
        "Ask what happens at month end, at year end, on the busiest day, and when the main system is down. Businesses accumulate special handling for these and it is invisible the rest of the time.",
      detail:
        "It is also where the workarounds are strongest, because that is when people abandon the official process and run the version that actually works.",
    },
    {
      term: "Start later than feels comfortable",
      explain:
        "The temptation in week two is to prove your worth by proposing something. An early suggestion that misses a known exception costs more credibility than a month of quiet watching.",
      detail:
        "Show the picture of how it works now first and let people see you understood. After that, your suggestions get a completely different reception.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Six steps on paper, fourteen in reality.",
      walkthrough:
        "The problem: a new BA needed to understand an order process nobody could explain consistently. What was happening: she asked to follow one real order. The published process had six steps. Following an actual order turned up fourteen touches, including two email approvals that exist because of an audit finding years earlier, a manual credit check for one customer type, and a step where somebody retypes a delivery address because two systems format it differently.",
      result:
        "What changed: none of that appeared in any documentation and all of it was completely normal to the people doing it. The retyping step alone turned out to be behind most of the delivery failures. One order, one afternoon, and the project had its first real finding.",
    },
    {
      kind: "documented",
      scenario: "Why the spreadsheets matter more than they look.",
      walkthrough:
        "Herndon, Ash and Pollin got hold of the working spreadsheet behind a widely quoted economics finding. They found a formula that had not been dragged far enough and so left five countries out, some available data excluded, and an unusual weighting choice. Recalculated, the headline result changed substantially.",
      result:
        "Careful people, ordinary use of a completely standard tool, and a result that shaped public debate for years. When you find the private spreadsheets in a business, you have found both the things that need building and a category of risk nobody is watching. Treat them as evidence, not as bad practice.",
      source: {
        label: "Herndon, Ash and Pollin (2013), PERI/UMass Amherst: critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "One word, two meanings, found in week two.",
      walkthrough:
        "The problem: a BA kept a list of words from day one, noting who told him each definition. What was happening: in week two, somebody in finance described an active customer as one who has paid an invoice in the last twelve months. In week three, somebody in sales described an active customer as one with an open opportunity. Both said it as if it were simply the company definition.",
      result:
        "What changed: he took the two definitions to the person who owned the reporting, and it turned out the two departments had been reporting different customer counts for years without either noticing. Keeping the list cost about five minutes a week. It would have been impossible to spot otherwise, because both people were completely certain and both were right within their own world.",
    },
  ],

  learningPath: [
    {
      title: "Ask for data access on day one",
      body: "Before you know what you will ask of it. It has a lead time measured in weeks and everything else gets faster once you have it.",
      effort: "1 hour of asking, weeks of waiting",
      outcome: "The ability to check things yourself rather than queueing.",
    },
    {
      title: "Work out how the business makes money",
      body: "At the level of a single transaction. Who pays, for what, how much, how often, and what has to happen for that money to arrive.",
      effort: "Half a day",
      outcome: "The picture that lets you judge whether anything else matters.",
    },
    {
      title: "Follow one real case all the way through",
      body: "One order, one claim, one application, with a reference number. Track it through every system and every person. Write down every touch.",
      effort: "Half a day to a day",
      outcome: "More understanding than a fortnight of reading, plus something concrete everybody can refer to.",
    },
    {
      title: "Sit with people and watch",
      body: "Two hours next to somebody doing the work, saying almost nothing. Note what they open, what they type twice, and where they hesitate.",
      effort: "Half a day per role",
      outcome: "The steps that never come up in an interview because they are too routine to mention.",
    },
    {
      title: "Ask everybody what they keep outside the system",
      body: "Spreadsheets, notebooks, shared inboxes, personal trackers. Ask without judgement and make clear you are not there to take anything away.",
      effort: "A few conversations",
      outcome: "A list of the things the business needs and does not have.",
    },
    {
      title: "Keep a list of words from day one",
      body: "Every term that means something specific here, with who told you and the date. Five minutes a week.",
      effort: "Minutes a week",
      outcome: "The ability to spot two departments meaning different things by one word, which is otherwise nearly impossible.",
    },
    {
      title: "Draw the process and take it back",
      body: "One page, drawn after watching rather than after reading. Walk the people who do the work through it and let them correct it.",
      effort: "1 day",
      outcome: "The thing that ends your first month and earns you the right to suggest changes.",
    },
  ],

  mistakes: [
    {
      mistake: "Starting with the documentation",
      why: "It describes the business somebody intended to build, not the one that exists. You end up learning a version of the process that nobody has followed for years.",
      fix: "Follow one real case first. Use the documentation afterwards to spot the gaps between intention and reality.",
    },
    {
      mistake: "Only talking to managers",
      why: "They describe the process as designed. Every workaround, exception and unwritten rule lives with the people actually doing it.",
      fix: "Spend your first weeks with the people doing the work, and use managers for priorities and constraints.",
    },
    {
      mistake: "Using the local words before you understand them",
      why: "You will use one to mean something slightly different, and because everybody assumes their own definition, nobody will correct you. The misunderstanding survives for months.",
      fix: "Keep a list, note who told you, and ask a second person to define the important ones.",
    },
    {
      mistake: "Treating the spreadsheets as something to be tidied up",
      why: "If your interest reads as disapproval, the rest of them stay hidden, and those are the ones holding something important together.",
      fix: "Say out loud that you are looking for what the systems do not do, and that you are not there to take anything away.",
    },
    {
      mistake: "Proposing something in week two",
      why: "An early suggestion that misses a known exception costs more credibility than a month of quiet watching, and you only get one first impression.",
      fix: "Show the picture of how it works now first. Suggestions land completely differently once people can see you understood.",
    },
    {
      mistake: "Waiting to ask for data access",
      why: "It takes weeks. Asking in week four means you are still queueing in week seven, and everything you do until then rests on what somebody told you.",
      fix: "Ask on day one, before you know exactly what you will need it for.",
    },
  ],

  bestPractices: [
    "Ask for data access on day one.",
    "Work out how the business makes money before anything else.",
    "Follow one real case from arrival to payment.",
    "Ask for the last five real cases rather than a typical one.",
    "Sit and watch people work, saying almost nothing.",
    "Ask everybody what they keep outside the system.",
    "Keep a list of local words with who told you and when.",
    "Find out who everybody quietly asks when they are unsure.",
    "Ask what happens at month end, year end and on the worst day.",
    "Draw the process and take it back to be corrected before proposing anything.",
  ],

  proTips: [
    "Ask everybody the same question in your first fortnight: what would you change first if you could change one thing with no approval needed. Write the answers down word for word. The clusters tell you where the real problems are, and they tell you far faster than any documentation.",
    "Find the person who has been there longest in an unglamorous job and be useful to them early. They know why the odd rule exists, which system nobody trusts, and what was tried in 2018 and failed. That knowledge exists nowhere else and it is given freely to people who are interesting to talk to.",
    "Write down every question you were too embarrassed to ask, and ask all of them in week three. Nobody minds in week three. In week ten they will assume you already knew, and by then the cost of not knowing has compounded.",
    "When somebody explains something and you nod, stop and say it back to them in your own words. About a third of the time you will have got it slightly wrong, and they will correct you cheerfully. That correction is worth more than the original explanation.",
  ],

  businessApplications: [
    "Starting a new BA job, where the first month decides how the next year goes.",
    "Consulting, where you have to be useful in an operation you did not know existed last week.",
    "Moving into a department you have never worked with inside your own company.",
    "Taking over a project from somebody who has left.",
    "Buying a business, where what it really costs to run lives in the workarounds rather than the org chart.",
    "Covering a role temporarily, where the same approach gets you productive in days rather than weeks.",
  ],

  faqs: [
    {
      q: "How long does it take to understand a business?",
      a: "Enough to be useful, about a month. Enough to be confident, about six. The thirty-day window matters because that is roughly how long basic questions stay free, not because you will know everything by then.",
    },
    {
      q: "What if nobody has time for me?",
      a: "Ask for twenty minutes at the busiest point of their week rather than an hour at a quiet one. Easier to grant, and pressure is exactly when the workarounds come out.",
    },
    {
      q: "Should I read the documentation at all?",
      a: "Yes, after you have followed a real case. Then it becomes useful in a different way: the gap between what it says and what you watched is itself a finding worth writing down.",
    },
    {
      q: "When should I start suggesting things?",
      a: "Later than feels comfortable. An early suggestion that misses a known exception costs more than a month of quiet watching. Show the picture of how it works now first and let people see you understood.",
    },
    {
      q: "How do I learn an industry I know nothing about?",
      a: "Follow the money and follow one case. Those two work in any industry, because every business has a transaction and every transaction has a journey. The specialist vocabulary comes with the list you are keeping.",
    },
  ],

  tools: [
    { name: "A notebook and a list of words", what: "The two highest-value things you will produce in a first month. Record who told you each definition.", cost: "Free" },
    { name: "Read access to the data", what: "Ask on day one. It changes your speed and how colleagues treat you.", cost: "Varies" },
    { name: "A one-page process picture", what: "Drawn after watching, walked through with the people who do the work. The thing that ends month one.", cost: "Free" },
  ],

  resources: [
    { title: "Critique of Reinhart and Rogoff", kind: "Paper", note: "What is hiding in the spreadsheets people maintain privately. Read it before dismissing any of them.", url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/" },
  ],

  internalLinks: [
    { slug: "what-a-business-analyst-actually-does", anchor: "the job this is preparing you for", context: "Context" },
    { slug: "asking-questions-that-get-answers", anchor: "getting real answers from people", context: "Technique" },
    { slug: "where-inefficiency-hides", anchor: "what to look for once you understand it", context: "Next step" },
  ],

  relatedGuides: ["what-a-business-analyst-actually-does", "asking-questions-that-get-answers", "where-inefficiency-hides"],

  conclusion: [
    "Ask to follow one real case from beginning to end this week, with a reference number and a date. One afternoon doing that will teach you more than a fortnight of reading, and it will almost certainly turn up something nobody has written down anywhere.",
  ],
};

export default guide;
