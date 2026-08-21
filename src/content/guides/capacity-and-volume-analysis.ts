import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "capacity-and-volume-analysis",
  seoTitle: "Capacity and Volume Analysis for Business Analysts",
  metaDescription:
    "Why a team at full utilisation has enormous queues, how to read arrival patterns, and how to size demand properly before anyone asks for more headcount.",
  title: "Capacity and Volume Analysis",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "There is one piece of counterintuitive arithmetic that explains more operational problems than anything else I know, and almost nobody in a business setting has been shown it. As a team's utilisation approaches one hundred per cent, the time work spends waiting does not rise gradually. It rises without limit.",
    "This is why a team that is busy ninety-five per cent of the time has queues that seem wildly disproportionate to how close they are to capacity, and why adding a small amount of headcount sometimes produces a dramatic improvement while adding a lot of headcount elsewhere produces almost none. It is also why managers who target high utilisation are, without realising it, targeting long waits.",
    "This guide covers demand and capacity analysis as a BA actually needs it: how to measure demand properly, why arrival patterns matter more than totals, the utilisation trap, how to size a team without pretending to be an operational researcher, and how to tell a genuine capacity shortage from a batching artefact or a rework problem wearing a capacity costume.",
  ],

  whyItMatters: [
    "More staff is the most common request a BA receives and the one least often supported by analysis. Sometimes it is right. Frequently the real cause is rework, batching, an intake path that starts the clock late, or work arriving in a pattern that no headcount level can absorb smoothly.",
    "Getting it wrong is expensive in both directions. Hiring against a batching problem adds permanent cost and leaves the mechanism intact. Refusing a genuine shortage produces backlogs, overtime, quality failures under pressure and eventually people leaving, which makes it worse.",
    "It also matters for anything you design. A future state that reduces average handling time by a decent margin can still fail if it changes the arrival pattern or adds variability, and variability hurts queues more than average duration does.",
  ],

  coreConcepts: [
    {
      term: "Demand has four dimensions, not one",
      explain:
        "Volume (how many), mix (of what types), arrival pattern (when they turn up), and variability (how much the first three move about).",
      detail:
        "Most capacity conversations use only volume, which is why they produce the wrong answer. A team receiving the same annual volume in a smooth flow and in weekly spikes needs completely different staffing.",
    },
    {
      term: "The utilisation trap",
      explain:
        "Waiting time rises non-linearly with utilisation. Going from a moderately busy team to a nearly saturated one multiplies queues rather than adding to them, which is why the last few percent of capacity is enormously expensive in customer waiting.",
      detail:
        "The practical consequence: a team planned to be busy essentially all of the time has no capacity to absorb variation, so any bad day creates a backlog that persists rather than clearing. Deliberate slack is not waste, it is what keeps the queue finite.",
    },
    {
      term: "Variability is the hidden driver",
      explain:
        "Two teams with identical average arrival rates and identical average handling times can have completely different queues if one has more variable arrivals or more variable case durations.",
      detail:
        "This is why averages mislead so badly here. Always look at the distribution: the spread of handling times matters as much as the mean, and a long tail of difficult cases hurts far more than the tail's size suggests.",
    },
    {
      term: "Work in progress, throughput and lead time are linked",
      explain:
        "For a stable system, the average number of items in progress equals the average arrival rate multiplied by the average time an item spends in the system. It is definitional arithmetic and it holds regardless of what the process does.",
      detail:
        "The practical use: if you know two of the three you can derive the third. Count what is in progress, count what completes per week, and you have average lead time without measuring a single case individually.",
    },
    {
      term: "Measure demand at arrival, not at completion",
      explain:
        "Completion data tells you what the team managed to do, which is capped by capacity. Arrival data tells you what turned up, which is what you actually need.",
      detail:
        "Where an intake path does not timestamp arrival, demand is invisible and the queue is unmeasurable. Fixing that instrumentation is frequently the first real recommendation of a capacity analysis.",
    },
    {
      term: "Split failure demand from value demand",
      explain:
        "Some of the work arriving exists only because something earlier went wrong: chases, corrections, repeat contacts, rework. That is failure demand and it is not a capacity requirement, it is a defect.",
      detail:
        "Categorise a sample of arrivals into value and failure. Where failure demand is a large share, staffing to absorb it institutionalises the underlying problem and guarantees the cost recurs every year.",
    },
    {
      term: "Capacity is not headcount",
      explain:
        "Effective capacity is people, multiplied by available hours after leave, training, meetings and administration, multiplied by the proportion of time actually spent on the work, divided by handling time per case.",
      detail:
        "The proportion of time spent on the work is the number people guess at and get badly wrong. Measure it rather than assuming, and be honest that nobody produces case work for every hour they are present.",
    },
    {
      term: "Skills mix creates queues that headcount totals hide",
      explain:
        "If only two people can handle a case type that represents a meaningful share of volume, the team's overall capacity is irrelevant to those cases.",
      detail:
        "Always analyse capacity by case type against who can actually do it. Specialist bottlenecks are extremely common and completely invisible in a headcount-versus-volume comparison.",
    },
    {
      term: "Batching creates peaks that look like demand",
      explain:
        "Work held and released together produces a spike. The spike sets the staffing level and the team is underused between spikes.",
      detail:
        "The tell is an overtime pattern that lands on the same day of every cycle. That is an artefact of a release schedule, not a capacity problem, and hiring against it is money spent to preserve the schedule.",
    },
    {
      term: "Forecast from the driver, not from the trend",
      explain:
        "Extrapolating last year's volumes assumes nothing changes. Better to find what actually drives the volume: customer count, order count, a policy change, a marketing campaign, a seasonal cycle.",
      detail:
        "Then forecast the driver and derive the demand. It is more defensible, and it tells you which lever the business could pull to reduce demand rather than absorb it.",
    },
    {
      term: "Model in a spreadsheet, and model the bad week",
      explain:
        "You do not need simulation software for most business questions. Arrival rate by day, handling time distribution, available hours, and a queue that carries forward gets you a long way.",
      detail:
        "The important part is testing the bad week rather than the average one. A model that only balances on average describes a system that will be permanently in backlog, because the good weeks cannot repay the bad ones once a queue exists.",
    },
    {
      term: "Present a curve, not a number",
      explain:
        "Show how waiting time changes across a range of staffing levels rather than recommending one figure. The shape of that curve is the argument.",
      detail:
        "It also lets leadership make the trade-off explicitly: this many people gives this wait, one fewer gives this much worse wait. That is a decision they can own, which a single recommended number is not.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The capacity request that was a rework problem.",
      walkthrough:
        "A processing team requests two additional staff, supported by a backlog that has grown steadily. The BA categorises a sample of two hundred arriving items into value demand and failure demand. A substantial share turn out to be cases returning for correction, and almost all of those share a single reason: a form field that is optional in the intake system but mandatory for the downstream step.",
      result:
        "Making the field mandatory at intake removed most of the returning volume. The team did not need more people, and the arithmetic of hiring would have made the underlying defect permanent while adding annual cost. Categorising arrivals into value and failure demand is a half-day exercise and it should precede every capacity conversation.",
    },
    {
      kind: "illustration",
      scenario: "Two people, one bottleneck.",
      walkthrough:
        "A team of fourteen has a persistent queue on one case category. Overall, capacity comfortably exceeds volume and the headcount analysis shows no shortage. Splitting the analysis by case type against who is trained to handle each reveals that the affected category can only be worked by two people, both of whom also carry general work and one of whom covers the rota at weekends.",
      result:
        "The answer was training rather than hiring, and it cost a fraction of a headcount. Aggregate capacity comparisons systematically hide specialist bottlenecks, which is why capacity should always be analysed by case type against the people qualified to do it rather than as one total.",
    },
    {
      kind: "illustration",
      scenario: "The model that balanced on average and failed every month.",
      walkthrough:
        "A staffing model shows capacity slightly exceeding average demand, and the plan is approved. In practice the team is in backlog continuously. Rebuilding the model with a queue that carries forward, and with the actual week-to-week variation rather than the average, shows what was happening: bad weeks build a backlog that good weeks cannot fully clear, because a good week's spare capacity is small while a bad week's overflow is large.",
      result:
        "Sizing to average demand guarantees a permanent queue in any system with variability, which is every real system. The model has to carry the backlog forward week by week and be tested against the worst weeks in the historical data, not the mean.",
    },
  ],

  learningPath: [
    {
      title: "Get arrival data, not completion data",
      body: "Timestamps for when work turned up, by type, for at least twelve months. Where the intake path does not record arrival, establishing that instrumentation is your first recommendation.",
      effort: "2-5 days including access",
      outcome: "A measurement of demand rather than of what the team managed to complete.",
    },
    {
      title: "Plot the arrival pattern at three resolutions",
      body: "By month across the year, by day across the week, and by hour across the day. Look for cycles, spikes and anything that lines up with an internal schedule.",
      effort: "Half a day",
      outcome: "The pattern that determines staffing, which the annual total completely conceals.",
    },
    {
      title: "Categorise a sample into value and failure demand",
      body: "Take two hundred arrivals and classify each: genuine new work, or work existing only because something earlier failed. Record the reason for each failure item.",
      effort: "1 day",
      outcome: "The proportion of the apparent capacity requirement that is actually a defect.",
    },
    {
      title: "Measure handling time as a distribution",
      body: "Not an average. Get the spread, and specifically the long tail. Where no data exists, a two-week structured tally by the team will do.",
      effort: "2 weeks elapsed",
      outcome: "The variability figure that drives queue behaviour more than the mean does.",
    },
    {
      title: "Calculate effective capacity honestly",
      body: "Headcount, minus leave, training, meetings and administration, times the measured proportion of time actually spent on case work, by case type against who can do it.",
      effort: "1 day",
      outcome: "A capacity figure that will survive being checked, and usually a specialist bottleneck you had not seen.",
    },
    {
      title: "Build a week-by-week model with a carried-forward queue",
      body: "Arrivals in, capacity applied, backlog carried to the next week. Run it against the historical bad weeks rather than the average.",
      effort: "1-2 days",
      outcome: "A model that reproduces the backlog you can actually observe, which is the test of whether it is right.",
    },
    {
      title: "Produce the staffing curve and present the trade-off",
      body: "Waiting time and backlog across a range of staffing levels. Let leadership choose the point on the curve rather than accepting or rejecting a single number.",
      effort: "Half a day",
      outcome: "A decision the business owns, with the cost of each option visible.",
    },
  ],

  exercises: [
    {
      title: "Derive lead time without measuring it",
      brief:
        "For any queue in your organisation, count the items currently in progress and the number completed per week. Divide the first by the second to get average lead time in weeks. Then check the figure against a handful of real cases.",
      success:
        "Your derived figure is close to what the real cases show, and you have a lead time measure that required no case-by-case tracking.",
      time: "1 hour",
    },
    {
      title: "The failure demand sample",
      brief:
        "Take one hundred items that arrived at any team last month. Classify each as genuine new work or work created by an earlier failure. Record the reason for every failure item and group the reasons.",
      success:
        "You have a failure demand percentage and can name the single largest cause of it.",
      time: "Half a day",
    },
    {
      title: "Plot the pattern",
      brief:
        "Take twelve months of arrivals for one work type and plot them by month, by day of week, and by hour of day. Mark anything that coincides with an internal schedule such as a batch run or a reporting cycle.",
      success:
        "You can name at least one peak that is created by an internal schedule rather than by customer behaviour.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Using annual volume as the capacity requirement",
      why: "It ignores arrival pattern and variability, which are what actually determine queues. Two operations with identical annual volumes can need very different staffing.",
      fix: "Plot arrivals by month, day and hour, and model week by week with a carried-forward queue.",
    },
    {
      mistake: "Measuring completions instead of arrivals",
      why: "Completions are capped by capacity, so a saturated team appears to have demand exactly equal to its capacity, which is circular.",
      fix: "Measure at the point of arrival. Where the intake path has no timestamp, fixing that is the first recommendation.",
    },
    {
      mistake: "Targeting high utilisation",
      why: "Waiting time rises non-linearly as utilisation approaches full, so a team planned to be busy almost all the time is being planned to have long and unstable queues.",
      fix: "Plan deliberate slack, and show the waiting-time curve so leadership can see what the last few percent of utilisation costs in customer waiting.",
    },
    {
      mistake: "Staffing to absorb failure demand",
      why: "It makes the underlying defect permanent and adds annual cost forever. The work was never a capacity requirement, it was a symptom.",
      fix: "Categorise arrivals into value and failure demand before any staffing conversation, and fix the largest failure cause first.",
    },
    {
      mistake: "Working from average handling time alone",
      why: "Variability drives queues at least as strongly as the mean. A team with a long tail of difficult cases behaves very differently from one with consistent durations.",
      fix: "Capture the distribution, and specifically the tail. Model with variability rather than with a single average.",
    },
    {
      mistake: "Comparing total capacity against total volume",
      why: "It hides specialist bottlenecks. A team can have ample overall capacity and a persistent queue on the one category only two people can handle.",
      fix: "Analyse capacity by case type against the people qualified to perform it.",
    },
    {
      mistake: "Assuming productive hours rather than measuring them",
      why: "Nobody produces case work for every hour they are present, and the assumed figure is always optimistic, which makes the capacity number wrong in a predictable direction.",
      fix: "Measure the proportion of time actually spent on case work, and state it explicitly in the model.",
    },
    {
      mistake: "Recommending a single headcount number",
      why: "It presents a trade-off as a fact, and it invites a negotiation about the number rather than a decision about the service level.",
      fix: "Present the curve. Show waiting time and backlog across a range of staffing levels and let leadership choose the point.",
    },
  ],

  bestPractices: [
    "Measure demand at arrival, never at completion.",
    "Analyse volume, mix, arrival pattern and variability separately.",
    "Plot arrivals by month, by day of week and by hour of day.",
    "Categorise a sample into value demand and failure demand.",
    "Capture handling time as a distribution, including the tail.",
    "Calculate effective capacity from measured productive time, not assumed hours.",
    "Analyse capacity by case type against who is qualified to do it.",
    "Check overtime patterns against batch and release schedules.",
    "Model week by week with the backlog carried forward.",
    "Test the model against historical bad weeks, not the average.",
    "Forecast from the underlying driver rather than extrapolating the trend.",
    "Present a staffing curve rather than a single recommended number.",
  ],

  proTips: [
    "Ask the team what a bad day looks like and what they stop doing on one. The things they drop under pressure are the steps the organisation has implicitly decided are optional, and that list is both a capacity finding and a risk finding. It also tells you where quality degrades before anybody measures it.",
    "Before modelling anything, check whether the queue you are analysing is actually visible. In a surprising number of operations a share of the work sits in a shared inbox or on somebody's desk and never enters the system until it is started, which means the official backlog is a measure of what has been picked up rather than what is waiting.",
    "When somebody says the team is at capacity, ask how long the queue has been growing and plot it. A queue growing steadily means demand exceeds capacity structurally. A queue that oscillates around a level means the system is coping and the complaint is about variation, and those two situations need completely different responses.",
    "Model what happens if handling time improves by a modest amount versus what happens if variability falls by the same proportion. In most queueing situations the second produces a larger improvement, and showing that changes what the business chooses to work on, usually away from squeezing people and towards standardising the awkward cases.",
  ],

  businessApplications: [
    "Headcount business cases, where the analysis decides whether the request is a capacity problem or a defect.",
    "Service level design, where the staffing curve makes the cost of each response target explicit.",
    "Automation appraisal, where the question is which case types consume capacity rather than which are most annoying.",
    "Seasonal planning, where arrival pattern analysis determines temporary staffing and its timing.",
    "Outsourcing decisions, where volume, mix and variability determine whether a fixed-price arrangement is viable.",
    "Post-implementation review, where a solution that reduced average handling time may have increased variability.",
  ],

  checklist: [
    "Arrival timestamps obtained for at least twelve months.",
    "Arrivals plotted by month, day of week and hour of day.",
    "Peaks checked against internal batch and release schedules.",
    "Sample categorised into value and failure demand, with reasons.",
    "Handling time captured as a distribution including the tail.",
    "Productive time proportion measured rather than assumed.",
    "Capacity analysed by case type against qualified staff.",
    "Specialist bottlenecks identified.",
    "Week-by-week model built with backlog carried forward.",
    "Model tested against historical worst weeks.",
    "Model reproduces the observed backlog before being trusted.",
    "Demand forecast derived from an underlying driver.",
    "Staffing curve produced showing waiting time across a range of levels.",
  ],

  faqs: [
    {
      q: "Do I need simulation software for this?",
      a: "Rarely. A week-by-week spreadsheet model with a carried-forward backlog answers most business questions. Consider simulation when routing between multiple queues and skill groups is the thing being decided, not before.",
    },
    {
      q: "How much data do I need?",
      a: "Twelve months of arrival timestamps to see seasonality, and a two-week structured tally for handling times where none is recorded. Less than that and you will mistake a cycle for a trend.",
    },
    {
      q: "What utilisation should a team be planned at?",
      a: "It depends on how much variability there is and how much waiting is acceptable, which is why the curve matters more than a target. What is certain is that planning for near-full utilisation plans for long and unstable queues.",
    },
    {
      q: "How do I tell failure demand from genuine demand?",
      a: "Ask of each item whether it would exist if everything upstream had worked correctly the first time. Chases, corrections, repeat contacts and rework are failure demand. Classify a sample by hand rather than trusting category codes.",
    },
    {
      q: "The business insists the answer is more people. What do I do?",
      a: "Do the analysis anyway and present the curve alongside the failure demand percentage. If it turns out they are right, you have strengthened their case with evidence. If they are not, the numbers make the argument rather than you.",
    },
    {
      q: "How does this apply to a team doing project work rather than cases?",
      a: "The same arithmetic holds. Work in progress divided by completion rate gives lead time, and high utilisation still produces long queues. The main difference is that project work has larger, more variable items, which makes the utilisation effect stronger rather than weaker.",
    },
  ],

  tools: [
    { name: "Arrival timestamps from the intake system", what: "The foundation. Where they do not exist, creating them is the first recommendation of the analysis.", cost: "Varies" },
    { name: "A spreadsheet queue model", what: "Arrivals in, capacity applied, backlog carried forward, week by week. Sufficient for most business questions.", cost: "Varies" },
    { name: "A two-week handling time tally", what: "Captured by the team, recording the distribution rather than an average.", cost: "Free" },
    { name: "A skills matrix", what: "Who can handle which case type. The fastest way to find a specialist bottleneck hidden by aggregate capacity figures.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "where-inefficiency-hides", anchor: "checking whether it is really a capacity problem", context: "Before modelling" },
    { slug: "mapping-a-business-process", anchor: "the process the demand flows through", context: "Context" },
    { slug: "writing-a-business-case", anchor: "turning the curve into a funded decision", context: "Next step" },
  ],

  relatedGuides: ["where-inefficiency-hides", "mapping-a-business-process", "writing-a-business-case"],

  conclusion: [
    "Take one queue in your organisation, count what is currently in progress and what completes per week, and divide the first by the second. That single division gives you average lead time in minutes of work, and it is usually several times longer than anyone in the process believes.",
  ],
};

export default guide;
