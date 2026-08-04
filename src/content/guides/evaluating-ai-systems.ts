import type { Guide } from "../types";

export const guide: Guide = {
  slug: "evaluating-ai-systems",
  seoTitle: "How to Evaluate an AI System Before You Trust It",
  metaDescription:
    "A practical framework for evaluating AI: choosing metrics that match real costs, building test sets, catching leakage, and monitoring for drift after launch.",
  title: "How to Evaluate an AI System",
  keywords: [
    "how to evaluate AI",
    "AI evaluation metrics",
    "model evaluation",
    "test set design",
    "data drift monitoring",
    "AI benchmarks",
  ],
  category: "machine-learning",
  level: "Intermediate",
  updated: "2026-08-04",
  author: "Fossilite Engineering",
  readingTime: 13,

  intro: [
    "Almost every AI project failure is an evaluation failure wearing a different costume. The model wasn't bad; the number that said it was good was measuring the wrong thing, on the wrong data, against no baseline. By the time reality disagrees, the budget is gone and everyone is confused.",
    "Evaluation gets skipped because it's the least enjoyable part of the work. Building is satisfying, tuning feels productive, and measuring properly mostly produces bad news early — which is precisely its value. A team that measures well finds out in week two what a team that doesn't finds out in month eight.",
    "This guide covers how to design an evaluation that would actually catch a problem: choosing a metric that reflects real costs, building a test set that resembles production, protecting it from contamination, and continuing to measure once the system is live. It applies to classifiers, forecasters and language systems alike, because the discipline is the same even when the metrics differ.",
  ],

  whyItMatters: [
    "The asymmetry is stark. A proper evaluation costs days; a system deployed on a misleading number costs months and often reputation. And unlike most engineering mistakes, this one is invisible from the inside — the dashboard says everything is fine, which is exactly the problem.",
    "Evaluation is also what makes improvement possible at all. Without a fixed measurement you cannot tell whether a change helped, so you optimise on memory and impression. Teams in this state consistently believe their system is getting better while it drifts, because improvements are memorable and regressions aren't.",
    "There's a governance dimension that's arriving fast. Increasingly you need to be able to demonstrate that a system performs acceptably across different groups of people, not just on average. That evidence has to be designed in — it cannot be reconstructed after the fact from a system that only ever recorded aggregate accuracy.",
  ],

  coreConcepts: [
    {
      term: "The metric encodes what you think an error costs",
      explain:
        "Every metric makes an implicit statement about which mistakes matter. Accuracy says all errors are equal. Recall says missing a positive is the expensive one. Precision says a false alarm is.",
      detail:
        "Choose the metric by asking who is harmed by each type of error and how much. A missed fraud and a wrongly frozen account are both errors, and treating them as equivalent is a decision — usually an unexamined one.",
    },
    {
      term: "Accuracy is misleading whenever classes are imbalanced",
      explain:
        "If 99% of your examples are one class, always predicting that class scores 99%. The number is excellent and the system is useless.",
      detail:
        "Since most valuable problems are imbalanced — fraud, defects, churn, disease — accuracy is the wrong default for most of the work worth doing.",
    },
    {
      term: "Precision, recall and the trade-off between them",
      explain:
        "Precision asks: of the things flagged, how many were right? Recall asks: of the things that should have been flagged, how many did we catch? Moving the decision threshold trades one against the other.",
      detail:
        "The threshold is a business decision, not a technical default. A triage system that a human reviews wants high recall; an auto-approval system wants high precision. Same model, different cut-off.",
    },
    {
      term: "The baseline is what makes a number mean anything",
      explain:
        "A score in isolation is uninterpretable. 87% is impressive or embarrassing depending entirely on what predicting the most common answer would have scored.",
      detail:
        "Always compute the trivial baseline — the majority class, the previous value, the current manual process. Surprisingly often it's within a point or two of an expensive model.",
    },
    {
      term: "The test set must be sealed",
      explain:
        "Held-out data is only meaningful while it stays held out. Every time you look at it and adjust something, information leaks and the score becomes optimistic.",
      detail:
        "Use a validation set for iteration and touch the test set once, at the end. If you've tuned against it fifty times, it has quietly become training data.",
    },
    {
      term: "Leakage: information that wouldn't exist at prediction time",
      explain:
        "If a feature encodes something only knowable after the outcome, the model exploits it and scores brilliantly on data that no longer resembles reality.",
      detail:
        "The test: would this value be available at the exact moment the prediction is needed? Aggregates computed across the full dataset before splitting are the subtle version and catch experienced people out.",
    },
    {
      term: "Split the way the world works",
      explain:
        "Random splitting is wrong for time-series data, because it lets the model learn from the future to predict the past. It's also wrong when rows are grouped — multiple records per customer sharing a split boundary.",
      detail:
        "Split by time for anything temporal, and by group for anything with repeated entities. A random split on grouped data produces an inflated score with no obvious symptom.",
    },
    {
      term: "Aggregate scores hide subgroup failure",
      explain:
        "A system at 92% overall can be at 61% for one group of users. The headline number cannot reveal this, and averages are specifically designed to conceal it.",
      detail:
        "Break performance down by every dimension that matters — customer segment, region, device, language, demographic group where legally relevant — and report the worst, not just the mean.",
    },
    {
      term: "Calibration is separate from accuracy",
      explain:
        "A model can rank cases correctly while its confidence scores are meaningless. If you route decisions by confidence, calibration matters as much as accuracy does.",
      detail:
        "Check it directly: among cases scored around 0.9, is the model right about 90% of the time? Neural networks in particular are frequently overconfident by default.",
    },
    {
      term: "Evaluation doesn't end at launch",
      explain:
        "Offline scores describe a snapshot. In production, inputs shift, upstream systems change format, and behaviour evolves. Performance decays with no code change and no error raised.",
      detail:
        "Monitor input distributions and output distributions continuously, and re-measure against fresh labelled data on a schedule.",
    },
  ],

  learningPath: [
    {
      title: "Write down the cost of each error type first",
      body: "Before choosing any metric, write in plain words what happens when the system produces a false positive and what happens when it produces a false negative. Include who is affected. The metric follows from this, not the other way round.",
      effort: "1–2 hours",
      outcome: "A one-page statement of error costs that a non-technical stakeholder agrees with.",
    },
    {
      title: "Build the trivial baseline",
      body: "Before any model, compute what the dumbest possible approach scores — most common class, last value, current manual process. Record it. This number will contextualise everything that follows.",
      effort: "2–3 hours",
      outcome: "A baseline number written down before you had a model to defend.",
    },
    {
      title: "Design the split deliberately",
      body: "Decide whether your split should be random, temporal or grouped, and justify it. Then split before any exploration, cleaning or scaling, so that statistics computed on training data never touch the held-out set.",
      effort: "2–4 hours",
      outcome: "A defensible split you can explain to a sceptic.",
    },
    {
      title: "Audit every feature for leakage",
      body: "Go feature by feature and ask whether it would be available at prediction time. Then run the shuffle test: randomise the labels and retrain. Performance should collapse to chance — if it doesn't, something is leaking.",
      effort: "3–5 hours",
      outcome: "A clean shuffle test, and at least one suspicious feature investigated.",
    },
    {
      title: "Build a labelled evaluation set by hand",
      body: "Assemble a few hundred examples with correct answers you've verified yourself, deliberately including edge cases, ambiguous cases and cases the system should refuse. This is more valuable than any amount of automated metric plumbing.",
      effort: "8–15 hours",
      outcome: "A golden set you trust, that never enters training.",
    },
    {
      title: "Slice the results",
      body: "Report performance broken down by every meaningful subgroup, and look specifically at the worst-performing slice. Investigate why rather than averaging it away.",
      effort: "3–5 hours",
      outcome: "A table of per-slice performance, with the worst row understood.",
    },
    {
      title: "Read a hundred errors individually",
      body: "Aggregate metrics say how much is wrong; reading failures says why. Sort by confidence and start with the confident mistakes — that's where systematic problems live.",
      effort: "4–6 hours",
      outcome: "A categorised list of failure modes, ranked by frequency.",
    },
    {
      title: "Instrument for production monitoring",
      body: "Before launch, decide what you'll measure live: input distribution shifts, output class balance, confidence distribution, and a sampling process for getting fresh labels. Set alert thresholds now, not after the first incident.",
      effort: "8–12 hours",
      outcome: "Monitoring that would notice degradation before a customer does.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A system evaluated against the right target that still drifted into large error.",
      walkthrough:
        "Google Flu Trends estimated influenza-like illness from search volume and was explicitly built to predict the CDC's reported figures — so its evaluation target was, in principle, exactly right. It performed well initially. Then search behaviour changed, partly through media coverage of flu and partly through Google's own interface changes, while the model continued applying a relationship learned from an earlier period.",
      result:
        "By the 2012–13 season it was persistently overestimating flu prevalence, at one point predicting more than double the proportion of doctor visits the CDC recorded. Lazer and colleagues concluded in Science that the errors were largely avoidable. The lesson for evaluation specifically: an excellent offline score is a statement about a moment in time, and without ongoing measurement against fresh ground truth you have no way to know when it stopped being true.",
      source: {
        label: "Lazer, Kennedy, King & Vespignani, Science 343:1203–1205 (2014) — The Parable of Google Flu",
        url: "https://www.science.org/doi/10.1126/science.1248506",
      },
    },
    {
      kind: "documented",
      scenario: "Measuring components separately to find out what's actually contributing.",
      walkthrough:
        "Anthropic evaluated a retrieval pipeline by isolating a single metric — how often the correct passage failed to appear in the top twenty results — and then adding one component at a time, remeasuring after each. This is the opposite of the common approach, where several changes ship together and the team credits whichever one they favour.",
      result:
        "Against a 5.7% baseline failure rate: contextual embeddings alone reduced failures by 35%, adding keyword search took it to 49%, and adding re-ranking took it to 67%. Because each stage was measured independently, the contributions are attributable rather than assumed — and it turned out the components compounded rather than overlapping. This is what component-level evaluation buys you: knowing which part earns its cost.",
      source: {
        label: "Anthropic (2024) — Introducing Contextual Retrieval",
        url: "https://www.anthropic.com/news/contextual-retrieval",
      },
    },
    {
      kind: "illustration",
      scenario: "The model that scored 94% and predicted one thing.",
      walkthrough:
        "A shape worth recognising. A team builds a classifier on data where the positive class is rare, reports strong accuracy, and celebrates. Inspection of the confusion matrix shows the model predicts the majority class for almost every input. It has learned the base rate and nothing else. The accuracy figure is real, arithmetically correct, and describes a system that catches nothing.",
      result:
        "The confusion matrix would have revealed this in seconds; the accuracy score never could. This is why the first thing to look at in any classification result is the matrix rather than the headline number — and why the metric should have been recall on the rare class from the start.",
    },
  ],

  mistakes: [
    {
      mistake: "Choosing the metric after seeing the results",
      why: "Given several metrics and a result, anyone can find the one that flatters it. Deciding afterwards means you're describing rather than measuring.",
      fix: "Write the metric and the acceptable threshold down before training, and share it with someone who will hold you to it.",
    },
    {
      mistake: "Tuning against the test set",
      why: "Every look and adjust cycle leaks information. After enough iterations your final number reflects how well you fitted the test set, not how the system will perform.",
      fix: "Iterate on a validation set. Touch the test set once. If you've burned it, get fresh data rather than reporting the compromised number.",
    },
    {
      mistake: "Random splits on temporal or grouped data",
      why: "Random splitting on time-series lets the model learn from the future. On grouped data it lets near-duplicate rows appear on both sides. Both inflate scores substantially with no visible symptom.",
      fix: "Split by time for temporal problems and by entity for grouped ones. Ask what unit must never appear on both sides.",
    },
    {
      mistake: "Reporting only aggregate performance",
      why: "The average conceals the subgroup where the system is failing badly, and that subgroup is usually where the reputational and legal risk lives.",
      fix: "Report per-slice performance as standard, and treat the worst slice as the headline number rather than the mean.",
    },
    {
      mistake: "Ignoring the confusion matrix",
      why: "Single numbers compress away the information you need to act. Two systems with identical F1 scores can fail in completely different directions.",
      fix: "Look at the matrix every time. It takes ten seconds and tells you what kind of wrong the system is.",
    },
    {
      mistake: "Evaluating language systems by reading a few outputs",
      why: "Output varies between runs, and human judgement of a handful of samples is dominated by recency and by the examples you happened to pick.",
      fix: "Build a fixed set of inputs with expected outputs, score consistently after every change, and include cases where the correct behaviour is refusal.",
    },
    {
      mistake: "Treating launch as the end of evaluation",
      why: "Offline performance describes historical data. Production performance degrades silently as inputs shift, and no error is ever raised.",
      fix: "Monitor input and output distributions from day one, sample for fresh labels on a schedule, and set alerts before you need them.",
    },
  ],

  bestPractices: [
    "State the metric, the threshold, and the cost of each error type in writing before any modelling begins.",
    "Compute a trivial baseline every time, and report it alongside your result permanently — not just in the first week.",
    "Split the data before exploration, cleaning or scaling. Anything computed across the whole dataset and applied to both halves is leakage.",
    "Run the label-shuffle test on every new pipeline. It costs one training run and catches a category of bug that is otherwise nearly invisible.",
    "Maintain a hand-verified golden set that never enters training and never gets tuned against. It's the only honest number left after fifty iterations.",
    "Report per-subgroup performance by default, and treat the worst slice as the number that matters.",
    "Verify calibration before routing any decision by a confidence score.",
    "Version your evaluation set alongside your code. A score is meaningless if you can't reconstruct what it was measured on.",
  ],

  proTips: [
    "Sort errors by model confidence and read the confident ones first. Confidently wrong is where systematic problems and leakage live; uncertain and wrong is usually just genuinely hard cases.",
    "If a result surprises you positively, assume leakage before you assume brilliance. This instinct will save you more embarrassment than any other habit in applied machine learning.",
    "Plot learning curves — training and validation score against training set size. If both have flattened and converged, more data won't help and you need a different approach. It answers 'what next?' better than intuition.",
    "Keep a running log of every experiment with its evaluation score, including the failures. Teams without one re-run the same failed idea roughly twice a year.",
    "Ask 'what would this look like if the model were broken in a way we haven't imagined?' and then check for that specifically. Evaluation designed only around anticipated failures catches only anticipated failures.",
    "When someone reports a system got worse, check whether the evaluation data changed before you check whether the model did. Surprisingly often it's the measurement that moved.",
  ],

  businessApplications: [
    "Vendor selection: requiring a pilot on your own data with your own metric, rather than accepting benchmark figures measured on someone else's distribution.",
    "Go/no-go decisions: a pre-agreed threshold turns a political argument about whether something is good enough into a factual one.",
    "Regulatory and audit readiness: subgroup performance evidence has to be designed in from the start, since it can't be reconstructed retrospectively.",
    "Cost control: component-level evaluation reveals which expensive parts of a pipeline actually contribute, and which can be removed.",
    "Incident response: monitoring that catches drift early converts a quarter of degraded decisions into a two-day investigation.",
    "Internal credibility: teams that report honest numbers including regressions get trusted with bigger problems than teams that only report wins.",
  ],

  lifeApplications: [
    "Reading claims critically. 'Accuracy 97%' invites the questions: on what data, against what baseline, and how were errors distributed? Those three questions deflate most impressive-sounding statistics.",
    "Understanding medical screening results, which is the imbalanced-data problem exactly — a highly accurate test for a rare condition still produces mostly false positives.",
    "Evaluating your own decisions honestly, which requires deciding what success looks like before you see the outcome rather than after.",
    "Noticing when you've been tuning against your test set in life — reinterpreting your criteria until whatever happened counts as success.",
  ],

  exercises: [
    {
      title: "Write the error-cost statement",
      brief:
        "For a real or hypothetical system, write one page describing what a false positive costs, what a false negative costs, and who bears each. Derive the metric from it.",
      success: "A non-technical colleague reads it and agrees with the metric choice.",
      time: "2 hours",
    },
    {
      title: "The shuffle test",
      brief:
        "Take any working pipeline, randomise the labels, retrain, and record the score. It should be chance-level.",
      success: "Either a clean chance-level result, or a leak found.",
      time: "1–2 hours",
    },
    {
      title: "Threshold sweep",
      brief:
        "Take a trained classifier and plot precision and recall across the full range of decision thresholds. Choose the threshold your error-cost statement implies, rather than 0.5.",
      success: "A justified threshold and a documented reason.",
      time: "2 hours",
    },
    {
      title: "Slice until it breaks",
      brief:
        "Break performance down by every dimension available. Find the worst-performing slice with a meaningful sample size and investigate why.",
      success: "One subgroup identified where the system underperforms, with a hypothesis.",
      time: "3–4 hours",
    },
    {
      title: "Build a fifty-case golden set",
      brief:
        "Hand-verify fifty examples including edge cases, ambiguous cases and cases that should be refused. Score your current system honestly against it.",
      success: "A number you'd be willing to defend publicly.",
      time: "4–6 hours",
    },
  ],

  checklist: [
    "The metric and threshold were written down before modelling started",
    "The cost of each error type is documented, with who bears it",
    "A trivial baseline was computed and is reported alongside results",
    "Data was split before any exploration or preprocessing",
    "The split respects time and entity grouping where relevant",
    "Every feature was checked for availability at prediction time",
    "The label-shuffle test collapses performance to chance",
    "Performance is reported per subgroup, not only in aggregate",
    "Confidence scores are calibrated if decisions are routed by them",
    "A hand-verified golden set exists and has never been tuned against",
    "At least a hundred individual errors have been read and categorised",
    "Production monitoring covers input drift, output drift and fresh labels",
  ],

  faqs: [
    {
      q: "What's the single most important evaluation habit?",
      a: "Comparing against a trivial baseline. It costs almost nothing and it's the only thing that makes any other number interpretable. A surprising proportion of models barely beat predicting the most common answer.",
    },
    {
      q: "How big should my test set be?",
      a: "Large enough that the metric is stable across resamples, and large enough that your smallest important subgroup still has enough examples to say something. The second constraint usually binds first and is usually forgotten.",
    },
    {
      q: "How do I evaluate a language model's output?",
      a: "Build a fixed set of inputs with known-good outputs, including edge cases and cases that should be refused, and score consistently after every change. Reading a few outputs feels like evaluation and is dominated by which samples you happened to see.",
    },
    {
      q: "Can I trust published benchmark scores?",
      a: "Treat them as an upper bound measured on a specific distribution, not a prediction about your data. Benchmark contamination — test data appearing in training sets — is also a real and growing problem. Run your own pilot.",
    },
    {
      q: "My model does well offline and badly in production. Why?",
      a: "In order of likelihood: data leakage during development, a test set that no longer resembles live traffic, and repeated tuning against the test set until the score became optimistic. Check leakage first.",
    },
    {
      q: "How often should I re-evaluate a live system?",
      a: "Continuously for input and output distributions, which are cheap to monitor, and on a fixed schedule for accuracy against fresh labels. How often depends on how fast your domain moves — but 'never' is the wrong answer everywhere.",
    },
  ],

  tools: [
    { name: "scikit-learn metrics", what: "Confusion matrices, precision/recall curves, calibration plots. Everything you need for classical evaluation.", cost: "Free", url: "https://scikit-learn.org" },
    { name: "Weights & Biases", what: "Experiment tracking so you can tell what actually helped, including the runs that didn't.", cost: "Freemium", url: "https://wandb.ai" },
    { name: "Evidently AI", what: "Data drift and model performance monitoring for production systems.", cost: "Freemium", url: "https://evidentlyai.com" },
    { name: "Promptfoo", what: "Fixed-test-set evaluation for prompts and language systems, runnable in CI.", cost: "Free", url: "https://promptfoo.dev" },
    { name: "Ragas", what: "Scores retrieval and generation separately in RAG systems, which is the key diagnostic distinction.", cost: "Free", url: "https://docs.ragas.io" },
  ],

  resources: [
    { title: "Google's Rules of Machine Learning", kind: "Docs", note: "Forty-three engineering rules from production ML. Several are specifically about not fooling yourself with metrics.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
    { title: "Designing Machine Learning Systems — Chip Huyen", kind: "Book", note: "Strong chapters on evaluation and monitoring specifically. Read before your first deployment." },
    { title: "The Parable of Google Flu", kind: "Paper", note: "Five pages on how a well-evaluated system drifted into large error. The best short case study in the field.", url: "https://www.science.org/doi/10.1126/science.1248506" },
    { title: "Hidden Technical Debt in Machine Learning Systems", kind: "Paper", note: "On why ML systems decay in ways ordinary software doesn't. Sobering and short.", url: "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems" },
  ],

  internalLinks: [
    { slug: "how-machine-learning-actually-works", anchor: "the fundamentals this builds on", context: "In the introduction" },
    { slug: "rag-explained", anchor: "evaluating retrieval separately from generation", context: "In the component evaluation example" },
    { slug: "thinking-critically-about-evidence", anchor: "the same scepticism applied outside AI", context: "In the life applications section" },
  ],

  relatedGuides: [
    "how-machine-learning-actually-works",
    "rag-explained",
    "thinking-critically-about-evidence",
  ],

  conclusion: [
    "Evaluation is the least fun and most load-bearing part of building anything with AI. Choose a metric that reflects what errors actually cost, compare against a baseline that makes the number mean something, protect your test set from contamination, break results down by subgroup, and keep measuring after launch.",
    "The mindset that matters underneath all of it is a willingness to be disappointed early. A team that goes looking for reasons its result might be wrong will find them in week two, when they're cheap. A team that doesn't will find them in month eight, when they're not — and will experience it as a mystery rather than a consequence.",
    "If you adopt one practice from this guide, make it the trivial baseline. It takes an hour, it's almost never done, and it regularly reveals that an expensive system is barely outperforming a rule anyone could have written.",
  ],

  cta: {
    headline: "Not sure whether your AI system actually works?",
    body: "We build the evaluation, monitoring and human review that tells you honestly — before your customers do.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
