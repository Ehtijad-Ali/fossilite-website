import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "impact-assessment-before-a-change",
  seoTitle: "Finding Out What a Change Is Going to Break",
  metaDescription:
    "A systematic sweep for everything a change touches: systems, data, reports, processes, people, controls, outside parties, and the team nobody told.",
  title: "Finding Out What a Change Will Break",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "The question that ends most of these is what does this affect, and the honest answer is always more than whoever asked expects. Systems have people using them that nobody has recorded. Fields get read by reports nobody maintains. A process depends on a status code somebody chose eleven years ago. And somewhere there is a spreadsheet that will start producing wrong numbers on the Monday after your change, and nobody will notice for a quarter.",
    "This work is unglamorous, it is mostly searching rather than thinking, and it is one of the most valuable things a Business Analyst does. What it finds is exactly the stuff that would otherwise be found during a live incident, at three in the morning, by somebody who has no idea your project exists.",
    "This guide is the sweep I run. Eight things to check, where to look for evidence of each, how to follow a single field to everybody who reads it, and how to write it up so people act on it rather than filing it.",
  ],

  whyItMatters: [
    "Unchecked knock-on effects are how a perfectly competent project causes an incident. The change works exactly as designed and something two departments away stops working, because a dependency existed and nobody had any reason to know about it.",
    "The cost also lands unevenly. The project takes the credit for delivering and the affected team takes the disruption, which is why this damages relationships far beyond its technical significance. People remember being broken by somebody else's project for years.",
    "And it is what lets a business make an honest go or no-go decision. A change with known, sized effects can be scheduled, communicated and resourced. A change with unknown effects is a gamble nobody agreed to take.",
  ],

  coreConcepts: [
    {
      term: "Eight things to check, run as a list",
      explain:
        "Systems. Data. Reports. Processes. People and their jobs. Controls. Outside parties. And documents or contracts. Go through all eight on purpose rather than investigating whichever one you find interesting.",
      detail:
        "The reason to use a fixed list is that this is a search, not a flash of insight. Anything you do not check is something you have quietly declared unaffected, and you will not notice yourself doing it.",
    },
    {
      term: "Follow every field forwards to everybody who reads it",
      explain:
        "For any field you are changing, adding or removing: which systems read it, which reports use it, which rules depend on it, which exports include it, and which people look at it on a screen.",
      detail:
        "Who reads a field is almost never written down anywhere. Look at connections between systems, scheduled exports, report definitions, and any file that gets dropped onto a shared drive on a timer. That last one is where the surprises live.",
    },
    {
      term: "Adding a new value is as risky as removing a field",
      explain:
        "Adding a new status, making a field longer, or making an optional field compulsory all break things downstream that assumed the old shape.",
      detail:
        "Ask specifically whether anything further down has a fixed list of allowed values written into it. The answer is usually yes somewhere, and it usually fails silently by quietly filtering the new value out rather than complaining.",
    },
    {
      term: "Reports are what people forget",
      explain:
        "Every business has reports nobody owns, built years ago, still going out, still used to make decisions. They read fields directly and they break without saying anything.",
      detail:
        "Get the list of scheduled reports and who receives them. If no such list exists, that is a finding on its own, because it means nobody can assess the impact of any data change at all.",
    },
    {
      term: "Find the spreadsheets nobody knows about",
      explain:
        "A spreadsheet fed by an export. A personal database. A team's tracker. Something somebody built themselves. None of these show up in any technical analysis and all of them are holding something up.",
      detail:
        "The way to find them is to ask, without any hint of judgement: what do you download, and what do you do with it afterwards? Ask every team that touches the process, not just the obvious ones.",
    },
    {
      term: "Check the controls specifically",
      explain:
        "If your change removes, moves or automates a step that exists as a check, the person accountable for that check needs to know beforehand rather than afterwards.",
      detail:
        "This is the one most likely to have legal consequences and the one least likely to be raised by the people affected, because they may not know the change is happening at all.",
    },
    {
      term: "For people, ask what they can no longer do",
      explain:
        "Not just training. Does anybody lose sight of something, lose an approval they had, become accountable for something they cannot see, or lose the informal knowledge that made a step work?",
      detail:
        "Pay particular attention to cover arrangements. A change that works when everybody is in and falls over when one person is on holiday will fall over within a month.",
    },
    {
      term: "Check who outside the business is affected",
      explain:
        "Customers, suppliers, auditors, regulators, partner systems. Anything receiving a file, a document or a message from the area you are changing.",
      detail:
        "These have waiting times you cannot compress. A supplier needing to change their file format is a three-month conversation, and finding that in week two rather than week ten is the whole value of doing this.",
    },
    {
      term: "Rate it two ways: how bad, and how quickly you would notice",
      explain:
        "How bad is it if this breaks, and how long before anybody spots it? The second one gets left out constantly and it changes the priority completely.",
      detail:
        "Something very bad that fails loudly is manageable. Something moderately bad that fails silently and gets found a quarter later is often worse, because by then people have been acting on the wrong numbers.",
    },
    {
      term: "Every item needs somebody's name against it",
      explain:
        "Each thing you find needs a person who will confirm it, decide what to do, and be told when the change happens.",
      detail:
        "A list with no names on it is a document. A list where every line has a person against it becomes a set of conversations, which is the only form in which it does anything at all.",
    },
    {
      term: "Say which ones you have actually checked",
      explain:
        "Mark each as confirmed with the affected team, or assumed by you and not yet checked. Be plain about which is which.",
      detail:
        "Every assessment has unchecked items and pretending otherwise is what makes them dangerous. A visible list of unchecked assumptions gets chased. An invisible one does not.",
    },
    {
      term: "Also check what is coming the other way",
      explain:
        "What else is changing in the same window that might affect you? Other projects, a system upgrade, a policy change, your busiest trading period.",
      detail:
        "People only ever look outwards from their own change. Looking inwards finds collisions, and collisions between two well-run projects are a common and completely avoidable source of incidents.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The new status that got quietly filtered out.",
      walkthrough:
        "The problem: three weeks after go-live, finance noticed reported order volumes had dropped and nobody could explain it. What was happening: the project had added a new order status to handle a case the business had been managing by hand. It was tested thoroughly in the ordering system and worked perfectly. But a reporting extract built years earlier picked orders by a fixed list of statuses. Orders in the new status matched none of them and had been silently dropping out of every report using that extract.",
      result:
        "What changed: they fixed the extract and added the check to their standard process. Nothing had errored, nothing had alerted, and the numbers were simply wrong for three weeks. This is the classic shape of a data problem: it is silent. Whenever you add a new allowed value, the question to ask everywhere downstream is whether anything has a fixed list of the old ones written into it.",
    },
    {
      kind: "illustration",
      scenario: "A spreadsheet holding up a supplier relationship.",
      walkthrough:
        "The problem: a system was being replaced and the project needed to know what depended on it. What was happening: the BA asked every team one question. What do you download from this, and what do you do with it? A procurement analyst mentioned a weekly export she reformats and sends to a key supplier, who uses it to plan their own production. It had been running for years, was written down nowhere, and appeared on no list of connections because it was a manual download.",
      result:
        "What changed: it went into the plan properly. Had it been missed, the supplier would have stopped receiving their planning data with no warning at all. The question that found it takes thirty seconds to ask and has to be asked of every team rather than only the ones the project already involves.",
    },
    {
      kind: "illustration",
      scenario: "Two well-run projects, same weekend.",
      walkthrough:
        "The problem: a change was planned for a weekend, fully assessed, with everybody downstream identified and told. What was happening: separately, an infrastructure team had scheduled a database upgrade for the same weekend, also fully planned. Neither team knew about the other, because each had looked outwards from its own change and neither had asked what else was happening.",
      result:
        "What changed: a BA happened to ask what else was in the change calendar for that window and they rescheduled. Looking only outwards misses this whole category. Always check the change calendar and the other live projects for the same period, and treat that as part of the job rather than as scheduling.",
    },
  ],

  learningPath: [
    {
      title: "Say exactly what is changing",
      body: "Which fields, which steps, which rules, which systems, and what stays the same. Vagueness here produces an assessment that misses things by design.",
      effort: "1 hour",
      outcome: "Something specific enough to run the sweep against.",
    },
    {
      title: "Run through all eight",
      body: "Systems, data, reports, processes, people, controls, outside parties, documents and contracts. For each, note what you would need to check and where the evidence lives.",
      effort: "Half a day",
      outcome: "A candidate list produced by searching rather than by remembering.",
    },
    {
      title: "Follow every changed field to whoever reads it",
      body: "Connections, exports, report definitions, business rules, and screens people look at. Check specifically for fixed lists of allowed values.",
      effort: "1-3 days",
      outcome: "The data effects, which are the ones that fail silently.",
    },
    {
      title: "Ask every team what they download",
      body: "One question, asked without any judgement, of every team touching the area rather than only those already involved. Then ask what they do with it.",
      effort: "1 day",
      outcome: "The spreadsheets and exports no technical analysis will ever find.",
    },
    {
      title: "Check the controls and the outside parties",
      body: "Anything that exists as a check, and anything that leaves the business. Both have waiting times and consequences that internal things do not.",
      effort: "Half a day",
      outcome: "The effects most likely to have legal or contractual consequences.",
    },
    {
      title: "Look at what else is happening that weekend",
      body: "Check the change calendar and the other live projects for the same window. Look for collisions, shared systems and shared people.",
      effort: "2 hours",
      outcome: "Clashes found while they can still be moved.",
    },
    {
      title: "Rate it, name owners, and confirm",
      body: "How bad and how quickly noticed for each one, a person against every line, and a clear marking of what is confirmed versus still assumed.",
      effort: "1 day plus follow-up",
      outcome: "A list that starts conversations rather than a document that gets filed.",
    },
  ],

  exercises: [
    {
      title: "Follow one field",
      brief:
        "Pick any single field in a system you work with. Find everybody who uses it: connections, exports, reports, rules and screens. Then ask two teams whether they use it in some way you have not found.",
      success:
        "You find at least one user that appears in no documentation, and you can say whether changing that field would fail loudly or silently.",
      time: "Half a day",
    },
    {
      title: "Ask five teams what they download",
      brief:
        "Ask five teams what they download or export from the systems in your area, and what they do with it afterwards. Ask without any suggestion that they should not be doing it.",
      success:
        "You have found at least two things nobody knew about, and for each you can say what would break if the source changed.",
      time: "2 hours",
    },
    {
      title: "Add a how-quickly-would-we-notice column",
      brief:
        "Take an existing impact or risk list from any project. Add a column rating how fast each item would be spotted if it went wrong: immediately, within a day, within a month, or only at year end.",
      success:
        "The priority order changes, and you can name at least one item rated low that would actually fail silently for a long time.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Only checking inside your own project's systems",
      why: "The dependencies that cause incidents are nearly always outside the boundary the project drew for itself, which is exactly why nobody has looked at them.",
      fix: "Run all eight and follow the data outwards to everybody who uses it, regardless of which team owns them.",
    },
    {
      mistake: "Treating adding a value as low risk",
      why: "Anything downstream with a fixed list quietly filters the new value out. Nothing errors and the numbers are just wrong.",
      fix: "For every new allowed value, ask each user whether it has a fixed list of the old ones written into it.",
    },
    {
      mistake: "Forgetting reports",
      why: "They are unowned, undocumented, still going out and still used for decisions. They read fields directly and break without alerting anybody.",
      fix: "Get the list of scheduled reports and their recipients. If it does not exist, raise that as a finding in its own right.",
    },
    {
      mistake: "Missing the manual downloads",
      why: "Spreadsheets, trackers and files sent to outside parties appear on no technical list and they are often holding something important up.",
      fix: "Ask every team what they download and what they do with it, framed as curiosity rather than as an audit.",
    },
    {
      mistake: "Not checking the controls",
      why: "Removing or automating a check without telling the person accountable for it is how a project creates a compliance problem, and they usually do not even know the change is coming.",
      fix: "Identify every step that exists as a check and tell its owner before the design is fixed.",
    },
    {
      mistake: "Rating only by how bad it is",
      why: "A silent failure of moderate severity can be worse than a loud severe one, because by the time it is found people have been acting on wrong information for months.",
      fix: "Rate how bad and how quickly noticed separately, and deliberately push the silent ones up.",
    },
    {
      mistake: "Not saying what you have actually checked",
      why: "Every assessment has unchecked items. Presenting them as findings gives false comfort and they never get checked.",
      fix: "Mark each one, and make chasing down the unchecked ones a tracked task with names against it.",
    },
    {
      mistake: "Only looking outwards",
      why: "Two well-planned changes in the same window can collide through a shared system, a shared team or a busy trading period, and neither project will see it coming.",
      fix: "Check the change calendar and other live projects for the same window as a standard step.",
    },
  ],

  bestPractices: [
    "Say exactly what is changing before assessing anything.",
    "Run all eight checks as a fixed list.",
    "Follow every changed field to everybody who uses it.",
    "Check specifically for fixed lists of allowed values.",
    "Get the list of scheduled reports and who receives them.",
    "Ask every team what they download and what they do with it.",
    "Identify every step that exists as a check and tell its owner.",
    "For people, ask what they can no longer do rather than what they need training on.",
    "Check outside parties early because their waiting times are long.",
    "Rate how bad and how quickly noticed separately.",
    "Put a name against every item.",
    "Say clearly what you have confirmed and what you have assumed.",
    "Check the change calendar as well as looking outwards.",
  ],

  proTips: [
    "Ask what happened the last time this system was changed. Somebody will remember what broke, and the thing that broke last time is usually still connected in the same undocumented way. What people remember about past incidents is the cheapest map of dependencies available and it lives entirely in people who have been there a while.",
    "When following a field, look at what leaves the building on a timer: emailed reports, files dropped somewhere for a partner, extracts sent overnight. Anything scheduled has somebody depending on it quietly, and scheduled things are much easier to list than ad hoc ones.",
    "Write each item as a sentence a specific person would care about, not as a technical statement. Finance's month-end volume report will stop including orders in the new status is something somebody acts on. Status enumeration change affects downstream extracts is not, and it will be skimmed past by exactly the person who needed to read it.",
    "Keep every one of these you produce and reread the last one before starting a new assessment in the same area. The dependencies you found last time are still there, and about half of an assessment in familiar territory is remembering rather than discovering, as long as you wrote it down.",
  ],

  businessApplications: [
    "System changes and releases, where this decides who needs telling and when.",
    "Changes to how data is structured, where silent failure downstream is the characteristic risk.",
    "Process redesign, where the effect on people's jobs and on checks matters more than the technical side.",
    "Switching off a system, where the whole job is finding everything that still depends on it.",
    "Restructures, where the effect is on who holds knowledge and who can approve things.",
    "Policy changes, where the effect runs through documents, contracts and customer letters rather than systems.",
  ],

  checklist: [
    "Change described precisely: fields, steps, rules, systems, and what stays the same.",
    "All eight checks run deliberately.",
    "Every changed field followed to everybody who uses it.",
    "Fixed lists of allowed values checked downstream.",
    "Scheduled report list and recipients obtained.",
    "Every team asked what they download and why.",
    "Controls identified and their owners told.",
    "Effects on people assessed, including cover arrangements.",
    "Outside parties identified and their waiting times understood.",
    "Each item rated for how bad and how quickly noticed.",
    "A name against every item.",
    "Confirmed and assumed clearly separated.",
    "Change calendar checked for clashes in the same window.",
  ],

  faqs: [
    {
      q: "How long should this take?",
      a: "For a contained change in a familiar system, a day or two. For replacing a system or restructuring data, one to two weeks, most of it spent asking teams what they use rather than reading documentation, which will be incomplete.",
    },
    {
      q: "How do I do this when there is no documentation?",
      a: "That is the normal case. Use the systems themselves: connection settings, scheduled jobs, report definitions and export logs. Then ask people. Between those two you will find far more than any documentation would have held.",
    },
    {
      q: "Who signs this off?",
      a: "Each owner confirms their own line, and the sponsor accepts the overall picture including the things still marked as assumed. One signature from a project manager means it was read, not that anything was confirmed.",
    },
    {
      q: "What do I do about something nobody will own?",
      a: "Write it down, say who ought to own it, and take it to the sponsor. It does not disappear when the assessment gets filed. It becomes the incident that nobody expected and everybody could have.",
    },
    {
      q: "How do I handle spreadsheets I find?",
      a: "Treat them as evidence that somebody has a real need, not as bad practice, and say so out loud. If your interest reads as enforcement, the remaining ones will stay hidden, and those are the ones that break.",
    },
    {
      q: "Is this the same as risk assessment?",
      a: "Related but not the same. This establishes what the change touches. Risk assessment establishes what could go wrong and how likely it is. What you find here feeds the risk work, which is why it comes first.",
    },
  ],

  tools: [
    { name: "The eight-item checklist", what: "Systems, data, reports, processes, people, controls, outside parties, documents and contracts. Run it every time.", cost: "Free" },
    { name: "The list of scheduled reports and jobs", what: "Where it exists, the fastest route to everybody using your data. Where it does not, its absence is a finding.", cost: "Varies" },
    { name: "The change calendar", what: "For checking what else is happening. Clashes between two well-planned changes are common and completely avoidable.", cost: "Varies" },
    { name: "A list with names against every line", what: "What, how bad, how quickly noticed, owner, confirmed or assumed. The version that produces conversations rather than filing.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "data-requirements-for-analysts", anchor: "following data through systems", context: "Data" },
    { slug: "delivering-change-into-a-business", anchor: "acting on what you find", context: "Delivery" },
    { slug: "risk-assumptions-and-issues", anchor: "turning these into managed risks", context: "Next step" },
  ],

  relatedGuides: ["data-requirements-for-analysts", "delivering-change-into-a-business", "risk-assumptions-and-issues"],

  conclusion: [
    "Take one field your current change touches and spend an afternoon finding everybody who uses it: connections, exports, reports, rules and screens. Then ask two teams what they download. The user you find that appears in no documentation is the one your project would otherwise have broken.",
  ],
};

export default guide;
