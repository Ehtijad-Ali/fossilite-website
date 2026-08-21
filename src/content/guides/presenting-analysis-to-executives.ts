import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "presenting-analysis-to-executives",
  seoTitle: "Presenting Analysis to Executives Without Losing the Room",
  metaDescription:
    "Leading with the recommendation, building a one-pager that stands alone, handling hostile questions, and saying I do not know in a way that builds credibility.",
  title: "Presenting Analysis to Executives",
  keywords: [
    "presenting to executives",
    "executive summary writing",
    "business analyst communication",
    "steering group presentation",
    "recommendation paper",
    "handling difficult questions",
  ],
  category: "communication",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Analysts lose rooms in a predictable way. They present in the order the work was done: background, then method, then findings, then options, then a recommendation on slide nineteen that nobody reaches. It feels rigorous and it is the wrong shape, because it asks a group of busy people to hold an unresolved question in their heads for twenty minutes while you establish your credibility.",
    "Executives read in the opposite direction. They want to know what you are asking for and what it depends on, and then they interrogate the parts that worry them. Everything you prepared is still needed, and almost all of it is answering questions rather than making a case.",
    "This guide covers the shape that works, what belongs on a page that has to stand alone, how to present a number you are not certain about, how to handle a hostile question without becoming defensive, and what to do when the decision goes against your recommendation, which it sometimes will and sometimes should.",
  ],

  whyItMatters: [
    "Analysis that does not reach a decision is a hobby. Weeks of careful work delivered in a shape nobody can act on produces the same outcome as no work at all, and the analyst usually concludes that the executives did not engage rather than that the material was unusable.",
    "These rooms are also where a BA's professional reputation is made in an organisation. People who have never seen you work form a durable view based on twenty minutes, and that view determines which decisions you are invited into next.",
    "And the alternative to your analysis is not nothing. It is somebody's instinct, or the loudest voice, or whatever was done last time. A decision informed by evidence is worth real money, and getting it there is part of the job rather than an optional communication skill.",
  ],

  coreConcepts: [
    {
      term: "Lead with the recommendation",
      explain:
        "First sentence: what you are asking them to decide and what you recommend. Everything after that is supporting material that people can drill into.",
      detail:
        "This feels presumptuous when you are junior and it is what senior audiences prefer. Withholding the conclusion until you have earned it is a school-essay instinct, and in a meeting it reads as either uncertainty or evasion.",
    },
    {
      term: "The one page must stand alone",
      explain:
        "Problem, what it costs, options considered, recommendation, what it costs, the main risk, and the decision required. Written last, assuming the reader has four minutes.",
      detail:
        "Half the people who decide will read only this. Some will read it in the ten minutes before the meeting. If your summary needs the appendix to make sense, most of your audience will decide on something other than your analysis.",
    },
    {
      term: "State the decision you are asking for, precisely",
      explain:
        "Not for discussion or for information. Approve the recommended option, release the budget, choose between two paths, or accept a stated risk.",
      detail:
        "Papers presented without a named decision get discussed and return next month. Naming it also forces you to establish beforehand whether the people in the room can actually take it, which is worth knowing in advance.",
    },
    {
      term: "Put the criteria before the options",
      explain:
        "State how the options should be judged before showing them. Once people have seen options they construct criteria that favour the one they liked on sight, sincerely and without noticing.",
      detail:
        "This single ordering decision does more to keep a decision honest than any amount of analytical rigour further down the pack.",
    },
    {
      term: "One number they will remember",
      explain:
        "Choose the single figure that carries the argument and repeat it. Twelve numbers on a slide means nobody retains any of them, and the one that sticks will be whichever was easiest to read.",
      detail:
        "Make it a business number rather than a project one. Days of customer waiting, cases affected per week, cost per year. Effort and duration are inputs and they are not the argument.",
    },
    {
      term: "Show the range and name the assumption that drives it",
      explain:
        "Pessimistic, expected, optimistic, with the single assumption that most moves the answer named explicitly.",
      detail:
        "Pointing at your own weakest assumption is counterintuitive and it is the strongest credibility move available. It signals that the rest has been examined, and it directs the interrogation to the place you have already thought hardest about.",
    },
    {
      term: "Say what you do not know",
      explain:
        "An explicit section on what remains uncertain, what it would take to resolve, and the risk of deciding without it.",
      detail:
        "Every experienced executive knows six weeks does not resolve everything. A pack implying otherwise reads as naive or evasive, and the omission is usually noticed by exactly the person you most needed to convince.",
    },
    {
      term: "Anticipate the three questions and put them in the appendix",
      explain:
        "Before the meeting, write down the three questions you least want to be asked. Prepare the answers and have the supporting material ready to turn to.",
      detail:
        "This is the highest-return half hour of preparation available. The questions are almost always predictable, and being able to turn to a prepared page changes how the whole room receives everything else you say.",
    },
    {
      term: "A hostile question is usually a real concern in a hurry",
      explain:
        "It is rarely an attack. It is somebody with limited time trying to test the thing that worries them, expressed bluntly because that is faster.",
      detail:
        "Answer the concern rather than the tone. Restating the question before answering buys you a moment and confirms you understood it, and it defuses more situations than any rhetorical technique.",
    },
    {
      term: "I do not know, and here is how I would find out",
      explain:
        "Complete, professional, and better received than an improvised answer, which will be checked and remembered if it turns out to be wrong.",
      detail:
        "Follow it with when you will come back. The reputational cost of one honest gap is trivial. The cost of one confident answer that proves incorrect is very large and lasts a long time.",
    },
    {
      term: "Pre-brief the people who could derail it",
      explain:
        "Anybody likely to object should hear it from you privately first, with the chance to shape it. Meetings are a poor place to encounter an objection for the first time.",
      detail:
        "This is not manipulation, it is preparation. It also frequently improves the recommendation, because objections raised privately are more specific and less positional than ones raised in front of an audience.",
    },
    {
      term: "When the decision goes against you, record it and move on",
      explain:
        "Note the recommendation, the decision and the stated reason. Then support the decision properly.",
      detail:
        "You are accountable for the choice being informed, not for it going your way. Sometimes they know something you do not. Continuing to relitigate is the fastest way to stop being invited to the room.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Nineteen slides and no decision.",
      walkthrough:
        "A BA presents six weeks of work: background, approach, stakeholders consulted, current state, findings, then options, with the recommendation near the end. At minute fourteen the finance director asks what is being asked for. The answer is on a later slide. The discussion becomes about the method rather than the decision, time runs out, and the item is deferred to the following month.",
      result:
        "The analysis was sound and the shape made it unusable. Presented in reverse, with the recommendation and the cost first, the same material took eight minutes and produced a decision. Nothing about the work changed. Executives interrogate a conclusion far more efficiently than they assemble one.",
    },
    {
      kind: "illustration",
      scenario: "Naming your own weakest assumption.",
      walkthrough:
        "An analyst presents a benefit range and says plainly that the entire case depends on adoption reaching a certain level within three months, that this is the assumption they are least confident about, and that it will be measurable at week six with a defined action if it is not on track.",
      result:
        "The discussion moved immediately to adoption, which was the right conversation, and the paper was approved with an explicit checkpoint. Volunteering the weak point does two things: it signals that everything else has been examined, and it directs scrutiny to the place you have prepared for rather than to whatever somebody picks at random.",
    },
    {
      kind: "illustration",
      scenario: "The confident answer that was checked.",
      walkthrough:
        "Asked in a steering group how many cases per month go through a particular exception path, an analyst gives a figure from memory rather than saying they will confirm it. Somebody in the room pulls the number afterwards and it is materially different. Nothing is said publicly, and at the next meeting several of the analyst's other figures are questioned in a way they were not before.",
      result:
        "One improvised number cost more credibility than an admitted gap would have. I do not know and I will confirm by Thursday is a complete professional answer. The cost of using it is a few seconds of discomfort; the cost of being wrong in front of that audience is measured in months.",
    },
  ],

  learningPath: [
    {
      title: "Write the one page last and make it standalone",
      body: "Problem, cost of it, options considered, recommendation, cost of that, main risk, decision required. Assume four minutes of attention and no appendix.",
      effort: "2 hours",
      outcome: "The document that most of your audience will actually decide from.",
    },
    {
      title: "Name the decision and check who can take it",
      body: "Write the specific decision required, then confirm before the meeting that the people attending have authority to take it.",
      effort: "30 minutes",
      outcome: "A meeting that can conclude rather than one that defers.",
    },
    {
      title: "Restructure the pack in decision order",
      body: "Recommendation, criteria, options, evidence, risks, unknowns, appendix. Move method and background into the appendix entirely.",
      effort: "2 hours",
      outcome: "A pack that supports interrogation rather than requiring patience.",
    },
    {
      title: "Choose the one number",
      body: "The single business figure that carries the argument. Put it in the first sentence and repeat it. Move everything else into supporting material.",
      effort: "30 minutes",
      outcome: "Something the room remembers after they leave, which is the actual test.",
    },
    {
      title: "Write the three questions you least want",
      body: "Prepare an answer for each and put the supporting material where you can turn to it in seconds.",
      effort: "1 hour",
      outcome: "The highest-return preparation available, because the questions are nearly always predictable.",
    },
    {
      title: "Pre-brief anyone likely to object",
      body: "Fifteen minutes each, privately, with a genuine opportunity to influence the recommendation before it is presented.",
      effort: "1-2 hours",
      outcome: "Objections raised where they can be addressed, and a better recommendation.",
    },
    {
      title: "Rehearse the eight-minute version",
      body: "Out loud, timed, to somebody who was not involved. If you cannot make the case in eight minutes, the material is not ready.",
      effort: "1 hour",
      outcome: "A delivery that survives the agenda overrunning, which it will.",
    },
  ],

  exercises: [
    {
      title: "Invert a pack",
      brief:
        "Take a presentation you or a colleague have given and restructure it so the recommendation and the decision required are on the first slide, with method and background moved to an appendix. Time both versions.",
      success:
        "The inverted version delivers the argument in under half the time, and you can identify which slides existed only to establish credibility.",
      time: "1 hour",
    },
    {
      title: "Write the standalone page",
      brief:
        "For a piece of analysis you are working on, write a one-page summary. Then give it to somebody with no context, alone, and ask them what is being recommended and what it depends on.",
      success:
        "They can answer both questions correctly from the page alone, without asking you anything.",
      time: "1 hour",
    },
    {
      title: "The three worst questions",
      brief:
        "Before your next presentation, write the three questions you least want to be asked. Prepare each answer in two sentences, with the evidence you would turn to.",
      success:
        "At least one of the three is actually asked, and you have a prepared answer rather than an improvised one.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Presenting in the order the work was done",
      why: "It asks busy people to hold an unresolved question for twenty minutes, and it reads as either uncertainty or as establishing credentials rather than making a case.",
      fix: "Lead with the recommendation and the decision required. Method and background go in the appendix.",
    },
    {
      mistake: "A summary that needs the appendix",
      why: "Half the people who decide read only the summary, some of them in the ten minutes beforehand. If it does not stand alone, they decide on something other than your analysis.",
      fix: "Write the one page last and test it on somebody with no context.",
    },
    {
      mistake: "Not naming the decision required",
      why: "Papers presented for discussion get discussed and return next month. Nothing forces a conclusion and everybody leaves feeling the meeting was productive.",
      fix: "State the specific decision, and confirm beforehand that the attendees can take it.",
    },
    {
      mistake: "Showing options before criteria",
      why: "People construct criteria that favour the option they preferred on sight, in complete good faith, and the evaluation becomes a justification.",
      fix: "State how the options should be judged before revealing them.",
    },
    {
      mistake: "Too many numbers",
      why: "Twelve figures on a slide means none are retained, and the one that sticks is whichever was largest or easiest to read rather than the one that carries the argument.",
      fix: "Pick one business number, put it in the first sentence, and repeat it.",
    },
    {
      mistake: "Hiding uncertainty",
      why: "Experienced executives know six weeks does not resolve everything. A pack implying certainty reads as naive, and the omission is usually spotted by the person you most needed to convince.",
      fix: "State what you do not know, what it would take to find out, and the risk of deciding without it.",
    },
    {
      mistake: "Improvising a number under pressure",
      why: "It gets checked. One incorrect figure casts doubt on every other figure you have presented, and that doubt persists for a long time.",
      fix: "I do not know, I will confirm by a stated day. It is a complete answer and it costs almost nothing.",
    },
    {
      mistake: "Meeting an objection for the first time in the room",
      why: "Public objections are more positional than private ones, and once somebody has taken a position in front of their peers it becomes expensive for them to move.",
      fix: "Pre-brief anyone likely to object, privately, with a real chance to influence the recommendation.",
    },
    {
      mistake: "Relitigating a decision that went against you",
      why: "You are accountable for the decision being informed, not for it going your way, and continuing the argument is the fastest way to stop being invited.",
      fix: "Record the recommendation, the decision and the reason, then support the decision properly.",
    },
  ],

  bestPractices: [
    "Lead with the recommendation and the decision required.",
    "Write the one-page summary last and make it stand alone.",
    "Confirm beforehand that the room can take the decision.",
    "State criteria before showing options.",
    "Choose one business number and repeat it.",
    "Present a range and name the assumption that drives it.",
    "Include an explicit section on what remains unknown.",
    "Prepare the three questions you least want to be asked.",
    "Answer the concern behind a hostile question, not the tone.",
    "Say I do not know, with a date for coming back.",
    "Pre-brief anyone likely to object.",
    "Rehearse an eight-minute version out loud.",
    "Record the decision and the reason, then support it.",
  ],

  proTips: [
    "Send the one-pager the day before rather than tabling the pack in the meeting. People who have read something arrive with questions instead of impressions, and the meeting starts at the interrogation rather than at the explanation. It also means the person who reads nothing has still had the chance, which changes how a deferral conversation goes.",
    "Watch the most senior person's face when you state the recommendation, in the first thirty seconds. Whatever happens there determines the rest of the meeting, and it is usually visible. If it is scepticism, address it immediately rather than continuing through your material and hoping the evidence will accumulate.",
    "When you are asked a question you have already answered in the pack, do not say it is on slide twelve. Answer it again, briefly. Pointing at the document reads as a correction, and the fact that they missed it is information about the pack rather than about them.",
    "Keep a note of every question you get asked in these forums across a year. The pattern is remarkably stable within one organisation, and after a while you can write the appendix before the analysis is finished because you know exactly what this group interrogates. Mine was always the sensitivity of the benefit to adoption.",
  ],

  businessApplications: [
    "Steering groups and project boards, where the recommendation shape determines whether anything is decided.",
    "Investment committees, where the one-pager is frequently the only thing read.",
    "Regulatory and audit reporting, where uncertainty must be stated explicitly rather than smoothed.",
    "Post-implementation reviews, where the awkward result has to be presented honestly and usefully.",
    "Vendor selection recommendations, where criteria before options is what keeps the choice defensible.",
    "Annual planning, where competing proposals need comparable framing to be judged at all.",
  ],

  checklist: [
    "Recommendation and decision required stated in the first sentence.",
    "One-page summary stands alone with no appendix required.",
    "Attendees confirmed as able to take the decision.",
    "Criteria presented before options.",
    "One business number chosen and repeated.",
    "Range presented with the driving assumption named.",
    "Explicit section on what remains unknown.",
    "Three hardest questions prepared with supporting material to hand.",
    "Likely objectors pre-briefed privately.",
    "Eight-minute version rehearsed out loud and timed.",
    "Method and background moved to the appendix.",
    "Summary circulated in advance.",
    "Decision, reason and date recorded afterwards.",
  ],

  faqs: [
    {
      q: "How long should an executive presentation be?",
      a: "Prepare for eight minutes and expect to be interrupted within two. The agenda will overrun and your slot will shrink. If your argument only works at full length, it does not work.",
    },
    {
      q: "Should I present options or a recommendation?",
      a: "Both, with the recommendation first and clearly stated. A paper presenting options without a view forces the decision maker to do the analysis, which was the part you were asked to do.",
    },
    {
      q: "What do I do when I am asked something I cannot answer?",
      a: "Say so and give a date for coming back. It is a complete answer. An improvised figure gets checked, and one incorrect number casts doubt on every other number you have presented.",
    },
    {
      q: "How do I handle someone who is clearly hostile?",
      a: "Answer the concern rather than the tone, and restate the question before answering to confirm you understood it. Most hostility in these rooms is time pressure and a real worry expressed bluntly rather than an attack on you.",
    },
    {
      q: "Should I show my working?",
      a: "In the appendix, always, and referenced. Leading with method reads as establishing credentials. Having it available and being able to turn to it in seconds is what actually establishes them.",
    },
    {
      q: "What if the decision goes against my recommendation?",
      a: "Record what you recommended, what was decided and the stated reason, then support the decision properly. Sometimes they know something you do not, and your accountability is for the choice being informed rather than for winning it.",
    },
  ],

  tools: [
    { name: "A one-page summary template", what: "Problem, cost, options, recommendation, cost, main risk, decision required. Written last, tested on somebody with no context.", cost: "Free" },
    { name: "A three-questions preparation sheet", what: "The questions you least want, with two-sentence answers and the evidence to turn to.", cost: "Free" },
    { name: "An appendix you can navigate in seconds", what: "Method, working and detail, indexed. Having it beats leading with it.", cost: "Free" },
    { name: "A question log across meetings", what: "What this forum actually interrogates. Stable within an organisation and eventually predictive.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "writing-a-business-case", anchor: "the document behind the presentation", context: "Preparation" },
    { slug: "clear-writing-that-gets-read", anchor: "the writing craft underneath", context: "Writing" },
    { slug: "stakeholder-management-in-practice", anchor: "the pre-briefing this depends on", context: "Before the meeting" },
  ],

  relatedGuides: ["writing-a-business-case", "clear-writing-that-gets-read", "stakeholder-management-in-practice"],

  conclusion: [
    "Take the last pack you presented and rewrite it so the recommendation and the decision required are the first thing on the page, with method and background moved to an appendix. Then time both versions out loud. The difference will tell you why the original one produced a discussion rather than a decision.",
  ],
};

export default guide;
