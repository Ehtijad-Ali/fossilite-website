import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "risk-assumptions-and-issues",
  seoTitle: "Risks, Assumptions and Issues: The Analyst's Version",
  metaDescription:
    "Writing risks that describe a mechanism, surfacing the assumptions holding a project up, and running a log people act on rather than review.",
  title: "Risks, Assumptions and Issues",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Most risk registers are theatre. They contain a dozen entries phrased as categories rather than events, each rated amber, each with a mitigation that says monitor closely, and each reviewed fortnightly by people who have stopped reading them. They exist so that a governance process can be satisfied, and they have never caused anybody to do anything.",
    "The useful version is different in one specific way: every entry describes a mechanism. Not resource risk but if the two people who understand the pricing rules are both allocated to the migration in March, requirements for phase two will not be ready and the June date fails. You can act on the second and you cannot act on the first, which is the whole difference.",
    "This guide is the analyst's contribution to this area, which is distinctive. Project managers own the process. What a BA brings is the ability to see the mechanism, to notice the assumptions holding the plan up that nobody has stated, and to convert a vague unease into something specific enough that somebody can be given it.",
  ],

  whyItMatters: [
    "Assumptions are where projects actually fail. Not the risks people listed, but the things everybody took for granted so completely that nobody thought to write them down: that the data exists, that the other team has capacity, that the regulator will accept the approach, that the users will adopt it.",
    "The BA is unusually well placed to find these, because the assumption is usually embedded in a requirement. Every requirement that depends on a field being populated, a team being available or a rule being stable is an assumption with a specification wrapped around it.",
    "And the cost curve is steep. An assumption tested in week two costs a query. The same assumption discovered to be false in month five costs a redesign, and in acceptance testing it costs the date.",
  ],

  coreConcepts: [
    {
      term: "The four things and why the distinction matters",
      explain:
        "A risk might happen. An issue has happened. An assumption is something you are proceeding as if true without having confirmed it. A dependency is something you need from somebody else.",
      detail:
        "They need different handling. Risks need mitigation, issues need resolution, assumptions need testing, dependencies need a name and a date. Mixing them into one list means everything gets the same treatment, which is usually a fortnightly review and nothing else.",
    },
    {
      term: "Write risks as a mechanism, in three parts",
      explain:
        "Because of a cause, an event may occur, leading to a consequence. All three parts, every time, with enough specificity that somebody could act on it.",
      detail:
        "The test: could two people read this and agree on what would have to change to remove it? Resource risk fails that test immediately. A named cause, a described event and a stated consequence passes it.",
    },
    {
      term: "Assumptions are the most productive category for an analyst",
      explain:
        "Go through your requirements and ask, for each, what has to be true for this to work. The data exists. Volumes stay similar. The rule does not change. The team has capacity. Each answer is an assumption.",
      detail:
        "Most of these have never been said aloud, because they are obvious to whoever holds them. Writing them down is what converts them into things somebody can check, and roughly a third get corrected the moment somebody reads them.",
    },
    {
      term: "Name the killer assumption and test it first",
      explain:
        "Every project has one assumption that, if false, makes the whole thing pointless rather than merely harder.",
      detail:
        "Identify it in the first fortnight and design the cheapest possible test. This single habit has changed the direction of more projects I have worked on than any other analytical technique.",
    },
    {
      term: "Rate by consequence and detectability, not just likelihood",
      explain:
        "How bad, how likely, and how quickly would anybody notice? The third dimension is routinely omitted and it changes priority substantially.",
      detail:
        "A moderate risk that would go unnoticed for a quarter is frequently worse than a severe one that fails loudly, because by the time it is found the wrong decisions have already been taken on it.",
    },
    {
      term: "Every entry needs an owner who can actually act",
      explain:
        "Not the project manager by default, and not a team. A named individual with the authority to do the thing that would reduce the risk.",
      detail:
        "Where the only person who could act is outside the project, that is itself the finding, and it needs to go to the sponsor rather than sitting in a log with an owner who cannot do anything about it.",
    },
    {
      term: "Mitigations must be actions with dates",
      explain:
        "Monitor closely is not a mitigation. Reduce the probability, reduce the impact, transfer it, or accept it explicitly. Each of those implies a specific action.",
      detail:
        "Accepting a risk deliberately, in writing, with the sponsor's name against it, is a perfectly professional outcome and far better than a mitigation nobody intends to perform.",
    },
    {
      term: "Dependencies need a name, a date and a confirmation",
      explain:
        "What you need, from whom, by when, and evidence that they know. The third part is what makes it a dependency rather than a hope.",
      detail:
        "An unconfirmed dependency is an assumption wearing a plan's clothing. The confirmation does not have to be formal, it has to exist.",
    },
    {
      term: "Run a pre-mortem before the design is fixed",
      explain:
        "Ask the group to imagine it is a year from now and this has failed. What happened? People will say things in that frame that they will not say when asked what could go wrong.",
      detail:
        "It works because it removes the social cost of pessimism. The answers are your risk register, written by the people best placed to know, at the only moment when acting on them is cheap.",
    },
    {
      term: "Watch for the risks nobody will write down",
      explain:
        "The sponsor may leave. The vendor is in financial difficulty. Two of the teams involved do not get on. These are frequently the largest risks and they are politically awkward.",
      detail:
        "Phrase them structurally rather than personally: continuity of sponsorship, supplier viability, coordination across teams with different reporting lines. The mechanism can be stated honestly without naming anybody.",
    },
    {
      term: "Close things, and record why",
      explain:
        "Risks that have passed, assumptions that have been confirmed, issues that have been resolved. A log that only grows stops being read.",
      detail:
        "The closure reason matters more than the closure. An assumption confirmed by whom, on what evidence, on what date, is a piece of analysis. Marked closed with no reason is administration.",
    },
    {
      term: "Report the movement, not the list",
      explain:
        "What is new, what has worsened, what has closed. Nobody reads a list of thirty entries fortnightly, and reproducing it in full trains them not to.",
      detail:
        "Three lines of movement plus the full log available on request gets read. It also makes deterioration visible, which a static list actively conceals.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A high-risk approach without adequate measures to steer by.",
      walkthrough:
        "In September 2013 the UK National Audit Office reported on the early implementation of Universal Credit. It found that £425 million had been spent to that point, with over 70% on IT systems and £34 million of IT already written off. The NAO concluded that the Department had been overly ambitious in both the timetable and the scope of the programme, that the programme suffered from weak management, ineffective control and poor governance, and that the Department lacked adequate progress measures despite adopting a high-risk approach never previously used for a programme of that complexity.",
      result:
        "The phrase worth carrying into any risk practice is the last one. Taking a high-risk approach is sometimes correct. Taking one without the measures that would tell you early whether it is working is what turns a risk into a loss, because there is no point at which anybody can see the mechanism operating in time to change course. A risk register whose entries have no leading indicator attached has the same defect at a smaller scale.",
      source: {
        label: "National Audit Office (5 September 2013). Universal Credit: early progress",
        url: "https://www.nao.org.uk/reports/universal-credit-early-progress/",
      },
    },
    {
      kind: "illustration",
      scenario: "The assumption nobody had said out loud.",
      walkthrough:
        "A BA reviewing a requirements set asks, for each requirement, what has to be true for this to work. One answer is that a customer segment field is populated. Two days of profiling shows it is populated for a small minority of records, and only for customers acquired through one channel during a two-year window.",
      result:
        "The requirement was not implementable as written. It had passed review twice, because reviewers check whether requirements are clear rather than whether the world they assume is real. Asking what has to be true for each requirement is a mechanical exercise that takes an afternoon and it consistently finds at least one of these.",
    },
    {
      kind: "illustration",
      scenario: "A pre-mortem that produced the actual risk.",
      walkthrough:
        "Before design was fixed, a BA asked a project group to imagine that a year had passed and the project had failed, then to write down what happened. Among the usual answers, three people independently wrote versions of the same thing: the operations team never had time to test it properly, so it went live untested and the business rejected it.",
      result:
        "That risk was not on the register, because raising it directly would have implied criticism of a manager's resourcing. The pre-mortem framing removed the social cost of saying it. Tester availability was escalated and secured in writing eight weeks before acceptance testing, which is not a conversation that would have happened otherwise.",
    },
  ],

  learningPath: [
    {
      title: "Extract assumptions from your requirements",
      body: "Go through each requirement and write what has to be true for it to work. Data exists, volumes hold, the rule is stable, the team has capacity, the other system can provide it.",
      effort: "Half a day",
      outcome: "A list of assumptions, most of which have never been stated, roughly a third of which get corrected on first reading.",
    },
    {
      title: "Identify and test the killer assumption",
      body: "The one that would make the project pointless rather than harder. Design the cheapest possible test and run it in the first fortnight.",
      effort: "2-3 days",
      outcome: "Either confidence, or a redirected project while redirection is still cheap.",
    },
    {
      title: "Rewrite the risk register as mechanisms",
      body: "Because of a cause, an event may occur, leading to a consequence. Rewrite every existing entry in that form and delete the ones that cannot be.",
      effort: "2 hours",
      outcome: "A register where each entry suggests its own action, and a shorter list.",
    },
    {
      title: "Add detectability to the rating",
      body: "Alongside consequence and likelihood, record how quickly anybody would notice. Re-sort the register by the combination.",
      effort: "1 hour",
      outcome: "The silent risks moved up the list, which is usually where they belong.",
    },
    {
      title: "Assign owners who can act",
      body: "A named individual with authority to do the mitigating thing. Where nobody in the project qualifies, escalate that fact rather than assigning it anyway.",
      effort: "1 hour plus conversations",
      outcome: "Entries that generate action rather than review.",
    },
    {
      title: "Run a pre-mortem before the design is fixed",
      body: "Ask the group to imagine failure a year out and write what happened, individually and in silence, before anybody speaks. Collect and read them out.",
      effort: "1 hour",
      outcome: "The risks people will not raise directly, at the point where acting on them is cheap.",
    },
    {
      title: "Report movement fortnightly and close things",
      body: "New, worsened, closed. Three lines. Close confirmed assumptions and passed risks with a reason and a date.",
      effort: "20 minutes a fortnight",
      outcome: "A log people read, which is the only kind that works.",
    },
  ],

  exercises: [
    {
      title: "The what-has-to-be-true sweep",
      brief:
        "Take twenty requirements from a current project. For each, write one sentence stating what must be true in the world for it to work. Mark the ones nobody has confirmed.",
      success:
        "You have at least three unconfirmed assumptions and can name the cheapest test for each.",
      time: "2 hours",
    },
    {
      title: "Rewrite a register",
      brief:
        "Take an existing risk register and rewrite every entry as cause, event and consequence. Delete anything that cannot be expressed that way and see how much is left.",
      success:
        "The register is materially shorter and every remaining entry suggests a specific action.",
      time: "1-2 hours",
    },
    {
      title: "Run a written pre-mortem",
      brief:
        "In any project meeting, ask everyone to write down, silently and individually, what they would say had gone wrong if this had failed a year from now. Collect and read them out anonymously.",
      success:
        "At least one risk emerges that is not on the register, and you can see whether several people wrote versions of the same thing.",
      time: "20 minutes within an existing meeting",
    },
  ],

  mistakes: [
    {
      mistake: "Writing risks as categories",
      why: "Resource risk or technical risk cannot be acted on, because no specific thing would remove it. The entry exists to satisfy a process rather than to change anything.",
      fix: "Cause, event, consequence, every time, with enough specificity that two people would agree what would remove it.",
    },
    {
      mistake: "Not separating assumptions from risks",
      why: "Assumptions need testing, not mitigation. Filed as risks they get monitored fortnightly and never checked, which is exactly the wrong treatment.",
      fix: "Keep them as a distinct list, each with a test and a date, and close them as confirmed or corrected.",
    },
    {
      mistake: "Mitigations that say monitor closely",
      why: "It is not an action, so nothing changes, and the entry provides false comfort that the risk is being handled.",
      fix: "Reduce probability, reduce impact, transfer, or accept explicitly with a named sponsor. All four imply something concrete.",
    },
    {
      mistake: "Rating by likelihood and impact only",
      why: "It ignores how long a problem would go unnoticed, and slow-detection problems are frequently the most damaging because decisions get taken on the bad state.",
      fix: "Add a detectability rating and re-sort by the combination.",
    },
    {
      mistake: "Assigning owners who cannot act",
      why: "The entry gets reviewed by somebody with no authority to change anything, which converts risk management into reporting.",
      fix: "Name an individual who can perform the mitigation, and escalate where nobody in the project can.",
    },
    {
      mistake: "Avoiding politically awkward risks",
      why: "Sponsor continuity, supplier viability and inter-team friction are frequently the largest risks, and leaving them off means the register describes only the comfortable subset.",
      fix: "State them structurally rather than personally. The mechanism can be honest without naming anybody.",
    },
    {
      mistake: "A log that only grows",
      why: "Once it is long enough to be tedious, nobody reads it, including the entries that matter. Length destroys attention.",
      fix: "Close passed risks and confirmed assumptions with reasons, and report movement rather than the full list.",
    },
    {
      mistake: "Taking a high-risk approach without leading indicators",
      why: "There is no point at which anybody can tell whether it is working while there is still time to change course.",
      fix: "For every significant risk, name the early signal that would show it materialising, and who is watching for it.",
    },
  ],

  bestPractices: [
    "Keep risks, issues, assumptions and dependencies as separate lists.",
    "Write every risk as cause, event and consequence.",
    "Extract assumptions systematically from the requirements.",
    "Name the killer assumption and test it in the first fortnight.",
    "Rate for consequence, likelihood and detectability.",
    "Attach a leading indicator to every significant risk.",
    "Assign an owner who has authority to act.",
    "Make mitigations actions with dates, never monitoring.",
    "Accept risks explicitly and in writing where that is the decision.",
    "Confirm dependencies with the other party rather than assuming.",
    "Run a pre-mortem before the design is fixed.",
    "State awkward risks structurally rather than personally.",
    "Close entries with reasons and report movement, not the whole list.",
  ],

  proTips: [
    "The most productive question in this whole area is what has to be true for this to work, asked of every requirement in turn. It is mechanical, it takes an afternoon, and it consistently finds something that has passed two rounds of review, because reviewers check whether requirements are clear rather than whether the world they assume actually exists.",
    "Ask people privately what worries them about the project. The answers you get one to one are different from the ones you get in a meeting, and the gap between the two is a map of what cannot be said in the room. Where several people privately raise the same thing, that is your largest risk regardless of what the register says.",
    "For every risk you record, write the sentence you would want to be able to point to in six months if it materialises. It focuses the entry on what you actually need somebody to decide now, and it removes the ones you were recording defensively rather than usefully. If the sentence is only there to prove you raised it, you have written a memo rather than a risk.",
    "Watch for the risk that everybody mentions casually and nobody has written down. In my experience there is usually exactly one of these on any project, it is discussed in corridors, and its absence from the register is the register's most informative feature.",
  ],

  businessApplications: [
    "Any project governance forum, where the analyst's contribution is the mechanism rather than the process.",
    "Business cases, where the critical assumption and its test belong in the document.",
    "Discovery phases, where identifying and testing the killer assumption is most of the value.",
    "Vendor selection, where supplier viability and lock-in are the risks least often written down.",
    "Regulatory programmes, where the assumption about what the regulator will accept is usually the killer one.",
    "Migration and cutover planning, where detectability matters more than likelihood.",
  ],

  checklist: [
    "Risks, issues, assumptions and dependencies held as separate lists.",
    "Every risk written as cause, event and consequence.",
    "Assumptions extracted from every requirement.",
    "Killer assumption identified and tested early.",
    "Consequence, likelihood and detectability rated.",
    "Leading indicator named for every significant risk.",
    "Owner named who can actually act.",
    "Mitigations expressed as actions with dates.",
    "Accepted risks recorded in writing with a sponsor name.",
    "Dependencies confirmed with the other party.",
    "Pre-mortem run before the design was fixed.",
    "Politically awkward risks stated structurally.",
    "Entries closed with reasons; reporting shows movement.",
  ],

  faqs: [
    {
      q: "Is risk management not the project manager's job?",
      a: "The process is. What a BA adds is the mechanism: seeing how a risk would actually operate, and finding the assumptions embedded in the requirements. Those two contributions are why a good BA improves a register that a good project manager was already maintaining.",
    },
    {
      q: "How many risks should a register hold?",
      a: "Few enough that people read them. Ten to fifteen active entries is workable for most projects. Thirty means nobody is reading any of them, including the three that matter.",
    },
    {
      q: "What do I do about a risk nobody wants to record?",
      a: "State it structurally rather than personally: continuity of sponsorship, supplier viability, coordination across reporting lines. The mechanism can be described honestly without implying criticism of an individual, and that phrasing usually makes it acceptable.",
    },
    {
      q: "How do I test an assumption cheaply?",
      a: "Profile the data, ask the person directly, look at what happened last time, or run a small pilot. Most assumptions can be tested in days rather than weeks, and the temptation to design an elaborate test is usually a way of postponing an uncomfortable answer.",
    },
    {
      q: "When should a risk become an issue?",
      a: "When it has happened. At that point it stops needing mitigation and starts needing resolution, and it should move lists. Leaving materialised risks in the risk register is how a log becomes fiction.",
    },
    {
      q: "Should I record risks I cannot do anything about?",
      a: "Yes, once, with an explicit acceptance and a sponsor's name against it. Recording it and accepting it is a decision. Recording it and monitoring it forever is a way of appearing to manage something nobody intends to act on.",
    },
  ],

  tools: [
    { name: "Four separate lists", what: "Risks, issues, assumptions, dependencies. Each needs different handling and one combined log guarantees they all get the same treatment.", cost: "Free" },
    { name: "A cause, event, consequence template", what: "The three-part form that makes a risk actionable. Anything that cannot be written this way is not a risk.", cost: "Free" },
    { name: "A what-has-to-be-true sweep", what: "One sentence per requirement stating what the world must look like for it to work. An afternoon, and it always finds something.", cost: "Free" },
    { name: "A written pre-mortem", what: "Twenty minutes inside an existing meeting. Surfaces the risks people will not raise when asked directly.", cost: "Free" },
  ],

  resources: [
    { title: "NAO: Universal Credit, early progress", kind: "Docs", note: "Primary source, September 2013. Read for the finding that a high-risk approach was taken without adequate measures to tell whether it was working.", url: "https://www.nao.org.uk/reports/universal-credit-early-progress/" },
  ],

  internalLinks: [
    { slug: "impact-assessment-before-a-change", anchor: "the impacts that become risks", context: "Input" },
    { slug: "running-a-discovery-phase", anchor: "testing the killer assumption early", context: "Discovery" },
    { slug: "delivering-change-into-a-business", anchor: "the risks that concentrate at cutover", context: "Delivery" },
  ],

  relatedGuides: ["impact-assessment-before-a-change", "running-a-discovery-phase", "delivering-change-into-a-business"],

  conclusion: [
    "Take twenty requirements from your current project and write, for each, one sentence saying what has to be true in the world for it to work. Mark the ones nobody has confirmed. That afternoon will produce more useful risk material than any register review you could attend instead.",
  ],
};

export default guide;
