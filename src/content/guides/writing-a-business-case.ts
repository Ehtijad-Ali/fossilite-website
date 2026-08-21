import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "writing-a-business-case",
  seoTitle: "Writing a Business Case a Finance Director Will Believe",
  metaDescription:
    "Where it is now, benefits with somebody's name on them, the three costs everybody forgets, and what would make you stop. How to write one that survives hostile questions.",
  title: "Writing a Business Case People Believe",
  keywords: [
    "business case template",
    "cost benefit analysis",
    "benefits realisation",
    "business case for a project",
    "quantifying benefits",
    "business analyst business case",
  ],
  category: "business-strategy",
  level: "Intermediate",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "A business case is not a persuasion document. It is a request to spend somebody else's money, and the person reading it has seen dozens that promised savings which never turned up in any budget. Their scepticism is earned and it is the audience you are actually writing for.",
    "The single most common problem is a benefit with nowhere to go. The case says the change will save so many hours a week. Nobody asks what happens to those hours. Headcount does not drop, output does not rise, and no line in any budget goes down, so the saving exists only in the document. Do that twice and your next case gets read differently.",
    "This guide is the version that survives a finance director in a bad mood. A real starting point, benefits with names attached, the three costs everybody forgets, an honest paragraph about what this will not do, and what would make you stop, which is the section that most separates a professional case from a sales pitch.",
  ],

  whyItMatters: [
    "This is where your analysis turns into a decision. Everything upstream, the problem, the cause, the options work, reaches the sponsor through this document, and if it is not credible then none of that counts for anything.",
    "It is also the agreement you get judged against afterwards. What you write here decides what gets measured later, which is why vague benefits are tempting to write and destructive in the end: a promise nobody can check cannot be shown to have been kept, so the project gets judged on whether it launched on time.",
    "And the effect on your credibility adds up. Sponsors remember whose numbers turned out to be roughly right. That reputation is slow to build, quick to lose, and it decides how much say you get in the next decision that matters.",
  ],

  coreConcepts: [
    {
      term: "Start from a real measurement, or say you have not got one",
      explain:
        "How many, how often, how long, at what cost, today. Without it, every benefit figure is an assertion, because you have nothing to subtract from.",
      detail:
        "Two weeks of real measuring beats any estimate and takes two weeks. Where you genuinely cannot measure in time, say so and present the benefit as a range with the assumption stated. An admitted gap is credible. A confident made-up number is not, and finance people find them quickly.",
    },
    {
      term: "Every benefit needs a name and somewhere to land",
      explain:
        "Who is accountable for delivering this, and where does it actually show up? A cost saving shows up in a budget line. Freed-up capacity shows up as work absorbed without hiring. More revenue shows up in a forecast.",
      detail:
        "The question that exposes a soft benefit: whose number changes, and by when? If nobody's does, the benefit is real to the people doing the work and invisible to the business, and you should present it as an improvement rather than as money.",
    },
    {
      term: "Three kinds of benefit, kept apart",
      explain:
        "Money saved reduces actual spend. Freed-up capacity gives back time that then has to be pointed at something named. Reduced risk makes something bad less likely or less costly.",
      detail:
        "Adding them into one total is the fastest way to lose a finance audience, because the three have completely different credibility and get treated differently in a budget. Show them separately and let the reader weigh them.",
    },
    {
      term: "The three costs almost every case leaves out",
      explain:
        "Your own people's time during the project, the ongoing cost of running and looking after the thing, and the cost of the change itself: training, running both ways for a while, the dip in productivity, and the support load in the first months.",
      detail:
        "Your own people's time is the big one, because no invoice arrives so it shows as zero. A project that eats six months of your best operations people has a real cost, and the people whose time it is will tell you so afterwards.",
    },
    {
      term: "Say what this will not do",
      explain:
        "An explicit paragraph. It will not reduce headcount. It will not fix the underlying data quality problem. It will not remove the need for the weekly reconciliation.",
      detail:
        "This section does more for your credibility than anything else in the document. It also protects you, because whatever people expect and you did not correct becomes what you get judged against.",
    },
    {
      term: "Give a range, not a single number",
      explain:
        "Pessimistic, expected and optimistic, with the assumption that drives the difference named. A single number implies a precision you do not have and starts an argument about that number instead of about the decision.",
      detail:
        "Then say which single assumption moves the answer most. If the whole thing depends on people actually using it, that is what the reader needs to interrogate, and pointing at it yourself is a strong signal that the rest is solid.",
    },
    {
      term: "Include doing nothing, honestly",
      explain:
        "What happens if this is not funded: does the cost grow, stay flat, or disappear when something already planned lands?",
      detail:
        "Occasionally the honest answer is that the problem is shrinking. Saying so costs you a project and buys you a reputation, which is a better trade than it looks, especially early in a career.",
    },
    {
      term: "Ask for the small commitment first",
      explain:
        "A request to fund a first phase with a defined output and a decision point is much easier to approve than a request to fund a whole programme on the strength of estimates.",
      detail:
        "It also protects the business from you being wrong. Arrange it so the expensive commitment comes after the assumption that most worries you has been checked.",
    },
    {
      term: "Say what would make you stop",
      explain:
        "What would tell us this is not working, when would we look, and what would we do. Almost no business case contains this and every one should.",
      detail:
        "Businesses are far worse at stopping than at starting, mostly because nobody defined in advance what stopping would look like. A named review point with a named test turns it into a decision rather than an admission of failure.",
    },
    {
      term: "Say how the benefit will be checked, before approval",
      explain:
        "Which report, which query, which field, checked by whom, how often. Agreed with the benefit owner and with finance while everybody still wants the money.",
      detail:
        "Agreed before approval, it gets agreed. Proposed after go-live it becomes a negotiation in which everybody has an interest in the answer, and it rarely produces anything usable.",
    },
    {
      term: "One page that stands on its own",
      explain:
        "Problem, options considered, recommendation, cost, benefit, risk, what you are asking for. If the summary needs the appendix to make sense, most of your readers will never reach the point.",
      detail:
        "Write the one page last, and write it assuming the reader has four minutes and will form a view in that time, because that is what happens.",
    },
    {
      term: "Get somebody who wants to say no to read it",
      explain:
        "Find the most sceptical person available, ideally in finance, and ask them to attack it before it goes anywhere near a decision meeting.",
      detail:
        "Every hole they find is free. The same hole found in the meeting costs you the decision and some credibility, and you will not get another go at that audience for a while.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The spending was real and the value was never established.",
      walkthrough:
        "In May 2011 the UK National Audit Office reported on the care records systems within the National Programme for IT in the NHS. It found £2.7 billion had been spent on care records systems to that point, with £4.3 billion of planned spending still to come. In one region, four of ninety-seven systems had been delivered to acute hospital trusts over seven years. The original target had been electronic care records for every patient by 2010.",
      result:
        "The NAO concluded the £2.7 billion spent did not represent value for money, and said it had no confidence the remaining £4.3 billion would do better. The lesson for anybody writing a case is about what makes a benefit checkable. The ambition was clear, the spending was tracked, and the connection between the two was never established in a form that let anybody say at any point whether it was working. Saying how you will check, and what would make you stop, is what makes that judgement possible while there is still money left.",
      source: {
        label: "National Audit Office (18 May 2011). The National Programme for IT in the NHS: an update on the delivery of detailed care records systems",
        url: "https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/",
      },
    },
    {
      kind: "illustration",
      scenario: "The saving with nowhere to go.",
      walkthrough:
        "The problem: a proposal claimed a substantial weekly time saving across a team of twelve. What was happening: the finance director asked one question. Which budget line goes down? The team was not being reduced, so the salary cost was unchanged. The saved time was spread thinly across twelve people, so nobody gained a usable block of it. And nobody had named any work that would now get absorbed without hiring.",
      result:
        "What changed: the case came back and it came back stronger. The revised version dropped the money claim entirely, presented the time as freed-up capacity, and named the specific backlog it would be pointed at along with the manager accountable for absorbing it. That version got approved. The change was not cosmetic: the second one can be checked afterwards and the first one cannot.",
    },
    {
      kind: "illustration",
      scenario: "The costs that arrived after go-live.",
      walkthrough:
        "The problem: a case covered licence, setup and training. It was approved and delivered close to budget. What was happening: in the first six months afterwards, three costs appeared that were never in the document. Somebody in operations spent most of their week administering the new system, a report finance relied on had to be rebuilt, and two connections needed attention every time either end changed.",
      result:
        "What changed: none of it was unforeseeable, and all of it was left out because the case was costed only up to launch. What it costs to run something is a permanent commitment and it belongs in the case as prominently as the setup cost. A useful habit is asking who will be doing what on the first Monday after everybody has moved on to the next project.",
    },
  ],

  learningPath: [
    {
      title: "Measure where it is now, for two weeks",
      body: "Volume, how often, how long, error rate, cost. Measured by the people doing the work or pulled from the system, never estimated by a manager. Start this before anything else, because it takes elapsed time.",
      effort: "2 weeks of waiting, a few hours of effort",
      outcome: "The number everything else in the case subtracts from.",
    },
    {
      title: "Write the problem and the options on one page",
      body: "What is wrong, what it costs, what was considered, what you recommend and why. No solution detail yet. Get the sponsor to read this before you build any model.",
      effort: "Half a day",
      outcome: "Early agreement on the framing, which prevents a beautifully modelled case for the wrong thing.",
    },
    {
      title: "Build the cost picture including the three that get left out",
      body: "Setup, your own people's time, running and looking after it, and the cost of changing. Five years, with growth. Include doing nothing.",
      effort: "1-2 days",
      outcome: "A cost picture a finance reviewer will recognise as complete.",
    },
    {
      title: "Work out the benefits by kind, with names",
      body: "Money, capacity and risk, presented separately. Each with a named owner, somewhere it lands, and the report or query that will show it.",
      effort: "1-2 days, mostly conversations",
      outcome: "Benefits somebody has agreed to be accountable for, which is different from benefits you calculated.",
    },
    {
      title: "Write the will-not-do paragraph and what would make you stop",
      body: "Be specific and slightly uncomfortable. Name the review point, the test and the decision that would follow.",
      effort: "1 hour",
      outcome: "The two sections that most distinguish a case from a pitch.",
    },
    {
      title: "Give a range and name the assumption behind it",
      body: "Pessimistic, expected, optimistic. Then name the single assumption that moves the answer most and say how it will be checked early.",
      effort: "Half a day",
      outcome: "An honest case with its weakest point identified by you rather than by the audience.",
    },
    {
      title: "Get it attacked, then write the one page",
      body: "Give it to the most sceptical person you can find and ask them to break it. Fix what they find. Then write the summary last.",
      effort: "1 day including the rewrite",
      outcome: "A case that has already survived its hardest audience before the meeting.",
    },
  ],

  exercises: [
    {
      title: "Where does the benefit land?",
      brief:
        "Take any business case in your organisation, current or old. For every benefit in it, write down which specific budget line, forecast or plan the benefit shows up in, and who owns that number.",
      success:
        "You can sort each benefit into money, capacity or risk, and you have found at least one with nowhere to land at all.",
      time: "1-2 hours",
    },
    {
      title: "Cost the first Monday after",
      brief:
        "For any change being proposed, write down who will be doing what on the first Monday six months after go-live, once the project team has moved on. Estimate the ongoing effort in days per month.",
      success:
        "You have a running cost in days per month by role, and it is not zero, which it always is in the original document.",
      time: "1 hour",
    },
    {
      title: "Write a stopping test for a live project",
      brief:
        "Take a project currently running in your business. Write what would tell you it is not working, when that would be visible, and what the decision would be. Then ask the project manager whether such a thing exists.",
      success:
        "You have a specific, dated, checkable test, and you have found out whether anybody had defined one.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Benefits with nowhere to land",
      why: "Hours saved that reduce no budget and increase no output are invisible to the business. The second time this happens, your cases stop being believed however good they are.",
      fix: "For every benefit name the owner, the budget or plan it shows up in, and the date. If nobody's number changes, present it as an improvement and say so.",
    },
    {
      mistake: "No real starting measurement",
      why: "Without it every benefit figure is an assertion, and the sceptical reader knows it. It also makes the review afterwards unwinnable, because nobody can agree what changed.",
      fix: "Measure for two weeks. Where that is impossible, give ranges with the assumption stated rather than a confident single figure.",
    },
    {
      mistake: "Costing only up to launch",
      why: "Running cost, your own people's time and the cost of changing are permanent or substantial, and leaving them out gets the comparison wrong in a predictable direction.",
      fix: "Cost five years including internal days by role, running and support, training, running both ways, and the early support load.",
    },
    {
      mistake: "Adding all three kinds of benefit into one total",
      why: "They have very different credibility. Summing them lets a reader dismiss the whole figure by disputing the weakest part, which they will.",
      fix: "Present them in three sections with three totals and let the reader weigh them.",
    },
    {
      mistake: "No statement of what this will not do",
      why: "Whatever people expect and you did not correct becomes the standard you get judged against, and it is always higher than what you promised.",
      fix: "Write an explicit paragraph naming the things people will assume and that are not in scope.",
    },
    {
      mistake: "A single number",
      why: "It invites an argument about that number rather than about the decision, and it implies a precision nobody has.",
      fix: "Give three scenarios and name the assumption that drives the spread.",
    },
    {
      mistake: "No stopping test",
      why: "Businesses carry on funding things because stopping feels like admitting failure. Without a test agreed in advance there is no clean moment to make that call.",
      fix: "Name the review point, the test and the decision that follows. Agree it while everybody is still optimistic.",
    },
    {
      mistake: "Agreeing how to check it after approval",
      why: "Once money has been spent, everybody has an interest in the answer, and defining the number becomes a negotiation rather than a fact.",
      fix: "Agree the method, the source and the owner with finance and the benefit owner as part of the approval.",
    },
  ],

  bestPractices: [
    "Measure where it is now before writing anything.",
    "Give every benefit an owner, somewhere it lands, and a date.",
    "Keep money, capacity and risk benefits separate.",
    "Include your own people's time, running cost and the cost of changing.",
    "Cost over five years, including doing nothing.",
    "Write an explicit paragraph on what this will not do.",
    "Give a range and name the assumption behind it.",
    "Ask for a small first commitment with a decision point.",
    "Write what would make you stop, with a date and a test.",
    "Agree how the benefit gets checked before approval, not after.",
    "Have it attacked by a sceptic before it reaches a decision meeting.",
    "Write the one-page summary last and make it stand on its own.",
  ],

  proTips: [
    "Ask the benefit owner to say the benefit out loud in their own words, in a meeting, before you submit. Agreement in an email is not the same as somebody stating in front of their peers that their number will change by a certain amount by a certain date. The difference in how carefully they check your figures is remarkable.",
    "When a sponsor asks you to make the numbers work, treat it as a real question rather than an instruction. Sometimes they know something you do not, about a cost that is going to fall anyway or a commitment already made. Ask what they know that you have not accounted for. Occasionally the case genuinely improves, and if it does not you have made the disagreement explicit rather than quietly complying.",
    "Keep every case you write and look at it a year later against what actually happened. It is uncomfortable and it is the single fastest way to calibrate yourself. After three or four you will know your own bias, and mine was consistently underestimating how long it takes for people to actually start using something.",
    "If the case only works at the optimistic scenario, do not submit it. Say the analysis does not support the investment at present and what would need to change. That sentence is much harder to write than a hopeful case and it is the one that makes people trust your next recommendation.",
  ],

  businessApplications: [
    "Getting approval to buy a system, where finance will go through the five-year picture line by line.",
    "Improving a process internally, where the benefit is usually capacity and the where-does-it-land question decides whether it is credible.",
    "Compliance work, where the benefit is avoided trouble and the case turns on how likely and how bad rather than on savings.",
    "Asking for more people, where a business case framing beats a staffing argument almost every time.",
    "Deciding whether to carry on with something already running, which needs a test agreed before anybody was invested.",
    "Choosing between competing proposals, where comparable starting points are the only way to compare unlike things.",
  ],

  checklist: [
    "Starting point measured, with the method and period stated.",
    "Options considered and summarised, including doing nothing.",
    "Costs cover setup, your own people's time, running and support, and changing.",
    "Five-year view with growth applied.",
    "Benefits split into money, capacity and risk.",
    "Every benefit has a named owner, somewhere it lands, and a date.",
    "How it gets checked, from where and how often, agreed with finance and the owner.",
    "Explicit paragraph on what this will not do.",
    "Three scenarios with the assumption behind the spread named.",
    "The ask is phased with a defined decision point.",
    "Stopping test written, with a date and a criterion.",
    "Reviewed by a sceptic and revised before submission.",
    "One-page summary stands on its own.",
  ],

  faqs: [
    {
      q: "How long should a business case be?",
      a: "One page that stands on its own, plus whatever appendices the detail needs. The summary is what gets read and decided on. If it needs the appendix to make sense, most of your audience never reaches the recommendation.",
    },
    {
      q: "What if I cannot put a number on the main benefit?",
      a: "Say so and describe it in words, with the best rough indicator you have. An honest qualitative benefit is stronger than a made-up number, because the made-up number will get challenged and the challenge will discredit everything around it.",
    },
    {
      q: "How do I put a value on avoided trouble?",
      a: "How likely times how bad, with both stated as ranges and both coming from whoever owns that risk. Present it separately from money saved. Never add a risk benefit into a savings total.",
    },
    {
      q: "The sponsor wants a bigger number. What do I do?",
      a: "Ask what they know that you have not included, and add it if it is real. If it is not, present the range with the assumptions visible and let them argue for the optimistic scenario in their own words, on the record.",
    },
    {
      q: "Should a business case include the risks of doing it?",
      a: "Yes, and specifically the ones that would change the decision. A section listing generic project risks is filler. Two or three real ones with owners and what you would do about them signals that the work was done.",
    },
    {
      q: "Who owns the case after approval?",
      a: "The sponsor owns the benefits, the project owns delivering, and somebody has to own checking. Get all three names at approval, because after go-live the project team disperses and checking becomes nobody's job.",
    },
  ],

  tools: [
    { name: "Two weeks of measuring", what: "A spreadsheet and discipline. Everything else in the case depends on it existing.", cost: "Free" },
    { name: "A five-year cost picture", what: "Setup, internal days by role, running and support, cost of changing, growth. Include doing nothing as a column.", cost: "Varies" },
    { name: "A benefits list", what: "Benefit, kind, owner, where it lands, how it gets checked, review date. The document the review afterwards actually uses.", cost: "Free" },
    { name: "A sceptical reader in finance", what: "Free, and considerably cheaper than finding the holes during the approval meeting.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: The National Programme for IT in the NHS, update on detailed care records systems", kind: "Docs", note: "Primary source, May 2011. Worth reading for how the spending was tracked while the value was not, which is exactly what a stopping test is meant to prevent.", url: "https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/" },
  ],

  internalLinks: [
    { slug: "choosing-the-right-solution", anchor: "the evaluation this case rests on", context: "Before the case" },
    { slug: "measuring-whether-it-worked", anchor: "proving the benefit afterwards", context: "After delivery" },
    { slug: "the-honest-ai-business-case", anchor: "the version specific to AI proposals", context: "Related" },
  ],

  relatedGuides: ["choosing-the-right-solution", "measuring-whether-it-worked", "the-honest-ai-business-case"],

  conclusion: [
    "Take the benefit at the top of whatever you are proposing and answer one question in writing: whose number changes, by how much, and by when. If you cannot name the person and the line, you have found the work that has to happen before the case is worth submitting.",
  ],
};

export default guide;
