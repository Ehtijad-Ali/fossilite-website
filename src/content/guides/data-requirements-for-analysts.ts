import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "data-requirements-for-analysts",
  seoTitle: "Look at the Data Before You Promise Anything",
  metaDescription:
    "The system diagram tells you what could be stored. The data tells you what fifteen years of busy people actually typed in. How to check before you commit.",
  title: "Checking the Data Before You Promise Anything",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "The fastest way to wreck a project is to design it from the system diagram instead of from the actual data. The diagram tells you what the system is capable of holding. The data tells you what fifteen years of busy people under pressure actually typed in. They are not the same document and they are rarely close.",
    "This is the part of the job that separates someone who works with systems from someone who works with process. Job adverts describe it as strong data skills, which tells you nothing. In practice it means four things: you can look at a table before you promise anything about it, you can work out which system is right when two disagree, you can write down where each field comes from clearly enough that a developer does not have to guess, and you can say what happens to the records that will not fit.",
    "All of it assumes you can look at the data yourself. If you cannot, learning enough to answer your own questions is probably the best two weeks of evenings you will ever spend on your career.",
  ],

  whyItMatters: [
    "Data problems turn up late and cost a lot. A rule that cannot be built because the field it depends on is only filled in for half the records is something you want to find in week two, not in testing when the design is fixed and the go-live date is public.",
    "The mess also outlives the project. A migration that quietly drops records, or treats two different things as the same, creates errors that surface for years afterwards in reports nobody links back to the change.",
    "And this is where you can add something nobody else will. Developers look at data to check their code will run. Nobody else looks at it to ask whether it means what the business thinks it means, and that question is where the real findings are.",
  ],

  coreConcepts: [
    {
      term: "Look before you promise",
      explain:
        "Before you agree to anything that depends on a field, find out how many records actually have it filled in, what values are in there, and when it was last used.",
      detail:
        "Every requirement that says the system will use X to work out Y is a promise about the state of X. Ten minutes of looking tells you whether you can keep it. Skipping that step is how projects end up committed to something impossible.",
    },
    {
      term: "Six questions to ask about any field",
      explain:
        "What does it mean in plain English. Who fills it in. When. Is it really compulsory or just supposed to be. What values are allowed. And what does it mean when it is blank.",
      detail:
        "The last one is the one everyone forgets. Blank can mean not applicable, not known, not collected yet, or deliberately withheld. Those need different handling downstream, and if nobody can tell you which it is, that is a finding on its own.",
    },
    {
      term: "One fact, one system in charge",
      explain:
        "For every important fact about a customer or an order, exactly one system should be the one that is right. Everything else holds a copy.",
      detail:
        "When two systems both claim to own something, you have created checking work that will never end. This is not a technical preference. It is a decision about who is accountable for the fact being correct, and it needs a name against it.",
    },
    {
      term: "The same word in two systems usually means two things",
      explain:
        "Customer in the billing system might mean whoever pays. Customer in the sales system might mean the person you talk to. Both are right locally, and they do not line up one for one.",
      detail:
        "Any time you match a field from one system to another, get both owners to define the word separately. The gaps you find this way are exactly the ones that would otherwise show up later as record counts that do not agree.",
    },
    {
      term: "Ask how many, and check the answer",
      explain:
        "Does a customer have one address or several? Can an order belong to two accounts? Does a product code get reused after the product is discontinued? These decide how everything gets built, and people usually assume rather than know.",
      detail:
        "Ask for the highest number actually in the data, not the theoretical answer. People say one. The data says a hundred and forty-three, and it turns out to be some big account that everybody handles specially.",
    },
    {
      term: "Six ways data goes wrong",
      explain:
        "Is it there. Is it in the right shape. Is it actually true. Do related fields agree with each other. Are there duplicates. Is it out of date.",
      detail:
        "Measure each one and put a number in the requirement. Ninety-eight per cent filled in is a fact. Good enough is an argument you will have later, in a room, probably in front of a sponsor.",
    },
    {
      term: "The where-does-each-field-come-from sheet",
      explain:
        "One row per field at the receiving end. Which field it comes from, anything that changes on the way, what to do when the source is empty, what to do when the value is not one the receiver accepts, and what the default is.",
      detail:
        "Those last four columns are the ones people skip, and every migration problem I have ever investigated came from one of them. No blank cells allowed.",
    },
    {
      term: "The lists of codes are where migrations die",
      explain:
        "Status codes, product categories, country lists, reason codes. Two systems will have overlapping but different lists, and matching them up is a business decision, not a technical one.",
      detail:
        "Get the full list from both sides on day one and put them side by side. Anything in the old system with no equivalent in the new one needs a decision from somebody who knows what it means, not a technical default nobody chose.",
    },
    {
      term: "Say what happens to the records that will not go",
      explain:
        "Some records will fail. Decide in advance: does everything stop, or does it skip them and write them down? Who looks at the rejects, and by when?",
      detail:
        "Leave this unsaid and you get the worst possible outcome. The load reports success while quietly dropping the records that were hardest to handle, which are almost always the biggest and oldest customers.",
    },
    {
      term: "Agree how you will check it worked, before you do it",
      explain:
        "What gets counted, what totals have to match, and how big a difference is acceptable. Record counts, total values, counts by status, counts by region.",
      detail:
        "Agree this with the business owner before anything moves. Afterwards, nobody can tell the difference between a mistake and a legitimate change, and the conversation becomes unwinnable.",
    },
    {
      term: "How much history is a business question",
      explain:
        "How far back does data come, what happens to closed records, and what has to stay available for audit or the regulator.",
      detail:
        "Bringing everything is expensive and usually wrong. Bringing nothing breaks every year-on-year comparison. Ask what somebody would need in order to answer a customer or regulator question about something from four years ago, and build the answer from that.",
    },
    {
      term: "Learn enough to answer your own questions",
      explain:
        "Counting things, grouping them, joining two tables, spotting blanks, listing the different values, finding the biggest and smallest. That is roughly all of it.",
      detail:
        "The difference between checking something yourself in ten minutes and waiting three days for someone to run it for you completely changes what analysis you are willing to do, which changes the quality of everything you produce.",
    },
  ],

  codeExamples: [
    {
      title: "Seven things to check before you agree to anything",
      language: "sql",
      intro:
        "These run on most databases. Run them against any table before you write a requirement that depends on it. The whole set takes a few minutes and it has stopped me promising impossible things more times than I can count.",
      code: `-- 1. How big is it, and what dates does it cover?
--    Is this everything, or just part of it?
SELECT COUNT(*)        AS row_count,
       MIN(created_at) AS earliest,
       MAX(created_at) AS latest
FROM   customer_order;

-- 2. How many records actually have the field filled in?
--    Compulsory on the form is not the same as filled in.
SELECT COUNT(*)                                          AS rows_total,
       COUNT(delivery_date)                              AS has_delivery_date,
       COUNT(*) - COUNT(delivery_date)                   AS missing,
       ROUND(100.0 * COUNT(delivery_date) / COUNT(*), 2) AS pct_filled
FROM   customer_order;

-- 3. What values are actually in there?
--    If the list is longer than the documented one, find out why.
SELECT order_status,
       COUNT(*)                                           AS rows,
       ROUND(100.0 * COUNT(*) / SUM(COUNT(*)) OVER (), 2) AS pct
FROM   customer_order
GROUP  BY order_status
ORDER  BY rows DESC;

-- 4. People say one address per customer. Check.
SELECT addresses_per_customer,
       COUNT(*) AS customers
FROM  (SELECT customer_id,
              COUNT(*) AS addresses_per_customer
       FROM   customer_address
       GROUP  BY customer_id) t
GROUP  BY addresses_per_customer
ORDER  BY addresses_per_customer DESC;

-- 5. Is the thing everyone treats as unique actually unique?
SELECT customer_reference,
       COUNT(*) AS times_used
FROM   customer_order
GROUP  BY customer_reference
HAVING COUNT(*) > 1
ORDER  BY times_used DESC;

-- 6. Do fields that should agree with each other actually agree?
SELECT COUNT(*) AS dispatched_but_no_dispatch_date
FROM   customer_order
WHERE  order_status = 'dispatched'
AND    dispatched_at IS NULL;

-- 7. Is it still being used? A field that stopped being filled in
--    two years ago is a field people stopped using.
SELECT EXTRACT(YEAR FROM created_at) AS created_year,
       COUNT(*)                      AS rows,
       COUNT(delivery_date)          AS has_delivery_date
FROM   customer_order
GROUP  BY EXTRACT(YEAR FROM created_at)
ORDER  BY created_year;`,
      note:
        "Number seven is the one people skip and the one that most often changes a design. A field can be ninety per cent filled in overall and completely empty since a system change three years ago. Any rule that depends on it will work beautifully in testing against old data and fail on everything new.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A spreadsheet quietly changed the data and nobody noticed.",
      walkthrough:
        "Ziemann, Eren and El-Osta looked at thousands of published science papers and the gene lists attached to them. Spreadsheet software had silently turned certain gene names into dates. No warning came up, the changed values looked completely normal, and around a fifth of the papers they examined were affected. All of it had been through peer review.",
      result:
        "The lesson for anyone working with data is exact: a value that looks sensible is not the same as a value that has been checked, and tools apply defaults nobody asked for. It is why you look at what the actual values are rather than just counting how many are filled in, and why any move of data has to say what a valid value is rather than assuming the old system held one.",
      source: {
        label: "Ziemann, Eren and El-Osta (2016). Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "illustration",
      scenario: "The field that was full and meant nothing.",
      walkthrough:
        "The problem: a requirement depended on a customer segment field. The system diagram showed it as compulsory and every record had something in it. What was happening: the BA listed out what values were actually in there. The vast majority carried the same code, which turned out to be the default applied when the field was first introduced. Splitting by year showed real values only appeared during a two-year window, after which a system change stopped asking for it.",
      result:
        "What changed: the requirement could not be built as written, and because this was found in week two rather than in testing, the team had time to choose between working the segment out from what customers actually buy or asking sales to fill it in for the accounts that mattered. Both were possible. Neither would have been four months later.",
    },
    {
      kind: "illustration",
      scenario: "Two systems, one word, two different customers.",
      walkthrough:
        "The problem: a move of customer records from an old billing system into a new platform came out with different record counts and nobody could explain the gap. What was happening: the BA asked both system owners to define customer separately. Billing created one record per paying entity, so a group of companies paying centrally appeared as a single customer. The sales system had one record per trading business.",
      result:
        "What changed: they wrote a rule for group structures that nobody had specified, because both teams had used the same word for years with no reason to compare. The habit worth taking from this is simple and hardly anyone does it: before matching up any records, get both owners to write their definition down separately and put the two sentences next to each other.",
    },
  ],

  learningPath: [
    {
      title: "Get access and look at the main tables",
      body: "Row counts, date ranges, how much is filled in, what values are actually in the code fields. Do this before any requirements workshop so you turn up knowing what the data can support.",
      effort: "Half a day once you have access",
      outcome: "A view that makes several proposed requirements obviously fine or obviously impossible.",
    },
    {
      title: "Decide which system is right for each important fact",
      body: "List the facts that matter, such as who the customer is, what they owe, what has been delivered. Name the system in charge and the person accountable for each.",
      effort: "1 day",
      outcome: "The map that decides every connection and every check you will need later.",
    },
    {
      title: "Get both sides to define the shared words separately",
      body: "For each thing you will be matching, ask each system owner to write the definition in one sentence without conferring. Compare, and chase every difference to a rule.",
      effort: "Half a day",
      outcome: "The mismatches that would otherwise show up as counts that do not agree.",
    },
    {
      title: "Build the where-does-each-field-come-from sheet",
      body: "Receiving field, source field, anything that changes on the way, empty-field handling, unknown-value handling, default, and who confirmed what it means. One row per field, no exceptions.",
      effort: "2-5 days depending on size",
      outcome: "Something a developer can build from without guessing, and a list of decisions the business still owes you.",
    },
    {
      title: "Put the code lists side by side",
      body: "Every list of statuses and categories from both systems. Match them value by value. Anything with no equivalent goes to the business for a decision, not to a technical default.",
      effort: "1-2 days",
      outcome: "The part of a migration that would otherwise be discovered during the first trial run.",
    },
    {
      title: "Agree reject handling and the checks before anything moves",
      body: "What happens to failing records, who looks at them, what totals have to match and how big a difference is acceptable. Signed off by whoever owns the data.",
      effort: "Half a day",
      outcome: "The ability to tell afterwards whether it worked. Without this nobody can.",
    },
  ],

  exercises: [
    {
      title: "Check a field you are relying on",
      brief:
        "Take any field a current requirement depends on. Work out how much is filled in overall, how much by year, how many different values there are, and the top ten values by how often they appear. Then write a paragraph on whether the requirement is safe.",
      success:
        "You can state a percentage rather than an impression, and you know whether the field has changed over time.",
      time: "1-2 hours",
    },
    {
      title: "Ask two teams to define one word",
      brief:
        "Pick a word two teams both use: customer, order, active, complete, closed. Ask one person from each to write the definition in one sentence without seeing the other's answer.",
      success:
        "You can say exactly where the two definitions part company, and name a real case each would count differently.",
      time: "1 hour",
    },
    {
      title: "Two code lists, side by side",
      brief:
        "Take any two systems that both hold a status or category list for the same thing. Pull both lists in full and lay them next to each other. Mark everything with no match.",
      success:
        "You have a count of values that cannot be matched, and at least one that needs a business decision rather than a technical one.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Designing from the system diagram instead of the data",
      why: "The diagram says what could be stored. The data says what years of real use actually produced. Every requirement built on the diagram alone is a promise about something nobody has checked.",
      fix: "Look first. Counts, how much is filled in, what values are in there, and how that has changed over the years.",
    },
    {
      mistake: "Assuming compulsory means filled in",
      why: "Fields become compulsory at some point in a system's life, and everything before that date is empty or holds a default that got applied to everything at once.",
      fix: "Check how much is filled in broken down by year. It is one extra query and it changes designs.",
    },
    {
      mistake: "Matching fields without checking the meaning",
      why: "Two systems using the same word for different things is the normal case, and matching field to field hides it perfectly.",
      fix: "Get both owners to define each shared word separately, in writing, before any matching begins.",
    },
    {
      mistake: "Leaving empty-field handling to the developer",
      why: "They will pick something sensible for the code. Whether an unknown delivery date means today, blank, or reject the record is a business decision with real consequences.",
      fix: "Make the change on the way, empty-field handling, unknown-value handling and default compulsory columns. No blank cells.",
    },
    {
      mistake: "Treating the code lists as a technical detail",
      why: "Mismatches turn up at the first trial run, which is late, and the decisions they need are business decisions taken under time pressure by whoever is in the room.",
      fix: "Pull both lists in full on day one and match them value by value with the business owner.",
    },
    {
      mistake: "No agreed plan for records that fail",
      why: "The load says it succeeded while dropping the hardest records, which are usually the biggest or oldest accounts. Nobody notices until a customer does.",
      fix: "Decide in advance whether failures stop everything or get written down, who reviews them, and by when.",
    },
    {
      mistake: "Agreeing the checks after the data has moved",
      why: "Once it has moved, nobody can tell a mistake from a legitimate change, and the conversation becomes unresolvable.",
      fix: "Agree the totals and the acceptable difference with the data owner before the first run.",
    },
    {
      mistake: "Bringing all the history because it feels safer",
      why: "It multiplies the cost and moves a decade of problems into a clean system, where they immediately become the new system's reputation problem.",
      fix: "Ask what somebody would actually need to answer a question about an old transaction, and decide from that answer.",
    },
  ],

  bestPractices: [
    "Look at every field a requirement depends on, before agreeing the requirement.",
    "Check how much is filled in by year, not just overall.",
    "Ask the six field questions, including what blank means.",
    "Name one system in charge of each important fact, with an accountable person.",
    "Get both owners to define shared words separately, in writing.",
    "Find out how many by looking, not by asking.",
    "Measure the six ways data goes wrong and put numbers in the requirement.",
    "Make change, empty, unknown and default compulsory columns on the mapping sheet.",
    "Match code lists value by value with a business owner.",
    "Say what happens to failing records and who reviews them.",
    "Agree the totals and acceptable difference before anything moves.",
    "Decide how much history to bring from a real question somebody has to answer.",
  ],

  proTips: [
    "When a field is filled in but you suspect it is meaningless, sort the values by how often they appear and look at the top three. One value covering most of the records is nearly always a default, a leftover from an old system, or whatever sits first in a dropdown. All three mean the field cannot carry the weight a requirement wants to put on it.",
    "Ask which reports the business actually trusts, then find out which tables those reports read. Trusted reports are a map of where the good data lives, and they come with a definition of every term in them that somebody has already validated over years of use.",
    "Before moving any data, ask what the business would notice on the first Monday if a category of records had not arrived. The answer tells you exactly what to count, and it is always more specific and more useful than any total a technical team would suggest.",
    "Keep a separate list of everything you find that is not about your project. Half of what you turn up while looking at data is irrelevant to you and extremely relevant to somebody: duplicate customers, a code that has been misused since 2019, two teams filling one field with different things. Passing those on is how you become the person people check with before starting work.",
  ],

  businessApplications: [
    "Replacing a system, where the data work is most of the real risk.",
    "Connecting two applications, where the mapping sheet is the actual deliverable.",
    "Deciding which system owns customer data, where that question is the whole project.",
    "Reporting and analytics work, where teams disagreeing about definitions is the real blocker.",
    "Reporting to a regulator, where how complete the data is and how long you keep it are set externally.",
    "Mergers, where two businesses hold overlapping records of the same customers under different rules.",
  ],

  checklist: [
    "Access obtained and the main tables looked at.",
    "How much is filled in measured overall and by year.",
    "Actual values listed for every code and status field.",
    "How many of each thing established from real data.",
    "One system named in charge of each important fact, with an owner.",
    "Shared words defined separately by both system owners.",
    "Quality thresholds written as numbers in the requirements.",
    "Mapping sheet complete with no blank cells.",
    "Code lists pulled from both sides and matched value by value.",
    "Reject handling written, with a named reviewer and a deadline.",
    "Totals and acceptable difference agreed with the business owner in advance.",
    "History scope justified by a real question somebody has to answer.",
  ],

  faqs: [
    {
      q: "How much technical skill do I need to do this?",
      a: "Counting, grouping, joining two tables, spotting blanks, listing distinct values, finding highest and lowest. That covers essentially all of it. You do not need to design databases. You need to answer your own questions without waiting three days.",
    },
    {
      q: "What if I cannot get access to the data?",
      a: "Ask formally with a reason, and raise it as a project risk if refused. Working without it means every data-dependent requirement is an assumption, and that is worth saying in writing rather than quietly absorbing.",
    },
    {
      q: "How clean does data need to be before a move?",
      a: "Clean enough that the business can work on day one and you can check the totals. Perfect is not achievable and chasing it delays everything. Set a threshold per field based on what the receiving process actually needs, and be open about what is being accepted.",
    },
    {
      q: "Should we clean the data before or after moving it?",
      a: "Before, wherever the fix needs somebody's judgement, because after go-live the people who understand the old records are busy learning the new system. Mechanical reshaping can happen during the move. Judgement calls should not.",
    },
    {
      q: "Who decides what happens to values that cannot be matched?",
      a: "The business owner of that data, never the engineer and never you. Your job is to bring the list, how many records sit behind each value, and the options. The consequences are operational and only they can weigh them.",
    },
    {
      q: "How do I write a data quality requirement that means something?",
      a: "Name the field, what you are measuring, how you will measure it, and the threshold. For example: delivery postcode must be present and in a valid format for at least 99% of open orders at changeover, measured using the checks in appendix B.",
    },
  ],

  tools: [
    { name: "Access to look at the data yourself", what: "The core skill. Everything here assumes you can answer your own questions in minutes rather than days.", cost: "Free" },
    { name: "A mapping sheet template", what: "Receiving field, source, change on the way, empty handling, unknown handling, default, confirmed by. No blank cells.", cost: "Free" },
    { name: "OpenRefine", what: "For exploring and cleaning a file when you have an export rather than a database connection.", cost: "Free", url: "https://openrefine.org" },
    { name: "A findings list", what: "Everything you spot that is not about your project and is about somebody else's. The thing that builds your reputation.", cost: "Free" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "Two pages on how a spreadsheet default quietly corrupted data that then passed peer review. The clearest argument for checking values rather than trusting them.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
    { title: "OpenRefine", kind: "Docs", note: "Practical tool for exploring and cleaning exports when you cannot get at the source directly.", url: "https://openrefine.org" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "writing down what you find", context: "Specification" },
    { slug: "data-cleaning-fundamentals", anchor: "fixing what you turn up", context: "Data quality" },
    { slug: "business-rules-and-decision-tables", anchor: "the rules that depend on this data", context: "Logic" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "data-cleaning-fundamentals", "business-rules-and-decision-tables"],

  conclusion: [
    "Take one field a current requirement depends on and run two checks: how much is filled in overall, and how much is filled in by year. If those two numbers tell different stories, you have just saved your project several weeks, and you did it before lunch.",
  ],
};

export default guide;
