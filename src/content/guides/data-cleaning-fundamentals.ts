import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "data-cleaning-fundamentals",
  seoTitle: "Data Cleaning Fundamentals: Getting Data You Can Trust",
  metaDescription:
    "The unglamorous discipline behind every reliable analysis — finding what's wrong with your data, fixing it reproducibly, and proving it stayed fixed.",
  title: "Data Cleaning Fundamentals",
  keywords: [
    "data cleaning",
    "data quality",
    "how to clean data",
    "handling missing values",
    "data validation",
    "messy data",
  ],
  category: "data-science",
  level: "Beginner",
  updated: "2026-08-04",
  author: EHTIJAD_ALI,
  readingTime: 13,

  intro: [
    "Everybody says data cleaning takes most of the time on a data project, and everybody says it as though it were an unfortunate overhead — a tax on the interesting work. That framing is why so much of it is done badly. Cleaning isn't preparation for the analysis; a great deal of the time it *is* the analysis, because deciding what a blank cell means is a substantive judgement about the world, not a technical chore.",
    "The failure mode is specific and worth naming. Bad cleaning rarely produces an error. It produces a number — a plausible, well-formatted, confidently-presented number that is wrong in a direction nobody notices. Errors get caught. Wrong answers get published.",
    "This guide covers how to find what's actually wrong with a dataset, how to decide what to do about it, and — most importantly — how to do it in a way that someone else can review and re-run. It assumes no particular tool, though the examples lean toward code, for reasons the first documented case makes uncomfortably clear.",
  ],

  whyItMatters: [
    "Every downstream thing inherits your cleaning decisions. A model trained on badly cleaned data learns the artefacts. A dashboard built on it misleads confidently. A decision made from it is a decision made from fiction, and nobody in the chain can see it because the number looks like all the other numbers.",
    "The costs are also asymmetric in a way that rewards paranoia. Finding a problem during cleaning costs an hour. Finding it after a model is trained costs a retraining cycle. Finding it after a decision has been made can cost far more than the project was worth — and the two documented cases below show it reaching published research and national policy debate.",
    "There's a professional angle too. The person who reliably spots that a column changed format last March, or that a category was silently renamed, becomes the person whose numbers get trusted. That reputation compounds much faster than technical sophistication does, and it's built almost entirely on unglamorous diligence.",
  ],

  coreConcepts: [
    {
      term: "Look before you touch",
      explain:
        "The first pass is diagnosis, not repair. Load the data and characterise it — shape, types, missing counts, distinct values per categorical column, ranges on numeric columns — before writing a single line of cleaning.",
      detail:
        "Fixing as you discover means you never see the full pattern. Problems cluster: one broken export usually caused four of the symptoms you're about to patch individually.",
    },
    {
      term: "Types are assertions, and they're often wrong",
      explain:
        "Every column has a type your tool inferred. A numeric column containing a single stray 'N/A' or a currency symbol becomes text, and then sorts alphabetically, concatenates instead of adding, and compares unpredictably.",
      detail:
        "Check inferred types immediately after every load. A column that should be numeric and isn't is telling you something specific about the file's contents — go and find out what.",
    },
    {
      term: "Missing means several different things",
      explain:
        "A blank cell might mean zero, not applicable, not asked, refused, or collection failed. Most tools represent them identically, which invites you to treat them identically. That's a modelling decision disguised as a technical default.",
      detail:
        "Decide per column what a blank represents, based on how the data was collected. Filling missing revenue with zero and missing temperature with zero are not the same kind of decision, and only one of them is defensible.",
    },
    {
      term: "The same thing spelled several ways",
      explain:
        "Free-text and semi-structured fields accumulate variants: trailing spaces, casing differences, abbreviations, alternative spellings. Each variant becomes a separate category in any grouping.",
      detail:
        "Counting distinct values per categorical column is the fastest way to surface this. Fifty-three distinct country values in a dataset covering twelve countries is a finding, not a nuisance.",
    },
    {
      term: "Duplicates are rarely exact",
      explain:
        "Exact duplicate rows are easy to find and comparatively rare. The expensive kind are near-duplicates: the same entity recorded twice with a different identifier, a slightly different name, or a timestamp offset.",
      detail:
        "Define what makes a row unique in business terms before deduplicating. 'One row per customer per day' is a rule you can check; 'remove duplicates' is not.",
    },
    {
      term: "Impossible values and the plausibility check",
      explain:
        "Negative ages, orders dated in the future, percentages above 100, timestamps before the company existed. These are cheap to detect and always indicate something worth understanding upstream.",
      detail:
        "Impossible values are gifts. They're the visible symptom of a problem that is also producing invisible ones — a broken parser doesn't only corrupt the values you can spot.",
    },
    {
      term: "Joins are where silent corruption happens",
      explain:
        "Merging tables is the most dangerous routine operation in data work. Duplicate keys multiply rows; mismatched types or formats drop them. Both complete without error.",
      detail:
        "Record the expected row count before every join and assert it afterwards. This single habit catches more real errors than any other cleaning practice.",
    },
    {
      term: "Every fix must be code, not a manual edit",
      explain:
        "A correction made by hand in a spreadsheet is invisible, unreviewable and gone next month when the data refreshes. A correction in code is a line someone can read, question and re-run.",
      detail:
        "This is the practical meaning of reproducibility: raw data stays read-only, and every transformation between raw and final exists as reviewable logic.",
    },
    {
      term: "Cleaning decisions need documenting",
      explain:
        "Six months later, nobody remembers why 4% of rows were dropped. If the reason isn't recorded next to the code, it's lost, and the next person either repeats your analysis wrongly or doesn't trust it at all.",
      detail:
        "Comment the why, not the what. The code already says which rows were excluded; the comment should say why exclusion was correct.",
    },
  ],

  learningPath: [
    {
      title: "Learn the diagnostic pass",
      body: "Build a standard sequence you run on every new dataset: shape, column types, missing count per column, distinct values per categorical, min/max on numerics, and a look at ten random rows. Make it a snippet you reuse.",
      effort: "3–4 hours",
      outcome: "A reusable diagnostic you run before touching anything.",
    },
    {
      title: "Audit a genuinely messy dataset without fixing it",
      body: "Take real data from your own work. Produce a written list of every problem you find — wrong types, missing patterns, inconsistent categories, duplicates, impossible values, suspicious distributions. Resist repairing anything until the list is complete.",
      effort: "3–5 hours",
      outcome: "A written data quality report, and a sense of how problems cluster.",
    },
    {
      title: "Decide what missing means, column by column",
      body: "For each column with blanks, work out how the data was collected and what a blank therefore represents. Write the decision down. Then implement it — which might be filling, dropping, or explicitly keeping it missing and handling it downstream.",
      effort: "3–4 hours",
      outcome: "A documented per-column policy rather than a global fillna.",
    },
    {
      title: "Standardise categories and text",
      body: "Trim whitespace, normalise casing, and map variant spellings to canonical values using an explicit lookup you can inspect — not a clever fuzzy match you can't audit. Recount distinct values afterwards.",
      effort: "4–6 hours",
      outcome: "Categorical columns whose distinct counts match reality.",
    },
    {
      title: "Define uniqueness and deduplicate properly",
      body: "State in business terms what makes a row unique, check whether that holds, and investigate the violations before removing anything. Near-duplicates usually reveal an upstream process problem worth reporting.",
      effort: "3–5 hours",
      outcome: "A stated uniqueness rule and an understood set of violations.",
    },
    {
      title: "Add assertions",
      body: "Convert your findings into checks that run every time: expected row counts after joins, no nulls in key columns, values within plausible ranges, distinct categories within an allowed set. Make the pipeline fail loudly.",
      effort: "4–6 hours",
      outcome: "A pipeline that stops rather than producing a quietly wrong number.",
    },
    {
      title: "Make it re-runnable end to end",
      body: "Raw data read-only in one place, cleaning logic in code, outputs written elsewhere, no manual steps, no absolute paths. Delete the outputs and regenerate them from raw to prove it works.",
      effort: "4–8 hours",
      outcome: "One command regenerates everything from source.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A spreadsheet's autocorrect silently corrupting gene names across the scientific literature.",
      walkthrough:
        "Ziemann, Eren and El-Osta examined 3,597 papers published in 18 genome-focused journals between 2005 and 2015, covering 7,467 supplementary gene lists produced in Excel. With default settings, Excel converts certain gene symbols into dates or floating-point numbers — SEPT2 becomes 2-Sep, MARCH1 becomes 1-Mar. No warning is shown, and the converted value looks entirely normal in the cell.",
      result:
        "19.6% of the papers examined — 704 articles — contained gene name conversion errors in their supplementary data. The corruption happened at the tool's default settings, during ordinary use, to careful researchers, and survived peer review. The general lesson is not about Excel specifically: any tool that silently transforms your data on load will produce errors that look like data rather than like errors.",
      source: {
        label: "Ziemann, Eren & El-Osta (2016) — Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "documented",
      scenario: "A formula range that wasn't dragged far enough, in a paper cited in national policy debate.",
      walkthrough:
        "Reinhart and Rogoff's 'Growth in a Time of Debt' reported that countries with public debt above 90% of GDP saw negative average growth — a finding used extensively in arguments for austerity. Thomas Herndon, working with Michael Ash and Robert Pollin, could not replicate it. Obtaining the original spreadsheet, they found several problems, including an averaging formula whose range omitted five countries because it had not been extended over all the rows.",
      result:
        "Recalculated, average real GDP growth above the 90% threshold was 2.2% rather than −0.1%. What makes this a data-cleaning story rather than an economics one is the mechanism of concealment: the logic lived inside cell references, where it could not be reviewed, diffed, or re-run by anyone who hadn't been handed the file.",
      source: {
        label: "Herndon, Ash & Pollin (2013), PERI/UMass Amherst — critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "The category that quietly split in two.",
      walkthrough:
        "A pattern worth watching for in any recurring report. An upstream system is updated and starts writing a category label with different casing or an extra space — 'Enterprise' becomes 'enterprise ', say. Your grouping logic now produces two categories where there was one. Both appear in the output. Each has roughly half the volume it should. Every total is still correct, so nothing looks broken; only the breakdown is wrong.",
      result:
        "The defence is an assertion rather than vigilance: check that the distinct values in a categorical column remain within a known allowed set, and fail the run when a new one appears. Trimming and normalising casing on load prevents the common version; the assertion catches the version you didn't anticipate.",
    },
  ],

  mistakes: [
    {
      mistake: "Cleaning as you discover, instead of auditing first",
      why: "You patch symptoms individually and never see that six of them share one upstream cause. The result is a long, brittle cleaning script that treats effects rather than causes.",
      fix: "Complete a full diagnostic pass and write the problem list before fixing anything. Then look for the common cause.",
    },
    {
      mistake: "Filling missing values globally",
      why: "A blanket `fillna(0)` invents data wherever missing meant 'not collected'. Every downstream average is now wrong, and it's wrong in a smooth, plausible way.",
      fix: "Decide per column, based on how the data was collected. Sometimes the correct answer is to leave it missing and handle it explicitly at the point of use.",
    },
    {
      mistake: "Editing raw data by hand",
      why: "It destroys reproducibility instantly, and the correction is undocumented. Next month's refresh reintroduces the problem and nobody remembers what was done.",
      fix: "Treat raw data as immutable. Every fix is a line of code that can be read, reviewed and re-applied automatically.",
    },
    {
      mistake: "Trusting a join without checking row counts",
      why: "Joins fail silently in both directions. Duplicated keys multiply rows and inflate every total; type mismatches drop rows and deflate them.",
      fix: "Record the expected row count, assert it after the join, and investigate any difference before proceeding.",
    },
    {
      mistake: "Using fuzzy matching you can't audit",
      why: "Automatic similarity matching merges things it shouldn't and misses things it should, and the mistakes are invisible because there's no record of what it decided.",
      fix: "Use an explicit lookup table for canonical values. It's more work initially and it's reviewable, which is what makes it defensible.",
    },
    {
      mistake: "Removing outliers because they're inconvenient",
      why: "An extreme value might be a data error or it might be the most important observation in the dataset. Deleting on the basis of magnitude alone destroys real signal.",
      fix: "Investigate every outlier individually before deciding. Record which were removed and why, as a documented decision rather than a filter.",
    },
    {
      mistake: "Not documenting why rows were dropped",
      why: "An unexplained row count drop makes an analysis unauditable. Reviewers can't distinguish a legitimate exclusion from an accident.",
      fix: "Log the count and the reason at every filtering step, and surface the totals in the output so exclusions are visible rather than buried.",
    },
  ],

  bestPractices: [
    "Run the same diagnostic pass on every dataset, every time, before writing any cleaning code. Familiarity is not a substitute — files change.",
    "Keep raw, intermediate and output data in separate locations, and never write into raw. This structure alone prevents most reproducibility failures.",
    "Make every cleaning decision a line of code with a comment explaining why, not what.",
    "Assert your assumptions rather than remembering them. Row counts after joins, no nulls in keys, categories within an allowed set, values within plausible ranges.",
    "Log row counts at every stage of the pipeline and surface them in the output, so unexplained losses become visible.",
    "Prefer explicit mappings to clever automatic matching wherever the result needs defending.",
    "Re-run the whole pipeline from raw data regularly. Pipelines accumulate hidden manual steps and the only way to find them is to rebuild from scratch.",
    "When you find a data problem, report it upstream as well as fixing it downstream. Patching the same corruption every month is a symptom of an unreported bug.",
  ],

  proTips: [
    "Count distinct values in every categorical column on first contact. It's the single highest-yield diagnostic — inconsistent spellings, unexpected categories, and silent renames all surface immediately.",
    "Compare this month's data against last month's on structure rather than content: same columns, same types, same category set, similar row count. Most breakages announce themselves as a structural change first.",
    "Sort by every column at least once and look at both ends. Impossible values, padding characters and encoding problems live at the extremes and are invisible in the middle.",
    "When a total looks wrong, check the row count before checking the logic. A surprising proportion of wrong aggregates are join problems rather than calculation problems.",
    "Write the assertion before the code that should satisfy it. Stating the expected row count first makes you notice when your mental model of the data is wrong, which is the point.",
    "Keep a running note of every quirk you find in a recurring dataset. It becomes institutional knowledge that would otherwise leave when you do.",
  ],

  businessApplications: [
    "Reporting reliability: the difference between a dashboard people act on and one they quietly stop trusting is almost always cleaning discipline rather than visualisation quality.",
    "Migration and integration projects, where the cleaning work is the project and underestimating it is the standard cause of overrun.",
    "Regulatory reporting, where the requirement is not just a correct number but a defensible, reproducible path from source to figure.",
    "Preparing training data for machine learning — the majority of real ML project effort, and the part that determines the ceiling on model quality.",
    "Data quality monitoring: scheduled checks that flag when an upstream feed changes format or a field starts arriving empty, before it reaches a report.",
    "Vendor and partner data intake, where you have no control over quality and assertions at the boundary are the only defence.",
  ],

  lifeApplications: [
    "Personal record-keeping — finances, health, training logs — where consistency in how you record things determines whether you can ever answer a question with them.",
    "Reading statistics critically: knowing how many judgement calls sit between raw collection and a published figure changes how much weight a single number deserves.",
    "Any research you do for a decision, where the discipline of checking the source rather than the summary is the same habit.",
    "Recognising the general pattern: a tool that silently transforms your input will produce errors that look like results. That's true well beyond spreadsheets.",
  ],

  exercises: [
    {
      title: "The audit without the fix",
      brief:
        "Take a real messy dataset. Produce a written list of every problem without repairing anything. Then group the problems by likely upstream cause.",
      success: "At least ten problems documented and grouped into three or fewer root causes.",
      time: "3 hours",
    },
    {
      title: "Missing-value policy",
      brief:
        "For every column with blanks in a real dataset, write down what a blank means and what you'll do about it. Justify each decision from how the data was collected.",
      success: "A per-column table you'd be willing to show a reviewer.",
      time: "2 hours",
    },
    {
      title: "Break a join deliberately",
      brief:
        "Build two small tables. Introduce a duplicate key and observe row multiplication. Then introduce a type mismatch and observe rows disappearing. Record both row counts.",
      success: "You can predict a join's output row count before running it.",
      time: "1 hour",
    },
    {
      title: "Assert everything",
      brief:
        "Take an existing pipeline and add assertions at every stage: row counts, null checks, allowed category sets, plausible ranges. Then deliberately corrupt the input and confirm it fails.",
      success: "The pipeline fails loudly on corrupted input instead of producing a number.",
      time: "3–4 hours",
    },
    {
      title: "The distinct-values sweep",
      brief:
        "On a dataset you know well, count distinct values in every categorical column. Investigate any count that differs from what you expected.",
      success: "At least one inconsistency found in data you thought was clean.",
      time: "1 hour",
    },
  ],

  checklist: [
    "I ran a full diagnostic pass before writing any cleaning code",
    "I checked inferred column types and investigated anything unexpected",
    "I decided what missing means for each column, based on collection method",
    "Distinct values per categorical column match what I expected",
    "Uniqueness is defined in business terms and violations were investigated",
    "Impossible and outlier values were investigated, not silently removed",
    "Row counts are asserted after every join",
    "Raw data is read-only and every fix exists as code",
    "Row counts are logged at each stage and exclusions are visible in the output",
    "Cleaning decisions are commented with why, not what",
    "The whole pipeline regenerates from raw data with one command",
    "Upstream data problems have been reported, not just patched",
  ],

  faqs: [
    {
      q: "How much time should data cleaning take?",
      a: "On a typical project, more than you planned for — often the majority. Rather than trying to compress it, plan for it explicitly and treat the cleaning code as a deliverable in its own right, because the next project on the same source will reuse it.",
    },
    {
      q: "Should I remove rows with missing values?",
      a: "Only when you understand why they're missing. If missingness relates to the thing you're studying, dropping those rows biases your result in a way no later step can correct. Sometimes keeping them and handling them explicitly is the honest choice.",
    },
    {
      q: "Is it wrong to use spreadsheets for data work?",
      a: "They're excellent for inspection and small one-off tasks. The problems arise when work repeats, needs auditing, or gets large — logic hidden in cell references can't be reviewed or re-run, and some tools silently transform values on load.",
    },
    {
      q: "How do I know when the data is clean enough?",
      a: "When your assertions pass, the known problem list is either fixed or documented as accepted, and you can explain every transformation to someone who'll use the result. 'Clean' is relative to the question being asked, not absolute.",
    },
    {
      q: "What about outliers — remove or keep?",
      a: "Investigate individually. An extreme value caused by a broken sensor should go; an extreme value representing a genuinely unusual event may be the most informative row you have. The decision is about cause, never about magnitude.",
    },
    {
      q: "Can AI clean my data for me?",
      a: "It's useful for suggesting canonical mappings and spotting patterns you'd miss. It's a poor final authority, because the decisive questions — what does a blank mean here, is this outlier real — depend on how the data was collected, which the model has no access to.",
    },
  ],

  tools: [
    { name: "pandas", what: "The workhorse for tabular cleaning in Python. `info`, `dtypes`, `value_counts` and `isna` are most of the diagnostic pass.", cost: "Free", url: "https://pandas.pydata.org" },
    { name: "Great Expectations", what: "Declarative data quality assertions that run as part of a pipeline and produce readable reports.", cost: "Freemium", url: "https://greatexpectations.io" },
    { name: "OpenRefine", what: "Interactive cleaning with clustering for inconsistent categories, and it records every operation as a re-runnable script.", cost: "Free", url: "https://openrefine.org" },
    { name: "pandera", what: "Schema validation for DataFrames — types, ranges, allowed values, enforced at runtime.", cost: "Free", url: "https://pandera.readthedocs.io" },
    { name: "csvkit", what: "Command-line tools for inspecting and validating CSVs before they ever reach your pipeline.", cost: "Free", url: "https://csvkit.readthedocs.io" },
  ],

  resources: [
    { title: "Tidy Data — Hadley Wickham", kind: "Paper", note: "The clearest statement of what well-structured data looks like and why. Short and genuinely influential.", url: "https://vita.had.co.nz/papers/tidy-data.pdf" },
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "The Excel autocorrect study. Two pages, and it changes how you think about default tool behaviour.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
    { title: "Python for Data Analysis — Wes McKinney", kind: "Book", note: "Freely readable online, with thorough coverage of the cleaning operations you'll use daily.", url: "https://wesmckinney.com/book/" },
    { title: "Bad Data Handbook — Q. Ethan McCallum", kind: "Book", note: "Practitioners describing real data disasters. Useful precisely because it's anecdotal rather than idealised." },
  ],

  internalLinks: [
    { slug: "python-for-data-work", anchor: "the Python tooling for doing this properly", context: "In the learning path" },
    { slug: "evaluating-ai-systems", anchor: "why cleaning determines what evaluation can tell you", context: "In the business applications section" },
    { slug: "how-machine-learning-actually-works", anchor: "how data quality caps model quality", context: "In the introduction" },
  ],

  relatedGuides: [
    "python-for-data-work",
    "evaluating-ai-systems",
    "how-machine-learning-actually-works",
  ],

  conclusion: [
    "Start with the diagnostic pass on a dataset you already trust. Count distinct values in every categorical column. Most people find something they didn't know was there, and that's the moment the discipline stops feeling like overhead.",
  ],

  cta: {
    headline: "Data not ready for the thing you want to build?",
    body:
      "It rarely is, and finding out during the build is the expensive way. An audit first is cheaper than a rebuild later.",
    label: "Ask about a data audit",
    href: "/contact",
  },
};

export default guide;
