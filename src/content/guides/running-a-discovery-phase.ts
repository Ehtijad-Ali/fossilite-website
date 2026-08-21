import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "running-a-discovery-phase",
  seoTitle: "Running the Work That Happens Before a Project",
  metaDescription:
    "How to shape and end the finding-out phase, what it should produce, how to tell a real one from a delayed start, and why deciding not to proceed is a good result.",
  title: "The Work That Happens Before a Project",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Finding out before you build has two failure modes and they look nothing alike. The first is that it does not happen: somebody has already decided what to build and the analysis is a formality in the two weeks before development starts. The second is that it never ends, because there is no agreed question, so every answer produces another one and six months later there is a very thorough document and no decision.",
    "Both come from the same omission. Nobody wrote down what this phase is for. It is not a period of time during which analysis happens. It is an attempt to answer a specific set of questions well enough that somebody can make a funding decision with their eyes open, and it should end when those questions are answered or when it becomes clear they cannot be.",
    "This guide is how to shape one: what to agree before it starts, what the weeks actually contain, what it should produce, and how to end it cleanly, including the version where the honest recommendation is not to proceed.",
  ],

  whyItMatters: [
    "The cost of building the wrong thing is not just the building. It is the building, the disruption of putting it in, the support burden, everything else the team could have done instead, and the fact that the next proposal is harder to fund because the last one did not work.",
    "This is also the cheapest phase to be wrong in. A misunderstanding corrected in week three costs a conversation. The same misunderstanding corrected during testing costs a rebuild, and after go-live it usually costs nothing because it never gets fixed at all.",
    "And it is where a BA has the most influence per hour. Once a solution is chosen and a team is assembled, the questions get detailed and the direction is set. This is the window where the direction itself is still a question.",
  ],

  coreConcepts: [
    {
      term: "Write down the questions this has to answer, before it starts",
      explain:
        "Three to six of them, specific enough that you could tell whether they have been answered. Is this problem real and how big is it? What is causing it? What options exist? What would each cost? What happens if we do nothing?",
      detail:
        "That one page is the difference between finding something out and wandering about. It is also the only honest basis for saying you are finished, which otherwise comes down to somebody's patience running out.",
    },
    {
      term: "Give it a fixed end, and say what happens then",
      explain:
        "Four to eight weeks is a common shape for a substantial problem. The GOV.UK Service Manual says around four to eight weeks is typical, and that has held up well in commercial settings too.",
      detail:
        "The important part is what happens at the end. Agree in advance that it ends with a decision meeting, and that turning up with partial answers plus an honest account of what is still unknown is an acceptable result. Otherwise the end date slips quietly.",
    },
    {
      term: "This is not designing and it is definitely not building",
      explain:
        "The moment somebody starts building, the question stops being what should we do and becomes how do we finish what has been started.",
      detail:
        "Rough mock-ups are fine and useful, as long as everybody understands they are questions rather than foundations. The test is whether the thing could be thrown away without anybody minding. If it could not, you are building.",
    },
    {
      term: "Three things running at the same time",
      explain:
        "The problem, is it real and how big and what causes it. The context, how the work actually happens, who is affected, what constrains us. And the options, what could be done and roughly what each costs.",
      detail:
        "Doing them one after another takes three times as long and produces a worse answer, because something you learn about the context in week six changes how you framed the problem in week one. Run all three from the start and let each correct the others.",
    },
    {
      term: "Check the thing that would sink it first",
      explain:
        "Every proposal rests on one assumption that, if wrong, makes the whole thing pointless. The data exists. The regulator will accept it. People will use it. Customers want it.",
      detail:
        "Name it in week one and check it first. Spending five weeks carefully mapping a process and then discovering in week six that the data was never captured is five weeks spent well and the questions answered in the wrong order.",
    },
    {
      term: "Go and look, early and often",
      explain:
        "Interviews tell you what people intend. Watching tells you what they do. Something conducted entirely in meeting rooms produces a description of the process as management believes it runs.",
      detail:
        "My rule is that none of this is credible until somebody has watched the work being done and followed at least one real case from beginning to end.",
    },
    {
      term: "Get the numbers in the first fortnight",
      explain:
        "How many, how often, how long, error rate, cost. These take time to obtain, either because access has to be arranged or because somebody has to keep a tally for two weeks.",
      detail:
        "Ask for access on day one, before you know exactly what you will want. Access lead time is the most common reason this finishes with an unsized problem, and an unsized problem cannot be prioritised or funded.",
    },
    {
      term: "Keep a visible parked list",
      explain:
        "Everything interesting that is not one of your questions goes on a list on the wall rather than into the work.",
      detail:
        "This is how you hold the end date without dismissing anybody. It also becomes genuinely useful: half of what gets parked turns out to belong to somebody else's project, and passing it on is free value.",
    },
    {
      term: "Report questions answered, not activities done",
      explain:
        "Twelve interviews completed tells a sponsor nothing. Two of our five questions are answered, the third is looking difficult and here is why, tells them everything.",
      detail:
        "This also protects you. When you are genuinely stuck, it becomes visible in week three rather than in week eight, when it is somebody's problem rather than a surprise.",
    },
    {
      term: "What comes out is a decision pack, not a document",
      explain:
        "Problem with a number on it, cause, options with rough costs, a recommendation, the risks, and what is still unknown. Ten pages at most, with a one-page summary that stands on its own.",
      detail:
        "Anything needing a two-hour walkthrough to be understood will get decided on by people who did not attend the walkthrough. Write for somebody with four minutes.",
    },
    {
      term: "Say what you did not find out",
      explain:
        "A section listing what is still unknown, what it would take to find out, and what the risk is of going ahead without knowing.",
      detail:
        "This is what makes the whole thing credible. Every experienced sponsor knows six weeks does not resolve everything, and a pack implying otherwise reads as naive or evasive.",
    },
    {
      term: "Deciding not to proceed is a good result",
      explain:
        "The GOV.UK Service Manual puts this directly: it is not a failure to stop at the end of the discovery phase if the research shows that is the best thing to do.",
      detail:
        "Recommending against going ahead is the highest-value thing this phase can produce, because it costs the price of a few weeks and saves the price of a project. It is also remembered, in a good way, by the people who approve budgets.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A published definition of what this phase is for.",
      walkthrough:
        "The GOV.UK Service Manual sets out how the discovery phase works for government services. It says there is no set time period but around four to eight weeks is typical, that the team should understand user needs, the wider journey and constraints including legislation, technology and process, and that you should not start building your service during it.",
      result:
        "It also says the phase ends with a decision about whether to proceed, and that it is not a failure to stop at the end if the research shows that is the best thing to do. That last sentence is the one worth borrowing wholesale into commercial work, where the unspoken assumption is usually that this comes before a project rather than deciding whether there should be one.",
      source: {
        label: "GOV.UK Service Manual: how the discovery phase works",
        url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
      },
    },
    {
      kind: "illustration",
      scenario: "Two days that redirected six weeks.",
      walkthrough:
        "The problem: somebody wanted to automate a pricing decision that took an experienced person several minutes per case. What was happening: before mapping anything, the BA wrote down the assumption the whole idea rested on, which was that the factors the experienced person uses are recorded somewhere. She spent two days looking at the data and asking three pricers what they actually consider. Two of the five factors were not in any system, and one was a judgement about the customer relationship that nobody had ever written down.",
      result:
        "What changed: the work carried on but with a completely different question, which was what a tool would look like that handles the three recorded factors and presents the case cleanly for a person to judge the other two. Two days of work redirected six weeks of it. Checking the thing that would sink it first is not really a technique, it is a habit, and it is the highest-return habit in this phase.",
    },
    {
      kind: "illustration",
      scenario: "The one that never ended.",
      walkthrough:
        "The problem: work started on an order management problem with no written questions. What was happening: each interview raised a new area, each area seemed relevant, and the scope expanded from ordering into pricing, then into product data, then into customer records. Four months in the analysis was genuinely excellent and there was no recommendation, because there was no longer a bounded problem for a recommendation to address.",
      result:
        "What changed: what had been missing was one page of questions agreed at the start, plus a parked list to catch everything else without absorbing it. Both take an hour to produce. Holding the boundary is not about doing less analysis, it is about knowing which analysis answers the question you were funded to answer.",
    },
  ],

  learningPath: [
    {
      title: "Agree the questions and the end date",
      body: "Three to six specific questions, a start and end date, and an agreed decision meeting at the end. Get the sponsor to sign up to the fact that partial answers plus an honest gap list is an acceptable result.",
      effort: "Half a day plus a conversation",
      outcome: "Something with a definition of finished, which is the thing most of these lack.",
    },
    {
      title: "Ask for data access on day one",
      body: "Before you know exactly what you will want. It has a lead time and it is the most common reason this ends with an unsized problem.",
      effort: "1 hour of asking, days or weeks of waiting",
      outcome: "The ability to put a number on the problem while there is still time to act on it.",
    },
    {
      title: "Name and check the thing that would sink it",
      body: "The one thing that, if wrong, makes the whole idea pointless. Write it down in week one and design the fastest possible way to check it.",
      effort: "2-3 days",
      outcome: "Either confidence to go ahead, or a redirection five weeks earlier than it would otherwise have come.",
    },
    {
      title: "Run problem, context and options together",
      body: "Watching and interviews for context, data for size, and a rolling list of options as they emerge. Do not wait until the problem is fully understood before thinking about options.",
      effort: "2-4 weeks",
      outcome: "Three views that correct each other, rather than a sequence you have to redo.",
    },
    {
      title: "Report weekly against the questions",
      body: "Which of the agreed questions are answered, which are in progress, which look difficult. Never a list of what you did.",
      effort: "30 minutes a week",
      outcome: "A sponsor who can see trouble in week three rather than week eight.",
    },
    {
      title: "Build the decision pack",
      body: "Problem with a number, cause, options with rough costs, recommendation, risks, and an explicit list of what is still unknown. One-page summary written last.",
      effort: "2-3 days",
      outcome: "Something a decision can be made from without a two-hour walkthrough.",
    },
    {
      title: "Hold the decision meeting and close it",
      body: "Present, recommend, and get a decision recorded: go ahead, go ahead with a narrower scope, do more work on one specific question, or stop. Then close it.",
      effort: "2 hours",
      outcome: "A clean end, which is what separates this from a permanent state.",
    },
  ],

  exercises: [
    {
      title: "Write the questions for something already running",
      brief:
        "Take a piece of analysis currently under way in your business and write the three to six questions it is trying to answer. Then ask two people involved to do the same, separately, and compare.",
      success:
        "You can say whether the people doing the work agree what it is for. If the lists differ materially, you have found why it feels like it has no end.",
      time: "1 hour",
    },
    {
      title: "Name what would sink it",
      brief:
        "For any proposal you are involved in, write down the single assumption that would make the whole idea pointless if wrong. Then design the cheapest way to check it and estimate how long that would take.",
      success:
        "You have named one assumption and a check that could run in under a week, and you can say whether anybody has actually done it.",
      time: "1 hour",
    },
    {
      title: "Rewrite a status report",
      brief:
        "Take any project status report and rewrite it as questions answered rather than things done. Keep it to one page.",
      success:
        "The rewritten version makes at least one problem visible that the original hid, and you would be comfortable sending it to a sponsor.",
      time: "45 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Starting with no written questions",
      why: "Every interesting finding becomes in scope, because there is no basis for saying it is not. It expands until somebody's patience runs out, which is not the same as being finished.",
      fix: "Three to six specific questions agreed with the sponsor before day one, plus a visible parked list for everything else.",
    },
    {
      mistake: "Treating it as the start of the project",
      why: "If going ahead is assumed, the analysis is not really testing anything and the sponsor is paying for a delay rather than a decision.",
      fix: "Agree at the outset that not proceeding is one of the available outcomes, and that it is a good one when the evidence supports it.",
    },
    {
      mistake: "Building something during it",
      why: "Once code exists, the question changes from what should we do to how do we finish this, and the argument about money already spent arrives immediately.",
      fix: "Rough mock-ups only, and only where everybody understands they get thrown away. If nobody would be willing to bin it, it is not a mock-up.",
    },
    {
      mistake: "Checking the easy assumptions first",
      why: "You spend the whole period doing careful work and find the fatal problem in the final week, when there is no time to change direction.",
      fix: "Name the assumption that would sink the idea and check it first, even if the check is crude.",
    },
    {
      mistake: "Leaving data access until you need it",
      why: "It takes days or weeks to arrange. Asking in week four means the problem has no number on it at the end, and an unsized problem cannot be funded.",
      fix: "Ask on day one, before you know precisely what you will want from it.",
    },
    {
      mistake: "Running the three things one after another",
      why: "Something you learn about the context in week six invalidates the framing from week one, and you redo work you have already paid for.",
      fix: "Run problem, context and options in parallel from the start, and let each correct the others.",
    },
    {
      mistake: "Reporting what you did instead of what you found out",
      why: "A sponsor reading about interviews completed cannot tell whether this is going well, so they find out it was not at the end.",
      fix: "Report against the agreed questions every week, including the ones proving difficult.",
    },
    {
      mistake: "A pack with no unknowns section",
      why: "It implies six weeks resolved everything, which no experienced sponsor believes, so the whole thing reads as either naive or evasive.",
      fix: "Say plainly what you did not find out, what it would take, and the risk of going ahead without it.",
    },
  ],

  bestPractices: [
    "Agree three to six specific questions before starting.",
    "Give it a fixed end and agree what happens at that end.",
    "Establish that not proceeding is an acceptable outcome.",
    "Name the thing that would sink it in week one and check it first.",
    "Ask for data access on day one.",
    "Run problem, context and options at the same time.",
    "Watch real work, and follow at least one real case end to end.",
    "Keep a visible parked list for everything out of scope.",
    "Report weekly against the questions, never against activities.",
    "Produce a ten-page pack with a summary that stands on its own.",
    "Include a section on what remains unknown.",
    "Close it with a recorded decision.",
  ],

  proTips: [
    "In the first week, ask five different people what they think this is for and write the answers down side by side. The variation is always bigger than anybody expects, and showing that page to the sponsor is often the most useful thing you do in the whole phase. It also gets your written questions agreed very quickly.",
    "Book the closing decision meeting on day one, with the sponsor and the actual decision makers, before you know what you will be presenting. A meeting in the diary creates a real deadline, and without a real deadline this drifts by default rather than by decision.",
    "Keep a rolling one-page summary from week one and update it every Friday. By the end you will have written the pack gradually instead of in a panic, and more importantly you will notice in week three that the summary is not yet saying anything, which is exactly when that is still fixable.",
    "When somebody senior tries to add a new area halfway through, do not refuse. Ask which of the agreed questions they would like to drop to make room, and show them the list. Almost nobody drops one, and the request usually turns itself into a parked item with no confrontation at all.",
  ],

  businessApplications: [
    "Work before a project, where the business needs to decide whether to fund something at all.",
    "Choosing a supplier, where this establishes what you need before anybody demonstrates what they sell.",
    "Investigations after a complaint or an incident, where the shape of the answer is genuinely unknown.",
    "Annual planning, where several candidate ideas need enough work to be compared honestly.",
    "Bringing two businesses together, where the first question is what each one actually does.",
    "Responding to legislation, where this establishes what a new obligation means for your specific operation.",
  ],

  checklist: [
    "Three to six questions written and agreed with the sponsor.",
    "Start and end dates set.",
    "Closing decision meeting booked with the real decision makers.",
    "Not proceeding established explicitly as an acceptable outcome.",
    "The thing that would sink it named and checked first.",
    "Data access requested on day one.",
    "At least one real case followed end to end by watching.",
    "Problem given a real number.",
    "Options identified with rough costs.",
    "Parked list kept and visible.",
    "Weekly reporting framed as questions answered.",
    "Pack under ten pages with a summary that stands alone.",
    "Unknowns section written.",
    "Decision recorded and the phase formally closed.",
  ],

  faqs: [
    {
      q: "How long should this take?",
      a: "Four to eight weeks is typical for a substantial problem, and the GOV.UK Service Manual uses the same range. What matters more than the number is that it has an agreed end and a decision meeting attached.",
    },
    {
      q: "What if the sponsor has already decided?",
      a: "Check their decision properly and first, because it is often right. Then present one genuine alternative with the difference stated plainly. You are making the decision informed rather than trying to overturn it.",
    },
    {
      q: "Who should be involved?",
      a: "A BA, somebody technical who can tell you what is cheap and expensive here, and access to the people who do the work. A designer where the interface matters. Small is better: this slows down with headcount rather than speeding up.",
    },
    {
      q: "Can we build a mock-up?",
      a: "Yes, if it is genuinely disposable and everybody agrees it is a question rather than a foundation. The moment somebody suggests keeping it because it already works, this phase has ended and nobody has noticed.",
    },
    {
      q: "What do I do if it shows the problem is not worth solving?",
      a: "Say so clearly, with the evidence. It is the highest-value result this can produce and it costs a fraction of finding out later. Sponsors remember analysts who told them not to spend money far more warmly than most people expect.",
    },
    {
      q: "How is this different from a business case?",
      a: "This produces the evidence. The business case is one possible output of it, written once you know there is something worth proposing. Writing the case first and then doing this to support it is the exact failure this phase exists to prevent.",
    },
  ],

  tools: [
    { name: "A one-page list of questions", what: "Three to six, with the sponsor's agreement. The definition of finished for the whole phase.", cost: "Free" },
    { name: "A parked list on the wall", what: "Everything interesting that is not one of your questions. Holds the boundary without dismissing anybody.", cost: "Free" },
    { name: "Access to the data", what: "Requested on day one because of the lead time. Without it the problem ends up with no number on it.", cost: "Varies" },
    { name: "A rolling one-page summary", what: "Updated weekly from week one. Writes the pack gradually and shows you early when you have nothing to say.", cost: "Free" },
  ],

  resources: [
    { title: "GOV.UK Service Manual: how the discovery phase works", kind: "Docs", note: "The clearest public statement of what this phase is for, how long it takes, and why stopping at the end is a good result.", url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works" },
  ],

  internalLinks: [
    { slug: "learning-a-business-fast", anchor: "building context during it", context: "During" },
    { slug: "symptom-versus-problem", anchor: "checking the problem is the real one", context: "The problem" },
    { slug: "designing-the-future-state", anchor: "turning findings into options", context: "The options" },
  ],

  relatedGuides: ["learning-a-business-fast", "symptom-versus-problem", "designing-the-future-state"],

  conclusion: [
    "Write down the three to six questions your current piece of analysis is meant to answer, then ask two colleagues involved in it to do the same without conferring. If the lists differ, and they usually do, you have found in an hour the reason the work feels like it has no end.",
  ],
};

export default guide;
