import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "capacity-and-volume-analysis",
  seoTitle: "Do You Actually Need More People? How to Check",
  metaDescription:
    "Why a team that is always busy has a queue that never clears, how to spot work that only exists because something went wrong, and how to check before hiring.",
  title: "Working Out If You Really Need More People",
  keywords: [
    "capacity analysis",
    "demand and capacity modelling",
    "workload analysis",
    "queue analysis business",
    "volume forecasting",
    "resource planning analysis",
  ],
  category: "business-analysis",
  level: "Advanced",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "There is one thing about busy teams that almost nobody has been shown, and it explains a huge amount of what goes wrong in operations. A team that is busy nearly all of the time does not have a slightly longer queue than a team that is busy most of the time. It has a queue several times longer, and one that never fully clears.",
    "That is why a team running flat out feels like it is drowning even though on paper it is only a little over capacity. It is also why managers who push for everyone to be busy all day are, without meaning to, pushing for customers to wait longer.",
    "More people is the most common request a Business Analyst gets, and the one least often checked. Sometimes it is right. Often the real cause is rework, or work being held up and released in a lump, or an inbox that means half the queue is invisible. This guide is how to tell the difference before somebody spends a year's salary on the wrong answer.",
  ],

  whyItMatters: [
    "Getting this wrong costs money either way. Hire against a problem that was really about how work arrives and you add permanent cost while leaving the actual cause untouched. Refuse a genuine shortage and you get backlogs, overtime, mistakes made under pressure, and eventually people leaving, which makes it worse.",
    "It also matters for anything you are designing. A new process that makes each case quicker on average can still fail if it changes when the work arrives, or makes some cases much slower than others. Swings hurt queues more than averages do.",
    "And it is one of the few places where a bit of counting settles an argument that has been running for months on opinion alone.",
  ],

  coreConcepts: [
    {
      term: "A team that is always busy will always have a backlog",
      explain:
        "This is the one to understand first. When a team is busy roughly three quarters of the time, work waits a bit. When the same team is busy nearly all of the time, work waits a lot, and any bad day creates a pile that never gets cleared because there is no quiet spell to clear it in.",
      detail:
        "So a plan that has everyone occupied all day is a plan for permanent backlog. Some slack is not waste. It is the only thing that stops the queue growing forever, and it is worth saying out loud to whoever is setting the targets.",
    },
    {
      term: "How much work arrives matters less than when it arrives",
      explain:
        "Two teams can handle exactly the same amount of work in a year and need completely different numbers of people. One gets a steady flow. The other gets almost nothing for three weeks and then everything at once.",
      detail:
        "So never plan from an annual total. Plot when the work actually turns up: by month, by day of the week, by hour of the day. The shape is what decides the staffing, and the total hides it completely.",
    },
    {
      term: "Some of the work only exists because something went wrong",
      explain:
        "Look at what is arriving and split it in two. Genuine new work, and work that is only there because something earlier failed: chases, corrections, people ringing back, things being redone.",
      detail:
        "The second pile is not a reason to hire. It is a defect. If a big share of the arriving work is chases and corrections, staffing up to absorb it means paying for that failure every year forever.",
    },
    {
      term: "How to work out the real waiting time in ten minutes",
      explain:
        "Count how many things are currently sitting in the queue. Count how many the team finishes in a week. Divide the first by the second. That is roughly how many weeks a new arrival waits.",
      detail:
        "No stopwatches, no tracking individual cases. Just two counts. The answer is almost always several times longer than anyone in the process believes, and it is very hard to argue with because both numbers are countable by anyone.",
    },
    {
      term: "Averages hide the cases that hurt",
      explain:
        "An average handling time of a few minutes is perfectly consistent with most cases taking two minutes and a handful taking two hours. Those two pictures need completely different staffing and completely different fixes.",
      detail:
        "So always look at the spread, not just the middle. It is usually the small number of long, awkward cases that eat the team's week, and an average is designed to make them disappear.",
    },
    {
      term: "Headcount is not capacity",
      explain:
        "Fourteen people does not mean fourteen people's worth of work. Take off holiday, sickness, training, meetings and admin. Then take off the honest share of the day that is not spent on the actual work, because nobody does case work every hour they are present.",
      detail:
        "That last figure is the one people guess at, and they guess high. Measure it. Stating it openly in your calculation is also what stops somebody dismissing the whole thing later.",
    },
    {
      term: "Two people can be the real bottleneck in a team of fourteen",
      explain:
        "A team can have plenty of capacity overall and still have a permanent queue on one type of work, because only two people are trained to do it and both of them have other jobs as well.",
      detail:
        "This is invisible if you compare total headcount against total volume. Always split it by type of work against who can actually do that type. Training two more people is often much cheaper than hiring one.",
    },
    {
      term: "Work held up and released in a lump looks like a rush",
      explain:
        "If something runs weekly, or approvals get done in a batch at the end of the day, the work arrives as a spike. That spike sets how many people you need, and they are underused in between.",
      detail:
        "The giveaway is overtime landing on the same day every week or month. That is the release schedule doing it, not the workload. Hiring against it means paying people to keep the schedule the way it is.",
    },
    {
      term: "Predict from what drives the work, not from last year's line",
      explain:
        "Drawing a line through last year's volumes assumes nothing changes. Better to find what actually causes the volume: how many customers, how many orders, a policy change, a marketing campaign, the time of year.",
      detail:
        "Forecast that instead, and work back to the volume. It stands up better, and it tells you what the business could pull on to reduce the work rather than just absorb it.",
    },
    {
      term: "A spreadsheet is enough, and it has to carry the backlog forward",
      explain:
        "You do not need special software. Work arriving each week, capacity applied, and whatever is left over rolled into the next week. That last part is what most models miss.",
      detail:
        "And test it against the worst weeks in your history, not the average one. A model that only balances on average describes a team that will be permanently behind, because a good week's spare capacity is small and a bad week's overflow is large.",
    },
    {
      term: "Give them a range of options, not one number",
      explain:
        "Do not recommend a headcount. Show how long people would wait at several different staffing levels, and let leadership pick.",
      detail:
        "That turns your work into a decision they own rather than a request they can accept or refuse. It also makes the cost of each service level obvious, which is usually the conversation the business actually needs to have.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The two extra staff that turned out to be a form field.",
      walkthrough:
        "The problem: a processing team asked for two more people, and they had a growing backlog to prove it. What was happening: before agreeing, the BA took two hundred items that had arrived and sorted them into genuine new work and work that was only there because something had gone wrong earlier. A large share were cases coming back for correction, and nearly all of those came back for the same reason. A field was optional on the form at the start of the process and required by the team downstream.",
      result:
        "What changed: they made the field required at the point of entry. Most of the returning work disappeared. The team did not need more people, and hiring would have locked in the cost of that defect permanently while hiding it. Splitting arriving work into genuine and failure takes half a day and belongs before every conversation about headcount.",
    },
    {
      kind: "illustration",
      scenario: "Fourteen people, and a queue caused by two of them.",
      walkthrough:
        "The problem: one category of work was always late, even though the team was not short-staffed overall. What was happening: on paper, capacity comfortably exceeded volume. Splitting it by type of work against who was trained to do each type told a different story. That category could only be handled by two people, both of whom also carried general work, and one of whom covered weekends.",
      result:
        "What changed: they trained two more people, which cost a fraction of a new hire and cleared the queue. Comparing total capacity against total volume will hide this every time. Always split it by type of work and check who is actually able to do it.",
    },
    {
      kind: "illustration",
      scenario: "The plan that balanced on paper and never worked.",
      walkthrough:
        "The problem: a staffing plan showed capacity slightly ahead of demand, it was approved, and the team was behind from the first month and stayed there. What was happening: the model had been built on average demand. Rebuilding it week by week, carrying the leftover work forward and using the real week-to-week swings, showed exactly what was going on. Bad weeks built up a pile that good weeks could never fully clear, because the spare capacity in a good week was small and the overflow in a bad one was large.",
      result:
        "What changed: they planned against the busy weeks rather than the average, and the backlog stopped growing. Planning to average demand guarantees a permanent queue in any real business, because real businesses have busy weeks.",
    },
  ],

  learningPath: [
    {
      title: "Get the data on when work arrives, not when it was finished",
      body: "You want the time things turned up, by type, for at least a year. Finished work is capped by how many people you have, so it tells you what the team managed rather than what came in.",
      effort: "2-5 days including getting access",
      outcome: "A measure of actual demand instead of a measure of your own capacity.",
    },
    {
      title: "Plot when it arrives three ways",
      body: "By month across the year, by day across the week, by hour across the day. Look for spikes and see whether any of them line up with something internal like a weekly run.",
      effort: "Half a day",
      outcome: "The pattern that decides staffing, which an annual total completely hides.",
    },
    {
      title: "Split two hundred arrivals into genuine and failure",
      body: "Go through them by hand. Is this new work, or is it here because something earlier did not work? Write down the reason for each failure item.",
      effort: "1 day",
      outcome: "The share of your apparent staffing problem that is really a defect.",
    },
    {
      title: "Measure how long things take, including the awkward ones",
      body: "Not an average. You want the spread, especially the long cases. If nobody records it, ask the team to keep a simple tally for two weeks.",
      effort: "2 weeks of waiting, minutes a day",
      outcome: "The picture that averages were hiding.",
    },
    {
      title: "Work out honest capacity",
      body: "Headcount, minus leave, training, meetings and admin, times the real share of time spent on the work, split by type against who can do it.",
      effort: "1 day",
      outcome: "A capacity number that survives being checked, and usually a bottleneck you had not seen.",
    },
    {
      title: "Build the week-by-week spreadsheet",
      body: "Work in, capacity applied, leftovers carried into next week. Run it against your worst historical weeks and check it reproduces the backlog you can actually see.",
      effort: "1-2 days",
      outcome: "A model that matches reality, which is the only test of whether it is right.",
    },
    {
      title: "Present a range and let them choose",
      body: "Waiting time and backlog at several staffing levels. Not one recommended number.",
      effort: "Half a day",
      outcome: "A decision the business owns, with the cost of each option in plain sight.",
    },
  ],

  exercises: [
    {
      title: "Work out a waiting time in ten minutes",
      brief:
        "Pick any queue in your business. Count how many things are in it right now. Count how many get finished in a normal week. Divide the first by the second. Then check the answer against a handful of real cases.",
      success:
        "Your figure is roughly right, and you have a waiting time nobody had to track case by case to produce.",
      time: "1 hour",
    },
    {
      title: "Sort a hundred items into genuine and failure",
      brief:
        "Take one hundred things that arrived at any team last month. Mark each as genuine new work or work created by an earlier failure. Write down the reason for the failures and group them.",
      success:
        "You have a percentage and can name the single biggest cause behind it.",
      time: "Half a day",
    },
    {
      title: "Find a spike that you caused",
      brief:
        "Take a year of arrivals for one type of work and plot them by month, by day of the week and by hour. Mark anything that lines up with an internal schedule such as a weekly run or a reporting deadline.",
      success:
        "You can name at least one peak that your own business creates rather than your customers.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Planning from the annual total",
      why: "It ignores when the work arrives and how much it swings, which is what actually decides how many people you need. Two businesses with the same yearly volume can need very different teams.",
      fix: "Plot arrivals by month, day and hour, and model week by week with the leftovers carried forward.",
    },
    {
      mistake: "Measuring what got finished instead of what arrived",
      why: "Finished work is limited by how many people you have. So a stretched team looks like it has exactly as much demand as capacity, which proves nothing.",
      fix: "Measure at the point work turns up. If nothing records that, getting it recorded is your first recommendation.",
    },
    {
      mistake: "Aiming for everyone to be busy all day",
      why: "The busier a team is, the longer work waits, and it gets worse very fast at the top end. Planning for everyone to be occupied all day is planning for a queue that never clears.",
      fix: "Plan in some slack and show what the last stretch of busyness costs in customer waiting time.",
    },
    {
      mistake: "Hiring to cover work caused by an earlier failure",
      why: "It makes the defect permanent and adds cost every year. That work was never a staffing need, it was a symptom.",
      fix: "Split arriving work into genuine and failure before any staffing conversation, and fix the biggest failure cause first.",
    },
    {
      mistake: "Working from average handling time",
      why: "Swings hurt queues at least as much as the average does. A team with a handful of very long cases behaves nothing like one where every case is similar.",
      fix: "Capture the spread, especially the long tail, and build the model with it.",
    },
    {
      mistake: "Comparing total capacity against total volume",
      why: "It hides the case where only two people can do one type of work. The team looks fine and one queue is permanently late.",
      fix: "Split capacity by type of work against the people qualified to do it.",
    },
    {
      mistake: "Guessing how much of the day is productive",
      why: "Nobody does the actual work every hour they are at their desk, and the guess is always generous, which makes the whole calculation wrong in a predictable direction.",
      fix: "Measure it and put the figure openly in your model.",
    },
    {
      mistake: "Recommending one headcount number",
      why: "It turns a trade-off into a demand, and invites an argument about your number instead of a decision about how long customers should wait.",
      fix: "Show waiting time at a range of staffing levels and let leadership pick the point.",
    },
  ],

  bestPractices: [
    "Measure work when it arrives, never when it is finished.",
    "Look at how much, what type, when it turns up and how much it swings, separately.",
    "Plot arrivals by month, day of week and hour of day.",
    "Split a sample into genuine work and work caused by earlier failures.",
    "Capture the spread of handling times, not just the average.",
    "Work out capacity from measured productive time, not assumed hours.",
    "Split capacity by type of work against who can actually do it.",
    "Check overtime patterns against internal schedules.",
    "Model week by week with the backlog carried forward.",
    "Test the model against your worst weeks, not the average one.",
    "Forecast from whatever drives the volume rather than last year's line.",
    "Present a range of staffing levels rather than one number.",
  ],

  proTips: [
    "Ask the team what a bad day looks like and what they stop doing on one. The things they drop under pressure are the steps the business has quietly decided are optional. That list is a staffing finding and a risk finding at the same time, and it tells you where quality slips before anyone measures it.",
    "Before you model anything, check whether the queue you are looking at is even visible. In a lot of businesses some of the work sits in a shared inbox or on somebody's desk and only enters the system when they start it, which means the official backlog is a count of what has been picked up rather than what is waiting.",
    "When somebody says the team is at capacity, ask how long the queue has been growing and plot it. A queue growing steadily means demand genuinely exceeds capacity. A queue that goes up and down around a level means the team is coping and the real complaint is about the swings. Those two need completely different answers.",
    "Try modelling what happens if you make the awkward cases less awkward, rather than making everyone a bit faster. In most queues, reducing the swings does more than shaving the average, and showing that usually moves the conversation away from squeezing people and towards fixing the messy cases.",
  ],

  businessApplications: [
    "Requests for more staff, where the analysis decides whether it is a capacity problem or a defect.",
    "Setting response targets, where a range of staffing levels makes the cost of each promise obvious.",
    "Deciding what to automate, where the question is which work eats the team's week rather than which is most annoying.",
    "Seasonal planning, where the arrival pattern decides how many temporary staff and when.",
    "Outsourcing decisions, where volume and swings decide whether a fixed price is realistic.",
    "Checking after a change, where something that made each case quicker may have made the swings worse.",
  ],

  checklist: [
    "Arrival times obtained for at least a year.",
    "Arrivals plotted by month, day of week and hour of day.",
    "Peaks checked against internal schedules.",
    "Sample split into genuine work and failure work, with reasons.",
    "Handling times captured as a spread including the long cases.",
    "Productive time measured rather than assumed.",
    "Capacity split by type of work against qualified people.",
    "Bottlenecks caused by limited training identified.",
    "Week-by-week model built with leftovers carried forward.",
    "Model tested against the worst weeks in the data.",
    "Model reproduces the backlog you can actually observe.",
    "Forecast built from whatever drives the volume.",
    "Range of staffing levels presented with waiting times.",
  ],

  faqs: [
    {
      q: "Do I need special software for this?",
      a: "Almost never. A week-by-week spreadsheet that carries the leftover work forward answers most business questions. Think about specialist tools only when the decision is about routing work between several queues and skill groups.",
    },
    {
      q: "How much data do I need?",
      a: "A year of arrival times so you can see the seasons, and a two-week tally by the team for how long things take if nobody records it. With less than a year you will mistake a normal cycle for a trend.",
    },
    {
      q: "How busy should a team be?",
      a: "It depends how much the workload swings and how long customers can reasonably wait, which is why showing a range beats setting a target. What is certain is that planning for everyone to be busy all day is planning for a queue that never clears.",
    },
    {
      q: "How do I tell genuine work from work caused by a failure?",
      a: "Ask of each item whether it would exist if everything before it had worked first time. Chases, corrections, people ringing back and redone work are all failures. Sort a sample by hand rather than trusting whatever category code was ticked.",
    },
    {
      q: "The business is certain they need more people. What do I do?",
      a: "Do the work anyway and show the range alongside the failure work percentage. If they turn out to be right, you have strengthened their case with evidence. If they are not, the numbers make the argument instead of you.",
    },
    {
      q: "Does this apply to a team doing projects rather than cases?",
      a: "Yes. Count what is in progress, divide by how many finish per month, and you get the same answer. Being permanently busy still produces long queues. The only difference is that project work comes in bigger, more variable lumps, which makes the effect stronger rather than weaker.",
    },
  ],

  tools: [
    { name: "Arrival times from whatever the work comes into", what: "The foundation. If nothing records when work turns up, getting that recorded is the first recommendation.", cost: "Varies" },
    { name: "A week-by-week spreadsheet", what: "Work in, capacity applied, leftovers carried forward. Enough for almost every business question.", cost: "Varies" },
    { name: "A two-week tally by the team", what: "How long things actually take, including the awkward ones. Costs minutes a day.", cost: "Free" },
    { name: "A list of who can do what", what: "The fastest way to find a bottleneck that total headcount figures are hiding.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "where-inefficiency-hides", anchor: "checking whether it is really about capacity", context: "Before modelling" },
    { slug: "mapping-a-business-process", anchor: "the process the work flows through", context: "Context" },
    { slug: "writing-a-business-case", anchor: "turning this into a funded decision", context: "Next step" },
  ],

  relatedGuides: ["where-inefficiency-hides", "mapping-a-business-process", "writing-a-business-case"],

  conclusion: [
    "Pick one queue in your business, count what is sitting in it, count how many get finished in a week, and divide. That takes ten minutes and gives you how long work is really waiting, which is usually several times longer than anyone involved believes.",
  ],
};

export default guide;
