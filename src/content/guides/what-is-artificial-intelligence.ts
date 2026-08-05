import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "what-is-artificial-intelligence",
  seoTitle: "What Is Artificial Intelligence? A Straight Answer",
  metaDescription:
    "What AI actually is, what it isn't, and how to tell a real capability from a marketing claim — without hype in either direction.",
  title: "What Is Artificial Intelligence, Really?",
  keywords: [
    "what is artificial intelligence",
    "AI explained",
    "types of AI",
    "narrow AI vs general AI",
    "how does AI work",
    "AI for beginners",
  ],
  category: "artificial-intelligence",
  level: "Beginner",
  updated: "2026-08-04",
  author: EHTIJAD_ALI,
  readingTime: 12,

  intro: [
    "Ask ten people what artificial intelligence is and you'll get answers ranging from 'a computer that thinks' to 'a marketing word'. Both contain something true, which is exactly why the term is so slippery — and why so much money is currently being spent on projects whose failure was predictable from the first meeting.",
    "The workable definition is unglamorous: artificial intelligence is the field of building systems that perform tasks which, when a human does them, we'd describe as requiring intelligence. Note what that definition is anchored to. It's about the task, not about the mechanism, and certainly not about the machine having an inner life.",
    "This guide gives you a mental model that survives contact with actual products. What the different things called AI actually are, why the definition keeps moving, where the real capability boundary sits today, and how to evaluate a claim without either dismissing it or believing it wholesale.",
  ],

  whyItMatters: [
    "You are being asked to make decisions about this technology whether or not you feel qualified to. Whether to adopt a tool, whether to trust an output, whether a supplier's claim is plausible, whether your job is affected. Those decisions are being made by people at every level of every organisation, mostly without a working model of what the technology does.",
    "The commercial cost of not having that model is specific and large. Projects get funded on the assumption that a system can do something it structurally cannot — reason reliably about arithmetic, know about last week, guarantee an answer is correct. Those projects don't fail at launch. They fail six months in, after the budget is spent, and the post-mortem usually blames the vendor rather than the premise.",
    "There's a civic dimension too. These systems increasingly sit between people and decisions that matter — credit, hiring, healthcare triage, benefits. Understanding that a model reproduces patterns in the data it was given, rather than exercising judgement, changes what questions you know to ask when one of those decisions goes against someone.",
  ],

  coreConcepts: [
    {
      term: "AI is a goal; machine learning is the current method",
      explain:
        "Artificial intelligence names the ambition — machines doing things that seem to need intelligence. Machine learning is one approach to that ambition: rather than writing rules by hand, you let a system find patterns in examples.",
      detail:
        "Earlier AI was largely hand-written rules — expert systems encoding what a specialist knew. That approach hit a wall on tasks nobody can articulate rules for, like recognising a face. Learning from examples solved that, which is why ML now dominates so thoroughly that the terms get used interchangeably.",
    },
    {
      term: "Narrow AI is what exists; general AI does not",
      explain:
        "Every system deployed today is narrow: it does one class of task, defined at training time. A model that plays chess superbly cannot make a cup of tea, and cannot learn to without being rebuilt.",
      detail:
        "General AI — a system that transfers competence across arbitrary domains the way a person does — remains a research goal, not a product. Treat any claim that a shipping product has it as a claim about marketing, not engineering.",
    },
    {
      term: "The definition keeps moving",
      explain:
        "Tasks stop counting as AI once machines do them reliably. Optical character recognition, spam filtering, route planning and speech transcription were all AI, and are now just software.",
      detail:
        "This is sometimes called the AI effect, and it has a practical implication: 'is it really AI?' is usually the wrong question. 'What can it do, how reliably, and on what inputs?' is the one that produces useful answers.",
    },
    {
      term: "Models learn correlations, not causes",
      explain:
        "A system trained on examples finds statistical associations between inputs and outputs. It cannot distinguish a cause from a coincidence, and it has no way to know which of the patterns it found are the ones you meant.",
      detail:
        "This single fact explains most high-profile AI failures. The model was working correctly; it had simply learned a pattern that held in the training data and didn't hold in the world.",
    },
    {
      term: "Training and inference are different activities with different costs",
      explain:
        "Training is the expensive, one-off process of learning parameters from data. Inference is using the trained model to produce an output, which is comparatively cheap and fast.",
      detail:
        "This is why you can use a model that cost tens of millions to train for a fraction of a penny per request, and why fine-tuning an existing model is affordable when building one from scratch is not.",
    },
    {
      term: "Generative AI is one branch, not the whole field",
      explain:
        "Systems that produce text, images, audio or code are generative. They dominate current attention, but a great deal of deployed AI is discriminative — classifying, ranking, detecting, forecasting — and often more commercially valuable.",
      detail:
        "Fraud detection, demand forecasting and quality inspection generate no headlines and considerable profit. Don't let the generative wave push you toward a chatbot when your actual problem is a classifier.",
    },
    {
      term: "Capability is not reliability",
      explain:
        "A system that can do something impressive some of the time is very different from one that does it dependably. Demos show the first; production requires the second.",
      detail:
        "The gap between the two is where nearly all the engineering effort in a real AI project goes, and it's the part that demos are specifically designed not to reveal.",
    },
    {
      term: "The training data defines the boundary",
      explain:
        "A system's competence is bounded by what it was trained on. Give it inputs unlike anything in that data and it doesn't refuse — it produces an output anyway, with no signal that it's now guessing.",
      detail:
        "'What was it trained on, and does my situation resemble that?' is the single most useful question you can ask about any AI product, and the one vendors are least prepared for.",
    },
  ],

  learningPath: [
    {
      title: "Learn to name the task",
      body: "For every AI product you encounter, write down what it takes as input and what it produces as output, in plain words. 'Takes a photo, returns one of twelve category labels.' This strips away the branding and leaves the actual capability.",
      effort: "2–3 hours across a week",
      outcome: "You can describe any AI product's function in one sentence without using the word AI.",
    },
    {
      title: "Use several systems deliberately",
      body: "Spend an hour each with a language model, an image generator and a classifier-style tool. Not to get work done — to map where each becomes unreliable. Push each one until it fails and note what the failure looked like.",
      effort: "3–4 hours",
      outcome: "First-hand evidence of how differently these systems fail.",
    },
    {
      title: "Understand learning from examples",
      body: "Work through a visual demonstration of a model learning — TensorFlow Playground, or a teachable-machine style tool where you supply your own examples. Deliberately give it biased or insufficient examples and observe the result.",
      effort: "2–3 hours",
      outcome: "You've seen training data quality determine model behaviour directly.",
    },
    {
      title: "Study two real failures properly",
      body: "Read the documented cases below in full rather than in summary. Both are instructive precisely because nothing malfunctioned — the systems did exactly what they were built to do.",
      effort: "2 hours",
      outcome: "You can explain a real AI failure without using the word 'glitch'.",
    },
    {
      title: "Learn the evaluation questions",
      body: "Build yourself a short standard list: what was it trained on, how was it evaluated, what does it do when it doesn't know, who reviews the output, what happens when it's wrong. Use it on the next AI product anyone pitches you.",
      effort: "1–2 hours",
      outcome: "A reusable list that changes how vendor conversations go.",
    },
    {
      title: "Find one real use in your own work",
      body: "Identify a task you do that is repetitive, language-heavy or pattern-based, and tolerates review. Try it. The point is calibration — you'll learn more from one honest attempt than from any amount of reading about capability.",
      effort: "5–10 hours",
      outcome: "A grounded personal view of where the technology helps you specifically.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A hiring model that learned who recruiters had preferred, not who performed well.",
      walkthrough:
        "Amazon trained a system from 2014 to score job applicants from their CVs, learning from a decade of the company's own submissions. Because the applicant pool had been overwhelmingly male, the pattern the model found was that male candidates were preferred. It penalised CVs containing the word \"women's\" and favoured verbs that appeared more often on men's CVs.",
      result:
        "The project was scrapped after the company concluded it couldn't reliably make the model gender-neutral. This is the clearest possible illustration of what these systems do and don't do: it found a genuine statistical pattern in real data, faithfully. It had no capacity to notice that the pattern was a record of human preference rather than of merit, because noticing that is not the kind of thing it does.",
      source: {
        label: "Dastin, Reuters (10 October 2018) — Amazon scraps secret AI recruiting tool that showed bias against women",
        url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women",
      },
    },
    {
      kind: "documented",
      scenario: "A system that confidently invented six court cases, then confirmed they were real.",
      walkthrough:
        "A lawyer used ChatGPT to research precedent for a claim against the airline Avianca and filed a brief citing decisions that did not exist, complete with fabricated quotations. When challenged, he asked the model whether the cases were real. It said yes.",
      result:
        "The court sanctioned the lawyers $5,000 in June 2023. The instructive part is the second failure: asked to verify its own output, the system produced the plausible continuation, which was agreement. There was no internal fact to consult and no mechanism for doubt. Fluency and accuracy are separate properties, and only one of them was being optimised.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "illustration",
      scenario: "The demo that works and the deployment that doesn't.",
      walkthrough:
        "A pattern worth recognising before you sign anything. A vendor demonstrates a system on inputs they selected. It performs impressively. You deploy it against your own traffic, which includes malformed records, edge cases, an unusual regional format, and a category nobody mentioned. Performance is visibly worse, and nobody can say precisely why.",
      result:
        "Nothing dishonest necessarily happened — the demo showed genuine capability on the inputs it was given. The correct response is not scepticism about AI in general but a specific request: run it on a sample of our real data, including the awkward records, and let us see the errors. A vendor confident in their system will agree.",
    },
  ],

  mistakes: [
    {
      mistake: "Treating AI as a single thing you either adopt or don't",
      why: "The category spans classifiers, forecasters, recommenders and generators, with wildly different maturity, cost and risk. 'Should we use AI?' is unanswerable as posed.",
      fix: "Start from a specific task and ask what method suits it. Sometimes the answer is a language model; often it's a much simpler statistical method or better process design.",
    },
    {
      mistake: "Assuming a confident output is a correct one",
      why: "These systems produce output with the same fluency regardless of whether they have relevant knowledge. Confidence is a property of the format, not evidence about accuracy.",
      fix: "Verify anything consequential, and design systems so that verification is possible — cited sources, quoted evidence, human review at the decision point.",
    },
    {
      mistake: "Believing the system understands your business",
      why: "A general model has never seen your pricing, your policies or your history. It will still answer questions about them, plausibly.",
      fix: "Supply the relevant information at request time through retrieval. Knowledge has to be given; it isn't inferred from context you didn't provide.",
    },
    {
      mistake: "Judging a system by its best output",
      why: "Everyone shows the good one. The distribution of outputs — and specifically the worst 5% — determines whether a system is usable in production.",
      fix: "Evaluate on a fixed set of realistic inputs including deliberately awkward ones, and look at the failures rather than the successes.",
    },
    {
      mistake: "Expecting the system to say when it doesn't know",
      why: "Producing an output is what these systems do. Abstaining is a behaviour that has to be explicitly built, and by default it doesn't exist.",
      fix: "Require an explicit 'insufficient information' path, and test it with questions you know are outside scope.",
    },
    {
      mistake: "Assuming performance is stable over time",
      why: "The world shifts. Inputs gradually stop resembling training data and accuracy erodes with nobody changing a line of code.",
      fix: "Monitor inputs and outputs, not just uptime, and plan for periodic retraining from the outset rather than as a later project.",
    },
  ],

  bestPractices: [
    "Start from a task with a measurable current cost. 'We spend nine hours a week on this' gives you a benchmark; 'we should use AI' gives you nothing to evaluate against.",
    "Ask what a system was trained on before asking what it can do. The answer bounds everything else.",
    "Keep a human at the point where a decision becomes irreversible. Review is cheap; unwinding a wrong automated decision usually isn't.",
    "Prefer systems whose output you can check. Cited sources, quoted evidence, and structured outputs turn an unverifiable claim into a verifiable one.",
    "Pilot on real data including the awkward records, not on a curated sample. The awkward records are the project.",
    "Write down what the system should not be used for, and circulate it. Most damaging misuse comes from confident application outside the intended scope.",
    "Measure against a simple baseline. If a rule or a lookup table gets 90% of the value, the complexity of a model may not be worth its operating cost.",
    "Treat vendor accuracy figures as questions rather than answers. Accuracy on what dataset, measured how, against which baseline?",
  ],

  proTips: [
    "Ask a vendor what their system does when it's uncertain. The quality of that answer tells you more about engineering maturity than any capability claim — teams who've run something in production have thought hard about it.",
    "When evaluating any AI claim, mentally substitute the specific mechanism for the word AI. 'Our AI understands your customers' becomes 'our statistical model finds correlations in your customer data', which is both accurate and easier to assess.",
    "Look at who bears the cost of an error. Systems where the vendor bears it are engineered very differently from systems where you or your customer does.",
    "Test any tool on a subject you know deeply. You cannot evaluate accuracy in a domain where you can't tell right from plausible, and everyone overestimates a system in areas they can't check.",
    "Notice when a system is being used as a decision-maker rather than a decision-support tool. The slide from 'this helps me decide' to 'this decided' happens gradually and is rarely a deliberate choice.",
  ],

  businessApplications: [
    "Classification at volume: routing tickets, categorising documents, flagging transactions — mature, measurable, and usually the highest-return first project.",
    "Extraction: pulling structured data out of unstructured documents, where the benchmark is the person currently doing it manually.",
    "Forecasting: demand, staffing, inventory. Often the clearest ROI because the cost of current error is already visible in spreadsheets.",
    "Drafting and summarising: first-pass content, meeting notes, report generation, always under human review before anything leaves the building.",
    "Search over your own material: retrieval systems that answer questions with citations, solving the real problem that documentation exists but can't be found.",
    "Anomaly detection: learning what normal looks like in transactions or sensor data and surfacing departures for human investigation.",
  ],

  lifeApplications: [
    "Evaluating the AI features arriving in tools you already use, and deciding which are genuinely useful versus which are a checkbox on a roadmap.",
    "Reading news about AI with calibration — asking what was measured and on what, rather than accepting either the breathless or the dismissive framing.",
    "Understanding decisions made about you. If an automated system declines something, knowing that it learned from historical patterns tells you what to ask when you appeal.",
    "Deciding what to learn. Understanding that these systems handle pattern-matching well and judgement, accountability and novel situations poorly is genuinely useful career information.",
    "Using the tools well yourself — which mostly means knowing which half of a problem to hand over and which half to keep.",
  ],

  exercises: [
    {
      title: "Strip the branding",
      brief:
        "Take five products marketed as AI. For each, write the input and output in plain language, without using the word AI. Note how many turn out to be classifiers.",
      success: "Five one-line descriptions that a sceptical colleague would accept as accurate.",
      time: "1–2 hours",
    },
    {
      title: "Find the boundary",
      brief:
        "Take one AI tool and deliberately find where it becomes unreliable. Vary the input type, the domain, the language, the obscurity. Document the point where confidence and correctness diverge.",
      success: "A written description of where this specific tool stops being trustworthy.",
      time: "2 hours",
    },
    {
      title: "The vendor interrogation",
      brief:
        "Write your five standard evaluation questions. Use them on a real product — a vendor, or the documentation of a tool you already use. Note which questions have no available answer.",
      success: "You've identified at least one claim you can't verify.",
      time: "1–2 hours",
    },
    {
      title: "Bias by construction",
      brief:
        "Using any teachable-machine style tool, train a small classifier on deliberately unrepresentative examples. Then test it on the cases you excluded.",
      success: "You've produced a biased model on purpose and can explain exactly why it behaves that way.",
      time: "1 hour",
    },
  ],

  checklist: [
    "I can state what task this system performs, in input/output terms",
    "I know what it was trained on and whether my data resembles that",
    "I've seen it run on my own realistic inputs, including awkward ones",
    "I've looked at its failures, not only its successes",
    "There is a defined behaviour for 'I don't know'",
    "A human reviews anything before it becomes irreversible",
    "I compared it against a simple baseline",
    "I know who is accountable when the output is wrong",
    "There's a plan to monitor performance over time",
    "I've written down what it must not be used for",
  ],

  faqs: [
    {
      q: "Is AI actually intelligent?",
      a: "It performs tasks we associate with intelligence without anything resembling understanding, beliefs or goals. The productive framing is behavioural: judge what it reliably does on your task rather than arguing about what's happening inside.",
    },
    {
      q: "What's the difference between AI, machine learning and deep learning?",
      a: "AI is the broad goal. Machine learning is the dominant approach — learning patterns from examples rather than following hand-written rules. Deep learning is a subset of machine learning using multi-layer neural networks.",
    },
    {
      q: "Will AI take my job?",
      a: "It automates tasks rather than whole roles, and jobs are bundles of tasks. Roles that are mostly repetitive pattern-work are exposed; those involving accountability, physical judgement or genuinely novel situations far less so. The realistic near-term effect is changed job composition rather than wholesale replacement.",
    },
    {
      q: "Is general AI close?",
      a: "Nobody knows, and confident predictions in either direction have a poor track record. What's certain is that every deployed system today is narrow, and planning should be based on what exists rather than on forecasts.",
    },
    {
      q: "Why does AI make such obvious mistakes?",
      a: "Because 'obvious' is a human judgement based on understanding, and the system has none. It optimises a statistical objective on training data. Errors that look absurd to you are frequently unremarkable in the space the model actually operates in.",
    },
    {
      q: "How do I know if a company's AI claim is real?",
      a: "Ask what it was trained on, how it was evaluated, what it does when uncertain, and whether you can run it on your own data. Vague answers to specific questions are the signal — not the technology itself.",
    },
  ],

  tools: [
    { name: "ChatGPT / Claude / Gemini", what: "General-purpose language models. The fastest way to develop calibrated intuition — use several, they fail differently.", cost: "Freemium" },
    { name: "Teachable Machine", what: "Train a classifier in a browser with your own examples. The quickest demonstration of how training data determines behaviour.", cost: "Free", url: "https://teachablemachine.withgoogle.com" },
    { name: "TensorFlow Playground", what: "Watch a small neural network learn in real time. Good intuition per minute spent.", cost: "Free", url: "https://playground.tensorflow.org" },
    { name: "Hugging Face", what: "Thousands of open models with documentation on what each was trained on — useful for seeing the range beyond chatbots.", cost: "Freemium", url: "https://huggingface.co" },
  ],

  resources: [
    { title: "Elements of AI", kind: "Course", note: "A free, genuinely well-made introduction aimed at non-specialists. Start here if this guide left you wanting more.", url: "https://www.elementsofai.com" },
    { title: "Google's Rules of Machine Learning", kind: "Docs", note: "Engineering rules from running ML at scale. Short, practical, and quietly deflating of a lot of hype.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
    { title: "AI Snake Oil — Narayanan & Kapoor", kind: "Book", note: "Careful, evidence-led separation of what works from what's being sold. A useful counterweight in both directions." },
    { title: "Simon Willison's blog", kind: "Newsletter", note: "Hands-on, sober writing about what these tools actually do day to day.", url: "https://simonwillison.net" },
  ],

  internalLinks: [
    { slug: "how-machine-learning-actually-works", anchor: "how machines actually learn from data", context: "In the AI vs ML concept" },
    { slug: "how-large-language-models-work", anchor: "what a language model is really doing", context: "In the generative AI concept" },
    { slug: "evaluating-ai-systems", anchor: "how to evaluate a system properly", context: "In the capability vs reliability concept" },
  ],

  relatedGuides: [
    "how-machine-learning-actually-works",
    "how-large-language-models-work",
    "evaluating-ai-systems",
  ],

  conclusion: [
    "Artificial intelligence is a goal, not a technology, and the systems currently pursuing it all work the same fundamental way: they find statistical patterns in data they were given and apply them to new inputs. That's genuinely powerful and genuinely limited, and both halves matter.",
    "The most useful habit this understanding gives you is a question rather than an opinion. Not 'is this real AI?' but 'what was it trained on, what exactly does it do, how does it fail, and who checks?' Those questions cut through marketing in both directions — they deflate overclaiming and they also reveal the quiet, unglamorous systems that are genuinely working.",
    "Pick one AI product you already use and answer those four questions about it this week. If you can't, that's information too.",
  ],

  cta: {
    headline: "Trying to work out what AI can actually do for you?",
    body: "We map operations, find the tasks where AI genuinely helps, and say plainly when it doesn't.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
