import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "planning-a-data-migration",
  seoTitle: "Moving Data to a New System Without Losing Anything",
  metaDescription:
    "Every record can arrive safely and the business still cannot work on Monday. What to bring, what to clean, practice runs, and how to prove nothing went missing.",
  title: "Moving Data to a New System",
  keywords: [
    "data migration planning",
    "migration strategy",
    "data cleansing before migration",
    "migration reconciliation",
    "trial load",
    "cutover data",
  ],
  category: "data-science",
  level: "Advanced",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "The dangerous thing about moving data to a new system is that it can go perfectly and still ruin your launch. Every record arrives. All the totals match. And on Monday morning the team cannot work, because the data is technically correct and practically useless. The statuses mean something slightly different, the reference numbers are ones nobody recognises, and the history stops at a point nobody agreed to.",
    "That is the framing worth keeping hold of. Moving data is not a data job. It is the job of making a business able to work on a different system. The moving is the easy half. The half that goes wrong is the decisions: what comes across, what does not, what gets cleaned up, what happens to records that will not fit, and how anybody proves afterwards that nothing was lost.",
    "This guide is the plan a Business Analyst should own. Deciding scope with the business, looking at the data before promising anything, cleaning up the bits that need somebody's judgement, doing practice runs early, agreeing what happens to failed records, and settling how you will check it worked before the first run rather than arguing about it after.",
  ],

  whyItMatters: [
    "Mistakes here are permanent in a way most bugs are not. Getting a field wrong produces records that look perfectly plausible, and once the old system is switched off there may be no way to work out which records are affected or what they should have said.",
    "It is also where the time gets underestimated most consistently. The technical part is a small fraction of the effort. Working out what a status code means, getting somebody to rule on a value that has no equivalent, and cleaning up records that need a human to look at them all take weeks that nobody planned for.",
    "And it is where the analyst matters most. Engineers can move data. Only somebody who knows how the business actually works can say whether what arrives is something people can work with on the first morning.",
  ],

  coreConcepts: [
    {
      term: "What comes across is a business decision",
      explain:
        "Which things, which records, how far back, and which statuses. Bringing everything is expensive and usually wrong. Bringing too little breaks year-on-year comparisons and leaves people unable to answer customer questions.",
      detail:
        "Work it out from a question: what would somebody need to answer a customer or a regulator about something that happened three years ago? That gets you to a defensible answer faster than any general principle about keeping records.",
    },
    {
      term: "Look at the data before promising anything",
      explain:
        "How many records. How much is filled in. How much is filled in for older records specifically. What values are actually in the code fields. Duplicates. How many addresses one customer really has.",
      detail:
        "Every migration plan is a set of promises about the state of the old data. Looking is how you find out whether you can keep them, and the results routinely change the plan rather than confirming it.",
    },
    {
      term: "Clean up before, reshape during",
      explain:
        "Anything that needs somebody's judgement should be fixed in the old system, while the people who understand those records are still using it every day.",
      detail:
        "Mechanical reshaping can happen during the move. Judgement calls cannot. After go-live the person who could have told you what an odd record meant is busy learning a new system, and the oddity becomes permanent.",
    },
    {
      term: "The lists of codes are where these actually go wrong",
      explain:
        "Status codes, product categories, reason codes, country lists. The two systems will have overlapping but different lists, and matching them up is a business decision.",
      detail:
        "Pull both lists in full on day one and put them side by side. Every value in the old system with no equivalent in the new one needs a ruling from somebody who understands what it means for the business, not a technical default.",
    },
    {
      term: "Decide what happens to records that will not go",
      explain:
        "Some will fail. Does the whole thing stop, or does it carry on and write them down? Who looks at the failures, how quickly, and what is the deadline for clearing them before the changeover?",
      detail:
        "Leave this unsaid and you get the worst available outcome: a run that reports success while quietly dropping the records that were hardest to handle, which are overwhelmingly the biggest and oldest accounts.",
    },
    {
      term: "Agree how you will check it worked, before you do it",
      explain:
        "Record counts by type and status, total values, counts by region or product, and a handful of individual records compared field by field.",
      detail:
        "Once the data has moved, nobody can tell a mistake from a legitimate change, and the argument becomes unwinnable. Agreeing the totals and the acceptable difference with the business owner in advance is what makes the result checkable at all.",
    },
    {
      term: "Practice runs, early and repeatedly, and time them",
      explain:
        "The first practice run should happen far earlier than feels comfortable, using whatever data you have. Its job is to find problems, not to prove you are ready.",
      detail:
        "Time every run. Changeover weekends are a fixed length. Finding out that a full run takes longer than the weekend you have is a problem you want in month two, not in the final rehearsal.",
    },
    {
      term: "After each practice run, get people to do real work on it",
      explain:
        "Take twenty real cases and ask the business to do their normal job on them in the new system. Not comparing spreadsheets. Actual work.",
      detail:
        "This is what catches the failure where everything matched and nothing is usable: the status that maps across correctly but means something different, the notes field the team relied on, the reference number nobody recognises.",
    },
    {
      term: "Decide what happens to half-finished work",
      explain:
        "On the day of the changeover, some cases are part-way through. Do they finish under the old rules, come across mid-flight, or get completed by hand?",
      detail:
        "All three are defensible. What is not defensible is nobody deciding. This is the most commonly forgotten item in any changeover plan and it causes the most confusion on the first morning.",
    },
    {
      term: "Things keep changing between the main run and go-live",
      explain:
        "The old system does not stop while you move the data. Something has to catch the changes that happened in between, or you have to freeze the old system.",
      detail:
        "Both have business consequences. A freeze means the operation stops for a while. Catching up the changes means more complexity and its own checking. Choose on purpose rather than discovering you need to late.",
    },
    {
      term: "Know what going back actually means",
      explain:
        "If the run fails or the totals do not match, can you return to the old system? And what happens to anything people have already done in the new one?",
      detail:
        "Going back is usually assumed and rarely planned. Work out the point after which you cannot, and make sure crossing it is a named person's decision against a stated test.",
    },
    {
      term: "Keep the old system readable for longer than you think",
      explain:
        "Read-only access, or a copy you can search, for well past go-live. Questions keep arriving for months and some can only be answered from the original.",
      detail:
        "Switching it off cannot be undone. The cost of keeping a read-only copy for another six months is almost always smaller than the cost of needing it once and not having it.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The data arrived perfectly and the bank stopped working.",
      walkthrough:
        "In April 2018 TSB moved customer and business data onto a new IT platform. The data transfer itself worked. The platform then failed immediately, disrupting branches, telephone banking, online and mobile. All of the bank's branches and a significant portion of its 5.2 million customers were affected at first, and disruption continued for some customers until December 2018, around eight months, before things returned to normal. TSB paid £32.7 million in compensation to customers who were harmed.",
      result:
        "In December 2022 the FCA and PRA fined TSB a combined £48.65 million, made up of £29.75 million from the FCA and £18.9 million from the PRA, both after a 30% discount for cooperating. The regulators found that TSB failed to organise and control the migration programme properly and did not manage the risks around a critical third-party supplier. The lesson that carries into any migration is right there in the first sentence: data arriving correctly and a business being able to work are two different tests, and only the second one matters to a customer.",
      source: {
        label: "FCA (December 2022): TSB fined £48.65m for operational resilience failings",
        url: "https://www.fca.org.uk/news/press-releases/tsb-fined-48m-operational-resilience-failings",
      },
    },
    {
      kind: "illustration",
      scenario: "The status that matched perfectly and meant something else.",
      walkthrough:
        "The problem: case statuses were being matched between two systems. Every value had an equivalent, the matching was reviewed and signed off, and the counts by status balanced exactly. What was happening: after a practice run, the BA asked three caseworkers to handle twenty real cases in the new system. Within an hour they reported that cases in one status were showing up in the wrong work queue, because the status with the same name is used at a different point in the new system's process.",
      result:
        "What changed: they remapped that status and re-ran the check. The matching was right at the level of the label and wrong at the level of what it meant, and no amount of counting would ever have found it. Getting people to do real work on moved data after every practice run is the only check that tests meaning rather than shape.",
    },
    {
      kind: "illustration",
      scenario: "The failed records nobody was looking at.",
      walkthrough:
        "The problem: a practice run reported success, with a small number of records logged as having failed. What was happening: nobody had been given the job of looking at that failure list, so it went unexamined until the second practice run several weeks later. When somebody finally read it, the failures were concentrated among the oldest and largest accounts, failing a check that did not exist in the old system.",
      result:
        "What changed: they fixed the underlying problem and made reviewing failures a named person's job with a deadline. The number of records was small and the significance was not, because those were exactly the customers who would notice immediately. Decide who reads the failure list before the first run, or the hardest records quietly become the ones that do not arrive.",
    },
  ],

  learningPath: [
    {
      title: "Agree what comes across, with the business",
      body: "Which things, which records, how far back, which statuses. Work it out from what somebody would need to answer a real question about an old transaction, and get it signed by whoever owns the data.",
      effort: "2-3 days",
      outcome: "A defensible answer instead of a technical default of everything or nothing.",
    },
    {
      title: "Look at the old data properly",
      body: "Counts, how much is filled in overall and by year, what values are actually in the code fields, duplicates, how many of each thing per customer. Do this before committing to anything.",
      effort: "3-5 days",
      outcome: "A realistic plan, and usually two findings that change it.",
    },
    {
      title: "Match the code lists value by value",
      body: "Pull both lists in full. Match every value. Send everything with no equivalent to a business owner for a ruling.",
      effort: "1-2 weeks including waiting for answers",
      outcome: "The decisions that would otherwise land during the first practice run, under time pressure.",
    },
    {
      title: "Start cleaning up in the old system, early",
      body: "Anything that needs judgement gets fixed while the people who understand those records still use the old system daily.",
      effort: "Weeks, running alongside everything else",
      outcome: "Judgement calls made by the people qualified to make them.",
    },
    {
      title: "Agree failure handling and the checks before the first run",
      body: "Stop or log, who reviews, how quickly, deadline for clearing. Plus which totals have to match, by type, status, region and value, with an acceptable difference, signed off by the data owner.",
      effort: "Half a day",
      outcome: "The ability to tell whether a run worked, which you otherwise do not have.",
    },
    {
      title: "Do practice runs early and time them",
      body: "The first one much earlier than feels comfortable. Time every run against the changeover window you will actually have, and check the totals every time rather than only at the final rehearsal.",
      effort: "Several days per round",
      outcome: "Problems found while there is time, including whether it even fits in the weekend.",
    },
    {
      title: "Get the business to do real work on it",
      body: "After each practice run, twenty real cases handled normally in the new system by the people who will use it. Not a comparison exercise. Real work.",
      effort: "1 day per round",
      outcome: "The usability failures that counting can never find.",
    },
    {
      title: "Decide the three things people forget",
      body: "What happens to half-finished work, how you catch changes made between the main run and go-live, and the point after which you cannot go back.",
      effort: "1-2 days",
      outcome: "The decisions most often left until the changeover weekend itself.",
    },
  ],

  exercises: [
    {
      title: "Check a field by year",
      brief:
        "Take a field a migration plan depends on. Work out how much is filled in overall, then how much is filled in broken down by the year each record was created. Put the two side by side.",
      success:
        "You can say whether the field has been used consistently, and whether a rule depending on it will work for older records.",
      time: "1-2 hours",
    },
    {
      title: "Two code lists, side by side",
      brief:
        "Take a status or category list from two systems in your business. Pull both in full and match them value by value. Mark every value with no equivalent and count how many records sit behind each.",
      success:
        "You have a list of unmatched values in order of how many records they affect, ready to take to a business owner.",
      time: "2-3 hours",
    },
    {
      title: "Write the checks before the plan",
      brief:
        "For any move being considered, write down how you will check it worked first: which totals, at what level, how big a difference is acceptable, and who signs it off.",
      success:
        "Doing this turns up at least one vague bit in the scope, because you cannot define a total without knowing exactly which records are included.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Treating it as a technical job",
      why: "The hard parts are all business decisions: what comes, what things mean, what to do with values that have no equivalent, what needs cleaning. Left to a technical team they get answered by default rather than by anybody.",
      fix: "The BA owns scope, meaning and the queue of decisions. The engineers own the moving.",
    },
    {
      mistake: "Bringing all the history because it feels safer",
      why: "It multiplies the cost and effort, and it moves a decade of problems into a clean system where they immediately become the new system's reputation.",
      fix: "Work out how far back from a real question somebody has to be able to answer, and keep the rest somewhere searchable.",
    },
    {
      mistake: "Leaving the cleaning until after the move",
      why: "The people who could sort out an odd record are then busy learning a new system, so the oddity becomes permanent and undocumented.",
      fix: "Clean anything needing judgement in the old system, early, while it is still in daily use.",
    },
    {
      mistake: "Treating the code lists as a detail",
      why: "Values with no equivalent are business decisions, and they get discovered at the first practice run and then taken under pressure by whoever happens to be available.",
      fix: "Pull both lists on day one, match value by value, and send every gap to a named business owner.",
    },
    {
      mistake: "No plan for records that fail",
      why: "The run reports success while dropping the hardest records, which are usually the oldest and biggest accounts, and nobody notices until a customer does.",
      fix: "Decide stop or log, a named reviewer, a timescale and a clearing deadline before the first run.",
    },
    {
      mistake: "Agreeing the checks afterwards",
      why: "Once data has moved, a mistake and a legitimate change look identical, and the conversation cannot be settled.",
      fix: "Agree the totals, the levels and the acceptable difference with the data owner before anything moves.",
    },
    {
      mistake: "Counting records and never testing whether it is usable",
      why: "A move can balance perfectly and leave the business unable to work, because meaning does not show up in a count. Labels can match while the way people work does not.",
      fix: "After every practice run, get real users to do real work on twenty moved cases.",
    },
    {
      mistake: "Not timing the practice runs",
      why: "Finding out at the final rehearsal that a full run takes longer than the changeover weekend leaves you no options except a worse changeover.",
      fix: "Time every run at realistic volume and compare against the window from the very first round.",
    },
    {
      mistake: "Switching off the old system too early",
      why: "Questions keep coming for months and some can only be answered from the original data. Once it is gone that is permanent.",
      fix: "Keep read access or a searchable copy well past go-live. It is cheap next to needing it once.",
    },
  ],

  bestPractices: [
    "Treat scope, meaning and cleaning as business decisions with named owners.",
    "Look at the old data before committing to anything.",
    "Check how much is filled in by year, not just overall.",
    "Work out how far back to go from a real question somebody must answer.",
    "Clean anything needing judgement in the old system, early.",
    "Match code lists value by value with a business ruling on every gap.",
    "Say what happens to failing records and who reviews them.",
    "Agree the totals and acceptable difference before the first run.",
    "Do practice runs early, repeatedly, and time each one.",
    "Get the business doing real work on moved data after every practice run.",
    "Decide what happens to half-finished work and tell everyone before the weekend.",
    "Choose deliberately between freezing the old system and catching up changes.",
    "Define the point after which you cannot go back, and who decides.",
    "Keep the old system readable for longer than you expect to need it.",
  ],

  proTips: [
    "Ask the business which records they would notice were missing on the first morning. The answer is never a random sample. It is the biggest accounts, the open cases, the ones with something unusual about them. That list becomes what you check, and it is far more useful than a count of everything.",
    "Do the first practice run before the matching is finished, on purpose, with known gaps. Its job is to find out what you do not know, and a run that fails usefully in month two is worth more than a perfect one in month eight. Teams resist this because it feels like failing early, which is exactly what it is for.",
    "Keep a log of every decision you make about the data: which value maps to what, why, who decided, on what date. You will make hundreds of these. Six months later somebody will ask why a whole category of records looks the way it does, and without the log nobody will be able to answer.",
    "Count the records the business actually touches, not the records in the table. Operations teams often work with a small active slice of a huge history, and knowing that ratio changes the scope conversation completely, usually towards a smaller and safer move.",
  ],

  businessApplications: [
    "Replacing a system, where this is usually the biggest single risk in the whole programme.",
    "Mergers, where two businesses hold overlapping records under different rules.",
    "Bringing several systems together into one, where the code lists all conflict.",
    "Switching off an old system, where the question is what has to be kept and in what searchable form.",
    "Restructuring data for a regulator, where the totals have to be provable.",
    "Moving to the cloud, where the moving is easier and the can-people-work question is identical.",
  ],

  checklist: [
    "Scope agreed with the business data owner and signed.",
    "Old data examined: counts, how much is filled in, by year, values, duplicates, how many of each.",
    "How far back justified by a real question somebody has to answer.",
    "Cleaning started in the old system, with business owners for judgement calls.",
    "Code lists pulled from both sides and matched value by value.",
    "Every unmatched value ruled on by a named business owner.",
    "Failure handling written: stop or log, reviewer, timescale, deadline.",
    "Totals, levels and acceptable difference agreed before the first run.",
    "Practice runs scheduled early and timed against the changeover window.",
    "Business users doing real work on moved cases after each run.",
    "Half-finished work rule decided and communicated.",
    "Freeze or catch-up approach chosen deliberately.",
    "Point of no return defined with a named decision maker.",
    "Read access or searchable copy of the old system kept well past go-live.",
  ],

  faqs: [
    {
      q: "How much history should we bring across?",
      a: "Start from what somebody would need to answer a customer or regulator question about something old, and keep the rest somewhere searchable. Bringing everything is expensive and moves a decade of problems into a clean system.",
    },
    {
      q: "Clean the data before or after moving it?",
      a: "Before, wherever the fix needs business knowledge, because afterwards the people who understand those records are busy learning the new system. Mechanical reshaping can happen during the move. Judgement cannot.",
    },
    {
      q: "How many practice runs do we need?",
      a: "At least three, and the first much earlier than feels comfortable. Check the totals on every one and time every one. A single rehearsal shortly before the changeover tests whether you are ready rather than helping you get ready.",
    },
    {
      q: "Who says whether it worked?",
      a: "The business owner of the data, against the totals agreed in advance, and after their team has done real work on moved records. A technical sign-off confirms the data arrived, not that anyone can work with it.",
    },
    {
      q: "What do we do about records that will not go?",
      a: "Decide before the first run: stop or log, who reviews, by when. Then track the number of failures as a proper measure through every practice round. Failures concentrated among the oldest or biggest records are a warning, not a rounding error.",
    },
    {
      q: "When can we switch off the old system?",
      a: "Later than the plan usually says. Keep read access or a searchable copy for months after go-live, because questions keep arriving and some can only be answered from the original data.",
    },
  ],

  tools: [
    { name: "A few checks against the old data", what: "Counts, how much is filled in by year, what values exist, duplicates. Run before committing to anything.", cost: "Free" },
    { name: "A mapping sheet with no blank cells", what: "Where each field comes from, what changes on the way, what to do when empty, what to do with unknown values, defaults, and who confirmed the meaning.", cost: "Free" },
    { name: "A decision log", what: "Every ruling: which value goes where, why, who decided, when. The document somebody will need in six months.", cost: "Free" },
    { name: "An agreed set of totals", what: "Counts by type, status, region and value, with an acceptable difference and a named business signatory.", cost: "Free" },
  ],

  resources: [
    { title: "FCA: TSB fined £48.65m for operational resilience failings", kind: "Docs", note: "Primary source, December 2022. The clearest public case of data arriving correctly while the business could not work.", url: "https://www.fca.org.uk/news/press-releases/tsb-fined-48m-operational-resilience-failings" },
  ],

  internalLinks: [
    { slug: "data-requirements-for-analysts", anchor: "looking at the data and matching the fields", context: "Foundation" },
    { slug: "delivering-change-into-a-business", anchor: "the changeover this sits inside", context: "Changeover" },
    { slug: "replacing-a-legacy-system", anchor: "the wider replacement project", context: "Context" },
  ],

  relatedGuides: ["data-requirements-for-analysts", "delivering-change-into-a-business", "replacing-a-legacy-system"],

  conclusion: [
    "Ask the business which records they would notice were missing on the first Monday after go-live. That list is never a random sample, and it becomes exactly what you check. It is worth more than any count of everything you could produce instead.",
  ],
};

export default guide;
