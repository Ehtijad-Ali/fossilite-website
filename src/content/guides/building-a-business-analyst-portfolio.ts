import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "building-a-business-analyst-portfolio",
  seoTitle: "Getting BA Experience Before Anybody Gives You the Title",
  metaDescription:
    "Every job contains a broken process nobody has looked at. How to pick one, do the work properly, and write it up so it survives being questioned.",
  title: "Getting Experience Before You Have the Title",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "The circular problem is well known: you cannot get a Business Analyst job without experience, and you cannot get experience without the job. It is a real constraint and it is more porous than it looks, because what employers are actually looking for is not the job title. It is evidence that you can find a real problem, work out what is causing it, and change something.",
    "You can produce that evidence from almost any job. Every business has broken processes and almost nobody is looking at them. Map one properly, find the cause, propose a change and record what happened, and you have done the work. Whether your title said analyst at the time is a detail you can explain in a sentence.",
    "This guide is how to build that on purpose. Picking a problem worth the effort, doing the work to a standard that survives questions, writing it up so a hiring manager can read it in four minutes, and being honest about the limits, including the case where you were not allowed to change anything.",
  ],

  whyItMatters: [
    "Interviews for this job are almost entirely about examples, and every question worth answering starts with tell me about a time. People without concrete examples answer in generalities, which sounds rehearsed and is indistinguishable from somebody who has never done it.",
    "Having one also changes the shape of the conversation. Instead of being asked to demonstrate potential, you are discussing a piece of work you understand better than the interviewer does. That is a much stronger position and it usually produces a better assessment of what you can actually do.",
    "And building it teaches you the job. You will discover that the problem you picked was a symptom, that the data does not exist, that the person you needed will not give you an hour. Those are the real difficulties of this work, and having met them once is worth more than any qualification.",
  ],

  coreConcepts: [
    {
      term: "Analyse something where you already are",
      explain:
        "Whatever job you have now contains a process that frustrates people. Nobody has mapped it, nobody has counted it, and nobody has worked out the cause. That is a piece of work sitting in front of you.",
      detail:
        "This beats made-up case studies completely. A hiring manager can tell the difference within two questions, because real work has awkward details and exercises do not.",
    },
    {
      term: "Pick something that happens often and can be counted",
      explain:
        "Something that happens repeatedly, that somebody visibly minds about, and that leaves a trace you can count: tickets, emails, things being redone, waiting, mistakes.",
      detail:
        "Avoid anything one-off, anything strategic and anything where the answer depends on information you cannot get. The best first piece is small, frequent and irritating, because you can put a number on it and you can change it.",
    },
    {
      term: "Do the real sequence, not a tidied-up one",
      explain:
        "Watch the work, draw how it happens now, put a number on the problem, find the cause, come up with options, recommend one, and measure what happened.",
      detail:
        "The sequence is the point. Something that jumps from a complaint straight to a solution demonstrates exactly the instinct employers are screening against, however good the solution turns out to be.",
    },
    {
      term: "Get a number, however rough",
      explain:
        "How often times how long is enough. Twenty times a week at ten minutes is a figure you can defend, and it turns a story into something comparable.",
      detail:
        "Where no data exists, two weeks of tally marks by the people doing the work is a completely legitimate method and it demonstrates something valuable: that you know how to measure when nothing is being measured.",
    },
    {
      term: "Show the cause, not just the fix",
      explain:
        "The most interesting part of any of these in an interview is the moment you worked out what was actually causing the problem, particularly when it was not what people assumed.",
      detail:
        "Write down what you first thought, what the evidence showed, and how you changed your mind. Interviewers respond to that far more strongly than to a clean story where the first guess was right.",
    },
    {
      term: "Ask permission, framed as offering to help",
      explain:
        "You are proposing to spend some of your own time understanding something and suggesting an improvement. Put that way, most managers say yes.",
      detail:
        "Put as building a portfolio, some will say no. Both are true and the first is the one that gets you the access you will need for watching and for data.",
    },
    {
      term: "Getting it implemented is a bonus, not the requirement",
      explain:
        "Plenty of good work ends with a recommendation nobody took. That is still a legitimate piece if you can say what you recommended, why, and what happened instead.",
      detail:
        "What matters is the reasoning. Somebody who can explain why their recommendation was turned down and what they would do differently is demonstrating judgement, which is the thing actually being assessed.",
    },
    {
      term: "One page, and it has to stand on its own",
      explain:
        "The situation, what you found, what you did, what changed, and what you would do differently. Anything you produced attached separately for anybody who wants it.",
      detail:
        "Hiring managers read fast. A long document does not get read and a link to a folder does not get opened. One page answering the obvious questions is what travels.",
    },
    {
      term: "Include what you produced, with the sensitive bits removed",
      explain:
        "The process drawing, the calculation, the options table. Take out names, customers and anything commercially sensitive, and say that you have.",
      detail:
        "Those are the evidence that you did the work rather than describing it. Two or three is enough, and a clearly redacted real document is more persuasive than an unredacted invented one.",
    },
    {
      term: "Write down what you would do differently",
      explain:
        "Every piece has something. You talked to managers before the people doing the work, you put a number on it too late, you did not check who else was affected.",
      detail:
        "This is the section that most distinguishes a serious candidate. Everybody can describe a success. Being able to criticise your own method is what shows you will improve rather than repeat.",
    },
    {
      term: "Three pieces is a portfolio, one is a story",
      explain:
        "Aim for one about a process, one involving data, and one involving people who disagreed. Together they cover most of what an advert asks for.",
      detail:
        "They do not have to be big. Three small ones showing different skills is a much stronger position than one substantial one showing a single skill.",
    },
    {
      term: "Never overstate what you did",
      explain:
        "If you contributed to something, say exactly what you did. Interviewers probe, and probing is where an inflated claim falls apart.",
      detail:
        "I mapped the process and found the cause, the change was made by the operations team is stronger than a vague we. Being precise about your own part reads as confidence rather than modesty.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "A piece of work built from a customer service job.",
      walkthrough:
        "The problem: somebody working in a support team kept getting the same kind of enquiry over and over. What was happening: over two weeks they kept a tally of enquiries by reason. One reason dominated, which was that customers could not find their order reference. Tracing it back, the reference appeared in a confirmation email in a position most customers do not read, and in a different format from the one requested on the contact page.",
      result:
        "What changed: they recommended a change to the email template and the contact page wording, needing no development work at all. The write-up contained a tally sheet, a simple before-and-after count, and a paragraph on what they would do differently, which was to check whether other teams saw the same pattern. That is a complete piece of analysis and it came from a job with no analyst in the title.",
    },
    {
      kind: "illustration",
      scenario: "The recommendation that was turned down.",
      walkthrough:
        "The problem: an approval process was slowing things down and somebody wanted to fix it. What was happening: they mapped it, put a number on the delay, and recommended removing one of two approval steps on the grounds that the second approver had not refused anything in the period examined. The recommendation was turned down, because the check had been introduced after an audit finding and the finance director was not willing to remove it before the next audit cycle.",
      result:
        "What changed: written up honestly, this is a strong piece. It shows sizing, cause work, and an understanding of why an organisationally sensible decision can beat an analytically clean one. In an interview, the answer to what happened next tells somebody more about a candidate than any success story, and this one gives them something real to say.",
    },
    {
      kind: "illustration",
      scenario: "The made-up case study that lasted two questions.",
      walkthrough:
        "The problem: a candidate presented a detailed case study of a checkout redesign, complete with personas and screen designs, produced as part of a course. What was happening: the interviewer asked how many customers gave up at the step in question, and where that figure came from. Then asked who objected to the change and why.",
      result:
        "What changed: neither question had an answer, because there had been no real data and no real people. The work was competent and it was an exercise. A much smaller piece of genuine analysis from the candidate's actual job would have answered both in a sentence, which is why real and small beats impressive and invented every time.",
    },
  ],

  learningPath: [
    {
      title: "Find something worth looking at where you are",
      body: "Something frequent, irritating and countable. Ask colleagues what they would change if they could change one thing with nobody's permission, and listen for the answers that repeat.",
      effort: "A few conversations",
      outcome: "Two or three candidates, at least one small enough to finish.",
    },
    {
      title: "Ask permission, framed as helping",
      body: "Tell your manager you want to understand a process properly and suggest an improvement. Ask to be able to watch it and, if possible, to see the data.",
      effort: "One conversation",
      outcome: "Access, and a manager who now has some stake in the outcome.",
    },
    {
      title: "Watch it and draw how it happens now",
      body: "Watch rather than only asking. Follow one real case from beginning to end. Draw it on one page with a row per role, and get it corrected by the people who do the work.",
      effort: "1-2 weeks part-time",
      outcome: "Your first artefact, and usually a finding nobody had mentioned.",
    },
    {
      title: "Put a number on it",
      body: "How often times how long, or how many times the error rate. Where nothing is recorded, run a two-week tally with the team.",
      effort: "2 weeks",
      outcome: "A number, which is what turns the whole thing from an opinion into analysis.",
    },
    {
      title: "Find the cause and record how you changed your mind",
      body: "Ask when it started, compare cases where it happens against cases where it does not, and ask why at least twice. Write down what you first thought and what the evidence did to it.",
      effort: "1 week part-time",
      outcome: "The most interesting part of the whole thing in an interview.",
    },
    {
      title: "Come up with options and recommend one",
      body: "At least three, including doing nothing and one that involves no technology. Say roughly what each would cost and why you recommend the one you do.",
      effort: "2-3 days",
      outcome: "Evidence that you can choose rather than only investigate.",
    },
    {
      title: "Measure what happened, or record why you could not",
      body: "If the change was made, measure it against your starting point. If it was not, record what was decided instead and why.",
      effort: "Weeks",
      outcome: "A closed loop, which very few candidates have.",
    },
    {
      title: "Write the one page and remove the sensitive bits",
      body: "Situation, findings, what you did, what changed, what you would do differently. Two or three things attached, with names and commercial detail taken out.",
      effort: "Half a day",
      outcome: "Something a hiring manager reads in four minutes and then asks you about.",
    },
  ],

  exercises: [
    {
      title: "Ask five people the one-thing question",
      brief:
        "Ask five colleagues in different roles what they would change first about how work gets done, if they needed nobody's permission. Write the answers down word for word and look for repeats.",
      success:
        "At least two people name versions of the same thing, which is a candidate with a structural cause rather than a personal one.",
      time: "1 hour",
    },
    {
      title: "Two weeks of tallies",
      brief:
        "Pick any recurring annoyance in your workplace and set up a simple tally: what happened, how long it took, why. Ask one or two colleagues to help. Run it for two weeks.",
      success:
        "You have a size for something that was previously just a story, and you have learned how to measure when nothing is being measured.",
      time: "2 weeks, minutes a day",
    },
    {
      title: "Write up something you already did",
      brief:
        "Take any improvement you have been part of at work, however small, and write it as situation, findings, what you did, what changed, and what you would do differently. Give it to a friend and ask what they would ask you about it.",
      success:
        "Their questions expose the gaps, and you can either answer them or note them honestly as limits.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Building it from course exercises",
      why: "Made-up case studies have no real data and no real people, and both gaps show up within two interview questions.",
      fix: "Analyse something real where you already work, however small. Real and modest beats impressive and invented.",
    },
    {
      mistake: "Picking something too big",
      why: "Anything strategic or business-wide cannot be finished, sized or measured by one person with no authority, so it never becomes a completed piece.",
      fix: "Choose something frequent, small and countable. A finished small piece is worth more than an abandoned large one.",
    },
    {
      mistake: "Jumping from complaint to solution",
      why: "It demonstrates exactly the instinct employers screen against, and the write-up has nothing in the middle where the analysis should be.",
      fix: "Do the full sequence and show it: watching, drawing, sizing, cause, options, recommendation, result.",
    },
    {
      mistake: "No number anywhere",
      why: "Without one you have an opinion. It also means you cannot show an improvement, which removes the strongest part of the story.",
      fix: "How often times how long is enough. Two weeks of tallies is a legitimate and impressive method when nothing is recorded.",
    },
    {
      mistake: "Only telling the version that worked",
      why: "A clean story where the first guess was right reads as either lucky or tidied up, and interviewers probe for the messy bit.",
      fix: "Record what you first believed, what the evidence did to it, and what you would do differently.",
    },
    {
      mistake: "Overstating your part",
      why: "Interviewers probe, and vague collective language falls apart under one follow-up question, taking the rest of your credibility with it.",
      fix: "Say precisely what you did and precisely what others did. Precision reads as confidence.",
    },
    {
      mistake: "A long document or a link to a folder",
      why: "Neither gets opened. Hiring managers assess quickly and something that takes effort to get at does not get got at.",
      fix: "One page that stands on its own, with two or three things attached with the sensitive parts removed.",
    },
    {
      mistake: "Sharing anything commercially sensitive",
      why: "It is a serious professional mistake, and an interviewer who sees your current employer's data will wonder what you would do with theirs.",
      fix: "Take out names, customers and sensitive figures, and say clearly that you have. Describe the shape where you cannot show the detail.",
    },
  ],

  bestPractices: [
    "Analyse something real where you already work.",
    "Choose something frequent, small and countable.",
    "Ask permission, framed as offering to help.",
    "Watch the work rather than only asking about it.",
    "Follow one real case from beginning to end.",
    "Put a number on it, even roughly.",
    "Record what you first thought and how the evidence changed it.",
    "Come up with at least three options including doing nothing.",
    "Measure the result, or record honestly why you could not.",
    "Write one page that stands on its own.",
    "Attach two or three things with the sensitive bits removed.",
    "Include what you would do differently.",
    "Be precise about what you did and what others did.",
    "Aim for three pieces covering process, data and people disagreeing.",
  ],

  proTips: [
    "Start the tally before you have permission for anything else. Counting something for two weeks needs nobody's approval, it produces the number that makes every later conversation easier, and turning up to your manager with a measurement rather than a request changes how the request lands.",
    "Keep a running note of every awkward thing that happened: the person who cancelled twice, the data that turned out not to exist, the moment you realised you had mapped the wrong process. Those become your answers to the behavioural questions about difficulty and setbacks, which are the ones candidates most often have nothing ready for.",
    "Show it to somebody who does that job and ask whether it is accurate before you show it to anybody hiring. Two things happen: you find a mistake, and you gain somebody who can vouch for the work if anybody asks. Both are worth more than the hour it costs.",
    "Do not wait for a big enough problem. The instinct is to hold out for something impressive, and the result is usually nothing at all. A small piece with a real number, a real cause and an honest limitations section beats a large one you never finished, and you can always do another.",
  ],

  businessApplications: [
    "Moving into a BA job from an operational role in the same business, where internal evidence carries most weight.",
    "Career changers who need concrete examples to answer behavioural questions credibly.",
    "Junior analysts building evidence for a first promotion or a move to something more senior.",
    "Contractors and consultants who need short, shareable examples of previous work.",
    "Internal secondments, where a completed piece is often what earns the placement.",
    "Anybody in a business with no BA function who wants to demonstrate the value of one.",
  ],

  checklist: [
    "Problem chosen: frequent, countable, and irritating to somebody.",
    "Permission obtained, framed as offering to help.",
    "Real work watched, not only described.",
    "One real case followed from beginning to end.",
    "How it works now drawn on one page and corrected by the people who do it.",
    "A defensible number attached to the problem.",
    "First guess recorded, along with what the evidence did to it.",
    "Cause established with evidence rather than assumption.",
    "Three or more options, including doing nothing.",
    "Recommendation made with reasoning.",
    "Result measured, or the decision and reason recorded.",
    "One-page write-up that stands on its own.",
    "Two or three things attached, with sensitive parts removed.",
    "A what I would do differently section written.",
  ],

  faqs: [
    {
      q: "Can I do this if my job has nothing to do with analysis?",
      a: "Yes, and those are frequently the most convincing. Every job sits inside processes nobody has examined. Mapping one, sizing it and proposing a change is the work, whatever your title says.",
    },
    {
      q: "What if my employer will not let me change anything?",
      a: "Finish the analysis and record the recommendation and what happened instead. Being able to explain why a sound recommendation was turned down shows judgement, which is what is actually being assessed.",
    },
    {
      q: "How do I handle confidentiality?",
      a: "Take out names, customers and sensitive figures, and say clearly that you have. Describe the shape of a number rather than quoting it where necessary. An interviewer who sees your current employer's real data will draw conclusions about you.",
    },
    {
      q: "Are certifications a substitute?",
      a: "They get you past automated filters where a market screens on them. They do not answer a behavioural question, and every interview question worth answering starts with tell me about a time. Get one if your market requires it and spend the rest of your effort here.",
    },
    {
      q: "How big should one of these be?",
      a: "Small enough to finish. Two weeks of tallies, a one-page drawing, a cause and a recommendation is a complete piece. Three small finished ones beat one large unfinished one comprehensively.",
    },
    {
      q: "Should I put this on a website or a CV?",
      a: "Keep the one-pagers ready to send and mention them briefly on the CV. A public site is optional. What matters is having something concrete to hand when somebody asks you to describe a piece of analysis you have done.",
    },
  ],

  tools: [
    { name: "A tally sheet", what: "Two weeks of counting, needing nobody's approval. The number that makes every later conversation easier.", cost: "Free" },
    { name: "A one-page process drawing", what: "Drawn after watching, corrected by the people who do the work. Your first artefact.", cost: "Free" },
    { name: "A one-page write-up template", what: "Situation, findings, what you did, what changed, what you would do differently. The thing that actually gets read.", cost: "Free" },
    { name: "A note of every awkward moment", what: "Becomes your answers to the behavioural questions nobody prepares for.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "reading-a-business-analyst-job-spec", anchor: "what employers are looking for", context: "Targeting" },
    { slug: "business-analyst-interview-preparation", anchor: "turning these into interview answers", context: "Next step" },
    { slug: "where-inefficiency-hides", anchor: "finding a problem worth looking at", context: "Choosing a subject" },
  ],

  relatedGuides: ["reading-a-business-analyst-job-spec", "business-analyst-interview-preparation", "where-inefficiency-hides"],

  conclusion: [
    "Pick the smallest recurring annoyance at your current job and start counting it this week: what happened, how long it took, why. Two weeks of tallies needs nobody's permission and gives you the number that every part of one of these is built on.",
  ],
};

export default guide;
