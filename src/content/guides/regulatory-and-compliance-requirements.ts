import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "regulatory-and-compliance-requirements",
  seoTitle: "Regulatory and Compliance Requirements for Analysts",
  metaDescription:
    "Reading an obligation, translating it into controls a business can operate, building the evidence trail, and avoiding the gold-plating that makes compliance expensive.",
  title: "Regulatory and Compliance Requirements",
  keywords: [
    "compliance requirements",
    "regulatory change analysis",
    "control design",
    "audit evidence requirements",
    "business analyst compliance",
    "regulatory requirements traceability",
  ],
  category: "requirements",
  level: "Advanced",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "Regulatory work has a reputation for being the least interesting analysis a Business Analyst does, and in my experience it is among the most demanding. The requirement is externally written, in language designed for lawyers rather than for delivery, and it says what outcome must be achieved without saying anything about how. Turning that into something a team can build and an operation can run is entirely analytical work.",
    "It also has a failure mode all of its own. Because nobody wants to be the person who under-delivered on a regulatory obligation, the safe-looking option is always to do more, and the accumulated effect of many people choosing the safe option is a compliance regime that costs several times what the obligation required and buries the controls that actually matter.",
    "This guide covers the whole chain: how to read an obligation and identify what it actually requires, how to translate that into controls somebody can operate on a Tuesday, how to design the evidence trail so that demonstrating compliance is not a project in itself, and how to argue against gold-plating without appearing cavalier about the rules.",
  ],

  whyItMatters: [
    "The consequences of getting it wrong are asymmetric and public. An ordinary project that underdelivers is a disappointment. A compliance failure can bring fines, remediation programmes, regulatory attention across other areas, and personal consequences for named executives.",
    "But over-delivery has a cost that is real and invisible. Controls nobody needed still consume time every day, still have to be evidenced, and still get tested by internal audit. The organisation ends up unable to distinguish the controls that matter from the ones that accumulated, which makes it less safe rather than more.",
    "And the analytical contribution here is unusually clear. Lawyers can say what the obligation means. Compliance can say what the risk appetite is. Only somebody who understands the operation can say what control would actually work in it, which is the piece that determines whether compliance survives contact with a busy Tuesday.",
  ],

  coreConcepts: [
    {
      term: "Separate the obligation from the interpretation from the implementation",
      explain:
        "The obligation is what the rule says. The interpretation is what your organisation has decided it means for you. The implementation is the control you build. Three layers, three owners, and they should be traceable to each other.",
      detail:
        "Most compliance confusion comes from these being merged. When somebody says the regulator requires this, it is worth establishing which layer they are describing, because interpretations get quoted as obligations remarkably often.",
    },
    {
      term: "You do not own the interpretation",
      explain:
        "The BA's job is to establish what the obligation requires operationally and to surface the questions. What the rule means for this organisation is a decision for legal, compliance or the accountable executive.",
      detail:
        "Be explicit about this in writing. An analyst who interprets a regulation informally has taken on a liability that is not theirs, and the organisation has lost a control it thought it had.",
    },
    {
      term: "Read for the required outcome, not the described mechanism",
      explain:
        "Most modern regulation states an outcome: customers must be treated fairly, records must be retrievable, decisions must be explicable. It deliberately does not specify how.",
      detail:
        "That is a design freedom rather than an ambiguity to be feared. It means you can meet the obligation with a control that fits your operation rather than copying whatever another organisation did.",
    },
    {
      term: "Extract the requirement into atomic obligations",
      explain:
        "Break the text into individually testable statements: this must happen, within this period, evidenced this way, for these cases, with these exceptions.",
      detail:
        "Number them and trace every downstream requirement to one. When a regulator or an auditor asks how you meet clause four, that trace is the answer, and building it later from a finished system is far harder.",
    },
    {
      term: "A control has five parts",
      explain:
        "What it prevents or detects, who performs it, when, what evidence it produces, and what happens when it fails or is skipped.",
      detail:
        "The last two are what separate a control from an intention. A control that produces no evidence cannot be demonstrated, and one with no defined failure path will be skipped silently under pressure.",
    },
    {
      term: "Preventive beats detective, and automated beats manual",
      explain:
        "A control that stops the wrong thing happening is worth more than one that finds it afterwards, and one the system enforces is worth more than one that depends on somebody remembering.",
      detail:
        "There is a caveat. An automated control that people can override without record is not a control. Where an override is necessary, and it usually is, the override itself needs a reason, an approver and an audit trail.",
    },
    {
      term: "Design the evidence at the same time as the control",
      explain:
        "What will be shown to an auditor, where it is stored, how long it is kept, and how somebody retrieves it for a specific case eighteen months later.",
      detail:
        "Retrofitting an evidence trail is one of the most expensive things a compliance programme does. Asking what would be shown, and how it would be found, while the control is still being designed costs nothing.",
    },
    {
      term: "The question that tests any control design",
      explain:
        "If this decision were challenged in two years, what would we need to be able to show, and who would ask for it?",
      detail:
        "It converts an abstract requirement into a concrete artefact, and it usually reveals that the intended evidence does not capture the reasoning, only the outcome. Regulators generally want the reasoning.",
    },
    {
      term: "Gold-plating is the standard failure and it is expensive",
      explain:
        "Extra approvals, extra fields, extra checks, added because nobody wants to be the person who did too little. Individually small and collectively enormous.",
      detail:
        "The defence is traceability. Every control should trace to a numbered obligation. A control tracing to nothing is either a business decision, which should be argued on its merits, or it is accumulation.",
    },
    {
      term: "Compliance that does not fit the operation gets worked around",
      explain:
        "A control that adds significant effort at the busiest moment will be bypassed, and the bypass will be undocumented, which is worse than not having the control.",
      detail:
        "Test every proposed control against a real busy day with the people who will perform it. This is where the analyst adds something neither legal nor compliance can, and it is why they should be involved in control design rather than just in build.",
    },
    {
      term: "Change of rule, and cases in flight",
      explain:
        "Regulations have effective dates. What happens to cases opened under the old rule, and can you still explain a decision made two years ago under the rule that applied then?",
      detail:
        "Systems that only hold current rules cannot reconstruct a historical decision. That is frequently a regulatory problem in itself and it needs to be designed for rather than discovered during an investigation.",
    },
    {
      term: "Assume you will have to prove it, to someone unfamiliar",
      explain:
        "Not to a colleague who understands the context, but to an auditor or regulator with none of it, working from documents.",
      detail:
        "That standard is higher than it sounds and it changes what you specify. It is also the correct standard, because the moment you need it is the moment nobody who built it is available to explain.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The control that was bypassed every busy afternoon.",
      walkthrough:
        "A new obligation requires a second check on certain transactions. The designed control adds a mandatory approval step performed by a supervisor. It is implemented and evidenced. Six months later a BA sits with the team during a peak period and finds that supervisors approve in batches at the end of the day, without examining individual items, because doing otherwise would stop the queue entirely.",
      result:
        "The control existed, produced evidence, and was not being performed. The evidence trail actively concealed this, because a batch of timely approvals looks exactly like a set of considered ones. Testing a proposed control against a real busy day, with the people who will perform it, is the check that would have caught this at design time.",
    },
    {
      kind: "illustration",
      scenario: "Fourteen controls tracing to nothing.",
      walkthrough:
        "A BA reviewing an accumulated compliance regime builds a trace from every operating control back to a numbered obligation. Most map cleanly. Fourteen do not. Investigation shows several were added during previous projects on the grounds that a regulator might expect them, two duplicate a control performed elsewhere, and one enforces a threshold that was superseded by a later rule change nobody had propagated.",
      result:
        "Removing them required compliance sign-off and a documented rationale, which took time and was straightforward once the trace existed. The saving was ongoing operational effort every day. Traceability is usually framed as an audit obligation. It is at least as useful as a tool for finding the controls nobody needs.",
    },
    {
      kind: "illustration",
      scenario: "Evidence that recorded the outcome and not the reasoning.",
      walkthrough:
        "A decision process is designed to meet an obligation that decisions must be explicable. The system records the decision, the decision maker and the timestamp. Two years later a case is challenged and the organisation is asked why this particular customer received this particular outcome. The record shows what was decided and holds nothing about which factors applied or what the assessor considered.",
      result:
        "The obligation was about explicability and the evidence captured only the result. Asking what would need to be shown if this were challenged in two years, at the point where the control is being designed, is a one-minute question that would have changed the specification and cost nothing at that stage.",
    },
  ],

  learningPath: [
    {
      title: "Get the primary text and read it yourself",
      body: "Not a summary, not a vendor's interpretation, not a consultancy briefing. The actual rule, plus any regulator guidance published alongside it.",
      effort: "1-2 days",
      outcome: "The ability to tell what the obligation says from what people have decided it means.",
    },
    {
      title: "Break it into numbered atomic obligations",
      body: "Individually testable statements: what must happen, for which cases, within what period, evidenced how, with what exceptions.",
      effort: "2-3 days",
      outcome: "The numbered list everything downstream traces to.",
    },
    {
      title: "Take the interpretation questions to their owner",
      body: "List every point where the text is ambiguous for your organisation and route it to legal or compliance for a documented decision. Do not resolve them yourself.",
      effort: "1-2 weeks elapsed",
      outcome: "Interpretations owned by the people accountable for them, in writing.",
    },
    {
      title: "Map obligations against existing controls",
      body: "What already covers each obligation, what partially covers it, and what is genuinely new. Also note controls that trace to nothing.",
      effort: "1 week",
      outcome: "A real gap list, which is nearly always shorter than the initial assumption, plus a removal candidate list.",
    },
    {
      title: "Design controls with all five parts",
      body: "What it prevents or detects, who performs it, when, what evidence it produces, and what happens on failure or skip. Prefer preventive and automated, with recorded overrides.",
      effort: "1-2 weeks",
      outcome: "Controls that can be operated and demonstrated rather than intentions.",
    },
    {
      title: "Design the evidence trail alongside",
      body: "What is shown, where stored, retention period, and how a specific case is retrieved eighteen months later. Ask the challenged-in-two-years question for each.",
      effort: "3-5 days",
      outcome: "Demonstrable compliance rather than a future evidence retrofit project.",
    },
    {
      title: "Test every control against a real busy day",
      body: "Walk it through with the people who will perform it, at peak volume, using real cases. Watch for the point where it would be skipped.",
      effort: "2-3 days",
      outcome: "Controls that survive contact with the operation rather than being worked around.",
    },
    {
      title: "Build the traceability pack",
      body: "Obligation number, interpretation, control, evidence, owner, test date. One table. It is what you show when somebody asks how you comply.",
      effort: "2-3 days",
      outcome: "An answer to the audit question that already exists rather than being assembled under pressure.",
    },
  ],

  exercises: [
    {
      title: "Trace the controls",
      brief:
        "Take a compliance area in your organisation and list its operating controls. For each, find the specific obligation it traces to. Mark the ones where you cannot find one.",
      success:
        "You have a count of untraceable controls and at least one candidate that could be removed with compliance agreement.",
      time: "Half a day",
    },
    {
      title: "The challenged-in-two-years test",
      brief:
        "Pick any decision your organisation makes about customers. Establish exactly what could be shown if that decision were challenged in two years: what was decided, by whom, on what basis, and what they considered.",
      success:
        "You can say whether the evidence captures the reasoning or only the outcome, and name what is missing.",
      time: "2 hours",
    },
    {
      title: "Busy day walkthrough",
      brief:
        "Take a control that is currently operating and observe it during the busiest period of the week. Note what actually happens rather than what the procedure says.",
      success:
        "You can say whether the control is performed as designed under pressure, and if not, where the shortcut occurs.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Working from a summary rather than the primary text",
      why: "Summaries carry somebody else's interpretation, and interpretations get quoted as obligations. You end up building to a consultant's reading rather than to the rule.",
      fix: "Read the actual regulation and any regulator guidance alongside it, before accepting any interpretation.",
    },
    {
      mistake: "Interpreting the regulation yourself",
      why: "You have taken on a liability that is not yours, and the organisation has lost a control it believed it had, because nobody accountable ever reviewed the reading.",
      fix: "Surface every ambiguity as a question and route it to legal or compliance for a documented decision.",
    },
    {
      mistake: "Designing controls without the evidence trail",
      why: "Compliance that cannot be demonstrated is not compliance, and retrofitting evidence is one of the most expensive things a programme does.",
      fix: "Specify what would be shown, where it is stored, how long it is kept and how it is retrieved, at the same time as the control.",
    },
    {
      mistake: "Recording the outcome but not the reasoning",
      why: "Most explicability obligations are about why a decision was reached. A record of what was decided answers a different question from the one that gets asked.",
      fix: "Ask what would need to be shown if this were challenged in two years, and specify the reasoning as captured data.",
    },
    {
      mistake: "Gold-plating out of caution",
      why: "Extra controls added because nobody wants to do too little accumulate into a regime that costs several times the obligation and hides the controls that matter.",
      fix: "Require every control to trace to a numbered obligation. Anything that does not is a business decision to be argued on its own merits.",
    },
    {
      mistake: "Designing controls that do not fit the operation",
      why: "A control adding significant effort at the busiest moment gets bypassed, and an undocumented bypass is worse than no control at all.",
      fix: "Walk every proposed control through a real busy day with the people who will perform it.",
    },
    {
      mistake: "Automated controls with unrecorded overrides",
      why: "An override without a reason, an approver and a trail turns an enforced control into an optional one, and the audit evidence will not reveal it.",
      fix: "Where overrides are necessary, specify the reason capture, the approval and the audit record as part of the control.",
    },
    {
      mistake: "Not designing for historical rules",
      why: "When the rule changes, systems holding only current logic cannot reconstruct why a decision was made two years ago under the previous rule.",
      fix: "Specify effective dating and the treatment of cases in flight, and check that a historical decision remains explicable.",
    },
  ],

  bestPractices: [
    "Read the primary text yourself before accepting any interpretation.",
    "Separate obligation, interpretation and implementation, with owners for each.",
    "Route every ambiguity to legal or compliance for a documented decision.",
    "Break the text into numbered atomic obligations.",
    "Trace every control and requirement to a numbered obligation.",
    "Specify all five parts of every control.",
    "Prefer preventive over detective and automated over manual.",
    "Specify reason, approver and audit trail for every override.",
    "Design the evidence trail at the same time as the control.",
    "Ask what would be shown if this were challenged in two years.",
    "Walk every control through a real busy day with the people who perform it.",
    "Specify effective dating and in-flight treatment for rule changes.",
    "Maintain a traceability pack: obligation, interpretation, control, evidence, owner, test date.",
  ],

  proTips: [
    "Ask the compliance team what the regulator has actually asked for in the past, in this organisation and in comparable ones. Published enforcement notices and past information requests tell you what scrutiny genuinely looks like, which is usually more specific and more evidence-focused than the general anxiety in the room suggests.",
    "When somebody says the regulator requires this, ask which clause. Roughly half the time the answer is that it is an internal interpretation, occasionally one made years ago by somebody who has left. That question is not obstructive if you ask it neutrally, and it is the single most effective defence against accumulated gold-plating.",
    "Get the person who will perform the control into the design conversation, always. Compliance can specify what must be achieved and only the operator can tell you at which point in a busy Thursday it will be skipped. Every worked-around control I have investigated was designed without that person present.",
    "Write the audit answer before building the control. One paragraph explaining how the obligation is met and what evidence exists. If you cannot write it convincingly at design time, the control is not finished, and it is far cheaper to discover that now than during an inspection.",
  ],

  businessApplications: [
    "Implementing new regulation with a fixed external deadline and no scope flexibility.",
    "Remediation programmes following a regulatory finding, where evidence quality is under scrutiny.",
    "Financial services conduct and reporting obligations, where controls and evidence are inspected directly.",
    "Data protection work, where retention, deletion and lawful basis are all requirements with evidence trails.",
    "Health, safety and environmental compliance, where controls are operational rather than system-based.",
    "Control rationalisation, where the trace is used to find and remove accumulated controls nobody needs.",
  ],

  checklist: [
    "Primary regulatory text obtained and read.",
    "Obligations broken into numbered atomic statements.",
    "Ambiguities routed to legal or compliance and answered in writing.",
    "Interpretations recorded separately from obligations, with owners.",
    "Existing controls mapped against obligations.",
    "Untraceable controls identified as removal candidates.",
    "Every control specifies what, who, when, evidence and failure path.",
    "Preventive and automated options preferred where practical.",
    "Overrides specify reason, approver and audit trail.",
    "Evidence trail designed with storage, retention and retrieval.",
    "Challenged-in-two-years question asked for every decision point.",
    "Every control walked through a real busy day with its operators.",
    "Effective dating and in-flight treatment specified.",
    "Traceability pack complete and reviewable.",
  ],

  faqs: [
    {
      q: "Who owns the interpretation of a regulation?",
      a: "Legal, compliance or the accountable executive, never the BA. Your job is to establish what it requires operationally and to surface every ambiguity as a question. Interpreting informally takes on a liability that is not yours and removes a control the organisation thought it had.",
    },
    {
      q: "How do I stop a compliance programme gold-plating?",
      a: "Traceability. Require every control to map to a numbered obligation, and treat anything that does not as a business decision needing its own justification. That converts an argument about caution into a documented question about scope.",
    },
    {
      q: "What makes a control auditable?",
      a: "It produces evidence, at the time it is performed, that identifies the case, the performer, the outcome and the reasoning, stored for the required period and retrievable for a specific case. Anything short of that is difficult to demonstrate afterwards.",
    },
    {
      q: "Is an automated control always better than a manual one?",
      a: "Usually, because it does not depend on memory or discipline. The exception is where it can be overridden without record, which quietly makes it optional. Where overrides are necessary, specify reason capture, approval and an audit trail.",
    },
    {
      q: "How do I handle a regulation that is genuinely ambiguous?",
      a: "Document the ambiguity, the options and the risk of each, and take it to the accountable owner for a decision. Record what was decided and why. A documented reasonable interpretation is a defensible position; an undocumented one is not.",
    },
    {
      q: "What happens to cases in flight when a rule changes?",
      a: "It is a specification decision and it must be made explicitly: complete under the old rule, transition to the new, or handle by exception. Also check whether historical decisions remain explicable, because systems holding only current rules frequently cannot reconstruct them.",
    },
  ],

  tools: [
    { name: "The primary regulatory text and regulator guidance", what: "Read directly rather than through summaries. Interpretations get quoted as obligations remarkably often.", cost: "Free" },
    { name: "A numbered atomic obligation list", what: "Individually testable statements that everything downstream traces to.", cost: "Free" },
    { name: "A traceability pack", what: "Obligation, interpretation, control, evidence, owner, test date. The answer to how do you comply, ready before it is asked.", cost: "Free" },
    { name: "A busy day walkthrough", what: "Every control tested at peak with its actual operators. The check that finds the ones that will be bypassed.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "business-rules-and-decision-tables", anchor: "expressing the rules precisely", context: "Specification" },
    { slug: "non-functional-requirements-in-practice", anchor: "retention, audit and access requirements", context: "Related requirements" },
    { slug: "impact-assessment-before-a-change", anchor: "identifying controls a change would remove", context: "Change control" },
  ],

  relatedGuides: ["business-rules-and-decision-tables", "non-functional-requirements-in-practice", "impact-assessment-before-a-change"],

  conclusion: [
    "Take one compliance area in your organisation, list the controls that currently operate, and try to trace each one back to a specific numbered obligation. The ones you cannot trace are either business decisions nobody has argued for or accumulation nobody has questioned, and finding them takes an afternoon.",
  ],
};

export default guide;
