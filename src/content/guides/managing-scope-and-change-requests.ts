import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "managing-scope-and-change-requests",
  seoTitle: "Why Projects Grow, and How to Show the Trade",
  metaDescription:
    "Scope does not grow because somebody was weak. It grows through twenty reasonable yeses nobody added up. How to make the trade visible every time.",
  title: "Why Projects Grow and What to Do About It",
  keywords: [
    "scope creep",
    "change request process",
    "scope management",
    "change control business analyst",
    "requirements change",
    "impact of change requests",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Scope creep usually gets described as somebody not being firm enough. That is not what I have seen. Projects grow through a run of individually reasonable decisions, each one small, each approved by somebody sensible, and none of them obviously connected to the date that eventually slips.",
    "The mechanism is nearly always the same. A change arrives with a benefit attached and no cost attached, because the cost is spread out and lands in the future. Nobody is comparing it against what it pushes out, because nothing has been named as pushed out. Say yes twenty times and you have doubled the project without any single moment where anybody did anything unreasonable.",
    "So the work is not about refusing things. It is about making the trade visible every time, so each yes is a real decision rather than a default. This guide covers how to have something worth defending, how to assess a change in a way people trust, how to present the trade, and how to say no without becoming the person everybody routes around.",
  ],

  whyItMatters: [
    "Unmanaged growth is the most common reason capable teams miss dates, and it damages more than the schedule. The parts of the original scope that carried the value get squeezed at the end, because they are usually the hardest, so a project that grew by a fifth frequently delivers less of what it was funded for.",
    "It also wrecks the credibility of estimates. A team whose estimates keep getting exceeded because the scope moved underneath them gets assumed to be bad at estimating, and the response is usually more pressure on estimates rather than better control of scope.",
    "And there is a positioning question for you personally. Handle this badly and you become either a rubber stamp, in which case you add nothing, or an obstacle, in which case people stop telling you about changes and they arrive with no analysis at all. Neither is quick to recover from.",
  ],

  coreConcepts: [
    {
      term: "You cannot manage change without something to compare against",
      explain:
        "A dated, agreed statement of what is in, at a level of detail somebody could actually check against. Without it, every argument about whether something is a change comes down to memory.",
      detail:
        "It does not need to be a heavy document. A list of what people will be able to do, dated and agreed, does the job. What it has to be is specific enough that two reasonable people would agree whether a given request is inside it.",
    },
    {
      term: "Three kinds of change, and only one is creep",
      explain:
        "Discovery, where analysis turns up a real need nobody knew about. Correction, where something agreed turns out to be wrong. And addition, where somebody wants something new.",
      detail:
        "The first two are normal and healthy, and treating them as failures teaches people to hide what they have found. Only the third needs a trade. Sorting each request into one of the three changes the conversation immediately.",
    },
    {
      term: "Every change has four costs and three are invisible",
      explain:
        "The building. The analysis and testing. The disruption to everything already under way. And the delay to whatever it pushes out.",
      detail:
        "The third is the one people underestimate most. Changing something already specified and half built costs far more than the same change a month earlier, and that difference should be said out loud rather than absorbed.",
    },
    {
      term: "Judge it against the need, not against the effort",
      explain:
        "The first question is which business need this serves, not how long it takes. A change serving no stated need is a preference, however small.",
      detail:
        "This is where keeping the links pays off. Where every requirement notes which need it serves, a request can be tested in about thirty seconds, and the conversation stays analytical instead of becoming a negotiation about estimates.",
    },
    {
      term: "Present the trade, never the refusal",
      explain:
        "The useful sentence is: we can do this, and here is what moves. Not no. A trade is a decision somebody can take. A refusal is a position they will argue with or go round.",
      detail:
        "Have the thing it displaces identified before the conversation. Asking what should we drop in the abstract produces nothing. Saying this would push out the reporting work, are you comfortable with that, produces an answer.",
    },
    {
      term: "Add up the small ones, because that is how it really grows",
      explain:
        "Individually trivial requests get approved individually and never looked at together. Twenty of them is a significant piece of work nobody decided to do.",
      detail:
        "Keep a running total of approved changes as a percentage of the original estimate and report it. Making the total visible is far more effective than resisting each item.",
    },
    {
      term: "Be honest about faults versus changes",
      explain:
        "A fault is where the build does not match what was agreed. A change is where what was agreed turns out to have been wrong. Both are legitimate and they get funded differently.",
      detail:
        "Resist relabelling your own mistakes as change requests. It is visible to everybody, it damages trust badly, and it hides the feedback you needed about why the requirement was wrong.",
    },
    {
      term: "Late changes cost more, and the curve is steep",
      explain:
        "The same request costs a conversation while you are writing, a rebuild during the build, and a change request plus a release after go-live.",
      detail:
        "Say this out loud rather than assuming people know. A stakeholder who understands that waiting two weeks multiplies the cost will raise things earlier, which is the actual goal.",
    },
    {
      term: "Some changes should be accepted immediately",
      explain:
        "Legal obligations, anything that would make the delivered thing unusable, and corrections to your own mistakes. Handle these fast and visibly.",
      detail:
        "Being quick and helpful on the changes that obviously should happen buys the credibility you need on the ones that should not. A BA who says yes rapidly when yes is right gets heard differently when they say this pushes something out.",
    },
    {
      term: "Write down what you turned down, and why",
      explain:
        "A list of rejected changes with reasons is the document people come back to most, because the same idea reappears every few months with a different sponsor.",
      detail:
        "It also protects the person who asked. Somebody whose request was recorded, assessed and declined with a reason has been treated seriously, which is very different from a request that quietly disappeared.",
    },
    {
      term: "Taking things out is a change too",
      explain:
        "When something gets dropped, record it with the same care as an addition: what was removed, why, which need is now unmet, and who accepted that.",
      detail:
        "Otherwise the project gets judged at the end against the original scope by people who were not in the meeting where it shrank, which is a bad conversation to have with no record.",
    },
    {
      term: "Agree the cut-off at the start, not when the date is at risk",
      explain:
        "A stated point after which only faults and legal changes are accepted, agreed in advance rather than imposed when things are already tight.",
      detail:
        "Cut-offs announced under pressure feel arbitrary and get overruled. Cut-offs agreed at the start feel like a plan, and they give you something to point at that is not your own judgement.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Twenty small yeses.",
      walkthrough:
        "The problem: a project missed its date and the post-mortem blamed poor estimating. What was happening: over four months it had accepted a run of minor additions. Each was approved by a sensible person on reasonable grounds, and each was genuinely small. Nobody tracked the total. A BA later added up the approved changes against the original estimate and found they came to a substantial fraction of the original scope.",
      result:
        "What changed: they started reporting a running total alongside progress. No individual decision had been wrong and the outcome was a missed date and a team assumed to be bad at estimating. Making the total visible does more to control scope than resisting any individual request, and it does not require anybody to be the obstacle.",
    },
    {
      kind: "illustration",
      scenario: "The trade that took ninety seconds.",
      walkthrough:
        "The problem: a director asked for an addition to a system already being built. What was happening: rather than assessing it on its own, the BA came back with two lines. This is about two weeks of work, and the only thing currently in scope of a similar size is handling the exceptions on the bulk upload. Which would you rather have by the launch date?",
      result:
        "What changed: the director chose the exception handling without hesitating, and the addition moved to a later phase where it was eventually dropped. Nobody had to refuse anything and no relationship was damaged. Identifying what it would displace before the conversation is what turns an argument about scope into a decision about priority.",
    },
    {
      kind: "illustration",
      scenario: "The change that was really a mistake.",
      walkthrough:
        "The problem: during testing, the business found the system could not handle a customer with two accounts. The project logged it as a change request, since the requirement had not mentioned it. What was happening: the BA went back through the original interview notes and found the case had been described in an interview and never carried into the specification.",
      result:
        "What changed: it got logged honestly as an analysis mistake rather than a change. That cost the project an uncomfortable conversation and produced something more useful: a check of whether the same kind of case had been missed elsewhere, which it had, in two places. Relabelling would have protected a number and lost both the trust and the pattern.",
    },
  ],

  learningPath: [
    {
      title: "Agree and date what is in",
      body: "A list of what people will be able to do, with numbers, agreed and dated. Specific enough that two reasonable people would agree whether a given request is inside it.",
      effort: "Half a day",
      outcome: "The thing without which no conversation about a change can be settled.",
    },
    {
      title: "Set up a simple change log",
      body: "Request, who asked, date, which of the three kinds, which need it serves, effort, what it displaces, decision, who decided, when. One row per request.",
      effort: "1 hour",
      outcome: "A record that makes both the individual trade and the running total visible.",
    },
    {
      title: "Sort every incoming request",
      body: "Discovery, correction or addition. Do this before assessing the effort, because it decides the whole conversation.",
      effort: "Minutes per request",
      outcome: "Healthy changes handled fast and additions sent to a trade conversation.",
    },
    {
      title: "Test it against the need before the effort",
      body: "Which business need does this serve? A request serving no stated need is a preference, and that finding is more useful than an estimate.",
      effort: "Minutes per request",
      outcome: "A defensible basis for the conversation that is not just your opinion.",
    },
    {
      title: "Find what it would displace before you present it",
      body: "Never ask what should we drop in the abstract. Come with a specific candidate of similar size and ask which they would rather have.",
      effort: "1 hour per significant request",
      outcome: "A decision rather than a negotiation.",
    },
    {
      title: "Report the running total every fortnight",
      body: "Approved changes as a percentage of the original estimate, alongside progress. Make it part of normal reporting rather than a special escalation.",
      effort: "15 minutes a fortnight",
      outcome: "Growth that is visible while somebody can still do something about it.",
    },
    {
      title: "Agree the cut-off at the start",
      body: "A date after which only faults and legal changes get in. Agreed while nobody is under pressure, so it does not read as arbitrary later.",
      effort: "15 minutes",
      outcome: "Something to point at that is not your own judgement.",
    },
  ],

  exercises: [
    {
      title: "Add up the changes",
      brief:
        "Take any project in your business that has been running a few months. Add up every approved change and express it as a percentage of the original estimate. Compare that against how much the schedule has slipped.",
      success:
        "You have a number, and you can say whether the date problem is really an estimating problem or a scope problem.",
      time: "2 hours",
    },
    {
      title: "Sort a month of requests",
      brief:
        "Take the last month of change requests on any project and sort each into discovery, correction or addition. Count each group.",
      success:
        "You can say what proportion is genuine addition, which is usually much smaller than people assume, and how much is analysis catching up.",
      time: "1 hour",
    },
    {
      title: "Find what it displaces",
      brief:
        "Take one live change request and identify a specific item of similar size currently in scope that it would push out. Write the two-line trade you would present.",
      success:
        "You have a sentence a sponsor could answer in under a minute, naming both options rather than asking an open question.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Having nothing to compare against",
      why: "Without a dated, agreed statement of what is in, every argument about whether something is a change comes down to memory and seniority, and the more senior memory wins.",
      fix: "Agree a dated list specific enough to check against. It need not be heavy, only unambiguous.",
    },
    {
      mistake: "Treating every change as a failure",
      why: "Discovery and correction are how analysis improves. Punishing them teaches people to hide what they have found, and it arrives later and worse.",
      fix: "Sort into discovery, correction and addition, and handle the first two quickly and without blame.",
    },
    {
      mistake: "Assessing changes one at a time and never together",
      why: "Twenty trivial approvals is a significant project nobody decided to do, and it only becomes visible when the date slips.",
      fix: "Report approved changes as a running percentage of the original estimate alongside normal progress.",
    },
    {
      mistake: "Saying no instead of showing the trade",
      why: "A refusal is a position to argue with or go round. It also makes you the obstacle, after which changes start arriving with no analysis at all.",
      fix: "Always show what moves. We can do this and it pushes that out, which would you rather have.",
    },
    {
      mistake: "Asking what should we drop with nothing in mind",
      why: "Nobody can prioritise in the abstract, so the question produces nothing and the change gets absorbed by default.",
      fix: "Identify a specific item of similar size before the conversation and name it.",
    },
    {
      mistake: "Calling your own mistakes change requests",
      why: "It is obvious to everybody involved, it damages trust out of proportion, and it hides the pattern that would have told you where else the same gap exists.",
      fix: "Log them honestly, then check whether the same kind of case has been missed elsewhere.",
    },
    {
      mistake: "Not writing down what you turned down",
      why: "The same request comes back every few months with a new sponsor, and the whole discussion runs again from the beginning.",
      fix: "Keep the rejected list with reasons. It is the most reused document you will maintain.",
    },
    {
      mistake: "Announcing a cut-off when the date is already at risk",
      why: "It reads as arbitrary and defensive, so anybody senior enough overrules it, and everybody learns the cut-off is negotiable.",
      fix: "Agree the cut-off at the start of the project, in writing, while everybody is relaxed.",
    },
  ],

  bestPractices: [
    "Agree and date something specific enough to check requests against.",
    "Sort every request into discovery, correction or addition.",
    "Handle discovery and correction quickly and without blame.",
    "Test it against the business need before assessing effort.",
    "Cost all four impacts, including disruption and what it pushes out.",
    "Find what it displaces before presenting any trade.",
    "Present a trade, never a refusal.",
    "Report approved changes as a running percentage of the original estimate.",
    "Separate faults from changes honestly, including your own mistakes.",
    "Say plainly that late changes cost more, so people raise things earlier.",
    "Accept legal and usability-critical changes fast and visibly.",
    "Write down what you turned down, with reasons.",
    "Record things taken out with the same care as things added.",
    "Agree the cut-off at the start.",
  ],

  proTips: [
    "When a change request arrives, ask what has changed since we agreed the original. Sometimes the world moved, which is legitimate and worth knowing. Often the answer is that somebody has only just properly pictured the thing, which means your specification was not concrete enough for them to react to. That is a finding about your own work rather than about their discipline.",
    "Keep a note of who raises the most changes and look for a pattern rather than a culprit. Usually one team generates a disproportionate share, and usually it is because they were consulted late, or because their part of the process was written down from a manager's description rather than from watching. The fix is upstream, not in the change process.",
    "Be visibly fast on the changes that obviously should happen. Approving something correct within a day buys you far more credibility than any amount of process, and it is what makes people accept a trade conversation on the ones that are genuinely marginal.",
    "Put the running total in the same report as the progress figures, not in a separate escalation. When they sit side by side, the relationship between them becomes obvious to everybody reading, and you never have to make the argument yourself.",
  ],

  businessApplications: [
    "Fixed dates, where every accepted change pushes something out and the trade is unavoidable.",
    "Fixed-price contracts with a supplier, where change control has direct commercial consequences.",
    "Legal deadlines, where some changes cannot be refused and everything else has to give way.",
    "Programmes with several teams, where a change in one team's scope has knock-on effects nobody sees.",
    "Long-running product work, where what is in scope is a rolling agreement rather than a fixed one.",
    "Bringing two businesses together, where scope grows continuously as each side discovers what the other does.",
  ],

  checklist: [
    "Dated statement of what is in, specific enough to check against.",
    "Change log in place with a sorting column and a what-it-displaces column.",
    "Every request sorted into discovery, correction or addition.",
    "Each request tested against a stated business need.",
    "All four costs assessed, including disruption to work in progress.",
    "A specific item identified as displaced before presenting any trade.",
    "Decision, who decided and date recorded for every request.",
    "Running total of approved change reported alongside progress.",
    "Faults and changes separated honestly.",
    "Rejected changes recorded with reasons.",
    "Things taken out recorded with the unmet need named.",
    "Cut-off agreed at project start.",
  ],

  faqs: [
    {
      q: "How do I say no without damaging the relationship?",
      a: "Do not say no. Say what it would push out and let them choose. A trade keeps you analytical and keeps the decision with the person who owns priority, which is where it belongs anyway.",
    },
    {
      q: "What if the sponsor approves every change?",
      a: "Then report the total every fortnight against the original estimate and the date. Sponsors approving things one at a time are usually unaware of the total, and the total is what changes their behaviour rather than any individual conversation.",
    },
    {
      q: "Is scope change a sign of bad analysis?",
      a: "Some of it. Discovery and correction are normal, and a project with none is probably one where nobody is looking. What indicates weak analysis is the same kind of gap appearing repeatedly, which is why sorting requests is worth the minutes it takes.",
    },
    {
      q: "How does this work when we deliver in short cycles?",
      a: "The mechanism differs and the arithmetic does not. Priority order replaces a fixed scope, so the trade is built in: adding something means something else moves down. The failure there is a list growing faster than it gets delivered while everybody believes it is all still coming.",
    },
    {
      q: "Who should approve changes?",
      a: "Whoever owns the priority and the budget, usually the sponsor. Your job is to sort, assess and present the trade. If you are approving changes yourself, you have taken on a decision that is not yours and will get blamed for it later.",
    },
    {
      q: "What do I do when a change arrives after the cut-off?",
      a: "Assess it anyway and route it down the agreed path: faults and legal items in, everything else to the next phase. Applying the cut-off consistently is what makes it mean anything, including the times when it is inconvenient for you.",
    },
  ],

  tools: [
    { name: "A dated statement of what is in", what: "What people will be able to do, agreed. Light enough to maintain, specific enough to check requests against.", cost: "Free" },
    { name: "A change log with a displacement column", what: "Request, kind, need served, effort, what it pushes out, decision, who decided, date.", cost: "Free" },
    { name: "A running scope total", what: "Approved change as a percentage of the original estimate, reported next to progress rather than separately.", cost: "Free" },
    { name: "A list of what you turned down", what: "With reasons. The most reused document you will keep, because the same ideas come back.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "turning-business-needs-into-requirements", anchor: "the links that make assessing a change fast", context: "Foundation" },
    { slug: "impact-assessment-before-a-change", anchor: "working out what a change touches", context: "Assessment" },
    { slug: "stakeholder-management-in-practice", anchor: "handling the conversation itself", context: "Negotiation" },
  ],

  relatedGuides: ["turning-business-needs-into-requirements", "impact-assessment-before-a-change", "stakeholder-management-in-practice"],

  conclusion: [
    "Add up every approved change on your current project, express it as a percentage of the original estimate, and put that number next to the progress figures in your next report. You will not have to make the argument about scope. The two numbers sitting side by side will make it for you.",
  ],
};

export default guide;
