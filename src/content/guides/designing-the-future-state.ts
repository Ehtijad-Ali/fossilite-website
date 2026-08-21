import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "designing-the-future-state",
  seoTitle: "Coming Up With Options That Are Actually Different",
  metaDescription:
    "Most option papers contain one option and two decorations. Six shapes an answer can take, why removing a step beats automating it, and how to test a design before you present it.",
  title: "Designing How It Should Work Instead",
  keywords: [
    "to-be process design",
    "solution options analysis",
    "future state design",
    "business analyst solution design",
    "gap analysis",
    "generating solution options",
  ],
  category: "business-analysis",
  level: "Advanced",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Most option papers contain one option. There is the recommendation, there is do nothing which nobody intends to choose, and there is a third entry built to look visibly worse so the recommendation seems considered. Everybody in the room knows this and nobody says it, and the decision was taken before the paper was written.",
    "That is a failure of analysis rather than of honesty. Coming up with genuinely different options is hard, because by the time you understand a problem well enough to solve it you already have a favourite, and every thought after that gets recruited to support it. Designing properly means working against that pull on purpose.",
    "This guide covers both halves: how to produce options that are actually different from each other, and how to design something people will still be doing in a year. The second half matters more than it sounds. A design that ignores the exceptions, the holiday cover and the reason a step exists will quietly get abandoned within two quarters, and nobody will tell you.",
  ],

  whyItMatters: [
    "The option you never thought of cannot be chosen. Most businesses settle on a shape of answer early, usually whatever the last project did or whatever a salesperson demonstrated recently, and then all the effort goes into the details of that shape rather than into whether it is the right one.",
    "This is also where a BA gets the most value per hour. A good decision made in a week of thinking can remove months of building. Nobody notices work that never happened, which is why this part of the job is underrated and why you have to be able to explain it.",
    "And there is a durability question. Delivering something that works in the first month, while everyone is paying attention, is easy. Delivering something that still works when the champion has moved on, two people are covering three jobs and volumes have doubled is a different design problem, and it is the one that actually matters.",
  ],

  coreConcepts: [
    {
      term: "Six shapes an answer can take, and you should consider all of them",
      explain:
        "Do nothing differently. Change the process without any technology. Change the policy or the rule. Set up something you already own differently. Buy something. Build something. Most option papers cover two of the six.",
      detail:
        "Make yourself write one paragraph on each before ruling any out. It takes an hour. Two will be obviously wrong, and one of the remaining four is frequently better than what you were going to recommend.",
    },
    {
      term: "Do nothing is a real option and deserves real analysis",
      explain:
        "Not a straw man. What happens if this is left alone? Does the cost grow, stay flat, or go away by itself when a system is retired next year?",
      detail:
        "Sometimes the honest answer is that the problem is already shrinking or will disappear with a change that is already planned. Recommending no action is a legitimate and career-enhancing thing for a BA to do, and it is remembered.",
    },
    {
      term: "Look upstream before designing anything downstream",
      explain:
        "Most requests are about handling a pile of work more efficiently. The better question is why the work turns up at all.",
      detail:
        "A chasing letter can be automated, or the original request letter can be made clearer so nobody needs chasing. The second is smaller, cheaper and permanent. Every step is a candidate for removal before it is a candidate for improvement.",
    },
    {
      term: "Remove it, simplify it, make it the same everywhere, and only then automate it",
      explain:
        "Automating a step keeps it forever, complications and all. Removing it costs nothing to run and nothing to maintain.",
      detail:
        "This is not a slogan, it is a sequence to walk deliberately for every step. Can this go? If not, can it be simpler? If not, can it be the same in every region? Only then, should a machine do it?",
    },
    {
      term: "Options must differ in a way that matters",
      explain:
        "Three options that vary only in how much of the same system you build are one option with three budgets. Real options differ in who does the work, where the control sits, what you give up, or how fast the benefit arrives.",
      detail:
        "Say at the top of each option what makes it structurally different. If you cannot name it, you have written a bigger or smaller version of another option rather than an alternative.",
    },
    {
      term: "Design the exceptions first, not the smooth path",
      explain:
        "Any design can handle the standard case. The real question is what happens to the fifth of cases that do not fit, and whether the new way makes those better or dumps them on somebody with fewer tools than before.",
      detail:
        "The failure is very recognisable: automate most of the volume and leave the rest to a shrinking team who now get no practice at the routine work that kept them sharp. Design the exception path first and the smooth path will look after itself.",
    },
    {
      term: "Agree the ground rules before the design",
      explain:
        "Four to six statements the sponsor signs up to, which then settle dozens of later arguments. Nothing gets typed in twice. Customer turnaround beats internal convenience. Nothing requires somebody to be in the office.",
      detail:
        "The value is that they get agreed before anyone knows which specific arguments they will settle. Once a design argument is live, people pick rules to justify positions rather than to guide them.",
    },
    {
      term: "Show the gap, not just the destination",
      explain:
        "The difference between how it works now and how it should work is the actual work: what gets built, what gets configured, what policies change, what jobs change, what data moves, what people have to learn.",
      detail:
        "A design with no gap analysis is a picture. The gap is where the cost, the timeline and most of the risk live, and it is what your sponsor is really trying to understand when they ask what this involves.",
    },
    {
      term: "Design how you get there, not just where you are going",
      explain:
        "How does the business get from here to there while still serving customers? What happens to work already in progress, to cases opened under the old rules, to the team during the switchover?",
      detail:
        "A design that only works from a standing start is not a design for a business with customers waiting. This is where most elegant target designs quietly fail.",
    },
    {
      term: "Test the design against real cases before you present it",
      explain:
        "Take ten real cases from last month, including the two most awkward, and walk each one through the proposed way of working.",
      detail:
        "This is the cheapest quality check there is and it gets skipped constantly. Every case that does not fit is a design problem found for free, in a room, rather than during a build.",
    },
    {
      term: "Ask what would have to be true for this to fail",
      explain:
        "Put it to the group before the decision rather than after. It gives people permission to voice doubts without seeming disloyal to a direction that is picking up momentum.",
      detail:
        "The answers are your risk list, written by the people best placed to know, at the only moment when acting on them is still cheap.",
    },
    {
      term: "Involve the people who will run it, early and genuinely",
      explain:
        "Not as a communication exercise. The people doing the work know which parts of your design will not survive a Friday afternoon, and they will tell you if they believe the answer can still change something.",
      detail:
        "There is a hard version of this test: if nothing in your design changed because of talking to them, you did not consult them, you briefed them, and they can tell the difference.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The option nobody had written down.",
      walkthrough:
        "The problem: a finance team wanted a system to handle approving supplier invoices under a certain value, which was eating a big share of their week. What was happening: the BA made himself write a paragraph on each of the six shapes. The policy option, which nobody had considered, turned out to be that the approval limit had been set years ago and had not moved with inflation or with how much the business had grown. Raising it would take most of the cases out of the approval process entirely.",
      result:
        "What changed: they raised the limit. It needed a policy decision, a review of the control, and no software at all, and it was done in weeks. The point is not that policy changes are always the answer. It is that the option was there the whole time, and it only surfaced because the analyst made himself write a paragraph about a shape he did not initially believe in.",
    },
    {
      kind: "illustration",
      scenario: "Ten real cases, three of which did not fit.",
      walkthrough:
        "The problem: a redesigned onboarding process was ready to present. What was happening: before presenting it, the BA took ten real cases from the previous month, deliberately including the two that had gone worst, and walked each through the new design. Seven went through cleanly. Three did not. One involved a customer who is also a supplier. One involved a group where the company that pays is not the company that trades. And one had a document arriving after the case was closed.",
      result:
        "What changed: all three were designable once known, and two needed a decision from the business rather than a technical fix. Had the design been presented and approved first, those three would have arrived during the build as change requests, at which point they get described as scope creep rather than as analysis that had not been done.",
    },
    {
      kind: "illustration",
      scenario: "The elegant design that was gone in a quarter.",
      walkthrough:
        "The problem: a new process removed a manual check, on the grounds that the system upstream now validated the same thing. What was happening: it worked. Six months later the check was back, being done on a spreadsheet, because the upstream validation did not cover cases entered through a second channel the design team did not know existed, and a supervisor got tired of the corrections.",
      result:
        "What changed: nobody reported it. The workaround simply reappeared, which is what happens when a design removes something that was carrying a load nobody had measured. Before removing any step, ask what it catches and how often, then check the answer against data rather than against the belief of whoever wanted it gone.",
    },
  ],

  learningPath: [
    {
      title: "Restate the need and the confirmed cause",
      body: "Before designing anything, write the need and the cause in one paragraph each. If either is uncertain, designing is premature and you will produce options for a problem you have not established.",
      effort: "1 hour",
      outcome: "A target for the design to hit, which is also what you will judge the options against.",
    },
    {
      title: "Agree four to six ground rules with the sponsor",
      body: "Short statements that can settle later arguments. Get them agreed before any specific design exists, because after that people pick rules to justify positions.",
      effort: "1 hour plus a conversation",
      outcome: "Tie-breakers that save days of circular argument during detailed design.",
    },
    {
      title: "Write one paragraph on each of the six shapes",
      body: "Do nothing, process change, policy change, use what you own, buy, build. Force yourself through all six even where one feels obviously wrong.",
      effort: "2 hours",
      outcome: "Usually one credible option you were not going to consider, which is the whole return on the exercise.",
    },
    {
      title: "Walk the remove-simplify-standardise-automate sequence",
      body: "For each step in the current process: can it be removed, made simpler, made the same everywhere, and only then automated. Record why each surviving step survives.",
      effort: "Half a day",
      outcome: "A design that is smaller than what exists today, rather than the same shape with software bolted on.",
    },
    {
      title: "Draw the target and the gap together",
      body: "The new way of working in the same style as the current one, plus an explicit list of what has to change: systems, data, policy, jobs, skills, reports.",
      effort: "1-2 days",
      outcome: "What your sponsor actually needs in order to understand the scale and the cost.",
    },
    {
      title: "Design the exception paths and the switchover",
      body: "What happens to cases that do not fit, and how the business gets from here to there while still operating. Both usually get left until after approval, which is too late.",
      effort: "1 day",
      outcome: "A design that works in a real business rather than only on a diagram.",
    },
    {
      title: "Test with ten real cases and ask what would sink it",
      body: "Walk ten real cases through the design, including the worst two. Then ask the group what would have to be true for this to fail. Write everything down.",
      effort: "Half a day",
      outcome: "Design problems found before approval, and a risk list written by the people who know.",
    },
  ],

  exercises: [
    {
      title: "Six shapes in an hour",
      brief:
        "Take any problem on your desk. Write exactly one paragraph on each of the six shapes an answer could take, including the two you consider ridiculous. For each, note what would have to be true for it to be the best answer.",
      success:
        "At least one option you had not considered is credible enough that you would defend including it in a paper.",
      time: "1 hour",
    },
    {
      title: "Try removing every step",
      brief:
        "Take a process map with at least ten steps. For each one, write down what would break if it disappeared tomorrow, and how often that has actually happened. Mark the steps where nobody can answer.",
      success:
        "You can name at least one step that exists with no current justification, and one whose removal would be genuinely dangerous for a reason you can put a number on.",
      time: "2 hours",
    },
    {
      title: "Ten real cases against a proposed design",
      brief:
        "Take any proposed new way of working, yours or somebody else's, and walk ten real historical cases through it on paper. Deliberately include the two most awkward you can find.",
      success:
        "You find at least one case the design does not handle, and you have written down the question it raises.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "One option and two decorations",
      why: "The decision was taken before the analysis, so the analysis cannot inform it. Worse, everybody can tell, and it costs you credibility on the next paper when you may genuinely need it.",
      fix: "Require each option to differ in a way you can name. If you cannot say what makes it structurally different, it is a bigger or smaller version of another option.",
    },
    {
      mistake: "Skipping the policy and process options",
      why: "Technology options are the ones businesses are set up to fund, so those are the ones people reach for. The cheapest and most permanent answer is frequently a rule nobody has reviewed in a decade.",
      fix: "Write a paragraph on all six shapes as a fixed step, before ruling any out.",
    },
    {
      mistake: "Automating a step that should have gone",
      why: "You have kept the complication forever and added a system to look after. The step now has a defender, which makes removing it harder than it was before.",
      fix: "Walk remove, simplify, standardise, automate in that order for every step, and record why each survivor survives.",
    },
    {
      mistake: "Designing only the smooth path",
      why: "The exceptions are where the work is. A design that handles the standard case and leaves the rest to a reduced team is worse than what it replaced for the cases that cost the most.",
      fix: "Design the exception path first, and find out what share of cases are exceptions before deciding anything.",
    },
    {
      mistake: "Removing a check without measuring what it catches",
      why: "The step was carrying a load nobody had counted. The workaround reappears within months, off the system, and nobody reports it.",
      fix: "Before removing anything, find out what it catches and how often, from data. Then decide with the number in front of you.",
    },
    {
      mistake: "No plan for getting from here to there",
      why: "The target only works from a standing start, and the business has work in progress, cases opened under old rules, and customers waiting.",
      fix: "Design the switchover as explicitly as the destination: work in progress, running both, changeover, and what happens if you have to reverse it.",
    },
    {
      mistake: "Talking to the people who do the work after the design is fixed",
      why: "They can tell you what will not work, and if the answer cannot change anything they will stop telling you. You then find out the same thing after go-live, from a workaround.",
      fix: "Involve them while the design is genuinely open, and be able to point at something that changed because of what they said.",
    },
  ],

  bestPractices: [
    "Restate the need and the confirmed cause before designing.",
    "Agree four to six ground rules before any specific design exists.",
    "Write one paragraph on each of the six shapes.",
    "Treat do nothing as a real option with real analysis.",
    "Look upstream: ask why the work arrives before designing how to handle it.",
    "Remove, simplify, standardise, automate, in that order.",
    "Make each option differ in a way you can name.",
    "Find out what share of cases are exceptions before designing the smooth path.",
    "Put a number on what a check catches before proposing its removal.",
    "Produce the gap alongside the target, not after approval.",
    "Design the switchover, including work in progress and reversing it.",
    "Walk ten real cases through the design and ask what would sink it, before presenting.",
  ],

  proTips: [
    "Write the option you least want to recommend as well as you possibly can. Two things happen. Occasionally you discover it is better than you thought, which is a big finding. More often you sharpen your own recommendation, because you now know exactly what it is better than and can say so in one sentence.",
    "Ask the sponsor what they would do if the budget were a tenth of what they expect. The answer is almost always closer to the real problem, and it often reveals that the expensive parts of the proposal serve a different purpose from the one being discussed, usually visibility or internal politics rather than the operational need.",
    "For every step you plan to keep, write down which ground rule justifies it. Steps that cannot be justified against any agreed rule are usually there because they exist today, which is the weakest reason available. This removes more from a design than any workshop.",
    "When you present options, put the criteria on the page before the options themselves. Once people have seen the options they will construct criteria that favour the one they liked on sight, and they will do it completely sincerely. Ordering the page this way is the most effective single thing you can do to keep a decision honest.",
  ],

  businessApplications: [
    "Improvement programmes, where working through remove and simplify usually produces more than any system.",
    "Choosing a system, where the design becomes the script you judge demonstrations against.",
    "Automation projects, where working out what should not be automated is the most valuable analysis.",
    "Restructures, where the process design should decide what the jobs are rather than the other way round.",
    "Responding to new legislation, where the constraint is fixed and the freedom is in how you meet it.",
    "Cost cutting, where the policy option is frequently the cheapest and almost never on the first list.",
  ],

  checklist: [
    "Need and cause restated and confirmed.",
    "Ground rules agreed with the sponsor in advance.",
    "A paragraph written on each of the six shapes.",
    "Do nothing properly analysed, including what happens if it is left.",
    "Upstream causes considered before downstream handling.",
    "Remove, simplify, standardise, automate applied to every step, with survivors justified.",
    "Each option differs in a way you can name.",
    "Exception volume established and exception paths designed.",
    "Every proposed removal of a check backed by data on what it catches.",
    "Gap produced: systems, data, policy, jobs, skills, reports.",
    "Switchover designed, including work in progress and reversing it.",
    "Ten real cases walked through, including the two worst.",
    "Group asked what would sink it, and the answers recorded as risks.",
  ],

  faqs: [
    {
      q: "How many options should a paper contain?",
      a: "Three or four that genuinely differ, plus do nothing analysed honestly. More than that and nobody reads any of them properly. Fewer and you are presenting a decision rather than a choice, which the audience will notice.",
    },
    {
      q: "What if the sponsor has already chosen?",
      a: "Test their choice properly and first. It is often right. Then present one genuine alternative with the difference stated in a sentence. You are making the choice informed, not trying to win it, and that distinction changes how the conversation goes.",
    },
    {
      q: "How detailed should the target design be?",
      a: "Detailed enough to walk real cases through it and work out the gap. Screen-level detail belongs after the option is chosen. Designing to that depth for options you will not pursue is the most common way to waste a month.",
    },
    {
      q: "Should the target be ambitious or achievable?",
      a: "Draw the achievable one and note the ambitious version separately with what would have to change to reach it. A target nobody believes gets dismissed entirely, and the useful parts of it go down with the rest.",
    },
    {
      q: "How do I stop a design becoming a wish list?",
      a: "Tie every element back to the need it serves and the ground rule that justifies it. Anything that traces to neither comes out. It is a five-minute check that removes a surprising share of any first draft.",
    },
    {
      q: "When should I bring technical people in?",
      a: "While you are coming up with options, not after. They will tell you which shapes are cheap and which are expensive in your specific environment, and that changes which options are worth developing. Bringing them in at the end gets you an estimate rather than a contribution.",
    },
  ],

  tools: [
    { name: "A page of ground rules", what: "Four to six agreed statements. The cheapest tie-breaker available and it must be agreed before the design exists.", cost: "Free" },
    { name: "The six shapes as a checklist", what: "Do nothing, process, policy, use what you own, buy, build. Used mechanically so your preference does not quietly narrow the field.", cost: "Free" },
    { name: "Ten real cases", what: "Your test set for any proposed design. Include the worst two on purpose.", cost: "Free" },
    { name: "A gap template", what: "Systems, data, policy, jobs, skills, reports, and how you get there. What your sponsor is really asking about.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "root-cause-analysis-in-practice", anchor: "confirming the cause before designing", context: "Before design" },
    { slug: "choosing-the-right-solution", anchor: "judging the options you came up with", context: "Next step" },
    { slug: "mapping-a-business-process", anchor: "drawing how it works now and how it should", context: "Modelling" },
  ],

  relatedGuides: ["choosing-the-right-solution", "root-cause-analysis-in-practice", "mapping-a-business-process"],

  conclusion: [
    "Take whatever you are currently planning to recommend and spend one hour writing a paragraph on each of the six shapes, including the ones you have already dismissed. If that hour turns up one credible option you had not considered, and it usually does, it will be the best-value hour in your week.",
  ],
};

export default guide;
