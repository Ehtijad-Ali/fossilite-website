import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "where-inefficiency-hides",
  seoTitle: "Where Inefficiency Hides: The Places to Look First",
  metaDescription:
    "A Business Analyst's search pattern for finding waste in a real operation. The eleven places it hides, the evidence that proves it, and how to size it before anyone argues.",
  title: "Where Inefficiency Hides",
  keywords: [
    "identifying business inefficiencies",
    "process waste analysis",
    "business analyst process improvement",
    "finding process bottlenecks",
    "operational inefficiency",
    "as-is process analysis",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "The waste in a business is almost never where the business thinks it is. Ask a management team where they lose time and you get the answer they have been giving each other for two years, usually involving a system somebody dislikes. Ask the person doing the work and you get something different, more specific, and usually smaller than the official story but happening forty times a day.",
    "There is a reason for this. Inefficiency that everyone can see gets fixed. What survives is the inefficiency that has become invisible: the step nobody questions because it has always been there, the workaround so old it is now called the process, the reconciliation that exists because two systems disagreed once in 2019 and nobody has checked since.",
    "So finding it is not about being clever. It is about knowing where it hides and having a search pattern you run every time. What follows is mine. Eleven places, the evidence that proves each one, and the discipline of sizing what you find before you propose anything, because an unsized finding is an opinion and opinions do not get funded.",
  ],

  whyItMatters: [
    "A Business Analyst who can only respond to requests is limited by the quality of the requests. Most requests are somebody's guess at a solution to a symptom they noticed. The BA who can go and find the expensive thing nobody has reported is operating at a completely different level, and it is a skill you can learn deliberately rather than a talent you either have or do not.",
    "There is also a defensive reason. Every improvement programme eventually asks you to justify what you are working on against what else exists. If you have never surveyed the operation, you cannot answer that question, and your work gets prioritised by whoever shouts.",
    "And the economics are unintuitive. A step that takes eight minutes and happens six hundred times a month deserves more attention than a two-day annual nightmare that generates enormous complaint volume. Nobody feels this correctly. You have to count.",
  ],

  coreConcepts: [
    {
      term: "One: the handover",
      explain:
        "Work slows down where it changes hands. Not because anybody is slow, but because the receiving team has their own queue, their own priorities, and no visibility of what the sending team promised.",
      detail:
        "Draw the process and mark every point where responsibility moves between teams. Then measure the wait at each one. In most operations the time a piece of work spends being worked on is a small fraction of the time it spends in existence, and almost all of the difference sits in handovers.",
    },
    {
      term: "Two: rework",
      explain:
        "Anything done twice. A form returned for correction, a specification revised after review, an order re-entered because the first attempt was rejected. Rework is the most expensive category and the least visible, because the second attempt looks like normal work.",
      detail:
        "The question that finds it: how often does one of these come back to you? Then ask what the most common reason is. The most common reason is your requirement.",
    },
    {
      term: "Three: waiting",
      explain:
        "The gap between a piece of work being ready and somebody picking it up. Waiting is free to the person doing the work and expensive to the business, which is exactly why it accumulates.",
      detail:
        "Look for anything that runs on a schedule when it could run on an event. A batch that processes overnight adds up to a day of latency to everything that misses it, and nobody experiences that day as a cost.",
    },
    {
      term: "Four: shadow systems",
      explain:
        "Every spreadsheet, personal tracker, shared inbox and messaging group sitting outside the official process. Each one is an unmet requirement that somebody has already specified, built and maintained at their own expense.",
      detail:
        "Ask what they keep outside the system and make it clear you are not there to take it away. If you frame the question as an audit you will be told there is nothing, and you will believe it.",
    },
    {
      term: "Five: re-keying",
      explain:
        "The same information typed into more than one place. It is the most mechanical form of waste and it is everywhere, because integrating two systems always costs more this quarter than typing does.",
      detail:
        "Re-keying is also where errors enter, so its cost is the typing time plus the downstream cost of every transposed digit. Count both. The second number is usually larger and almost nobody includes it.",
    },
    {
      term: "Six: the exception that became the main path",
      explain:
        "Processes are designed for the standard case and then reality arrives. Over years the exception handling grows until most work goes through it, while the documentation, the training and the system still assume the standard case.",
      detail:
        "The test is a count. Ask what proportion of cases go through the exception route. When the answer is more than a third, you are looking at a process designed for a business that no longer exists.",
    },
    {
      term: "Seven: approvals nobody has questioned",
      explain:
        "An approval step is a control, and controls are added after incidents and almost never removed. Ask what an approver actually checks and how often they reject. If the rejection rate is close to zero, the step may be a delay wearing the costume of a control.",
      detail:
        "Be careful here. Some low-rejection approvals work precisely because they exist: people prepare better when they know someone will look. Find out whether rejections are rare because the check is useless or because the check changes upstream behaviour. Those are different findings with opposite recommendations.",
    },
    {
      term: "Eight: reconciliation",
      explain:
        "Any activity whose purpose is to make two records of the same fact agree. Reconciliation is overhead created by an earlier design decision, and it is usually performed by someone senior enough to be expensive.",
      detail:
        "Follow it upstream. Why do the two records disagree? The answer is almost always that two systems own the same data with no agreed source of truth, which is a requirement rather than a bug.",
    },
    {
      term: "Nine: work that exists to describe work",
      explain:
        "Status reports, weekly updates, manually assembled dashboards, and the meeting where everyone says what is already in the report. This category grows quietly in organisations that have scaled fast.",
      detail:
        "Ask who reads each report and what decision it changes. A report that has never changed a decision is a candidate for deletion, and deletion is the cheapest improvement available to you.",
    },
    {
      term: "Ten: batching and the artificial peak",
      explain:
        "Work that is held and processed together creates a spike, and the spike sets the staffing level. Month-end, Friday afternoon, the first Monday after a cycle closes. The team is sized for the peak and underused between them.",
      detail:
        "Look at any overtime pattern. Overtime landing on the same day every period is a batching artefact rather than a capacity problem, and hiring will not fix it.",
    },
    {
      term: "Eleven: inspection standing in for a fixed process",
      explain:
        "When output quality is unreliable, organisations add checking. Checking is expensive, catches only some of the problems, and relieves the pressure that would otherwise have forced someone to fix the cause.",
      detail:
        "The signal is a role whose title contains the word quality, review or verification, doing work that would not exist if the upstream step were reliable.",
    },
    {
      term: "Evidence beats opinion, and the evidence is sitting there",
      explain:
        "Every one of these leaves a trace. Ticket queues, email timestamps, audit logs, shared drive folders, the printer, the overtime sheet, the calendar, the exception codes in the transaction table.",
      detail:
        "The shared drive is my favourite. Sort by most recently modified and look at what people actually maintain. It is an inventory of unmet requirements arranged by how much somebody cares.",
    },
    {
      term: "An unsized finding is an opinion",
      explain:
        "Frequency times duration, or volume times error rate times the cost of an error. Two numbers turn a vague sense of waste into something a manager can compare against everything else competing for money.",
      detail:
        "Where no data exists, two weeks of tally marks by the people doing the task beats any estimate anyone can give you, including yours. It also gets the team invested, because they collected it.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The approval that rejected nothing.",
      walkthrough:
        "Purchase requests over a threshold require sign-off from a department head. The BA asks how many were rejected last year. Nobody knows, so they check the workflow log. Every request in the sample was approved, most within minutes, several within seconds of arriving. Then the BA asks the department heads what they look at. Two describe checking the budget code. One says he approves whatever comes from a manager he trusts.",
      result:
        "The finding is not simply to remove the approval. It is that the control was intended to check budget availability, that check could be made against the ledger automatically, and the human step adds delay without delivering the control it was created for. Notice the sequence: count first, then ask what people actually do, and only then propose. Counting alone would have produced the wrong recommendation.",
    },
    {
      kind: "documented",
      scenario: "Why fragmented work costs more than the clock says.",
      walkthrough:
        "Mark, Gudith and Klocke ran a controlled study comparing interrupted and uninterrupted work. The intuitive expectation is that interruption makes tasks take longer.",
      result:
        "Participants completed interrupted tasks in less time, with no quality difference, compensating by working faster. The cost showed up as significantly higher stress, frustration, time pressure and effort. For anyone hunting inefficiency this is an important correction: a task that chops somebody's day into fragments costs more than its duration, and a time-and-motion study will miss all of it. Ask which parts of the work people dread, not only which parts take longest.",
      source: {
        label: "Mark, Gudith & Klocke (2008). The Cost of Interrupted Work: More Speed and Stress, CHI '08",
        url: "https://ics.uci.edu/~gmark/chi08-mark.pdf",
      },
    },
    {
      kind: "illustration",
      scenario: "Following the paper.",
      walkthrough:
        "A BA notices the printer in an operations area is busy in a company that considers itself paperless. She spends twenty minutes beside it, asking each person what they are printing and why. One prints a checklist because the system spreads the steps across four screens. One prints an order to carry it to another floor because the receiving team has no access to the ordering system. One prints for a signature required by a policy written before electronic signatures were accepted.",
      result:
        "Three findings, three different root causes, one afternoon by a printer. The general lesson is that physical artefacts are honest. Paper, sticky notes, a whiteboard with a queue drawn on it, a second monitor showing a spreadsheet: each one exists because a system failed somebody, and unlike interview answers they cannot be tidied up before you arrive.",
    },
  ],

  learningPath: [
    {
      title: "Follow one real case end to end",
      body: "Not a typical case, a real one, with a reference number and a date. Walk it from the trigger to the point where value reaches the customer, writing down every touch, every wait, and every system it passes through.",
      effort: "Half a day",
      outcome: "A touch list longer than the documented process, plus your first three candidate findings.",
    },
    {
      title: "Run the eleven checks against it",
      body: "Go down the list deliberately rather than relying on what you happened to notice. Handovers, rework, waiting, shadow systems, re-keying, exceptions, approvals, reconciliation, reporting, batching, inspection. Note where each applies and what evidence would prove it.",
      effort: "2 hours",
      outcome: "A candidate list with an evidence plan attached to each item, rather than a list of hunches.",
    },
    {
      title: "Go and get the evidence",
      body: "Pull the ticket queue, read the audit log, sort the shared drive by modified date, look at the overtime sheet, count the exception codes. Do this yourself where your access allows rather than asking someone to run it for you.",
      effort: "1-2 days",
      outcome: "Findings that survive challenge, because you looked rather than inferred.",
    },
    {
      title: "Size the top five",
      body: "Frequency times duration for time-based waste. Volume times error rate times cost per error for quality-based waste. Where the data does not exist, set up two weeks of tallies with the team.",
      effort: "2-3 days, plus a two-week wait where tallies are needed",
      outcome: "A ranked list in units the business already uses, which is the only form a prioritisation conversation can take.",
    },
    {
      title: "Take the ranked list back to the operators",
      body: "Show the people who do the work what you found and how you sized it. They will correct one number and add one thing you missed. Both are valuable and the second is usually the bigger finding.",
      effort: "1 hour",
      outcome: "A validated list, and a team who now regard the analysis as partly theirs.",
    },
  ],

  exercises: [
    {
      title: "The shared drive inventory",
      brief:
        "Get access to the team drive for a process you are analysing. Sort by last modified. List every file touched in the last month, who owns it, and what question it answers. For the top five, ask the owner why the official system does not do this.",
      success:
        "You can name at least three unmet requirements nobody has raised as a request, and say who is currently paying for each one with their own time.",
      time: "2-3 hours",
    },
    {
      title: "The wait audit",
      brief:
        "Take twenty completed cases from the last month. For each, record the timestamp at every handover visible in the system. Calculate total elapsed time and total touch time, then express touch time as a share of elapsed time.",
      success:
        "You have a single number describing how much of the process is waiting, and you can point to the handover where most of it accumulates.",
      time: "Half a day",
    },
    {
      title: "The rejection rate check",
      brief:
        "Choose any approval or review step in your organisation. Find out how many items it rejected in the last twelve months, and ask two approvers what they actually check. Write one paragraph on whether the step is a control, a delay, or a control operating through upstream deterrence.",
      success:
        "You can defend your conclusion with a count and two quotes, and you have not recommended removing a control that was quietly working.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Starting from the complaint list",
      why: "Complaints are a biased sample. They track how senior and how vocal the affected person is, not how much the problem costs. The most expensive waste generates no complaints at all because everybody has normalised it.",
      fix: "Survey deliberately using a search pattern, then compare what you found against what has been reported. The gap between those two lists is itself a finding worth showing your sponsor.",
    },
    {
      mistake: "Measuring touch time and calling it the process time",
      why: "You conclude the process takes forty minutes when it takes nine days. Every improvement you then propose targets the forty minutes, which was never the problem.",
      fix: "Always capture elapsed time as well as touch time. The ratio between them is the fastest diagnostic in process work.",
    },
    {
      mistake: "Treating shadow spreadsheets as bad practice",
      why: "The moment your interest reads as enforcement, they disappear from the conversation and you lose your best source of unmet requirements. You also lose the trust of the person who built the thing keeping their job workable.",
      fix: "Treat every shadow system as evidence of a real need and say so out loud. Ask what would have to be true for them to stop needing it.",
    },
    {
      mistake: "Proposing removal of an approval on rejection rate alone",
      why: "Some controls work by existing. Rejections are rare because people prepare properly, and removing the step degrades the input quality you just measured.",
      fix: "Ask approvers what they check and ask submitters whether the approval changes how they prepare. Then decide.",
    },
    {
      mistake: "Sizing with an estimate from a manager",
      why: "Managers describe the designed process rather than the run one, and they round toward the story they already believe. You will build a case on a number that collapses the first time somebody checks it.",
      fix: "Get the number from data, from observation, or from a tally kept by the people doing the work. Never from the person furthest from the task.",
    },
    {
      mistake: "Finding twenty things and reporting all twenty",
      why: "A list of twenty findings contains no priority, so the reader supplies their own, which is usually the item closest to their own department.",
      fix: "Report the top five, ranked and sized, with the rest in an appendix. Ranking is analysis. A long list is note-taking.",
    },
  ],

  bestPractices: [
    "Follow one real case end to end before forming any view.",
    "Run a fixed search pattern rather than relying on what you happen to notice.",
    "Capture elapsed time and touch time separately, always.",
    "Ask what people keep outside the system, and make clear you are not there to remove it.",
    "Count exception cases as a proportion of total volume.",
    "Check every approval for its actual rejection rate and for what the approver inspects.",
    "Look at physical artefacts: paper, whiteboards, sticky notes, second screens.",
    "Size every finding with two numbers before you present it.",
    "Rank ruthlessly and report five, not twenty.",
    "Validate the ranked list with the operators before it reaches a steering group.",
  ],

  proTips: [
    "Ask people what they would change first if they arrived tomorrow and needed no approval. It bypasses the internal editor that stops people criticising their own department, and the answers cluster hard. When four people in different teams name the same step, you have found something structural rather than personal.",
    "Watch what happens on the busiest day rather than a representative one. Under pressure people abandon the official process and run the version that actually works, and you get to see it without asking. Everything you observe on a quiet Tuesday has already been tidied for you.",
    "Keep a separate list of things that surprised you, even when you cannot yet say why they matter. Half of my most useful findings started as an unexplained detail that connected to something else three weeks later. If you only record what fits your current model, you will only ever confirm your current model.",
    "When somebody says that is just how the system works, write down the exact sentence and the person's name. That phrase marks the boundary of what the organisation has stopped questioning, and the boundary moves whenever a BA is willing to ask one more question than is comfortable.",
  ],

  businessApplications: [
    "Cost reduction programmes, where leadership needs options ranked by value rather than by which department volunteered.",
    "Pre-automation surveys, where the decision about what to automate should follow evidence rather than enthusiasm.",
    "Due diligence on an acquisition, where the target's real operating cost lives in the workarounds rather than the org chart.",
    "System replacement projects, where knowing what the current system fails to do matters more than knowing what it does.",
    "Capacity planning, where an apparent headcount shortage is frequently a batching or handover artefact.",
    "Service level improvement, where elapsed time is the customer's experience and touch time is the only thing being managed.",
  ],

  checklist: [
    "One real case followed end to end, with every touch recorded.",
    "Handovers identified and the wait at each one measured.",
    "Rework rate established for the main output, with the most common reason named.",
    "Shadow systems inventoried, with the owner and the need each one serves.",
    "Re-keying points listed, with both typing time and downstream error cost.",
    "Exception volume expressed as a proportion of total cases.",
    "Every approval checked for rejection rate and for what is actually inspected.",
    "Reconciliation activities traced to the upstream disagreement that causes them.",
    "Reports audited for who reads them and what decision they change.",
    "Peak patterns checked against overtime and batch schedules.",
    "Top five findings sized with two numbers each and ranked.",
    "Ranked list validated with the people who do the work.",
  ],

  faqs: [
    {
      q: "How long should a survey like this take?",
      a: "Two to three weeks for one process in a mid-sized operation, most of it waiting for data and access rather than analysing. If you are given two days, follow one real case end to end and present that. A single traced case is more persuasive than a rushed survey.",
    },
    {
      q: "What if I have no access to the underlying data?",
      a: "Then getting it is your first deliverable, and it is worth spending political capital on. Meanwhile, observation and a two-week tally kept by the team will get you further than most people expect, and the tally makes the team collaborators rather than subjects.",
    },
    {
      q: "How do I do this without people thinking I am here to cut jobs?",
      a: "Say what the work is for in the first sentence of every conversation, and be honest if you do not know. People are more forthcoming with an admission that you have not been told than with a reassurance that later turns out to be untrue.",
    },
    {
      q: "Which of the eleven is usually the biggest?",
      a: "Handovers and rework, and they are often the same finding seen from two ends: work comes back because it crossed a boundary with information missing. That is why measuring elapsed time first tends to point you at the right place.",
    },
    {
      q: "Should I present findings to management or to the team first?",
      a: "The team, always. They will correct at least one number, and presenting something they have already seen means nobody is ambushed in front of their director. It costs an hour and buys the access you need for the next six months.",
    },
    {
      q: "What if the biggest finding sits in a department that will not engage?",
      a: "Size it anyway and record it. An unfixable finding still belongs in the analysis, because it explains why the achievable improvements are smaller than the sponsor hoped. Do not quietly drop it to make your recommendation look better.",
    },
  ],

  tools: [
    { name: "Read access to the transaction and workflow tables", what: "Timestamps, status changes, exception codes. Almost every finding in this guide is provable from these if you can query them yourself.", cost: "Varies" },
    { name: "A spreadsheet", what: "For elapsed versus touch time, exception proportions and the sizing arithmetic. Still the most-used analysis tool in the job.", cost: "Varies" },
    { name: "A tally sheet", what: "Two weeks of counting by the people doing the task. The cheapest way to size something the systems do not record.", cost: "Free" },
    { name: "A single-page findings template", what: "What happens, evidence, frequency, duration, annual size, who is affected. One page per finding forces the discipline.", cost: "Free" },
  ],

  resources: [
    { title: "The Cost of Interrupted Work", kind: "Paper", note: "Mark, Gudith and Klocke (2008). Why fragmented work costs more than its measured duration, which is the waste a time study cannot see.", url: "https://ics.uci.edu/~gmark/chi08-mark.pdf" },
  ],

  internalLinks: [
    { slug: "learning-a-business-fast", anchor: "building the context this depends on", context: "Before the survey" },
    { slug: "mapping-a-business-process", anchor: "turning what you observed into a model", context: "During analysis" },
    { slug: "symptom-versus-problem", anchor: "separating what you found from what causes it", context: "After the survey" },
  ],

  relatedGuides: ["mapping-a-business-process", "symptom-versus-problem", "learning-a-business-fast"],

  conclusion: [
    "Take one process you already know and calculate a single ratio: total elapsed time from trigger to delivery, divided by the time anyone actually spent working on it. Twenty cases and an afternoon will give you the number, and the number tells you which of the eleven places to search first.",
  ],
};

export default guide;
