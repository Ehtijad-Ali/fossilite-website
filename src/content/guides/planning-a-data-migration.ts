import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "planning-a-data-migration",
  seoTitle: "Planning a Data Migration That Does Not Lose Anything",
  metaDescription:
    "Scope, cleansing, trial loads, reject handling and reconciliation, plus the harder question of whether the business can operate the morning after.",
  title: "Planning a Data Migration",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 18,

  intro: [
    "The dangerous thing about data migration is that it can succeed completely and still ruin your launch. Every record moves, every reconciliation balances, and on Monday morning the business cannot work, because the data is technically correct and operationally unusable: statuses that mean something different, references the team does not recognise, history that stops at a point nobody agreed.",
    "That is the framing worth holding onto. A migration is not a data transfer, it is the act of making an operation able to run on a different platform. The transfer is the easy half. The half that goes wrong is the decisions: what comes, what does not, what gets cleaned, what happens to the records that will not fit, and how anybody proves afterwards that nothing was lost.",
    "This guide is the plan a Business Analyst should own. Scope decisions with the business, profiling before promising, cleansing where it needs judgement, trial loads run early and often, reject handling agreed in advance, and reconciliation defined before the first load rather than argued about after it.",
  ],

  whyItMatters: [
    "Migration errors are permanent in a way most defects are not. A mapping mistake produces incorrect records that look plausible, and once the old system is decommissioned there may be no way to identify which records are affected or what they should have said.",
    "It is also where project time is most consistently underestimated. The transformation logic is a fraction of the effort. Deciding what a status code means, getting a business owner to rule on unmappable values, and cleansing records that need human judgement all take elapsed weeks that nobody planned for.",
    "And it is the part of a programme where the analyst's contribution is least substitutable. Engineers can move data. Only somebody who understands the operation can say whether the result is something the business can work with on the first morning.",
  ],

  coreConcepts: [
    {
      term: "Migration scope is a business decision, not a technical default",
      explain:
        "Which entities, which records within them, how much history, and which statuses. Bringing everything is expensive and usually wrong. Bringing too little breaks reporting comparisons and customer conversations.",
      detail:
        "Derive it from a question: what would somebody need to answer a customer or regulator query about a transaction from three years ago? That produces a defensible scope faster than any general principle about retention.",
    },
    {
      term: "Profile before you promise anything",
      explain:
        "Row counts, completeness per field, completeness by year of record creation, distinct values in every code field, duplicates, and cardinality.",
      detail:
        "Every migration plan is a set of promises about the state of the source data. Profiling is how you find out whether they can be kept, and the results routinely change the plan rather than confirming it.",
    },
    {
      term: "Cleanse before, transform during, and know the difference",
      explain:
        "Anything requiring business knowledge should be fixed in the source before migration, while the people who understand those records are still using the old system daily.",
      detail:
        "Structural transformations belong in the load. Judgement calls do not. After go-live the people who could resolve an ambiguous record are busy learning a new system, and the ambiguity becomes permanent.",
    },
    {
      term: "Reference data is where migrations actually fail",
      explain:
        "Status codes, product categories, reason codes, country lists. The two systems will have overlapping but non-identical lists and the mapping between them is a business decision.",
      detail:
        "Extract both lists in full on day one and lay them side by side. Every source value with no target equivalent needs a ruling from somebody who understands what it means operationally, not a technical default.",
    },
    {
      term: "Decide what happens to rejects before the first load",
      explain:
        "Some records will fail. Does the load stop, or continue and log? Who reviews the rejects, on what timescale, and what is the deadline for clearing them before cutover?",
      detail:
        "Unspecified reject handling produces the worst available outcome: a load that reports success while silently dropping the records that were hardest to handle, which are disproportionately the largest and oldest accounts.",
    },
    {
      term: "Reconciliation is agreed before the load, never after",
      explain:
        "Record counts by entity and status, financial control totals, counts by region or product, and a sample of individual records compared field by field.",
      detail:
        "After data has moved, nobody can distinguish a discrepancy from a legitimate transformation. Agreeing the totals and the tolerance with the business data owner in advance is what makes the result checkable at all.",
    },
    {
      term: "Trial loads early, repeatedly, and into a realistic environment",
      explain:
        "The first trial should happen far earlier than feels comfortable, with whatever data is available, because its purpose is to find problems rather than to demonstrate readiness.",
      detail:
        "Each trial should be timed. Cutover windows are finite, and discovering that a full load takes longer than the available weekend is a problem you want in month two rather than in the final rehearsal.",
    },
    {
      term: "Migrate a business scenario, not just a table",
      explain:
        "After a trial load, take twenty real cases and ask the business to complete normal work on them in the new system. Not a data comparison, actual work.",
      detail:
        "This is what catches the failure mode where everything reconciled and nothing is usable: the status that maps correctly but means something different, the missing note field the team relied on, the reference nobody recognises.",
    },
    {
      term: "Decide the treatment of in-flight work",
      explain:
        "At cutover, some cases are part-way through. Do they complete under the old rules, migrate mid-flight, or get completed manually?",
      detail:
        "Every option is defensible and the decision must be made and communicated before the weekend. It is the most commonly forgotten element of a migration plan and it produces the most confusion on the first morning.",
    },
    {
      term: "Plan for a delta load",
      explain:
        "Between the main load and go-live, the old system keeps changing. Something has to capture and apply those changes, or freeze the source.",
      detail:
        "Both options have business consequences. A freeze means the operation stops for a period. A delta load means additional complexity and its own reconciliation. Choose deliberately rather than discovering the need late.",
    },
    {
      term: "Know what rollback actually means",
      explain:
        "If the load fails or the reconciliation does not balance, can you return to the old system, and what happens to anything already done in the new one?",
      detail:
        "Rollback is frequently assumed and rarely designed. Establish the point of no return explicitly, and make sure the decision to cross it is a named person's with a stated criterion.",
    },
    {
      term: "Keep the source readable for longer than you expect",
      explain:
        "Retain read access to the old system, or a queryable archive, well past go-live. Questions arrive for months and some of them can only be answered from the original.",
      detail:
        "Decommissioning too early is a decision that cannot be undone, and the cost of keeping a read-only copy for another six months is almost always smaller than the cost of not having it once.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The data migrated successfully and the service did not work.",
      walkthrough:
        "In April 2018 TSB migrated customer and corporate data to a new IT platform. The data transfer itself succeeded. The platform then experienced immediate technical failures, disrupting branch, telephone, online and mobile banking. All of the bank's branches and a significant portion of its 5.2 million customers were affected initially, and disruption continued for some customers until December 2018, around eight months, before normal operations resumed. TSB paid £32.7 million in compensation to customers who experienced harm.",
      result:
        "In December 2022 the FCA and PRA imposed a combined fine of £48.65 million, the FCA £29.75 million and the PRA £18.9 million, both after a 30% discount for cooperation. The regulators found that TSB failed to organise and control the IT migration programme adequately and did not properly manage operational risks relating to a critical third-party supplier. The lesson that transfers to any migration plan is the separation in the first sentence: data moving correctly and a business being able to operate are two different tests, and only the second one matters to customers.",
      source: {
        label: "FCA (December 2022): TSB fined £48.65m for operational resilience failings",
        url: "https://www.fca.org.uk/news/press-releases/tsb-fined-48m-operational-resilience-failings",
      },
    },
    {
      kind: "illustration",
      scenario: "The status that mapped correctly and meant something else.",
      walkthrough:
        "A migration maps case statuses between two systems. Every value has a target equivalent, the mapping is reviewed and approved, and the reconciliation balances perfectly by status. After the trial load, a BA asks three caseworkers to process twenty real cases in the new system. Within an hour they report that cases in one status are appearing in the wrong work queue, because the target status with the same name is used at a different point in that system's workflow.",
      result:
        "The mapping was correct at the level of the label and wrong at the level of meaning. No amount of count reconciliation would have found it. Asking the business to do real work on migrated records after every trial load is the only check that tests meaning rather than structure.",
    },
    {
      kind: "illustration",
      scenario: "The rejects nobody had agreed to review.",
      walkthrough:
        "A trial load reports success with a small number of rejected records logged. Nobody has been assigned to review the reject file, so it is not examined until the second trial, several weeks later. Inspection shows the rejects are concentrated among the oldest and largest accounts, failing on a validation rule that did not exist in the source system.",
      result:
        "The volume was small and the significance was not, because the affected accounts were the ones that would notice immediately. Reject handling has to be specified before the first load, with a named reviewer, a timescale and a deadline for clearing, or the hardest records quietly become the ones that do not arrive.",
    },
  ],

  learningPath: [
    {
      title: "Agree migration scope with the business",
      body: "Which entities, which records, how much history, which statuses. Derive it from what somebody would need to answer a real query about an old transaction, and get it signed by the data owner.",
      effort: "2-3 days",
      outcome: "A defensible scope rather than a technical default of everything or nothing.",
    },
    {
      title: "Profile the source thoroughly",
      body: "Counts, completeness overall and by creation year, distinct values in every code field, duplicates, cardinality. Do this before making any commitments about what is possible.",
      effort: "3-5 days",
      outcome: "A realistic plan, and usually two findings that change it.",
    },
    {
      title: "Map reference data value by value",
      body: "Extract both code lists in full. Map each value. Route everything with no target equivalent to a business owner for a ruling.",
      effort: "1-2 weeks including waiting for decisions",
      outcome: "The decisions that would otherwise surface during the first trial load, under time pressure.",
    },
    {
      title: "Start cleansing in the source, early",
      body: "Anything needing business judgement gets fixed while the people who understand those records are still using the old system every day.",
      effort: "Weeks, running in parallel",
      outcome: "Judgement calls resolved by the people qualified to make them.",
    },
    {
      title: "Agree reject handling and reconciliation before the first load",
      body: "Stop or log, named reviewer, timescale, clearing deadline. Control totals by entity, status, region and value, with a tolerance, signed off by the data owner.",
      effort: "Half a day",
      outcome: "The ability to tell whether a load worked, which is otherwise unavailable.",
    },
    {
      title: "Run trial loads early and time them",
      body: "The first far earlier than feels comfortable. Time every run against the available cutover window, and reconcile every run properly rather than only the final rehearsal.",
      effort: "Several days per cycle",
      outcome: "Problems found while there is time, including whether the load fits in the window.",
    },
    {
      title: "Have the business do real work on migrated data",
      body: "After each trial, twenty real cases processed normally in the new system by the people who will use it. Not a data comparison, actual work.",
      effort: "1 day per cycle",
      outcome: "The usability failures that reconciliation is structurally incapable of finding.",
    },
    {
      title: "Decide in-flight treatment, delta approach and rollback",
      body: "What happens to part-completed work, how changes between load and go-live are captured, and what the point of no return is.",
      effort: "1-2 days",
      outcome: "The three decisions most often left until the cutover weekend.",
    },
  ],

  exercises: [
    {
      title: "Profile by creation year",
      brief:
        "Take a field that a migration plan depends on and measure completeness overall, then broken down by year of record creation. Plot the two.",
      success:
        "You can say whether the field's population has changed over time, and whether a rule depending on it will work for older records.",
      time: "1-2 hours",
    },
    {
      title: "Side-by-side reference lists",
      brief:
        "Take a status or category list from two systems in your organisation. Extract both in full and map value by value. Mark every source value with no target equivalent and count the records behind each.",
      success:
        "You have a list of unmappable values ranked by record volume, ready to take to a business owner for a ruling.",
      time: "2-3 hours",
    },
    {
      title: "Write the reconciliation before the plan",
      brief:
        "For any migration under consideration, write the reconciliation definition first: which totals, at what level, with what tolerance, signed off by whom.",
      success:
        "The exercise exposes at least one scope ambiguity, because you cannot define a total without knowing exactly which records are in scope.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Treating migration as a technical workstream",
      why: "The hard parts are business decisions: scope, meaning, unmappable values, cleansing judgement. Left to a technical team they get resolved by default rather than by anybody.",
      fix: "The BA owns scope, meaning and the decision queue. The engineers own the transfer.",
    },
    {
      mistake: "Bringing all history because it feels safer",
      why: "It multiplies cost and effort, and it migrates a decade of quality problems into a clean system where they immediately become the new system's reputation.",
      fix: "Derive scope from a real question somebody would need to answer, and archive the rest in a queryable form.",
    },
    {
      mistake: "Leaving cleansing until after the load",
      why: "The people who could resolve an ambiguous record are then busy learning a new system, so the ambiguity becomes permanent and undocumented.",
      fix: "Cleanse anything requiring judgement in the source, early, while the old system is still in daily use.",
    },
    {
      mistake: "Treating reference data as a technical detail",
      why: "Unmappable code values are business decisions that get discovered at the first trial load and then taken under time pressure by whoever is available.",
      fix: "Extract both lists on day one, map value by value, and route every gap to a named business owner.",
    },
    {
      mistake: "No agreed reject handling",
      why: "The load reports success while dropping the hardest records, which are disproportionately the oldest and largest accounts, and nobody notices until a customer does.",
      fix: "Specify stop-or-log, a named reviewer, a timescale and a clearing deadline before the first load runs.",
    },
    {
      mistake: "Agreeing reconciliation after the load",
      why: "Once data has moved, a discrepancy and a legitimate transformation look identical, and the discussion becomes unresolvable.",
      fix: "Agree control totals, levels and tolerance with the data owner before anything is loaded.",
    },
    {
      mistake: "Reconciling counts and never testing usability",
      why: "A migration can balance perfectly and leave the business unable to work, because meaning does not reconcile. Labels can map while workflows do not.",
      fix: "After every trial, have real users do real work on twenty migrated cases.",
    },
    {
      mistake: "Not timing the trial loads",
      why: "Discovering in the final rehearsal that a full load takes longer than the cutover window leaves no options except a worse cutover.",
      fix: "Time every trial run at realistic volume and compare against the window from the first cycle onward.",
    },
    {
      mistake: "Decommissioning the source too early",
      why: "Questions arrive for months and some can only be answered from the original data. Once it is gone, that is permanent.",
      fix: "Keep read access or a queryable archive for well past go-live. It is cheap relative to needing it once.",
    },
  ],

  bestPractices: [
    "Treat scope, meaning and cleansing as business decisions with named owners.",
    "Profile the source before making any commitment about what is possible.",
    "Check completeness by record creation year, not just overall.",
    "Derive history scope from a real question somebody must be able to answer.",
    "Cleanse judgement-dependent data in the source, early.",
    "Map reference data value by value with a business ruling on every gap.",
    "Specify reject handling with a named reviewer and a clearing deadline.",
    "Agree reconciliation totals and tolerance before the first load.",
    "Run trial loads early, repeatedly, and time each one.",
    "Have the business do real work on migrated data after every trial.",
    "Decide in-flight treatment and communicate it before cutover.",
    "Choose deliberately between a source freeze and a delta load.",
    "Define the point of no return and who decides to cross it.",
    "Keep the source readable for longer than you expect to need it.",
  ],

  proTips: [
    "Ask the business which records they would notice immediately if they were missing on the first morning. The answer is never a random sample: it is the largest accounts, the open cases, the ones with something unusual about them. That list becomes your targeted reconciliation, and it is far more useful than a count of everything.",
    "Run the first trial load before the mapping is finished, deliberately and with known gaps. Its purpose is to find out what you do not know, and a load that fails informatively in month two is worth more than a perfect one in month eight. Teams resist this because it feels like failing early, which is exactly what it is for.",
    "Keep a decision log specifically for migration rulings: which value maps to what, why, who decided, on what date. During a migration you will make hundreds of these, and six months later somebody will ask why a category of records looks the way it does. Without the log, nobody will be able to answer.",
    "Count the records the business actually touches rather than the records in the table. Operations teams frequently work with a small active subset of a very large history, and knowing that ratio changes the scope conversation completely, usually in the direction of a smaller and safer migration.",
  ],

  businessApplications: [
    "System replacement, where migration is typically the largest single risk in the programme.",
    "Mergers and acquisitions, where two organisations hold overlapping records under different definitions.",
    "Platform consolidation, where several sources migrate into one target with conflicting reference data.",
    "Decommissioning, where the question is what must be retained and in what queryable form.",
    "Regulatory change requiring restructured data, where reconciliation is auditable.",
    "Cloud migration, where the transfer is simpler and the operational readiness question is identical.",
  ],

  checklist: [
    "Migration scope agreed with the business data owner and signed.",
    "Source profiled: counts, completeness, completeness by year, distinct values, duplicates, cardinality.",
    "History scope justified by a real question somebody must answer.",
    "Cleansing started in the source, with business owners for judgement calls.",
    "Reference data extracted from both sides and mapped value by value.",
    "Every unmappable value ruled on by a named business owner.",
    "Reject handling specified: stop or log, reviewer, timescale, clearing deadline.",
    "Reconciliation totals, levels and tolerance agreed before the first load.",
    "Trial loads scheduled early and timed against the cutover window.",
    "Business users doing real work on migrated cases after each trial.",
    "In-flight work treatment decided and communicated.",
    "Freeze or delta load approach chosen deliberately.",
    "Point of no return defined with a named decision maker.",
    "Source read access or archive retained well past go-live.",
  ],

  faqs: [
    {
      q: "How much history should we migrate?",
      a: "Start from what somebody would need to answer a customer or regulator query about an old transaction, and archive the rest in a queryable form. Bringing everything is expensive and migrates a decade of quality problems into a clean system.",
    },
    {
      q: "Should we clean the data before or after migrating?",
      a: "Before, wherever the fix requires business knowledge, because after go-live the people who understand those records are busy learning the new system. Structural transformation can happen during the load. Judgement cannot.",
    },
    {
      q: "How many trial loads do we need?",
      a: "At least three, and the first much earlier than feels comfortable. Each should be reconciled properly and timed. A single rehearsal shortly before cutover tests whether you are ready rather than helping you become ready.",
    },
    {
      q: "Who signs off that a migration succeeded?",
      a: "The business owner of the data, against the reconciliation agreed in advance, and after their team has done real work on migrated records. A technical sign-off confirms the transfer, not that the business can operate.",
    },
    {
      q: "What do we do about records that will not migrate?",
      a: "Decide before the first load: stop or log, who reviews, by when. Then track the reject count as a formal measure through every trial. Rejects concentrated in the oldest or largest records are a warning rather than a rounding error.",
    },
    {
      q: "When can we decommission the old system?",
      a: "Later than the plan usually says. Keep read access or a queryable archive for months after go-live, because questions arrive for a long time and some can only be answered from the original data.",
    },
  ],

  tools: [
    { name: "Profiling queries against the source", what: "Counts, completeness by year, distinct values, duplicates, cardinality. Run before any commitment about what is possible.", cost: "Free" },
    { name: "A source-to-target mapping with no blank cells", what: "Transformation, null handling, unmapped value handling, default, and who confirmed the business meaning.", cost: "Free" },
    { name: "A migration decision log", what: "Every ruling: which value maps where, why, who decided, when. The document somebody will need in six months.", cost: "Free" },
    { name: "An agreed reconciliation pack", what: "Control totals by entity, status, region and value, with a tolerance and a named business signatory.", cost: "Free" },
  ],

  resources: [
    { title: "FCA: TSB fined £48.65m for operational resilience failings", kind: "Docs", note: "Primary source, December 2022. The clearest public case of data migrating successfully while the business could not operate.", url: "https://www.fca.org.uk/news/press-releases/tsb-fined-48m-operational-resilience-failings" },
  ],

  internalLinks: [
    { slug: "data-requirements-for-analysts", anchor: "profiling and mapping the source", context: "Foundation" },
    { slug: "delivering-change-into-a-business", anchor: "the cutover this sits inside", context: "Cutover" },
    { slug: "replacing-a-legacy-system", anchor: "the wider replacement programme", context: "Context" },
  ],

  relatedGuides: ["data-requirements-for-analysts", "delivering-change-into-a-business", "replacing-a-legacy-system"],

  conclusion: [
    "Ask the business which records they would notice were missing on the first morning after go-live. That list, which is never a random sample, becomes your targeted reconciliation, and it is worth more than any count of everything you could produce instead.",
  ],
};

export default guide;
