import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "measuring-whether-it-worked",
  seoTitle: "Finding Out Whether It Actually Worked",
  metaDescription:
    "Almost nobody checks. How to fix a starting point before you change anything, pick numbers people cannot game, handle everything else that changed, and report it honestly.",
  title: "Finding Out Whether It Actually Worked",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Almost nobody checks. There is a celebration at go-live, the team moves on, and the question of whether the thing achieved what it was funded to achieve quietly does not get asked. By then the people who would have to answer it have new priorities and no reason to reopen anything.",
    "When somebody does check, it is usually done by whoever delivered it, against a number chosen afterwards, with no starting point and no thought about what else changed in the same period. That produces a figure, and the figure is worth roughly nothing, and everybody involved knows it.",
    "This guide is about doing it properly and honestly. Fixing the starting point before you change anything, picking numbers that cannot be improved by doing the wrong thing, dealing with the fact that six other things changed at the same time, and writing it up so people believe it, including when the answer is that it did not work.",
  ],

  whyItMatters: [
    "Without this, a business cannot learn. It repeats whatever got celebrated rather than whatever worked, and after enough rounds it has a folklore about which kinds of project succeed that has nothing to do with what actually happened.",
    "It also decides what gets funded next. Sponsors who can show a real benefit get money more easily, which means measuring is not administrative overhead. It is how the work you believe in keeps happening.",
    "And for a BA it closes the loop that makes the whole chain worthwhile. Problem, cause, requirement, solution, delivery, and then the answer. Without the last step you have no way of finding out whether your judgement is any good, and no way of improving it.",
  ],

  coreConcepts: [
    {
      term: "Fix the starting point before you change anything",
      explain:
        "Measured, dated, with the method written down, and agreed by the person who will later be judged against it. Afterwards is too late: nobody can reconstruct what things used to be like without importing whatever argument is currently going on.",
      detail:
        "Two weeks of real measurement is usually enough. Where the history exists, take twelve months rather than one, so that the time of year does not become the story.",
    },
    {
      term: "Measure the benefit, not the busyness",
      explain:
        "Number of people trained, tickets closed and features delivered are busyness. They tell you the project happened. Whether the business is better off is a different question needing a different number.",
      detail:
        "The test: would this number improve if the project achieved nothing at all but was very busy? If yes, it is a busyness number. Keep those for tracking delivery and never present them as benefit.",
    },
    {
      term: "Every number creates an incentive, so find the shortcut",
      explain:
        "Before adopting a number, ask how somebody under pressure could improve it without improving the underlying thing. There is always a way and you should know what it is.",
      detail:
        "Average handling time improves if the difficult calls get transferred. Queue time improves if work gets logged later. Neither is dishonest. It is a rational response to being measured, and it is entirely predictable.",
    },
    {
      term: "Pair every number with one that would get worse",
      explain:
        "If you measure speed, measure quality alongside it. If you measure volume, measure how much comes back. The pair is much harder to game than either on its own.",
      detail:
        "This is the single most effective structural protection available, and it costs nothing except the discipline of always defining two numbers where you were about to define one.",
    },
    {
      term: "Some numbers tell you early, some tell you late",
      explain:
        "The ones that tell you whether the benefit arrived come too late to do anything about it. The ones that tell you whether people are actually using the new way come early enough to act.",
      detail:
        "If the benefit depends on people using a new process, then how many are using it is what you watch in week two. Waiting six months for the real number means six months of not knowing.",
    },
    {
      term: "What else changed?",
      explain:
        "Volumes moved, two people left, a competitor changed their pricing, a policy was updated, the season turned. Any of these can produce or hide the movement you are claiming.",
      detail:
        "Write down everything material that changed during the period, before you look at the numbers. Doing it afterwards means you will only list the things that explain a result you do not like.",
    },
    {
      term: "Find a comparison group where you can",
      explain:
        "If the change went to three regions and not the other two, you have a free comparison. Use it. It is far stronger evidence than a simple before and after.",
      detail:
        "Where no comparison exists, the honest fallback is to look at the trend before the change rather than a single point. Something that had already been improving for eighteen months did not start improving because of you.",
    },
    {
      term: "Check that people are doing it the new way",
      explain:
        "If the number moved, check that it moved for the reason you designed. If nobody is using the new process, an improvement is a coincidence you will not be able to repeat.",
      detail:
        "The reverse is also useful. If people are using it exactly as designed and the number has not moved, your understanding of the cause was wrong, and that is a much more valuable finding than a small favourable figure.",
    },
    {
      term: "Go and watch, because this never shows up in the data",
      explain:
        "System usage figures show that records are being created. They do not show that people are doing the work in a spreadsheet and typing it in afterwards.",
      detail:
        "Half a day of watching at six weeks tells you things no dashboard can. This is the step people skip because it is not a number, and it routinely explains everything the numbers could not.",
    },
    {
      term: "Report the honest answer, including the awkward one",
      explain:
        "Some things do not work. A review that always finds success is a review nobody uses for decisions, and everybody learns to discount it.",
      detail:
        "The professional version separates four possibilities: it worked, it worked but for a different reason, it did not work, and we cannot tell. That last one is a legitimate answer and it is more common than gets reported.",
    },
    {
      term: "Review at the right distance",
      explain:
        "Too early and you are measuring the disruption of changing things. Too late and nobody cares and everybody involved has moved on.",
      detail:
        "An early check at four to six weeks, and the real one at three to six months for most operational changes. Set both dates when the money is approved, where they will actually be honoured.",
    },
    {
      term: "Somebody has to own the measuring after the project ends",
      explain:
        "The project team disperses. If measuring is not given to a named person with a date, it does not happen, however sincerely everybody intended it to.",
      detail:
        "The person who was named as owning the benefit is the natural choice, and they should have agreed to it in writing when the money was approved rather than being asked afterwards.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Systems delivered, benefit not established.",
      walkthrough:
        "In May 2011 the UK National Audit Office reported on the care records systems within the National Programme for IT in the NHS. It found £2.7 billion had been spent on care records systems to that point, with £4.3 billion of planned spending still to come, and that in one region four of ninety-seven systems had been delivered to acute hospital trusts over seven years. Where systems did exist in acute trusts, the NAO found they were mainly delivering administrative benefits rather than clinical ones.",
      result:
        "The NAO concluded that the £2.7 billion spent did not represent value for money and said it had no confidence the remaining £4.3 billion would do better. That finding, that systems had been delivered and were producing administrative rather than clinical benefit, is exactly the distinction this guide is about. Something existed, it was being used, and it was not delivering what it had been funded for. Only a number tied to the original purpose can detect that, and it has to be agreed before the money is spent.",
      source: {
        label: "National Audit Office (18 May 2011). The National Programme for IT in the NHS: an update on the delivery of detailed care records systems",
        url: "https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/",
      },
    },
    {
      kind: "illustration",
      scenario: "The number improved because it was the number.",
      walkthrough:
        "The problem: a new way of handling incoming enquiries was introduced to reduce how long customers waited for a first response. Response time improved substantially within a month and was reported as a success. What was happening: the BA looked for the thing that might have got worse. Nobody had defined one at the outset, but the data supported it: the share of cases needing a second contact had risen by a similar amount.",
      result:
        "What changed: cases were being closed with a fast acknowledgement that did not actually resolve anything, so the customer came back and a new case was opened. Total effort had gone up and the headline number had gone down. Nobody was cheating. The team was doing exactly what they had been asked to optimise. Any speed measure needs a quality partner defined at the same time, not discovered afterwards.",
    },
    {
      kind: "illustration",
      scenario: "The improvement that started before the project did.",
      walkthrough:
        "The problem: a team reported that error rates fell after a new checking feature launched, and wanted the credit. What was happening: the BA plotted the previous eighteen months rather than the two months either side of go-live. The decline had started roughly a year before the project began, following a change in how a supplier submitted their data, and it carried on at the same rate straight through go-live with no visible kink.",
      result:
        "What changed: the feature may still be worth having and it did not cause the improvement being claimed for it. Plotting the longer trend is a two-minute check and it changes the interpretation more often than anybody expects. Comparing two points cannot tell a change from something that was already happening.",
    },
  ],

  learningPath: [
    {
      title: "Fix the starting point before anything changes",
      body: "Measure for two weeks, or pull twelve months of history where it exists. Record the method, the period and where the data came from. Get the person who owns the benefit to agree it in writing.",
      effort: "2 weeks of waiting, a few hours of effort",
      outcome: "A starting point nobody can dispute later, which is most of the argument avoided.",
    },
    {
      title: "Define numbers in pairs",
      body: "For every benefit number, define the thing that would get worse if somebody optimised the first one under pressure. Speed and quality, volume and rework, cost and errors.",
      effort: "2 hours",
      outcome: "A set of numbers that is hard to game and that people will trust.",
    },
    {
      title: "Pick the early signals and set the review dates",
      body: "What will tell you at four to six weeks whether people are actually doing it the new way. Put both the early check and the real review in the business case, with an owner for each.",
      effort: "1 hour",
      outcome: "Reviews that actually happen, because they were funded rather than intended.",
    },
    {
      title: "Write down what else changed, as it happens",
      body: "Keep a note through the period of everything material: volumes, staffing, policy, suppliers, the season, other projects. Written as it happens, not reconstructed later.",
      effort: "Minutes a week",
      outcome: "A discussion about what caused what, based on a record rather than on what people remember.",
    },
    {
      title: "Find a comparison group or plot the long trend",
      body: "A region or team that has not had the change is the best evidence available. Failing that, plot at least twelve months before and after so something already happening cannot be mistaken for your change.",
      effort: "Half a day",
      outcome: "A claim that survives somebody checking it.",
    },
    {
      title: "Go and watch at six weeks",
      body: "Half a day sitting with the people using it. What are they doing outside the system, what have they stopped doing, what did they expect that has not appeared.",
      effort: "Half a day",
      outcome: "The explanation for whatever the numbers are doing, which the numbers never contain.",
    },
    {
      title: "Write it up with a clear verdict",
      body: "Worked, worked for a different reason, did not work, or cannot tell. State the evidence, the things that muddy it, and what you would do differently. Send it round whatever it says.",
      effort: "1 day",
      outcome: "Something the business can learn from, and a reputation for reporting honestly.",
    },
  ],

  exercises: [
    {
      title: "Find the shortcut",
      brief:
        "Take three numbers currently used in your business. For each, write down exactly how a reasonable person under pressure could improve it without improving the underlying thing. Then check whether the data shows any sign of it happening.",
      success:
        "You can describe a plausible shortcut for all three, and for at least one you have evidence it may already be happening.",
      time: "2 hours",
    },
    {
      title: "Plot eighteen months",
      brief:
        "Take any improvement your business has claimed in the last two years. Plot the number for at least twelve months before and six months after the change, rather than the two points either side.",
      success:
        "You can say whether the change caused a kink or continued something already happening, and you have the chart to show it.",
      time: "1-2 hours",
    },
    {
      title: "Watch at six weeks",
      brief:
        "Find a change that went live six to twelve weeks ago. Spend half a day watching three people use it for thirty minutes each. Note anything happening outside the system.",
      success:
        "You can explain at least one thing about the reported numbers that the numbers alone did not reveal.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "No starting point, or one reconstructed afterwards",
      why: "Everything becomes an assertion, and the argument about what things used to be like cannot be won, because everybody's memory now serves their position.",
      fix: "Measure and agree it in writing before anything changes. Two weeks of real data beats any recollection.",
    },
    {
      mistake: "Reporting busyness as benefit",
      why: "People trained and features shipped tell you the project happened. Presenting them as benefit reads as evasion to anybody senior, and it usually is.",
      fix: "Apply the test: would this number improve if the project achieved nothing but was busy? If so, it is not a benefit number.",
    },
    {
      mistake: "One number with nothing to balance it",
      why: "People optimise whatever is measured, which is exactly what you asked them to do. The result is a better number and often a worse operation.",
      fix: "Define the balancing number at the same time as the main one, always, and report the pair together.",
    },
    {
      mistake: "Ignoring what else changed",
      why: "You claim an improvement that a drop in volumes or a staffing change produced, and when somebody notices, the whole review gets discredited rather than the one claim.",
      fix: "Keep a note of material changes as they happen, and publish the caveats alongside the result.",
    },
    {
      mistake: "Comparing two points instead of a trend",
      why: "A before and after cannot tell a change from something that was already happening, and things already happening are extremely common in operational data.",
      fix: "Plot at least twelve months before and six months after, and look for a kink rather than a difference.",
    },
    {
      mistake: "Only measuring the outcome",
      why: "If nobody is using the new way, an improvement is a coincidence you cannot repeat, and you will draw the wrong conclusion about what to do next.",
      fix: "Measure how much the new way is actually being used alongside the outcome, and go and watch people work.",
    },
    {
      mistake: "Reviewing too early",
      why: "The first weeks after a change are dominated by disruption. Measuring then gives you a discouraging number that says nothing about how it will settle.",
      fix: "Check the early signals early and measure the benefit at three to six months, with both dates set in the business case.",
    },
    {
      mistake: "Only publishing the reviews that went well",
      why: "The business learns nothing and everybody discounts your reviews, including the favourable ones, which makes the whole exercise pointless.",
      fix: "Publish whatever the answer is, with what you would do differently. Cannot tell is a legitimate verdict and should be used when it is true.",
    },
  ],

  bestPractices: [
    "Fix and agree the starting point before anything changes.",
    "Record the method, the period and the source alongside it.",
    "Measure benefit, not busyness.",
    "Define a balancing number for every number.",
    "Work out the shortcut for each one before adopting it.",
    "Use early signals to check people are actually doing it the new way.",
    "Write down everything else that changed, as it happens.",
    "Use a comparison group where one exists.",
    "Plot a long trend rather than comparing two points.",
    "Measure how much the new way is being used, as well as the outcome.",
    "Spend half a day watching people work at around six weeks.",
    "Set the review dates and the owner in the business case.",
    "Publish the result whatever it says, with a clear verdict.",
  ],

  proTips: [
    "Ask the people doing the work whether it is better, and take the answer seriously even when the numbers disagree. When the data says improvement and the team says it is worse, one of two things is true: the number is capturing the wrong thing, or effort has moved somewhere you are not looking. Both are findings, and I have never seen that disagreement turn out to be simple resistance.",
    "Write the how-we-will-check section before the change goes live, including what result would count as a failure. It takes an hour and it removes the possibility of picking the flattering interpretation later, because you will want to, and you will not notice yourself doing it.",
    "Keep your own record of predictions. Write down what you expect the benefit to be and look at it a year later. It is uncomfortable and it is the fastest way to calibrate yourself. Mine consistently overestimated how quickly people would start using things properly.",
    "When the honest answer is that it did not work, lead with what you learned and what it means for the next decision rather than with the failure. Businesses handle a negative result reported usefully far better than they handle finding one out later, and the person who reports it becomes the person whose numbers get believed.",
  ],

  businessApplications: [
    "Checking after a funded programme, where finance expects it and rarely gets anything credible.",
    "Deciding whether to extend a pilot, where the comparison group exists naturally and should be used.",
    "Continuous improvement, where the same change gets applied repeatedly and the measuring compounds in value.",
    "Reviewing how a supplier performed, where contracted outcomes need evidence rather than assertion.",
    "Deciding whether to stop something, which needs a test agreed before anybody was invested.",
    "Choosing between projects, where comparable measuring is the only way to learn what kind of work pays off here.",
  ],

  checklist: [
    "Starting point measured, dated and agreed in writing before the change.",
    "Method and data source recorded.",
    "Benefit numbers separated from busyness numbers.",
    "A balancing number defined for every number.",
    "The shortcut identified for each one.",
    "Early signals defined with a date to check them.",
    "Note kept of other changes during the period.",
    "Comparison group identified, or long trend plotted.",
    "Use of the new way measured alongside the outcome.",
    "Watching session held at around six weeks.",
    "Review dates and owner named in the business case.",
    "Verdict stated clearly: worked, worked differently, did not work, or cannot tell.",
    "Review sent round regardless of the result.",
  ],

  faqs: [
    {
      q: "When should we measure?",
      a: "Early signals at four to six weeks, the real benefit at three to six months for most operational changes, and longer where the benefit depends on a cycle such as a season or a renewal. Set both dates when the money is approved.",
    },
    {
      q: "What if we never measured a starting point?",
      a: "Look for something in the historical data that stands in for it, use a group that did not get the change, or measure now and treat it as the starting point for next time. Be clear that you are inferring rather than comparing, because somebody will check.",
    },
    {
      q: "How do I handle several things changing at once?",
      a: "Note what changed as it happens, use a comparison group where one exists, and state the limits plainly. A result with honest caveats is more useful than a confident claim that falls apart under one question.",
    },
    {
      q: "The numbers improved but the team says it is worse. What now?",
      a: "Investigate rather than dismissing either. Usually effort has moved somewhere you are not measuring, or the number only captures part of the job. That gap between the data and the experience is the most valuable thing in the review.",
    },
    {
      q: "Who should do the review?",
      a: "Not the person who delivered it, or at least not alone. Being independent matters more here than knowing the detail. Where independence is impossible, publish the method and the raw data so somebody else can check the working.",
    },
    {
      q: "What do I do if the answer is that it did not work?",
      a: "Report it, with the evidence and what you would do differently. Then check whether people were actually using it as designed, because a good design nobody adopted and a bad design are different failures with different lessons.",
    },
  ],

  tools: [
    { name: "A dated record of the starting point", what: "The number, the method, the period, the source, and the benefit owner's agreement. Everything else depends on it existing.", cost: "Free" },
    { name: "A paired numbers sheet", what: "Every benefit number alongside the thing that would get worse if somebody gamed it.", cost: "Free" },
    { name: "A running note of other changes", what: "Everything material that changed during the period, written down as it happened.", cost: "Free" },
    { name: "Half a day of watching", what: "The step that explains what the numbers cannot, and the one most often skipped.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: The National Programme for IT in the NHS, update on detailed care records systems", kind: "Docs", note: "Primary source, May 2011. The finding that delivered systems produced mainly administrative rather than clinical benefit is the clearest illustration of why the number has to be tied to the original purpose.", url: "https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/" },
  ],

  internalLinks: [
    { slug: "writing-a-business-case", anchor: "where the starting point and numbers were agreed", context: "Upstream" },
    { slug: "delivering-change-into-a-business", anchor: "getting people actually using it", context: "Before measuring" },
    { slug: "thinking-critically-about-evidence", anchor: "reading your own results sceptically", context: "Analysis" },
  ],

  relatedGuides: ["writing-a-business-case", "delivering-change-into-a-business", "thinking-critically-about-evidence"],

  conclusion: [
    "Take one improvement your business has claimed in the last two years and plot the number for twelve months before and six months after, instead of the two points either side. It takes an hour, and it will tell you whether you are looking at a change or at something that was already happening.",
  ],
};

export default guide;
