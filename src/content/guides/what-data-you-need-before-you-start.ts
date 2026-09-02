import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "what-data-you-need-before-you-start",
  seoTitle: "Have You Got Enough Data? How to Check Before You Start",
  metaDescription:
    "Most model projects fail on the data rather than the method. What to count, what to check, and the questions that tell you in a week rather than in six months.",
  title: "Have You Got Enough Data to Do This?",
  keywords: [
    "data requirements machine learning",
    "how much data for a model",
    "data readiness assessment",
    "training data quality",
    "labelled data business",
    "ml feasibility check",
  ],
  category: "data-science",
  level: "Beginner",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  brief: {
    inOneMinute:
      "Two days of checking can tell you a project cannot start yet. That is a good outcome, and it is far cheaper than six months of discovering the same thing.",
    problem: {
      headline: "We want to predict breakdowns and our records are on paper",
      detail:
        "A family haulage firm with 22 lorries. A roadside breakdown costs a recovery, a missed delivery and sometimes a customer.",
    },
    wrongApproach: {
      what: "Start building anyway, because there is enthusiasm and a budget",
      why: "It would have produced something plausible-looking on thirty days of telematics and a typed-up sample of a handwritten day book. No mechanic would have trusted it, and the failure would have been blamed on the technology.",
    },
    rightApproach: {
      what: "Run four checks first, and be willing to stop",
      why: "Is the outcome recorded? Is the information recorded? Is it available at the moment you would act? Is there enough of it? Question one failed at a paper day book, and stopping there saved the budget.",
    },
    context: {
      where: "Before any predictive project, in any business.",
      decision: "Start now, start later, or fix the recording first.",
      metric: "Money not spent on a project that could not have worked.",
    },
    takeaway:
      "The highest-value action in the whole engagement was a phone call changing a data retention setting from thirty days to indefinite. It cost nothing and it is why the project is now possible.",
  },

  story: {
    title: "The project that correctly did not start",
    caption:
      "Typing up two years of the old paper day book found a component failing disproportionately on one part of the fleet. That was actionable immediately.",
    stages: [
      { stage: "Problem", label: "A good idea at the wrong moment", detail: "Predicting breakdowns is worth doing. This business could not do it yet." },
      { stage: "Data", label: "A paper day book, in handwriting", detail: "Real information, in a form nothing can learn from. Telematics were being deleted after thirty days." },
      { stage: "Model", label: "No model. Four questions.", detail: "Two days of checking rather than two quarters of discovering." },
      { stage: "Prediction", label: "Not yet, and here is why", detail: "Even with perfect records, 22 vehicles produce few enough failures that the honest answer is start simple." },
      { stage: "Decision", label: "Fix the recording, cheaply", detail: "Retention changed on day one. A five-field tablet form replacing the day book. Load type captured at dispatch." },
      { stage: "Result", label: "A written revisit date", detail: "Eighteen months of proper records, with the condition stated, so the idea neither disappears nor resurfaces monthly." },
    ],
  },

  intro: [
    "Most model projects that disappoint do not disappoint because somebody chose the wrong method. They disappoint because the data was never going to support what was promised, and nobody checked properly before committing.",
    "The frustrating part is that checking is not hard and it does not need a data scientist. It needs somebody willing to count a few things and ask a few awkward questions, and it takes about a week.",
    "This is that check. Six things to establish, in order, before anybody agrees a timeline. Any one of them can stop a project, and it is much better to be stopped in week one than in month six.",
  ],

  whyItMatters: [
    "The cost of finding out late is enormous. By month six there is a team, a budget, an expectation and a sponsor who has told people it is happening. Unpicking it at that point is politically difficult in a way that saying no in week one never is.",
    "It is also the check that nobody owns. Technical teams assume the business knows what data exists. The business assumes the technical team will find out. Both are reasonable and the result is that nobody counts anything.",
    "And it is exactly the kind of unglamorous groundwork a Business Analyst is well placed to do, because most of it is asking people questions rather than writing anything.",
  ],

  coreConcepts: [
    {
      term: "One: count complete examples, not rows",
      explain:
        "You need past cases where you know both the details and how it turned out. A table with two million rows might contain four hundred cases with a confirmed outcome.",
      detail:
        "This is the single most common overestimate. Ask specifically how many records have the answer recorded, not how many records exist, and expect the two numbers to be very different.",
    },
    {
      term: "Two: check the outcome is actually recorded somewhere",
      explain:
        "You cannot learn to predict something that nobody writes down. If the outcome lives in somebody's head, or in an email, or in a status that gets overwritten, you have a problem.",
      detail:
        "Ask where the answer gets recorded, by whom, and whether it is reliable. Frequently the answer is that a field exists and only about half the team fill it in.",
    },
    {
      term: "Three: check every input is available at the time",
      explain:
        "For each piece of information you plan to use, ask whether you would genuinely have it at the moment you need the prediction. Your history has everything. Real life does not.",
      detail:
        "This is where projects produce spectacular results that collapse in use. Go through the list field by field and cross off anything filled in later in the process.",
    },
    {
      term: "Four: look for the point where things changed",
      explain:
        "A new system, a process change, a merger, a new product range. Data from before a change like that may be describing a different business.",
      detail:
        "Ask when the current system went in, when the process last changed, and whether anything was migrated. Very often your usable history is much shorter than your available history.",
    },
    {
      term: "Five: check how complete the fields are, over time",
      explain:
        "Not just overall. A field can be ninety per cent filled in across the whole history and completely empty since somebody removed it from a form eighteen months ago.",
      detail:
        "That is the one that catches people. Something built on it will work perfectly on old data and do nothing useful on anything new, and it will not be obvious why.",
    },
    {
      term: "Six: check somebody can actually get at it",
      explain:
        "Data existing and data being accessible are different things. Which system, who owns it, what approval is needed, how long does that take?",
      detail:
        "Access frequently has a lead time measured in weeks. Ask on day one, before you know exactly what you want, because that queue runs whether or not you have finished thinking.",
    },
    {
      term: "How much is enough depends on how rare the thing is",
      explain:
        "Ten thousand cases sounds like plenty until you learn that only forty of them are the thing you want to predict. It is the number of examples of the rare outcome that constrains you.",
      detail:
        "Ask how many of the rare kind you have, not how many cases in total. Forty is very few. A few hundred is workable. Below that, be honest that this is a project for next year.",
    },
    {
      term: "Better information beats a better method",
      explain:
        "If the thing that actually drives your outcome is not recorded anywhere, no approach will find it. Adding one genuinely useful field usually helps more than changing method.",
      detail:
        "Ask the people who do the job what they look at. If half of their answer is not recorded anywhere, that is your project: start recording it, and revisit in a year.",
    },
    {
      term: "Plausible-looking values are not checked values",
      explain:
        "A field can be full of numbers that look entirely reasonable and be wrong, because of a default, an import, a system change or a tool quietly reformatting something.",
      detail:
        "Look at the actual values and their spread rather than at how full the field is. One value dominating everything is usually a default rather than reality.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The haulier: the four questions, asked before anything is built",
      caption:
        "The most valuable action here was a phone call about a retention setting. It cost nothing, there is no model in it, and without it the project would have failed eighteen months later with nobody able to say why.",
      trigger: "Somebody proposes predicting breakdowns",
      runtime: "Two days, and it is allowed to end in a no.",
      stages: [
        {
          actor: "person",
          label: "Ask the four questions before anything is built",
          detail: "Does the outcome exist in the records. Is it recorded the same way every time. Is it there before the event rather than after. Is there enough of it.",
          output: "four honest answers, or a stop",
        },
        {
          actor: "system",
          label: "Check the records rather than taking anybody's word",
          detail: "A retention setting was quietly deleting the very history the project depended on.",
          exception: "Be willing to stop at this step. Two days of checking is cheap. Two quarters of discovering is not.",
          output: "what is actually in the system, as opposed to what people believe is",
        },
        {
          actor: "person",
          label: "Fix the recording first",
          detail: "One phone call changed the retention setting. It cost nothing and it is not a model.",
          output: "eighteen months of proper records, starting from today",
        },
        {
          actor: "rule",
          label: "Do the things that need no model at all",
          detail: "Typing up the old paper records found a component failing repeatedly, which nobody had ever joined up.",
          output: "a fix, with no project attached to it",
        },
        {
          actor: "person",
          label: "Put a revisit date in writing",
          detail: "Not never. A date, and what will be true by then.",
          output: "a diary entry the business will actually honour",
        },
      ],
      loop: "On that date the same four questions get asked again, against records that now exist.",
      outcome:
        "The idea was good and the moment was wrong, and the difference between those two is worth two days to establish.",
    },
    {
      kind: "tree",
      title: "Four checks, and stopping at any of them is a good outcome",
      caption:
        "Two days of this told the haulier the project could not start yet. That saved the budget, and the cheapest fix in the whole engagement came out of it: one phone call to stop the telematics being deleted after thirty days.",
      question: "Is the thing you want to predict actually recorded?",
      branches: [
        {
          answer: "Only in a paper day book",
          outcome: "Not yet. Replace it with a five-field form and set a date to revisit.",
        },
        {
          answer: "Yes, in a system",
          question: "Is it recorded at the moment you would need to act?",
          sub: [
            { answer: "Only known after the fact", outcome: "Useless for deciding. It predicts the past." },
            { answer: "Known while you can still act", outcome: "Now ask whether there is enough of it to learn from." },
          ],
        },
      ],
    },
    {
      kind: "flow",
      title: "The haulier: two days of checking instead of two quarters of discovering",
      caption:
        "The most valuable action here was a phone call about a retention setting. It cost nothing, it is not a model, and without it the project could never have happened.",
      steps: [
        { label: "The idea: predict breakdowns", note: "Good idea, wrong moment", tone: "input" },
        { label: "Check all four questions", note: "Two days, and be willing to stop" },
        { label: "Stop, and fix the recording", note: "Retention setting changed. One phone call." },
        { label: "Do what needs no model", note: "Typing up old records found a failing component" },
        { label: "A written revisit date", note: "Eighteen months of proper records", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Values that looked completely normal and were not.",
      walkthrough:
        "Ziemann, Eren and El-Osta examined thousands of published science papers and the gene lists attached to them. Spreadsheet software had silently converted certain gene names into dates. No warning appeared, the converted values looked entirely normal, and around a fifth of the papers they examined were affected. All of it had been through peer review.",
      result:
        "The lesson for anybody checking data before a project is exact. Looking sensible is not the same as being correct, and tools apply changes nobody asked for. This is why you look at the actual values and their spread rather than counting how full a field is, and why a field where one value dominates deserves ten minutes of attention.",
      source: {
        label: "Ziemann, Eren and El-Osta (2016). Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "illustration",
      scenario: "Two million rows and four hundred usable cases.",
      walkthrough:
        "The problem: a project was approved on the basis that the business had two million rows of order history. What was happening: a BA asked how many of those had a confirmed outcome for the thing being predicted, which was whether a delivery was disputed. Disputes were recorded in a separate system, only since a process change two years earlier, and only about four hundred had been through the full process with a final resolution recorded.",
      result:
        "What changed: the project was reshaped into something much smaller while the business started recording disputes properly. Two million was the row count. Four hundred was the number that mattered. Asking that question takes ten minutes and it happened after the timeline had already been agreed.",
    },
    {
      kind: "illustration",
      scenario: "The field that stopped being filled in.",
      walkthrough:
        "The problem: a model performed well in testing and did almost nothing once live. What was happening: a BA broke down how complete each input field was by year. One of the most important fields was well filled in until about eighteen months ago and almost empty since. Somebody had removed it from the form during a redesign and nobody had connected the two.",
      result:
        "What changed: they either had to restore the field or rebuild without it. Checking completeness by year rather than overall would have caught this before anybody built anything, and it is two extra minutes of work.",
    },
  ],

  learningPath: [
    {
      title: "Request access on day one",
      body: "Before you know exactly what you need. Access queues run for weeks and they run whether or not you have finished thinking about what you want.",
      effort: "1 hour of asking",
      outcome: "The longest wait started at the earliest moment.",
    },
    {
      title: "Count complete examples with confirmed outcomes",
      body: "Not rows. Cases where you know both the details and how it turned out. Then count how many of those are the rare kind you care about.",
      effort: "Half a day",
      outcome: "The number that decides whether this is possible now or next year.",
    },
    {
      title: "Find out where the outcome gets recorded",
      body: "Which system, by whom, how reliably. Ask whether everybody fills it in or only some people.",
      effort: "A conversation",
      outcome: "Either confidence or the discovery that your outcome is unreliable, which is a project in itself.",
    },
    {
      title: "Go through every input field asking when it is filled in",
      body: "Would you have it at the moment you need the prediction? Cross off anything completed later in the process.",
      effort: "Half a day",
      outcome: "An honest input list rather than one that produces impossible results.",
    },
    {
      title: "Find the point where things changed",
      body: "New system, process change, merger, product range. Ask when, and check whether the data before that describes the same business.",
      effort: "A conversation",
      outcome: "Your real usable history, which is often much shorter than your available history.",
    },
    {
      title: "Check completeness by year, not overall",
      body: "For every field you plan to use. A field can look fine overall and be empty since a form redesign.",
      effort: "2 hours",
      outcome: "Protection against building on something that no longer arrives.",
    },
    {
      title: "Ask the people doing the job what they look at",
      body: "Then check how much of their answer is recorded anywhere. The gap is either your biggest opportunity or your biggest constraint.",
      effort: "2 hours",
      outcome: "A view on whether better information is available and worth collecting.",
    },
  ],

  exercises: [
    {
      title: "Count the usable examples",
      brief:
        "For any model project in your business, ask how many past cases have a confirmed outcome recorded, and of those how many are the rare kind. Compare against the total row count everybody quotes.",
      success:
        "You have both numbers and can say whether the project is sized correctly, which frequently it is not.",
      time: "1 hour",
    },
    {
      title: "Completeness by year",
      brief:
        "Pick three fields a project depends on. Work out how complete each one is overall, then broken down by year. Plot them.",
      success:
        "You can say whether any of them has quietly stopped being filled in, and you have found it before it caused a problem.",
      time: "1 hour",
    },
    {
      title: "Ask what the experienced person looks at",
      brief:
        "Find whoever makes this judgement today and ask them to talk through their last three decisions. Write down every factor. Then check how many are recorded anywhere.",
      success:
        "You know what proportion of the real signal exists in a system, and it is usually less than half.",
      time: "2 hours",
    },
  ],

  caseStudy: {
    business:
      "A family haulage firm. Twenty-two lorries, mostly on regional distribution work, with its own workshop and two mechanics.",
    problem:
      "A breakdown at the roadside costs a recovery, a missed delivery, a driver sitting still and sometimes a customer. The owner wanted to predict failures before they happened. It is a good idea and the business was not in a position to do it, and finding that out took two days rather than two quarters.",
    analysis: [
      "The check comes before the project, and it is four questions. Is the thing you want to predict recorded? Is the information you would predict from recorded? Is it recorded at the moment you would need to act? And is there enough of it?",
      "Question one went badly. Breakdowns were recorded, in a paper day book in the workshop, in the mechanics own handwriting, with entries like alternator and back on road Tuesday. There is real information in there and it is not in a form anything can learn from.",
      "Question two went worse. What would you predict from? Engine hours, fault codes, service intervals, driver, route type, load weight. Some was on the vehicles telematics and being discarded after thirty days. Some was in the service records, also on paper. Load weight was not recorded at all.",
      "Question three is the one people forget. Even with perfect records, the prediction has to arrive while a lorry is in the yard rather than while it is on a motorway. That constrains what information is allowed in, and it ruled out anything only known after a workshop inspection.",
      "Question four: twenty-two vehicles and a modest number of breakdowns a year. That is not many examples to learn from, and it meant that even with perfect data the honest answer was to start simple.",
    ],
    aiApproach: [
      {
        step: "Check before you build, and be willing to stop",
        detail:
          "Two days of checking established that the project could not start yet. That is a successful outcome, not a failed one. The alternative was six months of a project quietly discovering the same thing after the money had gone.",
      },
      {
        step: "Fix the recording first, in the cheapest way that works",
        detail:
          "The telematics retention setting was changed from thirty days to keeping everything, which took one phone call and cost nothing. That single change was the highest-value action in the whole engagement and it was not a model.",
      },
      {
        step: "Replace the day book with a form, not a system",
        detail:
          "A short structured form on a tablet in the workshop: vehicle, date, component, symptom, whether it was roadside or in the yard. Five fields. Anything longer does not get filled in, and a form nobody completes is worse than the day book.",
      },
      {
        step: "Do the useful thing that needs no model",
        detail:
          "Even the paper records, typed up for two years, showed that a particular component was failing disproportionately on one part of the fleet. That was actionable immediately and would have been missed entirely if everyone had waited for the model.",
      },
      {
        step: "Set a date to look again",
        detail:
          "Eighteen months of properly recorded data was the stated condition for revisiting it. Written down, with a date, so the idea neither disappeared nor kept resurfacing every month.",
      },
    ],
    solution: [
      "Telematics retention changed from thirty days to indefinite, on day one.",
      "A five-field workshop form replacing the paper day book.",
      "Load type captured at dispatch, which was a small change to an existing process.",
      "Two years of the old day book typed up, which paid for itself through the component finding alone.",
      "A written revisit date, with the specific condition that had to be met.",
    ],
    impact: [
      "The business avoided spending its budget on a project that could not have worked, which is the outcome nobody puts in a case study and which was worth more than most projects.",
      "The component finding came out of typing up old paper records, and it changed a maintenance schedule immediately.",
      "The recording changes cost almost nothing and they are the reason the project is now possible at all.",
      "The owner understood what the constraint actually was, which meant the next conversation was about data collection instead of about which software to buy.",
    ],
    whatWouldHaveKilledIt:
      "Starting anyway. There was enthusiasm and a budget, and it would have been easy to build something on thirty days of telematics and a typed-up sample of the day book. It would have produced a model that looked plausible on the data it was given and that no mechanic would have trusted, and the failure would have been blamed on the technology rather than on the records.",
  },

  mistakes: [
    {
      mistake: "Counting rows instead of usable examples",
      why: "Two million rows and four hundred confirmed outcomes are very different projects, and the first number is the one that gets quoted in the proposal.",
      fix: "Ask specifically how many cases have the outcome recorded, and how many of those are the rare kind.",
    },
    {
      mistake: "Only checking completeness overall",
      why: "A field can be well filled in historically and empty since a form change. Anything built on it works in testing and does nothing live.",
      fix: "Always break completeness down by year. Two extra minutes.",
    },
    {
      mistake: "Not checking when each field gets filled in",
      why: "Your history contains everything, including things that only exist after the decision. Using those produces spectacular results that collapse in use.",
      fix: "Go through every field asking whether you would have it at the moment of prediction.",
    },
    {
      mistake: "Ignoring the point where the business changed",
      why: "Data from before a system change or a merger may describe a different operation. The model learns relationships that no longer hold.",
      fix: "Find out when things last changed and treat your usable history as starting from there unless you can show otherwise.",
    },
    {
      mistake: "Assuming access is a formality",
      why: "It has a lead time measured in weeks, and requesting it in week four means the project is still waiting in week eight.",
      fix: "Request it on day one, before you know precisely what you want.",
    },
    {
      mistake: "Trusting values because they look sensible",
      why: "Defaults, imports and tools quietly reformatting things all produce plausible-looking values that are wrong, and counting how full a field is will never catch it.",
      fix: "Look at the actual values and their spread. One value dominating is usually a default rather than reality.",
    },
  ],

  bestPractices: [
    "Request data access on day one.",
    "Count complete examples with confirmed outcomes, not rows.",
    "Count how many are the rare kind specifically.",
    "Find out where the outcome is recorded and how reliably.",
    "Check every input for being available at the moment of prediction.",
    "Find the point where the business or system last changed.",
    "Check completeness by year, not just overall.",
    "Look at actual values and their spread, not just how full fields are.",
    "Ask the experienced people what they look at and check what is recorded.",
  ],

  proTips: [
    "Ask what the row count is and then ask how many have a confirmed outcome. The gap between those two numbers is where most over-promised projects come from, and asking both takes about ten minutes in a meeting where somebody has just quoted the first.",
    "Sit with whoever does this job by hand and ask them to talk through their last three decisions out loud. Write down every factor they mention. Then check how many of those exist in a system anywhere. That gap is either your biggest opportunity or the reason this will not work, and either way it is worth knowing in week one.",
    "For every field near the top of a model's importance, ask when in the process it gets filled in. This one question catches the most embarrassing failure in this area, and you do not need to understand anything technical to ask it.",
    "If the outcome you want to predict is not currently recorded reliably, that is your project. Start recording it properly, tell everybody it will be a year before you can do anything with it, and be honest that this is groundwork. That is a far better outcome than building something on an unreliable outcome and pretending.",
  ],

  businessApplications: [
    "Checking a proposed model project is possible before agreeing a timeline.",
    "Sizing whether something is a fortnight, six months or next year.",
    "Working out whether the first project should be collecting data rather than modelling it.",
    "Reviewing why an existing model performs worse in use than in testing.",
    "Assessing what a supplier is promising against what your data can support.",
    "Deciding what to start recording now to make something possible in a year.",
  ],

  checklist: [
    "Data access requested on day one.",
    "Complete examples with confirmed outcomes counted.",
    "Rare outcomes counted separately.",
    "Where the outcome is recorded, and how reliably, established.",
    "Every input checked for being available at prediction time.",
    "Point of last significant business or system change identified.",
    "Completeness checked by year for every important field.",
    "Actual values and their spread examined.",
    "Experienced people asked what they look at, and gaps identified.",
  ],

  faqs: [
    {
      q: "How many examples do we actually need?",
      a: "It depends on how rare the outcome is. What matters is the count of the rare kind, not the total. Forty examples of the thing you want to predict is very few. A few hundred is workable. Below that, be honest that this is a project for next year.",
    },
    {
      q: "What if the outcome is not recorded reliably?",
      a: "Then fixing that is the project. Start recording it properly and revisit in a year. Building on an unreliable outcome produces something that looks like it works and cannot be trusted.",
    },
    {
      q: "How far back should our data go?",
      a: "As far back as the business still resembles itself. Find out when the system or process last changed significantly, and treat that as the practical start unless you can show the older data still describes the same thing.",
    },
    {
      q: "Do we need perfect data?",
      a: "No, and you do need to know where the problems are. Messy data with known problems is workable. Data that looks clean and has a default hiding in it is much more dangerous, because nobody is looking for the problem.",
    },
    {
      q: "What if the important information is in somebody's head?",
      a: "That is extremely common and it is a finding. Either find a way to record it going forward, or accept that the model will be working with less than the person does and set expectations accordingly.",
    },
    {
      q: "Who should do this check?",
      a: "Somebody who will ask awkward questions and count things, which is a Business Analyst more often than a data scientist. Most of it is conversations rather than technical work, and it needs somebody willing to say no in week one.",
    },
  ],

  tools: [
    { name: "A count of confirmed outcomes", what: "Not rows. The number that decides whether this is possible now.", cost: "Free" },
    { name: "Completeness by year", what: "Two extra minutes per field and it catches the failure nobody sees coming.", cost: "Free" },
    { name: "A field-by-field timing check", what: "When does each one get filled in? Catches the most embarrassing failure in this area.", cost: "Free" },
    { name: "A conversation with whoever does the job", what: "What they look at, and how much of it is recorded. The gap is the real finding.", cost: "Free" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "Two pages on how a tool default silently corrupted data that then passed review. The clearest argument for looking at actual values rather than counting how full a field is.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
  ],

  internalLinks: [
    { slug: "framing-a-business-problem-as-a-prediction", anchor: "checking the problem is the right shape first", context: "Before this" },
    { slug: "data-requirements-for-analysts", anchor: "looking at data properly, in more depth", context: "Deeper version" },
    { slug: "choosing-the-right-model-for-the-job", anchor: "what the answers open up", context: "Next step" },
  ],

  relatedGuides: ["framing-a-business-problem-as-a-prediction", "data-requirements-for-analysts", "choosing-the-right-model-for-the-job"],

  conclusion: [
    "The next time somebody quotes a row count as evidence that a model project is feasible, ask how many of those rows have a confirmed outcome recorded. The gap between those two numbers is where most over-promised projects begin, and asking takes ten minutes.",
  ],
};

export default guide;
