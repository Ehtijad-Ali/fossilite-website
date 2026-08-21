import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "estimating-and-planning-analysis-work",
  seoTitle: "Estimating and Planning Analysis Work Realistically",
  metaDescription:
    "Why analysis estimates are wrong in a predictable direction, how to plan around access and decision lead times, and how to report progress on work that looks like nothing.",
  title: "Estimating and Planning Analysis Work",
  keywords: [
    "estimating analysis work",
    "business analyst planning",
    "requirements effort estimation",
    "analysis lead time",
    "ba capacity planning",
    "discovery estimation",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Analysis estimates are wrong in a consistent direction, and the reason is structural rather than a matter of optimism. When a BA estimates a piece of work, they estimate their own effort: the interviews, the modelling, the writing. What actually determines the duration is other people's availability, the lead time on data access, and how long a decision takes to come back, none of which are yours to control and all of which dominate the total.",
    "This produces the familiar situation where a piece of analysis estimated at three weeks takes eight, every task in it took roughly as long as expected, and nobody can point to where the time went. It went into waiting, and waiting was not in the plan because it is not work.",
    "This guide is about planning analysis honestly: separating effort from elapsed time, identifying the things with long lead times before you need them, sizing work you cannot yet see the shape of, and reporting progress on activity that genuinely looks like nothing is happening for days at a time.",
  ],

  whyItMatters: [
    "Analysis sits at the front of everything, so it absorbs the schedule pressure of the whole project. When it overruns, the response is usually to compress it rather than to move the end date, and compressed analysis is how a team ends up building something confidently wrong.",
    "There is also a credibility loop. A BA whose estimates are consistently exceeded gets less time allocated on the next project, which makes the next estimate worse. Breaking that loop is worth real effort, and it is mostly about estimating the right thing rather than estimating more accurately.",
    "And planning is where you protect the part of the job that has no visible output. Uninterrupted analysis time is what turns twelve contradictory interviews into one model, and it is the first thing squeezed when a plan contains only meetings and deliverables.",
  ],

  coreConcepts: [
    {
      term: "Effort and elapsed time are different numbers, and you owe both",
      explain:
        "Three days of effort spread across three weeks because of availability is a three-week task. Giving only the effort figure and letting somebody else assume the duration is where most estimating disputes originate.",
      detail:
        "Quote both explicitly every time, with the reason for the gap. Six days of effort, four weeks elapsed, because the operations manager has two hours a week available and the data request takes ten working days.",
    },
    {
      term: "Lead times dominate, so identify them first",
      explain:
        "Data access, security approval, an external party's response, a decision that needs a monthly forum, availability of a specialist. These are queues you join rather than tasks you perform.",
      detail:
        "Make the lead time list the first thing you produce on any piece of work, and start every one of those requests on day one, before you know exactly what you will need. The cost of asking early and imprecisely is much lower than the cost of asking late and precisely.",
    },
    {
      term: "Decision latency is a planning input",
      explain:
        "How long does this organisation take to answer a question? Measure it rather than assuming. If the answer is two weeks, then a piece of analysis needing five sequential decisions has ten weeks of latency in it regardless of the effort.",
      detail:
        "This single measurement changes plans more than any estimating technique. It also gives you a concrete argument for a faster decision route, expressed as weeks rather than as a request for cooperation.",
    },
    {
      term: "Estimate in phases, and re-estimate at each boundary",
      explain:
        "You cannot estimate specification before discovery, because discovery determines how much there is to specify. Estimate the next phase properly and give a range for the ones after it.",
      detail:
        "Say explicitly that the later figures are ranges and when they will be firmed up. A single confident number for work whose shape is unknown is not an estimate, it is a commitment made on no information.",
    },
    {
      term: "Size by the units that actually predict effort",
      explain:
        "Number of stakeholder groups, number of processes end to end, number of systems in scope, number of interfaces, number of decisions needing an owner outside the team.",
      detail:
        "These predict analysis effort far better than a feeling about complexity. Two processes across five departments is much more work than five processes inside one, and counting the boundaries makes that visible before you commit.",
    },
    {
      term: "Use your own history rather than a rule of thumb",
      explain:
        "Keep a record of what analysis actually took: effort, elapsed time, stakeholder count, systems touched. After three or four pieces of work you have a calibration nobody else can give you.",
      detail:
        "Published percentages for analysis as a proportion of project effort vary so widely that they are close to useless. Your own last four projects in this organisation are far better evidence.",
    },
    {
      term: "Plan the analysis time, not just the meetings",
      explain:
        "The hours alone with the mess, turning contradictory accounts into one model, are the part that produces value and the part that appears in no calendar.",
      detail:
        "Block it explicitly and name it in the plan. Time that is not in the plan gets taken, and it is taken first because nothing visible fails when it disappears.",
    },
    {
      term: "Expect to be wrong about scope and say by how much",
      explain:
        "Give a range with the assumption that drives it. Six to nine weeks, and the difference is whether the pricing rules turn out to be documented anywhere.",
      detail:
        "Naming the uncertainty converts a future overrun into a present conversation. It also directs attention to the thing you should be resolving first, which is usually exactly that assumption.",
    },
    {
      term: "Report progress as questions answered",
      explain:
        "Analysis has long stretches with no artefact. Reporting activities makes it look like nothing is happening; reporting answered questions makes the progress visible.",
      detail:
        "Two of our five questions are answered, the third is proving difficult and here is why. That is legible to a sponsor and it surfaces trouble in week three rather than week eight.",
    },
    {
      term: "Track blocked time separately",
      explain:
        "Days lost waiting for access, decisions or people. Record them as they happen, with what was being waited for.",
      detail:
        "This is the single most useful artefact for the conversation about why analysis takes longer than planned, and it is much more persuasive collected prospectively than reconstructed afterwards.",
    },
    {
      term: "Protect against being the shared resource",
      explain:
        "A BA split across three projects loses more than a third of their capacity to context switching, and the loss is invisible in any plan that allocates by percentage.",
      detail:
        "Where splitting is unavoidable, argue for sequencing by phase rather than by day: discovery on one while another is in build. Concurrent discovery on two projects is the arrangement that fails most reliably.",
    },
    {
      term: "Say what you will not do at this level of effort",
      explain:
        "If the time available is half what you estimated, do not silently deliver half the quality. State what will be covered, what will not, and what risk that carries.",
      detail:
        "That converts an under-resourcing decision into an informed one. Scaling the work down is the sponsor's call to make, and it should be made explicitly rather than absorbed by you.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Three weeks of effort, eight weeks of elapsed time.",
      walkthrough:
        "A BA estimates three weeks for a piece of discovery. Each individual task takes roughly what was expected. The work completes in eight weeks. Reviewing what happened: the data access request took twelve working days, one key stakeholder was on leave for two weeks, three questions needed a decision from a forum that meets monthly, and two interviews were rescheduled twice.",
      result:
        "The effort estimate was accurate and the duration estimate did not exist, because nobody had asked for one. Quoting both numbers with the reason for the gap would have produced a completely different plan and no dispute at the end. Effort is what you control; elapsed time is what people are actually asking about.",
    },
    {
      kind: "illustration",
      scenario: "Measuring decision latency.",
      walkthrough:
        "After a project overruns, a BA goes back through the record and measures how long each question took to get an answer, from asking to a decision recorded. The median is close to two weeks, and questions needing more than one department are substantially longer. The project contained several sequential decisions of that kind.",
      result:
        "Presenting that figure changed the next project's plan and, more usefully, produced an agreed fast route for a defined class of question. The argument worked because it was a measurement rather than a complaint. Decision latency is a property of an organisation, it is measurable, and almost nobody measures it.",
    },
    {
      kind: "illustration",
      scenario: "The plan with no thinking time in it.",
      walkthrough:
        "A schedule contains interviews, workshops and document deliverables, all sensibly sequenced. It contains no blocks for the work of reconciling twelve contradictory accounts into one model. As pressure builds, that reconciliation happens in evenings and gaps, and the resulting model has gaps that surface during build as developer questions.",
      result:
        "The invisible work was invisible in the plan, so it was the first thing squeezed and nothing visibly failed when it was. Naming it explicitly, as a scheduled block with a name, is what protects it. If your plan contains only meetings and documents, it does not contain the analysis.",
    },
  ],

  learningPath: [
    {
      title: "List the lead times before anything else",
      body: "Data access, security approval, external responses, specialist availability, decision forums and their cadence. Start every request on day one, before you know exactly what you need.",
      effort: "2 hours",
      outcome: "The queues you are in start running immediately rather than in week three.",
    },
    {
      title: "Measure decision latency in your organisation",
      body: "Go back through a recent project and measure the time from question asked to decision recorded. Get the median and the spread, and note which types take longest.",
      effort: "Half a day",
      outcome: "A planning input, and a concrete argument for a faster route expressed in weeks.",
    },
    {
      title: "Size the work by boundaries",
      body: "Count stakeholder groups, end-to-end processes, systems, interfaces, and decisions needing an owner outside the team. These predict effort better than any feeling about complexity.",
      effort: "2 hours",
      outcome: "An estimate built on countable things you can show somebody.",
    },
    {
      title: "Quote effort and elapsed separately, with the reason",
      body: "Both numbers, every time, with the specific constraint that creates the gap. Never let somebody infer duration from an effort figure.",
      effort: "Included in estimating",
      outcome: "The dispute at the end of the work does not happen.",
    },
    {
      title: "Estimate the next phase and range the rest",
      body: "Discovery properly, specification as a range with the assumption that drives it, and a stated date when it will be firmed up.",
      effort: "1 hour",
      outcome: "Honest commitments rather than confident numbers about unknown work.",
    },
    {
      title: "Block the analysis time by name in the plan",
      body: "Not just interviews and deliverables. Explicit blocks for the reconciliation and modelling work, labelled so they are not treated as free space.",
      effort: "30 minutes",
      outcome: "Protection for the part of the job that produces the value and shows nothing.",
    },
    {
      title: "Report answered questions and track blocked days",
      body: "Weekly progress against the agreed questions, plus a running record of days lost waiting and what for.",
      effort: "20 minutes a week",
      outcome: "Visible progress on invisible work, and evidence for the resourcing conversation.",
    },
    {
      title: "Keep your own estimating history",
      body: "For each piece of work: estimated and actual effort, estimated and actual elapsed, stakeholder groups, systems, decisions. Review after each project.",
      effort: "30 minutes per project",
      outcome: "Calibration specific to you and this organisation, which no rule of thumb can provide.",
    },
  ],

  exercises: [
    {
      title: "Measure your organisation's decision latency",
      brief:
        "Take a recent project and find ten questions that needed an answer from outside the team. Measure the days from asking to a recorded decision. Calculate the median and note the slowest category.",
      success:
        "You have a median figure and can name which types of question take longest, which is directly usable in your next plan.",
      time: "Half a day",
    },
    {
      title: "Split effort from elapsed",
      brief:
        "Take a piece of analysis you are planning and estimate it twice: once as your own effort in days, and once as elapsed time given the availability, lead times and decision cadence you actually face. Write the reason for the gap.",
      success:
        "The two numbers differ substantially and you can explain the difference in one sentence to a sponsor.",
      time: "1 hour",
    },
    {
      title: "The blocked days log",
      brief:
        "For the next four weeks, record every day or part-day spent waiting for access, a decision or a person, and what was being waited for. Total it at the end.",
      success:
        "You have a prospective record rather than a reconstruction, and a number you can put in front of somebody who controls one of those queues.",
      time: "Minutes a day for four weeks",
    },
  ],

  mistakes: [
    {
      mistake: "Estimating effort and letting people hear duration",
      why: "The gap between the two is created by availability and lead times, which are not yours to control, and the overrun gets attributed to your estimating.",
      fix: "Quote both numbers explicitly every time, with the specific constraint that creates the difference.",
    },
    {
      mistake: "Not identifying lead times on day one",
      why: "Access requests and approvals are queues. Joining them in week three rather than week one adds their full duration to the end of the work.",
      fix: "Produce the lead time list before anything else and start every request immediately, even imprecisely.",
    },
    {
      mistake: "Ignoring decision latency",
      why: "A plan assuming questions are answered in days, in an organisation where they take two weeks, is wrong by weeks before it starts.",
      fix: "Measure it from a past project and use the real figure. It also gives you an evidenced argument for a faster route.",
    },
    {
      mistake: "Giving a single confident number for unknown work",
      why: "You cannot estimate specification before discovery has established how much there is to specify. The number becomes a commitment made on no information.",
      fix: "Estimate the next phase properly, range the rest, and say when the ranges will be firmed up.",
    },
    {
      mistake: "A plan containing only meetings and deliverables",
      why: "The reconciliation and modelling work is invisible, so it gets squeezed first and nothing visibly fails when it does. The gaps appear later as developer questions.",
      fix: "Block analysis time explicitly and name it in the plan.",
    },
    {
      mistake: "Using published percentages for analysis effort",
      why: "The ranges quoted vary so widely that they provide no useful constraint, and they take no account of how your specific organisation works.",
      fix: "Keep your own history of estimated versus actual across four or five pieces of work. It will beat any external figure.",
    },
    {
      mistake: "Accepting a split across concurrent discoveries",
      why: "Context switching costs more than the arithmetic suggests, and concurrent discovery on two projects is the arrangement that fails most reliably.",
      fix: "Argue for sequencing by phase rather than by day: discovery on one while another is in build.",
    },
    {
      mistake: "Silently absorbing under-resourcing",
      why: "You deliver reduced quality without anybody deciding to accept it, and the consequence lands during build as gaps nobody expected.",
      fix: "State what will be covered at the available effort, what will not, and what risk that carries. Let the sponsor decide.",
    },
  ],

  bestPractices: [
    "Quote effort and elapsed time separately, with the reason for the gap.",
    "Produce the lead time list first and start those requests on day one.",
    "Measure decision latency and use the real figure.",
    "Size by boundaries: stakeholder groups, processes, systems, interfaces, external decisions.",
    "Estimate the next phase properly and range the rest.",
    "Name the assumption that drives the range.",
    "Block uninterrupted analysis time explicitly in the plan.",
    "Report progress as questions answered, not activities completed.",
    "Track blocked days prospectively, with what was being waited for.",
    "Keep your own estimating history and review it after each project.",
    "Resist concurrent discovery across projects; sequence by phase instead.",
    "State explicitly what will not be covered at a reduced effort level.",
  ],

  proTips: [
    "Request data access on the first day of any piece of work, before you know precisely what you will ask for. A vague early request that gets refined later costs you a follow-up conversation. A precise late one costs you the entire lead time, which in most organisations is measured in weeks rather than days.",
    "When somebody asks how long analysis will take, ask them two questions before answering: how quickly can I get decisions, and how much time will the operations people give me. Then estimate in front of them using their answers. It turns your estimate into a shared one built from their constraints, and the conversation about resourcing happens immediately rather than at the end.",
    "Keep the blocked days log even on projects that are going well. It costs a minute a day and it is the only evidence that exists for a conversation everybody has eventually. Reconstructed afterwards it sounds like an excuse; collected prospectively it is a measurement.",
    "Review your own estimates against actuals after every piece of work, and look for your personal bias rather than for a general lesson. Mine was consistently underestimating how long it takes to get a decision from a group rather than an individual, and knowing that specifically has been worth more than any estimating technique I have learned.",
  ],

  businessApplications: [
    "Project planning, where analysis sits at the front and absorbs the whole schedule's pressure.",
    "Discovery phases, where the timebox has to account for access and decision lead times.",
    "Resource planning across a portfolio, where BA capacity is routinely allocated by percentage.",
    "Vendor projects, where client-side analysis effort is real and absent from the vendor's price.",
    "Consulting and contract work, where the estimate is commercial and elapsed time is what gets quoted.",
    "Business case preparation, where the analysis effort itself is a cost to be stated honestly.",
  ],

  checklist: [
    "Lead time list produced and every request started.",
    "Decision latency measured or estimated from real history.",
    "Work sized by boundaries: stakeholder groups, processes, systems, interfaces, external decisions.",
    "Effort and elapsed time quoted separately with the reason.",
    "Next phase estimated properly; later phases given as ranges.",
    "Assumption driving the range named explicitly.",
    "Uninterrupted analysis time blocked and named in the plan.",
    "Weekly reporting framed as questions answered.",
    "Blocked days logged prospectively.",
    "Concurrency across projects sequenced by phase where possible.",
    "Any reduced-effort scenario documented with what is excluded.",
    "Estimating history updated at the end of the work.",
  ],

  faqs: [
    {
      q: "How long should analysis take as a proportion of a project?",
      a: "Published figures vary so widely that they provide no useful constraint. Your own last four projects in this organisation are much better evidence, which is why keeping an estimating history is worth the half hour per project it costs.",
    },
    {
      q: "How do I estimate discovery when I do not know what I will find?",
      a: "Timebox it against a set of agreed questions rather than estimating to completion. Four to eight weeks is a common shape, and the honest commitment is to answer as much as possible in that window and report what remains open.",
    },
    {
      q: "What do I do when the time given is half what I estimated?",
      a: "State what will be covered at that level, what will not, and what risk the omission carries. Do not silently deliver reduced quality. Scaling the work down is a legitimate decision and it is the sponsor's to make explicitly.",
    },
    {
      q: "How much of my time should be uninterrupted?",
      a: "Enough to reconcile what you have gathered, which for most substantial pieces means at least a day a week in blocks rather than gaps. Name it in the plan, because unnamed time is taken first and nothing visibly fails when it is.",
    },
    {
      q: "How do I justify analysis time to a sponsor who wants to start building?",
      a: "Use the question of what happens when the team builds the wrong thing, sized against this specific project. Abstract arguments about the cost of defects do not land. A concrete example from this organisation usually does.",
    },
    {
      q: "Can a BA work on more than one project at once?",
      a: "Yes, if the phases are sequenced rather than concurrent: discovery on one while another is in build. Two concurrent discoveries is the arrangement that fails most reliably, because both need the deep uninterrupted work at the same time.",
    },
  ],

  tools: [
    { name: "A lead time list", what: "Data access, approvals, external parties, specialist availability, decision forums and their cadence. Produced first, actioned on day one.", cost: "Free" },
    { name: "A decision latency measurement", what: "Days from question asked to decision recorded, from a past project. The planning input almost nobody has.", cost: "Free" },
    { name: "A blocked days log", what: "Prospective record of time spent waiting and what for. A measurement rather than an excuse.", cost: "Free" },
    { name: "Your own estimating history", what: "Estimated versus actual effort and elapsed, with stakeholder and system counts. Beats any published rule of thumb.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "running-a-discovery-phase", anchor: "timeboxing the phase this plans", context: "Discovery" },
    { slug: "capacity-and-volume-analysis", anchor: "the same arithmetic applied to a team", context: "Related technique" },
    { slug: "stakeholder-management-in-practice", anchor: "securing the time this plan assumes", context: "Access" },
  ],

  relatedGuides: ["running-a-discovery-phase", "capacity-and-volume-analysis", "stakeholder-management-in-practice"],

  conclusion: [
    "Take a recent project and measure how long ten questions took to go from being asked to having a recorded answer. That median figure is the single most useful planning input you can have in this organisation, almost nobody has measured it, and it will change your next estimate more than any technique will.",
  ],
};

export default guide;
