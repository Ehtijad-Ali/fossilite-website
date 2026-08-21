import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "replacing-a-legacy-system",
  seoTitle: "Replacing a Legacy System Without Losing What It Did",
  metaDescription:
    "How to discover undocumented behaviour, decide what not to rebuild, choose a replacement strategy, and retire the old system without stranding anybody.",
  title: "Replacing a Legacy System",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 18,

  intro: [
    "The hardest question in a legacy replacement is not what the new system should do. It is what the old one actually does, which nobody knows in full, because the people who built it have gone, the documentation describes an intention from fifteen years ago, and a substantial amount of the behaviour that matters is emergent: rules added under pressure, workarounds that became process, and one report that three departments depend on which was written by somebody's predecessor.",
    "This produces the characteristic failure of these programmes. The new system is specified from the documented process and from interviews with people who describe what they intend to do, then goes live and immediately fails to handle a category of case that the old system had quietly been handling for a decade.",
    "This guide is about that discovery problem, and about the decisions that follow from it: what to rebuild and what to deliberately drop, whether to replace in one move or in pieces, how to run two systems while the transition happens, and how to retire the old one without stranding somebody who was depending on it in a way nobody recorded.",
  ],

  whyItMatters: [
    "Legacy replacements are among the most expensive things an organisation does and among the most likely to disappoint. The cost is visible and the value is diffuse, which makes them politically fragile: they need to keep demonstrating progress over a period long enough for the sponsor to change twice.",
    "The analysis burden is also unusually high relative to the build. Specifying a new capability means understanding what people need. Replacing an old system means understanding what it does, why it does it, which of that is still needed, and which of it was a mistake everyone has adapted around.",
    "And the risk profile is unforgiving. Nobody gets credit for a replacement that works, because the business already had the capability. They only find out about the parts you missed, which is why the discovery work is where the effort should go.",
  ],

  coreConcepts: [
    {
      term: "Do not rebuild it, work out what is still needed",
      explain:
        "The instinct is to specify the old system's behaviour as the requirement. That preserves fifteen years of accumulated compromise and rebuilds features nobody has used since 2016.",
      detail:
        "Establish usage for every function before deciding to rebuild it. In most legacy systems a small proportion of the functionality carries the overwhelming majority of the use, and the rest is a museum.",
    },
    {
      term: "The system is not the only place the behaviour lives",
      explain:
        "The real operation is the system plus the spreadsheets, the local databases, the email approvals, the printed checklists and the things one long-serving person knows.",
      detail:
        "A replacement scoped only to what the system does will migrate a business into a state where all of that scaffolding no longer fits, which is frequently how a technically successful replacement produces an operational disaster.",
    },
    {
      term: "Discover from evidence, not from documentation",
      explain:
        "Usage logs, transaction data, the actual configuration, scheduled jobs, report definitions, and the exception codes in the tables. All of it is more reliable than any document.",
      detail:
        "Where source code is available and readable, the business rules are in it. A BA who can get an engineer to walk them through the rules in one module for an afternoon will learn more than a week of interviews would produce.",
    },
    {
      term: "Ask what the system stops people doing",
      explain:
        "Legacy constraints shape the process around them. Some of the steps you observe exist only because the old system cannot do something, and they should not be carried forward.",
      detail:
        "The question that finds these: if this system could do anything, what would you stop doing tomorrow? It separates genuine process from compensating behaviour, and the two look identical from the outside.",
    },
    {
      term: "Four replacement strategies with very different risk",
      explain:
        "Big bang replacement, phased by function, phased by user group or region, and incremental strangulation where new capability is built alongside and traffic is moved piece by piece.",
      detail:
        "Strangulation is usually the lowest risk and the longest elapsed time, and it requires the two systems to coexist and share data, which is real cost. Big bang is fastest and concentrates all the risk into one weekend. Both are legitimate and the choice should be explicit.",
    },
    {
      term: "Coexistence is a design problem, not a temporary inconvenience",
      explain:
        "During any phased approach, two systems hold overlapping data. Which is authoritative for what, how they synchronise, and what happens when they disagree are all requirements.",
      detail:
        "This interim state frequently lasts years and is routinely left undesigned because it is temporary. Undesigned temporary states running for years are exactly where the errors accumulate.",
    },
    {
      term: "Establish what unsupported actually costs",
      explain:
        "Legacy risk is usually argued qualitatively. It is far more persuasive quantified: what is out of support, what cannot be patched, what happens if the one person who understands it leaves, what a day of unavailability costs.",
      detail:
        "This is also the honest case for the programme. Modernisation justified by vague notions of agility gets deprioritised. Modernisation justified by a named, dated support expiry and an unpatchable vulnerability does not.",
    },
    {
      term: "Find the undocumented consumers before you change anything",
      explain:
        "Interfaces, extracts, scheduled files, a partner receiving a weekly report, a spreadsheet pulling a download. All of them break silently.",
      detail:
        "The question to ask every team, not only the obvious ones: what do you download from this, and what do you do with it afterwards? This finds things no technical dependency analysis will.",
    },
    {
      term: "Deliberately drop things, and record it",
      explain:
        "Some functionality should not be rebuilt. Say so explicitly, name who is affected, and get the decision accepted rather than letting it be discovered at acceptance testing.",
      detail:
        "An explicit list of what is not being carried forward is one of the most valuable artefacts in a replacement programme, and one of the rarest. Silent omission is what turns a scope decision into a defect.",
    },
    {
      term: "Keep the old system readable after it stops being used",
      explain:
        "Read-only access or a queryable archive, well past go-live. Questions arrive for months and some can only be answered from the original.",
      detail:
        "Decommissioning is irreversible. The cost of another six months of a read-only copy is almost always smaller than the cost of needing it once and not having it.",
    },
    {
      term: "Decommissioning is a project, not an afterthought",
      explain:
        "Interfaces disconnected, data archived to an agreed retention period, licences cancelled, access removed, documentation of what was retained and where.",
      detail:
        "Programmes routinely finish without decommissioning, which means the organisation now runs two systems and has achieved a cost increase. Make retirement a funded, dated deliverable with an owner.",
    },
    {
      term: "Sustain the case over a long programme",
      explain:
        "These run long enough for sponsors to change and priorities to shift. A programme that cannot demonstrate value until year three is politically fragile regardless of its technical merit.",
      detail:
        "Sequence so that something visible lands early, even if it is not the largest piece. It is not just optics: early delivery also tests the assumptions the rest of the programme rests on.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What unsupported systems cost when something arrives.",
      walkthrough:
        "The UK National Audit Office investigated the WannaCry cyber attack and its effect on the NHS, reporting in October 2017. At least 81 of 236 trusts across England were infected, along with a further 603 primary care and other NHS organisations including 595 GP practices. At least 34% of trusts experienced disruption, 6,912 appointments were confirmed cancelled with estimates suggesting over 19,000 in total, and five accident and emergency departments diverted patients elsewhere.",
      result:
        "The NAO found that infected organisations shared preventable weaknesses, specifically unpatched or unsupported Windows operating systems, and that the attack could have been prevented by following basic IT security practice. For a legacy replacement business case this is the concrete version of an argument usually made in the abstract: the cost of running unsupported technology is not a vague risk, it is a specific and quantifiable exposure, and stating it that way is what gets modernisation funded.",
      source: {
        label: "National Audit Office (27 October 2017). Investigation: WannaCry cyber attack and the NHS",
        url: "https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/",
      },
    },
    {
      kind: "illustration",
      scenario: "The function that was never rebuilt because nobody used it.",
      walkthrough:
        "Before specifying a replacement, a BA obtains usage logs for every screen and function in the legacy system over eighteen months. A small proportion of functions account for the overwhelming majority of use. A long tail has not been opened at all in that period, including several that had been described in interviews as essential.",
      result:
        "Taking the unused list back to the business produced a short discussion and a much shorter scope. Two functions turned out to be genuinely needed annually and were retained. The rest were dropped explicitly, with the decision recorded. Usage data does not replace the conversation, and it changes what the conversation is about, from opinion to evidence.",
    },
    {
      kind: "illustration",
      scenario: "The steps that existed because the system could not.",
      walkthrough:
        "Mapping the current process reveals a sequence where staff export data, manipulate it in a spreadsheet, and re-enter the result. The instinct is to specify this workflow in the new system. Instead the BA asks what the spreadsheet is doing, and finds it performs a calculation the old system cannot handle and applies a rule that was introduced after the system was built.",
      result:
        "The new requirement was the calculation and the rule, not the export and re-entry. Specifying the observed process would have rebuilt a workaround as a permanent feature. Asking what the system stops people doing separates genuine process from compensating behaviour, and the two look identical when you only watch.",
    },
  ],

  learningPath: [
    {
      title: "Quantify what the legacy position costs",
      body: "Support status and dates, patchability, key person dependency, incident history, and the cost of a day of unavailability. Turn qualitative legacy risk into numbers.",
      effort: "3-5 days",
      outcome: "A business case argument that survives prioritisation against revenue projects.",
    },
    {
      title: "Get usage data for every function",
      body: "Screen and function usage over twelve to eighteen months, plus transaction volumes by type. This determines what is worth rebuilding.",
      effort: "1 week including access",
      outcome: "An evidence-based scope, usually far smaller than the documented feature list.",
    },
    {
      title: "Find the behaviour outside the system",
      body: "Spreadsheets, local databases, email approvals, printed checklists, and the knowledge one person holds. Ask every team what they keep outside the system and what they download.",
      effort: "1-2 weeks",
      outcome: "The scaffolding that a system-only replacement would strand.",
    },
    {
      title: "Reverse engineer the rules from evidence",
      body: "Configuration, scheduled jobs, report definitions, exception codes, and where readable, the code itself with an engineer walking you through it.",
      effort: "2-4 weeks",
      outcome: "The rules that exist in the system and in no document.",
    },
    {
      title: "Separate genuine process from compensating behaviour",
      body: "For every step, ask whether it exists because the business needs it or because the old system cannot do something. Ask what people would stop doing if the system could do anything.",
      effort: "1 week",
      outcome: "A future state that is smaller than the current one rather than a faithful reproduction of it.",
    },
    {
      title: "Choose a replacement strategy explicitly",
      body: "Big bang, phased by function, phased by group, or strangulation. State the risk, cost and elapsed time of each and recommend one with the trade-off visible.",
      effort: "3-5 days",
      outcome: "A deliberate decision rather than a default inherited from the last programme.",
    },
    {
      title: "Design the coexistence period",
      body: "Which system is authoritative for what, how they synchronise, what happens when they disagree, and how long this state will last.",
      effort: "1-2 weeks",
      outcome: "The interim state treated as a design rather than as a temporary inconvenience.",
    },
    {
      title: "Write the not-carrying-forward list and get it accepted",
      body: "Everything deliberately dropped, who is affected, and what they will do instead. Circulated and accepted rather than discovered.",
      effort: "2-3 days",
      outcome: "Scope decisions that stay decisions rather than becoming defects at acceptance testing.",
    },
    {
      title: "Plan and fund decommissioning as a deliverable",
      body: "Interfaces disconnected, data archived against a retention period, licences cancelled, access removed, archive access documented and dated.",
      effort: "2-4 weeks at the end",
      outcome: "An actual reduction in estate rather than a second system to maintain.",
    },
  ],

  exercises: [
    {
      title: "The usage long tail",
      brief:
        "For any system in your organisation, get twelve months of screen or function usage. Rank by use and calculate what proportion of functions account for most of the activity. Identify anything not used at all.",
      success:
        "You have a ranked list and can name at least one function described as important that has not been used in a year.",
      time: "Half a day",
    },
    {
      title: "The compensating behaviour hunt",
      brief:
        "Take a process that uses a legacy system. For each manual step, ask whether it exists because the business needs it or because the system cannot do something. Mark each.",
      success:
        "You can name at least two steps that are compensating for a system limitation and would not exist in a replacement.",
      time: "2-3 hours",
    },
    {
      title: "Quantify the legacy position",
      brief:
        "For one legacy system, establish its support status and end date, whether it can be patched, how many people understand it, and what a day of unavailability would cost the business.",
      success:
        "You have four numbers or dates that turn a qualitative legacy risk into something a finance director would respond to.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Specifying the old system as the requirement",
      why: "You rebuild fifteen years of accumulated compromise, including features nobody has used for years and workarounds for constraints the new system will not have.",
      fix: "Establish usage for every function and ask, for every step, whether it is genuine process or compensating behaviour.",
    },
    {
      mistake: "Scoping only what the system does",
      why: "The real operation includes spreadsheets, local databases and email approvals. Replace the system alone and all of that scaffolding no longer fits.",
      fix: "Ask every team what they keep outside the system and what they download, and treat the answers as requirements.",
    },
    {
      mistake: "Relying on documentation",
      why: "It describes an intention from years ago and has not tracked the changes made under pressure since, which are exactly the ones that matter operationally.",
      fix: "Discover from evidence: usage logs, configuration, scheduled jobs, exception codes, and the code itself where it is readable.",
    },
    {
      mistake: "Missing the undocumented consumers",
      why: "Extracts, scheduled files and partner reports break silently when the source is retired, and the affected party finds out before you do.",
      fix: "Trace every outbound file and download, and ask every team rather than only those the project already involves.",
    },
    {
      mistake: "Dropping functionality silently",
      why: "It is discovered at acceptance testing, where a scope decision looks exactly like a defect and gets treated as one.",
      fix: "Write an explicit not-carrying-forward list with the affected parties named, and get it accepted in advance.",
    },
    {
      mistake: "Leaving coexistence undesigned",
      why: "The interim state can run for years with two systems holding overlapping data, no agreed source of truth, and manual reconciliation nobody planned for.",
      fix: "Design it: authority per fact, synchronisation, conflict handling, and an expected duration.",
    },
    {
      mistake: "Arguing legacy risk qualitatively",
      why: "Vague appeals to agility and technical debt lose to revenue projects in every prioritisation, so the replacement stays unfunded until an incident forces it.",
      fix: "Quantify support expiry dates, patchability, key person dependency and the cost of unavailability.",
    },
    {
      mistake: "Never decommissioning",
      why: "The programme ends, the old system stays on, and the organisation has achieved a cost increase and two systems to maintain.",
      fix: "Make retirement a funded, dated deliverable with a named owner and an archive plan.",
    },
    {
      mistake: "Delivering nothing visible for two years",
      why: "The programme outlives its sponsor and gets cut in a budget round, regardless of technical merit.",
      fix: "Sequence something visible early. It also tests the assumptions the rest of the programme depends on.",
    },
  ],

  bestPractices: [
    "Establish usage for every function before deciding to rebuild it.",
    "Scope the operation, not the system: include spreadsheets and manual scaffolding.",
    "Discover behaviour from evidence rather than documentation.",
    "Ask what the system stops people doing.",
    "Separate genuine process from compensating behaviour, step by step.",
    "Quantify the cost of the legacy position with dates and numbers.",
    "Trace every outbound extract, file and download to its consumer.",
    "Choose a replacement strategy explicitly with its risk stated.",
    "Design the coexistence period as a real design problem.",
    "Publish an explicit list of what will not be carried forward.",
    "Sequence something visible early in the programme.",
    "Keep the old system readable well past go-live.",
    "Fund and date decommissioning as a deliverable with an owner.",
  ],

  proTips: [
    "Find the person who has been there longest in an unglamorous role and treat their time as the scarcest resource on the programme. They know which rule was added after which incident, which report three departments quietly depend on, and what was tried in 2015 and failed. In a legacy replacement that knowledge exists nowhere else, and it disappears when they retire.",
    "Ask what happens on the busiest day of the year and follow that path specifically. Legacy systems accumulate special handling for peak periods, year end and regulatory deadlines, and these are the behaviours least likely to appear in any interview because they happen once a year and everybody has normalised them.",
    "Get an engineer to walk you through the business rules in one module of the source code for an afternoon. You do not need to read code fluently to follow somebody explaining a conditional. I have learned more about how a business actually operates from two of those sessions than from a month of stakeholder interviews, because the code cannot round its answers.",
    "When somebody says the new system must do exactly what the old one does, ask them to name the last five real cases where the old behaviour mattered. Sometimes they produce them immediately and you have found a genuine requirement. More often the request turns out to be about familiarity, and that is a different problem with a different solution.",
  ],

  businessApplications: [
    "Core system replacement, where the discovery burden dominates the analysis effort.",
    "Mainframe and end-of-life platform migration, where the support expiry date is the driving constraint.",
    "Post-merger consolidation, where two systems do overlapping things differently.",
    "Cloud migration, where the technical move is simpler and the behavioural discovery is identical.",
    "Vendor product replacement, where configuration accumulated over years holds the real rules.",
    "Application estate rationalisation, where decommissioning is the actual objective rather than a closing task.",
  ],

  checklist: [
    "Legacy position quantified: support dates, patchability, key person dependency, unavailability cost.",
    "Usage data obtained for every function over at least twelve months.",
    "Behaviour outside the system inventoried: spreadsheets, databases, email approvals, checklists.",
    "Rules reverse engineered from configuration, jobs, exception codes and code.",
    "Peak-period and year-end special handling investigated specifically.",
    "Every step classified as genuine process or compensating behaviour.",
    "All outbound extracts, files and downloads traced to consumers.",
    "Replacement strategy chosen explicitly with risk and elapsed time stated.",
    "Coexistence designed: authority per fact, synchronisation, conflict handling, duration.",
    "Not-carrying-forward list written, circulated and accepted.",
    "Something visible sequenced early in the programme.",
    "Archive and read access plan agreed with a retention period.",
    "Decommissioning funded, dated and owned.",
  ],

  faqs: [
    {
      q: "How do we find out what the old system actually does?",
      a: "From evidence rather than documentation: usage logs, configuration, scheduled jobs, exception codes, transaction data, and the code itself where an engineer can walk you through it. Then confirm with the people who have been there longest.",
    },
    {
      q: "Should we replace in one move or incrementally?",
      a: "Incremental strangulation is usually lower risk and longer, and it requires designing coexistence, which is real cost. Big bang is faster and concentrates risk into one weekend. Choose deliberately and state what each option costs rather than inheriting a default.",
    },
    {
      q: "How do we justify a replacement to a finance director?",
      a: "Quantify the legacy position: support expiry dates, what cannot be patched, how many people understand it, incident history, and the cost of a day of unavailability. Qualitative arguments about agility lose to revenue projects every time.",
    },
    {
      q: "What do we do about functionality nobody can explain?",
      a: "Establish its usage first. If it is unused, propose dropping it explicitly and see who objects. If it is used and unexplained, that is a finding worth escalating in its own right, because the organisation is depending on something nobody understands.",
    },
    {
      q: "How long should we keep the old system after go-live?",
      a: "Longer than the plan says. Read-only access or a queryable archive for months, because questions arrive for a long time and some can only be answered from the original. Decommissioning is irreversible and the archive is cheap.",
    },
    {
      q: "The business says the new system must work exactly like the old one. How do I handle that?",
      a: "Ask for the last five real cases where the specific behaviour mattered. Sometimes that produces a genuine requirement. More often it reveals that the request is about familiarity, which needs training and involvement rather than a rebuilt feature.",
    },
  ],

  tools: [
    { name: "Function and screen usage logs", what: "Twelve to eighteen months. The evidence that determines what is worth rebuilding and what is a museum.", cost: "Varies" },
    { name: "An engineer and an afternoon with the code", what: "Where source is readable, the business rules are in it. More productive than a month of interviews.", cost: "Free" },
    { name: "A not-carrying-forward list", what: "Everything deliberately dropped, who is affected, what they do instead. Rare and extremely valuable.", cost: "Free" },
    { name: "A decommissioning plan with an owner and a date", what: "Interfaces, archive, retention, licences, access. Without it the estate grows rather than shrinking.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: Investigation, WannaCry cyber attack and the NHS", kind: "Docs", note: "Primary source, October 2017. The concrete version of an argument usually made in the abstract about unsupported systems.", url: "https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/" },
  ],

  internalLinks: [
    { slug: "planning-a-data-migration", anchor: "moving the data itself", context: "Migration" },
    { slug: "impact-assessment-before-a-change", anchor: "finding everything that depends on it", context: "Discovery" },
    { slug: "delivering-change-into-a-business", anchor: "the cutover and adoption", context: "Delivery" },
  ],

  relatedGuides: ["planning-a-data-migration", "impact-assessment-before-a-change", "delivering-change-into-a-business"],

  conclusion: [
    "Get twelve months of function usage data for the system you are replacing and rank it. The long tail of functions nobody has opened in a year is the scope you were about to rebuild for no reason, and the conversation about dropping it goes very differently when it starts from evidence rather than from opinion.",
  ],
};

export default guide;
