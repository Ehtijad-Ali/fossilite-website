import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "writing-a-business-case",
  seoTitle: "Writing a Business Case a Finance Director Will Believe",
  metaDescription:
    "Baseline, benefits with a named owner, the costs people forget, and the stopping condition. How a Business Analyst builds a case that survives hostile questioning.",
  title: "Writing a Business Case",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "A business case is not a persuasion document. It is a proposal to spend somebody else's money, and the person reading it has seen dozens that promised savings which never appeared in any budget. Their scepticism is earned and it is the audience you are actually writing for.",
    "The single most common defect is a benefit with no destination. The case says the change will save a certain number of hours a week. Nobody asks what happens to those hours. They do not reduce headcount, they do not increase output, and no line in any budget goes down, so the saving exists only in the document. Do that twice and your next case is read differently.",
    "This guide is the version that survives a finance director in a bad mood. A measured baseline, benefits with owners and destinations, the three costs everybody forgets, an honest treatment of what this will not do, and a stopping condition, which is the section that most distinguishes a professional case from an advocacy piece.",
  ],

  whyItMatters: [
    "The business case is where a BA's analysis becomes a decision. Everything upstream, the problem definition, the root cause, the options work, arrives at the sponsor through this document, and if it is not credible then none of the analysis counts for anything.",
    "It is also the contract for judging the change afterwards. What you write here determines what gets measured at the benefits review, which is why vague benefits are attractive to write and destructive later: an unmeasurable promise cannot be shown to have been kept, so the project gets judged on whether it went live on time.",
    "And the cumulative effect on your credibility is real. Sponsors remember whose numbers turned out to be approximately right. That reputation is slow to build, quick to lose, and it determines how much influence you have on the next decision that matters.",
  ],

  coreConcepts: [
    {
      term: "Start with a measured baseline or admit you have not got one",
      explain:
        "How many, how often, how long, at what cost, today. Without it, every benefit figure is an assertion, because you have nothing to subtract from.",
      detail:
        "Two weeks of real measurement beats any estimate and takes two weeks. Where you genuinely cannot measure in time, say so explicitly and present the benefit as a range with the assumption stated. An acknowledged gap is credible. A confident invented number is not, and finance people find them quickly.",
    },
    {
      term: "Every benefit needs an owner and a destination",
      explain:
        "Who is accountable for delivering this benefit, and where does it show up? A cost saving shows up in a budget line. A capacity gain shows up as work absorbed without added headcount. A revenue gain shows up in a forecast.",
      detail:
        "The question that exposes a soft benefit: whose number changes, and by when? If nobody's does, the benefit is real to the people doing the work and invisible to the organisation, and you should present it as a qualitative improvement rather than a financial one.",
    },
    {
      term: "Three benefit types, presented separately",
      explain:
        "Cash benefits reduce actual spend. Capacity benefits free time that must then be redirected to something named. Risk benefits reduce the probability or cost of something bad.",
      detail:
        "Adding them into a single total is the fastest way to lose a finance audience, because the three have completely different credibility and completely different treatment in a budget. Show them separately and let the reader weigh them.",
    },
    {
      term: "The three costs almost every case omits",
      explain:
        "Internal staff time during implementation, the ongoing cost of running and maintaining the thing, and the cost of the change itself: training, dual running, temporary productivity loss, and the support burden in the first months.",
      detail:
        "Internal time is the big one, because no invoice arrives so it appears as zero. A project that consumes six months of your best operations people has a real cost and the people whose time it is will tell you so afterwards.",
    },
    {
      term: "Say what this will not do",
      explain:
        "An explicit paragraph. It will not reduce headcount. It will not fix the underlying data quality problem. It will not remove the need for the weekly reconciliation.",
      detail:
        "This section does more for credibility than anything else in the document. It also protects you, because the expectations you fail to dispel become the expectations you are judged against.",
    },
    {
      term: "Model the range, not the point",
      explain:
        "Pessimistic, expected and optimistic, with the assumption that drives the difference named. A single number implies a precision you do not have and invites an argument about that number instead of about the decision.",
      detail:
        "Then state which single assumption most affects the answer. If the whole case depends on adoption reaching a certain level, that is what the reader needs to interrogate, and pointing at it yourself is a strong signal that the rest is solid.",
    },
    {
      term: "Include the do nothing option honestly",
      explain:
        "What happens if this is not funded: does the cost grow, stay flat, or disappear when something already planned lands?",
      detail:
        "Occasionally the honest answer is that the problem is shrinking. Saying so costs you a project and buys you a reputation, which is a better trade than it looks, especially early in a career.",
    },
    {
      term: "Phase the ask so the first decision is small",
      explain:
        "A request to fund a discovery phase with a defined output and a decision point is easier to approve than a request to fund an entire programme on the strength of estimates.",
      detail:
        "Phasing also protects the organisation from you being wrong. Structure it so that the expensive commitment comes after the assumption that most worries you has been tested.",
    },
    {
      term: "Write the stopping condition",
      explain:
        "What would tell us this is not working, when would we look, and what would we do. Almost no business case contains this and every one should.",
      detail:
        "Organisations are far worse at stopping than at starting, largely because nobody defined in advance what stopping would look like. A named review point with a named criterion makes it a decision rather than an admission of failure.",
    },
    {
      term: "State how the benefit will be measured, before approval",
      explain:
        "Which report, which query, which field, measured by whom, at what interval. Agreed with the benefit owner and with finance while everyone still wants the money.",
      detail:
        "Measurement agreed before approval gets agreed. Measurement proposed after go-live becomes a negotiation in which everyone has an interest in the answer, and it rarely produces a usable number.",
    },
    {
      term: "One page that stands alone",
      explain:
        "Problem, options considered, recommendation, cost, benefit, risk, ask. If the summary needs the appendix to make sense, most of your readers will never reach the point.",
      detail:
        "Write the one page last, and write it assuming the reader has four minutes and will make a preliminary judgement in that time, because that is what happens.",
    },
    {
      term: "Have it read by someone who wants to say no",
      explain:
        "Find the most sceptical person available, ideally in finance, and ask them to attack it before it goes anywhere near a decision forum.",
      detail:
        "Every hole they find is free. The same hole found in the meeting costs you the decision and some credibility, and you will not get a second attempt at the same audience for a while.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A programme where the spending was real and the value was not established.",
      walkthrough:
        "In May 2011 the UK National Audit Office reported on the care records systems within the National Programme for IT in the NHS. It found that £2.7 billion had been spent on care records systems to that point, with £4.3 billion of planned spending remaining. In one region, four of ninety-seven systems had been delivered to acute hospital trusts over seven years. The original target had been electronic care records for every patient by 2010.",
      result:
        "The NAO concluded that the £2.7 billion spent so far did not represent value for money, and said it had no confidence that the remaining £4.3 billion would deliver better results. The lesson for anyone writing a case is about what makes a benefit checkable: the ambition was clear, the spending was tracked, and the connection between the two was not established in a form that allowed anybody to say at any point whether it was working. A stopping condition and a measurement method are not bureaucracy, they are what makes that judgement possible while there is still money left.",
      source: {
        label: "National Audit Office (18 May 2011). The National Programme for IT in the NHS: an update on the delivery of detailed care records systems",
        url: "https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/",
      },
    },
    {
      kind: "illustration",
      scenario: "The saving with nowhere to go.",
      walkthrough:
        "A proposal claims a substantial weekly time saving across a team of twelve. The finance director asks one question: which budget line goes down? The team is not being reduced, so the salary cost is unchanged. The saved time is spread thinly across twelve people, so no individual gains a usable block of it. Nobody has named work that will now be absorbed without additional hiring.",
      result:
        "The case was returned, and it came back stronger. The revised version dropped the cash claim entirely, presented the time as capacity, and named the specific backlog it would be applied to along with the manager accountable for absorbing it. That version was approved. The change was not cosmetic: the second version can be checked afterwards and the first one cannot.",
    },
    {
      kind: "illustration",
      scenario: "The cost that arrived after go-live.",
      walkthrough:
        "A case covers licence, implementation and training. It is approved and delivered close to budget. In the first six months afterwards, three costs appear that were never in the document: a member of the operations team spends most of their week administering the new system, a report the finance team relied on has to be rebuilt, and two integrations require ongoing attention whenever either end changes.",
      result:
        "None of these were unforeseeable and all were omitted because the case was costed to go-live. The run cost of a change is a permanent commitment and it belongs in the case at the same level of prominence as the implementation cost. A useful discipline is to ask who will be doing what on the first Monday after everyone has moved on to the next project.",
    },
  ],

  learningPath: [
    {
      title: "Measure the baseline for two weeks",
      body: "Volume, frequency, duration, error rate, cost. Measured by the people doing the work or pulled from the system, never estimated by a manager. Start this before you write anything else, because it takes elapsed time.",
      effort: "2 weeks elapsed, a few hours of effort",
      outcome: "The number everything else in the case subtracts from.",
    },
    {
      title: "Write the problem and the options in one page",
      body: "What is wrong, what it costs, what was considered, what is recommended and why. No solution detail yet. Get this read by the sponsor before building any model.",
      effort: "Half a day",
      outcome: "Early agreement on the framing, which prevents a beautifully modelled case for the wrong thing.",
    },
    {
      title: "Build the cost model including the three omissions",
      body: "Implementation, internal staff time, run and maintain, change cost. Five years, with growth. Include do nothing.",
      effort: "1-2 days",
      outcome: "A cost picture that a finance reviewer will recognise as complete.",
    },
    {
      title: "Quantify benefits by type, with owners",
      body: "Cash, capacity and risk, presented separately. Each with a named owner, a destination, and the report or query that will evidence it.",
      effort: "1-2 days, mostly conversations",
      outcome: "Benefits somebody has agreed to be accountable for, which is a different thing from benefits you have calculated.",
    },
    {
      title: "Write the will-not-do paragraph and the stopping condition",
      body: "Be specific and slightly uncomfortable. Name the review point, the criterion and the decision that would follow.",
      effort: "1 hour",
      outcome: "The two sections that most distinguish a case from a pitch.",
    },
    {
      title: "Model the range and identify the critical assumption",
      body: "Pessimistic, expected, optimistic. Then name the single assumption that most moves the answer and say how it will be tested early.",
      effort: "Half a day",
      outcome: "An honest case with its weakest point identified by you rather than by the audience.",
    },
    {
      title: "Get it attacked, then write the one page",
      body: "Give it to the most sceptical person you can find and ask them to break it. Fix what they find. Then write the summary page last.",
      effort: "1 day including the rewrite",
      outcome: "A case that has already survived its hardest audience before the meeting.",
    },
  ],

  exercises: [
    {
      title: "The destination test",
      brief:
        "Take any business case in your organisation, current or historical. For every benefit in it, write down which specific budget line, forecast or capacity plan the benefit appears in, and who owns that number.",
      success:
        "You can classify each benefit as cash, capacity or risk, and you have identified at least one benefit with no destination at all.",
      time: "1-2 hours",
    },
    {
      title: "Cost the first Monday after",
      brief:
        "For any change currently being proposed, write down who will be doing what on the first Monday six months after go-live, once the project team has moved on. Estimate the recurring effort in days per month.",
      success:
        "You have a run cost expressed in days per month by role, and it is not zero, which it always is in the original document.",
      time: "1 hour",
    },
    {
      title: "Write the stopping condition for a live project",
      brief:
        "Take a project currently running in your organisation. Write what would tell you it is not working, when that would be visible, and what the decision would be. Then ask the project manager whether such a condition exists.",
      success:
        "You have a specific, dated, measurable criterion, and you have established whether anyone had defined one before.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Benefits with no destination",
      why: "Hours saved that reduce no budget and increase no output are invisible to the organisation. The second time this happens, your cases stop being believed regardless of their quality.",
      fix: "For every benefit name the owner, the budget or plan it lands in, and the date. If nobody's number changes, present it as a qualitative improvement and say so.",
    },
    {
      mistake: "No measured baseline",
      why: "Without a starting number every benefit figure is an assertion, and the sceptical reader knows it. It also makes the benefits review unwinnable, because nobody can agree what changed.",
      fix: "Measure for two weeks. Where that is impossible, present ranges with the assumption stated rather than a confident single figure.",
    },
    {
      mistake: "Costing only to go-live",
      why: "Run cost, internal time and the cost of change are permanent or substantial, and omitting them produces a comparison that is wrong in a predictable direction.",
      fix: "Cost five years including internal days by role, run and maintain, training, dual running and the early support burden.",
    },
    {
      mistake: "Adding cash, capacity and risk benefits into one total",
      why: "The three have very different credibility. Summing them lets a reader dismiss the whole figure by disputing the weakest component, which they will.",
      fix: "Present them in three separate sections with separate totals and let the reader weigh them.",
    },
    {
      mistake: "No statement of what this will not do",
      why: "Unmanaged expectations become the standard you are judged against, and they are always higher than what you promised.",
      fix: "Write an explicit paragraph naming the things people will assume and that are not in scope.",
    },
    {
      mistake: "A single-point forecast",
      why: "It invites a debate about that number rather than about the decision, and it implies a precision that nobody has.",
      fix: "Give three scenarios and name the assumption that drives the spread.",
    },
    {
      mistake: "No stopping condition",
      why: "Organisations continue funding things because stopping feels like admitting failure. Without a pre-agreed criterion there is no clean moment to make that call.",
      fix: "Name the review point, the criterion and the decision that follows. Agree it while everyone is optimistic.",
    },
    {
      mistake: "Agreeing measurement after approval",
      why: "Once money is spent, everyone has an interest in the answer, and the definition of the metric becomes a negotiation rather than a fact.",
      fix: "Agree the measurement method, source and owner with finance and the benefit owner as part of the approval.",
    },
  ],

  bestPractices: [
    "Measure a real baseline before writing anything.",
    "Give every benefit an owner, a destination and a date.",
    "Separate cash, capacity and risk benefits.",
    "Include internal staff time, run cost and the cost of change.",
    "Cost over five years, including do nothing.",
    "Write an explicit paragraph on what this will not do.",
    "Present a range and name the assumption that drives it.",
    "Phase the ask so the first commitment is small.",
    "Write a stopping condition with a date and a criterion.",
    "Agree the measurement method before approval, not after.",
    "Have it attacked by a sceptic before it reaches a decision forum.",
    "Write the one-page summary last and make it stand alone.",
  ],

  proTips: [
    "Ask the benefit owner to say the benefit out loud in their own words, in a meeting, before the case is submitted. Agreement in an email is not the same as somebody stating in front of their peers that their number will change by a certain amount by a certain date. The difference in how carefully they check your figures is remarkable.",
    "When a sponsor asks you to make the numbers work, treat it as a real question rather than an instruction. Sometimes they have information you do not, about a cost that is going to fall anyway or a commitment already made. Ask what they know that you have not accounted for. Occasionally the case genuinely improves, and if it does not you have made the disagreement explicit rather than complying quietly.",
    "Keep every case you write and revisit it a year later against what actually happened. This is uncomfortable and it is the single fastest way to calibrate. After three or four of these you will know your own bias, and mine was consistently underestimating how long adoption takes.",
    "If the case only works at the optimistic scenario, do not submit it. Say the analysis does not support the investment at present and what would need to change. That sentence is much harder to write than a hopeful case and it is the one that makes people trust your next recommendation.",
  ],

  businessApplications: [
    "Capital approval for a system purchase, where finance will interrogate the five-year model line by line.",
    "Internal process improvement, where the benefit is usually capacity and the destination question decides whether it is credible.",
    "Regulatory or compliance work, where the benefit is avoided risk and the case turns on probability and consequence rather than savings.",
    "Headcount requests, where a business case framing beats a staffing argument almost every time.",
    "Continuing or stopping an in-flight programme, where the stopping condition should already have existed.",
    "Prioritising between competing proposals, where comparable baselines are the only way to compare unlike things.",
  ],

  checklist: [
    "Baseline measured, with the method and period stated.",
    "Options considered and summarised, including do nothing.",
    "Costs cover implementation, internal time, run and maintain, and change.",
    "Five-year horizon with volume growth applied.",
    "Benefits separated into cash, capacity and risk.",
    "Every benefit has a named owner, a destination and a date.",
    "Measurement method, source and interval agreed with finance and the owner.",
    "Explicit paragraph on what this will not do.",
    "Three scenarios presented with the critical assumption named.",
    "Ask is phased with a defined decision point.",
    "Stopping condition written, with a date and a criterion.",
    "Reviewed by a sceptic and revised before submission.",
    "One-page summary stands alone.",
  ],

  faqs: [
    {
      q: "How long should a business case be?",
      a: "One page that stands alone, plus whatever appendices the detail requires. The summary is what gets read and decided on. If it needs the appendix to make sense, most of your audience never reaches the recommendation.",
    },
    {
      q: "What if I cannot quantify the main benefit?",
      a: "Say so and describe it qualitatively, with the best proxy you have. An honest qualitative benefit is stronger than an invented number, because the invented number will be challenged and the challenge will discredit everything around it.",
    },
    {
      q: "How do I value avoided risk?",
      a: "Probability times consequence, with both stated as ranges and both sourced from somebody who owns the risk. Present it separately from cash benefits. Never sum a risk benefit into a savings total.",
    },
    {
      q: "The sponsor wants a bigger number. What do I do?",
      a: "Ask what they know that you have not included, and add it if it is real. If it is not, present the range with the assumptions visible and let them argue for the optimistic scenario in their own words, on the record.",
    },
    {
      q: "Should a business case include the risks of doing it?",
      a: "Yes, and specifically the ones that would change the decision. A risk section listing generic project risks is filler. Two or three real risks with mitigations and owners is a signal that the analysis was done.",
    },
    {
      q: "Who owns the business case after approval?",
      a: "The sponsor owns the benefits, the project owns delivery, and somebody must own the measurement. Establish all three names at approval, because after go-live the project team disbands and the benefit becomes nobody's job.",
    },
  ],

  tools: [
    { name: "Two weeks of baseline measurement", what: "A spreadsheet and discipline. Everything else in the case depends on it existing.", cost: "Free" },
    { name: "A five-year cost model", what: "Implementation, internal days by role, run and maintain, change cost, growth. Include do nothing as a column.", cost: "Varies" },
    { name: "A benefits register", what: "Benefit, type, owner, destination, measurement source, review date. The document the benefits review actually uses.", cost: "Free" },
    { name: "A sceptical reviewer in finance", what: "Free, and considerably cheaper than finding the holes during the approval meeting.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: The National Programme for IT in the NHS, update on detailed care records systems", kind: "Docs", note: "Primary source, May 2011. Worth reading specifically for how spending was tracked while value was not, which is what a stopping condition is meant to prevent.", url: "https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/" },
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
