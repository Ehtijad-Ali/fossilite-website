import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "customer-journey-mapping",
  seoTitle: "Mapping What Your Customer Actually Goes Through",
  metaDescription:
    "Most journey maps end up as wall decoration. How to build one from evidence, count the effort you are imposing, and turn it into work that gets funded.",
  title: "What Your Customer Actually Goes Through",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Most journey maps end up on a wall as decoration. They look nice, they have a smiling face at one end and a frowning one in the middle, and they have never caused anybody to do anything differently. That is because they were built from what people in a workshop assumed rather than from evidence, and because nothing on them has a number attached.",
    "The useful version is a completely different thing. It maps what the customer actually does, in their words, against what your business does internally, with numbers at every step: how many people are here, how many give up, how long they wait, how often they contact you and what about. Built that way it is one of the most persuasive things a Business Analyst can put in front of a leadership team, because it makes visible a cost that the internal view is structurally incapable of showing.",
    "This guide covers when it is the right tool, how to build one from evidence, the layers that make it useful, and how to turn it into work that gets funded rather than a poster.",
  ],

  whyItMatters: [
    "Internal process pictures are organised by who does what. Customers do not experience your org chart. They experience a sequence of waits, forms and contradictions that no single department can see, because each one sees only the part it owns and thinks the process is fine.",
    "That is why the biggest customer problems are almost always where work changes hands, and why they carry on for years while everybody does their job well. Nobody owns the gaps and nothing in the internal reporting measures them.",
    "There is also an argument that lands with executives when a process argument does not. Effort a customer has to put in is a cost you are imposing on them, and it comes back later as people leaving, as complaints, and as calls to your contact centre that exist only to explain your own process back to people.",
  ],

  coreConcepts: [
    {
      term: "This is the outside-in view; a process picture is the inside-out one",
      explain:
        "A process picture starts where the business notices something. A journey starts earlier, when the customer first realises they have a need, and ends later, after they have decided whether the whole thing was worth it.",
      detail:
        "Almost all the value is in the parts outside the process picture's boundary: the looking around before they contact you, the waiting between steps, and what happens afterwards that decides whether they come back.",
    },
    {
      term: "One kind of customer, one thing they are trying to do",
      explain:
        "One map covering all customers doing everything describes nobody. Pick one identifiable group with one specific goal: a new business customer opening an account, an existing customer reporting a fault.",
      detail:
        "Where two groups diverge sharply, map both. The differences between them are frequently the finding, because internal processes usually get designed around one of the groups without anybody deciding which.",
    },
    {
      term: "Four rows, and the bottom two make it useful",
      explain:
        "What the customer does, what they experience, what happens inside your business at that moment, and the numbers: how many, how many drop out, how long, how often they contact you.",
      detail:
        "Most published journey maps have the top two rows only. The third connects the experience to something you can change, and the fourth is what gets it funded. Without them it is a mood board.",
    },
    {
      term: "Build it from evidence, not from a workshop",
      explain:
        "Contact logs, complaint categories, timestamps, how many drop out at each step, what people type into your own website search, and transcripts where they exist.",
      detail:
        "A map built from assumptions records what the business already believes, which is exactly the thing you were trying to test. Run the workshop afterwards, to make sense of the evidence.",
    },
    {
      term: "Talk to the customers who gave up",
      explain:
        "Everybody interviews the customers who got through. The people who abandoned halfway know where the process fails, and they are much harder to reach, which is why almost nobody does it.",
      detail:
        "Even five conversations with people who dropped out will tell you more than fifty satisfaction surveys from people who completed.",
    },
    {
      term: "Count effort, not satisfaction",
      explain:
        "How many steps, how many separate contacts, how many times they had to repeat information, how long they waited, how many times they had to switch channel.",
      detail:
        "Effort is concrete, countable, and traceable directly to a design decision. Satisfaction is an overall mood that moves for reasons you cannot act on.",
    },
    {
      term: "Count how often people have to repeat themselves",
      explain:
        "Every time a customer states the same information again is a defect. It is also the most reliable sign of a broken handover, and it is easy to count from call transcripts or by looking at your own forms.",
      detail:
        "This single number has changed more minds in leadership meetings than any diagram I have drawn. Nobody defends asking somebody for their reference number four times once it has been counted.",
    },
    {
      term: "Map the waiting, and whether they know what is happening",
      explain:
        "Time between steps is what the customer experiences as the process. Then ask the separate question: during that wait, do they know what is going on and what happens next?",
      detail:
        "A five-day wait with a clear expectation is tolerable. A two-day wait in silence generates a chasing call, which costs you money and makes the wait longer. The fix is often communication rather than speed.",
    },
    {
      term: "Find the moments that decide the relationship",
      explain:
        "Not every step matters equally. There are usually two or three points where the customer forms a lasting view: the first response, the moment something goes wrong, and how it gets sorted out.",
      detail:
        "Concentrate your effort there. Improving a step customers pass through without noticing produces no return, however inefficient it is internally.",
    },
    {
      term: "Connect every pain point to something inside your business",
      explain:
        "For each problem on the map, name the specific internal thing causing it: a system that cannot share information, a policy, a weekly run, a team boundary.",
      detail:
        "Without this, a journey map produces sympathy and no action. With it, each pain point becomes a candidate piece of work with a known owner, which is the entire point.",
    },
    {
      term: "The version with the behind-the-scenes bits",
      explain:
        "Same map, extended downwards: what the customer sees, what happens behind the scenes that they do not, and the systems and policies underneath.",
      detail:
        "Use it when you are designing rather than diagnosing. It tells you which internal capability has to change in order to move a specific moment on the journey.",
    },
    {
      term: "Publish it with three ranked recommendations attached",
      explain:
        "The map is the evidence. What you actually deliver is a short list of what to do, sized and ranked, with the pain point each one addresses.",
      detail:
        "A map sent round on its own gets admired and filed. Attach three things somebody could fund this quarter and it becomes the basis of a programme.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The wait nobody inside could see.",
      walkthrough:
        "The problem: business customers complained about how long it took to open an account, and every internal team reported that their own step took under a day. What was happening: the BA mapped elapsed time from the customer's side instead. The application sat between teams for several days at two separate points, and because a verification step ran weekly, anything arriving after a particular afternoon waited until the following week.",
      result:
        "What changed: they moved the weekly step and shortened one handover. Nobody had been slow and the total experience was poor. It was invisible from inside any single department because every team's own measure was genuinely healthy. Mapping elapsed time from the customer's side is what makes this kind of problem visible at all.",
    },
    {
      kind: "illustration",
      scenario: "Counting how often people repeat themselves.",
      walkthrough:
        "The problem: a service issue generated a lot of complaints and nobody could pin down why. What was happening: the BA read transcripts from thirty calls about it and counted how many times the customer stated information the business already held. Reference number, address, description of the problem. The count was consistently high, and in most calls the repetition happened at a transfer between two teams whose systems did not share a case record.",
      result:
        "What changed: the presentation to leadership was one number and one sentence about where it happens. It was funded that quarter. Effort measures survive scrutiny in a way satisfaction scores do not, because nobody can argue a customer should have to repeat themselves, and the count points straight at the boundary causing it.",
    },
    {
      kind: "illustration",
      scenario: "The map built from what everybody assumed.",
      walkthrough:
        "The problem: a journey map was produced in a full-day workshop with representatives from each department, printed nicely, and put on the office wall. What was happening: six months later a BA compared it against contact data and drop-out rates. The stage the map identified as the main pain point generated very few contacts. The stage nobody had flagged accounted for a large share of both abandonment and complaints.",
      result:
        "What changed: they rebuilt it from evidence. The workshop had faithfully recorded what the business believed, which was the thing that needed testing rather than documenting. Get the evidence first and use the workshop to interpret it. Doing it the other way round is an efficient way to make existing assumptions look like findings.",
    },
  ],

  learningPath: [
    {
      title: "Choose one kind of customer and one goal",
      body: "Name a specific group and a specific thing they are trying to do. Start when they realise they have a need and end after they have judged the outcome.",
      effort: "1 hour",
      outcome: "A bounded journey rather than a diagram covering everybody doing everything.",
    },
    {
      title: "Get the evidence before drawing anything",
      body: "How many contacts at each stage and about what, complaint categories, how many drop out at each step, time between steps, and what people type into your website search. Ask for access early.",
      effort: "3-5 days",
      outcome: "A map that will be built from what happens rather than from what people believe.",
    },
    {
      title: "Talk to ten customers, five of whom gave up",
      body: "Ask what they did, what they expected, and where they had to chase you. Ask about the last real occasion rather than in general.",
      effort: "1 week",
      outcome: "The words customers actually use, and the reasons behind the drop-out numbers.",
    },
    {
      title: "Draw the four rows",
      body: "What they do, what they experience, what happens inside, and the numbers. One row each, lined up on the same timeline.",
      effort: "1-2 days",
      outcome: "A map where every claim about experience has a number underneath it.",
    },
    {
      title: "Add effort counts at each stage",
      body: "Number of steps, contacts, repeats, channel switches and days of waiting. Total them for the whole journey.",
      effort: "Half a day",
      outcome: "One headline number for total customer effort, which is what executives remember.",
    },
    {
      title: "Connect every pain point to something internal",
      body: "System, policy, weekly run, team boundary or missing information. Name it specifically, with an owner where one exists.",
      effort: "1 day",
      outcome: "Pain points that turn into candidate work rather than into sympathy.",
    },
    {
      title: "Check it with the departments, then publish with recommendations",
      body: "Take the evidence-based map to the teams involved and let them correct it. Then publish with three sized, ranked recommendations attached.",
      effort: "2-3 days",
      outcome: "A map with agreement behind it and a defined next step.",
    },
  ],

  exercises: [
    {
      title: "Be your own customer",
      brief:
        "Go through your own business's process as a customer would, from the public website onwards, as far as you can without special access. Record every step, every wait, and every point where you had to guess what to do next.",
      success:
        "You can name at least three points where the process assumes knowledge a real customer would not have, and you have notes or screenshots to prove them.",
      time: "2-3 hours",
    },
    {
      title: "Count the repeats",
      brief:
        "Take twenty call transcripts, chat logs or case notes for one kind of issue. Count how many times per case a customer supplies information you already hold, and note where in the process it happens.",
      success:
        "You have an average count and can point to the specific handover causing most of it.",
      time: "Half a day",
    },
    {
      title: "Compare total time against working time",
      brief:
        "For one customer journey, work out the total time from the customer's first action to it being sorted, and compare that against the total time anybody in your business spent on it.",
      success:
        "You have both numbers and a ratio, and you can identify the single longest wait the customer experiences.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Building it in a workshop from what people assume",
      why: "It records what the business already believes, which was the thing that needed testing. Assumptions presented as findings are worse than no map, because they carry false authority.",
      fix: "Get evidence first: contacts, drop-outs, timings, complaint categories. Use the workshop to interpret and check.",
    },
    {
      mistake: "Mapping everybody at once",
      why: "A journey covering all customers doing everything describes nobody. Every stage becomes a generalisation and no recommendation follows from it.",
      fix: "One kind of customer, one goal, one map. Map a second where two groups genuinely differ.",
    },
    {
      mistake: "Starting and ending at your own boundary",
      why: "The looking around beforehand and what happens afterwards are where a lot of the experience is formed, and both sit outside any internal process picture.",
      fix: "Start when the customer realises they have a need and end after they have judged whether it was worth it.",
    },
    {
      mistake: "Only talking to customers who completed",
      why: "You are surveying the survivors. The people who gave up know exactly where the process fails, and their absence is why maps built from satisfaction data look healthier than reality.",
      fix: "Deliberately reach people who dropped out. Five of those conversations outweigh fifty completion surveys.",
    },
    {
      mistake: "Measuring satisfaction instead of effort",
      why: "Satisfaction is an overall mood that moves for reasons you cannot act on, and it gives you nothing specific to fix.",
      fix: "Count steps, contacts, repeats, channel switches and waiting days. All countable and all pointing at a design decision.",
    },
    {
      mistake: "Pain points with nothing internal attached",
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
      why: "Journeys change when channels, policies or systems change, and an out-of-date map gets quoted with exactly the same confidence as a current one.",
      fix: "Date it, say which period the evidence covers, and treat it as a snapshot unless somebody owns keeping it up.",
    },
  ],

  bestPractices: [
    "Map one kind of customer doing one thing.",
    "Start before first contact and end after they have judged the outcome.",
    "Get the evidence before drawing anything.",
    "Talk to customers who gave up, not only those who got through.",
    "Use four rows: what they do, what they experience, what happens inside, and the numbers.",
    "Count effort rather than measuring satisfaction.",
    "Count how often people repeat themselves and locate where.",
    "Record waits and whether the customer knows what is happening.",
    "Identify the two or three moments that decide the relationship.",
    "Attach a named internal cause to every pain point.",
    "Check it with the departments involved before publishing.",
    "Publish with three sized, ranked recommendations.",
  ],

  proTips: [
    "Read your own outbound letters and emails as a sequence, in the order a customer receives them, rather than one at a time. Each usually makes sense alone. Together they frequently contradict each other, use three different reference numbers for the same thing, and ask for information supplied two messages earlier. It takes an afternoon and I have never done it without finding something.",
    "Look at what people type into your own website's search box. It is a list of things customers cannot find, written by customers, updated continuously, and free. Almost nobody in a business analysis role asks for it, and it maps directly onto the stages where your journey is failing.",
    "When you present, lead with the total time and the total number of customer contacts before showing the diagram. Two numbers land harder than any picture, and once people have taken them in, the map explains where the numbers came from rather than competing for attention.",
    "Keep the customer's own words on the map, in quotation marks, next to the relevant stage. A real sentence from a real person survives a leadership meeting far better than a paraphrase, and it stops the discussion drifting into whether customers really feel that way.",
  ],

  businessApplications: [
    "Digital change programmes, where this is the only picture that crosses every department involved.",
    "Reducing complaints, where the categories point straight at the stages worth mapping.",
    "Channel strategy, where the question is which contacts exist only because an earlier step failed.",
    "Improving onboarding, where drop-out data makes the pain points measurable rather than debatable.",
    "Designing a new service, using the version with the behind-the-scenes bits rather than a diagnostic map.",
    "After a merger, where two businesses offer the same service through incompatible journeys.",
  ],

  checklist: [
    "One kind of customer and one goal named.",
    "Journey starts before first contact and ends after the outcome is judged.",
    "Contact, complaint, drop-out and timing data obtained.",
    "At least five conversations with customers who gave up.",
    "Four rows drawn on one lined-up timeline.",
    "Effort counts recorded per stage and totalled.",
    "Repeats counted and located.",
    "Waits recorded, with whether the customer is kept informed.",
    "The two or three defining moments identified.",
    "Every pain point linked to a named internal cause and owner.",
    "Map checked with the departments involved.",
    "Three sized, ranked recommendations attached.",
    "Map dated with the period the evidence covers.",
  ],

  faqs: [
    {
      q: "What is the difference between this and a process picture?",
      a: "A process picture is organised by who does what inside your business. This is organised by what the customer does and experiences, including the parts before and after your boundary. You usually need both, and the gap between them is where the findings are.",
    },
    {
      q: "How many customers do I need to talk to?",
      a: "Ten is usually enough to start hearing the same things for one group and one goal, provided at least half gave up partway. Volume matters less than deliberately including people the business does not normally hear from.",
    },
    {
      q: "What if we have no research budget?",
      a: "Use what already exists: contact logs, complaint categories, chat transcripts, website search terms and drop-out data. Then walk the journey yourself as a customer. That combination costs nothing and gets you most of the way.",
    },
    {
      q: "Should it include what happens inside the business?",
      a: "Yes, as its own row lined up on the same timeline. Without it the map cannot be connected to anything anybody can change, which is how these end up as decoration.",
    },
    {
      q: "When should I add the behind-the-scenes layer?",
      a: "When you are designing rather than diagnosing. It adds what happens out of the customer's sight and the systems underneath, which is what you need to work out which internal capability has to change.",
    },
    {
      q: "How do I stop this becoming a poster?",
      a: "Put numbers on every stage and three funded-sized recommendations at the end. A map that says what to do next and what it is worth gets acted on. One that shows how customers feel gets admired.",
    },
  ],

  tools: [
    { name: "Contact and complaint data by stage and reason", what: "The numbers row. Usually already collected and almost never looked at by journey stage.", cost: "Varies" },
    { name: "Website search logs", what: "A continuously updated list of what customers cannot find, written by customers. Almost never requested.", cost: "Free" },
    { name: "Call or chat transcripts", what: "For counting repeats and hearing the customer's own words.", cost: "Varies" },
    { name: "An effort tally", what: "Steps, contacts, repeats, channel switches, waiting days per stage. The numbers that persuade executives.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "mapping-a-business-process", anchor: "the inside-out view this pairs with", context: "The other view" },
    { slug: "where-inefficiency-hides", anchor: "the internal causes behind the pain points", context: "Diagnosis" },
    { slug: "customer-research-with-ai", anchor: "making sense of a lot of customer interviews", context: "Analysis" },
  ],

  relatedGuides: ["mapping-a-business-process", "where-inefficiency-hides", "customer-research-with-ai"],

  conclusion: [
    "Take twenty call transcripts or case notes for one kind of issue and count how many times per case the customer supplies information you already hold. That single number, with the handover that causes it named beside it, will do more in a leadership meeting than any diagram you could draw this week.",
  ],
};

export default guide;
