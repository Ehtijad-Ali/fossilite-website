import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "asking-questions-that-get-answers",
  seoTitle: "Asking Questions That Get Real Answers",
  metaDescription:
    "Requirements elicitation in practice. The question types that work, the ones that produce polite fiction, and how to run a session where people tell you what actually happens.",
  title: "Asking Questions That Get Answers",
  keywords: [
    "requirements elicitation",
    "stakeholder interview questions",
    "business analysis questions",
    "eliciting requirements",
    "ba interview technique",
    "discovery questions",
  ],
  category: "communication",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "There is a category of question that reliably produces an answer which is polite, confident and wrong. 'What are your requirements?' is the leading example. So is 'would you use this?' and 'is that important?'. People answer them sincerely and the answers do not survive contact with reality.",
    "The reason is not dishonesty. People are unreliable narrators of their own work. They describe the process as they believe it runs, they compress the messy parts, and when asked about the future they predict enthusiastically because that is what humans do.",
    "So the craft is asking about things people are reliable about: what happened, what they did, what is in front of them. This guide is the question set I actually use, why each one works, and what to do when the room goes quiet.",
  ],

  coreConcepts: [
    {
      term: "Ask about the past, not the future",
      explain:
        "'Would you use a dashboard?' produces optimism. 'When did you last need this information and what did you do?' produces a story with facts in it.",
      detail:
        "Past behaviour is observable and specific. Future intention is a guess offered to be helpful. This single substitution improves elicitation more than any other technique.",
    },
    {
      term: "Ask for the last time, not the usual time",
      explain:
        "The usual case is a generalisation people construct on the spot. The last case is a memory, and memories contain the exceptions.",
      detail:
        "'Talk me through the most recent one' is the highest-yield sentence in this profession.",
    },
    {
      term: "Ask what they do when it goes wrong",
      explain:
        "The workaround is a precise map of where the system fails. It is also proof the problem is real, because nobody builds a workaround for a minor irritation.",
      detail:
        "Follow up with how often that happens. Frequency turns an anecdote into a requirement.",
    },
    {
      term: "Ask what they keep outside the system",
      explain:
        "Every spreadsheet, notebook and shared inbox is an unmet requirement somebody has already specified and implemented themselves.",
      detail:
        "Make clear you are not there to take it away, or the answer will be nothing. Curiosity gets you the truth; audit framing does not.",
    },
    {
      term: "Ask who else is involved and what they need",
      explain:
        "Every process has invisible participants. The person who approves, the team downstream who receives the output, the auditor who checks it once a quarter.",
      detail:
        "Missing a downstream consumer is one of the most common ways a delivered system turns out to be unusable for someone nobody interviewed.",
    },
    {
      term: "Ask what would have to be true for this to be a bad idea",
      explain:
        "A direct challenge makes people defend. This phrasing lets them be sceptical without being disloyal to their own request.",
      detail:
        "Sponsors in particular will tell you the real risks when the question is framed as helping rather than doubting.",
    },
    {
      term: "Silence is a technique, not a failure",
      explain:
        "The most useful sentence in an interview usually arrives four seconds after you would normally have moved on. Count in your head.",
      detail:
        "Most people cannot tolerate a pause and fill it with something they had not planned to say. That is frequently the part that matters.",
    },
    {
      term: "Show a draft and let them correct it",
      explain:
        "People are far better at criticism than at specification. A deliberately imperfect model produces more information in ten minutes than an hour of open questions.",
      detail:
        "This is not a trick. It plays to how humans actually process: recognition is easier than recall.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The same question, two ways.",
      walkthrough:
        "Version one: 'What reports do you need?' The answer is a list of eleven reports, assembled from what exists plus a few aspirations, delivered confidently. Version two: 'Think about the last decision you made that needed data. What was it, and how did you get what you needed?' The answer is a story about a Tuesday, a phone call to a colleague, a spreadsheet exported and filtered by hand, and a decision made without one number that was never available.",
      result:
        "The first produced a specification for eleven reports, most of which would have gone unused. The second produced one genuine requirement and a clear picture of what the decision actually needed. Same stakeholder, same fifteen minutes.",
    },
    {
      kind: "documented",
      scenario: "Why stated intention is weak evidence.",
      walkthrough:
        "CB Insights compiled post-mortems written by failed startups. Across the original set of more than 110 companies, no market need was the most frequently cited contributing factor, at 42%. These were companies that had spoken to prospective customers and heard encouraging things.",
      result:
        "People say yes to hypotheticals. They are being kind, and the kindness is indistinguishable from a signal until money is involved. The elicitation discipline is the same inside a company as outside it: ask what someone did, not what they would do.",
      source: {
        label: "CB Insights: The Top Reasons Startups Fail",
        url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/",
      },
    },
    {
      kind: "illustration",
      scenario: "The wrong draft that worked.",
      walkthrough:
        "A BA cannot get a team to describe their approval rules. Every session produces vague generalities. So she draws the process as she has understood it, deliberately leaving two steps out and getting one condition backwards, and puts it on the wall.",
      result:
        "Within five minutes three people are correcting it, and by the end of the session she has the full rule set including an exception for one customer category that had never come up. Recognition beats recall. Bring something wrong to react to when open questions have stalled.",
    },
  ],

  learningPath: [
    {
      title: "Replace every future question in your script",
      body: "Go through your standard questions and rewrite each one to be about a past event. 'Would you' becomes 'when did you last'. Notice how many of your questions were hypothetical.",
      effort: "1 hour",
      outcome: "A question set that produces evidence rather than opinion.",
    },
    {
      title: "Run one session where you only ask about the last case",
      body: "Pick one stakeholder, ask them to walk through the most recent real instance, and follow it wherever it goes. Do not steer back to the general.",
      effort: "1 hour",
      outcome: "A concrete case and usually two findings nobody had mentioned.",
    },
    {
      title: "Practise the four-second pause",
      body: "In your next three conversations, count to four before responding when someone finishes. It will feel absurd and it will change what you hear.",
      effort: "Three conversations",
      outcome: "The material people were not going to volunteer.",
    },
    {
      title: "Bring a wrong draft to a stalled session",
      body: "Draw the process as you understand it, imperfectly, and let people correct it. Prepare to write fast.",
      effort: "2 hours including preparation",
      outcome: "More detail than open questioning has produced in weeks.",
    },
    {
      title: "Interview one downstream consumer",
      body: "Find whoever receives the output of the process and ask what they do with it. This is the group most often missed and most likely to reject the delivered thing.",
      effort: "1 hour",
      outcome: "Requirements nobody in the main group knew to give you.",
    },
  ],

  mistakes: [
    {
      mistake: "Asking what someone needs",
      why: "It asks for a solution, and you receive one. You then own somebody's design without the reasoning behind it.",
      fix: "Ask what happened last time and what they did. The need is inferred from behaviour, not reported.",
    },
    {
      mistake: "Asking hypothetical questions",
      why: "People answer optimistically and kindly. Stated intention is one of the weakest forms of evidence available, and it feels like one of the strongest.",
      fix: "Convert every hypothetical into a question about a real past event.",
    },
    {
      mistake: "Interviewing in a group without care",
      why: "The most senior voice sets the account and the operators quietly agree. You get one version and lose the disagreements, which are the valuable part.",
      fix: "Interview individually first, then bring the group together in front of a single model to surface the differences deliberately.",
    },
    {
      mistake: "Filling every silence",
      why: "You will talk over the sentence you needed. The unplanned addition is usually the exception that matters.",
      fix: "Count to four. Every time.",
    },
    {
      mistake: "Only speaking to people who requested the change",
      why: "Requesters are self-selected. The people who did not complain still use the process and will be affected by whatever you build.",
      fix: "Deliberately interview at least one person who has not asked for anything and one downstream consumer.",
    },
  ],

  bestPractices: [
    "Ask about the past, never the future.",
    "Ask for the most recent case, not the typical one.",
    "Ask what they do when it goes wrong, then how often.",
    "Ask what they keep outside the system, without judgement.",
    "Identify downstream consumers and interview at least one.",
    "Interview individually before bringing a group together.",
    "Count to four before filling a silence.",
    "Bring a deliberately imperfect draft when a session stalls.",
  ],

  proTips: [
    "Ask people to show you rather than tell you. 'Can you open it and walk me through?' produces different information from 'how does that work?' because the screen contains things they have stopped noticing.",
    "When someone gives you a rule, ask for a case where the rule did not apply. There is always one. That exception is usually the reason the system cannot be as simple as the rule suggests.",
    "If a stakeholder keeps returning to one topic regardless of what you asked, stop steering and follow it. Repetition under redirection is the strongest signal you get about what actually matters to them.",
  ],

  businessApplications: [
    "Discovery for a new system, where the cost of missing a requirement is highest.",
    "Vendor selection, where you need to know what the business does before judging what a product offers.",
    "Process improvement, where the workarounds are the entire dataset.",
    "Incident review, where asking what people did beats asking what should have happened.",
    "Handover from a departing colleague, where the last five cases teach more than any document.",
  ],

  faqs: [
    {
      q: "How long should an interview be?",
      a: "Forty-five minutes to an hour. Beyond that both of you degrade. Two shorter sessions produce more than one long one, partly because people think between them and arrive with things they remembered.",
    },
    {
      q: "Should I record sessions?",
      a: "Ask, and accept a no gracefully. Recording changes what people say about workarounds and about colleagues. If it is refused, that refusal is itself information about the environment.",
    },
    {
      q: "What if the stakeholder just wants to give me a feature list?",
      a: "Take it, then work backwards. 'Talk me through when you last needed number four' turns a list into the reasoning underneath it, and you keep the relationship intact.",
    },
    {
      q: "How do I handle someone who says they have no time?",
      a: "Ask for twenty minutes at the busiest point of their week rather than an hour at a quiet one. Easier to grant, and pressure is exactly when the workarounds appear.",
    },
    {
      q: "How many people should I speak to?",
      a: "Until answers start repeating and you can predict what the next person will say. Usually five to eight for one process. Stopping at two is the common error.",
    },
  ],

  tools: [
    { name: "A written question set", what: "Prepared, all past-tense. Prevents drifting into hypotheticals under time pressure.", cost: "Free" },
    { name: "A deliberately imperfect draft model", what: "The unlock for stalled sessions. Recognition is easier than recall.", cost: "Free" },
    { name: "A glossary you build as you go", what: "Records who gave you which definition, which is how you catch two teams using one word differently.", cost: "Free" },
  ],

  resources: [
    { title: "The Top Reasons Startups Fail", kind: "Docs", note: "On why encouraging answers to hypothetical questions are not evidence.", url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/" },
  ],

  internalLinks: [
    { slug: "learning-a-business-fast", anchor: "building the context first", context: "Before interviewing" },
    { slug: "symptom-versus-problem", anchor: "what to do with the answers", context: "After interviewing" },
    { slug: "customer-research-with-ai", anchor: "synthesising many interviews", context: "Analysis" },
  ],

  relatedGuides: ["learning-a-business-fast", "symptom-versus-problem", "customer-research-with-ai"],

  conclusion: [
    "In your next session, replace one hypothetical question with 'talk me through the most recent time that happened'. The difference in what comes back will make the case for rewriting the rest of your script.",
  ],
};

export default guide;
