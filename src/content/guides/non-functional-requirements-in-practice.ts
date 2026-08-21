import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "non-functional-requirements-in-practice",
  seoTitle: "Non-Functional Requirements: The Ones That Sink Projects",
  metaDescription:
    "Performance, volume, availability, security, retention and accessibility, elicited with consequence questions and written as numbers somebody can test.",
  title: "Non-Functional Requirements in Practice",
  keywords: [
    "non-functional requirements",
    "nfr examples",
    "performance requirements",
    "availability requirements",
    "quality attributes",
    "writing nfrs",
  ],
  category: "requirements",
  level: "Advanced",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "Nobody asks for non-functional requirements. No stakeholder has ever opened a conversation by saying the system should support four hundred concurrent users with a ninety-fifth percentile response under two seconds. They ask for a screen that shows their orders, and they assume, entirely reasonably, that it will be fast, available, secure and able to cope with their actual volume.",
    "Those assumptions are the requirements. They are unstated because they are obvious to the person holding them, which is exactly why they are the requirements most often missed and most expensive to add later. Retrofitting performance or security into a system designed without them is not a change request, it is frequently a rebuild.",
    "This guide is how to get them out of people who do not know they have them. The categories to walk through, the consequence question that converts a vague preference into a defensible number, how to write them so they can be tested, and how to handle the trade-offs, because every non-functional requirement costs something and some of them are in direct conflict.",
  ],

  whyItMatters: [
    "Functional defects are visible, arguable and usually cheap to fix. Non-functional failures tend to be systemic: the system is slow for everybody, or unavailable during the busiest hour, or holding data it should have deleted two years ago. They affect every user simultaneously and they cannot be worked around.",
    "They are also the requirements with the longest lead time to fix. Architecture decisions made in week two determine what performance and availability are achievable, and by the time anybody tests them the decisions are embedded in months of work.",
    "And they are where regulatory and contractual exposure concentrates. Retention, access control, auditability and recoverability are frequently legal obligations rather than preferences, and they are almost never in the original request.",
  ],

  coreConcepts: [
    {
      term: "Walk a fixed category list, because nobody volunteers these",
      explain:
        "Performance, volume and growth, availability, recoverability, security and access, data retention and deletion, accessibility, usability under load, compatibility, maintainability, and observability.",
      detail:
        "Use it as a script. Any category you do not ask about becomes an assumption made by a technical person with no business context, and their assumption will be reasonable and possibly wrong.",
    },
    {
      term: "The consequence question converts opinion into a number",
      explain:
        "Do not ask how fast it should be. Ask what happens if it takes ten seconds instead of one. What does the user do, what does the customer do, what does it cost?",
      detail:
        "Speed targets asked for directly are invented, and they cluster on round numbers with no reasoning behind them. Consequences are remembered, they are specific, and they give you a number you can defend when somebody asks why it has to be that fast.",
    },
    {
      term: "Performance means percentiles, not averages",
      explain:
        "An average response time hides the tail. If one request in twenty takes fifteen seconds, the average can look excellent while a meaningful share of users have a bad experience every day.",
      detail:
        "Write requirements at the ninety-fifth or ninety-ninth percentile, under a stated concurrent load, for a named operation. All three parts matter: a percentile with no load figure is untestable.",
    },
    {
      term: "Volume requirements need today, peak and growth",
      explain:
        "Current volume, the peak within that (month end, Monday morning, campaign day), and the expected position in three years.",
      detail:
        "Peak is the number that sizes the system and it is routinely omitted, so the design is built for the average and falls over on the day that matters most. Get peak from data, not from recollection.",
    },
    {
      term: "Availability is a business decision expressed in money",
      explain:
        "Each additional nine of availability costs disproportionately more. The question is not how available should it be but what an hour of downtime costs and when it would hurt most.",
      detail:
        "Ask about the shape of the day and the year. A system that can be down at three in the morning without consequence and must not be down at nine on a Monday needs a very different design from one with a uniform requirement.",
    },
    {
      term: "Recoverability has two numbers people confuse",
      explain:
        "How long can we be down before it is unacceptable, and how much data can we afford to lose. They are separate questions with separate costs and separate technical answers.",
      detail:
        "Ask the second one concretely: if we restored to this morning's backup, what would have to be re-entered and who would do it? People understand that framing immediately and give useful answers.",
    },
    {
      term: "Retention and deletion are obligations, not preferences",
      explain:
        "How long must this be kept, how long may it be kept, what must be deleted on request, and what must survive deletion for legal reasons.",
      detail:
        "These frequently come from legislation or contract rather than from the business, so the source is compliance or legal rather than the stakeholder in front of you. Ask who owns the answer before assuming anybody in the room does.",
    },
    {
      term: "Accessibility is a requirement, not a nice to have",
      explain:
        "In many jurisdictions and most public sector contexts it is a legal obligation, and in all contexts it is far cheaper to build in than to retrofit.",
      detail:
        "Name the standard and the conformance level explicitly rather than writing that the system should be accessible, which is untestable and will be interpreted as a preference.",
    },
    {
      term: "Observability is a business requirement in disguise",
      explain:
        "Can somebody tell whether it is working, how many transactions failed today, and which customer was affected? Without it, incidents are found by customers.",
      detail:
        "Ask what question the support team will need to answer at nine on a Monday. That question is a requirement, and it is easy to satisfy at design time and painful to add afterwards.",
    },
    {
      term: "Every non-functional requirement conflicts with another",
      explain:
        "Security controls slow things down. Availability costs money. Retention increases storage and risk. Auditability adds writes to every transaction.",
      detail:
        "Present them as trade-offs with costs rather than as a list of targets. A stakeholder who has seen the cost of the last nine will usually choose a lower one, and that is a decision they should get to make.",
    },
    {
      term: "Write them so they can be tested",
      explain:
        "A named operation, a measurable threshold, a stated condition and a measurement method. Anything less is an aspiration that will be declared met by whoever is under pressure to ship.",
      detail:
        "The test: could somebody who was not in the conversation run a test and tell you pass or fail? If not, rewrite it. Robust, scalable and performant all fail this test.",
    },
    {
      term: "Test them early, because they are architectural",
      explain:
        "Functional defects can be fixed late. Performance and availability are properties of the design, and by the time a system is complete, changing them means changing the design.",
      detail:
        "Push for a load test against a realistic data volume as early as something end to end exists, even a rough one. The result is far more useful in week six than in the week before go-live.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The consequence question that produced a real number.",
      walkthrough:
        "A stakeholder is asked how fast a customer lookup needs to be and says as fast as possible, then two seconds when pressed. The BA asks a different question: what happens if it takes ten seconds? The answer is specific. The lookup happens while a customer is on the phone, the agent fills the silence by asking questions they have already asked, calls get longer, and customers notice being asked twice.",
      result:
        "The requirement that emerged was not a round number plucked from the air. It was tied to the length of a natural pause in a phone conversation, it was defensible when the technical team questioned the cost, and it survived a later conversation about relaxing it. Consequence questions do not just produce numbers, they produce numbers with an argument attached.",
    },
    {
      kind: "illustration",
      scenario: "Average response time hiding a daily failure.",
      walkthrough:
        "A system meets its stated requirement of an average response under two seconds. Users continue to complain. Plotting the distribution rather than the mean shows a long tail: most requests are fast and a small proportion take much longer. Those slow requests correlate with customers who have many historical orders, which means the organisation's largest accounts have the worst experience every time.",
      result:
        "The requirement had been written as an average, so the system passed while failing the users who mattered most. Percentiles are not a technical nicety. Writing the requirement at the ninety-fifth percentile under a stated load would have caught this before anybody built anything.",
    },
    {
      kind: "illustration",
      scenario: "The retention requirement nobody in the room owned.",
      walkthrough:
        "During specification, a BA asks how long records must be retained and how long they may be retained. Nobody present knows. The business stakeholders assume it is a technical decision, and the technical team assume it is a business one. The BA takes the question to legal and compliance, who provide two different periods for two categories of record, one of which requires deletion on request with a defined exception.",
      result:
        "The design changed as a result, because one category needed to be separable from the other in a way the original data model did not support. Finding it during specification cost a week. Finding it after go-live would have meant a data migration and possibly a regulatory disclosure. When nobody in the room owns a non-functional answer, that is the finding.",
    },
  ],

  learningPath: [
    {
      title: "Build your category script",
      body: "Performance, volume, availability, recoverability, security, retention, accessibility, compatibility, maintainability, observability. Write one consequence question for each.",
      effort: "1 hour",
      outcome: "A script you can run in any elicitation session so no category is silently skipped.",
    },
    {
      title: "Get the volume numbers from data",
      body: "Current transactions per period, the peak within it, and growth over the last three years. Never from recollection, always from the system.",
      effort: "Half a day",
      outcome: "The figures that size the design, including the peak that is usually omitted.",
    },
    {
      title: "Run the consequence questions with business stakeholders",
      body: "What happens if this is slow, unavailable, lost, or wrong. Convert each answer into a threshold with the business reason recorded beside it.",
      effort: "2-3 hours",
      outcome: "Numbers with arguments attached, which survive later pressure to relax them.",
    },
    {
      title: "Take retention, security and accessibility to their real owners",
      body: "Compliance, legal, information security. These answers are rarely held by the business stakeholder and are frequently obligations rather than choices.",
      effort: "1-2 weeks elapsed",
      outcome: "Constraints identified before the design assumes otherwise.",
    },
    {
      title: "Write each one as a testable statement",
      body: "Named operation, threshold, condition, measurement method. Check each against the question of whether an outsider could run a test and report pass or fail.",
      effort: "Half a day",
      outcome: "Requirements that can be verified rather than declared met.",
    },
    {
      title: "Present the trade-offs and their costs",
      body: "Where two requirements conflict or where a target is expensive, show the cost of each level and let the business choose the point.",
      effort: "Half a day with technical input",
      outcome: "Decisions the business owns, rather than targets a technical team quietly downgrades.",
    },
    {
      title: "Get an early load test against realistic volume",
      body: "As soon as anything works end to end, even roughly. Use production-scale data volumes rather than a clean test set.",
      effort: "1-2 days",
      outcome: "Architectural problems found while the architecture can still change.",
    },
  ],

  exercises: [
    {
      title: "Consequence questions on a live requirement",
      brief:
        "Take a current functional requirement and ask its stakeholder four consequence questions: what happens if it is slow, if it is unavailable for an hour, if a day of data is lost, and if the wrong person can see it. Record the answers verbatim.",
      success:
        "You have four numbers with business reasoning attached, and at least one of them surprises you.",
      time: "1 hour",
    },
    {
      title: "Find the tail",
      brief:
        "For any system you can get timing data from, plot the distribution of response times rather than the average. Identify the slowest five per cent and check what those requests have in common.",
      success:
        "You can say whether the average is representative, and you can characterise who experiences the slow tail.",
      time: "2 hours",
    },
    {
      title: "The untestable sweep",
      brief:
        "Search any requirements document for fast, scalable, robust, secure, reliable, user-friendly and highly available. For each, write the testable version or log it as an open decision with an owner.",
      success:
        "Every occurrence is either converted into something measurable or recorded as a decision nobody has taken.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Waiting for stakeholders to raise these",
      why: "They will not, because the expectations are invisible to the person holding them. Silence is not the absence of a requirement, it is an unstated one.",
      fix: "Walk a fixed category list in every elicitation session, whether or not anybody has mentioned the subject.",
    },
    {
      mistake: "Asking directly for a performance target",
      why: "You get an invented round number with no reasoning, which cannot be defended when the technical cost of meeting it becomes apparent.",
      fix: "Ask the consequence question instead, then convert the answer into a threshold and record the reason beside it.",
    },
    {
      mistake: "Writing performance as an average",
      why: "Averages hide the tail, so a system can meet the requirement while a meaningful share of users have a bad experience every single day.",
      fix: "Specify a percentile, under a stated concurrent load, for a named operation.",
    },
    {
      mistake: "Omitting peak volume",
      why: "The design gets sized for the average and fails on the busiest day, which is the day the business can least tolerate it.",
      fix: "Get current, peak and three-year growth figures from data, and specify against peak.",
    },
    {
      mistake: "Treating availability as a target rather than a cost",
      why: "Each additional nine costs disproportionately more, and a target chosen without seeing the cost is a wish rather than a decision.",
      fix: "Establish what an hour of downtime costs and when it would hurt most, then present availability levels with their costs.",
    },
    {
      mistake: "Assuming somebody in the room owns retention and security",
      why: "Business stakeholders assume it is technical, technical teams assume it is business, and the requirement gets set by default rather than by anybody.",
      fix: "Take these to compliance, legal and information security explicitly, and treat their answers as constraints.",
    },
    {
      mistake: "Writing untestable adjectives",
      why: "Robust, scalable and performant will be declared met by whoever is under pressure to ship, and nobody can prove otherwise.",
      fix: "Every non-functional requirement needs an operation, a threshold, a condition and a measurement method.",
    },
    {
      mistake: "Testing non-functionals at the end",
      why: "Performance and availability are properties of the architecture. Discovering a problem in the final month means changing decisions embedded in months of work.",
      fix: "Push for a rough load test against realistic data volumes as soon as anything works end to end.",
    },
  ],

  bestPractices: [
    "Walk a fixed category list in every elicitation session.",
    "Use consequence questions rather than asking for targets directly.",
    "Specify performance as a percentile under a stated load for a named operation.",
    "Capture current volume, peak volume and three-year growth, all from data.",
    "Express availability in terms of what downtime costs and when it hurts.",
    "Separate the two recovery questions: how long down, and how much data lost.",
    "Take retention, security and accessibility to their real owners.",
    "Name the accessibility standard and conformance level explicitly.",
    "Ask what the support team will need to see at nine on a Monday.",
    "Present conflicting requirements as costed trade-offs.",
    "Write every requirement so an outsider could test it and report pass or fail.",
    "Get an early load test against production-scale data volumes.",
  ],

  proTips: [
    "Ask what the system does when it is under stress, not only how fast it is when it is not. A system that queues gracefully and tells the user what is happening is frequently better than one that is marginally faster and fails opaquely at peak. Degradation behaviour is a business decision and it almost never appears in requirements.",
    "For anything involving dates, times or retention, ask about the year end and the daylight saving change. I have never regretted asking, and I have several times found that a retention period was being calculated in a way that produced different answers depending on which side of a year boundary a record fell.",
    "When a technical team says a non-functional target is expensive, ask what would be affordable and what the difference in outcome would be. That converts a refusal into a menu, and the business is usually happy to accept a lower target once they can see the price of the higher one. The mistake is carrying the target back as a demand.",
    "Write the observability requirements from the support team's perspective by actually asking them what they cannot see today about the current system. It is the fastest way to produce useful non-functional requirements, it costs one conversation, and support teams are almost never consulted during specification.",
  ],

  businessApplications: [
    "Customer-facing systems, where response time and availability are commercially visible.",
    "Regulated environments, where retention, audit and access control are legal obligations rather than preferences.",
    "Public sector delivery, where accessibility conformance is contractually mandated.",
    "High-volume operations, where peak sizing rather than average sizing decides whether the design works.",
    "Vendor selection, where non-functional requirements form part of the evaluation and the contract.",
    "System replacement, where the old system's implicit non-functional behaviour has to be discovered and stated.",
  ],

  checklist: [
    "Category script walked: performance, volume, availability, recoverability, security, retention, accessibility, compatibility, maintainability, observability.",
    "Consequence question asked for each category.",
    "Performance specified as a percentile, under load, per named operation.",
    "Current, peak and growth volumes obtained from data.",
    "Availability expressed against the cost and timing of downtime.",
    "Both recovery questions answered separately.",
    "Retention and deletion confirmed with legal or compliance.",
    "Accessibility standard and conformance level named.",
    "Observability requirements gathered from the support team.",
    "Degradation behaviour under stress specified.",
    "Conflicts presented as costed trade-offs and decided by the business.",
    "Every requirement testable by somebody who was not in the conversation.",
    "Early load test scheduled against realistic data volumes.",
  ],

  faqs: [
    {
      q: "Who owns non-functional requirements, the BA or the architect?",
      a: "The BA owns establishing what the business needs and why. The architect owns whether and how it can be achieved and at what cost. Left entirely to the architect they become technical assumptions, and left entirely to the BA they become undeliverable wishes.",
    },
    {
      q: "How do I write a performance requirement properly?",
      a: "Name the operation, the percentile, the threshold and the load. For example: customer search returns results within two seconds at the ninety-fifth percentile with two hundred concurrent users, measured against a production-scale dataset.",
    },
    {
      q: "What availability level should we ask for?",
      a: "Whatever the business will pay for once they have seen the cost of each level. Start from what an hour of downtime costs and when it would hurt, rather than from a number of nines chosen because it sounds appropriate.",
    },
    {
      q: "How do I get security requirements without a security team?",
      a: "Start from the data: what is held, who may see it, what happens if it leaks, and what obligations attach to it. That produces most of the practical requirements. Where the data is sensitive or regulated, getting specialist input is itself the requirement.",
    },
    {
      q: "Should non-functional requirements be per feature or system-wide?",
      a: "Mostly system-wide, with exceptions where a specific operation has a different need. A search users perform constantly and a monthly report have very different performance requirements and should not share one target.",
    },
    {
      q: "What if the business cannot answer the consequence question?",
      a: "That is informative. It usually means the consequence is small, in which case a modest target is fine and you have saved money. Record that reasoning, because somebody will later assert that the requirement was critical.",
    },
  ],

  tools: [
    { name: "A category script with consequence questions", what: "Ten categories, one question each. Prevents silently skipping the requirements nobody volunteers.", cost: "Free" },
    { name: "Volume data from the current system", what: "Current, peak and growth. Peak is the number that sizes the design and the one usually omitted.", cost: "Varies" },
    { name: "An early load test against realistic volumes", what: "Run as soon as anything works end to end. Architectural findings while the architecture can still change.", cost: "Varies" },
    { name: "A trade-off table", what: "Each target with its cost, so the business chooses the level rather than a technical team quietly downgrading it.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "the functional half of the specification", context: "Specification" },
    { slug: "capacity-and-volume-analysis", anchor: "getting the volume numbers right", context: "Volume" },
    { slug: "running-user-acceptance-testing", anchor: "testing these before go-live", context: "Verification" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "capacity-and-volume-analysis", "running-user-acceptance-testing"],

  conclusion: [
    "Pick one requirement you are working on and ask its stakeholder four consequence questions: what happens if it is slow, unavailable for an hour, missing a day of data, or visible to the wrong person. An hour of that will produce numbers with reasoning attached, which is the only kind that survives the conversation about what they cost.",
  ],
};

export default guide;
