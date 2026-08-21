import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "choosing-the-right-solution",
  seoTitle: "Choosing the Right Solution: Evaluation That Holds Up",
  metaDescription:
    "How to evaluate options honestly: criteria set before scoring, total cost over five years, reversibility, and the failure cost most business cases never price.",
  title: "Choosing the Right Solution",
  keywords: [
    "solution evaluation",
    "options appraisal",
    "build vs buy decision",
    "weighted scoring model",
    "vendor selection criteria",
    "total cost of ownership",
  ],
  category: "business-analysis",
  level: "Advanced",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 18,

  intro: [
    "Weighted scoring matrices are the most respectable way to launder a decision that has already been made. Choose the criteria after you have seen the options, adjust two weights, and any of three options can win, with a spreadsheet to prove it was objective. I have watched this happen in rooms full of intelligent, honest people who genuinely believed they were evaluating.",
    "The fix is mostly about sequence. Criteria before options. Weights before scores. Evidence before opinion. It is not sophisticated and it is remarkably hard to hold to, because everybody in the room already has a preference by the time the evaluation starts, including you.",
    "This guide covers how to build criteria that discriminate, how to cost an option over its life rather than to its go-live date, how to price the failure mode rather than only the happy case, and how to write the decision down so that it can be revisited in two years by people who were not there.",
  ],

  whyItMatters: [
    "Solution choices are the most expensive decisions a BA influences and the hardest to reverse. A process change can be undone in a fortnight. A platform choice sets the constraints on an operation for five to ten years, and the organisation will design around it long after anyone remembers why it was picked.",
    "The visible costs are also a minority of the real ones. Licence and implementation are what appear in the paper. Integration, data migration, training, the internal capacity consumed, the ongoing configuration effort and the eventual exit cost are frequently larger, and they are systematically absent from first drafts.",
    "There is a professional reason too. A recommendation that survives hostile questioning from a finance director is a very different artefact from one that survives a friendly steering group. Being the person whose papers hold up is a durable career asset, and it comes almost entirely from doing the unglamorous parts properly.",
  ],

  coreConcepts: [
    {
      term: "Criteria before options, always",
      explain:
        "Write and agree the evaluation criteria before anyone has seen the shortlist. Once the options are visible, criteria get constructed, in complete good faith, to describe the one people already liked.",
      detail:
        "If you inherit a process where options came first, you can still recover it: write the criteria from the need statement, not from the option descriptions, and get them agreed before scoring begins.",
    },
    {
      term: "Criteria must be able to discriminate",
      explain:
        "A criterion every option satisfies tells you nothing and consumes weight. Meets our security requirements is usually a gate, not a criterion.",
      detail:
        "Split them properly. Gates are pass or fail and they eliminate. Criteria are comparative and they rank. Mixing the two is how an option that fails a legal requirement ends up scoring second rather than being removed.",
    },
    {
      term: "Weight before you score, and defend the weights",
      explain:
        "Agree the weights with the decision maker before any option is scored. The weights are a statement about what the organisation values, and they should be arguable in their own right.",
      detail:
        "A useful discipline: force the weights to sum to a fixed total so that raising one requires lowering another. Unconstrained weighting produces everything at eight or nine out of ten and no discrimination at all.",
    },
    {
      term: "Score against evidence, and record what the evidence was",
      explain:
        "Next to each score, one line saying what it is based on: a demonstration against your own scenarios, a reference call, a documented figure, or an assertion by the vendor.",
      detail:
        "This column changes behaviour more than any methodology. It makes visible how much of your evaluation rests on somebody's sales material, which is usually far more than the scorers realise.",
    },
    {
      term: "Cost over five years, not to go-live",
      explain:
        "Licence, implementation, integration, data migration, training, internal staff time, ongoing configuration and support, upgrades, and exit. Then multiply by realistic volume growth.",
      detail:
        "Internal staff time is the omission that most distorts comparisons, because it is not a cash cost and it is very real. An option that consumes six months of your best operations people is not cheap because no invoice arrives.",
    },
    {
      term: "Price the failure mode, not just the running cost",
      explain:
        "What does it cost when this option is wrong? An option with a modest error rate is fine when a person reviews before anything irreversible happens, and dangerous when each output is a binding commitment.",
      detail:
        "Ask for each option: what actions does it take without a human check, how reversible is each of those actions, and what is the cost of the worst plausible batch of errors before somebody notices.",
    },
    {
      term: "Reversibility deserves explicit weight",
      explain:
        "How hard is it to undo this in eighteen months? Where does the data live, who owns it, in what format can you get it out, and what is contractually required to leave.",
      detail:
        "Two options with similar scores and very different exit costs are not similar options. Reversibility is the criterion that most consistently gets omitted and most consistently matters later.",
    },
    {
      term: "Fit is measured against your scenarios, not their demonstration",
      explain:
        "Send vendors your own real cases, including the awkward ones, and ask them to demonstrate those. A standard demonstration shows you the path the product was designed for.",
      detail:
        "Use the ten real cases you tested your future state against. The variation in how vendors handle the two difficult ones tells you more than everything else in the process combined.",
    },
    {
      term: "Configuration is not free and customisation is not neutral",
      explain:
        "Every deviation from a product's standard behaviour costs at implementation and again at every upgrade. Ask how much of your requirement set is met by configuration and how much needs code.",
      detail:
        "The honest question to the business is which of our current practices are genuinely distinctive and which are simply what we happen to do. Most organisations discover the second category is much larger than they assumed.",
    },
    {
      term: "Talk to a reference the vendor did not choose",
      explain:
        "Supplied references are selected. Find an organisation using the product that the vendor did not introduce you to, and ask them what they wish they had known.",
      detail:
        "Ask reference customers one specific question: what took longer than expected, and what does your team complain about now? Both produce more useful answers than any general satisfaction question.",
    },
    {
      term: "Sensitivity: what would have to change for the answer to flip?",
      explain:
        "Take the top two options and find the smallest change in assumptions that reverses the result. If a two-point shift on one criterion flips it, say so.",
      detail:
        "This is honest and it is also protective. When the decision is genuinely marginal, saying so out loud is far better than presenting a false margin that someone later discovers was built on one contested weight.",
    },
    {
      term: "Write the decision record",
      explain:
        "What was chosen, what was rejected, why, what assumptions it rests on, and what would cause it to be revisited.",
      detail:
        "In two years the people asking why on earth we bought this will not have been in the room. A one-page record is the difference between a decision that can be explained and one that looks inexplicable.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "An option whose per-unit error was acceptable and whose failure mode was not.",
      walkthrough:
        "Zillow Offers used a model to price homes the company bought and resold. Competing on speed meant committing to offers quickly, and the model failed to anticipate how far and fast prices would move. It bought above what properties could later be sold for, and the error compounded across thousands of transactions before it appeared in the accounts.",
      result:
        "The company announced roughly $304 million of inventory write-down in Q3 2021 and wound the business down. For evaluation work the transferable point is about what a scoring matrix does not capture: accuracy was a criterion, and irreversibility was not. Whenever an option acts without a human check, add a criterion for the cost of the worst plausible run of errors before detection, and weight it.",
      source: {
        label: "Zillow Group Q3 2021 results and plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "illustration",
      scenario: "The evaluation that changed when the criteria came first.",
      walkthrough:
        "A team is choosing between three case management products. The BA insists on agreeing criteria and weights before the demonstrations. During that session the operations director argues successfully that the ability to reassign work in bulk during absence is worth more than any reporting feature, because cover arrangements consume a large part of every week. It receives a heavy weight. Two of the three products handle bulk reassignment awkwardly, which had not appeared in any earlier discussion because nobody had thought to ask about it.",
      result:
        "The product that won was not the one that had impressed people in the initial demonstrations. The criterion that decided it came from an operational reality that a feature-led evaluation would never have surfaced. Setting criteria first is not administrative hygiene: it is the step that lets the business state what actually matters before anyone is anchored.",
    },
    {
      kind: "illustration",
      scenario: "Two options, one invoice, very different costs.",
      walkthrough:
        "A build option and a buy option are compared. The buy option has a visible licence cost and looks more expensive. The BA builds a five-year model including implementation, integration with three internal systems, data migration, training, and the internal effort each option consumes. The build option requires a substantial share of the two most experienced developers for a year, plus permanent ownership of maintenance, upgrades and any regulatory change that arrives later.",
      result:
        "Over five years the comparison reversed. What made the difference was not a clever assumption, it was including internal staff time as a cost. Because nobody invoices for it, it routinely appears as zero, and any comparison between building and buying that omits it is arithmetic in favour of building.",
    },
  ],

  learningPath: [
    {
      title: "Derive criteria from the need, before seeing options",
      body: "Go back to the need statement and the design principles. Turn each into something you could measure or judge. Separate gates, which eliminate, from criteria, which rank.",
      effort: "Half a day",
      outcome: "A criteria set that describes what the business wants rather than what the shortlist happens to offer.",
    },
    {
      title: "Agree weights with the decision maker",
      body: "Constrain them to a fixed total so raising one lowers another. Have the argument about weights now, in the abstract, where it is cheap.",
      effort: "1 hour",
      outcome: "A recorded statement of what the organisation values, agreed before it can be influenced by preference.",
    },
    {
      title: "Build the five-year cost model for every option",
      body: "Licence, implementation, integration, migration, training, internal staff time, run and support, upgrades, exit. Include volume growth. Include do nothing.",
      effort: "2-3 days",
      outcome: "A comparison that survives finance, and usually at least one reversal of the intuitive ranking.",
    },
    {
      title: "Test fit against your own scenarios",
      body: "Send each vendor or team your ten real cases including the two awkward ones, and require them to demonstrate those specifically rather than their standard script.",
      effort: "1 day per option",
      outcome: "Evidence of fit rather than evidence of sales capability.",
    },
    {
      title: "Score with an evidence column",
      body: "Every score carries a line stating what it rests on. Mark clearly where the only source is a vendor assertion.",
      effort: "Half a day",
      outcome: "A visible picture of how much of your evaluation is actually evidenced.",
    },
    {
      title: "Run the failure and reversibility analysis",
      body: "For each option: what does it do without a human check, how reversible is that, what does exit cost, and where does the data live.",
      effort: "Half a day",
      outcome: "The two criteria most often missing, made explicit.",
    },
    {
      title: "Run sensitivity, then write the decision record",
      body: "Find the smallest assumption change that flips the top two. Then write one page: chosen, rejected, why, assumptions, and what would trigger a revisit.",
      effort: "Half a day",
      outcome: "An honest margin and a decision that can be explained to people who were not there.",
    },
  ],

  exercises: [
    {
      title: "Reverse-engineer a past decision",
      brief:
        "Find a solution decision your organisation made in the last two years. Write the criteria that would have had to apply for that option to win. Then ask whether those were the criteria the business would have chosen in advance.",
      success:
        "You can state at least one criterion that was implicitly heavily weighted and would not have survived being written down beforehand.",
      time: "2 hours",
    },
    {
      title: "The internal time line",
      brief:
        "Take any current option comparison and add a single row: internal staff days consumed over five years, by role. Estimate it with whoever manages those people rather than alone.",
      success:
        "The comparison changes materially, or you can explain convincingly why it does not.",
      time: "2-3 hours",
    },
    {
      title: "The flip test",
      brief:
        "For a live evaluation, identify the smallest single change in a weight or a score that would reverse the top two options. Write one sentence on how confident you are in that specific number.",
      success:
        "You can state honestly whether your recommendation is robust or marginal, and you have said so in the paper.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Setting criteria after seeing the options",
      why: "Criteria get written, sincerely, to describe the option people already prefer. The matrix then produces a number that confirms a decision it did not inform.",
      fix: "Derive criteria from the need statement and agree them before the shortlist is visible. If that ship has sailed, derive them from the need anyway and ignore the option descriptions.",
    },
    {
      mistake: "Mixing gates with criteria",
      why: "An option that fails a legal or contractual requirement gets a low score on one row and stays in the comparison, where its other strengths can carry it.",
      fix: "Run gates first as pass or fail. Only options that pass every gate get scored at all.",
    },
    {
      mistake: "Costing to go-live",
      why: "Implementation is a minority of lifetime cost. Comparisons made on it favour whichever option pushes the most cost past the decision point, which is a property of the sales process rather than of the product.",
      fix: "Five-year model including internal time, upgrades and exit, with volume growth applied.",
    },
    {
      mistake: "Treating internal effort as free",
      why: "No invoice arrives, so it appears as zero, which systematically favours building and systematically underestimates every option that consumes operational staff.",
      fix: "Estimate internal days by role with the managers who own those people, and price them at a rate finance recognises.",
    },
    {
      mistake: "Evaluating on the vendor's demonstration",
      why: "You are watching a rehearsed path through the product's strongest capability. It tells you almost nothing about your awkward cases, which is where fit is decided.",
      fix: "Supply your own real scenarios in advance and require them to be demonstrated, including the two hardest.",
    },
    {
      mistake: "Ignoring reversibility",
      why: "Two options with equal scores can have completely different exit costs. The one that holds your data in a proprietary format has quietly bought a decade of your future decisions.",
      fix: "Make exit cost, data ownership and extraction format explicit criteria with real weight.",
    },
    {
      mistake: "Presenting a false margin",
      why: "A recommendation that looks decisive but rests on one contested weight will be discovered eventually, and the discovery discredits the whole paper rather than the one row.",
      fix: "Run sensitivity and state plainly when a decision is marginal. Marginal decisions are common and saying so builds trust.",
    },
    {
      mistake: "No decision record",
      why: "Two years later nobody remembers what was rejected or why, so the same options get re-proposed and the original constraints are re-litigated from scratch.",
      fix: "One page: chosen, rejected, why, assumptions, and the trigger for revisiting.",
    },
  ],

  bestPractices: [
    "Derive criteria from the need before any option is visible.",
    "Separate gates that eliminate from criteria that rank.",
    "Agree weights, constrained to a fixed total, before scoring.",
    "Attach an evidence line to every score and flag vendor assertions.",
    "Model five years of cost including internal staff time and exit.",
    "Include do nothing in the cost comparison.",
    "Test fit with your own real scenarios, including the awkward ones.",
    "Ask what each option does without a human check, and how reversible it is.",
    "Price the worst plausible run of errors before detection.",
    "Speak to a reference the vendor did not choose.",
    "Run sensitivity on the top two and report the margin honestly.",
    "Write a one-page decision record with a revisit trigger.",
  ],

  proTips: [
    "Ask each vendor what their product is bad at. The ones who answer specifically are almost always the better long-term partner, because you will find out anyway and the difference is whether you find out now or in month seven of implementation. Vague answers here have predicted trouble for me more reliably than any reference call.",
    "Get the person who will run the system every day into the demonstration and give them the keyboard. Ten minutes of somebody trying to complete a real task tells you things no scoring matrix will, and their reaction is the closest thing to a preview of adoption that you can get before committing.",
    "When comparing build against buy, ask who will own this in three years. Build options are frequently championed by people who will have moved on, and the maintenance obligation lands on a team that had no say. Making the future owner visible during the decision changes the conversation, usually for the better.",
    "Keep the criteria and weights document dated and unedited after agreement. If someone wants to change a weight after seeing scores, that is legitimate but it must be a visible amendment with a reason, not a quiet edit. The audit trail is the only thing that keeps a scoring exercise honest under pressure.",
  ],

  businessApplications: [
    "Software selection, where the discipline of criteria-first is the difference between an evaluation and a justification.",
    "Build versus buy decisions, where internal effort is the omitted variable that decides the answer.",
    "Outsourcing decisions, where reversibility and data ownership matter more than the price comparison.",
    "Capital investment appraisal, where the five-year model is expected and the failure-mode analysis usually is not.",
    "Choosing between process change and system change, where the cheap option is frequently the unglamorous one.",
    "Consolidating duplicate systems after a merger, where the decision record matters because both sides will contest it later.",
  ],

  checklist: [
    "Criteria derived from the need and agreed before options were visible.",
    "Gates separated from criteria and applied first.",
    "Weights agreed with the decision maker and constrained to a fixed total.",
    "Five-year cost model complete for every option, including do nothing.",
    "Internal staff time estimated by role and priced.",
    "Exit cost, data ownership and extraction format assessed.",
    "Fit tested against your own real scenarios, including two awkward cases.",
    "Failure mode and irreversibility assessed and weighted.",
    "Every score carries an evidence line.",
    "At least one reference contacted that the vendor did not supply.",
    "Sensitivity run on the top two options and the margin stated honestly.",
    "Decision record written with assumptions and a revisit trigger.",
  ],

  faqs: [
    {
      q: "Are weighted scoring matrices worth using at all?",
      a: "Yes, if the sequence is right and the weights are agreed before scoring. The matrix is not the analysis, it is a way of recording it. Used after a decision it is theatre, and everyone in the room can tell.",
    },
    {
      q: "How do I compare a process change against a system?",
      a: "On the same criteria, derived from the need. Process options usually win on cost and speed and lose on scalability and audit trail. Forcing them into the same comparison is exactly the point, because otherwise the cheap option never gets considered.",
    },
    {
      q: "What if the sponsor overrules the analysis?",
      a: "That is their prerogative and sometimes they know something you do not. Record the recommendation, the decision and the stated reason. You are accountable for the choice being informed, not for it going your way.",
    },
    {
      q: "How many options should reach detailed evaluation?",
      a: "Three, or four at most. Detailed evaluation is expensive, and beyond four the analysis gets thin across all of them, which is worse than a shallower comparison of the two that were ever really in contention.",
    },
    {
      q: "How do I estimate a five-year cost when nobody will give me numbers?",
      a: "Use ranges and state them as ranges. A cost of somewhere between two and three times the licence fee, with the reasoning shown, is far more useful than a precise number that is wrong, and it is honest about what you know.",
    },
    {
      q: "Should the BA make the recommendation?",
      a: "Usually yes, clearly stated, with the reasoning and the margin. A paper that presents options without a view forces the decision maker to do the analysis, which is the part you were asked to do.",
    },
  ],

  tools: [
    { name: "A criteria and weights document, dated", what: "Agreed before scoring and amended only visibly. The artefact that keeps an evaluation honest.", cost: "Free" },
    { name: "A five-year cost model", what: "A spreadsheet. The difficulty is honesty about internal time and exit, not modelling sophistication.", cost: "Varies" },
    { name: "Your own demonstration scenarios", what: "Ten real cases including two awkward ones, sent to vendors in advance and required to be shown.", cost: "Free" },
    { name: "A decision record template", what: "Chosen, rejected, why, assumptions, revisit trigger. One page, and the most reused document you will write.", cost: "Free" },
  ],

  resources: [
    { title: "Zillow Group Q3 2021 results", kind: "Docs", note: "Primary source on what happens when an option's failure mode is not priced. Read it as an evaluation criteria problem rather than a modelling one.", url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx" },
  ],

  internalLinks: [
    { slug: "designing-the-future-state", anchor: "generating the options you are evaluating", context: "Before evaluation" },
    { slug: "writing-a-business-case", anchor: "turning the chosen option into a funded case", context: "Next step" },
    { slug: "choosing-an-ai-vendor", anchor: "evaluating a vendor specifically", context: "Procurement" },
  ],

  relatedGuides: ["designing-the-future-state", "writing-a-business-case", "choosing-an-ai-vendor"],

  conclusion: [
    "Before your next evaluation goes any further, write the criteria and weights down and get them agreed while the options are still out of sight. It takes an afternoon, it is the one step that determines whether the rest of the exercise means anything, and it is almost always skipped.",
  ],
};

export default guide;
