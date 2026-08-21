import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "writing-requirements-developers-can-build",
  seoTitle: "Writing It Down So Nobody Has to Guess",
  metaDescription:
    "The measure of a good specification is how few times a developer has to interrupt you. What they need that business documents usually leave out, with examples.",
  title: "Writing It Down So Nobody Has to Guess",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "There is a simple way to measure how good your requirements are, and it has nothing to do with length. Count how many times a developer has to come and ask you what happens when something unusual turns up. Every one of those questions is a piece of the requirement that only ever existed in your head.",
    "Most business documents are written as if the reader already knows what you know. They describe the normal case fluently and then go quiet exactly where the work is: what happens when the amount is zero, when the customer already exists, when the other system does not answer, when two people press the button at the same moment, when the field is blank because the old system allowed blank.",
    "This guide is about closing that gap. What a developer and a tester actually need, how to write down what counts as done in a way somebody can argue with, how to hunt for the odd cases on purpose rather than hoping to think of them, and how to cover the bits everyone forgets: the data, the failures and who is allowed to do what.",
  ],

  whyItMatters: [
    "Vagueness does not go away because nobody noticed it. It gets settled by whoever hits it first, which is usually a developer at four in the afternoon with no business context, and their perfectly reasonable guess becomes how the system behaves. Somebody discovers it six weeks later in production.",
    "The cost goes up steeply and anybody who has lived through it knows the shape. A question answered while you are writing costs a conversation. The same question answered during testing costs a rebuild and a retest. Answered after go-live it costs a change request, a release, and a meeting about why nobody thought of it.",
    "There is a personal side too. Developers form a fast and lasting view about whether your documents are worth reading properly. If yours make their week easier, you get pulled into technical decisions early, while they can still be influenced. If they do not, you hear about those decisions afterwards.",
  ],

  coreConcepts: [
    {
      term: "Write for somebody who knows none of what you know",
      explain:
        "Your reader is a developer who joined last month and a tester who has never met the stakeholder. Every term needs defining, every it and they needs to point at something obvious, and no rule can rely on something being self-evident.",
      detail:
        "A quick trick: read your requirement and circle every noun that could mean two things. Customer, order, active, complete, approved. Each one needs a definition somewhere the reader can reach without asking anybody.",
    },
    {
      term: "Say why, not just what",
      explain:
        "As a credit controller I want to see which invoices are overdue, so that I can chase the ones most likely to go unpaid. The last part is what tells a developer how to decide when your document runs out, which it will, several times a day.",
      detail:
        "The so-that part is badly underrated. It is the only bit that helps somebody make a call you did not anticipate. Everything else just tells them what to type.",
    },
    {
      term: "What counts as done is the actual agreement",
      explain:
        "Each one says what the situation is beforehand, what somebody does, and what you should be able to see afterwards. If somebody who was not in the room cannot check it, it is not usable.",
      detail:
        "Given, when, then is a helpful habit even if you never write those words. The three parts force you to say what the starting situation is, and that is the half people leave out. It is also where all the odd cases live.",
    },
    {
      term: "Ban the words that postpone an argument",
      explain:
        "Appropriate, timely, robust, user-friendly, seamless, efficient, as required, where necessary. Every one of those is a disagreement booked in for later.",
      detail:
        "Swap each for a number or a rule. Timely becomes within four hours of the status changing. Appropriate becomes according to the table in section four. If you cannot make the swap, you have found a decision nobody has taken, and that is the real finding.",
    },
    {
      term: "Hunt the odd cases with a list, not with inspiration",
      explain:
        "Empty. Zero. Negative. The maximum. A duplicate. Expired. Cancelled. Half finished. Two at once. Out of order. The wrong type of thing. Unusually big. And the one where it already exists.",
      detail:
        "Run that list against every input and every thing in your requirement. It is completely mechanical, it takes twenty minutes, and it finds more than any amount of careful thought, because careful thought follows whatever you already pictured.",
    },
    {
      term: "Say what happens when it goes wrong",
      explain:
        "The other system does not answer. The file is corrupted. The card is declined. The record is locked. For each one: what does the user see, what gets written down, does it try again and who by, and is anything left half done.",
      detail:
        "What happens on failure is a business decision dressed up as a technical one. Whether a declined payment holds the order or lets it go is not a developer's call, and if you do not say, somebody else will.",
    },
    {
      term: "The data belongs in the specification too",
      explain:
        "For each field: what it means in plain English, what shape it is, whether it is compulsory, what values are allowed, which system is right about it, what happens when there is nothing there, and who can change it.",
      detail:
        "Two teams using one word for two things is the most expensive kind of vagueness in this job, and it is invisible in sentences. A table makes it obvious immediately, because two people cannot write two definitions in one box.",
    },
    {
      term: "Say who is allowed to do this, and who can see it",
      explain:
        "Permissions are nearly always left out of business documents and nearly always needed. Which roles can do the thing, which can see the result, and what happens when somebody without permission tries.",
      detail:
        "Ask about the awkward ones specifically. Can a manager approve their own request? Can a supervisor see another team's work? What does a temporary cover arrangement do to any of it?",
    },
    {
      term: "Say what has to be recorded, and for how long",
      explain:
        "Who did what and when. Being able to show that afterwards is a requirement, not a technical courtesy, and it is much cheaper to build in than to add once somebody asks.",
      detail:
        "The question that gets the answer: if this decision were challenged in a year, what would we need to be able to show, and who would be asking?",
    },
    {
      term: "Break the work up by what the business can see",
      explain:
        "A piece that delivers the whole journey for one type of customer can be shown to somebody and judged. A piece that delivers the database changes for everything cannot.",
      detail:
        "The test is whether a stakeholder could look at the result and tell you if it is right. If not, you have divided up the work rather than sliced it, and all the feedback arrives at the end.",
    },
    {
      term: "Examples do more work than rules",
      explain:
        "One worked example with real numbers settles something that three careful paragraphs leave open, because a paragraph can be read two ways and a set of inputs and expected answers cannot.",
      detail:
        "For anything involving a calculation, give at least three: a normal one, one right on the boundary, and one that should be rejected. Developers build to the examples and testers use them directly.",
    },
    {
      term: "The questions you get asked are free feedback",
      explain:
        "Write down every question a developer asks you during the build. That list is an exact description of what you left out.",
      detail:
        "After two projects the pattern is obvious and personal. Some people always miss permissions, some always miss what happens on failure, some always miss volume. Knowing your own gap is worth more than any template.",
    },
  ],

  codeExamples: [
    {
      title: "What counts as done, written so a tester can check it",
      language: "gherkin",
      intro:
        "The same requirement written as situations rather than paragraphs. Notice that nearly all the value is in the second, third and fourth ones. The normal case was never the bit anybody was confused about. Each one says what is true beforehand, what happens, and what you should see.",
      code: `Feature: Flag invoices that are at risk of being paid late
  So that credit controllers chase the ones that matter first

  Background:
    Given the working day ends at 17:00
    And an invoice is "at risk" when it is due within 3 working days

  Scenario: An invoice inside the window gets flagged
    Given an unpaid invoice due 2 working days from today
    When the credit controller opens the invoice list
    Then the invoice shows the "At risk" marker
    And it appears above invoices that are not at risk

  Scenario: Weekends and bank holidays do not count as working days
    Given today is Thursday
    And Friday is a bank holiday
    And an unpaid invoice is due the following Wednesday
    When the credit controller opens the invoice list
    Then the invoice shows the "At risk" marker

  Scenario: Paid invoices never get flagged
    Given an invoice due 1 working day from today
    And the invoice has been paid in full
    When the credit controller opens the invoice list
    Then the invoice does not show the "At risk" marker

  Scenario: Part-paid invoices are flagged on what is still owed
    Given an invoice due 1 working day from today
    And 60% of the value has already been paid
    When the credit controller opens the invoice list
    Then the invoice shows the "At risk" marker
    And the amount still owed is shown instead of the full total

  Scenario: Disputed invoices come out, and you can see why
    Given an invoice due 1 working day from today
    And the invoice is marked as disputed
    When the credit controller opens the invoice list
    Then the invoice does not show the "At risk" marker
    And it appears under "Disputed" with the date the dispute was raised

  Scenario: The payment system is not responding
    Given the payment status service does not answer within 5 seconds
    When the credit controller opens the invoice list
    Then invoices are shown using the last payment status we had
    And a banner says when that status was last updated`,
      note:
        "The last one is what most specifications leave out. What the user sees when something it depends on is down is a business decision about whether out-of-date information is better than none. Here the answer is yes, as long as you can see how out of date it is.",
    },
    {
      title: "A field table, because sentences hide disagreements",
      language: "markdown",
      intro:
        "Vagueness about data is invisible in paragraphs and impossible to hide in a table. This is the shape I use whenever two systems exchange records, and it is worth filling in even when nothing will read it automatically, because filling it in forces the questions.",
      code: `Thing: Customer Order
Which system is right about it: the Order Management System

| Field                 | What it means                                    | Compulsory | Notes                                                        |
|-----------------------|--------------------------------------------------|------------|--------------------------------------------------------------|
| orderReference        | The reference we quote to the customer on         | Yes        | Format: ORD- then 8 digits. Set by the order system when      |
|                       | everything                                        |            | the order is created. Cannot be changed afterwards.           |
| requestedDeliveryDate | The date the customer ASKED for, not the date     | No         | If blank, treat as next available slot. Do NOT default to     |
|                       | we promised them                                  |            | today. Changeable by sales or a customer service supervisor.  |
| orderStatus           | Where the order has got to                        | Yes        | One of: draft, confirmed, picking, dispatched, delivered,     |
|                       |                                                   |            | cancelled. Cancelled is final. An order never goes backwards. |
|                       |                                                   |            | Set by the system only, no manual override.                   |
| creditHold            | Finance has stopped this order pending payment    | Yes        | Defaults to no. An order on hold can be confirmed but must    |
|                       | or a credit check                                 |            | not move to picking. Only a credit controller can change it.  |`,
      note:
        "The what it means column is the one that earns its keep. Requested delivery date versus promised delivery date has caused more arguments on fulfilment projects than any technical decision, and the difference only shows up when somebody is made to write a sentence about what the field is for.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "One sentence that needed eleven.",
      walkthrough:
        "The problem: the requirement read that the system should stop duplicate customer records being created. What was happening: the BA ran the odd-case list against it. What counts as a duplicate: same name, same email, same address, same phone? What if the email matches and the name does not? What if a customer legitimately has two accounts for two businesses? What happens when a duplicate turns up during a bulk import rather than somebody typing? Who is allowed to merge two records? What happens to orders attached to the one that loses?",
      result:
        "What changed: eleven separate things had to be written down, and the original sentence covered one of them. None of it needed cleverness, only running a list against every noun in the sentence. The merging rules turned out to need a decision from finance which took two weeks, and finding that during writing rather than during testing is the entire point.",
    },
    {
      kind: "illustration",
      scenario: "A sensible guess made at four in the afternoon.",
      walkthrough:
        "The problem: the specification for an order confirmation email said nothing about what happens if the email address bounces. What was happening: the developer reached this at the end of a sprint and made a reasonable call. Write down the failure and carry on, because failing somebody's whole order over an email seemed disproportionate. Six weeks later, customer services spotted a pattern of customers who never got a confirmation and were never contacted by anybody.",
      result:
        "What changed: they added a rule that a bounced confirmation raises a task for somebody. The developer's judgement was sound and it was a business decision they were not equipped to make. The rule to take away is that every unstated failure gets settled by whoever meets it first, under time pressure, with the least context.",
    },
    {
      kind: "illustration",
      scenario: "Three pieces of work and nothing anyone could look at.",
      walkthrough:
        "The problem: a team split a piece of work into database changes, then the middle layer, then the screens. Each one was delivered on time and met what was asked. What was happening: two of the three could not be shown to the business at all, so no feedback arrived until after the third. At that point it emerged that the process assumed one approver, and certain regions have two.",
      result:
        "What changed: nothing could, by then. Had the work been split as the complete journey for one region, the two-approver case would have turned up in week one instead of week seven. Splitting by technical layer is comfortable for a team and pushes every piece of business feedback to the end, which is the one thing working in small pieces exists to prevent.",
    },
  ],

  learningPath: [
    {
      title: "Take one requirement and write out what counts as done",
      body: "For each one: what is true beforehand, what somebody does, and what you should see afterwards. Aim for the normal case plus at least three variations. Do not use the word appropriate anywhere.",
      effort: "1 hour",
      outcome: "A sense of how many of these a single requirement really needs, which is more than most people expect.",
    },
    {
      title: "Run the odd-case list against every noun",
      body: "Empty, zero, negative, maximum, duplicate, expired, cancelled, half finished, two at once, out of order, wrong type, unusually big, already exists. One noun at a time, mechanically.",
      effort: "30 minutes per requirement",
      outcome: "Usually two or three cases nobody had thought about, at least one needing a business decision.",
    },
    {
      title: "Write down what happens when things fail",
      body: "For everything it depends on and everything that can be refused: what the user sees, what gets recorded, whether it tries again, and whether anything is left half done.",
      effort: "1 hour",
      outcome: "The section that prevents the most common kind of nasty surprise after launch.",
    },
    {
      title: "Build the field table",
      body: "What it means, what shape, compulsory or not, allowed values, which system is right, what to do when it is empty, who can change it. One row per field, no paragraphs.",
      effort: "Half a day",
      outcome: "Data vagueness made visible, and usually one discovery that two teams mean different things by one word.",
    },
    {
      title: "Add permissions and record-keeping",
      body: "Who can do it, who can see it, what happens when somebody without permission tries, what gets recorded and for how long. Ask what you would need to show if it were challenged in a year.",
      effort: "2 hours",
      outcome: "The two things most often missing from business documents entirely.",
    },
    {
      title: "Hand it to a developer and count the questions",
      body: "Before the build starts. Ask them to read it and tell you what they would have to guess. Write down every question and do not defend anything.",
      effort: "1 hour",
      outcome: "An exact list of your own blind spots, which is the fastest way to write a better one next time.",
    },
  ],

  exercises: [
    {
      title: "Hunt the vague words",
      brief:
        "Take any requirements document you can get hold of and search it for appropriate, timely, robust, seamless, efficient, user-friendly, as required and where necessary. For each hit, write the number or rule that should replace it, or note that nobody has decided.",
      success:
        "Every one is either replaced with something checkable or written down as an open decision with a name and a date against it.",
      time: "1 hour",
    },
    {
      title: "Three examples per calculation",
      brief:
        "Find a requirement in your business that involves a calculation, a threshold or a date rule. Write three worked examples with real numbers: a normal one, one right on the boundary, and one that should be rejected. Check them with whoever owns the rule.",
      success:
        "At least one of your three gives a different answer from the one the rule owner expected, and the rule gets clarified.",
      time: "1 hour",
    },
    {
      title: "Get a developer to read it cold",
      brief:
        "Give something you have written to a developer who has been in none of the meetings. Ask them to mark every place they would have to make a decision. Do not explain anything while they read.",
      success:
        "You have a written list of gaps and can sort them into missing rule, missing data definition, missing failure case, missing permission. Whichever appears most is your personal weak spot.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Only writing down the normal case",
      why: "The normal case was never in doubt. Everything the business argues about after go-live lives in the variations, and those get invented by whoever meets them first.",
      fix: "Run a fixed odd-case list against every input and every thing. Twenty mechanical minutes beats any amount of careful thinking.",
    },
    {
      mistake: "Using words nobody can test",
      why: "Appropriate and timely feel like requirements and work like postponed arguments. Two people can both agree to them while meaning different things, which is worse than disagreeing openly.",
      fix: "Replace each with a number or a rule. Where you cannot, write it down as an open decision with a name against it.",
    },
    {
      mistake: "Leaving failure to the technical team",
      why: "Whether a failed payment holds or releases an order is a business decision. Left unsaid it gets made by somebody optimising for tidy code rather than for the customer relationship.",
      fix: "For everything it depends on and everything that can be refused, say what the user sees, what gets recorded, and whether anything is left half done.",
    },
    {
      mistake: "Describing the screen instead of the behaviour",
      why: "You commit to design decisions you are not best placed to make, and the requirement then looks wrong every time the layout changes even though the rule underneath is still right.",
      fix: "Say what has to be true and when. Put layout in the design work and say clearly that it is not specified here.",
    },
    {
      mistake: "Leaving out who is allowed to do what",
      why: "Almost every system needs it, almost no business document mentions it, and it turns up during a security review or the first time somebody covers for a colleague and cannot do their job.",
      fix: "For every action ask: who can do it, who can see the result, what happens when somebody who should not tries, and what a cover arrangement changes.",
    },
    {
      mistake: "Writing paragraphs where a table belongs",
      why: "A paragraph can be read two ways. A grid cannot, and it also shows up the empty boxes, which are the questions you have not asked yet.",
      fix: "Use tables for fields, rules, permissions and status changes. Keep sentences for context and intent.",
    },
    {
      mistake: "Splitting work by technical layer",
      why: "The business cannot look at a database change, so all the feedback arrives at the end, which removes the only advantage of working in small pieces.",
      fix: "Split so that each piece is something a stakeholder can look at and judge. One customer type, one region, one channel, all the way through.",
    },
    {
      mistake: "Treating questions during the build as an interruption",
      why: "They are the best feedback you will ever get on your own writing, and being defensive teaches developers to guess instead of asking, which is the outcome you least want.",
      fix: "Write every question down, answer it fast, and read the list at the end of the project to find your own recurring gap.",
    },
  ],

  bestPractices: [
    "Write for somebody who knows none of what you know.",
    "Keep the so-that part: it guides the decisions you did not anticipate.",
    "Say what is true beforehand, what happens, and what you should see afterwards.",
    "Ban words nobody can test and replace them with numbers or rules.",
    "Run a fixed odd-case list against every noun.",
    "Say what happens when anything it depends on fails.",
    "Put field definitions in a table, including what each one means.",
    "Say who can do it, who can see it, and what an unauthorised attempt does.",
    "Say what gets recorded and for how long.",
    "Give three worked examples for anything involving a calculation or a threshold.",
    "Split work so each piece can be judged by a stakeholder.",
    "Write down every question a developer asks and read the list afterwards.",
  ],

  proTips: [
    "Get a developer to read it before the estimate rather than after. Questions raised while estimating are free. The same questions raised during the build cost a rebuild. It also changes the relationship: you become somebody whose documents get read closely rather than skimmed.",
    "For any rule involving dates, write down what happens at a weekend, at month end, at year end, and when the clocks change. I have never once regretted asking, and several times I have found the business had genuinely different answers for two of the four.",
    "When you cannot get a decision on an odd case, write down the safe behaviour and mark it as a placeholder with the decision owner named. A document that says stop and raise a task, pending a decision from finance is far better than silence, because silence gets resolved by a guess and a placeholder gets chased.",
    "Keep one page per project listing every word that means something specific here. Not a corporate glossary exercise, just the words that have caused a misunderstanding. Nine times out of ten the same three words cause trouble on every project in that department, and having them written down makes you look like you have worked there for years.",
  ],

  businessApplications: [
    "Work built by an outside company or an offshore team, where you cannot rely on a quick chat to sort out confusion.",
    "Regulated work, where record-keeping and retention are as binding as anything else.",
    "Connecting systems, where the field table is the actual deliverable and the paragraphs are decoration.",
    "Replacing a system, where the old one's undocumented behaviour has to be found and written down on purpose.",
    "Handing over to a support team, where failure cases and permissions decide whether they can run the thing.",
    "Fixed-price contracts, where every vague word is a commercial risk with a number attached.",
  ],

  checklist: [
    "Every word that could mean two things is defined.",
    "Each thing has a before, a during and an observable after.",
    "No untestable words remain, or each is logged as an open decision.",
    "Odd-case list run against every input and every thing.",
    "Failure behaviour written for everything it depends on.",
    "Field table complete: meaning, shape, compulsory, values, source, empty handling.",
    "Permissions written for every action, including unauthorised attempts.",
    "Record-keeping and retention captured.",
    "Three worked examples for every calculation or threshold.",
    "Work split so a stakeholder can judge each piece.",
    "A developer has read it and their questions are written down.",
    "Open decisions listed with an owner and a date.",
  ],

  faqs: [
    {
      q: "How many of these does one requirement need?",
      a: "Enough to cover the normal case plus the variations that actually happen. If you have one, you have almost certainly only covered the case nobody was going to get wrong. If you have thirty, the requirement is too big and should be split up.",
    },
    {
      q: "Do I have to write given, when, then?",
      a: "No, but write something with all three parts. The format matters less than the discipline of saying what is true beforehand, which is the bit people leave out and the bit that contains all the odd cases.",
    },
    {
      q: "Who writes these, the BA or the team?",
      a: "Best drafted by the BA and improved by the team. You supply the business rules and the exceptions. Developers and testers find the technical cases. Written entirely by one side, they miss half of what they should cover.",
    },
    {
      q: "How much detail before an estimate?",
      a: "Enough that the team knows what the hard part is. Estimating a one-line requirement gets you a number based on the normal case, and all the variation comes from the bits you had not written down yet.",
    },
    {
      q: "What if the business will not decide on an odd case?",
      a: "Write down the safe behaviour, mark it as a placeholder, name who has to decide and set a date. Never leave silence: silence gets resolved by a developer guessing, and the guess becomes behaviour nobody chose.",
    },
    {
      q: "Should requirements describe the screen?",
      a: "Describe what has to happen and under what conditions, not the layout. Say what has to be visible without scrolling, or what must not take more than one click, where that genuinely matters. Choosing the components is design work and specifying it here does it badly.",
    },
  ],

  tools: [
    { name: "An odd-case list", what: "Empty, zero, negative, maximum, duplicate, expired, cancelled, half finished, two at once, out of order, wrong type, oversized, already exists. Run mechanically.", cost: "Free" },
    { name: "A field table", what: "Meaning, shape, compulsory, allowed values, which system is right, what to do when empty, who can change it.", cost: "Free" },
    { name: "A one-page glossary per project", what: "Just the words that have caused a misunderstanding here. Small effort, big return.", cost: "Free" },
    { name: "A question list", what: "Every question a developer asks during the build. The most honest review of your writing you will ever get.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "turning-business-needs-into-requirements", anchor: "where these come from in the first place", context: "Upstream" },
    { slug: "business-rules-and-decision-tables", anchor: "writing down the logic inside a rule", context: "Detail" },
    { slug: "working-with-developers", anchor: "the working relationship this depends on", context: "Delivery" },
  ],

  relatedGuides: ["turning-business-needs-into-requirements", "business-rules-and-decision-tables", "working-with-developers"],

  conclusion: [
    "Take the requirement you are about to hand over and run the odd-case list against every noun in it. Twenty minutes, completely mechanical, and it will produce at least two questions that would otherwise have been answered by a developer at the end of a sprint.",
  ],
};

export default guide;
