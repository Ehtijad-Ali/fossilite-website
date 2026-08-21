import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "where-inefficiency-hides",
  seoTitle: "Where the Time Actually Goes in a Business",
  metaDescription:
    "The waste is never where management thinks it is. Eleven places to look, the evidence that proves each one, and how to put a number on it before you propose anything.",
  title: "Where the Time Actually Goes",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "The waste in a business is almost never where the business thinks it is. Ask a management team where they lose time and you get the answer they have been giving each other for two years, usually involving a system somebody dislikes. Ask the person doing the work and you get something different, more specific, and usually smaller than the official story but happening forty times a day.",
    "There is a reason for that. Waste everybody can see gets fixed. What survives is the waste that has gone invisible: the step nobody questions because it has always been there, the workaround so old it is now called the process, the checking that exists because two systems disagreed once in 2019 and nobody has looked since.",
    "So finding it is not about being clever. It is about knowing where it hides and having a list you go through every time. This is mine. Eleven places, what proves each one, and the discipline of putting a number on what you find before you propose anything, because a finding with no number is an opinion and opinions do not get funded.",
  ],

  whyItMatters: [
    "A Business Analyst who only responds to requests is limited by the quality of the requests. Most requests are somebody's guess at a solution to something they noticed. The BA who can go and find the expensive thing nobody has reported is operating at a completely different level, and it is a skill you can learn deliberately rather than a knack you either have or do not.",
    "There is a defensive reason too. Every improvement programme eventually asks you to justify what you are working on against everything else. If you have never surveyed the operation, you cannot answer, and your work gets prioritised by whoever shouts loudest.",
    "And the arithmetic is unintuitive. A step that takes eight minutes and happens six hundred times a month deserves more attention than a two-day annual nightmare that generates a lot of complaints. Nobody feels this correctly. You have to count.",
  ],

  coreConcepts: [
    {
      term: "One: where work changes hands",
      explain:
        "Work slows down when it moves between teams. Not because anybody is slow, but because the receiving team has their own queue, their own priorities, and no idea what the sending team promised.",
      detail:
        "Draw the process and mark every point where responsibility moves. Then measure how long work sits at each one. In most businesses the time work spends actually being worked on is a small fraction of the time it spends in existence, and nearly all the difference sits at these points.",
    },
    {
      term: "Two: anything done twice",
      explain:
        "A form sent back for correction, a document revised after review, an order re-entered because the first attempt was rejected. This is the most expensive category and the least visible, because the second attempt just looks like normal work.",
      detail:
        "The question that finds it: how often does one of these come back to you? Then ask what the most common reason is. The most common reason is your requirement.",
    },
    {
      term: "Three: waiting",
      explain:
        "The gap between something being ready and somebody picking it up. Waiting is free to the person doing the work and expensive to the business, which is exactly why it builds up.",
      detail:
        "Look for anything that runs on a timetable when it could run when something happens. A weekly run adds up to a week of delay to anything that just missed it, and nobody experiences that week as a cost.",
    },
    {
      term: "Four: the spreadsheets nobody talks about",
      explain:
        "Every spreadsheet, personal tracker, shared inbox and messaging group sitting outside the official process. Each one is a need somebody has already worked out, built and maintained at their own expense.",
      detail:
        "Ask what people keep outside the system and make clear you are not there to take it away. Ask it as an audit and you will be told there is nothing, and you will believe it.",
    },
    {
      term: "Five: typing the same thing twice",
      explain:
        "The same information entered in more than one place. It is the most mechanical form of waste and it is everywhere, because connecting two systems always costs more this quarter than typing does.",
      detail:
        "It is also where mistakes get in, so the cost is the typing time plus everything that goes wrong downstream from one wrong digit. Count both. The second number is usually bigger and almost nobody includes it.",
    },
    {
      term: "Six: when the exception became the main path",
      explain:
        "Processes get designed for the standard case and then reality arrives. Over years the exception handling grows until most work goes through it, while the documentation, the training and the system still assume the standard case.",
      detail:
        "The test is a count. Ask what proportion of cases go through the exception route. When the answer is more than a third, you are looking at a process designed for a business that no longer exists.",
    },
    {
      term: "Seven: approvals nobody has questioned",
      explain:
        "An approval is a check, and checks get added after incidents and almost never removed. Ask what the approver actually looks at and how often they say no. If they almost never say no, the step may be a delay wearing the costume of a check.",
      detail:
        "Be careful here. Some approvals work precisely because they exist: people prepare better knowing somebody will look. Find out whether refusals are rare because the check is useless or because it changes what happens upstream. Those are different findings with opposite answers.",
    },
    {
      term: "Eight: making two records agree",
      explain:
        "Any activity whose whole purpose is to make two versions of the same fact match. It is pure overhead created by an earlier decision, and it is usually done by somebody senior enough to be expensive.",
      detail:
        "Follow it upstream. Why do the two disagree? The answer is almost always that two systems own the same information with no agreement about which is right, which is a requirement rather than a bug.",
    },
    {
      term: "Nine: work that exists to describe work",
      explain:
        "Status reports, weekly updates, dashboards assembled by hand, and the meeting where everybody says what is already in the report. This grows quietly in businesses that have scaled fast.",
      detail:
        "Ask who reads each report and what decision it changes. A report that has never changed a decision is a candidate for deletion, and deletion is the cheapest improvement available to you.",
    },
    {
      term: "Ten: work held up and released in a lump",
      explain:
        "Work that gets saved up and processed together creates a spike, and the spike sets the staffing level. Month end, Friday afternoon, the first Monday after a cycle closes. The team is sized for the peak and underused in between.",
      detail:
        "Look at any overtime pattern. Overtime landing on the same day every cycle is caused by the timetable, not by the workload, and hiring will not fix it.",
    },
    {
      term: "Eleven: checking instead of fixing",
      explain:
        "When the output is unreliable, businesses add checking. Checking is expensive, catches only some of the problems, and takes away the pressure that would otherwise have forced somebody to fix the cause.",
      detail:
        "The signal is a role whose job title contains quality, review or verification, doing work that would not exist if the step before it were reliable.",
    },
    {
      term: "The evidence is already sitting there",
      explain:
        "Every one of these leaves a trace. Ticket queues, email timestamps, system logs, shared drive folders, the printer, the overtime sheet, the calendar, the exception codes in the data.",
      detail:
        "The shared drive is my favourite. Sort by most recently changed and look at what people actually keep up to date. It is a list of unmet needs arranged by how much somebody cares.",
    },
    {
      term: "A finding with no number is an opinion",
      explain:
        "How often times how long, or how many times the error rate times what an error costs. Two numbers turn a vague sense of waste into something a manager can compare against everything else competing for money.",
      detail:
        "Where no data exists, two weeks of the people doing the work keeping a tally will beat any estimate anybody can give you, including yours. It also gets the team invested, because they collected it.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The approval that had never refused anything.",
      walkthrough:
        "The problem: purchase requests over a threshold needed sign-off from a department head, and everybody complained about how long it took. What was happening: the BA asked how many had been refused last year. Nobody knew, so she checked the log. Every request in the sample had been approved, most within minutes, several within seconds. Then she asked the department heads what they looked at. Two described checking the budget code. One said he approved whatever came from a manager he trusted.",
      result:
        "What changed: the finding was not simply to remove the approval. It was that the check had been created to confirm budget availability, that could be done against the ledger automatically, and the human step was adding delay without delivering the check it existed for. Notice the order: count first, then ask what people actually do, and only then propose. Counting alone would have given the wrong recommendation.",
    },
    {
      kind: "documented",
      scenario: "Why chopped-up work costs more than the clock says.",
      walkthrough:
        "Mark, Gudith and Klocke ran a controlled study comparing interrupted and uninterrupted work. The obvious expectation is that being interrupted makes tasks take longer.",
      result:
        "People actually completed interrupted tasks in less time, with no drop in quality, by working faster. The cost showed up as significantly higher stress, frustration, time pressure and effort. For anyone hunting waste this is an important correction: a task that chops somebody's day into fragments costs more than its duration, and a stopwatch study will miss all of it. Ask which parts of the work people dread, not only which take longest.",
      source: {
        label: "Mark, Gudith & Klocke (2008). The Cost of Interrupted Work: More Speed and Stress, CHI '08",
        url: "https://ics.uci.edu/~gmark/chi08-mark.pdf",
      },
    },
    {
      kind: "illustration",
      scenario: "Twenty minutes standing by the printer.",
      walkthrough:
        "The problem: a BA noticed the printer in an operations area was busy in a company that considered itself paperless. What was happening: she spent twenty minutes beside it asking each person what they were printing and why. One printed a checklist because the system spread the steps across four screens. One printed an order to carry it to another floor because the receiving team had no access to the ordering system. One printed for a signature required by a policy written before electronic signatures were accepted.",
      result:
        "What changed: three findings, three different causes, one afternoon by a printer. The general lesson is that physical things are honest. Paper, sticky notes, a whiteboard with a queue drawn on it, a second monitor showing a spreadsheet. Each one exists because a system failed somebody, and unlike interview answers they cannot be tidied up before you arrive.",
    },
  ],

  learningPath: [
    {
      title: "Follow one real case from start to finish",
      body: "Not a typical case, a real one with a reference number and a date. Walk it from the trigger to the point value reaches the customer, writing down every touch, every wait, and every system it goes through.",
      effort: "Half a day",
      outcome: "A list of touches longer than the documented process, plus your first three findings.",
    },
    {
      title: "Go through the eleven on purpose",
      body: "Deliberately, rather than relying on what you happen to notice. Handovers, rework, waiting, spreadsheets, retyping, exceptions, approvals, reconciling, reporting, batching, checking. Note where each applies and what would prove it.",
      effort: "2 hours",
      outcome: "A candidate list with a plan for proving each item, rather than a list of hunches.",
    },
    {
      title: "Go and get the evidence",
      body: "Pull the ticket queue, read the logs, sort the shared drive by date changed, look at the overtime sheet, count the exception codes. Do it yourself where your access allows rather than asking somebody to run it.",
      effort: "1-2 days",
      outcome: "Findings that survive being challenged, because you looked rather than inferred.",
    },
    {
      title: "Put numbers on the top five",
      body: "How often times how long for time-based waste. Volume times error rate times cost per error for quality-based waste. Where the data does not exist, set up two weeks of tallies with the team.",
      effort: "2-3 days, plus a two-week wait where tallies are needed",
      outcome: "A ranked list in units the business already uses, which is the only form a prioritisation conversation can take.",
    },
    {
      title: "Take the ranked list back to the people who do the work",
      body: "Show them what you found and how you counted it. They will correct one number and add one thing you missed. Both are useful and the second is usually the bigger finding.",
      effort: "1 hour",
      outcome: "A checked list, and a team who now regard the work as partly theirs.",
    },
  ],

  exercises: [
    {
      title: "Look at the shared drive",
      brief:
        "Get access to the team drive for a process you are looking at. Sort by last changed. List every file touched in the last month, who owns it, and what question it answers. For the top five, ask the owner why the official system does not do this.",
      success:
        "You can name at least three needs nobody has raised as a request, and say who is currently paying for each one with their own time.",
      time: "2-3 hours",
    },
    {
      title: "Measure the waiting",
      brief:
        "Take twenty completed cases from last month. For each, record the timestamp at every handover you can see in the system. Work out total elapsed time and total time anybody was actually working on it, and express the second as a share of the first.",
      success:
        "You have one number describing how much of the process is waiting, and you can point to where most of it builds up.",
      time: "Half a day",
    },
    {
      title: "Check a refusal rate",
      brief:
        "Choose any approval or review step in your business. Find out how many things it refused in the last twelve months, and ask two approvers what they actually check. Write one paragraph on whether it is a check, a delay, or a check that works by existing.",
      success:
        "You can defend your conclusion with a count and two quotes, and you have not recommended removing something that was quietly working.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Starting from the complaints",
      why: "Complaints are a biased sample. They track how senior and how vocal the affected person is, not how much it costs. The most expensive waste generates no complaints at all because everybody has stopped noticing it.",
      fix: "Survey deliberately using a list, then compare what you found against what has been reported. The gap between those two is itself a finding worth showing your sponsor.",
    },
    {
      mistake: "Measuring working time and calling it the process time",
      why: "You conclude the process takes forty minutes when it takes nine days. Every improvement you then propose targets the forty minutes, which was never the problem.",
      fix: "Always capture how long it takes overall as well as how long anybody spends on it. The ratio between them is the fastest diagnostic there is.",
    },
    {
      mistake: "Treating spreadsheets as bad practice",
      why: "The moment your interest reads as enforcement they disappear from the conversation, and you lose your best source of unmet needs. You also lose the trust of the person who built the thing keeping their job workable.",
      fix: "Treat every one as evidence of a real need and say so out loud. Ask what would have to be true for them to stop needing it.",
    },
    {
      mistake: "Removing an approval based on the refusal rate alone",
      why: "Some checks work by existing. Refusals are rare because people prepare properly, and removing the step degrades the quality you just measured.",
      fix: "Ask approvers what they check and ask the people submitting whether the approval changes how they prepare. Then decide.",
    },
    {
      mistake: "Getting your number from a manager",
      why: "Managers describe the designed process rather than the real one, and they round towards the story they already believe. You will build a case on a number that falls apart the first time somebody checks it.",
      fix: "Get it from data, from watching, or from a tally kept by the people doing the work. Never from the person furthest from the task.",
    },
    {
      mistake: "Finding twenty things and reporting all twenty",
      why: "A list of twenty has no priority in it, so the reader supplies their own, which is usually whichever item is closest to their own department.",
      fix: "Report the top five, ranked with numbers, and put the rest in an appendix. Ranking is analysis. A long list is note-taking.",
    },
  ],

  bestPractices: [
    "Follow one real case start to finish before forming any view.",
    "Go through a fixed list rather than relying on what you happen to notice.",
    "Capture time overall and time actually spent, separately, always.",
    "Ask what people keep outside the system, and make clear you are not there to remove it.",
    "Count exception cases as a proportion of the total.",
    "Check every approval for its real refusal rate and what gets looked at.",
    "Look at the physical things: paper, whiteboards, sticky notes, second screens.",
    "Put two numbers on every finding before you present it.",
    "Rank ruthlessly and report five, not twenty.",
    "Check the ranked list with the people who do the work before it reaches a steering group.",
  ],

  proTips: [
    "Ask people what they would change first if they arrived tomorrow and needed nobody's permission. It gets past the internal editor that stops people criticising their own department, and the answers cluster hard. When four people in different teams name the same step, you have found something structural rather than personal.",
    "Watch what happens on the busiest day rather than a representative one. Under pressure people abandon the official process and run the version that actually works, and you get to see it without asking. Everything you observe on a quiet Tuesday has already been tidied up for you.",
    "Keep a separate list of things that surprised you, even when you cannot yet say why they matter. Half of my most useful findings started as an unexplained detail that connected to something else three weeks later. If you only write down what fits your current picture, you will only ever confirm your current picture.",
    "When somebody says that is just how the system works, write down the exact sentence and who said it. That phrase marks the edge of what the business has stopped questioning, and the edge moves whenever a BA is willing to ask one more question than is comfortable.",
  ],

  businessApplications: [
    "Cost reduction programmes, where leadership needs options ranked by value rather than by which department volunteered.",
    "Deciding what to automate, where the choice should follow evidence rather than enthusiasm.",
    "Checking out a business you are buying, where the real operating cost lives in the workarounds rather than the org chart.",
    "Replacing a system, where knowing what the current one fails to do matters more than knowing what it does.",
    "Planning staffing, where an apparent shortage is frequently caused by timetables or handovers.",
    "Improving service, where how long customers wait is their experience and how long anybody works on it is the only thing being managed.",
  ],

  checklist: [
    "One real case followed start to finish, with every touch recorded.",
    "Handovers identified and the wait at each one measured.",
    "Rework rate established for the main output, with the most common reason named.",
    "Spreadsheets and trackers listed, with the owner and the need each serves.",
    "Retyping points listed, with both the typing time and the downstream cost of errors.",
    "Exception volume expressed as a proportion of the total.",
    "Every approval checked for refusal rate and for what actually gets looked at.",
    "Reconciling activities traced back to why the two records disagree.",
    "Reports checked for who reads them and what decision they change.",
    "Peak patterns compared against overtime and timetables.",
    "Top five findings given two numbers each and ranked.",
    "Ranked list checked with the people who do the work.",
  ],

  faqs: [
    {
      q: "How long should a survey like this take?",
      a: "Two to three weeks for one process in a mid-sized business, most of it waiting for data and access rather than analysing. If you are given two days, follow one real case start to finish and present that. A single traced case is more persuasive than a rushed survey.",
    },
    {
      q: "What if I cannot get at the data?",
      a: "Then getting it is your first deliverable, and it is worth spending some credibility on. Meanwhile, watching and a two-week tally kept by the team will get you further than most people expect, and the tally makes the team collaborators rather than subjects.",
    },
    {
      q: "How do I do this without people thinking I am here to cut jobs?",
      a: "Say what the work is for in the first sentence of every conversation, and be honest if you do not know. People are more forthcoming with an admission that you have not been told than with a reassurance that later turns out to be untrue.",
    },
    {
      q: "Which of the eleven is usually the biggest?",
      a: "Handovers and rework, and they are often the same finding seen from two ends: work comes back because it crossed a boundary with information missing. That is why measuring overall time first tends to point you at the right place.",
    },
    {
      q: "Should I show findings to management or to the team first?",
      a: "The team, always. They will correct at least one number, and showing something they have already seen means nobody gets ambushed in front of their director. It costs an hour and buys the access you need for the next six months.",
    },
    {
      q: "What if the biggest finding is in a department that will not engage?",
      a: "Put a number on it anyway and write it down. Something you cannot fix still belongs in the analysis, because it explains why the achievable improvements are smaller than the sponsor hoped. Do not quietly drop it to make your recommendation look better.",
    },
  ],

  tools: [
    { name: "Access to the timestamps and status changes", what: "Almost every finding in this guide is provable from these if you can look at them yourself.", cost: "Varies" },
    { name: "A spreadsheet", what: "For the time comparison, the exception proportions and the arithmetic. Still the most-used tool in this job.", cost: "Varies" },
    { name: "A tally sheet", what: "Two weeks of counting by the people doing the work. The cheapest way to put a number on something the systems do not record.", cost: "Free" },
    { name: "A one-page findings template", what: "What happens, evidence, how often, how long, annual size, who is affected. One page per finding forces the discipline.", cost: "Free" },
  ],

  resources: [
    { title: "The Cost of Interrupted Work", kind: "Paper", note: "Mark, Gudith and Klocke (2008). Why chopped-up work costs more than its measured duration, which is the waste a stopwatch cannot see.", url: "https://ics.uci.edu/~gmark/chi08-mark.pdf" },
  ],

  internalLinks: [
    { slug: "learning-a-business-fast", anchor: "building the context this depends on", context: "Before the survey" },
    { slug: "mapping-a-business-process", anchor: "turning what you saw into a picture", context: "During analysis" },
    { slug: "symptom-versus-problem", anchor: "separating what you found from what causes it", context: "After the survey" },
  ],

  relatedGuides: ["mapping-a-business-process", "symptom-versus-problem", "learning-a-business-fast"],

  conclusion: [
    "Take one process you already know and work out one ratio: total time from start to finish, divided by the time anyone actually spent working on it. Twenty cases and an afternoon will give you the number, and the number tells you which of the eleven places to look first.",
  ],
};

export default guide;
