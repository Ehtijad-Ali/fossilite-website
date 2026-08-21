import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "reporting-and-analytics-requirements",
  seoTitle: "Why Two Teams Report Different Numbers for the Same Thing",
  metaDescription:
    "Most requested reports go unopened. How to find the decision behind the request, define a number so two teams get the same answer, and switch off what nobody reads.",
  title: "Reports People Actually Trust",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Ask somebody what reports they need and you get a list. The list is put together from what already exists plus a few wishes, it is given confidently, and most of what gets built from it goes unopened after the first month. This happens so reliably that it is a property of the question rather than a failing of the person answering.",
    "The reason is that a report is not a requirement. It is somebody's guess at how to make a decision they have to take without enough information. Build the report and you have automated their guess. Ask about the decision and you often find that what they actually need is an alert, a change to a screen they already look at, or one number in an email. None of which were on the list.",
    "This guide covers the work behind reporting: finding the decision underneath the request, writing down what a number means precisely enough that two departments produce the same answer, and dealing with the pile of reports nobody reads that everybody is afraid to switch off.",
  ],

  whyItMatters: [
    "Reporting is where disagreements in a business become visible and then get buried. Two teams quote different figures for the same thing, a meeting gets spent on who is right, and the answer usually turns out to be that both are correct under different definitions nobody ever wrote down.",
    "Reports also pile up. Every project adds a few, almost none get removed, and the whole lot becomes a maintenance job that quietly eats analyst and engineering time forever. Each one is also using data, which means each one limits what you can change about that data later.",
    "And a wrong number that looks believable is worse than no number, because people act on it. A report that has been subtly wrong for a year has produced a year of decisions, and unlike a broken screen it does not announce itself.",
  ],

  coreConcepts: [
    {
      term: "Start with the decision, not the report",
      explain:
        "What decision does this help with, who takes it, how often, and what would they do differently depending on the answer? If none of those can be answered, this is a request for reassurance rather than for information.",
      detail:
        "The question that works: think of the last time you made this decision. What did you need, and how did you get it? That gets you a story with facts in it. Asking what reports do you need gets you a list.",
    },
    {
      term: "Ask what number would make them do something",
      explain:
        "For any figure, ask what value would cause the reader to pick up the phone, and what they would do. A number nobody would act on at any value is decoration.",
      detail:
        "This also tells you whether you are building a report or an alert. If they only care when it goes past a line, they do not want a weekly report. They want somebody to tell them when it happens.",
    },
    {
      term: "Six things that decide what a number means",
      explain:
        "Which records count. Which ones are left out. How it is worked out. Which date it counts against. What one row represents. And which system it comes from.",
      detail:
        "Miss any one and two teams will produce different numbers, both honestly. The date one gets forgotten most: is an order counted when it was placed, confirmed, sent or invoiced? That is four different monthly figures.",
    },
    {
      term: "Write down what gets left out, because that is where teams differ",
      explain:
        "Cancelled orders. Test accounts. Staff purchases. Refunds. Records created by a system migration. That one enormous order from a single customer.",
      detail:
        "Every business has a list like this and every team has quietly made its own choices about it. Writing the exclusions down is often the single most useful thing a reporting project produces.",
    },
    {
      term: "Say what one row represents before anything else",
      explain:
        "One row per what? Per order, per order line, per customer per month, per case per status change. Everything else follows from this.",
      detail:
        "Getting this wrong causes most double counting. Counting order lines and calling them orders overstates by an amount that varies with how big the orders are, and the mistake looks exactly like growth.",
    },
    {
      term: "Averages hide, spreads inform",
      explain:
        "An average handling time of a few minutes is perfectly consistent with most cases taking two minutes and a handful taking hours. That is a completely different picture of how the operation is doing.",
      detail:
        "Where the number describes how long something took or how much it was worth, ask for the spread rather than the middle. This is a decision about what the report can be used for, not a presentation preference.",
    },
    {
      term: "Ask how up to date it needs to be, and why",
      explain:
        "How current does this have to be, and what actually goes wrong if it is a day old? Live reporting costs dramatically more than overnight and is often asked for out of habit.",
      detail:
        "Ask what decision would change if the data were twenty-four hours old. In most management reporting the honest answer is none, and that answer saves a lot of money.",
    },
    {
      term: "Say what the report is not for",
      explain:
        "A figure built to watch a trend ends up quoted in a board pack as a hard number. An estimate for internal use ends up in something sent to a regulator.",
      detail:
        "Writing down what it is for and what its limits are, on the report itself, prevents the most damaging kind of reporting error, which is a correct number used for the wrong purpose.",
    },
    {
      term: "Every report needs an owner and a date to look at it again",
      explain:
        "Somebody responsible for the definition staying right, and a date when its continued existence gets questioned.",
      detail:
        "Without those, the pile only grows. With them, a yearly review clears out the ones nobody opens, which is always a bigger share than anybody expects.",
    },
    {
      term: "Check whether anyone opens them",
      explain:
        "Most reporting tools record who opened what. Pull those figures before designing anything new, because the usage data tells you what people actually use.",
      detail:
        "The pattern is always the same. A handful of reports carry nearly all the use and a long tail is barely opened. That tail is a maintenance cost and a constraint on every future change to the underlying data.",
    },
    {
      term: "Agree what it gets compared against",
      explain:
        "A new report producing a different number from an existing trusted one will not be believed, whichever is actually right.",
      detail:
        "Say what it will be checked against, at what level, and who signs off the comparison. Where the numbers genuinely should differ, that explanation belongs on the report itself.",
    },
    {
      term: "Letting people build their own reports does not remove the need for definitions",
      explain:
        "Give people a tool without agreed definitions and you get more disagreement, faster, with more authority behind each version.",
      detail:
        "In that setup the valuable thing to deliver is an agreed set of defined measures. The tool is the easy bit. The definitions are the work.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A number that shaped policy and could not be reproduced.",
      walkthrough:
        "Reinhart and Rogoff reported that countries with public debt above 90% of GDP had negative average growth, a finding used widely in arguments for austerity. Thomas Herndon, a graduate student, tried to reproduce it as coursework and could not. When he and his co-authors got hold of the original spreadsheet they found several problems, including a formula that had not been dragged far enough and so left five countries out, some available data being excluded, and an unusual weighting choice.",
      result:
        "Recalculated, average real growth above the 90% threshold was 2.2% rather than the figure that had been published. Every one of those problems was a decision about what counts, hidden inside a calculation: which records are in, which are out, and how they are weighted. That is exactly what a definition is for, and it is why which records, what gets left out, how it is worked out, which date, what one row means and where it comes from belong in writing rather than buried in a formula nobody can inspect.",
      source: {
        label: "Herndon, Ash and Pollin (2013), PERI/UMass Amherst: critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "Eleven reports that turned into one alert.",
      walkthrough:
        "The problem: a director handed over a list of eleven reports he wanted built. What was happening: rather than specifying them, the BA asked about each one. Think of the last time you needed this. What were you deciding, and what did you actually do? For nine of the eleven the answer was some version of wanting to know if anything had gone wrong. For one it was a genuine monthly piece of analysis. For the last, he could not remember ever needing it, and it was on the list because his predecessor used to get it.",
      result:
        "What changed: they built one alert covering the nine, one monthly analysis, and nothing at all for the eleventh. Building the original list would have taken weeks and produced reports opened once. The distinction that mattered was between wanting to be told when something is wrong and wanting to dig into something, and those need completely different answers.",
    },
    {
      kind: "illustration",
      scenario: "Two teams, one figure, both right.",
      walkthrough:
        "The problem: sales and finance reported different monthly order numbers and had been arguing about it on and off for years. What was happening: the BA wrote both definitions out against the six things. Sales counted orders when they were placed and included ones later cancelled. Finance counted them at invoice date and left out cancellations and internal accounts. Both were correct for their own purpose and neither had ever been written down.",
      result:
        "What changed: they did not pick a winner. They gave the two figures different names, published both definitions on the reports themselves, and agreed which one goes in the board pack. Most reporting arguments are about definitions rather than facts, and they carry on for years because nobody ever writes the six things down side by side.",
    },
  ],

  learningPath: [
    {
      title: "Check what people actually open, first",
      body: "Which existing reports get opened, by whom, how often. Most tools record it and almost nobody looks before commissioning new work.",
      effort: "Half a day",
      outcome: "Evidence of what people use, and a list of candidates to switch off.",
    },
    {
      title: "Find the decision behind each request",
      body: "For each report asked for, find out what decision it supports, who takes it, how often, and what they would do differently at different values. Use the last real time it happened, not the general case.",
      effort: "1-2 days",
      outcome: "A much shorter list, and a clear split between alerts and genuine analysis.",
    },
    {
      title: "Write the six things down for every number",
      body: "Which records, what is left out, how it is worked out, which date, what one row means, where it comes from. Do it even for numbers everybody thinks are obvious, especially those.",
      effort: "1-2 days",
      outcome: "Definitions two teams can both produce the same answer from.",
    },
    {
      title: "Agree the exclusion list out loud",
      body: "Cancellations, test accounts, internal transactions, migration leftovers, refunds, outliers. Get it agreed by everybody who uses the number.",
      effort: "Half a day",
      outcome: "The thing that settles most future reporting arguments before they start.",
    },
    {
      title: "Ask how current it needs to be, and why",
      body: "Ask what decision changes if the data is a day old. Only build live reporting where there is a real answer.",
      effort: "1 hour",
      outcome: "Money saved, more often than not.",
    },
    {
      title: "Say what it gets checked against and what it is for",
      body: "What it is compared with, who signs that off, and a plain statement of what the report is and is not for.",
      effort: "Half a day",
      outcome: "A number that gets believed, and one less likely to be misused.",
    },
    {
      title: "Give everything an owner and a review date",
      body: "Including the reports that already exist. Then run the first review and actually switch things off.",
      effort: "1 day",
      outcome: "A set of reports that can shrink rather than only grow.",
    },
  ],

  exercises: [
    {
      title: "Two definitions, side by side",
      brief:
        "Pick a number two teams both report. Write out each version against the six things: which records, what is left out, how it is worked out, which date, what one row means, where it comes from. Compare line by line.",
      success:
        "You can say exactly which of the six they differ on, and name a real case each would count differently.",
      time: "2 hours",
    },
    {
      title: "Who opens what",
      brief:
        "Get the usage figures for your organisation's reports over the last six months. Rank them by how often they are opened. Work out how many have not been opened at all and who owns those.",
      success:
        "You have a percentage of unused reports and a list you could propose switching off, with names against them.",
      time: "Half a day",
    },
    {
      title: "Ask about the last time",
      brief:
        "Take any current request for a report or dashboard. Ask the person to describe the last real time they needed that information, what they were deciding, and what they actually did.",
      success:
        "You can say whether they need a report, an alert, a change to a screen they already use, or nothing at all.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Building the report that was asked for",
      why: "A report is somebody's guess at how to handle a decision. Building it automates their guess and produces something opened once.",
      fix: "Ask what decision it supports and what they did the last time. Design from the decision.",
    },
    {
      mistake: "Not saying which date it counts against",
      why: "Order date, confirmed date, dispatch date and invoice date give four different monthly figures, all correct, and the argument cannot be settled until somebody writes it down.",
      fix: "Make the date one of six things every definition has to state.",
    },
    {
      mistake: "Not agreeing what gets left out",
      why: "Each team quietly makes its own decisions about cancellations, test accounts and internal orders, so the numbers differ permanently and everyone is acting in good faith.",
      fix: "Write the exclusions down explicitly and get them agreed by everyone who uses the number.",
    },
    {
      mistake: "Getting one row per what wrong",
      why: "Counting at line level and reporting it as orders overstates by an amount that changes with basket size, so the error looks like a trend rather than a mistake.",
      fix: "State what one row represents before designing anything else, and check every total against it.",
    },
    {
      mistake: "Reporting averages for times and amounts",
      why: "An average fits several completely different realities and hides exactly the tail people need to manage.",
      fix: "Ask for the spread where the number describes how long something took or how much it was worth.",
    },
    {
      mistake: "Asking for live data out of habit",
      why: "It costs dramatically more than overnight, and in most management reporting no decision would change if the data were a day old.",
      fix: "Ask what decision changes at each level of freshness and build the cheapest one that supports a real answer.",
    },
    {
      mistake: "Not saying what it is for",
      why: "A figure built to watch a trend gets quoted as a hard number in a board pack or a regulatory return, which is the most damaging reporting failure there is.",
      fix: "Put what it is for and its limits on the report itself, so they travel with the number.",
    },
    {
      mistake: "Never switching anything off",
      why: "The pile grows forever, eats maintenance time, and limits every future change to the underlying data because every report is using it.",
      fix: "Owner and review date on everything, and a yearly review that actually switches things off.",
    },
  ],

  bestPractices: [
    "Start from the decision and the action, never from the report.",
    "Ask what value would make the reader do something.",
    "Define every number six ways: records, exclusions, calculation, date, one row per what, source.",
    "Agree the exclusion list with everyone who uses the number.",
    "State what one row represents before designing anything.",
    "Use spreads rather than averages for times and amounts.",
    "Justify how current it needs to be with a real decision.",
    "Put what it is for and its limits on the report itself.",
    "Say what it gets checked against and who signs that off.",
    "Give every report an owner and a review date.",
    "Look at usage figures before commissioning anything new.",
    "Where people build their own reports, deliver agreed definitions rather than just access.",
  ],

  proTips: [
    "Ask to see the spreadsheet the person builds after they get the report. Almost everybody who receives a regular report does something to it before using it: filters it, adds a column, compares it to something else. That bit afterwards is the actual requirement, and the report they asked for is just the nearest thing currently available.",
    "Put the definition on the report itself. Not in a glossary somebody would have to go and find, but visible on the page: what is in, what is out, and as at when. It stops most arguments before they start, and it is the single change that most improves whether a number gets believed.",
    "When two teams disagree about a figure, resist working out who is right. Write both definitions out against the six things and show them side by side. Nearly always both are correct for their own purpose, and the answer is to name them differently rather than kill one.",
    "Before building a dashboard, ask what the person would do if it showed everything was fine. If the answer is nothing, what they want is to be told when it is not fine, which is an alert and costs a fraction as much to build and keep running. Dashboards are for digging into things, and most requests for one are really requests for reassurance.",
  ],

  businessApplications: [
    "Management information projects, where the definitions are the real deliverable and the tool is secondary.",
    "Regulatory reporting, where the definitions come from outside and the totals have to be provable.",
    "Performance targets, where how a number is defined decides what behaviour it encourages.",
    "Replacing a system, where the existing pile of reports is hidden scope nobody counted.",
    "Data warehouse and self-service projects, where agreed measures matter more than access.",
    "Cost cutting, where switching off unused reports frees up engineering time nobody was tracking.",
  ],

  checklist: [
    "Usage figures for existing reports obtained.",
    "Decision, decision maker, frequency and action identified for each request.",
    "Requests sorted into report, alert, screen change, or nothing.",
    "Six-part definition written for every number.",
    "Exclusion list explicit and agreed across teams.",
    "One row per what stated and every total checked against it.",
    "Spreads used rather than averages for times and amounts.",
    "Freshness justified by a real decision.",
    "What it gets checked against, and who signs off, named.",
    "What it is for and its limits published on the report.",
    "Owner and review date assigned.",
    "Candidates for switching off identified from the usage figures.",
  ],

  faqs: [
    {
      q: "How do I stop people asking for reports they will not use?",
      a: "Change the question. Ask about the last real time they needed the information and what they did. A list of reports is easy to produce and hard to justify. A specific recent decision is the opposite, and it shortens the list quickly.",
    },
    {
      q: "Two teams disagree about a number. How do I settle it?",
      a: "Write both definitions out against the six things. Almost always they differ on one of them and both are correct for their own purpose. Give them different names rather than picking a winner.",
    },
    {
      q: "How much detail does a report specification need?",
      a: "Enough that somebody who was not in the conversation could build it and get the same numbers you would. In practice that means the six-part definition, the exclusion list, what one row represents, roughly what it should look like, and what it gets checked against.",
    },
    {
      q: "Dashboard or emailed report?",
      a: "Ask what the reader would do if it all looked fine. If nothing, they want an alert. If they would start digging, they want a dashboard. If they would export it into a spreadsheet, find out what they do in there and build that instead.",
    },
    {
      q: "How do I switch off reports people are attached to?",
      a: "Lead with the usage figures rather than the argument. Propose switching off rather than deleting, tell the owners, and give a window to object. Objections are much rarer than you expect and the ones you get are informative.",
    },
    {
      q: "Does self-service reporting remove the need for this?",
      a: "It increases it. Without agreed definitions, self-service produces more versions of every number, faster, each carrying the authority of whoever is quoting it. The definitions are the deliverable.",
    },
  ],

  tools: [
    { name: "A six-part definition template", what: "Records, exclusions, calculation, date, one row per what, source. The thing that settles definitional arguments.", cost: "Free" },
    { name: "Report usage figures", what: "Already collected by most tools and almost never looked at. The evidence for both new work and switching things off.", cost: "Varies" },
    { name: "A published exclusion list", what: "Cancellations, test accounts, internal orders, migration leftovers. Agreed across teams and visible on the report.", cost: "Free" },
    { name: "A report register with owners and review dates", what: "The only thing that makes a set of reports shrink rather than only grow.", cost: "Free" },
  ],

  resources: [
    { title: "Critique of Reinhart and Rogoff", kind: "Paper", note: "What happens when the decisions about what counts live inside a formula instead of in a written definition.", url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/" },
  ],

  internalLinks: [
    { slug: "data-requirements-for-analysts", anchor: "the data these numbers come from", context: "Data" },
    { slug: "measuring-whether-it-worked", anchor: "using numbers to judge a change", context: "Application" },
    { slug: "thinking-critically-about-evidence", anchor: "reading a number sceptically", context: "Interpretation" },
  ],

  relatedGuides: ["data-requirements-for-analysts", "measuring-whether-it-worked", "thinking-critically-about-evidence"],

  conclusion: [
    "Take one number two teams in your business both report and write out each version against the six things. You will find they differ on exactly one of them, usually the date or the exclusions, and that single page settles an argument that has probably been running for years.",
  ],
};

export default guide;
