import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "presenting-analysis-to-executives",
  seoTitle: "Getting a Decision Out of a Room of Busy People",
  metaDescription:
    "Lead with the recommendation, write a page that stands on its own, handle the hostile question, and say I do not know in a way that builds credibility.",
  title: "Getting a Decision Out of Busy People",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "Analysts lose rooms in a predictable way. They present in the order the work was done: background, then how they did it, then what they found, then options, then a recommendation on slide nineteen that nobody reaches. It feels thorough and it is the wrong shape, because it asks a group of busy people to hold an unanswered question in their heads for twenty minutes while you establish that you know what you are talking about.",
    "Executives read in the opposite direction. They want to know what you are asking for and what it depends on, and then they start poking at the parts that worry them. Everything you prepared is still needed, and nearly all of it is answering questions rather than making the case.",
    "This guide covers the shape that works, what belongs on a page that has to stand on its own, how to present a number you are not sure about, how to handle a hostile question without getting defensive, and what to do when the decision goes against you, which it sometimes will and sometimes should.",
  ],

  whyItMatters: [
    "Analysis that does not reach a decision is a hobby. Weeks of careful work delivered in a shape nobody can act on produces the same outcome as no work at all, and the analyst usually concludes that the executives did not engage rather than that the material was unusable.",
    "These rooms are also where your reputation gets made. People who have never seen you work form a lasting view based on twenty minutes, and that view decides which decisions you get invited into next.",
    "And the alternative to your analysis is not nothing. It is somebody's instinct, or the loudest voice, or whatever was done last time. A decision informed by evidence is worth real money, and getting it there is part of the job rather than an optional communication skill.",
  ],

  coreConcepts: [
    {
      term: "Lead with what you are recommending",
      explain:
        "First sentence: what you are asking them to decide and what you recommend. Everything after that is supporting material people can dig into.",
      detail:
        "This feels presumptuous when you are junior and it is what senior audiences prefer. Holding back the conclusion until you have earned it is a school-essay instinct, and in a meeting it reads as either uncertainty or evasion.",
    },
    {
      term: "The one page has to stand on its own",
      explain:
        "Problem, what it costs, options considered, recommendation, what that costs, the main risk, and what you need decided. Written last, assuming the reader has four minutes.",
      detail:
        "Half the people who decide will read only this, and some of them in the ten minutes beforehand. If your summary needs the appendix to make sense, most of your audience will decide on something other than your analysis.",
    },
    {
      term: "Say exactly what you want decided",
      explain:
        "Not for discussion or for information. Approve the recommended option, release the budget, choose between two paths, or accept a stated risk.",
      detail:
        "Papers presented with nothing specific to decide get discussed and come back next month. Naming it also forces you to check beforehand whether the people in the room can actually decide it, which is worth knowing in advance.",
    },
    {
      term: "Put the criteria before the options",
      explain:
        "Say how the options should be judged before showing them. Once people have seen the options they construct criteria favouring the one they liked on sight, sincerely and without noticing.",
      detail:
        "This one ordering decision does more to keep a decision honest than any amount of rigour further down the pack.",
    },
    {
      term: "One number they will remember",
      explain:
        "Pick the single figure that carries the argument and repeat it. Twelve numbers on a slide means nobody retains any of them, and the one that sticks will be whichever was easiest to read.",
      detail:
        "Make it a business number rather than a project one. Days customers spend waiting, cases affected per week, cost per year. Effort and duration are inputs and they are not the argument.",
    },
    {
      term: "Show the range and name what drives it",
      explain:
        "Pessimistic, expected, optimistic, with the single assumption that moves the answer most named explicitly.",
      detail:
        "Pointing at your own weakest assumption is counterintuitive and it is the strongest credibility move available. It signals that everything else has been examined, and it sends the questioning to the place you have already thought hardest about.",
    },
    {
      term: "Say what you do not know",
      explain:
        "A section on what is still uncertain, what it would take to resolve, and the risk of deciding without it.",
      detail:
        "Every experienced executive knows six weeks does not resolve everything. A pack implying otherwise reads as naive or evasive, and the omission usually gets noticed by exactly the person you most needed to convince.",
    },
    {
      term: "Prepare the three questions you least want",
      explain:
        "Before the meeting, write down the three questions you would least like to be asked. Prepare the answers and have the material ready to turn to.",
      detail:
        "This is the highest-return half hour of preparation available. The questions are almost always predictable, and being able to turn to a prepared page changes how the whole room receives everything else you say.",
    },
    {
      term: "A hostile question is usually a real worry in a hurry",
      explain:
        "It is rarely an attack. It is somebody with limited time trying to test the thing that worries them, said bluntly because that is faster.",
      detail:
        "Answer the worry rather than the tone. Repeating the question back before answering buys you a moment and confirms you understood it, and it defuses more situations than any clever technique.",
    },
    {
      term: "I do not know, and here is how I would find out",
      explain:
        "A complete, professional answer, and far better received than something improvised, which will get checked and remembered if it turns out to be wrong.",
      detail:
        "Follow it with when you will come back. One admitted gap costs almost nothing. One confident answer that proves wrong is very expensive and lasts a long time.",
    },
    {
      term: "Speak to anybody likely to object beforehand",
      explain:
        "Anybody likely to object should hear it from you privately first, with a chance to shape it. A meeting is a poor place to meet an objection for the first time.",
      detail:
        "This is not manipulation, it is preparation. It also frequently improves the recommendation, because objections raised privately are more specific and less positional than ones raised in front of an audience.",
    },
    {
      term: "When the decision goes against you, record it and move on",
      explain:
        "Note what you recommended, what was decided and the stated reason. Then support the decision properly.",
      detail:
        "You are accountable for the choice being informed, not for it going your way. Sometimes they know something you do not. Continuing to argue is the fastest way to stop being invited to the room.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Nineteen slides and no decision.",
      walkthrough:
        "The problem: a BA presented six weeks of work as background, approach, who was consulted, how it works now, findings, then options, with the recommendation near the end. What was happening: at minute fourteen the finance director asked what was actually being asked for. The answer was on a later slide. The discussion turned into a conversation about the method rather than the decision, time ran out, and the item was pushed to the following month.",
      result:
        "What changed: presented in reverse, with the recommendation and the cost first, the same material took eight minutes and produced a decision. Nothing about the work changed. Executives interrogate a conclusion far more efficiently than they assemble one.",
    },
    {
      kind: "illustration",
      scenario: "Naming your own weakest assumption.",
      walkthrough:
        "The problem: a benefit range rested heavily on one uncertain thing. What was happening: rather than hoping nobody would notice, the analyst said plainly that the whole case depends on people actually using it at a certain level within three months, that this was the assumption she was least confident about, and that it would be measurable at week six with a defined action if it was not on track.",
      result:
        "What changed: the discussion moved immediately to that, which was the right conversation, and the paper was approved with an explicit checkpoint. Volunteering the weak point does two things. It signals everything else has been examined, and it directs the scrutiny to the place you have prepared for rather than to whatever somebody picks at random.",
    },
    {
      kind: "illustration",
      scenario: "The confident number that got checked.",
      walkthrough:
        "The problem: an analyst was asked in a steering group how many cases a month go through a particular exception path. What was happening: rather than saying they would confirm it, they gave a figure from memory. Somebody in the room pulled the number afterwards and it was materially different. Nothing was said publicly, and at the next meeting several of that analyst's other figures were questioned in a way they had not been before.",
      result:
        "What changed: one improvised number cost more credibility than an admitted gap would have. I do not know and I will confirm by Thursday is a complete professional answer. Using it costs a few seconds of discomfort. Being wrong in front of that audience is measured in months.",
    },
  ],

  learningPath: [
    {
      title: "Write the one page last and make it stand alone",
      body: "Problem, what it costs, options considered, recommendation, what that costs, main risk, what you need decided. Assume four minutes of attention and no appendix.",
      effort: "2 hours",
      outcome: "The document most of your audience will actually decide from.",
    },
    {
      title: "Say what you want decided and check who can decide it",
      body: "Write the specific decision, then confirm before the meeting that the people attending have the authority to take it.",
      effort: "30 minutes",
      outcome: "A meeting that can conclude rather than one that defers.",
    },
    {
      title: "Reorder the pack into decision order",
      body: "Recommendation, criteria, options, evidence, risks, unknowns, appendix. Move the method and background into the appendix entirely.",
      effort: "2 hours",
      outcome: "A pack that supports questioning rather than requiring patience.",
    },
    {
      title: "Choose the one number",
      body: "The single business figure that carries the argument. Put it in the first sentence and repeat it. Move everything else into the supporting material.",
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
      title: "Speak to likely objectors beforehand",
      body: "Fifteen minutes each, privately, with a genuine chance to influence the recommendation before it gets presented.",
      effort: "1-2 hours",
      outcome: "Objections raised where they can be dealt with, and a better recommendation.",
    },
    {
      title: "Rehearse the eight-minute version",
      body: "Out loud, timed, to somebody who was not involved. If you cannot make the case in eight minutes, the material is not ready.",
      effort: "1 hour",
      outcome: "A version that survives the agenda overrunning, which it will.",
    },
  ],

  exercises: [
    {
      title: "Turn a pack upside down",
      brief:
        "Take a presentation you or a colleague gave and restructure it so the recommendation and the decision needed are on the first slide, with method and background moved to an appendix. Time both versions.",
      success:
        "The reversed version makes the argument in under half the time, and you can spot which slides existed only to establish credibility.",
      time: "1 hour",
    },
    {
      title: "Write the page that stands alone",
      brief:
        "For something you are working on, write a one-page summary. Then give it to somebody with no context, on their own, and ask what is being recommended and what it depends on.",
      success:
        "They answer both correctly from the page alone, without asking you anything.",
      time: "1 hour",
    },
    {
      title: "The three worst questions",
      brief:
        "Before your next presentation, write the three questions you least want to be asked. Prepare each answer in two sentences, with the evidence you would turn to.",
      success:
        "At least one of the three actually gets asked, and you have a prepared answer rather than an improvised one.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Presenting in the order the work was done",
      why: "It asks busy people to hold an unanswered question for twenty minutes, and it reads as either uncertainty or as establishing your credentials rather than making a case.",
      fix: "Lead with the recommendation and what you need decided. Method and background go in the appendix.",
    },
    {
      mistake: "A summary that needs the appendix",
      why: "Half the people who decide read only the summary, some of them just beforehand. If it does not stand on its own, they decide on something other than your analysis.",
      fix: "Write the one page last and test it on somebody with no context.",
    },
    {
      mistake: "Not saying what you want decided",
      why: "Papers presented for discussion get discussed and come back next month. Nothing forces a conclusion and everybody leaves feeling the meeting was productive.",
      fix: "State the specific decision, and confirm beforehand that the people there can take it.",
    },
    {
      mistake: "Showing options before criteria",
      why: "People construct criteria favouring whichever option they preferred on sight, in complete good faith, and the evaluation becomes a justification.",
      fix: "Say how the options should be judged before revealing them.",
    },
    {
      mistake: "Too many numbers",
      why: "Twelve figures on a slide means none get retained, and the one that sticks is whichever was biggest or easiest to read rather than the one carrying the argument.",
      fix: "Pick one business number, put it in the first sentence, and repeat it.",
    },
    {
      mistake: "Hiding the uncertainty",
      why: "Experienced executives know six weeks does not resolve everything. A pack implying certainty reads as naive, and the omission usually gets spotted by the person you most needed to convince.",
      fix: "Say what you do not know, what it would take to find out, and the risk of deciding without it.",
    },
    {
      mistake: "Improvising a number under pressure",
      why: "It gets checked. One wrong figure casts doubt on every other figure you have presented, and that doubt lasts a long time.",
      fix: "I do not know, I will confirm by a stated day. It is a complete answer and it costs almost nothing.",
    },
    {
      mistake: "Meeting an objection for the first time in the room",
      why: "Public objections are more entrenched than private ones, and once somebody has taken a position in front of their peers it becomes expensive for them to move.",
      fix: "Speak to anybody likely to object privately first, with a real chance to influence things.",
    },
    {
      mistake: "Arguing after a decision goes against you",
      why: "You are accountable for the decision being informed, not for it going your way, and continuing is the fastest way to stop being invited.",
      fix: "Record what you recommended, what was decided and the reason, then support the decision properly.",
    },
  ],

  bestPractices: [
    "Lead with the recommendation and what you need decided.",
    "Write the one-page summary last and make it stand on its own.",
    "Confirm beforehand that the room can take the decision.",
    "State the criteria before showing the options.",
    "Choose one business number and repeat it.",
    "Present a range and name what drives it.",
    "Include a section on what is still unknown.",
    "Prepare the three questions you least want to be asked.",
    "Answer the worry behind a hostile question, not the tone.",
    "Say I do not know, with a date for coming back.",
    "Speak to likely objectors beforehand.",
    "Rehearse an eight-minute version out loud.",
    "Record the decision and the reason, then support it.",
  ],

  proTips: [
    "Send the one-pager the day before rather than handing the pack out in the meeting. People who have read something turn up with questions instead of impressions, and the meeting starts at the questioning rather than at the explaining. It also means somebody who reads nothing has still had the chance, which changes how a deferral conversation goes.",
    "Watch the most senior person's face when you say the recommendation, in the first thirty seconds. Whatever happens there decides the rest of the meeting, and it is usually visible. If it is scepticism, deal with it immediately rather than working through your material hoping the evidence will pile up.",
    "When you get asked something you already covered in the pack, do not say it is on slide twelve. Answer it again, briefly. Pointing at the document reads as a correction, and the fact that they missed it is information about the pack rather than about them.",
    "Keep a note of every question you get asked in these meetings across a year. The pattern is remarkably stable within one business, and after a while you can write the appendix before the analysis is finished because you know exactly what this group goes after. Mine was always how sensitive the benefit is to people actually using it.",
  ],

  businessApplications: [
    "Steering groups and project boards, where the shape of your recommendation decides whether anything gets decided.",
    "Investment committees, where the one-pager is frequently the only thing read.",
    "Reporting to regulators and auditors, where uncertainty has to be stated rather than smoothed over.",
    "Reviews after go-live, where an awkward result has to be presented honestly and usefully.",
    "Recommending a supplier, where criteria before options is what keeps the choice defensible.",
    "Annual planning, where competing proposals need comparable framing to be judged at all.",
  ],

  checklist: [
    "Recommendation and what you need decided in the first sentence.",
    "One-page summary stands alone with no appendix needed.",
    "Attendees confirmed as able to take the decision.",
    "Criteria presented before options.",
    "One business number chosen and repeated.",
    "Range presented with the driving assumption named.",
    "Section on what is still unknown.",
    "Three hardest questions prepared with material to hand.",
    "Likely objectors spoken to privately.",
    "Eight-minute version rehearsed out loud and timed.",
    "Method and background moved to the appendix.",
    "Summary sent round in advance.",
    "Decision, reason and date recorded afterwards.",
  ],

  faqs: [
    {
      q: "How long should this take?",
      a: "Prepare for eight minutes and expect to be interrupted within two. The agenda will overrun and your slot will shrink. If your argument only works at full length, it does not work.",
    },
    {
      q: "Should I present options or a recommendation?",
      a: "Both, with the recommendation first and clearly stated. A paper presenting options with no view forces the decision maker to do the analysis, which was the part you were asked to do.",
    },
    {
      q: "What do I do when I am asked something I cannot answer?",
      a: "Say so and give a date for coming back. It is a complete answer. An improvised figure gets checked, and one wrong number casts doubt on every other number you presented.",
    },
    {
      q: "How do I handle somebody who is clearly hostile?",
      a: "Answer the worry rather than the tone, and repeat the question back before answering to confirm you understood it. Most hostility in these rooms is time pressure and a real concern said bluntly rather than an attack on you.",
    },
    {
      q: "Should I show my working?",
      a: "In the appendix, always, and referenced. Leading with the method reads as establishing your credentials. Having it available and being able to turn to it in seconds is what actually establishes them.",
    },
    {
      q: "What if the decision goes against my recommendation?",
      a: "Record what you recommended, what was decided and the reason, then support the decision properly. Sometimes they know something you do not, and your accountability is for the choice being informed rather than for winning.",
    },
  ],

  tools: [
    { name: "A one-page summary template", what: "Problem, cost, options, recommendation, cost, main risk, what you need decided. Written last, tested on somebody with no context.", cost: "Free" },
    { name: "A three-questions sheet", what: "The questions you least want, with two-sentence answers and the evidence to turn to.", cost: "Free" },
    { name: "An appendix you can navigate in seconds", what: "Method, working and detail, indexed. Having it beats leading with it.", cost: "Free" },
    { name: "A record of questions across meetings", what: "What this group actually goes after. Stable within a business and eventually predictable.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "writing-a-business-case", anchor: "the document behind the presentation", context: "Preparation" },
    { slug: "clear-writing-that-gets-read", anchor: "the writing craft underneath it", context: "Writing" },
    { slug: "stakeholder-management-in-practice", anchor: "the conversations that come first", context: "Before the meeting" },
  ],

  relatedGuides: ["writing-a-business-case", "clear-writing-that-gets-read", "stakeholder-management-in-practice"],

  conclusion: [
    "Take the last pack you presented and rewrite it so the recommendation and what you need decided are the first thing on the page, with method and background moved to an appendix. Then time both versions out loud. The difference will tell you why the original produced a discussion rather than a decision.",
  ],
};

export default guide;
