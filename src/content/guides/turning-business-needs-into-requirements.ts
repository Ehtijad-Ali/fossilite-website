import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "turning-business-needs-into-requirements",
  seoTitle: "From a Business Problem to Something You Can Build",
  metaDescription:
    "Requirements are not collected, they are worked out from a need. How to write the need, get to what people must be able to do, and cut scope without an argument.",
  title: "Turning a Business Need Into Requirements",
  keywords: [
    "business requirements",
    "business need vs requirement",
    "requirements traceability",
    "functional requirements",
    "requirements prioritisation",
    "business analysis requirements",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Requirements do not get collected. They get worked out, and worked out from something. That something is a need: what the business is trying to change or stop, written without any mention of how.",
    "Skip the need and you end up with a document that is really a description of somebody's solution with numbers down the side. It reads convincingly, it passes review, and nobody can question any single line of it, because there is no stated purpose to judge it against. That is why those documents only ever get longer.",
    "This guide covers the chain: from a business need, to what people have to be able to do, to something a team can build, keeping the links between them visible. It also covers prioritising, because a list where everything is critical is exactly the same as a list with no priorities, and I have never once seen a first draft that was anything else.",
  ],

  whyItMatters: [
    "The link between a requirement and the need behind it is what lets you cut scope safely. When a deadline tightens, a team without that link cuts by effort, which means the hardest things go first regardless of what they were worth. A team with it cuts by what contributes least to the need, which is an entirely different and much better conversation.",
    "It is also your protection against things quietly getting added. Every request that arrives mid-project can be asked one question: which need does this serve? Most survive it. The ones that do not were somebody's preference travelling under a false name, and without the link you have no polite way to say so.",
    "And it is what makes it possible to prove afterwards that it worked. If nobody can say what the need was, nobody can say whether it was met, so the project gets judged on whether it went live on time. Which is how businesses end up celebrating things that changed nothing.",
  ],

  coreConcepts: [
    {
      term: "Four steps, and none of them are paperwork",
      explain:
        "What the business wants to change. What somebody has to be able to do. What the system has to do so they can. And then the detail: the rules, the fields, the conditions.",
      detail:
        "You do not need heavy documents for this. You need to be able to answer, for any line in your spec, what somebody would be able to do because of it and what that changes for the business. If you cannot, either the line is unnecessary or you have found a need nobody wrote down.",
    },
    {
      term: "A need has no solution and no system in it",
      explain:
        "Reduce the time between a customer ordering and being able to see where their delivery is. That is a need. Build a tracking portal is a solution that arrived too early and closed off every other option.",
      detail:
        "The test: could at least two genuinely different things solve this as written? If only one could, you are holding a design decision that somebody has dressed up as a requirement.",
    },
    {
      term: "Put a number on the need or it is just an opinion",
      explain:
        "Attach the measure the moment you write it. What is it now, what would good look like, and how would we know. A need with no number cannot be weighed against other needs and cannot be checked afterwards.",
      detail:
        "This is uncomfortable early on because the number is often unknown. Write unknown and make finding it a task. A gap you have admitted to is manageable. One you have not turns into an argument at the review a year later.",
    },
    {
      term: "The middle step is what somebody has to be able to do",
      explain:
        "Between the need and the system sits a person doing something. A warehouse supervisor has to be able to see which deliveries are going to miss their cut-off, before the cut-off.",
      detail:
        "This is where most of the real thinking happens and it is the step most often skipped. It is also neutral enough that a process change, a report, a screen or even a phone call can all be judged against it.",
    },
    {
      term: "Say what has to happen, not what the screen looks like",
      explain:
        "The system flags deliveries where the time left is less than the time needed. That is behaviour. A red icon in the top right corner is a design choice.",
      detail:
        "Describing screens in requirements is the most common way a BA accidentally does the designer's job badly. Say what has to happen and under what conditions, and let people who are better at interfaces pick the icon.",
    },
    {
      term: "The requirements nobody asks for are where projects fail",
      explain:
        "How fast. How many at once. How often it can be down. Who can see it. How long you keep it. These never appear in the request and always appear in the complaints.",
      detail:
        "Ask for each one as a consequence: what happens if this takes ten seconds instead of one? Abstract targets get invented on the spot. Consequences get remembered and they give you a number you can defend.",
    },
    {
      term: "Write down what you are assuming",
      explain:
        "Something you cannot change is a constraint: a law, a contract, a platform decision, a launch date. Something you are proceeding as if it were true, without having checked, is an assumption.",
      detail:
        "Every unwritten assumption becomes somebody's nasty surprise later. Writing them down turns a future argument into a question you can ask today, and roughly a third get corrected the moment anybody reads them.",
    },
    {
      term: "Keeping the links is a habit, not a tool",
      explain:
        "Each requirement notes what it lets somebody do. Each of those notes which need it serves. That is it. A spreadsheet does this perfectly well.",
      detail:
        "It pays off at three moments: when scope has to be cut, when a change request arrives, and when somebody asks after go-live whether it worked. All three are much worse without it and none of them need special software.",
    },
    {
      term: "Prioritise with a category that forces a choice",
      explain:
        "Must have means the need is not met without it. Should have means it is met but noticeably worse. Could have means it is a genuine improvement. And not this time means somebody has decided and it is written down.",
      detail:
        "That fourth one is the whole discipline. A priority list with nothing excluded is a wish list. If everything is a must have, ask which ones you would go live without if the date could not move, and watch the list reorder itself immediately.",
    },
    {
      term: "Agreed is not the same as signed",
      explain:
        "A signature means the process was followed. Agreement means the person can say the requirement back to you in their own words and knows what they are giving up.",
      detail:
        "The practical version is a walkthrough where you read it out and the stakeholder describes what will happen on a normal Tuesday once it exists. Vagueness dies in that exercise and survives every review meeting.",
    },
    {
      term: "Write for the person who will disagree with you in six months",
      explain:
        "Not the person in front of you today, who already has all the context. The reader who matters is a developer, tester or auditor who has none of it.",
      detail:
        "That means nothing vague, no undefined words, and none of appropriate, timely, robust or user-friendly. Each of those is an argument postponed rather than a requirement written.",
    },
    {
      term: "One thing per requirement",
      explain:
        "If a line has the word and in it, check whether it is really two things that could be built, tested and cut separately.",
      detail:
        "Requirements with two things in them are how partly done becomes an acceptable answer. Splitting them is dull work and it is the cheapest improvement most documents can have.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Cutting six weeks of scope in forty minutes.",
      walkthrough:
        "The problem: a supplier portal with sixty-one requirements had its launch date pulled forward by six weeks. What was happening: because every requirement noted what it let somebody do, and each of those noted which need it served, the BA could produce a table in an afternoon. Thirty-eight of them served the need to reduce the number of inbound queries. Eleven served a legal obligation. Twelve served neither. They had crept in over the project as reasonable-sounding additions.",
      result:
        "What changed: the twelve went first and nobody defended them, because there was no need attached to defend. The eleven legal ones stayed despite being expensive, because the alternative was explaining a compliance gap. The whole conversation took forty minutes. Without the links it would have been a negotiation about estimates between people who each wanted their own items kept.",
    },
    {
      kind: "illustration",
      scenario: "A need written as a solution, and what it cost.",
      walkthrough:
        "The problem: the requirement was a mobile app for engineers to record finished jobs. It got built and delivered, and hardly anybody used it. What was happening: investigation afterwards found the real need was that job completion information arrived too late to schedule the next day's work. And the reason it was late was that engineers finished jobs in places with no phone signal and filled the paperwork in that evening. A mobile app that needed a connection made the timing slightly worse.",
      result:
        "What changed: had the need been written as reduce the delay between a job being finished and the information being available for scheduling, working offline would have been the obvious first question rather than an oversight. Writing it as a solution did not just skip a step. It actively hid the one constraint that decided the outcome.",
    },
    {
      kind: "illustration",
      scenario: "One sentence, four different expectations.",
      walkthrough:
        "The problem: a requirement said the system must notify the account manager when an order is at risk. What was happening: in the walkthrough, the BA asked four people what would happen on the day. One expected an email within the hour. One expected a flag on a dashboard they check each morning. One expected a phone call, because that is what at risk means for their biggest customers. And one asked who counts as the account manager when the named person is on holiday.",
      result:
        "What changed: one sentence became four requirements plus a rule about cover that nobody had considered. This is the ordinary case, not an unusual one. Reading requirements out loud and asking people to describe the resulting Tuesday is the cheapest quality check available in this job.",
    },
  ],

  learningPath: [
    {
      title: "Write the need in one paragraph with a number in it",
      body: "What the business wants to change, who is affected, where it is now, where it needs to get to, and how you would see it. No system names, no solutions. Get it agreed by whoever is paying.",
      effort: "Half a day plus a conversation",
      outcome: "The statement every requirement will be judged against.",
    },
    {
      title: "Work out what people have to be able to do",
      body: "For that need, what must somebody be able to do that they cannot do today? Write five to fifteen of these, and keep them free of any particular solution so process changes stay on the table.",
      effort: "1 day",
      outcome: "The middle step that makes scope decisions possible later.",
    },
    {
      title: "Write the requirements against each one",
      body: "What has to happen and under what conditions, one thing per line, each noting what it lets somebody do. Split every line containing and until each can be tested on its own.",
      effort: "2-4 days",
      outcome: "A set where the links already exist rather than being reconstructed later.",
    },
    {
      title: "Chase down the ones nobody asks for",
      body: "Go through speed, volume, availability, security, how long you keep things, and accessibility. Ask what happens if each is not met, and turn the answer into a number.",
      effort: "Half a day",
      outcome: "The requirements that would otherwise arrive as complaints two weeks after launch.",
    },
    {
      title: "Write down assumptions and constraints",
      body: "Everything you are proceeding as if it were true, and everything you cannot change. Send the list round on its own, not buried in an appendix.",
      effort: "2 hours",
      outcome: "Roughly a third get corrected straight away, which is the cheapest bug-fixing in the whole project.",
    },
    {
      title: "Prioritise with a not-this-time category",
      body: "Must, should, could, and not this time. Force the fourth one to have something in it. If everything is a must, ask what you would go live without if the date could not move.",
      effort: "Half a day",
      outcome: "A real priority order, and a written record of what is deliberately absent.",
    },
    {
      title: "Walk through it rather than sending it for signature",
      body: "Read each requirement out and ask the stakeholder to describe what happens on a normal Tuesday once it exists. Fix every place where two people describe different Tuesdays.",
      effort: "2-3 hours per group",
      outcome: "Agreement rather than a signature, and far fewer questions during the build.",
    },
  ],

  exercises: [
    {
      title: "Take the solution out of a requirement",
      brief:
        "Find five requirements in any document at your organisation that name a system, a screen or a technology. Rewrite each one as what has to be achieved, then list two genuinely different ways of achieving it.",
      success:
        "For at least three of the five you can name a second option that the original wording had quietly ruled out.",
      time: "1 hour",
    },
    {
      title: "Check the links on twenty requirements",
      brief:
        "Take twenty requirements from a live project at random. For each, write what it lets somebody do and which need that serves. Mark the ones where you cannot answer.",
      success:
        "You have a count of orphans. More than two or three in twenty means scope is being set by whoever is nearest rather than by the need.",
      time: "2 hours",
    },
    {
      title: "The Tuesday test",
      brief:
        "Pick five requirements and ask three different stakeholders to describe, out loud, what will happen on an ordinary Tuesday once each one exists. Write down the differences.",
      success:
        "You find at least one requirement where two people describe genuinely different behaviour, and you can rewrite it so they do not.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Starting from the solution somebody asked for",
      why: "Every requirement after that is worked out from somebody's guess, so the whole set inherits a design decision nobody can now question, because it looks like a given.",
      fix: "Write the need first, with no system in it. Check that at least two different things could satisfy it before going any further.",
    },
    {
      mistake: "Needs with no numbers",
      why: "You cannot weigh unmeasured needs against each other, and you cannot say afterwards whether any of them were met. So the project gets judged on the launch date, because that is the only number available.",
      fix: "Attach where it is now, where it needs to be, and how you would see it, the moment you write the need. Where the current figure is unknown, write unknown and make finding it a task.",
    },
    {
      mistake: "Describing screens instead of behaviour",
      why: "You commit the design before anybody has thought about it, and you tie the requirement to a layout that will change, which makes it look wrong later even when it is right.",
      fix: "Say what has to happen and under what conditions. Leave placement and wording to design, and say so in the document.",
    },
    {
      mistake: "Leaving speed, volume and security to the technical team",
      why: "They will make a reasonable assumption. Reasonable assumptions about how many people, how long you keep things and how often it can be down are where post-launch crises come from, because the business context that would have corrected them was never shared.",
      fix: "Ask each one as a consequence question and write the answer down as a number with the business reason beside it.",
    },
    {
      mistake: "Everything is a must have",
      why: "A set with no priorities forces the delivery team to prioritise, which they do by effort. The cheap things ship and the ones carrying the value get pushed back.",
      fix: "Insist on a not-this-time category with something in it. Ask what you would go live without if the date could not move.",
    },
    {
      mistake: "Two things in one requirement",
      why: "A line with and in it can be half delivered and still called complete, and it cannot be cut, tested or estimated cleanly.",
      fix: "Split until each line can be satisfied and checked on its own. It is boring and it is the highest-value edit in the whole document.",
    },
    {
      mistake: "Confusing a signature with agreement",
      why: "People sign what they have skimmed. The misunderstanding surfaces during the build or at acceptance, when changing it costs the most.",
      fix: "Run a walkthrough where stakeholders say each requirement back in their own words. Sign afterwards if the process needs it.",
    },
    {
      mistake: "Freezing the list and calling every change a failure",
      why: "Understanding genuinely improves during a project. Treating every change as a failure teaches people to go round you, and then changes arrive with no analysis at all.",
      fix: "Expect change and handle it openly: what changed, which need it serves, and what it pushes out. The problem is unassessed change, not change.",
    },
  ],

  bestPractices: [
    "Write the need before any requirement, with no system in it.",
    "Check at least two different solutions could satisfy the need as written.",
    "Attach where it is now, where it needs to be, and how you would see it.",
    "Always work out what people have to be able to do, in between.",
    "Describe what has to happen, not what the screen looks like.",
    "Ask about speed, volume and security as consequence questions.",
    "Write assumptions and constraints down and send them round separately.",
    "Note on every requirement what it lets somebody do and which need that serves.",
    "Split any requirement containing the word and.",
    "Force a not-this-time category to have something in it.",
    "Check agreement by walkthrough, not by signature.",
    "Record every change with the need it serves and what it displaces.",
  ],

  proTips: [
    "When somebody gives you a requirement, ask what they will do differently on the day it exists. If the answer is nothing specific, you have a preference rather than a requirement, and it is far kinder to establish that now than at acceptance. The question sounds naive and it works on very senior people.",
    "Keep a list of things you decided not to do, with the reason next to each. It is the document people come back to most often, because the same idea reappears every few months with a different sponsor. Being able to show that it was considered and why it was dropped settles the conversation in two minutes.",
    "Watch for requirements only one person can explain. Sole ownership of a rule usually means either it is a personal preference or it is genuine knowledge that exists nowhere else. Both need action and they need opposite action, so find out which before that person leaves.",
    "Number your requirements once and never renumber them. Renumbering breaks every reference in every email, meeting note and test, and people will keep using the old numbers anyway. Retire numbers, leave gaps, and accept that the list is not tidy.",
  ],

  businessApplications: [
    "Choosing a system, where the needs become the evaluation criteria and the requirements become the demo script.",
    "Responding to new legislation, where the need comes from outside and the work is agreeing what it means here.",
    "Replacing a system, where the temptation is to specify what the old one does rather than what the business needs.",
    "Work built by an outside company, where the requirements are contractual and vagueness has a price.",
    "Process change with no software at all, where the middle step is satisfied by people and policy rather than functions.",
    "Choosing between competing projects, where comparable need statements are the only way to compare unlike things.",
  ],

  checklist: [
    "Need written with no solution language in it.",
    "Two alternative solutions identified that would satisfy it as written.",
    "Current figure, target and how you would see it recorded.",
    "What people have to be able to do agreed before any detail begins.",
    "Every requirement notes what it lets somebody do.",
    "No requirement describes a screen layout.",
    "Speed, volume and security asked as consequence questions and written as numbers.",
    "Assumptions and constraints listed and sent round separately.",
    "Every requirement containing and has been split.",
    "Priorities assigned with a not-this-time category that has things in it.",
    "Walkthrough done with each stakeholder group.",
    "Change log started, recording the need and what each change displaces.",
  ],

  faqs: [
    {
      q: "What is the difference between a business requirement and a system requirement?",
      a: "A business requirement says what the organisation needs to achieve and mentions no system. A system requirement says what the software has to do to help. If your business requirements name systems, they are system requirements filed in the wrong section.",
    },
    {
      q: "Do I need special traceability software?",
      a: "You need the links, not the tool. A column on each requirement saying what it lets somebody do gives you everything a matrix does. Buy tooling when the volume genuinely demands it, not because a template implies it.",
    },
    {
      q: "How much detail before development starts?",
      a: "Enough that a developer can build the normal path and a tester can prove it, with the exceptions written for whatever is being built next. Specifying everything for work that starts in four months usually means specifying it twice.",
    },
    {
      q: "How do I handle somebody who says everything is a must have?",
      a: "Change the question. Ask which ones you would go live without if the date could not move and the budget were fixed. Almost nobody can prioritise in the abstract and almost everybody can prioritise against a constraint.",
    },
    {
      q: "Are user stories a replacement for this?",
      a: "They are a format for one part of the same job. A story carries who benefits, what they want and why, which is the chain in miniature. It still needs the detail, the rules and the practical constraints attached, or it is a title rather than a specification.",
    },
    {
      q: "What do I do when the need changes mid-project?",
      a: "Restate the need, check which requirements still serve it, and present what should now be dropped. A changed need with no matching scope reduction is how projects double in size while everybody behaves perfectly reasonably.",
    },
  ],

  tools: [
    { name: "A spreadsheet with a column for what each thing serves", what: "The links without any tooling. Requirement, what it lets somebody do, which need, priority, status, source.", cost: "Varies" },
    { name: "A need statement template", what: "What changes, who is affected, where it is now, where it needs to get to, how you would see it. One paragraph, no system names.", cost: "Free" },
    { name: "A prompt list for the ones nobody asks for", what: "Speed, volume, availability, security, retention, accessibility. Used as a script so nothing gets skipped.", cost: "Free" },
    { name: "A decision and assumption log", what: "Dated, with names. Prevents the most common project argument, which is about what was agreed and when.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "symptom-versus-problem", anchor: "making sure the need is the real one", context: "Before requirements" },
    { slug: "writing-requirements-developers-can-build", anchor: "taking these down to buildable detail", context: "Next step" },
    { slug: "business-rules-and-decision-tables", anchor: "writing down the logic inside a rule", context: "Detail" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "symptom-versus-problem", "business-rules-and-decision-tables"],

  conclusion: [
    "Take twenty requirements from whatever you are working on and write next to each one which business need it serves. The orphans you find in the next two hours are scope nobody asked for, and removing them is the fastest value you can add to a project this week.",
  ],
};

export default guide;
