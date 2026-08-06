import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "automation-worth-building",
  seoTitle: "Automation Worth Building: What to Automate, What to Cut",
  metaDescription:
    "How to decide what's actually worth automating: the payback maths, the maintenance nobody counts, and why deleting a step usually beats automating it.",
  title: "Automation Worth Building",
  keywords: [
    "what to automate",
    "workflow automation",
    "automation roi",
    "business process automation",
    "when not to automate",
    "automation maintenance cost",
  ],
  category: "automation",
  level: "Beginner",
  updated: "2026-08-05",
  author: PETER_NGUYEN,
  readingTime: 11,

  intro: [
    "There's a well-known joke about spending six hours automating a task that took twenty minutes. It lands because everyone has done it, and because the maths is harder than it looks: the tempting version compares build time against time saved, and leaves out the part that actually decides it.",
    "Automation has a maintenance cost. It breaks when an upstream format changes, when someone leaves and takes the context with them, when the process it encoded gets revised. That ongoing cost is invisible at build time and it's what turns a good automation into a liability nobody wants to own.",
    "This guide is about choosing. Which tasks pay back, which look tempting and don't, and the option most people skip entirely: deleting the step rather than automating it. Most of the value here is in what you decide not to build.",
  ],

  whyItMatters: [
    "Automation is where a lot of well-intentioned effort disappears. Teams automate the visible annoyance rather than the expensive one, build something fragile around a process that was about to change, and end up maintaining several scripts that each save a few minutes a month.",
    "The compounding argument is real, though, when you pick correctly. A task done weekly by four people for two years is several hundred hours. Removing it doesn't just save time: it removes an error source, a training burden and a dependency on whoever happened to know the steps.",
    "And automation forces a clarity that's valuable even when you don't build. Writing down every step of a process reliably reveals that two of them exist because of a system that was replaced, and one is a workaround for a bug that got fixed. That audit often pays for itself before any code is written.",
  ],

  coreConcepts: [
    {
      term: "Payback is build plus maintenance, not build alone",
      explain:
        "The honest calculation is: does time saved over a realistic horizon exceed build time plus ongoing maintenance? The second term is the one nobody estimates and it's frequently larger than the first.",
      detail:
        "A reasonable rule of thumb is to assume maintenance costs a meaningful fraction of build time every year. If the automation only just breaks even ignoring that, it loses.",
    },
    {
      term: "Frequency matters more than duration",
      explain:
        "A two-hour task done annually is four hours over two years. A ten-minute task done daily is over eighty. The irritating long task is rarely the expensive one.",
      detail:
        "People consistently want to automate the task they hate rather than the task that costs the most. Those are different tasks and the second one is usually boring.",
    },
    {
      term: "Stability beats volume",
      explain:
        "Automating a process that changes every quarter means rebuilding every quarter. A lower-volume but stable process is often the better investment.",
      detail:
        "Ask when the process last changed and what would cause it to change again. If the answer is 'constantly' or 'we're reviewing it', wait.",
    },
    {
      term: "Deleting beats automating",
      explain:
        "Before automating a step, ask whether it needs to exist. A surprising share of recurring work is producing a report nobody reads or checking something that no longer fails.",
      detail:
        "This is the highest-return option and the one people skip, because deleting feels like it needs permission and building doesn't.",
    },
    {
      term: "Judgement steps don't automate; they get assisted",
      explain:
        "Steps requiring a real decision resist automation. What works is removing everything around the decision so a person does only the deciding.",
      detail:
        "Gathering the information, formatting it, drafting the options. That's automatable. The choice stays with a person, and that's usually where the value was anyway.",
    },
    {
      term: "Silent failure is worse than no automation",
      explain:
        "An automation that stops working without telling anyone is worse than the manual process, because nobody notices for weeks and the gap has to be reconstructed.",
      detail:
        "Every automation needs a way to fail loudly. If you can't detect its failure, don't build it.",
    },
    {
      term: "Someone has to own it",
      explain:
        "An automation with no owner degrades. Formats change, credentials expire, assumptions stop holding, and the person who understood it moves on.",
      detail:
        "If you can't name the owner, you're building an orphan. That's a legitimate reason not to proceed.",
    },
    {
      term: "Start with the boring middle",
      explain:
        "The best first automation is repetitive, stable, well-understood, and tolerant of review. Not the most impressive one. The one most likely to still be running in a year.",
      detail:
        "Ambitious first automations fail and poison the appetite for the next one. A dull success buys credibility for something harder.",
    },
  ],

  learningPath: [
    {
      title: "Log a week of recurring work",
      body: "For one week, note every task you do more than once, with rough duration and frequency. Don't judge, just record. The list is almost always different from what you'd have guessed.",
      effort: "5 minutes a day",
      outcome: "A real inventory instead of an impression.",
    },
    {
      title: "Rank by annual cost, not by annoyance",
      body: "Multiply duration by annual frequency for each item. Sort. The top entries are usually short, frequent and unglamorous: not the task you'd have picked.",
      effort: "1 hour",
      outcome: "A ranked list with hours attached.",
    },
    {
      title: "Ask what can be deleted",
      body: "Go down the list and ask, for each: does this need to exist? Who consumes the output? What would break if it stopped? Try stopping one and see whether anyone notices.",
      effort: "2 hours",
      outcome: "At least one recurring task removed rather than automated.",
    },
    {
      title: "Write the steps out precisely",
      body: "For your top candidate, document every step including the decisions and exceptions. This is where you discover the process isn't what you thought and two steps are vestigial.",
      effort: "2–3 hours",
      outcome: "A written process, and usually a simpler one.",
    },
    {
      title: "Do the payback maths honestly",
      body: "Estimate build time, then add annual maintenance. Compare against time saved over two years. If it's close, don't build. Estimates are optimistic and the close ones lose.",
      effort: "1 hour",
      outcome: "A go/no-go with numbers behind it.",
    },
    {
      title: "Build the smallest version",
      body: "Automate the most repetitive part first, leaving judgement steps to a person. Partial automation ships sooner and breaks less than an end-to-end attempt.",
      effort: "Varies",
      outcome: "Something running, rather than something designed.",
    },
    {
      title: "Make failure loud",
      body: "Add a notification when it fails, and (importantly) when it doesn't run at all. Silent absence is the failure mode that costs most.",
      effort: "2–3 hours",
      outcome: "You'll know within a day rather than a month.",
    },
    {
      title: "Assign an owner and review it",
      body: "Name who maintains it and schedule a check every six months: does it still run, does it still match the process, is the output still used?",
      effort: "1 hour setup",
      outcome: "An automation that doesn't quietly rot.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The cost of interruption, and what automating fragmented work is really worth.",
      walkthrough:
        "Mark, Gudith and Klocke ran a controlled study comparing interrupted and uninterrupted work. The intuitive expectation is that interrupted work takes longer.",
      result:
        "Participants completed interrupted tasks in *less* time, with no quality difference. They compensated by working faster. The cost appeared as significantly higher stress, frustration, time pressure and effort. For automation this reframes the business case: a task that fragments someone's day is costing more than its duration suggests, and that cost won't show up in a time-saved calculation.",
      source: {
        label: "Mark, Gudith & Klocke (2008). The Cost of Interrupted Work: More Speed and Stress, CHI '08",
        url: "https://ics.uci.edu/~gmark/chi08-mark.pdf",
      },
    },
    {
      kind: "documented",
      scenario: "Why manual data steps are more dangerous than they look.",
      walkthrough:
        "Ziemann, Eren and El-Osta examined 3,597 genomics papers published between 2005 and 2015, covering 7,467 supplementary gene lists produced in Excel. With default settings, Excel silently converts certain gene symbols into dates: SEPT2 becomes 2-Sep.",
      result:
        "19.6% of the papers contained conversion errors. Careful researchers, ordinary use, no warning shown, and it survived peer review. The automation lesson isn't about Excel: any recurring manual step involving a tool that transforms data silently is producing errors nobody is counting. That's a cost that never appears in a time-based business case.",
      source: {
        label: "Ziemann, Eren & El-Osta (2016). Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "illustration",
      scenario: "The report nobody reads.",
      walkthrough:
        "A recognisable discovery. A weekly report takes someone forty minutes to assemble and it's an obvious automation candidate. Before building, someone asks who reads it. The distribution list has eleven people. Two open it. Both say they'd be fine with a monthly version, and one only wants a single number from it.",
      result:
        "The automation was never built. A monthly one-line summary replaced forty minutes a week. Asking who consumes the output takes ten minutes and is the highest-return question in this guide. It's just easier to build something than to propose stopping something.",
    },
  ],

  mistakes: [
    {
      mistake: "Automating the task you hate rather than the one that costs most",
      why: "Annoyance and cost are weakly correlated. The expensive tasks are usually short, frequent and boring enough that nobody resents them.",
      fix: "Rank by duration × annual frequency and work from the top, even when the top entry is dull.",
    },
    {
      mistake: "Ignoring maintenance in the payback calculation",
      why: "Build time is visible and maintenance isn't. Formats change, credentials expire, processes get revised, and the automation needs attention each time.",
      fix: "Add an annual maintenance estimate before deciding. Anything that only just breaks even without it will lose.",
    },
    {
      mistake: "Not asking whether the step should exist",
      why: "Deleting feels like it needs permission; building doesn't. So people automate reports nobody reads and checks for failures that no longer happen.",
      fix: "Ask who consumes the output and what breaks if it stops. Try stopping it for a month.",
    },
    {
      mistake: "Automating a process that's about to change",
      why: "You'll rebuild it. Encoding a process mid-revision means the automation is wrong before it's finished.",
      fix: "Ask when it last changed and what would change it again. Wait for stability.",
    },
    {
      mistake: "Building end-to-end on the first attempt",
      why: "Full automation includes the judgement steps and the exceptions, which is where the complexity lives. Ambitious first attempts stall.",
      fix: "Automate the repetitive middle and leave the decisions to a person. Extend later if it earns it.",
    },
    {
      mistake: "No failure notification",
      why: "An automation that stops silently is worse than the manual process, because the gap goes unnoticed and then has to be reconstructed.",
      fix: "Alert on failure and on non-execution. If you can't detect its absence, don't build it.",
    },
    {
      mistake: "Building without an owner",
      why: "Unowned automations rot. The person who understood it leaves, something changes, and it's easier to work around it than to fix it.",
      fix: "Name an owner before building. If you can't, that's a legitimate reason not to.",
    },
  ],

  bestPractices: [
    "Rank candidates by duration × annual frequency, not by how irritating they are.",
    "Include an annual maintenance estimate in every payback calculation.",
    "Ask who consumes the output before automating anything that produces one.",
    "Write the process out precisely before building, the audit often changes the answer.",
    "Check process stability: if it changed recently or is under review, wait.",
    "Automate around judgement steps rather than trying to replace them.",
    "Alert on failure and on non-execution, both.",
    "Name an owner before you build, and schedule a review twice a year.",
    "Start with something boring and stable rather than impressive and fragile.",
    "Keep the manual process documented so people can still do it when the automation is down.",
  ],

  proTips: [
    "The highest-return question is 'who reads this?' It takes ten minutes, it's rarely asked, and it kills more unnecessary automation than any analysis.",
    "Try stopping a recurring task for a month before automating it. If nobody notices, you've saved the build entirely. And if they do, you now know exactly who cares and why.",
    "Count the errors the manual process produces, not just the time it takes. Steps involving tools that silently transform data are producing mistakes nobody is measuring.",
    "Look for tasks that fragment someone's day, not just long ones. A five-minute interruption at an unpredictable time costs more than its duration, and that cost is invisible in a time-saved figure.",
    "Write the failure alert before the automation. It clarifies what 'working' means, and it's the part that gets skipped when you're nearly finished.",
    "Keep a note of what you decided not to automate and why. It stops the same idea being re-proposed every six months.",
  ],

  businessApplications: [
    "Reporting pipelines: usually the largest concentration of automatable work, and the place where the who-reads-this question deletes the most.",
    "Data entry and re-keying between systems that don't integrate, which is both time-consuming and error-generating.",
    "Reconciliation between systems: tedious by hand, well-defined, and stable enough to automate safely.",
    "Onboarding and offboarding checklists, where the cost of a missed step is high and the process is stable.",
    "Monitoring and alerting, replacing someone remembering to check something.",
    "Document generation from structured data, where a person reviews rather than assembles.",
  ],

  lifeApplications: [
    "Personal admin. The same ranking applies, and the same answer usually appears: several recurring tasks can simply stop.",
    "Recognising that a frequent small task costs more than an occasional large one, in your own week as much as at work.",
    "Automating decisions in advance: a standing rule beats deciding repeatedly, which is automation applied to attention rather than to software.",
    "Noticing which recurring obligations exist because of a situation that no longer applies.",
  ],

  exercises: [
    {
      title: "The recurring-work log",
      brief:
        "Note every task you repeat over one week, with duration and frequency. Don't filter as you go.",
      success: "A list, ranked by annual hours, that surprises you.",
      time: "5 minutes a day",
    },
    {
      title: "The deletion audit",
      brief:
        "Take your top five candidates. For each, identify who consumes the output and what breaks if it stops. Stop one for a month.",
      success: "At least one task eliminated rather than automated.",
      time: "2–3 hours",
    },
    {
      title: "Honest payback maths",
      brief:
        "For your best candidate, estimate build time, add annual maintenance, and compare against two years of time saved. Decide on the number.",
      success: "A written go/no-go you'd defend to someone sceptical.",
      time: "1 hour",
    },
    {
      title: "Build the alert first",
      brief:
        "Before writing the automation, write the notification that fires when it fails or doesn't run. Define what 'working' means.",
      success: "A failure path that exists before the happy path.",
      time: "1–2 hours",
    },
  ],

  checklist: [
    "Candidates are ranked by duration × annual frequency",
    "I asked who consumes the output and whether the step can be deleted",
    "The process is stable and hasn't changed recently",
    "The steps are written out precisely, including exceptions",
    "Payback includes an annual maintenance estimate",
    "Judgement steps stay with a person",
    "The first version automates the repetitive middle only",
    "Failure and non-execution both trigger an alert",
    "An owner is named and a review is scheduled",
    "The manual fallback is documented",
  ],

  faqs: [
    {
      q: "What should I automate first?",
      a: "The most frequent, most stable, best-understood task on your list: not the most annoying or most impressive. A boring success buys credibility for something harder; an ambitious failure poisons the appetite.",
    },
    {
      q: "How do I know if it's worth it?",
      a: "Time saved over two years must exceed build time plus annual maintenance. If it's close, don't build. Estimates are optimistic and marginal cases reliably lose.",
    },
    {
      q: "How much maintenance should I assume?",
      a: "A meaningful fraction of build time every year. The exact figure depends on how many external systems it touches; anything integrating with a third-party API needs more than you'd think.",
    },
    {
      q: "Should I automate something that needs judgement?",
      a: "Automate around it. Gather the information, format it, draft the options, and leave the decision to a person. That's usually where the value was, and it's the part that resists automation for good reasons.",
    },
    {
      q: "What if the process changes often?",
      a: "Wait. Automating a moving process means rebuilding repeatedly, and you'll likely encode a version that's already being revised. Stability is worth more than volume here.",
    },
    {
      q: "Can AI automate things that couldn't be automated before?",
      a: "It extends the range to unstructured input (documents, free text, images) that rule-based automation couldn't handle. The selection criteria don't change: frequency, stability, ownership, detectable failure.",
    },
    {
      q: "What's the most common mistake?",
      a: "Not asking whether the task should exist. Deleting feels like it needs permission and building doesn't, so people automate reports nobody reads. Ask who consumes the output first.",
    },
  ],

  tools: [
    { name: "Zapier / Make", what: "No-code automation between SaaS tools. Fast to build, and worth watching the per-run cost at volume.", cost: "Freemium" },
    { name: "n8n", what: "Self-hostable workflow automation. More control, more maintenance.", cost: "Freemium", url: "https://n8n.io" },
    { name: "Python + cron", what: "Unglamorous and durable. Often the right answer for anything with real logic in it.", cost: "Free" },
    { name: "GitHub Actions", what: "Scheduled jobs with version-controlled definitions and built-in failure notification.", cost: "Freemium" },
    { name: "A shared spreadsheet", what: "For the recurring-work log. The analysis matters more than the tooling.", cost: "Free" },
  ],

  resources: [
    { title: "The Cost of Interrupted Work", kind: "Paper", note: "Mark, Gudith & Klocke (2008). Why fragmenting tasks cost more than their duration suggests.", url: "https://ics.uci.edu/~gmark/chi08-mark.pdf" },
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "What manual data handling costs in errors rather than time.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
    { title: "Google's Rules of Machine Learning", kind: "Docs", note: "Rule one is essentially 'try it without ML first': the same discipline applied to automation generally.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "time-management-systems-compared", anchor: "why fragmented work costs more than its duration", context: "In the documented example on interruption" },
    { slug: "api-integration-that-doesnt-break", anchor: "making the integration survive", context: "In the maintenance concept" },
    { slug: "data-cleaning-fundamentals", anchor: "the errors manual data steps produce", context: "In the second documented example" },
  ],

  relatedGuides: [
    "time-management-systems-compared",
    "api-integration-that-doesnt-break",
    "data-cleaning-fundamentals",
  ],

  conclusion: [
    "When you do build, start boring. Automate the repetitive middle, leave judgement to a person, and make failure loud enough that you'll know within a day. A dull automation still running in two years is worth more than an ambitious one that broke in March and nobody noticed.",
  ],

  cta: {
    headline: "Have a list and no idea what's first?",
    body:
      "Ranking it takes an afternoon and usually removes half the list. We'll do that with you before anyone writes code.",
    label: "Rank your list with us",
    href: "/contact",
  },
};

export default guide;
