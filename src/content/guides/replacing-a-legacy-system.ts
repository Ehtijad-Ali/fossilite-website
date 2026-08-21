import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "replacing-a-legacy-system",
  seoTitle: "Replacing an Old System Without Losing What It Did",
  metaDescription:
    "Nobody knows everything the old system does. How to find out from evidence, decide what not to rebuild, and switch it off without stranding somebody.",
  title: "Replacing an Old System",
  keywords: [
    "legacy system replacement",
    "system modernisation",
    "reverse engineering requirements",
    "decommissioning a system",
    "strangler pattern business analysis",
    "legacy migration",
  ],
  category: "business-analysis",
  level: "Advanced",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "The hardest question in replacing an old system is not what the new one should do. It is what the old one actually does, and nobody knows all of it. The people who built it have gone, the documentation describes an intention from fifteen years ago, and a lot of the behaviour that matters was never designed at all. It is rules added in a hurry, workarounds that became the process, and one report that three departments depend on which somebody's predecessor wrote.",
    "That produces the classic failure. The new system gets specified from the documented process and from talking to people who describe what they intend to do. It goes live and immediately cannot handle a category of case the old one had been quietly handling for a decade.",
    "This guide is about that discovery problem, and the decisions that follow from it. What to rebuild and what to deliberately drop, whether to swap it all at once or in pieces, how to cope while both are running, and how to switch the old one off without stranding somebody who was depending on it in a way nobody wrote down.",
  ],

  whyItMatters: [
    "These are among the most expensive things a business does and among the most likely to disappoint. The cost is obvious and the benefit is spread thin, which makes them politically fragile. They need to keep showing progress over a period long enough for the sponsor to change twice.",
    "The amount of analysis is also unusually high compared to the building. Specifying something new means understanding what people need. Replacing something old means understanding what it does, why it does it, which of that is still needed, and which of it was a mistake everyone has since adapted around.",
    "And nobody gets any credit for one that works, because the business already had the capability. They only ever hear about the bits you missed, which is exactly why the effort belongs in the finding-out.",
  ],

  coreConcepts: [
    {
      term: "Do not rebuild it, work out what is still needed",
      explain:
        "The instinct is to write down what the old system does and call that the requirement. That preserves fifteen years of compromises and rebuilds things nobody has used since 2016.",
      detail:
        "Find out what actually gets used before deciding to rebuild anything. In most old systems a small share of the functions carry nearly all of the use, and the rest is a museum.",
    },
    {
      term: "The system is not the only place the work happens",
      explain:
        "The real operation is the system plus the spreadsheets, the local databases, the approvals done over email, the printed checklists and the things one long-serving person knows.",
      detail:
        "Replace only what the system does and you leave the business in a state where all that scaffolding no longer fits. That is often how a technically successful replacement produces an operational disaster.",
    },
    {
      term: "Find out what it does from evidence, not documentation",
      explain:
        "Usage logs, transaction data, the actual settings, scheduled jobs, report definitions, and the codes sitting in the tables. All of it is more reliable than any document.",
      detail:
        "Where somebody can walk you through the code, the rules are in there. A BA who gets an engineer to explain the rules in one part of the system for an afternoon will learn more than a week of interviews would produce.",
    },
    {
      term: "Ask what the old system stops people doing",
      explain:
        "An old system shapes the process around its limits. Some of the steps you see exist only because it cannot do something, and they should not be carried forward.",
      detail:
        "The question that finds these: if this system could do anything, what would you stop doing tomorrow? It separates real process from working around a limitation, and the two look identical from the outside.",
    },
    {
      term: "Four ways to do it, with very different risk",
      explain:
        "Swap everything at once. Move over one function at a time. Move over one team or region at a time. Or build the new one alongside and shift work across piece by piece until the old one is empty.",
      detail:
        "The last one is usually the lowest risk and takes the longest, and it needs both systems running together and sharing data, which is real cost. All at once is fastest and puts all the risk into one weekend. Both are legitimate and the choice should be made on purpose.",
    },
    {
      term: "Running both at once is a design problem",
      explain:
        "While you are part way through, two systems hold overlapping information. Which one is right about what, how they stay in step, and what happens when they disagree are all requirements.",
      detail:
        "This in-between state often lasts years and is routinely left undesigned because it is temporary. Undesigned temporary states running for years is exactly where errors pile up.",
    },
    {
      term: "Put a number on what the old system is costing you",
      explain:
        "Old-system risk usually gets argued in vague terms. It is far more persuasive with numbers: what is out of support and from when, what cannot be patched, what happens if the one person who understands it leaves, what a day without it costs.",
      detail:
        "This is also the honest case for doing it at all. Modernisation justified by vague talk about being more agile loses every prioritisation. Modernisation justified by a support end date and something that cannot be patched does not.",
    },
    {
      term: "Find everybody using it that nobody has written down",
      explain:
        "Connections, exports, scheduled files, a partner receiving a weekly report, a spreadsheet fed by a download. All of them break silently.",
      detail:
        "Ask every team, not just the obvious ones: what do you download from this, and what do you do with it? This finds things no technical analysis will.",
    },
    {
      term: "Drop things on purpose, and write it down",
      explain:
        "Some functions should not be rebuilt. Say so out loud, name who is affected, and get the decision accepted rather than letting it be discovered during testing.",
      detail:
        "A written list of what is not being carried forward is one of the most valuable documents in this kind of project and one of the rarest. Dropping something silently is what turns a scope decision into a defect.",
    },
    {
      term: "Keep the old system readable after you stop using it",
      explain:
        "Read-only access or a searchable copy, for well past go-live. Questions keep coming for months and some can only be answered from the original.",
      detail:
        "Switching it off cannot be undone. Another six months of a read-only copy is almost always cheaper than needing it once and not having it.",
    },
    {
      term: "Switching off is a project, not an afterthought",
      explain:
        "Connections disconnected, data archived for an agreed period, licences cancelled, access removed, and a record of what was kept and where.",
      detail:
        "Projects routinely finish without doing this, which means the business now runs two systems and has achieved a cost increase. Make switching off a funded, dated deliverable with a name against it.",
    },
    {
      term: "Deliver something visible early",
      explain:
        "These run long enough for sponsors to change and priorities to shift. Something that cannot show anything until year three is politically fragile no matter how good the plan is.",
      detail:
        "Sequence so something visible lands early, even if it is not the biggest piece. It is not just about appearances: delivering early also tests the assumptions everything else depends on.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What unsupported systems cost when something arrives.",
      walkthrough:
        "The UK National Audit Office investigated the WannaCry cyber attack and its effect on the NHS, reporting in October 2017. At least 81 of 236 trusts across England were infected, along with a further 603 primary care and other NHS organisations including 595 GP practices. At least 34% of trusts had their services disrupted, 6,912 appointments were confirmed cancelled with estimates suggesting over 19,000 in total, and five accident and emergency departments had to send patients elsewhere.",
      result:
        "The NAO found that the organisations that got hit shared preventable weaknesses, specifically Windows systems that were unpatched or no longer supported, and said the attack could have been prevented by following basic security practice. For anyone building a case to replace an old system, this is the concrete version of an argument usually made in the abstract. The cost of running unsupported technology is not a vague worry. It is specific and countable, and putting it that way is what gets the work funded.",
      source: {
        label: "National Audit Office (27 October 2017). Investigation: WannaCry cyber attack and the NHS",
        url: "https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/",
      },
    },
    {
      kind: "illustration",
      scenario: "The function nobody had used in a year.",
      walkthrough:
        "The problem: a replacement was about to be specified from the old system's full feature list, which was long. What was happening: before writing anything, the BA got usage figures for every screen and function over eighteen months. A small share of functions accounted for nearly all the use. A long tail had not been opened at all in that period, including several that people had described in interviews as essential.",
      result:
        "What changed: taking the unused list back to the business produced a short conversation and a much shorter scope. Two turned out to be genuinely needed once a year and were kept. The rest were dropped, with the decision written down. Usage figures do not replace the conversation. They change what the conversation is about, from opinion to evidence.",
    },
    {
      kind: "illustration",
      scenario: "Steps that existed because the system could not.",
      walkthrough:
        "The problem: mapping the current process turned up a sequence where staff export data, work on it in a spreadsheet, and type the result back in. The instinct was to build that workflow into the new system. What was happening: instead, the BA asked what the spreadsheet was actually doing. It performed a calculation the old system could not handle, and applied a rule introduced years after the system was built.",
      result:
        "What changed: the requirement became the calculation and the rule, not the exporting and retyping. Specifying what people were observed doing would have rebuilt a workaround as a permanent feature. Asking what the system stops people doing separates real process from working around a limitation, and the two look identical if you only watch.",
    },
  ],

  learningPath: [
    {
      title: "Put numbers on what the old system costs you",
      body: "Support status and end dates, what can and cannot be patched, how many people understand it, incident history, and what a day without it costs. Turn vague old-system risk into figures.",
      effort: "3-5 days",
      outcome: "A case that survives being prioritised against revenue projects.",
    },
    {
      title: "Get usage figures for every function",
      body: "Which screens and functions get used, over twelve to eighteen months, plus how many transactions of each type. This decides what is worth rebuilding.",
      effort: "1 week including access",
      outcome: "A scope based on evidence, usually far smaller than the documented feature list.",
    },
    {
      title: "Find what happens outside the system",
      body: "Spreadsheets, local databases, email approvals, printed checklists, and what one person knows. Ask every team what they keep outside the system and what they download.",
      effort: "1-2 weeks",
      outcome: "The scaffolding that a system-only replacement would strand.",
    },
    {
      title: "Work out the rules from evidence",
      body: "Settings, scheduled jobs, report definitions, the codes in the tables, and where possible somebody walking you through the code.",
      effort: "2-4 weeks",
      outcome: "The rules that exist in the system and in no document anywhere.",
    },
    {
      title: "Separate real process from working around a limitation",
      body: "For every step, ask whether it exists because the business needs it or because the old system cannot do something. Ask what people would stop doing if the system could do anything.",
      effort: "1 week",
      outcome: "A target that is smaller than what exists today, rather than a faithful copy of it.",
    },
    {
      title: "Choose how you are going to do it, on purpose",
      body: "All at once, function by function, team by team, or alongside and shifting over. State the risk, cost and elapsed time of each and recommend one with the trade-off visible.",
      effort: "3-5 days",
      outcome: "A deliberate choice rather than a default inherited from the last project.",
    },
    {
      title: "Design the period where both are running",
      body: "Which system is right about what, how they stay in step, what happens when they disagree, and how long this will last.",
      effort: "1-2 weeks",
      outcome: "The in-between state treated as a design problem rather than a temporary inconvenience.",
    },
    {
      title: "Write the not-carrying-forward list and get it agreed",
      body: "Everything being deliberately dropped, who is affected, and what they will do instead. Circulated and accepted rather than discovered.",
      effort: "2-3 days",
      outcome: "Scope decisions that stay decisions instead of becoming defects during testing.",
    },
    {
      title: "Plan and fund switching the old one off",
      body: "Connections disconnected, data archived for an agreed period, licences cancelled, access removed, archive access written down and dated.",
      effort: "2-4 weeks at the end",
      outcome: "An actual reduction in systems rather than a second one to look after.",
    },
  ],

  exercises: [
    {
      title: "Look at the long tail of usage",
      brief:
        "For any system in your business, get twelve months of usage by screen or function. Rank by how much they are used and work out what share of functions accounts for most of the activity. Identify anything not used at all.",
      success:
        "You have a ranked list and can name at least one function described as important that nobody has opened in a year.",
      time: "Half a day",
    },
    {
      title: "Find the steps that only exist because of the system",
      brief:
        "Take a process that uses an old system. For each manual step, ask whether it exists because the business needs it or because the system cannot do something. Mark each one.",
      success:
        "You can name at least two steps that are working around a limitation and would simply not exist in a replacement.",
      time: "2-3 hours",
    },
    {
      title: "Put numbers on the old system",
      brief:
        "For one old system, find out its support status and end date, whether it can be patched, how many people understand it, and what a day without it would cost the business.",
      success:
        "You have four numbers or dates that turn vague concern into something a finance director would respond to.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Writing down what the old system does and calling it the requirement",
      why: "You rebuild fifteen years of compromises, including features nobody uses and workarounds for limits the new system will not have.",
      fix: "Get usage figures for every function, and for every step ask whether it is real process or working around a limitation.",
    },
    {
      mistake: "Scoping only what the system does",
      why: "The real operation includes spreadsheets, local databases and approvals over email. Replace the system alone and all of that no longer fits.",
      fix: "Ask every team what they keep outside the system and what they download, and treat the answers as requirements.",
    },
    {
      mistake: "Relying on the documentation",
      why: "It describes an intention from years ago and has not tracked any of the changes made in a hurry since, which are exactly the ones that matter day to day.",
      fix: "Find out from evidence: usage figures, settings, scheduled jobs, codes in the data, and the code itself where somebody can walk you through it.",
    },
    {
      mistake: "Missing the people using it that nobody recorded",
      why: "Exports, scheduled files and partner reports break silently when the source goes away, and whoever is affected finds out before you do.",
      fix: "Follow every file and download that leaves, and ask every team rather than only the ones already involved.",
    },
    {
      mistake: "Dropping functions quietly",
      why: "It gets discovered during testing, where a scope decision looks exactly like a defect and gets treated as one.",
      fix: "Write a list of what is not being carried forward with the affected people named, and get it accepted beforehand.",
    },
    {
      mistake: "Not designing the period where both run",
      why: "It can go on for years with two systems holding overlapping data, no agreement about which is right, and manual checking nobody planned for.",
      fix: "Design it properly: which system is right about what, how they stay in step, what happens on a disagreement, and how long.",
    },
    {
      mistake: "Arguing old-system risk in vague terms",
      why: "Talk about agility and technical debt loses to revenue projects in every prioritisation, so it stays unfunded until an incident forces it.",
      fix: "Put numbers on it: support end dates, what cannot be patched, how many people understand it, what a day of downtime costs.",
    },
    {
      mistake: "Never switching the old one off",
      why: "The project ends, the old system stays on, and the business has achieved a cost increase and two systems to look after.",
      fix: "Make switching off a funded, dated deliverable with a name against it and an archive plan.",
    },
    {
      mistake: "Delivering nothing visible for two years",
      why: "The project outlives its sponsor and gets cut in a budget round, however good it is technically.",
      fix: "Sequence something visible early. It also tests the assumptions everything else depends on.",
    },
  ],

  bestPractices: [
    "Find out what actually gets used before deciding to rebuild anything.",
    "Scope the operation, not just the system: include the spreadsheets and manual scaffolding.",
    "Find out what it does from evidence rather than documentation.",
    "Ask what the system stops people doing.",
    "For every step, separate real process from working around a limitation.",
    "Put numbers and dates on what the old system costs you.",
    "Follow every export, file and download to whoever receives it.",
    "Choose how to do it on purpose, with the risk stated.",
    "Design the period where both systems run.",
    "Publish a list of what will not be carried forward.",
    "Sequence something visible early.",
    "Keep the old system readable well past go-live.",
    "Fund and date the switching off, with an owner.",
  ],

  proTips: [
    "Find the person who has been there longest in an unglamorous job and treat their time as the scarcest resource on the project. They know which rule was added after which incident, which report three departments quietly depend on, and what was tried in 2015 and failed. That knowledge exists nowhere else and it walks out of the door when they retire.",
    "Ask what happens on the busiest day of the year and follow that path specifically. Old systems accumulate special handling for peak periods, year end and legal deadlines, and those are the behaviours least likely to come up in an interview because they happen once a year and everybody has stopped noticing them.",
    "Get an engineer to walk you through the rules in one part of the code for an afternoon. You do not need to read code to follow somebody explaining an if-then. I have learned more about how a business really works from two of those sessions than from a month of interviews, because code cannot round its answers off.",
    "When somebody says the new system must do exactly what the old one does, ask them to name the last five real cases where the old behaviour mattered. Sometimes they produce them immediately and you have found a genuine requirement. More often it turns out to be about familiarity, which is a different problem with a different answer.",
  ],

  businessApplications: [
    "Replacing a core system, where the finding-out is most of the analysis effort.",
    "Moving off a platform that is reaching end of life, where the support date is the driving constraint.",
    "Bringing two businesses together after a merger, where two systems do overlapping things differently.",
    "Moving to the cloud, where the technical move is simpler and the finding-out is identical.",
    "Replacing a bought-in product, where years of accumulated settings hold the real rules.",
    "Reducing the number of applications, where switching things off is the actual objective rather than a closing task.",
  ],

  checklist: [
    "Numbers on the old system: support dates, what can be patched, key people, cost of downtime.",
    "Usage figures obtained for every function over at least twelve months.",
    "What happens outside the system listed: spreadsheets, databases, email approvals, checklists.",
    "Rules worked out from settings, jobs, codes in the data, and the code itself.",
    "Peak period and year end special handling investigated specifically.",
    "Every step marked as real process or working around a limitation.",
    "All exports, files and downloads followed to whoever receives them.",
    "Approach chosen on purpose with risk and elapsed time stated.",
    "Period where both run designed: which is right about what, how they stay in step, how long.",
    "Not-carrying-forward list written, circulated and accepted.",
    "Something visible sequenced early.",
    "Archive and read access agreed with a retention period.",
    "Switching off funded, dated and owned.",
  ],

  faqs: [
    {
      q: "How do we find out what the old system actually does?",
      a: "From evidence rather than documentation: usage figures, settings, scheduled jobs, the codes sitting in the data, and the code itself where somebody can walk you through it. Then confirm with the people who have been there longest.",
    },
    {
      q: "All at once or bit by bit?",
      a: "Bit by bit is usually lower risk and takes longer, and it means designing the period where both run, which is real cost. All at once is faster and puts all the risk into one weekend. Choose on purpose and say what each option costs, rather than inheriting a default.",
    },
    {
      q: "How do we justify this to a finance director?",
      a: "Put numbers on the old system: support end dates, what cannot be patched, how many people understand it, incident history, and what a day without it costs. Vague arguments about agility lose to revenue projects every single time.",
    },
    {
      q: "What about functions nobody can explain?",
      a: "Find out how much they get used first. If nobody uses them, propose dropping them and see who objects. If they are used and nobody can explain them, that is worth raising on its own, because the business is depending on something nobody understands.",
    },
    {
      q: "How long should we keep the old system after go-live?",
      a: "Longer than the plan says. Read-only access or a searchable copy for months, because questions keep coming and some can only be answered from the original. Switching off cannot be undone and the archive is cheap.",
    },
    {
      q: "The business insists the new system must work exactly like the old one. What do I do?",
      a: "Ask for the last five real cases where that specific behaviour mattered. Sometimes that produces a genuine requirement. More often it reveals the request is about familiarity, which needs training and involvement rather than a rebuilt feature.",
    },
  ],

  tools: [
    { name: "Usage figures by screen and function", what: "Twelve to eighteen months. The evidence that decides what is worth rebuilding and what is a museum.", cost: "Varies" },
    { name: "An engineer and an afternoon with the code", what: "Where somebody can walk you through it, the rules are in there. More productive than a month of interviews.", cost: "Free" },
    { name: "A not-carrying-forward list", what: "Everything deliberately dropped, who is affected, what they do instead. Rare and extremely valuable.", cost: "Free" },
    { name: "A switching-off plan with an owner and a date", what: "Connections, archive, retention, licences, access. Without it the number of systems grows rather than shrinks.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: Investigation, WannaCry cyber attack and the NHS", kind: "Docs", note: "Primary source, October 2017. The concrete version of an argument usually made in the abstract about unsupported systems.", url: "https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/" },
  ],

  internalLinks: [
    { slug: "planning-a-data-migration", anchor: "moving the data itself", context: "Migration" },
    { slug: "impact-assessment-before-a-change", anchor: "finding everything that depends on it", context: "Discovery" },
    { slug: "delivering-change-into-a-business", anchor: "the changeover and getting people using it", context: "Delivery" },
  ],

  relatedGuides: ["planning-a-data-migration", "impact-assessment-before-a-change", "delivering-change-into-a-business"],

  conclusion: [
    "Get twelve months of usage figures for the system you are replacing and rank them. The long tail of functions nobody has opened in a year is scope you were about to rebuild for no reason, and the conversation about dropping it goes very differently when it starts from evidence rather than opinion.",
  ],
};

export default guide;
