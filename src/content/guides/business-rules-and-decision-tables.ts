import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "business-rules-and-decision-tables",
  seoTitle: "Business Rules: Getting the Real Ones Out of People",
  metaDescription:
    "Every business has rules nobody wrote down. How to find them, write them out so two teams stop giving customers different answers, and test them before anyone builds.",
  title: "Business Rules and Decision Tables",
  keywords: [
    "business rules analysis",
    "decision table",
    "business rules documentation",
    "capturing business logic",
    "decision modelling",
    "rules elicitation",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "Every business has one person who actually knows the rules. Not what the policy document says. The real ones: which customers get let off, what the limit used to be before somebody quietly changed it, why one product is handled differently for a reason nobody can remember.",
    "This causes a specific problem. Ask three people to explain the discount policy and you get three answers. All three are given honestly. All three are incomplete. And the bits where they disagree are exactly the cases that turn into customer complaints.",
    "The fix is boring and it works: write the rules out as a grid instead of as sentences. A grid forces you to fill in every square, so the gaps and contradictions become impossible to walk past. This guide is how to get the rules out of people, how to lay them out, and how to check them before anybody builds anything.",
  ],

  whyItMatters: [
    "Rules are where the arguments come from after go-live. Not the screens. Somebody got charged the wrong amount, or was refused something they used to get, or two branches gave the same customer different answers and the customer noticed.",
    "Rules also change more than anything else in a system. If the logic is scattered through nine documents and one person's head, changing it safely is nearly impossible. Getting it into one place is worth doing on its own, whatever else the project delivers.",
    "And doing this work usually finds a real problem. In my experience, more often than not, building the grid turns up a combination nobody had thought about, two rules that contradict each other, or a limit that no longer matches the policy. That finding is often worth more than the document you set out to write.",
  ],

  coreConcepts: [
    {
      term: "A rule is something the business could change tomorrow",
      explain:
        "Orders over a certain value need credit approval. A customer counts as preferred after a year. These are choices the business made, not technical facts. Somebody could change them next week without touching any technology.",
      detail:
        "This matters when you decide where to put the rule. If it changes twice a year and it is buried in code, you have signed up for a change request twice a year forever. Sometimes that is fine. It should be a decision, not an accident.",
    },
    {
      term: "Four kinds of rule, and only one needs a grid",
      explain:
        "Definitions (what counts as an active customer). Limits (you cannot dispatch an order that is on credit hold). Calculations (how the discount is worked out). And decisions (given these conditions, which of these outcomes applies).",
      detail:
        "Only the last kind needs a grid. Definitions belong in a glossary, limits belong next to the step they apply to, calculations need worked examples. Most rules documents are unreadable because all four are jumbled together.",
    },
    {
      term: "Conditions across the top, one row per combination",
      explain:
        "Say three things decide the answer: customer type, order size and destination. List the options for each. Multiply them together and that is how many rows you need. Then fill in every one.",
      detail:
        "It sounds tedious and it takes about ten minutes. The value is entirely in the two or three rows that make the room go quiet, because those are the cases the business has been handling inconsistently without knowing.",
    },
    {
      term: "Write out every combination, including the ones nobody mentions",
      explain:
        "A team told me their shipping rule was simple. Free over a certain amount, otherwise a flat fee. Then I asked about a preferred customer, sending overseas, on a large order. Nobody knew. Two regions had been answering that differently for years and neither had noticed.",
      detail:
        "That is what a gap looks like. It is not theoretical. Those cases turn up every week and get handled by whoever is on duty, which is why the same customer gets different answers depending on who picks up the phone.",
    },
    {
      term: "Two rules that both apply, and say different things",
      explain:
        "This is more common than gaps and much harder to spot in writing. There is a rule about customer tier and a rule about order value. Each reads perfectly sensibly on its own. Then a big order arrives from a small customer and both rules apply, and they disagree.",
      detail:
        "Nobody notices until that order turns up. In a grid it is obvious straight away, because you end up trying to write two different answers in one square.",
    },
    {
      term: "Say which rule wins",
      explain:
        "Where rules can clash on purpose, write down the winner. Compliance beats commercial. The specific rule beats the general one. A signed contract beats the standard price list.",
      detail:
        "When nobody writes this down, each team invents its own answer, and the business quietly behaves differently in different places. This is one of the most common causes of the same customer getting two answers.",
    },
    {
      term: "Every rule needs a source and an owner",
      explain:
        "Where did this come from: a law, a contract, a board decision, or somebody's habit? And who is allowed to change it?",
      detail:
        "This one column does more work than any other. Rules that come from legislation are not up for discussion. Rules where the honest answer is nobody remembers are usually the biggest chance to simplify, and you only find them by asking.",
    },
    {
      term: "Ask what happens to work already in progress",
      explain:
        "Rules change on a date. So ask: when this changes, does it apply to new orders only, everything currently open, or does it go back and re-do the old ones?",
      detail:
        "Three different answers, three very different systems, and nobody ever volunteers this. It is also why old cases need to stay explainable under the rule that applied at the time.",
    },
    {
      term: "Listen for the word except",
      explain:
        "The sentence you are waiting for is: we always do it this way, except when. Everything after except is the actual rule, and it will not be in any policy document.",
      detail:
        "Ask for the last five times the normal rule was not applied. Real cases, with dates. You will find either a genuine rule nobody wrote down, or an inconsistency the business needs to sort out.",
    },
    {
      term: "Decide where the rule should live before anyone builds it",
      explain:
        "Four options: buried in the code, in a settings screen an administrator can edit, in a proper rules tool, or left to a person to judge. That is a business choice about how often it changes and how much damage a mistake does.",
      detail:
        "Easy to change is not automatically better. A rule a branch manager can alter with nobody reviewing it is not really a control any more. Match how easy it is to change to how much it matters.",
    },
    {
      term: "Run twenty real cases through it before anyone builds",
      explain:
        "Take twenty orders, claims or applications from last quarter. Work out by hand what your grid says should have happened. Compare that against what actually happened.",
      detail:
        "This is the best hour you will spend on the whole thing. Every mismatch is either a rule you got wrong or a case the business handled inconsistently. You want to find both now, not after go-live.",
    },
    {
      term: "Some rules should stay with a person",
      explain:
        "Where the real rule depends on things the system cannot see, the honest answer is that a person decides. Then your job is to say what information they need in front of them.",
      detail:
        "Pretending judgement is a rule gives you a system that is confidently wrong in exactly the cases that matter most, and staff quietly learn to work around it.",
    },
  ],

  codeExamples: [
    {
      title: "What a rules grid actually looks like",
      language: "markdown",
      intro:
        "Shipping charges for a business customer. Three things decide the answer, giving twelve combinations, and all twelve are written out. What this replaced was four paragraphs of policy text that two regions had been reading differently for years.",
      code: `| #  | Customer type | Order value    | Going where | Shipping charge        |
|----|---------------|----------------|-------------|------------------------|
| 1  | Standard      | Under 250      | Domestic    | 9.95                   |
| 2  | Standard      | Under 250      | Overseas    | Quoted each time       |
| 3  | Standard      | 250 to 999.99  | Domestic    | 4.95                   |
| 4  | Standard      | 250 to 999.99  | Overseas    | Quoted each time       |
| 5  | Standard      | 1000 or more   | Domestic    | Free                   |
| 6  | Standard      | 1000 or more   | Overseas    | Quoted, half price     |
| 7  | Preferred     | Under 250      | Domestic    | 4.95                   |
| 8  | Preferred     | Under 250      | Overseas    | Quoted, half price     |
| 9  | Preferred     | 250 to 999.99  | Domestic    | Free                   |
| 10 | Preferred     | 250 to 999.99  | Overseas    | Quoted, half price     |
| 11 | Preferred     | 1000 or more   | Domestic    | Free                   |
| 12 | Preferred     | 1000 or more   | Overseas    | Free                   |

What the words mean
  Customer type:  Standard or Preferred. Contract customers are not covered
                  here at all, see CR-114.
  Order value:    Goods only. Not VAT, and not after any discount.
  Going where:    Domestic means mainland addresses. Islands and offshore
                  postcodes count as Overseas (see rule SH-07).

Which rule wins
  A shipping term in a signed contract beats every row above.
  A promotional free-shipping code beats the table, and the reason gets
  recorded against the order.

Applies from
  1 September 2026. Orders placed before that date keep the charge worked
  out at the time, even if somebody amends them later.

Who owns this
  Head of Commercial. Came from the pricing committee, 14 July 2026.`,
      note:
        "Row 6 is the one that caused the argument. Under the old policy text, a big standard-tier order going overseas was treated as free shipping by one region and fully charged by the other, because the paragraph about large orders never said whether it covered overseas. Twelve rows made a two-year inconsistency obvious in about a minute.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Three managers, three versions of the same policy.",
      walkthrough:
        "The problem: customers were complaining that late fees got waived for some people and not others. What was happening: the BA asked three regional managers to write down the criteria, separately. The first described a rule based on how long the customer had been with them. The second described the same rule plus a bit of leeway for first offences. The third had never heard of the tenure rule at all and went on whether the customer had an open complaint. All three thought they were describing company policy.",
      result:
        "What changed: instead of picking a winner, the BA put all three versions into one grid and marked the squares where they disagreed. There were four. Those four went to the policy owner as a single question, which took twenty minutes to answer because it was specific. The general pattern is worth remembering: people rarely disagree about the whole rule, only about a handful of combinations, and a grid finds exactly which ones.",
    },
    {
      kind: "illustration",
      scenario: "Twenty real orders, checked by hand.",
      walkthrough:
        "The problem: a pricing rewrite was about to be handed to developers and nobody had checked it against reality. What was happening: the BA took twenty completed orders from the previous quarter and worked out what the new grid would have charged for each. Seventeen matched. Two did not, and turned out to be mistakes in the grid, fixed in ten minutes. The third was a manual override a sales manager had applied for a reason nobody had written down.",
      result:
        "What changed: that third case became a proper rule with an owner and an approval step. If it had been missed, the sales manager would have found out after go-live that he could no longer do part of his job. Checking real cases against the rules before anyone builds costs an hour and is about the closest thing to a guarantee this job offers.",
    },
    {
      kind: "illustration",
      scenario: "The limit nobody could explain.",
      walkthrough:
        "The problem: a claims team was sending a lot of work to senior assessors and the queue was slow. What was happening: anything above a certain value went to a senior assessor. The BA asked where the figure came from. Nobody knew. It was not in the policy manual, the authority schedule used a different number, and the longest-serving assessor thought it had been set when the team was half its current size. It had never been checked against how many claims it caught or whether those claims turned out to need a senior eye.",
      result:
        "What changed: the real finding was not the number itself. It was that a rule affecting a big chunk of the workload had no owner and no basis. Adding a source and owner column to a rules list looks like paperwork and it is the fastest way to find rules that people are following rather than choosing. Ask it about every rule and expect at least one orphan.",
    },
  ],

  learningPath: [
    {
      title: "Find every point where a decision gets made",
      body: "Walk through the process and mark every place somebody has to choose. Each one is run by rules and each is a candidate for a grid. Note who decides today and what they go on.",
      effort: "2 hours",
      outcome: "A shortlist of the grids worth building, in order of how many cases they affect.",
    },
    {
      title: "Ask more than one person, separately",
      body: "Get each person to write the rule down without conferring. Then ask each of them for the last five times the rule was not applied. Do not merge the answers as you go: keep them apart so you can see where they differ.",
      effort: "1 day",
      outcome: "Several versions of what everyone assumed was one rule, which is what you actually have.",
    },
    {
      title: "Build the grid and fill in every square",
      body: "Conditions across the top, one row per combination. Multiply the options together and check your row count matches. Where people disagree, mark the square rather than deciding yourself.",
      effort: "Half a day",
      outcome: "The gaps and clashes visible as empty or contested squares.",
    },
    {
      title: "Take just the disputed squares to the owner",
      body: "Not the whole grid. Six specific questions. A specific question gets answered in a meeting. Please review this policy does not.",
      effort: "1 hour",
      outcome: "Decisions with a name and a date against them.",
    },
    {
      title: "Add source, owner, precedence and start date",
      body: "Where each rule came from, who can change it, which rule wins in a clash, and what happens to work already in progress when it changes.",
      effort: "2 hours",
      outcome: "Something a person who was in none of your meetings could pick up and maintain.",
    },
    {
      title: "Test it against twenty real cases",
      body: "Work out by hand what the grid says should have happened, and compare against what did happen. Chase down every mismatch.",
      effort: "Half a day",
      outcome: "Confidence based on evidence, plus a list of things the business has been doing inconsistently.",
    },
  ],

  exercises: [
    {
      title: "Take a rule everyone calls simple",
      brief:
        "Pick a rule in your organisation that everybody thinks is obvious. Write down what decides the answer and the options for each. Multiply them together. Write a row for every combination and mark the ones you are not sure about.",
      success:
        "You have at least one uncertain row in a rule everybody described as obvious. That is the normal result, not a sign you picked badly.",
      time: "1 hour",
    },
    {
      title: "Ask three people the same question",
      brief:
        "Find three people who apply the same rule. Ask each to write the criteria down without talking to the others. Put the three answers side by side and mark every combination where they differ.",
      success:
        "You can say exactly which situations get handled differently depending on who deals with them, and take that short list to whoever owns the policy.",
      time: "2 hours",
    },
    {
      title: "Where did this come from?",
      brief:
        "Take ten rules from any document or system. For each one, find out where it came from and who is allowed to change it. Note the ones where the answer is nobody knows.",
      success:
        "You find at least one orphan rule, and you can say what share of ten had a traceable source.",
      time: "2-3 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Writing rules as paragraphs",
      why: "Sentences hide both gaps and clashes. Every individual sentence reads fine. The case that satisfies two contradictory sentences is invisible until it turns up for real.",
      fix: "Use a grid whenever more than one thing decides the answer. Keep sentences for the definitions around it.",
    },
    {
      mistake: "Only writing down the cases people mentioned",
      why: "That is just paragraphs in a table. The missing rows are exactly the cases nobody thought of, which is why they are missing.",
      fix: "Multiply the options, count your rows, and account for every combination. Group them where a set genuinely shares an answer.",
    },
    {
      mistake: "Blending everyone's answers into one version",
      why: "You end up with a consensus rule that nobody actually follows, and you have destroyed the evidence that people are doing it differently, which was the most valuable thing you found.",
      fix: "Keep each person's version separate until you have documented the differences. Then take the differences to the owner.",
    },
    {
      mistake: "Not saying which rule wins",
      why: "When two rules can both apply and nobody has said which one takes priority, each team makes its own call. The business behaves inconsistently and nobody realises.",
      fix: "Write down the winner for every clash the grid allows, and record who decided.",
    },
    {
      mistake: "Forgetting work that is already in progress",
      why: "The rule changes and nobody has said whether yesterday's order is priced the old way or the new way. That turns into customer complaints and support calls immediately.",
      fix: "Every rule gets a start date and a stated answer for anything already open when it changes.",
    },
    {
      mistake: "Turning judgement into a rule",
      why: "Where the real decision depends on things the system cannot see, forcing it into logic gives you a system that is confidently wrong in the cases that matter most. Staff then work around it.",
      fix: "Say plainly that a person decides, and specify what they need to see in order to decide well.",
    },
    {
      mistake: "Building the grid and never testing it",
      why: "An untested grid is a guess. Any mistakes in it get built into the system and only show up when a customer complains.",
      fix: "Run twenty real cases through it by hand before it goes anywhere near a developer.",
    },
  ],

  bestPractices: [
    "Keep definitions, limits, calculations and decisions apart.",
    "Use a grid whenever more than one thing decides the answer.",
    "Multiply the options and write out every combination.",
    "Ask several people separately and keep their answers apart.",
    "Mark disputed squares instead of deciding yourself.",
    "Record where each rule came from and who can change it.",
    "Say which rule wins when two of them clash.",
    "Give every rule a start date and an answer for work in progress.",
    "Ask for the last five times the normal rule was not applied.",
    "Decide on purpose whether the rule lives in code, in settings, or with a person.",
    "Run twenty real cases through the grid before handover.",
  ],

  proTips: [
    "The most useful question in this whole area is what happens when two of these apply at once. People describe rules one at a time because that is how they think about them, and the money is always in the overlap. Ask it about every pair that could realistically happen together.",
    "When a limit has no explanation, ask what happens just above and just below it, then ask how many cases fall either side. Limits set years ago against a much smaller business are extremely common, and the numbers usually make the argument for changing it without you having to.",
    "Show the grid to whoever handles the complaints, not just whoever owns the policy. Complaints staff know exactly which combinations cause arguments, and those are the rows you most need to get right. They are also a group nobody ever invites, so they tend to give you plenty of time.",
    "Build the grid before you write the requirement that refers to it. Write the sentence first and you will unconsciously smooth the logic to make it read nicely, and then the grid just copies your smoothed version instead of the real rule.",
  ],

  businessApplications: [
    "Pricing and discounts, where different regions doing it differently is the normal state and nobody has measured it.",
    "Deciding who qualifies for something, where being fair and being able to explain it both depend on the rule being written down.",
    "Credit, risk and fraud routing, where limits drift and rarely get reviewed against what actually happened.",
    "Anything driven by legislation, where the rule comes from outside and the work is agreeing what it means here.",
    "Claims and case handling, where who is allowed to approve what is often undocumented.",
    "Replacing an old system, where the logic buried in it has to be dug out before it can be rebuilt.",
  ],

  checklist: [
    "Every decision point in the process identified.",
    "Rules collected from more than one person, separately.",
    "Conditions and their options listed.",
    "Combinations counted and every one accounted for.",
    "Clashes and gaps marked rather than quietly resolved.",
    "A stated winner for every possible clash.",
    "Source and owner recorded for every rule.",
    "Start date agreed, plus what happens to work in progress.",
    "A decision made about where each rule lives.",
    "Rules that need a person's judgement identified as such.",
    "Twenty real cases tested against the grid.",
    "Disputed rows closed with a dated decision from the owner.",
  ],

  faqs: [
    {
      q: "When is a grid worth the effort?",
      a: "Whenever two or more things combine to decide the answer, or whenever two people have described the same rule differently. Below that, a sentence is fine. The moment you catch yourself writing unless or except, reach for a grid.",
    },
    {
      q: "What if there are too many combinations to write out?",
      a: "Group them where a set of options genuinely shares the same answer, and split the grid by whichever condition matters most. If you still have hundreds of real combinations, that is a finding about the policy rather than a problem with your paperwork.",
    },
    {
      q: "Should business rules be easy to change?",
      a: "Match how easy it is to change to how often it changes and how much damage a mistake causes. A rule that changes twice a year and affects money belongs in a settings screen with an approval step. Easy to change with nobody checking is a control you no longer have.",
    },
    {
      q: "Who owns a business rule?",
      a: "Whoever can change it without asking anybody else. If nobody can answer that, you have found an orphan rule, and that is worth raising on its own regardless of what you were originally asked to do.",
    },
    {
      q: "What if a rule has always been applied inconsistently?",
      a: "Write down the versions, count how many cases each affects, and give the decision to the owner. Do not pick for them and do not split the difference. The inconsistency is a business risk and it is theirs.",
    },
    {
      q: "Do we need a rules engine?",
      a: "Rarely, and later than the people selling them suggest. Most organisations get most of the benefit from one maintained grid and a settings screen. Consider a proper tool when rules change weekly, there are a lot of them, and business staff genuinely own them.",
    },
  ],

  tools: [
    { name: "A spreadsheet", what: "Conditions across, combinations down. Enough for almost all of this work, and business owners can actually read it.", cost: "Varies" },
    { name: "A rules list", what: "Rule, where it came from, who owns it, start date, where it is built. The document that outlives the project.", cost: "Free" },
    { name: "Twenty real cases", what: "Your test set. Takes an hour to pull together and finds things nothing else will.", cost: "Free" },
    { name: "DMN notation", what: "A standard format for decision grids, worth it when a tool will run the model or an integrator needs precision. Overkill for one policy.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "where these grids get referred to", context: "Specification" },
    { slug: "asking-questions-that-get-answers", anchor: "getting the real rule out of people", context: "Elicitation" },
    { slug: "data-requirements-for-analysts", anchor: "the data these rules depend on", context: "Data" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "asking-questions-that-get-answers", "data-requirements-for-analysts"],

  conclusion: [
    "Pick one rule everybody in your business calls obvious, ask three people who apply it to write the criteria down separately, and lay the answers side by side. You will have found a live inconsistency before lunch, and it will be more useful than anything else on your list today.",
  ],
};

export default guide;
