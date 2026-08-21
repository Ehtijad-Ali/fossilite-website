import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "non-functional-requirements-in-practice",
  seoTitle: "The Requirements Nobody Asks For, and Everyone Assumes",
  metaDescription:
    "How fast, how many at once, what happens when it breaks, who is allowed to see it. Nobody requests these and everybody expects them. How to get them out of people.",
  title: "The Requirements Nobody Asks For",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Nobody has ever walked up to me and asked for a system that handles four hundred people at once with a response under two seconds. They ask for a screen that shows their orders. And then they assume, perfectly reasonably, that it will be quick, that it will be there when they need it, that the wrong people cannot see it, and that it will cope with the amount of work they actually have.",
    "Those assumptions are the requirements. They go unsaid because they are obvious to the person holding them, which is exactly why they get missed and exactly why they are so expensive to add later. Making something fast or secure after it has been built is not a change request. It is usually a rebuild.",
    "So this guide is about getting these out of people who do not know they have them. The list to work through, the one question that turns a vague preference into a number you can defend, how to write them so somebody can actually test them, and how to handle the fact that they cost money and some of them fight each other.",
  ],

  whyItMatters: [
    "Ordinary bugs are visible, arguable and usually cheap to fix. These failures are different. The system is slow for everybody, or unavailable during the busiest hour, or still holding data it should have deleted two years ago. They hit everyone at once and there is no way to work around them.",
    "They also take the longest to fix. Decisions made in week two about how the thing is built decide what speed and reliability are even possible, and by the time anybody tests it those decisions are buried under months of work.",
    "And this is where legal trouble tends to concentrate. How long you keep data, who can see it, whether you can prove what happened, and whether you can get back after a failure are frequently obligations rather than preferences. None of them appear in the original request.",
  ],

  coreConcepts: [
    {
      term: "Work through a list, because nobody will raise these",
      explain:
        "How fast. How many, now and in three years. How often it can be down. What happens if data is lost. Who can see it. How long you keep it. Whether people with disabilities can use it. What it does when it is struggling. And whether anyone can tell what is going on inside it.",
      detail:
        "Use it as a script. Anything you do not ask about becomes an assumption made by a technical person with no business context. Their assumption will be sensible and it might be completely wrong.",
    },
    {
      term: "Ask what happens if it is slow, not how fast it should be",
      explain:
        "Ask how fast and you get a made-up round number. Ask what happens if this takes ten seconds instead of one and you get a real answer with a reason attached.",
      detail:
        "Consequences are specific and people remember them. Speed targets asked for directly cluster on tidy numbers with nothing behind them, and they collapse the first time somebody says that will cost a lot.",
    },
    {
      term: "Averages hide the people having a bad time",
      explain:
        "If one request in twenty takes fifteen seconds, the average can look excellent while a chunk of your users have a frustrating experience every single day.",
      detail:
        "So write the requirement about the slow ones, not the average. Say which action, how slow the slowest few are allowed to be, and how many people are using it at the time. All three matter, and a speed with no volume attached cannot be tested.",
    },
    {
      term: "Ask for today, the busiest day, and three years out",
      explain:
        "How much work now. How much on the busiest day, whether that is month end, Monday morning or a campaign launch. And roughly where it will be in three years.",
      detail:
        "The busiest day is the number that decides how the thing gets built and it is routinely left out, so the design gets built for an average day and falls over on the one day it really matters. Get it from the data, not from memory.",
    },
    {
      term: "How reliable it needs to be is a money question",
      explain:
        "Every extra step up in reliability costs a lot more than the last one. So the question is not how reliable should it be. It is what an hour of it being down actually costs, and when that would hurt most.",
      detail:
        "Ask about the shape of the week and the year. A system that can be off at three in the morning and absolutely must not be off at nine on Monday is a very different thing to build than one that has to be up all the time.",
    },
    {
      term: "Two different questions about things going wrong",
      explain:
        "How long can we be down before it is unacceptable, and how much work can we afford to lose. People run these together and they are separate, with separate costs.",
      detail:
        "Ask the second one concretely: if we had to go back to this morning's backup, what would people have to type in again, and who would do it? Everybody understands that version and gives you a useful answer.",
    },
    {
      term: "How long you keep things is usually not your choice",
      explain:
        "How long must this be kept. How long may it be kept. What has to be deleted if somebody asks. And what has to survive that deletion for legal reasons.",
      detail:
        "These usually come from law or a contract rather than from the person in front of you, so the answer sits with legal or compliance. Ask who owns the answer before assuming anybody in the room does.",
    },
    {
      term: "Access for people with disabilities is a requirement, not a nice extra",
      explain:
        "In a lot of places it is a legal duty, and everywhere it is far cheaper to build in than to bolt on afterwards.",
      detail:
        "Name the standard and the level you have to meet. Writing that the system should be accessible cannot be tested and will be read as a preference by whoever is under pressure to ship.",
    },
    {
      term: "Can anyone tell whether it is working?",
      explain:
        "Can somebody see that it is running, how many things failed today, and which customer was affected? Without that, you find out about problems when a customer rings.",
      detail:
        "Ask the support team what they will need to see at nine on a Monday. That question is a requirement, it is easy to build in at the start, and it is painful to add later.",
    },
    {
      term: "These fight each other, so show the trade",
      explain:
        "Security checks slow things down. Reliability costs money. Keeping data longer means more storage and more risk. Recording everything adds work to every transaction.",
      detail:
        "Present them as choices with prices rather than a list of targets. A stakeholder who has seen what the top level costs will usually pick a lower one, and that is a decision they should get to make.",
    },
    {
      term: "Write them so somebody can test them",
      explain:
        "Name the action, the number, the conditions and how it gets measured. Anything less is a hope that will be declared met by whoever is trying to hit a date.",
      detail:
        "The test: could somebody who was not in the conversation run a check and say pass or fail? Robust, scalable and performant all fail that. If you cannot make it testable, you have found a decision nobody has taken.",
    },
    {
      term: "Test them early, because they are baked into how it is built",
      explain:
        "Ordinary bugs can be fixed late. Speed and reliability come from decisions about the shape of the thing, and by the time it is finished, changing them means changing the shape.",
      detail:
        "Push for a rough test with realistic amounts of data as soon as anything works end to end. A rough answer in week six is worth far more than a precise one the week before go-live.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The question that produced a number worth defending.",
      walkthrough:
        "The problem: nobody could say how fast a customer lookup needed to be. Asked directly, the stakeholder said as fast as possible, then two seconds when pressed. What was happening: the BA asked a different question. What happens if it takes ten seconds? The answer was specific. The lookup happens while a customer is on the phone. The agent fills the silence by asking things they have already asked. Calls get longer and customers notice being asked twice.",
      result:
        "What changed: the requirement stopped being a round number plucked out of the air. It was tied to how long a natural pause in a phone call lasts, which meant it survived the conversation about what it would cost and a later attempt to relax it. Asking about consequences does not just get you a number. It gets you a number with an argument attached.",
    },
    {
      kind: "illustration",
      scenario: "Meeting the target and annoying the best customers.",
      walkthrough:
        "The problem: a system was meeting its stated target of an average response under two seconds, and users kept complaining. What was happening: the BA looked at the spread instead of the average. Most requests were quick and a small share took far longer. Those slow ones lined up with customers who had a lot of order history, which meant the biggest accounts had the worst experience every single time they were looked up.",
      result:
        "What changed: the requirement was rewritten about the slowest few rather than the average, and the design changed to match. Writing it about the average meant the system could pass while failing the users who mattered most. This is not a technical nicety. It is the difference between a target that means something and one that does not.",
    },
    {
      kind: "illustration",
      scenario: "Nobody in the room owned the answer.",
      walkthrough:
        "The problem: during specification the BA asked how long records had to be kept and how long they were allowed to be kept. Nobody present knew. What was happening: the business people assumed it was a technical decision and the technical people assumed it was a business one, so it had never been asked. The BA took it to legal and compliance, who came back with two different periods for two types of record, one of which had to be deleted on request with a defined exception.",
      result:
        "What changed: the design had to change, because one type of record needed to be separable from the other in a way the original data model could not do. Finding this during specification cost a week. Finding it after go-live would have meant moving data and possibly telling a regulator. When nobody in the room owns the answer, that is the finding.",
    },
  ],

  learningPath: [
    {
      title: "Write your list and a question for each item",
      body: "Speed, volume, downtime, losing data, who can see it, how long you keep it, accessibility, behaviour under strain, and whether anyone can see what is happening. One consequence question against each.",
      effort: "1 hour",
      outcome: "A script you can run in any session so nothing gets quietly skipped.",
    },
    {
      title: "Get the volume numbers from the data",
      body: "How much now, how much on the busiest day, and how it has grown over three years. Never from memory, always from the system.",
      effort: "Half a day",
      outcome: "The figures that decide how the thing gets built, including the busiest day that usually gets left out.",
    },
    {
      title: "Ask the consequence questions",
      body: "What happens if this is slow, unavailable, lost, or seen by the wrong person. Turn each answer into a number and write the business reason next to it.",
      effort: "2-3 hours",
      outcome: "Numbers with arguments attached, which survive somebody later saying that is too expensive.",
    },
    {
      title: "Take the legal ones to the people who own them",
      body: "How long you keep data, who can see it, and accessibility go to compliance, legal and security. These are usually duties rather than choices.",
      effort: "1-2 weeks of waiting",
      outcome: "Constraints found before the design assumes otherwise.",
    },
    {
      title: "Rewrite each one so it can be tested",
      body: "Action, number, conditions, and how it gets measured. Check each against whether an outsider could run a test and say pass or fail.",
      effort: "Half a day",
      outcome: "Requirements that get checked rather than declared met.",
    },
    {
      title: "Show the trade-offs with prices",
      body: "Where two of these fight, or where a target is expensive, show what each level costs and let the business pick.",
      effort: "Half a day with technical input",
      outcome: "Decisions the business owns, instead of targets a technical team quietly waters down.",
    },
    {
      title: "Get a rough test with realistic data early",
      body: "As soon as anything works end to end, even roughly. Use realistic amounts of data rather than a tidy little test set.",
      effort: "1-2 days",
      outcome: "Problems found while the shape of the thing can still change.",
    },
  ],

  exercises: [
    {
      title: "Four consequence questions",
      brief:
        "Take a requirement you are working on and ask its stakeholder four things: what happens if it is slow, if it is unavailable for an hour, if a day of work is lost, and if the wrong person can see it. Write the answers down word for word.",
      success:
        "You have four numbers with reasons attached, and at least one of them surprises you.",
      time: "1 hour",
    },
    {
      title: "Find the slow ones",
      brief:
        "For any system you can get timing data from, look at the spread rather than the average. Pick out the slowest five per cent and check what those requests have in common.",
      success:
        "You can say whether the average is telling the truth, and describe who is having the bad experience.",
      time: "2 hours",
    },
    {
      title: "Hunt the untestable words",
      brief:
        "Search any requirements document for fast, scalable, robust, secure, reliable, user-friendly and highly available. For each one, write the testable version or log it as a decision nobody has taken.",
      success:
        "Every one is either turned into something measurable or written down as an open decision with a name against it.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Waiting for stakeholders to bring these up",
      why: "They will not, because the expectations are invisible to the person holding them. Silence does not mean there is no requirement. It means it is unsaid.",
      fix: "Work through a fixed list in every session, whether or not anyone has mentioned the subject.",
    },
    {
      mistake: "Asking how fast it should be",
      why: "You get an invented round number with nothing behind it, which cannot be defended once somebody puts a price on meeting it.",
      fix: "Ask what happens if it is slow, then turn the answer into a number and keep the reason next to it.",
    },
    {
      mistake: "Writing speed as an average",
      why: "Averages hide the slow ones, so the system can pass its target while a real share of users have a bad time every day.",
      fix: "Write it about the slowest few, under a stated amount of use, for a named action.",
    },
    {
      mistake: "Leaving out the busiest day",
      why: "The thing gets built for an average day and falls over on the day the business can least afford it.",
      fix: "Get today, busiest day and three-year growth from data, and build to the busiest.",
    },
    {
      mistake: "Treating reliability as a target rather than a price",
      why: "Each step up costs a lot more than the last, and a target picked without seeing the cost is a wish rather than a decision.",
      fix: "Work out what an hour of downtime costs and when it would hurt, then show what each level of reliability costs.",
    },
    {
      mistake: "Assuming somebody in the room owns the legal ones",
      why: "Business people think it is technical, technical people think it is business, and the requirement gets set by default rather than by anyone.",
      fix: "Take retention, access and accessibility to compliance, legal and security, and treat their answers as fixed.",
    },
    {
      mistake: "Using words nobody can test",
      why: "Robust and scalable will be declared met by whoever is under pressure to ship, and nobody can prove otherwise.",
      fix: "Every one needs an action, a number, the conditions, and a way of measuring it.",
    },
    {
      mistake: "Testing these at the end",
      why: "Speed and reliability come from decisions about how the thing is built. Finding a problem in the last month means unpicking months of work.",
      fix: "Push for a rough test with realistic data volumes as soon as anything works end to end.",
    },
  ],

  bestPractices: [
    "Work through a fixed list every time.",
    "Ask what happens if, rather than asking for a target.",
    "Write speed about the slowest few, under stated usage, for a named action.",
    "Get today, busiest day and growth, all from data.",
    "Express reliability in terms of what downtime costs and when it hurts.",
    "Keep the two recovery questions separate: how long down, and how much lost.",
    "Take the legal ones to legal, compliance and security.",
    "Name the accessibility standard and level.",
    "Ask the support team what they need to see on a Monday morning.",
    "Show the conflicts as choices with prices.",
    "Write everything so an outsider could test it and say pass or fail.",
    "Get a rough test with realistic data volumes early.",
  ],

  proTips: [
    "Ask what the system should do when it is struggling, not just how fast it is when it is not. Something that slows down gracefully and tells the user what is happening is often better than something marginally faster that just freezes. How it behaves under strain is a business decision and it almost never appears in a requirement.",
    "For anything to do with dates or how long you keep things, ask about the year end and the clock change. I have never regretted asking, and more than once I have found that a retention period was being worked out in a way that gave different answers depending on which side of a year boundary a record fell.",
    "When a technical team says a target is expensive, ask what would be affordable and what the difference would look like to a customer. That turns a refusal into a menu, and the business is usually happy with a lower target once they can see the price of the higher one. The mistake is carrying the target back as a demand.",
    "Write the can-anyone-see-what-is-happening requirements by asking the support team what they cannot see today about the current system. It is the fastest way to get useful ones, it costs one conversation, and support teams are almost never asked anything during specification.",
  ],

  businessApplications: [
    "Anything customers touch, where speed and availability are commercially visible.",
    "Regulated work, where retention, records and access are legal duties rather than preferences.",
    "Public sector, where accessibility standards are written into the contract.",
    "High-volume operations, where building for the busiest day rather than the average decides whether it works.",
    "Choosing a supplier, where these form part of the evaluation and end up in the contract.",
    "Replacing a system, where the old one's unspoken behaviour has to be dug out and written down.",
  ],

  checklist: [
    "Full list worked through: speed, volume, downtime, data loss, access, retention, accessibility, behaviour under strain, visibility.",
    "Consequence question asked for each.",
    "Speed written about the slowest few, under stated usage, per action.",
    "Today, busiest day and growth figures obtained from data.",
    "Reliability expressed against the cost and timing of downtime.",
    "Both recovery questions answered separately.",
    "Retention and deletion confirmed with legal or compliance.",
    "Accessibility standard and level named.",
    "Support team asked what they need to be able to see.",
    "Behaviour under strain specified.",
    "Conflicts presented as priced choices and decided by the business.",
    "Everything testable by somebody who was not in the conversation.",
    "Early test with realistic data volumes scheduled.",
  ],

  faqs: [
    {
      q: "Who owns these, the BA or the technical architect?",
      a: "The BA works out what the business needs and why. The architect works out whether it can be done and what it costs. Left entirely to the architect they become technical guesses. Left entirely to the BA they become undeliverable wishes.",
    },
    {
      q: "How do I write a speed requirement properly?",
      a: "Name the action, how slow the slowest few are allowed to be, and how many people are using it at the time. For example: customer search returns within two seconds for all but the slowest one in twenty, with two hundred people using it, tested against a realistic amount of data.",
    },
    {
      q: "How reliable should we ask for?",
      a: "Whatever the business will pay for once they have seen what each level costs. Start from what an hour of downtime costs and when it would hurt, rather than from a number that sounds about right.",
    },
    {
      q: "How do I get security requirements with no security team?",
      a: "Start from the data. What is held, who may see it, what happens if it gets out, and what rules attach to it. That gets you most of the practical answers. Where the data is genuinely sensitive, getting a specialist involved is itself the requirement.",
    },
    {
      q: "Should these apply to every feature or to the whole system?",
      a: "Mostly the whole system, with exceptions where something specific needs different treatment. A search people use constantly and a monthly report have very different speed needs and should not share one target.",
    },
    {
      q: "What if the business cannot answer the consequence question?",
      a: "That is useful information. It usually means the consequence is small, so a modest target is fine and you have saved money. Write that reasoning down, because somebody will later insist the requirement was critical.",
    },
  ],

  tools: [
    { name: "A list with a consequence question for each item", what: "Nine or ten things, one question each. Stops you quietly skipping the requirements nobody volunteers.", cost: "Free" },
    { name: "Volume figures from the current system", what: "Today, busiest day, growth. The busiest day is the one that decides the design and the one usually left out.", cost: "Varies" },
    { name: "An early rough test with realistic data", what: "Run as soon as anything works end to end. Finds the problems while the shape can still change.", cost: "Varies" },
    { name: "A trade-off table", what: "Each target with its price, so the business picks the level rather than a technical team quietly lowering it.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "the rest of the specification", context: "Specification" },
    { slug: "capacity-and-volume-analysis", anchor: "getting the volume numbers right", context: "Volume" },
    { slug: "running-user-acceptance-testing", anchor: "testing these before go-live", context: "Verification" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "capacity-and-volume-analysis", "running-user-acceptance-testing"],

  conclusion: [
    "Pick one requirement you are working on and ask its stakeholder four questions: what happens if it is slow, unavailable for an hour, missing a day of work, or visible to the wrong person. An hour of that gives you numbers with reasons attached, which is the only kind that survives somebody putting a price on them.",
  ],
};

export default guide;
