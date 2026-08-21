import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "measuring-whether-it-worked",
  seoTitle: "Measuring Whether the Solution Actually Worked",
  metaDescription:
    "Benefits realisation without self-deception: baselines, attribution, gamed metrics, the counterfactual, and how to run a post-implementation review people believe.",
  title: "Measuring Whether It Worked",
  keywords: [
    "benefits realisation",
    "post implementation review",
    "measuring project success",
    "kpi measurement",
    "business analyst benefits",
    "baseline measurement",
  ],
  category: "business-analysis",
  level: "Advanced",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "Almost nobody checks. Projects get celebrated at go-live, the team disperses, and the question of whether the thing achieved what it was funded to achieve is quietly not asked, because by then the people who would have to answer it have new priorities and no incentive to reopen anything.",
    "When it is checked, the measurement is usually done by whoever delivered it, against a metric chosen afterwards, with no baseline and no consideration of what else changed in the same period. That produces a number, and the number is worth roughly nothing, and everybody involved knows it.",
    "This guide is about doing it properly and honestly. Fixing the baseline before you change anything, choosing measures that cannot be gamed by the behaviour you are trying to encourage, dealing with attribution when six other things changed, and running a review that produces something people believe, including when the answer is that it did not work.",
  ],

  whyItMatters: [
    "Without measurement an organisation cannot learn. It repeats what was celebrated rather than what worked, and after enough cycles it has a folklore about which kinds of projects succeed that is entirely disconnected from what actually happened.",
    "It also determines what gets funded next. Sponsors who can show a delivered benefit get money more easily, which means measurement is not administrative overhead: it is how the work you believe in continues to happen.",
    "And for a BA specifically, this is the closing of the loop that makes the whole chain worthwhile. Problem, cause, requirement, solution, delivery, and then the answer. Without the last step you have no way of finding out whether your judgement is any good, and no way of improving it.",
  ],

  coreConcepts: [
    {
      term: "The baseline has to be fixed before you change anything",
      explain:
        "Measured, dated, with the method written down, and agreed with the person who will later be judged against it. After go-live it is too late: nobody can reconstruct what things were like without importing the current dispute.",
      detail:
        "Two weeks of real measurement is usually enough. Where the data exists historically, take twelve months rather than one, so that seasonality does not become the story.",
    },
    {
      term: "Measure the benefit, not the activity",
      explain:
        "Number of users trained, tickets closed and features delivered are activity. They tell you the project happened. Whether the business is better off is a different question and needs a different measure.",
      detail:
        "The test: would this number improve if the project achieved nothing but was busy? If yes, it is an activity measure. Keep those for tracking delivery and never present them as benefit.",
    },
    {
      term: "Every measure creates an incentive, so check for the gaming path",
      explain:
        "Before adopting a metric, ask how somebody under pressure could improve it without improving the underlying thing. There is always a way and you should know what it is.",
      detail:
        "Average handling time improves if the difficult calls get transferred. Queue time improves if work is logged later. Neither is dishonesty, it is a rational response to being measured, and it is entirely predictable.",
    },
    {
      term: "Pair every measure with a counter-measure",
      explain:
        "If you measure speed, measure quality alongside it. If you measure volume, measure rework. The pair is much harder to game than either alone.",
      detail:
        "This is the single most effective structural protection available, and it costs nothing but the discipline of always defining two numbers where you were going to define one.",
    },
    {
      term: "Leading and lagging indicators do different jobs",
      explain:
        "Lagging indicators tell you whether the benefit arrived and arrive too late to act on. Leading indicators tell you early whether the mechanism is working.",
      detail:
        "If the benefit depends on people using a new process, adoption is your leading indicator and you should be watching it in week two. Waiting six months for the lagging measure means six months of not knowing.",
    },
    {
      term: "Attribution: what else changed?",
      explain:
        "Volumes moved, two people left, a competitor changed their pricing, a policy was updated, the season turned. Any of these can produce or hide the movement you are claiming.",
      detail:
        "Write down everything material that changed in the measurement window, before you look at the numbers. Doing it afterwards means you will list only the things that explain a result you do not like.",
    },
    {
      term: "Find a comparison group where you can",
      explain:
        "If the change rolled out to three regions and not the other two, you have a natural comparison. Use it. It is far stronger evidence than a before and after.",
      detail:
        "Where no comparison exists, the honest fallback is to look at the trend before the change rather than a single point. A metric already improving for eighteen months did not start improving because of you.",
    },
    {
      term: "Measure the process, not only the outcome",
      explain:
        "If the outcome moved, check that it moved for the reason you designed. If the mechanism is not being used, an improvement is a coincidence you will not be able to repeat.",
      detail:
        "The reverse is also informative: if the mechanism is being used exactly as designed and the outcome has not moved, your causal analysis was wrong, and that is a much more valuable finding than a small favourable number.",
    },
    {
      term: "Go and watch, because adoption failure is invisible in the data",
      explain:
        "System usage statistics show that records are being created. They do not show that people are doing the work in a spreadsheet and typing it in afterwards.",
      detail:
        "Half a day of observation at six weeks tells you things no dashboard can. This is the measurement step people skip because it is not quantitative, and it routinely explains everything the quantitative results could not.",
    },
    {
      term: "Report the honest answer, including the awkward one",
      explain:
        "Some things do not work. A review that always finds success is a review nobody uses for decisions, and everybody involved learns to discount it.",
      detail:
        "The professional version separates the four possibilities: it worked, it worked for a different reason, it did not work, and we cannot tell. The last one is a legitimate finding and it is more common than reported.",
    },
    {
      term: "Review at the right distance",
      explain:
        "Too early and you are measuring the disruption of change. Too late and nobody cares and the people involved have moved on.",
      detail:
        "A leading-indicator check at four to six weeks, and a benefit review at three to six months for most operational changes. Set both dates during approval, in the business case, where they will actually be honoured.",
    },
    {
      term: "Somebody has to own the measurement after the project ends",
      explain:
        "The project team disbands. If measurement is not assigned to a named person with a date, it does not happen, however sincerely everyone intended it to.",
      detail:
        "The benefit owner from the business case is the natural choice, and they should have agreed to it in writing when the money was approved rather than being asked afterwards.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Systems delivered, benefits not established.",
      walkthrough:
        "In May 2011 the UK National Audit Office reported on care records systems in the National Programme for IT in the NHS. It found that £2.7 billion had been spent on care records systems to that point, with £4.3 billion of planned spending remaining, and that in one region four of ninety-seven systems had been delivered to acute hospital trusts over seven years. Where systems did exist in acute trusts, the NAO found they provided mainly administrative rather than clinical benefits.",
      result:
        "The NAO concluded that the £2.7 billion spent did not represent value for money and said it had no confidence that the remaining £4.3 billion would deliver better results. That finding, that delivered systems were producing administrative rather than clinical benefit, is the exact distinction this guide is about. Something existed, was used, and was not delivering the benefit it was funded for. Only a measure tied to the original purpose can detect that, and it has to be defined before the money is spent.",
      source: {
        label: "National Audit Office (18 May 2011). The National Programme for IT in the NHS: an update on the delivery of detailed care records systems",
        url: "https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/",
      },
    },
    {
      kind: "illustration",
      scenario: "The metric that improved because of the metric.",
      walkthrough:
        "A new triage process is introduced to reduce the time customers wait for a first response. Response time improves substantially within a month and is reported as a success. A BA checks the counter-measure, which nobody had defined at the outset but which the data supports: the proportion of cases requiring a second contact. It has risen by a similar order.",
      result:
        "Cases were being closed with a fast acknowledgement that did not resolve anything, so the customer contacted again and a new case was opened. Total effort had increased and the headline metric had improved. Nobody was cheating: the team was doing exactly what they had been asked to optimise. Any speed measure needs a quality counter-measure defined at the same time, not discovered afterwards.",
    },
    {
      kind: "illustration",
      scenario: "The improvement that started before the project did.",
      walkthrough:
        "A team reports that error rates fell after a new validation feature was launched. The BA plots the previous eighteen months rather than the two months either side of go-live. The decline began roughly a year before the project started, following a change in how a supplier submitted data, and continued at the same rate through go-live with no visible inflection.",
      result:
        "The feature may still be worth having and it did not cause the improvement being claimed for it. Plotting the longer trend before and after is a two-minute check and it changes the interpretation more often than anyone expects. A before and after comparison across two points cannot distinguish a change from a continuation.",
    },
  ],

  learningPath: [
    {
      title: "Fix the baseline before anything changes",
      body: "Measure for two weeks, or pull twelve months of history where it exists. Record the method, the period and the source. Get the benefit owner to agree it in writing.",
      effort: "2 weeks elapsed, a few hours of effort",
      outcome: "A starting point nobody can dispute later, which is most of the argument avoided.",
    },
    {
      title: "Define measures and counter-measures together",
      body: "For every benefit measure, define the thing that would get worse if somebody optimised the first one under pressure. Speed and quality, volume and rework, cost and error rate.",
      effort: "2 hours",
      outcome: "A measurement set that is difficult to game and that people will trust.",
    },
    {
      title: "Name the leading indicators and the review dates",
      body: "What will tell you at four to six weeks whether the mechanism is working. Put both the early check and the benefit review dates in the business case, with an owner for each.",
      effort: "1 hour",
      outcome: "Reviews that actually happen, because they were funded rather than intended.",
    },
    {
      title: "Record what else changed, prospectively",
      body: "Keep a log through the measurement window of everything material: volumes, staffing, policy, suppliers, seasonality, other projects. Written as it happens, not reconstructed later.",
      effort: "Minutes a week",
      outcome: "An attribution discussion based on a record rather than on whatever people remember.",
    },
    {
      title: "Identify a comparison group or plot the longer trend",
      body: "A region or team that has not received the change is the best evidence available. Failing that, plot at least twelve months before and after so a continuation cannot masquerade as a change.",
      effort: "Half a day",
      outcome: "A claim that survives someone checking it.",
    },
    {
      title: "Go and watch at six weeks",
      body: "Half a day sitting with users. What are they doing outside the system, what have they stopped doing, what did they expect that has not appeared.",
      effort: "Half a day",
      outcome: "The explanation for whatever the numbers are doing, which the numbers themselves never contain.",
    },
    {
      title: "Write the review with a clear verdict",
      body: "Worked, worked for a different reason, did not work, or cannot tell. State the evidence, the attribution caveats, and what you would do differently. Circulate it whatever it says.",
      effort: "1 day",
      outcome: "A document the organisation can learn from, and a reputation for reporting honestly.",
    },
  ],

  exercises: [
    {
      title: "Find the gaming path",
      brief:
        "Take three metrics currently used in your organisation. For each, write down exactly how a reasonable person under pressure could improve the number without improving the underlying thing. Then check whether the data shows any sign of it.",
      success:
        "You can describe a plausible gaming route for all three, and for at least one you have evidence it may already be happening.",
      time: "2 hours",
    },
    {
      title: "The eighteen-month plot",
      brief:
        "Take any improvement your organisation has claimed in the last two years. Plot the metric for at least twelve months before and six months after the change, rather than the two points either side.",
      success:
        "You can say whether the change caused an inflection or continued an existing trend, and you have the chart to show it.",
      time: "1-2 hours",
    },
    {
      title: "The six-week observation",
      brief:
        "Find a change that went live six to twelve weeks ago. Spend half a day watching three users work. Record anything happening outside the system and anything they expected that has not materialised.",
      success:
        "You can explain at least one thing about the reported numbers that the numbers alone did not reveal.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "No baseline, or a baseline reconstructed afterwards",
      why: "Everything becomes an assertion, and the argument about what things used to be like is unwinnable because everybody's memory now serves their position.",
      fix: "Measure and agree the baseline in writing before anything changes. Two weeks of real data beats any recollection.",
    },
    {
      mistake: "Reporting activity as benefit",
      why: "Users trained and features shipped tell you the project happened. Presenting them as benefit reads as evasion to anybody senior, and it usually is.",
      fix: "Apply the test: would this number improve if the project achieved nothing but was busy? If so, it is not a benefit measure.",
    },
    {
      mistake: "A single metric with no counter-measure",
      why: "People optimise what is measured, which is exactly what you asked them to do. The result is a better number and often a worse operation.",
      fix: "Define the counter-measure at the same time as the measure, always, and report the pair together.",
    },
    {
      mistake: "Ignoring what else changed",
      why: "You claim an improvement that a volume drop or a staffing change produced, and when somebody notices, the whole review is discredited rather than the one claim.",
      fix: "Keep a prospective log of material changes through the window, and publish the attribution caveats alongside the result.",
    },
    {
      mistake: "Comparing two points instead of a trend",
      why: "A before and after cannot distinguish a change from a continuation, and existing trends are extremely common in operational data.",
      fix: "Plot at least twelve months before and six months after, and look for an inflection rather than a difference.",
    },
    {
      mistake: "Measuring only the outcome",
      why: "If the mechanism is not being used, an improvement is a coincidence you cannot repeat, and you will draw the wrong conclusion about what to do next.",
      fix: "Measure adoption of the mechanism alongside the outcome, and go and watch people work.",
    },
    {
      mistake: "Reviewing too early",
      why: "The first weeks after a change are dominated by disruption. Measuring then produces a discouraging number that says nothing about the steady state.",
      fix: "Check leading indicators early and measure benefit at three to six months, with both dates set in the business case.",
    },
    {
      mistake: "Only publishing the reviews that went well",
      why: "The organisation learns nothing and everybody discounts your reviews, including the favourable ones, which makes the whole exercise pointless.",
      fix: "Publish whatever the answer is, with what you would do differently. Cannot tell is a legitimate verdict and should be used when it is true.",
    },
  ],

  bestPractices: [
    "Fix and agree the baseline before anything changes.",
    "Record the measurement method, period and source with the baseline.",
    "Measure benefit, not activity.",
    "Define a counter-measure for every measure.",
    "Identify the gaming path for each metric before adopting it.",
    "Use leading indicators to check the mechanism early.",
    "Log everything else that changed, prospectively.",
    "Use a comparison group where one exists.",
    "Plot a long trend rather than comparing two points.",
    "Measure adoption of the mechanism as well as the outcome.",
    "Spend half a day watching people work at around six weeks.",
    "Set the review dates and the measurement owner in the business case.",
    "Publish the result whatever it says, with a clear verdict.",
  ],

  proTips: [
    "Ask the people doing the work whether it is better, and take the answer seriously even when the numbers disagree. When the data says improvement and the team says it is worse, one of two things is true: the measure is capturing the wrong thing, or effort has moved somewhere you are not looking. Both are findings, and I have never seen that disagreement turn out to be simple resistance.",
    "Write the review's method section before the change goes live, including what result would count as failure. It takes an hour and it removes the possibility of choosing the flattering interpretation later, because you will want to, and you will not notice yourself doing it.",
    "Keep your own record of predictions. Write down what you expect the benefit to be and revisit it a year later. This is uncomfortable and it is the fastest calibration available to an analyst. Mine consistently overestimated how quickly adoption would reach a level where benefits appeared.",
    "When the honest verdict is that it did not work, lead with what you learned and what it means for the next decision rather than with the failure. Organisations tolerate a negative result reported usefully far better than they tolerate discovering one later, and the person who reports it becomes the person whose numbers get believed.",
  ],

  businessApplications: [
    "Benefits realisation after a funded programme, where finance expects the check and rarely receives a credible one.",
    "Deciding whether to extend a pilot, where the comparison group exists naturally and should be used.",
    "Continuous improvement, where the same change is applied repeatedly and the measurement compounds in value.",
    "Vendor performance review, where contracted outcomes need evidence rather than assertion.",
    "Deciding whether to stop something, which requires a criterion agreed before anybody was invested.",
    "Portfolio decisions, where comparable measurement across projects is the only way to learn what kinds of work pay off here.",
  ],

  checklist: [
    "Baseline measured, dated and agreed in writing before the change.",
    "Measurement method and data source recorded.",
    "Benefit measures distinguished from activity measures.",
    "A counter-measure defined for every measure.",
    "Gaming path identified for each metric.",
    "Leading indicators defined with an early check date.",
    "Prospective log of other changes in the measurement window.",
    "Comparison group identified, or long trend plotted.",
    "Adoption of the mechanism measured alongside the outcome.",
    "Observation session held at around six weeks.",
    "Review dates and measurement owner named in the business case.",
    "Verdict stated clearly: worked, worked differently, did not work, or cannot tell.",
    "Review circulated regardless of the result.",
  ],

  faqs: [
    {
      q: "When should we measure benefits?",
      a: "Leading indicators at four to six weeks, benefit at three to six months for most operational changes, and longer where the benefit depends on a cycle such as a season or a renewal period. Set both dates when the money is approved.",
    },
    {
      q: "What if we never measured a baseline?",
      a: "Look for a historical proxy in system data, use an unaffected comparison group, or measure now and treat it as a baseline for future changes. Be explicit that you are inferring rather than comparing, because somebody will check.",
    },
    {
      q: "How do we handle attribution when several things changed at once?",
      a: "Log what changed prospectively, use a comparison group where one exists, and state the caveats plainly. A result with honest attribution limits is more useful than a confident claim that collapses under one question.",
    },
    {
      q: "The numbers improved but the team says it is worse. What now?",
      a: "Investigate rather than dismissing either. Usually effort has moved somewhere you are not measuring, or the metric captures only part of the job. That gap between the data and the experience is the most valuable thing in the review.",
    },
    {
      q: "Who should run the post-implementation review?",
      a: "Not the person who delivered it, or at least not alone. Independence matters here more than domain knowledge. Where independence is impossible, publish the method and the raw data so somebody else can check the working.",
    },
    {
      q: "What do I do if the answer is that it did not work?",
      a: "Report it, with the evidence and what you would do differently. Then check whether the mechanism was used as designed, because a good design that was never adopted and a bad design are different failures with different lessons.",
    },
  ],

  tools: [
    { name: "A dated baseline record", what: "Measure, method, period, source, and the benefit owner's agreement. The one artefact everything else depends on.", cost: "Free" },
    { name: "A measure and counter-measure pair sheet", what: "Every benefit metric alongside the thing that would degrade if it were gamed.", cost: "Free" },
    { name: "A prospective change log", what: "Everything material that changed during the measurement window, recorded as it happened.", cost: "Free" },
    { name: "Half a day of observation", what: "The step that explains what the numbers cannot, and the one most often skipped.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: The National Programme for IT in the NHS, update on detailed care records systems", kind: "Docs", note: "Primary source, May 2011. The finding that delivered systems produced mainly administrative rather than clinical benefit is the clearest available illustration of why benefit must be tied to original purpose.", url: "https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/" },
  ],

  internalLinks: [
    { slug: "writing-a-business-case", anchor: "where the baseline and measures were agreed", context: "Upstream" },
    { slug: "delivering-change-into-a-business", anchor: "the adoption this depends on", context: "Before measurement" },
    { slug: "thinking-critically-about-evidence", anchor: "reading your own results sceptically", context: "Analysis" },
  ],

  relatedGuides: ["writing-a-business-case", "delivering-change-into-a-business", "thinking-critically-about-evidence"],

  conclusion: [
    "Take one improvement your organisation has claimed in the last two years and plot the metric for twelve months before and six months after, rather than the two points either side. It takes an hour, and it will tell you whether you are looking at a change or at a trend that was already running.",
  ],
};

export default guide;
