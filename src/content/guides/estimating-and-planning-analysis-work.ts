import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "estimating-and-planning-analysis-work",
  seoTitle: "Why Analysis Always Takes Longer Than You Said",
  metaDescription:
    "You estimate your own effort. What decides the duration is other people's availability and how long decisions take here. How to plan for the second thing.",
  title: "Why Analysis Always Takes Longer Than You Said",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "Estimates for analysis are wrong in a consistent direction, and the reason is structural rather than optimism. When you estimate a piece of work, you estimate your own effort: the conversations, the drawing, the writing. What actually decides how long it takes is other people's availability, how long it takes to get access to data, and how long a decision takes to come back. None of those are yours to control and all of them dominate the total.",
    "That produces the familiar situation where something estimated at three weeks takes eight, every individual task took roughly as long as expected, and nobody can point at where the time went. It went into waiting, and waiting was not in the plan because waiting is not work.",
    "This guide is about planning honestly: separating your own effort from how long it will actually take, spotting the things with long waits before you need them, sizing work whose shape you cannot yet see, and reporting progress on something that genuinely looks like nothing is happening for days at a time.",
  ],

  whyItMatters: [
    "Analysis sits at the front of everything, so it absorbs the schedule pressure of the whole project. When it overruns, the usual response is to squeeze it rather than move the end date, and squeezed analysis is how a team ends up building something confidently wrong.",
    "There is also a credibility loop. Somebody whose estimates keep getting exceeded gets less time on the next project, which makes the next estimate worse. Breaking that loop is worth real effort, and it is mostly about estimating the right thing rather than estimating more accurately.",
    "And planning is how you protect the part of the job with no visible output. Uninterrupted time is what turns twelve contradictory conversations into one picture, and it is the first thing to disappear when a plan contains only meetings and documents.",
  ],

  coreConcepts: [
    {
      term: "Your own effort and how long it takes are two different numbers",
      explain:
        "Three days of your effort spread across three weeks because of other people's diaries is a three-week task. Giving only the effort figure and letting somebody assume the duration is where most of these arguments start.",
      detail:
        "Quote both, explicitly, with the reason for the gap. Six days of my effort, four weeks overall, because the operations manager has two hours a week available and the data request takes ten working days.",
    },
    {
      term: "The waiting dominates, so find it first",
      explain:
        "Access to data, security approval, an outside company replying, a specialist being available, a decision that has to wait for a monthly meeting. These are queues you join, not tasks you do.",
      detail:
        "Make the list of things with long waits the first thing you produce, and start every one of those requests on day one, before you know exactly what you will need. Asking early and imprecisely costs much less than asking late and precisely.",
    },
    {
      term: "How long decisions take here is a planning number",
      explain:
        "How long does this business take to answer a question? Measure it rather than assuming. If the answer is two weeks, then a piece of work needing five decisions one after another has ten weeks of waiting in it regardless of your effort.",
      detail:
        "That single measurement changes plans more than any estimating technique. It also gives you a concrete argument for a faster route, expressed in weeks rather than as a request for cooperation.",
    },
    {
      term: "Estimate one phase at a time",
      explain:
        "You cannot estimate the writing before you have done the finding out, because the finding out decides how much there is to write. Estimate the next phase properly and give a range for the ones after it.",
      detail:
        "Say explicitly that the later figures are ranges and when they will be firmed up. One confident number for work whose shape is unknown is not an estimate, it is a commitment made on no information.",
    },
    {
      term: "Size it by the things that actually predict effort",
      explain:
        "How many groups of people you have to talk to, how many end-to-end journeys, how many systems, how many connections, and how many decisions need somebody outside the team.",
      detail:
        "Those predict effort far better than a feeling about complexity. Two processes across five departments is much more work than five processes inside one, and counting the boundaries makes that visible before you commit.",
    },
    {
      term: "Use your own history rather than a rule of thumb",
      explain:
        "Keep a record of what analysis actually took: your effort, how long it took overall, how many groups of people, how many systems. After three or four pieces of work you have a calibration nobody else can give you.",
      detail:
        "Published percentages for how much of a project should be analysis vary so widely they are close to useless. Your own last four projects in this business are far better evidence.",
    },
    {
      term: "Put the thinking time in the plan",
      explain:
        "The hours alone with the mess, turning contradictory accounts into one picture, are the part that produces value and the part that appears in nobody's calendar.",
      detail:
        "Block it and name it in the plan. Time that is not in the plan gets taken, and it gets taken first because nothing visible fails when it disappears.",
    },
    {
      term: "Expect to be wrong about scope, and say by how much",
      explain:
        "Give a range with the assumption behind it. Six to nine weeks, and the difference is whether the pricing rules turn out to be written down anywhere.",
      detail:
        "Naming the uncertainty turns a future overrun into a conversation today. It also points attention at the thing you should be resolving first, which is usually exactly that assumption.",
    },
    {
      term: "Report questions answered, not activities done",
      explain:
        "Analysis has long stretches with nothing to show. Reporting what you did makes it look like nothing is happening. Reporting what you found out makes the progress visible.",
      detail:
        "Two of our five questions are answered, the third is proving difficult and here is why. That is readable to a sponsor and it surfaces trouble in week three rather than week eight.",
    },
    {
      term: "Keep a note of time spent waiting",
      explain:
        "Days lost waiting for access, decisions or people. Record them as they happen, with what you were waiting for.",
      detail:
        "This is the single most useful thing to have for the conversation about why analysis takes longer than planned, and it is far more persuasive collected as it happens than reconstructed afterwards.",
    },
    {
      term: "Being shared across projects costs more than the arithmetic",
      explain:
        "Somebody split across three projects loses more than a third of their capacity to switching between them, and the loss is invisible in any plan that allocates by percentage.",
      detail:
        "Where splitting is unavoidable, argue for splitting by phase rather than by day: finding out on one project while another is being built. Two finding-out phases at once is the arrangement that fails most reliably.",
    },
    {
      term: "Say what you will not do at that level of effort",
      explain:
        "If the time available is half what you estimated, do not quietly deliver half the quality. Say what will be covered, what will not, and what risk that carries.",
      detail:
        "That turns an under-resourcing decision into an informed one. Scaling the work down is the sponsor's call to make, and it should be made openly rather than absorbed by you.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Three weeks of effort, eight weeks on the calendar.",
      walkthrough:
        "The problem: a BA estimated three weeks for a piece of work and it took eight. What was happening: each individual task took roughly what was expected. Reviewing it afterwards, the data access request took twelve working days, one key person was on leave for two weeks, three questions needed a decision from a meeting that happens monthly, and two conversations got rescheduled twice.",
      result:
        "What changed: the effort estimate had been accurate and the duration estimate did not exist, because nobody had asked for one. Quoting both numbers with the reason for the gap would have produced a completely different plan and no argument at the end. Effort is what you control. How long it takes is what people are actually asking about.",
    },
    {
      kind: "illustration",
      scenario: "Measuring how long decisions take here.",
      walkthrough:
        "The problem: a project overran and the reasons were disputed. What was happening: the BA went back through the record and measured how long each question took to get an answer, from asking to a decision being recorded. The middle figure was close to two weeks, and anything needing more than one department was substantially longer. The project had contained several of those, one after another.",
      result:
        "What changed: presenting that figure changed the next project's plan and, more usefully, produced an agreed fast route for a defined kind of question. The argument worked because it was a measurement rather than a complaint. How long decisions take is a property of a business, it is measurable, and almost nobody measures it.",
    },
    {
      kind: "illustration",
      scenario: "The plan with no thinking time in it.",
      walkthrough:
        "The problem: a schedule contained conversations, sessions and documents, all sensibly ordered. What was happening: it contained no blocks for the work of turning twelve contradictory accounts into one picture. As pressure built, that happened in evenings and gaps, and the resulting picture had holes in it that turned up during the build as developer questions.",
      result:
        "What changed: the invisible work was invisible in the plan, so it was the first thing squeezed and nothing visibly failed when it went. Naming it as a scheduled block is what protects it. If your plan contains only meetings and documents, it does not contain the analysis.",
    },
  ],

  learningPath: [
    {
      title: "List the things with long waits before anything else",
      body: "Data access, security approval, outside companies replying, specialists, decision meetings and how often they happen. Start every one of those on day one, before you know exactly what you need.",
      effort: "2 hours",
      outcome: "The queues you are in start moving immediately rather than in week three.",
    },
    {
      title: "Measure how long decisions take in your business",
      body: "Go back through a recent project and measure the time from a question being asked to a decision being recorded. Get the typical figure and the spread, and note which kinds take longest.",
      effort: "Half a day",
      outcome: "A planning number, and a concrete argument for a faster route expressed in weeks.",
    },
    {
      title: "Size the work by counting boundaries",
      body: "Groups of people, end-to-end journeys, systems, connections, and decisions needing somebody outside the team. These predict effort better than any feeling about complexity.",
      effort: "2 hours",
      outcome: "An estimate built on countable things you can show somebody.",
    },
    {
      title: "Quote effort and duration separately, with the reason",
      body: "Both numbers, every time, with the specific thing that creates the gap. Never let somebody infer the duration from an effort figure.",
      effort: "Part of estimating",
      outcome: "The argument at the end of the work does not happen.",
    },
    {
      title: "Estimate the next phase and give ranges for the rest",
      body: "The next one properly, the ones after as a range with the assumption behind them, and a stated date when they will be firmed up.",
      effort: "1 hour",
      outcome: "Honest commitments rather than confident numbers about unknown work.",
    },
    {
      title: "Block the thinking time by name",
      body: "Not just conversations and deliverables. Explicit blocks for the reconciling and drawing work, labelled so they do not get treated as free space.",
      effort: "30 minutes",
      outcome: "Protection for the part of the job that produces the value and shows nothing.",
    },
    {
      title: "Report questions answered and note time spent waiting",
      body: "Weekly progress against the agreed questions, plus a running note of days lost waiting and what for.",
      effort: "20 minutes a week",
      outcome: "Visible progress on invisible work, and evidence for the resourcing conversation.",
    },
    {
      title: "Keep your own estimating history",
      body: "For each piece of work: estimated and actual effort, estimated and actual duration, how many groups of people, how many systems, how many decisions. Review after each project.",
      effort: "30 minutes per project",
      outcome: "Calibration specific to you and this business, which no rule of thumb can give you.",
    },
  ],

  exercises: [
    {
      title: "Measure how long decisions take",
      brief:
        "Take a recent project and find ten questions that needed an answer from outside the team. Measure the days from asking to a decision being recorded. Work out the typical figure and note the slowest kind.",
      success:
        "You have a typical figure and can name which kinds of question take longest, which is directly usable in your next plan.",
      time: "Half a day",
    },
    {
      title: "Split effort from duration",
      brief:
        "Take something you are planning and estimate it twice: once as your own effort in days, and once as how long it will actually take given the availability, waits and decision speed you really face. Write the reason for the gap.",
      success:
        "The two numbers differ substantially and you can explain the difference to a sponsor in one sentence.",
      time: "1 hour",
    },
    {
      title: "Keep a waiting log for four weeks",
      brief:
        "For the next four weeks, record every day or part-day spent waiting for access, a decision or a person, and what you were waiting for. Total it at the end.",
      success:
        "You have a record made as it happened rather than reconstructed, and a number you can put in front of somebody who controls one of those queues.",
      time: "Minutes a day for four weeks",
    },
  ],

  mistakes: [
    {
      mistake: "Estimating your effort and letting people hear a duration",
      why: "The gap between the two is created by availability and waits, which are not yours to control, and the overrun gets blamed on your estimating.",
      fix: "Quote both numbers explicitly every time, with the specific thing that creates the difference.",
    },
    {
      mistake: "Not finding the long waits on day one",
      why: "Access requests and approvals are queues. Joining them in week three rather than week one adds their full length to the end of the work.",
      fix: "Produce the list of long waits before anything else and start every request immediately, even imprecisely.",
    },
    {
      mistake: "Ignoring how long decisions take here",
      why: "A plan assuming questions get answered in days, in a business where they take two weeks, is wrong by weeks before it even starts.",
      fix: "Measure it from a past project and use the real figure. It also gives you an evidenced argument for a faster route.",
    },
    {
      mistake: "One confident number for unknown work",
      why: "You cannot estimate the writing before the finding out has established how much there is to write. The number becomes a commitment made on no information.",
      fix: "Estimate the next phase properly, give ranges for the rest, and say when the ranges will be firmed up.",
    },
    {
      mistake: "A plan containing only meetings and documents",
      why: "The reconciling and drawing work is invisible, so it gets squeezed first and nothing visibly fails when it does. The holes show up later as developer questions.",
      fix: "Block the thinking time explicitly and name it in the plan.",
    },
    {
      mistake: "Using published percentages for how long analysis should take",
      why: "The ranges quoted vary so widely they provide no useful constraint, and they take no account of how your specific business works.",
      fix: "Keep your own history of estimated versus actual across four or five pieces of work. It will beat any external figure.",
    },
    {
      mistake: "Accepting being split across two finding-out phases at once",
      why: "Switching between them costs more than the arithmetic suggests, and two finding-out phases at the same time is the arrangement that fails most reliably.",
      fix: "Argue for splitting by phase rather than by day: finding out on one while another is being built.",
    },
    {
      mistake: "Quietly absorbing under-resourcing",
      why: "You deliver reduced quality without anybody deciding to accept it, and the consequence lands during the build as gaps nobody expected.",
      fix: "Say what will be covered at the available effort, what will not, and what risk that carries. Let the sponsor decide.",
    },
  ],

  bestPractices: [
    "Quote your effort and the duration separately, with the reason for the gap.",
    "Produce the list of long waits first and start those requests on day one.",
    "Measure how long decisions take here and use the real figure.",
    "Size by counting boundaries: groups of people, journeys, systems, connections, outside decisions.",
    "Estimate the next phase properly and give ranges for the rest.",
    "Name the assumption behind the range.",
    "Block uninterrupted thinking time explicitly in the plan.",
    "Report progress as questions answered, not activities done.",
    "Note time spent waiting as it happens, with what you were waiting for.",
    "Keep your own estimating history and review it after each project.",
    "Resist two finding-out phases at once; split by phase instead.",
    "Say explicitly what will not be covered at a reduced level of effort.",
  ],

  proTips: [
    "Ask for data access on the first day of any piece of work, before you know precisely what you will want. A vague early request that gets refined later costs you a follow-up conversation. A precise late one costs you the entire wait, which in most businesses is weeks rather than days.",
    "When somebody asks how long analysis will take, ask them two things before answering: how quickly can I get decisions, and how much time will the operations people give me. Then estimate in front of them using their answers. It turns your estimate into a shared one built from their constraints, and the conversation about resourcing happens immediately rather than at the end.",
    "Keep the waiting log even on projects going well. It costs a minute a day and it is the only evidence that exists for a conversation everybody has eventually. Reconstructed afterwards it sounds like an excuse. Collected as it happens it is a measurement.",
    "Review your own estimates against what actually happened after every piece of work, and look for your personal bias rather than for a general lesson. Mine was consistently underestimating how long it takes to get a decision out of a group rather than an individual, and knowing that specifically has been worth more than any technique I have learned.",
  ],

  businessApplications: [
    "Project planning, where analysis sits at the front and absorbs the whole schedule's pressure.",
    "Finding-out phases, where the fixed end has to account for access and decision waits.",
    "Planning people across a portfolio, where BA capacity routinely gets allocated by percentage.",
    "Supplier projects, where your side's analysis effort is real and absent from their price.",
    "Consulting and contract work, where the estimate is commercial and the duration is what gets quoted.",
    "Business cases, where the cost of the analysis itself has to be stated honestly.",
  ],

  checklist: [
    "List of long waits produced and every request started.",
    "How long decisions take measured or estimated from real history.",
    "Work sized by counting boundaries.",
    "Effort and duration quoted separately with the reason.",
    "Next phase estimated properly; later ones given as ranges.",
    "Assumption behind the range named.",
    "Uninterrupted thinking time blocked and named in the plan.",
    "Weekly reporting framed as questions answered.",
    "Time spent waiting noted as it happens.",
    "Splitting across projects arranged by phase where possible.",
    "Any reduced-effort scenario documented with what is excluded.",
    "Estimating history updated at the end of the work.",
  ],

  faqs: [
    {
      q: "How much of a project should analysis be?",
      a: "Published figures vary so widely they provide no useful constraint. Your own last four projects in this business are much better evidence, which is why keeping a history is worth the half hour per project it costs.",
    },
    {
      q: "How do I estimate the finding-out phase when I do not know what I will find?",
      a: "Give it a fixed end against a set of agreed questions rather than estimating to completion. Four to eight weeks is a common shape, and the honest commitment is to answer as much as possible in that window and report what is still open.",
    },
    {
      q: "What do I do when the time given is half what I estimated?",
      a: "Say what will be covered at that level, what will not, and what risk the gap carries. Do not quietly deliver reduced quality. Scaling the work down is a legitimate decision and it is the sponsor's to make openly.",
    },
    {
      q: "How much of my time should be uninterrupted?",
      a: "Enough to make sense of what you have gathered, which for most substantial pieces means at least a day a week in blocks rather than gaps. Name it in the plan, because unnamed time gets taken first and nothing visibly fails when it goes.",
    },
    {
      q: "How do I justify analysis time to a sponsor who wants to start building?",
      a: "Use the question of what happens when the team builds the wrong thing, sized against this specific project. Abstract arguments about the cost of defects do not land. A concrete example from this business usually does.",
    },
    {
      q: "Can a BA work on more than one project at once?",
      a: "Yes, if the phases are staggered rather than simultaneous: finding out on one while another is being built. Two finding-out phases at once is the arrangement that fails most reliably, because both need the deep uninterrupted work at the same time.",
    },
  ],

  tools: [
    { name: "A list of things with long waits", what: "Data access, approvals, outside parties, specialists, decision meetings. Produced first, started on day one.", cost: "Free" },
    { name: "A measurement of how long decisions take", what: "Days from question asked to decision recorded, from a past project. The planning number almost nobody has.", cost: "Free" },
    { name: "A waiting log", what: "Written as it happens. A measurement rather than an excuse.", cost: "Free" },
    { name: "Your own estimating history", what: "Estimated versus actual effort and duration, with counts of people and systems. Beats any published rule of thumb.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "running-a-discovery-phase", anchor: "giving the phase this plans a fixed end", context: "Discovery" },
    { slug: "capacity-and-volume-analysis", anchor: "the same arithmetic applied to a team", context: "Related technique" },
    { slug: "stakeholder-management-in-practice", anchor: "getting the time this plan assumes", context: "Access" },
  ],

  relatedGuides: ["running-a-discovery-phase", "capacity-and-volume-analysis", "stakeholder-management-in-practice"],

  conclusion: [
    "Take a recent project and measure how long ten questions took from being asked to having a recorded answer. That typical figure is the most useful planning number you can have in this business, almost nobody has measured it, and it will change your next estimate more than any technique will.",
  ],
};

export default guide;
