import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "running-a-discovery-phase",
  seoTitle: "Running a Discovery Phase That Earns Its Keep",
  metaDescription:
    "How to shape and timebox discovery, what it should produce, how to tell a real discovery from a delayed start, and why stopping at the end is a legitimate result.",
  title: "Running a Discovery Phase",
  keywords: [
    "discovery phase",
    "business analysis discovery",
    "project discovery process",
    "timeboxing discovery",
    "discovery outputs",
    "pre-project analysis",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "Discovery has two failure modes and they look nothing alike. The first is that it does not happen: somebody has already decided what to build and the analysis is a formality performed in the two weeks before development starts. The second is that it never ends, because there is no agreed question, so every answer produces another one and six months later there is a very thorough document and no decision.",
    "Both come from the same omission. Nobody wrote down what discovery is for. A discovery phase is not a period of time during which analysis occurs. It is an attempt to answer a specific set of questions well enough that somebody can make a funding decision with their eyes open, and it should end when those questions are answered or when it becomes clear they cannot be.",
    "This guide is how to shape one: what to agree before it starts, what the weeks actually contain, what it should produce, and how to end it cleanly, including the version where the honest recommendation is not to proceed.",
  ],

  whyItMatters: [
    "The cost of building the wrong thing is not just the build. It is the build, the disruption of implementing it, the support burden, the opportunity cost of what else the team could have done, and the political cost of the next proposal being harder to fund because the last one did not work.",
    "Discovery is also the cheapest phase to be wrong in. A misunderstanding corrected in week three of discovery costs a conversation. The same misunderstanding corrected in acceptance testing costs a rebuild, and after go-live it usually costs nothing because it never gets fixed at all.",
    "And it is the phase where a BA has the most influence per hour. Once a solution is chosen and a team is assembled, the questions become detailed and the direction is set. Discovery is the window in which the direction itself is still a question.",
  ],

  coreConcepts: [
    {
      term: "Write the questions discovery must answer, before it starts",
      explain:
        "Three to six of them, specific enough that you could tell whether they have been answered. Is this problem real and how large is it? What causes it? Which options exist? What would each cost? What is the risk of doing nothing?",
      detail:
        "This one page is the difference between a discovery and a period of exploration. It also gives you the only honest basis for saying discovery is finished, which otherwise becomes a matter of somebody's patience running out.",
    },
    {
      term: "Timebox it, and say what happens when the box ends",
      explain:
        "Four to eight weeks is a common shape for a substantial problem. The GOV.UK Service Manual states that around four to eight weeks is typical for a discovery, and that guidance has held up well in commercial settings too.",
      detail:
        "The important part is what happens at the end. Agree in advance that the box ends with a decision meeting, and that arriving with partial answers plus an honest account of what is still unknown is an acceptable outcome. Otherwise the box slips silently.",
    },
    {
      term: "Discovery is not design and it is definitely not build",
      explain:
        "The moment somebody starts building in discovery, the question stops being what should we do and becomes how do we finish what has been started.",
      detail:
        "Prototypes are fine and valuable, provided everybody understands they are questions rather than foundations. The test is whether the thing could be thrown away without anybody minding. If it could not, you are in build.",
    },
    {
      term: "The three streams that run in parallel",
      explain:
        "Problem (is it real, how big, what causes it), context (how the work actually happens, who is affected, what constrains us), and option (what could be done, roughly what each costs).",
      detail:
        "Running them in sequence takes three times as long and produces a worse answer, because context discovered in week six changes how you framed the problem in week one. Run all three from the start and let each correct the others.",
    },
    {
      term: "Front-load the thing most likely to kill the idea",
      explain:
        "Every proposal has one assumption that, if false, makes the whole thing pointless. The data exists. The regulator will accept it. The team will use it. Customers want it.",
      detail:
        "Name it in week one and test it first. Discovery that spends five weeks on careful process mapping and then discovers in week six that the required data was never captured has spent five weeks well and answered the question in the wrong order.",
    },
    {
      term: "Go and look, early and often",
      explain:
        "Interviews tell you intent. Observation tells you behaviour. A discovery conducted entirely in meeting rooms produces a description of the process as management believes it runs.",
      detail:
        "My rule is that no discovery is credible until somebody on the team has watched the work being done, and has followed at least one real case from beginning to end.",
    },
    {
      term: "Get the numbers in the first fortnight",
      explain:
        "Volume, frequency, duration, error rate, cost. These take elapsed time to obtain, either because access has to be arranged or because a tally has to run for two weeks.",
      detail:
        "Request data access on day one, before you know exactly what you will ask for. The lead time on access is the most common reason a discovery finishes with an unsized problem, and an unsized problem cannot be prioritised or funded.",
    },
    {
      term: "Keep a visible parked list",
      explain:
        "Everything interesting that is not one of your questions goes on a list on the wall rather than into the work.",
      detail:
        "This is how you protect the timebox without dismissing people. It also becomes a genuinely useful artefact: half of what gets parked turns out to belong to somebody else's project, and passing it on is free value.",
    },
    {
      term: "Report progress as answered questions, not as activities",
      explain:
        "Twelve interviews completed tells a sponsor nothing. Two of our five questions are answered, the third is looking difficult and here is why, tells them everything.",
      detail:
        "This framing also protects you. When a discovery is genuinely blocked, the report makes it visible in week three rather than in week eight, when it is somebody's problem rather than a surprise.",
    },
    {
      term: "The output is a decision pack, not a document",
      explain:
        "Problem with a size on it, cause, options with rough costs, a recommendation, the risks, and what is still unknown. Ten pages at most, with a one-page summary that stands alone.",
      detail:
        "Anything that requires a two-hour walkthrough to be understood will be decided on by people who did not attend the walkthrough. Write for the person who has four minutes.",
    },
    {
      term: "Say what you did not find out",
      explain:
        "An explicit section listing what remains unknown, what it would take to find out, and what the risk is of proceeding without knowing.",
      detail:
        "This section is what makes a discovery credible. Every experienced sponsor knows that six weeks does not resolve everything, and a pack that implies otherwise reads as either naive or evasive.",
    },
    {
      term: "Stopping is a legitimate result",
      explain:
        "The GOV.UK Service Manual puts this directly: it is not a failure to stop at the end of the discovery phase if the research shows that is the best thing to do.",
      detail:
        "Recommending against proceeding is the highest-value output a discovery can produce, because it costs the price of a discovery and saves the price of a project. It is also remembered, in a good way, by the people who approve budgets.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A published definition of what discovery is for and how long it takes.",
      walkthrough:
        "The GOV.UK Service Manual sets out how a discovery phase works for government services. It states that there is no set time period for a discovery but that around four to eight weeks is typical, that the team should understand user needs, the wider journey, and constraints including legislation, technology and process, and that you should not start building your service in discovery.",
      result:
        "It also states that discovery ends with a decision about whether to proceed, and that it is not a failure to stop at the end of discovery if the research shows that is the best thing to do. That last sentence is the one worth borrowing wholesale into commercial work, where the implicit assumption is usually that discovery precedes a project rather than deciding whether there should be one.",
      source: {
        label: "GOV.UK Service Manual: how the discovery phase works",
        url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
      },
    },
    {
      kind: "illustration",
      scenario: "The killer assumption, tested in week one.",
      walkthrough:
        "A discovery is commissioned into automating a pricing decision that currently takes an experienced person several minutes per case. Before mapping anything, the BA writes down the assumption the whole idea rests on: that the factors the experienced person uses are recorded somewhere. She spends two days profiling the data and interviewing three pricers about what they actually look at. Two of the five factors are not in any system, and one of them is a judgement about the customer relationship that nobody has ever written down.",
      result:
        "The discovery continued, but with a completely different question: what would a decision support tool look like that handles the three recorded factors and presents the case cleanly for a human judgement on the other two. Two days of work redirected six weeks of it. Finding the killer assumption first is not a technique so much as a habit, and it is the highest-return habit in this phase.",
    },
    {
      kind: "illustration",
      scenario: "The discovery that never ended.",
      walkthrough:
        "A discovery into an order management problem starts with no written questions. Each interview raises a new area, each area seems relevant, and the scope expands from the ordering process into pricing, then into product data, then into the customer master. Four months in, the analysis is genuinely excellent and there is no recommendation, because there is no longer a bounded problem for a recommendation to address.",
      result:
        "What was missing was one page of questions agreed at the start, plus a parked list to catch everything else without absorbing it. Both take an hour to produce. Scope discipline in discovery is not about doing less analysis, it is about knowing which analysis is answering the question you were funded to answer.",
    },
  ],

  learningPath: [
    {
      title: "Agree the questions and the timebox",
      body: "Three to six specific questions, a start and end date, and an agreed decision meeting at the end. Get the sponsor to sign up to the fact that a partial answer plus an honest gap list is an acceptable outcome.",
      effort: "Half a day plus a conversation",
      outcome: "A discovery with a definition of done, which is the thing most discoveries lack.",
    },
    {
      title: "Request data access on day one",
      body: "Before you know exactly what you will ask for. Access has a lead time and it is the most common reason discoveries end with an unsized problem.",
      effort: "1 hour of requesting, days or weeks of waiting",
      outcome: "The ability to size the problem while there is still time to act on the answer.",
    },
    {
      title: "Name and test the killer assumption",
      body: "The one thing that, if false, makes the whole idea pointless. Write it down in week one and design the fastest possible test for it.",
      effort: "2-3 days",
      outcome: "Either confidence to proceed, or a redirected discovery five weeks earlier than it would otherwise have been.",
    },
    {
      title: "Run problem, context and option streams together",
      body: "Observation and interviews for context, data for size, and a rolling list of options as they emerge. Do not wait until the problem is fully understood before thinking about options.",
      effort: "2-4 weeks",
      outcome: "Three views that correct each other, rather than a sequence that has to be redone.",
    },
    {
      title: "Report weekly as answered questions",
      body: "Which of the agreed questions are answered, which are in progress, which look difficult. Never a list of activities completed.",
      effort: "30 minutes a week",
      outcome: "A sponsor who can see trouble in week three rather than week eight.",
    },
    {
      title: "Build the decision pack",
      body: "Sized problem, cause, options with rough costs, recommendation, risks, and an explicit list of what remains unknown. One-page summary written last.",
      effort: "2-3 days",
      outcome: "Something a decision can be taken from without a two-hour walkthrough.",
    },
    {
      title: "Hold the decision meeting and close the phase",
      body: "Present, recommend, and get a decision recorded: proceed, proceed with a narrower scope, do more work on one specific question, or stop. Then close it.",
      effort: "2 hours",
      outcome: "A clean end, which is what separates a discovery from a permanent state.",
    },
  ],

  exercises: [
    {
      title: "Write the questions for something already running",
      brief:
        "Take a piece of analysis currently under way in your organisation and write the three to six questions it is trying to answer. Then ask two people involved to do the same, independently, and compare.",
      success:
        "You can say whether the people doing the work agree on what it is for. If the lists differ materially, you have found the reason it feels open-ended.",
      time: "1 hour",
    },
    {
      title: "The killer assumption test",
      brief:
        "For any proposal you are currently involved in, write the single assumption that would make the whole idea pointless if false. Then design the cheapest possible test of it and estimate how long that test would take.",
      success:
        "You have named one assumption and a test that could be run in under a week, and you can say whether anyone has actually checked it.",
      time: "1 hour",
    },
    {
      title: "Rewrite a status report",
      brief:
        "Take any project status report and rewrite it as answered questions rather than completed activities. Keep it to one page.",
      success:
        "The rewritten version makes at least one problem visible that the original obscured, and you would be comfortable sending it to a sponsor.",
      time: "45 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Starting without written questions",
      why: "Every interesting finding becomes in scope, because there is no basis for saying it is not. The discovery expands until somebody's patience runs out, which is not the same as being finished.",
      fix: "Three to six specific questions agreed with the sponsor before day one, plus a visible parked list for everything else.",
    },
    {
      mistake: "Treating discovery as the start of the project",
      why: "If proceeding is assumed, the analysis is not really testing anything and the sponsor is paying for a delay rather than a decision.",
      fix: "Agree explicitly at the outset that not proceeding is one of the available outcomes, and that it is a successful one when the evidence supports it.",
    },
    {
      mistake: "Building something during discovery",
      why: "Once code exists, the question changes from what should we do to how do we finish this, and the sunk cost argument arrives immediately.",
      fix: "Prototypes only, and only where everybody understands they will be discarded. If nobody would be willing to throw it away, it is not a prototype.",
    },
    {
      mistake: "Testing the easy assumptions first",
      why: "You spend the timebox on careful work and discover the fatal problem in the final week, when there is no time to change direction.",
      fix: "Name the assumption that would kill the idea and test it first, even if the test is crude.",
    },
    {
      mistake: "Leaving data access until you need it",
      why: "Access takes days or weeks to arrange. Requesting it in week four means the problem is unsized at the end, and an unsized problem cannot be funded.",
      fix: "Request read access on day one, before you know precisely what you will ask of it.",
    },
    {
      mistake: "Running the streams in sequence",
      why: "Context found in week six invalidates the problem framing from week one, and you redo work you have already paid for.",
      fix: "Run problem, context and option work in parallel from the start, and let each correct the others.",
    },
    {
      mistake: "Reporting activity instead of answers",
      why: "A sponsor reading about interviews completed cannot tell whether the discovery is going well, so they find out it was not at the end.",
      fix: "Report against the agreed questions every week, including the ones that are proving difficult.",
    },
    {
      mistake: "A pack with no unknowns section",
      why: "It implies six weeks resolved everything, which no experienced sponsor believes, so the whole pack reads as either naive or evasive.",
      fix: "State explicitly what you did not find out, what it would take to find out, and the risk of proceeding without it.",
    },
  ],

  bestPractices: [
    "Agree three to six specific questions before discovery starts.",
    "Timebox it, and agree what happens when the box ends.",
    "Establish that not proceeding is an acceptable outcome.",
    "Name the killer assumption in week one and test it first.",
    "Request data access on day one.",
    "Run problem, context and option streams in parallel.",
    "Observe real work, and follow at least one real case end to end.",
    "Keep a visible parked list for everything out of scope.",
    "Report weekly against the questions, never against activities.",
    "Produce a ten-page decision pack with a standalone one-page summary.",
    "Include an explicit section on what remains unknown.",
    "Close the phase with a recorded decision.",
  ],

  proTips: [
    "In the first week, ask five different people what they think this discovery is for and write the answers side by side. The variation is always larger than anybody expects, and showing that page to the sponsor is frequently the most useful thing you do in the whole phase. It also gets your written questions agreed very quickly.",
    "Book the closing decision meeting on day one, with the sponsor and the actual decision makers, before you know what you will be presenting. A meeting in the diary creates a real deadline, and a discovery without a real deadline drifts by default rather than by decision.",
    "Keep a running one-page summary from week one and update it every Friday. By the end you will have written the pack incrementally instead of in a panic, and more importantly you will notice in week three that the summary is not yet saying anything, which is exactly when that is still fixable.",
    "When somebody senior tries to add a new area mid-discovery, do not refuse. Ask which of the agreed questions they would like to drop to make room, and show them the list. Almost nobody drops one, and the request usually converts itself into a parked item without any confrontation.",
  ],

  businessApplications: [
    "Pre-project analysis where the organisation needs to decide whether to fund something at all.",
    "Vendor evaluation, where discovery establishes what you need before anybody demonstrates what they sell.",
    "Problem investigations commissioned after a complaint or an incident, where the shape of the answer is genuinely unknown.",
    "Annual planning, where several candidate initiatives need enough analysis to be compared honestly.",
    "Merger integration, where the first question is what each organisation actually does before anything is combined.",
    "Regulatory change, where discovery establishes what a new obligation means for this specific operation.",
  ],

  checklist: [
    "Three to six discovery questions written and agreed with the sponsor.",
    "Timebox set with start and end dates.",
    "Closing decision meeting booked with the real decision makers.",
    "Not proceeding established explicitly as an acceptable outcome.",
    "Killer assumption named and tested first.",
    "Data access requested on day one.",
    "At least one real case followed end to end by observation.",
    "Problem sized with real numbers.",
    "Options identified with rough costs.",
    "Parked list maintained and visible.",
    "Weekly reporting framed as answered questions.",
    "Decision pack under ten pages with a standalone summary.",
    "Explicit unknowns section written.",
    "Decision recorded and the phase formally closed.",
  ],

  faqs: [
    {
      q: "How long should a discovery phase be?",
      a: "Four to eight weeks is typical for a substantial problem, and the GOV.UK Service Manual uses the same range. What matters more than the number is that the box has an agreed end and a decision meeting attached to it.",
    },
    {
      q: "What if the sponsor has already decided?",
      a: "Test their decision properly and first, because it is often right. Then present one genuine alternative with the difference stated plainly. You are making the decision informed rather than trying to overturn it.",
    },
    {
      q: "Who should be in a discovery team?",
      a: "A BA, somebody technical who can tell you what is cheap and expensive here, and access to people who do the work. A designer where the interface matters. Small is better: discovery slows down with headcount rather than speeding up.",
    },
    {
      q: "Can we build a prototype during discovery?",
      a: "Yes, if it is genuinely disposable and everyone agrees it is a question rather than a foundation. The moment somebody suggests keeping it because it already works, discovery has ended and nobody has noticed.",
    },
    {
      q: "What do I do if discovery shows the problem is not worth solving?",
      a: "Say so, clearly, with the evidence. It is the highest-value result a discovery can produce and it costs a fraction of finding out later. Sponsors remember analysts who told them not to spend money far more warmly than most people expect.",
    },
    {
      q: "How is discovery different from a business case?",
      a: "Discovery produces the evidence. The business case is one possible output of it, written once you know there is something worth proposing. Writing the case first and then doing discovery to support it is the failure mode this phase exists to prevent.",
    },
  ],

  tools: [
    { name: "A one-page question list", what: "Three to six questions with the sponsor's agreement. The definition of done for the whole phase.", cost: "Free" },
    { name: "A parked list on the wall", what: "Everything interesting that is not one of your questions. Protects the timebox without dismissing anybody.", cost: "Free" },
    { name: "Read access to the data", what: "Requested on day one because of the lead time. Without it the problem ends up unsized.", cost: "Varies" },
    { name: "A rolling one-page summary", what: "Updated weekly from week one. Writes the pack incrementally and shows you early when you have nothing to say.", cost: "Free" },
  ],

  resources: [
    { title: "GOV.UK Service Manual: how the discovery phase works", kind: "Docs", note: "The clearest public statement of what a discovery is for, how long it takes, and why stopping at the end is a legitimate result.", url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works" },
  ],

  internalLinks: [
    { slug: "learning-a-business-fast", anchor: "building context during the phase", context: "During discovery" },
    { slug: "symptom-versus-problem", anchor: "checking the problem is the real one", context: "Problem stream" },
    { slug: "designing-the-future-state", anchor: "turning findings into options", context: "Option stream" },
  ],

  relatedGuides: ["learning-a-business-fast", "symptom-versus-problem", "designing-the-future-state"],

  conclusion: [
    "Write down the three to six questions your current piece of analysis is meant to answer, then ask two colleagues involved in it to do the same without conferring. If the lists differ, and they usually do, you have found in an hour the reason the work feels like it has no end.",
  ],
};

export default guide;
