import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "prototyping-to-validate-requirements",
  seoTitle: "Prototyping to Validate Requirements Before You Build",
  metaDescription:
    "Paper sketches, clickable mockups and pilot runs: choosing fidelity deliberately, testing with real tasks, and avoiding the prototype that becomes the product.",
  title: "Prototyping to Validate Requirements",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "People cannot tell you what they need, and they can tell you immediately what is wrong with something in front of them. That asymmetry is the entire justification for prototyping, and it holds regardless of how articulate or senior the person is. Recognition is easier than recall, and no amount of skilful questioning closes that gap.",
    "Which means the fastest route to a correct requirement is often not another interview. It is a rough thing on paper, deliberately imperfect, put in front of somebody with a real task to attempt. Ten minutes of that will produce corrections that an hour of open questions will not.",
    "This guide covers prototyping as a Business Analyst uses it: choosing the fidelity to match the question, running a session that produces information rather than politeness, what to do about the prototype that people start treating as the design, and the point at which a prototype should become a small pilot with real work flowing through it.",
  ],

  whyItMatters: [
    "Requirements defects found in a conversation cost a conversation. The same defect found after build costs a rebuild, and after go-live it usually costs nothing because it never gets fixed. Prototyping moves discovery to the cheapest possible point.",
    "It also changes the quality of stakeholder engagement. People who have struggled with a paper version of your process become genuinely invested, and they raise things they would never volunteer in a requirements review, because they have just experienced the problem rather than being asked to imagine it.",
    "And it protects you from the most expensive category of misunderstanding: everybody agreeing to a sentence while picturing different things. A sketch makes the picture explicit, and disagreement about a picture surfaces in seconds.",
  ],

  coreConcepts: [
    {
      term: "Match fidelity to the question you are asking",
      explain:
        "Paper sketches test whether the steps and the information make sense. Clickable mockups test whether people can navigate and complete a task. Working prototypes test whether something is technically feasible. A pilot tests whether it survives real work.",
      detail:
        "Using higher fidelity than the question needs is the standard mistake. It costs more, it takes longer, and it makes people comment on colours and wording instead of on whether the process is right.",
    },
    {
      term: "Rough gets better feedback than polished",
      explain:
        "A hand-drawn sketch invites correction. A finished-looking screen invites approval, because it signals that decisions have been made and disagreeing would be disruptive.",
      detail:
        "This is one of the most reliable effects in this area. If you want people to tell you the process is wrong, do not show them something that looks like it has been signed off.",
    },
    {
      term: "Give people a real task, not a tour",
      explain:
        "Do not walk somebody through the prototype. Give them a specific job to do and watch them attempt it in silence.",
      detail:
        "The task should come from a real case with real awkward details. Here is a customer who has two addresses and an unpaid invoice, process their order. Then say nothing at all.",
    },
    {
      term: "Watch what they do, do not ask whether they like it",
      explain:
        "Preference questions produce politeness. Behaviour produces evidence. Where they hesitate, where they reread, where they look for something that is not there.",
      detail:
        "The most useful sentence during a session is what are you thinking now, asked when somebody pauses. The least useful is does this look right, which reliably produces yes.",
    },
    {
      term: "A small number of participants finds most of the problems",
      explain:
        "Usability research has established that the returns diminish very quickly with participant count, and that several small rounds outperform one large study.",
      detail:
        "The practical implication for a BA is that you do not need a research budget or a formal programme. Five people, an hour each, and a willingness to iterate between rounds will get you most of the available value.",
    },
    {
      term: "Test the exception, not the demonstration path",
      explain:
        "Everybody's prototype handles the standard case. Give people the awkward task: the record that already exists, the missing document, the amount that exceeds a limit.",
      detail:
        "This is where the requirements gaps are, and it is also where the prototype earns its cost. A prototype that only exercises the happy path confirms what nobody was worried about.",
    },
    {
      term: "Prototype the process, not only the screen",
      explain:
        "Where the change is to a way of working rather than to software, the prototype is a walkthrough with paper forms, a role play, or a week of running the new steps manually.",
      detail:
        "Some of the most valuable prototyping I have done involved no interface at all: a paper version of a new approval flow, run for three days with real cases, which found two exceptions nobody had mentioned.",
    },
    {
      term: "Say out loud that it will be thrown away",
      explain:
        "State it at the start of every session, and mean it. The moment a stakeholder believes the prototype is the design, they stop critiquing it and start defending their preferences within it.",
      detail:
        "There is a practical version of this: use obviously provisional visuals. Sketchy borders and placeholder text signal disposability more effectively than any verbal disclaimer.",
    },
    {
      term: "The prototype that becomes the product",
      explain:
        "The most common failure. Something built to answer a question works well enough to demonstrate, somebody senior sees it, and the pressure to ship it rather than rebuild it becomes irresistible.",
      detail:
        "Guard against it deliberately: agree in advance what happens to the artefact, keep it visibly rough, and never demonstrate a technical prototype to a stakeholder who could decide to ship it without saying clearly what it is not.",
    },
    {
      term: "Record what changed as a result",
      explain:
        "After each round, write down which requirements changed and why. That list is the return on the exercise and it is what justifies doing it again next time.",
      detail:
        "It also protects the practice. A prototyping round with no recorded changes looks like a delay to anybody watching the schedule, so make the changes visible.",
    },
    {
      term: "Iterate between rounds or do not bother",
      explain:
        "The value comes from finding a problem, changing something, and testing again. A single round produces a list of issues that may or may not be acted on.",
      detail:
        "Three short rounds with changes between them beat one long round comprehensively, and they usually take less total time because each round is smaller.",
    },
    {
      term: "A pilot is the highest-fidelity prototype",
      explain:
        "One team, one region, or one product, running real work through the new process for a defined period, with an agreed decision at the end.",
      detail:
        "It is the only form of validation that exercises volume, exceptions, cover arrangements and the interaction with everything else people have to do. Treat it as a test with a hypothesis, not as an early rollout.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "How many people you need in a usability test.",
      walkthrough:
        "The Nielsen Norman Group's analysis of usability testing sets out a model of diminishing returns with participant count. Testing a single user reveals roughly 31% of usability problems, and each additional participant discovers progressively less that is new because their observations overlap with earlier ones. Five users reach approximately 85% of problems, and around fifteen approach complete coverage.",
      result:
        "The recommendation drawn from this is not to run one large study but to spend the same budget on three studies of five users each, redesigning between them. For a Business Analyst without a research budget this is liberating: five participants and a willingness to change something between rounds captures most of the available value, which puts prototype validation within reach of any project.",
      source: {
        label: "Nielsen Norman Group: Why You Only Need to Test with 5 Users",
        url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/",
      },
    },
    {
      kind: "illustration",
      scenario: "The paper version that found two exceptions.",
      walkthrough:
        "A redesigned approval process is about to be specified. Before writing anything, the BA prints the proposed steps as paper forms and asks a team to run three days of real cases through them manually, passing physical paper between desks. On day one, a case arrives where the approver is the same person as the requester. On day two, somebody goes on leave and there is no defined cover for one of the roles.",
      result:
        "Neither had appeared in any interview and both would have been discovered after go-live. The prototype involved no software, cost three days of partial attention, and changed the design in two significant ways. Where the change is to a way of working, paper and real cases is a legitimate and often superior prototype.",
    },
    {
      kind: "illustration",
      scenario: "The demonstration that became a commitment.",
      walkthrough:
        "A developer builds a rough working version to test whether an integration is feasible. It works. It is shown at a steering group as evidence that the approach is viable. A director asks why, since it clearly works, it cannot simply be finished and deployed next month. The team explains that it has no error handling, no permissions and no tests, and the conversation becomes about how long that would take rather than about whether this was ever the right design.",
      result:
        "The prototype had answered its question and then acquired a life of its own. The protection is procedural rather than technical: agree in advance what happens to the artefact, keep it visibly provisional, and when demonstrating to anybody with authority to ship, state plainly and first what it is not.",
    },
  ],

  learningPath: [
    {
      title: "Write the question the prototype must answer",
      body: "One sentence. Can people complete this task without help? Is this information enough to decide? Is this technically possible? The question determines the fidelity.",
      effort: "15 minutes",
      outcome: "A prototype scoped to a purpose rather than built to look complete.",
    },
    {
      title: "Build the roughest thing that answers it",
      body: "Paper for process and information questions, clickable for navigation and task completion, working code only for feasibility. Deliberately provisional in appearance.",
      effort: "2 hours to 2 days depending on fidelity",
      outcome: "Something that invites correction rather than approval.",
    },
    {
      title: "Write real tasks from real cases",
      body: "Three to five tasks drawn from actual historical cases, including at least two awkward ones. Written as a job to do, not as instructions to follow.",
      effort: "1 hour",
      outcome: "Sessions that test the design rather than the participant's ability to follow directions.",
    },
    {
      title: "Run five sessions and watch in silence",
      body: "One hour each. Give the task, say nothing, note every hesitation and every place they look for something that is not there. Ask what they are thinking when they pause.",
      effort: "1 day",
      outcome: "Most of the findings the exercise will produce, per the diminishing returns curve.",
    },
    {
      title: "Change something and run it again",
      body: "Act on the biggest finding, revise, and run a second round with different participants. Three short rounds beat one long one.",
      effort: "2-3 days per additional round",
      outcome: "Validation that the fix worked, which a single round cannot give you.",
    },
    {
      title: "Record the requirement changes",
      body: "Which requirements changed, which were added, which were dropped, and why. Circulate it so the value of the exercise is visible.",
      effort: "1 hour",
      outcome: "The evidence that justifies doing this on the next project.",
    },
    {
      title: "Consider a pilot for anything process-heavy",
      body: "One team or one product, real work, a defined period, an agreed decision at the end. Treat it as a test with a hypothesis rather than as an early rollout.",
      effort: "2-6 weeks",
      outcome: "Validation against volume, exceptions and cover arrangements, which no prototype reaches.",
    },
  ],

  exercises: [
    {
      title: "Sketch and hand over",
      brief:
        "Take any process or screen you are currently specifying and sketch it on paper in fifteen minutes. Hand it to somebody who does the work with a real task and say nothing while they attempt it.",
      success:
        "You collect at least three corrections in ten minutes, and at least one of them concerns something you were confident about.",
      time: "45 minutes",
    },
    {
      title: "The silent session",
      brief:
        "Run one prototype session where you say nothing after giving the task, except to ask what are you thinking now when the person pauses. Resist every urge to explain or rescue.",
      success:
        "You can list the points where the participant hesitated, and at least one of them is somewhere you would never have predicted.",
      time: "1 hour",
    },
    {
      title: "Prototype the exception",
      brief:
        "Take a design that has already been reviewed and validated. Write three tasks based only on awkward historical cases: the duplicate, the missing document, the amount over the limit. Test those.",
      success:
        "You find at least one case the reviewed design does not handle, and you can write the design question it raises.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Building higher fidelity than the question needs",
      why: "It costs more, takes longer, and redirects feedback to colours and wording instead of to whether the process is right.",
      fix: "Write the question first and choose the cheapest fidelity that can answer it. Paper answers more questions than people expect.",
    },
    {
      mistake: "Showing something polished",
      why: "A finished-looking artefact signals that decisions have been made, so people approve rather than critique. You get agreement instead of information.",
      fix: "Keep it visibly provisional. Sketchy visuals and placeholder text do more than any verbal disclaimer.",
    },
    {
      mistake: "Walking people through it",
      why: "A guided tour tests whether your explanation is clear, not whether the design works. The participant never has to find anything themselves.",
      fix: "Give a real task and then be quiet. Watching somebody attempt something is the whole method.",
    },
    {
      mistake: "Asking whether people like it",
      why: "Preference questions produce politeness, especially from people who know you built it. The answer is almost always yes and it means nothing.",
      fix: "Watch behaviour. Note hesitation, rereading and searching for things that are not there.",
    },
    {
      mistake: "Testing only the happy path",
      why: "Everybody's design handles the standard case. The requirements gaps live in the exceptions, which is where the prototype could have earned its cost.",
      fix: "Build at least half your tasks from awkward real cases.",
    },
    {
      mistake: "Running one round and stopping",
      why: "You end up with a list of problems and no evidence that any fix works. The value is in the iteration, not in the observation.",
      fix: "Three short rounds with changes between them, five participants each.",
    },
    {
      mistake: "Letting the prototype become the product",
      why: "Something built to answer a question has no error handling, permissions or tests, and once it has been demonstrated the pressure to finish it rather than rebuild it is very hard to resist.",
      fix: "Agree in advance what happens to it, keep it rough, and state clearly what it is not before demonstrating to anybody who could decide to ship it.",
    },
    {
      mistake: "Not recording what changed",
      why: "A round with no visible output looks like a delay, and the practice gets cut from the next project even though it worked.",
      fix: "Write down which requirements changed and why after every round, and circulate it.",
    },
  ],

  bestPractices: [
    "Write the question the prototype must answer before building anything.",
    "Choose the cheapest fidelity that can answer that question.",
    "Keep the artefact visibly rough so it invites correction.",
    "Give real tasks from real cases rather than a guided tour.",
    "Stay silent and watch behaviour instead of asking about preference.",
    "Build at least half the tasks from awkward exceptions.",
    "Use around five participants per round.",
    "Change something between rounds and run it again.",
    "Prototype processes with paper and real cases where no software is involved.",
    "State at the start of every session that this will be thrown away.",
    "Agree in advance what happens to a technical prototype.",
    "Record which requirements changed after each round.",
    "Use a pilot with real work for anything process-heavy.",
  ],

  proTips: [
    "The most valuable moment in any session is when somebody pauses and then does something you did not expect. Do not interrupt it and do not correct them. Write down exactly what they did and what they said when you asked what they were thinking. That single observation is usually worth more than the rest of the session's notes combined.",
    "Prototype the thing everybody is most confident about. Confidence is where nobody has checked, and the areas under active argument are already receiving attention. I have found more requirement defects in the parts of a design that nobody thought needed testing than in the contested ones.",
    "Invite the person who will support the system afterwards, not just the person who will use it. They ask different questions: what happens when this goes wrong, how would I tell what a user did, who do I contact. Those questions produce requirements that never surface in a user-focused session.",
    "Keep the paper. Photograph every marked-up sketch before it is tidied into a document. The handwriting, the crossings-out and the arrows drawn over your layout are the actual record of what changed, and months later they settle arguments about what was agreed far more effectively than a neat summary does.",
  ],

  businessApplications: [
    "New system design, where the interface and the process are being decided together.",
    "Process redesign with no software, where paper walkthroughs with real cases are the appropriate prototype.",
    "Vendor selection, where your own scenarios run against a demonstration environment are a form of prototype.",
    "Feasibility questions, where a rough technical prototype answers a specific risk before commitment.",
    "Form and document redesign, where the cost of testing is trivial and the volume benefit is large.",
    "Pilot rollouts, where one team runs real work before a wider decision is taken.",
  ],

  checklist: [
    "The question the prototype answers is written down.",
    "Fidelity chosen deliberately to match that question.",
    "Artefact looks provisional rather than finished.",
    "Three to five tasks written from real historical cases.",
    "At least half the tasks exercise exceptions.",
    "Around five participants scheduled per round.",
    "Facilitator committed to silence during tasks.",
    "Support and downstream roles included, not only end users.",
    "Disposability stated at the start of each session.",
    "Changes made between rounds and a second round run.",
    "Requirement changes recorded and circulated.",
    "Agreement in place on what happens to any technical prototype.",
  ],

  faqs: [
    {
      q: "How many people do I need to test with?",
      a: "Around five per round, and run several rounds with changes between them. The Nielsen Norman Group's model puts five participants at roughly 85% of usability problems found, with sharply diminishing returns after that.",
    },
    {
      q: "Do I need design skills to prototype?",
      a: "No. Paper sketches work, and they frequently work better because they invite correction. Where the visual design genuinely matters, involve a designer, but do not let the absence of one stop you testing whether the process makes sense.",
    },
    {
      q: "What if stakeholders think the prototype is the finished design?",
      a: "Say what it is not, first and plainly, in every session. Keep it visibly rough. Where somebody with authority to ship is in the room, state explicitly that there is no error handling, no permissions and no tests, before showing anything.",
    },
    {
      q: "Is a proof of concept the same as a prototype?",
      a: "Related but aimed at a different question. A proof of concept asks whether something is technically possible. A prototype asks whether the design is right for the people who will use it. Both are disposable and both get kept when nobody agreed in advance that they would not be.",
    },
    {
      q: "When should I run a pilot instead?",
      a: "When the questions are about volume, exceptions, cover arrangements and how the change interacts with everything else people do. No prototype reaches those. A pilot with real work over a defined period is the only way to answer them.",
    },
    {
      q: "How do I test a process change with no interface?",
      a: "Paper forms and real cases, run for a few days by the people who would do it. It costs almost nothing, it exercises the actual handovers, and in my experience it reliably finds exceptions that no interview surfaced.",
    },
  ],

  tools: [
    { name: "Paper and a pen", what: "The highest return per hour available in this practice. Rough sketches invite correction in a way finished screens do not.", cost: "Free" },
    { name: "A clickable mockup tool", what: "For navigation and task completion questions. Keep the styling deliberately provisional.", cost: "Freemium" },
    { name: "Real historical cases", what: "Three to five tasks, at least half of them awkward. The difference between testing a design and demonstrating it.", cost: "Free" },
    { name: "A change log per round", what: "Which requirements changed and why. The evidence that keeps this practice funded on the next project.", cost: "Free" },
  ],

  resources: [
    { title: "Why You Only Need to Test with 5 Users", kind: "Docs", note: "Nielsen Norman Group. The diminishing returns model that puts prototype validation within reach of a project with no research budget.", url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/" },
  ],

  internalLinks: [
    { slug: "asking-questions-that-get-answers", anchor: "why recognition beats recall", context: "Method" },
    { slug: "designing-the-future-state", anchor: "the design this is testing", context: "Upstream" },
    { slug: "running-user-acceptance-testing", anchor: "the later and more formal version", context: "Downstream" },
  ],

  relatedGuides: ["asking-questions-that-get-answers", "designing-the-future-state", "running-user-acceptance-testing"],

  conclusion: [
    "Take whatever you are currently specifying, sketch it on paper in fifteen minutes, and hand it to somebody who does the work with one real task and no explanation. Then say nothing. The corrections you get in the following ten minutes will change your specification more than another round of interviews would.",
  ],
};

export default guide;
