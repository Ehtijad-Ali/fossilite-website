import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "asking-questions-that-get-answers",
  seoTitle: "Asking Questions That Get Real Answers",
  metaDescription:
    "Some questions reliably produce answers that are polite, confident and wrong. The ones that work, why they work, and what to do when the room goes quiet.",
  title: "Asking Questions That Get Real Answers",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "There is a kind of question that reliably produces an answer which is polite, confident and wrong. What are your requirements is the leading example. So is would you use this and is that important. People answer them sincerely and the answers do not survive contact with reality.",
    "It is not dishonesty. People are unreliable narrators of their own work. They describe the process as they believe it runs, they smooth over the messy parts, and when you ask about the future they predict enthusiastically because that is what humans do.",
    "So the craft is asking about the things people are reliable about: what happened, what they did, what is in front of them. This is the set of questions I actually use, why each one works, and what to do when the room goes quiet.",
  ],

  coreConcepts: [
    {
      term: "Ask about the past, not the future",
      explain:
        "Would you use a dashboard gets you optimism. When did you last need this information and what did you do gets you a story with facts in it.",
      detail:
        "What people did is observable and specific. What they would do is a guess offered to be helpful. Swapping one for the other improves your results more than any other single change.",
    },
    {
      term: "Ask about the last time, not the usual time",
      explain:
        "The usual case is something people put together on the spot. The last case is a memory, and memories contain the exceptions.",
      detail:
        "Talk me through the most recent one is the highest-yield sentence in this job.",
    },
    {
      term: "Ask what they do when it goes wrong",
      explain:
        "The workaround is a precise map of where the system fails them. It is also proof the problem is real, because nobody builds a workaround for a minor annoyance.",
      detail:
        "Follow it up with how often that happens. That turns a story into something you can size.",
    },
    {
      term: "Ask what they keep outside the system",
      explain:
        "Every spreadsheet, notebook and shared inbox is a need somebody has already worked out and built for themselves.",
      detail:
        "Make clear you are not there to take it away, or the answer will be nothing. Curiosity gets you the truth. Sounding like an audit does not.",
    },
    {
      term: "Ask who else is involved and what they need",
      explain:
        "Every process has invisible participants. The person who approves it, the team downstream who gets the output, the auditor who checks it once a quarter.",
      detail:
        "Missing somebody downstream is one of the most common ways a finished system turns out to be unusable for somebody nobody interviewed.",
    },
    {
      term: "Ask what would have to be true for this to be a bad idea",
      explain:
        "A direct challenge makes people defend their position. This phrasing lets them be sceptical without seeming disloyal to their own request.",
      detail:
        "Sponsors in particular will tell you the real risks when the question is framed as helping rather than doubting.",
    },
    {
      term: "Silence is a technique, not a failure",
      explain:
        "The most useful sentence in an interview usually arrives about four seconds after you would normally have moved on. Count in your head.",
      detail:
        "Most people cannot tolerate a pause and fill it with something they had not planned to say. That is frequently the part that matters.",
    },
    {
      term: "Show a draft and let them correct it",
      explain:
        "People are far better at criticising than at describing. A deliberately imperfect picture gets you more in ten minutes than an hour of open questions.",
      detail:
        "It is not a trick. It works because recognising something is easier than remembering it, which is true of everybody including you.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The same question asked two ways.",
      walkthrough:
        "The problem: a BA needed to know what reporting a director actually needed. What was happening: asked what reports do you need, he produced a list of eleven, assembled from what already existed plus a few wishes, delivered confidently. Asked instead to think about the last decision he made that needed data, what it was and how he got what he needed, he described a Tuesday, a phone call to a colleague, a spreadsheet exported and filtered by hand, and a decision made without one number that had never been available.",
      result:
        "What changed: the first version would have produced eleven reports, most of which would have gone unopened. The second produced one genuine need and a clear picture of what the decision actually required. Same person, same fifteen minutes.",
    },
    {
      kind: "documented",
      scenario: "Why what people say they would do is weak evidence.",
      walkthrough:
        "CB Insights collected post-mortems written by failed startups themselves. Across the original set of more than 110 companies, no market need was the most frequently cited factor, at 42%. These were companies that had spoken to prospective customers and heard encouraging things.",
      result:
        "People say yes to hypotheticals. They are being kind, and kindness is indistinguishable from a real signal until money is involved. The discipline is the same inside a business as outside it: ask what somebody did, not what they would do.",
      source: {
        label: "CB Insights: The Top Reasons Startups Fail",
        url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/",
      },
    },
    {
      kind: "illustration",
      scenario: "The wrong drawing that worked.",
      walkthrough:
        "The problem: a BA could not get a team to describe their approval rules. Three sessions of open questions had produced nothing but generalities. What was happening: so she drew the process as she understood it, deliberately leaving two steps out and getting one condition backwards, and put it on the wall.",
      result:
        "What changed: within five minutes three people were correcting it, and by the end of the session she had the full set of rules including an exception for one customer category that had never come up. Recognising something is easier than remembering it. When open questions have stalled, bring something wrong for people to react to.",
    },
  ],

  learningPath: [
    {
      title: "Rewrite every future question in your script",
      body: "Go through your standard questions and turn each one into a question about something that already happened. Would you becomes when did you last. Notice how many of your questions were hypothetical.",
      effort: "1 hour",
      outcome: "A set of questions that produces evidence rather than opinion.",
    },
    {
      title: "Run one session asking only about the last case",
      body: "Pick one person, ask them to walk through the most recent real instance, and follow it wherever it goes. Do not steer back to the general.",
      effort: "1 hour",
      outcome: "One concrete case and usually two findings nobody had mentioned.",
    },
    {
      title: "Practise counting to four",
      body: "In your next three conversations, count to four before responding when somebody finishes. It will feel absurd and it will change what you hear.",
      effort: "Three conversations",
      outcome: "The material people were not going to volunteer.",
    },
    {
      title: "Bring a wrong draft to a session that has stalled",
      body: "Draw the process as you understand it, imperfectly, and let people correct it. Be ready to write fast.",
      effort: "2 hours including preparation",
      outcome: "More detail than open questioning has produced in weeks.",
    },
    {
      title: "Talk to somebody downstream",
      body: "Find whoever receives the output of the process and ask what they do with it. This is the group most often missed and most likely to reject the finished thing.",
      effort: "1 hour",
      outcome: "Needs nobody in the main group knew to tell you about.",
    },
  ],

  mistakes: [
    {
      mistake: "Asking what somebody needs",
      why: "It asks for a solution and you get one. You then own somebody's design without any of the reasoning behind it.",
      fix: "Ask what happened last time and what they did. What they need gets worked out from behaviour, not reported.",
    },
    {
      mistake: "Asking hypothetical questions",
      why: "People answer optimistically and kindly. What somebody says they would do is one of the weakest kinds of evidence there is, and it feels like one of the strongest.",
      fix: "Turn every hypothetical into a question about something that actually happened.",
    },
    {
      mistake: "Interviewing a group without thinking about it",
      why: "The most senior voice sets the story and everybody else quietly agrees. You get one version and lose the disagreements, which were the valuable part.",
      fix: "Interview people one at a time first, then bring the group together in front of one picture to surface the differences on purpose.",
    },
    {
      mistake: "Filling every silence",
      why: "You will talk over the sentence you needed. The unplanned addition is usually the exception that matters.",
      fix: "Count to four. Every time.",
    },
    {
      mistake: "Only talking to people who asked for the change",
      why: "The people who asked are self-selected. The ones who did not complain still use the process and will be affected by whatever you build.",
      fix: "Deliberately talk to at least one person who has asked for nothing and one person downstream.",
    },
  ],

  bestPractices: [
    "Ask about the past, never the future.",
    "Ask for the most recent case, not the typical one.",
    "Ask what they do when it goes wrong, then how often.",
    "Ask what they keep outside the system, without judgement.",
    "Find out who is downstream and talk to at least one of them.",
    "Interview people individually before bringing a group together.",
    "Count to four before filling a silence.",
    "Bring something deliberately imperfect when a session stalls.",
  ],

  proTips: [
    "Ask people to show you rather than tell you. Can you open it and walk me through gets completely different information from how does that work, because the screen contains things they have stopped noticing.",
    "When somebody gives you a rule, ask for a case where the rule did not apply. There is always one. That exception is usually the reason the system cannot be as simple as the rule makes it sound.",
    "If somebody keeps coming back to one topic regardless of what you asked, stop steering and follow it. Repeating something under redirection is the strongest signal you get about what actually matters to them.",
    "Send your notes back to the person the same day and ask them to correct anything you got wrong. Half will correct something, which improves your understanding, and all of them register that you took them seriously. It is the highest-return ten minutes in this job.",
  ],

  businessApplications: [
    "Working out what a new system needs to do, where the cost of missing something is highest.",
    "Choosing a supplier, where you need to know what the business does before judging what a product offers.",
    "Improving a process, where the workarounds are the entire dataset.",
    "Reviewing after an incident, where asking what people did beats asking what should have happened.",
    "Taking over from somebody who is leaving, where the last five cases teach more than any handover document.",
  ],

  faqs: [
    {
      q: "How long should an interview be?",
      a: "Forty-five minutes to an hour. Beyond that you both get worse. Two shorter sessions produce more than one long one, partly because people think in between and turn up with things they remembered.",
    },
    {
      q: "Should I record sessions?",
      a: "Ask, and accept a no gracefully. Recording changes what people say about workarounds and about colleagues. If it is refused, that refusal tells you something about the place.",
    },
    {
      q: "What if somebody just wants to give me a list of features?",
      a: "Take it, then work backwards. Talk me through when you last needed number four turns a list into the reasoning underneath it, and you keep the relationship intact.",
    },
    {
      q: "How do I handle somebody who says they have no time?",
      a: "Ask for twenty minutes at the busiest point of their week rather than an hour at a quiet one. Easier to agree to, and pressure is exactly when the workarounds appear.",
    },
    {
      q: "How many people should I speak to?",
      a: "Until answers start repeating and you can predict what the next person will say. Usually five to eight for one process. Stopping at two is the common mistake.",
    },
  ],

  tools: [
    { name: "A written set of questions", what: "Prepared, all about things that already happened. Stops you drifting into hypotheticals under time pressure.", cost: "Free" },
    { name: "A deliberately imperfect drawing", what: "The unlock for a stalled session. Recognising is easier than remembering.", cost: "Free" },
    { name: "A list of words as you go", what: "Records who gave you which definition, which is how you catch two teams using one word differently.", cost: "Free" },
  ],

  resources: [
    { title: "The Top Reasons Startups Fail", kind: "Docs", note: "On why encouraging answers to hypothetical questions are not evidence.", url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/" },
  ],

  internalLinks: [
    { slug: "learning-a-business-fast", anchor: "building the context first", context: "Before interviewing" },
    { slug: "symptom-versus-problem", anchor: "what to do with the answers", context: "After interviewing" },
    { slug: "running-a-requirements-workshop", anchor: "when to bring people together instead", context: "Group sessions" },
  ],

  relatedGuides: ["learning-a-business-fast", "symptom-versus-problem", "running-a-requirements-workshop"],

  conclusion: [
    "In your next session, replace one hypothetical question with talk me through the most recent time that happened. The difference in what comes back will make the case for rewriting the rest of your script.",
  ],
};

export default guide;
