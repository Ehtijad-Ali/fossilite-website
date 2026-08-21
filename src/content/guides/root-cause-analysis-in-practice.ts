import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "root-cause-analysis-in-practice",
  seoTitle: "Root Cause Analysis in Practice, Without the Theatre",
  metaDescription:
    "How to find what is actually causing a business problem: the four techniques worth knowing, how to test a cause before believing it, and when to stop digging.",
  title: "Root Cause Analysis in Practice",
  keywords: [
    "root cause analysis",
    "five whys business analysis",
    "fishbone diagram",
    "problem investigation techniques",
    "business analyst root cause",
    "cause and effect analysis",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "Root cause analysis has a reputation problem, and it earned it. Somewhere along the way it became a workshop with sticky notes where a group of people who were not there guess at causes for ninety minutes, produce a fishbone diagram with forty branches, and select whichever branch the most senior person nodded at.",
    "The real work looks almost nothing like that. It is closer to investigation than to facilitation: you form a candidate explanation, you work out what would have to be true if it were correct, and then you go and check. Most of your time goes on the checking, and most candidate causes die there, which is the whole point.",
    "What follows is the version I actually use inside businesses. Four techniques that earn their keep, the test that separates a cause from a coincidence, the layers you pass through on the way down, and the judgement call about when to stop, because you can always dig one level further and at some depth the finding stops being actionable.",
  ],

  whyItMatters: [
    "The cost of a wrong cause is not zero, it is negative. You spend the budget, the problem persists, and the organisation now believes that area has been dealt with, so the next person to raise it gets less attention than you did.",
    "There is a compounding effect too. Every fix aimed at the wrong cause adds a system, a step or a control to the operation. Businesses accumulate these for decades, and a great deal of what looks like complexity in an old process is a museum of confidently misdiagnosed problems.",
    "Doing it well is also the clearest way to demonstrate what a BA is for. Anybody in the room can propose a solution. Establishing which of six plausible explanations is the real one, with evidence, is a different kind of contribution and people notice it.",
  ],

  coreConcepts: [
    {
      term: "A cause is something that, if removed, stops the effect",
      explain:
        "That is the working definition, and it is more demanding than it sounds. Most things offered as causes are conditions that make the problem possible rather than things that make it happen.",
      detail:
        "Test it out loud: if this were not true, would the problem still occur? A surprising number of candidate causes fail this immediately, and failing it in the room is much cheaper than failing it after a build.",
    },
    {
      term: "Separate the trigger, the condition, and the reason the condition exists",
      explain:
        "A late delivery might be triggered by a supplier's system outage, made possible by a condition (no alternative source of the same data), which exists because of a decision (nobody was willing to fund a second feed).",
      detail:
        "Fixing the trigger buys you nothing, because the next trigger will be different. Fixing the condition prevents a class of problems. Fixing the decision layer is where change becomes durable and also where it becomes political.",
    },
    {
      term: "Technique one: asking why, properly",
      explain:
        "The famous version is five whys and most of it is theatre, because a single chain of five assumes the problem has exactly one cause and that the first answer at each level is the right one.",
      detail:
        "Use it as a ladder rather than a ritual. Ask why, then before moving on ask whether there are other answers at this level. You get a small tree rather than a line, and the tree is far more honest. Stop when the answers become decisions somebody made rather than mechanics.",
    },
    {
      term: "Technique two: the difference question",
      explain:
        "Where the problem occurs and where it does not. Which branch, which product, which shift, which customer type, which time of day. The difference between the affected and unaffected cases contains the cause.",
      detail:
        "This is the highest-yield technique in the set and the most underused. If three branches have the problem and two do not, you have a controlled comparison sitting in your own business, for free, and no workshop is required to run it.",
    },
    {
      term: "Technique three: the timeline",
      explain:
        "Ask when it started. If the answer is a date, something changed then. If the answer is always, you are looking at a design decision rather than a fault, which is a different investigation entirely.",
      detail:
        "Then get the change log: releases, policy updates, supplier changes, reorganisations, people leaving. Overlay the problem data on the change data. This one question resolves an embarrassing proportion of investigations in under an hour.",
    },
    {
      term: "Technique four: the category sweep",
      explain:
        "Run through a fixed set of categories so you do not investigate only the one you find most interesting. People, process, data, system, policy, supplier, environment.",
      detail:
        "This is what a fishbone diagram is actually for. Used as a checklist by an analyst it prevents tunnel vision. Used as a group brainstorm it mostly generates plausible-sounding branches nobody intends to check.",
    },
    {
      term: "Every candidate cause needs a falsifiable prediction",
      explain:
        "If this cause is real, what else must be true in the data? Write the prediction down before you look. Then go and look.",
      detail:
        "For example: if the delay is caused by the weekly batch, then cases arriving on a Thursday afternoon should be systematically slower than those arriving on a Monday. That is checkable in an afternoon and it either survives or it does not.",
    },
    {
      term: "Correlation dressed as cause is the standard failure",
      explain:
        "Two things move together. The third possibility, that something else drives both, is the one people skip, and it is the most common situation in business data.",
      detail:
        "Errors rise when volume rises, so volume looks like the cause. Often the real cause is that the checking step gets skipped under pressure, which volume merely reveals. The distinction matters because hiring more people fixes one story and not the other.",
    },
    {
      term: "The layers you pass through",
      explain:
        "Mechanical (what physically happened), procedural (what the process allowed), informational (what somebody could not see), and structural (what incentive or decision made all of it rational).",
      detail:
        "Most investigations stop at mechanical because it is satisfying and concrete. Most durable fixes sit at informational or structural. Notice which layer your finding is in, because it tells you who needs to be in the room for the solution conversation.",
    },
    {
      term: "Stop when the next level stops being actionable",
      explain:
        "You can keep going until you reach the founding of the company or the state of the market. Depth is not virtue. The right stopping point is the deepest level at which somebody in the organisation can actually change something.",
      detail:
        "If the honest root cause sits outside your influence, record it explicitly and then work one level up. A deliberate decision to fix a layer above the true cause is engineering. An unnoticed one is waste.",
    },
    {
      term: "Multiple causes are normal, single causes are suspicious",
      explain:
        "Real problems in real operations usually have two or three contributing causes, often with one dominant. A clean single cause is sometimes true and is more often a sign that you stopped at the first satisfying answer.",
      detail:
        "Where there are several, size each one. Which contributes most of the volume? You will frequently find one cause accounts for the majority of cases and can be fixed cheaply, while the remainder is a long tail that is not worth touching.",
    },
    {
      term: "Never let the analysis become an investigation of a person",
      explain:
        "The moment the exercise starts feeling like blame, the information stops. People will describe the process correctly and omit the exception that involved them.",
      detail:
        "Say plainly that you are looking for what made the outcome likely, not who did it. And mean it, because if the write-up names an individual once, nobody in that building will tell you anything useful again.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The difference question, answered in an afternoon.",
      walkthrough:
        "A support operation misses its response target on roughly a fifth of tickets. The proposed cause is understaffing and the proposed solution is two more agents. Before agreeing, the BA splits the missed tickets by every attribute available: channel, product, customer tier, time of day, day of week, agent, and originating team. Nearly all of the misses arrive by one channel, an email address that routes into a shared inbox rather than the ticketing system, and are only logged when somebody notices them.",
      result:
        "The cause was not capacity, it was an intake path that started the clock late and made the queue invisible. Two more agents would have improved the number slightly and left the mechanism intact. The whole finding came from splitting the failing cases by every attribute available, which required no interviews and no workshop.",
    },
    {
      kind: "illustration",
      scenario: "Five whys that stopped one level too early.",
      walkthrough:
        "Invoices are being paid late. Why? Approvals are slow. Why? Approvers say they cannot tell which invoices are urgent. Why? The queue shows submission date but not payment due date. The team builds a due date column into the approval screen and declares the investigation closed. Three months later the numbers have barely moved. Asking why once more reveals that most approvers work from an email notification and never open the queue at all, and the notification contains neither date.",
      result:
        "The mechanical answer was correct and incomplete. The informational layer, which was where people actually looked, had not been examined. When a fix that follows a sound analysis fails to move the metric, the usual explanation is not that the analysis was wrong but that it stopped one layer above the behaviour it needed to change.",
    },
    {
      kind: "illustration",
      scenario: "The cause that was a decision, not a fault.",
      walkthrough:
        "A manufacturer has recurring quality failures on one product line. Mechanically, an inspection step is being skipped. Procedurally, the process allows it, because the inspection is recorded on paper collected weekly. Informationally, nobody sees a skipped inspection until the following week. Structurally, the line is measured on units shipped per shift and the inspection is the only step that can be dropped without an immediate consequence.",
      result:
        "Four true statements at four layers, and only the last one explains why this keeps happening on this line and not on others where the same inspection exists. Any fix that leaves the measurement in place is fighting the incentive. This is the point at which root cause analysis stops being an analytical exercise and becomes a conversation with whoever owns the target.",
    },
  ],

  learningPath: [
    {
      title: "Write the effect as a measured statement",
      body: "Not the report is slow, but this happens to roughly this many cases per week, of this type, costing this much. Without a measured effect you cannot tell whether your cause explains all of it, some of it, or none of it.",
      effort: "Half a day",
      outcome: "A baseline that every candidate cause has to account for.",
    },
    {
      title: "Ask when it started and get the change log",
      body: "Releases, policy changes, supplier changes, reorganisations, staff departures. Overlay the problem data on the change data and look for the join.",
      effort: "2 hours",
      outcome: "Either a strong candidate cause immediately, or the knowledge that this is a design issue rather than a regression.",
    },
    {
      title: "Split the failing cases against everything you have",
      body: "Every attribute in the data: product, region, channel, customer type, shift, day, team, value band. You are looking for concentration. Where the problem is not is as informative as where it is.",
      effort: "1 day",
      outcome: "A shortlist of differences between affected and unaffected cases, which is the strongest evidence available to you.",
    },
    {
      title: "Run a category sweep and build a small tree",
      body: "People, process, data, system, policy, supplier, environment. For each, ask whether it could contribute, and keep asking why until answers become decisions rather than mechanics. Two or three levels, branching where more than one answer exists.",
      effort: "Half a day",
      outcome: "A set of candidate causes that is broad rather than the one you found interesting first.",
    },
    {
      title: "Write a prediction for each candidate and test it",
      body: "If this is the cause, then something specific must be observable in the data. Write it before you look, then check. Most candidates die here, and that is the technique working.",
      effort: "2-3 days",
      outcome: "One or two causes that survived a real test, with the evidence attached.",
    },
    {
      title: "Size the survivors and name the layer",
      body: "What share of the measured effect does each surviving cause account for? Which layer does it sit in: mechanical, procedural, informational or structural? That determines who has to be in the room next.",
      effort: "Half a day",
      outcome: "A finding that can be acted on, with the right audience identified.",
    },
  ],

  exercises: [
    {
      title: "The negative case study",
      brief:
        "Take any recurring problem in your organisation and find the cases where it does not occur. Same process, same period, no failure. List every way those cases differ from the failing ones. Rank the differences by how plausibly each could cause the effect.",
      success:
        "You have at least three concrete differences and one testable prediction. If you cannot find any unaffected cases, that is itself a finding worth writing down.",
      time: "3 hours",
    },
    {
      title: "The prediction ledger",
      brief:
        "For your current investigation, write each candidate cause on a line with a prediction beside it, before checking anything. Then check them in order of how cheap the check is. Record which survived.",
      success:
        "At least half your candidates are eliminated by evidence rather than by opinion, and you can show somebody the ledger.",
      time: "Half a day",
    },
    {
      title: "Layer the last incident",
      brief:
        "Take any incident report from the last six months, yours or somebody else's. Write the mechanical, procedural, informational and structural account of it in four sentences. Then check which layer the agreed fix addressed.",
      success:
        "You can say whether the fix will prevent recurrence or only prevent that exact trigger, and you can defend the answer.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Running a workshop instead of an investigation",
      why: "A room of people who were not present generates plausible causes, and plausibility is not evidence. The output feels like progress and commits the organisation to whichever branch the senior person favoured.",
      fix: "Use group sessions to generate candidates and never to select one. Selection happens against data, after the session, by you.",
    },
    {
      mistake: "Stopping at the first satisfying answer",
      why: "The first answer is nearly always mechanical, and mechanical fixes prevent that trigger rather than the class of problem. The complaint returns in a different form.",
      fix: "Ask why at least twice more after you feel finished, and check whether other answers exist at each level rather than following a single chain.",
    },
    {
      mistake: "Treating a correlation as the cause",
      why: "Two things moving together is compatible with three different stories, and the one where a hidden factor drives both is the most common in business data.",
      fix: "Before accepting a correlation, name what else would be true if it were causal, and go and check that instead of the correlation itself.",
    },
    {
      mistake: "Digging past the point of action",
      why: "Attributing a problem to organisational culture or market conditions is often true and gives nobody anything to do. The analysis becomes an essay.",
      fix: "Stop at the deepest layer somebody in the business can actually change, and record explicitly if the true cause sits beyond it.",
    },
    {
      mistake: "Assuming a single cause",
      why: "Most real problems have two or three contributors. Picking one and fixing it produces a partial improvement that is then read as evidence the analysis was wrong.",
      fix: "Size each surviving cause against the measured effect. Say what share you expect the fix to remove, before it is implemented.",
    },
    {
      mistake: "Letting the write-up implicate a person",
      why: "It ends your access. Everyone in that area learns that talking to you carries a risk, and the next investigation gets a sanitised version of events.",
      fix: "Write about conditions and decisions, never about individuals. If a person's action was the trigger, describe what made that action likely.",
    },
    {
      mistake: "Not recording the causes you eliminated",
      why: "Six months later somebody proposes the theory you already disproved, and without the record the whole argument runs again from the start.",
      fix: "Keep the ruled-out list with the evidence beside each item. It is often the most reused part of the analysis.",
    },
  ],

  bestPractices: [
    "Measure the effect before hunting the cause.",
    "Ask when it started, then get the change log for that period.",
    "Compare affected cases against unaffected ones. The difference is the cause.",
    "Use a fixed category sweep so you do not investigate only what interests you.",
    "Branch when asking why, rather than following a single chain.",
    "Write a falsifiable prediction for every candidate before checking it.",
    "Name the layer each finding sits in: mechanical, procedural, informational or structural.",
    "Size each surviving cause against the measured effect.",
    "Stop at the deepest actionable level and say so.",
    "Record the causes you eliminated, with the evidence.",
    "Keep every write-up about conditions rather than about people.",
  ],

  proTips: [
    "The single most productive question is what happens when it goes wrong, asked of the person who deals with the aftermath rather than the person who caused it. Recovery work is meticulously understood by whoever performs it, and it maps the failure modes far better than any incident log, because the log records what somebody chose to type at the time.",
    "When a metric improves after your fix, check whether the underlying behaviour changed or only the measurement did. I have seen a queue time drop because work started being logged later, not because it started being done sooner. Always identify one independent signal that would move only if the real thing improved.",
    "If two of your candidate causes both survive testing, look for a shared parent before treating them as separate. Two mechanisms that appeared at the same time usually have one origin, and fixing the parent is cheaper than fixing both children.",
    "Write the sentence you expect to say to the sponsor before you finish the analysis, then ask yourself what evidence you would need to say it honestly. This exposes the gap between what you have shown and what you are about to claim, and it takes about four minutes.",
  ],

  businessApplications: [
    "Recurring incidents where the same fix has already been applied more than once.",
    "Quality problems, where the mechanical cause is usually visible and the structural one explains why it keeps happening here.",
    "Customer complaint clusters, where the difference question can be run against existing data without interviewing anybody.",
    "Cost overruns, where the trigger is a specific event and the condition is a control that was never designed for that volume.",
    "System performance issues that turn out to be process issues, and the reverse, which is more common.",
    "Post-implementation review when a delivered solution has not moved its target metric.",
  ],

  checklist: [
    "Effect stated with a number: how many, how often, what it costs.",
    "Start date established and compared against a change log.",
    "Failing cases split by every available attribute.",
    "Unaffected cases identified and compared.",
    "Category sweep completed across people, process, data, system, policy, supplier, environment.",
    "Why-tree built to at least two levels with branching.",
    "A written prediction recorded for every candidate cause.",
    "Predictions tested against data, with results recorded.",
    "Surviving causes sized against the measured effect.",
    "Layer named for each finding.",
    "Eliminated causes documented with evidence.",
    "Write-up reviewed for anything that reads as blame.",
  ],

  faqs: [
    {
      q: "Is the five whys technique actually useful?",
      a: "As a habit of asking one more question, yes. As a ritual producing a single five-link chain, no. Real problems branch. Ask whether other answers exist at each level, and stop when answers become decisions rather than mechanics, which is usually at two or three levels.",
    },
    {
      q: "How do I do this when there is no data?",
      a: "Start the data. Two weeks of structured recording by the people involved, capturing case type, what went wrong and when, will beat months of theorising. Meanwhile use the difference question against whatever cases people can recall in detail.",
    },
    {
      q: "How long should a root cause investigation take?",
      a: "For a well-bounded operational problem with data available, a week. Most of that is checking rather than thinking. If it is running past three weeks, the effect is probably not defined tightly enough to be explained by anything.",
    },
    {
      q: "What if the sponsor already knows the cause?",
      a: "Test their theory first and genuinely. It is sometimes right, and testing it earns you the licence to test two others. Refusing to consider it makes the rest of the analysis look like a position rather than an investigation.",
    },
    {
      q: "The real cause is a manager who will not change. What do I write?",
      a: "Describe the condition rather than the person: the incentive, the target, the absence of a control. Structural findings can be stated honestly without naming anybody, and stated that way they can actually be discussed in a governance forum.",
    },
    {
      q: "How certain do I need to be before recommending a fix?",
      a: "Certain enough to state what share of the measured effect you expect the fix to remove, and to have agreed how that will be checked afterwards. Predicting the size of the improvement in advance is the honest form of confidence.",
    },
  ],

  tools: [
    { name: "Query access to case-level data", what: "The difference question needs raw cases, not a summary report. This is the single most valuable access to negotiate.", cost: "Varies" },
    { name: "A change log", what: "Releases, policy updates, supplier changes, leavers. Frequently held in four places and never in one, which is worth fixing regardless.", cost: "Free" },
    { name: "A prediction ledger", what: "Candidate cause, prediction, test, result. One page, and it is the artefact that keeps the analysis honest.", cost: "Free" },
    { name: "A category checklist", what: "People, process, data, system, policy, supplier, environment. A fishbone used as a checklist rather than a workshop.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "symptom-versus-problem", anchor: "checking you are investigating the right thing", context: "Before analysis" },
    { slug: "thinking-critically-about-evidence", anchor: "reading the numbers sceptically", context: "Testing candidates" },
    { slug: "designing-the-future-state", anchor: "turning a confirmed cause into a target design", context: "After analysis" },
  ],

  relatedGuides: ["symptom-versus-problem", "thinking-critically-about-evidence", "designing-the-future-state"],

  conclusion: [
    "Take the problem you are working on now and spend an afternoon on the difference question alone: split the failing cases by every attribute in the data and find where the problem does not occur. It requires no meetings and no permission, and it produces stronger evidence than any workshop you could run instead.",
  ],
};

export default guide;
