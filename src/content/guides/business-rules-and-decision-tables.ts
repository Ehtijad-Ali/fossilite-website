import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "business-rules-and-decision-tables",
  seoTitle: "Business Rules and Decision Tables That Survive Review",
  metaDescription:
    "How to extract the logic buried in a process, write it as a decision table, find the gaps and contradictions, and get it agreed by people who disagree.",
  title: "Business Rules and Decision Tables",
  keywords: [
    "business rules analysis",
    "decision table",
    "business rules documentation",
    "capturing business logic",
    "decision modelling",
    "rules elicitation",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Somewhere in every operation there is a person who knows the rules. Not the documented ones: the real ones, including which customers get an exception, what the threshold used to be before it quietly changed, and why one product category is handled differently for reasons that predate everyone currently employed.",
    "When you write requirements, this is the material that gives you the most trouble, because it is genuinely complex and because it is held in fragments across several heads. Ask three people to state the discount policy and you will get three overlapping answers, all sincere, none complete, and the differences between them will be exactly the cases that cause disputes.",
    "Decision tables are the tool that fixes this, and they are underused because they look clerical. They are not. A decision table forces every combination of conditions to have an answer, which means it exposes the gaps and contradictions that prose lets you walk past. This guide is how to get the rules out of people, how to lay them out, and how to run the completeness checks that make the difference.",
  ],

  whyItMatters: [
    "Business rules are where the disputes come from after go-live. Not the screens, not the performance. Somebody was charged the wrong rate, or was refused something they used to receive, or two branches applied the same policy differently and a customer noticed.",
    "They are also the part of a system that changes most often, and the part hardest to change safely when the logic is scattered through prose in nine different documents. Getting it into one structured place is a durable improvement independent of whatever gets built.",
    "And there is a discovery benefit. In my experience the process of building the table finds a genuine business problem more often than not: a combination nobody had considered, two rules that contradict, or a threshold that has drifted from what the policy says. That finding is frequently worth more than the specification you set out to write.",
  ],

  coreConcepts: [
    {
      term: "A business rule constrains or defines, and it belongs to the business",
      explain:
        "Orders above a value require credit approval. A customer is a preferred customer after twelve months and a certain spend. Rules are statements the business could change tomorrow without changing any technology.",
      detail:
        "This is the distinction that matters when deciding where to implement. If a rule changes twice a year, embedding it in code is a decision to file a change request twice a year. That is sometimes correct and it should be a choice rather than an accident.",
    },
    {
      term: "Four kinds worth telling apart",
      explain:
        "Definitions (what counts as an active customer), constraints (an order cannot be dispatched while on credit hold), derivations (how a discount is calculated), and decisions (which of several outcomes applies given a set of conditions).",
      detail:
        "Decisions are the ones that need tables. Definitions need a glossary. Constraints need to be stated where the action is specified. Mixing all four into one document is why rule documentation is usually unreadable.",
    },
    {
      term: "A decision table is conditions across, outcomes down",
      explain:
        "Each column is a condition. Each row is a combination of condition values with the resulting outcome. The discipline is that every combination has a row, including the ones nobody had thought about.",
      detail:
        "Three conditions with three, two and two possible values give twelve combinations. Writing all twelve out is mechanical, and the two or three that make people pause are the entire point of the exercise.",
    },
    {
      term: "Completeness: every combination has an answer",
      explain:
        "Count the combinations, count the rows, and if they differ you have found a gap. Gaps are not theoretical: they are cases that arrive in production and get handled by whoever is on duty.",
      detail:
        "You do not always need a distinct row per combination. Grouping with a wildcard is fine and often clearer. But you must be able to show that every combination is covered by exactly one row, which is a different claim from the table looking complete.",
    },
    {
      term: "Consistency: no combination has two answers",
      explain:
        "Overlapping rules are more common than gaps and much harder to see in prose, because each rule reads perfectly sensibly on its own.",
      detail:
        "The classic shape: a rule about customer tier and a rule about order value that both apply and prescribe different discounts. Nobody notices until a large order from a small customer arrives. In a table it is visible immediately.",
    },
    {
      term: "State the precedence explicitly",
      explain:
        "Where rules can conflict by design, say which wins. Compliance beats commercial. The most specific rule beats the general one. The most recently agreed exception beats the standing policy.",
      detail:
        "Unwritten precedence is the most reliable source of inconsistent behaviour between branches or teams, because each has developed its own convention and nobody has ever compared them.",
    },
    {
      term: "Every rule needs a source and an owner",
      explain:
        "Where does it come from: legislation, a contract, a board decision, a risk assessment, or somebody's habit? And who can change it?",
      detail:
        "This column does more work than any other. Rules that trace to legislation are not negotiable. Rules whose source is nobody remembers are often the largest simplification opportunity in the whole project, and you will only find them by asking.",
    },
    {
      term: "Effective dates, because rules change and history matters",
      explain:
        "A rule usually has a date from which it applies. Cases in flight when it changes need a defined treatment, and old cases have to remain explicable against the rule that applied at the time.",
      detail:
        "Ask directly: when this changes, does it apply to new cases only, to everything in progress, or retrospectively? The three answers produce very different systems and the question is almost never volunteered.",
    },
    {
      term: "Hunt the exceptions, because the exceptions are the rules",
      explain:
        "The sentence to listen for is: we always do it this way, except when. Everything after except is the specification, and it will not appear in any policy document.",
      detail:
        "Ask for the last five cases where the standard rule was not applied. Real cases, with names and dates. You will find either a legitimate rule nobody wrote down or an inconsistency the business needs to decide about.",
    },
    {
      term: "Decide where each rule should live before you specify it",
      explain:
        "Hard-coded, in a configuration table an administrator can edit, in a rules engine, or left to human judgement. That is a business decision about change frequency, risk and who should be trusted with it.",
      detail:
        "Configurable is not automatically better. A rule that a branch manager can change without review is a control that no longer exists. Match the mechanism to the consequence of getting it wrong.",
    },
    {
      term: "Test the table against real cases before anybody builds it",
      explain:
        "Take twenty real cases from the last quarter, run them through the table by hand, and compare the outcome with what actually happened.",
      detail:
        "This is the single most valuable hour in the whole exercise. Every mismatch is either a rule you got wrong or a case the business handled inconsistently, and both are findings you want before build rather than after.",
    },
    {
      term: "Some rules should not be automated",
      explain:
        "Where the rule requires judgement about circumstances the system cannot see, the right specification says a person decides, and states what information they must be shown.",
      detail:
        "Pretending judgement is a rule produces a system that is confidently wrong in exactly the cases that matter most. Specifying the human step honestly is a legitimate and often better answer.",
    },
  ],

  codeExamples: [
    {
      title: "A decision table written out in full",
      language: "markdown",
      intro:
        "Shipping charges for a business-to-business order. Three conditions with three, two and two values give twelve combinations, and all twelve appear. The version this replaced was four paragraphs of policy text that two regions had been interpreting differently for years.",
      code: `| # | Customer tier | Order value    | Destination | Shipping charge      |
|---|---------------|----------------|-------------|----------------------|
| 1 | Standard      | Under 250      | Domestic    | 9.95                 |
| 2 | Standard      | Under 250      | Overseas    | Quoted per consignment |
| 3 | Standard      | 250 to 999.99  | Domestic    | 4.95                 |
| 4 | Standard      | 250 to 999.99  | Overseas    | Quoted per consignment |
| 5 | Standard      | 1000 or more   | Domestic    | Free                 |
| 6 | Standard      | 1000 or more   | Overseas    | Quoted, 50% discount |
| 7 | Preferred     | Under 250      | Domestic    | 4.95                 |
| 8 | Preferred     | Under 250      | Overseas    | Quoted, 50% discount |
| 9 | Preferred     | 250 to 999.99  | Domestic    | Free                 |
|10 | Preferred     | 250 to 999.99  | Overseas    | Quoted, 50% discount |
|11 | Preferred     | 1000 or more   | Domestic    | Free                 |
|12 | Preferred     | 1000 or more   | Overseas    | Free                 |

Conditions
  Customer tier: Standard | Preferred | (Contract customers are out of scope: see CR-114)
  Order value:   the total of goods lines only, excluding VAT and excluding
                 any previously applied discount
  Destination:   Domestic = mainland addresses only. Offshore and island
                 postcodes are treated as Overseas (see rule SH-07)

Precedence
  A contractual shipping term in a signed agreement overrides every row above.
  Where a promotional free-shipping code applies, the code wins and the reason
  is recorded against the order.

Effective from
  2026-09-01. Orders created before this date keep the charge calculated at
  creation, even if they are amended afterwards.

Owner
  Head of Commercial. Source: pricing committee decision, 2026-07-14.`,
      note:
        "Row 6 is the one that caused the argument. Under the old policy text, a large standard-tier overseas order was treated as free by one region and as fully chargeable by another, because the paragraph about orders over a thousand did not say whether it covered overseas. Twelve rows made a two-year inconsistency visible in about a minute.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Three people, three versions of one policy.",
      walkthrough:
        "A BA asks three regional managers to state the criteria for waiving a late fee. The first describes a customer tenure threshold. The second describes the same threshold plus a discretionary allowance for first offences. The third has never heard of the tenure rule and works on whether the customer has an open complaint. All three are describing what happens in their region and all three believe they are describing company policy.",
      result:
        "Rather than deciding who was right, the BA put all three versions into one table and marked the combinations where they disagreed. There were four. Those four went to the policy owner as a decision, which took twenty minutes because the question was specific. The general shape here is common: the disagreement is not about the whole rule, it is about a small number of combinations, and a table locates them precisely.",
    },
    {
      kind: "illustration",
      scenario: "Twenty real cases run through the table by hand.",
      walkthrough:
        "Before handing over a pricing specification, the BA takes twenty completed orders from the previous quarter and works out what price the new table would produce for each. Seventeen match what was actually charged. Two mismatches turn out to be errors in the table, corrected in ten minutes. The third turns out to be a genuine manual override applied by a sales manager for a reason nobody had documented.",
      result:
        "That third case became a new rule with an owner and an approval step, which is exactly the kind of thing that would otherwise have been discovered by a sales manager finding they could no longer do their job. Running real cases through the rules before build is cheap and it is the closest thing to a guarantee available in specification work.",
    },
    {
      kind: "illustration",
      scenario: "The rule nobody could source.",
      walkthrough:
        "A claims process routes anything above a certain value to a senior assessor. The BA asks where the threshold comes from. Nobody knows. It is not in the policy manual, the delegated authority schedule uses a different figure, and the longest-serving assessor thinks it was set when the team was half its current size. The value has never been reviewed against claim volumes or outcomes.",
      result:
        "The finding was not the threshold itself but the fact that a routing rule affecting a large share of volume had no owner and no basis. Adding a source and owner column to a rules table looks like administration and is the fastest way to find rules that are being followed rather than decided. Ask the question about every rule, and expect to find at least one orphan.",
    },
  ],

  learningPath: [
    {
      title: "List every decision point in the process",
      body: "Walk your process map and mark every diamond. Each one is a decision governed by rules, and each is a candidate table. Note who makes the decision today and on what basis.",
      effort: "2 hours",
      outcome: "A shortlist of the tables that need building, ranked by case volume.",
    },
    {
      title: "Collect the rules from more than one person",
      body: "Ask each person to state the rule independently, then ask for the last five cases where it was not applied as stated. Never merge the answers as you go: keep them separate so the differences stay visible.",
      effort: "1 day",
      outcome: "Several versions of the same rule, which is what you actually have even when it looks like one.",
    },
    {
      title: "Build the table and enumerate every combination",
      body: "Conditions across, one row per combination. Count the combinations arithmetically and check that your row count covers all of them. Mark disputed cells rather than resolving them yourself.",
      effort: "Half a day",
      outcome: "A complete grid with the gaps and conflicts visible as blanks and clashes.",
    },
    {
      title: "Take the gaps and conflicts to the rule owner",
      body: "Not the whole table, just the combinations that need a decision. A specific question about six cases gets answered. A request to review a policy does not.",
      effort: "1 hour",
      outcome: "Decisions with a named owner and a date, recorded against the rows.",
    },
    {
      title: "Add source, owner, precedence and effective date",
      body: "Per rule or per table as appropriate. Ask explicitly what happens to cases in flight when the rule changes.",
      effort: "2 hours",
      outcome: "A table that can be maintained by somebody who was not in any of your meetings.",
    },
    {
      title: "Test against twenty real cases",
      body: "Run historical cases through the table by hand and compare with what actually happened. Investigate every mismatch: it is either your error or an inconsistency in the business.",
      effort: "Half a day",
      outcome: "Confidence based on evidence, plus a list of historical inconsistencies worth flagging.",
    },
  ],

  exercises: [
    {
      title: "Enumerate a rule you think is simple",
      brief:
        "Take any rule in your organisation that everybody considers obvious. Identify the conditions and their possible values, multiply out the number of combinations, and write a row for each. Mark every row where you are not certain of the answer.",
      success:
        "You have at least one uncertain row in a rule that everybody described as obvious, which is the normal outcome.",
      time: "1 hour",
    },
    {
      title: "The three-person rule test",
      brief:
        "Ask three people who apply the same rule to write down the criteria independently, without conferring. Lay the three answers side by side and mark every combination where they differ.",
      success:
        "You can state precisely which combinations are handled inconsistently today, and take that list to whoever owns the policy.",
      time: "2 hours",
    },
    {
      title: "Source and owner audit",
      brief:
        "Take ten rules from any specification or policy document. For each, find out where it came from and who is allowed to change it. Record any where the answer is nobody knows.",
      success:
        "You have identified at least one orphan rule, and can say what share of the ten had a traceable source.",
      time: "2-3 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Writing rules as prose",
      why: "Prose hides both gaps and overlaps. Every individual sentence reads sensibly, and the combination that satisfies two contradictory sentences is invisible until a real case hits it.",
      fix: "Use a table whenever more than one condition determines an outcome. Keep prose for the definitions and the context around the table.",
    },
    {
      mistake: "Not enumerating the combinations",
      why: "A table that lists the cases somebody happened to mention is prose in a grid. The gaps are exactly the cases nobody thought of, which is why they are gaps.",
      fix: "Multiply the condition values, count your rows, and account for every combination explicitly, using wildcards where a group genuinely shares an outcome.",
    },
    {
      mistake: "Merging the versions people give you",
      why: "You produce a consensus rule that nobody actually follows, and you destroy the evidence of inconsistency, which was the most valuable thing you had found.",
      fix: "Keep each person's version separate until the differences are documented, then take those differences to the owner as a decision.",
    },
    {
      mistake: "Leaving precedence unstated",
      why: "Where two rules can both apply, unwritten precedence means each team develops its own convention and the business behaves inconsistently without anyone noticing.",
      fix: "State explicitly which rule wins in every conflict the table permits, and record who decided.",
    },
    {
      mistake: "Ignoring effective dates and cases in flight",
      why: "The rule changes, and nobody has said whether the order placed yesterday is priced under the old or new version. This produces customer disputes and support workload immediately.",
      fix: "Every rule carries an effective date and a stated treatment for cases in progress at the changeover.",
    },
    {
      mistake: "Automating judgement",
      why: "Where the real rule depends on context the system cannot see, encoding it produces a system that is confidently wrong in exactly the cases that matter, and staff learn to work around it.",
      fix: "Specify the human decision honestly, and specify what information the person must be shown to make it well.",
    },
    {
      mistake: "Building the table and never testing it",
      why: "A table that has never met a real case is a hypothesis. Errors in it are inherited by the code and only surface when a customer complains.",
      fix: "Run twenty historical cases through it by hand before handover. Investigate every mismatch.",
    },
  ],

  bestPractices: [
    "Separate definitions, constraints, derivations and decisions.",
    "Use a table whenever more than one condition determines the outcome.",
    "Enumerate combinations arithmetically and account for every one.",
    "Collect the rule from several people and keep their versions separate.",
    "Mark disputed combinations rather than resolving them yourself.",
    "Record source, owner, precedence and effective date for every rule.",
    "Ask what happens to cases in flight when a rule changes.",
    "Ask for the last five cases where the standard rule was not applied.",
    "Decide deliberately where each rule should live: code, configuration, engine or human judgement.",
    "Test the table against twenty real historical cases before handover.",
    "Specify human judgement as human judgement rather than pretending it is a rule.",
  ],

  proTips: [
    "The most productive question in rules elicitation is what happens when two of these apply at once. People describe rules one at a time because that is how they think about them, and the interaction is where the money is. Ask it about every pair that could plausibly co-occur.",
    "When a rule has an unexplained threshold, ask what happens just above and just below it, then ask how many cases fall in each band. Thresholds set years ago against a different volume are extremely common, and the distribution usually makes the case for changing it without you having to argue.",
    "Get the table in front of the person who handles the complaints rather than only the person who owns the policy. Complaints staff know the combinations that generate arguments, and those are precisely the rows you most need to get right. It is also a group nobody ever invites, so they tend to be generous with their time.",
    "Write the table before you write the requirement that references it. If you write the prose first you will unconsciously simplify the logic to make the sentence flow, and then the table becomes a translation of your simplification rather than of the real rule.",
  ],

  businessApplications: [
    "Pricing and discounting, where inconsistency between regions is the normal state and nobody has measured it.",
    "Eligibility and entitlement decisions, where fairness and auditability both depend on the rule being explicit.",
    "Credit, risk and fraud routing, where thresholds drift and are rarely reviewed against outcomes.",
    "Regulatory compliance, where the rule is externally set and the work is establishing what it means here.",
    "Claims and case assessment, where authority limits and escalation paths are frequently undocumented.",
    "System replacement, where the old system's embedded logic has to be recovered before it can be rebuilt.",
  ],

  checklist: [
    "Every decision point in the process identified.",
    "Rules collected independently from more than one person.",
    "Conditions and their permitted values listed.",
    "Combination count calculated and every combination accounted for.",
    "Conflicts and gaps marked rather than silently resolved.",
    "Precedence stated for every possible conflict.",
    "Source and owner recorded for every rule.",
    "Effective date and in-flight treatment agreed.",
    "Decision taken about where each rule lives.",
    "Rules requiring human judgement identified as such.",
    "Twenty real historical cases tested against the table.",
    "Disputed rows taken to the owner and closed with a dated decision.",
  ],

  faqs: [
    {
      q: "When is a decision table worth the effort?",
      a: "Whenever two or more conditions combine to determine an outcome, or whenever two people have described the same rule differently. Below that, a sentence is fine. The moment you find yourself writing unless or except, reach for a table.",
    },
    {
      q: "What if there are too many combinations to write out?",
      a: "Group with wildcards where a set of values genuinely shares an outcome, and split the table by a top-level condition. If you still have hundreds of meaningful combinations, that is a finding about the policy rather than a documentation problem.",
    },
    {
      q: "Should business rules be configurable?",
      a: "Match the mechanism to change frequency and risk. A rule that changes twice a year and carries financial consequence belongs in configuration with an approval step. A rule that has not changed in a decade can be in code. Configurable without control is a removed control.",
    },
    {
      q: "Who owns a business rule?",
      a: "Whoever can change it without asking anyone else. If nobody can answer that, you have found an orphan rule, and that is worth raising in its own right regardless of what you were originally asked to do.",
    },
    {
      q: "How do I handle rules that have always been applied inconsistently?",
      a: "Document the versions, quantify how many cases each affects, and put the decision to the owner. Do not choose on their behalf and do not average them. The inconsistency is a business risk and it is theirs to resolve.",
    },
    {
      q: "Do I need a rules engine?",
      a: "Rarely, and later than vendors suggest. Most organisations get most of the benefit from one maintained table plus a configuration screen. Consider an engine when rules change weekly, are numerous, and are genuinely owned by business staff.",
    },
  ],

  tools: [
    { name: "A spreadsheet", what: "Conditions across, combinations down. Sufficient for the overwhelming majority of rule work and easy for business owners to read.", cost: "Varies" },
    { name: "A rule register", what: "Rule, source, owner, effective date, where it is implemented. The artefact that outlives the project.", cost: "Free" },
    { name: "Twenty historical cases", what: "The test set. Costs an hour to assemble and finds errors nothing else will.", cost: "Free" },
    { name: "DMN notation", what: "A standard for decision tables where a model will be executed or shared with an integrator. Overkill for a single policy.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "where these tables get referenced", context: "Specification" },
    { slug: "asking-questions-that-get-answers", anchor: "getting the real rule out of people", context: "Elicitation" },
    { slug: "data-requirements-for-analysts", anchor: "the data these rules depend on", context: "Data" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "asking-questions-that-get-answers", "data-requirements-for-analysts"],

  conclusion: [
    "Pick one rule everybody in your organisation considers obvious, ask three people who apply it to write the criteria down independently, and lay the answers side by side. You will have found a live inconsistency before lunch, and it will be a more useful finding than anything on your current task list.",
  ],
};

export default guide;
