import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "working-out-the-best-combination",
  seoTitle: "Working Out the Best Combination, Not Predicting It",
  metaDescription:
    "Optimisation explained without maths. Routing, rotas, allocation and blending. Three ingredients, and why the mathematically best answer often gets rejected.",
  title: "Working Out the Best Combination",
  keywords: [
    "optimisation business explained",
    "linear programming simply",
    "vehicle routing optimisation",
    "staff rota optimisation",
    "resource allocation model",
    "scheduling optimisation business",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  brief: {
    inOneMinute:
      "This one does not predict anything. Given what you already know, it works out the best combination of things to do, and the usual reason it fails is a rule nobody wrote down.",
    problem: {
      headline: "Building the rota takes two days and it is still wrong",
      detail:
        "A commercial cleaning contractor with ninety staff across a region. One supervisor builds it, and when she is on leave nobody else can.",
    },
    wrongApproach: {
      what: "Minimise travel time",
      why: "That is what the first attempt did. It produced a rota that was shorter on the road, changed who cleaned which site every week, and was rejected by staff and clients inside a fortnight.",
    },
    rightApproach: {
      what: "Collect the unwritten rules, then price the preferences",
      why: "Two early mornings in a van produced more constraints than a week of meetings. And treating site consistency as absolute returned no possible answer at all, so it became expensive rather than forbidden.",
    },
    context: {
      where: "Routing, rotas, allocation, cutting stock, blending, scheduling.",
      decision: "Who goes where, in what order, this week.",
      metric: "Travel, fairness and consistency together, with weights the business agreed.",
    },
    takeaway:
      "Score what you already do first. It costs a day, and it either makes the case or tells you your experienced planner is close to the best available.",
  },

  story: {
    title: "Two days of rota building, done in minutes",
    caption:
      "It does not learn. Give it the rules and the numbers and it works out the answer directly, which also means it will never improve on its own.",
    stages: [
      { stage: "Problem", label: "Two days a week, and one person", detail: "Somebody drives across the region for a forty-minute clean while a colleague drives the other way." },
      { stage: "Data", label: "Contracted hours, access windows, travel times", detail: "Plus the unwritten ones: the named keyholder, the two staff who should not be paired, the site with impossible morning parking." },
      { stage: "Model", label: "Not a prediction. A best combination.", detail: "No training data needed, because nothing is being learned from history." },
      { stage: "Prediction", label: "A rota, in minutes", detail: "Against an objective combining travel, consistency and fairness, with weights agreed in advance." },
      { stage: "Decision", label: "The supervisor edits it", detail: "Every change recorded with a reason, because each one is a constraint that was missed." },
      { stage: "Result", label: "Two days a week back", detail: "And the rota stops being one person's private skill, which removed a risk nobody had costed." },
    ],
  },

  intro: [
    "Everything else in this area is about predicting. This one is not. It answers a different question entirely: given what you expect to happen, what is the best combination of things to actually do?",
    "Which vans go to which drops, in what order. Who works which shift. How much of each ingredient goes into the blend. Which projects get funded from a fixed budget. How to cut the sheets to waste the least material. Every one of those has an enormous number of possible answers and one or two that are clearly best.",
    "Businesses solve these problems every day with a spreadsheet, an experienced person, and a rule of thumb. That works and it usually leaves a lot on the table, because the number of possible combinations is far larger than any person can hold in their head. The tools for doing it properly are mature, unglamorous, and much less known than they should be.",
  ],

  whyItMatters: [
    "The savings are frequently large and immediate. Routing, rostering and allocation are all areas where a better combination costs nothing extra to execute. You are not buying anything or hiring anybody, you are doing the same work in a better order.",
    "It is also the half of the problem that gets neglected. Businesses spend months improving a demand forecast and leave the rule that turns that forecast into an order untouched, when the rule is where the easy improvement usually sits.",
    "And it fails in one specific and predictable way. The answer is mathematically better and operationally unacceptable, so people ignore it and go back to the spreadsheet. Knowing that in advance is most of what a Business Analyst brings here.",
  ],

  coreConcepts: [
    {
      term: "Three ingredients and you need all three",
      explain:
        "What you are trying to make as good as possible. What you are allowed to change. And what you cannot break under any circumstances.",
      detail:
        "Those three define the problem completely. Most of the work in one of these projects is getting them written down accurately, and almost none of it is technical.",
    },
    {
      term: "The thing you are optimising decides everything",
      explain:
        "Tell it to minimise cost and it will produce the cheapest rota, which may have somebody working five late shifts in a row. Tell it to minimise miles and it may route a driver past their own depot four times.",
      detail:
        "It does exactly what you asked, harder and more literally than a person would. This is the single most important thing for a business person to understand about it.",
    },
    {
      term: "Constraints are what stop it doing something absurd",
      explain:
        "Nobody works more than five days running. Every van returns to base. This customer must be visited before noon. No batch mixes these two products.",
      detail:
        "Getting these out of people is the real work. Half of them are written down somewhere and half live in an experienced person's head as things you simply do not do.",
    },
    {
      term: "Some rules are hard and some are preferences",
      explain:
        "A driver's legal hours are a hard limit. Preferring not to give somebody a late shift followed by an early one is strong and not absolute.",
      detail:
        "Treat every preference as absolute and you will frequently find there is no possible answer. The usual approach is to allow preferences to be broken at a cost, so it avoids them unless the alternative is worse.",
    },
    {
      term: "The mathematically best answer is often rejected",
      explain:
        "It produces a rota that is cheaper and that nobody will work, or a route that is shorter and that ignores something the drivers know about a particular street.",
      detail:
        "This is the characteristic failure. It happens because a constraint that everybody knows was never written down, and the fix is to go and collect the unwritten rules rather than to argue about the arithmetic.",
    },
    {
      term: "Ask what today's answer would score",
      explain:
        "Take the rota or route your business used last week and score it with the same measure. That tells you how much room there actually is.",
      detail:
        "Sometimes the answer is that the experienced person is already close to the best possible, which is worth knowing before funding anything. Sometimes the gap is very large and the case makes itself.",
    },
    {
      term: "It needs the numbers to be right",
      explain:
        "Travel times, capacities, costs, availability. If those are wrong, it will produce a confident answer built on wrong inputs and there will be nothing obviously odd about it.",
      detail:
        "This is where these projects quietly fail. Ask where each number comes from and when it was last checked, because a travel time estimated in 2019 will produce a beautiful and impossible schedule.",
    },
    {
      term: "It cannot know what it was not told",
      explain:
        "It has no idea that one customer is difficult, that one machine has been unreliable, or that two members of staff should not be put on the same shift.",
      detail:
        "Leave a way for a person to adjust the answer, and record what they changed and why. Those recorded changes are usually a list of constraints nobody wrote down.",
    },
    {
      term: "It is a different family from anything that learns",
      explain:
        "It does not learn from history. You give it the rules and the numbers and it works out the best combination directly.",
      detail:
        "That means it needs no training data, which is why it is sometimes the right answer for a business with a hard problem and very little history. It also means it will not improve on its own.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The cleaning contractor: how the fortnightly rota gets built now",
      caption:
        "Step two happens in a van at six in the morning, not in a meeting room. The named keyholder, the two staff who should not be paired and the site that needs the same face every week are the whole problem, and none of them were written down anywhere.",
      trigger: "Every fortnight, when the rota is built",
      runtime: "Minutes to solve, against two days by hand.",
      stages: [
        {
          actor: "person",
          label: "Score what you already do today",
          detail: "One day of work. It either makes the case or saves you the money.",
          output: "the current rota's travel, consistency and fairness, as numbers",
        },
        {
          actor: "person",
          label: "Collect the unwritten rules",
          detail: "Two early mornings out with the supervisors beat a week of meetings about requirements.",
          output: "the constraints, written down for the first time",
        },
        {
          actor: "rule",
          label: "Agree what best actually means, with weights",
          detail: "Travel and consistency and fairness, and they pull against each other. Somebody has to decide by how much.",
          output: "one score the business has signed off",
        },
        {
          actor: "model",
          label: "Work out the best combination",
          detail: "It does not predict anything and it does not learn anything. It searches, very quickly, through options a person cannot hold in their head.",
          output: "a draft rota",
          exception: "If it cannot satisfy every hard constraint it says so and shows which one, rather than quietly breaking the cheapest.",
        },
        {
          actor: "person",
          label: "The supervisor edits, and every change records a reason",
          detail: "Each edit is a constraint that was missed, not a supervisor being awkward.",
          output: "a rota that goes out, and a list of what the model did not know",
        },
      ],
      loop: "Those recorded reasons become next fortnight's constraints, and the number of edits falls each time.",
      outcome:
        "The rules that lived only in one supervisor's head now belong to the business, and the rota takes minutes.",
    },
    {
      kind: "tree",
      title: "Hard rule or strong preference? Getting this wrong stops it dead.",
      caption:
        "The cleaning contractor's first run treated site consistency as absolute and returned no possible answer at all. At that point the instinct is to start deleting rules at random, when the fix is to price them instead.",
      question: "What happens if we break this rule?",
      branches: [
        {
          answer: "Illegal, or physically impossible",
          outcome: "A hard constraint. It can never be broken.",
        },
        {
          answer: "Somebody is unhappy, or it costs money",
          outcome: "A preference. Give it a cost, so it is avoided unless the alternative is worse.",
        },
        {
          answer: "Nothing, really",
          outcome: "Not a rule. Take it out, it is only shrinking the set of possible answers.",
        },
      ],
    },
    {
      kind: "flow",
      title: "The cleaning contractor: two days of rota building, done in minutes",
      caption:
        "Step two happens in a van at six in the morning, not in a meeting room. The named keyholder and the two staff who should not be paired appeared in no document anywhere.",
      steps: [
        { label: "Score what you do today", note: "One day. It makes the case or saves the money.", tone: "input" },
        { label: "Collect the unwritten rules", note: "Two early mornings beat a week of meetings" },
        { label: "Agree what best actually means", note: "Travel AND consistency AND fairness, with weights" },
        { label: "Work out the best combination", note: "It does not predict and it does not learn", tone: "model" },
        { label: "The supervisor edits, reasons recorded", note: "Each change is a constraint you missed", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Mathematically better, and the drivers refused it.",
      walkthrough:
        "The problem: a distribution business introduced optimised routing and the drivers rejected it within a fortnight. The routes were genuinely shorter. What was happening: a BA spent a day in the cabs. Several rules had never been written down. One customer's yard could not take a full-size vehicle after nine in the morning because of a school run. One drop had to be last because the site closed early. One route crossed a bridge that was weight limited at certain times.",
      result:
        "What changed: those rules went in as constraints and the routes came out slightly longer and entirely workable. The system had not been wrong. It had been told an incomplete version of the problem. Collecting the unwritten rules is the actual work in one of these projects and it happens in a cab rather than at a desk.",
    },
    {
      kind: "illustration",
      scenario: "The rota that was cheapest and unworkable.",
      walkthrough:
        "The problem: a business optimised its rota purely on cost and the result was rejected out of hand by the team. What was happening: it had produced something legal, cheap and miserable. Late shifts followed by early ones, weekends clustered on the same people, and nobody getting two consecutive days off in a month. Every one of those was allowed because nobody had said otherwise.",
      result:
        "What changed: they added preferences with costs attached, so the system avoided those patterns unless there was no alternative. The rota cost slightly more and was accepted immediately. What you tell it to optimise is what you get, exactly and literally, and cost alone is almost never the whole objective.",
    },
    {
      kind: "illustration",
      scenario: "Scoring today's answer before funding anything.",
      walkthrough:
        "The problem: a business was scoping a substantial project to optimise how work was allocated across teams. What was happening: before agreeing, a BA scored last month's actual allocations against the measure the project would be optimising. The experienced supervisor doing it by hand turned out to be within a few per cent of what looked achievable.",
      result:
        "What changed: they did not fund the project, and instead documented how the supervisor made the decisions so it would survive her retiring. Scoring the current answer costs a day and it either builds the case or saves the money. It is the first thing to do and it is almost always skipped.",
    },
  ],

  learningPath: [
    {
      title: "Write down the three ingredients",
      body: "What you are trying to make best, what you can change, and what you cannot break. Get all three agreed before anybody looks at tools.",
      effort: "Half a day",
      outcome: "The problem defined, which is most of the work and none of it technical.",
    },
    {
      title: "Score what you do today",
      body: "Take last month's actual routes, rotas or allocations and score them with the measure you would be optimising. That tells you how much room there is.",
      effort: "1 day",
      outcome: "Either the business case or the discovery that there is very little to gain.",
    },
    {
      title: "Go and collect the unwritten rules",
      body: "Spend time with the people who do this now. Ask what they would never do and why. Half the constraints live in somebody's head.",
      effort: "2-3 days",
      outcome: "The difference between an answer people accept and one they reject.",
    },
    {
      title: "Separate hard rules from strong preferences",
      body: "Legal limits and physical capacities are absolute. Fairness and habit are strong preferences. Treat every preference as absolute and there may be no possible answer.",
      effort: "A conversation",
      outcome: "A problem that can actually be solved, and an answer people will work with.",
    },
    {
      title: "Check where every number comes from",
      body: "Travel times, capacities, costs, availability. Ask when each was last checked. A stale travel time produces a beautiful impossible schedule.",
      effort: "1-2 days",
      outcome: "Protection against the quiet failure that nothing in the output reveals.",
    },
    {
      title: "Make sure the objective is not just cost",
      body: "Add whatever else matters, with weights the business agrees. Fairness, service level, driver satisfaction, consistency week to week.",
      effort: "A conversation",
      outcome: "An answer that reflects what the business actually wants rather than the one thing that was easiest to measure.",
    },
    {
      title: "Let people adjust it, and record the changes",
      body: "A route or rota nobody can amend gets abandoned. Capture every change and the reason.",
      effort: "Part of the build",
      outcome: "Adoption, plus a list of the constraints you still have not captured.",
    },
  ],

  exercises: [
    {
      title: "Score today's answer",
      brief:
        "Take last week's actual rota, route plan or allocation and score it against the measure an optimiser would use. Compare against a rough estimate of what is achievable.",
      success:
        "You have a gap, and you can say whether it justifies a project or whether the experienced person is already close.",
      time: "1 day",
    },
    {
      title: "Collect the unwritten rules",
      brief:
        "Spend half a day with whoever plans this now. Ask what they would never do, and why, for each one. Write every answer down.",
      success:
        "You have a list of constraints, most of which appear in no document anywhere.",
      time: "Half a day",
    },
    {
      title: "Check one number",
      brief:
        "Pick one input an existing planning system relies on, such as a travel time or a capacity. Find out where it came from and when it was last checked.",
      success:
        "You can say whether it is current, and frequently it dates from before something significant changed.",
      time: "45 minutes",
    },
  ],

  caseStudy: {
    business:
      "A commercial cleaning contractor. Around ninety staff cleaning offices, surgeries and small industrial units across a region, mostly early mornings and evenings.",
    problem:
      "Building the weekly rota took a supervisor most of two days, and it was still wrong. Somebody would be sent across the region for a forty-minute clean while a colleague drove the opposite way. When she was on leave, nobody else could do it at all.",
    analysis: [
      "This is not a prediction problem and that distinction is worth making at the start. Nothing needs forecasting. The demand is contracted and known. The question is purely which combination of assignments is best.",
      "Three things had to be written down and only the first was easy. What are we trying to make best. What can we change. What can we never break.",
      "The objective was assumed to be travel time. Pushed on it, the business wanted three things: travel time, consistency of who cleans which site, and fairness of hours across staff. Optimising only the first was the reason two earlier attempts had been rejected.",
      "Then the constraints, and this took the longest. Some were written down: contracted hours, access windows, keyholder qualifications. Most were not. One site could only be accessed by a named individual because the client insisted. Two staff could not be rostered together. One building's alarm code was held by three people.",
      "Scoring the current rota first was the step that justified the whole thing. Last month's actual assignments were measured against travel time and against fairness. The travel gap was substantial. That one day of work made the case.",
      "Ruled out: hiring another supervisor, which was the standing proposal. The two days were being spent on a combinatorial problem that a person cannot do well, not on a workload problem.",
    ],
    aiApproach: [
      {
        step: "Write down the three ingredients before anything else",
        detail:
          "Objective, what can be changed, what cannot be broken. This is almost all the work and none of it is technical. Two earlier attempts had skipped it and gone straight to software.",
      },
      {
        step: "Collect the unwritten rules by going out with the staff",
        detail:
          "Two early mornings riding along produced more constraints than a week of meetings. The named-keyholder rule, the two staff who should not be paired, the site where parking makes the first job of the morning impossible. None of it was in any document.",
      },
      {
        step: "Separate the absolute from the strongly preferred",
        detail:
          "Contracted hours and access windows are hard. Keeping the same cleaner at the same site is a strong preference. Treating every preference as absolute produces a problem with no solution at all, which is what happened on the first run.",
      },
      {
        step: "Give preferences a cost instead of forbidding them",
        detail:
          "Breaking site consistency is allowed and expensive, so it happens only when the alternative is worse. That single change turned an unsolvable problem into a workable rota.",
      },
      {
        step: "Score the current rota to know if it is worth it",
        detail:
          "One day of work measuring what the supervisor already achieves. Sometimes an experienced planner is close to the best available and the honest answer is not to bother. Here the gap was large, and knowing that before spending anything is the point.",
      },
    ],
    solution: [
      "A weekly rota generated in minutes rather than two days.",
      "An objective combining travel, site consistency and fairness of hours, with weights the business agreed in advance.",
      "The unwritten constraints built in explicitly, including the named keyholder and the staff pairing rule.",
      "Full editing by the supervisor, with every change and its reason recorded.",
      "The recorded changes read monthly, because each one is a constraint that was missed.",
    ],
    impact: [
      "Two days of supervisor time each week went back into supervising, which was the original complaint and was not what the project was sold on.",
      "The rota stopped being one person's private skill, which removed a real risk that had never been costed.",
      "Cross-region journeys for short cleans largely stopped, because avoiding them was in the objective rather than in somebody's head.",
      "The fairness measure surfaced that a few staff had been quietly absorbing the worst runs for a long time, which nobody had noticed.",
    ],
    whatWouldHaveKilledIt:
      "Optimising travel time alone, which is what the first attempt did. It produced a rota that was shorter on the road, changed who cleaned which site every week, and was rejected by staff and clients within a fortnight. The second killer was nearly fatal too: the first run treated site consistency as absolute and returned no possible answer, at which point the instinct is to start deleting rules at random rather than to price them.",
  },

  mistakes: [
    {
      mistake: "Optimising cost alone",
      why: "You get something legal, cheap and unworkable. It does exactly what you asked, harder and more literally than a person would.",
      fix: "Agree everything that matters, with weights, before anybody builds. Fairness and consistency are real objectives.",
    },
    {
      mistake: "Missing the unwritten rules",
      why: "The answer is mathematically better and gets rejected within a fortnight, because it breaks something everybody knows and nobody recorded.",
      fix: "Spend days with the people who do the planning and the people who execute it. Ask what they would never do.",
    },
    {
      mistake: "Treating every preference as absolute",
      why: "You over-constrain the problem until there is no possible answer, and then somebody starts removing rules at random to make it work.",
      fix: "Separate hard limits from strong preferences and allow preferences to be broken at a cost.",
    },
    {
      mistake: "Not checking the input numbers",
      why: "Stale travel times or capacities produce a confident, detailed, impossible plan, and nothing in the output looks wrong.",
      fix: "Ask where every number comes from and when it was last verified, before trusting any answer.",
    },
    {
      mistake: "Never scoring the current approach",
      why: "You cannot say whether there is anything to gain. Sometimes the experienced person is already close to the best available.",
      fix: "Score last month's actual decisions first. One day, and it either makes the case or saves the money.",
    },
    {
      mistake: "Producing an answer nobody can change",
      why: "The planner knows things it does not, about a difficult customer or an unreliable machine. Without a way to adjust, they abandon it entirely.",
      fix: "Allow adjustment, capture every change and the reason, and use those to find missing constraints.",
    },
  ],

  bestPractices: [
    "Write down the three ingredients before looking at any tool.",
    "Score what you do today before funding anything.",
    "Collect the unwritten rules from the people who do the work.",
    "Separate hard limits from strong preferences.",
    "Allow preferences to be broken at a cost rather than forbidding them.",
    "Check where every input number comes from and when it was verified.",
    "Include everything that matters in the objective, not just cost.",
    "Let people adjust the answer and record every change with a reason.",
    "Review the recorded changes for constraints you have not captured.",
  ],

  proTips: [
    "Spend a day doing the job before writing any constraints. Sit in the cab, sit with the planner, watch the shifts get built. Half the rules that decide whether an answer is acceptable have never been written down anywhere, and you will not get them by asking in a meeting room.",
    "Score what the business does today before proposing anything. It takes a day, and either you have a gap that makes the case for you or you discover that your experienced planner is already close to the best available, which is a genuinely useful finding and a reason not to spend the money.",
    "Read the overrides after the first month. Every change somebody made to the generated answer is a constraint you missed, written down for free by the person who knows. That list is the most valuable output of the first month and hardly anybody collects it.",
    "Ask what happens if a driver is off sick on the day. A plan that is optimal and brittle is worse than one that is slightly worse and copes. Whether the answer can absorb a disruption is a business requirement and it almost never appears in the original brief.",
  ],

  businessApplications: [
    "Routing vehicles and planning delivery rounds.",
    "Building staff rotas and shift patterns.",
    "Allocating a fixed budget across competing projects.",
    "Blending ingredients or materials to meet a specification at least cost.",
    "Cutting sheets or lengths to minimise waste.",
    "Scheduling machines or jobs through a workshop.",
    "Assigning cases or work to teams with different skills and capacities.",
  ],

  checklist: [
    "Objective, decisions and constraints all written down and agreed.",
    "Current approach scored against the same measure.",
    "Unwritten rules collected from planners and from the people executing.",
    "Hard limits separated from strong preferences.",
    "Preferences given costs rather than being absolute.",
    "Every input number traced to a source with a date.",
    "Objective includes everything that matters, not only cost.",
    "Adjustment route built, with reasons captured.",
    "Recorded overrides reviewed for missing constraints.",
    "Behaviour when something goes wrong on the day considered.",
  ],

  faqs: [
    {
      q: "How is this different from everything else in this area?",
      a: "It does not predict and it does not learn from history. You give it the rules and the numbers and it works out the best combination directly. That also means it needs no training data, which occasionally makes it the right answer when you have very little history.",
    },
    {
      q: "Why do people reject the optimal answer?",
      a: "Almost always because a constraint everybody knows was never written down. The answer is genuinely better against what it was told and breaks something obvious to anybody who does the job. The fix is collecting the unwritten rules, not arguing about the arithmetic.",
    },
    {
      q: "Do we need special software?",
      a: "There are mature tools and for many problems a spreadsheet solver handles a surprising amount. The tooling is rarely the hard part. Defining the problem accurately is.",
    },
    {
      q: "What if we cannot express what we want as a single measure?",
      a: "You usually can, by combining several things with weights the business agrees. Getting those weights agreed is a useful conversation in itself, because it forces people to say how much fairness is worth against cost.",
    },
    {
      q: "How do we know it is worth doing?",
      a: "Score what you do today against the same measure. The gap between that and what looks achievable is your case. Sometimes the gap is small and the honest answer is not to bother.",
    },
    {
      q: "Should the answer be used automatically?",
      a: "Usually not entirely. The planner knows things the system does not. Let them adjust it, record what they change, and use those records to find the constraints you missed.",
    },
  ],

  tools: [
    { name: "The three ingredients, written down", what: "Objective, what you can change, what you cannot break. Most of the work and none of it technical.", cost: "Free" },
    { name: "A score for today's approach", what: "One day, and it either makes the case or saves the money.", cost: "Free" },
    { name: "A day doing the job", what: "Where the unwritten rules are. You will not get them in a meeting room.", cost: "Free" },
    { name: "A log of overrides", what: "Every change somebody makes is a constraint you missed, written down for free.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "predicting-versus-deciding", anchor: "why predicting and deciding are different problems", context: "Background" },
    { slug: "capacity-and-volume-analysis", anchor: "working out what you actually have to work with", context: "Inputs" },
    { slug: "forecasting-demand-and-staffing", anchor: "the predictions this takes as given", context: "Upstream" },
  ],

  relatedGuides: ["predicting-versus-deciding", "capacity-and-volume-analysis", "forecasting-demand-and-staffing"],

  conclusion: [
    "Take last week's actual rota or route plan and score it against whatever measure an optimiser would use. One day of work tells you whether there is real money in this or whether your experienced planner is already close to the best available.",
  ],
};

export default guide;
