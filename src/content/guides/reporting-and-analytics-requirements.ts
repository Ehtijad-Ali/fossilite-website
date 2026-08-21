import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "reporting-and-analytics-requirements",
  seoTitle: "Reporting Requirements: Metrics People Can Actually Trust",
  metaDescription:
    "Specifying reports and dashboards: starting from the decision, defining a metric so two teams get the same number, and killing the reports nobody reads.",
  title: "Reporting and Analytics Requirements",
  keywords: [
    "reporting requirements",
    "metric definition",
    "dashboard requirements",
    "business intelligence requirements",
    "kpi specification",
    "analytics business analysis",
  ],
  category: "data-science",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "Ask a stakeholder what reports they need and you will get a list. The list will be assembled from what already exists plus a few aspirations, it will be delivered with confidence, and most of what gets built from it will go unopened after the first month. This is such a consistent outcome that it should be treated as a property of the question rather than as a failure of the people answering it.",
    "The underlying problem is that a report is not a requirement. It is somebody's proposed solution to a decision they have to make with insufficient information. Specify the report and you have automated their guess. Specify the decision and you frequently find that what they need is an alert, a change to a screen they already use, or a single number in an email, none of which was on the list.",
    "This guide covers the analysis behind reporting: how to find the decision underneath the request, how to define a metric precisely enough that two departments produce the same number, what a report specification actually needs to contain, and how to deal with the accumulated estate of reports nobody reads but everybody is afraid to switch off.",
  ],

  whyItMatters: [
    "Reporting is where organisational disagreement becomes visible and then gets buried. Two teams quote different figures for the same thing, a meeting is spent on which is right, and the resolution is usually that both are technically correct under different definitions that nobody had written down.",
    "Reports also accumulate. Every project adds some, almost none are ever removed, and the estate becomes a maintenance burden that quietly consumes analyst and engineering time forever. Each one is also a consumer of data that constrains every future change to the underlying fields.",
    "And a wrong number that looks plausible is worse than no number. People act on it. A report that has been subtly incorrect for a year has produced a year of decisions, and unlike a broken screen it does not announce itself.",
  ],

  coreConcepts: [
    {
      term: "Start from the decision, not the report",
      explain:
        "What decision does this support, who takes it, how often, and what would they do differently depending on the answer? If none of those can be answered, you have a request for reassurance rather than for information.",
      detail:
        "The best question I know here: think of the last time you made this decision, what did you need and how did you get it? That produces a story with facts in it, where asking what reports you need produces a list.",
    },
    {
      term: "Ask what action each threshold triggers",
      explain:
        "For any metric, ask what value would cause the reader to do something, and what that something is. A number nobody would act on at any value is decoration.",
      detail:
        "This question also tells you whether you are building a report or an alert. If the reader only cares when it crosses a line, they do not want a weekly report, they want to be told when it happens.",
    },
    {
      term: "A metric definition has six parts",
      explain:
        "The population (which records are included), the filter (which are excluded), the calculation, the time basis, the grain, and the source of truth.",
      detail:
        "Miss any one and two teams will produce different numbers in good faith. The time basis is the most commonly omitted: is an order counted when it was placed, confirmed, dispatched or invoiced? Those give four different monthly figures.",
    },
    {
      term: "Define the exclusions explicitly, because that is where teams differ",
      explain:
        "Cancelled orders, internal test accounts, staff purchases, refunded transactions, records created by a migration, one enormous outlier from a single customer.",
      detail:
        "Every organisation has a set of these and each team has quietly made its own choices. Writing the exclusion list is often the single most valuable artefact produced by a reporting project.",
    },
    {
      term: "State the grain before anything else",
      explain:
        "One row per what? Per order, per order line, per customer per month, per case per status change. Everything about the report follows from this.",
      detail:
        "Grain confusion is the source of most double counting. An order with three lines counted at line grain and reported as orders will overstate by a factor that varies with basket size, and the error looks like growth.",
    },
    {
      term: "Averages hide, distributions inform",
      explain:
        "An average handling time of a few minutes is compatible with almost every case being quick and a small number taking hours, which is an entirely different operational picture.",
      detail:
        "Where a metric describes a duration or a value, specify a percentile or a distribution rather than a mean. This is a requirement decision, not a presentation preference, because it changes what the report can be used for.",
    },
    {
      term: "Specify freshness and its consequence",
      explain:
        "How current does this need to be, and what goes wrong if it is a day old? Real-time reporting is dramatically more expensive than overnight and is frequently requested out of habit.",
      detail:
        "Ask what decision would change if the data were twenty-four hours old. In the large majority of management reporting, the honest answer is none, and that answer saves a great deal of money.",
    },
    {
      term: "Say what the report must not be used for",
      explain:
        "A figure built for trend monitoring gets quoted in a board pack as an absolute. A management estimate ends up in a regulatory return.",
      detail:
        "An explicit statement of intended use, and of known limitations, travels with the report and prevents the most damaging category of reporting error, which is a number used correctly for the wrong purpose.",
    },
    {
      term: "Every report needs an owner and a review date",
      explain:
        "Somebody accountable for the definition remaining correct, and a date at which its continued existence is reconsidered.",
      detail:
        "Without these, the estate only grows. With them, an annual review removes the reports nobody opens, which is usually a substantial proportion and always more than anybody expects.",
    },
    {
      term: "Measure whether it is opened",
      explain:
        "Most reporting platforms record access. Pull the figures before designing anything new, because the existing usage data tells you what people actually use.",
      detail:
        "The pattern is consistent: a small number of reports carry most of the usage and a long tail is opened rarely or never. That tail is a maintenance cost and a constraint on every future data change.",
    },
    {
      term: "Reconciliation against a trusted source is part of the requirement",
      explain:
        "A new report that produces a different number from an existing trusted one will not be believed, regardless of which is correct.",
      detail:
        "Specify what it will be reconciled against, at what level, and who signs off the comparison. Where the numbers legitimately differ, the explanation belongs on the report itself.",
    },
    {
      term: "Self-service does not remove the need for definitions",
      explain:
        "Giving people a tool to build their own reports without agreed definitions produces more disagreement, faster, with more authority behind each version.",
      detail:
        "The valuable deliverable in a self-service environment is a governed set of defined measures. The tool is the easy part and the definitions are the work.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A number that shaped policy and could not be reproduced.",
      walkthrough:
        "Reinhart and Rogoff reported that countries with public debt above 90% of GDP experienced negative average growth, a finding cited extensively in arguments for austerity. Thomas Herndon, a graduate student, attempted to replicate the result as coursework and could not. Obtaining the original spreadsheet, he and his co-authors found several problems, including an averaging formula whose range omitted five countries, selective exclusion of available data, and an unconventional weighting choice.",
      result:
        "Recalculated, average real GDP growth above the 90% threshold was 2.2% rather than the reported figure. Every one of the problems found was a definitional choice hidden inside a calculation: which records are included, which are excluded, and how they are weighted. That is exactly what a metric definition is for, and it is why population, filter, calculation, time basis, grain and source belong in the specification rather than inside a formula nobody can inspect.",
      source: {
        label: "Herndon, Ash and Pollin (2013), PERI/UMass Amherst: critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "The eleven reports that became one alert.",
      walkthrough:
        "A director asks for eleven reports. The BA asks a different question about each: think of the last time you needed this, what decision were you making and what did you do? For nine of the eleven the answer is a version of wanting to know whether anything has gone wrong. For one it is a genuine monthly analysis. For the last, the director cannot recall ever having needed it and it was on the list because a predecessor used to receive it.",
      result:
        "The delivered solution was one exception alert covering the nine, one monthly analysis, and nothing for the eleventh. Building the original list would have consumed weeks and produced reports opened once. The distinction that mattered was between wanting to be informed when something is wrong and wanting to analyse something, and those need entirely different solutions.",
    },
    {
      kind: "illustration",
      scenario: "Two teams, one metric, both correct.",
      walkthrough:
        "Sales and Finance report different monthly order figures and have argued about it periodically for years. The BA writes both definitions out against the six parts. Sales counts orders at the point of order placement and includes orders later cancelled. Finance counts at invoice date and excludes cancellations and internal accounts. Both are correct for their own purpose and neither had ever been written down.",
      result:
        "The resolution was not to pick a winner. It was to name them differently, publish both definitions on the reports themselves, and agree which one is used in the board pack. Most reporting disputes are definitional rather than factual, and they persist because nobody ever writes the six parts down side by side.",
    },
  ],

  learningPath: [
    {
      title: "Pull the usage data before designing anything",
      body: "Which existing reports are opened, by whom, how often. Most platforms record this and almost nobody looks at it before commissioning new work.",
      effort: "Half a day",
      outcome: "An evidence base showing what people use, and a list of candidates for retirement.",
    },
    {
      title: "Find the decision behind each request",
      body: "For each requested report ask what decision it supports, who takes it, how often, and what they would do differently at different values. Use the last real occasion rather than the general case.",
      effort: "1-2 days",
      outcome: "A much shorter list, and a clear split between things that should be alerts and things that should be analysis.",
    },
    {
      title: "Write the six-part definition for every metric",
      body: "Population, filter, calculation, time basis, grain, source of truth. Write it even for metrics everybody considers obvious, especially those.",
      effort: "1-2 days",
      outcome: "Definitions two teams can produce the same number from.",
    },
    {
      title: "Agree the exclusion list explicitly",
      body: "Cancellations, test accounts, internal transactions, migration artefacts, refunds, outliers. Get it agreed by every team that will use the number.",
      effort: "Half a day",
      outcome: "The artefact that resolves most future reporting disputes before they happen.",
    },
    {
      title: "Specify freshness against a consequence",
      body: "Ask what decision changes if the data is a day old. Only specify real-time where the answer is a real one.",
      effort: "1 hour",
      outcome: "A cost avoided, more often than not.",
    },
    {
      title: "Define reconciliation and intended use",
      body: "What it will be reconciled against, who signs off, and an explicit statement of what the report is and is not for.",
      effort: "Half a day",
      outcome: "A number that gets believed, and one that is less likely to be misused.",
    },
    {
      title: "Assign an owner and a review date to everything",
      body: "Including the existing estate. Then run the first review and switch off what nobody opens.",
      effort: "1 day",
      outcome: "An estate that shrinks rather than only growing.",
    },
  ],

  exercises: [
    {
      title: "The definition comparison",
      brief:
        "Pick a metric two teams in your organisation both report. Write out each team's version against the six parts: population, filter, calculation, time basis, grain, source. Compare them line by line.",
      success:
        "You can state exactly which of the six parts they differ on, and name a specific case that each would count differently.",
      time: "2 hours",
    },
    {
      title: "The usage audit",
      brief:
        "Get access statistics for your organisation's reporting estate over the last six months. Rank reports by opens. Identify how many have not been opened at all and who owns them.",
      success:
        "You have a percentage of the estate that is unused and a list you could propose retiring, with owners named.",
      time: "Half a day",
    },
    {
      title: "The last-time question",
      brief:
        "Take any current request for a report or dashboard. Ask the requester to describe the last real occasion they needed this information, what they were deciding, and what they actually did.",
      success:
        "You can say whether they need a report, an alert, a change to an existing screen, or nothing at all.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Specifying the requested report",
      why: "A report is somebody's proposed solution to a decision they have to make. Building it automates their guess and produces something opened once.",
      fix: "Ask what decision it supports and what they did the last time they made it. Design from the decision.",
    },
    {
      mistake: "Leaving the time basis undefined",
      why: "Order date, confirmation date, dispatch date and invoice date produce four different monthly figures, all correct, and the disagreement is unresolvable until somebody writes it down.",
      fix: "Make time basis one of six mandatory parts of every metric definition.",
    },
    {
      mistake: "Not agreeing the exclusion list",
      why: "Each team quietly makes its own choices about cancellations, test accounts and internal transactions, so the numbers differ permanently and in good faith.",
      fix: "Write the exclusions explicitly and get them agreed by everybody who will use the metric.",
    },
    {
      mistake: "Getting the grain wrong",
      why: "Counting at line level and reporting as orders overstates by a factor that varies with basket size, and the error looks like a trend rather than a defect.",
      fix: "State one row per what before designing anything else, and check every aggregation against it.",
    },
    {
      mistake: "Reporting averages for durations and values",
      why: "An average is compatible with wildly different operational realities, and it hides exactly the tail that people need to manage.",
      fix: "Specify percentiles or a distribution where the metric describes a duration or an amount.",
    },
    {
      mistake: "Specifying real-time out of habit",
      why: "It is dramatically more expensive than overnight, and in most management reporting no decision would change if the data were a day old.",
      fix: "Ask what decision changes at each freshness level, and specify the cheapest one that supports a real answer.",
    },
    {
      mistake: "No statement of intended use",
      why: "A figure built for trend monitoring ends up quoted as an absolute in a board pack or a regulatory return, which is the most damaging reporting failure of all.",
      fix: "Publish the intended use and known limitations on the report itself, so they travel with the number.",
    },
    {
      mistake: "Never retiring anything",
      why: "The estate grows forever, consumes maintenance, and constrains every future change to the underlying data because each report is a consumer.",
      fix: "Owner and review date on everything, and an annual review that actually switches things off.",
    },
  ],

  bestPractices: [
    "Start from the decision and the action, never from the report.",
    "Ask what value would cause the reader to do something.",
    "Define every metric in six parts: population, filter, calculation, time basis, grain, source.",
    "Agree the exclusion list explicitly with everyone who uses the number.",
    "State the grain before designing anything else.",
    "Use percentiles or distributions for durations and values.",
    "Specify freshness against a real decision consequence.",
    "Publish intended use and known limitations on the report itself.",
    "Specify what the report reconciles against and who signs it off.",
    "Give every report an owner and a review date.",
    "Pull usage statistics before commissioning anything new.",
    "In self-service environments, deliver governed definitions rather than only tools.",
  ],

  proTips: [
    "Ask to see the spreadsheet the person builds after they receive the report. Almost every recipient of a regular report does something to it before using it: filters it, adds a column, compares it to something else. That post-processing is the actual requirement, and the report they asked for is just the closest thing currently available to it.",
    "Put the definition on the report. Not in a data dictionary somebody would have to go and find, but visible on the page: what is included, what is excluded, and as at when. It ends most disputes before they start, and in my experience it is the single change that most improves whether a number gets trusted.",
    "When two teams disagree about a figure, resist the urge to determine who is right. Write both definitions against the six parts and show them side by side. In the large majority of cases both are correct for their own purpose, and the resolution is to name them differently rather than to eliminate one.",
    "Before building a dashboard, ask what the person would do if it showed everything was fine. If the answer is nothing, then what they need is to be told when it is not fine, which is an alert and costs a fraction as much to build and maintain. Dashboards are for exploration, and most requests for one are actually requests for reassurance.",
  ],

  businessApplications: [
    "Management information projects, where definition work is the real deliverable and the tool is secondary.",
    "Regulatory reporting, where definitions are externally specified and reconciliation is auditable.",
    "Performance management, where metric definitions determine what behaviour gets encouraged.",
    "System replacement, where the existing reporting estate is the hidden scope nobody counted.",
    "Data warehouse and self-service programmes, where governed measures matter more than access.",
    "Cost reduction, where retiring unused reports releases engineering capacity nobody was tracking.",
  ],

  checklist: [
    "Usage statistics for the existing estate obtained.",
    "Decision, decision maker, frequency and action identified for each request.",
    "Requests classified as report, alert, screen change or nothing.",
    "Six-part definition written for every metric.",
    "Exclusion list explicit and agreed across teams.",
    "Grain stated and every aggregation checked against it.",
    "Percentiles or distributions used for durations and values.",
    "Freshness justified by a decision consequence.",
    "Reconciliation target and sign-off named.",
    "Intended use and limitations published on the report.",
    "Owner and review date assigned.",
    "Retirement candidates identified from the usage data.",
  ],

  faqs: [
    {
      q: "How do I stop stakeholders asking for reports they will not use?",
      a: "Change the question. Ask about the last real occasion they needed the information and what they did. A list of reports is easy to produce and hard to justify. A specific recent decision is the opposite, and it filters the list quickly.",
    },
    {
      q: "Two teams disagree about a number. How do I resolve it?",
      a: "Write both definitions against population, filter, calculation, time basis, grain and source. Almost always they differ on one part and both are correct for their own purpose. Name them differently rather than picking a winner.",
    },
    {
      q: "How much detail does a report specification need?",
      a: "Enough that somebody who was not in the conversation could build it and get the same numbers as you would. In practice that means the six-part definition, the exclusion list, the grain, the layout intent and the reconciliation target.",
    },
    {
      q: "Should we build a dashboard or send a report?",
      a: "Ask what the reader would do if everything looked fine. If nothing, they want an alert. If they would explore, they want a dashboard. If they would extract it into a spreadsheet, find out what they do there and build that instead.",
    },
    {
      q: "How do I retire reports people are attached to?",
      a: "Lead with usage data rather than argument. Propose switching off rather than deleting, tell the owners, and give a window to object. Objections are far rarer than expected and the ones that arrive are informative.",
    },
    {
      q: "Does self-service analytics remove the need for this work?",
      a: "It increases it. Without agreed definitions, self-service produces more versions of every number, faster, each carrying the authority of having been produced by the person quoting it. The definitions are the deliverable.",
    },
  ],

  tools: [
    { name: "A six-part metric definition template", what: "Population, filter, calculation, time basis, grain, source of truth. The artefact that ends definitional disputes.", cost: "Free" },
    { name: "Report usage statistics", what: "Already collected by most platforms and rarely examined. The evidence base for both new work and retirement.", cost: "Varies" },
    { name: "A published exclusion list", what: "Cancellations, test accounts, internal transactions, migration artefacts. Agreed across teams and visible on the report.", cost: "Free" },
    { name: "A report register with owners and review dates", what: "The only mechanism that makes an estate shrink rather than only grow.", cost: "Free" },
  ],

  resources: [
    { title: "Critique of Reinhart and Rogoff", kind: "Paper", note: "What happens when definitional choices live inside a formula rather than in a written definition. The clearest argument for specifying metrics in six parts.", url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/" },
  ],

  internalLinks: [
    { slug: "data-requirements-for-analysts", anchor: "the data these metrics are built from", context: "Data" },
    { slug: "measuring-whether-it-worked", anchor: "using metrics to judge a change", context: "Application" },
    { slug: "thinking-critically-about-evidence", anchor: "reading a number sceptically", context: "Interpretation" },
  ],

  relatedGuides: ["data-requirements-for-analysts", "measuring-whether-it-worked", "thinking-critically-about-evidence"],

  conclusion: [
    "Take one metric two teams in your organisation both report and write out each version against the six parts. You will find they differ on exactly one of them, usually the time basis or the exclusions, and that page settles an argument that has probably been running for years.",
  ],
};

export default guide;
