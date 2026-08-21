import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "data-requirements-for-analysts",
  seoTitle: "Data Requirements: The Business Systems Analyst's Job",
  metaDescription:
    "Profiling the data before you promise anything, agreeing a source of truth, writing a source-to-target mapping, and specifying what happens to the records that do not fit.",
  title: "Data Requirements for Analysts",
  keywords: [
    "data requirements",
    "source to target mapping",
    "data profiling",
    "business systems analyst data",
    "data quality dimensions",
    "data migration requirements",
  ],
  category: "requirements",
  level: "Advanced",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 19,

  intro: [
    "The fastest way to derail an integration or a migration is to design it from the data model rather than from the data. The model tells you what the system is capable of holding. The data tells you what fifteen years of people under pressure actually put in it, and those are different documents.",
    "This is the part of the job that most clearly separates a Business Systems Analyst from a Business Analyst, and it is the part that job specs describe with the phrase strong data skills, which tells you nothing. In practice it means four things: you can profile a table before you promise anything about it, you can establish which system owns a fact, you can write a mapping that an engineer can implement without guessing, and you can specify what happens to the rows that will not fit.",
    "Everything here assumes you can read data yourself. If you cannot, the single highest-return thing you can do for your career is learn enough SQL to answer your own questions, which is a fortnight of evenings rather than a qualification.",
  ],

  whyItMatters: [
    "Data problems are discovered late and cost disproportionately. A rule that turns out to be unimplementable because the field it depends on is only populated for half the records is a discovery you want in week two, not in user acceptance testing when the design is fixed and the date is public.",
    "The business consequences also outlast the project. A migration that silently drops records, or that maps two different things onto one code, creates errors that surface for years afterwards in reports nobody connects back to the change.",
    "And this is where the BA can add value nobody else will. Developers profile data to see whether their code will run. Nobody else profiles it to ask whether it means what the business thinks it means, and that question is where the real findings are.",
  ],

  coreConcepts: [
    {
      term: "Profile before you promise",
      explain:
        "Before agreeing any requirement that depends on a field, find out how populated it is, how many distinct values it holds, what the outliers look like, and when it was last written to.",
      detail:
        "Every requirement of the form the system will use X to determine Y is a promise about the state of X. Profiling is how you find out whether the promise can be kept, and it takes minutes when you have query access.",
    },
    {
      term: "The six questions to ask about any field",
      explain:
        "What does it mean in business terms, who populates it, when, is it mandatory in practice or only in theory, what are the permitted values, and what does an empty value signify?",
      detail:
        "The last one is the most neglected. An empty field can mean not applicable, not known, not yet collected, or deliberately withheld, and those need different treatment downstream. If nobody can tell you which, that is a finding.",
    },
    {
      term: "One fact, one source of truth",
      explain:
        "For every important business fact, exactly one system should be authoritative and the others should hold copies with a known refresh path.",
      detail:
        "When two systems both claim ownership, you get reconciliation work forever. The requirement is not a technical preference: it is a business decision about who is accountable for the fact being correct, and it needs a name attached.",
    },
    {
      term: "The same word in two systems is usually two things",
      explain:
        "Customer in the billing system may mean a legal entity that pays. Customer in the CRM may mean a person you talk to. Both are correct locally and they do not map one to one.",
      detail:
        "Whenever you map a field from one system to another, ask both owners to define the term independently. The gaps found this way are the ones that would otherwise appear as unexplained record count differences after go-live.",
    },
    {
      term: "Cardinality decides the design",
      explain:
        "Does one customer have one address or many? Can an order belong to two accounts? Is a product code reused after retirement? These answers determine the structure and they are usually assumed rather than established.",
      detail:
        "Ask for the maximum observed in the real data rather than the theoretical answer. People say one and the data says one hundred and forty-three, and the exception is always some large account that everybody handles specially.",
    },
    {
      term: "Six quality dimensions, used as a checklist",
      explain:
        "Completeness (is it there), validity (does it match the permitted format), accuracy (does it match reality), consistency (do related fields agree), uniqueness (are there duplicates), and timeliness (how stale is it).",
      detail:
        "Measure each one and state a threshold in the requirement. Ninety-eight per cent complete is a fact. Good enough is a future argument, and you will be in the room for it.",
    },
    {
      term: "A source-to-target mapping is a specification, not a spreadsheet chore",
      explain:
        "Per target field: which source field, what transformation, what happens when the source is null, what happens when the value is not in the target's permitted list, and what the default is.",
      detail:
        "The four columns people skip are transformation, null handling, unmapped value handling and default. Those four are where every migration defect I have ever investigated came from.",
    },
    {
      term: "Reference data is where migrations die",
      explain:
        "Status codes, product categories, country lists, reason codes. Two systems will have overlapping but non-identical lists, and the mapping between them is a business decision.",
      detail:
        "Ask for the full list from both sides on day one and lay them side by side. Codes in the source that have no target equivalent need a decision from somebody who understands the business meaning, not a technical default.",
    },
    {
      term: "Specify the exception handling for records that will not migrate",
      explain:
        "Some rows will fail. Say in advance whether the load stops, whether the row is skipped and logged, who reviews the rejects, and how long they have before go-live.",
      detail:
        "Unspecified reject handling produces the worst possible outcome: a migration that reports success while quietly dropping the records that were hardest to handle, which are usually the most valuable customers.",
    },
    {
      term: "Reconciliation is a requirement, and it needs to be agreed before the load",
      explain:
        "What counts will be compared, what control totals must match, and what tolerance is acceptable. Record count, sum of values, count by status, count by region.",
      detail:
        "Agree the reconciliation with the business owner before migration rather than after, because after a load nobody can tell the difference between a discrepancy and a correction.",
    },
    {
      term: "History and retention are business questions",
      explain:
        "How far back does data come, what happens to closed records, what must remain accessible for audit or regulation, and for how long.",
      detail:
        "Bringing all history is expensive and often wrong. Bringing none breaks reporting comparisons. Ask what somebody would need to answer a query from a customer or a regulator about a transaction from four years ago.",
    },
    {
      term: "Learn enough SQL to answer your own questions",
      explain:
        "Counts, group by, joins, null checks, distinct values, minimum and maximum. That is roughly the whole of what data profiling requires.",
      detail:
        "The difference between checking a claim yourself in ten minutes and waiting three days for someone to run a query changes what analysis you are willing to do, which changes the quality of everything you produce.",
    },
  ],

  codeExamples: [
    {
      title: "The profiling queries to run before agreeing anything",
      language: "sql",
      intro:
        "Standard SQL that runs on most relational databases. Run these against any table before you write a requirement that depends on it. The whole set takes a few minutes and it has saved me from promising things that were not possible more times than I can count.",
      code: `-- 1. Size and date range. Is this the whole population or a subset?
SELECT COUNT(*)              AS row_count,
       MIN(created_at)       AS earliest,
       MAX(created_at)       AS latest
FROM   customer_order;

-- 2. Completeness per field. The columns you plan to rely on are the
--    ones to check. "Mandatory" in the model is not the same as
--    populated in the data.
SELECT COUNT(*)                                            AS rows_total,
       COUNT(delivery_date)                                AS delivery_date_present,
       COUNT(*) - COUNT(delivery_date)                     AS delivery_date_null,
       ROUND(100.0 * COUNT(delivery_date) / COUNT(*), 2)   AS delivery_date_pct,
       COUNT(NULLIF(TRIM(customer_reference), ''))         AS customer_ref_present
FROM   customer_order;

-- 3. Distinct values in anything that looks like a code or status.
--    If the list is longer than the documented one, find out why.
SELECT order_status,
       COUNT(*)                                       AS rows,
       ROUND(100.0 * COUNT(*) / SUM(COUNT(*)) OVER (), 2) AS pct
FROM   customer_order
GROUP  BY order_status
ORDER  BY rows DESC;

-- 4. Cardinality. People say one address per customer. Check.
SELECT addresses_per_customer,
       COUNT(*) AS customers
FROM  (SELECT customer_id,
              COUNT(*) AS addresses_per_customer
       FROM   customer_address
       GROUP  BY customer_id) t
GROUP  BY addresses_per_customer
ORDER  BY addresses_per_customer DESC;

-- 5. Uniqueness of anything treated as a key by the business.
SELECT customer_reference,
       COUNT(*) AS occurrences
FROM   customer_order
GROUP  BY customer_reference
HAVING COUNT(*) > 1
ORDER  BY occurrences DESC;

-- 6. Consistency between fields that should agree.
SELECT COUNT(*) AS dispatched_without_dispatch_date
FROM   customer_order
WHERE  order_status = 'dispatched'
AND    dispatched_at IS NULL;

-- 7. Timeliness. A field that stopped being populated two years ago
--    is a field somebody stopped using.
SELECT EXTRACT(YEAR FROM created_at) AS created_year,
       COUNT(*)                      AS rows,
       COUNT(delivery_date)          AS delivery_date_present
FROM   customer_order
GROUP  BY EXTRACT(YEAR FROM created_at)
ORDER  BY created_year;`,
      note:
        "Query seven is the one people skip and the one that most often changes a design. A field that is ninety per cent populated overall can be entirely unpopulated since a system change three years ago, which means any rule depending on it will work perfectly in testing against historical data and fail on everything new.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A silent conversion that survived peer review.",
      walkthrough:
        "Ziemann, Eren and El-Osta examined thousands of genomics papers and the gene lists published alongside them. Spreadsheet software had silently converted certain gene symbols into dates. No warning appeared, the converted values looked entirely normal, and around a fifth of the papers examined were affected. All of it had passed peer review.",
      result:
        "For data requirements the lesson is precise: a value that looks plausible is not a validated value, and tools apply defaults that nobody asked for. This is why profiling asks what the distinct values actually are rather than whether the field looks populated, and why any migration specification has to state what a valid value is rather than assuming the source held one.",
      source: {
        label: "Ziemann, Eren and El-Osta (2016). Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "illustration",
      scenario: "The field that was populated and meaningless.",
      walkthrough:
        "A requirement depends on a customer segment field, which the model marks as mandatory and which is populated on every record. Profiling the distinct values shows that a large majority carry the same code, one that turns out to be the default applied when the field was introduced. Splitting by creation year shows that meaningful values only appear for records created in a two-year window, after which a system change stopped prompting for it.",
      result:
        "The requirement was not implementable as written. Because this was found in week two rather than in acceptance testing, the team had time to decide between deriving the segment from purchasing behaviour and asking the sales team to populate it for the accounts that mattered. Both were viable. Neither would have been viable four months later.",
    },
    {
      kind: "illustration",
      scenario: "Two systems, one word, different customers.",
      walkthrough:
        "A migration maps customer records from a legacy billing system into a new platform. Record counts differ by a noticeable margin and nobody can explain it. Asking both system owners to define customer independently resolves it in one meeting: billing creates a record per paying entity, and where a group of companies pays centrally there is one billing customer for several trading businesses. The CRM has one record per trading business.",
      result:
        "The mapping needed a rule about group structures that nobody had specified, because both teams had used the same word for years and neither had reason to check. The general practice worth taking from this is simple and rarely done: before mapping any entity, have both owners write their definition down separately, and compare the two sentences.",
    },
  ],

  learningPath: [
    {
      title: "Get read access and profile the main entity",
      body: "Row counts, date ranges, completeness on the fields you care about, distinct values on every code field. Do this before any requirements workshop, so you arrive knowing what the data supports.",
      effort: "Half a day once access exists",
      outcome: "A profile that makes several proposed requirements obviously feasible or obviously not.",
    },
    {
      title: "Establish the source of truth for each key fact",
      body: "List the facts that matter (who the customer is, what they owe, what has been delivered) and name the authoritative system and the accountable person for each.",
      effort: "1 day",
      outcome: "The map that determines every integration direction and every reconciliation you will later need.",
    },
    {
      title: "Have both sides define the shared terms independently",
      body: "For each entity you will map, ask each system owner to write the definition in one sentence without conferring. Compare. Follow every difference to a rule.",
      effort: "Half a day",
      outcome: "The mismatches that would otherwise appear as unexplained record count differences.",
    },
    {
      title: "Build the source-to-target mapping",
      body: "Target field, source field, transformation, null handling, unmapped value handling, default, and a note on who confirmed the business meaning. One row per target field, no exceptions.",
      effort: "2-5 days depending on scope",
      outcome: "A specification an engineer can implement without guessing, and a list of decisions the business still owes you.",
    },
    {
      title: "Lay the reference data lists side by side",
      body: "Every code list in both systems. Map value by value. Anything in the source with no target equivalent goes to the business for a decision, not to a technical default.",
      effort: "1-2 days",
      outcome: "The part of the migration that would otherwise be discovered during the first trial load.",
    },
    {
      title: "Agree reject handling and reconciliation before any load",
      body: "What happens to failing rows, who reviews them, what totals must match, and what tolerance is acceptable. Signed off by the business owner of the data.",
      effort: "Half a day",
      outcome: "The ability to tell, after the load, whether it worked. Without this nobody can.",
    },
  ],

  exercises: [
    {
      title: "Profile a table you are relying on",
      brief:
        "Take any field a current requirement depends on. Establish completeness overall, completeness by year of record creation, distinct value counts, and the top ten values by frequency. Write one paragraph on whether the requirement is safe.",
      success:
        "You can state a percentage rather than an impression, and you know whether the field's population has changed over time.",
      time: "1-2 hours",
    },
    {
      title: "The independent definition test",
      brief:
        "Pick a term used by two teams in your organisation: customer, order, active, complete, closed. Ask one person from each team to write the definition in a single sentence without seeing the other's answer.",
      success:
        "You can state precisely where the two definitions diverge and name at least one case that would be counted differently by each.",
      time: "1 hour",
    },
    {
      title: "Reference data side by side",
      brief:
        "Take any two systems in your organisation that both hold a status or category list for the same thing. Extract both lists in full and lay them side by side. Mark every value with no counterpart.",
      success:
        "You have a count of unmappable values and at least one that requires a business decision rather than a technical one.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Designing from the data model instead of the data",
      why: "The model says what could be stored. The data says what fifteen years of real use produced. Every requirement built on the model alone is a promise about a state of affairs nobody has checked.",
      fix: "Profile first. Row counts, completeness, distinct values and completeness over time, before agreeing anything that depends on a field.",
    },
    {
      mistake: "Assuming mandatory means populated",
      why: "Fields become mandatory at some point in a system's life, and everything before that date is empty or holds a default that was applied in bulk.",
      fix: "Check completeness broken down by record creation year. It is one extra query and it changes designs.",
    },
    {
      mistake: "Mapping fields without confirming meaning",
      why: "Two systems using the same word for different concepts is the norm rather than the exception, and a field-level mapping hides it perfectly.",
      fix: "Have both owners define each shared term independently, in writing, before the mapping is built.",
    },
    {
      mistake: "Leaving null handling and defaults to the engineer",
      why: "They will choose something sensible for the code. Whether an unknown delivery date means today, blank or reject is a business decision with operational consequences.",
      fix: "Make transformation, null handling, unmapped value handling and default mandatory columns in the mapping. No blank cells.",
    },
    {
      mistake: "Treating reference data as a technical detail",
      why: "Code list mismatches are discovered at the first trial load, which is late, and the decisions they require are business decisions that then get taken under time pressure.",
      fix: "Extract both lists in full on day one and map them value by value with the business owner.",
    },
    {
      mistake: "No agreed reject handling",
      why: "The load reports success while dropping the hardest records, which are usually the largest or oldest accounts. Nobody notices until a customer does.",
      fix: "Specify in advance whether failures stop the load or are logged, who reviews rejects, and the deadline for clearing them.",
    },
    {
      mistake: "Agreeing reconciliation after the load",
      why: "Once data has moved, nobody can distinguish a discrepancy from a legitimate correction, and the discussion becomes unresolvable.",
      fix: "Agree the control totals and the acceptable tolerance with the data owner before the first load runs.",
    },
    {
      mistake: "Bringing all history because it feels safer",
      why: "It multiplies cost and migrates a decade of quality problems into a clean system, where they immediately become the new system's reputation problem.",
      fix: "Ask what somebody would actually need to answer a customer or regulator query about an old transaction, and specify from that answer.",
    },
  ],

  bestPractices: [
    "Profile every field a requirement depends on, before agreeing the requirement.",
    "Check completeness broken down by record creation year, not just overall.",
    "Ask the six field questions, including what an empty value signifies.",
    "Name one source of truth and one accountable person per key business fact.",
    "Have both system owners define shared terms independently and in writing.",
    "Establish cardinality from the data, not from what people assume.",
    "Measure the six quality dimensions and put thresholds in the requirement.",
    "Make transformation, null handling, unmapped values and defaults mandatory mapping columns.",
    "Map reference data value by value with a business owner.",
    "Specify reject handling and who reviews the rejects.",
    "Agree reconciliation totals and tolerance before any load runs.",
    "Decide history and retention from a real question somebody would need to answer.",
  ],

  proTips: [
    "When a field is populated but you suspect it is meaningless, sort the values by frequency and look at the top three. A single value covering most of the records is almost always a default, a migration artefact from a previous system, or the option that sits first in a dropdown. All three mean the field cannot carry the weight a requirement wants to put on it.",
    "Ask which reports the business currently trusts, then find out which tables they read. Trusted reports are a map of where the good data lives, and they carry an implicit definition of every term in them that somebody has already validated over years of use.",
    "Before any migration, ask what the business would notice on the first Monday if a category of records failed to arrive. The answer tells you what to reconcile on, and it is usually more specific and more useful than any control total a technical team would propose.",
    "Keep a data findings log separate from your requirements. Half of what you discover while profiling is not relevant to the current project and is extremely relevant to somebody: duplicate customers, a code that has been misused since 2019, a field two teams populate with different things. Passing those on is how a BSA becomes the person people consult before starting work.",
  ],

  businessApplications: [
    "System replacement and migration, where the data work is the majority of the real risk.",
    "Integration between applications, where the mapping is the specification and the prose is decoration.",
    "Master data management, where the source of truth question is the entire project.",
    "Reporting and analytics projects, where inconsistent definitions across teams are the actual blocker.",
    "Regulatory reporting, where completeness and retention thresholds are externally set and auditable.",
    "Mergers and acquisitions, where two organisations hold overlapping records of the same customers under different definitions.",
  ],

  checklist: [
    "Read access obtained and main entities profiled.",
    "Completeness measured overall and by record creation year.",
    "Distinct values listed for every code and status field.",
    "Cardinality established from actual data.",
    "Source of truth named for every key fact, with an accountable owner.",
    "Shared terms defined independently by both system owners.",
    "Quality thresholds stated numerically in the requirements.",
    "Source-to-target mapping complete with no blank transformation, null or default cells.",
    "Reference data lists extracted from both sides and mapped value by value.",
    "Reject handling specified, with a named reviewer and a deadline.",
    "Reconciliation totals and tolerance agreed with the business owner in advance.",
    "History and retention scope justified by a real question somebody must answer.",
  ],

  faqs: [
    {
      q: "How much SQL does a Business Systems Analyst need?",
      a: "Select, where, group by, having, joins, null handling, distinct, count, min and max. That covers essentially all data profiling. You do not need to optimise queries or design schemas, you need to answer your own questions without waiting three days.",
    },
    {
      q: "What if I cannot get read access to the data?",
      a: "Make it a formal request with a stated reason, and escalate it as a project risk if refused. Working without it means every data-dependent requirement is an assumption, and that is worth saying explicitly in a risk log rather than absorbing quietly.",
    },
    {
      q: "How clean does data need to be before a migration?",
      a: "Clean enough that the business can operate on day one and reconcile the load. Perfect is not achievable and chasing it delays go-live. Set thresholds per field based on what the receiving process actually needs, and be explicit about what is being accepted.",
    },
    {
      q: "Should we clean the data before or after migrating?",
      a: "Before, wherever the fix requires business knowledge, because after go-live the people who understand the old records are busy learning the new system. Structural transformations can happen during the load. Judgement calls should not.",
    },
    {
      q: "Who decides what happens to unmappable reference values?",
      a: "The business owner of that data, never the engineer and never you. Your job is to present the list, the volume attached to each value, and the options. The decision has operational consequences that only they can weigh.",
    },
    {
      q: "How do I write a data quality requirement that means something?",
      a: "Name the field, the dimension, the measurement method and the threshold. For example: delivery postcode must be present and match a valid format for at least 99% of open orders at cutover, measured by the profiling query in appendix B.",
    },
  ],

  tools: [
    { name: "SQL and read access", what: "The core capability. Everything in this guide assumes you can answer your own questions in minutes rather than days.", cost: "Free" },
    { name: "A source-to-target mapping template", what: "Target field, source, transformation, null handling, unmapped handling, default, confirmed by. No blank cells permitted.", cost: "Free" },
    { name: "OpenRefine", what: "For exploring and cleaning extracts where you have a file rather than a database connection.", cost: "Free", url: "https://openrefine.org" },
    { name: "A data findings log", what: "Everything you discover that is not relevant to this project and is relevant to somebody. The artefact that builds your reputation.", cost: "Free" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "Two pages on how a tool default silently corrupted data that then passed peer review. The clearest argument for profiling values rather than trusting them.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
    { title: "OpenRefine", kind: "Docs", note: "Practical tool for profiling and cleaning extracts when you cannot query the source directly.", url: "https://openrefine.org" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "specifying what you find", context: "Specification" },
    { slug: "data-cleaning-fundamentals", anchor: "the mechanics of fixing what profiling reveals", context: "Data quality" },
    { slug: "business-rules-and-decision-tables", anchor: "the rules that depend on this data", context: "Logic" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "data-cleaning-fundamentals", "business-rules-and-decision-tables"],

  conclusion: [
    "Take one field that a current requirement depends on and run two queries against it: completeness overall, and completeness grouped by year of record creation. If those two numbers tell different stories, you have just saved your project several weeks, and you did it before lunch.",
  ],
};

export default guide;
