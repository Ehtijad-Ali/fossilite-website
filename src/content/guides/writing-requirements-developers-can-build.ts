import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "writing-requirements-developers-can-build",
  seoTitle: "Writing Requirements Developers Can Actually Build From",
  metaDescription:
    "What a developer needs that a business document usually leaves out: acceptance criteria, edge cases, data definitions and failure behaviour, with worked examples.",
  title: "Writing Requirements Developers Can Build",
  keywords: [
    "writing user stories",
    "acceptance criteria examples",
    "system requirements specification",
    "business analyst documentation",
    "given when then",
    "requirements for developers",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 19,

  intro: [
    "There is a simple measure of specification quality and it has nothing to do with length or format. It is the number of times a developer has to come and ask you what happens when something unusual arrives. Every one of those questions is a piece of the specification that existed only in your head.",
    "Most business requirement documents are written as if the reader shares the author's context. They describe the intended case fluently and go quiet exactly where the work is: what happens when the value is zero, when the customer already exists, when the external service does not respond, when two people press the button at the same time, when the field is blank because the source system allows blank.",
    "This guide is about closing that gap. What a developer and a tester actually need, how to write acceptance criteria that can be argued with, how to hunt edge cases systematically rather than by inspiration, and how to specify the parts everyone forgets: data, failure and permissions.",
  ],

  whyItMatters: [
    "Ambiguity does not disappear when nobody notices it. It gets resolved by whoever hits it first, usually a developer at four in the afternoon with no business context, and their reasonable guess becomes system behaviour that somebody discovers in production six weeks later.",
    "The cost curve is steep and well understood by anyone who has lived through it. A question answered while writing the spec costs a conversation. The same question answered in testing costs a rebuild and a retest. Answered after go-live it costs a change request, a release, and a conversation about why nobody thought of it.",
    "There is a personal dimension too. Developers form a fast and durable opinion about whether a BA's documents are worth reading. If your specs make their week easier, you get consulted early on technical decisions that will affect the business. If they do not, you find out about those decisions afterwards.",
  ],

  coreConcepts: [
    {
      term: "Write for a reader with none of your context",
      explain:
        "The audience is a developer who joined last month and a tester who has never met the stakeholder. Every term needs to be defined, every pronoun needs a clear antecedent, and no rule can depend on something obvious.",
      detail:
        "A practical trick: read your requirement and mark every noun that could mean more than one thing. Customer, order, active, complete, approved. Each of those needs a definition somewhere the reader can reach in one click.",
    },
    {
      term: "The story gives you the why, the criteria give you the what",
      explain:
        "As a credit controller I want to see which invoices are overdue so that I can chase the ones at risk first. That is context, not specification. It tells a developer what tradeoff to make when a detail is missing, which is genuinely valuable and is not enough on its own.",
      detail:
        "The value of the so-that clause is underrated. It is the only part of the story that helps somebody make a decision you did not anticipate, which they will have to do several times a day.",
    },
    {
      term: "Acceptance criteria are the contract",
      explain:
        "Each one states a starting condition, an action, and an observable result. If a criterion cannot be checked by someone who was not in the conversation, it is not a criterion.",
      detail:
        "Given, when, then is a useful discipline even when you never write the words. The three parts force you to state the precondition, which is the half people leave out and the half that contains the edge cases.",
    },
    {
      term: "Ban the adjectives that postpone arguments",
      explain:
        "Appropriate, timely, robust, user-friendly, seamless, efficient, as required, where necessary. Each one is a disagreement scheduled for a later date.",
      detail:
        "Replace each with a number or a rule. Timely becomes within four hours of the status change. Appropriate becomes according to the table in section four. If you cannot make the replacement, you have found a decision that has not been taken yet, and that is the actual finding.",
    },
    {
      term: "Hunt edge cases with a checklist, not with inspiration",
      explain:
        "Empty, zero, negative, maximum, duplicate, expired, cancelled, partially complete, concurrent, out of order, wrong type, unusually large, and the case where the thing already exists.",
      detail:
        "Run that list against every input and every entity in the requirement. It is mechanical and it takes twenty minutes, and it finds more than any amount of careful thought, because careful thought follows the shape of what you already imagined.",
    },
    {
      term: "Specify what happens when it fails",
      explain:
        "The external service times out, the file is malformed, the payment is declined, the record is locked. For each, say what the user sees, what the system records, whether the work is retried and by whom, and whether anything is left half-done.",
      detail:
        "Failure behaviour is a business decision disguised as a technical one. Whether a failed payment holds the order or releases it is not for a developer to invent, and if you do not specify it, somebody will.",
    },
    {
      term: "Data definitions belong in the specification",
      explain:
        "For each field: what it means in business terms, its format, whether it is mandatory, its permitted values, its source of truth, what happens when the source has nothing, and who is allowed to change it.",
      detail:
        "Two teams using one word for different things is the most expensive ambiguity in this job, and it is invisible in prose. A field table makes it visible immediately, because two people cannot write two definitions in one row.",
    },
    {
      term: "State who can do this, and who can see it",
      explain:
        "Permissions are almost always omitted from business requirements and almost always required. Which roles can perform the action, which can view the result, and what happens when someone without permission tries.",
      detail:
        "Ask specifically about the awkward ones: can a manager approve their own request, can a supervisor see another team's data, what does a temporary cover arrangement do to any of this.",
    },
    {
      term: "Say what must be recorded, and for how long",
      explain:
        "Who did what and when. Audit is a requirement, not a technical courtesy, and it is far cheaper to design in than to add after a regulator asks.",
      detail:
        "The question that gets the answer: if this decision were challenged in twelve months, what would we need to be able to show, and who would ask?",
    },
    {
      term: "Slice by business value, not by technical layer",
      explain:
        "A slice that delivers the main path for one customer type end to end is testable by the business. A slice that delivers the database changes for everything is not, and cannot be validated by anyone outside the team.",
      detail:
        "The test is whether a stakeholder could look at the result and tell you whether it is right. If not, you have divided the work rather than sliced it, and feedback arrives only at the end.",
    },
    {
      term: "Examples do more work than rules",
      explain:
        "A worked example with real values settles an ambiguity that three paragraphs of careful prose leaves open, because prose can be read two ways and a table of inputs and expected outputs cannot.",
      detail:
        "For anything involving calculation, give at least three examples: a normal case, a boundary case, and one that fails. Developers will build to the examples, and testers will use them directly.",
    },
    {
      term: "The question log is your feedback loop",
      explain:
        "Keep every question a developer asks you during a build. That list is a precise specification of what you left out, and it is categorised by nature rather than by project.",
      detail:
        "After two projects the pattern is obvious and personal: some BAs consistently miss permissions, some miss failure paths, some miss data volume. Knowing your own gap is worth more than any template.",
    },
  ],

  codeExamples: [
    {
      title: "Acceptance criteria that a tester can execute",
      language: "gherkin",
      intro:
        "The same requirement written as scenarios rather than prose. Notice that most of the value is in the second, third and fourth scenarios: the main path was never the ambiguous part. Each scenario states a precondition, a single action and one observable result.",
      code: `Feature: Flag invoices at risk of late payment
  So that credit controllers chase the invoices that matter first

  Background:
    Given the working day ends at 17:00 Europe/London
    And an invoice is "at risk" when its due date is within 3 working days

  Scenario: Invoice inside the risk window is flagged
    Given an unpaid invoice with a due date 2 working days from today
    When the credit controller opens the invoice list
    Then the invoice is shown with the "At risk" indicator
    And it appears above invoices that are not at risk

  Scenario: Weekend and bank holidays do not count as working days
    Given today is Thursday
    And Friday is a bank holiday
    And an unpaid invoice has a due date of the following Wednesday
    When the credit controller opens the invoice list
    Then the invoice is shown with the "At risk" indicator

  Scenario: Paid invoices are never flagged
    Given an invoice with a due date 1 working day from today
    And the invoice has been paid in full
    When the credit controller opens the invoice list
    Then the invoice is not shown with the "At risk" indicator

  Scenario: Partially paid invoices are flagged on the outstanding balance
    Given an invoice with a due date 1 working day from today
    And 60% of the invoice value has been paid
    When the credit controller opens the invoice list
    Then the invoice is shown with the "At risk" indicator
    And the outstanding balance is shown rather than the invoice total

  Scenario: Disputed invoices are excluded and the reason is visible
    Given an invoice with a due date 1 working day from today
    And the invoice is marked as disputed
    When the credit controller opens the invoice list
    Then the invoice is not shown with the "At risk" indicator
    And the invoice is listed under "Disputed" with the dispute raised date

  Scenario: The payment system is unavailable
    Given the payment status service does not respond within 5 seconds
    When the credit controller opens the invoice list
    Then invoices are shown using the last known payment status
    And a banner states the time at which the status was last updated`,
      note:
        "The last scenario is the one most specifications omit. What the user sees when a dependency is down is a business decision about whether stale data is better than no data, and here the answer is yes with the staleness made visible.",
    },
    {
      title: "A field definition table, written as data rather than prose",
      language: "json",
      intro:
        "Data ambiguity is invisible in sentences and impossible to hide in a table. This is the shape I use for anything where two systems exchange records, and it is worth producing even when nothing will read it programmatically, because filling it in forces the questions.",
      code: `{
  "entity": "CustomerOrder",
  "sourceOfTruth": "Order Management System",
  "fields": [
    {
      "name": "orderReference",
      "meaning": "The reference quoted to the customer on all correspondence",
      "type": "string",
      "format": "ORD- followed by 8 digits",
      "mandatory": true,
      "unique": true,
      "setBy": "Order Management System at creation",
      "mutable": false
    },
    {
      "name": "requestedDeliveryDate",
      "meaning": "The date the customer asked for, not the date we committed to",
      "type": "date",
      "format": "ISO 8601, date only",
      "mandatory": false,
      "whenAbsent": "Treat as next available slot; do not default to today",
      "setBy": "Sales agent or customer at order entry",
      "mutable": true,
      "mutableBy": ["sales_agent", "customer_service_supervisor"]
    },
    {
      "name": "orderStatus",
      "meaning": "Where the order has reached in fulfilment",
      "type": "enum",
      "permittedValues": ["draft", "confirmed", "picking", "dispatched", "delivered", "cancelled"],
      "mandatory": true,
      "notes": "cancelled is terminal. An order cannot return to a previous status.",
      "setBy": "System transitions only; no manual override",
      "mutable": true
    },
    {
      "name": "creditHold",
      "meaning": "Finance has blocked fulfilment pending payment or credit review",
      "type": "boolean",
      "mandatory": true,
      "default": false,
      "notes": "An order on credit hold may be confirmed but must not move to picking",
      "setBy": "Finance system nightly, or manually by a credit controller",
      "mutable": true,
      "mutableBy": ["credit_controller"]
    }
  ]
}`,
      note:
        "The meaning line is the one that earns its place. Requested delivery date versus committed delivery date has caused more arguments in fulfilment projects than any technical decision, and the distinction only appears when somebody is forced to write a sentence about what the field means.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The requirement that was one sentence and needed eleven.",
      walkthrough:
        "The requirement reads: the system should prevent duplicate customer records. The BA runs the edge case checklist against it. What counts as duplicate: same name, same email, same address, same phone? What if the email matches and the name does not? What if a customer legitimately has two accounts for two businesses? What happens to the existing record when a duplicate is detected during an import rather than during data entry? Who is allowed to merge? What happens to orders attached to the record that loses?",
      result:
        "Eleven criteria emerged, of which the original sentence covered one. None of the eleven required cleverness, only running a checklist against every noun in the sentence. The merge rules turned out to need a decision from finance, which took two weeks, and finding that in specification rather than in testing is the entire value of the exercise.",
    },
    {
      kind: "illustration",
      scenario: "A guess made at four in the afternoon.",
      walkthrough:
        "A specification for an order confirmation email does not say what happens when the mail service rejects the address. The developer, reaching this at the end of a sprint, makes a reasonable decision: log the failure and continue, because failing the order over an email seems disproportionate. Six weeks later customer services notice a pattern of customers who never received confirmation and were never contacted by anyone.",
      result:
        "The developer's decision was defensible and it was a business decision they were not equipped to take. The specification needed one line about whether an undeliverable confirmation should raise a task for somebody. The general rule is that every unstated failure path will be resolved by whoever meets it first, under time pressure, with the least context.",
    },
    {
      kind: "illustration",
      scenario: "The slice that could not be shown to anybody.",
      walkthrough:
        "A team splits a piece of work into three: data model changes, then the service layer, then the interface. Each is delivered on schedule. Two of the three cannot be demonstrated to the business at all, so feedback arrives only at the end of the third, at which point it emerges that the process assumed one approver where the business has two in certain regions.",
      result:
        "Had the work been sliced as the complete path for one region, the two-approver case would have surfaced in the first week rather than the seventh. Slicing by technical layer is comfortable for a team and postpones every piece of business feedback to the end, which is the one thing iterative delivery exists to prevent.",
    },
  ],

  learningPath: [
    {
      title: "Take one requirement and write acceptance criteria for it",
      body: "Precondition, action, observable result for each. Aim for the main path plus at least three variations. Do not use the word appropriate anywhere.",
      effort: "1 hour",
      outcome: "A calibration on how many criteria a single requirement really needs, which is more than most people expect.",
    },
    {
      title: "Run the edge case checklist against every noun",
      body: "Empty, zero, negative, maximum, duplicate, expired, cancelled, partial, concurrent, out of order, wrong type, unusually large, already exists. Mechanically, one noun at a time.",
      effort: "30 minutes per requirement",
      outcome: "Typically two or three cases nobody had considered, at least one of which needs a business decision.",
    },
    {
      title: "Specify the failure paths",
      body: "For every external dependency and every action that can be rejected: what the user sees, what is recorded, whether it retries, and whether anything is left half-complete.",
      effort: "1 hour",
      outcome: "The section that prevents the most common category of post-launch surprise.",
    },
    {
      title: "Build the field definition table",
      body: "Meaning, type, format, mandatory, permitted values, source of truth, behaviour when absent, who can change it. One row per field, no prose.",
      effort: "Half a day",
      outcome: "Data ambiguity made visible, and usually one discovery that two teams mean different things by one word.",
    },
    {
      title: "Add permissions and audit",
      body: "Who can do it, who can see it, what happens on an unauthorised attempt, what is recorded and for how long. Ask what would need to be shown if the decision were challenged in a year.",
      effort: "2 hours",
      outcome: "The two sections most often missing entirely from business requirements.",
    },
    {
      title: "Hand it to a developer and count the questions",
      body: "Before the build starts. Ask them to read it and tell you what they would have to guess. Write down every question without defending anything.",
      effort: "1 hour",
      outcome: "A precise list of your own blind spots, which is the fastest way to improve the next specification.",
    },
  ],

  exercises: [
    {
      title: "The adjective sweep",
      brief:
        "Take any requirements document you have access to and search it for appropriate, timely, robust, seamless, efficient, user-friendly, as required and where necessary. For each hit, write the number or rule that should replace it, or note that the decision has not been made.",
      success:
        "Every occurrence is either replaced with something checkable or logged as an open decision with an owner and a date.",
      time: "1 hour",
    },
    {
      title: "Three examples per calculation",
      brief:
        "Find any requirement in your organisation that involves a calculation, a threshold or a date rule. Write three worked examples with real values: a normal case, a boundary case, and one that should be rejected. Check them with whoever owns the rule.",
      success:
        "At least one of your three examples produces a different answer from the one the rule owner expected, and the rule gets clarified.",
      time: "1 hour",
    },
    {
      title: "The developer read-through",
      brief:
        "Give a specification you have written to a developer who has not been in any of the meetings. Ask them to mark every place they would have to make a decision. Do not explain anything while they read.",
      success:
        "You have a written list of gaps and can classify them: missing rule, missing data definition, missing failure path, missing permission. The category that appears most is your personal weak spot.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Specifying only the main path",
      why: "The main path is the part that was never in doubt. Everything the business argues about after go-live lives in the variations, and those get invented by whoever meets them first.",
      fix: "Run a fixed edge case checklist against every input and entity. Twenty mechanical minutes beats any amount of careful thinking.",
    },
    {
      mistake: "Using words that cannot be tested",
      why: "Appropriate and timely feel like requirements and function as postponed arguments. Two people can both agree to them while meaning different things, which is worse than disagreeing.",
      fix: "Replace each with a number or a rule. Where you cannot, log it as an open decision with an owner rather than smoothing it over.",
    },
    {
      mistake: "Leaving failure behaviour to the technical team",
      why: "Whether a failed payment holds or releases an order is a business decision. Left unstated it is taken by someone optimising for a clean codebase, not for the customer relationship.",
      fix: "For every dependency and rejection, state what the user sees, what is recorded, and whether anything is left half-done.",
    },
    {
      mistake: "Describing the interface instead of the behaviour",
      why: "You commit design decisions you are not best placed to make, and the requirement then appears wrong whenever the layout changes, even though the rule underneath is still right.",
      fix: "State what must be true and under what conditions. Put layout in the design artefacts and say explicitly that placement is not specified here.",
    },
    {
      mistake: "Omitting permissions",
      why: "Almost every system needs them, almost no business requirement mentions them, and the gap surfaces in security review or during the first cover arrangement when somebody cannot do their job.",
      fix: "Ask for every action: who can, who can see, what happens on an unauthorised attempt, and what a temporary cover arrangement does.",
    },
    {
      mistake: "Writing prose where a table belongs",
      why: "Prose can be read two ways. A grid cannot, and it also exposes the empty cells, which are the questions you have not asked.",
      fix: "Use tables for fields, rules, permissions and status transitions. Keep prose for context and intent.",
    },
    {
      mistake: "Slicing by technical layer",
      why: "The business cannot review a database change, so all feedback arrives at the end, which removes the only advantage iterative delivery had.",
      fix: "Slice so that each increment is something a stakeholder can look at and judge. One customer type, one region, one channel, end to end.",
    },
    {
      mistake: "Treating build-time questions as an interruption",
      why: "They are the highest quality feedback you will ever get on your own writing, and being defensive teaches developers to guess instead of asking, which is the outcome you least want.",
      fix: "Log every question, answer it quickly, and review the log at the end of the project to find your own recurring gap.",
    },
  ],

  bestPractices: [
    "Write for a reader with none of your context.",
    "Keep the so-that clause: it guides decisions you did not anticipate.",
    "State a precondition, an action and an observable result for every criterion.",
    "Ban untestable adjectives and replace them with numbers or rules.",
    "Run a fixed edge case checklist against every noun in the requirement.",
    "Specify failure behaviour for every dependency and every rejection.",
    "Put field definitions in a table, including meaning and source of truth.",
    "Specify permissions and what an unauthorised attempt does.",
    "Say what must be recorded and for how long.",
    "Give three worked examples for anything involving a calculation or a threshold.",
    "Slice work so each increment can be judged by a stakeholder.",
    "Log every question a developer asks and review the log afterwards.",
  ],

  proTips: [
    "Ask a developer to read the specification before the estimate rather than after. The questions that arrive during estimation are free, and the ones that arrive during build cost a rebuild. It also changes the relationship: you become someone whose documents get read closely rather than skimmed.",
    "For any rule involving dates, write down what happens at a weekend, at a month end, at a year end, and across a daylight saving change. I have never once regretted asking, and I have several times found that the business had genuinely different answers for two of the four.",
    "When you cannot get a decision on an edge case, specify the safe behaviour and mark it as a placeholder with the decision owner named. A specification that says stop and raise a task, pending a decision from finance is far better than silence, because silence gets resolved by a guess and a placeholder gets escalated.",
    "Keep one page per project listing every term that means something specific here. Not a corporate glossary exercise, just the words that caused a misunderstanding. Nine times out of ten the same three words cause trouble on every project in that department, and having them written down makes you look like you have worked there for years.",
  ],

  businessApplications: [
    "Vendor-built or offshore delivery, where you cannot rely on a corridor conversation to resolve ambiguity.",
    "Regulated environments, where audit and retention requirements are as binding as functional ones.",
    "Integration work, where the field definition table is the actual deliverable and the prose is decoration.",
    "System replacement, where undocumented behaviour of the old system has to be discovered and specified deliberately.",
    "Handover to a support team, where failure paths and permissions determine whether they can actually operate the thing.",
    "Fixed-price contracts, where every untestable adjective is a commercial risk with a number attached to it.",
  ],

  checklist: [
    "Every term that could mean two things is defined.",
    "Each criterion has a precondition, an action and an observable result.",
    "No untestable adjectives remain, or each is logged as an open decision.",
    "Edge case checklist run against every input and entity.",
    "Failure behaviour specified for every external dependency.",
    "Field table complete: meaning, type, format, mandatory, values, source, absence behaviour.",
    "Permissions stated for every action, including unauthorised attempts.",
    "Audit and retention requirements captured.",
    "Three worked examples provided for every calculation or threshold.",
    "Increments sliced so a stakeholder can judge each one.",
    "A developer has read it and their questions are logged.",
    "Open decisions listed with an owner and a date.",
  ],

  faqs: [
    {
      q: "How many acceptance criteria should a story have?",
      a: "Enough to cover the main path plus the variations that actually occur. If you have one, you have almost certainly only specified the case nobody was going to get wrong. If you have thirty, the story is too large and should be split.",
    },
    {
      q: "Do I have to write given, when, then?",
      a: "No, but write something that has all three parts. The format matters less than the discipline of stating the precondition, which is the piece people omit and the piece that contains the edge cases.",
    },
    {
      q: "Who writes acceptance criteria, the BA or the team?",
      a: "Best written by the BA and improved by the team in refinement. The BA supplies the business rules and the exceptions, the developers and testers find the technical cases. Written entirely by one side, they miss half of what they should cover.",
    },
    {
      q: "How much detail before an estimate?",
      a: "Enough that the team knows what the hard part is. Estimating a one-line requirement produces a number based on the main path, and the variance comes entirely from the parts you had not specified yet.",
    },
    {
      q: "What if the business will not decide on an edge case?",
      a: "Specify the safe behaviour, mark it as a placeholder, name the decision owner and set a date. Never leave silence: silence is resolved by a developer guessing, and the guess becomes the behaviour nobody chose.",
    },
    {
      q: "Should requirements describe the user interface?",
      a: "Describe behaviour and constraints, not layout. Say what must be visible without scrolling, or what must not require more than one action, where that genuinely matters. Choosing the component is design work and specifying it in requirements does it badly.",
    },
  ],

  tools: [
    { name: "An edge case checklist", what: "Empty, zero, negative, maximum, duplicate, expired, cancelled, partial, concurrent, out of order, wrong type, oversized, already exists. Run mechanically.", cost: "Free" },
    { name: "A field definition table", what: "Meaning, type, format, mandatory, permitted values, source of truth, absence behaviour, who can change it.", cost: "Free" },
    { name: "A per-project glossary", what: "One page of the terms that have caused a misunderstanding here. Small effort, disproportionate return.", cost: "Free" },
    { name: "A question log", what: "Every question a developer asks during build. The most honest review of your own specification you will ever receive.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "turning-business-needs-into-requirements", anchor: "where these requirements come from", context: "Upstream" },
    { slug: "business-rules-and-decision-tables", anchor: "specifying the logic inside a rule", context: "Detail" },
    { slug: "working-with-developers", anchor: "the working relationship this depends on", context: "Delivery" },
  ],

  relatedGuides: ["turning-business-needs-into-requirements", "business-rules-and-decision-tables", "working-with-developers"],

  conclusion: [
    "Take the requirement you are about to hand over and run the edge case checklist against every noun in it. Twenty minutes, entirely mechanical, and it will produce at least two questions that would otherwise have been answered by a developer at the end of a sprint.",
  ],
};

export default guide;
