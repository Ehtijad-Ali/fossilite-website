import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "mapping-a-business-process",
  seoTitle: "Drawing How the Work Really Happens, Not How It Should",
  metaDescription:
    "How to pick the right level of detail, get the real process out of people, draw it so a warehouse supervisor and a developer can both read it, and cover the exceptions.",
  title: "Drawing How the Work Really Happens",
  keywords: [
    "business process mapping",
    "as-is process model",
    "swimlane diagram",
    "process modelling for business analysts",
    "workflow analysis",
    "bpmn basics",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "A process map is not a drawing exercise. It is you saying here is how I think the work happens, to a room of people who each know one part of it, and its whole value is in the corrections they give you. A map nobody argues with is a map nobody read.",
    "Most of them fail in one of two directions. Either they are so vague they could describe any business (receive order, fulfil order, invoice), or they are so detailed they take three months to draw and are out of date before the ink dries. Both are the same mistake: the level of detail was chosen out of habit rather than from what you are actually trying to work out.",
    "This guide is the practical version. How to pick the level, how to get the real process rather than the documented one, how to draw it so a warehouse supervisor and a developer can both read it, and how to handle the exceptions, which are the part that matters and the part everyone leaves out.",
  ],

  whyItMatters: [
    "Almost everything downstream depends on this. Requirements, test cases, what data goes where, who is affected, training material and the case for doing it at all are all worked out from an understanding of how the work runs. Get the map wrong and every one of those inherits the mistake.",
    "It is also the fastest way to find out that people disagree. Two teams can talk about the same process for a year in slightly different words and never notice they mean different things. Put one diagram on a wall and the disagreement shows up in about ninety seconds.",
    "And it is what earns you the right to suggest changes. A BA who turns up with a solution is one voice among many. A BA who turns up with an accurate picture of how the work really runs, including the awkward parts, gets treated differently for the rest of the project.",
  ],

  coreConcepts: [
    {
      term: "Pick the level of detail from the question, not the template",
      explain:
        "Three broad levels. Five to eight boxes covering the whole business. Ten to thirty steps covering one journey end to end. Or the individual clicks and screens. Pick the one that answers the question you were actually asked.",
      detail:
        "If the question is where should we invest, stay high. If the question is why are orders late, do the end-to-end journey. If the question is what should we build, you will end up at screen level but only for the two or three steps you are changing, never for all of them.",
    },
    {
      term: "Start and end where something happens in the world",
      explain:
        "A process starts when something happens and ends when something valuable has been delivered. Customer places an order, through to customer has their goods and we have the money.",
      detail:
        "If your map starts at order arrives in the system, you have already cut out the part where the trouble usually lives. The most common scoping mistake is mapping a department rather than a journey. Departments are how the business is arranged. Journeys are how value moves, and the two rarely line up, which is exactly why handovers hurt.",
    },
    {
      term: "One row per team, because who does it is the point",
      explain:
        "Draw a row for each role or team, and put each step in the row of whoever does it. The value is not the boxes. It is every line that crosses from one row to another, because each crossing is a handover, a queue, and a chance to lose information.",
      detail:
        "Use roles, not people's names. People move. And keep the rows to people who genuinely do something. A row for a system is fine when the system does something on its own, and confusing when it is just where somebody types.",
    },
    {
      term: "Keep it to four symbols",
      explain:
        "A box for something happening, a diamond for a decision, an arrow for what comes next, and a row for who does it. That covers the overwhelming majority of business process work and anybody can read it without being trained.",
      detail:
        "There are formal notations with dozens of symbols, and they genuinely help when a system will run the process automatically. If the audience is a business team, every symbol past the basic four costs you understanding and buys you precision nobody in the room needs.",
    },
    {
      term: "For every step, capture four things",
      explain:
        "A box that says check credit is a label, not a description. What starts it, what does the person need in front of them, what do they produce, and what rule do they apply to decide?",
      detail:
        "This is where a map turns into requirements. The rule inside a step is a business rule, what they need is a data requirement, and what starts it is a connection to something else. Put these in a table next to the diagram rather than trying to squeeze them onto it.",
    },
    {
      term: "Put time on it, not just steps",
      explain:
        "Against each step, write how long the work takes and how long it sits waiting before somebody picks it up. Against each handover, write the queue.",
      detail:
        "This single addition turns a picture into a diagnosis. Add both columns up and compare. When the total elapsed time is many times the actual working time, the opportunity is in how work flows rather than in anybody's speed, and that changes what you recommend.",
    },
    {
      term: "Put volumes on it too",
      explain:
        "How many cases a month go each way at every decision. A decision that sends three per cent one way and ninety-seven the other is a completely different design problem from one that splits evenly.",
      detail:
        "Volumes also tell you where to spend your remaining time. There is no point designing something elegant for a path four cases a year take while the main path stays vague.",
    },
    {
      term: "The exceptions are the process",
      explain:
        "Every map has a smooth path that people describe fluently. The work sits in what happens when a document is missing, the customer changes their mind, the system is down, the value goes over a limit, or the item is out of stock.",
      detail:
        "My rule is that a map with no exception paths on it is unfinished, however neat it looks. Ask directly: what are the five most common reasons this does not go straight through, and what happens in each case?",
    },
    {
      term: "Draw how it works now before how it should work, and keep them apart",
      explain:
        "The first map records what happens today, with no judgement and no improvements smuggled in. The second is a separate thing produced later, on purpose.",
      detail:
        "Mixing them is the most common failure I see. Once a map contains half a solution, nobody can tell you whether it is accurate, because the answer to every question becomes well, it would be like that after the change.",
    },
    {
      term: "Draw it wrong on purpose when a session stalls",
      explain:
        "People are far better at correcting things than at describing them. A deliberately imperfect map on the wall gets you more in ten minutes than an hour of open questions.",
      detail:
        "Recognising something is easier than remembering it. This is not a trick and you do not need to hide it. Telling a room that your draft is definitely wrong somewhere gives everybody permission to speak.",
    },
    {
      term: "Test it by walking a real case through it",
      explain:
        "Take a completed case from last week and trace it across your diagram in front of the people who handled it. Every point where the case does not fit is a mistake in the map.",
      detail:
        "Three real cases is usually enough to expose everything important. Ask specifically for one that went badly, because the smooth ones just confirm what you already drew.",
    },
    {
      term: "One page, or nobody will use it",
      explain:
        "A map that does not fit on one readable page becomes a document that lives in a folder. Break it up instead: one page for the whole journey, with detail pages for the two or three steps that need it.",
      detail:
        "If you cannot walk somebody through the whole thing in fifteen minutes, nobody will walk through it, and an unread map is worth exactly nothing however correct it is.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Six boxes on paper, fourteen in real life.",
      walkthrough:
        "The problem: the documented process for taking on a new business customer had six steps and everybody was frustrated with how long it took. What was happening: the BA drew the six steps from the documentation, put them on the wall, and asked the three people who do the work to walk a real case through it. Within twenty minutes the map had fourteen steps. The extras included a manual credit check for one customer type, an email approval that exists because of an audit finding years earlier, a step where somebody retypes an address because two systems format it differently, and a wait for a weekly run that adds days to anything arriving on the wrong afternoon.",
      result:
        "What changed: the retyped address turned out to be behind most of the delivery failures, which nobody had connected to onboarding at all. The finding came from the gap between the documented map and the real one, which is why drawing the documented version first was worth the hour it cost.",
    },
    {
      kind: "illustration",
      scenario: "One word meaning two different things.",
      walkthrough:
        "The problem: sales and operations both described a step called approval and everybody assumed it was the same step. What was happening: the BA put it on the map once. In the session it emerged that sales meant approving a discount, and operations meant approving that the thing was actually feasible. They happen at different times, involve different people, and one of them can reverse the other. Because everybody had been saying the same word for years, neither team had noticed.",
      result:
        "What changed: the map split into two steps with different names, and somebody wrote a rule for what happens when the second reverses the first, which had been handled informally by one long-serving employee. Vagueness survives in conversation and dies in diagrams, and that is most of why maps are worth drawing.",
    },
    {
      kind: "illustration",
      scenario: "The map that was too detailed to read.",
      walkthrough:
        "The problem: a BA produced a fifty-page model of an entire claims operation, correct in every particular, built over three months of interviews. What was happening: it went round for sign-off and two people opened it. The steering group asked for a summary, and the summary became the thing everybody used, so decisions got made against a document written in an afternoon.",
      result:
        "What changed: nothing, in time. The detail was not wasted but it was produced in the wrong order and at the wrong level for the decision in front of the business. Map the whole journey on one page first, agree where the problem is, and only then go deep on the two or three steps that need it. Detail is an answer to a question, not a default setting.",
    },
  ],

  learningPath: [
    {
      title: "Write one sentence saying what the map covers",
      body: "This covers everything from something happening to value being delivered, for these kinds of case. Get it agreed by the sponsor. Nearly every scope argument later is a failure to do this now.",
      effort: "30 minutes",
      outcome: "A boundary you can point at when somebody wants to add a department.",
    },
    {
      title: "Draw the documented version from what already exists",
      body: "Procedure notes, training slides, the last project's requirements. This is your straw man and it is meant to be wrong. Do not spend more than an hour on it.",
      effort: "1 hour",
      outcome: "Something to react to, plus a record of the gap between what people believe and what happens.",
    },
    {
      title: "Watch two real cases being done",
      body: "Sit with the people doing the work and watch. Do not ask them to explain as they go beyond what they volunteer. Record what they open, what they type twice, what they check, and where they pause.",
      effort: "Half a day",
      outcome: "The steps that never come up in an interview because they are too routine to mention.",
    },
    {
      title: "Ask about the exceptions",
      body: "Ask each role the same thing: what are the five most common reasons this does not go straight through? Then follow each one to a conclusion. This is where the real requirements live.",
      effort: "1 day",
      outcome: "Exception paths with rough frequencies, which is the material most maps are missing.",
    },
    {
      title: "Draw the real map with rows, times and volumes",
      body: "One page. A row per role, four symbols, working time and waiting time against each step, case volume on each branch. Put the step detail in a table alongside rather than on the diagram.",
      effort: "1 day",
      outcome: "Something that supports a diagnosis, not just a description.",
    },
    {
      title: "Run a session and walk three real cases through it",
      body: "Everybody who appears in a row, one room, one map, three real cases including one that went badly. Write on the map in front of them. Resist defending your draft.",
      effort: "2 hours",
      outcome: "An agreed picture of how it works now, and usually two findings nobody had raised before.",
    },
  ],

  exercises: [
    {
      title: "Map something you can watch",
      brief:
        "Choose a process you can watch from beginning to end in under an hour: a coffee shop order, a returns desk, a hospital reception. Draw it with a row per role and four symbols. Add working time and waiting time. Then find one exception by watching until something goes wrong.",
      success:
        "The map fits on one page, has at least one exception path, and somebody who works there could correct it rather than be baffled by it.",
      time: "2 hours",
    },
    {
      title: "Two columns of time",
      brief:
        "For any process you have mapped, list every step in one column, working time in the second, waiting time in the third. Total both. Work out the ratio between them and find the single longest wait.",
      success:
        "You can say in one sentence where the time actually goes, with a number, and it surprises at least one person who works in that process.",
      time: "1 hour",
    },
    {
      title: "Hunt the exceptions",
      brief:
        "Take a process map somebody has already produced. Ask three people who work in it for the five most common reasons a case does not go straight through. Count how many of the fifteen answers appear anywhere on the existing map.",
      success:
        "You have a written list of unmapped exceptions with rough frequencies, and a view on whether the existing map describes most real cases.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Mapping a department instead of a journey",
      why: "You get an accurate picture of one team's work and miss every handover, which is where the delay and the lost information actually live.",
      fix: "Define the map by something happening at each end. If both ends sit inside one team, your scope is probably too narrow to explain the problem.",
    },
    {
      mistake: "Only mapping the smooth path",
      why: "That is the part everybody can describe and the part that already works. Build from it and you get a system that handles the easy cases and dumps everything else on a person.",
      fix: "Treat a map with no exception branches as unfinished. Ask for the five most common reasons a case goes sideways and put each on the diagram with a rough frequency.",
    },
    {
      mistake: "Letting improvements creep into the how-it-works-now map",
      why: "Nobody can check a map that is half description and half proposal, because every question about accuracy gets answered with a hypothetical.",
      fix: "Keep two separate things. Park every improvement idea on a visible list while mapping, which also reassures people their suggestion was not lost.",
    },
    {
      mistake: "Drawing it from interviews alone",
      why: "People describe the process they believe they follow. The steps that have become automatic are exactly the ones they leave out, and those are often where the problem is.",
      fix: "Watch at least two real cases. Interviews tell you what people intend, watching tells you what they do, and you need both.",
    },
    {
      mistake: "Using symbols the audience cannot read",
      why: "Every symbol past box, diamond, arrow and row trades understanding for precision. A business team that cannot read the map cannot correct it, so you lose the only thing the map was for.",
      fix: "Match the symbols to the audience. Use richer notation only where a system will run the process or an integrator needs the precision.",
    },
    {
      mistake: "Treating a signature as confirmation",
      why: "People sign things they have skimmed. A signature records that the process was followed, not that the map is right, and the errors turn up during the build when they are expensive.",
      fix: "Check it by walking real cases through the map in front of the people who handled them. Get the signature afterwards if you need one.",
    },
    {
      mistake: "Producing the detailed map first",
      why: "Three months of detail delivered against a question that could have been answered in week one, and by the time it arrives the decision has been taken without it.",
      fix: "One page end to end, agree where the problem is, then go deep only on the steps that need it.",
    },
  ],

  bestPractices: [
    "Write and agree one sentence about what the map covers before drawing anything.",
    "Start and end the map where something happens in the world, not at department boundaries.",
    "Use roles as rows, never individual names.",
    "Keep to four symbols unless the audience genuinely needs more.",
    "Record working time and waiting time against every step.",
    "Put case volumes on every decision branch.",
    "Capture what starts it, what they need, what they produce and the rule, in a table beside the diagram.",
    "Always include exception paths with rough frequencies.",
    "Keep how it works now and how it should work as separate things.",
    "Check it by walking three real cases through it, one of which went badly.",
    "Fit the whole journey on one page and break out detail from there.",
  ],

  proTips: [
    "Ask for the last five real cases rather than a typical one. A typical case is something people make up on the spot, and it is smoothed by definition. Five real ones will contain at least one thing that came up in no interview, and that thing is usually where the money is.",
    "When two people describe a step differently, resist deciding who is right. Put both versions on the map temporarily and let them argue in front of it. The disagreement is nearly always about an exception, and the exception matters more than whichever version wins.",
    "Photograph the marked-up map at the end of a session before anybody tidies it. The handwriting, the arrows drawn over your neat boxes and the crossings-out are the actual record of what changed, and I have gone back to those photos months later to settle arguments about what was agreed.",
    "Keep the parked-ideas list visible on the wall while you are mapping how it works now. It stops people smuggling solutions into the description, and it means nobody has to hold their idea in their head while you ask about something else. You also arrive at the design session with the ideas already collected.",
  ],

  businessApplications: [
    "Choosing a system, where the map is what you judge demonstrations against instead of a feature list.",
    "Improving a process with no software involved, which is a large and underrated part of this job.",
    "Audit and compliance work, where the question is whether the check that is written down actually happens.",
    "Bringing new people in, where a map is the fastest way to make an operation make sense to a newcomer.",
    "Deciding whether to outsource, where the handover points decide whether the split is even workable.",
    "Replacing a system, where the risk sits in the things the current process quietly does that nobody has written down.",
  ],

  checklist: [
    "One-sentence scope agreed with the sponsor.",
    "Map begins and ends where something happens in the world.",
    "Rows are roles, not people or systems used as typing surfaces.",
    "Four symbols unless something richer is genuinely required.",
    "Working time and waiting time recorded per step.",
    "Case volume recorded on every decision branch.",
    "Step detail table done: what starts it, what they need, what they produce, the rule.",
    "At least three exception paths mapped, each with a rough frequency.",
    "Improvements parked on a separate visible list.",
    "Two real cases watched rather than only described.",
    "Three real cases walked through the map with the people who handled them.",
    "The whole journey fits on one readable page.",
  ],

  faqs: [
    {
      q: "How detailed should a process map be?",
      a: "Detailed enough to answer the question you were asked and no more. One page end to end, with detail pages only for the steps you are changing. If you cannot walk somebody through it in fifteen minutes, it is at the wrong level for the decision.",
    },
    {
      q: "Do I need to learn a formal notation?",
      a: "Learn the four basic symbols properly and you can map almost anything. Formal notations earn their keep when a system will run the process automatically or an integrator needs precision. For a business audience they usually cost more in understanding than they return.",
    },
    {
      q: "What tool should I use?",
      a: "The one your business can already open. A perfect diagram in software nobody has a licence for cannot be corrected by the people who need to correct it. Paper on a wall is a completely legitimate answer for the first version.",
    },
    {
      q: "How do I map a process that varies by region or product?",
      a: "Map the common journey once and record the variations in a table against the steps where they differ. Drawing four nearly identical maps hides the fact that they are ninety per cent the same, which is usually the most useful finding.",
    },
    {
      q: "The team disagrees about how the process runs. What now?",
      a: "That is a result, not an obstacle. Put both versions on one diagram and find out whether they are describing different cases, different regions, or a rule one team does not know about. The disagreement usually is the finding.",
    },
    {
      q: "How long does the map stay accurate?",
      a: "It starts going out of date the day you draw it. Put the date on it, note which cases you checked it against, and treat it as evidence from a point in time rather than a living document, unless somebody has been given the job of keeping it up.",
    },
  ],

  tools: [
    { name: "Whatever drawing tool your business can open", what: "Rows and flows. The one already licensed beats the better one nobody can get at.", cost: "Varies" },
    { name: "Paper and a wall", what: "Still the fastest way to run a session. People will write on paper who would never edit a file.", cost: "Free" },
    { name: "A step detail table", what: "What starts it, what they need, what they produce, the rule, working time, waiting time, volume. The half of the model that does not fit on a diagram.", cost: "Free" },
    { name: "Access to the timestamps in the system", what: "Turns estimated waiting times into measured ones, which is the difference between a description and a diagnosis.", cost: "Varies" },
  ],

  internalLinks: [
    { slug: "where-inefficiency-hides", anchor: "what to look for while you map", context: "During mapping" },
    { slug: "asking-questions-that-get-answers", anchor: "getting the real process out of people", context: "Getting the information" },
    { slug: "designing-the-future-state", anchor: "turning this into a target", context: "Next step" },
  ],

  relatedGuides: ["where-inefficiency-hides", "asking-questions-that-get-answers", "designing-the-future-state"],

  conclusion: [
    "Draw the documented version of one process this week from whatever already exists, spend no more than an hour on it, then put it in front of two people who do the work and ask them to correct it. The gap between what you drew and what they tell you is your first real finding, and it usually arrives within twenty minutes.",
  ],
};

export default guide;
