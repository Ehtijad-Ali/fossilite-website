import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "risk-assumptions-and-issues",
  seoTitle: "Risk Registers That Somebody Actually Acts On",
  metaDescription:
    "Most risk registers are theatre. How to write one that describes a mechanism, find the assumptions holding a project up, and run a list people use rather than review.",
  title: "Risks and the Assumptions Nobody Wrote Down",
  keywords: [
    "risk management business analyst",
    "raid log",
    "project assumptions",
    "risk register",
    "identifying project risks",
    "assumption analysis",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Most risk registers are theatre. A dozen entries phrased as categories rather than as things that could happen, each rated amber, each with a plan that says monitor closely, reviewed every fortnight by people who stopped reading them months ago. They exist so a process can be satisfied and they have never caused anybody to do anything.",
    "The useful version differs in one specific way: every entry describes how it would actually happen. Not resource risk, but if the two people who understand the pricing rules are both put on the migration in March, then the requirements for phase two will not be ready and the June date fails. You can act on the second one and you cannot act on the first, and that is the entire difference.",
    "What a BA brings here is distinctive. Project managers own the process. What you bring is the ability to see the mechanism, to notice the assumptions holding the plan up that nobody has said out loud, and to turn a vague unease into something specific enough to give somebody.",
  ],

  whyItMatters: [
    "Assumptions are where projects actually fail. Not the risks on the list, but the things everybody took so completely for granted that nobody thought to write them down: that the data exists, that the other team has capacity, that the regulator will accept the approach, that people will use it.",
    "The BA is unusually well placed to find these, because the assumption is usually buried inside a requirement. Every requirement depending on a field being filled in, a team being available or a rule staying put is an assumption with a specification wrapped around it.",
    "And the cost curve is steep. An assumption checked in week two costs a query. The same assumption found to be false in month five costs a redesign, and in testing it costs the date.",
  ],

  coreConcepts: [
    {
      term: "Four different things, and they need different handling",
      explain:
        "A risk might happen. An issue has happened. An assumption is something you are carrying on as if it were true without having checked. A dependency is something you need from somebody else.",
      detail:
        "Risks need something doing to reduce them. Issues need resolving. Assumptions need checking. Dependencies need a name and a date. Put all four in one list and everything gets the same treatment, which is usually a fortnightly review and nothing else.",
    },
    {
      term: "Write risks as a mechanism, in three parts",
      explain:
        "Because of this, this might happen, and then this would follow. All three parts, every time, specific enough that somebody could do something about it.",
      detail:
        "The test: could two people read it and agree what would have to change to remove it? Resource risk fails that immediately. A named cause, a described event and a stated consequence passes it.",
    },
    {
      term: "Assumptions are the most productive thing for an analyst to hunt",
      explain:
        "Go through your requirements and ask, for each one, what has to be true in the world for this to work. The data exists. Volumes stay similar. The rule does not change. The team has capacity. Every answer is an assumption.",
      detail:
        "Most of these have never been said out loud, because they are obvious to whoever holds them. Writing them down is what turns them into things somebody can check, and roughly a third get corrected the moment anybody reads them.",
    },
    {
      term: "Find the one that would sink it, and check that first",
      explain:
        "Every project has one assumption that, if wrong, makes the whole thing pointless rather than just harder.",
      detail:
        "Name it in the first fortnight and work out the cheapest way to check it. This single habit has changed the direction of more projects I have worked on than any other technique.",
    },
    {
      term: "Rate three ways, not two",
      explain:
        "How bad, how likely, and how quickly anybody would notice. That third one gets left out routinely and it changes the priority a lot.",
      detail:
        "Something moderately bad that would go unnoticed for a quarter is often worse than something severe that fails loudly, because by the time it is found people have been making decisions on the bad state.",
    },
    {
      term: "Every entry needs somebody who can actually do something",
      explain:
        "Not the project manager by default, and not a team. A named individual with the authority to do the thing that would reduce the risk.",
      detail:
        "Where the only person who could act sits outside the project, that is itself the finding, and it goes to the sponsor rather than sitting in a list with an owner who cannot do anything about it.",
    },
    {
      term: "Monitor closely is not a plan",
      explain:
        "It is not an action, so nothing changes. Either reduce how likely it is, reduce how bad it would be, get somebody else to carry it, or accept it openly.",
      detail:
        "Accepting a risk on purpose, in writing, with the sponsor's name against it, is a perfectly professional outcome and far better than a plan nobody intends to carry out.",
    },
    {
      term: "A dependency needs a name, a date and confirmation",
      explain:
        "What you need, from whom, by when, and evidence they know about it. That third part is what makes it a dependency rather than a hope.",
      detail:
        "An unconfirmed dependency is an assumption wearing a plan's clothes. The confirmation does not have to be formal. It has to exist.",
    },
    {
      term: "Ask what would have to happen for this to fail",
      explain:
        "Ask the group to imagine it is a year from now and this went badly. What happened? People say things in that frame they will not say when asked what could go wrong.",
      detail:
        "It works because it removes the social cost of being the pessimist. The answers are your risk list, written by the people best placed to know, at the only moment when acting on them is cheap.",
    },
    {
      term: "Watch for the risks nobody will write down",
      explain:
        "The sponsor might leave. The supplier is in financial trouble. Two of the teams involved do not get on. These are often the biggest risks and they are politically awkward.",
      detail:
        "Phrase them as conditions rather than people: whether we keep the same sponsor, whether the supplier stays viable, how well two teams with different bosses coordinate. The mechanism can be described honestly without naming anybody.",
    },
    {
      term: "Close things, and say why",
      explain:
        "Risks that have passed, assumptions that turned out to be right, issues that got resolved. A list that only ever grows stops being read.",
      detail:
        "The reason matters more than the closing. An assumption confirmed by whom, on what evidence, on what date, is analysis. Marked closed with no reason is admin.",
    },
    {
      term: "Report what moved, not the whole list",
      explain:
        "What is new, what got worse, what closed. Nobody reads a list of thirty entries every fortnight, and reproducing it in full teaches them not to.",
      detail:
        "Three lines about what moved, with the full list available if anybody wants it, gets read. It also makes things getting worse visible, which a static list actively hides.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A high-risk approach with nothing to steer by.",
      walkthrough:
        "In September 2013 the UK National Audit Office reported on the early implementation of Universal Credit. It found £425 million had been spent to that point, with over 70% of it on IT systems and £34 million of IT already written off. The NAO concluded the Department had been over-ambitious in both timetable and scope, that the programme suffered from weak management, ineffective control and poor governance, and that the Department did not have adequate measures of progress despite taking a high-risk approach never previously used for something that complicated.",
      result:
        "The phrase worth carrying into any risk work is the last one. Taking a high-risk approach is sometimes right. Taking one without anything that would tell you early whether it is working is what turns a risk into a loss, because there is no point at which anybody can see it happening in time to change course. A risk list whose entries have no early warning signal attached has the same problem on a smaller scale.",
      source: {
        label: "National Audit Office (5 September 2013). Universal Credit: early progress",
        url: "https://www.nao.org.uk/reports/universal-credit-early-progress/",
      },
    },
    {
      kind: "illustration",
      scenario: "The assumption nobody had said out loud.",
      walkthrough:
        "The problem: a requirements set had been through review twice and looked solid. What was happening: the BA went through it asking one question of each requirement, what has to be true for this to work. One answer was that a customer segment field is filled in. Two days of checking showed it was filled in for a small minority of records, and only for customers who arrived through one channel during a two-year window.",
      result:
        "What changed: the requirement was not buildable as written and had to be redesigned. It had passed review twice because reviewers check whether requirements are clear, not whether the world they assume actually exists. Asking what has to be true for each one is a mechanical exercise that takes an afternoon and it consistently finds at least one of these.",
    },
    {
      kind: "illustration",
      scenario: "The risk that only came out when asked backwards.",
      walkthrough:
        "The problem: the risk list was full of the usual things and nobody was worried. What was happening: before the design was fixed, the BA asked the group to imagine a year had passed and the project had failed, then write down what happened. Among the usual answers, three people independently wrote versions of the same thing: the operations team never got time to test it properly, so it went live untested and the business rejected it.",
      result:
        "What changed: tester availability got escalated and secured in writing eight weeks before testing. That risk was not on the register, because raising it directly would have implied criticism of a manager's resourcing. Asking it backwards removed the social cost of saying it, and that is not a conversation that would have happened otherwise.",
    },
  ],

  learningPath: [
    {
      title: "Pull the assumptions out of your requirements",
      body: "Go through each requirement and write what has to be true for it to work. Data exists, volumes hold, the rule is stable, the team has capacity, the other system can supply it.",
      effort: "Half a day",
      outcome: "A list of assumptions, most never said out loud, roughly a third of which get corrected on first reading.",
    },
    {
      title: "Find the one that would sink it and check it",
      body: "The one that would make the project pointless rather than harder. Work out the cheapest way to check it and do that in the first fortnight.",
      effort: "2-3 days",
      outcome: "Either confidence, or a redirected project while redirecting is still cheap.",
    },
    {
      title: "Rewrite the risk list as mechanisms",
      body: "Because of this, this might happen, and then this would follow. Rewrite every existing entry in that shape and delete the ones that cannot be.",
      effort: "2 hours",
      outcome: "A list where each entry suggests its own action, and a shorter one.",
    },
    {
      title: "Add how quickly you would notice",
      body: "Alongside how bad and how likely, record how fast anybody would spot it. Then re-sort the list by the combination.",
      effort: "1 hour",
      outcome: "The quiet risks moved up, which is usually where they belong.",
    },
    {
      title: "Give every entry to somebody who can act",
      body: "A named individual with the authority to do the thing. Where nobody in the project qualifies, escalate that fact rather than assigning it anyway.",
      effort: "1 hour plus conversations",
      outcome: "Entries that produce action rather than review.",
    },
    {
      title: "Ask what would have to happen for this to fail",
      body: "Get the group to imagine failure a year out and write down what happened, individually and silently, before anybody speaks. Then collect and read them out.",
      effort: "1 hour",
      outcome: "The risks people will not raise directly, at the point where acting on them is cheap.",
    },
    {
      title: "Report what moved and close things",
      body: "New, worse, closed. Three lines. Close confirmed assumptions and passed risks with a reason and a date.",
      effort: "20 minutes a fortnight",
      outcome: "A list people actually read, which is the only kind that works.",
    },
  ],

  exercises: [
    {
      title: "What has to be true?",
      brief:
        "Take twenty requirements from a current project. For each, write one sentence saying what must be true in the world for it to work. Mark the ones nobody has checked.",
      success:
        "You have at least three unchecked assumptions and can name the cheapest way to check each.",
      time: "2 hours",
    },
    {
      title: "Rewrite a risk list",
      brief:
        "Take an existing risk register and rewrite every entry as cause, event and consequence. Delete anything that cannot be written that way and see how much is left.",
      success:
        "The list is noticeably shorter and every remaining entry suggests something specific to do.",
      time: "1-2 hours",
    },
    {
      title: "Ask it backwards, in writing",
      brief:
        "In any project meeting, ask everybody to write down silently what they would say had gone wrong if this had failed a year from now. Collect and read them out without names.",
      success:
        "At least one risk comes out that is not on the list, and you can see whether several people wrote versions of the same thing.",
      time: "20 minutes inside an existing meeting",
    },
  ],

  mistakes: [
    {
      mistake: "Writing risks as categories",
      why: "Resource risk or technical risk cannot be acted on, because there is no specific thing that would remove it. The entry exists to satisfy a process rather than to change anything.",
      fix: "Cause, event, consequence, every time, specific enough that two people would agree what would remove it.",
    },
    {
      mistake: "Not separating assumptions from risks",
      why: "Assumptions need checking, not managing. Filed as risks they get reviewed every fortnight and never checked, which is exactly the wrong treatment.",
      fix: "Keep them as their own list, each with a way to check it and a date, and close them as confirmed or corrected.",
    },
    {
      mistake: "Plans that say monitor closely",
      why: "It is not an action, so nothing changes, and the entry gives false comfort that somebody is handling it.",
      fix: "Reduce how likely, reduce how bad, transfer it, or accept it openly with a named sponsor. All four mean something concrete.",
    },
    {
      mistake: "Rating only how bad and how likely",
      why: "It ignores how long something would go unnoticed, and slow-to-notice problems are frequently the most damaging because decisions get made on the bad state.",
      fix: "Add how quickly you would notice and re-sort by the combination.",
    },
    {
      mistake: "Giving entries to people who cannot act",
      why: "It gets reviewed by somebody with no authority to change anything, which turns risk management into reporting.",
      fix: "Name somebody who can actually do the thing, and escalate where nobody in the project can.",
    },
    {
      mistake: "Avoiding the awkward risks",
      why: "Whether the sponsor stays, whether the supplier survives, and how two teams get on are frequently the biggest risks, and leaving them off means the list describes only the comfortable ones.",
      fix: "State them as conditions rather than about people. The mechanism can be honest without naming anybody.",
    },
    {
      mistake: "A list that only grows",
      why: "Once it is long enough to be tedious, nobody reads any of it, including the three entries that matter.",
      fix: "Close passed risks and confirmed assumptions with reasons, and report what moved rather than the whole list.",
    },
    {
      mistake: "Taking a risky approach with nothing to watch",
      why: "There is no point at which anybody can tell whether it is working while there is still time to change course.",
      fix: "For every significant risk, name the early signal that would show it happening, and who is watching for it.",
    },
  ],

  bestPractices: [
    "Keep risks, issues, assumptions and dependencies as separate lists.",
    "Write every risk as cause, event and consequence.",
    "Pull assumptions systematically out of the requirements.",
    "Name the one that would sink it and check it in the first fortnight.",
    "Rate how bad, how likely and how quickly you would notice.",
    "Attach an early warning signal to every significant risk.",
    "Give every entry to somebody with authority to act.",
    "Make plans into actions with dates, never monitoring.",
    "Accept risks openly and in writing where that is the decision.",
    "Confirm dependencies with the other party rather than assuming.",
    "Ask what would have to happen for this to fail, before the design is fixed.",
    "State awkward risks as conditions rather than about people.",
    "Close entries with reasons and report what moved.",
  ],

  proTips: [
    "The most productive question in this whole area is what has to be true for this to work, asked of every requirement in turn. It is mechanical, it takes an afternoon, and it consistently finds something that has already passed two rounds of review, because reviewers check whether requirements are clear rather than whether the world they assume actually exists.",
    "Ask people privately what worries them about the project. The answers one to one are different from the ones in a meeting, and the gap between them is a map of what cannot be said in the room. Where several people privately raise the same thing, that is your biggest risk whatever the list says.",
    "For every risk you write down, write the sentence you would want to point at in six months if it happens. It focuses the entry on what you actually need somebody to decide now, and it removes the ones you were recording defensively rather than usefully. If the sentence exists only to prove you raised it, you have written a memo rather than a risk.",
    "Watch for the risk everybody mentions casually and nobody has written down. There is usually exactly one on any project, it gets discussed in corridors, and its absence from the list is the most informative thing about the list.",
  ],

  businessApplications: [
    "Any project meeting, where the analyst's contribution is the mechanism rather than the process.",
    "Business cases, where the assumption that matters most and how you will check it belong in the document.",
    "Early analysis phases, where finding and checking the one that would sink it is most of the value.",
    "Choosing a supplier, where whether they stay viable and how hard it is to leave are the risks least often written down.",
    "Responding to legislation, where the assumption about what the regulator will accept is usually the one that matters.",
    "Planning a changeover, where how quickly you would notice matters more than how likely it is.",
  ],

  checklist: [
    "Risks, issues, assumptions and dependencies kept as separate lists.",
    "Every risk written as cause, event and consequence.",
    "Assumptions pulled out of every requirement.",
    "The one that would sink it named and checked early.",
    "How bad, how likely and how quickly noticed all rated.",
    "Early warning signal named for every significant risk.",
    "An owner named who can actually act.",
    "Plans written as actions with dates.",
    "Accepted risks written down with a sponsor's name.",
    "Dependencies confirmed with the other party.",
    "The what-would-sink-it question asked before the design was fixed.",
    "Awkward risks stated as conditions.",
    "Entries closed with reasons and reporting shows what moved.",
  ],

  faqs: [
    {
      q: "Is this not the project manager's job?",
      a: "The process is. What a BA adds is the mechanism: seeing how a risk would actually play out, and finding the assumptions buried in the requirements. Those two are why a good BA improves a list a good project manager was already keeping.",
    },
    {
      q: "How many risks should be on a list?",
      a: "Few enough that people read them. Ten to fifteen active entries works for most projects. Thirty means nobody is reading any of them, including the three that matter.",
    },
    {
      q: "What do I do about a risk nobody wants to write down?",
      a: "State it as a condition rather than about a person: whether we keep the same sponsor, whether the supplier stays viable, how two teams with different bosses coordinate. Describing the mechanism honestly without implying criticism usually makes it acceptable.",
    },
    {
      q: "How do I check an assumption cheaply?",
      a: "Look at the data, ask the person directly, find out what happened last time, or run something small. Most assumptions can be checked in days rather than weeks, and the temptation to design an elaborate check is usually a way of putting off an uncomfortable answer.",
    },
    {
      q: "When does a risk become an issue?",
      a: "When it has happened. At that point it stops needing prevention and starts needing resolving, and it should move lists. Leaving things that have already happened on the risk list is how a list becomes fiction.",
    },
    {
      q: "Should I write down risks I cannot do anything about?",
      a: "Yes, once, with an explicit acceptance and a sponsor's name against it. Writing it down and accepting it is a decision. Writing it down and monitoring it forever is a way of appearing to manage something nobody intends to act on.",
    },
  ],

  tools: [
    { name: "Four separate lists", what: "Risks, issues, assumptions, dependencies. Each needs different handling and one combined list guarantees they all get the same.", cost: "Free" },
    { name: "A cause, event, consequence template", what: "The three-part shape that makes a risk actionable. Anything that cannot be written this way is not a risk.", cost: "Free" },
    { name: "A what-has-to-be-true sweep", what: "One sentence per requirement about what the world must look like for it to work. An afternoon, and it always finds something.", cost: "Free" },
    { name: "The written failure question", what: "Twenty minutes inside an existing meeting. Surfaces the risks people will not raise when asked directly.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: Universal Credit, early progress", kind: "Docs", note: "Primary source, September 2013. Read for the finding that a high-risk approach was taken with nothing adequate to tell them whether it was working.", url: "https://www.nao.org.uk/reports/universal-credit-early-progress/" },
  ],

  internalLinks: [
    { slug: "impact-assessment-before-a-change", anchor: "the things you find that become risks", context: "Input" },
    { slug: "running-a-discovery-phase", anchor: "checking the one that would sink it, early", context: "Discovery" },
    { slug: "delivering-change-into-a-business", anchor: "the risks that pile up at changeover", context: "Delivery" },
  ],

  relatedGuides: ["impact-assessment-before-a-change", "running-a-discovery-phase", "delivering-change-into-a-business"],

  conclusion: [
    "Take twenty requirements from your current project and write, for each, one sentence saying what has to be true in the world for it to work. Mark the ones nobody has checked. That afternoon will produce more useful risk material than any review meeting you could attend instead.",
  ],
};

export default guide;
