import type { Guide } from "../types";

export const guide: Guide = {
  slug: "how-machine-learning-actually-works",
  seoTitle: "How Machine Learning Actually Works: A Beginner's Guide",
  metaDescription:
    "A clear, technically accurate introduction to machine learning: how models learn from data, what training really does, and the mistakes that trip up beginners.",
  title: "How Machine Learning Actually Works",
  keywords: [
    "how machine learning works",
    "machine learning for beginners",
    "supervised learning",
    "training data",
    "overfitting",
    "machine learning basics",
  ],
  category: "machine-learning",
  level: "Beginner",
  updated: "2026-08-04",
  author: "Fossilite Engineering",
  readingTime: 14,

  intro: [
    "Most explanations of machine learning start with a metaphor about brains, then quietly stop explaining anything. You finish the article knowing that ML is 'like how humans learn' and still unable to say what actually happens when a model trains. This guide takes the opposite approach: no brain metaphors, no equations you can't follow, just an accurate account of what the machine is really doing.",
    "Here is the whole idea in one sentence. Machine learning is the practice of writing a program that adjusts its own numbers until its predictions stop being wrong so often. That's it. Everything else — neural networks, gradient descent, transformers, the whole vocabulary — is detail about how those numbers get adjusted and what shape they take.",
    "By the end of this guide you'll understand what a model is, what training does, why models fail in the specific ways they do, and how to tell a genuine result from a misleading one. That last skill matters more than any framework you could learn, and it's the one most beginners skip.",
  ],

  whyItMatters: [
    "Machine learning has quietly become infrastructure. It decides which loan applications get flagged, which job applications a recruiter sees, what a radiologist gets shown first, and what a delivery route looks like. You do not need to build these systems to be affected by them — but understanding them changes you from a passenger into someone who can ask the right question at the right moment.",
    "Professionally, the value is not in being able to call `model.fit()`. Any competent developer can learn an API in an afternoon. The value is in knowing whether a result means anything. A team that can't tell overfitting from genuine performance will confidently ship a model that looked excellent in testing and falls apart the week it goes live — and they will not understand why.",
    "There is also a defensive reason to learn this. A great deal of what is sold as AI is ordinary statistics with a better marketing budget, and some of it is nothing at all. Once you understand what training data does and doesn't guarantee, vendor claims become much easier to evaluate. You'll find yourself asking 'what was it evaluated on?' — and you'll notice how often nobody can answer.",
  ],

  coreConcepts: [
    {
      term: "A model is a function with adjustable numbers",
      explain:
        "A model takes an input and produces an output, using a set of internal numbers called parameters (or weights). Before training, those numbers are essentially random and the outputs are garbage. Training is the process of nudging them toward values that produce useful outputs.",
      detail:
        "The simplest real model is a straight line: prediction = w × input + b. It has two parameters, w and b. A large neural network is the same idea with hundreds of billions of parameters and a much more flexible shape. The principle does not change with scale.",
    },
    {
      term: "Training is guided trial and error, not understanding",
      explain:
        "You show the model an example, compare its output to the correct answer, measure how wrong it was, and adjust the parameters slightly in whichever direction reduces that wrongness. Then you repeat, often millions of times.",
      detail:
        "This is why a trained model can be superb at its task and simultaneously have no concept of what the task means. It found numbers that reduce error on your data. It did not form an opinion.",
    },
    {
      term: "The loss function defines what 'wrong' means",
      explain:
        "Loss is a single number scoring how badly the model did. Low loss is good. The critical point is that you choose the loss function, and that choice defines the model's entire notion of success.",
      detail:
        "Pick the wrong loss and you get a model that is technically excellent at the wrong thing. A fraud detector trained to maximise raw accuracy on data that's 99.9% legitimate can score 99.9% by predicting 'not fraud' every single time — and catch nothing.",
    },
    {
      term: "Gradient descent is how the adjusting happens",
      explain:
        "For each parameter, you can compute which direction of change would reduce the loss — that's the gradient. Then you take a small step in that direction. Repeat, and the loss walks downhill.",
      detail:
        "The step size is the learning rate. Too large and the model overshoots and never settles. Too small and training takes forever. Tuning it is one of the most common practical chores in ML.",
    },
    {
      term: "Generalisation is the only thing that matters",
      explain:
        "Performing well on data the model already saw during training is trivial — a model with enough parameters can simply memorise it. The real question is whether it performs well on data it has never seen. That's generalisation, and it's the entire point.",
      detail:
        "This is why you never evaluate on your training data. You hold back a portion of your data, keep it sealed, and use it only at the end. Peeking at it while tuning quietly invalidates your result.",
    },
    {
      term: "Overfitting and underfitting",
      explain:
        "An overfit model has learned the noise and quirks of the training set rather than the underlying pattern — excellent on training data, poor on new data. An underfit model hasn't learned enough of the pattern and is poor on both.",
      detail:
        "Diagnose them by comparing training and validation scores. Large gap between the two: overfitting. Both scores bad: underfitting. This single check tells you what to do next more reliably than any other diagnostic.",
    },
    {
      term: "Supervised, unsupervised, and reinforcement learning",
      explain:
        "Supervised learning trains on labelled examples — inputs paired with correct answers. Unsupervised learning finds structure in unlabelled data, such as clustering customers into groups. Reinforcement learning learns from rewards earned by acting in an environment.",
      detail:
        "The overwhelming majority of ML deployed in business is supervised, and the hard part is almost never the algorithm. It's obtaining enough correctly labelled examples.",
    },
    {
      term: "Features are what the model actually sees",
      explain:
        "A model doesn't see a customer or a photograph. It sees numbers you chose to give it. The process of deciding and preparing those numbers is feature engineering, and it routinely matters more than model choice.",
      detail:
        "Giving a model 'date of signup' is far less useful than giving it 'days since signup'. Same information, but the second one is directly usable. Small reframings like this often beat a fancier algorithm.",
    },
    {
      term: "Correlation is all a model can find",
      explain:
        "Models detect statistical association between inputs and outputs. They do not establish that one causes the other, and they cannot tell the difference.",
      detail:
        "A model predicting hospital readmission may lean on which ward a patient was in — not because the ward causes readmission, but because sicker patients are sent there. Change the admissions policy and the model silently degrades.",
    },
  ],

  learningPath: [
    {
      title: "Build intuition before touching code",
      body: "Spend a few hours with interactive visual tools rather than tutorials. Use TensorFlow Playground to watch a small neural network separate two clusters of dots, and deliberately break it: set the learning rate to maximum, remove all hidden layers, add noise. Watching failure teaches faster than watching success.",
      effort: "3–4 hours",
      outcome: "You can explain, without notes, what a parameter is and what training does to it.",
    },
    {
      title: "Learn just enough Python",
      body: "You need variables, lists, dictionaries, loops, functions, and how to import a library. You do not need decorators, metaclasses, or async. Then learn pandas specifically: loading a CSV, inspecting it, filtering rows, and handling missing values. That's the daily reality of the work.",
      effort: "15–20 hours",
      outcome: "You can load a messy CSV, describe what's in it, and clean it without copying from Stack Overflow.",
    },
    {
      title: "Train your first model end to end on boring data",
      body: "Use scikit-learn on a tabular dataset — predicting house prices or customer churn. Deliberately avoid images and text at this stage; they add complexity that hides the fundamentals. Do the whole loop: split the data, train, evaluate on the held-out set, inspect the errors.",
      effort: "8–10 hours",
      outcome: "You have a model with an honest score on data it never saw during training.",
    },
    {
      title: "Learn to evaluate properly",
      body: "This is the step most people skip, and it's the one that separates practitioners from tutorial-followers. Learn the train/validation/test split, cross-validation, and — critically — why accuracy is a poor metric on imbalanced data. Learn precision, recall, and the confusion matrix until you can read one at a glance.",
      effort: "10–12 hours",
      outcome: "Given a confusion matrix, you can say what the model is getting wrong and who it hurts.",
    },
    {
      title: "Deliberately overfit, then fix it",
      body: "Take a working model and make it overfit on purpose: shrink the training set, add parameters, train for far too long. Watch the training score climb while the validation score falls. Then apply the standard fixes — more data, regularisation, early stopping, a simpler model — and watch the gap close.",
      effort: "5–6 hours",
      outcome: "You recognise overfitting from the learning curves alone, before anyone tells you.",
    },
    {
      title: "Study feature engineering on real, dirty data",
      body: "Find a genuinely messy dataset — inconsistent dates, free-text fields, missing values that mean different things. Spend your time on the inputs rather than the algorithm. Try to beat your best model purely by improving features while keeping the algorithm fixed.",
      effort: "12–15 hours",
      outcome: "You've improved a model measurably without changing the algorithm once.",
    },
    {
      title: "Learn one neural network framework",
      body: "Now, and only now, move to PyTorch. Implement a small network from scratch — forward pass, loss, backward pass, parameter update — before using the high-level helpers. Understanding what `loss.backward()` does is worth a hundred tutorials that just call it.",
      effort: "20–25 hours",
      outcome: "You can write a training loop by hand and explain each line of it.",
    },
    {
      title: "Ship something small and watch it degrade",
      body: "Deploy a model where real inputs reach it — even a tiny internal tool. Then monitor it over weeks. You'll observe data drift first-hand: inputs slowly stop resembling your training data and performance quietly erodes. Nothing else teaches this lesson as convincingly.",
      effort: "Ongoing",
      outcome: "You've experienced a model getting worse without anyone changing the code.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Amazon builds a CV-screening model on ten years of its own hiring decisions.",
      walkthrough:
        "From 2014 the team trained a system to score applicants one to five stars, learning from CVs submitted to the company over the previous decade. Because those submissions came overwhelmingly from men in a male-dominated industry, the labels encoded the pattern that male candidates had been preferred. By 2015 the model was penalising CVs containing the word \"women's\" — as in \"women's chess club captain\" — and favouring verbs like \"executed\" and \"captured\" that appeared more often on men's CVs.",
      result:
        "Amazon concluded it could not reliably make the model gender-neutral and scrapped the project. Note what did not go wrong: the maths was fine and the model fit its training data faithfully. Supervised learning reproduces the patterns in its labels, and the labels were a record of human decisions rather than of who performed well.",
      source: {
        label: "Dastin, Reuters (10 October 2018) — Amazon scraps secret AI recruiting tool that showed bias against women",
        url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women",
      },
    },
    {
      kind: "documented",
      scenario: "Google Flu Trends predicts more than double the actual rate of flu-related doctor visits.",
      walkthrough:
        "GFT estimated influenza-like illness from search query volume, and was explicitly built to predict the CDC's own reported figures. It worked well initially and then drifted: by the 2012–13 season it was persistently overestimating flu prevalence, at one point predicting more than double the proportion of doctor visits the CDC recorded. Search behaviour had changed — partly through media coverage of flu, partly through Google's own interface changes — while the model kept applying a relationship learned from an earlier world.",
      result:
        "Lazer and colleagues, writing in Science, concluded the errors were largely avoidable. This is data drift in its clearest published form: nobody changed the code, the model's accuracy simply decayed as the inputs stopped resembling what it was trained on.",
      source: {
        label: "Lazer, Kennedy, King & Vespignani, Science 343:1203–1205 (2014) — The Parable of Google Flu",
        url: "https://www.science.org/doi/10.1126/science.1248506",
      },
    },
    {
      kind: "documented",
      scenario: "Zillow shuts down its algorithmic home-buying business after the pricing model misreads the market.",
      walkthrough:
        "Zillow Offers used a model to price homes it would buy directly, then resell. Competing on speed meant committing to offers quickly, and the model failed to anticipate how far and fast prices would move in the post-pandemic market. It bought homes at prices above what they could later be sold for — an error that compounded across thousands of properties before it was visible in the accounts.",
      result:
        "In its Q3 2021 results Zillow announced roughly $304 million of inventory write-down within the Homes segment, attributed to purchasing homes at higher prices than its own current estimates of future selling prices, and said it would wind the business down and cut about 25% of its workforce. A forecasting error that would be invisible on a validation set became a nine-figure loss because each prediction triggered an irreversible purchase.",
      source: {
        label: "Zillow Group Q3 2021 results & plan to wind down Zillow Offers (investor release, Nov 2021)",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
  ],

  mistakes: [
    {
      mistake: "Evaluating the model on data it trained on",
      why: "It produces spectacular scores that mean nothing. A sufficiently flexible model can memorise the training set outright, and memorisation looks identical to learning if you only test on memorised examples.",
      fix: "Split your data before you do anything else, and treat the test set as sealed. Look at it once, at the very end. If you tune the model against it repeatedly, it has effectively become training data and your final number is inflated.",
    },
    {
      mistake: "Using accuracy on imbalanced data",
      why: "When 99% of your examples are one class, predicting that class every time scores 99%. The number is impressive and the model is worthless.",
      fix: "Use precision, recall, and F1 for the class you actually care about, and always look at the confusion matrix. Decide before training which error is more costly — a missed fraud or a wrongly frozen account — and optimise for that.",
    },
    {
      mistake: "Data leakage — letting information from the future into training",
      why: "It's the most common cause of a model that scores brilliantly in development and fails in production. If a feature encodes something only knowable after the outcome, the model exploits it and you learn nothing.",
      fix: "For every feature, ask: 'would this value be available at the exact moment I need the prediction?' Predicting cancellation using a 'cancellation reason' field is the obvious case; subtler ones include aggregates computed over the whole dataset before splitting.",
    },
    {
      mistake: "Reaching for deep learning by default",
      why: "On tabular business data — the majority of real problems — gradient-boosted trees typically match or beat neural networks, train in seconds rather than hours, and are far easier to inspect.",
      fix: "Start with a trivial baseline: predict the average, or the most common class. Then try logistic regression or a gradient-boosted tree. Only escalate when a simpler model has demonstrably run out of room.",
    },
    {
      mistake: "Treating the model's confidence score as a probability",
      why: "A classifier that outputs 0.9 is not saying 'this is correct 90% of the time'. Most models are poorly calibrated by default, and neural networks in particular tend to be overconfident.",
      fix: "If you're routing decisions by confidence — auto-approve above 0.9, send the rest to a human — calibrate the model first with something like Platt scaling or isotonic regression, then verify against held-out data that 0.9 really does mean about 90%.",
    },
    {
      mistake: "Ignoring the data and tuning the model",
      why: "Beginners spend days on hyperparameters and minutes on data quality. The returns are almost always the other way around.",
      fix: "Before tuning anything, look at 50 individual examples the model got wrong. You'll usually find mislabelled rows, a broken parsing step, or a feature that's empty half the time. Fixing those beats any hyperparameter sweep.",
    },
    {
      mistake: "Assuming a model stays accurate after deployment",
      why: "The world changes. Customer behaviour shifts, a supplier changes their file format, a competitor launches. The model keeps applying patterns that no longer hold, silently.",
      fix: "Monitor input distributions and output distributions, not just uptime. Set an alert for when the share of predictions in each class moves beyond an expected band, and schedule periodic retraining from the start.",
    },
  ],

  bestPractices: [
    "Establish a dumb baseline before your first real model. If predicting the average gets you within 3% of your sophisticated model, the sophisticated model is not earning its complexity.",
    "Split your data first, before any exploration, cleaning, or scaling. Statistics computed across the full dataset and then applied to both halves is a subtle, extremely common form of leakage.",
    "Write down the metric and the acceptable threshold before you train. Deciding what counts as success after seeing the results is how teams talk themselves into shipping something that doesn't work.",
    "Version your data alongside your code. A model is the product of both, and 'it worked last month' is unanswerable if you can't reconstruct the exact training set.",
    "Inspect errors individually, not just in aggregate. Aggregate metrics tell you how much is wrong; reading actual failures tells you why, which is the only thing you can act on.",
    "Prefer the simplest model that clears your threshold. Simpler models are faster, cheaper, easier to debug, and far easier to explain to the person who has to defend the decision.",
    "Check performance across subgroups, not just overall. A model at 90% overall can be at 60% for one group of users, and the aggregate number will never reveal it.",
    "Document what the model must not be used for. The most damaging failures come from models applied confidently to populations or purposes they were never trained on.",
  ],

  proTips: [
    "When a result looks too good, assume leakage before you assume brilliance. Search your features for anything computed after the event you're predicting. This instinct will save you more embarrassment than any other habit in this guide.",
    "Plot learning curves — training and validation score against training set size. If both curves have flattened and converged, more data won't help and you need a different approach. If they're still separating, more data will help. This one plot answers 'what should I do next?' better than intuition.",
    "Shuffle your labels and retrain. Performance should collapse to chance. If it doesn't, something in your pipeline is leaking the answer, and you've just caught a bug that would otherwise have reached production.",
    "For imbalanced problems, tune the decision threshold rather than the model. The default 0.5 cutoff is an arbitrary convention, and moving it is a free lever that trades precision against recall to match what the business actually needs.",
    "Keep a permanently held-out 'golden set' of a few hundred hand-checked examples that never enters any training run. When you've iterated fifty times and no longer trust your validation scores, it's the only honest number you have left.",
    "Time your training runs and record them. A model that takes six hours to retrain will be retrained rarely, which means it will spend most of its life stale. Speed is a reliability feature, not a convenience.",
  ],

  businessApplications: [
    "Demand forecasting: predicting order volume per SKU per week, which drives purchasing and staffing. Often the highest-ROI first ML project because the cost of error is already measurable in existing spreadsheets.",
    "Lead scoring: ranking inbound enquiries by likelihood to close, so a small sales team spends its hours on the top of the list rather than working chronologically.",
    "Document extraction: pulling structured fields from invoices, contracts, and forms. Replaces a genuinely tedious job and has an obvious accuracy benchmark — the humans currently doing it.",
    "Churn prediction and retention: identifying at-risk accounts early enough that intervention is still possible, and quantifying which signals actually precede cancellation.",
    "Quality inspection: flagging likely defects from images or sensor data, used as a triage layer in front of human inspectors rather than a replacement for them.",
    "Dynamic pricing and promotion targeting: estimating price sensitivity per segment. Powerful, and the area where fairness and regulatory scrutiny arrive fastest — proceed with legal input.",
  ],

  lifeApplications: [
    "Calibrated thinking about evidence. Once you internalise train/test splits, you notice how often a claim is 'validated' on the same data that produced it — in diet studies, in business advice, in your own reasoning about what works for you.",
    "Recognising base rates. The imbalanced-data problem is the medical-test problem: a 99%-accurate test for a rare condition still produces mostly false positives. This changes how you interpret any screening result you're ever given.",
    "Separating correlation from cause in your own life. 'I was productive on days I woke at 5am' is a correlation with an obvious confounder — you woke early on days you already felt good. Models make this failure mode visible enough to spot in yourself.",
    "Iterating on habits deliberately. Change one variable, measure over a fixed period, keep what works. It's the experimental discipline of ML applied to a much smaller dataset: you.",
    "Reading AI news critically. When a system claims superhuman performance, you'll now ask what it was evaluated on and whether that resembles the real world. Frequently it doesn't.",
  ],

  exercises: [
    {
      title: "Predict something you already understand",
      brief:
        "Find a dataset about a subject you know well — a sport, a game, local property prices. Train a simple model to predict an outcome, then examine the features it relies on most. Because you have domain knowledge, you can tell whether its reasoning is sensible or absurd.",
      success:
        "You can point to at least one feature the model weighted heavily and explain whether that makes real-world sense.",
      time: "3–4 hours",
    },
    {
      title: "Break your own model on purpose",
      brief:
        "Take a working model and sabotage it four ways: train on 5% of the data, train for 100× too long, set the learning rate to 10, and shuffle the labels. Record what happens to training and validation scores in each case.",
      success:
        "You can predict the shape of each failure before running it, and your notes explain why each one happened.",
      time: "2 hours",
    },
    {
      title: "The leakage hunt",
      brief:
        "Deliberately build a leaky model: include a feature that's only knowable after the outcome. Note the suspiciously high score. Then remove it and record the honest score. Write down the gap.",
      success:
        "You have two numbers and a one-paragraph explanation of why the first one was a lie.",
      time: "1–2 hours",
    },
    {
      title: "Beat the algorithm with features",
      brief:
        "Fix your model and its hyperparameters. Now improve the score using only feature engineering — combining columns, extracting date components, encoding categories differently, handling missing values more carefully.",
      success: "A measurable improvement on held-out data with the algorithm untouched.",
      time: "4–6 hours",
    },
    {
      title: "Explain it to someone non-technical",
      brief:
        "Take a model you've built and explain to a friend outside the field what it predicts, how it learned, one thing it's good at, and one way it could be wrong. No jargon at all.",
      success:
        "They can accurately restate what the model does and name one limitation.",
      time: "30 minutes",
    },
  ],

  checklist: [
    "I can explain what a parameter is and what training changes about it",
    "I split data into train/validation/test before any other processing step",
    "I chose a metric that matches the real cost of each type of error",
    "I compared against a trivial baseline and beat it meaningfully",
    "I checked every feature for availability at prediction time (no leakage)",
    "I compared training and validation scores to diagnose over/underfitting",
    "I read at least 50 individual errors rather than only aggregate metrics",
    "I checked performance separately across the subgroups that matter",
    "I verified confidence scores are calibrated before routing decisions by them",
    "I documented what the model should not be used for",
    "I have a plan to monitor input drift and retrain on a schedule",
  ],

  faqs: [
    {
      q: "Do I need advanced mathematics to learn machine learning?",
      a: "Not to start. You can build correct, useful models with comfortable high-school algebra and a solid grasp of the concepts. Maths becomes necessary when you want to modify algorithms or read research papers — but that's a later stage, not an entry requirement.",
    },
    {
      q: "How much data do I need?",
      a: "It depends far more on problem complexity than on any fixed number. Simple tabular problems often work with a few thousand rows; image and language tasks usually need far more, which is why people fine-tune existing models instead. Data quality beats data quantity consistently.",
    },
    {
      q: "What's the difference between machine learning and AI?",
      a: "AI is the broad goal of machines performing tasks that seem to require intelligence. Machine learning is one approach to that goal — learning patterns from data rather than following hand-written rules. Today ML dominates AI so thoroughly that people use the terms interchangeably, though they aren't identical.",
    },
    {
      q: "Is deep learning always better?",
      a: "No. On structured tabular data, gradient-boosted trees frequently outperform neural networks while training in seconds and remaining far easier to interpret. Deep learning dominates images, audio, and language, where the raw input has structure worth learning from scratch.",
    },
    {
      q: "Why does my model perform worse in production than in testing?",
      a: "The three usual causes are data leakage during development, a test set that no longer resembles live traffic, and repeated tuning against the test set until the score became optimistic. Check them in that order — leakage is the most common by a wide margin.",
    },
    {
      q: "Can a model explain its own decisions?",
      a: "Simple models like linear regression and shallow trees are inspectable by design. Large models are not, though tools like SHAP can attribute a prediction to input features. Treat those attributions as useful evidence about the model's behaviour, not as the model's reasoning.",
    },
    {
      q: "How long does it take to become employable in ML?",
      a: "For someone who can already program, roughly six to twelve months of consistent practice to reach junior competence — most of which should be spent on data handling and evaluation rather than algorithms. Portfolio projects that show honest evaluation impress far more than high scores.",
    },
  ],

  tools: [
    { name: "scikit-learn", what: "The standard Python library for classical ML. Consistent API, excellent documentation, and the right first stop for almost any tabular problem.", cost: "Free", url: "https://scikit-learn.org" },
    { name: "pandas", what: "Data loading, cleaning, and transformation. Realistically where most of your time goes.", cost: "Free", url: "https://pandas.pydata.org" },
    { name: "Jupyter / Google Colab", what: "Interactive notebooks for exploration. Colab gives you free GPU access with no local setup.", cost: "Free", url: "https://colab.research.google.com" },
    { name: "XGBoost / LightGBM", what: "Gradient-boosted trees. The workhorse for tabular problems and a strong default before considering neural networks.", cost: "Free", url: "https://lightgbm.readthedocs.io" },
    { name: "PyTorch", what: "The dominant deep learning framework in research and increasingly in production. Learn it after the fundamentals, not before.", cost: "Free", url: "https://pytorch.org" },
    { name: "TensorFlow Playground", what: "A browser visualisation of a neural network training in real time. The fastest way to build intuition.", cost: "Free", url: "https://playground.tensorflow.org" },
    { name: "Weights & Biases", what: "Experiment tracking — records every run's parameters and results so you can tell what actually helped.", cost: "Freemium", url: "https://wandb.ai" },
    { name: "SHAP", what: "Attributes individual predictions to input features. Useful for debugging and for explaining decisions to stakeholders.", cost: "Free", url: "https://shap.readthedocs.io" },
  ],

  resources: [
    { title: "An Introduction to Statistical Learning", kind: "Book", note: "The best free starting text. Rigorous but readable, with the maths kept proportionate. Available legally as a free PDF.", url: "https://www.statlearning.com" },
    { title: "Andrew Ng's Machine Learning Specialization", kind: "Course", note: "Still the clearest structured introduction available. Strong on intuition, light on unnecessary formalism." },
    { title: "fast.ai — Practical Deep Learning for Coders", kind: "Course", note: "Top-down: you train a working model in lesson one and learn the theory as you need it. Excellent if tutorials bore you.", url: "https://course.fast.ai" },
    { title: "Google's Rules of Machine Learning", kind: "Docs", note: "Forty-three hard-won engineering rules from production ML at scale. Short, and worth more than most textbooks once you've built something.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
    { title: "Designing Machine Learning Systems — Chip Huyen", kind: "Book", note: "The gap between a trained model and a working system. Read it before your first deployment, not after." },
    { title: "Kaggle Learn", kind: "Course", note: "Short practical micro-courses with immediate hands-on exercises. Good for filling specific gaps quickly.", url: "https://www.kaggle.com/learn" },
  ],

  internalLinks: [
    { slug: "neural-networks-explained", anchor: "how neural networks build on these ideas", context: "In the section on gradient descent" },
    { slug: "how-large-language-models-work", anchor: "what a language model is actually predicting", context: "When contrasting supervised learning with language modelling" },
    { slug: "python-for-data-work", anchor: "the Python you actually need for data work", context: "In the learning path, step two" },
  ],

  relatedGuides: [
    "neural-networks-explained",
    "how-large-language-models-work",
    "python-for-data-work",
  ],

  conclusion: [
    "Machine learning is not magic and it is not thinking. It is a systematic search for numbers that make a function's outputs less wrong, guided by examples you supplied and judged by a metric you chose. Both of those choices are yours, which is precisely why the interesting failures are rarely mathematical — they're failures of judgement about data and about what success should mean.",
    "If you take one habit from this guide, make it evaluation. The ability to look at an impressive result and ask 'what was it tested on, and could that number be lying to me?' is worth more than fluency in any framework. Frameworks change every few years. That question doesn't.",
    "Start small and start honest. Train something on data you understand, evaluate it properly, and read its mistakes one by one. You'll learn more from one carefully evaluated model than from ten tutorials that only ever showed you the happy path.",
  ],

  cta: {
    headline: "Building something real with machine learning?",
    body: "We design and ship production ML systems — with the evaluation, monitoring and human oversight that keep them working after launch day.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
