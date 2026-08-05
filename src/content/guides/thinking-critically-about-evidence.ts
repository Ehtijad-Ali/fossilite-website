import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "thinking-critically-about-evidence",
  seoTitle: "Thinking Critically About Evidence: A Practical Guide",
  metaDescription:
    "How to evaluate claims, statistics and studies without a research background — base rates, replication, and the questions that expose weak evidence fast.",
  title: "Thinking Critically About Evidence",
  keywords: [
    "critical thinking",
    "how to evaluate evidence",
    "understanding statistics",
    "base rate fallacy",
    "correlation vs causation",
    "evaluating research claims",
  ],
  category: "critical-thinking",
  level: "Beginner",
  updated: "2026-08-04",
  author: EHTIJAD_ALI,
  readingTime: 12,

  intro: [
    "Critical thinking is usually taught as a list of logical fallacies, which is a bit like teaching driving by listing types of collision. Knowing the name of the ad hominem fallacy has almost never helped anyone evaluate a real claim, because real claims rarely arrive as clean syllogisms. They arrive as a percentage in a headline, a confident assertion from someone senior, or a study you haven't read.",
    "What actually helps is a small set of questions applied habitually. Compared to what? Out of how many? Who was measured, and does that resemble me? Has anyone else found the same thing? These are unglamorous and they dismantle a remarkable proportion of weak claims within thirty seconds.",
    "This guide is that toolkit. It assumes no statistics background and it's aimed at ordinary decisions — a health claim, a business assertion, a piece of advice, a number in a report. The goal is not to become a sceptic about everything, which is just as lazy as believing everything. It's to calibrate: to hold claims with roughly the confidence the evidence supports.",
  ],

  whyItMatters: [
    "You are making consequential decisions on evidence you cannot personally verify — about your health, your money, your work, your children. Outsourcing that judgement entirely is unavoidable to some degree, but the difference between outsourcing well and outsourcing badly is a small number of learnable habits.",
    "It also matters professionally in a way that's easy to underestimate. The person in a meeting who asks 'compared to what?' about an impressive number, without hostility, changes the quality of the decision being made. That's a rare and disproportionately valuable contribution, and it requires no seniority.",
    "There's a defensive argument too. A great deal of content is now optimised to be persuasive rather than accurate — and increasingly generated at volume by systems that produce fluent, confident, well-formatted claims with no mechanism for being right. The ability to check rather than absorb has never been more load-bearing.",
  ],

  coreConcepts: [
    {
      term: "Compared to what?",
      explain:
        "A number in isolation carries no information. '87% accuracy', 'twice the risk', 'saves three hours' — each needs a comparison before it means anything.",
      detail:
        "This single question deflates more weak claims than any other. Twice a very small risk is still a very small risk, and 87% accuracy is embarrassing if guessing gets you 85%.",
    },
    {
      term: "Base rates dominate rare events",
      explain:
        "When something is rare, even a highly accurate test for it produces mostly false positives. Most people's intuition gets this dramatically wrong, and the error runs in the direction of alarm.",
      detail:
        "If a condition affects one person in a thousand and a test is 99% accurate, then among a thousand people you'd expect one true positive and about ten false ones. A positive result means roughly a one-in-eleven chance, not 99%.",
    },
    {
      term: "Relative versus absolute change",
      explain:
        "'Increases risk by 50%' sounds alarming and tells you nothing without the starting number. Going from 2 in 100,000 to 3 in 100,000 is a 50% increase.",
      detail:
        "Relative figures are chosen when they're more impressive than absolute ones. When you see a percentage change without the underlying numbers, the omission is usually deliberate.",
    },
    {
      term: "Correlation is not causation, and the reason matters",
      explain:
        "Two things moving together may be causally linked in either direction, or both driven by something else, or coincidental. Observational data cannot distinguish these.",
      detail:
        "The useful move isn't reciting the slogan — it's asking what the third factor might be. People who take vitamins are healthier, and they're also wealthier, more health-conscious and more likely to exercise.",
    },
    {
      term: "Selection effects",
      explain:
        "Who ended up in the data determines what the data can show. Survey respondents differ from non-respondents. Surviving companies differ from failed ones. Patients who completed a trial differ from those who dropped out.",
      detail:
        "Survivorship bias is the common case: studying successful founders to learn what causes success omits everyone who did the same things and failed. The pattern you find may be present in both groups.",
    },
    {
      term: "Sample size and who was sampled",
      explain:
        "Small samples produce unstable results that swing on a few individuals. But representativeness matters more than size — a large sample of the wrong people tells you about the wrong people.",
      detail:
        "Always ask who was measured. A finding from undergraduates in a lab may or may not transfer to your context, and the paper usually can't tell you which.",
    },
    {
      term: "Replication is the real test",
      explain:
        "A single study is a piece of evidence, not a fact. Many published findings — including famous ones — have failed to reproduce when independently retested.",
      detail:
        "Weight findings by whether they've been replicated by independent groups, not by how surprising or how widely cited they are. Surprisingness and replicability are, if anything, negatively related.",
    },
    {
      term: "Confidence is not evidence",
      explain:
        "How certain someone sounds — including an expert, including you — is a poor guide to accuracy. Fluency and conviction are properties of delivery.",
      detail:
        "This applies with particular force to generated text, which produces the format of a well-sourced claim regardless of whether any source exists.",
    },
    {
      term: "Check what would change your mind",
      explain:
        "Before evaluating a claim, ask what evidence would make you abandon your current view. If nothing would, you're not evaluating — you're defending.",
      detail:
        "This is the most useful habit in the guide and the least comfortable, because it applies to your own beliefs at least as much as to other people's.",
    },
  ],

  learningPath: [
    {
      title: "Practise 'compared to what?' for a week",
      body: "Every time you encounter a number — an advert, an article, a work report — ask what the comparison is. Note how often it isn't supplied and how often the claim collapses when you supply it yourself.",
      effort: "5 minutes a day",
      outcome: "The question becomes automatic rather than effortful.",
    },
    {
      title: "Learn base rates with real arithmetic",
      body: "Work through the medical-test calculation by hand with several different rarities. Doing the arithmetic yourself, rather than reading about it, is what makes the intuition stick.",
      effort: "1–2 hours",
      outcome: "You can estimate the meaning of a positive test without help.",
    },
    {
      title: "Convert relative claims to absolute ones",
      body: "Find five media claims stated as percentage changes. Track down the underlying absolute numbers. Note how many become unremarkable.",
      effort: "2 hours",
      outcome: "You reflexively distrust a percentage change with no baseline.",
    },
    {
      title: "Read one primary source properly",
      body: "Take a study you've seen reported and find the actual paper. Compare the headline to what was measured, in whom, and how strongly. This is uncomfortable and permanently changes how you read science coverage.",
      effort: "2–3 hours",
      outcome: "First-hand evidence of the gap between finding and headline.",
    },
    {
      title: "Hunt for the third factor",
      body: "For five correlations you encounter, generate at least two plausible confounders and one reverse-causation story. Speed matters more than depth — this is a reflex you're building.",
      effort: "1 hour",
      outcome: "Alternative explanations arrive before you've accepted the stated one.",
    },
    {
      title: "Apply it to something you believe",
      body: "Take a view you hold confidently and honestly ask what your evidence is, where it came from, and what would change your mind. This is the hard exercise and the one that transfers.",
      effort: "1–2 hours",
      outcome: "At least one belief downgraded from certainty to plausibility.",
    },
    {
      title: "Practise saying 'I don't know'",
      body: "Deliberately decline to have a confident view on things you haven't examined. The social pressure to have an opinion is real and it's the main engine of unexamined belief.",
      effort: "Ongoing",
      outcome: "Comfort with holding a question open.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A widely-repeated claim about how long it takes to form a habit.",
      walkthrough:
        "The figure most people know — 21 days — did not come from research on habit formation. It originated in a mid-twentieth-century plastic surgeon's observation about patient adjustment, and spread because it was short, memorable and encouraging. When Lally and colleagues actually measured it, having 96 people perform a daily behaviour and rate its automaticity for 12 weeks, they found something quite different.",
      result:
        "The median time to maximum automaticity was 66 days, with a range from 18 to a predicted 254 days — and the 66-day median applied among the roughly half of participants whose data fitted the model. The lesson generalises well beyond habits: a claim's ubiquity is not evidence for it. Widely-repeated figures frequently have a traceable origin that turns out not to be a study at all, and checking the origin takes minutes.",
      source: {
        label: "Lally, van Jaarsveld, Potts & Wardle (2010) — How are habits formed, European Journal of Social Psychology",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674",
      },
    },
    {
      kind: "documented",
      scenario: "An influential economic finding that nobody had checked.",
      walkthrough:
        "Reinhart and Rogoff's finding — that public debt above 90% of GDP is associated with negative growth — was cited extensively in arguments for austerity, including in political budget proposals. Thomas Herndon, a graduate student, attempted to replicate it as coursework and could not. Obtaining the original spreadsheet, he and his co-authors found several problems, including an averaging formula whose range omitted five countries.",
      result:
        "Corrected, average real GDP growth above the threshold was 2.2% rather than −0.1%. Two things are worth taking from this. The error survived enormous scrutiny because scrutiny mostly meant citing the paper rather than checking it. And it was found by a student doing the unglamorous thing — attempting to reproduce the result from the underlying data.",
      source: {
        label: "Herndon, Ash & Pollin (2013), PERI/UMass Amherst — critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "documented",
      scenario: "A system that was accurate until the world moved.",
      walkthrough:
        "Google Flu Trends estimated flu prevalence from search volume and performed well when launched. Over time, search behaviour changed — partly through media coverage of flu, partly through the search interface itself — while the model continued applying a relationship learned earlier.",
      result:
        "By the 2012–13 season it was persistently overestimating, at one point predicting more than double the proportion of doctor visits the CDC recorded. Lazer and colleagues concluded in Science that the errors were largely avoidable. The transferable point: evidence has a shelf life. A finding established under one set of conditions does not automatically remain true when the conditions change, and 'it worked when we checked' is a statement about the past.",
      source: {
        label: "Lazer, Kennedy, King & Vespignani, Science 343:1203–1205 (2014) — The Parable of Google Flu",
        url: "https://www.science.org/doi/10.1126/science.1248506",
      },
    },
  ],

  mistakes: [
    {
      mistake: "Accepting a percentage without the baseline",
      why: "A relative change with no absolute numbers is designed to impress rather than inform. It can make a trivial difference sound dramatic and a large one sound modest.",
      fix: "Always ask for the underlying numbers. 'From what to what?' If they're not available, treat the claim as unevaluated rather than as supported.",
    },
    {
      mistake: "Ignoring base rates for rare events",
      why: "Intuition badly overestimates what a positive result means when the thing being tested for is rare, and the error consistently runs toward alarm.",
      fix: "Do the arithmetic with a concrete population of a thousand or a million. It converts an abstract probability into countable people, which intuition handles much better.",
    },
    {
      mistake: "Treating one study as settled",
      why: "Individual studies are noisy, and many famous findings haven't replicated. The most newsworthy results are disproportionately the least likely to hold.",
      fix: "Ask whether independent groups have found the same thing. Prefer replicated findings and meta-analyses over single striking results.",
    },
    {
      mistake: "Learning from survivors only",
      why: "Studying successful people or companies to find the causes of success omits everyone who did the same things and failed. The pattern may exist equally in both groups.",
      fix: "Ask who isn't in the dataset. 'Did the failures also do this?' is the question that makes most success advice evaporate.",
    },
    {
      mistake: "Confusing expertise in one domain for authority in another",
      why: "Genuine credentials transfer confidence far beyond their scope, for the audience and often for the expert.",
      fix: "Check whether the claim falls inside the person's actual area, and whether they'd be exposed if wrong. Accountability is a better signal than credentials.",
    },
    {
      mistake: "Only checking claims you disagree with",
      why: "Applying scrutiny asymmetrically produces a belief set that feels rigorously examined and is systematically biased. This is the most common failure among people who consider themselves critical thinkers.",
      fix: "Apply the same questions to things you want to be true. Notice when you're checking sources and when you're just nodding.",
    },
    {
      mistake: "Mistaking scepticism for critical thinking",
      why: "Rejecting everything requires no more work than accepting everything and produces worse decisions, because it discards good evidence along with bad.",
      fix: "Aim for calibration rather than doubt — hold each claim with roughly the confidence its evidence supports, which for many claims is 'probably true'.",
    },
  ],

  bestPractices: [
    "Ask 'compared to what?' about every number, reflexively, before considering whether it's impressive.",
    "Convert relative changes to absolute ones before reacting to them.",
    "For rare events, work the arithmetic through a concrete population rather than reasoning about percentages.",
    "Ask who was measured and whether they resemble the situation you're applying it to.",
    "Ask who isn't in the data — the dropouts, the failures, the non-respondents.",
    "Prefer replicated findings to striking single studies, and check whether replication has been attempted at all.",
    "Trace ubiquitous claims to their origin. Widely-repeated figures often have a source that isn't a study.",
    "Decide what would change your mind before you evaluate, and hold yourself to it.",
    "Apply the same scrutiny to claims you like as to claims you don't. The asymmetry is the failure mode.",
    "Be willing to say you don't know, and to keep a question open rather than resolving it prematurely.",
  ],

  proTips: [
    "When someone cites a study, ask what it measured rather than what it showed. The gap between the measurement and the headline claim is where most overreach lives, and the question is neutral enough to ask in any room.",
    "Look for the pre-registration or the protocol on any important study. Analyses decided after seeing the data can find something interesting in almost any dataset.",
    "Notice your emotional response before your analytical one. Claims that make you feel vindicated get less scrutiny automatically, and noticing the feeling is the only reliable way to correct for it.",
    "When a claim is framed as a percentage of a percentage, slow right down. Compound relative figures are the most reliably misleading construction in ordinary reporting.",
    "Ask who benefits from you believing this, without treating the answer as decisive. Interested parties are sometimes right — but it tells you where to check hardest.",
    "Keep a short list of things you've changed your mind about. If it's empty over several years, that's information about your process rather than about your accuracy.",
  ],

  businessApplications: [
    "Vendor claims: 'compared to what, measured how, on whose data' turns a sales conversation into an evaluable one and takes no confrontation.",
    "Internal metrics: the same relative-versus-absolute problem appears in company dashboards, where percentage improvements on small baselines routinely drive misallocated effort.",
    "Post-mortems: survivorship bias means analysing only failed projects — or only successful ones — produces confident wrong conclusions about cause.",
    "A/B testing and experimentation, where sample size, stopping rules and multiple comparisons determine whether a result means anything.",
    "Market research and customer surveys, where who responded is usually more informative than what they said.",
    "Strategy: distinguishing 'this worked for that company' from 'this would work for us' requires asking what else was different, which is rarely done.",
  ],

  lifeApplications: [
    "Health decisions, where base rates, relative risk framing and single-study reporting combine to produce genuinely misleading impressions.",
    "Financial claims, where past performance, survivorship bias among funds and selective reporting are structural rather than occasional.",
    "Parenting and education advice, an area with unusually weak evidence and unusually confident delivery.",
    "Reading the news generally — most numerical claims in headlines are relative, uncontextualised, or both.",
    "Evaluating advice about your own life, including advice that arrives in the form of a confident personal anecdote.",
    "Assessing anything generated by an AI system, which produces the format of a well-evidenced claim regardless of whether evidence exists.",
  ],

  exercises: [
    {
      title: "The comparison hunt",
      brief:
        "Collect ten numerical claims from the next few days. For each, write what comparison would be needed to interpret it, and whether it was supplied.",
      success: "Ten claims, and a count of how many were uninterpretable as stated.",
      time: "1 week, passively",
    },
    {
      title: "Do the base-rate arithmetic",
      brief:
        "For a condition affecting 1 in 1,000 and a test that's 99% accurate, work out what a positive result actually means. Repeat for 1 in 100 and 1 in 10,000.",
      success: "Three worked calculations and an intuition that survives without them.",
      time: "1 hour",
    },
    {
      title: "Headline versus paper",
      brief:
        "Find a reported study and read the actual paper. Compare the headline claim to the sample, the effect size and the stated limitations.",
      success: "A written note of the specific gaps between finding and reporting.",
      time: "2–3 hours",
    },
    {
      title: "Trace a famous number",
      brief:
        "Pick a widely-repeated statistic. Follow the citations back until you reach the original source, or until the trail goes cold. Note which happens.",
      success: "Either a primary source or a documented dead end — both are instructive.",
      time: "1–2 hours",
    },
    {
      title: "Audit a belief you like",
      brief:
        "Take something you believe and want to be true. Write your actual evidence, its source, and what would change your mind. Then check whether that evidence holds.",
      success: "One belief honestly downgraded, or confirmed with better grounds than before.",
      time: "2 hours",
    },
  ],

  checklist: [
    "I asked what this number is being compared to",
    "Relative changes have been converted to absolute ones",
    "For rare events, I worked the arithmetic through a concrete population",
    "I know who was measured and whether they resemble my situation",
    "I asked who isn't in the data — dropouts, failures, non-respondents",
    "I checked whether the finding has been independently replicated",
    "I considered at least two alternative explanations for any correlation",
    "I traced widely-repeated claims back toward their origin",
    "I applied the same scrutiny to claims I wanted to be true",
    "I know what evidence would change my mind",
  ],

  faqs: [
    {
      q: "Do I need to understand statistics to evaluate evidence?",
      a: "Not formally. Base rates, absolute versus relative change, and asking who was measured cover most everyday situations, and all three are arithmetic rather than statistics. Formal methods help with technical literature, not with the daily cases.",
    },
    {
      q: "How do I evaluate a study without reading the whole paper?",
      a: "Read the methods section rather than the abstract. Who was studied, how many, over what period, and what exactly was measured. Those four answers filter out most weak evidence in a few minutes.",
    },
    {
      q: "What is the replication crisis?",
      a: "The finding that a substantial share of published results in several fields fail to reproduce when independently retested. Practically, it means a single study is a piece of evidence rather than a settled fact, especially when the result is surprising.",
    },
    {
      q: "Isn't this just being cynical?",
      a: "No, and the distinction matters. Cynicism rejects everything and requires no work. Calibration means holding each claim with roughly the confidence its evidence supports — which for many claims means accepting them, provisionally.",
    },
    {
      q: "How do I do this without being the difficult person in the room?",
      a: "Ask questions rather than making assertions, and ask them about numbers rather than about people. 'What's the comparison?' is a neutral question that improves the discussion and doesn't put anyone on the defensive.",
    },
    {
      q: "How should I treat claims from AI systems?",
      a: "As unverified until checked. These systems produce fluent, well-formatted, confident output whether or not they have relevant knowledge — including citations that don't exist. Fluency carries no information about accuracy here.",
    },
  ],

  tools: [
    { name: "Google Scholar", what: "Find primary sources and see citation counts. The 'cited by' link is useful for finding critiques and replications.", cost: "Free", url: "https://scholar.google.com" },
    { name: "Retraction Watch", what: "Tracks retracted papers, including ones still being widely cited.", cost: "Free", url: "https://retractionwatch.com" },
    { name: "Cochrane Library", what: "Systematic reviews of medical evidence — the closest thing available to a considered summary of what's known.", cost: "Freemium", url: "https://www.cochranelibrary.com" },
    { name: "Our World in Data", what: "Well-sourced data with methodology visible, which is the useful part.", cost: "Free", url: "https://ourworldindata.org" },
  ],

  resources: [
    { title: "How to Lie with Statistics — Darrell Huff", kind: "Book", note: "Short, old, and still the fastest introduction to how numbers mislead." },
    { title: "Thinking, Fast and Slow — Daniel Kahneman", kind: "Book", note: "Foundational on cognitive bias. Worth noting that some individual studies described have since failed to replicate — a point the field has been candid about." },
    { title: "The Parable of Google Flu", kind: "Paper", note: "Five pages on how good evidence degrades as conditions change.", url: "https://www.science.org/doi/10.1126/science.1248506" },
    { title: "Calling Bullshit — Bergstrom & West", kind: "Course", note: "A university course on spotting misleading data, freely available online.", url: "https://www.callingbullshit.org" },
  ],

  internalLinks: [
    { slug: "evaluating-ai-systems", anchor: "the same discipline applied to AI claims", context: "In the confidence-is-not-evidence concept" },
    { slug: "learning-faster", anchor: "why popular study advice is often unsupported", context: "In the documented example on habit claims" },
    { slug: "how-machine-learning-actually-works", anchor: "why models find correlation and not cause", context: "In the correlation concept" },
  ],

  relatedGuides: [
    "evaluating-ai-systems",
    "learning-faster",
    "how-machine-learning-actually-works",
  ],

  conclusion: [
    "Critical thinking in practice is not a knowledge of fallacies. It's a handful of questions applied habitually: compared to what, out of how many, who was measured, who isn't in the data, has anyone else found this, and what would change my mind. None require training, and together they dismantle most weak claims quickly.",
    "The hardest part is applying them symmetrically. Scrutinising claims you dislike is easy and produces a belief set that feels examined while being systematically biased. The discipline is checking the things you want to be true — including the widely-repeated figure that supports the point you were about to make.",
    "Start with 'compared to what?' this week, on every number you encounter. It takes seconds, it's socially costless, and you'll be surprised how often the comparison is missing precisely where it would have mattered most.",
  ],

  cta: {
    headline: "Making a decision on numbers you're not sure about?",
    body: "We build measurement and evaluation into every system we ship, so the numbers you're deciding from mean what you think they mean.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
