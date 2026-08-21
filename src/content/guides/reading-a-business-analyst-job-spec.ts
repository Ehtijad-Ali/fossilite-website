import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "reading-a-business-analyst-job-spec",
  seoTitle: "Reading a BA Job Spec: What Employers Actually Want",
  metaDescription:
    "How to decode a Business Analyst job description. Which phrases signal a real analysis role, which signal a note-taker, and the questions that reveal it in interview.",
  title: "Reading a Business Analyst Job Spec",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "A BA job spec is written by someone who is not a BA, usually by combining an old spec with whatever the hiring manager said in a ten-minute conversation. Reading it literally is a mistake. Reading it as evidence is not.",
    "Two roles with identical titles and near-identical bullet lists can be completely different jobs. One is analysis, with real influence over what gets built. The other is documentation, downstream of decisions already made. The spec usually tells you which, if you know where the signal is.",
    "This matters in both directions. If you are applying, it decides whether you will be doing the work you want. If you are hiring, it decides whether you attract someone who solves problems or someone who writes them down.",
  ],

  coreConcepts: [
    {
      term: "Look at where the role sits in the sentence",
      explain:
        "'Gather requirements from stakeholders and pass to the development team' describes a conduit. 'Work with stakeholders to define the problem and recommend solutions' describes an analyst.",
      detail:
        "The verb is the tell. Gather, document and translate are downstream verbs. Define, investigate, recommend and challenge are upstream ones.",
    },
    {
      term: "Count how much of the spec is about tools",
      explain:
        "A spec heavy on named software and light on business outcomes usually indicates a role where the tooling is the job and the thinking happens elsewhere.",
      detail:
        "Tools are learnable in weeks. A spec that leads with them is telling you what the organisation values, and it is not analysis.",
    },
    {
      term: "Find out who the role reports to",
      explain:
        "Reporting into delivery or a PMO usually means requirements arrive pre-decided. Reporting into the business or into a product function usually means you are involved before the decision.",
      detail:
        "This single fact predicts the nature of the job better than the entire bullet list, and it is rarely on the advert. Ask it first.",
    },
    {
      term: "The BSA signal: data and interfaces",
      explain:
        "Mentions of data models, integrations, APIs, source-to-target mapping or SQL point to a Business Systems Analyst role. Expect to work closer to the system and further from process change.",
      detail:
        "Neither is more senior. They are different jobs and people are happy in one and miserable in the other, so read for it deliberately.",
    },
    {
      term: "Watch for the accountability sentence",
      explain:
        "Somewhere there is usually a line about what you are responsible for. If it says responsible for documenting, that is the job. If it says accountable for the solution meeting the business need, that is a much larger job.",
      detail:
        "The second version tends to come with more influence and more exposure. Know which you are signing up for.",
    },
    {
      term: "Certifications are a filter, not a signal",
      explain:
        "Where a spec lists them as essential, the screening is likely automated or done by a recruiter. Where they are absent, the hiring manager probably wrote the spec themselves.",
      detail:
        "Their presence tells you more about the hiring process than about the work.",
    },
    {
      term: "The five skills that appear in nearly every serious spec",
      explain:
        "Requirements elicitation, process modelling, stakeholder management, data literacy, and communication with technical teams. Everything else is local flavour.",
      detail:
        "If you can evidence those five with concrete stories, most specs are addressable regardless of the industry vocabulary.",
    },
    {
      term: "Domain knowledge is usually negotiable, and sometimes is not",
      explain:
        "In regulated fields the domain is the job and they mean it. Elsewhere, 'experience in our sector' is often a proxy for 'we do not want to explain everything twice'.",
      detail:
        "You can address the second by demonstrating that you learn a domain quickly, with an example. You cannot bluff the first.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Two specs, same title.",
      walkthrough:
        "The first: capture requirements from business users, produce documentation to agreed templates, support the test team, maintain the requirements traceability matrix. Reports to the Delivery Manager. Tools listed: three. The second: partner with operations leadership to identify improvement opportunities, analyse current processes, define and evaluate options including non-technical ones, and make recommendations to the steering group. Reports to the Head of Operations.",
      result:
        "Both said Business Analyst. The first is a documentation role inside a delivery function and will suit someone who likes structure and precision. The second involves choosing what gets done. The verbs and the reporting line gave it away without a single interview question.",
    },
    {
      kind: "illustration",
      scenario: "The question that ended a process early.",
      walkthrough:
        "A candidate asks in a first interview: 'Can you describe the last piece of work a BA here did, from the request arriving to it going live?' The hiring manager describes a project where requirements came from a sponsor, were written up, and were handed to a vendor. Asked whether the BA had questioned the approach, the answer is that the approach was already decided at board level.",
      result:
        "That is a useful answer and not a bad one. It accurately describes the role. The candidate withdrew, which saved both sides three interviews. Ask for a real recent example rather than a description of the role and you will get the truth, because people cannot generalise a specific story.",
    },
  ],

  learningPath: [
    {
      title: "Collect ten specs in your target market",
      body: "Real adverts, not templates. Paste them into one document and read them as a set rather than individually.",
      effort: "1 hour",
      outcome: "The pattern of what your market actually asks for, which is narrower than any curriculum.",
    },
    {
      title: "Tally the skills, not the tools",
      body: "Count how often each skill appears. Elicitation, modelling, stakeholder work, data, communication. Note the local vocabulary each industry uses for them.",
      effort: "1 hour",
      outcome: "A ranked list of what to be able to evidence.",
    },
    {
      title: "Write one concrete story per skill",
      body: "Situation, what you did, what changed. Numbers where you have them. These are the answers to every behavioural question you will be asked.",
      effort: "Half a day",
      outcome: "Interview material that is specific rather than general.",
    },
    {
      title: "Prepare the three diagnostic questions",
      body: "Who does this role report to. Describe the last piece of BA work end to end. What decisions is the BA expected to influence.",
      effort: "15 minutes",
      outcome: "A reliable way to tell the two versions of this job apart.",
    },
    {
      title: "Analyse something where you are now",
      body: "Map a broken process at your current job, find the cause, propose the change, and record what happened. This works whether or not you have the title.",
      effort: "Weeks, part-time",
      outcome: "A portfolio piece, which outperforms any certificate in an interview.",
    },
  ],

  mistakes: [
    {
      mistake: "Reading the bullet list and ignoring the verbs",
      why: "The bullets are often copied. The verbs and the reporting line are where the real design of the role shows through.",
      fix: "Scan for gather and document versus define and recommend, then ask who it reports to.",
    },
    {
      mistake: "Ruling yourself out on tools",
      why: "Named software is the most learnable item on any spec and is usually listed by someone describing the current stack rather than a requirement.",
      fix: "Apply if you have the five core skills. Address tooling with evidence that you pick things up.",
    },
    {
      mistake: "Answering behavioural questions in general terms",
      why: "'I always make sure to engage stakeholders early' tells an interviewer nothing and sounds rehearsed. It is also indistinguishable from someone who has never done it.",
      fix: "One situation, what you did, what changed, with a number if you have one.",
    },
    {
      mistake: "Not asking about the last real piece of work",
      why: "You end up accepting a description of the role rather than evidence of it, and those diverge more often than people expect.",
      fix: "Ask for a specific recent example and listen for whether the BA influenced anything.",
    },
  ],

  bestPractices: [
    "Read the verbs, not the bullet list.",
    "Ask who the role reports to before anything else.",
    "Treat named tools as learnable and business outcomes as the signal.",
    "Prepare one concrete story per core skill, with numbers.",
    "Ask for the last real piece of BA work, described end to end.",
    "Distinguish BA from BSA by whether data models and interfaces appear.",
    "Build a portfolio piece where you already work rather than waiting for the title.",
  ],

  faqs: [
    {
      q: "Should I get a certification?",
      a: "If your market screens on them, yes, purely to get past the filter. They will not carry an interview, where every question worth answering starts with 'tell me about a time'.",
    },
    {
      q: "How much technical depth do I need?",
      a: "Enough to read a data model, understand roughly why something is hard, and not be intimidated in a technical conversation. For BSA roles, more. Writing production code is not part of it.",
    },
    {
      q: "Is domain experience essential?",
      a: "In regulated fields, largely yes. Elsewhere it is often shorthand for not wanting to explain things twice, which you can answer with evidence that you learn a domain quickly.",
    },
    {
      q: "What if the spec is clearly two jobs?",
      a: "Common, and worth raising in interview. Ask which half is urgent. The answer tells you what you will actually be doing for the first year.",
    },
    {
      q: "How do I move from BA to BSA or back?",
      a: "Deliberately take work at the boundary. A BA who specifies one integration properly, or a BSA who maps one end-to-end process, has the evidence for the move.",
    },
  ],

  tools: [
    { name: "A spec corpus", what: "Ten real adverts in one document. The fastest read on what your market wants.", cost: "Free" },
    { name: "A story bank", what: "One concrete example per core skill, with outcomes. Interview preparation that survives follow-up questions.", cost: "Free" },
    { name: "Three diagnostic questions", what: "Reporting line, last real piece of work, decisions influenced. Tells the two versions of the job apart.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "what-a-business-analyst-actually-does", anchor: "what the job really involves", context: "Before applying" },
    { slug: "learning-a-business-fast", anchor: "the first thirty days once you are in", context: "After the offer" },
  ],

  relatedGuides: ["what-a-business-analyst-actually-does", "learning-a-business-fast", "finding-your-first-clients"],

  conclusion: [
    "Pull ten real adverts in your target market and tally the skills rather than the tools. An hour of that will redirect your preparation more usefully than any course syllabus.",
  ],
};

export default guide;
