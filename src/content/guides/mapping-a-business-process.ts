import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "mapping-a-business-process",
  seoTitle: "Mapping a Business Process People Actually Recognise",
  metaDescription:
    "How to model how work really happens: choosing the level, drawing swimlanes, capturing exceptions, and validating the map with the people who live inside it.",
  title: "Mapping a Business Process",
  keywords: [
    "business process mapping",
    "as-is process model",
    "swimlane diagram",
    "process modelling for business analysts",
    "workflow analysis",
    "bpmn basics",
  ],
  category: "requirements",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 18,

  intro: [
    "A process map is not a drawing exercise. It is an argument about how work happens, offered to a room of people who each know one part of it, and its value is entirely in the corrections it provokes. A map nobody argues with is a map nobody read.",
    "Most process maps fail in one of two directions. Either they are so abstract that they describe any business ('receive order, fulfil order, invoice'), or they are so detailed that they take three months to draw and are obsolete before the ink dries. Both are the same mistake: the level was chosen by habit rather than by what the analysis needs to answer.",
    "This guide is the practical version. How to pick the level, how to get the real process rather than the documented one, how to draw it so that a warehouse supervisor and a developer can both read it, and how to handle the exceptions, which are the part that matters and the part everyone leaves out.",
  ],

  whyItMatters: [
    "Almost every downstream artefact depends on this one. Requirements, test cases, data flows, the impact assessment, the training material and the benefits case are all derived from an understanding of how the work runs. Get the map wrong and every one of those inherits the error.",
    "It is also the fastest way to surface disagreement. Two teams can talk about the same process for a year in slightly different language and never notice they mean different things. Put one diagram on a wall and the disagreement appears in about ninety seconds.",
    "And it is the artefact that earns you the right to propose change. A BA who arrives with a solution is one voice among many. A BA who arrives with an accurate picture of how the work actually runs, including the awkward parts, is treated differently for the rest of the engagement.",
  ],

  coreConcepts: [
    {
      term: "Choose the level from the question, not from the template",
      explain:
        "There are broadly three altitudes. Value chain: five to eight boxes covering the whole business. Process: ten to thirty steps covering one end-to-end flow. Procedure: the individual keystrokes and screens. Pick the one that answers the question you were actually asked.",
      detail:
        "If the question is where to invest, map at value chain level. If the question is why orders are late, map the process. If the question is what to build, you will end up at procedure level but only for the two or three steps you are changing, never for all of them.",
    },
    {
      term: "Start and end at a business event, not at a department",
      explain:
        "A process starts when something happens in the world and ends when something of value has been delivered. Customer places an order to customer has goods and we have the money. If your map starts at 'order arrives in the system', you have already excluded the part where the trouble usually lives.",
      detail:
        "The most common scoping error is mapping a department rather than a flow. Departments are how the organisation is arranged. Flows are how value moves, and the two rarely line up, which is precisely why handovers hurt.",
    },
    {
      term: "Swimlanes because responsibility is the point",
      explain:
        "One lane per role or team, steps placed in the lane of whoever performs them. The value is not the boxes: it is every line that crosses a lane boundary, because each crossing is a handover, a queue and a chance to lose information.",
      detail:
        "Use roles, not names. People move. And keep lanes to roles that genuinely act. A lane for a system is acceptable when the system does something autonomously, and confusing when it is just where a person types.",
    },
    {
      term: "Notation should be invisible",
      explain:
        "A box for an activity, a diamond for a decision, an arrow for flow, a lane for who does it. That vocabulary covers the overwhelming majority of business process work and everyone can read it without training.",
      detail:
        "Full BPMN has dozens of symbols and is genuinely useful when a process will be executed by a workflow engine. If the audience is a business team, every symbol beyond the basic four costs you comprehension and buys you precision nobody in the room needs.",
    },
    {
      term: "Capture the trigger, the input, the output and the rule for every step",
      explain:
        "A box that says 'check credit' is a label, not a model. What starts it, what does the person need in front of them, what do they produce, and what rule do they apply to decide?",
      detail:
        "This is where a process map turns into requirements. The rule inside a step is a business rule, the input is a data requirement, and the trigger is an integration point. Capture them in a table beside the diagram rather than trying to fit them on it.",
    },
    {
      term: "Time on the map, not just steps",
      explain:
        "Against each step record touch time (how long the work takes) and wait time (how long it sits before someone starts). Against each handover record the queue.",
      detail:
        "This single addition converts a picture into a diagnosis. Sum both columns and compare. When elapsed time is many multiples of touch time, the improvement opportunity is in the flow rather than in anyone's speed, and that changes what you recommend.",
    },
    {
      term: "Volume on the map as well",
      explain:
        "How many cases per period travel each branch of every decision. A decision that sends 3% one way and 97% the other is a different design problem from one that splits evenly.",
      detail:
        "Branch volumes also tell you where to spend your remaining time. There is no point specifying an elegant solution for a path four cases a year travel while the main path stays vague.",
    },
    {
      term: "The exceptions are the process",
      explain:
        "Every map has a happy path that people describe fluently. The work sits in what happens when the document is missing, the customer changes their mind, the system is down, the value exceeds a limit, or the item is out of stock.",
      detail:
        "My rule is that a map with no exception paths is unfinished, no matter how neat it looks. Ask directly: what are the five most common reasons this does not go straight through, and what happens in each case?",
    },
    {
      term: "As-is before to-be, and keep them apart",
      explain:
        "The current state map records what happens now, without judgement and without improvements smuggled in. The future state map is a separate artefact produced later, deliberately.",
      detail:
        "Mixing them is the most common failure I see. Once a map contains half a solution, nobody can tell you whether it is accurate, because the answer to every question becomes 'well, it would be like that after the change'.",
    },
    {
      term: "Draw it wrong on purpose when a session stalls",
      explain:
        "People are far better at correcting than at describing. A deliberately imperfect map on the wall produces more information in ten minutes than an hour of open questions.",
      detail:
        "Recognition is easier than recall. This is not a trick and you do not need to hide it: telling a room that your draft is definitely wrong somewhere gives everyone permission to speak.",
    },
    {
      term: "Validate by walking a real case through the map",
      explain:
        "Take a completed case from last week and trace it across your diagram in front of the people who handled it. Every point where the case does not fit the map is a defect in the map.",
      detail:
        "Three real cases is usually enough to expose everything significant. Ask specifically for one that went badly, because the smooth ones confirm what you already drew.",
    },
    {
      term: "One page, or it will not be used",
      explain:
        "A map that does not fit on a single readable page becomes a document that lives in a folder. Decompose instead: one page for the end-to-end flow, with sub-maps for the two or three steps that need detail.",
      detail:
        "If you cannot walk somebody through the whole thing in fifteen minutes, it will not be walked through, and an unread model is worth exactly nothing regardless of how correct it is.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Six boxes on the wall, fourteen in reality.",
      walkthrough:
        "The published process for onboarding a new business customer has six steps. The BA maps it from the documentation, puts it on the wall, and asks the three people who do the work to walk a real case through it. Within twenty minutes the map has fourteen steps. The additions include a manual credit check for one customer category, an email approval that exists because of an audit finding several years earlier, a step where an address is retyped because two systems format it differently, and a wait for a weekly batch that adds days to anything arriving on the wrong afternoon.",
      result:
        "The retyped address turned out to be the source of most delivery failures, which nobody had connected to onboarding at all. The finding came from the gap between the documented map and the real one, which is why drawing the documented version first was worth the hour it cost.",
    },
    {
      kind: "illustration",
      scenario: "Two teams, one process, two different meanings of a single word.",
      walkthrough:
        "Sales and Operations both describe a step called approval. On the map, the BA places it once. In the validation session it emerges that Sales means a commercial approval of discount, and Operations means a technical approval of feasibility. They happen at different times, involve different people, and one of them can reverse the other. Because everybody had been saying the same word for years, neither team had noticed.",
      result:
        "The map split into two steps with different names, and a rule was written for what happens when the second reverses the first, which had been handled informally by one long-serving employee. The general point is that ambiguity survives in language and dies in diagrams, and this is most of why maps are worth drawing.",
    },
    {
      kind: "illustration",
      scenario: "The map that was too detailed to be read.",
      walkthrough:
        "A BA produces a fifty-page process model of an entire claims operation, correct in every particular, built over three months of interviews. It is circulated for sign-off. Two people open it. The steering group asks for a summary, and the summary becomes the thing that gets used, so decisions end up being made against a document that was written in an afternoon.",
      result:
        "The detail was not wasted, but it was produced in the wrong order and at the wrong altitude for the decision in front of the business. Map the end-to-end flow on one page first, get agreement on where the problem is, and only then go deep on the two or three steps that need it. Depth is a response to a question, not a default setting.",
    },
  ],

  learningPath: [
    {
      title: "Write the scope sentence before drawing anything",
      body: "One sentence: this map covers everything from [business event] to [value delivered], for [which cases]. Get it agreed by the sponsor. Nearly every scope argument later is a failure to do this now.",
      effort: "30 minutes",
      outcome: "A boundary you can point at when somebody wants to add a department.",
    },
    {
      title: "Draw the documented process from existing material",
      body: "Procedure notes, training decks, the last project's requirements. This is your straw man, and it is meant to be wrong. Do not spend more than an hour on it.",
      effort: "1 hour",
      outcome: "Something to react to, plus a record of the gap between belief and reality.",
    },
    {
      title: "Observe two real cases",
      body: "Sit with the people doing the work and watch. Do not ask them to explain as they go beyond what they volunteer. Record what they open, what they type twice, what they check, and where they pause.",
      effort: "Half a day",
      outcome: "The steps that never appear in an interview because they are too routine to mention.",
    },
    {
      title: "Interview for the exceptions",
      body: "Ask each role the same question: what are the five most common reasons this does not go straight through? Then follow each one to a conclusion. This is where the real requirements live.",
      effort: "1 day",
      outcome: "Exception paths with frequencies, which is the material most maps are missing.",
    },
    {
      title: "Draw the real map with lanes, times and volumes",
      body: "One page. Roles as lanes, four symbols, touch time and wait time against each step, case volume on each decision branch. Put the step detail in a table alongside rather than on the diagram.",
      effort: "1 day",
      outcome: "An artefact that supports a diagnosis, not just a description.",
    },
    {
      title: "Run a validation session and walk three real cases through it",
      body: "Everyone who appears in a lane, one room, one map, three real cases including one that went badly. Write on the map in front of them. Resist defending your draft.",
      effort: "2 hours",
      outcome: "An agreed current state, and usually two findings nobody had raised before.",
    },
  ],

  exercises: [
    {
      title: "Map something you can see",
      brief:
        "Choose a process you can observe from beginning to end in under an hour: a coffee shop order, a returns desk, a hospital reception. Draw it in swimlanes with four symbols. Add touch time and wait time. Then find one exception path by watching until something goes wrong.",
      success:
        "The map fits on one page, has at least one exception path, and someone who works there could correct it rather than being baffled by it.",
      time: "2 hours",
    },
    {
      title: "The two-column time analysis",
      brief:
        "For any process you have mapped, list every step in one column, touch time in the second, wait time in the third. Total both. Calculate the ratio of elapsed to touch time and identify the single largest wait.",
      success:
        "You can state in one sentence where the time actually goes, with a number, and it surprises at least one person who works in the process.",
      time: "1 hour",
    },
    {
      title: "The exception hunt",
      brief:
        "Take a process map you or someone else has produced. Ask three people who work in it for the five most common reasons a case does not go straight through. Count how many of the fifteen answers appear anywhere on the existing map.",
      success:
        "You have a written list of unmapped exception paths with rough frequencies, and a view on whether the existing map describes the majority of real cases.",
      time: "2 hours",
    },
  ],

  mistakes: [
    {
      mistake: "Mapping a department instead of a flow",
      why: "You produce an accurate picture of one team's work and miss every handover, which is where the delay and the information loss actually live.",
      fix: "Define the map by a business event at each end. If both ends sit inside one team, your scope is probably too narrow to explain the problem.",
    },
    {
      mistake: "Mapping only the happy path",
      why: "The happy path is the part everyone can describe and the part that already works. Building a solution from it produces a system that handles the easy cases and dumps everything else on a person.",
      fix: "Treat a map with no exception branches as unfinished. Ask for the five most common reasons a case goes sideways, and put each on the diagram with a rough frequency.",
    },
    {
      mistake: "Letting improvements creep into the as-is",
      why: "Nobody can validate a map that is half description and half proposal, because every question about accuracy gets answered with a hypothetical.",
      fix: "Keep two artefacts. Park every improvement idea in a visible list while mapping, which also reassures people that their suggestion was not lost.",
    },
    {
      mistake: "Drawing from interviews alone",
      why: "People describe the process they believe they follow. The steps that have become automatic are exactly the ones they omit, and those are frequently where the problem sits.",
      fix: "Observe at least two real cases. Interviews tell you intent, observation tells you behaviour, and you need both.",
    },
    {
      mistake: "Using notation the audience cannot read",
      why: "Every symbol beyond box, diamond, arrow and lane trades comprehension for precision. A business team that cannot read the map cannot correct it, so you lose the only thing the map was for.",
      fix: "Match notation to audience. Use richer notation only where the model will be executed by a workflow engine or handed to an integrator.",
    },
    {
      mistake: "Treating sign-off as validation",
      why: "People sign documents they have skimmed. A signature records that the process was followed, not that the map is right, and the errors surface during build when they are expensive.",
      fix: "Validate by walking real cases through the map in front of the people who handled them. Signature afterwards if the governance requires it.",
    },
    {
      mistake: "Producing the detailed map first",
      why: "Three months of detail delivered against a question that could have been answered in week one, and by the time it arrives the decision has been taken without it.",
      fix: "One page end to end, agree where the problem is, then go deep on the two or three steps that need it.",
    },
  ],

  bestPractices: [
    "Write and agree a one-sentence scope before drawing anything.",
    "Start and end the map at business events, not at department boundaries.",
    "Use roles as lanes, never individual names.",
    "Keep to four symbols unless the audience genuinely needs more.",
    "Record touch time and wait time against every step.",
    "Put case volumes on every decision branch.",
    "Capture trigger, input, output and rule for each step in a table beside the diagram.",
    "Always include exception paths with rough frequencies.",
    "Keep as-is and to-be as separate artefacts.",
    "Validate by walking three real cases through it, one of which went badly.",
    "Fit the end-to-end view on one page and decompose from there.",
  ],

  proTips: [
    "Ask for the last five real cases rather than a typical one. A typical case is a generalisation people construct on the spot, and it is smoothed by definition. Five real ones will contain at least one thing that appeared in no interview, and that thing is usually where the money is.",
    "When two people describe a step differently, resist the urge to decide who is right. Put both versions on the map temporarily and let them argue in front of it. The disagreement is nearly always about an exception, and the exception matters more than whichever version wins.",
    "Photograph the marked-up map at the end of a validation session before anybody tidies it. The handwriting, the arrows drawn over your neat boxes and the crossings-out are the actual record of what changed, and I have gone back to those photographs months later to settle arguments about what was agreed.",
    "Keep the parked-improvements list visible on the wall during as-is mapping. It stops people smuggling solutions into the description, and it means nobody has to hold their idea in their head while you ask about something else. You also arrive at the future state session with the ideas already collected.",
  ],

  businessApplications: [
    "System selection, where the map is what you evaluate vendor demonstrations against instead of a feature list.",
    "Process improvement with no software involved, which is a large and underrated share of BA work.",
    "Regulatory and audit work, where the question is whether the described control actually operates.",
    "Onboarding and knowledge transfer, where a map is the fastest way to make an operation legible to a newcomer.",
    "Outsourcing or offshoring decisions, where the handover points determine whether the split is viable.",
    "Migration projects, where the risk lives in the things the current process quietly does that nobody has written down.",
  ],

  checklist: [
    "Scope sentence written and agreed with the sponsor.",
    "Map begins and ends at a business event.",
    "Lanes are roles, not people or systems used as typing surfaces.",
    "Four-symbol notation unless a richer one is genuinely required.",
    "Touch time and wait time recorded per step.",
    "Case volume recorded on every decision branch.",
    "Step detail table completed: trigger, input, output, rule.",
    "At least three exception paths mapped, each with a rough frequency.",
    "Improvements parked in a separate visible list, not on the as-is.",
    "Two real cases observed rather than only described.",
    "Three real cases walked through the map with the people who handled them.",
    "The whole flow fits on one readable page.",
  ],

  faqs: [
    {
      q: "How detailed should a process map be?",
      a: "Detailed enough to answer the question you were asked and no more. One page end to end, with sub-maps only for the steps you are changing. If you cannot walk someone through it in fifteen minutes, it is at the wrong altitude for the decision.",
    },
    {
      q: "Do I need to learn BPMN?",
      a: "Learn the four basic symbols properly and you can map almost anything. Full BPMN earns its keep when a workflow engine will execute the model or an integrator needs precision. For a business audience it usually costs more in comprehension than it returns.",
    },
    {
      q: "What tool should I use?",
      a: "The one your business can already open. A perfect diagram in software nobody has a licence for cannot be corrected by the people who need to correct it. Paper on a wall is a legitimate answer for the first version.",
    },
    {
      q: "How do I map a process that varies by region or product?",
      a: "Map the common flow once and record the variations in a table against the steps where they differ. Drawing four near-identical maps hides the fact that they are ninety per cent the same, which is usually the most useful finding.",
    },
    {
      q: "The team disagrees about how the process runs. What now?",
      a: "That is a result, not an obstacle. Put both versions on one diagram and find out whether they are describing different cases, different regions, or a rule that one team does not know about. The disagreement usually is the finding.",
    },
    {
      q: "How current does the map stay?",
      a: "It decays from the day you draw it. Date it, name the cases it was validated against, and treat it as evidence from a point in time rather than a living document, unless somebody has been given the job of maintaining it.",
    },
  ],

  tools: [
    { name: "A diagramming tool your business can open", what: "Swimlanes and flows. The one already licensed at your company beats the better one nobody can access.", cost: "Varies" },
    { name: "Paper and a wall", what: "Still the fastest way to run a validation session. People will write on paper who would never edit a file.", cost: "Free" },
    { name: "A step detail table", what: "Trigger, input, output, rule, touch time, wait time, volume. The half of the model that does not fit on a diagram.", cost: "Free" },
    { name: "Read access to workflow timestamps", what: "Turns estimated wait times into measured ones, which is the difference between a description and a diagnosis.", cost: "Varies" },
  ],

  internalLinks: [
    { slug: "where-inefficiency-hides", anchor: "what to look for while you map", context: "During mapping" },
    { slug: "asking-questions-that-get-answers", anchor: "getting the real process out of people", context: "Elicitation" },
    { slug: "designing-the-future-state", anchor: "turning the current state into a target", context: "Next step" },
  ],

  relatedGuides: ["where-inefficiency-hides", "asking-questions-that-get-answers", "designing-the-future-state"],

  conclusion: [
    "Draw the documented version of one process from existing material this week, spend no more than an hour on it, then put it in front of two people who do the work and ask them to correct it. The gap between what you drew and what they tell you is your first real finding, and it usually arrives inside twenty minutes.",
  ],
};

export default guide;
