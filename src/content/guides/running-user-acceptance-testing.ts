import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "running-user-acceptance-testing",
  seoTitle: "Running User Acceptance Testing That Finds Real Problems",
  metaDescription:
    "UAT that is not a formality: choosing testers, building scenarios from real cases, realistic test data, triaging defects, and what sign-off should actually mean.",
  title: "Running User Acceptance Testing",
  keywords: [
    "user acceptance testing",
    "uat planning",
    "uat test scenarios",
    "acceptance criteria testing",
    "business analyst uat",
    "defect triage",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "User acceptance testing is where projects find out what they actually built, and in a large number of organisations it is a formality: a room booked for three days, a script that walks through the main path, and a signature collected because the date is fixed and everybody knows the alternative is a delay nobody has the authority to call.",
    "Done properly it is the last cheap opportunity to find out that a rule was misunderstood, that a process cannot be completed in the time available, or that a group nobody consulted uses the output for something you did not know about. Done as a formality it is worse than nothing, because it transfers accountability to people who did not really test.",
    "This guide is how to run it so that it finds things. Who should test and who should not, how to build scenarios from real cases rather than from the specification, why the test data usually determines the result, how to triage defects without the conversation becoming political, and what sign-off should mean when somebody puts a form in front of you.",
  ],

  whyItMatters: [
    "The defects that matter most at this stage are not code defects. They are specification defects: rules that were captured wrong, exceptions that were never mentioned, and steps that work individually but cannot be completed in sequence by one person in a working day. Nothing earlier in the process is designed to catch those.",
    "It is also the moment the business forms its opinion of the thing. People who found the system confusing during acceptance testing will tell their colleagues so before it launches, and that impression is far harder to shift afterwards than the underlying issue is to fix.",
    "And it is the last point where reversing a decision is merely expensive. After go-live it becomes a change request competing with everything else for money and attention, which usually means it does not happen at all.",
  ],

  coreConcepts: [
    {
      term: "UAT answers a different question from system testing",
      explain:
        "System testing asks whether the software does what was specified. Acceptance testing asks whether what was specified lets the business do its job. Those are genuinely different questions and the second one can fail while the first passes completely.",
      detail:
        "If your acceptance test is checking that fields validate correctly, you are repeating system testing with more expensive people. The right question is always whether a real person can complete a real piece of work.",
    },
    {
      term: "Test with the people who do the work, not their managers",
      explain:
        "Managers test the process as designed. Operators test it as run, and they instinctively try the awkward case because that is what their week is made of.",
      detail:
        "Include at least one person who is new to the role and one who has done it for years. The newcomer finds what is unclear, the veteran finds what is missing. Both are testers you cannot substitute for each other.",
    },
    {
      term: "Build scenarios from real cases, not from the specification",
      explain:
        "Testing from the specification confirms that the build matches the document, which is what system testing already did. Testing from real historical cases confirms that the build handles reality.",
      detail:
        "Take thirty real cases from the last quarter, chosen to include the difficult ones, the high-value ones and the ones that went wrong. Work out what should happen to each and run them through. Every mismatch is a finding.",
    },
    {
      term: "Test the whole day, not the individual function",
      explain:
        "Each function can work while the sequence fails. The user cannot get from one step to the next without leaving the system, or a task that took two minutes now takes six and there are two hundred of them a day.",
      detail:
        "Ask a tester to process a realistic volume for one hour, timed, doing nothing else. That single exercise finds problems that no scripted scenario will, and it produces a number you can use.",
    },
    {
      term: "The test data usually decides the result",
      explain:
        "Clean, small, tidy test data produces a successful test of a system that will meet real data on its first morning. Real data is messy, has long names, missing fields, duplicates and historical oddities.",
      detail:
        "Use a masked copy of production wherever governance allows. Where it does not, deliberately build ugly test data: the customer with fourteen addresses, the order from 2019, the name with an apostrophe in it, the account with a zero balance.",
    },
    {
      term: "Test the exceptions in proportion to their real frequency",
      explain:
        "If a third of cases go through an exception path in reality, a third of your test scenarios should. Most test packs are almost entirely happy path, which is the inverse of where the risk sits.",
      detail:
        "Get the exception proportions from the data you gathered during analysis. This is one of several places where doing the earlier work properly pays off directly.",
    },
    {
      term: "Test the failure paths deliberately",
      explain:
        "Turn off the interface. Submit the duplicate. Enter the value that should be rejected. Close the browser halfway through. Then check what the system did with the half-finished work.",
      detail:
        "Testers will not do this unprompted because they are trying to complete their work rather than break the system. Put the destructive scenarios in the pack explicitly and assign them to somebody who enjoys it.",
    },
    {
      term: "Triage on business impact, not on defect severity labels",
      explain:
        "Severity is a technical judgement about the software. What matters here is whether the business can operate on Monday, and how much manual effort a workaround costs per week.",
      detail:
        "Three categories are enough: cannot go live, can go live with a documented workaround, and fix later. Force every defect into one of the three, with the workaround's weekly cost written down for the middle group.",
    },
    {
      term: "Distinguish defect from change request honestly",
      explain:
        "A defect is where the build does not match what was agreed. A change is where what was agreed turns out to be wrong. Both are legitimate and they have different funding routes.",
      detail:
        "Resist the temptation to relabel your own specification errors as change requests. It is visible, it damages trust, and the analysis of why the requirement was wrong is more valuable than protecting the number.",
    },
    {
      term: "Acceptance testing tests the process, not only the system",
      explain:
        "Is there a procedure? Has training happened? Does the support team know what to do? Can the manager see what their team is working on?",
      detail:
        "A technically perfect system delivered into a business that has no procedure for it will fail, and the failure will be reported as a system problem. Testing readiness alongside function is part of the job.",
    },
    {
      term: "Sign-off means something specific or it means nothing",
      explain:
        "It should mean: these scenarios passed, these defects are outstanding with these agreed workarounds, and the business accepts the residual risk with a named owner.",
      detail:
        "A signature that means the sessions took place is worthless to everyone including the signer. Write the statement of what is being accepted, and let the person read it before signing.",
    },
    {
      term: "Sit with the testers rather than sending them a pack",
      explain:
        "The most valuable findings come from watching somebody hesitate. They will not report hesitation, because they assume it is their own unfamiliarity, and by the third day they have adapted and stopped noticing.",
      detail:
        "Watch the first hour of each tester's first session. Where they pause, where they reread, where they open something else to check: all of that is data that never reaches a defect log.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What happens when review means citing rather than checking.",
      walkthrough:
        "Reinhart and Rogoff reported that countries with public debt above 90% of GDP experienced negative average growth, a finding cited extensively in arguments for austerity. Thomas Herndon, a graduate student, attempted to reproduce it and could not. Obtaining the original spreadsheet, he and his co-authors found several problems, including an averaging formula whose range omitted five countries.",
      result:
        "Recalculated, average real GDP growth above the threshold was 2.2% rather than the reported figure. The relevant point for acceptance testing is how the error survived: it passed through enormous scrutiny, but the scrutiny consisted of citing the result rather than reproducing it. That is exactly what a UAT script executed by someone confirming the expected outcome does. Testing has to mean running real cases and comparing against what should have happened, independently derived, or it is a ceremony that produces a signature.",
      source: {
        label: "Herndon, Ash and Pollin (2013), PERI/UMass Amherst: critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "Every function passed and the day did not work.",
      walkthrough:
        "A replacement case management system passes acceptance testing on all scripted scenarios. A BA then asks one experienced caseworker to process a normal morning's volume, timed, doing nothing else. Each case takes noticeably longer than in the old system, because information that used to appear on one screen is now split across three, and the caseworker checks all three every time.",
      result:
        "Nothing was defective. Every individual function met its acceptance criteria and the total was unworkable at real volume. The timed volume exercise is the single highest-value hour in any acceptance test, and it almost never appears in a test plan, because plans are written from requirements and requirements are written one at a time.",
    },
    {
      kind: "illustration",
      scenario: "The test data that hid the problem.",
      walkthrough:
        "Testing runs on a small, tidy dataset created by the project team. Everything passes. On the first morning after go-live, users report that the customer search is unusable, because in production it returns hundreds of results for common surnames and there is no way to narrow them. The test data contained no duplicate surnames at all.",
      result:
        "The requirement had not specified sorting or filtering of search results, and nobody noticed because the test data never produced more than three matches. Test data is not a logistical detail. It determines which problems can be found, and a dataset built by the people who built the system tends to contain exactly the cases the system handles well.",
    },
  ],

  learningPath: [
    {
      title: "Define what sign-off will mean, before testing starts",
      body: "Write the statement now: which scenarios must pass, what defect levels are acceptable, who accepts residual risk. Agreed while nobody is under date pressure.",
      effort: "1 hour",
      outcome: "A standard that cannot be renegotiated in the last week, which is when it always gets renegotiated.",
    },
    {
      title: "Select testers deliberately",
      body: "People who do the work, including a newcomer and a veteran, plus a downstream consumer and someone from the team who will support it. Not managers, and not only volunteers.",
      effort: "Half a day of negotiation",
      outcome: "A group that will find different things, rather than five people who find the same thing.",
    },
    {
      title: "Build the scenario pack from real cases",
      body: "Thirty historical cases, weighted to include the difficult and high-value ones. Work out the correct outcome for each independently, before testing, so the comparison is real.",
      effort: "2 days",
      outcome: "A pack that tests reality rather than confirming the specification.",
    },
    {
      title: "Get realistic test data",
      body: "A masked production copy where governance permits. Otherwise, build ugly data deliberately: duplicates, missing fields, long names, historical records, edge values.",
      effort: "1-3 days, often the longest lead time in the whole exercise",
      outcome: "Testing that can find the problems that actually occur.",
    },
    {
      title: "Run the timed volume exercise",
      body: "One experienced person, one hour, realistic volume, nothing else. Time it and compare against the current process.",
      effort: "1 hour plus analysis",
      outcome: "The single finding most likely to change a go-live decision, expressed as a number.",
    },
    {
      title: "Triage daily, in the room, on business impact",
      body: "Three categories: blocks go-live, workaround with a weekly cost, fix later. Decide with the business owner present rather than by email afterwards.",
      effort: "30 minutes a day",
      outcome: "A defect list the business owns, and no backlog of undiscussed issues at the end.",
    },
    {
      title: "Close with an explicit acceptance statement",
      body: "What passed, what is outstanding, what the workarounds cost, who owns the residual risk. Then ask for the signature.",
      effort: "2 hours",
      outcome: "A sign-off that means something to the person signing it.",
    },
  ],

  exercises: [
    {
      title: "The timed hour",
      brief:
        "For any system in acceptance testing or recently live, ask one experienced user to process realistic volume for one hour with a timer running. Record time per case and compare with the process it replaced.",
      success:
        "You have a per-case time for both the old and new process, and can say whether the change improves or degrades throughput at real volume.",
      time: "2 hours including preparation",
    },
    {
      title: "Audit a test pack against reality",
      brief:
        "Take an existing UAT pack and count what proportion of scenarios cover exception paths. Compare that against the real proportion of cases that go through exceptions in the live process.",
      success:
        "You can state both percentages. If the test pack is overwhelmingly happy path and the process is not, you have a specific, evidenced recommendation.",
      time: "2 hours",
    },
    {
      title: "Break it deliberately",
      brief:
        "Spend one session doing only destructive testing: duplicate submissions, closing halfway through, entering values that should be rejected, disconnecting a dependency. Record what the system did with partially completed work.",
      success:
        "You find at least one case where partial work is left in an inconsistent state or a user receives no usable message.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Testing from the specification",
      why: "It confirms the build matches the document, which system testing already established. Specification errors, which are the expensive ones at this stage, are invisible to it by construction.",
      fix: "Build scenarios from real historical cases and derive the correct outcome independently before running them.",
    },
    {
      mistake: "Using managers as testers",
      why: "They test the designed process, they are interrupted constantly, and they are inclined to accept because they are accountable for the date.",
      fix: "Use the people who do the work, including one newcomer and one veteran, and secure their time formally.",
    },
    {
      mistake: "Clean test data",
      why: "It hides every problem caused by volume, duplication, missing values and historical oddity, which is most of what goes wrong on the first morning.",
      fix: "Masked production data where possible. Otherwise build deliberately ugly data and treat it as a project deliverable with a lead time.",
    },
    {
      mistake: "Almost entirely happy path scenarios",
      why: "The exceptions carry the risk and consume the effort. A pack that is ninety per cent main path tests the ten per cent of reality that was never in doubt.",
      fix: "Weight scenarios to the real exception proportions established during analysis.",
    },
    {
      mistake: "Testing functions instead of the working day",
      why: "Every function can pass while the sequence is unusable, and throughput problems only appear at volume.",
      fix: "Run at least one timed, realistic-volume session and compare per-case time against the current process.",
    },
    {
      mistake: "Relabelling specification errors as change requests",
      why: "It is visible to everyone involved, it damages trust, and it removes the feedback you needed about why the requirement was wrong.",
      fix: "Call it what it is. A defect is a mismatch with what was agreed. A change is agreement that turns out to have been wrong.",
    },
    {
      mistake: "Triaging by technical severity",
      why: "Severity describes the software. The business needs to know whether it can operate on Monday and what a workaround costs each week.",
      fix: "Three business categories: blocks go-live, workaround with a costed weekly impact, fix later. Decided with the business owner.",
    },
    {
      mistake: "Sign-off that means the sessions happened",
      why: "It transfers accountability to somebody who has not really tested, which is unfair and useless, and it usually surfaces as a dispute after the first incident.",
      fix: "Write an explicit statement of what is being accepted, including outstanding defects and residual risk owner, and let them read it before signing.",
    },
  ],

  bestPractices: [
    "Define what sign-off will mean before testing starts.",
    "Test with people who do the work, including a newcomer and a veteran.",
    "Include a downstream consumer and the future support team.",
    "Build scenarios from real historical cases, not from the specification.",
    "Derive the expected outcome independently before running the test.",
    "Use masked production data or deliberately ugly test data.",
    "Weight exception scenarios to their real frequency.",
    "Include destructive scenarios and assign them explicitly.",
    "Run at least one timed, realistic-volume session.",
    "Test the process and readiness, not only the system.",
    "Triage daily on business impact with the owner present.",
    "Close with an explicit acceptance statement naming the residual risk owner.",
  ],

  proTips: [
    "Watch the first hour of each tester's first session and say nothing. Every pause, reread and switch to another window is a finding, and none of it will ever appear in a defect log because people attribute their own hesitation to unfamiliarity. By day three they will have adapted and the information is gone.",
    "Ask each tester at the end of every day what they would complain about if this were live tomorrow. It is a different question from what is broken, and it consistently surfaces the things people considered too small or too subjective to log. Several of my most useful acceptance findings arrived through that question.",
    "Book the testers' time formally with their manager, in writing, with the dates and the hours. Acceptance testing done in the gaps of a normal workload produces the appearance of testing and very little else, and the person doing it knows that better than anybody.",
    "Keep a separate list of things testers say about the process rather than the system: this step is unnecessary now, this approval used to be for a reason that no longer applies. Acceptance testing is the only time you have experienced operators sitting still and looking at the whole flow, and that list is frequently worth more than the defects.",
  ],

  businessApplications: [
    "System replacement, where the risk is in what the old system quietly did that nobody documented.",
    "Vendor implementations, where acceptance is contractual and the wording of sign-off has commercial consequences.",
    "Regulatory changes, where the test is whether the business can evidence compliance rather than whether a screen works.",
    "Process changes with no software, where the same scenario approach applies to a procedure.",
    "Migration cutover rehearsal, where the acceptance test doubles as a dry run of the transition.",
    "Post-incident verification, where the question is whether a fix actually prevents the original scenario.",
  ],

  checklist: [
    "Sign-off definition agreed in writing before testing begins.",
    "Testers selected: operators, newcomer, veteran, downstream consumer, support team.",
    "Tester time formally booked with their managers.",
    "Thirty real historical cases selected, weighted to difficult and high-value.",
    "Expected outcomes derived independently before testing.",
    "Test data realistic: masked production, or deliberately ugly.",
    "Exception scenarios weighted to real frequency.",
    "Destructive scenarios included and assigned.",
    "Timed realistic-volume session scheduled.",
    "Procedure, training and support readiness tested alongside the system.",
    "Daily triage on business impact with the owner present.",
    "Defects and change requests classified honestly and separately.",
    "Acceptance statement written, with outstanding items and residual risk owner named.",
  ],

  faqs: [
    {
      q: "How long should UAT take?",
      a: "Long enough to run your scenario pack twice: once to find defects and once to confirm fixes. For a substantial system that is usually two to four weeks. A single pass with no time for a retest is a demonstration rather than a test.",
    },
    {
      q: "Who should sign off?",
      a: "The person accountable for the business area operating, not the project manager and not the BA. If the person signing does not carry the consequences of it going wrong, the signature does not mean what everybody assumes.",
    },
    {
      q: "What if the business will not release people to test?",
      a: "Raise it as a risk with a specific consequence: without operator testing, the first users of this system will be its testers, in production, in front of customers. That framing gets people released more often than a general request does.",
    },
    {
      q: "Should the BA write the test scenarios?",
      a: "Draft them, then have the testers add their own awkward cases. Testers reliably contribute scenarios you would not have thought of, because they are drawn from cases that caused them trouble personally.",
    },
    {
      q: "What do I do when a defect is really a missing requirement?",
      a: "Log it honestly as a change with a note on why it was missed. Then check whether the same gap exists elsewhere in the specification, because missing requirements come in categories rather than singly.",
    },
    {
      q: "Is it ever acceptable to go live with known defects?",
      a: "Frequently, and it is a legitimate decision when each one has a documented workaround, a costed weekly impact and a named owner. What is not acceptable is going live with defects nobody has quantified, which is the usual version.",
    },
  ],

  tools: [
    { name: "Thirty real historical cases", what: "The scenario pack. Weighted to difficult, high-value and previously problematic cases.", cost: "Free" },
    { name: "A masked production data copy", what: "The single biggest determinant of whether testing finds anything. Start the governance conversation early, it has a lead time.", cost: "Varies" },
    { name: "A defect log with a business impact column", what: "Blocks go-live, workaround with weekly cost, fix later. Triaged daily with the business owner.", cost: "Varies" },
    { name: "A written acceptance statement", what: "What passed, what is outstanding, what the workarounds cost, who owns the residual risk.", cost: "Free" },
  ],

  resources: [
    { title: "Critique of Reinhart and Rogoff", kind: "Paper", note: "On why review that consists of confirming a result is not review. The cleanest argument for deriving expected outcomes independently before testing.", url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "the criteria being tested against", context: "Upstream" },
    { slug: "delivering-change-into-a-business", anchor: "what happens after acceptance", context: "Next step" },
    { slug: "working-with-developers", anchor: "handling the defects you find", context: "During testing" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "delivering-change-into-a-business", "working-with-developers"],

  conclusion: [
    "Before your next acceptance test, book one experienced user for a single timed hour at realistic volume and compare the per-case time against the current process. It is one hour, it needs no test script, and it is the finding most likely to change a go-live decision.",
  ],
};

export default guide;
