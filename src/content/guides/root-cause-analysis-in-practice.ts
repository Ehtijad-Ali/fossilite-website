import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "root-cause-analysis-in-practice",
  seoTitle: "Finding What Is Actually Causing the Problem",
  metaDescription:
    "Not a workshop with sticky notes. How to compare where the problem happens against where it does not, test a theory before believing it, and know when to stop digging.",
  title: "Finding What Is Actually Causing the Problem",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Root cause analysis has a bad reputation and it earned it. Somewhere along the way it became a workshop with sticky notes, where a group of people who were not there guess at causes for ninety minutes, produce a diagram with forty branches, and pick whichever branch the most senior person nodded at.",
    "The real work looks almost nothing like that. It is closer to a police investigation than a workshop. You come up with a theory, you work out what would have to be true if it were right, and then you go and check. Most of your time goes on the checking, and most theories die there. That is the whole point.",
    "This guide is the version I actually use inside businesses. Four things that work, the test that separates a cause from a coincidence, the layers you pass through on the way down, and the judgement call about when to stop, because you can always dig one level further and at some depth the answer stops being something anybody can act on.",
  ],

  whyItMatters: [
    "Fixing the wrong cause is not neutral, it is worse than doing nothing. You spend the money, the problem carries on, and now the business believes that area has been dealt with, so the next person to raise it gets less attention than you did.",
    "It also builds up. Every fix aimed at the wrong cause adds a system, a step or a check to the operation. Businesses collect these for decades, and a great deal of what looks like complexity in an old process is really a museum of confidently misdiagnosed problems.",
    "And doing it well is the clearest demonstration of what a BA is for. Anybody in the room can suggest a solution. Working out which of six plausible explanations is the real one, with evidence, is a different kind of contribution and people notice it.",
  ],

  coreConcepts: [
    {
      term: "A cause is something that, if you took it away, would stop the problem",
      explain:
        "That is the working test, and it is more demanding than it sounds. Most things offered up as causes are conditions that make the problem possible rather than things that make it happen.",
      detail:
        "Try it out loud: if this were not true, would the problem still occur? A surprising number of theories fail immediately, and failing in the room is much cheaper than failing after a build.",
    },
    {
      term: "Three different things get called the cause",
      explain:
        "A delivery is late. The trigger was a supplier's system going down. What made that possible was having no backup source for the same information. And that exists because nobody was willing to pay for a second one.",
      detail:
        "Fixing the trigger buys you nothing, because next time the trigger will be different. Fixing the condition prevents a whole class of problem. Fixing the decision is where change becomes permanent and also where it becomes political.",
    },
    {
      term: "Asking why, properly",
      explain:
        "The famous version is five whys and most of it is theatre, because one chain of five assumes there is exactly one cause and that the first answer at each step is right.",
      detail:
        "Use it as a ladder rather than a ritual. Ask why, then before moving on ask whether there is another answer at this level. You end up with a small tree rather than a line, which is far more honest. Stop when the answers become decisions somebody made rather than mechanics.",
    },
    {
      term: "Compare where it happens against where it does not",
      explain:
        "Which branch, which product, which shift, which customer type, which time of day. The difference between the cases that go wrong and the ones that do not contains the cause.",
      detail:
        "This is the most productive thing on this list and the most underused. If three branches have the problem and two do not, you have a free comparison sitting inside your own business, and no workshop is required to run it.",
    },
    {
      term: "Ask when it started",
      explain:
        "If the answer is a date, something changed then. If the answer is always, you are looking at a design decision rather than a fault, which is a completely different investigation.",
      detail:
        "Then get the list of changes: releases, policy updates, supplier changes, reorganisations, people leaving. Put the problem data next to the change data. This one question settles an embarrassing share of investigations in under an hour.",
    },
    {
      term: "Work through a fixed set of categories",
      explain:
        "People, process, data, system, policy, supplier, environment. Go through all of them so you do not only investigate whichever one you find interesting.",
      detail:
        "This is what a fishbone diagram is actually for. Used as a checklist by one analyst it stops tunnel vision. Used as a group brainstorm it mostly produces plausible-sounding branches nobody intends to check.",
    },
    {
      term: "Every theory needs a prediction you could be wrong about",
      explain:
        "If this cause is real, what else must be true in the data? Write the prediction down before you look. Then go and look.",
      detail:
        "For example: if the delay is caused by the weekly run, then things arriving on Thursday afternoon should be noticeably slower than things arriving on Monday. That is checkable in an afternoon and it either survives or it does not.",
    },
    {
      term: "Two things moving together is not proof",
      explain:
        "Errors go up when volume goes up, so volume looks like the cause. Often the real cause is that a checking step gets skipped under pressure, and volume just makes that visible.",
      detail:
        "It matters because the two stories have different answers. Hiring more people fixes one and not the other, and the third possibility, that something else is driving both, is the one people skip.",
    },
    {
      term: "Four layers you pass through",
      explain:
        "What physically happened. What the process allowed. What somebody could not see. And what made all of it the rational thing to do.",
      detail:
        "Most investigations stop at the first because it is concrete and satisfying. Most fixes that actually last sit at the third or fourth. Notice which layer your finding is in, because it tells you who needs to be in the room for the solution conversation.",
    },
    {
      term: "Stop when the next level is not something anybody can change",
      explain:
        "You can keep going until you reach the founding of the company. Depth is not a virtue. The right place to stop is the deepest level at which somebody in the business can actually do something.",
      detail:
        "If the honest cause sits outside anybody's influence, write that down and then work one level up. Deciding on purpose to fix a layer above the real cause is engineering. Doing it without noticing is waste.",
    },
    {
      term: "Two or three causes is normal, one is suspicious",
      explain:
        "Real problems in real businesses usually have a few contributing causes, often with one dominant. A clean single cause is sometimes true and is more often a sign that you stopped at the first satisfying answer.",
      detail:
        "Where there are several, size each one. Which accounts for most of the cases? You will often find one cause covers the majority and can be fixed cheaply, while the rest is a long tail not worth touching.",
    },
    {
      term: "Never let it turn into an investigation of a person",
      explain:
        "The moment it starts to feel like blame, the information stops. People will describe the process correctly and leave out the exception that involved them.",
      detail:
        "Say plainly that you are looking for what made the outcome likely, not who did it. And mean it, because if the write-up names one individual, nobody in that building will tell you anything useful again.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Sorted out in one afternoon, with no meetings.",
      walkthrough:
        "The problem: a support team was missing its response target on about a fifth of tickets and had asked for two more agents. What was happening: before agreeing, the BA split the missed tickets by every attribute available. Channel, product, customer tier, time of day, day of week, agent, and which team it came from. Nearly all the misses arrived through one channel, an email address feeding a shared inbox rather than the ticketing system, and only got logged when somebody happened to notice them.",
      result:
        "What changed: they routed that inbox into the ticketing system. The cause was never capacity, it was a way in that started the clock late and made the queue invisible. Two more agents would have improved the number slightly and left the mechanism completely intact. The whole finding came from splitting the failing cases by every attribute available, which needed no interviews and no workshop.",
    },
    {
      kind: "illustration",
      scenario: "The investigation that stopped one level too early.",
      walkthrough:
        "The problem: invoices were being paid late. What was happening: asking why got them to approvals being slow, then to approvers not being able to tell which invoices were urgent, then to the queue showing the submission date but not the payment due date. So the team added a due date column to the approval screen and closed the investigation. Three months later the numbers had barely moved. Asking why once more revealed that most approvers work from an email notification and never open the queue at all, and the notification contained neither date.",
      result:
        "What changed: they put the dates in the notification. The first answer had been correct and incomplete. Nobody had looked at where people actually looked. When a fix that follows sound analysis fails to move the number, the usual explanation is not that the analysis was wrong but that it stopped one layer above the behaviour it needed to change.",
    },
    {
      kind: "illustration",
      scenario: "The cause was a target, not a fault.",
      walkthrough:
        "The problem: a manufacturer had recurring quality failures on one product line. What was happening: physically, an inspection step was being skipped. The process allowed it, because inspections were recorded on paper collected weekly. Nobody could see a skipped inspection until the following week. And underneath all of that, the line was measured on units shipped per shift, and inspection was the only step that could be dropped without an immediate consequence.",
      result:
        "What changed: four true statements at four levels, and only the last one explains why this kept happening on this line and not on others with the same inspection. Any fix that left the measurement in place would have been fighting the incentive. This is the point where root cause analysis stops being an analytical exercise and becomes a conversation with whoever owns the target.",
    },
  ],

  learningPath: [
    {
      title: "Write the problem down with a number in it",
      body: "Not the report is slow, but this happens to roughly this many cases a week, of this type, costing this much. Without a measured problem you cannot tell whether your cause explains all of it, some of it, or none of it.",
      effort: "Half a day",
      outcome: "A baseline every theory has to account for.",
    },
    {
      title: "Ask when it started and get the list of changes",
      body: "Releases, policy changes, supplier changes, reorganisations, leavers. Put the problem data next to the change data and look for where they meet.",
      effort: "2 hours",
      outcome: "Either a strong theory immediately, or the knowledge that this is a design issue rather than something that broke.",
    },
    {
      title: "Split the failing cases every way you can",
      body: "Every attribute in the data: product, region, channel, customer type, shift, day, team, value band. You are looking for concentration. Where the problem does not happen is as useful as where it does.",
      effort: "1 day",
      outcome: "A shortlist of differences between the cases that fail and the ones that do not, which is the strongest evidence available.",
    },
    {
      title: "Go through the categories and build a small tree",
      body: "People, process, data, system, policy, supplier, environment. For each, ask whether it could contribute, and keep asking why until the answers become decisions rather than mechanics. Two or three levels, branching where there is more than one answer.",
      effort: "Half a day",
      outcome: "A set of theories that is broad rather than just the one you found interesting first.",
    },
    {
      title: "Write a prediction for each theory and test it",
      body: "If this is the cause, then something specific must show up in the data. Write it before you look, then check. Most theories die here, and that is the method working.",
      effort: "2-3 days",
      outcome: "One or two causes that survived a real test, with the evidence attached.",
    },
    {
      title: "Size what survived and name the layer",
      body: "What share of the problem does each surviving cause account for? Which layer does it sit in: what happened, what the process allowed, what nobody could see, or what made it rational? That decides who needs to be in the room next.",
      effort: "Half a day",
      outcome: "A finding somebody can act on, with the right audience identified.",
    },
  ],

  exercises: [
    {
      title: "Look at where it does not happen",
      brief:
        "Take any recurring problem in your business and find the cases where it does not occur. Same process, same period, no failure. List every way those cases differ from the failing ones. Rank the differences by how plausibly each could cause it.",
      success:
        "You have at least three concrete differences and one thing you could check. If you cannot find any cases where it does not happen, that is itself worth writing down.",
      time: "3 hours",
    },
    {
      title: "Write your predictions down first",
      brief:
        "For whatever you are investigating now, write each theory on a line with a prediction next to it, before checking anything. Then check them starting with whichever is cheapest to check. Record which survive.",
      success:
        "At least half your theories get eliminated by evidence rather than opinion, and you can show somebody the list.",
      time: "Half a day",
    },
    {
      title: "Take an old incident apart",
      brief:
        "Take any incident report from the last six months, yours or somebody else's. Write four sentences: what physically happened, what the process allowed, what nobody could see, and what made it the rational thing to do. Then check which layer the agreed fix addressed.",
      success:
        "You can say whether that fix prevents it happening again or only prevents that exact trigger, and defend the answer.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Running a workshop instead of an investigation",
      why: "A room of people who were not there produces plausible causes, and plausible is not evidence. The output feels like progress and commits the business to whichever branch the senior person favoured.",
      fix: "Use group sessions to come up with theories and never to pick one. Picking happens against data, afterwards, by you.",
    },
    {
      mistake: "Stopping at the first satisfying answer",
      why: "The first answer is nearly always about mechanics, and mechanical fixes prevent that trigger rather than the class of problem. The complaint comes back wearing a different shirt.",
      fix: "Ask why at least twice more after you feel finished, and check whether there is another answer at each level rather than following one chain.",
    },
    {
      mistake: "Treating two things moving together as proof",
      why: "It is equally consistent with three different stories, and the one where something hidden drives both is the most common in business data.",
      fix: "Before accepting it, name what else would be true if it were really causing the problem, and go and check that instead.",
    },
    {
      mistake: "Digging past the point of action",
      why: "Blaming the culture or the market is often true and gives nobody anything to do. The analysis turns into an essay.",
      fix: "Stop at the deepest level somebody in the business can change, and say so explicitly if the real cause sits beyond it.",
    },
    {
      mistake: "Assuming there is one cause",
      why: "Most real problems have two or three contributors. Picking one and fixing it gets you a partial improvement, which then gets read as evidence the analysis was wrong.",
      fix: "Size each surviving cause against the measured problem. Say what share you expect the fix to remove, before it is done.",
    },
    {
      mistake: "Letting the write-up point at a person",
      why: "It ends your access. Everybody in that area learns that talking to you carries a risk, and the next investigation gets a sanitised version of events.",
      fix: "Write about conditions and decisions, never individuals. If a person's action was the trigger, describe what made that action likely.",
    },
    {
      mistake: "Not recording what you ruled out",
      why: "Six months later somebody proposes the theory you already disproved, and without the record the whole argument runs again from scratch.",
      fix: "Keep the ruled-out list with the evidence beside each one. It is often the most reused part of the whole analysis.",
    },
  ],

  bestPractices: [
    "Measure the problem before hunting for the cause.",
    "Ask when it started, then get the list of changes for that period.",
    "Compare the cases that fail against the ones that do not.",
    "Work through a fixed set of categories so you do not only look where it interests you.",
    "Branch when asking why, rather than following one chain.",
    "Write a prediction for every theory before you check it.",
    "Name which layer each finding sits in.",
    "Size each surviving cause against the measured problem.",
    "Stop at the deepest level anybody can act on, and say so.",
    "Record what you ruled out, with the evidence.",
    "Keep every write-up about conditions rather than people.",
  ],

  proTips: [
    "The single most productive question is what happens when it goes wrong, asked of whoever deals with the aftermath rather than whoever caused it. The people who clean up understand the failure modes in detail, far better than any incident log, because a log only records what somebody chose to type at the time.",
    "When a number improves after your fix, check whether the actual behaviour changed or only the measuring did. I have seen a queue time drop because work started being logged later, not because it started being done sooner. Always find one independent signal that would only move if the real thing improved.",
    "If two of your theories both survive testing, look for a shared parent before treating them as separate. Two things that appeared at the same time usually have one origin, and fixing the parent is cheaper than fixing both children.",
    "Write the sentence you expect to say to the sponsor before you finish the analysis, then ask yourself what evidence you would need to say it honestly. That exposes the gap between what you have shown and what you are about to claim, and it takes about four minutes.",
  ],

  businessApplications: [
    "Problems that keep coming back after the same fix has already been applied more than once.",
    "Quality problems, where what physically happened is usually visible and the reason it keeps happening here is not.",
    "Clusters of customer complaints, where you can compare cases without interviewing anybody.",
    "Cost overruns, where the trigger is an event and the condition is a check never designed for that volume.",
    "System performance problems that turn out to be process problems, and the reverse, which is more common.",
    "Reviewing a solution that has gone live and has not moved the number it was meant to move.",
  ],

  checklist: [
    "Problem stated with a number: how many, how often, what it costs.",
    "Start date established and compared against a list of changes.",
    "Failing cases split by every available attribute.",
    "Cases where it does not happen identified and compared.",
    "All categories worked through: people, process, data, system, policy, supplier, environment.",
    "Why-tree built to at least two levels with branches.",
    "A written prediction recorded for every theory.",
    "Predictions checked against data, with results recorded.",
    "Surviving causes sized against the measured problem.",
    "Layer named for each finding.",
    "Ruled-out theories written down with evidence.",
    "Write-up checked for anything that reads as blame.",
  ],

  faqs: [
    {
      q: "Is the five whys technique actually useful?",
      a: "As a habit of asking one more question, yes. As a ritual producing one chain of five, no. Real problems branch. Ask whether there is another answer at each level, and stop when the answers become decisions rather than mechanics, which is usually two or three levels down.",
    },
    {
      q: "How do I do this when there is no data?",
      a: "Start collecting some. Two weeks of the people involved recording what went wrong and when will beat months of theorising. Meanwhile, compare against whatever cases people can remember in detail.",
    },
    {
      q: "How long should this take?",
      a: "For a well-defined operational problem with data available, about a week. Most of that is checking rather than thinking. If it runs past three weeks, the problem is probably not defined tightly enough to be explained by anything.",
    },
    {
      q: "What if the sponsor already knows the cause?",
      a: "Test their theory first and genuinely. It is sometimes right, and testing it earns you the licence to test two others. Refusing to consider it makes the rest of your work look like a position rather than an investigation.",
    },
    {
      q: "The real cause is a manager who will not change. What do I write?",
      a: "Describe the condition rather than the person: the incentive, the target, the missing check. Structural findings can be stated honestly without naming anybody, and stated that way they can actually be discussed in a meeting.",
    },
    {
      q: "How certain do I need to be before recommending a fix?",
      a: "Certain enough to say what share of the problem you expect the fix to remove, and to have agreed how that will be checked afterwards. Predicting the size of the improvement in advance is the honest form of confidence.",
    },
  ],

  tools: [
    { name: "Access to the individual cases", what: "Comparing where it happens against where it does not needs raw cases, not a summary report. The most valuable access to negotiate.", cost: "Varies" },
    { name: "A list of changes", what: "Releases, policy updates, supplier changes, leavers. Usually held in four places and never in one, which is worth fixing anyway.", cost: "Free" },
    { name: "A theory and prediction list", what: "Theory, prediction, test, result. One page, and it is what keeps the analysis honest.", cost: "Free" },
    { name: "A category checklist", what: "People, process, data, system, policy, supplier, environment. A fishbone used as a checklist rather than a workshop.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "symptom-versus-problem", anchor: "checking you are investigating the right thing", context: "Before analysis" },
    { slug: "thinking-critically-about-evidence", anchor: "reading the numbers sceptically", context: "Testing theories" },
    { slug: "designing-the-future-state", anchor: "turning a confirmed cause into a design", context: "After analysis" },
  ],

  relatedGuides: ["symptom-versus-problem", "thinking-critically-about-evidence", "designing-the-future-state"],

  conclusion: [
    "Take the problem you are working on now and spend an afternoon on one thing: split the failing cases by every attribute in the data and find where the problem does not happen. It needs no meetings and no permission, and it produces stronger evidence than any workshop you could run instead.",
  ],
};

export default guide;
