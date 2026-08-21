import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "delivering-change-into-a-business",
  seoTitle: "Launching a Change Into a Business That Cannot Stop",
  metaDescription:
    "Four ways to switch over and what each costs, the work half-finished on Friday, testing whether people are really ready, and why changes fail quietly rather than loudly.",
  title: "Launching a Change Into a Working Business",
  keywords: [
    "implementation planning",
    "cutover strategy",
    "change management for analysts",
    "phased rollout",
    "go live readiness",
    "user adoption",
  ],
  category: "leadership",
  level: "Advanced",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Go-live is the moment a project stops being an idea and becomes somebody's Monday. Everything until then could be undone. From that point, a business with real customers and real deadlines has to work using something it has never used before, while the people who built it move on to the next thing.",
    "Most of what goes wrong here is not technical. The system works and the business cannot use it, because nobody wrote the procedure, or training happened six weeks too early, or the work that was half-finished on Friday had nowhere to go on Monday, or the support arrangement assumed a number of questions that turned out to be several times too low.",
    "This guide covers the bit between it being finished and it being worth anything. Choosing how to switch over and being honest about what it costs, checking people are ready rather than asserting it, handling half-finished work, running the first week, and spotting the quiet reversion that is how most changes actually fail.",
  ],

  whyItMatters: [
    "A change that gets delivered and not used has cost the entire budget and delivered nothing. It is also the hardest kind of failure to see, because nothing dramatic happens. People just carry on doing what they did before, using the new system as a place to type it up afterwards.",
    "The cost of a bad switchover lands on the operation rather than the project. Backlogs build, customers wait, and the staff who were told this would make things better spend a fortnight proving otherwise to each other. That memory attaches to the next change too.",
    "And this is where all your earlier work either pays off or gets wasted. You understood the process, found the exceptions, wrote the rules. Nobody else in the room has that, and during the switchover it is needed by the hour.",
  ],

  coreConcepts: [
    {
      term: "Four ways to switch over, each with a real cost",
      explain:
        "Everybody moves at once. Or region by region, product by product, team by team. Or one group goes first as a trial and then the rest. Or both systems run together for a while.",
      detail:
        "Running both is safest and by far the most expensive, because somebody does everything twice while the workload does not drop. Everybody at once is cheapest and puts all the risk into one weekend. There is no free option and an honest analysis says what each one costs.",
    },
    {
      term: "Doing it in stages has a hidden cost: the in-between",
      explain:
        "While half the business is on the new way, somebody has to run two versions, keep them in step, and answer questions about which rules apply to which case.",
      detail:
        "That in-between state is a design problem in its own right and it routinely gets left undesigned, because it is temporary. Temporary states that last four months and were never designed is where the mistakes happen.",
    },
    {
      term: "Decide what happens to work that is half done",
      explain:
        "On Friday there are cases part-way through the old process. Do they finish the old way, move across mid-flight, or get finished by hand?",
      detail:
        "Every option is defensible and the decision has to be made and communicated before the weekend. This is the single most commonly forgotten item in any switchover plan, and it causes the most confusion on the first morning.",
    },
    {
      term: "Test whether people are ready, do not just ask",
      explain:
        "A checklist where everybody ticks green tells you what people believe. Test the claims: ask somebody to complete a task using only the written procedure, ask the support team what they would do with a specific question.",
      detail:
        "The gap between what a readiness review claims and what fifteen minutes of testing shows is consistently large, and finding it before go-live is much cheaper than finding it after.",
    },
    {
      term: "Train close to the day, and train on real work",
      explain:
        "Training delivered weeks in advance gets forgotten. Training that walks through screens teaches the screens rather than the job.",
      detail:
        "Train on the actual cases people will handle, as close to go-live as the diary allows, and give everybody something to look at afterwards. Memory for something used once fades fast.",
    },
    {
      term: "Write the procedure, because the system is not one",
      explain:
        "A system tells you what buttons exist. A procedure tells somebody what to do when a customer calls with a specific problem, and where the edges of their authority are.",
      detail:
        "If nobody writes it, one of the more confident staff will invent one and it will spread by word of mouth, complete with whatever misunderstanding it started with.",
    },
    {
      term: "Plan support for far more questions than you expect",
      explain:
        "In the first week people ask constantly, and most of the questions are not about faults. Assume more than you think and staff it visibly.",
      detail:
        "Somebody walking the floor beats a ticket queue in week one by a wide margin. People will ask a person standing nearby something they would never raise a ticket about, and those unasked questions are exactly where workarounds start.",
    },
    {
      term: "Decide in advance what would make you stop",
      explain:
        "What would cause you to pull it, who decides, and by when. Agreed beforehand, in writing, while everybody is calm.",
      detail:
        "Without it, the decision gets taken at two in the morning by whoever is most tired, under pressure not to be the person who called it. Agreeing the test in advance takes the personal cost out of a necessary decision.",
    },
    {
      term: "Tell people what changes for them, not what the project delivered",
      explain:
        "People do not need the programme story. They need to know what will be different about their Tuesday, what to do when something looks wrong, and who to ask.",
      detail:
        "One page per role beats a company-wide announcement. The test is whether somebody can read it in two minutes and know what to do differently.",
    },
    {
      term: "Resistance is usually information",
      explain:
        "People push back when the change costs them something real: more work, less control, a skill made irrelevant, or a check they are accountable for being taken away.",
      detail:
        "Find out what they are protecting before deciding it is an attitude problem. Most of what gets labelled resistance turns out to be a legitimate operational objection nobody asked about in time.",
    },
    {
      term: "Changes fail quietly",
      explain:
        "The failure is not refusal. It is the spreadsheet that reappears, the step people skip, the field left blank, the phone call that replaces the process.",
      detail:
        "Nobody reports any of this. You have to go and look, in the second and sixth weeks, by watching people work rather than by asking whether it is going well.",
    },
    {
      term: "Hand over properly or you never leave",
      explain:
        "Support team briefed on what to do when things fail, the procedure owned by a named person, somebody who owns the settings, and a route for the changes that will inevitably get asked for.",
      detail:
        "The test of a clean handover is whether questions still come to you personally three months later. If they do, the knowledge was in your head rather than in the business.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Too ambitious, scaled back to the simplest cases.",
      walkthrough:
        "In September 2013 the UK National Audit Office reported on the early implementation of Universal Credit. It found £425 million spent to that point, with over 70% on IT systems, and £34 million of IT already written off. The NAO concluded the Department had been over-ambitious in both timetable and scope, that the programme suffered from weak management, ineffective control and poor governance, and that it lacked adequate measures of progress despite taking a high-risk approach. The existing IT had significant gaps, including missing fraud detection, forcing reliance on manual checks that were not suitable at national scale.",
      result:
        "The national rollout, originally planned for October 2013, was delayed, and the programme was scaled back to extend trials to six more sites handling only the simplest claims. Two things carry over into any switchover. Being ambitious about scope and timing is a delivery risk in itself, not just a planning preference. And a rollout with nothing to steer by cannot be steered, because nobody can tell whether the current stage is working before the next one starts.",
      source: {
        label: "National Audit Office (5 September 2013). Universal Credit: early progress",
        url: "https://www.nao.org.uk/reports/universal-credit-early-progress/",
      },
    },
    {
      kind: "illustration",
      scenario: "The orders that were half done on Friday.",
      walkthrough:
        "The problem: a new order process went live on a Monday and the first week was chaos. What was happening: the plan covered moving the data, training, access and support. It said nothing about the several hundred orders that were part-way through the old process on Friday afternoon. On Monday, staff found those orders visible in the new system but sitting at a status that did not exist in the new way of working, with no agreed way to move them on.",
      result:
        "What changed: a week of handling them by hand and a backlog that took a fortnight to clear. The system worked correctly throughout. Half-finished work is the most commonly forgotten part of a switchover plan and it is entirely predictable: at any changeover moment, some cases are part-way through, and somebody has to have decided what happens to them.",
    },
    {
      kind: "illustration",
      scenario: "The quiet reversion.",
      walkthrough:
        "The problem: six weeks after a successful go-live, the usage figures looked healthy and no significant faults were outstanding. What was happening: a BA spent an afternoon sitting with three users. All three were recording their work in the new system after finishing it, and using a shared spreadsheet to manage the actual queue, because the new system's list could not be sorted the way they needed. None of them had mentioned it.",
      result:
        "What changed: they fixed the sorting, and the spreadsheet went. The change had been fully adopted as a place to record things and not at all as a way of working, which meant none of the expected benefit was going to appear. This is the normal shape of a change failing, and the only reliable way to find it is to watch people work a few weeks after the noise has died down.",
    },
  ],

  learningPath: [
    {
      title: "Choose how to switch over and be honest about the cost",
      body: "All at once, in stages, a trial group first, or both running together. Write what each would cost in effort, risk and elapsed time for this specific change, and recommend one with the trade-off visible.",
      effort: "Half a day",
      outcome: "A decision taken on purpose rather than defaulting to whatever the last project did.",
    },
    {
      title: "Design the in-between if you are doing it in stages",
      body: "Who runs two versions, how cases get routed, what has to be kept in step, and who answers which rules apply. Treat it as a process to be designed, not a temporary inconvenience.",
      effort: "1-2 days",
      outcome: "The months of running both stop being the riskiest part of the project.",
    },
    {
      title: "Decide the rule for half-finished work",
      body: "Finish the old way, move across mid-flight, or complete by hand. Decide, write it down, and tell everybody affected before the weekend.",
      effort: "2 hours",
      outcome: "The most commonly forgotten item, handled.",
    },
    {
      title: "Test readiness rather than reviewing it",
      body: "Ask somebody to complete a task using only the written procedure. Ask support what they would do with a specific likely question. Check that access actually works for a sample of real users.",
      effort: "Half a day",
      outcome: "A picture based on evidence, usually noticeably worse than the checklist claimed.",
    },
    {
      title: "Agree what would make you stop, in writing",
      body: "What triggers pulling it, who decides, and by when. Agreed while everybody is calm and nobody is invested in the weekend going ahead.",
      effort: "1 hour",
      outcome: "A decision that can be taken without anybody having to be the one who called it.",
    },
    {
      title: "Staff the first week for the real number of questions",
      body: "Somebody visibly available, a fast route to an answer, and a daily sort-through. Assume more questions than the plan says and plan the second week too, because it does not drop off as fast as people expect.",
      effort: "A week of somebody's time",
      outcome: "Questions answered before they turn into workarounds.",
    },
    {
      title: "Go and look in week two and week six",
      body: "Sit with people and watch them work. Ask what they have started doing outside the system. Look for the spreadsheet, the skipped field, the phone call replacing the process.",
      effort: "Half a day each",
      outcome: "The quiet reversion caught while it is still a habit rather than the norm.",
    },
  ],

  exercises: [
    {
      title: "Ask about Friday afternoon",
      brief:
        "For any change your business is planning, find out what will happen to work that is part-way through at the changeover moment. Ask three people involved in the plan and see whether the answers match.",
      success:
        "You either confirm a documented, communicated rule, or you have found a real gap several weeks before it would have surfaced.",
      time: "1 hour",
    },
    {
      title: "Test a procedure",
      brief:
        "Take a written procedure for a live system and ask somebody who does not do that job to complete a real task using only the document. Sit and watch. Do not help.",
      success:
        "You have a list of the points where the procedure is not enough, and a realistic view of whether it would support a new starter or somebody covering.",
      time: "1 hour",
    },
    {
      title: "The week-six walk",
      brief:
        "Find a change that went live two or three months ago. Sit with three users and watch them work for thirty minutes each. Note anything happening outside the system.",
      success:
        "You can describe at least one workaround that has grown up since go-live and that nobody has reported.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "No plan for half-finished work",
      why: "At the changeover some cases are part-way through, and if nobody decided what happens to them, staff invent something on Monday morning under pressure, inconsistently.",
      fix: "Decide the rule, write it down, tell everybody before the weekend, and check the new system can even represent the state those cases arrive in.",
    },
    {
      mistake: "Training too early and on screens",
      why: "Memory for something used once fades fast, and screen-based training teaches navigation rather than the job. People turn up on day one able to find a button and unable to handle a case.",
      fix: "Train close to go-live, using the real cases people will handle, and give them something to refer back to.",
    },
    {
      mistake: "Assuming the system replaces the procedure",
      why: "The system shows what is possible, not what to do. Without a written procedure, one confident member of staff invents one and it spreads with its misunderstandings intact.",
      fix: "Write the procedure per role, test it by having somebody unfamiliar follow it, and give it a named owner.",
    },
    {
      mistake: "Under-resourcing the first week",
      why: "The number of questions in week one is much higher than anybody plans for, and unanswered questions become workarounds within days. Workarounds become permanent quickly.",
      fix: "Have somebody visibly available and a fast route to an answer, and plan week two as well as week one.",
    },
    {
      mistake: "Treating readiness as a checklist",
      why: "Green ticks record confidence rather than capability. The gap between the two is consistently large and only shows up under real conditions.",
      fix: "Test the claims. Follow the procedure, ask support a real question, check access with real users before the weekend.",
    },
    {
      mistake: "Not agreeing in advance what would make you stop",
      why: "The go or no-go decision gets taken under exhaustion and social pressure by whoever is least able to resist it, and pulling it becomes a personal failure rather than a planned option.",
      fix: "Write the test, the decision maker and the deadline in advance, and get the sponsor to agree it.",
    },
    {
      mistake: "Dismissing resistance as attitude",
      why: "Most of it is a legitimate objection about workload, control or a check being removed. Labelling it as attitude means the objection never gets examined and comes back as a workaround.",
      fix: "Ask what they are protecting. Fix the real problem where you can and explain the trade-off honestly where you cannot.",
    },
    {
      mistake: "Declaring success at go-live",
      why: "Go-live is when the change starts, not when it succeeds. Failing to get used is quiet and shows up weeks later as a spreadsheet nobody mentions.",
      fix: "Book week two and week six visits and treat them as part of delivering, not as an optional follow-up.",
    },
  ],

  bestPractices: [
    "Choose how to switch over on purpose and say what it costs.",
    "Design the in-between whenever you go in stages.",
    "Decide and communicate the half-finished work rule before the changeover.",
    "Test readiness rather than reviewing a checklist.",
    "Train close to go-live using real cases.",
    "Write a procedure per role and have somebody unfamiliar follow it.",
    "Staff the first week for more questions than you expect.",
    "Use somebody walking the floor rather than a ticket queue in week one.",
    "Agree in advance what would make you stop, who decides and by when.",
    "Tell people what changes for them, one page per role.",
    "Treat resistance as information and find out what is being protected.",
    "Go and watch people work in week two and week six.",
    "Hand over to a named procedure owner, support team and settings owner.",
  ],

  proTips: [
    "Ask each team what they will stop doing once this is live. If nobody can name anything, the change is being added to their workload rather than replacing part of it, and it will get used exactly as much as their spare capacity allows. That one question predicts whether a change sticks better than any readiness assessment I have used.",
    "Find the person in each team that others actually go to for help, who is rarely the supervisor, and get them trained first and involved in testing. Their opinion sets the team's view within about three days of go-live, and it is far cheaper to have them on the inside than to try to change their mind later.",
    "In the first week, write down every question that gets asked and where it came from. By Wednesday the clusters are obvious, and one clarification sent to everybody will remove a big chunk of the remaining volume. It also gives you a precise list of what the training and the procedure failed to cover.",
    "Do not let the project team disband on the Friday of go-live week. The second week is when the questions get harder, because people have moved past the basics into the exceptions, and that is exactly when everybody has been reassigned. Book the time in advance, because you will not get it afterwards.",
  ],

  businessApplications: [
    "Replacing a system, where how you switch over and the half-finished work carry most of the operational risk.",
    "Process change with no software, where training, procedure and floor support matter just as much.",
    "Legal deadlines, where the date is fixed from outside and your options for staging narrow accordingly.",
    "Multi-site rollouts, where a trial site is genuinely worth the extra time.",
    "Handing work over to an outside company, where the in-between period can last months and routinely goes undesigned.",
    "Bringing two businesses together, where both run in parallel and the checking is the main cost.",
  ],

  checklist: [
    "How to switch over chosen, with its cost and risk stated.",
    "In-between period designed if going in stages.",
    "Half-finished work rule decided, written down and communicated.",
    "Data checked and signed off by whoever owns it.",
    "Access tested with real users before the weekend.",
    "Procedure written per role and tested by somebody unfamiliar.",
    "Training delivered close to go-live using real cases.",
    "Support staffed for week one and week two, with somebody visible.",
    "What would make you stop, who decides and by when, agreed in writing.",
    "One-page note issued per role.",
    "Daily sort-through running through the first week.",
    "Week two and week six visits booked.",
    "Named owners for the procedure, the settings and support.",
  ],

  faqs: [
    {
      q: "All at once or in stages?",
      a: "Go in stages where the business splits cleanly by region, product or team and you can design the in-between. Go all at once where splitting creates more checking work than it removes risk. The decision should follow the split, not a general preference.",
    },
    {
      q: "Is running both systems worth it?",
      a: "Occasionally, where an undetected error would be severe and comparing them is genuinely possible. It is expensive, it doubles the workload during a stressful period, and it often degrades within a fortnight as people stop keeping the old one up properly.",
    },
    {
      q: "How long should the extra support last?",
      a: "Until the number of questions drops to something the normal route can absorb, measured rather than assumed. Two weeks is a common plan and four is a common reality, and the second week is usually harder than the first.",
    },
    {
      q: "What do I do about a team that will not use it?",
      a: "Go and find out what it costs them, because it is nearly always something real: a step that takes longer, a check they are accountable for, a case the system cannot handle. Persuasion does not work on a legitimate operational objection.",
    },
    {
      q: "Who owns the change after go-live?",
      a: "Name three people at go-live: who owns the procedure, who owns the settings, and who leads support. If those names do not exist, the answer defaults to whoever built it, which means the BA never leaves and the business never takes ownership.",
    },
    {
      q: "When should the project team stand down?",
      a: "After the second visit, not at the end of go-live week. Book that time in the plan, because asking for people back after they have been reassigned rarely works.",
    },
  ],

  tools: [
    { name: "A step-by-step changeover plan", what: "Every step, in order, with owner, start time, how long and what it depends on. Rehearsed at least once before the real weekend.", cost: "Free" },
    { name: "A one-page note per role", what: "What changes for you, what to do when something looks wrong, who to ask. Beats any company-wide announcement.", cost: "Free" },
    { name: "A written stop test", what: "What would make you pull it, who decides, by when. Agreed in advance so the decision is not personal at three in the morning.", cost: "Free" },
    { name: "A week-one question log", what: "Every question and where it came from. The clusters appear by day three and one message clears most of the rest.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: Universal Credit, early progress", kind: "Docs", note: "Primary source, September 2013. Read for the findings on over-ambitious scope and timing and the absence of anything adequate to steer by.", url: "https://www.nao.org.uk/reports/universal-credit-early-progress/" },
  ],

  internalLinks: [
    { slug: "running-user-acceptance-testing", anchor: "proving it works before this point", context: "Before the changeover" },
    { slug: "measuring-whether-it-worked", anchor: "finding out whether it delivered", context: "After go-live" },
    { slug: "stakeholder-management-in-practice", anchor: "the relationships this relies on", context: "Throughout" },
  ],

  relatedGuides: ["running-user-acceptance-testing", "measuring-whether-it-worked", "stakeholder-management-in-practice"],

  conclusion: [
    "Ask each team affected by your next change what they will stop doing once it is live. If nobody can name anything, you have found out now rather than in week six that the change is being added to their workload rather than replacing part of it, and that is the strongest single predictor of whether it sticks.",
  ],
};

export default guide;
