import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "designing-the-future-state",
  seoTitle: "Designing the Future State and Generating Real Options",
  metaDescription:
    "How a Business Analyst produces genuinely different solution options instead of one dressed-up preference, and designs a target process that survives contact with the business.",
  title: "Designing the Future State",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 18,

  intro: [
    "Most option papers contain one option. There is the recommendation, there is do nothing, which nobody intends to choose, and there is a third entry constructed to be visibly worse so the recommendation looks considered. Everyone in the room knows this and nobody says it, and the decision was taken before the paper was written.",
    "That is a failure of analysis rather than a failure of honesty. Generating genuinely different options is hard, because by the time you understand a problem well enough to solve it, you already have a preferred solution, and every subsequent thought is recruited to support it. Designing a future state properly means working against that pull deliberately.",
    "This guide covers both halves: how to produce options that are actually different from each other, and how to design a target process that people will still be following in a year. The second half matters more than it sounds. A future state that ignores the exceptions, the cover arrangements and the reason a step exists will be quietly reverted within two quarters, and nobody will tell you.",
  ],

  whyItMatters: [
    "The option you never generated cannot be chosen. Most organisations settle on a solution shape early, usually the one that matches whatever the last project did or what a vendor demonstrated recently, and then all the analytical effort goes into the details of that shape rather than into whether it is the right one.",
    "Designing the future state is also where a BA earns the most leverage per hour. A well-chosen design decision made in a week of thinking can remove months of build work. Nobody notices the work that was avoided, which is why this part of the job is underappreciated and why you have to be able to explain it.",
    "And there is a durability question. Delivering a process that works is easy in the first month, when everyone is paying attention. Delivering one that still works when the champion has moved on, two people are covering three roles and volumes have doubled is a different design problem, and it is the one that actually matters.",
  ],

  coreConcepts: [
    {
      term: "Six option shapes, and you should consider all of them",
      explain:
        "Do nothing differently. Change the process without technology. Change the policy or the rule. Configure something you already own. Buy something. Build something. Most option papers cover two of the six.",
      detail:
        "Force yourself to write one paragraph on each shape before ruling any out. It takes an hour. Two of the six will be obviously wrong, and one of the remaining four is frequently better than what you were going to recommend.",
    },
    {
      term: "Do nothing is a real option and deserves a real analysis",
      explain:
        "Not a straw man. What happens if this is left alone: does the cost grow, stay flat, or resolve itself when a system is retired next year?",
      detail:
        "Sometimes the honest answer is that the problem is shrinking on its own or will disappear with a change already planned. Recommending no action is a legitimate and career-enhancing thing for a BA to do, and it is remembered.",
    },
    {
      term: "Look upstream before you design anything downstream",
      explain:
        "Most requests are to handle a volume of work more efficiently. The better question is why the work arrives at all.",
      detail:
        "A chase letter can be automated or the original request letter can be made clearer so the chase is not needed. The second is smaller, cheaper and permanent. Every process step is a candidate for elimination before it is a candidate for optimisation.",
    },
    {
      term: "The order of preference: eliminate, simplify, standardise, then automate",
      explain:
        "Automating a step preserves it forever, complete with its complexity. Removing it is free to run and free to maintain.",
      detail:
        "This ordering is not a slogan, it is a sequence you should walk explicitly for every step in the future state. Can this go? If not, can it be simpler? If not, can it be the same everywhere? Only then, should a machine do it?",
    },
    {
      term: "Options must differ on a dimension that matters",
      explain:
        "Three options that vary only in how much of the same system you build are one option with three budgets. Real options differ in who does the work, where the control sits, what gets given up, or how fast the benefit arrives.",
      detail:
        "State the dimension explicitly at the top of each option. If you cannot name what makes this option structurally different from the one above it, you have written a scope variant rather than an option.",
    },
    {
      term: "Design for the exceptions, not the happy path",
      explain:
        "Any future state can handle the standard case. The design question is what happens to the twenty per cent that do not fit, and whether the new process makes those cases better or dumps them on a person with fewer tools than before.",
      detail:
        "The failure mode is characteristic: automate eighty per cent of volume and leave the remainder to a shrinking team who now have no practice at the routine work that used to keep them fluent. Design the exception path first and the happy path will look after itself.",
    },
    {
      term: "Design principles, agreed before the design",
      explain:
        "Four to six statements the sponsor signs up to, which then resolve dozens of later arguments. For example: no data entered twice. Customer-facing turnaround takes priority over internal convenience. Nothing requires a person to be in the office.",
      detail:
        "The value is that they are agreed before anyone knows which specific decisions they will settle. Once a design argument is live, principles get selected to justify positions rather than to guide them.",
    },
    {
      term: "Map the gap, not just the target",
      explain:
        "The difference between current and future state is the actual work: what has to be built, what has to be configured, what policies change, what roles change, what data has to move, what people need to learn.",
      detail:
        "A future state with no gap analysis is a picture. The gap is where the cost, the timeline and most of the risk live, and it is the thing your sponsor is really trying to understand when they ask what this involves.",
    },
    {
      term: "Design the transition, not only the destination",
      explain:
        "How does the business get from here to there while continuing to operate? What happens to work in progress, to cases opened under the old rules, to the team during the changeover?",
      detail:
        "A design that is only viable after a clean break is not a design for a business that has customers waiting. This is where most elegant target states quietly fail.",
    },
    {
      term: "Test the design against real cases before you present it",
      explain:
        "Take ten real cases from last month, including the two most awkward, and walk each one through the proposed future state.",
      detail:
        "This is the cheapest quality control available and it is skipped constantly. Every case that does not fit is a design defect found for free, in a room, rather than in a build.",
    },
    {
      term: "Ask what would have to be true for this to fail",
      explain:
        "Put it to the group before the decision rather than after. It gives people permission to voice doubts without appearing disloyal to a direction that is starting to have momentum.",
      detail:
        "The answers are your risk register, written by the people best placed to know, and they arrive at the only moment when acting on them is still cheap.",
    },
    {
      term: "Involve the people who will run it, early and genuinely",
      explain:
        "Not as a communication exercise. The operators know which parts of your design will not survive Friday afternoon, and they will tell you if they believe the answer can still change something.",
      detail:
        "There is a hard version of this test: if nothing in your design has changed as a result of talking to the people who do the work, you did not consult them, you briefed them, and they know the difference.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The option nobody had written down.",
      walkthrough:
        "A finance team wants a system to manage the approval of supplier invoices under a certain value, which currently consume a large share of the team's week. The BA writes a paragraph on each of the six shapes. The policy option, which nobody had considered, turns out to be that the approval threshold was set years ago and has not moved with inflation or with the growth of the business. Raising it would remove a large majority of the cases from the approval process entirely.",
      result:
        "The change required a policy decision, a control review and no software at all. It was implemented in weeks. The point is not that policy changes are always the answer. It is that the option existed the whole time, and it only surfaced because the analyst was required by their own method to write a paragraph about a shape they did not initially believe in.",
    },
    {
      kind: "illustration",
      scenario: "Ten real cases through the future state.",
      walkthrough:
        "Before presenting a redesigned onboarding process, the BA takes ten real cases from the previous month, deliberately including the two that had gone worst. Seven pass through the new design cleanly. Three do not: one involves a customer who is also a supplier, one involves a group structure where the paying entity differs from the trading entity, and one had a document that arrived after the case was closed.",
      result:
        "All three were designable once known, and two required a decision from the business rather than a technical fix. Had the design been presented and approved first, those three would have arrived during build as change requests, at which point they would have been described as scope creep rather than as analysis that had not been done.",
    },
    {
      kind: "illustration",
      scenario: "The elegant design that was reverted in a quarter.",
      walkthrough:
        "A new process removes a manual check on the grounds that the upstream system now validates the same thing. It works. Six months later the check is back, performed on a spreadsheet, because the upstream validation does not cover cases entered through a secondary channel that the design team did not know existed, and a supervisor got tired of the resulting corrections.",
      result:
        "Nobody reported this. The workaround simply reappeared, which is what happens when a design removes something that was carrying a load nobody had measured. Before eliminating any step, ask what it catches and how often, then check the answer against data rather than against the belief of the person who wanted it removed.",
    },
  ],

  learningPath: [
    {
      title: "Restate the need and the confirmed cause",
      body: "Before designing anything, write the need and the root cause in one paragraph each. If either is uncertain, design work is premature and you will produce options for a problem you have not established.",
      effort: "1 hour",
      outcome: "A stated target for the design to hit, which is also what you will evaluate options against.",
    },
    {
      title: "Agree four to six design principles with the sponsor",
      body: "Short, decidable statements that will settle later arguments. Get them agreed before any specific design exists, because after that they get chosen to justify positions.",
      effort: "1 hour plus a conversation",
      outcome: "A set of tie-breakers that saves days of circular debate during detailed design.",
    },
    {
      title: "Write one paragraph on each of the six option shapes",
      body: "Do nothing, process change, policy change, configure what you own, buy, build. Force yourself through all six even where one feels obviously wrong.",
      effort: "2 hours",
      outcome: "Usually one credible option you were not going to consider, which is the entire return on the exercise.",
    },
    {
      title: "Walk the elimination sequence over every step",
      body: "For each step in the current process: can it be removed, simplified, standardised, and only then automated. Record why each surviving step survives.",
      effort: "Half a day",
      outcome: "A future state that is smaller than the current one, rather than the same shape with software attached.",
    },
    {
      title: "Draw the future state and the gap together",
      body: "The target process in the same notation as the current state, plus an explicit list of what has to change: systems, data, policy, roles, skills, reports.",
      effort: "1-2 days",
      outcome: "The artefact your sponsor actually needs in order to understand scale and cost.",
    },
    {
      title: "Design the exception paths and the transition",
      body: "What happens to the cases that do not fit, and how the business gets from here to there while still operating. Both are usually left until after approval, which is too late.",
      effort: "1 day",
      outcome: "A design that is viable in an operating business rather than only on a diagram.",
    },
    {
      title: "Test with ten real cases and a pre-mortem",
      body: "Walk ten real cases through the design, including the worst two. Then ask the group what would have to be true for this to fail. Record everything.",
      effort: "Half a day",
      outcome: "Design defects found before approval, and a risk register written by the people who know.",
    },
  ],

  exercises: [
    {
      title: "Six shapes in an hour",
      brief:
        "Take any problem currently on your desk. Write exactly one paragraph on each of the six option shapes, including the two you consider ridiculous. For each, note what would have to be true for it to be the best answer.",
      success:
        "At least one option you had not previously considered is credible enough that you would defend including it in a paper.",
      time: "1 hour",
    },
    {
      title: "The elimination pass",
      brief:
        "Take a process map with at least ten steps. For each step, write down what would break if it disappeared tomorrow, and how often that has actually happened. Mark the steps where nobody can answer.",
      success:
        "You can name at least one step that exists without a current justification, and one step whose removal would be genuinely dangerous for a reason you can quantify.",
      time: "2 hours",
    },
    {
      title: "Ten real cases against a proposed design",
      brief:
        "Take any proposed future process, yours or someone else's, and walk ten real historical cases through it on paper. Deliberately include the two most awkward cases you can find.",
      success:
        "You have found at least one case the design does not handle, and you have written the design question it raises.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Writing one option and two decorations",
      why: "The decision was taken before the analysis, so the analysis cannot inform it. Worse, everyone can tell, and it costs you credibility on the next paper you write, when you may genuinely need it.",
      fix: "Require that each option differs on a named dimension. If you cannot state what makes an option structurally different, it is a scope variant of another option.",
    },
    {
      mistake: "Skipping the policy and process options",
      why: "Technology options are the ones the organisation is set up to fund, so they are the ones people reach for. The cheapest and most durable answer is frequently a rule that has not been reviewed in a decade.",
      fix: "Write a paragraph on all six shapes as a fixed step, before any option is ruled out.",
    },
    {
      mistake: "Automating a step that should have been removed",
      why: "You have preserved the complexity permanently and added a system to maintain. The step now has a defender, which makes it harder to remove later than it was before.",
      fix: "Walk eliminate, simplify, standardise, automate in that order for every step, and record why each survivor survives.",
    },
    {
      mistake: "Designing only the happy path",
      why: "The exceptions are where the work is. A design that handles the standard case and leaves the rest to a reduced team is worse than the process it replaced for the cases that cost the most.",
      fix: "Design the exception path first. Establish exception volume as a proportion before deciding anything.",
    },
    {
      mistake: "Removing a control without measuring what it catches",
      why: "The step was carrying a load nobody had quantified. The workaround reappears within months, off-system, and nobody reports it.",
      fix: "Before eliminating any check, find out what it catches and how often, from data. Then decide with the number in front of you.",
    },
    {
      mistake: "No transition design",
      why: "The target state is achievable only from a standing start, and the business has work in progress, cases opened under old rules, and customers waiting.",
      fix: "Design the changeover as explicitly as the destination: in-flight work, dual running, cutover, and what happens if it has to be reversed.",
    },
    {
      mistake: "Consulting operators after the design is fixed",
      why: "They can tell you what will not work, and if the answer cannot change anything they will stop telling you. You then discover the same information after go-live, from a workaround.",
      fix: "Involve them while the design is genuinely open, and be able to point to something in the design that changed because of what they said.",
    },
  ],

  bestPractices: [
    "Restate the need and the confirmed root cause before designing.",
    "Agree four to six design principles before any specific design exists.",
    "Write one paragraph on each of the six option shapes.",
    "Treat do nothing as a real option with a real analysis.",
    "Look upstream: ask why the work arrives before designing how to handle it.",
    "Apply eliminate, simplify, standardise, automate in that order.",
    "Make each option differ on a named dimension.",
    "Establish exception volume before designing the happy path.",
    "Quantify what a control catches before proposing its removal.",
    "Produce the gap analysis alongside the target, not after approval.",
    "Design the transition, including in-flight work and reversal.",
    "Walk ten real cases through the design and run a pre-mortem before presenting.",
  ],

  proTips: [
    "Write the option you least want to recommend as well as you can write it. Two things happen. Occasionally you discover it is better than you thought, which is a large finding. More often you sharpen your own recommendation, because you now know precisely what it is better than and can say so in one sentence.",
    "Ask the sponsor what they would do if the budget were a tenth of what they expect. The answer is almost always closer to the real problem, and it frequently exposes that the expensive parts of the proposal serve a different purpose from the one being discussed, usually visibility or organisational politics rather than the operational need.",
    "For every step you plan to keep, write down which principle justifies it. Steps that cannot be justified against any agreed principle are usually there because they exist today, and that is the weakest reason available. This exercise removes more from a design than any workshop.",
    "When you present options, put the decision criteria on the page before the options themselves. Once people have seen the options they will construct criteria that favour the one they liked on sight, and they will do it sincerely. Ordering the page this way is the single most effective structural thing you can do to keep a decision honest.",
  ],

  businessApplications: [
    "Process improvement programmes, where the elimination sequence usually produces more value than any system.",
    "System selection, where the future state design becomes the evaluation script for vendor demonstrations.",
    "Automation initiatives, where the question of what should not be automated is the highest-value analysis.",
    "Restructuring and role redesign, where the process design determines what the roles should be rather than the reverse.",
    "Regulatory response, where the constraint is fixed and the design freedom is in how it is met.",
    "Cost reduction, where the policy option is frequently the cheapest and is almost never on the initial list.",
  ],

  checklist: [
    "Need and root cause restated and confirmed.",
    "Design principles agreed with the sponsor in advance.",
    "A paragraph written on each of the six option shapes.",
    "Do nothing analysed properly, including what happens if the problem is left.",
    "Upstream causes considered before downstream handling.",
    "Elimination sequence applied to every step, with survivors justified.",
    "Each option differs on a named dimension.",
    "Exception volume established and exception paths designed.",
    "Every proposed control removal supported by data on what it catches.",
    "Gap analysis produced: systems, data, policy, roles, skills, reports.",
    "Transition designed, including in-flight work and reversal.",
    "Ten real cases walked through the design, including the two worst.",
    "Pre-mortem run and the answers recorded as risks.",
  ],

  faqs: [
    {
      q: "How many options should an option paper contain?",
      a: "Three or four that genuinely differ, plus do nothing analysed honestly. More than that and nobody reads them properly. Fewer and you are presenting a decision rather than a choice, which the audience will notice.",
    },
    {
      q: "What if the sponsor has already chosen?",
      a: "Test their choice properly and first. It is often right. Then present one genuine alternative with the difference stated in a sentence. You are making the choice informed, not trying to win it, and that distinction changes how the conversation goes.",
    },
    {
      q: "How detailed should a future state process be?",
      a: "Detailed enough to walk real cases through it and to identify the gap. Screen-level detail belongs in specification, after the option is chosen. Designing to that depth for options you will not pursue is the most common way to waste a month.",
    },
    {
      q: "Should the future state be aspirational or achievable?",
      a: "Draw the achievable target and note the aspirational one separately with what would have to change to reach it. An unachievable target state gets dismissed entirely, and the useful parts of it go down with the rest.",
    },
    {
      q: "How do I stop a design becoming a wish list?",
      a: "Tie every element back to the need it serves and the principle that justifies it. Anything that traces to neither comes out. This is a five-minute check that removes a surprising proportion of any first draft.",
    },
    {
      q: "When should I bring in technical people?",
      a: "During option generation, not after. They will tell you which shapes are cheap and which are expensive in your specific environment, and that information changes which options are worth developing. Bringing them in at the end gets you an estimate rather than a design contribution.",
    },
  ],

  tools: [
    { name: "A design principles page", what: "Four to six agreed statements. The cheapest tie-breaker available and it must be agreed before the design exists.", cost: "Free" },
    { name: "The six option shapes as a checklist", what: "Do nothing, process, policy, configure, buy, build. Used mechanically so preference does not silently narrow the field.", cost: "Free" },
    { name: "Ten real historical cases", what: "The test set for any proposed design. Include the worst two deliberately.", cost: "Free" },
    { name: "A gap analysis template", what: "Systems, data, policy, roles, skills, reports, and the transition. What your sponsor is really asking about.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "root-cause-analysis-in-practice", anchor: "confirming the cause before designing", context: "Before design" },
    { slug: "choosing-the-right-solution", anchor: "evaluating the options you generated", context: "Next step" },
    { slug: "mapping-a-business-process", anchor: "drawing the current and target states", context: "Modelling" },
  ],

  relatedGuides: ["choosing-the-right-solution", "root-cause-analysis-in-practice", "mapping-a-business-process"],

  conclusion: [
    "Take whatever you are currently planning to recommend and spend one hour writing a paragraph on each of the six option shapes, including the ones you have already dismissed. If that hour surfaces one credible option you had not considered, and it usually does, it will be the best-value hour in your week.",
  ],
};

export default guide;
