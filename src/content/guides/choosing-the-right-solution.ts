import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "choosing-the-right-solution",
  seoTitle: "Choosing Between Options Without Fooling Yourself",
  metaDescription:
    "Scoring sheets are the most respectable way to justify a decision already made. Criteria before options, five years of cost, and what it costs when the thing is wrong.",
  title: "Choosing Between Options Honestly",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "A scoring sheet is the most respectable way to justify a decision that has already been made. Pick the criteria after you have seen the options, nudge two of the weightings, and any of three options can come out on top, with a spreadsheet to prove it was objective. I have watched this happen in rooms full of intelligent, honest people who genuinely believed they were evaluating something.",
    "The fix is almost entirely about order. Criteria before options. Weightings before scores. Evidence before opinion. It is not sophisticated and it is remarkably hard to stick to, because everybody in the room already has a favourite by the time the evaluation starts, including you.",
    "This guide covers how to build criteria that actually tell options apart, how to work out what something costs over its whole life rather than up to launch day, how to price what happens when it goes wrong rather than only when it works, and how to write the decision down so somebody can understand it in two years.",
  ],

  whyItMatters: [
    "These are the most expensive decisions a BA influences and the hardest to undo. A process change can be reversed in a fortnight. A platform choice shapes an operation for five to ten years, and the business will design itself around it long after anybody remembers why it was picked.",
    "The visible costs are also a minority of the real ones. Licence and setup are what appear in the paper. Connecting it to everything else, moving the data, training, the internal time it eats, the ongoing fiddling and the eventual cost of leaving are frequently bigger, and they are systematically missing from first drafts.",
    "And there is a professional reason. A recommendation that survives a finance director in a bad mood is a very different thing from one that survives a friendly steering group. Being the person whose papers hold up is a durable career asset, and it comes almost entirely from doing the unglamorous parts properly.",
  ],

  coreConcepts: [
    {
      term: "Criteria before options, every time",
      explain:
        "Write and agree what you are judging on before anybody has seen the shortlist. Once the options are visible, people build criteria, in complete good faith, that describe the one they already liked.",
      detail:
        "If you inherit a process where the options came first, you can still recover it. Write the criteria from the need rather than from the option descriptions, and get them agreed before scoring starts.",
    },
    {
      term: "A criterion has to tell the options apart",
      explain:
        "Something every option satisfies tells you nothing and eats weighting. Meets our security requirements is usually a pass-or-fail requirement, not something to score.",
      detail:
        "Split them properly. Pass or fail requirements eliminate. Criteria rank. Mixing the two is how an option that fails a legal requirement ends up coming second rather than being thrown out.",
    },
    {
      term: "Agree the weightings before you score anything",
      explain:
        "Get the decision maker to agree what matters most before any option is scored. The weightings are a statement about what the business values, and they should be arguable on their own.",
      detail:
        "A useful trick: make the weightings add up to a fixed total so raising one means lowering another. Unconstrained weighting produces everything at eight or nine out of ten and no ability to tell anything apart.",
    },
    {
      term: "Write down what each score is based on",
      explain:
        "Next to every score, one line saying what it rests on: a demonstration against your own cases, a conversation with an existing customer, a documented figure, or something the salesperson said.",
      detail:
        "This column changes behaviour more than any method. It makes visible how much of your evaluation rests on sales material, which is usually far more than the people scoring realise.",
    },
    {
      term: "Cost it over five years, not up to launch",
      explain:
        "Licence, setup, connecting it to other systems, moving the data, training, your own staff's time, running and supporting it, upgrades, and getting out. Then apply realistic growth.",
      detail:
        "Your own people's time is the omission that most distorts these comparisons, because no invoice arrives and it is very real. An option that swallows six months of your best operations people is not cheap.",
    },
    {
      term: "Price what happens when it is wrong",
      explain:
        "What does it cost when this option gets something wrong? A modest error rate is fine when a person checks before anything irreversible happens, and dangerous when every output is a commitment.",
      detail:
        "Ask of each option: what does it do without a human checking, how easily can each of those be undone, and what would the worst plausible run of errors cost before somebody noticed?",
    },
    {
      term: "How hard would it be to get out?",
      explain:
        "How difficult is undoing this in eighteen months? Where does your data live, who owns it, what format can you get it out in, and what does the contract require to leave?",
      detail:
        "Two options with similar scores and very different exit costs are not similar options. This is the criterion most consistently left out and most consistently regretted.",
    },
    {
      term: "Judge fit against your cases, not their demonstration",
      explain:
        "Send suppliers your own real cases, including the awkward ones, and ask them to show you those. A standard demonstration shows you the path the product was designed for.",
      detail:
        "Use the ten real cases you tested your design against. How different suppliers handle the two difficult ones tells you more than everything else in the process put together.",
    },
    {
      term: "Setting it up is not free, and changing it is not neutral",
      explain:
        "Every deviation from how a product normally works costs at setup and again at every upgrade. Ask how much of your requirement is met by configuring it and how much needs actual code.",
      detail:
        "The honest question to the business is which of our practices are genuinely distinctive and which are simply what we happen to do. Most businesses find the second group is much bigger than they assumed.",
    },
    {
      term: "Talk to somebody the supplier did not introduce you to",
      explain:
        "The references they give you are chosen. Find a business using the product that the supplier did not put you in touch with, and ask what they wish they had known.",
      detail:
        "Ask existing customers two specific things: what took longer than expected, and what does your team complain about now? Both produce far more useful answers than any general satisfaction question.",
    },
    {
      term: "Find out what would flip the answer",
      explain:
        "Take the top two options and find the smallest change in assumptions that reverses the result. If nudging one criterion by two points flips it, say so.",
      detail:
        "This is honest and it protects you. When a decision is genuinely close, saying so out loud is much better than presenting a false margin that somebody later discovers was built on one contested weighting.",
    },
    {
      term: "Write the decision down",
      explain:
        "What was chosen, what was rejected, why, what it rests on, and what would cause it to be looked at again.",
      detail:
        "In two years the people asking why on earth we bought this will not have been in the room. One page is the difference between a decision that can be explained and one that looks inexplicable.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The error rate was acceptable and the failure mode was not.",
      walkthrough:
        "Zillow Offers used a model to price homes the company bought and resold. Competing on speed meant committing to offers quickly, and the model did not anticipate how far and fast prices would move. It bought above what the properties could later be sold for, and the error built up across thousands of transactions before it showed in the accounts.",
      result:
        "The company announced roughly $304 million of inventory write-down in the third quarter of 2021 and wound the business down. For anyone comparing options, the transferable point is about what a scoring sheet does not capture. Accuracy was being scored. How hard it would be to undo was not. Whenever an option acts without a person checking, add a criterion for what the worst plausible run of errors would cost before anybody noticed, and give it real weight.",
      source: {
        label: "Zillow Group Q3 2021 results and plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "illustration",
      scenario: "The criterion that decided it, which nobody had thought of.",
      walkthrough:
        "The problem: a team was choosing between three case management products and everybody had a favourite from the initial demonstrations. What was happening: the BA insisted on agreeing the criteria and weightings before any further demos. In that session the operations director argued successfully that being able to reassign a batch of work when somebody is off sick was worth more than any reporting feature, because covering absence eats a big part of every week. It got a heavy weighting. Two of the three products handled that awkwardly, which had never come up because nobody had thought to ask.",
      result:
        "What changed: the product that won was not the one that had impressed people on sight. The thing that decided it came from an operational reality that a feature-led evaluation would never have surfaced. Setting criteria first is not administrative tidiness. It is the step that lets the business say what actually matters before anybody gets anchored.",
    },
    {
      kind: "illustration",
      scenario: "Two options, one invoice, completely different costs.",
      walkthrough:
        "The problem: a build option and a buy option were being compared, and the buy option looked more expensive because it had a visible licence fee. What was happening: the BA built a five-year picture including setup, connecting to three internal systems, moving the data, training, and the internal effort each option would consume. The build option needed a big share of the two most experienced developers for a year, plus permanent ownership of maintenance, upgrades and any future legal change.",
      result:
        "What changed: over five years the comparison reversed. What made the difference was not a clever assumption, it was counting internal staff time as a cost. Because nobody invoices for it, it usually shows up as zero, and any comparison of building versus buying that leaves it out is arithmetic in favour of building.",
    },
  ],

  learningPath: [
    {
      title: "Work out the criteria from the need, before seeing options",
      body: "Go back to the need and the ground rules. Turn each into something you could measure or judge. Separate the pass-or-fail requirements from the things you actually score.",
      effort: "Half a day",
      outcome: "Criteria that describe what the business wants rather than what the shortlist happens to offer.",
    },
    {
      title: "Agree the weightings with the decision maker",
      body: "Make them add up to a fixed total so raising one lowers another. Have the argument about what matters now, in the abstract, where it is cheap.",
      effort: "1 hour",
      outcome: "A written record of what the business values, agreed before anybody's preference could shape it.",
    },
    {
      title: "Build the five-year cost picture for every option",
      body: "Licence, setup, connections, moving data, training, your own staff's time, running and supporting, upgrades, getting out. Apply growth. Include doing nothing.",
      effort: "2-3 days",
      outcome: "A comparison that survives finance, and usually at least one reversal of the obvious ranking.",
    },
    {
      title: "Test fit with your own cases",
      body: "Send each supplier or team your ten real cases including the two awkward ones, and require them to demonstrate those specifically rather than their usual script.",
      effort: "1 day per option",
      outcome: "Evidence of fit rather than evidence of how good they are at selling.",
    },
    {
      title: "Score with a source column",
      body: "Every score carries a line saying what it rests on. Mark clearly where the only source is something a salesperson said.",
      effort: "Half a day",
      outcome: "A visible picture of how much of your evaluation is actually evidenced.",
    },
    {
      title: "Work out the failure and exit questions",
      body: "For each option: what does it do without a person checking, how easily can that be undone, what does leaving cost, and where does the data live.",
      effort: "Half a day",
      outcome: "The two criteria most often missing, made explicit.",
    },
    {
      title: "Find what would flip it, then write the decision down",
      body: "Find the smallest change that reverses the top two. Then write one page: what was chosen, what was rejected, why, what it rests on, and what would trigger looking again.",
      effort: "Half a day",
      outcome: "An honest margin and a decision that can be explained to people who were not there.",
    },
  ],

  exercises: [
    {
      title: "Work backwards from a past decision",
      brief:
        "Find a decision your business made in the last two years. Write the criteria that would have had to apply for that option to win. Then ask whether those are the criteria the business would have chosen in advance.",
      success:
        "You can name at least one thing that was implicitly weighted heavily and would not have survived being written down beforehand.",
      time: "2 hours",
    },
    {
      title: "Add one row: our own time",
      brief:
        "Take any current comparison and add a single row: internal staff days consumed over five years, by role. Estimate it with whoever manages those people rather than on your own.",
      success:
        "The comparison changes materially, or you can explain convincingly why it does not.",
      time: "2-3 hours",
    },
    {
      title: "What would flip it?",
      brief:
        "For a live evaluation, find the smallest single change in a weighting or a score that would reverse the top two. Write one sentence about how confident you are in that specific number.",
      success:
        "You can say honestly whether your recommendation is solid or marginal, and you have said so in the paper.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Setting criteria after seeing the options",
      why: "People write criteria, sincerely, that describe the option they already prefer. The sheet then produces a number that confirms a decision it did not inform.",
      fix: "Work out the criteria from the need and agree them before the shortlist is visible. If that ship has sailed, do it from the need anyway and ignore the option descriptions.",
    },
    {
      mistake: "Mixing pass-or-fail requirements with things you score",
      why: "An option that fails a legal or contractual requirement gets a low score on one row and stays in the comparison, where its other strengths can carry it.",
      fix: "Apply the pass-or-fail requirements first. Only options that pass every one get scored at all.",
    },
    {
      mistake: "Costing only up to launch",
      why: "Setup is a minority of what something costs over its life. Comparisons made on it favour whichever option pushes the most cost past the decision point, which is a property of how things get sold rather than of the product.",
      fix: "Five years including your own people's time, upgrades and getting out, with growth applied.",
    },
    {
      mistake: "Treating your own people's time as free",
      why: "No invoice arrives so it shows as zero, which systematically favours building and underestimates every option that eats operational staff.",
      fix: "Estimate internal days by role with the managers who own those people, and price them at a rate finance recognises.",
    },
    {
      mistake: "Judging on the supplier's demonstration",
      why: "You are watching a rehearsed route through the product's strongest area. It tells you almost nothing about your awkward cases, which is where fit is actually decided.",
      fix: "Send your own real cases in advance and require them to be demonstrated, including the two hardest.",
    },
    {
      mistake: "Ignoring how hard it is to get out",
      why: "Two options with equal scores can have completely different exit costs. The one that holds your data in a format only it can read has quietly bought a decade of your future decisions.",
      fix: "Make exit cost, who owns the data, and what format you can extract it in explicit criteria with real weight.",
    },
    {
      mistake: "Presenting a margin that is not really there",
      why: "A recommendation that looks decisive but rests on one contested weighting will be found out eventually, and that discredits the whole paper rather than the one row.",
      fix: "Work out what would flip it and say plainly when a decision is close. Close decisions are common and saying so builds trust.",
    },
    {
      mistake: "Not writing the decision down",
      why: "Two years later nobody remembers what was rejected or why, so the same options get proposed again and the original constraints get argued from scratch.",
      fix: "One page: chosen, rejected, why, what it rests on, and what would trigger looking again.",
    },
  ],

  bestPractices: [
    "Work out criteria from the need before any option is visible.",
    "Separate pass-or-fail requirements from the things you score.",
    "Agree weightings, adding up to a fixed total, before scoring.",
    "Put a source line against every score and flag anything that is just a sales claim.",
    "Cost five years including your own people's time and getting out.",
    "Include doing nothing in the cost comparison.",
    "Test fit with your own real cases, including the awkward ones.",
    "Ask what each option does without a person checking, and how easily that can be undone.",
    "Price the worst plausible run of errors before anybody notices.",
    "Speak to a customer the supplier did not introduce you to.",
    "Work out what would flip the top two and report the margin honestly.",
    "Write a one-page record with what it rests on and what would trigger a rethink.",
  ],

  proTips: [
    "Ask each supplier what their product is bad at. The ones who answer specifically are almost always the better long-term partner, because you are going to find out anyway and the only question is whether you find out now or in month seven. Vague answers here have predicted trouble for me more reliably than any reference call.",
    "Get the person who will use the system every day into the demonstration and give them the keyboard. Ten minutes of somebody trying to complete a real task tells you things no scoring sheet will, and their reaction is the closest thing to a preview of whether people will actually use it.",
    "When comparing building against buying, ask who will own this in three years. Building is frequently championed by people who will have moved on, and the maintenance lands on a team who had no say. Making the future owner visible during the decision changes the conversation, usually for the better.",
    "Keep the criteria and weightings document dated and unedited after it is agreed. If somebody wants to change a weighting after seeing the scores, that is legitimate but it has to be a visible amendment with a reason, not a quiet edit. That trail is the only thing keeping a scoring exercise honest under pressure.",
  ],

  businessApplications: [
    "Choosing software, where doing criteria first is the difference between an evaluation and a justification.",
    "Deciding whether to build or buy, where your own people's time is the missing number that decides the answer.",
    "Outsourcing decisions, where how hard it is to get out matters more than the price comparison.",
    "Capital investment, where a five-year picture is expected and the failure-mode analysis usually is not.",
    "Choosing between changing a process and changing a system, where the cheap answer is often the unglamorous one.",
    "Merging duplicate systems after an acquisition, where writing the decision down matters because both sides will contest it later.",
  ],

  checklist: [
    "Criteria worked out from the need and agreed before options were visible.",
    "Pass-or-fail requirements separated and applied first.",
    "Weightings agreed with the decision maker and adding to a fixed total.",
    "Five-year cost picture complete for every option, including doing nothing.",
    "Internal staff time estimated by role and priced.",
    "Exit cost, data ownership and extraction format assessed.",
    "Fit tested against your own real cases, including two awkward ones.",
    "What happens when it is wrong assessed and weighted.",
    "Every score carries a source line.",
    "At least one customer contacted that the supplier did not supply.",
    "What would flip the top two worked out and the margin stated honestly.",
    "One-page decision record written with what it rests on and a trigger for revisiting.",
  ],

  faqs: [
    {
      q: "Are scoring sheets worth using at all?",
      a: "Yes, if the order is right and the weightings are agreed before scoring. The sheet is not the analysis, it is a way of recording it. Used after a decision it is theatre, and everybody in the room can tell.",
    },
    {
      q: "How do I compare a process change against a system?",
      a: "On the same criteria, worked out from the need. Process options usually win on cost and speed and lose on scale and being able to prove what happened. Forcing them into the same comparison is exactly the point, because otherwise the cheap option never gets a look in.",
    },
    {
      q: "What if the sponsor overrules the analysis?",
      a: "That is their job and sometimes they know something you do not. Record what you recommended, what was decided and the stated reason. You are accountable for the choice being informed, not for it going your way.",
    },
    {
      q: "How many options should get a detailed look?",
      a: "Three, or four at most. Detailed evaluation is expensive, and beyond four the work gets thin across all of them, which is worse than a shallower comparison of the two that were ever really in contention.",
    },
    {
      q: "How do I estimate five years of cost when nobody will give me numbers?",
      a: "Use ranges and present them as ranges. Somewhere between two and three times the licence fee, with the reasoning shown, is far more useful than a precise number that is wrong, and it is honest about what you know.",
    },
    {
      q: "Should the BA make the recommendation?",
      a: "Usually yes, clearly, with the reasoning and how close it was. A paper that presents options with no view forces the decision maker to do the analysis, which was the part you were asked to do.",
    },
  ],

  tools: [
    { name: "A dated criteria and weightings sheet", what: "Agreed before scoring and only ever amended visibly. The thing that keeps an evaluation honest.", cost: "Free" },
    { name: "A five-year cost picture", what: "A spreadsheet. The hard part is being honest about internal time and exit, not the modelling.", cost: "Varies" },
    { name: "Your own demonstration cases", what: "Ten real cases including two awkward ones, sent in advance and required to be shown.", cost: "Free" },
    { name: "A one-page decision record", what: "Chosen, rejected, why, what it rests on, what would trigger a rethink. The most reused document you will write.", cost: "Free" },
  ],

  resources: [
    { title: "Zillow Group Q3 2021 results", kind: "Docs", note: "Primary source on what happens when an option's failure mode is not priced. Read it as a criteria problem rather than a modelling one.", url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx" },
  ],

  internalLinks: [
    { slug: "designing-the-future-state", anchor: "coming up with the options in the first place", context: "Before evaluation" },
    { slug: "writing-a-business-case", anchor: "turning the chosen option into a funded case", context: "Next step" },
    { slug: "choosing-an-ai-vendor", anchor: "choosing a supplier specifically", context: "Procurement" },
  ],

  relatedGuides: ["designing-the-future-state", "writing-a-business-case", "choosing-an-ai-vendor"],

  conclusion: [
    "Before your next evaluation goes any further, write the criteria and weightings down and get them agreed while the options are still out of sight. It takes an afternoon, it is the one step that decides whether the rest of the exercise means anything, and it is almost always skipped.",
  ],
};

export default guide;
