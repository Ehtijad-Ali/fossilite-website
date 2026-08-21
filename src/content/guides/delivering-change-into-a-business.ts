import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "delivering-change-into-a-business",
  seoTitle: "Delivering Change Into a Business That Has to Keep Running",
  metaDescription:
    "Cutover approaches compared, readiness that is not a checklist, in-flight work, the first Monday, and why adoption fails quietly rather than loudly.",
  title: "Delivering Change Into a Business",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 18,

  intro: [
    "Go-live is the moment a project stops being an idea and starts being somebody's Monday. Everything up to that point has been reversible. From that point, an operation with real customers and real deadlines has to work using something it has never used before, while the people who built it move on to the next thing.",
    "Most of what goes wrong here is not technical. The system works and the business cannot use it, because nobody wrote the procedure, or the training happened six weeks early, or the work that was already in progress on Friday had nowhere to go on Monday, or the support arrangement assumed a volume of questions that turned out to be several times too low.",
    "This guide covers the part of the job that sits between acceptance and benefit: choosing a cutover approach and being honest about what it costs, testing readiness rather than asserting it, handling in-flight work, running the first week, and recognising the quiet reversion that is how most changes actually fail.",
  ],

  whyItMatters: [
    "A change that is delivered but not adopted has consumed the entire cost and delivered none of the benefit. It is also the hardest kind of failure to see, because nothing dramatic happens: people just carry on doing what they did before, using the new system as a place to record it afterwards.",
    "The costs of a bad cutover land on the operation rather than the project. Backlogs build, customers wait, and the staff who were told this would make things better spend a fortnight proving otherwise to each other. That memory attaches to the next change too.",
    "And this phase is where a BA's earlier work is either realised or wasted. You understood the process, found the exceptions, wrote the rules. Nobody else in the room has that knowledge, and during cutover it is needed hourly.",
  ],

  coreConcepts: [
    {
      term: "Four cutover shapes, each with a real cost",
      explain:
        "Big bang: everyone moves at once. Phased: by region, product or team. Pilot: one group first, then the rest. Parallel run: both systems operated together for a period.",
      detail:
        "Parallel running is the safest and by far the most expensive, because somebody does everything twice while volumes do not fall. Big bang is cheapest and concentrates all risk into one weekend. There is no free option and the honest analysis names what each one costs.",
    },
    {
      term: "Phasing has a hidden cost: the interim state",
      explain:
        "While half the business is on the new process, somebody has to operate two versions, reconcile between them, and answer questions about which rules apply to a given case.",
      detail:
        "That interim state is a design problem in its own right and is routinely left undesigned, because it is temporary. Temporary states that last four months and are undesigned are where the errors happen.",
    },
    {
      term: "Decide what happens to work in flight",
      explain:
        "On Friday there are cases part-way through the old process. Do they finish under the old rules, get migrated mid-flight, or get completed manually?",
      detail:
        "Every option is defensible and the decision has to be made and communicated before the weekend. This is the single most commonly forgotten item in a cutover plan, and it produces the most confusion on the first morning.",
    },
    {
      term: "Readiness is tested, not asserted",
      explain:
        "A readiness checklist that everyone marks green tells you what people believe. Test the claims: ask someone to complete a task using only the written procedure, ask the support team what they would do with a specific question.",
      detail:
        "The gap between what a readiness review claims and what a fifteen-minute test shows is consistently large, and finding it before go-live is much cheaper than finding it after.",
    },
    {
      term: "Train close to go-live, and train on real tasks",
      explain:
        "Training delivered weeks in advance is forgotten. Training that walks through screens teaches the screens rather than the job.",
      detail:
        "Train on the real cases people will handle, as close to go-live as scheduling allows, and give everyone something to refer to afterwards. Recall degrades quickly for anything used once.",
    },
    {
      term: "Write the procedure, because the system is not one",
      explain:
        "A system tells you what buttons exist. A procedure tells someone what to do when a customer calls with a specific problem, and where the boundaries of their authority are.",
      detail:
        "If nobody writes it, one of the more confident staff will invent one and it will spread by word of mouth, complete with whatever misunderstanding it started with.",
    },
    {
      term: "Plan support for a realistic question volume",
      explain:
        "In the first week people ask constantly, and the questions are mostly not defects. Assume more than you think and staff it visibly.",
      detail:
        "Floor-walking beats a ticket queue in week one, by a large margin. People will ask a person standing nearby a question they would never raise a ticket for, and those unraised questions are where the workarounds start.",
    },
    {
      term: "Name the reversal condition before you go",
      explain:
        "What would cause you to stop or roll back, who decides, and by when. Agreed in advance, in writing, while everybody is calm.",
      detail:
        "Without it, the decision gets taken at two in the morning by whoever is most tired, under pressure not to be the person who called it. A pre-agreed criterion removes the personal cost from a necessary decision.",
    },
    {
      term: "Communicate what changes for the individual, not what the project delivered",
      explain:
        "People do not need the programme narrative. They need to know what will be different about their Tuesday, what they should do when something looks wrong, and who to ask.",
      detail:
        "One page per role beats a company-wide announcement. The test is whether somebody can read it in two minutes and know what to do differently.",
    },
    {
      term: "Resistance is usually information",
      explain:
        "People resist when the change costs them something real: more work, less control, a skill made irrelevant, or a control they are accountable for being removed.",
      detail:
        "Find out what they are protecting before deciding it is attitude. Most of what gets labelled resistance turns out to be a legitimate operational objection that nobody asked about in time.",
    },
    {
      term: "Adoption fails quietly",
      explain:
        "The failure mode is not refusal. It is the spreadsheet that reappears, the step people skip, the field left blank, the phone call that replaces the workflow.",
      detail:
        "Nobody reports any of this. You have to go and look, in the second and sixth weeks, by watching people work rather than by asking whether the system is going well.",
    },
    {
      term: "Hand over properly or you never leave",
      explain:
        "Support team briefed on failure paths, procedure owned by a named person, configuration owner identified, and a route for the changes that will inevitably be requested.",
      detail:
        "The measure of a clean handover is whether questions still come to you personally three months later. If they do, the knowledge was in your head rather than in the operation.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "An over-ambitious timetable, scaled back to the simplest cases.",
      walkthrough:
        "In September 2013 the UK National Audit Office reported on the early implementation of Universal Credit. It found that £425 million had been spent to that point, with over 70% on IT systems, and that £34 million of IT systems had already been written off. The NAO concluded that the Department for Work and Pensions had been overly ambitious in both the timetable and the scope of the programme, that the programme suffered from weak management, ineffective control and poor governance, and that the Department lacked adequate progress measures despite taking a high-risk approach. The existing IT system had significant gaps, including missing fraud detection components, forcing reliance on manual checks unsuitable for national scale.",
      result:
        "National rollout, originally planned for October 2013, was delayed, and the programme was scaled back to extend pilots to six additional sites handling only the simplest claims. Two things transfer directly to any cutover. Scope and timetable ambition is a delivery risk in itself, not just a planning preference. And a rollout without adequate progress measures cannot be steered, because nobody can tell whether the current stage is working before the next one starts.",
      source: {
        label: "National Audit Office (5 September 2013). Universal Credit: early progress",
        url: "https://www.nao.org.uk/reports/universal-credit-early-progress/",
      },
    },
    {
      kind: "illustration",
      scenario: "The work that was in progress on Friday.",
      walkthrough:
        "A new order process goes live on a Monday. The cutover plan covers data migration, training, access and support. It does not say what happens to the several hundred orders that were part-way through the old process on Friday afternoon. On Monday, staff find those orders visible in the new system but at a status that does not exist in the new workflow, and there is no agreed way to move them forward.",
      result:
        "The result was a week of manual handling and a backlog that took a fortnight to clear. The system worked correctly throughout. In-flight work is the most commonly forgotten element of a cutover plan and it is entirely predictable: at any cutover moment, some cases will be part-way through, and somebody has to have decided in advance what happens to them.",
    },
    {
      kind: "illustration",
      scenario: "The quiet reversion.",
      walkthrough:
        "Six weeks after a successful go-live, adoption metrics look healthy and no significant defects are outstanding. A BA spends an afternoon sitting with three users. All three are recording work in the new system after completing it, using a shared spreadsheet to manage the actual queue, because the new system's list view cannot be sorted the way they need and they have not mentioned it.",
      result:
        "The change had been fully adopted as a system of record and not at all as a way of working, which meant none of the expected benefit would appear. Nobody raised it because everybody assumed it was their own problem. This is the normal shape of adoption failure, and the only reliable way to find it is to watch people work a few weeks after the noise has died down.",
    },
  ],

  learningPath: [
    {
      title: "Choose the cutover shape and state its cost honestly",
      body: "Big bang, phased, pilot or parallel. Write what each would cost in effort, risk and elapsed time for this specific change, and recommend one with the trade-off visible.",
      effort: "Half a day",
      outcome: "A decision taken deliberately rather than defaulting to whatever the last project did.",
    },
    {
      title: "Design the interim state if you are phasing",
      body: "Who operates two versions, how cases are routed, what reconciliation is needed, and who answers which rules apply. Treat it as a process to be designed, not a temporary inconvenience.",
      effort: "1-2 days",
      outcome: "The months of dual operation stop being the riskiest part of the project.",
    },
    {
      title: "Decide the in-flight work rule",
      body: "Finish under old rules, migrate mid-flight, or complete manually. Decide, write it down, and communicate it to everyone affected before the cutover weekend.",
      effort: "2 hours",
      outcome: "The most commonly forgotten item, handled.",
    },
    {
      title: "Test readiness rather than reviewing it",
      body: "Ask somebody to complete a task using only the written procedure. Ask support what they would do with a specific likely question. Check that access actually works for a sample of real users.",
      effort: "Half a day",
      outcome: "A readiness picture based on evidence, usually noticeably worse than the checklist claimed.",
    },
    {
      title: "Write the reversal condition and get it agreed",
      body: "What triggers a stop or rollback, who decides, and by when. In writing, agreed while everyone is calm and nobody is invested in the weekend going ahead.",
      effort: "1 hour",
      outcome: "A decision that can be taken without anyone having to be the person who called it.",
    },
    {
      title: "Staff the first week for real question volume",
      body: "Floor-walking presence, a fast answer route, and daily triage. Assume more questions than the plan says and plan the second week too, because it does not drop off as fast as people expect.",
      effort: "A week of somebody's time",
      outcome: "Questions answered before they become workarounds.",
    },
    {
      title: "Go and look in week two and week six",
      body: "Sit with people and watch them work. Ask what they have started doing outside the system. Look for the spreadsheet, the skipped field, the phone call replacing the workflow.",
      effort: "Half a day each",
      outcome: "The quiet reversion found while it is still a habit rather than a norm.",
    },
  ],

  exercises: [
    {
      title: "The Friday afternoon question",
      brief:
        "For any change your organisation is planning, find out what will happen to work that is part-way through the old process at the cutover moment. Ask three people involved in the plan and see whether the answers agree.",
      success:
        "You either confirm a documented, communicated rule, or you have identified a real gap several weeks before it would have surfaced.",
      time: "1 hour",
    },
    {
      title: "The procedure test",
      brief:
        "Take any written procedure for a live system and ask somebody who does not do that job to complete a real task using only the document. Sit and watch. Do not help.",
      success:
        "You have a list of the points where the procedure is insufficient, and a realistic view of whether it would support a new starter or a cover arrangement.",
      time: "1 hour",
    },
    {
      title: "The week-six walk",
      brief:
        "Find a change that went live in your organisation two to three months ago. Sit with three users and watch them work for thirty minutes each. Note anything happening outside the system.",
      success:
        "You can describe at least one workaround that has emerged since go-live and that nobody has reported.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "No plan for work in flight",
      why: "At the cutover moment some cases are part-way through, and if nobody decided what happens to them, staff invent something on Monday morning under pressure, inconsistently.",
      fix: "Decide the rule, write it down, communicate it before the weekend, and check that the receiving system can represent whatever status those cases arrive in.",
    },
    {
      mistake: "Training too early and on screens",
      why: "Recall degrades fast for something used once, and screen-based training teaches navigation rather than the job. People arrive on day one able to find a button and unable to handle a case.",
      fix: "Train close to go-live, using the real cases people will actually handle, and provide something to refer back to.",
    },
    {
      mistake: "Assuming the system replaces the procedure",
      why: "The system shows what is possible, not what to do. Without a written procedure, one confident member of staff invents one and it spreads with its misunderstandings intact.",
      fix: "Write the procedure per role, test it by having someone unfamiliar follow it, and give it a named owner.",
    },
    {
      mistake: "Under-resourcing the first week",
      why: "Question volume in week one is much higher than anyone plans for, and unanswered questions turn into workarounds within days. Workarounds become permanent quickly.",
      fix: "Provide visible floor-walking support and a fast answer route, and plan for week two as well as week one.",
    },
    {
      mistake: "Treating readiness as a checklist exercise",
      why: "Green statuses record confidence rather than capability. The gap between the two is consistently large and only appears under real conditions.",
      fix: "Test the claims. Follow the procedure, ask the support team a real question, check access with real users before the weekend.",
    },
    {
      mistake: "No agreed reversal condition",
      why: "The go or no-go decision is taken under fatigue and social pressure by whoever is least able to resist it, and rollback becomes a personal failure rather than a planned option.",
      fix: "Write the criterion, the decision maker and the deadline in advance, and have it agreed by the sponsor.",
    },
    {
      mistake: "Dismissing resistance as attitude",
      why: "Most resistance is a legitimate objection about workload, control or a removed safeguard. Labelling it as attitude means the objection is never examined and reappears as a workaround.",
      fix: "Ask what they are protecting. Fix the real problem where you can, and explain the trade-off honestly where you cannot.",
    },
    {
      mistake: "Declaring success at go-live",
      why: "Go-live is when the change starts, not when it succeeds. Adoption failure is quiet and shows up weeks later as a spreadsheet nobody mentions.",
      fix: "Schedule week two and week six observation visits and treat them as part of the delivery, not as an optional follow-up.",
    },
  ],

  bestPractices: [
    "Choose the cutover shape deliberately and state what it costs.",
    "Design the interim state whenever you phase.",
    "Decide and communicate the in-flight work rule before cutover.",
    "Test readiness rather than reviewing a checklist.",
    "Train close to go-live using real cases.",
    "Write a procedure per role and have it followed by somebody unfamiliar.",
    "Staff the first week for a higher question volume than you expect.",
    "Use floor-walking rather than a ticket queue in week one.",
    "Agree the reversal condition, decision maker and deadline in advance.",
    "Communicate what changes for the individual, one page per role.",
    "Treat resistance as information and find out what is being protected.",
    "Go and watch people work in week two and week six.",
    "Hand over to a named procedure owner, support team and configuration owner.",
  ],

  proTips: [
    "Ask each team what they will stop doing once this is live. If nobody can name anything, the change is being added to their workload rather than replacing part of it, and adoption will be exactly as good as their spare capacity. This one question predicts adoption better than any readiness assessment I have used.",
    "Identify the person in each team that others actually ask for help, who is rarely the supervisor, and get them trained first and involved in acceptance testing. Their opinion sets the team's view within about three days of go-live, and it is far cheaper to have them on the inside than to try to change their mind afterwards.",
    "In the first week, write down every question that gets asked and where it came from. By Wednesday the clusters are obvious, and one clarification broadcast to everyone will remove a large share of the remaining volume. It also gives you a precise list of what the training and the procedure failed to cover.",
    "Do not let the project team disband on the Friday of go-live week. The second week is when the questions get harder, because people have moved past the basics into the exceptions, and that is exactly when everybody has been reassigned. Book the time in advance, because you will not get it retrospectively.",
  ],

  businessApplications: [
    "System replacement, where the cutover shape and the in-flight rule carry most of the operational risk.",
    "Process change with no software, where training, procedure and floor support matter just as much.",
    "Regulatory deadlines, where the date is externally fixed and the phasing options narrow accordingly.",
    "Multi-site rollouts, where a pilot site is genuinely worth the extra elapsed time.",
    "Outsourcing transitions, where the interim state can last months and is routinely undesigned.",
    "Post-merger integration, where two operations run in parallel and the reconciliation burden is the main cost.",
  ],

  checklist: [
    "Cutover shape chosen, with its cost and risk stated.",
    "Interim state designed if phasing.",
    "In-flight work rule decided, documented and communicated.",
    "Data migration reconciled and signed off by the data owner.",
    "Access tested with real users before the weekend.",
    "Procedure written per role and tested by somebody unfamiliar.",
    "Training delivered close to go-live using real cases.",
    "Support model staffed for week one and week two, with floor-walking.",
    "Reversal condition, decision maker and deadline agreed in writing.",
    "One-page communication issued per role.",
    "Daily triage running through the first week.",
    "Week two and week six observation visits scheduled.",
    "Named owners identified for procedure, configuration and support.",
  ],

  faqs: [
    {
      q: "Big bang or phased?",
      a: "Phase where the business can be split cleanly by region, product or team and the interim state can be designed. Go big bang where splitting creates more reconciliation than it removes risk. The decision should follow the split, not a general preference.",
    },
    {
      q: "Is parallel running worth it?",
      a: "Occasionally, where the consequence of an undetected error is severe and comparison is genuinely possible. It is expensive, it doubles the workload during a stressful period, and it often degrades within a fortnight as people stop maintaining the old system properly.",
    },
    {
      q: "How long should hypercare last?",
      a: "Until question volume falls to a level the normal support route can absorb, measured rather than assumed. Two weeks is a common plan and four is a common reality, and the second week is usually harder than the first.",
    },
    {
      q: "What should I do about a team that will not adopt?",
      a: "Go and find out what it costs them, because it is nearly always something real: a step that takes longer, a control they are accountable for, a case the system cannot handle. Persuasion does not work on a legitimate operational objection.",
    },
    {
      q: "Who owns the change after go-live?",
      a: "Name three people at go-live: the procedure owner, the configuration owner and the support lead. If those names do not exist, the answer defaults to whoever built it, which means the BA never leaves and the operation never takes ownership.",
    },
    {
      q: "When should the project team stand down?",
      a: "After the second observation visit, not at the end of go-live week. Book that time in the plan, because retrospectively requesting people back after they have been reassigned rarely succeeds.",
    },
  ],

  tools: [
    { name: "A cutover runbook", what: "Every step, in order, with owner, start time, duration and dependency. Rehearsed at least once before the real weekend.", cost: "Free" },
    { name: "A one-page role communication", what: "What changes for you, what to do when something looks wrong, who to ask. Beats any company-wide announcement.", cost: "Free" },
    { name: "A written reversal condition", what: "Criterion, decision maker, deadline. Agreed in advance so the decision is not personal at three in the morning.", cost: "Free" },
    { name: "A week-one question log", what: "Every question and its source. Clusters appear by day three and one broadcast clears most of the remaining volume.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: Universal Credit, early progress", kind: "Docs", note: "Primary source, September 2013. Read specifically for the findings on over-ambitious scope and timetable and the absence of adequate progress measures.", url: "https://www.nao.org.uk/reports/universal-credit-early-progress/" },
  ],

  internalLinks: [
    { slug: "running-user-acceptance-testing", anchor: "proving it works before this point", context: "Before cutover" },
    { slug: "measuring-whether-it-worked", anchor: "finding out whether it delivered", context: "After go-live" },
    { slug: "stakeholder-management-in-practice", anchor: "the relationships this relies on", context: "Throughout" },
  ],

  relatedGuides: ["running-user-acceptance-testing", "measuring-whether-it-worked", "stakeholder-management-in-practice"],

  conclusion: [
    "Ask each team affected by your next change what they will stop doing once it is live. If nobody can name something, you have found out now rather than in week six that the change is being added to their workload rather than replacing part of it, and that is the single strongest predictor of whether it will stick.",
  ],
};

export default guide;
