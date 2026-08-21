import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "turning-business-needs-into-requirements",
  seoTitle: "Turning Business Needs Into Requirements That Hold",
  metaDescription:
    "The chain from business need to system requirement: how to state a need, derive requirements from it, keep traceability, and prioritise without the word critical.",
  title: "Turning Business Needs Into Requirements",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 18,

  intro: [
    "Requirements are not collected. They are derived, and derivation implies something to derive them from. That something is a business need: a statement of what the organisation is trying to achieve or stop, expressed without any reference to how.",
    "Skip the need and you get a requirements document that is really a solution description with numbering. It reads convincingly, it passes review, and it cannot be questioned, because there is no stated purpose against which any individual line can be judged unnecessary. That is why those documents only ever grow.",
    "This guide covers the chain: from a business need, through the capabilities that would satisfy it, to requirements a team can build against, with the links between the levels kept visible. It also covers prioritisation, because a requirement set where everything is critical is the same as a requirement set with no priority at all, and I have never seen a first draft that was anything else.",
  ],

  whyItMatters: [
    "The link between a requirement and the need it serves is what lets you cut scope safely. When a deadline tightens, a team without that link cuts by effort, which means the hardest requirements go first regardless of value. A team with it cuts by contribution to the need, which is a completely different conversation and a much better outcome.",
    "It is also your defence against feature accumulation. Every request that arrives mid-project can be asked one question: which need does this serve? Most requests survive that question. The ones that do not were somebody's preference travelling under a false passport, and without the chain you have no polite way to say so.",
    "And it is what makes benefits measurable later. If nobody can say what the need was, nobody can say afterwards whether it was met, so the project is judged on whether it was delivered on time. Delivery becomes the goal, which is how organisations end up celebrating things that changed nothing.",
  ],

  coreConcepts: [
    {
      term: "The four levels, and why they are not bureaucracy",
      explain:
        "Business need (what the organisation wants to change), capability (what someone must be able to do), functional requirement (what the system must do to enable that), and specification detail (rules, fields, conditions). Each level answers why for the level below it.",
      detail:
        "You do not need heavy documentation to work this way. You need to be able to answer, for any line in your spec, which capability it serves and which need that capability serves. If you cannot, either the line is unnecessary or you have found a need nobody wrote down.",
    },
    {
      term: "A business need contains no solution and no system",
      explain:
        "Reduce the time between a customer ordering and being able to track their delivery. That is a need. Build a tracking portal is a solution that has arrived early and closed off every alternative.",
      detail:
        "The test is whether at least two genuinely different solutions could satisfy the statement. If only one could, you are holding a design decision that somebody has dressed as a requirement.",
    },
    {
      term: "Needs have a size, or they are opinions",
      explain:
        "Attach the measure at the moment you write the need. What is the current figure, what would good look like, and how would we know. A need without a number cannot be prioritised against other needs and cannot be verified afterwards.",
      detail:
        "This is uncomfortable early on, because the number is often unknown. Write it as unknown and make finding it a task. An acknowledged gap is manageable. An unacknowledged one turns into an argument at the benefits review.",
    },
    {
      term: "Capabilities are the useful middle layer",
      explain:
        "Between the need and the system sits what somebody must be able to do. A warehouse supervisor must be able to see which consignments are at risk of missing their cut-off, before the cut-off.",
      detail:
        "This layer is where most of the real thinking happens and it is the layer most often skipped. It is also solution-neutral enough that a process change, a report, a screen or a phone call can all be evaluated against it.",
    },
    {
      term: "Functional requirements describe behaviour, not screens",
      explain:
        "The system must flag consignments whose remaining processing time is less than the estimated time to complete. That is behaviour. A red icon in the top right of the consignment list is a design choice.",
      detail:
        "Describing screens in requirements is the most common way a BA accidentally does the designer's job badly. State the behaviour and the constraint, and let people who are better at interfaces choose the icon.",
    },
    {
      term: "Non-functional requirements are where projects actually fail",
      explain:
        "How fast, how many at once, how available, how secure, how long retained, how accessible, in which languages, recoverable in what time. These rarely appear in the request and always appear in the complaints.",
      detail:
        "Ask for each one in the form of a consequence: what happens if this takes ten seconds instead of one? Abstract performance targets get invented. Consequences get remembered, and they give you a number you can defend.",
    },
    {
      term: "Assumptions and constraints belong in the document",
      explain:
        "A constraint is something you cannot change: a regulation, a contract, a platform decision, a go-live date. An assumption is something you are proceeding as if it were true, without having confirmed it.",
      detail:
        "Every unwritten assumption becomes a surprise with somebody's name attached later. Writing them down converts a future argument into a present question, and about a third of assumptions get corrected the moment somebody reads them.",
    },
    {
      term: "Traceability is a habit, not a tool",
      explain:
        "Each requirement carries the identifier of the capability it serves, each capability the identifier of its need. That is it. A spreadsheet does this perfectly well.",
      detail:
        "The payoff comes at three moments: when scope must be cut, when a change request arrives, and when someone asks after go-live whether the thing worked. All three are much worse without it and none of them require specialist software.",
    },
    {
      term: "Prioritise against the need, using categories that force a choice",
      explain:
        "Must have means the need is not met without it. Should have means the need is met but the solution is noticeably worse. Could have means it is a genuine improvement. Will not have this time means a decision has been taken and recorded.",
      detail:
        "The discipline is the fourth category. A priority scheme with no explicit exclusions is a wish list. If everything is a must have, ask which ones you would ship without if the date could not move, and watch the list reorder itself immediately.",
    },
    {
      term: "Requirements are agreed, not signed off",
      explain:
        "A signature records that governance was followed. Agreement means the person can restate the requirement in their own words and knows what they are giving up.",
      detail:
        "The practical version is a walkthrough where you read the requirement and the stakeholder describes what will happen on a Tuesday when it exists. Ambiguity dies in that exercise and survives every review meeting.",
    },
    {
      term: "Write for the person who will disagree with you in six months",
      explain:
        "Not for the person in front of you today, who has all the context. The reader who matters is a developer, tester or auditor with none of it.",
      detail:
        "That means no pronouns without antecedents, no undefined terms, no words like appropriate, timely, robust or user-friendly. Each of those is an argument postponed rather than a requirement written.",
    },
    {
      term: "One requirement per requirement",
      explain:
        "If a line contains the word and, check whether it is two requirements that can be independently satisfied, tested and cut.",
      detail:
        "Compound requirements are how partially-met becomes an acceptable answer. Splitting them is dull work and it is the single cheapest improvement most requirement sets can have.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The chain that let a project cut scope without an argument.",
      walkthrough:
        "A team is building a supplier portal with sixty-one requirements. The date is pulled forward by six weeks. Because every requirement carries the identifier of the capability it supports and every capability the identifier of a need, the BA can produce a table showing that thirty-eight requirements serve the need to reduce inbound query volume, eleven serve a need around contract compliance, and twelve serve neither: they had accumulated through the project as reasonable-sounding additions.",
      result:
        "The twelve went first, and nobody defended them, because there was no need attached to defend. The compliance eleven were retained despite being expensive, because the alternative was explaining a regulatory gap. The conversation took forty minutes. Without the chain it would have been a negotiation about effort estimates between people who each wanted their own items kept.",
    },
    {
      kind: "illustration",
      scenario: "A need written as a solution, and what it cost.",
      walkthrough:
        "The stated requirement is a mobile app for engineers to record job completions. It is built and delivered. Adoption is poor. Investigation afterwards finds the real need was that job completion data arrived too late for next-day scheduling, and the reason it arrived late was that engineers completed jobs in areas with no signal and filled in the paperwork that evening. A mobile app with no offline capability made the timing marginally worse.",
      result:
        "Had the need been written as reduce the delay between job completion and the data being available for scheduling, offline capture would have been the obvious first question rather than an oversight. The solution language did not just skip a step, it actively hid the constraint that decided the outcome.",
    },
    {
      kind: "illustration",
      scenario: "The word that meant four things.",
      walkthrough:
        "A requirement states that the system must notify the account manager when an order is at risk. In the walkthrough, the BA asks four people what happens on the day. One expects an email within the hour. One expects a dashboard flag reviewed each morning. One expects a phone call, because that is what at risk means for their largest customers. One asks who counts as the account manager when the named person is on leave.",
      result:
        "One sentence, four requirements, and a rule about cover that nobody had considered. This is the ordinary case rather than an unusual one. Reading requirements aloud and asking people to describe the resulting Tuesday is the cheapest quality control available in this job.",
    },
  ],

  learningPath: [
    {
      title: "Write the business need in one paragraph with a number in it",
      body: "What the organisation wants to change, who is affected, the current measure, the target, and how it will be observed. No system names, no solution language. Get it agreed by whoever is paying.",
      effort: "Half a day, plus a conversation",
      outcome: "The statement every requirement will be justified against.",
    },
    {
      title: "Derive capabilities before touching functionality",
      body: "For that need, what must somebody be able to do that they cannot do today? Write five to fifteen of these. Keep them solution-neutral so that process changes remain on the table.",
      effort: "1 day",
      outcome: "The middle layer that makes scope decisions possible later.",
    },
    {
      title: "Write functional requirements per capability",
      body: "Behaviour and constraints, one requirement per line, each carrying its capability identifier. Split every line containing the word and until each can be independently tested.",
      effort: "2-4 days",
      outcome: "A requirement set that is traceable by construction rather than by a later exercise.",
    },
    {
      title: "Interrogate the non-functionals with consequence questions",
      body: "Go through performance, volume, availability, security, retention, accessibility, recoverability. Ask what happens if each is not met, and convert the answer into a number.",
      effort: "Half a day",
      outcome: "The requirements that would otherwise appear as complaints two weeks after go-live.",
    },
    {
      title: "Record assumptions and constraints explicitly",
      body: "Everything you are proceeding as if it were true, and everything you cannot change. Circulate the list on its own, not buried in an appendix.",
      effort: "2 hours",
      outcome: "Roughly a third get corrected immediately, which is the cheapest defect removal in the project.",
    },
    {
      title: "Prioritise with an explicit exclusion category",
      body: "Must, should, could, and will not this time. Force the fourth category to be non-empty. If everything is a must, ask what you would ship without if the date could not move.",
      effort: "Half a day",
      outcome: "A prioritised set, and a recorded decision about what is deliberately absent.",
    },
    {
      title: "Walk it through rather than circulating it for signature",
      body: "Read each requirement aloud and ask the stakeholder to describe what happens on a normal Tuesday once it exists. Fix every place where two people describe different Tuesdays.",
      effort: "2-3 hours per group",
      outcome: "Agreement rather than a signature, and a materially shorter list of build-time questions.",
    },
  ],

  exercises: [
    {
      title: "De-solution a requirement",
      brief:
        "Find five requirements in any document at your organisation that name a system, a screen or a technology. Rewrite each as a statement of what must be achieved, then list two genuinely different solutions that would satisfy your rewrite.",
      success:
        "For at least three of the five you can name a second viable solution that the original wording had silently excluded.",
      time: "1 hour",
    },
    {
      title: "The traceability spot check",
      brief:
        "Take twenty requirements from a live project at random. For each, write which capability it serves and which need that capability serves. Mark the ones where you cannot answer.",
      success:
        "You have a count of orphan requirements. Anything above two or three in twenty means scope is being set by whoever is nearest, not by the need.",
      time: "2 hours",
    },
    {
      title: "The Tuesday test",
      brief:
        "Pick any five requirements and ask three different stakeholders to describe, out loud, what will happen on an ordinary Tuesday once each one exists. Write down the differences.",
      success:
        "You find at least one requirement where two people describe materially different behaviour, and you can rewrite it so they do not.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Starting from the requested solution",
      why: "Every subsequent requirement is derived from somebody's guess, so the whole set inherits an unexamined design decision that nobody can now question, because it looks like a given.",
      fix: "Write the need first, without naming a system. Check that at least two different solutions could satisfy it before proceeding.",
    },
    {
      mistake: "Needs without measures",
      why: "You cannot prioritise between unmeasured needs, and you cannot say afterwards whether any of them were met. The project gets judged on delivery date because that is the only number available.",
      fix: "Attach current value, target value and observation method at the moment you write the need. Where the current value is unknown, write unknown and make finding it a task.",
    },
    {
      mistake: "Describing screens instead of behaviour",
      why: "You commit the design before anyone has thought about it, and you tie the requirement to a layout that will change, which makes the requirement look wrong later even when it is right.",
      fix: "State what must happen and under what conditions. Leave placement, colour and wording to design, and say so explicitly in the document.",
    },
    {
      mistake: "Leaving non-functional requirements to the technical team",
      why: "They will make a reasonable assumption. Reasonable assumptions about volume, retention and availability are where post-launch crises come from, because the business context that would have corrected them was never shared.",
      fix: "Elicit each one with a consequence question and record the answer as a number with the business reason beside it.",
    },
    {
      mistake: "Everything is a must have",
      why: "A set with no priorities forces the delivery team to prioritise, which they do by effort. The cheapest items ship and the ones that carried the value get deferred.",
      fix: "Require a non-empty will-not-have-this-time category. Ask what you would ship without if the date could not move.",
    },
    {
      mistake: "Compound requirements",
      why: "A line containing and can be half-delivered and still declared complete, and it cannot be cut, tested or estimated cleanly.",
      fix: "Split until each line can be independently satisfied and independently verified. It is boring and it is the highest-value edit in the document.",
    },
    {
      mistake: "Confusing sign-off with agreement",
      why: "People sign what they have skimmed. The misunderstanding surfaces during build or at acceptance, when changing it costs the most.",
      fix: "Run a walkthrough where stakeholders restate each requirement in their own words. Sign afterwards if governance needs it.",
    },
    {
      mistake: "Freezing the set and calling changes failure",
      why: "Understanding legitimately improves during a project. Treating every change as a control failure teaches people to route around you, and then changes arrive without analysis at all.",
      fix: "Expect change and manage it visibly: what changed, which need it serves, what it displaces. The problem is unassessed change, not change.",
    },
  ],

  bestPractices: [
    "Write the need before any requirement, with no system named in it.",
    "Check that at least two different solutions could satisfy the need as written.",
    "Attach a current measure, a target and an observation method to every need.",
    "Use the capability layer between need and function, always.",
    "Describe behaviour and constraints rather than screens.",
    "Elicit non-functional requirements with consequence questions.",
    "Write assumptions and constraints down and circulate them separately.",
    "Carry the parent identifier on every requirement so traceability needs no later exercise.",
    "Split any requirement containing the word and.",
    "Force a non-empty exclusion category in prioritisation.",
    "Validate by walkthrough, not by signature.",
    "Record every change with the need it serves and what it displaces.",
  ],

  proTips: [
    "When a stakeholder gives you a requirement, ask what they will do differently on the day it exists. If the answer is nothing specific, you have a preference rather than a requirement, and it is far kinder to establish that now than at acceptance. The question sounds naive and it works on very senior people.",
    "Keep a rejected requirements list with the reason beside each entry. It is the document people come back to most often, because the same idea reappears every few months with a different sponsor. Being able to show that it was considered and why it was excluded settles the conversation in two minutes.",
    "Watch for requirements that only one person can explain. Sole ownership of a rule is usually a sign that the rule is either a personal preference or a genuine piece of institutional knowledge that exists nowhere else. Both cases need action, and they need opposite action, so find out which before the person leaves.",
    "Number your requirements once and never renumber them. Renumbering breaks every reference in every email, meeting note and test case, and people will keep using the old numbers anyway. Retire identifiers, leave gaps, and accept that the list is not tidy.",
  ],

  businessApplications: [
    "Software selection, where needs and capabilities become the evaluation criteria and the requirements become the demonstration script.",
    "Regulatory change, where the need is externally imposed and the work is establishing what it means for this organisation specifically.",
    "System replacement, where the temptation is to specify what the old system does rather than what the business needs.",
    "Outsourced or vendor-built delivery, where the requirement set is contractual and ambiguity has a price attached.",
    "Internal process change with no software, where capabilities are satisfied by people and policy rather than functions.",
    "Portfolio prioritisation, where comparable need statements across projects are the only way to compare unlike things.",
  ],

  checklist: [
    "Business need written with no solution language in it.",
    "Two alternative solutions identified that would satisfy the need as written.",
    "Current measure, target and observation method recorded.",
    "Capabilities derived and agreed before functional detail begins.",
    "Every functional requirement carries its parent capability identifier.",
    "No requirement describes a screen layout.",
    "Non-functional requirements elicited by consequence question and expressed as numbers.",
    "Assumptions and constraints listed and circulated separately.",
    "Every compound requirement split.",
    "Priorities assigned with a non-empty exclusion category.",
    "Walkthrough completed with each stakeholder group.",
    "Change log started, with need and displacement recorded per change.",
  ],

  faqs: [
    {
      q: "What is the difference between a business requirement and a functional requirement?",
      a: "A business requirement states what the organisation needs to achieve and mentions no system. A functional requirement states what a system must do to help achieve it. If your business requirements name systems, they are functional requirements that have been filed in the wrong section.",
    },
    {
      q: "Do I need a formal traceability matrix?",
      a: "You need the links, not the tool. A column on each requirement holding its parent identifier gives you everything a matrix does. Buy tooling when the volume genuinely demands it, not because a template implies it.",
    },
    {
      q: "How detailed should requirements be before development starts?",
      a: "Detailed enough that a developer can build the main path and a tester can prove it, with the exceptions specified for whatever is being built next. Specifying everything up front for work that starts in four months usually means specifying it twice.",
    },
    {
      q: "How do I handle a stakeholder who insists everything is a must have?",
      a: "Change the question. Ask which items you would ship without if the date could not move and the budget were fixed. Nobody can prioritise in the abstract and almost everybody can prioritise under a constraint.",
    },
    {
      q: "Are user stories a replacement for requirements?",
      a: "They are a format for one part of the same job. A story carries the user, the goal and the value, which is the traceability chain in miniature. It still needs acceptance criteria, business rules and non-functional constraints attached, or it is a title rather than a specification.",
    },
    {
      q: "What do I do when the need changes mid-project?",
      a: "Restate the need, re-check which requirements still serve it, and present what should now be dropped. A changed need without a corresponding scope reduction is how projects double in size while everyone behaves reasonably.",
    },
  ],

  tools: [
    { name: "A spreadsheet with parent identifier columns", what: "Traceability without tooling. Requirement, capability, need, priority, status, source. Sufficient for most projects.", cost: "Varies" },
    { name: "A need statement template", what: "What changes, who is affected, current measure, target, observation method. One paragraph and no system names allowed.", cost: "Free" },
    { name: "A non-functional prompt list", what: "Performance, volume, availability, security, retention, accessibility, recoverability. Used as a script so nothing is skipped.", cost: "Free" },
    { name: "A decision and assumption log", what: "Dated, with owners. Prevents the most common project argument, which is about what was agreed and when.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "symptom-versus-problem", anchor: "making sure the need is the real one", context: "Before requirements" },
    { slug: "writing-requirements-developers-can-build", anchor: "taking these down to buildable detail", context: "Next step" },
    { slug: "business-rules-and-decision-tables", anchor: "capturing the logic inside a requirement", context: "Detail" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "symptom-versus-problem", "business-rules-and-decision-tables"],

  conclusion: [
    "Take twenty requirements from whatever you are working on and write the parent need beside each one. The orphans you find in the next two hours are the scope nobody asked for, and removing them is the fastest value you can add to a project this week.",
  ],
};

export default guide;
