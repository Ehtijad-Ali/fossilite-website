import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "prototyping-to-validate-requirements",
  seoTitle: "Show People Something Rough Before You Build Anything",
  metaDescription:
    "People cannot tell you what they need and can tell you instantly what is wrong with something in front of them. How to use that, and avoid the mock-up that becomes the product.",
  title: "Show People Something Rough First",
  keywords: [
    "prototyping requirements",
    "wireframes business analyst",
    "usability testing",
    "validating requirements",
    "low fidelity prototype",
    "proof of concept",
  ],
  category: "ui-ux",
  level: "Intermediate",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "People cannot tell you what they need, and they can tell you immediately what is wrong with something in front of them. That difference is the entire reason for showing people something rough, and it holds no matter how articulate or senior they are. Recognising something is easier than remembering it, and no amount of skilful questioning closes that gap.",
    "Which means the fastest route to a correct requirement is often not another conversation. It is a rough thing on paper, deliberately imperfect, put in front of somebody with a real job to attempt. Ten minutes of that produces corrections an hour of open questions will not.",
    "This guide covers how a Business Analyst uses it. Choosing how finished to make it, running a session that gets you information rather than politeness, what to do when people start treating your mock-up as the design, and when to stop mocking things up and run a small real trial instead.",
  ],

  whyItMatters: [
    "A misunderstanding found in a conversation costs a conversation. The same one found after it is built costs a rebuild, and after go-live it usually costs nothing because it never gets fixed. Showing people something rough moves the discovery to the cheapest possible point.",
    "It also changes how people engage. Somebody who has struggled with a paper version of your process becomes genuinely invested, and they raise things they would never volunteer in a requirements review, because they have just experienced the problem rather than being asked to imagine it.",
    "And it protects you from the most expensive kind of misunderstanding: everybody agreeing to a sentence while picturing different things. A sketch makes the picture explicit, and disagreement about a picture surfaces in seconds.",
  ],

  coreConcepts: [
    {
      term: "Match how finished it is to the question you are asking",
      explain:
        "Paper sketches test whether the steps and the information make sense. Clickable mock-ups test whether people can find their way around and finish a task. Something actually working tests whether it is technically possible. A small real trial tests whether it survives real work.",
      detail:
        "Making it more finished than the question needs is the standard mistake. It costs more, takes longer, and makes people comment on colours and wording instead of on whether the process is right.",
    },
    {
      term: "Rough gets better feedback than polished",
      explain:
        "A hand-drawn sketch invites correction. A finished-looking screen invites approval, because it signals that decisions have been made and disagreeing would be disruptive.",
      detail:
        "This is one of the most reliable effects there is. If you want people to tell you the process is wrong, do not show them something that looks like it has already been signed off.",
    },
    {
      term: "Give people a real job, not a tour",
      explain:
        "Do not walk somebody through it. Give them a specific task to do and watch them attempt it in silence.",
      detail:
        "The task should come from a real case with real awkward details. Here is a customer with two addresses and an unpaid invoice, process their order. Then say nothing at all.",
    },
    {
      term: "Watch what they do, do not ask whether they like it",
      explain:
        "Asking people what they think produces politeness. Watching produces evidence. Where they hesitate, where they read something twice, where they look for something that is not there.",
      detail:
        "The most useful sentence during a session is what are you thinking now, asked when somebody pauses. The least useful is does this look right, which reliably produces yes.",
    },
    {
      term: "A handful of people finds most of the problems",
      explain:
        "The returns drop off very quickly with the number of people you test with, and several small rounds beat one big study.",
      detail:
        "For a BA this is liberating. You do not need a research budget or a formal programme. Five people, an hour each, and a willingness to change something between rounds gets you most of the available value.",
    },
    {
      term: "Test the awkward case, not the demonstration",
      explain:
        "Everybody's mock-up handles the standard case. Give people the awkward task: the record that already exists, the missing document, the amount over the limit.",
      detail:
        "That is where the gaps are, and it is where this earns its cost. Something that only exercises the smooth path confirms what nobody was worried about.",
    },
    {
      term: "You can do this with no software at all",
      explain:
        "Where the change is to a way of working rather than to a system, the mock-up is a walkthrough with paper forms, a role play, or a week of running the new steps by hand.",
      detail:
        "Some of the most valuable work of this kind I have done involved no screens whatsoever: a paper version of a new approval flow, run for three days with real cases, which found two exceptions nobody had mentioned.",
    },
    {
      term: "Say out loud that it will be thrown away",
      explain:
        "Say it at the start of every session and mean it. The moment somebody believes the mock-up is the design, they stop criticising it and start defending their preferences within it.",
      detail:
        "There is a practical version: use obviously provisional visuals. Sketchy lines and placeholder text signal disposability far more effectively than any verbal disclaimer.",
    },
    {
      term: "The mock-up that becomes the product",
      explain:
        "The most common failure. Something built to answer a question works well enough to demonstrate, somebody senior sees it, and the pressure to ship it rather than rebuild it becomes irresistible.",
      detail:
        "Guard against it on purpose: agree in advance what happens to it, keep it visibly rough, and never demonstrate a technical version to somebody who could decide to ship it without first saying clearly what it is not.",
    },
    {
      term: "Write down what changed as a result",
      explain:
        "After each round, note which requirements changed and why. That list is the return on the exercise and it is what justifies doing it again next time.",
      detail:
        "It also protects the practice. A round with nothing recorded looks like a delay to anybody watching the schedule, so make the changes visible.",
    },
    {
      term: "Change something between rounds or do not bother",
      explain:
        "The value comes from finding a problem, changing something, and testing again. One round produces a list of issues that may or may not get acted on.",
      detail:
        "Three short rounds with changes in between beat one long round comprehensively, and they usually take less total time because each round is smaller.",
    },
    {
      term: "A small real trial is the most convincing version",
      explain:
        "One team, one region, or one product, running real work through the new way for a defined period, with an agreed decision at the end.",
      detail:
        "It is the only version that exercises volume, exceptions, holiday cover and everything else people have to do at the same time. Treat it as a test with a question attached, not as an early rollout.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "How many people you actually need.",
      walkthrough:
        "The Nielsen Norman Group's analysis of usability testing sets out how returns drop off with the number of people. Testing with one person reveals roughly 31% of usability problems, and each additional person finds progressively less that is new because their observations overlap with the earlier ones. Five people reach about 85% of problems, and around fifteen approach complete coverage.",
      result:
        "The recommendation is not to run one big study but to spend the same budget on three studies of five people each, changing the design in between. For a BA with no research budget this is liberating: five people and a willingness to change something between rounds captures most of the available value, which puts this within reach of any project.",
      source: {
        label: "Nielsen Norman Group: Why You Only Need to Test with 5 Users",
        url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/",
      },
    },
    {
      kind: "illustration",
      scenario: "The paper version that found two exceptions.",
      walkthrough:
        "The problem: a redesigned approval process was about to be specified in detail. What was happening: before writing anything, the BA printed the proposed steps as paper forms and asked a team to run three days of real cases through them by hand, passing physical paper between desks. On day one, a case turned up where the approver was the same person as the requester. On day two, somebody went on leave and there was no defined cover for one of the roles.",
      result:
        "What changed: the design changed in two significant ways. Neither had come up in any conversation and both would have been discovered after go-live. It involved no software, cost three days of partial attention, and where the change is to a way of working, paper and real cases is a completely legitimate and often better approach.",
    },
    {
      kind: "illustration",
      scenario: "The demonstration that turned into a commitment.",
      walkthrough:
        "The problem: a developer built a rough working version to check whether a connection between two systems was even feasible. It worked. What was happening: it got shown at a steering group as evidence the approach was viable. A director asked why, since it clearly works, it could not simply be finished and deployed next month. The team explained it had no error handling, no permissions and no tests, and the conversation became about how long that would take rather than about whether this was the right design.",
      result:
        "What changed: nothing good. The mock-up had answered its question and then taken on a life of its own. The protection is procedural rather than technical: agree in advance what happens to it, keep it visibly provisional, and when showing anything to somebody with the authority to ship, say plainly and first what it is not.",
    },
  ],

  learningPath: [
    {
      title: "Write the question it has to answer",
      body: "One sentence. Can people finish this task without help? Is this enough information to decide? Is this even possible? The question decides how finished it needs to be.",
      effort: "15 minutes",
      outcome: "Something built for a purpose rather than built to look complete.",
    },
    {
      title: "Build the roughest thing that answers it",
      body: "Paper for process and information questions, clickable for finding-your-way questions, working code only for feasibility. Deliberately provisional in appearance.",
      effort: "2 hours to 2 days depending",
      outcome: "Something that invites correction rather than approval.",
    },
    {
      title: "Write real tasks from real cases",
      body: "Three to five tasks drawn from actual historical cases, including at least two awkward ones. Written as a job to do, not as instructions to follow.",
      effort: "1 hour",
      outcome: "Sessions that test the design rather than somebody's ability to follow directions.",
    },
    {
      title: "Run five sessions and watch in silence",
      body: "One hour each. Give the task, say nothing, note every hesitation and every place they look for something that is not there. Ask what they are thinking when they pause.",
      effort: "1 day",
      outcome: "Most of the findings the whole exercise will produce.",
    },
    {
      title: "Change something and do it again",
      body: "Act on the biggest finding, revise, and run a second round with different people. Three short rounds beat one long one.",
      effort: "2-3 days per extra round",
      outcome: "Confirmation that the fix worked, which one round cannot give you.",
    },
    {
      title: "Write down what changed",
      body: "Which requirements changed, which got added, which got dropped, and why. Send it round so the value of the exercise is visible.",
      effort: "1 hour",
      outcome: "The evidence that gets you permission to do this on the next project.",
    },
    {
      title: "Consider a small real trial for anything process-heavy",
      body: "One team or one product, real work, a defined period, an agreed decision at the end. Treat it as a test with a question rather than as an early rollout.",
      effort: "2-6 weeks",
      outcome: "Confirmation against volume, exceptions and holiday cover, which no mock-up reaches.",
    },
  ],

  exercises: [
    {
      title: "Sketch it and hand it over",
      brief:
        "Take anything you are currently specifying and sketch it on paper in fifteen minutes. Hand it to somebody who does the work, with one real task, and say nothing while they attempt it.",
      success:
        "You collect at least three corrections in ten minutes, and at least one concerns something you were confident about.",
      time: "45 minutes",
    },
    {
      title: "The silent session",
      brief:
        "Run one session where you say nothing after giving the task, except to ask what are you thinking now when the person pauses. Resist every urge to explain or rescue.",
      success:
        "You can list the points where they hesitated, and at least one is somewhere you would never have predicted.",
      time: "1 hour",
    },
    {
      title: "Test the awkward cases only",
      brief:
        "Take a design that has already been reviewed and agreed. Write three tasks based only on awkward historical cases: the duplicate, the missing document, the amount over the limit. Test those.",
      success:
        "You find at least one case the agreed design does not handle, and you can write down the question it raises.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Making it more finished than the question needs",
      why: "It costs more, takes longer, and redirects feedback to colours and wording instead of to whether the process is right.",
      fix: "Write the question first and pick the cheapest form that can answer it. Paper answers more questions than people expect.",
    },
    {
      mistake: "Showing something polished",
      why: "A finished-looking thing signals that decisions have been made, so people approve rather than criticise. You get agreement instead of information.",
      fix: "Keep it visibly provisional. Sketchy visuals and placeholder text do more than any verbal disclaimer.",
    },
    {
      mistake: "Walking people through it",
      why: "A guided tour tests whether your explanation is clear, not whether the design works. The person never has to find anything themselves.",
      fix: "Give a real task and then be quiet. Watching somebody attempt something is the whole method.",
    },
    {
      mistake: "Asking whether people like it",
      why: "Asking for an opinion produces politeness, especially from people who know you built it. The answer is almost always yes and it means nothing.",
      fix: "Watch behaviour. Note hesitation, rereading and looking for things that are not there.",
    },
    {
      mistake: "Only testing the smooth path",
      why: "Everybody's design handles the standard case. The gaps live in the exceptions, which is where this could have earned its cost.",
      fix: "Build at least half your tasks from awkward real cases.",
    },
    {
      mistake: "Running one round and stopping",
      why: "You end up with a list of problems and no evidence that any fix works. The value is in doing it again, not in the watching.",
      fix: "Three short rounds with changes in between, five people each.",
    },
    {
      mistake: "Letting the mock-up become the product",
      why: "Something built to answer a question has no error handling, permissions or tests, and once it has been shown, the pressure to finish it rather than rebuild it is very hard to resist.",
      fix: "Agree in advance what happens to it, keep it rough, and say clearly what it is not before showing it to anybody who could decide to ship it.",
    },
    {
      mistake: "Not recording what changed",
      why: "A round with no visible output looks like a delay, and this gets cut from the next project even though it worked.",
      fix: "Write down which requirements changed and why after every round, and send it round.",
    },
  ],

  bestPractices: [
    "Write the question it has to answer before building anything.",
    "Pick the cheapest form that can answer that question.",
    "Keep it visibly rough so it invites correction.",
    "Give real tasks from real cases rather than a guided tour.",
    "Stay silent and watch behaviour instead of asking for opinions.",
    "Build at least half the tasks from awkward exceptions.",
    "Use around five people per round.",
    "Change something between rounds and go again.",
    "Use paper and real cases where no software is involved.",
    "Say at the start of every session that this gets thrown away.",
    "Agree in advance what happens to anything technical you build.",
    "Record which requirements changed after each round.",
    "Use a small real trial for anything process-heavy.",
  ],

  proTips: [
    "The most valuable moment in any session is when somebody pauses and then does something you did not expect. Do not interrupt and do not correct them. Write down exactly what they did and what they said when you asked what they were thinking. That one observation is usually worth more than the rest of the notes combined.",
    "Test the thing everybody is most confident about. Confidence is where nobody has checked, and the areas under active argument are already getting attention. I have found more problems in the parts of a design nobody thought needed testing than in the contested ones.",
    "Invite the person who will support the thing afterwards, not just the person who will use it. They ask different questions: what happens when this goes wrong, how would I tell what a user did, who do I contact. Those produce requirements that never surface in a user-focused session.",
    "Keep the paper. Photograph every marked-up sketch before it gets tidied into a document. The handwriting, the crossings-out and the arrows drawn over your layout are the actual record of what changed, and months later they settle arguments about what was agreed far better than a neat summary.",
  ],

  businessApplications: [
    "Designing a new system, where the screens and the process are being worked out together.",
    "Process change with no software, where paper walkthroughs with real cases are the right approach.",
    "Choosing a supplier, where running your own cases against their demonstration system is a version of this.",
    "Feasibility questions, where something rough answers a specific worry before anybody commits.",
    "Redesigning a form or a letter, where the cost of testing is trivial and the volume benefit is large.",
    "Small trials, where one team runs real work before a wider decision.",
  ],

  checklist: [
    "The question it has to answer is written down.",
    "How finished it is chosen deliberately to match that question.",
    "It looks provisional rather than finished.",
    "Three to five tasks written from real historical cases.",
    "At least half the tasks are awkward cases.",
    "Around five people scheduled per round.",
    "You have committed to staying silent during the tasks.",
    "Support and downstream people included, not just end users.",
    "Disposability stated at the start of each session.",
    "Changes made between rounds and a second round run.",
    "Requirement changes written down and sent round.",
    "Agreement in place on what happens to anything technical you built.",
  ],

  faqs: [
    {
      q: "How many people do I need?",
      a: "Around five per round, and run several rounds with changes in between. The Nielsen Norman Group's analysis puts five people at roughly 85% of usability problems found, with sharply diminishing returns after that.",
    },
    {
      q: "Do I need design skills?",
      a: "No. Paper sketches work, and frequently work better because they invite correction. Where the visual design genuinely matters, get a designer involved, but do not let the absence of one stop you checking whether the process makes sense.",
    },
    {
      q: "What if people think the mock-up is the finished design?",
      a: "Say what it is not, first and plainly, in every session. Keep it visibly rough. Where somebody with the authority to ship is in the room, state explicitly that there is no error handling, no permissions and no tests, before showing anything.",
    },
    {
      q: "Is a proof of concept the same thing?",
      a: "Related but aimed at a different question. A proof of concept asks whether something is technically possible. This asks whether the design is right for the people who will use it. Both get thrown away, and both get kept when nobody agreed in advance that they would not be.",
    },
    {
      q: "When should I run a small real trial instead?",
      a: "When the questions are about volume, exceptions, holiday cover and how the change interacts with everything else people do. No mock-up reaches those. A trial with real work over a defined period is the only way to answer them.",
    },
    {
      q: "How do I test a process change with no screens?",
      a: "Paper forms and real cases, run for a few days by the people who would do it. It costs almost nothing, it exercises the actual handovers, and it reliably finds exceptions that no conversation surfaced.",
    },
  ],

  tools: [
    { name: "Paper and a pen", what: "The highest return per hour available here. Rough sketches invite correction in a way finished screens do not.", cost: "Free" },
    { name: "A clickable mock-up tool", what: "For finding-your-way and finishing-the-task questions. Keep the styling deliberately provisional.", cost: "Freemium" },
    { name: "Real historical cases", what: "Three to five tasks, at least half of them awkward. The difference between testing a design and demonstrating it.", cost: "Free" },
    { name: "A record of what changed per round", what: "Which requirements changed and why. The evidence that keeps this funded on the next project.", cost: "Free" },
  ],

  resources: [
    { title: "Why You Only Need to Test with 5 Users", kind: "Docs", note: "Nielsen Norman Group. The analysis that puts this within reach of a project with no research budget.", url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/" },
  ],

  internalLinks: [
    { slug: "asking-questions-that-get-answers", anchor: "why recognising beats remembering", context: "Method" },
    { slug: "designing-the-future-state", anchor: "the design this is testing", context: "Upstream" },
    { slug: "running-user-acceptance-testing", anchor: "the later and more formal version", context: "Downstream" },
  ],

  relatedGuides: ["asking-questions-that-get-answers", "designing-the-future-state", "running-user-acceptance-testing"],

  conclusion: [
    "Take whatever you are currently specifying, sketch it on paper in fifteen minutes, and hand it to somebody who does the work with one real task and no explanation. Then say nothing. The corrections you get in the next ten minutes will change your document more than another round of conversations would.",
  ],
};

export default guide;
