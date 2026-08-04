import type { Guide } from "../types";

export const guide: Guide = {
  slug: "validating-a-product-idea",
  seoTitle: "How to Validate a Product Idea Before You Build It",
  metaDescription:
    "A practical framework for testing whether anyone wants your idea — customer interviews, demand tests, and the biases that make founders build the wrong thing.",
  title: "How to Validate a Product Idea Before You Build It",
  keywords: [
    "how to validate a business idea",
    "product validation",
    "customer interviews",
    "market validation",
    "MVP validation",
    "startup idea testing",
  ],
  category: "entrepreneurship",
  level: "Beginner",
  updated: "2026-08-04",
  author: "Fossilite",
  readingTime: 13,

  intro: [
    "Most failed products were not badly built. They were built well, on time, by capable people — for a problem nobody was sufficiently bothered by. The founders weren't lazy or stupid. They were confident, and they mistook confidence for evidence.",
    "Validation is the discipline of finding out whether you're wrong while being wrong is still cheap. Not proving you're right — that's a different and much easier activity, and it's what most people accidentally do instead. If you go looking for encouragement, you will find it, because people are kind and hypotheticals are free.",
    "This guide covers what actually constitutes evidence, how to run interviews that produce truth rather than politeness, how to test demand before writing code, and how to read the results honestly. It assumes you have an idea you're attached to. That attachment is the main thing standing between you and a useful answer.",
  ],

  whyItMatters: [
    "The cost asymmetry is enormous. Talking to twenty potential customers costs you two weeks and no money. Building the product costs six months and, if you've hired, six figures. Validation isn't about avoiding risk — it's about paying the smallest possible price to learn something you'll otherwise learn expensively.",
    "There's also a compounding effect on everything downstream. A validated idea makes marketing easier, because you know the words customers use. It makes fundraising easier, because you have evidence rather than conviction. It makes the product itself easier, because you know which features are load-bearing. Skipping validation doesn't just risk the idea; it makes every subsequent decision guesswork.",
    "And there's the personal cost, which people underweight. Eighteen months on something nobody wanted takes a real toll — on savings, on relationships, on your appetite to try again. The founders who build multiple things over a career tend to be the ones who learned to kill ideas quickly rather than the ones who never had a bad idea.",
  ],

  coreConcepts: [
    {
      term: "The problem is the thing to validate, not the solution",
      explain:
        "Your solution is a guess about how to address a problem. If the problem isn't real, painful and frequent, no solution will succeed. Validate the problem first, in isolation from your idea.",
      detail:
        "The practical test: can you describe the problem in the customer's own words, including what they currently do about it and what that costs them? If not, you haven't validated a problem — you've validated that people are polite about your idea.",
    },
    {
      term: "Compliments are not evidence",
      explain:
        "'That's a great idea' is the single most misleading sentence in early-stage business. It costs nothing to say, it makes the conversation pleasant, and it correlates with nothing.",
      detail:
        "Evidence is behaviour: what someone has already done, already paid for, already built a workaround for. The past is data. The future is opinion.",
    },
    {
      term: "Ask about the past, never about the future",
      explain:
        "'Would you use this?' produces fiction. 'Tell me about the last time this happened' produces facts. People are unreliable predictors of their own behaviour and reliable reporters of their own history.",
      detail:
        "Every good validation question is archaeological. When did it last happen? What did you do? How long did it take? What did you try before? What did you spend?",
    },
    {
      term: "Painkillers beat vitamins",
      explain:
        "A vitamin is nice to have and gets deprioritised forever. A painkiller addresses something actively costing time, money or sleep right now. Only painkillers get bought quickly by busy people.",
      detail:
        "The signal to look for is an existing workaround. If someone has built a spreadsheet, hired a contractor, or does something manually every week, the pain is real enough to have already provoked action.",
    },
    {
      term: "Demand tests beat opinions",
      explain:
        "A demand test asks for something costly: money, a calendar slot, a deposit, real data, a signature. Costly actions are honest in a way conversation isn't.",
      detail:
        "A landing page with an email box is a weak test — email addresses are nearly free. A landing page with a pre-order button, or a paid pilot agreement, is a strong one.",
    },
    {
      term: "Falsifiability",
      explain:
        "Before you test, write down what result would make you abandon the idea. If no plausible outcome would change your mind, you're not testing anything.",
      detail:
        "Be specific and numeric: 'if fewer than 5 of 20 interviewees have tried to solve this in the last month, I stop.' Deciding the threshold afterwards is how everyone talks themselves into continuing.",
    },
    {
      term: "The smallest thing that produces the outcome",
      explain:
        "Your first version should deliver the result the customer wants, by whatever means — including you doing the work by hand. Software is one implementation option, not a requirement.",
      detail:
        "Doing it manually for your first ten customers is not a compromise. It's the fastest way to learn what the software actually needs to do, and several large companies ran this way for a year.",
    },
    {
      term: "Segment before you generalise",
      explain:
        "'Small businesses' is not a market. Different segments have different problems, budgets and buying processes, and averaging across them produces a product that fits none of them.",
      detail:
        "Narrow until you can name specific people and find fifty more like them. A tight segment makes everything — interviews, messaging, pricing, distribution — dramatically easier.",
    },
  ],

  learningPath: [
    {
      title: "Write down your assumptions explicitly",
      body: "List every belief your idea depends on: who has the problem, how often, what it costs them, what they do now, what they'd pay, how you'd reach them. Mark which ones would kill the idea if false. Those are what you test first.",
      effort: "1–2 hours",
      outcome: "A ranked list of assumptions with the riskiest at the top.",
    },
    {
      title: "Find fifteen people in your segment",
      body: "Not friends, not people who'll be nice to you. Use LinkedIn, industry communities, forums where the problem gets discussed, or ask for one introduction from each person you already know. Offer nothing except twenty minutes of genuine curiosity.",
      effort: "5–8 hours",
      outcome: "Fifteen scheduled conversations with people who actually have the problem.",
    },
    {
      title: "Run problem interviews without pitching",
      body: "Do not describe your idea. Ask about their work, the last time the problem occurred, what they did, what it cost, what they've already tried. Let silences run. The moment you pitch, the data stops.",
      effort: "10–15 hours",
      outcome: "Notes in the customer's own words, with concrete incidents and numbers.",
    },
    {
      title: "Look for the pattern honestly",
      body: "Count how many independently described the same problem unprompted, how many have an existing workaround, and how many have spent money on it. Compare against the threshold you set. Resist reinterpreting weak results as encouraging.",
      effort: "3–4 hours",
      outcome: "A clear go, pivot or stop decision based on your pre-written criteria.",
    },
    {
      title: "Run a demand test",
      body: "Build the smallest artefact that lets someone commit something costly: a specific offer with a price, a pre-order, a paid pilot, a booked onboarding call. Measure conversion from people who actually match your segment.",
      effort: "10–20 hours",
      outcome: "A conversion number from real strangers, not friends.",
    },
    {
      title: "Deliver manually for the first customers",
      body: "Take on five to ten paying customers and fulfil the promise by hand. You'll discover which steps matter, which edge cases dominate, and which features you'd have built and never used.",
      effort: "4–8 weeks",
      outcome: "Paying customers, and a specification derived from reality rather than imagination.",
    },
    {
      title: "Only now decide what to build",
      body: "With real usage behind you, build the parts that are repetitive, slow or error-prone when done by hand. That list will look meaningfully different from the feature list you started with.",
      effort: "Ongoing",
      outcome: "A build plan grounded in observed work rather than assumed need.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What founders themselves say killed their companies.",
      walkthrough:
        "CB Insights has repeatedly compiled the post-mortems that failed startups publish themselves — founders explaining, without investor-relations constraints, what went wrong. The original analysis covered 110+ post-mortems; a later study examined 431 failed venture-backed companies. Because most failures cite several causes, the percentages sum to well over 100.",
      result:
        "In the original set, 42% cited no market need — the single most common reason given. In the 2024 study of 431 companies, 43% were attributed to poor product-market fit, alongside 70% running out of capital, 29% bad timing and 19% unsustainable unit economics. Running out of money is usually the mechanism of death rather than the cause: a company building something nobody urgently needed burns cash trying to make it work. This is the empirical case for validating the problem before committing to a build.",
      source: {
        label: "CB Insights — The Top Reasons Startups Fail (startup post-mortem analyses)",
        url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/",
      },
    },
    {
      kind: "illustration",
      scenario: "The landing-page signup that predicts nothing.",
      walkthrough:
        "A pattern worth being able to spot in your own tests. A team puts up a page describing the product with an email capture box, collects a healthy number of addresses, treats that as validation and starts building. At launch, almost none of those addresses convert to paying customers. Nothing dishonest happened — the test simply measured interest, which is abundant and free to express, rather than intent, which is scarce and costly.",
      result:
        "The corrective is to make the action cost something: a pre-order, a paid pilot, a booked and confirmed onboarding call, a signature. You will collect far fewer commitments, and each one will tell you something the email addresses never could. A small number of costly signals beats a large number of free ones.",
    },
    {
      kind: "illustration",
      scenario: "Asking friends whether your idea is good.",
      walkthrough:
        "Friends and family answer a different question from the one you asked. You ask 'is this useful?' and they hear 'do you support me?' — and they answer that one, warmly and sincerely. The conversation feels like validation and contains no information, because at no point did anyone report a behaviour.",
      result:
        "This is why the guide insists on strangers and on past-tense questions. 'Tell me about the last time this happened, and what you did about it' cannot be answered with encouragement. It can only be answered with a fact or an admission that it doesn't happen.",
    },
  ],

  mistakes: [
    {
      mistake: "Pitching during a problem interview",
      why: "The moment you describe your solution, the conversation becomes a social exchange about your idea. People become encouraging, and you lose access to what they actually do.",
      fix: "Split into two separate conversations. First interview about their problem with no mention of your idea. Only later, and ideally with different people, show a solution and test reaction.",
    },
    {
      mistake: "Talking only to people who like you",
      why: "Friends, family and your existing network are systematically biased toward encouragement, and they're rarely in your target segment anyway.",
      fix: "Require that at least fifteen conversations are with people who had no prior reason to be nice to you. It's harder, and it's the only data worth having.",
    },
    {
      mistake: "Measuring interest instead of intent",
      why: "Email signups, survey responses and 'I'd definitely use that' cost nothing. Free actions do not predict paid behaviour.",
      fix: "Design tests that ask for something with a real cost — money, time in the calendar, data, a signature. A smaller number of costly commitments beats a large number of free ones every time.",
    },
    {
      mistake: "Setting success criteria after seeing results",
      why: "Human beings are extraordinarily good at reinterpreting ambiguous data as supportive. Without a pre-committed threshold, every outcome becomes encouraging.",
      fix: "Write the number down before you start, and tell someone else what it is. External accountability is what stops the goalposts moving.",
    },
    {
      mistake: "Validating a market instead of a segment",
      why: "'There's a £4bn market for this' tells you nothing about whether you can find and convince fifty specific people. Market size is a late-stage question.",
      fix: "Narrow until you can name individual customers and describe their week. You can widen later; you can't build for an average.",
    },
    {
      mistake: "Building an MVP that's just a smaller version of the product",
      why: "It still takes months and still assumes your solution is right. That's not a test, it's a slow bet.",
      fix: "Deliver the outcome manually first. If the value is real, customers won't care that a human is doing it; if it isn't, you'll find out in two weeks.",
    },
    {
      mistake: "Stopping validation once you start building",
      why: "Assumptions don't stop being assumptions because you've committed. Teams routinely spend a year building against evidence gathered in month one.",
      fix: "Keep talking to customers throughout. Ten conversations a month is a realistic ongoing rate and it catches drift before it becomes expensive.",
    },
  ],

  bestPractices: [
    "Record interviews with permission and revisit the transcripts. You will hear things on second listen that you filtered out live, particularly the parts that contradicted you.",
    "Capture the customer's exact vocabulary. The words they use for their problem are your future landing page copy, and they're almost never the words you'd have chosen.",
    "Ask 'what did you do about it?' after every stated problem. The answer separates genuine pain from mild annoyance more reliably than any other question.",
    "Aim for at least fifteen interviews before drawing conclusions. Below that you're reading noise, and the temptation to over-fit to one enthusiastic person is strong.",
    "Track the count of unprompted mentions. A problem raised spontaneously by eight of twenty people is a far stronger signal than one that twenty agreed with when asked.",
    "Charge money as early as you possibly can, even a small amount. The transition from free to paid reveals more than any amount of usage data.",
    "Write a short summary after every interview, same day, before your memory reshapes it into something more convenient.",
    "Keep a written record of what you predicted versus what you found. Calibrating your own intuition is a long-term asset that outlives this particular idea.",
  ],

  proTips: [
    "Ask 'who else should I speak to?' at the end of every conversation. Referred interviews have a much higher hit rate, and the network of people with a shared problem is usually denser than it looks from outside.",
    "When someone says the problem is significant, ask what they've spent on it — in money or hours. The number, or the awkward silence, tells you everything.",
    "Try to disprove your own finding once you have one. Go looking specifically for people in your segment who don't have the problem. If you can't find any, the signal is strong; if they're everywhere, your segment is wrong.",
    "Sell before you build using a concrete, dated offer: 'available in six weeks, £X per month, first three clients get onboarding included.' Vagueness is what makes pre-selling feel dishonest; specificity is what makes it a real test.",
    "Watch for the second meeting. Anyone genuinely interested will make time again, forward you to a colleague, or ask when it's ready. Enthusiasm that evaporates between meetings was politeness.",
    "If you can't get fifteen strangers to talk to you about the problem, treat that as a finding rather than a logistics failure. Difficulty reaching your customers now predicts difficulty selling to them later.",
  ],

  businessApplications: [
    "New product lines within an existing company: the same discipline applies, and internal enthusiasm is an even more misleading signal than customer politeness.",
    "Feature prioritisation: before building a heavily-requested feature, check how many requesters have built a workaround. Requests are cheap; workarounds are evidence.",
    "Pricing research: past-behaviour questions about what they currently spend on the problem produce far better price anchors than asking what they'd pay.",
    "Market entry: validating whether a problem that exists in one geography or vertical exists in the same form in another, rather than assuming it transfers.",
    "Agency and consultancy positioning: interviewing past and prospective clients about the problem in their words usually reveals a sharper, more sellable service than the one you advertise.",
    "Investment diligence: applying the same behavioural tests to a company's claimed traction — how much is paid, recurring, and from strangers.",
  ],

  lifeApplications: [
    "Career decisions: before retraining for a new field, interview fifteen people doing the job. Ask what their last week actually contained rather than whether they enjoy it.",
    "Major purchases and commitments: ask people who made the same decision what they'd do differently, focusing on what actually happened rather than how they feel about it now.",
    "Testing your own beliefs about yourself: 'I'd be happier if I moved cities' is a hypothesis. Spending a month there is a cheap test that beats years of speculation.",
    "Any decision where you notice yourself only seeking supportive opinions — the recognisable feeling of wanting encouragement rather than information is itself a useful alarm.",
  ],

  exercises: [
    {
      title: "The assumption audit",
      brief:
        "Write every assumption your idea depends on. Mark the ones that would kill it if false. Rank them by how confident you are versus how much evidence you have.",
      success: "You can name your single riskiest assumption in one sentence.",
      time: "90 minutes",
    },
    {
      title: "Five no-pitch interviews",
      brief:
        "Interview five people in your segment about the problem without mentioning your solution once. Use only past-behaviour questions. Notice how hard the restraint is.",
      success: "Five sets of notes containing specific incidents, timings and costs.",
      time: "5–6 hours",
    },
    {
      title: "The workaround hunt",
      brief:
        "For each person interviewed, document what they currently do about the problem. Categorise: nothing, manual workaround, paid solution.",
      success: "A count in each category — the single most useful table you'll produce.",
      time: "2 hours",
    },
    {
      title: "Run a costly demand test",
      brief:
        "Create a specific, priced, dated offer and put it in front of twenty qualified strangers. Ask for money or a calendar commitment, not an email address.",
      success: "A real conversion rate, however uncomfortable.",
      time: "1–2 weeks",
    },
    {
      title: "Write your kill criteria",
      brief:
        "Before your next test, write down the specific numeric result that would make you stop. Send it to someone who will hold you to it.",
      success: "A witnessed, dated, numeric threshold.",
      time: "30 minutes",
    },
  ],

  checklist: [
    "I have written down my riskiest assumption explicitly",
    "I defined numeric kill criteria before running any test",
    "I interviewed at least fifteen people who had no reason to flatter me",
    "I asked only about past behaviour, never about hypothetical future use",
    "I did not pitch my solution during problem interviews",
    "I counted how many people raised the problem unprompted",
    "I documented what each person currently does about the problem",
    "I ran a demand test requiring a costly commitment, not an email address",
    "I can describe my segment specifically enough to name individuals",
    "I have taken money from at least one stranger before building",
  ],

  faqs: [
    {
      q: "How many customer interviews are enough?",
      a: "Fifteen to twenty within a single narrow segment is a reasonable working minimum. What matters more than the count is whether you're hearing the same problem described unprompted, and whether new interviews have stopped surprising you.",
    },
    {
      q: "What if I can't find people to interview?",
      a: "Treat that as a result, not an obstacle. If your target customers are unreachable at the interview stage, they'll be unreachable at the sales stage too — and distribution difficulty kills more products than product quality does.",
    },
    {
      q: "Isn't this just what customers say they want? Didn't Ford say they'd have asked for faster horses?",
      a: "That quote is almost certainly apocryphal, and it's misapplied. You're not asking customers to design the solution. You're establishing whether a problem exists and what it costs them — which Ford's customers could have described perfectly well.",
    },
    {
      q: "Can I validate without talking to anyone?",
      a: "Partly. Search volume, existing competitors and community discussion are real signals worth reading. But they tell you a problem exists, not who has it acutely, what they've tried, or what they'd pay — and those are the decisive questions.",
    },
    {
      q: "How do I know when validation is done?",
      a: "When strangers in your segment have paid you money for the outcome, ideally more than once. Everything before that is increasingly good evidence; that's the first thing that's proof.",
    },
    {
      q: "What if validation says no but I still believe in it?",
      a: "That's legitimate, as long as you're explicit that you're making a bet rather than following evidence. Write down why you're overriding the data. If you're right you'll have learned something about your judgement; if you're wrong you'll know sooner.",
    },
    {
      q: "Should I worry about someone stealing my idea during interviews?",
      a: "Almost never. Ideas are abundant and execution is scarce, and the people you interview have jobs. The cost of secrecy — fewer, more guarded conversations — is far higher than the risk.",
    },
  ],

  tools: [
    { name: "Calendly", what: "Removes the scheduling friction that quietly kills interview momentum.", cost: "Freemium", url: "https://calendly.com" },
    { name: "Otter / Fireflies", what: "Records and transcribes interviews so you can listen rather than take notes.", cost: "Freemium" },
    { name: "Notion / Airtable", what: "Tracking interviews, quotes and patterns in one place. The pattern only becomes visible when the notes are comparable.", cost: "Freemium" },
    { name: "Carrd / Framer", what: "A credible one-page offer in an afternoon, without engineering time.", cost: "Freemium" },
    { name: "Stripe Payment Links", what: "Take real money with no product and no integration. The fastest available honest demand test.", cost: "Paid", url: "https://stripe.com/payments/payment-links" },
    { name: "LinkedIn Sales Navigator", what: "Finding fifteen people who genuinely match a narrow segment, which is otherwise the hardest part.", cost: "Paid" },
  ],

  resources: [
    { title: "The Mom Test — Rob Fitzpatrick", kind: "Book", note: "Short, cheap, and the single best thing written on customer interviews. Read it before your first conversation.", url: "https://www.momtestbook.com" },
    { title: "Deploy Empathy — Michele Hansen", kind: "Book", note: "Practical interview technique, including exact wording and how to handle the awkward moments." },
    { title: "The Lean Startup — Eric Ries", kind: "Book", note: "The origin of much of this vocabulary. Read it for the framing, and treat the MVP advice as more literal than intended by many who cite it." },
    { title: "Y Combinator Startup Library", kind: "Course", note: "Free, direct, and consistently sceptical of founder self-deception.", url: "https://www.ycombinator.com/library" },
  ],

  internalLinks: [
    { slug: "pricing-your-services", anchor: "turning validation into a price", context: "After the demand test section" },
    { slug: "clear-writing-that-gets-read", anchor: "writing the offer clearly enough to test", context: "In the demand test learning path step" },
  ],

  relatedGuides: ["pricing-your-services", "clear-writing-that-gets-read"],

  conclusion: [
    "Validation is not a stage you complete and leave behind. It's a habit of insisting on evidence before commitment, and its main obstacle is not method but temperament — the discomfort of actively looking for the answer you don't want.",
    "The mechanics are genuinely simple. Talk to people who have the problem, ask about what they've already done rather than what they'd do, look for existing workarounds, and ask for a costly commitment before you build. What's hard is writing down the number that would make you stop, and then honouring it.",
    "Do the cheap version this week. Fifteen conversations, no pitching, one page of notes each. Whatever you find, you'll be making the next decision with information instead of hope — and that difference compounds across every business you ever build.",
  ],

  cta: {
    headline: "Validated the problem and ready to build?",
    body: "We take teams from a proven problem to a working system in weeks, starting with the smallest thing that delivers the outcome.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
