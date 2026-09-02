import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "neural-networks-when-they-are-worth-it",
  seoTitle: "Neural Networks: When You Actually Need One",
  metaDescription:
    "They get all the attention and they are the wrong answer for most business problems. The three situations where they genuinely win, and what they cost you.",
  title: "When You Actually Need a Neural Network",
  keywords: [
    "neural network business use case",
    "when to use deep learning",
    "neural network vs xgboost",
    "image recognition business",
    "deep learning for business",
    "is deep learning worth it",
  ],
  category: "deep-learning",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  brief: {
    inOneMinute:
      "The honest answer is usually no. There is one clear test for when it is yes, and most businesses proposing this are on the wrong side of it.",
    problem: {
      headline: "People stand at a belt for eight hours and accuracy falls by the end",
      detail:
        "A recycling operator sorting mixed household waste. The wrong material downgrades an entire load, and the task degrades human attention by design.",
    },
    wrongApproach: {
      what: "Add more people to the line",
      why: "The problem was never headcount. Asking a person to be a camera for eight hours reproduces the same failure at greater cost, and turnover was already high because the job is unpleasant.",
    },
    rightApproach: {
      what: "Use it only where the input cannot be written down as numbers",
      why: "There is no table of features describing what a contaminated item looks like on a moving belt. That is the test. When the input is an image, a sound or language, and cannot be reduced to a spreadsheet, this family finally earns its cost.",
    },
    context: {
      where: "Visual inspection, speech, document reading. Genuinely not much else.",
      decision: "Whether to spend considerably more than the simpler options cost.",
      metric: "Load quality, and whether a person is doing work a person is good at.",
    },
    takeaway:
      "It was scoped to the few item types causing most of the loss. Scoped to everything it would have needed far more labelled data and been mediocre at all of it.",
  },

  story: {
    title: "One of the few cases where the answer is genuinely yes",
    caption:
      "The first version highlights for a person rather than driving a mechanism. Cheaper, safer, and it generates the corrections the next version learns from.",
    stages: [
      { stage: "Problem", label: "An unpleasant job done badly", detail: "Through no fault of the people doing it. Contamination downgrades whole loads." },
      { stage: "Data", label: "Pictures, not rows and columns", detail: "Which is the distinguishing test. There is no table of measurements to hand a simpler model." },
      { stage: "Model", label: "Thousands of labelled images", detail: "Tedious, unavoidable, and the single biggest determinant of whether any of it works." },
      { stage: "Prediction", label: "Suspect items, recognised on the belt", detail: "Limited to the item types responsible for most of the downgrades." },
      { stage: "Decision", label: "Highlight it for the picker", detail: "Assist rather than replace. A bad day for the system is a bad day for nobody." },
      { stage: "Result", label: "Attention pointed where it matters", detail: "Plus a weekly report on which collection rounds arrive contaminated, which nobody had planned for." },
    ],
  },

  intro: [
    "Neural networks get all the attention, and for most business problems they are the wrong answer. That is not a fashionable thing to say and it is what the evidence keeps showing. If your data is a table of customers and orders, something much simpler will usually beat them, cost less to build and be easier to keep running.",
    "There are situations where they are genuinely the only sensible choice, and they have something specific in common. They involve information where the arrangement carries the meaning. Which pixels are next to which other pixels. Which word came before which other word. How a sound changes over time.",
    "A table has no such arrangement. Move the columns around and nothing changes. That is why the thing neural networks are good at does not help there, and why knowing this one distinction lets a non-technical person ask a very good question in a room full of enthusiasm.",
  ],

  whyItMatters: [
    "These projects are expensive. They need more data, more computing, more specialist people and more time than the alternatives. Choosing one when something simpler would do is one of the more costly mistakes available in this area.",
    "They are also harder to explain, harder to keep running, and harder to hand over to a normal technical team. Those are real ongoing costs that rarely appear in the original proposal.",
    "But when the problem genuinely is images, sound or language, nothing else comes close, and refusing to use one out of caution is just as expensive in the other direction. Knowing which situation you are in is the whole skill.",
  ],

  coreConcepts: [
    {
      term: "Use one when the arrangement carries the meaning",
      explain:
        "In a photograph, which pixels sit next to which other pixels is the entire point. In a sentence, the order of the words is the meaning. In a recording, how the sound changes over time is what you are listening to.",
      detail:
        "Neural networks are built to exploit exactly that kind of structure. That is their advantage and it is the whole reason they exist.",
    },
    {
      term: "A table has no arrangement to exploit",
      explain:
        "Swap two columns in a spreadsheet and nothing is lost. There is no meaningful order and no neighbours. So the main advantage simply does not apply.",
      detail:
        "This is why approaches built for tables usually win on tables. It is not that neural networks are weak. It is that you are paying for a capability your problem does not need.",
    },
    {
      term: "Three situations where they clearly win",
      explain:
        "Anything involving images or video. Anything involving sound. And anything involving free-flowing language, which is where the current wave of AI tools sits.",
      detail:
        "If your problem is one of those three, this is the right family. If it is not, ask hard whether it should be, because everything else about them is a cost.",
    },
    {
      term: "They need a lot more examples",
      explain:
        "Something working on a table might do reasonably with a few thousand rows. A neural network learning to recognise something in photographs typically needs far more, often orders of magnitude more.",
      detail:
        "This is one of the most common reasons these projects fail quietly. The idea is sound, the approach is right, and nobody counted the examples before starting.",
    },
    {
      term: "You can usually start from somebody else's work",
      explain:
        "For images and language, you rarely start from nothing. You take something already trained on an enormous amount of general material and adjust it with your much smaller set of examples.",
      detail:
        "This changes the arithmetic completely and it is the reason these projects are possible for ordinary businesses at all. Ask early whether an existing model can be adapted rather than something built from scratch.",
    },
    {
      term: "You cannot really explain individual decisions",
      explain:
        "There are techniques that highlight which part of an image influenced the answer, and they help. You will not get a clear chain of reasoning of the kind a flowchart gives you.",
      detail:
        "If somebody has a right to know precisely why a decision went against them, this is a genuine obstacle rather than an inconvenience, and it needs raising before anybody commits.",
    },
    {
      term: "They are much heavier to run and to keep running",
      explain:
        "More computing, sometimes specialist hardware, more specialist people, and more that can go wrong quietly. That continues for as long as the thing is in service.",
      detail:
        "Ask who will look after it in three years. If the answer is one contractor, that is a real risk, and it is the kind of thing that gets glossed over during an exciting proposal.",
    },
    {
      term: "They pick up whatever was in the examples",
      explain:
        "If your historical examples reflect a pattern you would not endorse, the model will reproduce it faithfully, and its confidence will not distinguish between a good pattern and a bad one.",
      detail:
        "This applies to every approach that learns from history. It gets more attention here because these are used for decisions about people, and because you cannot inspect the reasoning to spot it.",
    },
    {
      term: "Turning your problem into a table is often the better move",
      explain:
        "A lot of apparently complicated problems can be reduced to columns. How many words in the complaint, whether certain phrases appear, how long since the last contact.",
      detail:
        "Once it is a table, everything gets cheaper. This is worth trying before committing to something heavier, and it works more often than people expect.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The recycling plant: what the picker sees, and what it never shows",
      caption:
        "Highlighting for a human rather than driving a mechanism is what made this affordable and what made it safe. It also produces the corrections that train the next version, at no extra cost.",
      trigger: "Continuously, while the belt is running",
      runtime: "Live, on the picker's screen, at belt speed.",
      stages: [
        {
          actor: "system",
          label: "Cameras over the belt",
          detail: "Not rows and columns. Pictures, which is the one job this family of methods is genuinely for.",
          output: "frames, many per second",
        },
        {
          actor: "rule",
          label: "Label only what actually costs money",
          detail: "The few item types causing the downgrades, rather than everything that passes.",
          output: "a small, finishable labelling job instead of an endless one",
        },
        {
          actor: "model",
          label: "Recognise those items as they pass",
          output: "a box drawn round the item, on screen",
          exception: "A poor view, a covered item or an unfamiliar shape shows nothing at all rather than showing a guess. Silence is the safe failure here.",
        },
        {
          actor: "person",
          label: "The picker sees a highlight and decides",
          detail: "Assist, do not remove. A smaller promise, and a far easier one to keep.",
          output: "the item taken, or left",
        },
        {
          actor: "system",
          label: "Every correction the picker makes is recorded",
          detail: "Which is also, quietly, how the next version gets its training data.",
        },
      ],
      loop: "The corrections are the training set, so the thing improves by being used rather than by being rebuilt.",
      outcome:
        "Nobody was replaced. Attention was pointed, and the plant could afford it.",
    },
    {
      kind: "tree",
      title: "Do you actually need one? Usually not.",
      caption:
        "The honest answer is no far more often than the industry suggests. This is the test that gets you to yes legitimately, and the recycling plant is one of the few businesses that reaches it.",
      question: "Can the thing you are recognising be written down as a list of measurements?",
      branches: [
        {
          answer: "Yes, it fits in a spreadsheet",
          outcome: "Use the ordinary methods. This family adds cost and not accuracy.",
        },
        {
          answer: "No, it is an image, a sound or language",
          question: "Have you got thousands of labelled examples, and someone to maintain it?",
          sub: [
            { answer: "No", outcome: "Not yet. The labelling is the project, and without it nothing works." },
            { answer: "Yes", outcome: "This is one of the cases where it genuinely earns its cost." },
          ],
        },
      ],
    },
    {
      kind: "flow",
      title: "The recycling plant: pointing a person's attention instead of replacing it",
      caption:
        "Highlighting for a human rather than driving a mechanism is what made this affordable and safe. It also produces the corrections the next version learns from.",
      steps: [
        { label: "Cameras over the belt", note: "Not rows and columns. Pictures.", tone: "input" },
        { label: "Label only what costs money", note: "The few item types causing the downgrades" },
        { label: "Recognise those on the belt", note: "The one job this family is genuinely for", tone: "model" },
        { label: "Highlight on the picker's screen", note: "Assist, do not remove" },
        { label: "Every correction recorded", note: "Which trains the next version", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Months of work beaten by two days on the same data.",
      walkthrough:
        "The problem: a manufacturer commissioned a neural network to predict equipment failures. The sensor readings and maintenance records had already been summarised into a table with one row per machine per week. What was happening: after several months the results were mediocre. A new analyst built a straightforward gradient boosting model on the identical table in about two days as a comparison. It performed better, ran on a laptop, and needed nothing special to keep going.",
      result:
        "What changed: they kept the simpler one. The mistake was not choosing a neural network for a hard problem. It was choosing one after the data had already been turned into a table, at which point the advantage had been thrown away. Ask what shape the data is in before deciding what to build.",
    },
    {
      kind: "illustration",
      scenario: "The one where it was obviously right.",
      walkthrough:
        "The problem: a food producer needed to spot packaging defects on a fast production line. A person was checking visually and was reliable for about an hour before attention drifted. What was happening: there is no way to express this as a table. The defect is a visual pattern, and which pixels sit next to which is the entire information.",
      result:
        "What changed: they used a model already trained on general images and adjusted it using a few thousand photographs of their own packaging, good and bad. It caught most defects consistently and flagged the uncertain ones for a person. This is the shape of problem where nothing else comes close, and starting from an existing model made it affordable.",
    },
    {
      kind: "illustration",
      scenario: "Turning the hard problem into an easy one.",
      walkthrough:
        "The problem: a support team wanted to predict which written complaints would escalate. Free text is language, so the assumption was that this needed something heavyweight. What was happening: before committing, a BA suggested trying a table first. They created columns for length, whether certain words appeared, how many previous contacts the customer had, how long since the last one, time of day, and the product involved.",
      result:
        "What changed: the table version got most of the way, in a fortnight, using an approach the existing team could maintain. It did not read the complaints in any real sense and it did not need to. Before committing to something that handles language, always ask what a handful of sensible columns would achieve.",
    },
  ],

  learningPath: [
    {
      title: "Ask what shape the information really is",
      body: "Images, sound, free-flowing language, or a table? That single question decides most of the answer, and it is one anybody can ask.",
      effort: "15 minutes",
      outcome: "Either a clear case for this family or a strong reason to look elsewhere.",
    },
    {
      title: "Try turning it into a table first",
      body: "Even for text or images, ask what sensible columns you could create. Length, presence of certain words, counts, timings. Then try a simple approach on that.",
      effort: "1-2 weeks",
      outcome: "Frequently most of the value, at a fraction of the cost and with nothing exotic to maintain.",
    },
    {
      title: "Count your examples honestly",
      body: "How many labelled examples do you actually have? Not rows, examples where somebody has confirmed the answer. This is where these projects quietly fail.",
      effort: "Half a day",
      outcome: "A realistic view of whether this is possible now or in a year.",
    },
    {
      title: "Ask whether you can adapt something existing",
      body: "For images and language you rarely start from nothing. Ask specifically whether an existing model can be adjusted with your examples rather than built from scratch.",
      effort: "One conversation",
      outcome: "Usually a dramatically smaller project.",
    },
    {
      title: "Establish the explanation requirement early",
      body: "Does anybody have a right to know precisely why? A regulator, a customer, an internal committee? Find out before you commit rather than after.",
      effort: "A conversation",
      outcome: "A constraint discovered while you can still act on it.",
    },
    {
      title: "Work out who runs it in three years",
      body: "Who maintains it, on what hardware, and what happens when they leave. Ask this while the proposal is still being discussed.",
      effort: "A conversation",
      outcome: "The ongoing cost made visible, which it rarely is in an original proposal.",
    },
  ],

  exercises: [
    {
      title: "Ask the shape question",
      brief:
        "For any neural network proposal in your business, ask what shape the underlying information is. If the answer is that it is already summarised into a table, ask what a simpler approach achieves on the same table.",
      success:
        "You either confirm the choice is justified or you find that nobody has checked the cheaper alternative.",
      time: "30 minutes",
    },
    {
      title: "Invent the columns",
      brief:
        "Take a problem involving free text in your business and write down ten columns you could create from it: length, certain words present, counts, times. Ask whether those would carry most of the useful signal.",
      success:
        "You have a cheap alternative worth testing, and often it is obvious that it would get most of the way.",
      time: "1 hour",
    },
    {
      title: "Count the labelled examples",
      brief:
        "For any proposal involving images or text, count how many examples exist where somebody has confirmed the correct answer. Not how many files, how many labelled.",
      success:
        "You have a real number, and frequently it is far smaller than the project assumes.",
      time: "1 hour",
    },
  ],

  caseStudy: {
    business:
      "A waste and recycling operator running a sorting facility. Mixed household recycling comes in on a conveyor and has to be separated.",
    problem:
      "Contamination. The wrong material in the wrong stream downgrades an entire load, and the sorting was being done by people standing at a belt for eight hours picking things off it. Staff turnover was high, the work was unpleasant, and accuracy fell towards the end of a shift.",
    analysis: [
      "Most of the time the honest answer to should we use a neural network is no, and the guide says so repeatedly. This is one of the cases where the answer is yes, and it is worth being clear about why.",
      "The information here is not rows and columns. It is what an object looks like on a moving belt. There is no table of features to hand a simpler model, and no sensible way to write down in numbers what a contaminated item looks like.",
      "That is the distinguishing test. When the input is an image, a sound or a piece of language, and the thing you are recognising cannot be reduced to a list of measurements a person could type into a spreadsheet, the heavier approach starts earning its cost.",
      "The counting still came first. Which contamination types actually cause the downgrades? A small number of item types accounted for most of the value lost, which meant the system did not need to recognise everything, only those.",
      "Ruled out: more staff. The accuracy problem was not headcount, it was that the task degrades human attention by design. Adding people to it would have reproduced the problem at greater cost.",
    ],
    aiApproach: [
      {
        step: "Confirm the simpler options genuinely do not apply",
        detail:
          "This is a real step and it is usually where the project should stop. Here there was no table of numbers to work from, and existing mechanical and magnetic separation already handled what it could. What remained was visual recognition, which is what this family of methods is actually for.",
      },
      {
        step: "Understand what you are signing up for",
        detail:
          "This route needs a lot of labelled examples, hardware to run on, and someone who can maintain it. That cost is the reason the answer is usually no. It is justified here because the alternative is a person doing an unpleasant job badly through no fault of their own.",
      },
      {
        step: "Build the labelled set for the items that matter",
        detail:
          "Thousands of images of the belt with the problem items marked. Tedious, unavoidable, and the single biggest determinant of whether it works. Narrowing to the few item types that caused most of the loss made this achievable rather than theoretical.",
      },
      {
        step: "Assist the people, do not replace them",
        detail:
          "The first version highlights suspect items for the person on the belt rather than driving a mechanism. That is cheaper, safer, and it generates corrections that improve the next version. It also means a bad day for the system is a bad day for nobody.",
      },
      {
        step: "Test on material from a different season",
        detail:
          "What arrives in recycling changes across the year and around holidays. A system tested only on the weeks it was trained on will look far better than it is.",
      },
    ],
    solution: [
      "Cameras over the belt, with suspect items highlighted on a screen in front of the picker.",
      "Coverage limited to the item types responsible for most of the downgrades, rather than everything.",
      "Every correction the picker makes recorded, which is what the next version learns from.",
      "A weekly report on what is arriving contaminated and from which collection rounds, which fed back into public messaging.",
      "The people stayed. The job changed from scanning everything to checking what was flagged.",
    ],
    impact: [
      "Attention was pointed at the items that mattered rather than spread across the whole belt, which is a better use of a person than asking them to be a camera.",
      "The end-of-shift accuracy drop, which was a human attention problem, stopped being the main risk to a load's value.",
      "The collection round report was an unplanned by-product and turned out to be independently useful.",
      "The business now has a clear internal example of when this technology is worth it, which has made it easier to say no to the several proposals that were not.",
    ],
    whatWouldHaveKilledIt:
      "Trying to recognise everything. Scoped to all contamination types it would have needed vastly more labelled examples and would have been mediocre at all of them. The other failure would have been going straight to automatic removal: a mechanism acting on a wrong call is expensive and dangerous, and skipping the assisted stage would have removed the corrections the system needed in order to improve.",
  },

  mistakes: [
    {
      mistake: "Choosing one for table-shaped data",
      why: "You pay for a capability your problem does not have, and something simpler usually performs better. It is the most expensive common mistake in this area.",
      fix: "Ask what shape the information is. If it is rows and columns, start with something built for tables and make anything else beat it.",
    },
    {
      mistake: "Not counting labelled examples before committing",
      why: "These need far more than table-based approaches. Projects get approved on the strength of the idea and stall when somebody finally counts.",
      fix: "Count confirmed examples first, and ask whether an existing model can be adapted to reduce what you need.",
    },
    {
      mistake: "Building from scratch when you could adapt something",
      why: "It multiplies the data you need and the cost by a large factor, for no benefit in most business situations.",
      fix: "Always ask whether an existing model can be adjusted with your examples before agreeing to anything built from nothing.",
    },
    {
      mistake: "Discovering the explanation requirement late",
      why: "Finding out after building that a regulator or a customer needs a precise reason means either a rebuild or a compliance problem.",
      fix: "Ask who has a right to know why, and what standard of explanation they need, before the approach is chosen.",
    },
    {
      mistake: "Ignoring what it will cost to keep running",
      why: "Specialist hardware and specialist people continue for as long as the thing is in service, and neither tends to appear in the original proposal.",
      fix: "Ask who runs it in three years and on what, and put the answer in the business case.",
    },
    {
      mistake: "Assuming the model is neutral about people",
      why: "It reproduces whatever pattern was in the examples, including ones you would not endorse, and its confidence does not distinguish good patterns from bad ones.",
      fix: "For any decision about people, check outcomes by group after the fact, because you cannot inspect the reasoning to catch it in advance.",
    },
  ],

  bestPractices: [
    "Ask what shape the information is before anything else.",
    "Try turning the problem into a table first.",
    "Count confirmed examples rather than files or rows.",
    "Ask whether an existing model can be adapted.",
    "Establish who has a right to an explanation, early.",
    "Ask who will run and maintain it in three years.",
    "Make it beat a simpler approach on the same data before committing.",
    "For decisions about people, check outcomes by group afterwards.",
  ],

  proTips: [
    "The most useful question you can ask in a room enthusiastic about neural networks is what shape the data is in. If it has already been summarised into a table, the reason for choosing one has usually been thrown away and nobody has noticed. That question costs nothing and has saved projects I have been involved in.",
    "Before agreeing to anything that reads text, ask what ten sensible columns would achieve. Length, whether particular words appear, counts, timings, who the customer is. Surprisingly often that gets most of the way, and it is something your existing team can build and keep running.",
    "Ask whether the plan is to adapt an existing model or build from nothing. Building from nothing is occasionally right and usually a sign that nobody has looked properly. The difference in cost and in data needed is enormous and it is easy to ask about.",
    "Ask who maintains it after the project team leaves. These have a habit of becoming one person's system, and when that person moves on the business is left with something it cannot change, cannot explain and cannot switch off.",
  ],

  businessApplications: [
    "Checking products visually on a production line, where a person cannot sustain attention.",
    "Reading documents and pulling out fields, where the layout varies.",
    "Handling speech, such as transcribing or routing calls.",
    "Anything involving free-flowing language where meaning genuinely matters.",
    "Sorting or matching images, such as identifying products from photographs.",
    "Situations where you can adapt an existing model rather than building from nothing.",
  ],

  checklist: [
    "Shape of the information established: images, sound, language or table.",
    "A table-based alternative tried or explicitly ruled out.",
    "Confirmed labelled examples counted.",
    "Possibility of adapting an existing model investigated.",
    "Explanation requirement established with the business.",
    "Ongoing cost of running and maintaining it costed.",
    "Named owner for three years from now.",
    "Comparison against a simpler approach on the same data.",
    "Plan for checking outcomes by group where decisions affect people.",
  ],

  faqs: [
    {
      q: "Why does everybody talk about these if they are usually the wrong choice?",
      a: "Because the things they are right for, images and language, are visible and impressive. The unglamorous approaches that win on business tables do not make headlines. Both facts are true at once.",
    },
    {
      q: "How much data do we actually need?",
      a: "Far more than a table-based approach, unless you adapt an existing model, which changes the arithmetic completely. Ask that question first, because it is the difference between a few thousand examples and a few hundred thousand.",
    },
    {
      q: "Can we explain a decision one of these made?",
      a: "Only roughly. You can highlight which part of an image mattered or which words influenced an answer. You will not get a clear chain of reasoning. If somebody needs a precise defensible reason, that is a real obstacle.",
    },
    {
      q: "Are the AI tools everybody is using now the same thing?",
      a: "They are built on the same family, aimed at language. That is a genuine case where this approach is the right one. It also means the general warnings about explaining decisions and picking up patterns from training material apply.",
    },
    {
      q: "What if our problem is text but we cannot afford this?",
      a: "Turn the text into columns. Length, whether certain phrases appear, counts, timing, who sent it. It is not reading in any real sense and it frequently gets most of the way for a fraction of the effort.",
    },
    {
      q: "Should we rule these out entirely?",
      a: "No. When the problem genuinely is images, sound or language, nothing else comes close, and avoiding them out of caution costs just as much as choosing them unnecessarily. The skill is telling the two situations apart.",
    },
  ],

  tools: [
    { name: "The shape question", what: "Images, sound, language or table. One question that decides most of the answer.", cost: "Free" },
    { name: "A list of ten possible columns", what: "For turning an apparently hard problem into an easy one. Works more often than people expect.", cost: "Free" },
    { name: "A count of confirmed examples", what: "Not files, examples where somebody verified the answer. Where these projects quietly fail.", cost: "Free" },
    { name: "A named owner for three years out", what: "Makes the ongoing cost visible while the proposal can still change.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "xgboost-for-everyday-business-data", anchor: "what usually wins on business tables", context: "The alternative" },
    { slug: "neural-networks-explained", anchor: "how they actually work underneath", context: "Background" },
    { slug: "choosing-the-right-model-for-the-job", anchor: "deciding between the options properly", context: "Choosing" },
  ],

  relatedGuides: ["xgboost-for-everyday-business-data", "neural-networks-explained", "choosing-the-right-model-for-the-job"],

  conclusion: [
    "The next time somebody proposes a neural network, ask what shape the underlying information is. If it has already been turned into a table of rows and columns, the reason for choosing one has probably been thrown away, and that question takes thirty seconds.",
  ],
};

export default guide;
