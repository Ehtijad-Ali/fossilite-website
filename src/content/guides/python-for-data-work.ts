import type { Guide } from "../types";

export const guide: Guide = {
  slug: "python-for-data-work",
  seoTitle: "Python for Data Work: The Parts That Actually Matter",
  metaDescription:
    "Learn the Python that data work actually needs — pandas, clean pipelines, and reproducible analysis. Skip the computer science you'll never use.",
  title: "Python for Data Work",
  keywords: [
    "python for data analysis",
    "learn python for data science",
    "pandas tutorial",
    "python data cleaning",
    "reproducible analysis",
    "python for beginners data",
  ],
  category: "python",
  level: "Beginner",
  updated: "2026-08-04",
  author: "Fossilite Engineering",
  readingTime: 13,

  intro: [
    "Most Python courses are written for people who want to become software engineers. You spend three weeks on object-oriented programming, inheritance and design patterns, and emerge able to model a zoo as a class hierarchy but unable to load a messy CSV and work out why 12% of the dates are wrong.",
    "Data work needs a different and much smaller subset of the language. You need to move data around, reshape it, clean it, join it, and produce a result someone else can reproduce. That's roughly 20% of Python, plus one library, and you can be genuinely productive in weeks rather than months.",
    "This guide is that subset, in the order the work actually demands it. It's aimed at analysts, researchers, marketers and anyone who has outgrown spreadsheets — and at people learning machine learning who discovered that the modelling is the easy part and the data handling is where the time goes.",
  ],

  whyItMatters: [
    "The practical reason is scale and repeatability. A spreadsheet analysis is a one-off performance; a script is a machine you can point at next month's data. The first time you re-run a report in four seconds that used to take you a morning, the investment pays for itself permanently.",
    "The more serious reason is that code is auditable in a way spreadsheets are not. In a script, every transformation is a visible line that someone can review and version-control. In a spreadsheet, the logic hides inside cells, and an error can sit undetected in a formula range for years — with consequences that have reached national policy, as one of the documented cases below shows.",
    "There's also a career effect that's difficult to overstate. Being the person on a team who can answer a data question in an hour instead of asking someone else and waiting three days changes what work comes to you. It's one of the highest-leverage skills available to someone who isn't a full-time engineer.",
  ],

  coreConcepts: [
    {
      term: "The five data structures you'll actually use",
      explain:
        "Variables, lists, dictionaries, sets and tuples. Lists for ordered collections, dictionaries for lookups by key, sets for uniqueness and membership tests. That covers the overwhelming majority of day-to-day data code.",
      detail:
        "You do not need to know how they're implemented to use them well. You do need to know that checking membership in a set is fast and in a long list is slow, because that one fact prevents a recurring performance mistake.",
    },
    {
      term: "The DataFrame is the unit of work",
      explain:
        "pandas gives you a DataFrame — a table with named columns and typed values. Nearly all data work is a sequence of operations on DataFrames: filter rows, select columns, group and aggregate, join to another table, write out.",
      detail:
        "If you know spreadsheets, a DataFrame is a sheet you manipulate with instructions instead of with the mouse. The mental model transfers almost directly; the difference is that every step is recorded.",
    },
    {
      term: "Dtypes are where the bugs live",
      explain:
        "Every column has a type — integer, float, string, datetime, boolean. A column of numbers read as strings will silently sort wrongly, concatenate instead of add, and produce results that look plausible.",
      detail:
        "Run `df.dtypes` immediately after loading anything, every time. An 'object' dtype on a column you expected to be numeric is the single most common signal of a data problem in the file.",
    },
    {
      term: "Missing data means several different things",
      explain:
        "A blank cell might mean zero, not applicable, not collected, or collection failed. pandas represents them all as NaN, and treating them identically produces wrong answers.",
      detail:
        "Decide per column what a missing value means before filling or dropping anything. Filling missing revenue with zero and missing temperature with zero are not the same kind of decision.",
    },
    {
      term: "Split, apply, combine",
      explain:
        "Group rows by some key, compute something within each group, put the results back together. `groupby` is the workhorse of analysis and the operation that most often replaces an entire spreadsheet of pivot tables.",
      detail:
        "Once this clicks, a large class of questions — per-customer, per-month, per-region — becomes one line rather than a manual process.",
    },
    {
      term: "Joins, and the row count check",
      explain:
        "Merging two tables on a key is routine and quietly dangerous. If the key isn't unique on one side, rows multiply; if values don't match exactly, rows silently disappear.",
      detail:
        "Always record the row count before and after a join and check it against what you expected. This one habit catches more analysis errors than any other.",
    },
    {
      term: "Vectorised operations instead of loops",
      explain:
        "Applying an operation to a whole column at once is both shorter and dramatically faster than looping over rows, because the work happens in optimised compiled code underneath.",
      detail:
        "If you find yourself writing a `for` loop over DataFrame rows, there is almost always a column operation that replaces it. `iterrows` in particular is a signal to stop and reconsider.",
    },
    {
      term: "Reproducibility is a design choice",
      explain:
        "An analysis is reproducible if someone else — including you in six months — can run it and get the same numbers. That requires the code, the data version, and the environment to be recorded.",
      detail:
        "Concretely: no manual edits to intermediate files, no hardcoded absolute paths, pinned library versions, and raw data treated as read-only.",
    },
    {
      term: "Notebooks for exploring, scripts for delivering",
      explain:
        "Notebooks are excellent for looking at data interactively and terrible as production artefacts — cells can be run out of order, producing results that can't be reproduced by running top to bottom.",
      detail:
        "Explore in a notebook, then move the logic into a plain `.py` file with functions once it works. The transition point is when someone else will depend on the output.",
    },
  ],

  learningPath: [
    {
      title: "Learn the minimum syntax, fast",
      body: "Variables, the five data structures, if/else, for loops, functions, imports, and reading an error message. Deliberately skip classes, decorators, async and metaprogramming — you can add them later if you ever need them.",
      effort: "10–15 hours",
      outcome: "You can write and debug a 30-line script without copying it from somewhere.",
    },
    {
      title: "Load something real and look at it",
      body: "Take a genuinely messy CSV — ideally from your own work. Load it with pandas and run `head`, `info`, `describe`, `dtypes`, `isna().sum()` and `value_counts()` on the categorical columns. Write down every problem you find before fixing any of them.",
      effort: "3–4 hours",
      outcome: "A written list of the specific data quality issues in a real file.",
    },
    {
      title: "Learn the six operations that cover most work",
      body: "Filtering rows by condition, selecting and renaming columns, creating derived columns, groupby with aggregation, merging two tables, and sorting. These six compose into most analyses you'll ever be asked for.",
      effort: "8–12 hours",
      outcome: "You can answer a typical data question end to end without searching for syntax.",
    },
    {
      title: "Handle dates and text properly",
      body: "Parse dates explicitly rather than letting pandas guess, and learn to extract components and compute differences. For text, learn strip, lower, replace and basic pattern matching. These two areas account for a large share of real cleaning work.",
      effort: "5–8 hours",
      outcome: "Inconsistent date formats and untidy text fields stop blocking you.",
    },
    {
      title: "Make one analysis reproducible",
      body: "Take something you've done and restructure it: raw data untouched in one folder, a script that reads it and writes outputs to another, no manual steps, no absolute paths. Delete the outputs and regenerate them from scratch.",
      effort: "4–6 hours",
      outcome: "You can reproduce a result from raw data with one command.",
    },
    {
      title: "Add basic checks",
      body: "After each major step, assert what should be true: expected row count after a join, no nulls in a key column, values within a plausible range. Make the script fail loudly rather than produce a quietly wrong number.",
      effort: "3–5 hours",
      outcome: "Your pipeline stops silently when an assumption breaks.",
    },
    {
      title: "Learn enough plotting to communicate",
      body: "Line, bar, scatter and histogram, with axis labels and a readable title. Resist the urge to learn the whole library — four chart types cover most communication needs.",
      effort: "4–6 hours",
      outcome: "You can produce a chart someone else understands without narration.",
    },
    {
      title: "Automate something you do repeatedly",
      body: "Take a recurring manual task — a weekly report, a reconciliation, a data pull — and script it end to end. This is where the learning consolidates, because now the code has to work when you're not watching.",
      effort: "10–20 hours",
      outcome: "A task that used to take a morning now takes a command.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A spreadsheet formula error in an influential economics paper.",
      walkthrough:
        "Reinhart and Rogoff's 'Growth in a Time of Debt' reported that countries with public debt above 90% of GDP experienced negative average growth. The finding was cited widely in arguments for austerity, including by US politicians shaping budget proposals. Graduate student Thomas Herndon, working with Michael Ash and Robert Pollin, could not replicate the result. They obtained the original spreadsheet and found several problems — including a formula range that omitted five countries, because it had not been dragged down far enough.",
      result:
        "Recalculated, the average real GDP growth for countries above the 90% threshold was 2.2% rather than −0.1%. The point for anyone doing data work is not that economists are careless — it's that the error was invisible for years because the logic lived inside cell references rather than in reviewable, re-runnable code. This is the strongest available argument for scripting analysis rather than clicking it.",
      source: {
        label: "Herndon, Ash & Pollin (2013), PERI/UMass Amherst — critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "The join that silently doubles your revenue.",
      walkthrough:
        "A shape worth recognising because it produces confident wrong numbers rather than errors. You merge an orders table with a customers table on customer ID. The customers table turns out to contain two rows for a handful of customers — a duplicate from a historic import. Every order for those customers now appears twice. The script runs cleanly. The totals are wrong, and they're wrong in a direction that looks like a good month.",
      result:
        "The habit that catches this: record the row count before and after every join and compare it against what you expected. If a merge changes the row count and you didn't intend it to, stop. Add it as an assertion rather than a mental note, because the mental note will not survive the third month.",
    },
    {
      kind: "illustration",
      scenario: "A numeric column that isn't numeric.",
      walkthrough:
        "You load a file, chart a revenue column, and the ordering looks strange. Checking `dtypes` shows the column as 'object' rather than a number, because a handful of rows contain a currency symbol, a thousands separator, or the string 'N/A'. Pandas read the whole column as text. Sorting is now alphabetical, sums concatenate, and comparisons behave unpredictably.",
      result:
        "Running `df.dtypes` immediately after every load takes two seconds and catches this class of problem before it propagates into an analysis. Any column that should be numeric and isn't is telling you something specific about the file's contents.",
    },
  ],

  mistakes: [
    {
      mistake: "Learning Python as a software engineer would",
      why: "Object-oriented design, inheritance and design patterns are genuinely important for building applications, and almost entirely irrelevant to answering a data question. Spending your first month there is why so many people give up.",
      fix: "Learn the data subset first and go deeper only when a real task demands it. You can be productive without ever writing a class.",
    },
    {
      mistake: "Looping over DataFrame rows",
      why: "It's dramatically slower than column operations, and usually harder to read. On large data the difference is minutes versus milliseconds.",
      fix: "Reach for vectorised column operations, `groupby`, or `merge`. If you're writing `iterrows`, treat it as a prompt to search for the operation that replaces it.",
    },
    {
      mistake: "Editing raw data by hand",
      why: "It destroys reproducibility instantly. Nobody — including you — can now regenerate the result from source, and the fix you applied is undocumented.",
      fix: "Treat raw data as read-only. Every correction happens in code, so it's visible, reviewable, and reapplied automatically next time.",
    },
    {
      mistake: "Filling missing values without deciding what they mean",
      why: "`fillna(0)` on a column where missing means 'not collected' silently invents data, and every downstream average is now wrong.",
      fix: "Go column by column and decide what a blank represents. Sometimes the correct action is dropping the row, sometimes imputing, sometimes leaving it missing and handling it explicitly.",
    },
    {
      mistake: "Trusting a merge without checking row counts",
      why: "Joins fail quietly. Duplicated keys multiply rows, mismatched types drop them, and the script completes successfully either way.",
      fix: "Assert the expected row count after every join. Two lines of defensive code prevent a category of error that's nearly impossible to spot in the output.",
    },
    {
      mistake: "Shipping a notebook as the deliverable",
      why: "Cells can be executed in any order, so a notebook that produces the right answer on your screen may not produce it when run top to bottom. Version control also handles them badly.",
      fix: "Explore in a notebook, then move the working logic into a plain script with functions. Restart and run all before believing any notebook result.",
    },
    {
      mistake: "Hardcoding absolute paths",
      why: "`C:/Users/you/Desktop/data.csv` works on exactly one machine, which means the analysis cannot be run by a colleague or on a server.",
      fix: "Use relative paths from the project root, and keep configuration in one place at the top of the script or in a config file.",
    },
  ],

  bestPractices: [
    "Inspect before you transform. `head`, `info`, `dtypes`, `isna().sum()` and `describe()` on every new dataset, every time, before writing a single line of cleaning code.",
    "Keep raw, interim and output data in separate folders, and never write into the raw folder. This structure alone prevents most reproducibility failures.",
    "Write assertions for what you believe. Expected row counts, no nulls in keys, values within range. A pipeline that fails loudly beats one that produces a plausible wrong number.",
    "Name variables for what they contain, not what type they are. `orders_2026` beats `df2`, and you will thank yourself when you return to the file.",
    "Pin your library versions in a requirements file. pandas behaviour changes between major versions and an unpinned analysis quietly stops being reproducible.",
    "Comment the why, not the what. The code already says it filters to active customers; the comment should say why inactive ones are excluded.",
    "Run the whole pipeline from scratch regularly. Analyses accumulate hidden manual steps, and the only way to find them is to delete the outputs and rebuild.",
    "Version-control everything except the data itself. Even solo, git turns 'it worked yesterday' from a mystery into a diff.",
  ],

  proTips: [
    "Learn `value_counts(dropna=False)` early and use it constantly. It reveals unexpected categories, inconsistent spellings and the true extent of missing data faster than any other single command.",
    "When a transformation gives an unexpected result, inspect the intermediate DataFrame rather than reasoning about the chain. Print the shape and a few rows after each step; the failure is almost never where you assume.",
    "Write the assertion before the code that should satisfy it. Stating the expected row count first makes you notice when your mental model of the data is wrong.",
    "Keep a personal snippets file for things you re-derive — date parsing, a standard cleaning routine, your preferred chart formatting. Six months of this compounds into a genuine productivity edge.",
    "Read the error message from the bottom up. The last line names the actual problem; the traceback above it is the path that led there, and beginners tend to read the least useful part first.",
    "Before optimising anything for speed, measure. The slow step is routinely not the one you expected, and most 'slow' analyses are a single loop that should have been a column operation.",
  ],

  businessApplications: [
    "Automating recurring reports: the same pull, clean, aggregate and format sequence run on a schedule instead of manually each week.",
    "Reconciliation across systems: comparing exports from two platforms to find records that disagree, which is tedious by hand and trivial in code.",
    "Customer and cohort analysis: retention curves, segment behaviour and lifetime value calculations that are impractical to maintain in spreadsheets.",
    "Data quality monitoring: scheduled checks that flag when an upstream file changes format, a field starts arriving empty, or volumes move outside a normal band.",
    "Preparing data for machine learning, which in practice is the majority of any ML project's actual work.",
    "Ad-hoc analysis for decisions: being able to answer a specific question in an hour rather than commissioning it and waiting a week.",
  ],

  lifeApplications: [
    "Personal finance: parsing bank exports to categorise spending and see patterns your banking app's categories obscure.",
    "Any hobby with data behind it — training logs, sports statistics, game records, reading history — where the interesting questions aren't the ones the app offers.",
    "Automating the tedious: renaming and organising files, extracting information from documents, converting between formats.",
    "Checking claims yourself. When a statistic in an article seems off, being able to find the underlying dataset and look is a genuinely useful form of independence.",
    "Learning to think in transformations — take input, apply a defined step, check the result — is a habit that transfers well beyond code.",
  ],

  exercises: [
    {
      title: "The messy file audit",
      brief:
        "Find a genuinely dirty CSV. Without fixing anything, produce a written list of every problem: wrong dtypes, missing values, inconsistent categories, duplicates, impossible values.",
      success: "At least eight distinct problems documented before you write any cleaning code.",
      time: "2 hours",
    },
    {
      title: "Break a join on purpose",
      brief:
        "Create two small tables. Introduce a duplicate key on one side and observe the row multiplication. Then introduce a type mismatch and observe rows disappearing.",
      success: "You can predict the row count of a join before running it.",
      time: "1 hour",
    },
    {
      title: "De-notebook an analysis",
      brief:
        "Take a working notebook and convert it into a script with functions, relative paths and no manual steps. Delete all outputs and regenerate them with one command.",
      success: "The pipeline runs clean from raw data on a fresh clone.",
      time: "3–4 hours",
    },
    {
      title: "Replace every loop",
      brief:
        "Find code where you loop over rows. Rewrite it with vectorised operations or groupby. Time both versions on a large dataset.",
      success: "A measured speed difference and shorter, clearer code.",
      time: "2–3 hours",
    },
    {
      title: "Automate one weekly task",
      brief:
        "Pick something you do manually every week. Script it end to end, including reading inputs and writing formatted output. Use it for a month and fix what breaks.",
      success: "You stop doing the manual version entirely.",
      time: "8–15 hours",
    },
  ],

  checklist: [
    "I inspect dtypes and missing values immediately after loading any file",
    "Raw data is read-only and never edited by hand",
    "Every cleaning decision exists as a line of code, not a manual step",
    "I decided what missing means per column before filling anything",
    "Row counts are checked and asserted after every join",
    "The analysis uses relative paths and runs on another machine",
    "Library versions are pinned",
    "Delivered logic lives in a script, not only in a notebook",
    "The pipeline regenerates all outputs from raw data with one command",
    "Assertions fail the run when a key assumption breaks",
  ],

  faqs: [
    {
      q: "Do I need to learn programming properly before pandas?",
      a: "You need variables, lists, dictionaries, loops, functions and imports — roughly a week of focused effort. Learn those, then go straight to pandas. Depth in general-purpose Python can wait until a task actually requires it.",
    },
    {
      q: "Python or R for data work?",
      a: "Either is a good choice and the concepts transfer. Python is the stronger default if you'll touch machine learning, automation or production systems; R remains excellent for statistics and academic work. Pick one and stop deliberating.",
    },
    {
      q: "Is Excel still worth using?",
      a: "Absolutely, for what it's good at — quick inspection, small manual tasks, sharing with people who don't code. The switch to code should happen when work repeats, when it needs auditing, or when the data outgrows comfortable manual handling.",
    },
    {
      q: "How long until I'm useful?",
      a: "For someone motivated with real data to work on, a few weeks to answer basic questions independently and a few months to build reliable pipelines. Having an actual task you need solved roughly halves the time.",
    },
    {
      q: "Should I use AI to write my Python?",
      a: "It's genuinely useful for syntax you'd otherwise look up and for a first draft. It's a poor substitute for understanding your data — the errors that matter in data work are logical rather than syntactic, and a model can't check whether your join assumption holds.",
    },
    {
      q: "What's the difference between pandas and NumPy?",
      a: "NumPy provides fast numerical arrays; pandas builds labelled tables on top of it. For most analysis you'll work in pandas and rarely touch NumPy directly, though understanding it helps when performance matters.",
    },
    {
      q: "Do I need to know SQL as well?",
      a: "If your data lives in a database, yes, and it's worth learning alongside. The concepts overlap heavily — filtering, grouping, joining are the same ideas in both, which makes the second one much faster to pick up.",
    },
  ],

  tools: [
    { name: "pandas", what: "The core library for tabular data in Python. This is the one to actually learn properly.", cost: "Free", url: "https://pandas.pydata.org" },
    { name: "Jupyter / Google Colab", what: "Interactive notebooks for exploration. Colab needs no local installation at all.", cost: "Free", url: "https://colab.research.google.com" },
    { name: "VS Code", what: "The standard editor, with strong Python and notebook support built in.", cost: "Free", url: "https://code.visualstudio.com" },
    { name: "uv", what: "Fast Python package and environment management. Removes most of the setup pain that stops beginners.", cost: "Free", url: "https://github.com/astral-sh/uv" },
    { name: "Polars", what: "A faster DataFrame library with a stricter API. Worth knowing about once pandas becomes a bottleneck.", cost: "Free", url: "https://pola.rs" },
    { name: "Great Expectations", what: "Declarative data quality checks for pipelines that others depend on.", cost: "Freemium", url: "https://greatexpectations.io" },
  ],

  resources: [
    { title: "Python for Data Analysis — Wes McKinney", kind: "Book", note: "By the creator of pandas, and freely readable online. The reference worth owning.", url: "https://wesmckinney.com/book/" },
    { title: "Automate the Boring Stuff with Python — Al Sweigart", kind: "Book", note: "Free online. The best starting point if your motivation is practical rather than academic.", url: "https://automatetheboringstuff.com" },
    { title: "pandas — Getting Started tutorials", kind: "Docs", note: "The official tutorials are unusually good and organised by task rather than by feature.", url: "https://pandas.pydata.org/docs/getting_started/index.html" },
    { title: "Kaggle Learn — Pandas & Data Cleaning", kind: "Course", note: "Short, hands-on micro-courses with exercises. Good for filling specific gaps quickly.", url: "https://www.kaggle.com/learn" },
  ],

  internalLinks: [
    { slug: "how-machine-learning-actually-works", anchor: "where this fits in a machine learning project", context: "In the business applications section" },
    { slug: "neural-networks-explained", anchor: "using Python to build neural networks", context: "In the learning path" },
  ],

  relatedGuides: ["how-machine-learning-actually-works", "neural-networks-explained"],

  conclusion: [
    "The Python that data work needs is a small, learnable subset: a handful of data structures, one library, and a set of habits about inspecting and checking your data. You do not need a computer science education to become the person on your team who can answer questions with evidence instead of estimates.",
    "The habits matter more than the syntax, and they're the part most courses omit entirely. Check dtypes on load. Decide what missing means. Assert your row counts after joins. Keep raw data read-only. These take seconds each and they prevent the specific failures that turn a confident analysis into a wrong one.",
    "Start with a file from your own work rather than a tutorial dataset. Real data is messy in ways that clean examples never are, and that mess is the actual skill you're building.",
  ],

  cta: {
    headline: "Drowning in manual data work?",
    body: "We build reliable data pipelines and automation — the kind that runs on a schedule and tells you when something upstream breaks.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
