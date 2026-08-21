import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "building-a-business-analyst-portfolio",
  seoTitle: "Building a Business Analyst Portfolio Without the Title",
  metaDescription:
    "How to produce evidence of real analysis from wherever you are now: choosing a problem, doing the work properly, and writing it up so it survives questioning.",
  title: "Building a Business Analyst Portfolio",
  keywords: [
    "business analyst portfolio",
    "ba experience without a job",
    "career change business analyst",
    "ba case study",
    "getting a ba role",
    "analysis portfolio examples",
  ],
  category: "career-development",
  level: "Beginner",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "The circular problem in this profession is well known: you cannot get a Business Analyst role without experience, and you cannot get experience without the role. It is a real constraint and it is more porous than it looks, because what employers screen for is not the job title. It is evidence that you can find a real problem, work out what is causing it, and change something.",
    "That evidence can be produced from almost any job. Every organisation contains broken processes, and almost nobody is analysing them. If you map one properly, find the cause, propose a change and record what happened, you have done the work. Whether your job title said analyst at the time is a detail you can explain in a sentence.",
    "This guide is how to build that evidence deliberately. Choosing a problem worth the effort, doing the analysis to a standard that survives questioning, writing it up in a form a hiring manager can read in four minutes, and handling the honest limitations, including the case where you were not allowed to implement anything.",
  ],

  whyItMatters: [
    "Behavioural interviews are the entire assessment in this profession, and every question worth answering starts with tell me about a time. Candidates without concrete examples answer in generalities, which sounds rehearsed and is indistinguishable from somebody who has never done it.",
    "A portfolio piece also changes the shape of the conversation. Instead of being asked to demonstrate potential, you are discussing a piece of work you understand better than the interviewer does. That is a far stronger position and it tends to produce a better assessment of your actual ability.",
    "And the process of building it teaches the job. You will discover that the problem you picked was a symptom, that the data does not exist, that the stakeholder will not give you an hour. Those are the real difficulties of the role, and having met them once is worth more than any certification.",
  ],

  coreConcepts: [
    {
      term: "Analyse where you already are",
      explain:
        "Whatever job you have now contains a process that frustrates people. Nobody has mapped it, nobody has counted it, and nobody has traced the cause. That is a portfolio piece sitting in front of you.",
      detail:
        "This beats invented case studies comprehensively. A hiring manager can tell the difference within two questions, because real work has awkward details and constructed exercises do not.",
    },
    {
      term: "Pick a problem with countable pain",
      explain:
        "Something that happens repeatedly, that somebody visibly minds about, and that leaves a trace you can count: tickets, emails, rework, waiting, errors.",
      detail:
        "Avoid anything one-off, anything strategic and anything where the answer depends on information you cannot get. The best first piece is small, frequent and irritating, because you can size it and you can change it.",
    },
    {
      term: "Do the real sequence, not a tidied one",
      explain:
        "Observe the work, map the current state, size the problem, find the cause, generate options, recommend one, and measure what happened.",
      detail:
        "The sequence is the point. A portfolio piece that jumps from a complaint to a solution demonstrates exactly the instinct employers are screening against, however good the solution turns out to be.",
    },
    {
      term: "Get a number, however crude",
      explain:
        "Frequency times duration is enough. Twenty times a week at ten minutes is a figure you can defend, and it converts an anecdote into something comparable.",
      detail:
        "Where no data exists, two weeks of tally marks by the people doing the task is a completely legitimate method and it demonstrates something valuable: that you know how to measure when nothing is measured.",
    },
    {
      term: "Show the cause, not just the fix",
      explain:
        "The most interviewable part of any portfolio piece is the moment you established what was actually causing the problem, particularly when it was not what people assumed.",
      detail:
        "Write down what you first thought, what the evidence showed, and how you changed your mind. Interviewers respond to that far more strongly than to a clean narrative where the first hypothesis was correct.",
    },
    {
      term: "Ask permission, and frame it as help",
      explain:
        "You are proposing to spend some of your own time understanding something and suggesting an improvement. Framed that way, most managers say yes.",
      detail:
        "Framed as building a portfolio, some will say no. Both statements are true and the first is the one that gets you access, which you will need for observation and data.",
    },
    {
      term: "Implementation is a bonus, not the requirement",
      explain:
        "Plenty of good analysis ends with a recommendation that was not taken. That is a legitimate portfolio piece if you can say what you recommended, why, and what happened instead.",
      detail:
        "What matters is the reasoning. A candidate who can explain why their recommendation was declined and what they would do differently is demonstrating judgement, which is the thing being assessed.",
    },
    {
      term: "One page, and it must stand alone",
      explain:
        "Situation, what you found, what you did, what changed, and what you would do differently. Artefacts attached separately for anyone who wants them.",
      detail:
        "Hiring managers read fast. A long document does not get read and a link to a folder does not get opened. One page that answers the obvious questions is what travels.",
    },
    {
      term: "Include the artefacts, redacted",
      explain:
        "The process map, the sizing calculation, the options table. Redact names, customers and anything commercially sensitive, and say that you have.",
      detail:
        "The artefacts are the evidence that you did the work rather than describing it. Two or three is enough, and a clearly redacted real document is more persuasive than an unredacted invented one.",
    },
    {
      term: "Write down what you would do differently",
      explain:
        "Every piece has something. You interviewed managers before operators, you sized it too late, you did not check who else was affected.",
      detail:
        "This is the section that most distinguishes a serious candidate. Everybody can describe a success. Being able to critique your own method is what indicates you will improve rather than repeat.",
    },
    {
      term: "Three pieces is a portfolio, one is a story",
      explain:
        "Aim for a process improvement, something involving data, and something involving conflicting stakeholders. Together they cover most of what a spec asks for.",
      detail:
        "They do not have to be large. Three small pieces demonstrating different skills is a much stronger position than one substantial piece demonstrating one.",
    },
    {
      term: "Never overstate your role",
      explain:
        "If you contributed to something, say what you did specifically. Interviewers probe, and the probing is where an inflated claim collapses.",
      detail:
        "I mapped the process and found the cause, the change was implemented by the operations team is stronger than a vague we. Precision about your own contribution reads as confidence rather than as modesty.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "A portfolio piece built from a customer service job.",
      walkthrough:
        "Somebody working in a support team notices that a category of enquiry recurs constantly. Over two weeks they tally the enquiries by reason. One reason dominates: customers cannot find their order reference. Tracing it back, the reference is displayed in a confirmation email in a position most customers do not read, and the format differs from the one requested on the contact page.",
      result:
        "The recommendation was a change to the email template and the contact page wording, requiring no development work. The portfolio piece contained a tally sheet, a simple before-and-after count, and a paragraph on what they would do differently, which was to check whether other teams saw the same pattern. That is a complete analysis and it came from a job with no analyst in the title.",
    },
    {
      kind: "illustration",
      scenario: "The recommendation that was declined.",
      walkthrough:
        "An analyst-in-waiting maps an approval process, sizes the delay it causes, and recommends removing one of two approval steps on the basis that the second approver has rejected nothing in the period examined. The recommendation is declined, because the control was introduced after an audit finding and the finance director is not willing to remove it before the next audit cycle.",
      result:
        "Written up honestly, this is a strong portfolio piece. It demonstrates sizing, root cause work and an understanding of why an organisationally rational decision can override an analytically clean one. In an interview, the answer to what happened next is more revealing about a candidate than any success story, and this one gives them something real to say.",
    },
    {
      kind: "illustration",
      scenario: "The invented case study that did not survive two questions.",
      walkthrough:
        "A candidate presents a detailed case study of an e-commerce checkout redesign, complete with personas and wireframes, produced as part of a course. The interviewer asks how many customers abandoned at the step in question, and where that figure came from. Then asks who objected to the change and why.",
      result:
        "Neither question had an answer, because there had been no real data and no real stakeholders. The work was competent and it was an exercise. A much smaller piece of genuine analysis from the candidate's actual job would have answered both questions in a sentence, which is why real and small beats impressive and constructed every time.",
    },
  ],

  learningPath: [
    {
      title: "Find a candidate problem where you are",
      body: "Something frequent, irritating and countable. Ask colleagues what they would change if they could change one thing with no approval needed, and listen for the answers that cluster.",
      effort: "A few conversations",
      outcome: "Two or three candidates, at least one of which is small enough to complete.",
    },
    {
      title: "Ask permission, framed as help",
      body: "Tell your manager you want to understand a process properly and suggest an improvement. Ask for access to observe and, if possible, to the data.",
      effort: "One conversation",
      outcome: "Access, and a manager who now has some investment in the outcome.",
    },
    {
      title: "Observe and map the current state",
      body: "Watch the work rather than only asking about it. Follow one real case end to end. Draw a swimlane map on one page and get it corrected by the people who do the work.",
      effort: "1-2 weeks part-time",
      outcome: "Your first artefact, and usually a finding nobody had mentioned.",
    },
    {
      title: "Size it",
      body: "Frequency times duration, or volume times error rate. Where nothing is recorded, run a two-week tally with the team.",
      effort: "2 weeks elapsed",
      outcome: "A number, which is what turns the whole thing from an opinion into analysis.",
    },
    {
      title: "Find the cause and record how you changed your mind",
      body: "Ask when it started, compare cases where it happens against cases where it does not, and ask why at least twice. Write down your first hypothesis and what the evidence did to it.",
      effort: "1 week part-time",
      outcome: "The most interviewable part of the whole piece.",
    },
    {
      title: "Generate options and recommend one",
      body: "At least three, including do nothing and one that involves no technology. Say what each would cost roughly and why you recommend the one you do.",
      effort: "2-3 days",
      outcome: "Evidence that you can choose rather than only investigate.",
    },
    {
      title: "Measure what happened, or record why you could not",
      body: "If the change was made, measure against your baseline. If it was not, record what was decided instead and why.",
      effort: "Weeks elapsed",
      outcome: "A closed loop, which very few candidates have.",
    },
    {
      title: "Write the one page and redact the artefacts",
      body: "Situation, findings, actions, result, what you would do differently. Two or three artefacts attached, names and commercial detail removed.",
      effort: "Half a day",
      outcome: "Something a hiring manager reads in four minutes and asks you about.",
    },
  ],

  exercises: [
    {
      title: "The one-thing question",
      brief:
        "Ask five colleagues in different roles what they would change first if they could change one thing about how work gets done, with no approval needed. Write the answers down verbatim and look for clusters.",
      success:
        "At least two people name versions of the same thing, which is a candidate problem with structural rather than personal causes.",
      time: "1 hour",
    },
    {
      title: "Two weeks of tallies",
      brief:
        "Pick any recurring irritation in your workplace and set up a simple tally: what happened, how long it took, and why. Ask one or two colleagues to help. Run it for two weeks.",
      success:
        "You have a size for something that was previously anecdotal, and you have learned how to measure when nothing is measured.",
      time: "2 weeks elapsed, minutes a day",
    },
    {
      title: "Write the one-pager for something you already did",
      brief:
        "Take any improvement you have been involved in at work, however small, and write it as situation, findings, actions, result, and what you would do differently. Give it to a friend and ask what they would ask you.",
      success:
        "Their questions expose the gaps, and you can answer them or note them honestly as limitations.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Building the portfolio from course exercises",
      why: "Constructed case studies have no real data and no real stakeholders, and both gaps appear within two interview questions.",
      fix: "Analyse something real where you already work, however small. Real and modest beats impressive and invented.",
    },
    {
      mistake: "Picking a problem that is too large",
      why: "Anything strategic or organisation-wide cannot be completed, sized or measured by one person without authority, so it never becomes a finished piece.",
      fix: "Choose something frequent, small and countable. A completed small piece is worth more than an abandoned large one.",
    },
    {
      mistake: "Jumping from complaint to solution",
      why: "It demonstrates exactly the instinct employers screen against, and the write-up has nothing in the middle where the analysis should be.",
      fix: "Do the full sequence and show it: observation, map, size, cause, options, recommendation, result.",
    },
    {
      mistake: "No number anywhere",
      why: "Without sizing you have an opinion. It also means you cannot demonstrate improvement, which removes the strongest part of the story.",
      fix: "Frequency times duration is enough. Two weeks of tallies is a legitimate and impressive method when nothing is recorded.",
    },
    {
      mistake: "Presenting only the successful version",
      why: "A clean narrative where the first hypothesis was right reads as either lucky or tidied, and interviewers probe for the messy part.",
      fix: "Record what you first believed, what the evidence did to it, and what you would do differently.",
    },
    {
      mistake: "Overstating your role",
      why: "Interviewers probe, and vague collective language collapses under one follow-up question, taking the rest of your credibility with it.",
      fix: "Say precisely what you did and precisely what others did. Precision reads as confidence.",
    },
    {
      mistake: "A long document or a link to a folder",
      why: "Neither gets read. Hiring managers assess quickly and a portfolio that requires effort to access does not get accessed.",
      fix: "One page that stands alone, with two or three redacted artefacts attached.",
    },
    {
      mistake: "Sharing anything commercially sensitive",
      why: "It is a serious professional error, and an interviewer who sees your current employer's data will wonder what you would do with theirs.",
      fix: "Redact names, customers, volumes where sensitive, and say clearly that you have. Describe the shape where you cannot show the detail.",
    },
  ],

  bestPractices: [
    "Analyse something real where you already work.",
    "Choose a problem that is frequent, small and countable.",
    "Ask permission, framed as offering to help.",
    "Observe the work rather than only asking about it.",
    "Follow one real case end to end.",
    "Size it, even crudely, with frequency and duration.",
    "Record your first hypothesis and how the evidence changed it.",
    "Generate at least three options including do nothing.",
    "Measure the result, or record honestly why you could not.",
    "Write one page that stands alone.",
    "Attach two or three redacted artefacts.",
    "Include what you would do differently.",
    "Be precise about what you did and what others did.",
    "Aim for three pieces covering process, data and stakeholder conflict.",
  ],

  proTips: [
    "Start the tally before you have permission for anything else. Counting something for two weeks requires nobody's approval, it produces the number that makes every subsequent conversation easier, and turning up to your manager with a measurement rather than a request changes how the request is received entirely.",
    "Keep a running note of every awkward thing that happened during the work: the stakeholder who cancelled twice, the data that turned out not to exist, the moment you realised you had mapped the wrong process. Those become your answers to the behavioural questions about difficulty and setbacks, which are the ones candidates most often have nothing prepared for.",
    "Show the piece to somebody who does that job and ask whether it is accurate before you show it to anybody hiring. Two things happen: you find an error, and you get a person who can vouch for the work if anybody asks. Both are worth more than the hour it costs.",
    "Do not wait for a big enough problem. The instinct is to hold out for something impressive, and the result is usually nothing at all. A small piece with a real number, a real cause and an honest limitation section outperforms a large piece you never finished, and you can always do another one.",
  ],

  businessApplications: [
    "Moving into a BA role from an operational job in the same organisation, where internal evidence carries most weight.",
    "Career changers who need concrete examples to answer behavioural questions credibly.",
    "Junior analysts building evidence for a first promotion or a move to a more senior role.",
    "Contractors and consultants who need short, redactable examples of prior work.",
    "Internal secondments, where a completed piece is often what earns the placement.",
    "Anyone in an organisation with no BA function who wants to demonstrate the value of one.",
  ],

  checklist: [
    "Problem chosen: frequent, countable, and irritating to somebody.",
    "Permission obtained, framed as offering to help.",
    "Real work observed, not only described.",
    "One real case followed end to end.",
    "Current state mapped on one page and corrected by the people who do the work.",
    "Problem sized with a defensible number.",
    "First hypothesis recorded, along with what the evidence did to it.",
    "Cause established with evidence rather than assumption.",
    "Three or more options generated, including do nothing.",
    "Recommendation made with reasoning.",
    "Result measured, or the decision and reason recorded.",
    "One-page write-up that stands alone.",
    "Two or three artefacts attached and redacted.",
    "What I would do differently section written.",
  ],

  faqs: [
    {
      q: "Can I build a portfolio if my job has nothing to do with analysis?",
      a: "Yes, and those pieces are frequently the most convincing. Every job sits inside processes that nobody has examined. Mapping one, sizing it and proposing a change is the work, regardless of what your title says.",
    },
    {
      q: "What if my employer will not let me implement anything?",
      a: "Complete the analysis and record the recommendation and what happened instead. Being able to explain why a sound recommendation was declined demonstrates judgement, which is what is actually being assessed.",
    },
    {
      q: "How do I handle confidentiality?",
      a: "Redact names, customers and sensitive figures, and say clearly that you have. Describe the shape of a number rather than quoting it where necessary. An interviewer who sees your current employer's real data will draw conclusions about you.",
    },
    {
      q: "Are certifications a substitute?",
      a: "They get you past automated filters where a market screens on them. They do not answer a behavioural question, and every interview question worth answering starts with tell me about a time. Get one if your market requires it and spend the rest of your effort here.",
    },
    {
      q: "How big should a portfolio piece be?",
      a: "Small enough to finish. Two weeks of tallies, a one-page map, a cause and a recommendation is a complete piece. Three small finished pieces beat one large unfinished one comprehensively.",
    },
    {
      q: "Should I put this on a website or a CV?",
      a: "Keep the one-pagers ready to send and reference them briefly on the CV. A public site is optional. What matters is having something concrete to hand when somebody asks you to describe a piece of analysis you have done.",
    },
  ],

  tools: [
    { name: "A tally sheet", what: "Two weeks of counting, requiring nobody's approval. The number that makes every subsequent conversation easier.", cost: "Free" },
    { name: "A one-page swimlane map", what: "Drawn after observation, corrected by the people who do the work. Your first artefact.", cost: "Free" },
    { name: "A one-page write-up template", what: "Situation, findings, actions, result, what I would do differently. The thing that actually gets read.", cost: "Free" },
    { name: "A difficulties log", what: "Every awkward moment during the work. Becomes your answers to the behavioural questions nobody prepares for.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "reading-a-business-analyst-job-spec", anchor: "what employers are screening for", context: "Targeting" },
    { slug: "business-analyst-interview-preparation", anchor: "turning these pieces into interview answers", context: "Next step" },
    { slug: "where-inefficiency-hides", anchor: "finding a problem worth analysing", context: "Choosing a subject" },
  ],

  relatedGuides: ["reading-a-business-analyst-job-spec", "business-analyst-interview-preparation", "where-inefficiency-hides"],

  conclusion: [
    "Pick the smallest recurring irritation at your current job and start counting it this week: what happened, how long it took, and why. Two weeks of tallies requires nobody's permission and gives you the number that every part of a portfolio piece is built on.",
  ],
};

export default guide;
