import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "impact-assessment-before-a-change",
  seoTitle: "Impact Assessment: Finding What a Change Will Break",
  metaDescription:
    "A systematic sweep for everything a proposed change touches: systems, data, reports, processes, roles, controls, contracts and the teams nobody told.",
  title: "Impact Assessment Before a Change",
  keywords: [
    "impact assessment",
    "change impact analysis",
    "business analyst impact assessment",
    "downstream impact",
    "system dependency analysis",
    "change readiness",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "The question that ends most impact assessments is what does this affect, and the honest answer is always more than the person asking expects. Systems have consumers nobody documented. Fields are read by reports nobody maintains. Processes depend on a status code somebody chose eleven years ago. Somewhere there is a spreadsheet that will silently produce wrong numbers on the Monday after your change and nobody will notice for a quarter.",
    "Impact assessment is unglamorous, it is mostly a search rather than a judgement, and it is one of the highest-value things a Business Analyst does, because the things it finds are precisely the things that would otherwise be found during a live incident.",
    "This guide is the sweep I run: eight dimensions to check, where the evidence for each one lives, how to trace a data field to everybody who reads it, and how to write the output so that people act on it rather than filing it.",
  ],

  whyItMatters: [
    "Unassessed impact is how a competent project produces an incident. The change works exactly as designed and something two departments away stops working, because the dependency existed and nobody had a reason to know about it.",
    "The costs also land unevenly. The project takes the credit for delivering, and the affected team takes the disruption, which is why unassessed impact damages relationships far beyond its technical significance. People remember being broken by somebody else's project for years.",
    "And it is the analysis that lets a business make an honest go or no-go decision. A change with a known, sized set of impacts can be scheduled, communicated and resourced. A change with unknown impact is a gamble that the organisation has not agreed to take.",
  ],

  coreConcepts: [
    {
      term: "Eight dimensions, run as a checklist",
      explain:
        "Systems, data, reports, processes, roles and people, controls, external parties, and documents or contracts. Sweep all eight deliberately rather than investigating the ones you find interesting.",
      detail:
        "The reason to use a fixed list is that impact is found by search rather than by insight. Anything you do not check is something you have implicitly declared unaffected, and you will not notice yourself doing it.",
    },
    {
      term: "Trace data forward to everybody who reads it",
      explain:
        "For any field you are changing, adding or removing: which systems consume it, which reports use it, which rules depend on it, which exports include it, and which humans read it on a screen.",
      detail:
        "The consumers of a field are almost never documented. Look at integrations, scheduled exports, report definitions, and any file dropped onto a shared drive on a schedule. That last category is where the surprises live.",
    },
    {
      term: "Changing a value is as dangerous as removing a field",
      explain:
        "Adding a new status code, extending a field's length, or making an optional field mandatory all break consumers that assumed the old shape.",
      detail:
        "Ask specifically: does anything downstream have a hardcoded list of the permitted values? The answer is usually yes somewhere, and it usually fails silently by filtering the new value out rather than erroring.",
    },
    {
      term: "Reports are the most commonly missed consumer",
      explain:
        "Every organisation has reports nobody owns, built years ago, still circulated, and still used for decisions. They read fields directly and they break quietly.",
      detail:
        "Get the list of scheduled reports and their recipients. Where no list exists, that absence is itself a finding worth raising, because it means nobody can assess the impact of any data change.",
    },
    {
      term: "Find the shadow consumers",
      explain:
        "Spreadsheets pulling an export, a personal database, a team's tracker, an automation somebody built. These are invisible to any technical dependency analysis and they are load-bearing.",
      detail:
        "The way to find them is to ask, without judgement: what do you download, and what do you do with it afterwards? Ask it of every team that touches the process, not only the obvious ones.",
    },
    {
      term: "Assess the impact on controls specifically",
      explain:
        "If a change removes, moves or automates a step that constitutes a control, somebody accountable for that control needs to know before it happens, not afterwards.",
      detail:
        "This is the impact most likely to have regulatory consequences and the one least likely to be raised by the people affected, because they may not know the change is happening at all.",
    },
    {
      term: "Role impact is about what someone can no longer do",
      explain:
        "Not just training. Does anybody lose visibility, lose an approval right, gain accountability for something they cannot see, or lose the informal knowledge that made a step work?",
      detail:
        "Pay particular attention to cover arrangements. A change that works when everyone is present and fails when one person is on leave will fail within a month.",
    },
    {
      term: "Check the external parties",
      explain:
        "Customers, suppliers, auditors, regulators, partner systems. Anything that receives a file, an interface, a document or a communication from the area you are changing.",
      detail:
        "External impacts carry lead times you cannot compress. A supplier needing to change their file format is a three-month conversation, and finding that in week two rather than week ten is the whole value of the exercise.",
    },
    {
      term: "Rate impact by consequence and detectability",
      explain:
        "How bad is it if this breaks, and how quickly would anybody notice? The second dimension is the one people leave out and it changes the priority completely.",
      detail:
        "A high-consequence impact that fails loudly is manageable. A moderate impact that fails silently and is discovered a quarter later is frequently worse, because by then the wrong numbers have been acted on.",
    },
    {
      term: "Name an owner for every impact",
      explain:
        "Each identified impact needs a person who will confirm it, decide what to do, and be told when the change happens.",
      detail:
        "An impact list with no owners is a document. An impact list where each line has a name against it becomes a set of conversations, which is the only form in which it does anything.",
    },
    {
      term: "Distinguish assessed from assumed",
      explain:
        "Mark each item as confirmed with the affected team, or assumed by you and not yet checked. Be explicit about which is which.",
      detail:
        "Every impact assessment has unconfirmed items and pretending otherwise is what makes them dangerous. A visible list of unconfirmed assumptions gets checked. An invisible one does not.",
    },
    {
      term: "Assess the reverse impact too",
      explain:
        "What else is changing in the same window that might affect you? Other projects, a system upgrade, a policy change, a peak trading period.",
      detail:
        "Impact assessment is usually run outward only. Running it inward finds collisions, and collisions between two well-run projects are a common and entirely avoidable source of incidents.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The new status code that was silently filtered out.",
      walkthrough:
        "A project adds a new order status to handle a case the business had been managing manually. It is tested thoroughly within the ordering system and works correctly. Three weeks after go-live, finance notices that reported order volumes have fallen. A reporting extract built years earlier selects orders by an explicit list of status values. Orders in the new status match none of them and had been dropping out of every report using that extract.",
      result:
        "Nothing errored, nothing alerted, and the numbers were simply wrong for three weeks. This is the characteristic failure mode of data impact: it is silent. Whenever you add a permitted value, the question to ask everywhere downstream is whether anything holds a hardcoded list of the old ones.",
    },
    {
      kind: "illustration",
      scenario: "The spreadsheet holding up a supplier relationship.",
      walkthrough:
        "A BA assessing the impact of a system replacement asks each team a single question: what do you download from this system, and what do you do with it? A procurement analyst mentions a weekly export she reformats and sends to a key supplier, who uses it to plan their own production. It has run for years, is documented nowhere, and appears in no interface inventory because it is a manual download.",
      result:
        "Had it been missed, the supplier would have stopped receiving planning data with no warning. The question that found it takes thirty seconds to ask and has to be asked of every team rather than only the ones the project already involves. Shadow consumers are invisible to technical dependency analysis by definition.",
    },
    {
      kind: "illustration",
      scenario: "Two well-run projects in the same weekend.",
      walkthrough:
        "A change is planned for a weekend, fully assessed, with every downstream consumer identified and notified. Separately, an infrastructure team has scheduled a database upgrade for the same weekend, also fully planned. Neither team knows about the other, because each has assessed impact outward from their own change and neither has asked what else is happening.",
      result:
        "The collision was found late and only because a BA asked what else was in the change calendar for that window. Impact assessment run purely outward misses this entire category. Always check the change calendar and the other active projects for the same period, and treat that as part of the assessment rather than as scheduling.",
    },
  ],

  learningPath: [
    {
      title: "Define the change precisely",
      body: "What exactly is changing: which fields, which steps, which rules, which systems, and what stays the same. Vagueness here produces an assessment that misses things by construction.",
      effort: "1 hour",
      outcome: "A specific change definition that the sweep can be run against.",
    },
    {
      title: "Sweep the eight dimensions",
      body: "Systems, data, reports, processes, roles, controls, external parties, documents and contracts. Note for each what you would need to check and where the evidence lives.",
      effort: "Half a day",
      outcome: "A candidate impact list produced by search rather than by recall.",
    },
    {
      title: "Trace every changed field to its consumers",
      body: "Integrations, exports, report definitions, business rules, and screens people read. Check specifically for hardcoded value lists.",
      effort: "1-3 days",
      outcome: "The data impacts, which are the ones that fail silently.",
    },
    {
      title: "Ask every team what they download",
      body: "One question, asked without judgement, of every team touching the area rather than only those already involved. Then ask what they do with it afterwards.",
      effort: "1 day",
      outcome: "The shadow consumers, which no technical analysis will find.",
    },
    {
      title: "Check controls and external parties",
      body: "Anything that constitutes a control, and anything that leaves the organisation. Both carry lead times and consequences that internal impacts do not.",
      effort: "Half a day",
      outcome: "The impacts most likely to have regulatory or contractual consequences.",
    },
    {
      title: "Run the assessment inward",
      body: "Check the change calendar and the other active projects for the same window. Look for collisions, shared systems and shared people.",
      effort: "2 hours",
      outcome: "Collisions found while they can still be rescheduled.",
    },
    {
      title: "Rate, assign owners, and confirm",
      body: "Consequence and detectability for each impact, an owner against every line, and a clear marking of which items are confirmed and which are still assumed.",
      effort: "1 day plus follow-up",
      outcome: "A list that generates conversations rather than a document that gets filed.",
    },
  ],

  exercises: [
    {
      title: "Trace one field",
      brief:
        "Pick any single data field in a system you work with. Find every consumer: interfaces, exports, reports, rules and screens. Then ask two teams whether they use it in any way you have not found.",
      success:
        "You find at least one consumer that does not appear in any documentation, and you can say whether a change to that field would fail loudly or silently.",
      time: "Half a day",
    },
    {
      title: "The download question",
      brief:
        "Ask five teams what they download or export from the systems in your area, and what they do with it afterwards. Ask without any suggestion that they should not be doing it.",
      success:
        "You have found at least two shadow consumers, and for each you can say what would break if the source changed.",
      time: "2 hours",
    },
    {
      title: "Detectability rating",
      brief:
        "Take an existing impact or risk list from any project. Add a column rating how quickly each item would be noticed if it went wrong: immediately, within a day, within a month, or only at period end.",
      success:
        "The priority order changes, and you can name at least one item that was rated low priority but would fail silently for a long time.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Assessing impact only within the project's own systems",
      why: "The dependencies that cause incidents are almost always outside the boundary the project drew for itself, which is exactly why nobody has looked at them.",
      fix: "Run all eight dimensions and trace data outward to every consumer regardless of which team owns it.",
    },
    {
      mistake: "Treating adding a value as low risk",
      why: "Downstream consumers with hardcoded lists filter the new value out silently. Nothing errors and the numbers are simply wrong.",
      fix: "For every new permitted value, ask each consumer whether it holds an explicit list of the old ones.",
    },
    {
      mistake: "Forgetting reports",
      why: "Reports are unowned, undocumented, still circulated and still used for decisions. They read fields directly and break without alerting anyone.",
      fix: "Obtain the scheduled report inventory and recipient list. If none exists, raise that as a finding in its own right.",
    },
    {
      mistake: "Missing shadow consumers",
      why: "Manual downloads feeding spreadsheets, trackers and external parties appear in no technical inventory, and they are frequently load-bearing.",
      fix: "Ask every team what they download and what they do with it, framed as curiosity rather than as an audit.",
    },
    {
      mistake: "Not checking controls",
      why: "Removing or automating a control without telling the person accountable for it is how a project creates a regulatory finding, and they usually do not know the change is happening.",
      fix: "Identify every step that constitutes a control and notify its owner before the design is fixed.",
    },
    {
      mistake: "Rating by consequence alone",
      why: "A silent failure with moderate consequence can be worse than a loud failure with high consequence, because by the time it is found the wrong data has been acted on for months.",
      fix: "Rate consequence and detectability separately, and prioritise the silent items deliberately.",
    },
    {
      mistake: "Not distinguishing confirmed from assumed",
      why: "Every assessment contains unchecked items. Presenting them as findings gives false assurance and the unconfirmed ones never get confirmed.",
      fix: "Mark each item explicitly, and make closing the assumed ones a tracked task with owners.",
    },
    {
      mistake: "Only assessing outward",
      why: "Two well-planned changes in the same window can collide through a shared system, a shared team or a peak trading period, and neither project will see it.",
      fix: "Check the change calendar and other active projects for the same window as a standard step.",
    },
  ],

  bestPractices: [
    "Define exactly what is changing before assessing anything.",
    "Sweep all eight dimensions as a fixed checklist.",
    "Trace every changed field to all its consumers.",
    "Check specifically for hardcoded lists of permitted values.",
    "Obtain the scheduled report inventory and its recipients.",
    "Ask every team what they download and what they do with it.",
    "Identify every step that constitutes a control and notify its owner.",
    "Assess role impact in terms of what someone can no longer do.",
    "Check external parties early because their lead times are long.",
    "Rate consequence and detectability separately.",
    "Assign an owner to every impact.",
    "Mark each item as confirmed or assumed.",
    "Run the assessment inward against the change calendar as well as outward.",
  ],

  proTips: [
    "Ask what happened the last time this system was changed. Somebody will remember what broke, and the thing that broke last time is usually still connected in the same undocumented way. Institutional memory of past incidents is the cheapest dependency map available and it lives entirely in people who have been there a while.",
    "When tracing consumers of a field, look at what leaves the building on a schedule: emailed reports, files dropped to an SFTP location, extracts sent to a partner. Anything on a schedule has a recipient who is depending on it silently, and scheduled things are much easier to enumerate than ad hoc ones.",
    "Write the impact list so each line reads as a sentence a specific person would care about, rather than as a technical statement. Finance's month-end volume report will exclude orders in the new status is actionable. Status enumeration change affects downstream extracts is not, and it will be skimmed past by exactly the person who needed to read it.",
    "Keep every impact assessment you produce and reread the previous one before starting a new assessment in the same area. The dependencies you found last time are still there, and about half of an assessment in a familiar area is recall rather than discovery, provided you wrote it down.",
  ],

  businessApplications: [
    "System changes and releases, where the assessment determines who needs to be notified and when.",
    "Data model changes, where silent downstream failure is the characteristic risk.",
    "Process redesign, where role and control impacts matter more than technical ones.",
    "Decommissioning, where the whole exercise is finding everything that still depends on the thing being retired.",
    "Organisational restructures, where the impact is on who holds knowledge and approval rights.",
    "Policy changes, where the impact runs through documents, contracts and customer communications rather than systems.",
  ],

  checklist: [
    "Change defined precisely: fields, steps, rules, systems, and what stays the same.",
    "All eight dimensions swept deliberately.",
    "Every changed field traced to its consumers.",
    "Hardcoded permitted-value lists checked downstream.",
    "Scheduled report inventory and recipients obtained.",
    "Every team asked what they download and why.",
    "Controls identified and their owners notified.",
    "Role impacts assessed, including cover arrangements.",
    "External parties identified and their lead times understood.",
    "Each impact rated for consequence and for detectability.",
    "An owner named against every impact.",
    "Confirmed and assumed items clearly distinguished.",
    "Change calendar checked for collisions in the same window.",
  ],

  faqs: [
    {
      q: "How long should an impact assessment take?",
      a: "For a contained change in a familiar system, a day or two. For a system replacement or a data model change, one to two weeks, most of it spent asking teams what they use rather than reading documentation, which will be incomplete.",
    },
    {
      q: "How do I assess impact when there is no documentation?",
      a: "That is the normal case. Use the data itself: integration configurations, scheduled jobs, report definitions and export logs. Then ask people. Between those two, you will find far more than any documentation would have contained.",
    },
    {
      q: "Who signs off an impact assessment?",
      a: "Each impact owner confirms their own line, and the sponsor accepts the aggregate picture including the items still marked as assumed. A single sign-off by a project manager means the assessment was read, not that the impacts were confirmed.",
    },
    {
      q: "What do I do about an impact nobody will own?",
      a: "Record it, name who ought to own it, and escalate to the sponsor. An unowned impact does not disappear when the assessment is filed. It becomes the incident that nobody expected and everybody could have.",
    },
    {
      q: "How do I handle shadow spreadsheets I find?",
      a: "Treat them as evidence of a real requirement rather than as bad practice, and say so out loud. If your interest reads as enforcement, the remaining ones will not be disclosed, and those are the ones that break.",
    },
    {
      q: "Is impact assessment the same as risk assessment?",
      a: "Related and not identical. Impact assessment establishes what the change touches. Risk assessment establishes what could go wrong and how likely it is. The impact list is a major input to the risk one, which is why it should come first.",
    },
  ],

  tools: [
    { name: "An eight-dimension checklist", what: "Systems, data, reports, processes, roles, controls, external parties, documents and contracts. Run mechanically every time.", cost: "Free" },
    { name: "The scheduled report and job inventory", what: "Where it exists, the fastest route to downstream consumers. Where it does not, its absence is a finding.", cost: "Varies" },
    { name: "The change calendar", what: "For the inward assessment. Collisions between two well-planned changes are common and entirely avoidable.", cost: "Varies" },
    { name: "An impact register with owners", what: "Impact, consequence, detectability, owner, confirmed or assumed. The version that produces conversations rather than filing.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "data-requirements-for-analysts", anchor: "tracing data through systems", context: "Data impact" },
    { slug: "delivering-change-into-a-business", anchor: "acting on what the assessment finds", context: "Delivery" },
    { slug: "risk-assumptions-and-issues", anchor: "turning impacts into managed risks", context: "Next step" },
  ],

  relatedGuides: ["data-requirements-for-analysts", "delivering-change-into-a-business", "risk-assumptions-and-issues"],

  conclusion: [
    "Take one field your current change touches and spend an afternoon finding every consumer of it: interfaces, exports, report definitions, rules and screens. Then ask two teams what they download. The consumer you find that appears in no documentation is the one your project would otherwise have broken.",
  ],
};

export default guide;
