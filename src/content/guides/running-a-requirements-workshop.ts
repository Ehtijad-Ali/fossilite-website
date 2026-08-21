import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "running-a-requirements-workshop",
  seoTitle: "Running a Group Session People Actually Contribute To",
  metaDescription:
    "Groups are bad at some things and brilliant at others. How to design a session that uses the second kind, handle the senior voice, and get real material out of a room.",
  title: "Running a Session People Contribute To",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "A badly run session is worse than no session. It eats a day of twelve people's time, produces conclusions dominated by whoever spoke most, and creates the impression that everybody was consulted, which then makes it harder to reopen anything later.",
    "The underlying problem is that groups are bad at some things and brilliant at others, and most sessions ask them to do the thing they are bad at. Groups are poor at remembering detail, poor at disagreeing with a senior person present, and poor at coming up with original ideas out loud. They are excellent at reacting to something concrete, spotting what is missing, and revealing that two teams have been meaning different things by one word.",
    "So the craft is designing sessions that use the second list and avoid the first. This is how I run them: who to invite and who to see separately, what reliably produces material, how to handle the room where nobody speaks and the room where one person speaks constantly, and what to do afterwards so the day was worth having.",
  ],

  whyItMatters: [
    "Getting twelve people in a room is expensive and hard to repeat. Most businesses will give you one good session with the right people, and if it produces a list of generalities you will not get another one for months.",
    "It is also where the most valuable finding on a project frequently turns up: two departments discovering, in front of each other, that they have been describing the same process differently for years. That cannot happen in one-to-one conversations, and it is the whole reason to get people together at all.",
    "And it is visible. People form a view of the project and of you based on whether the day felt purposeful, and that view decides how much of their time you get for the next six months.",
  ],

  coreConcepts: [
    {
      term: "Know what a group is good for",
      explain:
        "Use one-to-one conversations to collect what people know. Use a group to sort out differences, surface disagreement, prioritise, and react to something concrete.",
      detail:
        "If your objective is to capture the requirements, you have asked a group to do the thing groups are worst at, and you will get the loudest person's version with everybody else nodding along.",
    },
    {
      term: "Talk to people separately first, then bring them together",
      explain:
        "Do the one-to-ones before the session. Then get the group together to look at what you found, including the places where their accounts differ.",
      detail:
        "This is the opposite of the usual order and it changes everything. You walk in with material, you already know where the disagreements are, and the session becomes about resolving them rather than discovering they exist.",
    },
    {
      term: "Invite by what people do, not by seniority",
      explain:
        "You want the people who perform each step, whoever handles the awkward cases, whoever receives the output downstream, and one person with the authority to decide.",
      detail:
        "Eight to twelve is the practical ceiling. Beyond that the quiet people stop contributing entirely and it becomes a presentation with interruptions.",
    },
    {
      term: "A senior person in the room changes what gets said",
      explain:
        "When a director is present, the people doing the work agree with the director. That is not weakness, it is a sensible assessment of the cost of publicly disagreeing with somebody who writes your appraisal.",
      detail:
        "You have options: brief the senior person beforehand to hold back, run two separate sessions, or get people to write things down before anybody speaks. All three work. Ignoring it does not.",
    },
    {
      term: "Bring something wrong for people to react to",
      explain:
        "A draft with two steps missing and one condition backwards produces more in ten minutes than an hour of open questions.",
      detail:
        "Say out loud that it is definitely wrong somewhere. That one sentence gives everybody permission to correct it, including the people who would never volunteer anything unprompted.",
    },
    {
      term: "Get people to write before they speak",
      explain:
        "For any question where you want independent views, have everybody write their answer on a card before anybody says anything. Then collect them and read them out.",
      detail:
        "This removes the pull of whoever speaks first and the silencing effect of whoever is most senior. It takes two minutes and it is the single most effective thing on this list.",
    },
    {
      term: "Work from real cases, not from the abstract",
      explain:
        "Put a real case on the screen, with its reference number and its awkward details, and walk the group through what happens to it.",
      detail:
        "Talking in the abstract lets everybody agree while meaning different things. A specific case with a customer name and a date forces the differences straight out into the open.",
    },
    {
      term: "Write it up in the room, where people can see it",
      explain:
        "Write on the wall or put the notes on screen as you go. People correct what they can see and cannot correct what is in your notebook.",
      detail:
        "It also prevents the most common failure afterwards, which is a set of minutes nobody recognises because you reconstructed them from memory two days later.",
    },
    {
      term: "Put a time on each item and say what happens if it overruns",
      explain:
        "Agree at the start that anything unresolved when its slot ends goes on a list with a name and a date, rather than eating the next item's time.",
      detail:
        "That turns the most common facilitation crisis, one topic swallowing the day, into a routine step that does not require you to overrule anybody.",
    },
    {
      term: "Disagreement is the product, not the disruption",
      explain:
        "When two people contradict each other, slow down rather than moving on. That is the moment the session is paying for itself.",
      detail:
        "Ask both to describe a specific recent case. Usually they are describing different circumstances, and the boundary between those circumstances is a rule nobody had written down.",
    },
    {
      term: "Finish with decisions, names and dates",
      explain:
        "Read them back before anybody leaves. Not what was discussed, but what was decided, what was not, and who owns each open item.",
      detail:
        "Five minutes of reading back catches at least one thing that two people heard differently, and it is far cheaper to catch it in the room than in an email thread the following week.",
    },
    {
      term: "Send the output within a day",
      explain:
        "Same day if you can. Accuracy fades fast, and so does the sense that the session mattered.",
      detail:
        "Send it as a draft inviting corrections rather than as minutes. People correct drafts and ignore minutes, and the corrections are the whole point.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The wrong drawing that unstuck a stalled process.",
      walkthrough:
        "The problem: a BA could not get a team to describe their approval rules. Three sessions of open questions had produced only generalities. What was happening: she drew the process as she understood it, deliberately leaving two steps out and getting one condition backwards, put it on the wall, and said it was definitely wrong somewhere and she needed help fixing it.",
      result:
        "What changed: within five minutes three people were correcting it at once, and by the end of the session she had the full set of rules including an exception for one customer type that had never come up. Recognising something is easier than remembering it. When open questions stall, stop asking and bring something to be corrected.",
    },
    {
      kind: "illustration",
      scenario: "One word, two meanings, found in the room.",
      walkthrough:
        "The problem: sales and operations both used the word approval. In individual conversations each described it consistently and neither noticed anything odd. What was happening: in the session, walking a real order through the process, the BA put approval on the wall as a single step. Sales objected that it happens before the quote goes out. Operations objected that it happens after the specification is confirmed. They were describing two different approvals that had shared a name for years.",
      result:
        "What changed: the process split into two steps with different names, and somebody wrote a rule for what happens when the second reverses the first, which had been handled informally by one long-serving employee. This could not have come out of individual conversations, because each account was internally consistent. It is exactly what group sessions are for.",
    },
    {
      kind: "illustration",
      scenario: "The director who set the answer without meaning to.",
      walkthrough:
        "The problem: a prioritisation session opened with the operations director saying which area he thought mattered most. What was happening: the discussion that followed produced broad agreement with him. Afterwards, two people separately told the BA they had disagreed but did not want to argue in that setting. The session had produced a documented consensus that did not exist.",
      result:
        "What changed: they reran it with everybody writing their top three down privately before any discussion. The results were much more spread out and produced a genuine argument, which was the point. Anchoring and seniority are not personality problems and no amount of encouraging people to speak freely fixes them. They have to be designed around.",
    },
  ],

  learningPath: [
    {
      title: "Write the objective as a decision, not a topic",
      body: "Not a session about the ordering process, but by the end we will have agreed which of these four exception paths are in scope. If you cannot phrase it that way, the session is not ready.",
      effort: "30 minutes",
      outcome: "A session with a definition of success, which most of them lack.",
    },
    {
      title: "Do the one-to-ones first",
      body: "Talk to each attendee separately. Keep their versions apart rather than merging as you go, so the differences are still visible when you build the material.",
      effort: "2-4 days",
      outcome: "Material to react to, and advance knowledge of where the disagreements are.",
    },
    {
      title: "Build something deliberately imperfect",
      body: "A draft process, a draft set of rules, a draft list. Leave real gaps. Be ready to write fast when it gets corrected.",
      effort: "Half a day",
      outcome: "The thing the session will actually run on.",
    },
    {
      title: "Plan the session minute by minute",
      body: "Each item with a time, a technique (write first, walk a real case, vote, discuss) and what it should produce. Assume you will use about two thirds of what you plan.",
      effort: "1 hour",
      outcome: "A session that produces material rather than conversation.",
    },
    {
      title: "Handle the seniority problem in advance",
      body: "Brief senior attendees privately and ask them to speak last on each item. Or split the session. Or use write-first throughout. Decide which before the day.",
      effort: "15 minutes per person",
      outcome: "Contributions from people who would otherwise just have agreed with the room.",
    },
    {
      title: "Run it with visible notes and a parking list",
      body: "Write on the wall. Time each item. Park anything unresolved with a name and a date rather than letting it eat the next slot.",
      effort: "Half a day to a day",
      outcome: "A record everybody has seen and agreed to as it was produced.",
    },
    {
      title: "Read back the decisions, then send within a day",
      body: "Decisions, non-decisions, names, dates, read aloud before anybody leaves. Written up and sent round as a draft inviting corrections, same day where you can.",
      effort: "2 hours",
      outcome: "Corrections while memory is fresh, and a session that visibly produced something.",
    },
  ],

  exercises: [
    {
      title: "Turn an agenda into decisions",
      brief:
        "Take the agenda of any session happening in your business. Rewrite each item as the decision it should produce. Mark the items that cannot be phrased that way.",
      success:
        "You can name at least one item with no decision attached, which is usually the one that will eat the most time.",
      time: "45 minutes",
    },
    {
      title: "Try write-first once",
      brief:
        "In your next group discussion of any kind, ask everybody to write their answer to the key question down before anybody speaks. Collect and read them out without names. Compare the spread against what the discussion would have produced.",
      success:
        "The written answers show more variation than the discussion did, and at least one view comes out that would not have been said.",
      time: "10 minutes inside an existing meeting",
    },
    {
      title: "Build something deliberately wrong",
      brief:
        "Take a process you partly understand and draw it with two known gaps and one deliberate mistake. Show it to somebody who knows the process and time how long before they start correcting it.",
      success:
        "You get more specific detail in ten minutes than your last open-question conversation produced in an hour.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Using a group to collect requirements from scratch",
      why: "Groups are poor at remembering detail. You get the confident generalities of whoever speaks most, and the quiet people who actually do the work contribute nothing.",
      fix: "Collect individually, convene to sort out differences. Bring material to the group rather than expecting the group to produce it.",
    },
    {
      mistake: "Inviting too many people",
      why: "Past about twelve, participation collapses. It becomes a presentation with interruptions, and the people who came to contribute learn not to bother next time.",
      fix: "Invite by what people do in the process. If the list goes past twelve, run two sessions rather than one big one.",
    },
    {
      mistake: "Ignoring what seniority does to a room",
      why: "The people doing the work agree with directors. That is a sensible risk assessment, not timidity, and no amount of encouraging people to speak up changes it.",
      fix: "Design around it: brief senior attendees to speak last, use write-first, or split the session by level.",
    },
    {
      mistake: "Working in the abstract",
      why: "Everybody can agree about the ordering process while meaning different things. Abstraction hides exactly the disagreements you got the group together to find.",
      fix: "Put real cases on the screen with real reference numbers and real awkward details, and walk through them.",
    },
    {
      mistake: "Taking notes in a notebook",
      why: "People correct what they can see. Anything recorded privately gets reconstructed later and produces minutes nobody recognises.",
      fix: "Write on the wall or put the notes on screen live. Visible notes are also visible progress, which changes how the session feels.",
    },
    {
      mistake: "Letting one topic eat the day",
      why: "The last two items get five minutes each, and they are frequently the ones the session was actually for.",
      fix: "Put a time on every item and agree at the start that overruns get parked with a name and a date.",
    },
    {
      mistake: "Smoothing over disagreement to keep things moving",
      why: "The disagreement is the most valuable thing in the room. Moving past it wastes the whole reason for getting people together.",
      fix: "Slow down. Ask both people for a specific recent case. The boundary between their cases is usually an unwritten rule.",
    },
    {
      mistake: "Sending the output a week later",
      why: "Accuracy fades, corrections stop coming, and the session stops feeling like it mattered.",
      fix: "Send it within twenty-four hours as a draft inviting corrections rather than as minutes.",
    },
  ],

  bestPractices: [
    "Phrase every objective as a decision the session will produce.",
    "Talk to people individually before bringing the group together.",
    "Invite by what people do, capped at about twelve.",
    "Design around seniority rather than hoping it will not apply.",
    "Bring a deliberately imperfect draft to be corrected.",
    "Get people to write before they speak on anything where you want independent views.",
    "Work from real cases with real reference numbers.",
    "Write notes where everybody can see them.",
    "Put a time on every item, with a parking list for overruns.",
    "Slow down when people disagree rather than moving on.",
    "Read back decisions, non-decisions, names and dates before anybody leaves.",
    "Send a draft for correction within twenty-four hours.",
  ],

  proTips: [
    "Get somebody else to take the notes so you can run the room. Doing both means you will miss the moment when two people's faces change, which is often the only sign that something important has just been said and glossed over. If nobody is available, record it with permission and write only headings.",
    "Give the quiet person a job early. Not a question they might not want to answer, but a task: could you keep an eye on whether we are missing any exception paths. It gives them a legitimate reason to speak, and the exception they raise at eleven o'clock is often the most valuable thing that comes out all day.",
    "When the room goes silent after a question, count to seven before rescuing it. It will feel unbearable and it is the cheapest technique there is. The sentence that arrives at second six is nearly always the one somebody was deciding whether to say.",
    "Finish twenty minutes early whenever you can. It gets remembered, it makes people willing to come to the next one, and the last twenty minutes of any session produce almost nothing except the appearance of thoroughness.",
  ],

  businessApplications: [
    "Sorting out process descriptions that have drifted apart between departments or sites.",
    "Prioritisation, where the honest spread of opinion matters more than a quick consensus.",
    "Designing how something should work, where a group reacting to a draft beats any individual designing alone.",
    "Debriefing after supplier demonstrations, where structured written scoring beats a group discussion.",
    "Reviews after an incident, where the seniority effect is strongest and write-first matters most.",
    "Kick-offs, where the real objective is finding out what people think the project is for.",
  ],

  checklist: [
    "Objective phrased as a decision the session will produce.",
    "One-to-one conversations done beforehand.",
    "Attendees chosen by what they do, capped at about twelve.",
    "Seniority handled: briefing, split session, or write-first throughout.",
    "Deliberately imperfect draft prepared.",
    "Real cases chosen, with reference numbers and awkward details.",
    "Minute-by-minute plan with a technique and an output per item.",
    "Note-taker arranged so you can run the room.",
    "Visible note-taking set up: wall space or something on screen.",
    "Parking list started at the beginning.",
    "Decisions, names and dates read back before anybody leaves.",
    "Draft sent within twenty-four hours inviting corrections.",
  ],

  faqs: [
    {
      q: "How long should one of these be?",
      a: "Two to three hours for something focused, or a full day only where people have travelled and the agenda genuinely needs it. Attention drops sharply after about ninety minutes without a break, and a tired room agrees with things.",
    },
    {
      q: "What if the right people will not come?",
      a: "Do not run it. A session without the people who do the work produces a documented consensus that will not survive contact with reality, and it burns the goodwill you would need for a second attempt.",
    },
    {
      q: "How do I handle somebody who dominates?",
      a: "Structure rather than confrontation. Write-first rounds, going round the table in order, and asking specifically for the view of somebody who has not spoken. All of these work without anybody being told off in public.",
    },
    {
      q: "Should the sponsor attend?",
      a: "For prioritising and decisions, yes. For detailed information gathering, usually not, because their presence changes what the people doing the work say. Where they must attend, brief them to speak last on each item.",
    },
    {
      q: "Do these work remotely?",
      a: "Yes, and they need more structure, not less. Shorter sessions, more write-first rounds using a shared document, an explicit order for speaking, and something visible everybody can edit. The techniques that matter in person matter more remotely.",
    },
    {
      q: "What do I do when a session produces nothing?",
      a: "Say so honestly in the write-up and work out why: wrong people, wrong level of detail, nothing to react to, or a decision that was never actually available to the room. Running the same session again without changing one of those gets the same result.",
    },
  ],

  tools: [
    { name: "A deliberately imperfect draft", what: "A process, set of rules or list with real gaps. The most reliable unlock for a stalled session.", cost: "Free" },
    { name: "Cards or sticky notes", what: "For getting people to write before they speak. Removes anchoring and seniority effects for the cost of two minutes.", cost: "Free" },
    { name: "Wall space or a shared document on screen", what: "Visible notes, so people correct what they can see rather than what you remember.", cost: "Free" },
    { name: "A separate note-taker", what: "So you can watch the room. The reactions matter as much as the words.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "asking-questions-that-get-answers", anchor: "the one-to-one work that comes first", context: "Before the session" },
    { slug: "mapping-a-business-process", anchor: "the drawing most sessions run on", context: "Material" },
    { slug: "stakeholder-management-in-practice", anchor: "deciding who should be in the room", context: "Preparation" },
  ],

  relatedGuides: ["asking-questions-that-get-answers", "mapping-a-business-process", "stakeholder-management-in-practice"],

  conclusion: [
    "Before your next group session, spend an hour drawing the thing you want to discuss with two deliberate gaps in it, and open by saying it is wrong somewhere and you need help. That single change will produce more material than any agenda you could have written instead.",
  ],
};

export default guide;
