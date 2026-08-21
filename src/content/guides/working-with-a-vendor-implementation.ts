import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "working-with-a-vendor-implementation",
  seoTitle: "Working With a Vendor Implementation as the Client BA",
  metaDescription:
    "Your job when somebody else builds it: guarding the requirement, reading a statement of work, handling configure-versus-customise, and protecting knowledge transfer.",
  title: "Working With a Vendor Implementation",
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
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "When a vendor implements a product for you, the analysis does not go away. It changes shape. You stop specifying how something should be built and start doing something harder: establishing what your business actually needs, deciding which of those needs the product will meet as it stands, and holding the line on the small number that genuinely justify deviating from it.",
    "The common failure is a client organisation that treats the vendor as the analyst. The vendor knows their product extremely well and your business not at all, and they are commercially motivated to interpret ambiguity in the direction of less work. Neither of those is dishonest. It means that if nobody on your side owns the requirement, the requirement becomes whatever the product does.",
    "This guide is the client-side BA role: what to establish before the contract, how to read a statement of work for what it does not say, the configure-versus-customise decision and why it is a business decision, how to run the workshops the vendor will schedule, and how to make sure you can operate the thing after they leave.",
  ],

  whyItMatters: [
    "The commercial structure creates the risk. In a fixed-price arrangement the vendor's margin improves when scope is interpreted narrowly. In time and materials it improves when scope grows. Neither structure is wrong and both mean somebody on your side has to be watching the requirement rather than the invoice.",
    "There is also an asymmetry of knowledge that never fully closes. They know the product, you know the business, and every misunderstanding lives in the gap. The client BA is the only person in the room whose job is to hold both halves.",
    "And the consequences outlive the project by years. Customisations taken lightly become upgrade costs forever. Knowledge left entirely with the vendor becomes a dependency you pay for every time anything changes.",
  ],

  coreConcepts: [
    {
      term: "Do the analysis before you procure, not after",
      explain:
        "Needs, capabilities and the awkward cases have to exist before a vendor is selected, or the evaluation is a comparison of sales material and the implementation starts with the vendor discovering your business at your expense.",
      detail:
        "The minimum viable pre-procurement artefact is a set of business needs, ten real cases including the two hardest, and the non-functional requirements. Those three carry an implementation.",
    },
    {
      term: "Read the statement of work for the boundaries",
      explain:
        "What is included, what is explicitly excluded, what is assumed about your side, how many workshops, how many environments, how many rounds of testing, and what happens when a number is exceeded.",
      detail:
        "The assumptions section is the most important and the least read. It typically contains commitments you have not noticed you made: that data will be provided in a certain state, that decisions will be returned within a stated period, that your people will be available.",
    },
    {
      term: "Your delays are chargeable, and they are the common ones",
      explain:
        "Most vendor contracts allow costs to be recovered when the client causes delay. Slow decisions, unavailable people and late data are the usual causes.",
      detail:
        "This is one of the strongest arguments a BA has for securing stakeholder time and a fast decision route at the start. Frame it commercially rather than as a request for cooperation, and it gets taken more seriously.",
    },
    {
      term: "Configure, customise, change the process, or accept",
      explain:
        "Four options for every gap between the product and your requirement. The default should be to change the process, and the exception should be argued for.",
      detail:
        "Every customisation costs at implementation and again at every upgrade, forever. The honest question to the business is which of our practices are genuinely distinctive and which are simply what we happen to do, and the second category is nearly always larger than people expect.",
    },
    {
      term: "Fit-gap analysis is a business exercise, not a product demonstration",
      explain:
        "Run your real cases through the product and record what happens. Where it does not fit, record whether that matters and why, before discussing solutions.",
      detail:
        "Vendors will run fit-gap from their process model. Insist on running it from your cases, including the awkward ones, because the standard path always fits and it is not where the risk is.",
    },
    {
      term: "The vendor's consultant is not your analyst",
      explain:
        "They are skilled, they usually want a good outcome, and they have a commercial position, a delivery deadline and no long-term stake in your operation.",
      detail:
        "Use them for what they are exceptional at: what the product can do, what other clients did, what usually goes wrong. Do not outsource the question of what your business needs, because they cannot answer it and will be blamed later for a decision that was never theirs.",
    },
    {
      term: "Own the decision log, do not let it live in their document",
      explain:
        "Configuration decisions accumulate at a rate of dozens per workshop. Keep your own dated log with reasoning and owners.",
      detail:
        "When the vendor leaves, their internal record leaves with them. Two years later somebody will ask why a field is configured a particular way, and the answer needs to be in a document your organisation owns.",
    },
    {
      term: "Insist that acceptance criteria are yours",
      explain:
        "If acceptance is defined as the product working as designed, you have agreed to accept it regardless of whether your business can operate on it.",
      detail:
        "Acceptance should be defined against your real cases and your non-functional requirements. Negotiate this before signature, because after signature it is a variation and it will be priced.",
    },
    {
      term: "Watch for scope moving into your side of the line",
      explain:
        "Data cleansing, testing, training material, interface development at your end, and decision-making all quietly become your responsibility, and they take real effort.",
      detail:
        "Total the client-side effort explicitly during planning. It is routinely underestimated, it is not in the vendor's price, and it is the most common reason internal timelines slip on vendor projects.",
    },
    {
      term: "Knowledge transfer has to be a deliverable with a test",
      explain:
        "Not a document handed over at the end. A named person on your side who can perform each administrative task, demonstrated before final payment.",
      detail:
        "Otherwise you have bought a system and a permanent dependency. The test is simple: can your administrator make a configuration change unaided while the vendor watches?",
    },
    {
      term: "Escalate through the commercial route when it is warranted",
      explain:
        "Day to day problems are solved with the implementation team. Structural ones, such as repeated misunderstanding of a requirement, need to reach the account relationship.",
      detail:
        "Do it early and factually rather than late and emotionally. A vendor account manager would much rather hear about a pattern in month three than receive a complaint in month eight.",
    },
    {
      term: "Plan for the relationship after go-live",
      explain:
        "Support arrangements, who can raise a ticket, response commitments, what a change costs, upgrade cadence and what upgrades do to your customisations.",
      detail:
        "The implementation is a fraction of the total relationship. These terms matter more over five years than the implementation price does, and they are easiest to negotiate before you have committed.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The gap that should have been a process change.",
      walkthrough:
        "During fit-gap, the product cannot support a two-stage approval that the business currently performs. The vendor quotes a customisation. Before accepting, the BA asks where the two-stage approval came from and how often the second stage changes the outcome. It was introduced after an incident several years earlier, and checking the workflow log shows the second approver has not rejected anything in the period examined.",
      result:
        "The organisation changed the process instead, with the control owner's agreement and a documented decision. The customisation would have cost at implementation and at every upgrade for as long as the system lived. Interrogating the origin of a requirement is the highest-value thing a client BA does during fit-gap.",
    },
    {
      kind: "illustration",
      scenario: "Acceptance defined the vendor's way.",
      walkthrough:
        "A statement of work defines acceptance as the configured solution operating in accordance with the design document. The design document was written by the vendor from workshops. At acceptance testing the business finds that a high-volume case type requires several more steps than the process it replaced, and is told that this is in accordance with the design and therefore acceptable.",
      result:
        "The argument was contractually correct and operationally useless. Acceptance criteria have to be expressed against the client's real cases and non-functional requirements, and that has to be negotiated before signature, because afterwards it is a variation with a price attached.",
    },
    {
      kind: "illustration",
      scenario: "The client-side work nobody had costed.",
      walkthrough:
        "A project plan is built around the vendor's timeline. Three months in, the internal team is behind, because data cleansing, test scenario preparation, training material for local procedures, and the volume of configuration decisions required have consumed far more capacity than anyone estimated. The vendor is on schedule and starts to accrue delay costs.",
      result:
        "The vendor's plan covered the vendor's work. The client-side effort was real, substantial and absent from every estimate. Totalling internal effort by role during planning, and treating decision-making capacity as a resource with a limit, is the practical protection against this and it takes an afternoon.",
    },
  ],

  learningPath: [
    {
      title: "Do the analysis before procurement",
      body: "Business needs, capabilities, ten real cases including the two hardest, and the non-functional requirements. These become the evaluation criteria and later the acceptance criteria.",
      effort: "2-4 weeks",
      outcome: "An evaluation based on your business rather than on demonstrations.",
    },
    {
      title: "Read the statement of work for boundaries and assumptions",
      body: "Inclusions, exclusions, assumptions about your side, counts of workshops, environments and test cycles, and what happens when they are exceeded.",
      effort: "1 day",
      outcome: "Awareness of the commitments you are making, particularly the ones in the assumptions section.",
    },
    {
      title: "Negotiate acceptance criteria before signature",
      body: "Acceptance defined against your real cases and your non-functional requirements, not against the vendor's design document.",
      effort: "Part of contract negotiation",
      outcome: "The single most valuable protection available on a vendor implementation.",
    },
    {
      title: "Total the client-side effort by role",
      body: "Data cleansing, decisions, testing, training, local procedure documentation, interface work at your end. Estimate it in days by role and get it resourced.",
      effort: "1 day",
      outcome: "A plan that reflects the work your organisation actually has to do.",
    },
    {
      title: "Run fit-gap from your cases",
      body: "Your real cases, including the awkward ones, run through the product. Record what happens and whether the gap matters before discussing any solution.",
      effort: "1-2 weeks",
      outcome: "Gaps discovered where the risk is rather than on the demonstration path.",
    },
    {
      title: "Apply the four options to every gap",
      body: "Configure, customise, change the process, or accept. Default to changing the process and require an argument for customisation, with its lifetime cost stated.",
      effort: "Ongoing through design",
      outcome: "A customisation list short enough to survive upgrades.",
    },
    {
      title: "Keep your own decision log",
      body: "Every configuration decision, dated, with reasoning and owner, in a document your organisation controls rather than in the vendor's.",
      effort: "Minutes per decision",
      outcome: "The ability to answer why in two years, after the vendor has gone.",
    },
    {
      title: "Make knowledge transfer a tested deliverable",
      body: "A named person on your side performing each administrative task unaided, demonstrated before final payment rather than documented at the end.",
      effort: "1-2 weeks near the end",
      outcome: "A system you can operate rather than a permanent dependency.",
    },
  ],

  exercises: [
    {
      title: "Read the assumptions section",
      brief:
        "Take any vendor statement of work your organisation has signed. Read only the assumptions and exclusions. List every commitment it places on your side and check whether anybody internally has been told.",
      success:
        "You find at least one client obligation with a timescale attached that nobody internally is currently tracking.",
      time: "1 hour",
    },
    {
      title: "Interrogate one gap",
      brief:
        "Take a gap between a product and your process where a customisation is proposed. Find out where the requirement came from, when it was introduced, and how often it changes an outcome. Check the second against data.",
      success:
        "You can say whether the requirement is genuinely distinctive or simply what your organisation happens to do, with evidence either way.",
      time: "Half a day",
    },
    {
      title: "Total the client-side effort",
      brief:
        "For a vendor project in your organisation, estimate the internal effort in days by role: cleansing, decisions, testing, training, procedure writing. Compare it against what has been resourced.",
      success:
        "You have a number, and it is materially larger than what the plan currently allows for.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Letting the vendor do the analysis",
      why: "They know the product and not your business, and they have a commercial position. Ambiguity resolves toward the product, and nobody on your side is holding the requirement.",
      fix: "Own the needs, the cases and the acceptance criteria. Use the vendor for what the product can do and what usually goes wrong.",
    },
    {
      mistake: "Not reading the assumptions section",
      why: "It contains obligations on your side with timescales attached, and breaching them is what triggers chargeable delay.",
      fix: "Read it first, extract every client obligation into your own plan, and tell the people who have to meet them.",
    },
    {
      mistake: "Accepting acceptance criteria written by the vendor",
      why: "Acceptance defined as conformance to the vendor's design document means you have agreed to accept whatever they designed, regardless of whether the business can operate.",
      fix: "Define acceptance against your real cases and non-functional requirements, before signature.",
    },
    {
      mistake: "Treating customisation as a technical choice",
      why: "Every deviation costs at implementation and at every upgrade forever, and the person approving it usually will not be there to pay that cost.",
      fix: "Present the lifetime cost, default to process change, and require an explicit business argument for each exception.",
    },
    {
      mistake: "Running fit-gap on the standard path",
      why: "The product always fits the standard path. The gaps that matter are in the awkward cases, which is exactly what the demonstration will not cover.",
      fix: "Insist on running your own real cases, including the two hardest, and record what happens to each.",
    },
    {
      mistake: "Underestimating client-side effort",
      why: "Cleansing, decisions, testing and training are real work absent from the vendor's price, and they are the usual reason internal timelines slip.",
      fix: "Total internal effort by role during planning and treat decision-making capacity as a limited resource.",
    },
    {
      mistake: "Letting the decision log live in the vendor's document",
      why: "It leaves with them, and two years later nobody can say why the system is configured the way it is.",
      fix: "Maintain your own dated log with reasoning and owners, in a system your organisation controls.",
    },
    {
      mistake: "Knowledge transfer as a document",
      why: "A handover pack is not a capability. You end up dependent on the vendor for every change, at their commercial rates, indefinitely.",
      fix: "Make it a tested deliverable: your administrator performs each task unaided before final payment.",
    },
  ],

  bestPractices: [
    "Complete the needs and case analysis before procurement.",
    "Read the statement of work for exclusions and assumptions first.",
    "Extract every client obligation into your own plan with owners.",
    "Negotiate acceptance criteria against your cases before signature.",
    "Total client-side effort by role and resource it explicitly.",
    "Run fit-gap using your own real cases, including the hardest.",
    "Apply configure, customise, change process or accept to every gap.",
    "Default to process change and require an argument for customisation.",
    "State the lifetime upgrade cost of every proposed customisation.",
    "Keep your own dated configuration decision log.",
    "Treat decision-making capacity as a resource with a limit.",
    "Escalate structural problems through the commercial route early.",
    "Make knowledge transfer a tested deliverable before final payment.",
    "Negotiate support, change pricing and upgrade terms before committing.",
  ],

  proTips: [
    "Ask the vendor which clients most resemble you and whether you can speak to one they did not select. Supplied references are chosen. A reference you find yourself will tell you what took longer than expected and what their team complains about now, which are the two most useful things you can learn before signing.",
    "Get your future system administrator into the design workshops from the start, not at training. They will ask configuration questions nobody else thinks of, and by go-live they will have watched every decision being made, which is worth more than any handover document you could specify.",
    "When a vendor says the product cannot do something, ask how other clients handle it. That question is much more productive than asking whether it can be customised, and it frequently surfaces a process approach that works and costs nothing. Vendors know the workarounds their client base has invented and rarely volunteer them.",
    "Write down every configuration decision in the workshop itself, in your own document, and read the day's decisions back before people leave. It takes five minutes, it catches the ones that two parties heard differently, and it means your record exists independently of theirs from day one rather than being reconstructed later.",
  ],

  businessApplications: [
    "Enterprise software implementation, where the client BA role is the main protection against scope drift.",
    "Outsourced development under a fixed price, where requirement ambiguity has a direct commercial value.",
    "Systems integrator programmes, where multiple vendors have interfaces between them and nobody owns the seams.",
    "Managed service transitions, where knowledge transfer determines whether you have options at renewal.",
    "Public sector procurement, where the evaluation criteria and acceptance definitions are contractually binding.",
    "Product upgrades, where the accumulated customisation list determines the cost.",
  ],

  checklist: [
    "Needs, capabilities, real cases and non-functional requirements completed before procurement.",
    "Statement of work read for exclusions and assumptions.",
    "Every client obligation extracted with an internal owner and date.",
    "Acceptance criteria defined against your cases and negotiated before signature.",
    "Client-side effort estimated by role and resourced.",
    "Fit-gap run using your own real cases including the hardest two.",
    "Four options applied to every gap, with customisation lifetime cost stated.",
    "Customisation list kept as short as the business will accept.",
    "Your own dated decision log maintained through every workshop.",
    "Future administrator present in design workshops from the start.",
    "Escalation route to the commercial relationship established.",
    "Knowledge transfer defined as a tested deliverable before final payment.",
    "Support, change pricing and upgrade terms agreed.",
  ],

  faqs: [
    {
      q: "What does the client BA actually do if the vendor is building it?",
      a: "Owns the business need, runs fit-gap from your cases, decides configure versus customise versus process change with the business, maintains the decision log, defines acceptance, and makes sure the organisation can operate the thing afterwards. It is a full role, not an oversight one.",
    },
    {
      q: "How do I know whether to customise?",
      a: "Ask where the requirement came from, how often it affects an outcome, and whether the practice is genuinely distinctive or simply habitual. Then price the customisation across the expected life of the system including upgrades. Most gaps do not survive that examination.",
    },
    {
      q: "The vendor says our requirement is out of scope. What now?",
      a: "Check the statement of work, including the assumptions. If it is genuinely out of scope, you have a decision about whether to pay, drop it or change the process. If it is ambiguous, resolve it early through the commercial route rather than arguing repeatedly at working level.",
    },
    {
      q: "How much internal resource does a vendor implementation need?",
      a: "More than anybody plans for. Cleansing, decisions, testing, training and local procedures are all yours. Estimate it in days by role during planning, and treat the availability of decision makers as a limited resource with a queue.",
    },
    {
      q: "How do I protect against being locked in?",
      a: "Data ownership and extraction format in the contract, a short customisation list, your own decision log, and knowledge transfer as a tested deliverable. Lock-in is built from small conveniences accepted individually.",
    },
    {
      q: "When should I escalate to the account manager?",
      a: "When a problem is structural rather than incidental: a requirement repeatedly misunderstood, consistently missed dates, or a pattern of scope being pushed to your side. Do it in month three factually rather than in month eight emotionally.",
    },
  ],

  tools: [
    { name: "Ten real cases including the two hardest", what: "The evaluation script, the fit-gap input and later the acceptance criteria. One artefact doing three jobs.", cost: "Free" },
    { name: "Your own configuration decision log", what: "Dated, with reasoning and owners, in a system you control. The vendor's record leaves with the vendor.", cost: "Free" },
    { name: "A client-side effort estimate by role", what: "Cleansing, decisions, testing, training, procedures. The work that is real and not in the vendor's price.", cost: "Free" },
    { name: "A knowledge transfer test", what: "Your administrator performing each task unaided before final payment. The difference between owning a system and renting access to one.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "choosing-the-right-solution", anchor: "the evaluation that came before this", context: "Selection" },
    { slug: "running-user-acceptance-testing", anchor: "proving it meets your cases", context: "Acceptance" },
    { slug: "managing-scope-and-change-requests", anchor: "handling scope with a commercial edge", context: "Change control" },
  ],

  relatedGuides: ["choosing-the-right-solution", "running-user-acceptance-testing", "managing-scope-and-change-requests"],

  conclusion: [
    "Find the statement of work for any vendor project in your organisation and read only the assumptions and exclusions. The client obligations you find in there, with timescales attached and nobody internally tracking them, are what turns into chargeable delay six months from now.",
  ],
};

export default guide;
