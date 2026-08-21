import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "working-with-a-vendor-implementation",
  seoTitle: "Your Job When Somebody Else Is Building It",
  metaDescription:
    "Reading a contract for what it does not say, the configure-or-customise decision, keeping your own record of decisions, and being able to run the thing afterwards.",
  title: "When Somebody Else Is Building It",
  keywords: [
    "vendor implementation",
    "client side business analyst",
    "statement of work",
    "software implementation partner",
    "configuration vs customisation",
    "vendor management ba",
  ],
  category: "leadership",
  level: "Advanced",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "When a supplier puts a product in for you, the analysis does not go away. It changes shape. You stop specifying how something should be built and start doing something harder: working out what your business actually needs, deciding which of those needs the product will meet as it stands, and holding the line on the small number that genuinely justify changing it.",
    "The common failure is treating the supplier as the analyst. They know their product extremely well and your business not at all, and they have a commercial reason to read anything vague in the direction of less work. Neither of those is dishonest. It means that if nobody on your side owns the requirement, the requirement becomes whatever the product does.",
    "This guide is your job in that situation. What to have ready before the contract, how to read what they send you for what it does not say, the decision about whether to change the product or change your process, how to run the sessions they will book, and how to make sure you can run the thing after they leave.",
  ],

  whyItMatters: [
    "The commercial arrangement creates the risk. On a fixed price their margin improves when scope is read narrowly. On a day rate it improves when scope grows. Neither is wrong and both mean somebody on your side has to be watching the requirement rather than the invoice.",
    "There is also a gap in knowledge that never fully closes. They know the product, you know the business, and every misunderstanding lives in the gap. You are the only person in the room whose job is to hold both halves.",
    "And the consequences last for years. Changes to the product taken lightly become upgrade costs forever. Knowledge left entirely with the supplier becomes a dependency you pay for every time anything changes.",
  ],

  coreConcepts: [
    {
      term: "Do the analysis before you buy, not after",
      explain:
        "The needs, what people have to be able to do, and the awkward cases all have to exist before a supplier is chosen, or the choice is a comparison of sales material and the project starts with the supplier learning your business at your expense.",
      detail:
        "The minimum you need before signing anything: a set of business needs, ten real cases including the two hardest, and the practical requirements about speed, volume and security. Those three carry an entire implementation.",
    },
    {
      term: "Read what they send you for the boundaries",
      explain:
        "What is included, what is explicitly excluded, what they are assuming about your side, how many workshops, how many test environments, how many rounds of testing, and what happens when a number gets exceeded.",
      detail:
        "The assumptions section is the most important and the least read. It typically contains commitments you have not noticed making: that data will be provided in a certain state, that decisions will come back within a stated period, that your people will be available.",
    },
    {
      term: "Your delays are chargeable, and they are the usual ones",
      explain:
        "Most contracts let them recover costs when the client causes delay. Slow decisions, people not being available and late data are the usual causes.",
      detail:
        "This is one of the strongest arguments you have for getting stakeholder time and a fast decision route agreed at the start. Frame it commercially rather than as a request for cooperation and it gets taken much more seriously.",
    },
    {
      term: "Four options for every gap",
      explain:
        "Configure it. Change the product. Change your process. Or accept it. The default should be changing your process, and anything else should be argued for.",
      detail:
        "Every change to the product costs at the start and again at every upgrade, forever. The honest question to the business is which of our practices are genuinely distinctive and which are simply what we happen to do, and the second group is nearly always bigger than people expect.",
    },
    {
      term: "Checking the fit is a business exercise, not a demonstration",
      explain:
        "Run your real cases through the product and record what happens. Where it does not fit, record whether that matters and why, before discussing solutions.",
      detail:
        "Suppliers will run this from their own process model. Insist on running it from your cases, including the awkward ones, because the standard path always fits and that is not where the risk is.",
    },
    {
      term: "The supplier's consultant is not your analyst",
      explain:
        "They are skilled, they usually want a good outcome, and they have a commercial position, a deadline and no long-term stake in your business.",
      detail:
        "Use them for what they are excellent at: what the product can do, what other clients did, what usually goes wrong. Do not hand them the question of what your business needs, because they cannot answer it and will get blamed later for a decision that was never theirs.",
    },
    {
      term: "Keep your own record of decisions",
      explain:
        "Configuration decisions pile up at a rate of dozens per session. Keep your own dated log with the reasoning and who decided.",
      detail:
        "When the supplier leaves, their internal record leaves with them. Two years later somebody will ask why a field is set up a particular way, and the answer needs to be in a document your business owns.",
    },
    {
      term: "Make sure the acceptance test is yours",
      explain:
        "If acceptance is defined as the product working as designed, you have agreed to accept it whether or not your business can operate on it.",
      detail:
        "It should be defined against your real cases and your practical requirements. Negotiate this before signature, because afterwards it is a change and it will be priced.",
    },
    {
      term: "Watch for work quietly moving to your side",
      explain:
        "Cleaning the data, testing, training material, connections at your end, and making decisions all quietly become your responsibility, and they take real effort.",
      detail:
        "Add up your side's effort explicitly during planning. It is routinely underestimated, it is not in their price, and it is the most common reason internal timelines slip on these projects.",
    },
    {
      term: "Knowledge transfer has to be something you test",
      explain:
        "Not a document handed over at the end. A named person on your side who can do each administrative task, demonstrated before the final payment.",
      detail:
        "Otherwise you have bought a system and a permanent dependency. The test is simple: can your administrator make a configuration change unaided while the supplier watches?",
    },
    {
      term: "Escalate commercially when it is warranted",
      explain:
        "Day-to-day problems get solved with the implementation team. Structural ones, like a requirement being misunderstood repeatedly, need to reach the account relationship.",
      detail:
        "Do it early and factually rather than late and emotionally. An account manager would much rather hear about a pattern in month three than receive a complaint in month eight.",
    },
    {
      term: "Plan for the relationship after go-live",
      explain:
        "Support arrangements, who can raise something, response commitments, what a change costs, how often upgrades come and what upgrades do to any changes you made.",
      detail:
        "The implementation is a fraction of the total relationship. These terms matter far more over five years than the implementation price does, and they are easiest to negotiate before you have committed.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The gap that should have been a process change.",
      walkthrough:
        "The problem: during the fit check, the product could not support a two-stage approval the business currently performs, and the supplier quoted for changing it. What was happening: before accepting, the BA asked where the two-stage approval came from and how often the second stage changes the outcome. It had been introduced after an incident several years earlier, and checking the log showed the second approver had not refused anything in the period examined.",
      result:
        "What changed: they changed the process instead, with the agreement of whoever owned that check and a written decision. The product change would have cost at the start and at every upgrade for as long as the system lived. Asking where a requirement came from is the highest-value thing a client-side BA does during a fit check.",
    },
    {
      kind: "illustration",
      scenario: "Acceptance defined the supplier's way.",
      walkthrough:
        "The problem: the contract defined acceptance as the configured solution operating in accordance with the design document. What was happening: that design document had been written by the supplier from workshops. At testing, the business found that a high-volume kind of case needed several more steps than the process it replaced, and was told that this matched the design and was therefore acceptable.",
      result:
        "What changed: nothing, at that point. The argument was contractually correct and operationally useless. Acceptance has to be defined against your own real cases and your practical requirements, and that has to be negotiated before signature, because afterwards it is a change with a price attached.",
    },
    {
      kind: "illustration",
      scenario: "The work on our side that nobody had counted.",
      walkthrough:
        "The problem: a project plan was built around the supplier's timeline. What was happening: three months in, the internal team was behind, because cleaning the data, preparing test cases, writing training material for local procedures, and the sheer number of configuration decisions required had eaten far more capacity than anybody had estimated. The supplier was on schedule and started charging for delay.",
      result:
        "What changed: they had to buy in extra internal resource at short notice. The supplier's plan covered the supplier's work. The work on our side was real, substantial and absent from every estimate. Adding up internal effort by role during planning, and treating decision-making capacity as a resource with a limit, is the practical protection and it takes an afternoon.",
    },
  ],

  learningPath: [
    {
      title: "Do the analysis before you buy",
      body: "Business needs, what people have to be able to do, ten real cases including the two hardest, and the practical requirements. These become the criteria you choose on and later the acceptance test.",
      effort: "2-4 weeks",
      outcome: "A choice based on your business rather than on demonstrations.",
    },
    {
      title: "Read the contract for the boundaries and assumptions",
      body: "What is in, what is out, what they assume about your side, how many workshops, environments and test rounds, and what happens when those get exceeded.",
      effort: "1 day",
      outcome: "Knowing what you are committing to, particularly the things in the assumptions section.",
    },
    {
      title: "Negotiate the acceptance test before signature",
      body: "Acceptance defined against your real cases and your practical requirements, not against their design document.",
      effort: "Part of contract negotiation",
      outcome: "The single most valuable protection available on one of these.",
    },
    {
      title: "Add up your side's effort by role",
      body: "Cleaning data, making decisions, testing, training, writing local procedures, connections at your end. Estimate it in days by role and get it resourced.",
      effort: "1 day",
      outcome: "A plan that reflects the work your business actually has to do.",
    },
    {
      title: "Check the fit using your own cases",
      body: "Your real cases, including the awkward ones, run through the product. Record what happens and whether the gap matters before discussing any solution.",
      effort: "1-2 weeks",
      outcome: "Gaps found where the risk is rather than on the demonstration path.",
    },
    {
      title: "Apply the four options to every gap",
      body: "Configure, change the product, change the process, accept. Default to changing the process and require an argument for changing the product, with its lifetime cost stated.",
      effort: "Ongoing through design",
      outcome: "A list of product changes short enough to survive upgrades.",
    },
    {
      title: "Keep your own decision log",
      body: "Every configuration decision, dated, with the reasoning and who decided, in a document your business controls rather than theirs.",
      effort: "Minutes per decision",
      outcome: "The ability to answer why in two years, after the supplier has gone.",
    },
    {
      title: "Make knowledge transfer something you test",
      body: "A named person on your side doing each administrative task unaided, demonstrated before the final payment rather than documented at the end.",
      effort: "1-2 weeks near the end",
      outcome: "A system you can run rather than a permanent dependency.",
    },
  ],

  exercises: [
    {
      title: "Read the assumptions section",
      brief:
        "Take any supplier contract your business has signed. Read only the assumptions and exclusions. List every commitment it puts on your side and check whether anybody internally has been told.",
      success:
        "You find at least one obligation on your side, with a timescale attached, that nobody internally is currently tracking.",
      time: "1 hour",
    },
    {
      title: "Ask where one requirement came from",
      brief:
        "Take a gap between a product and your process where a product change is being proposed. Find out where the requirement came from, when it was introduced, and how often it changes an outcome. Check the last one against data.",
      success:
        "You can say whether it is genuinely distinctive or simply what your business happens to do, with evidence either way.",
      time: "Half a day",
    },
    {
      title: "Add up your side's effort",
      brief:
        "For a supplier project in your business, estimate the internal effort in days by role: cleaning data, decisions, testing, training, writing procedures. Compare it against what has been resourced.",
      success:
        "You have a number, and it is materially bigger than what the plan currently allows for.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Letting the supplier do the analysis",
      why: "They know the product and not your business, and they have a commercial position. Anything vague gets resolved towards the product, and nobody on your side is holding the requirement.",
      fix: "Own the needs, the cases and the acceptance test. Use the supplier for what the product can do and what usually goes wrong.",
    },
    {
      mistake: "Not reading the assumptions section",
      why: "It contains obligations on your side with timescales attached, and missing them is what triggers chargeable delay.",
      fix: "Read it first, pull every client obligation into your own plan, and tell the people who have to meet them.",
    },
    {
      mistake: "Accepting an acceptance test written by the supplier",
      why: "Acceptance defined as matching their design document means you have agreed to accept whatever they designed, whether or not your business can operate.",
      fix: "Define it against your real cases and practical requirements, before signature.",
    },
    {
      mistake: "Treating a product change as a technical choice",
      why: "Every deviation costs at the start and at every upgrade forever, and the person approving it usually will not be there to pay that cost.",
      fix: "Present the lifetime cost, default to changing the process, and require a business argument for each exception.",
    },
    {
      mistake: "Checking the fit on the standard path",
      why: "The product always fits the standard path. The gaps that matter are in the awkward cases, which is exactly what the demonstration will not cover.",
      fix: "Insist on running your own real cases, including the two hardest, and record what happens to each.",
    },
    {
      mistake: "Underestimating the work on your side",
      why: "Cleaning data, decisions, testing and training are real work absent from their price, and they are the usual reason internal timelines slip.",
      fix: "Add up internal effort by role during planning and treat decision-making capacity as something with a limit.",
    },
    {
      mistake: "Letting the decision log live in the supplier's document",
      why: "It leaves with them, and two years later nobody can say why the system is set up the way it is.",
      fix: "Keep your own dated log with reasoning and names, in a system your business controls.",
    },
    {
      mistake: "Knowledge transfer as a document",
      why: "A handover pack is not a capability. You end up depending on the supplier for every change, at their rates, indefinitely.",
      fix: "Make it something you test: your administrator does each task unaided before the final payment.",
    },
  ],

  bestPractices: [
    "Finish the needs and case analysis before buying anything.",
    "Read the contract for exclusions and assumptions first.",
    "Pull every obligation on your side into your own plan with names against it.",
    "Negotiate the acceptance test against your own cases before signature.",
    "Add up your side's effort by role and resource it explicitly.",
    "Check the fit using your own real cases, including the hardest.",
    "Apply configure, change the product, change the process or accept, to every gap.",
    "Default to changing the process and require an argument for anything else.",
    "State the lifetime upgrade cost of every proposed product change.",
    "Keep your own dated configuration decision log.",
    "Treat decision-making capacity as a resource with a limit.",
    "Escalate structural problems commercially and early.",
    "Make knowledge transfer something you test before the final payment.",
    "Negotiate support, change pricing and upgrade terms before committing.",
  ],

  proTips: [
    "Ask the supplier which of their clients most resembles you and whether you can speak to one they did not pick. The references they give you are chosen. One you find yourself will tell you what took longer than expected and what their team complains about now, which are the two most useful things you can learn before signing.",
    "Get whoever will administer the system afterwards into the design sessions from the start, not at training. They ask configuration questions nobody else thinks of, and by go-live they will have watched every decision being made, which is worth more than any handover document you could specify.",
    "When a supplier says the product cannot do something, ask how their other clients handle it. That is much more productive than asking whether it can be changed, and it frequently turns up a process approach that works and costs nothing. Suppliers know the workarounds their client base has invented and rarely volunteer them.",
    "Write down every configuration decision in the session itself, in your own document, and read the day's decisions back before people leave. It takes five minutes, it catches the ones that two parties heard differently, and it means your record exists independently of theirs from day one rather than being reconstructed later.",
  ],

  businessApplications: [
    "Putting in a large bought-in system, where the client-side BA is the main protection against drift.",
    "Development done by an outside company on a fixed price, where anything vague has a direct commercial value.",
    "Programmes with several suppliers, where the connections between them are where nobody owns the seams.",
    "Handing a service over to be run by somebody else, where knowledge transfer decides whether you have options at renewal.",
    "Public sector buying, where the criteria and the acceptance definition are contractually binding.",
    "Upgrades, where the list of changes you made to the product decides the cost.",
  ],

  checklist: [
    "Needs, cases and practical requirements finished before buying.",
    "Contract read for exclusions and assumptions.",
    "Every obligation on your side pulled out with an internal owner and date.",
    "Acceptance defined against your cases and negotiated before signature.",
    "Your side's effort estimated by role and resourced.",
    "Fit checked using your own real cases including the hardest two.",
    "Four options applied to every gap, with lifetime cost stated for product changes.",
    "List of product changes kept as short as the business will accept.",
    "Your own dated decision log kept through every session.",
    "Future administrator in the design sessions from the start.",
    "Route to the commercial relationship established.",
    "Knowledge transfer defined as something tested before final payment.",
    "Support, change pricing and upgrade terms agreed.",
  ],

  faqs: [
    {
      q: "What does the BA actually do if the supplier is building it?",
      a: "Owns the business need, checks the fit using your cases, decides configure versus change the product versus change the process with the business, keeps the decision log, defines acceptance, and makes sure the business can run the thing afterwards. It is a full job, not oversight.",
    },
    {
      q: "How do I know whether to change the product?",
      a: "Ask where the requirement came from, how often it affects an outcome, and whether the practice is genuinely distinctive or just habit. Then price the change across the expected life of the system including upgrades. Most gaps do not survive that.",
    },
    {
      q: "The supplier says our requirement is out of scope. What now?",
      a: "Check the contract, including the assumptions. If it genuinely is out of scope, you have a decision about whether to pay, drop it or change the process. If it is unclear, resolve it early through the commercial route rather than arguing repeatedly at working level.",
    },
    {
      q: "How much of our own resource does this need?",
      a: "More than anybody plans for. Cleaning data, decisions, testing, training and local procedures are all yours. Estimate it in days by role during planning, and treat the availability of decision makers as something with a queue.",
    },
    {
      q: "How do I avoid getting stuck with them?",
      a: "Data ownership and how you get it out written into the contract, a short list of product changes, your own decision log, and knowledge transfer as something tested. Being stuck is built out of small conveniences accepted one at a time.",
    },
    {
      q: "When should I escalate to the account manager?",
      a: "When a problem is structural rather than one-off: a requirement misunderstood repeatedly, dates consistently missed, or a pattern of work being pushed to your side. Do it in month three factually rather than in month eight emotionally.",
    },
  ],

  tools: [
    { name: "Ten real cases including the two hardest", what: "The script you choose on, the input for checking fit, and later the acceptance test. One thing doing three jobs.", cost: "Free" },
    { name: "Your own configuration decision log", what: "Dated, with reasoning and names, in a system you control. Their record leaves with them.", cost: "Free" },
    { name: "An estimate of your side's effort by role", what: "Cleaning data, decisions, testing, training, procedures. Real work that is not in their price.", cost: "Free" },
    { name: "A knowledge transfer test", what: "Your administrator doing each task unaided before final payment. The difference between owning a system and renting access to one.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "choosing-the-right-solution", anchor: "the choice that came before this", context: "Selection" },
    { slug: "running-user-acceptance-testing", anchor: "proving it handles your cases", context: "Acceptance" },
    { slug: "managing-scope-and-change-requests", anchor: "handling scope when money is involved", context: "Change control" },
  ],

  relatedGuides: ["choosing-the-right-solution", "running-user-acceptance-testing", "managing-scope-and-change-requests"],

  conclusion: [
    "Find the contract for any supplier project in your business and read only the assumptions and exclusions. The obligations on your side you find in there, with timescales attached and nobody internally tracking them, are what turns into chargeable delay six months from now.",
  ],
};

export default guide;
