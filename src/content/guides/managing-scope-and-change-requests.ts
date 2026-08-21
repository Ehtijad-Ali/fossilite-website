import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "managing-scope-and-change-requests",
  seoTitle: "Managing Scope and Change Requests Without Being the Blocker",
  metaDescription:
    "Why scope grows through reasonable decisions, how to assess a change honestly, what to trade against it, and how to say no in a way that keeps the relationship.",
  title: "Managing Scope and Change Requests",
  keywords: [
    "scope creep",
    "change request process",
    "scope management",
    "change control business analyst",
    "requirements change",
    "impact of change requests",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Scope creep is usually described as a discipline failure, as though projects grow because somebody was not firm enough. That is not what I have seen. Scope grows through a sequence of individually reasonable decisions, each one small, each one approved by somebody sensible, and none of them visibly connected to the date that eventually slips.",
    "The mechanism is almost always the same. A change arrives with a benefit attached and no cost attached, because the cost is diffuse and lands in the future. Nobody is comparing it against what it displaces, because nothing has been named as displaced. Say yes twenty times and you have doubled the project without any single moment where an unreasonable decision was taken.",
    "So the work is not about refusing things. It is about making the trade visible every time, so that each yes is a real decision rather than a default. This guide covers how to establish a baseline worth defending, how to assess a change in a way people trust, how to present the trade, and how to say no without becoming the person everyone routes around.",
  ],

  whyItMatters: [
    "Unmanaged scope is the most common reason competent teams miss dates, and it damages more than the schedule. The parts of the original scope that carried the value get squeezed at the end, because they are usually the hardest, so a project that grew by twenty per cent frequently delivers less of what it was funded for.",
    "It also destroys the credibility of estimates. A team whose estimates are consistently exceeded because scope moved underneath them is assumed to be bad at estimating, and the response is usually more estimation pressure rather than better scope control.",
    "And for a BA there is a positioning question. Handle this badly and you become either a rubber stamp, in which case you add nothing, or an obstacle, in which case people stop telling you about changes and they arrive without analysis. Neither is recoverable quickly.",
  ],

  coreConcepts: [
    {
      term: "You cannot manage change without a baseline",
      explain:
        "A dated, agreed statement of what is in scope, at a level of detail somebody could check against. Without it, every argument about whether something is a change is unwinnable.",
      detail:
        "The baseline does not need to be a heavy document. A list of capabilities with their identifiers, dated and agreed, does the job. What it must be is specific enough that reasonable people would agree whether a given request is inside it.",
    },
    {
      term: "Three kinds of change, and only one of them is creep",
      explain:
        "Discovery, where analysis reveals a genuine need nobody knew about. Correction, where an agreed requirement turns out to be wrong. Addition, where somebody wants something new.",
      detail:
        "Discovery and correction are normal and healthy, and treating them as failures teaches people to hide them. Addition is the one that needs a trade. Classifying each request into one of the three changes the conversation immediately.",
    },
    {
      term: "Every change has four costs, and three are invisible",
      explain:
        "The build effort, the analysis and testing effort, the effect on everything already in progress, and the delay to whatever it displaces.",
      detail:
        "The third is the one people underestimate most. A change to something already specified and partly built costs far more than the same change made a month earlier, and that difference should be stated rather than absorbed.",
    },
    {
      term: "Assess against the need, not against the effort",
      explain:
        "The first question is which business need this serves, not how long it will take. A change serving no stated need is a preference, however small it is.",
      detail:
        "This is why traceability earns its keep. Where every requirement carries its parent need, a change request can be tested in about thirty seconds, and the conversation stays analytical rather than becoming a negotiation about estimates.",
    },
    {
      term: "Present the trade, never the refusal",
      explain:
        "The useful sentence is: we can do this, and here is what moves. Not no. A trade is a decision somebody can take. A refusal is a position they will argue with or bypass.",
      detail:
        "Have the displaced item identified before the conversation. Asking what should we drop in the abstract produces nothing. Saying this would displace the reporting work, are you comfortable with that, produces an answer.",
    },
    {
      term: "Batch small changes, because they are how scope actually grows",
      explain:
        "Individually trivial requests are approved individually and never assessed collectively. Twenty of them is a significant piece of work that nobody decided to do.",
      detail:
        "Keep a running total of approved changes as a percentage of the original estimate and report it. Making the aggregate visible is far more effective than resisting each item.",
    },
    {
      term: "Distinguish a change from a defect honestly",
      explain:
        "A defect is where the build does not match what was agreed. A change is where what was agreed turns out to have been wrong. Both are legitimate and they have different funding routes.",
      detail:
        "Resist relabelling your own specification errors as change requests. It is visible to everyone involved, it damages trust, and it suppresses the feedback you needed about why the requirement was wrong.",
    },
    {
      term: "Late changes cost more, and the curve is steep",
      explain:
        "The same request costs a conversation during specification, a rebuild during development, and a change request plus a release after go-live.",
      detail:
        "Say this explicitly rather than assuming people know it. A stakeholder who understands that waiting two weeks to raise something multiplies its cost will raise things earlier, which is the actual goal.",
    },
    {
      term: "Some changes should be accepted immediately",
      explain:
        "Regulatory obligations, anything that would make the delivered thing unusable, and corrections to your own analysis errors. Process these fast and visibly.",
      detail:
        "Being quick and helpful on the changes that clearly should happen buys the credibility you need on the ones that should not. A BA who says yes rapidly when yes is right is heard differently when they say this will displace something.",
    },
    {
      term: "Record what was rejected, and why",
      explain:
        "A rejected changes list with reasons is the document people return to most often, because the same idea reappears every few months with a different sponsor.",
      detail:
        "It also protects requesters. Somebody whose request is recorded, assessed and declined with a reason has been treated seriously, which is quite different from a request that quietly disappeared.",
    },
    {
      term: "Scope reduction is a change too",
      explain:
        "When something is dropped, record it with the same rigour as an addition: what was removed, why, what need is now unmet, and who accepted that.",
      detail:
        "Otherwise the project is judged at the end against the original scope by people who were not in the meeting where it shrank, which is a bad conversation to have without a record.",
    },
    {
      term: "Freeze late, and say when",
      explain:
        "A stated point after which only defects and regulatory changes are accepted, agreed in advance rather than imposed when the date is already at risk.",
      detail:
        "Freezes announced under pressure feel arbitrary and get overridden. Freezes agreed at the start feel like a plan, and they give you something to point at that is not your own judgement.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Twenty small yeses.",
      walkthrough:
        "A project accepts a series of minor additions over four months. Each is approved by a sensible person on reasonable grounds, and each is genuinely small. Nobody tracks the aggregate. When the date is missed, the post-mortem attributes it to underestimation. A BA later totals the approved changes against the original estimate and finds they represent a substantial fraction of the original scope.",
      result:
        "No individual decision was wrong and the outcome was a missed date and a team assumed to be poor at estimating. The fix is a running total reported alongside progress. Making the aggregate visible does more to control scope than resisting any individual request, and it does not require anybody to be the blocker.",
    },
    {
      kind: "illustration",
      scenario: "The trade that took ninety seconds.",
      walkthrough:
        "A director asks for an addition to a system in build. Rather than assessing it in isolation, the BA comes back with two lines: this is about two weeks of work, and the only thing in the current scope of comparable size is the exception handling for the bulk upload path. Which would you rather have by the launch date?",
      result:
        "The director chose the exception handling without hesitation, and the addition went to a later phase where it was eventually dropped. Nobody had to refuse anything and no relationship was damaged. Identifying the displaced item before the conversation is what turns an argument about scope into a decision about priority.",
    },
    {
      kind: "illustration",
      scenario: "The change that was really a defect.",
      walkthrough:
        "During acceptance testing, the business finds that the system cannot handle a case where a customer holds two accounts. The project logs it as a change request, since the requirement did not mention it. The BA reviews the original elicitation notes and finds the case was described in an interview and not carried into the specification.",
      result:
        "It was logged honestly as an analysis error rather than a change, which cost the project a difficult conversation and produced something more useful: a check of whether the same category of case had been missed elsewhere, which it had, in two places. Relabelling would have protected a number and lost both the trust and the pattern.",
    },
  ],

  learningPath: [
    {
      title: "Establish and date the baseline",
      body: "A list of capabilities with identifiers, agreed and dated. Specific enough that two reasonable people would agree whether a given request is inside it.",
      effort: "Half a day",
      outcome: "The thing without which no change conversation can be settled.",
    },
    {
      title: "Set up a lightweight change log",
      body: "Request, requester, date, classification, need served, effort, what it displaces, decision, decision maker, date. One row per request.",
      effort: "1 hour",
      outcome: "A record that makes both individual trades and the aggregate visible.",
    },
    {
      title: "Classify every incoming request",
      body: "Discovery, correction or addition. Do this first, before assessing effort, because it determines the whole conversation.",
      effort: "Minutes per request",
      outcome: "Healthy changes processed quickly and additions routed to a trade conversation.",
    },
    {
      title: "Assess against the need before the effort",
      body: "Which business need does this serve? A request serving no stated need is a preference, and that finding is more useful than an estimate.",
      effort: "Minutes per request",
      outcome: "A defensible basis for the conversation that is not about your opinion.",
    },
    {
      title: "Identify the displaced item before you present",
      body: "Never ask what should we drop in the abstract. Come with a specific candidate of comparable size and ask which the sponsor would rather have.",
      effort: "1 hour per significant request",
      outcome: "A decision rather than a negotiation.",
    },
    {
      title: "Report the running total every fortnight",
      body: "Approved changes as a percentage of the original estimate, alongside progress. Make the aggregate part of routine reporting rather than a special escalation.",
      effort: "15 minutes a fortnight",
      outcome: "Scope growth that is visible while it can still be acted on.",
    },
    {
      title: "Agree the freeze point at the start",
      body: "A date after which only defects and regulatory changes are accepted. Agreed while nobody is under pressure, so it does not read as arbitrary later.",
      effort: "15 minutes",
      outcome: "Something to point at that is not your own judgement.",
    },
  ],

  exercises: [
    {
      title: "Total the changes",
      brief:
        "Take any project in your organisation that has been running for a few months. Add up every approved change and express it as a percentage of the original estimate. Compare that against the schedule slippage.",
      success:
        "You have a number, and you can say whether the project's date problem is an estimation problem or a scope problem.",
      time: "2 hours",
    },
    {
      title: "Classify a month of requests",
      brief:
        "Take the last month of change requests on any project and classify each as discovery, correction or addition. Count each category.",
      success:
        "You can say what proportion is genuine addition, which is usually much smaller than people assume, and what proportion is analysis catching up.",
      time: "1 hour",
    },
    {
      title: "Find the displaced item",
      brief:
        "Take one live change request and identify a specific item of comparable size in the current scope that it would displace. Write the two-line trade you would present.",
      success:
        "You have a sentence a sponsor could answer in under a minute, naming both options rather than asking an open question.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Having no baseline",
      why: "Without a dated, agreed statement of scope, every argument about whether something is a change comes down to memory and seniority, and the more senior memory wins.",
      fix: "Agree a dated capability list specific enough to check against. It need not be heavy, only unambiguous.",
    },
    {
      mistake: "Treating all changes as failure",
      why: "Discovery and correction are how analysis improves. Punishing them teaches people to conceal what they have found, and it arrives later and worse.",
      fix: "Classify into discovery, correction and addition, and process the first two quickly and without blame.",
    },
    {
      mistake: "Assessing changes individually and never in aggregate",
      why: "Twenty trivial approvals is a significant project nobody decided to do, and it only becomes visible when the date slips.",
      fix: "Report approved changes as a running percentage of the original estimate alongside normal progress reporting.",
    },
    {
      mistake: "Saying no instead of presenting a trade",
      why: "A refusal is a position to be argued with or bypassed. It also makes you the obstacle, after which changes start arriving without analysis.",
      fix: "Always present what moves. We can do this and it displaces that, which would you rather have.",
    },
    {
      mistake: "Asking what should we drop without a candidate",
      why: "Nobody can prioritise in the abstract, so the question produces nothing and the change gets absorbed by default.",
      fix: "Identify a specific item of comparable size before the conversation and name it.",
    },
    {
      mistake: "Relabelling analysis errors as change requests",
      why: "It is transparent to everybody involved, it damages trust disproportionately, and it hides the pattern that would have told you where else the same gap exists.",
      fix: "Log them honestly, then check whether the same category of case has been missed elsewhere.",
    },
    {
      mistake: "Not recording rejected changes",
      why: "The same request returns every few months with a new sponsor, and the whole discussion runs again from the start.",
      fix: "Keep the rejected list with reasons. It is the most reused document you will maintain.",
    },
    {
      mistake: "Announcing a freeze when the date is already at risk",
      why: "It reads as arbitrary and defensive, so it gets overridden by anybody senior enough, which teaches everyone that the freeze is negotiable.",
      fix: "Agree the freeze point at the start of the project, in writing, while everybody is relaxed.",
    },
  ],

  bestPractices: [
    "Agree and date a baseline specific enough to check requests against.",
    "Classify every request as discovery, correction or addition.",
    "Process discovery and correction quickly and without blame.",
    "Assess against the business need before assessing effort.",
    "Cost all four impacts, including disruption and displacement.",
    "Identify the displaced item before presenting any trade.",
    "Present a trade, never a refusal.",
    "Report approved changes as a running percentage of the original estimate.",
    "Distinguish defects from changes honestly, including your own errors.",
    "Say plainly that late changes cost more, so people raise things earlier.",
    "Accept regulatory and usability-critical changes fast and visibly.",
    "Record rejected changes with reasons.",
    "Record scope reductions with the same rigour as additions.",
    "Agree the freeze point at the start.",
  ],

  proTips: [
    "When a change request arrives, ask what has changed since we agreed the original. Sometimes the answer is that the world moved, which is a legitimate reason and worth knowing. Often the answer is that somebody has only just properly imagined the thing, which means your specification was not concrete enough for them to react to, and that is a finding about your own practice rather than about their discipline.",
    "Keep a note of who raises the most changes and look for a pattern rather than a culprit. Usually one team generates a disproportionate share, and usually it is because they were consulted late, or because their part of the process was specified from a manager's description rather than an operator's. The fix is upstream, not in the change process.",
    "Be visibly fast on the changes that obviously should happen. Approving something correct within a day buys you far more credibility than any amount of process rigour, and it is what makes people accept a trade conversation on the ones that are genuinely marginal.",
    "Put the running scope total in the same report as the progress figures, not in a separate escalation. When they sit side by side, the relationship between them becomes obvious to everybody reading, and you never have to make the argument yourself.",
  ],

  businessApplications: [
    "Fixed-date delivery, where every accepted change displaces something and the trade is unavoidable.",
    "Fixed-price vendor contracts, where change control carries direct commercial consequences.",
    "Regulatory programmes, where some changes are non-negotiable and everything else must give way.",
    "Multi-team programmes, where a change in one team's scope has knock-on effects nobody sees.",
    "Long-running product development, where the baseline is a rolling agreement rather than a fixed one.",
    "Post-merger integration, where scope grows continuously as each side discovers what the other does.",
  ],

  checklist: [
    "Dated baseline agreed and specific enough to check against.",
    "Change log in place with classification and displacement columns.",
    "Every request classified as discovery, correction or addition.",
    "Each request tested against a stated business need.",
    "All four costs assessed, including disruption to work in progress.",
    "A specific displaced item identified before presenting any trade.",
    "Decision, decision maker and date recorded for every request.",
    "Running total of approved change reported alongside progress.",
    "Defects and changes distinguished honestly.",
    "Rejected changes recorded with reasons.",
    "Scope reductions recorded with the unmet need named.",
    "Freeze point agreed at project start.",
  ],

  faqs: [
    {
      q: "How do I say no without damaging the relationship?",
      a: "Do not say no. Say what it would displace and let them choose. A trade keeps you analytical and keeps the decision with the person who owns priority, which is where it belongs anyway.",
    },
    {
      q: "What if the sponsor approves every change?",
      a: "Then report the aggregate every fortnight against the original estimate and the date. Sponsors approving individually are usually unaware of the total, and the total is what changes their behaviour rather than any individual conversation.",
    },
    {
      q: "Is scope change a sign of bad analysis?",
      a: "Some of it. Discovery and correction are normal and healthy, and a project with none is probably one where nobody is looking. What indicates weak analysis is the same category of gap appearing repeatedly, which is why classifying requests is worth the minutes it takes.",
    },
    {
      q: "How does this work in agile delivery?",
      a: "The mechanism differs and the arithmetic does not. Priority order replaces a fixed scope, so the trade is explicit by design: adding something means something else moves down. The failure mode is a backlog that grows faster than it is delivered while everybody believes it is all still coming.",
    },
    {
      q: "Who should approve changes?",
      a: "Whoever owns the priority and the budget, which is usually the sponsor. The BA's job is to classify, assess and present the trade. If you are approving changes yourself, you have taken on a decision that is not yours and will be blamed for it later.",
    },
    {
      q: "What do I do when a change arrives after the freeze?",
      a: "Assess it anyway and route it to the agreed exception path: defects and regulatory items in, everything else to the next phase. Applying the freeze consistently is what makes it mean anything, including the times when it is inconvenient for you.",
    },
  ],

  tools: [
    { name: "A dated baseline", what: "Capabilities with identifiers, agreed. Light enough to maintain, specific enough to check requests against.", cost: "Free" },
    { name: "A change log with a displacement column", what: "Request, classification, need served, effort, what it displaces, decision, decision maker, date.", cost: "Free" },
    { name: "A running scope total", what: "Approved change as a percentage of the original estimate, reported alongside progress rather than separately.", cost: "Free" },
    { name: "A rejected changes list", what: "With reasons. The most reused document you will keep, because the same ideas return.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "turning-business-needs-into-requirements", anchor: "the traceability that makes assessment fast", context: "Foundation" },
    { slug: "impact-assessment-before-a-change", anchor: "assessing what a change touches", context: "Assessment" },
    { slug: "stakeholder-management-in-practice", anchor: "handling the conversation itself", context: "Negotiation" },
  ],

  relatedGuides: ["turning-business-needs-into-requirements", "impact-assessment-before-a-change", "stakeholder-management-in-practice"],

  conclusion: [
    "Total up every approved change on your current project and express it as a percentage of the original estimate, then put that number next to the progress figures in your next report. You will not have to make the argument about scope. The two numbers sitting side by side will make it for you.",
  ],
};

export default guide;
