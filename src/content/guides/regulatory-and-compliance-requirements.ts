import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "regulatory-and-compliance-requirements",
  seoTitle: "Turning a Rule From Outside Into Something People Can Do",
  metaDescription:
    "How to read an obligation, turn it into checks a busy team can actually perform, build the evidence trail, and avoid doing far more than the rule ever asked for.",
  title: "Turning a Rule Into Something People Can Do",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Compliance work has a reputation for being the dullest analysis a Business Analyst does, and in my experience it is among the most demanding. The requirement comes from outside, written in language aimed at lawyers rather than at delivery teams, and it says what has to be achieved without saying anything about how. Turning that into something a team can build and a busy operation can actually do is all analysis.",
    "It also has a failure mode all of its own. Because nobody wants to be the person who did too little on a legal obligation, the safe-looking option is always to do more. The effect of many people each choosing the safe option is a compliance regime costing several times what the rule required, which then buries the checks that actually matter.",
    "This guide covers the whole chain: reading a rule and working out what it really requires, turning that into checks somebody can perform on a busy Tuesday, designing the evidence trail so proving it is not a project in itself, and arguing against doing too much without sounding cavalier about the rules.",
  ],

  whyItMatters: [
    "Getting it wrong is public and lopsided. An ordinary project that under-delivers is a disappointment. A compliance failure can bring fines, a remediation programme, attention on everything else you do, and consequences for named individuals.",
    "But doing too much has a cost that is real and invisible. Checks nobody needed still eat time every day, still have to be evidenced, and still get tested by internal audit. The business ends up unable to tell which checks matter and which just accumulated, which makes it less safe rather than more.",
    "And what an analyst adds here is unusually clear. Lawyers can say what the rule means. Compliance can say how much risk the business will accept. Only somebody who understands the operation can say what check would actually work in it, which is what decides whether compliance survives a busy Tuesday.",
  ],

  coreConcepts: [
    {
      term: "Three layers, and people run them together constantly",
      explain:
        "What the rule says. What your business has decided it means for you. And the check you build. Three layers, three owners, and each should trace back to the one above.",
      detail:
        "Most compliance confusion comes from these being merged. When somebody says the regulator requires this, it is worth establishing which layer they are describing, because interpretations get quoted as rules remarkably often.",
    },
    {
      term: "You do not decide what the rule means",
      explain:
        "Your job is to work out what it requires in practice and to surface the questions. What it means for this business is a decision for legal, compliance or the accountable executive.",
      detail:
        "Be explicit about this in writing. An analyst who quietly interprets a regulation has taken on a liability that is not theirs, and the business has lost a control it thought it had.",
    },
    {
      term: "Read for the outcome, not for a method",
      explain:
        "Most modern regulation states an outcome: customers must be treated fairly, records must be findable, decisions must be explainable. It deliberately does not say how.",
      detail:
        "That is freedom rather than vagueness to be afraid of. It means you can meet the rule with something that fits your operation rather than copying whatever another business did.",
    },
    {
      term: "Break the text into separate things you can check",
      explain:
        "Turn it into individually checkable statements: this must happen, within this period, evidenced this way, for these cases, with these exceptions.",
      detail:
        "Number them, and make every requirement point back to one. When a regulator or an auditor asks how you meet clause four, that link is the answer, and building it afterwards from a finished system is far harder.",
    },
    {
      term: "A check has five parts",
      explain:
        "What it stops or catches, who does it, when, what evidence it leaves behind, and what happens when it fails or gets skipped.",
      detail:
        "The last two are what separate a real check from an intention. Something that leaves no evidence cannot be proved, and something with no defined failure path will get skipped quietly under pressure.",
    },
    {
      term: "Stopping something beats catching it, and automatic beats manual",
      explain:
        "A check that stops the wrong thing happening is worth more than one that finds it afterwards, and one the system enforces is worth more than one depending on somebody remembering.",
      detail:
        "With one caveat. An automatic check people can override without any record is not a check. Where an override is necessary, and it usually is, the override itself needs a reason, an approver and a trail.",
    },
    {
      term: "Design the evidence at the same time as the check",
      explain:
        "What will you show an auditor, where is it kept, how long for, and how does somebody find it for a specific case eighteen months later?",
      detail:
        "Adding an evidence trail afterwards is one of the most expensive things a compliance programme does. Asking what would be shown, and how it would be found, while the check is still being designed costs nothing.",
    },
    {
      term: "The question that tests any check",
      explain:
        "If this decision were challenged in two years, what would we need to be able to show, and who would be asking?",
      detail:
        "It turns an abstract requirement into a concrete thing, and it usually reveals that the intended evidence captures the outcome but not the reasoning. Regulators generally want the reasoning.",
    },
    {
      term: "Doing more than the rule asks is the standard failure",
      explain:
        "Extra approvals, extra fields, extra checks, added because nobody wants to be the person who did too little. Individually small and collectively enormous.",
      detail:
        "The defence is the link back to the rule. Every check should point at a numbered obligation. One that points at nothing is either a business decision, which should be argued on its own merits, or it is accumulation.",
    },
    {
      term: "A check that does not fit the work gets worked around",
      explain:
        "Something adding significant effort at the busiest moment will get bypassed, and the bypass will be undocumented, which is worse than not having the check at all.",
      detail:
        "Test every proposed check against a real busy day, with the people who will perform it. This is where an analyst adds something neither legal nor compliance can, and it is why you should be involved in designing checks rather than only in building them.",
    },
    {
      term: "Rules change, and work in progress has to be dealt with",
      explain:
        "Regulations have start dates. What happens to cases opened under the old rule, and can you still explain a decision made two years ago under the rule that applied then?",
      detail:
        "Systems that only hold the current rules cannot reconstruct a historical decision. That is frequently a regulatory problem in its own right and it has to be designed for rather than discovered during an investigation.",
    },
    {
      term: "Assume you will have to prove it to somebody who knows nothing",
      explain:
        "Not to a colleague who understands the context, but to an auditor or a regulator with none of it, working from documents.",
      detail:
        "That bar is higher than it sounds and it changes what you specify. It is also the right bar, because the moment you need it is exactly the moment when nobody who built it is available to explain.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The check that got bypassed every busy afternoon.",
      walkthrough:
        "The problem: a new obligation required a second look at certain transactions. What was happening: the check they designed added a mandatory approval by a supervisor. It was built, it produced evidence, and everybody was satisfied. Six months later a BA sat with the team during a peak period and found supervisors approving in batches at the end of the day, without looking at individual items, because doing anything else would have stopped the queue completely.",
      result:
        "What changed: they redesigned it around a sample rather than everything. The check existed, produced evidence, and was not being performed. The evidence trail actively hid this, because a batch of timely approvals looks exactly like a set of considered ones. Testing a proposed check against a real busy day with the people who will do it would have caught this at design time.",
    },
    {
      kind: "illustration",
      scenario: "Fourteen checks pointing at nothing.",
      walkthrough:
        "The problem: a compliance regime had grown over years and nobody could say what half of it was for. What was happening: the BA built a link from every operating check back to a numbered obligation. Most mapped cleanly. Fourteen did not. Several had been added during previous projects on the grounds that a regulator might expect them, two duplicated a check done somewhere else, and one enforced a limit that had been superseded by a later rule change nobody had passed on.",
      result:
        "What changed: removing them needed compliance sign-off and a written reason, which took time and was straightforward once the link existed. The saving was daily operational effort forever. Linking checks back to rules usually gets framed as an audit obligation. It is at least as useful for finding the checks nobody needs.",
    },
    {
      kind: "illustration",
      scenario: "Evidence that recorded the answer but not the thinking.",
      walkthrough:
        "The problem: a decision process was designed to meet an obligation that decisions must be explainable. What was happening: the system recorded the decision, who made it and when. Two years later a case was challenged and the business was asked why this particular customer got this particular outcome. The record showed what was decided and held nothing about which factors applied or what the assessor had considered.",
      result:
        "What changed: nothing could, for that case. The obligation was about being able to explain, and the evidence captured only the result. Asking what would need to be shown if this were challenged in two years, at the point the check is being designed, is a one-minute question that would have changed the specification and cost nothing at that stage.",
    },
  ],

  learningPath: [
    {
      title: "Get the actual text and read it yourself",
      body: "Not a summary, not a supplier's interpretation, not a consultancy briefing. The actual rule, plus any guidance the regulator published alongside it.",
      effort: "1-2 days",
      outcome: "The ability to tell what the rule says from what people have decided it means.",
    },
    {
      title: "Break it into numbered, checkable statements",
      body: "Individually checkable: what must happen, for which cases, within what period, evidenced how, with what exceptions.",
      effort: "2-3 days",
      outcome: "The numbered list everything else points back to.",
    },
    {
      title: "Take the unclear bits to whoever owns them",
      body: "List every point where the text is ambiguous for your business and send it to legal or compliance for a written decision. Do not resolve them yourself.",
      effort: "1-2 weeks of waiting",
      outcome: "Interpretations owned by the people accountable for them, in writing.",
    },
    {
      title: "Map the rules against the checks you already have",
      body: "What already covers each one, what partly covers it, and what is genuinely new. Also note any checks pointing at nothing.",
      effort: "1 week",
      outcome: "A real gap list, nearly always shorter than the initial assumption, plus a list of candidates for removal.",
    },
    {
      title: "Design checks with all five parts",
      body: "What it stops or catches, who does it, when, what evidence it leaves, and what happens on failure or when skipped. Prefer stopping over catching and automatic over manual, with overrides recorded.",
      effort: "1-2 weeks",
      outcome: "Checks that can be performed and proved rather than intentions.",
    },
    {
      title: "Design the evidence alongside",
      body: "What gets shown, where it is kept, how long for, and how a specific case gets found eighteen months later. Ask the challenged-in-two-years question for each.",
      effort: "3-5 days",
      outcome: "Provable compliance rather than a future evidence project.",
    },
    {
      title: "Test every check on a real busy day",
      body: "Walk it through with the people who will perform it, at peak, using real cases. Watch for the point where it would get skipped.",
      effort: "2-3 days",
      outcome: "Checks that survive contact with the operation rather than being worked around.",
    },
    {
      title: "Build the pack that answers how do you comply",
      body: "Rule number, interpretation, check, evidence, owner, when it was last tested. One table. It is what you show when somebody asks.",
      effort: "2-3 days",
      outcome: "An answer that already exists rather than being assembled under pressure.",
    },
  ],

  exercises: [
    {
      title: "Link the checks back",
      brief:
        "Take a compliance area in your business and list the checks that actually operate. For each, find the specific rule it points back to. Mark the ones where you cannot find one.",
      success:
        "You have a count of checks with nothing behind them and at least one candidate that could be removed with compliance agreement.",
      time: "Half a day",
    },
    {
      title: "The challenged-in-two-years test",
      brief:
        "Pick any decision your business makes about customers. Work out exactly what could be shown if that decision were challenged in two years: what was decided, by whom, on what basis, and what they took into account.",
      success:
        "You can say whether the evidence captures the reasoning or only the answer, and name what is missing.",
      time: "2 hours",
    },
    {
      title: "Watch a check on a busy day",
      brief:
        "Take a check that currently operates and watch it during the busiest period of the week. Note what actually happens rather than what the procedure says.",
      success:
        "You can say whether the check is really performed under pressure, and if not, where the shortcut happens.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Working from a summary rather than the actual text",
      why: "Summaries carry somebody else's interpretation, and interpretations get quoted as rules. You end up building to a consultant's reading rather than to the regulation.",
      fix: "Read the actual text and any regulator guidance alongside it, before accepting anybody's interpretation.",
    },
    {
      mistake: "Deciding what the rule means yourself",
      why: "You have taken on a liability that is not yours, and the business has lost a control it believed it had, because nobody accountable ever reviewed the reading.",
      fix: "Surface every unclear point as a question and send it to legal or compliance for a written decision.",
    },
    {
      mistake: "Designing checks without the evidence trail",
      why: "Compliance you cannot prove is not compliance, and adding evidence afterwards is one of the most expensive things a programme does.",
      fix: "Say what would be shown, where it is kept, how long for and how it gets found, at the same time as the check.",
    },
    {
      mistake: "Recording the answer but not the reasoning",
      why: "Most obligations about being able to explain are about why a decision was reached. A record of what was decided answers a different question from the one that gets asked.",
      fix: "Ask what would need to be shown if this were challenged in two years, and capture the reasoning as data.",
    },
    {
      mistake: "Doing more than the rule asks, out of caution",
      why: "Extra checks added because nobody wants to do too little accumulate into a regime costing several times the obligation, and they hide the checks that matter.",
      fix: "Require every check to point back at a numbered rule. Anything that does not is a business decision to be argued on its own merits.",
    },
    {
      mistake: "Designing checks that do not fit how people work",
      why: "Something adding significant effort at the busiest moment gets bypassed, and an undocumented bypass is worse than no check at all.",
      fix: "Walk every proposed check through a real busy day with the people who will perform it.",
    },
    {
      mistake: "Automatic checks with unrecorded overrides",
      why: "An override with no reason, no approver and no record turns an enforced check into an optional one, and the evidence will not show it.",
      fix: "Where overrides are necessary, specify capturing the reason, the approval and the record as part of the check.",
    },
    {
      mistake: "Not designing for the old rules",
      why: "When the rule changes, a system holding only the current version cannot reconstruct why a decision was made two years ago.",
      fix: "Specify start dates and what happens to work in progress, and check that a historical decision can still be explained.",
    },
  ],

  bestPractices: [
    "Read the actual text yourself before accepting any interpretation.",
    "Keep the rule, the interpretation and the check as three separate layers with owners.",
    "Send every unclear point to legal or compliance for a written decision.",
    "Break the text into numbered, individually checkable statements.",
    "Make every check and every requirement point back at a numbered rule.",
    "Specify all five parts of every check.",
    "Prefer stopping over catching, and automatic over manual.",
    "Specify the reason, approver and record for every override.",
    "Design the evidence at the same time as the check.",
    "Ask what would be shown if this were challenged in two years.",
    "Walk every check through a real busy day with the people who perform it.",
    "Specify start dates and what happens to work in progress.",
    "Keep a pack: rule, interpretation, check, evidence, owner, last tested.",
  ],

  proTips: [
    "Ask the compliance team what the regulator has actually asked for in the past, here and in comparable businesses. Published enforcement notices and past information requests tell you what scrutiny really looks like, which is usually more specific and more evidence-focused than the general anxiety in the room.",
    "When somebody says the regulator requires this, ask which clause. Roughly half the time the answer is that it is an internal interpretation, occasionally one made years ago by somebody who has since left. Asked neutrally the question is not obstructive, and it is the single most effective defence against accumulated over-compliance.",
    "Get the person who will actually perform the check into the design conversation, always. Compliance can say what has to be achieved and only the person doing it can tell you at which point on a busy Thursday it will get skipped. Every worked-around check I have investigated was designed without that person present.",
    "Write the answer to how do you comply before building the check. One paragraph explaining how the rule is met and what evidence exists. If you cannot write it convincingly at design time, the check is not finished, and it is far cheaper to discover that now than during an inspection.",
  ],

  businessApplications: [
    "Implementing new legislation with a fixed external deadline and no flexibility on scope.",
    "Fixing things after a regulator has found a problem, where the quality of evidence is under scrutiny.",
    "Financial services obligations, where checks and evidence get inspected directly.",
    "Data protection work, where how long you keep things, deleting on request and having a lawful basis all need evidence.",
    "Health, safety and environmental rules, where the checks are operational rather than in a system.",
    "Tidying up an accumulated compliance regime, where the links are used to find and remove checks nobody needs.",
  ],

  checklist: [
    "Actual regulatory text obtained and read.",
    "Rules broken into numbered, individually checkable statements.",
    "Unclear points sent to legal or compliance and answered in writing.",
    "Interpretations recorded separately from rules, with owners.",
    "Existing checks mapped against the rules.",
    "Checks pointing at nothing identified as removal candidates.",
    "Every check says what, who, when, what evidence and what happens on failure.",
    "Stopping and automatic options preferred where practical.",
    "Overrides specify reason, approver and record.",
    "Evidence trail designed with where it is kept, for how long and how it is found.",
    "Challenged-in-two-years question asked at every decision point.",
    "Every check walked through a real busy day with the people who perform it.",
    "Start dates and work-in-progress treatment specified.",
    "The how-do-you-comply pack complete and reviewable.",
  ],

  faqs: [
    {
      q: "Who decides what a regulation means?",
      a: "Legal, compliance or the accountable executive, never the BA. Your job is to work out what it requires in practice and to surface every unclear point as a question. Interpreting informally takes on a liability that is not yours and removes a control the business thought it had.",
    },
    {
      q: "How do I stop a compliance programme doing far too much?",
      a: "Links back to the rule. Require every check to map to a numbered obligation, and treat anything that does not as a business decision needing its own justification. That turns an argument about caution into a documented question about scope.",
    },
    {
      q: "What makes a check provable?",
      a: "It leaves evidence, at the time it happens, identifying the case, who did it, the outcome and the reasoning, kept for the required period and findable for a specific case. Anything less is difficult to demonstrate afterwards.",
    },
    {
      q: "Is an automatic check always better than a manual one?",
      a: "Usually, because it does not depend on memory. The exception is where it can be overridden without any record, which quietly makes it optional. Where overrides are necessary, specify the reason, the approval and the record.",
    },
    {
      q: "How do I handle a rule that is genuinely ambiguous?",
      a: "Write down the ambiguity, the options and the risk of each, and take it to whoever is accountable for a decision. Record what was decided and why. A documented reasonable interpretation is a defensible position. An undocumented one is not.",
    },
    {
      q: "What happens to work in progress when a rule changes?",
      a: "It is a specification decision and it has to be made explicitly: finish under the old rule, move to the new one, or handle as an exception. Also check that old decisions can still be explained, because systems holding only current rules frequently cannot.",
    },
  ],

  tools: [
    { name: "The actual text and any regulator guidance", what: "Read directly rather than through summaries. Interpretations get quoted as rules remarkably often.", cost: "Free" },
    { name: "A numbered list of checkable statements", what: "Everything else points back at these.", cost: "Free" },
    { name: "A how-do-you-comply pack", what: "Rule, interpretation, check, evidence, owner, last tested. Ready before anybody asks.", cost: "Free" },
    { name: "A busy day walkthrough", what: "Every check tested at peak with the people who actually do it. Finds the ones that will get bypassed.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "business-rules-and-decision-tables", anchor: "writing the rules down precisely", context: "Specification" },
    { slug: "non-functional-requirements-in-practice", anchor: "retention, records and access requirements", context: "Related requirements" },
    { slug: "impact-assessment-before-a-change", anchor: "spotting when a change removes a check", context: "Change control" },
  ],

  relatedGuides: ["business-rules-and-decision-tables", "non-functional-requirements-in-practice", "impact-assessment-before-a-change"],

  conclusion: [
    "Take one compliance area in your business, list the checks that currently operate, and try to link each back to a specific numbered rule. The ones you cannot link are either business decisions nobody has argued for or accumulation nobody has questioned, and finding them takes an afternoon.",
  ],
};

export default guide;
