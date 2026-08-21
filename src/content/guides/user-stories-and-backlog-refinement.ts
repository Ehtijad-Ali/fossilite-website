import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "user-stories-and-backlog-refinement",
  seoTitle: "Breaking Work Into Pieces People Can Actually Judge",
  metaDescription:
    "Seven ways to split work that is too big, what ready really means, how to run the session before a build so it finds gaps, and how to stop a backlog becoming a graveyard.",
  title: "Breaking Work Into Pieces People Can Judge",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "The user story format has been misunderstood into uselessness in a lot of places. Teams write as a user I want a button so that I can press the button, tick the box, and move on. The words are correct and the thing is worthless, because the format was never the point.",
    "A story is a reminder to have a conversation. Its value is in three things: it says who benefits, it says what they are actually trying to get done, and it is small enough to build and show somebody within days rather than months. Everything else in this area is an attempt to protect those three things when the pressure is on.",
    "This guide is the practical craft. How to write one that helps rather than one that fills a template, seven ways to split work that is too big without destroying its value, what ready actually means, how to run the session before a build so it finds gaps instead of confirming them, and how to stop a backlog quietly becoming a list of things nobody will ever do.",
  ],

  whyItMatters: [
    "How big the pieces are decides how fast you find out you were wrong. A team delivering something you can look at every few days finds out it misunderstood in week one. A team delivering something you can look at every three months finds out in month three, by which time everything else has been built on top of the misunderstanding.",
    "Badly split work also destroys any ability to prioritise. When everything is big and vaguely described, nothing can be compared with anything else, so priority ends up going to whoever asked most recently. That is how a backlog becomes political rather than useful.",
    "And the session before the build is where the quality of your writing gets tested. A team that finds three gaps has saved you three interruptions and possibly a rebuild. A session where nobody finds anything usually means nobody read anything.",
  ],

  coreConcepts: [
    {
      term: "The so-that part is the bit that matters",
      explain:
        "Who it is for and what they want are easy to write and easy to fake. The reason is what lets a developer make a sensible call on something nobody anticipated, and there will be several of those in any build.",
      detail:
        "Test it by deleting the middle: as a credit controller, so that I can chase the invoices most likely to go unpaid. If that still tells you the goal, the story is doing its job. If the sentence falls apart, the reason was decoration.",
    },
    {
      term: "A story is a handle, not the whole specification",
      explain:
        "The card carries the intent. What counts as done, the rules, the field definitions and the practical constraints all attach to it. Expecting one sentence to specify anything is why people conclude stories do not work.",
      detail:
        "The useful unit in practice is a story plus what counts as done plus links to the rules it depends on. The card is what you pick it up by, not what is inside it.",
    },
    {
      term: "Two things matter more than the rest",
      explain:
        "It has to be worth something to somebody, and you have to be able to check whether it is finished. Everything else about how a story is written is useful and secondary.",
      detail:
        "A story that is not worth anything to anybody is a technical task in disguise, which breaks prioritising. A story you cannot check cannot be finished, only abandoned, and that is how things sit at nearly done for three sprints in a row.",
    },
    {
      term: "Split by what somebody can look at, never by technical layer",
      explain:
        "Database work, then the middle bit, then the screens is a way of dividing up labour. Two of those three cannot be shown to anybody, so all the feedback arrives at the end.",
      detail:
        "The test for any split: could a stakeholder look at the result and tell you whether it is right? If not, you have divided the work rather than sliced it, and you have given away the main advantage of working in small pieces.",
    },
    {
      term: "Seven ways to split something that is too big",
      explain:
        "By step in the process. By variation in the rules. By type of data. By who is using it. By channel. By normal case first and odd cases later. And by doing it by hand first, automating it second.",
      detail:
        "That last one is badly underrated. Ship the version where a person does the awkward bit manually, watch what they actually do, then automate once you know. It delivers something early and buys you evidence for the automation.",
    },
    {
      term: "The best first piece is one complete journey for one narrow case",
      explain:
        "One customer type, one product, one region, one channel, all the way from start to finish.",
      detail:
        "It touches every part of the thing, a stakeholder can judge it, and it surfaces the awkward connection problems early. Those are the ones that hurt most when they turn up late.",
    },
    {
      term: "Ready means the team could start without you in the room",
      explain:
        "The goal is clear, you can say what counts as done, the rules it depends on are written down, somebody has checked the data exists, you know what it depends on, and it is small enough to finish in one go.",
      detail:
        "Keep it to about six lines and do not police it too hard. A heavy version recreates the sign-off gates it was meant to replace, and teams start gaming it rather than using it.",
    },
    {
      term: "The session before the build is a hunt for gaps",
      explain:
        "Walk through the work, ask the team what is missing, and write down every question without defending your document.",
      detail:
        "Go in expecting to be wrong about something. A session that produces no questions is a warning sign rather than a success, and it usually means the material was skimmed.",
    },
    {
      term: "Work about two rounds ahead, no further",
      explain:
        "Getting detail ready further out means writing down things that will change before anybody builds them, which is work done twice.",
      detail:
        "The exception is anything with a long wait attached: getting access to data, an outside company, a procurement decision. Those need spotting early even though the detail can wait.",
    },
    {
      term: "Technical work needs a reason in business terms",
      explain:
        "Upgrading something or paying down old shortcuts is legitimate work. Written as a bare technical task it loses to features every time and gets pushed back until it becomes an incident.",
      detail:
        "Write what it makes possible or what risk it removes, in words the business uses. This is a genuinely useful thing a BA can do for a development team and it is rarely offered.",
    },
    {
      term: "A backlog is a record of decisions, not a wish list",
      explain:
        "Things that will never be built should be closed with a reason, not left sitting there creating the impression of a promise.",
      detail:
        "My rule is that anything untouched for six months gets closed with a note. It can always be reopened. What it cannot do is sit there quietly telling a stakeholder that their request is still coming.",
    },
    {
      term: "Estimating is a conversation, not a measurement",
      explain:
        "The value of estimating is the disagreement it surfaces. When two people give wildly different answers, they are almost always picturing different work.",
      detail:
        "Chase the disagreement rather than averaging it out. Sorting out what each of them was imagining is where the missing requirement usually turns up.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Three pieces of work and nothing anyone could look at.",
      walkthrough:
        "The problem: a team split a piece of work into database changes, then the middle layer, then the screens. Each one was delivered on time and met what was asked. What was happening: two of the three could not be demonstrated to the business at all, so no feedback arrived until after the third was finished. At that point it emerged that the process assumed one approver, and some regions have two.",
      result:
        "What changed: nothing could, by then. Had it been split as the complete journey for one region, the two-approver case would have turned up in week one instead of week seven. Splitting by technical layer feels tidy to a team and pushes all business feedback to the end, which removes the only reason for working this way.",
    },
    {
      kind: "illustration",
      scenario: "Do it by hand first, automate it second.",
      walkthrough:
        "The problem: a requirement asked for incoming payments to be matched to invoices automatically. It was complicated, because of part payments, reference numbers typed in wrong, and single payments covering several invoices. The team was about to spend a quarter on the matching logic. What was happening: the BA proposed shipping everything around it first, with a screen where a person does the matching, and quietly recording what they actually did.",
      result:
        "What changed: six weeks of real use showed that most manual matches followed two simple patterns, and that a category everybody assumed was common was actually rare. The automation that followed was smaller than the original design and much better aimed. Shipping the manual version first is a way of splitting work and a way of doing research at the same time.",
    },
    {
      kind: "illustration",
      scenario: "The backlog that was a graveyard.",
      walkthrough:
        "The problem: a team's backlog held several hundred items, many over a year old, and every session was spent re-explaining and re-estimating things that never got picked. What was happening: the BA went through it. Items untouched for six months. Items whose requester had left the company. Items describing systems that had since been replaced.",
      result:
        "What changed: closing them with a short reason took an afternoon and removed most of the list. Nothing of value was lost and the sessions immediately got faster. The bigger effect was on stakeholders, several of whom had believed for a year that their request was still on its way, because nothing had ever told them otherwise.",
    },
  ],

  learningPath: [
    {
      title: "Check your stories for the reason",
      body: "Take twenty items from your backlog. Delete the middle clause from each and see whether the goal still comes through. Rewrite the ones that fall apart.",
      effort: "1 hour",
      outcome: "Stories that help somebody decide, rather than stories that fill a template.",
    },
    {
      title: "Practise the seven ways of splitting",
      body: "Take one item everybody agrees is too big and split it seven different ways, one per approach, even where an approach fits badly. Then pick the one that delivers something judgeable first.",
      effort: "2 hours",
      outcome: "An instinct for splitting, which is the most valuable skill in this area.",
    },
    {
      title: "Agree what ready means, with the team",
      body: "Six lines at most, agreed by the people who will use it. Goal clear, done is defined, rules written, data checked, dependencies known, small enough to finish.",
      effort: "1 hour",
      outcome: "A shared standard that prevents the most common cause of work stalling halfway through.",
    },
    {
      title: "Prepare the session as a gap hunt",
      body: "Bring the material, the questions you already know are open, and one real case per item. Ask what is missing rather than presenting what is there.",
      effort: "2 hours preparation per session",
      outcome: "Sessions that find problems while they are still free to fix.",
    },
    {
      title: "Attach the rules and data to the stories",
      body: "Link each one to the rules, field definitions and constraints it depends on, rather than repeating them on the card.",
      effort: "Ongoing",
      outcome: "A story that is a handle on a real specification rather than a sentence pretending to be one.",
    },
    {
      title: "Go through the backlog and close things",
      body: "Close anything untouched for six months with a one-line reason. Tell the person who asked for it. Keep only what somebody would plausibly build.",
      effort: "Half a day",
      outcome: "Faster sessions and honest expectations with stakeholders.",
    },
  ],

  exercises: [
    {
      title: "Split one thing seven ways",
      brief:
        "Take one big item from your backlog and split it using each approach in turn: process step, rule variation, data type, who is using it, channel, normal case then odd cases, by hand then automated. Note which ones produce something a stakeholder could judge.",
      success:
        "At least three of the seven give you a workable first piece, and you can say which you would pick and why.",
      time: "2 hours",
    },
    {
      title: "Delete the middle clause",
      brief:
        "Take twenty stories from any backlog. Remove the I want part from each, leaving only who it is for and the reason. Mark which ones still tell you the goal.",
      success:
        "You can identify the stories whose reason is decoration, and you have rewritten at least three of them.",
      time: "45 minutes",
    },
    {
      title: "Check how old the backlog is",
      brief:
        "Sort your backlog by when each item was last discussed. Count how many have not been touched in six months, and work out how many of those people still believe are coming.",
      success:
        "You have a percentage, a list to close, and at least one conversation that needed having.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Treating the template as the requirement",
      why: "A correctly formatted sentence with no real goal in it passes every review and helps nobody. The format was only ever a prompt to record who benefits and why.",
      fix: "Test every story by deleting the middle clause. If the goal disappears, the reason needs rewriting.",
    },
    {
      mistake: "Splitting by technical layer",
      why: "Most of the pieces cannot be shown to the business, so feedback only arrives at the end, which removes the reason for working in small pieces at all.",
      fix: "Split so each piece can be judged by a stakeholder. One complete journey for one narrow case is the most reliable first piece.",
    },
    {
      mistake: "Stories you cannot check",
      why: "They cannot be finished, only abandoned. They sit at nearly done for several rounds and make every measure of progress meaningless.",
      fix: "Require at least one thing you could observe before an item can be picked up.",
    },
    {
      mistake: "Getting detail ready too far ahead",
      why: "Anything written for work starting in four months gets rewritten before it is built, so the effort goes in twice and only the second version counts.",
      fix: "Work about two rounds ahead, and spot only the long-lead dependencies further out.",
    },
    {
      mistake: "Expecting the story to hold everything",
      why: "Rules, field definitions and practical constraints do not fit on a card, so either they get left out or the card becomes an unreadable document.",
      fix: "Link the story to the rules and definitions it depends on. The card is the handle, not the contents.",
    },
    {
      mistake: "Writing technical work with no business reason",
      why: "Bare technical tasks lose to features in every prioritisation, so they get pushed back until the pushing back becomes an incident.",
      fix: "Say what the work makes possible or what risk it removes, in words the business uses.",
    },
    {
      mistake: "Never closing anything",
      why: "The backlog becomes a graveyard that slows every session and quietly implies to stakeholders that their request is still coming.",
      fix: "Close anything untouched for six months with a reason, and tell the person who asked. It can always be reopened.",
    },
    {
      mistake: "Averaging out estimate disagreements",
      why: "A big spread means two people are picturing different work, and averaging hides the misunderstanding that caused it, which then surfaces mid-build.",
      fix: "Chase the disagreement. Ask each person what they are imagining. The missing requirement is usually in the difference.",
    },
  ],

  bestPractices: [
    "Make the reason clause carry real information.",
    "Treat the story as a handle on a specification, not the specification.",
    "Insist that it is worth something and that you can check it.",
    "Split so every piece can be judged by a stakeholder.",
    "Use the seven approaches deliberately rather than improvising.",
    "Prefer one complete journey through a narrow case as the first piece.",
    "Consider shipping the manual version first where the logic is complicated.",
    "Keep what ready means to about six lines.",
    "Run the pre-build session as a gap hunt and write down every question.",
    "Work about two rounds ahead, no further.",
    "Give technical work a reason in business terms.",
    "Close stale items with a reason and tell the requester.",
    "Chase estimate disagreements rather than averaging them.",
  ],

  proTips: [
    "When something is too big and will not split, the reason is usually that nobody has decided something. A rule that has not been agreed, a case nobody wants to own, a connection whose owner has not replied. Look for the undecided thing rather than trying harder to cut the work, because the size is a symptom of the indecision.",
    "Bring one real case per item to the pre-build session, with a reference number and its awkward details. Talking in the abstract lets everybody agree while meaning different things. A specific case forces the vagueness out in about ninety seconds, and those ninety seconds get repaid many times over.",
    "Keep a note of which items generated the most questions during the build and look at them together at the end of a project. They will have something in common, and that is your personal weak spot as a writer. Mine was permissions for a long time, and I only spotted it by looking at the pattern rather than the individual gaps.",
    "Write down what counts as done before the estimate, not after. Teams estimate what they picture, and what they picture is the normal case. The detail is what tells them about the four variations, and the difference between an estimate given before and after seeing that is often substantial.",
  ],

  businessApplications: [
    "Any team working in short cycles, where the BA role is mostly preparation, availability and acceptance rather than a document handover.",
    "Product work, where how you split things decides how quickly customer feedback reaches the team.",
    "Work billed by the day by an outside company, where small clear items are your main protection against drift.",
    "Long modernisation programmes, where splitting by case type keeps a multi-year effort deliverable.",
    "Work with a fixed legal deadline, where splitting by rule variation keeps it achievable in stages.",
    "Support and maintenance lists, where going through and closing things is the highest-value hour available.",
  ],

  checklist: [
    "Every story names who it is for, what they want and a genuine reason.",
    "Rules, definitions and constraints linked rather than repeated.",
    "Every story has at least one thing you could actually check.",
    "Each piece can be judged by a stakeholder.",
    "Splitting approaches used deliberately when something is too big.",
    "What ready means agreed with the team and kept short.",
    "About two rounds of work prepared ahead.",
    "Long-lead dependencies spotted well before the detail is needed.",
    "Technical work carries a business reason.",
    "Pre-build session run as a gap hunt with questions written down.",
    "One real case brought per item.",
    "Backlog reviewed and stale items closed with reasons.",
    "Estimate disagreements chased rather than averaged.",
  ],

  faqs: [
    {
      q: "How small should a piece of work be?",
      a: "Small enough to finish comfortably in one cycle, and ideally within a few days. If a team keeps carrying things over, the problem is nearly always size rather than capacity or discipline.",
    },
    {
      q: "Do we need the as a, I want, so that format?",
      a: "No, but you need what it prompts: who benefits, what they are trying to do, and why. Teams that drop the format usually keep the goal, and teams that keep the format sometimes lose it.",
    },
    {
      q: "Who writes these, the BA or the product owner?",
      a: "It varies, and what matters is that one person owns priority and somebody owns understanding. Where both roles exist, the useful split is that the product owner decides what matters and the BA works out what it actually requires.",
    },
    {
      q: "How much should be ready before a cycle starts?",
      a: "Enough that the team could start each item without you in the room. That is a more useful test than any percentage, and it is what a definition of ready is trying to capture.",
    },
    {
      q: "What do I do with an item that keeps coming back?",
      a: "Stop preparing it and find the undecided thing behind it. Something discussed three times without being picked is almost always waiting on a decision nobody has named, rather than on more detail.",
    },
    {
      q: "Are story points worth using?",
      a: "The number matters less than the conversation. Their real value is that a wide spread reveals people are picturing different work. If your team gets that from discussion alone, the points are optional.",
    },
  ],

  tools: [
    { name: "A card with the seven splitting approaches", what: "Process step, rule variation, data type, who is using it, channel, normal then odd cases, manual then automated.", cost: "Free" },
    { name: "A short definition of ready", what: "Six lines, agreed with the team. Long ones recreate the sign-off gates they replaced.", cost: "Free" },
    { name: "One real case per item", what: "Reference number and awkward details. Removes abstraction from a session in about ninety seconds.", cost: "Free" },
    { name: "A backlog age report", what: "When each item was last discussed. The basis of the clear-out that makes sessions fast again.", cost: "Varies" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "the detail that attaches to each story", context: "Specification" },
    { slug: "working-with-developers", anchor: "the working relationship this depends on", context: "Delivery" },
    { slug: "turning-business-needs-into-requirements", anchor: "where the value in a story comes from", context: "Upstream" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "working-with-developers", "turning-business-needs-into-requirements"],

  conclusion: [
    "Take the biggest item in your backlog and split it seven ways using each approach in turn, then pick the one that produces something a stakeholder could look at and judge within a week. Two hours of that builds the instinct this whole way of working depends on.",
  ],
};

export default guide;
