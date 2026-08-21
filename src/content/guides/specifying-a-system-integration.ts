import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "specifying-a-system-integration",
  seoTitle: "Specifying a System Integration as a Business Analyst",
  metaDescription:
    "The business questions behind an interface: what triggers it, what the data means, what happens when it fails, who owns the truth, and what the business sees meanwhile.",
  title: "Specifying a System Integration",
  keywords: [
    "integration requirements",
    "interface specification",
    "business systems analyst integration",
    "api requirements",
    "system interface design",
    "data exchange specification",
  ],
  category: "api-integration",
  level: "Advanced",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 18,

  intro: [
    "Integration work looks like a technical problem and mostly is not. The technical part, moving a message from one system to another, is a solved problem with well understood patterns. What is not solved, and what nobody but an analyst is going to establish, is what the data means on each side, which system is allowed to be right when they disagree, and what the business does during the hours when the connection is down.",
    "Those questions are all business questions, and if they are not answered explicitly they get answered implicitly by whoever writes the code. Their answers will be reasonable and locally sensible, and some of them will be wrong in ways that surface months later as an unexplained difference in two reports.",
    "This guide is the specification a Business Systems Analyst should produce for an interface: the triggering event, the meaning of every field on both sides, ownership of each fact, the failure behaviour, and the operational questions that decide whether the business can actually work while the integration is not working.",
  ],

  whyItMatters: [
    "Integrations fail differently from applications. An application that breaks stops and somebody notices. An integration that breaks frequently carries on, delivering nothing, or delivering something subtly wrong, and the first sign is a customer or an accountant asking why two numbers disagree.",
    "The cost also compounds over time. A field mapped on a misunderstanding produces incorrect data every day it runs, and by the time anybody investigates there are years of it, with no easy way to tell which records are affected.",
    "And integrations are where organisational boundaries become technical ones. Two teams, sometimes two companies, each with their own definitions, release schedules and priorities. Somebody has to make those boundaries explicit, and that somebody is the analyst.",
  ],

  coreConcepts: [
    {
      term: "Start from the business event, not the payload",
      explain:
        "What has happened in the world that means data should move? A customer placed an order. A payment cleared. An engineer completed a job. The event is the requirement and the message is an implementation of it.",
      detail:
        "Specifying from the payload outward produces an interface that copies fields. Specifying from the event outward produces one that communicates something, and the difference shows the first time the business changes how it works.",
    },
    {
      term: "Name the source of truth for every fact, not every field",
      explain:
        "For each business fact the interface carries, exactly one system should be authoritative and the others hold copies. Write down which, and who is accountable.",
      detail:
        "Where two systems both allow a fact to be edited, you have specified a reconciliation problem that will run forever. That may be an acceptable trade-off, but it must be a decision rather than an accident.",
    },
    {
      term: "Both sides define every shared term independently",
      explain:
        "Ask each system's owner to write down what customer, order, active or complete means in their system, separately, without conferring, before any mapping is built.",
      detail:
        "This is the single highest-value hour in an integration project. Two systems using one word for different concepts is the normal case, and a field-level mapping conceals it perfectly.",
    },
    {
      term: "Direction, trigger and timing are three separate decisions",
      explain:
        "Which way does data flow, what causes a transfer, and how quickly must it arrive? A nightly batch, an hourly poll and an immediate event have very different business consequences.",
      detail:
        "Derive timing from a business consequence rather than a preference. If a delay of four hours would cause a customer-visible problem and a delay of twenty minutes would not, you have your requirement and its justification.",
    },
    {
      term: "Specify what the receiving system does with each message",
      explain:
        "Create a new record, update an existing one, or both. If update, matched on what key? If the match fails, create or reject?",
      detail:
        "Matching rules are business rules and they are frequently ambiguous. Two customers with the same name, an order reference that was reused after a system migration, a record that exists on one side and not the other. Each needs a stated answer.",
    },
    {
      term: "Duplicate delivery will happen, so decide what it means",
      explain:
        "Networks retry. Systems get restarted mid-batch. Somebody reruns yesterday's file. The question is whether processing the same message twice does damage.",
      detail:
        "Ask the business question: if this arrived twice, would the customer be charged twice, would the stock be decremented twice, would they receive two emails? Then specify the key on which duplicates are recognised.",
    },
    {
      term: "Order of arrival is not guaranteed and sometimes matters",
      explain:
        "An update can overtake the create it depends on, or two updates can arrive out of sequence, leaving the older value in place.",
      detail:
        "Where sequence matters, say so and specify how it is determined: a sequence number, a timestamp from the source, a version. Where it does not, say that too, so nobody builds machinery for a problem you do not have.",
    },
    {
      term: "Failure behaviour is a business decision in four parts",
      explain:
        "What the user sees, what gets recorded, whether it retries and how many times, and whether anything is left half-done.",
      detail:
        "The last is the one that causes lasting damage. A transfer that updates one system and fails before updating the other leaves the business in a state neither system knows is wrong, and somebody has to decide in advance how that is detected and corrected.",
    },
    {
      term: "Specify what the business does while it is down",
      explain:
        "Not what the system does. What the person does. Do they wait, work manually, or refuse the transaction? And what happens to that manual work when the connection returns?",
      detail:
        "This is the requirement most often missing entirely, and it is the one the operation will need on the first bad day. Manual work performed during an outage that then has to be reconciled by hand is a design decision, not an accident.",
    },
    {
      term: "Reconciliation is a requirement, agreed in advance",
      explain:
        "What counts are compared, how often, by whom, with what tolerance, and what happens when they differ.",
      detail:
        "Without it, an interface that has been silently dropping a small proportion of messages for months looks exactly like one that is working. Daily control totals are cheap and they are the only way anybody finds out.",
    },
    {
      term: "Volume, growth and peak belong in the specification",
      explain:
        "Messages per day, the peak within it, expected size, and growth. An interface designed for a steady trickle behaves very differently when a bulk update sends fifty thousand records at once.",
      detail:
        "Ask specifically what happens during a data migration, a bulk price change or a mass customer update. Those are the events that break interfaces, and they are usually foreseeable.",
    },
    {
      term: "The other party has a release schedule and it is not yours",
      explain:
        "Where the counterparty is an external company or another department, their change windows, versioning approach and notification practice are constraints on your design.",
      detail:
        "Establish early how you will be told about a change on their side, and what happens if you are not. The answer nobody is happy with is that you find out when it breaks, and it is worth knowing that in advance.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "One word, two entities, one unexplained count difference.",
      walkthrough:
        "An integration maps customer records from a billing system into a new platform. Record counts differ by a noticeable margin and nobody can explain it. The BA asks both system owners to define customer independently. Billing creates one record per paying entity, so a group of companies paying centrally is a single customer. The CRM holds one record per trading business.",
      result:
        "The mapping needed a rule about group structures that nobody had specified, because both teams had used the same word for years with no reason to compare. Independent written definitions from both owners is a one-hour exercise, and it should come before any field mapping is attempted.",
    },
    {
      kind: "illustration",
      scenario: "The half-completed transfer.",
      walkthrough:
        "An order confirmation process updates the order system and then notifies the warehouse system. The warehouse call fails intermittently under load. The order shows as confirmed, the warehouse never receives it, and nothing errors visibly because the order system's own transaction completed successfully. Customers wait for goods that were never picked.",
      result:
        "The specification had covered what happens when the message is sent and not what happens when the second half fails. The fix required a business decision about whether an order should be confirmable before the warehouse has acknowledged it, which is not a question a developer should be answering alone at the end of a sprint.",
    },
    {
      kind: "illustration",
      scenario: "Silently dropping a small share of messages.",
      walkthrough:
        "An interface has been running for months and is considered stable. A BA introduces a daily control total: count of records sent, count received, count rejected, and the value total on each side. On the first day the counts differ slightly. Investigation shows that records containing a particular character in an address field have been failing validation on the receiving side and being discarded without alert.",
      result:
        "The interface had been losing a small proportion of records for an unknown length of time, and there was no way to identify which ones without a full comparison. Reconciliation is not an operational nicety. Without it a partially broken interface is indistinguishable from a working one, and the failure is silent by design.",
    },
  ],

  learningPath: [
    {
      title: "Write the business events the interface serves",
      body: "What happens in the world that means data should move, and what the receiving business does as a result. One sentence per event.",
      effort: "2 hours",
      outcome: "A requirement expressed as communication rather than as field copying.",
    },
    {
      title: "Get independent definitions from both sides",
      body: "Each system owner writes what every shared term means in their system, separately. Then compare and follow every difference to a rule.",
      effort: "Half a day",
      outcome: "The mismatches that would otherwise appear as unexplained differences after go-live.",
    },
    {
      title: "Name the source of truth for every fact",
      body: "One authoritative system per business fact, with an accountable owner. Flag anywhere both sides can edit the same thing.",
      effort: "Half a day",
      outcome: "The decision that determines direction, conflict handling and reconciliation.",
    },
    {
      title: "Build the field mapping with no blank cells",
      body: "Target field, source field, transformation, behaviour when the source is null, behaviour when the value is not permitted at the target, default, and who confirmed the business meaning.",
      effort: "2-5 days",
      outcome: "A specification an engineer can implement without guessing.",
    },
    {
      title: "Specify matching, duplicates and ordering",
      body: "What key matches an incoming record, what happens when the match fails, what a duplicate means for the business, and whether sequence matters.",
      effort: "1 day",
      outcome: "The three questions that produce the most expensive integration defects.",
    },
    {
      title: "Specify failure behaviour and the manual fallback",
      body: "What the user sees, what is recorded, retry behaviour, partial completion handling, and what the business does while the interface is down.",
      effort: "1 day",
      outcome: "An operation that can keep working on a bad day, and a plan for the reconciliation afterwards.",
    },
    {
      title: "Agree reconciliation and volumes before build",
      body: "Control totals, frequency, tolerance, owner and escalation. Plus daily volume, peak, message size and growth, including bulk events.",
      effort: "Half a day",
      outcome: "The ability to tell whether the interface is working, which is otherwise unavailable.",
    },
  ],

  exercises: [
    {
      title: "Independent definitions",
      brief:
        "Pick two systems in your organisation that exchange data about the same entity. Ask one person from each to define that entity in a single sentence, without seeing the other's answer. Compare them.",
      success:
        "You can name at least one case that the two definitions would count differently, and you can say what the interface currently does with it.",
      time: "1 hour",
    },
    {
      title: "The duplicate question",
      brief:
        "For any existing interface, work out what would happen if yesterday's file were processed a second time by mistake. Ask the business what the customer-visible consequence would be.",
      success:
        "You can say whether the interface is safe to reprocess, and if not, what the recovery procedure currently is.",
      time: "1 hour",
    },
    {
      title: "Build a control total",
      brief:
        "For one live interface, define a daily reconciliation: records sent, received, rejected, and a value total on each side. Run it for a week and compare.",
      success:
        "You have a working daily check, and you know whether the interface is currently losing anything.",
      time: "Half a day plus a week of running",
    },
  ],

  mistakes: [
    {
      mistake: "Specifying from the payload rather than the business event",
      why: "You produce an interface that copies fields rather than one that communicates something, and it breaks conceptually the first time the business changes how it works.",
      fix: "Write the events first: what happened, and what the receiving business does about it. Derive the message from that.",
    },
    {
      mistake: "Mapping fields without confirming meaning",
      why: "Two systems using one word for different concepts is the normal case, and a field mapping hides it completely until the counts disagree.",
      fix: "Independent written definitions from both system owners before any mapping is built.",
    },
    {
      mistake: "Leaving null handling and defaults to the engineer",
      why: "They will choose something reasonable for the code. Whether a missing delivery date means today, blank or reject is a business decision with operational consequences.",
      fix: "Make transformation, null handling, unmapped value handling and default mandatory columns with no blank cells permitted.",
    },
    {
      mistake: "Not specifying what a duplicate means",
      why: "Retries and reruns are normal. Without a stated key for recognising duplicates, the business finds out through double charges or double dispatches.",
      fix: "Ask what would happen to the customer if this arrived twice, and specify the key on which duplicates are identified.",
    },
    {
      mistake: "Ignoring partial completion",
      why: "A transfer that updates one system and fails before the other leaves an inconsistency neither side knows about, and it is discovered by a customer rather than by a system.",
      fix: "Specify explicitly what state the business is in after each possible failure point, and how it is detected and corrected.",
    },
    {
      mistake: "No manual fallback specified",
      why: "On the first outage the operation invents a procedure under pressure, and the work done during the outage has to be reconciled by hand afterwards with no plan.",
      fix: "Specify what the person does while it is down and what happens to that work when the connection returns.",
    },
    {
      mistake: "No reconciliation",
      why: "An interface silently dropping a small proportion of records looks identical to one that is working, and by the time anybody notices there is no way to identify what was lost.",
      fix: "Agree daily control totals, tolerance, owner and escalation before the interface goes live.",
    },
    {
      mistake: "Designing for steady volume only",
      why: "Bulk events break interfaces: a price update across the catalogue, a migration, a mass customer change. These are foreseeable and are usually not considered.",
      fix: "Specify daily volume, peak, message size, growth, and explicitly what happens during a bulk event.",
    },
  ],

  bestPractices: [
    "Specify from the business event, not the payload.",
    "Name one source of truth per business fact, with an accountable owner.",
    "Get independent written definitions of every shared term from both sides.",
    "Decide direction, trigger and timing as three separate questions.",
    "Derive timing from a business consequence rather than a preference.",
    "Specify the matching key and what happens when the match fails.",
    "State what a duplicate means for the business and how it is recognised.",
    "Say whether ordering matters, and how sequence is determined if it does.",
    "Specify failure behaviour in four parts, including partial completion.",
    "Specify what the business does while the interface is unavailable.",
    "Agree daily reconciliation totals, tolerance and owner before go-live.",
    "Include volume, peak, message size, growth and bulk events.",
    "Establish how you will be told about changes on the other side.",
  ],

  proTips: [
    "Ask what the two systems disagreed about last time and how it was resolved. Every long-running integration has a history of reconciliation arguments, and the pattern in them tells you exactly where the definitions differ. It is faster than any amount of documentation review and it comes from the people who had to sort it out.",
    "Insist on seeing real messages from the source system rather than a schema. Schemas describe what is permitted. Real messages show you what is actually sent, including the field that is always empty, the one that contains a code not in the documentation, and the one somebody has been using as a free text note.",
    "Specify the reconciliation report before you specify the interface. It forces you to decide what would count as working, and that decision usually exposes an ambiguity in the requirement itself. It is also the artefact the support team will thank you for, which matters when you need something from them later.",
    "Where the counterparty is external, ask what happens if they change their format without telling you, and write the answer down even when the answer is that you will find out when it breaks. Making that explicit occasionally causes somebody to fix it, and when it does not, at least the risk has been accepted deliberately.",
  ],

  businessApplications: [
    "Connecting a new application to an existing landscape, where the definitions have drifted for years.",
    "Vendor and partner interfaces, where the counterparty's release schedule is a constraint you do not control.",
    "Master data management, where source of truth is the entire question.",
    "Migration projects, where interfaces have to work across both old and new systems during a transition period.",
    "Regulatory reporting, where completeness and reconciliation are auditable obligations.",
    "Mergers, where two organisations exchange data about the same customers under incompatible definitions.",
  ],

  checklist: [
    "Business events documented, with what the receiving business does about each.",
    "Source of truth named per fact, with an accountable owner.",
    "Independent definitions obtained from both system owners.",
    "Direction, trigger and timing decided separately and justified.",
    "Field mapping complete with no blank transformation, null, unmapped or default cells.",
    "Matching key specified, with behaviour when the match fails.",
    "Duplicate handling specified with a recognition key.",
    "Ordering requirement stated, with the sequencing mechanism if it matters.",
    "Failure behaviour specified: user sees, recorded, retries, partial completion.",
    "Manual fallback specified, including reconciliation of work done during an outage.",
    "Reconciliation totals, frequency, tolerance, owner and escalation agreed.",
    "Volume, peak, message size, growth and bulk event behaviour documented.",
    "Change notification process with the counterparty established.",
  ],

  faqs: [
    {
      q: "How technical does a BA need to be to specify an integration?",
      a: "Enough to read a data model, understand the difference between a batch and an event-driven interface, and follow a conversation about retries and idempotency. You do not need to design the technical solution. You need to specify what the business requires of it.",
    },
    {
      q: "Batch or real time?",
      a: "Derive it from consequence. If a delay of some hours causes a customer-visible problem, you need something closer to real time. If not, a batch is cheaper, simpler to reconcile and easier to rerun. Preference is not a justification.",
    },
    {
      q: "What is idempotency and why should I care?",
      a: "It means processing the same message more than once has the same effect as processing it once. You care because retries and reruns are normal, and the business consequence of a duplicate, such as a double charge, is yours to specify rather than the developer's to discover.",
    },
    {
      q: "Who decides what happens when the two systems disagree?",
      a: "The owner of the business fact, which is why naming a source of truth comes before anything else. If both systems can edit the same fact, you have specified permanent reconciliation work and that should be a conscious decision.",
    },
    {
      q: "How do I specify an interface with an external party who will not engage?",
      a: "Write what you will send and expect, state your assumptions explicitly, and send it to them and to your sponsor. Assumptions in writing get corrected more often than open-ended requests get answered, and if they are not corrected you have a documented position.",
    },
    {
      q: "Do I need to specify the technical protocol?",
      a: "No. Specify the business requirements: event, meaning, timing, failure behaviour, volume and reconciliation. The protocol is a technical choice, and constraining it without reason removes options that might be cheaper in your environment.",
    },
  ],

  tools: [
    { name: "A field mapping template", what: "Target, source, transformation, null handling, unmapped handling, default, confirmed by. No blank cells permitted.", cost: "Free" },
    { name: "Real sample messages", what: "Not a schema. What is actually sent, including the fields nobody documented and the ones being misused.", cost: "Free" },
    { name: "A reconciliation definition", what: "Control totals, frequency, tolerance, owner, escalation. Write it before specifying the interface.", cost: "Free" },
    { name: "A shared glossary with both definitions", what: "Each term as each side defines it, side by side, with the rule that resolves the difference.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "data-requirements-for-analysts", anchor: "profiling the data on both sides", context: "Before mapping" },
    { slug: "api-integration-that-doesnt-break", anchor: "the engineering side of the same problem", context: "Technical context" },
    { slug: "impact-assessment-before-a-change", anchor: "who else consumes this data", context: "Impact" },
  ],

  relatedGuides: ["data-requirements-for-analysts", "api-integration-that-doesnt-break", "impact-assessment-before-a-change"],

  conclusion: [
    "Take one interface your organisation already runs and define its daily reconciliation: records sent, received, rejected, and a value total on each side. Run it for a week. If the numbers differ, you have found something that has been happening silently for a long time, and if they match you have built the only thing that would ever tell you when they stop.",
  ],
};

export default guide;
