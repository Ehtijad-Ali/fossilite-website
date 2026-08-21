import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "customer-journey-mapping",
  seoTitle: "Customer Journey Mapping That Changes Decisions",
  metaDescription:
    "Mapping the outside-in view: what the customer experiences, where the internal process leaks through, and how to attach evidence so the map funds work.",
  title: "Customer Journey Mapping",
  keywords: [
    "customer journey mapping",
    "journey map business analysis",
    "touchpoint analysis",
    "outside in process analysis",
    "service blueprint",
    "customer experience analysis",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 16,

  intro: [
    "Most journey maps end up on a wall as decoration. They are attractive, they have a smiling face at one end and a frowning face in the middle, and they have never caused anybody to do anything differently. That is because they were built from assumptions in a workshop rather than from evidence, and because nothing on them has a number attached.",
    "The useful version is a different artefact entirely. It maps what the customer actually does, in their words, against what your organisation does internally, with data at every step: how many people are here, how many drop out, how long they wait, how often they contact you and about what. Built that way, a journey map is one of the most persuasive things a Business Analyst can put in front of a leadership team, because it makes visible a cost the internal process view is structurally incapable of showing.",
    "This guide covers when a journey map is the right tool, how to build one that is evidence-led, the layers that make it useful, and how to turn it into work that gets funded rather than a poster.",
  ],

  whyItMatters: [
    "Internal process maps are organised by who does what. Customers do not experience your org chart. They experience a sequence of waits, forms and contradictions that no single department can see, because each department sees the part it owns and thinks the process is fine.",
    "That is why the biggest customer problems are almost always at handovers, and why they persist for years despite everybody doing their job well. Nobody owns the gaps, and nothing in the internal reporting measures them.",
    "There is also a commercial argument that lands with executives when a process argument does not. Effort a customer has to expend is a cost you are imposing on them, and it shows up later as churn, as complaint volume, and as the contact centre calls that exist only to explain your own process back to people.",
  ],

  coreConcepts: [
    {
      term: "Journey maps are outside-in; process maps are inside-out",
      explain:
        "A process map starts at the trigger the business recognises. A journey map starts earlier, when the customer first realises they have a need, and ends later, after they have decided whether the whole thing was worth it.",
      detail:
        "Almost all the value is in the parts outside the process map's boundary: the research before contact, the waiting between steps, and what happens after the transaction that determines whether they come back.",
    },
    {
      term: "One journey per persona per goal",
      explain:
        "A single map covering all customers doing everything is a diagram of nothing. Pick one identifiable group with one specific goal: a new business customer opening an account, an existing customer reporting a fault.",
      detail:
        "Where two groups diverge sharply, map both. The differences between them are frequently the finding, because internal processes are usually designed around one of the groups without anybody deciding which.",
    },
    {
      term: "Four layers, and the bottom two are what make it useful",
      explain:
        "What the customer does, what they experience, what happens internally at that moment, and the evidence: volumes, drop-out, elapsed time, contact rate.",
      detail:
        "Most published journey maps have the top two layers only. The third layer connects the experience to something you can change, and the fourth is what gets it funded. A map without them is a mood board.",
    },
    {
      term: "Build it from evidence, not from a workshop",
      explain:
        "Contact logs, complaint categories, system timestamps, drop-out rates by step, search queries on your own site, and recordings or transcripts where they exist.",
      detail:
        "Assumption-based maps encode what the organisation already believes, which is precisely the thing you were trying to test. Run the workshop after the evidence exists, to interpret it.",
    },
    {
      term: "Talk to customers who did not complete",
      explain:
        "Everybody interviews the customers who got through. The people who abandoned halfway are the ones who know where the process fails, and they are much harder to reach, which is why almost nobody does it.",
      detail:
        "Even five conversations with people who dropped out will tell you more about the journey than fifty satisfaction surveys from people who completed it.",
    },
    {
      term: "Measure effort, not satisfaction",
      explain:
        "How many steps, how many separate contacts, how many times they had to repeat information, how long they waited, how many channels they had to switch between.",
      detail:
        "Effort is concrete, countable, and directly attributable to a design decision. Satisfaction is an aggregate mood that moves for reasons you cannot act on.",
    },
    {
      term: "Count the repeated explanation",
      explain:
        "Every time a customer has to state the same information again is a defect. It is also the most reliable proxy for a broken handover, and it is easy to count from call transcripts or from a form audit.",
      detail:
        "This single measure has changed more minds in leadership meetings than any diagram I have drawn. Nobody defends asking somebody for their reference number four times once it has been counted.",
    },
    {
      term: "Map the waiting, and map who knows about it",
      explain:
        "Elapsed time between steps is what the customer experiences as the process. Then ask the separate question: during that wait, does the customer know what is happening and what happens next?",
      detail:
        "A five-day wait with a clear expectation is tolerable. A two-day wait with silence generates a chase contact, which costs you money and makes the wait longer. The fix is frequently communication rather than speed.",
    },
    {
      term: "Find the moments that decide the relationship",
      explain:
        "Not every step matters equally. There are usually two or three points where the customer forms a lasting view: the first response, the moment something goes wrong, and the resolution.",
      detail:
        "Concentrate effort there. Improving a step that customers pass through without noticing produces no return, however inefficient it is internally.",
    },
    {
      term: "Connect every pain point to an internal cause",
      explain:
        "For each problem on the map, name the specific internal thing that causes it: a system that cannot share data, a policy, a batch schedule, a team boundary.",
      detail:
        "Without this, a journey map produces sympathy and no action. With it, each pain point becomes a candidate piece of work with a known owner, which is the entire point of the exercise.",
    },
    {
      term: "A service blueprint is the version with the plumbing",
      explain:
        "Same map, extended downwards: front-stage actions the customer sees, back-stage actions they do not, and the supporting systems and policies underneath.",
      detail:
        "Use it when you are designing rather than diagnosing. The blueprint is what tells you which internal capability has to change to move a specific moment on the journey.",
    },
    {
      term: "Publish it with three prioritised recommendations attached",
      explain:
        "The map is the evidence. The deliverable is a short list of what to do, sized and ranked, with the pain point each one addresses.",
      detail:
        "A map circulated on its own gets admired and filed. Attach three things somebody could fund this quarter and it becomes the basis of a programme.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The wait nobody could see.",
      walkthrough:
        "A BA maps the journey for a business customer opening an account. Every internal team reports that their step takes under a day, and the internal process map supports this. Mapping elapsed time from the customer's side tells a different story: the application sits between teams for several days at two separate points, and because a verification step runs on a weekly cycle, anything arriving after a particular afternoon waits until the following week.",
      result:
        "Nobody was slow and the total experience was poor. The finding was structural and invisible from inside any single department, because each team's own metric was genuinely healthy. Mapping elapsed time from the customer's perspective is what makes this class of problem visible at all.",
    },
    {
      kind: "illustration",
      scenario: "Counting the repeats.",
      walkthrough:
        "A BA reviews transcripts from thirty calls about a single service issue. In each, she counts the number of times the customer states information the organisation already holds: reference number, address, description of the problem. The count is consistently high, and in most of the calls the repetition happens at a transfer between two teams whose systems do not share a case record.",
      result:
        "The presentation to leadership was one number and one sentence about where it happens. It was funded that quarter. Effort measures survive scrutiny in a way that satisfaction scores do not, because nobody can argue that a customer should have to repeat themselves, and the count points directly at the system boundary causing it.",
    },
    {
      kind: "illustration",
      scenario: "The map built from assumptions.",
      walkthrough:
        "A journey map is produced in a full-day workshop with representatives from each department. It is thorough, attractively presented and placed on the office wall. Six months later a BA compares it against contact data and drop-out rates. The stage the map identifies as the main pain point generates very few contacts. The stage nobody flagged accounts for a large share of both abandonment and complaint volume.",
      result:
        "The workshop had faithfully recorded what the organisation believed, which was the thing that needed testing rather than documenting. Run the evidence first and use the workshop to interpret it. A map built the other way round is an efficient way to make existing assumptions look like findings.",
    },
  ],

  learningPath: [
    {
      title: "Choose one persona and one goal",
      body: "Name a specific customer group and a specific thing they are trying to achieve. Write the start point as the moment they realise they have a need, and the end point after they have judged the outcome.",
      effort: "1 hour",
      outcome: "A bounded journey, rather than a diagram covering everybody doing everything.",
    },
    {
      title: "Pull the evidence before drawing anything",
      body: "Contact volumes by stage and reason, complaint categories, drop-out by step, elapsed time between steps, and search terms on your own site. Request access early.",
      effort: "3-5 days",
      outcome: "A map that will be built from what happens rather than from what people believe.",
    },
    {
      title: "Talk to ten customers, including five who did not complete",
      body: "Ask what they did, what they expected, and where they had to chase. Ask about the last real occasion rather than in general.",
      effort: "1 week",
      outcome: "The language customers actually use, and the reasons behind the drop-out numbers.",
    },
    {
      title: "Draw the four layers",
      body: "Customer actions, customer experience, internal activity, and evidence. One row each, aligned on the same timeline.",
      effort: "1-2 days",
      outcome: "A map where every claim about experience has a number underneath it.",
    },
    {
      title: "Add effort measures at each stage",
      body: "Number of steps, contacts, repeated explanations, channel switches and days of waiting. Total them for the whole journey.",
      effort: "Half a day",
      outcome: "A single headline number for total customer effort, which is what executives remember.",
    },
    {
      title: "Attach an internal cause to every pain point",
      body: "System, policy, batch schedule, team boundary or missing information. Name it specifically, with an owner where one exists.",
      effort: "1 day",
      outcome: "Pain points that convert into candidate work rather than into sympathy.",
    },
    {
      title: "Validate with a workshop, then publish with recommendations",
      body: "Take the evidence-based map to the departments involved and let them correct it. Then publish with three sized, ranked recommendations attached.",
      effort: "2-3 days",
      outcome: "A map with organisational agreement and a defined next step.",
    },
  ],

  exercises: [
    {
      title: "Be your own customer",
      brief:
        "Go through your organisation's own process as a customer would, from the public website onwards, as far as you can without special access. Record every step, every wait, and every point where you had to guess what to do next.",
      success:
        "You can name at least three points where the process assumes knowledge a real customer would not have, and you have screenshots or notes to prove them.",
      time: "2-3 hours",
    },
    {
      title: "Count the repeats",
      brief:
        "Take twenty call transcripts, chat logs or case notes for one issue type. Count how many times per case a customer supplies information the organisation already holds, and note where in the process it happens.",
      success:
        "You have an average count and can point to the specific handover or system boundary that causes most of it.",
      time: "Half a day",
    },
    {
      title: "The elapsed versus touch comparison",
      brief:
        "For one customer journey, calculate total elapsed time from the customer's first action to resolution, and compare it against the total time anyone in the organisation spent working on it.",
      success:
        "You have both numbers and a ratio, and you can identify the single largest wait the customer experiences.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Building the map in a workshop from assumptions",
      why: "It records what the organisation already believes, which was the thing that needed testing. Assumptions presented as findings are worse than no map, because they carry false authority.",
      fix: "Gather evidence first: contacts, drop-out, elapsed time, complaint categories. Use the workshop to interpret and validate.",
    },
    {
      mistake: "Mapping everybody at once",
      why: "A journey covering all customers doing everything describes nobody. Every stage becomes a generalisation and no recommendation follows from it.",
      fix: "One persona, one goal, one map. Map a second journey where two groups genuinely diverge.",
    },
    {
      mistake: "Starting and ending at the organisation's boundary",
      why: "The research before contact and the aftermath afterwards are where a large share of the experience is formed, and both sit outside any internal process map.",
      fix: "Start when the customer realises they have a need and end after they have judged whether it was worth it.",
    },
    {
      mistake: "Only talking to customers who completed",
      why: "You are surveying survivors. The people who abandoned know exactly where the process fails, and their absence is why maps built from satisfaction data look healthier than reality.",
      fix: "Deliberately reach people who dropped out. Five such conversations outweigh fifty completion surveys.",
    },
    {
      mistake: "Measuring satisfaction instead of effort",
      why: "Satisfaction is an aggregate mood that moves for reasons you cannot act on, and it gives you nothing specific to fix.",
      fix: "Count steps, contacts, repeated explanations, channel switches and waiting days. All are countable and all point at a design decision.",
    },
    {
      mistake: "Pain points with no internal cause attached",
      why: "The map generates sympathy in a meeting and no work afterwards, because nothing on it maps to something somebody owns.",
      fix: "Name the system, policy, schedule or boundary behind every pain point, with an owner.",
    },
    {
      mistake: "Publishing the map as the deliverable",
      why: "It gets admired and filed. A diagram is evidence, not a recommendation, and executives need to be told what to do with it.",
      fix: "Attach three sized, ranked recommendations, each linked to the pain point it addresses.",
    },
    {
      mistake: "Treating the map as permanent",
      why: "Journeys change when channels, policies or systems change, and an out-of-date map is quoted with the same confidence as a current one.",
      fix: "Date it, state the evidence period, and treat it as a snapshot rather than a living document unless somebody owns maintaining it.",
    },
  ],

  bestPractices: [
    "Map one persona pursuing one goal.",
    "Start before first contact and end after the customer has judged the outcome.",
    "Gather evidence before drawing anything.",
    "Interview customers who did not complete, not only those who did.",
    "Use four layers: actions, experience, internal activity, evidence.",
    "Measure effort rather than satisfaction.",
    "Count repeated explanations and locate where they happen.",
    "Record elapsed waits and whether the customer knows what is happening.",
    "Identify the two or three moments that decide the relationship.",
    "Attach a named internal cause to every pain point.",
    "Validate with the departments involved before publishing.",
    "Publish with three sized, ranked recommendations.",
  ],

  proTips: [
    "Read your own organisation's outbound letters and emails as a sequence, in the order a customer receives them, rather than individually. Each one usually makes sense alone. Together they frequently contradict each other, use three different reference numbers for the same thing, and ask for information that was supplied two messages earlier. This takes an afternoon and I have never done it without finding something.",
    "Look at the search terms people type into your own website's search box. It is a list of things customers cannot find, written by customers, updated continuously and free. Almost nobody in a business analysis role asks for it, and it maps directly onto the stages where your journey is failing.",
    "When you present a journey map, lead with the total elapsed time and the total number of customer contacts, before showing the diagram. Two numbers land harder than any visual, and once people have absorbed them the map explains where the numbers came from rather than competing with them for attention.",
    "Keep the customer's own words on the map, in quotation marks, next to the relevant stage. A verbatim sentence from a real person survives a leadership meeting far better than a paraphrase, and it stops the discussion drifting into whether customers really feel that way.",
  ],

  businessApplications: [
    "Digital transformation programmes, where the journey view is the only artefact that crosses every department involved.",
    "Complaint reduction work, where the categories point directly at the stages worth mapping.",
    "Channel strategy, where the question is which contacts exist only because an earlier step failed.",
    "Onboarding improvement, where drop-out data makes the pain points measurable rather than debatable.",
    "Service design for a new proposition, using a blueprint rather than a diagnostic map.",
    "Post-merger work, where two organisations offer the same service through incompatible journeys.",
  ],

  checklist: [
    "One persona and one goal named.",
    "Journey starts before first contact and ends after the outcome is judged.",
    "Contact, complaint, drop-out and timing data obtained.",
    "At least five interviews with customers who did not complete.",
    "Four layers drawn on a single aligned timeline.",
    "Effort measures recorded per stage and totalled.",
    "Repeated explanations counted and located.",
    "Waits recorded, with whether the customer is informed during them.",
    "The two or three defining moments identified.",
    "Every pain point linked to a named internal cause and owner.",
    "Map validated with the departments involved.",
    "Three sized, ranked recommendations attached.",
    "Map dated with its evidence period stated.",
  ],

  faqs: [
    {
      q: "What is the difference between a journey map and a process map?",
      a: "A process map is organised by who does what inside the organisation. A journey map is organised by what the customer does and experiences, including the parts before and after your process boundary. You usually need both, and the gap between them is where the findings are.",
    },
    {
      q: "How many customers do I need to interview?",
      a: "Ten is usually enough to reach repetition for one persona and one goal, provided at least half of them did not complete. Volume matters less than deliberately including people the organisation does not normally hear from.",
    },
    {
      q: "What if we have no customer research budget?",
      a: "Use what already exists: contact logs, complaint categories, chat transcripts, site search terms and drop-out data. Then walk the journey yourself as a customer. That combination costs nothing and gets you most of the way.",
    },
    {
      q: "Should the journey map include internal steps?",
      a: "Yes, as a separate layer aligned to the same timeline. Without it the map cannot be connected to anything anyone can change, which is how journey maps end up as decoration.",
    },
    {
      q: "When should I build a service blueprint instead?",
      a: "When you are designing rather than diagnosing. A blueprint adds the back-stage actions and supporting systems, which is what you need to work out which internal capability must change to move a given moment.",
    },
    {
      q: "How do I stop this becoming a poster?",
      a: "Attach numbers to every stage and three funded-sized recommendations to the end. A map that says what to do next and what it is worth gets acted on. A map that shows how customers feel gets admired.",
    },
  ],

  tools: [
    { name: "Contact and complaint data by stage and reason", what: "The evidence layer. Usually already collected and rarely analysed by journey stage.", cost: "Varies" },
    { name: "Site search query logs", what: "A continuously updated list of what customers cannot find, written by customers. Almost never requested.", cost: "Free" },
    { name: "Call or chat transcripts", what: "For counting repeated explanations and hearing the customer's own words.", cost: "Varies" },
    { name: "An effort tally sheet", what: "Steps, contacts, repeats, channel switches, waiting days per stage. The numbers that persuade executives.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "mapping-a-business-process", anchor: "the inside-out view this pairs with", context: "Complementary view" },
    { slug: "where-inefficiency-hides", anchor: "the internal causes behind the pain points", context: "Diagnosis" },
    { slug: "customer-research-with-ai", anchor: "synthesising many customer interviews", context: "Analysis" },
  ],

  relatedGuides: ["mapping-a-business-process", "where-inefficiency-hides", "customer-research-with-ai"],

  conclusion: [
    "Take twenty call transcripts or case notes for one issue type and count how many times per case the customer supplies information you already hold. That single number, with the handover that causes it named beside it, will do more in a leadership meeting than any diagram you could draw this week.",
  ],
};

export default guide;
