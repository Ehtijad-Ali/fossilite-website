import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "running-a-requirements-workshop",
  seoTitle: "Running a Requirements Workshop People Contribute To",
  metaDescription:
    "Facilitation for analysts: who to invite, how to stop the senior voice setting the answer, structures that produce material, and what to do when the room goes quiet.",
  title: "Running a Requirements Workshop",
  keywords: [
    "requirements workshop",
    "facilitation techniques",
    "workshop facilitation business analyst",
    "group elicitation",
    "running a workshop",
    "jad session",
  ],
  category: "communication",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "A badly run workshop is worse than no workshop. It consumes a day of twelve people's time, produces a set of conclusions dominated by whoever spoke most, and creates the impression that everybody was consulted, which then makes it harder to reopen anything later.",
    "The core problem is that groups are bad at some things and excellent at others, and most workshops ask them to do the thing they are bad at. Groups are poor at recalling detail, poor at expressing disagreement with a senior person present, and poor at generating original ideas out loud. They are extremely good at reacting to something concrete, spotting what is missing, and revealing where two teams have been meaning different things by one word.",
    "So the craft is designing sessions that use the second set and avoid the first. This guide is how I run them: who to invite and who to see separately, the structures that reliably produce material, how to handle the room where nobody speaks and the room where one person speaks constantly, and what to do afterwards so the day was worth holding.",
  ],

  whyItMatters: [
    "Getting twelve people in a room is expensive and hard to repeat. Most organisations will give you one good session with the right people, and if it produces a list of generalities you will not get another one for months.",
    "Workshops are also where the most valuable finding in a project frequently surfaces: two departments discovering, in front of each other, that they have been describing the same process differently for years. That discovery cannot happen in one-to-one interviews, and it is the reason to run a group session at all.",
    "And a workshop is a visible performance. People form a view of the project and of you based on whether the day felt purposeful. That impression determines how much of their time you get for the next six months.",
  ],

  coreConcepts: [
    {
      term: "Know what the group is for",
      explain:
        "Use one-to-one sessions to gather what people know. Use groups to reconcile differences, surface disagreement, prioritise, and react to something concrete.",
      detail:
        "If your workshop objective is to capture the requirements, you have asked a group to do the thing groups are worst at, and you will get the loudest person's version with everybody else nodding.",
    },
    {
      term: "Interview individually first, then convene",
      explain:
        "Do the one-to-ones before the workshop. Then bring the group together to look at what you found, including the places where their accounts differ.",
      detail:
        "This inverts the usual order and it changes everything. You walk in with material, you already know where the disagreements are, and the session becomes about resolving them rather than discovering that they exist.",
    },
    {
      term: "Invite by role in the process, not by seniority",
      explain:
        "You want the people who perform each step, the person who handles exceptions, whoever receives the output downstream, and one person with authority to decide.",
      detail:
        "Eight to twelve is the practical ceiling. Beyond that, the quiet people stop contributing entirely and the session becomes a presentation with interruptions.",
    },
    {
      term: "Seniority in the room changes what gets said",
      explain:
        "When a director is present, operators agree with the director. This is not weakness, it is a rational assessment of the cost of disagreeing publicly with somebody who writes your appraisal.",
      detail:
        "Options: brief the senior person in advance to hold back, split into two sessions, or use written-first techniques so positions are recorded before anybody speaks. All three work. Ignoring it does not.",
    },
    {
      term: "Bring something wrong to react to",
      explain:
        "A draft process map with two steps missing and one condition backwards produces more information in ten minutes than an hour of open questions.",
      detail:
        "Say out loud that it is definitely wrong somewhere. That single sentence gives everyone permission to correct it, including the people who would never volunteer a requirement unprompted.",
    },
    {
      term: "Write before you speak",
      explain:
        "For any question where you want independent views, have everyone write their answer on a card before anybody says anything. Then collect and read them out.",
      detail:
        "This removes the anchoring effect of the first speaker and the suppression effect of the most senior. It takes two minutes and it is the single most effective facilitation technique I know.",
    },
    {
      term: "Work from real cases, not from the abstract",
      explain:
        "Put a real case on the screen, with its reference number and its awkward details, and walk the group through what happens to it.",
      detail:
        "Abstraction lets everybody agree while meaning different things. A specific case with a customer name and a date forces the differences into the open immediately.",
    },
    {
      term: "Capture in the room, visibly",
      explain:
        "Write on the wall or project the notes as you go. People correct what they can see and cannot correct what is in your notebook.",
      detail:
        "It also removes the most common workshop failure afterwards, which is a set of minutes that nobody recognises because the analyst reconstructed them from memory two days later.",
    },
    {
      term: "Timebox each item and say what happens when it overruns",
      explain:
        "Agree at the start that anything unresolved after its slot goes on a list with an owner and a date rather than consuming the next item's time.",
      detail:
        "This turns the most common facilitation crisis, one topic eating the day, into a routine procedure that does not require you to overrule anybody.",
    },
    {
      term: "Disagreement is the product, not the disruption",
      explain:
        "When two people contradict each other, slow down rather than moving on. That is the moment the workshop is paying for itself.",
      detail:
        "Ask both to describe a specific recent case. Usually they are describing different circumstances, and the boundary between those circumstances is a business rule nobody had written down.",
    },
    {
      term: "End with decisions, owners and dates",
      explain:
        "Read them back before anybody leaves. Not what was discussed, but what was decided, what was not, and who owns each open item.",
      detail:
        "Five minutes of reading back catches at least one thing that two people heard differently, and it is far cheaper to catch it in the room than in an email thread the following week.",
    },
    {
      term: "Send the output within twenty-four hours",
      explain:
        "Same day if possible. Accuracy decays fast, and so does the sense that the session mattered.",
      detail:
        "Send it as a draft inviting correction rather than as minutes. People correct drafts and ignore minutes, and the corrections are the point.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The wrong map that unlocked a stalled process.",
      walkthrough:
        "A BA cannot get a team to describe their approval rules. Three sessions of open questions have produced generalities. So she draws the process as she has understood it, deliberately leaving two steps out and getting one condition backwards, puts it on the wall, and says it is definitely wrong somewhere and she needs help fixing it.",
      result:
        "Within five minutes three people are correcting it simultaneously, and by the end of the session she has the full rule set including an exception for one customer category that had never come up. Recognition is easier than recall. When open questioning stalls, stop asking and bring something to be corrected.",
    },
    {
      kind: "illustration",
      scenario: "One word, two meanings, discovered in the room.",
      walkthrough:
        "Sales and Operations both use the word approval. In individual interviews each described it consistently and neither noticed anything unusual. In the workshop, walking a real order through the process, the BA places approval as a single step. Sales objects that it happens before the quote is sent. Operations objects that it happens after the specification is confirmed. They are describing two different approvals that have shared a name for years.",
      result:
        "The map split into two steps with different names, and a rule was written about what happens when the second reverses the first, which had been handled informally by one long-serving employee. This finding could not have come from interviews, because each account was internally consistent. It is precisely what group sessions are for.",
    },
    {
      kind: "illustration",
      scenario: "The director who set the answer without meaning to.",
      walkthrough:
        "A prioritisation session opens with the operations director stating which area he thinks matters most. The subsequent discussion produces broad agreement with his view. Afterwards, two attendees separately tell the BA that they disagreed but did not want to argue in that setting. The workshop has produced a documented consensus that does not exist.",
      result:
        "The session was rerun using written-first voting: everybody records their top three privately before any discussion. The results were markedly more distributed and produced a genuine argument, which was the point. Anchoring and seniority effects are not personality problems and cannot be facilitated away by encouragement. They have to be designed around structurally.",
    },
  ],

  learningPath: [
    {
      title: "Write the objective as a decision, not a topic",
      body: "Not a workshop about the ordering process, but by the end of this session we will have agreed which of these four exception paths are in scope. If you cannot phrase it that way, the session is not ready.",
      effort: "30 minutes",
      outcome: "A session with a definition of success, which most workshops lack.",
    },
    {
      title: "Do the one-to-ones first",
      body: "Interview each attendee individually. Record their version separately rather than merging as you go, so that the differences are still visible when you build the material.",
      effort: "2-4 days",
      outcome: "Material to react to, and advance knowledge of where the disagreements are.",
    },
    {
      title: "Build something deliberately imperfect",
      body: "A draft process map, a draft rule table, a draft list. Leave real gaps. Prepare to write fast when it gets corrected.",
      effort: "Half a day",
      outcome: "The artefact the session will actually run on.",
    },
    {
      title: "Design the structure minute by minute",
      body: "Each item with a time, a technique (write-first, walk a real case, vote, discuss) and an intended output. Assume you will use about two thirds of what you plan.",
      effort: "1 hour",
      outcome: "A session that produces material rather than conversation.",
    },
    {
      title: "Manage the seniority problem in advance",
      body: "Brief senior attendees privately: ask them to speak last on each item. Or split the session. Or use write-first throughout. Decide which before the day.",
      effort: "15 minutes per person",
      outcome: "Contributions from people who would otherwise have agreed with the room.",
    },
    {
      title: "Run it with visible capture and a parking list",
      body: "Write on the wall. Timebox each item. Park anything unresolved with an owner and a date rather than letting it consume the next slot.",
      effort: "Half a day to a day",
      outcome: "A record everybody has seen and agreed to as it was produced.",
    },
    {
      title: "Read back decisions, then send within a day",
      body: "Decisions, non-decisions, owners, dates, read aloud before anybody leaves. Written up and circulated as a draft inviting correction, same day where possible.",
      effort: "2 hours",
      outcome: "Corrections while memory is fresh, and a workshop that visibly produced something.",
    },
  ],

  exercises: [
    {
      title: "Convert an objective into a decision",
      brief:
        "Take the agenda of any workshop happening in your organisation. Rewrite each item as the decision it should produce. Mark the items that cannot be phrased that way.",
      success:
        "You can identify at least one agenda item that has no decision attached, which is usually the one that will consume the most time.",
      time: "45 minutes",
    },
    {
      title: "Run a write-first round",
      brief:
        "In your next group discussion of any kind, ask everyone to write their answer to the key question on paper before anybody speaks. Collect and read them out anonymously. Compare the spread with what the discussion would have produced.",
      success:
        "The written answers show more variation than the discussion did, and at least one view emerges that would not have been voiced.",
      time: "10 minutes within an existing meeting",
    },
    {
      title: "Build a deliberately wrong draft",
      brief:
        "Take a process you partly understand and draw it with two known gaps and one deliberate error. Show it to somebody who knows the process and time how long it takes them to start correcting it.",
      success:
        "You get more specific detail in ten minutes than your last open-question conversation produced in an hour.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Using a workshop to gather requirements from scratch",
      why: "Groups are poor at recall and detail. You get the confident generalities of whoever speaks most, and the quiet people who actually do the work contribute nothing.",
      fix: "Gather individually, convene to reconcile. Bring material to the group rather than expecting the group to produce it.",
    },
    {
      mistake: "Inviting too many people",
      why: "Beyond about twelve, participation collapses. The session becomes a presentation with interruptions, and the people who came to contribute learn not to bother next time.",
      fix: "Invite by role in the process. If the list exceeds twelve, run two sessions rather than one large one.",
    },
    {
      mistake: "Ignoring the effect of seniority in the room",
      why: "Operators agree with directors. That is a rational assessment of risk, not timidity, and no amount of encouraging people to speak freely changes it.",
      fix: "Design around it: brief senior attendees to speak last, use write-first techniques, or split the session by level.",
    },
    {
      mistake: "Working in the abstract",
      why: "Everybody can agree about the ordering process while meaning different things. Abstraction hides exactly the disagreements you convened the group to find.",
      fix: "Put real cases on the screen with real reference numbers and real awkward details, and walk the group through them.",
    },
    {
      mistake: "Capturing in a notebook",
      why: "People correct what they can see. Anything recorded privately is reconstructed later and produces minutes nobody recognises.",
      fix: "Write on the wall or project the notes live. Visible capture is also visible progress, which changes how the session feels.",
    },
    {
      mistake: "Letting one topic eat the day",
      why: "The last two agenda items get five minutes each, and they are frequently the ones the session was actually convened for.",
      fix: "Timebox every item and agree at the start that overruns get parked with an owner and a date.",
    },
    {
      mistake: "Smoothing over disagreement to keep the session moving",
      why: "The disagreement is the most valuable thing in the room. Moving past it wastes the reason for holding a group session at all.",
      fix: "Slow down. Ask both parties for a specific recent case. The boundary between their cases is usually an unwritten business rule.",
    },
    {
      mistake: "Sending the output a week later",
      why: "Accuracy decays, corrections stop coming, and the session stops feeling like it mattered.",
      fix: "Circulate within twenty-four hours as a draft inviting correction rather than as minutes.",
    },
  ],

  bestPractices: [
    "Phrase every objective as a decision the session will produce.",
    "Interview individually before convening the group.",
    "Invite by role in the process, capped at about twelve.",
    "Design around seniority effects rather than hoping they will not apply.",
    "Bring a deliberately imperfect draft to be corrected.",
    "Use write-first rounds for any question where you want independent views.",
    "Work from real cases with real reference numbers.",
    "Capture visibly, on the wall or on screen.",
    "Timebox every item, with a parking list for overruns.",
    "Slow down when people disagree rather than moving on.",
    "Read back decisions, non-decisions, owners and dates before anybody leaves.",
    "Circulate a draft for correction within twenty-four hours.",
  ],

  proTips: [
    "Ask somebody else to take the notes so you can facilitate. Trying to do both means you will miss the moment when two people's faces change, which is often the only signal that something important has just been said and glossed over. If nobody is available, record the session with permission and take only headings.",
    "Put the quiet person's name on something early. Not a question they might not want to answer, but a task: could you keep an eye on whether we are missing any exception paths. It gives them a legitimate reason to speak, and in my experience the exception they raise at eleven o'clock is usually the most valuable contribution of the day.",
    "When the room goes silent after a question, count to seven before rescuing it. It will feel unbearable and it is the single cheapest technique available. The sentence that arrives at second six is nearly always the one somebody was deciding whether to say.",
    "Finish twenty minutes early whenever you can. It is remembered, it makes people willing to attend the next one, and the last twenty minutes of any workshop produce almost nothing except the appearance of thoroughness.",
  ],

  businessApplications: [
    "Reconciling process descriptions across departments or sites that have drifted apart.",
    "Prioritisation sessions where the honest spread of opinion matters more than a quick consensus.",
    "Future state design, where a group reacting to a draft outperforms any individual designing alone.",
    "Vendor demonstration debriefs, where structured written scoring beats a group discussion.",
    "Post-incident reviews, where seniority effects are strongest and write-first techniques matter most.",
    "Kick-off sessions, where the real objective is establishing what people think the project is for.",
  ],

  checklist: [
    "Objective phrased as a decision the session will produce.",
    "One-to-one interviews completed beforehand.",
    "Attendees selected by role, capped at about twelve.",
    "Seniority effect handled: briefing, split session, or write-first throughout.",
    "Deliberately imperfect draft prepared.",
    "Real cases selected, with reference numbers and awkward details.",
    "Minute-by-minute structure with a technique and output per item.",
    "Note-taker arranged so the facilitator can facilitate.",
    "Visible capture set up: wall space or a projected document.",
    "Parking list started at the beginning of the session.",
    "Decisions, owners and dates read back before anybody leaves.",
    "Draft output circulated within twenty-four hours inviting correction.",
  ],

  faqs: [
    {
      q: "How long should a requirements workshop be?",
      a: "Two to three hours for a focused session, or a full day only where people have travelled and the agenda genuinely needs it. Attention degrades sharply after about ninety minutes without a break, and a tired room agrees with things.",
    },
    {
      q: "What if the right people will not attend?",
      a: "Do not run it. A workshop without the people who perform the work produces a documented consensus that will not survive contact with reality, and it burns the goodwill you would need for a second attempt.",
    },
    {
      q: "How do I handle someone who dominates the room?",
      a: "Structure rather than confrontation. Write-first rounds, going round the table in order, and asking specifically for the view of somebody who has not spoken. All of these work without anybody being told off in public.",
    },
    {
      q: "Should the sponsor attend?",
      a: "For prioritisation and decisions, yes. For detailed elicitation, usually not, because their presence changes what operators say. Where they must attend, brief them to speak last on each item.",
    },
    {
      q: "Are remote workshops workable?",
      a: "Yes, and they need more structure, not less. Shorter sessions, more write-first rounds using a shared document, an explicit order for speaking, and a visible artefact everybody can edit. The techniques that matter most in person matter more remotely.",
    },
    {
      q: "What do I do when the session produces nothing?",
      a: "Say so honestly in the write-up and diagnose why: wrong people, wrong altitude, no material to react to, or a decision that was never actually available to the room. Running the same session again without changing one of those will produce the same result.",
    },
  ],

  tools: [
    { name: "A deliberately imperfect draft", what: "A process map, rule table or list with real gaps. The single most reliable unlock for a stalled session.", cost: "Free" },
    { name: "Index cards or sticky notes", what: "For write-first rounds. Removes anchoring and seniority effects for the cost of two minutes.", cost: "Free" },
    { name: "Wall space or a projected shared document", what: "Visible capture, so people correct what they can see rather than what you remember.", cost: "Free" },
    { name: "A separate note-taker", what: "So the facilitator can watch the room. The reactions matter as much as the words.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "asking-questions-that-get-answers", anchor: "the one-to-one work that comes first", context: "Before the workshop" },
    { slug: "mapping-a-business-process", anchor: "the artefact most sessions run on", context: "Material" },
    { slug: "stakeholder-management-in-practice", anchor: "deciding who should be in the room", context: "Preparation" },
  ],

  relatedGuides: ["asking-questions-that-get-answers", "mapping-a-business-process", "stakeholder-management-in-practice"],

  conclusion: [
    "Before your next group session, spend an hour drawing the thing you want to discuss with two deliberate gaps in it, and open by saying it is wrong somewhere and you need help. That single change will produce more material than any agenda you could have written instead.",
  ],
};

export default guide;
