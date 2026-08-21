import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "running-user-acceptance-testing",
  seoTitle: "Testing It With the People Who Will Actually Use It",
  metaDescription:
    "Not a formality before a fixed date. Who should test, why real cases beat scripts, why tidy test data hides everything, and what signing it off should mean.",
  title: "Testing It With the People Who Will Use It",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "This is where a project finds out what it actually built, and in a lot of businesses it is a formality. A room booked for three days, a script that walks through the normal path, and a signature collected because the date is fixed and everybody knows the alternative is a delay nobody has the authority to call.",
    "Done properly it is the last cheap chance to find out that a rule was misunderstood, that the work cannot be finished in the time available, or that a team nobody consulted uses the output for something you did not know about. Done as a formality it is worse than nothing, because it hands responsibility to people who did not really test anything.",
    "This guide is how to run it so it finds things. Who should test and who should not, how to build the test cases from real work rather than from your own document, why the test data usually decides the result, how to sort the problems without it turning political, and what a signature should actually mean.",
  ],

  whyItMatters: [
    "The problems that matter most at this stage are not coding mistakes. They are misunderstandings: rules captured wrong, exceptions nobody mentioned, and steps that each work individually but cannot be finished in sequence by one person in a working day. Nothing earlier in the project is designed to catch those.",
    "It is also when the business makes up its mind about the thing. People who found the system confusing during testing will tell their colleagues so before it even launches, and that impression is far harder to shift afterwards than the underlying problem is to fix.",
    "And it is the last point where changing your mind is merely expensive. After go-live it becomes a change request competing with everything else for money and attention, which usually means it never happens at all.",
  ],

  coreConcepts: [
    {
      term: "This asks a different question from the technical testing",
      explain:
        "Technical testing asks whether the software does what was specified. This asks whether what was specified lets the business do its job. Those are genuinely different questions and the second can fail while the first passes completely.",
      detail:
        "If your test is checking that fields validate properly, you are repeating the technical testing with more expensive people. The right question is always whether a real person can complete a real piece of work.",
    },
    {
      term: "Test with the people who do the work, not their managers",
      explain:
        "Managers test the process as it was designed. The people doing it test it as it really runs, and they instinctively try the awkward case because that is what their week is made of.",
      detail:
        "Include at least one person new to the job and one who has done it for years. The newcomer finds what is unclear, the veteran finds what is missing. You cannot substitute one for the other.",
    },
    {
      term: "Build the tests from real cases, not from the specification",
      explain:
        "Testing from the specification confirms the build matches the document, which the technical testing already did. Testing from real historical cases confirms it handles reality.",
      detail:
        "Take thirty real cases from last quarter, chosen to include the difficult ones, the high-value ones and the ones that went wrong. Work out what should happen to each, then run them through. Every mismatch is a finding.",
    },
    {
      term: "Test the whole day, not the individual button",
      explain:
        "Every function can work while the sequence fails. The user cannot get from one step to the next without leaving the system, or something that took two minutes now takes six and there are two hundred of them a day.",
      detail:
        "Ask a tester to process a realistic amount of work for one hour, timed, doing nothing else. That single exercise finds things no script will, and it gives you a number you can use.",
    },
    {
      term: "The test data usually decides the result",
      explain:
        "Clean, small, tidy test data gives you a successful test of a system that will meet real data on its first morning. Real data is messy, with long names, missing fields, duplicates and historical oddities.",
      detail:
        "Use a copy of real data with the sensitive bits hidden, where the rules allow. Where they do not, build deliberately ugly test data on purpose: the customer with fourteen addresses, the order from 2019, the name with an apostrophe in it, the account with a zero balance.",
    },
    {
      term: "Test the exceptions as often as they really happen",
      explain:
        "If a third of real cases go through an exception path, a third of your tests should. Most test packs are almost entirely the normal path, which is the exact opposite of where the risk sits.",
      detail:
        "Get the real proportions from the work you did during analysis. This is one of several places where doing the earlier work properly pays off directly.",
    },
    {
      term: "Try to break it on purpose",
      explain:
        "Turn off the connection. Submit the same thing twice. Enter a value that should be rejected. Close the browser halfway through. Then check what the system did with the half-finished work.",
      detail:
        "Testers will not do this unprompted, because they are trying to get their work done rather than break things. Put the destructive tests in the pack explicitly and give them to somebody who will enjoy it.",
    },
    {
      term: "Sort the problems by what it means for Monday, not by technical severity",
      explain:
        "Severity is a judgement about the software. What matters here is whether the business can operate on Monday, and how much extra work a workaround costs each week.",
      detail:
        "Three categories are enough: cannot go live, can go live with a written-down workaround, and fix later. Force every problem into one of the three, and put a weekly cost on the middle group.",
    },
    {
      term: "Be honest about what is a fault and what is a change",
      explain:
        "A fault is where the build does not match what was agreed. A change is where what was agreed turns out to be wrong. Both are legitimate and they get funded differently.",
      detail:
        "Resist relabelling your own mistakes as change requests. It is visible to everybody, it damages trust, and understanding why the requirement was wrong is more valuable than protecting a number.",
    },
    {
      term: "Test whether the business is ready, not just the system",
      explain:
        "Is there a written procedure? Has training happened? Does the support team know what to do? Can a manager see what their team is working on?",
      detail:
        "A technically perfect system delivered into a business with no procedure for it will fail, and the failure will get reported as a system problem. Checking readiness alongside function is part of the job.",
    },
    {
      term: "Signing it off should mean something specific",
      explain:
        "It should mean: these cases passed, these problems are outstanding with these agreed workarounds, and the business accepts the remaining risk with a named person.",
      detail:
        "A signature that means the sessions happened is worthless to everybody including whoever signed. Write out what is being accepted and let them read it before signing.",
    },
    {
      term: "Sit with the testers rather than sending them a pack",
      explain:
        "The most valuable findings come from watching somebody hesitate. They will not report hesitation, because they assume it is their own unfamiliarity, and by the third day they have adapted and stopped noticing.",
      detail:
        "Watch the first hour of each tester's first session. Where they pause, where they read something twice, where they open something else to check: none of that ever reaches a problem log.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What happens when checking means agreeing rather than reproducing.",
      walkthrough:
        "Reinhart and Rogoff reported that countries with public debt above 90% of GDP had negative average growth, a finding cited widely in arguments for austerity. Thomas Herndon, a graduate student, tried to reproduce it and could not. When he and his co-authors got the original spreadsheet they found several problems, including a formula that had not been dragged far enough and so left five countries out.",
      result:
        "Recalculated, average real growth above the threshold was 2.2% rather than the figure published. The relevant point here is how the mistake survived: it went through enormous scrutiny, but the scrutiny consisted of citing the result rather than reproducing it. That is exactly what happens when somebody works through a test script confirming the expected outcome. Testing has to mean running real cases and comparing against what should have happened, worked out separately, or it is a ceremony that produces a signature.",
      source: {
        label: "Herndon, Ash and Pollin (2013), PERI/UMass Amherst: critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "Everything passed and the day did not work.",
      walkthrough:
        "The problem: a replacement case management system passed every scripted test. What was happening: the BA then asked one experienced caseworker to process a normal morning's workload, timed, doing nothing else. Each case took noticeably longer than in the old system, because information that used to sit on one screen was now spread across three, and the caseworker checked all three every single time.",
      result:
        "What changed: they redesigned one screen before go-live. Nothing had been faulty. Every function met what was asked and the total was unworkable at real volume. The timed hour is the highest-value hour in any acceptance test and it almost never appears in a plan, because plans get written from requirements and requirements are written one at a time.",
    },
    {
      kind: "illustration",
      scenario: "The test data that hid the problem.",
      walkthrough:
        "The problem: testing ran on a small, tidy dataset the project team had created. Everything passed. What was happening: on the first morning after go-live, users reported that customer search was unusable, because in real life it returned hundreds of results for common surnames with no way to narrow them down. The test data had contained no duplicate surnames at all.",
      result:
        "What changed: they added sorting and filtering after the fact, at change request prices. The requirement had never mentioned it and nobody noticed because the test data never produced more than three matches. Test data is not a logistical detail. It decides which problems can be found, and a dataset built by the people who built the system tends to contain exactly the cases the system handles well.",
    },
  ],

  learningPath: [
    {
      title: "Decide what signing off will mean, before testing starts",
      body: "Write it now: which cases must pass, what level of outstanding problems is acceptable, who accepts the remaining risk. Agreed while nobody is under date pressure.",
      effort: "1 hour",
      outcome: "A standard that cannot be renegotiated in the last week, which is when it always gets renegotiated.",
    },
    {
      title: "Choose the testers on purpose",
      body: "People who do the work, including one newcomer and one veteran, plus somebody who receives the output downstream and somebody from the team who will support it. Not managers, and not only volunteers.",
      effort: "Half a day of negotiating",
      outcome: "A group that will find different things, rather than five people finding the same thing.",
    },
    {
      title: "Build the pack from real cases",
      body: "Thirty historical cases, weighted towards the difficult and high-value ones. Work out the right answer for each yourself, before testing, so the comparison is real.",
      effort: "2 days",
      outcome: "A pack that tests reality rather than confirming your own document.",
    },
    {
      title: "Get realistic test data",
      body: "A copy of real data with the sensitive parts hidden, where the rules permit. Otherwise build ugly data on purpose: duplicates, missing fields, long names, old records, edge values.",
      effort: "1-3 days, often the longest lead time in the whole exercise",
      outcome: "Testing that can actually find the problems that happen.",
    },
    {
      title: "Run the timed hour",
      body: "One experienced person, one hour, realistic volume, nothing else. Time it and compare against the current way of working.",
      effort: "1 hour plus analysis",
      outcome: "The finding most likely to change a go-live decision, expressed as a number.",
    },
    {
      title: "Sort the problems daily, in the room",
      body: "Three categories: stops go-live, workaround with a weekly cost, fix later. Decide with the business owner present rather than by email afterwards.",
      effort: "30 minutes a day",
      outcome: "A problem list the business owns, and no backlog of undiscussed issues at the end.",
    },
    {
      title: "Finish with a written statement of what is being accepted",
      body: "What passed, what is outstanding, what the workarounds cost, who owns the remaining risk. Then ask for the signature.",
      effort: "2 hours",
      outcome: "A sign-off that means something to the person signing it.",
    },
  ],

  exercises: [
    {
      title: "The timed hour",
      brief:
        "For any system in testing or recently live, ask one experienced user to process realistic volume for one hour with a timer running. Record time per case and compare with what it replaced.",
      success:
        "You have a per-case time for both old and new, and can say whether the change helps or hurts at real volume.",
      time: "2 hours including preparation",
    },
    {
      title: "Check a test pack against reality",
      brief:
        "Take an existing test pack and count what proportion of the tests cover exception paths. Compare that against the real proportion of cases that go through exceptions in the live process.",
      success:
        "You can state both percentages. If the pack is overwhelmingly normal-path and the process is not, you have a specific, evidenced recommendation.",
      time: "2 hours",
    },
    {
      title: "Break it on purpose",
      brief:
        "Spend one session doing only destructive testing: submitting twice, closing halfway through, entering values that should be rejected, disconnecting something it depends on. Record what happened to the half-finished work.",
      success:
        "You find at least one case where partial work is left in a mess or the user gets no usable message.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Testing from the specification",
      why: "It confirms the build matches the document, which the technical testing already established. Misunderstandings, which are the expensive ones at this stage, are invisible to it by design.",
      fix: "Build the tests from real historical cases and work out the right answer yourself before running them.",
    },
    {
      mistake: "Using managers as testers",
      why: "They test the designed process, they get interrupted constantly, and they are inclined to accept because they are accountable for the date.",
      fix: "Use the people who do the work, including one newcomer and one veteran, and get their time booked formally.",
    },
    {
      mistake: "Clean test data",
      why: "It hides every problem caused by volume, duplicates, missing values and historical oddity, which is most of what goes wrong on the first morning.",
      fix: "Use a masked copy of real data where possible. Otherwise build deliberately ugly data and treat it as a deliverable with a lead time.",
    },
    {
      mistake: "Almost entirely normal-path tests",
      why: "The exceptions carry the risk and eat the effort. A pack that is ninety per cent normal path tests the ten per cent of reality that was never in doubt.",
      fix: "Weight the tests to the real exception proportions you established during analysis.",
    },
    {
      mistake: "Testing functions instead of the working day",
      why: "Every function can pass while the sequence is unusable, and throughput problems only show up at real volume.",
      fix: "Run at least one timed session at realistic volume and compare the per-case time against the current way.",
    },
    {
      mistake: "Calling your own mistakes change requests",
      why: "It is visible to everybody involved, it damages trust, and it removes the feedback you needed about why the requirement was wrong.",
      fix: "Call it what it is. A fault is a mismatch with what was agreed. A change is agreement that turns out to have been wrong.",
    },
    {
      mistake: "Sorting problems by technical severity",
      why: "Severity describes the software. The business needs to know whether it can operate on Monday and what a workaround costs each week.",
      fix: "Three business categories: stops go-live, workaround with a costed weekly impact, fix later. Decided with the business owner.",
    },
    {
      mistake: "A signature that means the sessions happened",
      why: "It hands responsibility to somebody who has not really tested anything, which is unfair and useless, and it usually surfaces as an argument after the first incident.",
      fix: "Write out what is being accepted, including outstanding problems and who owns the remaining risk, and let them read it before signing.",
    },
  ],

  bestPractices: [
    "Decide what signing off will mean before testing starts.",
    "Test with people who do the work, including a newcomer and a veteran.",
    "Include somebody downstream and somebody from the future support team.",
    "Build the tests from real historical cases, not from the specification.",
    "Work out the expected answer yourself before running the test.",
    "Use masked real data or deliberately ugly test data.",
    "Weight exception tests to how often they really happen.",
    "Include destructive tests and give them to somebody specific.",
    "Run at least one timed session at realistic volume.",
    "Test the procedure and the readiness, not only the system.",
    "Sort problems daily by business impact with the owner present.",
    "Finish with a written statement of what is being accepted and who owns the risk.",
  ],

  proTips: [
    "Watch the first hour of each tester's first session and say nothing. Every pause, every reread, every switch to another window is a finding, and none of it will ever appear in a problem log because people put their own hesitation down to unfamiliarity. By day three they have adapted and the information is gone.",
    "Ask each tester at the end of every day what they would complain about if this were live tomorrow. It is a different question from what is broken, and it consistently turns up things people thought were too small or too subjective to log. Several of my most useful findings came from that question.",
    "Book the testers' time formally with their manager, in writing, with dates and hours. Testing squeezed into the gaps of a normal workload produces the appearance of testing and very little else, and the person doing it knows that better than anybody.",
    "Keep a separate list of things testers say about the process rather than the system: this step is unnecessary now, this approval was for a reason that no longer applies. This is the only time you get experienced people sitting still and looking at the whole flow, and that list is frequently worth more than the faults.",
  ],

  businessApplications: [
    "Replacing a system, where the risk sits in what the old one quietly did that nobody documented.",
    "Work built by a supplier, where acceptance is contractual and the wording has commercial consequences.",
    "Responding to legislation, where the test is whether the business can prove compliance rather than whether a screen works.",
    "Process changes with no software, where the same approach works on a procedure.",
    "A rehearsal of the changeover, where the acceptance test doubles as a dry run.",
    "Checking a fix, where the question is whether it actually prevents the original problem.",
  ],

  checklist: [
    "What signing off means agreed in writing before testing begins.",
    "Testers chosen: people who do the work, a newcomer, a veteran, somebody downstream, somebody from support.",
    "Tester time booked formally with their managers.",
    "Thirty real historical cases selected, weighted to difficult and high-value.",
    "Expected answers worked out separately before testing.",
    "Test data realistic: masked real data, or deliberately ugly.",
    "Exception tests weighted to how often they really happen.",
    "Destructive tests included and given to somebody.",
    "Timed realistic-volume session scheduled.",
    "Procedure, training and support readiness tested alongside the system.",
    "Daily sorting by business impact with the owner present.",
    "Faults and changes separated honestly.",
    "Written acceptance statement with outstanding items and a named risk owner.",
  ],

  faqs: [
    {
      q: "How long should this take?",
      a: "Long enough to run your pack twice: once to find problems and once to confirm the fixes. For a substantial system that is usually two to four weeks. A single pass with no time to retest is a demonstration rather than a test.",
    },
    {
      q: "Who should sign it off?",
      a: "The person accountable for the business area operating, not the project manager and not the BA. If whoever signs does not carry the consequences of it going wrong, the signature does not mean what everybody assumes.",
    },
    {
      q: "What if the business will not release people to test?",
      a: "Raise it as a risk with a specific consequence: without them, the first users of this system will be its testers, in production, in front of customers. That framing gets people released far more often than a general request does.",
    },
    {
      q: "Should the BA write the test cases?",
      a: "Draft them, then let the testers add their own awkward cases. Testers reliably contribute cases you would not have thought of, because they come from things that caused them trouble personally.",
    },
    {
      q: "What do I do when a fault is really a missing requirement?",
      a: "Log it honestly as a change with a note on why it was missed. Then check whether the same kind of gap exists elsewhere in the document, because missing requirements come in categories rather than one at a time.",
    },
    {
      q: "Is it ever acceptable to go live with known problems?",
      a: "Frequently, and it is a legitimate decision when each one has a written workaround, a weekly cost and a named owner. What is not acceptable is going live with problems nobody has sized, which is the usual version.",
    },
  ],

  tools: [
    { name: "Thirty real historical cases", what: "Your test pack. Weighted towards difficult, high-value and previously problematic cases.", cost: "Free" },
    { name: "A masked copy of real data", what: "The single biggest thing deciding whether testing finds anything. Start that conversation early, it has a lead time.", cost: "Varies" },
    { name: "A problem log with a business impact column", what: "Stops go-live, workaround with a weekly cost, fix later. Sorted daily with the business owner.", cost: "Varies" },
    { name: "A written acceptance statement", what: "What passed, what is outstanding, what the workarounds cost, who owns the remaining risk.", cost: "Free" },
  ],

  resources: [
    { title: "Critique of Reinhart and Rogoff", kind: "Paper", note: "On why checking that consists of agreeing with a result is not checking. The cleanest argument for working out the expected answer separately before testing.", url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "what is being tested against", context: "Upstream" },
    { slug: "delivering-change-into-a-business", anchor: "what happens after acceptance", context: "Next step" },
    { slug: "working-with-developers", anchor: "handling the problems you find", context: "During testing" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "delivering-change-into-a-business", "working-with-developers"],

  conclusion: [
    "Before your next acceptance test, book one experienced user for a single timed hour at realistic volume and compare the per-case time against the current way of working. It is one hour, it needs no script, and it is the finding most likely to change a go-live decision.",
  ],
};

export default guide;
