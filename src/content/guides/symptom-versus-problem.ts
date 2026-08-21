import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "symptom-versus-problem",
  seoTitle: "Symptom or Problem: Telling the Difference Before You Build",
  metaDescription:
    "How a Business Analyst separates what people complain about from what is actually wrong. The five tests, the questions that get you underneath, and when a symptom is worth fixing anyway.",
  title: "Symptom Versus Problem",
  keywords: [
    "root cause vs symptom",
    "business analysis problem definition",
    "problem statement ba",
    "identifying the real problem",
    "business problem analysis",
    "five whys",
  ],
  category: "business-analysis",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 13,

  intro: [
    "Nobody walks up to you with a problem. They walk up with an irritation, and the irritation is real, and it is almost never the thing that needs fixing. 'The report takes too long to produce' is an irritation. Somewhere underneath it is a reason, and the reason is usually not about the report.",
    "This is the skill that most separates an experienced BA from a new one. Not modelling, not documentation, not tooling. The ability to sit in front of a confident, specific, urgent request and work out what it is a symptom of, without insulting the person who brought it to you.",
    "Get this wrong and you build something that works perfectly and changes nothing. The complaint returns in six weeks wearing a different shirt, and now there is also a system to maintain.",
  ],

  whyItMatters: [
    "Fixing a symptom is not neutral. It costs money, it adds a thing to maintain, and it usually makes the underlying problem harder to see because the pain that would have led you to it has been muffled.",
    "There is also an organisational cost. Every symptom you automate is a signal to the business that requests get built. That is how a delivery team turns into an order queue, and it is very hard to reverse once it has happened.",
  ],

  coreConcepts: [
    {
      term: "A symptom is something you notice. A problem is something that causes.",
      explain:
        "The test is directional. If fixing it would stop other things happening, it is closer to a problem. If fixing it would only stop you noticing, it is a symptom.",
      detail:
        "Apply it out loud: 'if this were fixed tomorrow, what else would change?' A blank look is diagnostic.",
    },
    {
      term: "Test one: does it recur?",
      explain:
        "A problem that keeps coming back after being solved was never solved. It was suppressed. Recurrence is the strongest single signal that you were working on a symptom.",
      detail:
        "Ask how long this has been an issue and what has already been tried. The graveyard of previous fixes tells you where the real thing is hiding.",
    },
    {
      term: "Test two: can you ask why twice without hitting a wall?",
      explain:
        "Real problems have depth. 'The report takes too long.' Why? 'The data comes from four systems.' Why does that take long? 'Two of them disagree and someone has to reconcile by hand.' Now you are somewhere.",
      detail:
        "Two levels is the practical minimum. Five is the famous version and often theatre. Stop when the answers start being about organisational decisions rather than mechanics, because that is the layer where the real fix lives.",
    },
    {
      term: "Test three: who else has this?",
      explain:
        "If one team has it, it may be local. If three teams have versions of it, there is a shared cause upstream and fixing it once is worth far more than fixing it three times.",
      detail:
        "This question also protects you politically. A fix that serves three departments is much easier to fund than one that serves the loudest.",
    },
    {
      term: "Test four: what does the data say about size?",
      explain:
        "Complaint volume is not the same as impact. The loudest problem is frequently a small one experienced by someone senior, and the expensive one is quiet.",
      detail:
        "Get the count and the time. Forty times a week at six minutes is a different conversation from twice a month at an hour, even when the second one generates more emails.",
    },
    {
      term: "Test five: does the timeline make sense?",
      explain:
        "Ask when it started. If the answer is a date, something changed then, and that change is usually the cause. If the answer is 'always', you are looking at a design decision rather than a fault.",
      detail:
        "This one question resolves a surprising number of investigations in under a minute.",
    },
    {
      term: "Sometimes you fix the symptom on purpose",
      explain:
        "If the root cause sits in a system being replaced next year, or in a department that will not change, patching the symptom is a legitimate decision.",
      detail:
        "The discipline is to know that is what you are doing and to write it down. An informed symptom fix is engineering. An accidental one is waste.",
    },
    {
      term: "Never make the requester wrong",
      explain:
        "They are not confused. They described their experience accurately. You are adding a layer they had no reason to look for.",
      detail:
        "Phrase it as curiosity about the mechanics rather than doubt about the request. 'Help me understand what happens just before this' gets you further than 'are you sure that is the problem?'",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The overtime that was a data problem.",
      walkthrough:
        "A warehouse team is running four hours of overtime most Fridays and asks for more staff. The BA asks when it started: about eight months ago. What changed? A new supplier onboarded. Following the thread, that supplier sends delivery notes in a format the receiving system cannot read, so every one of their consignments is keyed by hand. They represent roughly a fifth of volume and almost all of the Friday backlog.",
      result:
        "Two candidate fixes: change the supplier's format, or build a parser. Neither is 'more staff', which would have cost more every year and hidden the cause permanently. The question that cracked it was not clever, it was 'when did this start', asked in the first ten minutes.",
    },
    {
      kind: "documented",
      scenario: "A silent error that generated no complaints at all.",
      walkthrough:
        "Ziemann, Eren and El-Osta examined thousands of genomics papers and the gene lists published with them. Spreadsheet software had silently converted certain gene symbols into dates. No warning appeared, the converted values looked entirely normal, and around a fifth of the papers examined were affected. All of it had passed peer review.",
      result:
        "The lesson for problem definition is uncomfortable. Symptoms are what somebody noticed, which means your inbox is a biased sample of what is wrong with the business. The most expensive problems often produce no symptom at all, which is why volume and exception data matter more than complaint volume.",
      source: {
        label: "Ziemann, Eren and El-Osta (2016). Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "illustration",
      scenario: "Three complaints, one cause.",
      walkthrough:
        "Sales says quotes take too long. Finance says invoices get disputed. Delivery says specifications arrive incomplete. Three teams, three tickets, three proposed solutions. The BA notices all three touch the same handover: the point where a signed order becomes a work instruction. Nobody owns the format of that handover, so each team fills the gaps by asking the customer again.",
      result:
        "One fix, three beneficiaries, and a business case that funds itself. None of the three original requests would have found this, because each team could only see their end of it. Test three is what surfaced it.",
    },
  ],

  learningPath: [
    {
      title: "Write the request down exactly as given",
      body: "Verbatim, including the proposed solution. You will come back to this, and the difference between what was asked for and what was needed is the most useful thing you will show anyone.",
      effort: "5 minutes",
      outcome: "A baseline you cannot argue with later.",
    },
    {
      title: "Run the five tests",
      body: "Does it recur, can you ask why twice, who else has it, how big is it really, when did it start. Twenty minutes with the right person answers most of them.",
      effort: "1 hour",
      outcome: "A view on whether you are holding a symptom or a cause.",
    },
    {
      title: "Get one number",
      body: "Frequency times duration, or volume times error rate. Anything that converts the complaint into a size. Without it you cannot prioritise and you cannot justify anything.",
      effort: "Half a day",
      outcome: "A figure that makes the conversation concrete.",
    },
    {
      title: "Write a problem statement with no solution in it",
      body: "One paragraph: who is affected, what happens, how often, what it costs, and what makes it happen. If a solution has crept in, delete it and try again.",
      effort: "1 hour",
      outcome: "The artefact everything downstream is built on.",
    },
    {
      title: "Take it back to the requester",
      body: "Show them the statement and ask whether it describes their experience. They will correct something, and the correction is usually the most valuable sentence in the whole exercise.",
      effort: "30 minutes",
      outcome: "Agreement on the problem before anyone argues about solutions.",
    },
  ],

  mistakes: [
    {
      mistake: "Accepting the proposed solution as the scope",
      why: "You end up delivering somebody's guess, and when it does not help, the failure is attributed to the build rather than to the framing.",
      fix: "Separate the request from the requirement in writing on day one. Keep both visible.",
    },
    {
      mistake: "Stopping at the first plausible cause",
      why: "The first answer is usually mechanical and the real cause is usually a decision. Stopping early gives you a technically correct fix that changes nothing.",
      fix: "Ask why at least twice. Keep going until the answers stop being about mechanics.",
    },
    {
      mistake: "Sizing by how loudly it is reported",
      why: "Complaint volume tracks seniority and temperament, not cost. The quiet problems are frequently the expensive ones.",
      fix: "Get frequency and duration from data, not from the room.",
    },
    {
      mistake: "Treating the requester as mistaken",
      why: "They described their experience accurately. Implying otherwise costs you the access you need and they stop telling you things.",
      fix: "Frame every follow-up as curiosity about mechanics. You are adding a layer, not correcting them.",
    },
    {
      mistake: "Fixing symptoms without recording that you did",
      why: "A deliberate symptom fix is a reasonable decision. An unrecorded one means nobody revisits the cause and the patch becomes permanent architecture.",
      fix: "Write down that this is a symptom fix, why, and what would trigger revisiting it.",
    },
  ],

  bestPractices: [
    "Write the request verbatim before analysing it.",
    "Ask when it started. It resolves more investigations than any other single question.",
    "Ask why at least twice and stop when answers become decisions rather than mechanics.",
    "Check who else has a version of the same thing.",
    "Size it with frequency and duration from data, not from the room.",
    "Write a problem statement containing no solution.",
    "Take the statement back to the requester and let them correct it.",
    "If you fix a symptom deliberately, record that you did and what would reopen it.",
  ],

  proTips: [
    "The most useful question I know is 'what do you do when that happens?'. People describe the workaround, and the workaround is a precise map of where the system fails them. It is also proof the problem is real, because nobody builds a workaround for an inconvenience.",
    "Watch for the word 'just' in a request. 'Can you just add a field' almost always marks the place where someone has already compressed a messy problem into a small ask to make it easier to say. Unpack every 'just'.",
    "If nobody can tell you when the problem started, ask who used to do this job. Predecessors remember the change that everyone else has normalised.",
  ],

  businessApplications: [
    "Triage of an incoming request queue, deciding what deserves analysis and what is already understood.",
    "Continuous improvement work where the same complaint has been fixed twice already.",
    "Vendor selection, where the requirements list is frequently a list of symptoms in disguise.",
    "Post-incident review, separating the trigger from the condition that made the trigger matter.",
    "Cost reduction programmes, where the loudest costs are rarely the largest.",
  ],

  faqs: [
    {
      q: "How do I do this without annoying the requester?",
      a: "Ask about mechanics rather than about their judgement. 'Talk me through what happens just before this' is curiosity. 'Is that really the problem?' is a challenge. Same information, entirely different relationship afterwards.",
    },
    {
      q: "What if the sponsor insists on their solution?",
      a: "Document the problem statement and the alternative, state the cost difference, and let them decide in writing. Sometimes they know something you do not. Your job is to make the choice informed, not to win it.",
    },
    {
      q: "How far down should I go?",
      a: "Until the answers stop being mechanical and start being decisions somebody made. That is the layer where a fix actually changes behaviour, and it is usually two or three levels, not five.",
    },
    {
      q: "Is it ever right to just fix the symptom?",
      a: "Yes, and often. If the root cause sits in a system being retired, or in a department outside your influence, a patch is rational. Record it as a deliberate choice with a trigger for revisiting.",
    },
    {
      q: "What if there is no data to size it?",
      a: "Then sizing it is your first piece of work. Two weeks of tally marks by the people doing the task beats any estimate, and it converts an anecdote into something you can prioritise.",
    },
  ],

  tools: [
    { name: "A problem statement template", what: "Who, what, how often, what it costs, what causes it. One paragraph, no solutions allowed.", cost: "Free" },
    { name: "A tally sheet", what: "Two weeks of counting by the people doing the work. The cheapest way to size an unmeasured problem.", cost: "Free" },
    { name: "Read access to the source data", what: "The difference between checking a claim yourself and waiting three days to be told.", cost: "Varies" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "Evidence that the most expensive problems can generate no symptom at all. Short and genuinely unsettling.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
  ],

  internalLinks: [
    { slug: "what-a-business-analyst-actually-does", anchor: "the wider job this sits inside", context: "Context" },
    { slug: "learning-a-business-fast", anchor: "building the context to spot causes", context: "Before analysis" },
    { slug: "thinking-critically-about-evidence", anchor: "reading the numbers sceptically", context: "Sizing" },
  ],

  relatedGuides: ["what-a-business-analyst-actually-does", "learning-a-business-fast", "thinking-critically-about-evidence"],

  conclusion: [
    "Take the request currently at the top of your queue and ask when it started. If the answer is a date, spend an hour finding out what changed then. That single question resolves more investigations than any framework on this page.",
  ],
};

export default guide;
