import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "reading-a-business-analyst-job-spec",
  seoTitle: "Reading a BA Job Advert: What They Actually Want",
  metaDescription:
    "Two jobs with the same title can be completely different. Which words signal a real analysis job, which signal note-taking, and the questions that reveal it.",
  title: "Reading a Business Analyst Job Advert",
  keywords: [
    "business analyst job description",
    "ba skills required",
    "business analyst interview",
    "ba job requirements",
    "business systems analyst skills",
    "ba career",
  ],
  category: "career-development",
  level: "Beginner",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "A BA job advert is usually written by somebody who is not a BA, generally by combining an old advert with whatever the hiring manager said in a ten-minute conversation. Reading it literally is a mistake. Reading it as evidence is not.",
    "Two jobs with identical titles and near-identical bullet lists can be completely different. One is analysis, with real say over what gets built. The other is writing things down after decisions have already been made. The advert usually tells you which, if you know where to look.",
    "This matters in both directions. If you are applying, it decides whether you will be doing the work you want. If you are hiring, it decides whether you attract somebody who solves problems or somebody who writes them down.",
  ],

  coreConcepts: [
    {
      term: "Look at what the verbs are doing",
      explain:
        "Gather requirements from stakeholders and pass them to the development team describes a middleman. Work with stakeholders to define the problem and recommend solutions describes an analyst.",
      detail:
        "The verb is the tell. Gather, document and translate are all downstream. Define, investigate, recommend and challenge are all upstream.",
    },
    {
      term: "Count how much of it is about tools",
      explain:
        "An advert heavy on named software and light on business outcomes usually means a job where the tooling is the point and the thinking happens somewhere else.",
      detail:
        "Tools are learnable in weeks. An advert leading with them is telling you what the business values, and it is not analysis.",
    },
    {
      term: "Find out who the job reports to",
      explain:
        "Reporting into delivery or a project office usually means requirements arrive already decided. Reporting into the business or into a product function usually means you are involved before the decision.",
      detail:
        "This one fact predicts what the job is really like better than the entire bullet list, and it is rarely on the advert. Ask it first.",
    },
    {
      term: "Words that mean a systems-facing job",
      explain:
        "Mentions of how data is structured, connections between systems, mapping fields from one place to another, or querying data all point to a more technical version of the role. Expect to work closer to the systems and further from changing how people work.",
      detail:
        "Neither version is more senior. They are different jobs, and people are happy in one and miserable in the other, so read for it deliberately.",
    },
    {
      term: "Look for the sentence about what you are accountable for",
      explain:
        "There is usually a line somewhere about what you are responsible for. If it says responsible for documenting, that is the job. If it says accountable for the solution meeting the business need, that is a much bigger job.",
      detail:
        "The second version tends to come with more influence and more exposure. Know which one you are signing up for.",
    },
    {
      term: "Certifications tell you about the hiring process, not the work",
      explain:
        "Where an advert lists them as essential, the sifting is probably automated or done by a recruiter. Where they are absent, the hiring manager probably wrote the advert themselves.",
      detail:
        "Their presence tells you more about how you will be assessed than about what you will be doing.",
    },
    {
      term: "Five things appear in nearly every serious advert",
      explain:
        "Getting requirements out of people, drawing how work happens, dealing with stakeholders, being comfortable with data, and talking to technical teams. Everything else is local flavour.",
      detail:
        "If you can give concrete examples of those five, most adverts are worth applying to whatever the industry words are.",
    },
    {
      term: "Industry knowledge is usually negotiable, and sometimes is not",
      explain:
        "In heavily regulated fields the industry is the job and they mean it. Everywhere else, experience in our sector is often shorthand for not wanting to explain everything twice.",
      detail:
        "You can answer the second by showing you pick up a new area quickly, with an example. You cannot bluff the first.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Two adverts, same title.",
      walkthrough:
        "The first: capture requirements from business users, produce documentation to agreed templates, support the test team, keep the requirements list up to date. Reports to the Delivery Manager. Three named tools. The second: work with operations leadership to identify improvement opportunities, analyse how things currently work, define and weigh up options including ones that involve no technology, and make recommendations to the steering group. Reports to the Head of Operations.",
      result:
        "Both said Business Analyst. The first is a documentation job inside a delivery team and will suit somebody who likes structure and precision. The second involves choosing what gets done. The verbs and the reporting line gave it away without a single interview question.",
    },
    {
      kind: "illustration",
      scenario: "The question that ended a process early.",
      walkthrough:
        "The problem: a candidate could not tell from the advert which kind of job it was. What was happening: in the first interview he asked whether they could describe the last piece of BA work done there, from the request arriving to it going live. The hiring manager described a project where requirements came from a sponsor, were written up, and were handed to a supplier. Asked whether the BA had questioned the approach, the answer was that the approach had already been decided at board level.",
      result:
        "What changed: that was a useful answer and not a bad one. It accurately described the job. The candidate withdrew, which saved both sides three interviews. Asking for a specific recent example rather than a description of the role gets you the truth, because people cannot generalise a real story.",
    },
  ],

  learningPath: [
    {
      title: "Collect ten adverts in the market you want",
      body: "Real adverts, not templates. Paste them into one document and read them as a set rather than one at a time.",
      effort: "1 hour",
      outcome: "The pattern of what your market actually asks for, which is narrower than any course syllabus.",
    },
    {
      title: "Count the skills, not the tools",
      body: "Count how often each skill appears. Getting requirements out of people, drawing processes, stakeholder work, data, talking to technical teams. Note the local words each industry uses for them.",
      effort: "1 hour",
      outcome: "A ranked list of what you need to be able to give examples of.",
    },
    {
      title: "Write one concrete story per skill",
      body: "The situation, what you did, what changed. Numbers where you have them. These are the answers to every behavioural question you will get asked.",
      effort: "Half a day",
      outcome: "Interview material that is specific rather than general.",
    },
    {
      title: "Prepare the three questions that tell them apart",
      body: "Who does this report to. Describe the last piece of BA work here from beginning to end. What decisions is the BA expected to influence.",
      effort: "15 minutes",
      outcome: "A reliable way to tell the two versions of this job apart.",
    },
    {
      title: "Analyse something where you are now",
      body: "Map a broken process at your current job, find the cause, propose the change, and record what happened. This works whether or not you have the title.",
      effort: "Weeks, part-time",
      outcome: "Something concrete to talk about, which beats any certificate in an interview.",
    },
  ],

  mistakes: [
    {
      mistake: "Reading the bullet list and ignoring the verbs",
      why: "The bullets are often copied from an old advert. The verbs and the reporting line are where the real shape of the job shows through.",
      fix: "Scan for gather and document versus define and recommend, then ask who it reports to.",
    },
    {
      mistake: "Ruling yourself out over tools",
      why: "Named software is the most learnable thing on any advert and is usually listed by somebody describing what they currently use rather than a requirement.",
      fix: "Apply if you have the five core skills. Deal with the tools by showing you pick things up.",
    },
    {
      mistake: "Answering behavioural questions in general terms",
      why: "I always make sure to engage stakeholders early tells an interviewer nothing and sounds rehearsed. It is also indistinguishable from somebody who has never done it.",
      fix: "One situation, what you did, what changed, with a number if you have one.",
    },
    {
      mistake: "Not asking about the last real piece of work",
      why: "You end up accepting a description of the job rather than evidence of it, and those two diverge more often than people expect.",
      fix: "Ask for a specific recent example and listen for whether the BA influenced anything.",
    },
  ],

  bestPractices: [
    "Read the verbs, not the bullet list.",
    "Ask who the job reports to before anything else.",
    "Treat named tools as learnable and business outcomes as the real signal.",
    "Prepare one concrete story per core skill, with numbers.",
    "Ask for the last real piece of BA work, described from beginning to end.",
    "Look for the words that mean a systems-facing job.",
    "Build something concrete where you already work rather than waiting for the title.",
  ],

  faqs: [
    {
      q: "Should I get a certification?",
      a: "If your market sifts on them, yes, purely to get past the filter. They will not carry an interview, where every question worth answering starts with tell me about a time.",
    },
    {
      q: "How much technical knowledge do I need?",
      a: "Enough to follow a conversation about how information is structured, understand roughly why something is hard, and not feel out of your depth talking to developers. For the systems-facing version, more. Writing production code is not part of it.",
    },
    {
      q: "Is industry experience essential?",
      a: "In heavily regulated fields, largely yes. Everywhere else it is often shorthand for not wanting to explain things twice, which you can answer with evidence that you pick up a new area quickly.",
    },
    {
      q: "What if the advert is clearly two jobs?",
      a: "Common, and worth raising in the interview. Ask which half is urgent. The answer tells you what you will actually be doing for the first year.",
    },
    {
      q: "How do I move between the business-facing and systems-facing versions?",
      a: "Deliberately take work at the boundary. Somebody who has specified one connection between systems properly, or who has mapped one end-to-end process, has the evidence for the move.",
    },
  ],

  tools: [
    { name: "Ten real adverts in one document", what: "The fastest read on what your market actually wants.", cost: "Free" },
    { name: "A set of stories", what: "One concrete example per core skill, with what changed. Interview preparation that survives follow-up questions.", cost: "Free" },
    { name: "Three questions for them", what: "Reporting line, last real piece of work, decisions influenced. Tells the two versions of this job apart.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "what-a-business-analyst-actually-does", anchor: "what the job really involves", context: "Before applying" },
    { slug: "building-a-business-analyst-portfolio", anchor: "producing something concrete to talk about", context: "Preparation" },
    { slug: "business-analyst-interview-preparation", anchor: "turning that into interview answers", context: "Interviews" },
  ],

  relatedGuides: ["what-a-business-analyst-actually-does", "building-a-business-analyst-portfolio", "business-analyst-interview-preparation"],

  conclusion: [
    "Pull ten real adverts in the market you want and count the skills rather than the tools. An hour of that will redirect your preparation more usefully than any course syllabus.",
  ],
};

export default guide;
