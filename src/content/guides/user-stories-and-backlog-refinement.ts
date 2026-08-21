import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "user-stories-and-backlog-refinement",
  seoTitle: "User Stories and Backlog Refinement That Work",
  metaDescription:
    "Story splitting patterns that preserve value, what makes a story ready, how to run refinement so it finds gaps, and how to keep a backlog from becoming a graveyard.",
  title: "User Stories and Backlog Refinement",
  keywords: [
    "user stories",
    "story splitting",
    "backlog refinement",
    "definition of ready",
    "agile business analyst",
    "invest criteria",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "The user story format has been misunderstood into uselessness in a lot of organisations. Teams write as a user I want a button so that I can press the button, tick the template, and move on. The words are correct and the artefact is worthless, because the format was never the point.",
    "A story is a placeholder for a conversation, and its value is in three things: it names who benefits, it names what they are trying to achieve, and it is small enough to be built and judged in days rather than months. Everything else in agile requirements practice is an attempt to preserve those three properties under pressure.",
    "This guide is the practical craft: how to write a story that helps rather than one that fills a template, the splitting patterns that keep value intact when work is too large, what ready actually means, how to run refinement so it finds gaps instead of confirming them, and how to keep a backlog from silently becoming a list of things nobody will ever do.",
  ],

  whyItMatters: [
    "Story size determines feedback speed, and feedback speed determines how expensive mistakes are. A team delivering something judgeable every few days finds out it misunderstood in week one. A team delivering something judgeable every three months finds out in month three, when the misunderstanding has been built on.",
    "Badly split work also destroys the ability to prioritise. When every item is large and vaguely defined, nothing can be compared with anything else, so priority defaults to whoever asked most recently, which is how backlogs become political rather than analytical.",
    "And refinement is where specification quality is tested. A team that finds three gaps in refinement has saved three build-time interruptions and possibly a rebuild. A refinement session where nobody finds anything usually means nobody read anything.",
  ],

  coreConcepts: [
    {
      term: "The so-that clause carries the weight",
      explain:
        "The role and the want are easy to write and easy to fake. The so-that clause is what lets a developer make a sensible decision about a case nobody anticipated, and there will be several of those in any build.",
      detail:
        "Test it by deleting the middle: as a credit controller, so that I can chase the invoices most at risk of non-payment. If that still communicates the goal, the story is doing its job. If the sentence collapses, the so-that was decorative.",
    },
    {
      term: "A story is not a specification, it is a pointer to one",
      explain:
        "The card carries the intent. The acceptance criteria, business rules, data definitions and non-functional constraints attach to it. Expecting one sentence to specify anything is what makes people conclude stories do not work.",
      detail:
        "In practice the useful unit is a story plus its criteria plus links to the rule tables it depends on. The card is the handle you pick it up by, not the contents.",
    },
    {
      term: "The INVEST properties, and which two actually matter",
      explain:
        "Independent, negotiable, valuable, estimable, small, testable. All six are useful; valuable and testable are the ones whose absence causes real damage.",
      detail:
        "A story that is not valuable is a technical task pretending to be a story, which breaks prioritisation. A story that is not testable cannot be finished, only abandoned, which is how things sit at ninety per cent done for three sprints.",
    },
    {
      term: "Split by value, never by technical layer",
      explain:
        "Database work, then service work, then interface work is a division of labour, not a slice of value. Two of the three cannot be shown to anybody, so all feedback arrives at the end.",
      detail:
        "The test for any slice: could a stakeholder look at the result and tell you whether it is right? If not, you have divided the work rather than sliced it, and you have given up the main advantage of working incrementally.",
    },
    {
      term: "Seven splitting patterns that preserve value",
      explain:
        "By workflow step, by business rule variation, by data type or parameter, by user role, by channel, by happy path versus exceptions, and by manual first then automated.",
      detail:
        "The last one is underrated. Ship the path where a person does the awkward step manually, learn from real usage, then automate it once you know what actually happens. It delivers value early and buys evidence for the automation design.",
    },
    {
      term: "Vertical slices for one case type, end to end",
      explain:
        "The most reliable first slice is the complete journey for one narrow, real case: one customer type, one product, one region, one channel, all the way through.",
      detail:
        "It exercises every layer, it can be judged by the business, and it surfaces the integration problems early, which are the ones that hurt most when they arrive late.",
    },
    {
      term: "Ready means the team could start without you in the room",
      explain:
        "A definition of ready that works: the goal is clear, acceptance criteria exist, the rules it depends on are written, the data is confirmed to exist, dependencies are known, and it is small enough to finish inside one iteration.",
      detail:
        "Keep it short and enforce it lightly. A heavy definition of ready recreates the stage gates it was meant to replace, and teams start gaming it rather than using it.",
    },
    {
      term: "Refinement is a search for gaps, not a presentation",
      explain:
        "Walk through the work, ask the team what is missing, and write down every question without defending the document.",
      detail:
        "Go in expecting to be wrong about something. If a session produces no questions, that is a warning sign rather than a success, and it usually means the material was skimmed.",
    },
    {
      term: "Keep about two iterations of refined work, no more",
      explain:
        "Refining further ahead means specifying work that will change before it is built, which is effort spent twice.",
      detail:
        "The exception is anything with a long lead time: data access, an external party, a procurement decision. Those need to be identified far ahead even though the detail can wait.",
    },
    {
      term: "Technical work needs a value statement too",
      explain:
        "Upgrading a library or paying down technical debt is legitimate work. Written as a bare technical task it competes badly against features and gets deferred until it becomes an incident.",
      detail:
        "Write what it enables or what risk it removes, in business terms. This is a genuinely useful thing a BA can do for a development team and it is rarely offered.",
    },
    {
      term: "A backlog is a decision record, not a wish list",
      explain:
        "Items that will never be built should be closed with a reason, not left in the list indefinitely, where they create the illusion of a commitment.",
      detail:
        "My rule is that anything untouched for two quarters gets closed with a note. It can always be reopened. What it cannot do is sit there implying to a stakeholder that their request is still coming.",
    },
    {
      term: "Estimation is a conversation tool, not a measurement",
      explain:
        "The value of estimating is the disagreement it surfaces. When two people give wildly different numbers, they are almost always imagining different work.",
      detail:
        "Chase the disagreement rather than averaging it. The reconciliation is where the missing requirement usually turns up, and it is why estimation sessions are worth attending even when the number is not used for much.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The slice that could not be shown to anybody.",
      walkthrough:
        "A team splits a piece of work into three: the data model changes, then the service layer, then the interface. Each is delivered on schedule and each meets its criteria. Two of the three cannot be demonstrated to the business at all, so feedback arrives only after the third, at which point it emerges that the process assumed one approver where certain regions have two.",
      result:
        "Had the work been sliced as the complete path for one region, the two-approver case would have surfaced in week one rather than week seven. Slicing by technical layer is comfortable for a team and postpones all business feedback to the end, which removes the one thing incremental delivery was for.",
    },
    {
      kind: "illustration",
      scenario: "Manual first, automated second.",
      walkthrough:
        "A requirement calls for automatic matching of incoming payments to invoices, which is complex because of partial payments, references entered incorrectly and consolidated remittances. The team is about to spend a quarter on the matching logic. Instead the BA proposes shipping the surrounding workflow first, with a screen where a person matches manually, and instrumenting what they actually do.",
      result:
        "Six weeks of real usage showed that a large share of the manual matches followed two simple patterns, and that a category everyone had assumed was common was rare. The automation that followed was smaller than the original design and better targeted. Shipping the manual version first is a splitting pattern and it is also a research method.",
    },
    {
      kind: "illustration",
      scenario: "The backlog that was a graveyard.",
      walkthrough:
        "A team's backlog contains several hundred items, many more than a year old. In refinement, time is spent repeatedly re-explaining and re-estimating things that are never selected. A BA audits it: items untouched for two quarters, items whose requester has left, items describing systems that have since been replaced.",
      result:
        "Closing them with a short reason took an afternoon and removed most of the list. Nothing of value was lost and refinement immediately became faster. The more important effect was on stakeholders, several of whom had believed for a year that their request was still coming, because nothing had ever told them otherwise.",
    },
  ],

  learningPath: [
    {
      title: "Audit your stories for the so-that clause",
      body: "Take twenty items from your backlog. Delete the middle clause from each and check whether the goal still communicates. Rewrite the ones that collapse.",
      effort: "1 hour",
      outcome: "Stories that help a developer decide, rather than stories that fill a template.",
    },
    {
      title: "Practise the seven splitting patterns",
      body: "Take one item everybody agrees is too large and split it seven different ways, one per pattern, even where a pattern fits badly. Then choose the split that delivers something judgeable first.",
      effort: "2 hours",
      outcome: "A working instinct for splitting, which is the highest-value skill in this area.",
    },
    {
      title: "Write a short definition of ready with the team",
      body: "Six lines at most, agreed by the people who will use it. Goal clear, criteria exist, rules written, data confirmed, dependencies known, small enough to finish.",
      effort: "1 hour",
      outcome: "A shared standard that prevents the most common cause of mid-sprint stalls.",
    },
    {
      title: "Prepare refinement as a gap hunt",
      body: "Bring the material, the open questions you already know about, and one real case per story. Ask the team what is missing rather than presenting what is there.",
      effort: "2 hours preparation per session",
      outcome: "Sessions that find defects while they are still free to fix.",
    },
    {
      title: "Attach rules, data and non-functionals to the stories",
      body: "Link each story to the decision tables, field definitions and constraints it depends on, rather than restating them on the card.",
      effort: "Ongoing",
      outcome: "A story that is a handle on a real specification instead of a sentence pretending to be one.",
    },
    {
      title: "Audit and close the backlog",
      body: "Close anything untouched for two quarters with a one-line reason. Tell the requester. Keep only what somebody would plausibly build.",
      effort: "Half a day",
      outcome: "Faster refinement and honest expectations with stakeholders.",
    },
  ],

  exercises: [
    {
      title: "The seven-way split",
      brief:
        "Take one large item from your backlog and split it using each of the seven patterns in turn: workflow step, rule variation, data type, user role, channel, happy path versus exceptions, manual then automated. Note which produce something a stakeholder could judge.",
      success:
        "At least three of the seven produce a viable first slice, and you can say which one you would pick and why.",
      time: "2 hours",
    },
    {
      title: "Delete the middle clause",
      brief:
        "Take twenty stories from any backlog. Remove the I want clause from each, leaving only the role and the so-that. Mark which ones still communicate a goal.",
      success:
        "You can identify the stories whose so-that clause is decorative, and you have rewritten at least three of them.",
      time: "45 minutes",
    },
    {
      title: "The backlog age audit",
      brief:
        "Sort your backlog by the date each item was last discussed. Count how many have not been touched in two quarters, and identify how many requesters believe their item is still active.",
      success:
        "You have a percentage, a list to close, and at least one stakeholder conversation that needed to happen.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Treating the template as the requirement",
      why: "A correctly formatted sentence with no real goal in it passes every review and helps nobody. The format was only ever a prompt to record who benefits and why.",
      fix: "Test every story by deleting the middle clause. If the goal disappears, the so-that was decorative and needs rewriting.",
    },
    {
      mistake: "Splitting by technical layer",
      why: "Most slices cannot be shown to the business, so feedback arrives only at the end, which removes the reason for working incrementally at all.",
      fix: "Split so each increment can be judged by a stakeholder. One case type, end to end, is the most reliable first slice.",
    },
    {
      mistake: "Stories that are not testable",
      why: "They cannot be finished, only abandoned. They sit at nearly done for several iterations and distort every measure of progress.",
      fix: "Require at least one acceptance criterion with an observable result before an item can be selected.",
    },
    {
      mistake: "Refining too far ahead",
      why: "Detail written for work starting in four months gets rewritten before it is built, so the effort is spent twice and the second version is the one that counts.",
      fix: "Keep about two iterations of refined work, and identify only the long-lead dependencies further out.",
    },
    {
      mistake: "Expecting the story to contain the whole specification",
      why: "Rules, data definitions and non-functional constraints do not fit on a card, so either they are omitted or the card becomes an unreadable document.",
      fix: "Link the story to the rule tables and field definitions it depends on. The card is a handle, not the contents.",
    },
    {
      mistake: "Writing technical work without a value statement",
      why: "Bare technical tasks compete badly against features in any prioritisation, so they are deferred until the deferral becomes an incident.",
      fix: "State what the work enables or what risk it removes, in business terms. This is a service a BA can offer a team and rarely does.",
    },
    {
      mistake: "Never closing anything",
      why: "The backlog becomes a graveyard that slows refinement and quietly implies to stakeholders that their request is still coming.",
      fix: "Close anything untouched for two quarters with a reason, and tell the requester. It can always be reopened.",
    },
    {
      mistake: "Averaging estimate disagreements",
      why: "A wide spread means two people are imagining different work, and averaging hides the misunderstanding that caused it, which then surfaces mid-build.",
      fix: "Chase the disagreement. Ask each person what they are picturing. The missing requirement is usually in the difference.",
    },
  ],

  bestPractices: [
    "Make the so-that clause carry real information.",
    "Treat the story as a handle on a specification, not the specification.",
    "Insist on valuable and testable above the other INVEST properties.",
    "Split by value so every increment can be judged by a stakeholder.",
    "Use the seven splitting patterns deliberately rather than improvising.",
    "Prefer a vertical slice through one narrow case as the first increment.",
    "Consider shipping the manual version first where the logic is complex.",
    "Keep the definition of ready to about six lines.",
    "Run refinement as a gap hunt and record every question.",
    "Refine about two iterations ahead, no further.",
    "Give technical work a value statement in business terms.",
    "Close stale items with a reason and tell the requester.",
    "Chase estimate disagreements rather than averaging them.",
  ],

  proTips: [
    "When a story is too large and will not split, the reason is usually that nobody has decided something. A rule that has not been agreed, a case nobody wants to own, an integration whose owner has not responded. Look for the undecided thing rather than trying harder to cut the work, because the size is a symptom of the indecision.",
    "Bring one real case per story to refinement, with a reference number and its awkward details. Discussion in the abstract lets everybody agree while meaning different things. A specific case forces the ambiguity out in about ninety seconds, and the ninety seconds is repaid many times over.",
    "Keep a note of which stories generated the most questions during build and look at them together at the end of a project. They will have something in common, and that commonality is your personal weak spot as a writer. Mine was permissions for a long time, and I only found that by looking at the pattern rather than at the individual gaps.",
    "Write the acceptance criteria before the estimate, not after. Teams estimate what they imagine, and what they imagine is the main path. The criteria are what tell them about the four variations, and the difference between an estimate given before and after seeing those is often substantial.",
  ],

  businessApplications: [
    "Agile delivery of any kind, where the BA role is largely refinement, availability and acceptance rather than a document handover.",
    "Product development, where slicing determines how quickly market feedback reaches the team.",
    "Vendor delivery under a time and materials arrangement, where clear small items are the main protection against drift.",
    "Migration and modernisation work, where slicing by case type keeps a multi-year programme deliverable.",
    "Regulatory delivery, where splitting by rule variation keeps a fixed deadline achievable in stages.",
    "Support and maintenance backlogs, where the age audit is the highest-value hour available.",
  ],

  checklist: [
    "Every story names a role, a goal and a genuine so-that.",
    "Rules, data definitions and constraints linked rather than restated.",
    "Every story has at least one testable acceptance criterion.",
    "Each increment can be judged by a stakeholder.",
    "Splitting patterns applied deliberately when work is too large.",
    "Definition of ready agreed with the team and kept short.",
    "About two iterations of refined work maintained.",
    "Long-lead dependencies identified well ahead of the detail.",
    "Technical work carries a business value statement.",
    "Refinement run as a gap hunt with questions recorded.",
    "One real case brought per story.",
    "Backlog audited and stale items closed with reasons.",
    "Estimate disagreements investigated rather than averaged.",
  ],

  faqs: [
    {
      q: "How small should a user story be?",
      a: "Small enough to finish comfortably within one iteration, and ideally within a few days. If a team is regularly carrying items across iterations, the problem is nearly always size rather than capacity or discipline.",
    },
    {
      q: "Do we need the as a, I want, so that format?",
      a: "No, but you need what it prompts: who benefits, what they are trying to achieve, and why. Teams that abandon the format usually keep the goal statement, and teams that keep the format sometimes lose it.",
    },
    {
      q: "Who writes the stories, the BA or the product owner?",
      a: "It varies by organisation, and what matters is that one person owns priority and somebody owns understanding. Where a BA and a product owner both exist, the useful split is that the product owner decides what matters and the BA establishes what it actually requires.",
    },
    {
      q: "How much should be refined before a sprint starts?",
      a: "Enough that the team could start each selected item without you present. That is a more useful test than any percentage, and it is what a definition of ready is trying to capture.",
    },
    {
      q: "What do I do with a story that keeps coming back?",
      a: "Stop refining it and find the undecided thing behind it. An item that has been discussed three times without being selected is almost always blocked on a decision nobody has named rather than on a lack of detail.",
    },
    {
      q: "Are story points worth using?",
      a: "The number matters less than the conversation. Their real value is that a wide spread of estimates reveals that people are imagining different work. If your team gets that value from discussion alone, the points are optional.",
    },
  ],

  tools: [
    { name: "A seven-pattern splitting card", what: "Workflow step, rule variation, data type, role, channel, happy path versus exceptions, manual then automated. Used deliberately when work is too large.", cost: "Free" },
    { name: "A short definition of ready", what: "Six lines, agreed with the team. Long ones recreate the stage gates they were meant to replace.", cost: "Free" },
    { name: "One real case per story", what: "Reference number and awkward details. Removes abstraction from refinement in about ninety seconds.", cost: "Free" },
    { name: "A backlog age report", what: "Last-discussed date per item. The basis of the audit that makes refinement fast again.", cost: "Varies" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "the criteria that attach to each story", context: "Specification" },
    { slug: "working-with-developers", anchor: "the working relationship refinement depends on", context: "Delivery" },
    { slug: "turning-business-needs-into-requirements", anchor: "where the value in a story comes from", context: "Upstream" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "working-with-developers", "turning-business-needs-into-requirements"],

  conclusion: [
    "Take the largest item in your backlog and split it seven ways using each pattern in turn, then pick the split that produces something a stakeholder could look at and judge within a week. That exercise takes two hours and it is the fastest way to build the instinct this whole practice depends on.",
  ],
};

export default guide;
