import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "symptom-versus-problem",
  seoTitle: "Is That the Problem, or Just What Somebody Noticed?",
  metaDescription:
    "Nobody brings you a problem. They bring you an irritation. Five questions that get you underneath it, and when patching the surface is the right call anyway.",
  title: "Is That the Real Problem?",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 13,

  intro: [
    "Nobody walks up to you with a problem. They walk up with an irritation, the irritation is real, and it is almost never the thing that needs fixing. The report takes too long to produce is an irritation. Somewhere underneath it is a reason, and the reason is usually not about the report.",
    "This is the skill that most separates an experienced BA from a new one. Not drawing diagrams, not writing documents, not knowing tools. It is being able to sit in front of a confident, specific, urgent request and work out what it is a symptom of, without making the person who brought it to you feel stupid.",
    "Get it wrong and you build something that works perfectly and changes nothing. The complaint comes back in six weeks wearing a different shirt, and now there is also a system to look after.",
  ],

  whyItMatters: [
    "Fixing the surface is not neutral. It costs money, it adds something to maintain, and it usually makes the real problem harder to find, because the pain that would have led you there has been muffled.",
    "There is an organisational cost too. Every surface fix tells the business that requests get built. That is how a delivery team turns into an order queue, and it is very hard to reverse once it has happened.",
  ],

  coreConcepts: [
    {
      term: "A symptom is what you notice. A problem is what causes it.",
      explain:
        "The test is direction. If fixing it would stop other things happening, it is closer to a real problem. If fixing it would only stop you noticing, it is a symptom.",
      detail:
        "Ask it out loud: if this were fixed tomorrow, what else would change? A blank look tells you a lot.",
    },
    {
      term: "Does it keep coming back?",
      explain:
        "A problem that returns after being solved was never solved, only muffled. That is the strongest single signal that you are working on a symptom.",
      detail:
        "Ask how long this has been going on and what has already been tried. The graveyard of previous fixes tells you where the real thing is hiding.",
    },
    {
      term: "Can you ask why twice without hitting a wall?",
      explain:
        "Real problems have depth. The report takes too long. Why? The data comes from four systems. Why does that take long? Two of them disagree and somebody has to reconcile it by hand. Now you are somewhere.",
      detail:
        "Two levels is the practical minimum. Five is the famous version and is often theatre. Stop when the answers start being about decisions somebody made rather than about mechanics, because that is the layer where the real fix lives.",
    },
    {
      term: "Who else has this?",
      explain:
        "If one team has it, it might be local. If three teams have versions of it, something upstream is causing all three, and fixing it once is worth far more than fixing it three times.",
      detail:
        "This also protects you politically. A fix that serves three departments is much easier to get funded than one that serves the loudest.",
    },
    {
      term: "How big is it really?",
      explain:
        "How much people complain is not the same as how much it costs. The loudest problem is frequently a small one happening to somebody senior, and the expensive one is quiet.",
      detail:
        "Get the count and the time. Forty times a week at six minutes is a different conversation from twice a month at an hour, even when the second one generates more emails.",
    },
    {
      term: "When did it start?",
      explain:
        "If the answer is a date, something changed then, and that change is usually the cause. If the answer is always, you are looking at a design decision rather than something that broke.",
      detail:
        "This one question settles a surprising number of investigations in under a minute.",
    },
    {
      term: "Sometimes you fix the symptom on purpose",
      explain:
        "If the real cause sits in a system being replaced next year, or in a department that will not change, patching the surface is a perfectly legitimate decision.",
      detail:
        "The discipline is knowing that is what you are doing and writing it down. A deliberate patch is engineering. An accidental one is waste.",
    },
    {
      term: "Never make the person wrong",
      explain:
        "They are not confused. They described their experience accurately. You are adding a layer they had no reason to look for.",
      detail:
        "Ask about mechanics rather than about their judgement. Help me understand what happens just before this gets you much further than are you sure that is the problem.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The overtime that was really a data problem.",
      walkthrough:
        "The problem: a warehouse team was running four hours of overtime most Fridays and asked for more staff. What was happening: the BA asked when it started. About eight months ago. What changed then? A new supplier came on board. Following the thread, that supplier sends delivery notes in a format the receiving system cannot read, so every one of their consignments gets typed in by hand. They are about a fifth of the volume and almost all of the Friday backlog.",
      result:
        "What changed: two options appeared, change the supplier's format or build something that reads it. Neither was more staff, which would have cost more every year and hidden the cause permanently. The question that cracked it was not clever, it was when did this start, asked in the first ten minutes.",
    },
    {
      kind: "documented",
      scenario: "A mistake that generated no complaints at all.",
      walkthrough:
        "Ziemann, Eren and El-Osta looked at thousands of published science papers and the gene lists attached to them. Spreadsheet software had silently turned certain gene names into dates. No warning appeared, the changed values looked completely normal, and around a fifth of the papers they examined were affected. All of it had been through peer review.",
      result:
        "The uncomfortable lesson for anyone defining a problem: symptoms are what somebody noticed, which means your inbox is a biased sample of what is wrong with the business. The most expensive problems often produce no symptom at all, which is why volume and error data matter more than how many people are complaining.",
      source: {
        label: "Ziemann, Eren and El-Osta (2016). Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "illustration",
      scenario: "Three complaints, one cause.",
      walkthrough:
        "The problem: sales said quotes took too long, finance said invoices kept getting disputed, and delivery said specifications arrived incomplete. Three teams, three tickets, three suggested solutions. What was happening: the BA noticed all three touched the same handover, the point where a signed order becomes a work instruction. Nobody owned the format of that handover, so each team filled the gaps by asking the customer again.",
      result:
        "What changed: one fix, three teams better off, and a case that funded itself. None of the three original requests would have found this, because each team could only see their own end of it. Asking who else has a version of this is what surfaced it.",
    },
  ],

  learningPath: [
    {
      title: "Write the request down exactly as it was given",
      body: "Word for word, including the solution they suggested. You will come back to this, and the gap between what was asked for and what was needed is the most useful thing you will show anybody.",
      effort: "5 minutes",
      outcome: "A starting point nobody can argue with later.",
    },
    {
      title: "Ask the five questions",
      body: "Does it keep coming back, can you ask why twice, who else has it, how big is it really, when did it start. Twenty minutes with the right person answers most of them.",
      effort: "1 hour",
      outcome: "A view on whether you are holding a symptom or a cause.",
    },
    {
      title: "Get one number",
      body: "How often times how long, or volume times error rate. Anything that turns the complaint into a size. Without it you cannot prioritise and you cannot justify anything.",
      effort: "Half a day",
      outcome: "A figure that makes the conversation concrete.",
    },
    {
      title: "Write the problem down with no solution in it",
      body: "One paragraph: who is affected, what happens, how often, what it costs, and what makes it happen. If a solution has crept in, delete it and try again.",
      effort: "1 hour",
      outcome: "The thing everything downstream gets built on.",
    },
    {
      title: "Take it back to the person who asked",
      body: "Show them the paragraph and ask whether it describes what they experience. They will correct something, and the correction is usually the most valuable sentence in the whole exercise.",
      effort: "30 minutes",
      outcome: "Agreement on the problem before anybody argues about solutions.",
    },
  ],

  mistakes: [
    {
      mistake: "Taking the suggested solution as the job",
      why: "You deliver somebody's guess, and when it does not help, the failure gets blamed on the build rather than on how it was framed.",
      fix: "Separate what was asked for from what is needed, in writing, on day one. Keep both visible.",
    },
    {
      mistake: "Stopping at the first plausible cause",
      why: "The first answer is usually about mechanics and the real cause is usually a decision. Stopping early gives you a technically correct fix that changes nothing.",
      fix: "Ask why at least twice. Keep going until the answers stop being about mechanics.",
    },
    {
      mistake: "Judging size by how loudly it is reported",
      why: "How much people complain tracks their seniority and temperament, not the cost. The quiet problems are frequently the expensive ones.",
      fix: "Get how often and how long from data, not from the room.",
    },
    {
      mistake: "Making the requester wrong",
      why: "They described their experience accurately. Implying otherwise costs you the access you need and they stop telling you things.",
      fix: "Frame every follow-up as curiosity about how it works. You are adding a layer, not correcting them.",
    },
    {
      mistake: "Patching the surface without recording that you did",
      why: "A deliberate patch is a reasonable decision. An unrecorded one means nobody ever revisits the cause and the patch becomes permanent.",
      fix: "Write down that this is a surface fix, why, and what would make you look at it again.",
    },
  ],

  bestPractices: [
    "Write the request down word for word before analysing it.",
    "Ask when it started. It settles more investigations than any other question.",
    "Ask why at least twice and stop when answers become decisions rather than mechanics.",
    "Check who else has a version of the same thing.",
    "Put a size on it using how often and how long, from data rather than from the room.",
    "Write a problem statement with no solution in it.",
    "Take that statement back to the person who asked and let them correct it.",
    "If you patch the surface on purpose, record that you did and what would reopen it.",
  ],

  proTips: [
    "The most useful question I know is what do you do when that happens. People describe the workaround, and the workaround is a precise map of where the system fails them. It is also proof the problem is real, because nobody builds a workaround for a minor annoyance.",
    "Watch for the word just in a request. Can you just add a field almost always marks the spot where somebody has already squashed a messy problem into a small ask to make it easier to say. Unpack every just.",
    "If nobody can tell you when the problem started, ask who used to do this job. People who have left remember the change everybody else has stopped noticing.",
  ],

  businessApplications: [
    "Sorting through an incoming request queue, deciding what deserves analysis and what is already understood.",
    "Improvement work where the same complaint has already been fixed twice.",
    "Choosing a supplier, where the requirements list is frequently a list of symptoms in disguise.",
    "Reviewing after an incident, separating what triggered it from what made the trigger matter.",
    "Cost reduction, where the loudest costs are rarely the biggest.",
  ],

  faqs: [
    {
      q: "How do I do this without annoying the person who asked?",
      a: "Ask about how things work rather than about their judgement. Talk me through what happens just before this is curiosity. Is that really the problem is a challenge. Same information, completely different relationship afterwards.",
    },
    {
      q: "What if the sponsor insists on their solution?",
      a: "Write down the problem and the alternative, state the cost difference, and let them decide in writing. Sometimes they know something you do not. Your job is to make the choice informed, not to win it.",
    },
    {
      q: "How far down should I go?",
      a: "Until the answers stop being about mechanics and start being about decisions somebody made. That is the layer where a fix actually changes behaviour, and it is usually two or three levels rather than five.",
    },
    {
      q: "Is it ever right to just fix the symptom?",
      a: "Yes, and often. If the real cause sits in a system being retired, or in a department outside your influence, a patch is sensible. Record it as a deliberate choice with something that would make you revisit it.",
    },
    {
      q: "What if there is no data to size it?",
      a: "Then sizing it is your first piece of work. Two weeks of tally marks by the people doing the task beats any estimate, and it turns an anecdote into something you can prioritise.",
    },
  ],

  tools: [
    { name: "A problem statement template", what: "Who, what, how often, what it costs, what causes it. One paragraph, no solutions allowed.", cost: "Free" },
    { name: "A tally sheet", what: "Two weeks of counting by the people doing the work. The cheapest way to size something nobody has measured.", cost: "Free" },
    { name: "Access to the data", what: "The difference between checking something yourself and waiting three days to be told.", cost: "Varies" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "Evidence that the most expensive problems can generate no complaints at all. Short and genuinely unsettling.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
  ],

  internalLinks: [
    { slug: "what-a-business-analyst-actually-does", anchor: "the wider job this sits inside", context: "Context" },
    { slug: "learning-a-business-fast", anchor: "building the context to spot causes", context: "Before analysis" },
    { slug: "thinking-critically-about-evidence", anchor: "reading the numbers sceptically", context: "Sizing" },
  ],

  relatedGuides: ["what-a-business-analyst-actually-does", "learning-a-business-fast", "thinking-critically-about-evidence"],

  conclusion: [
    "Take the request currently at the top of your queue and ask when it started. If the answer is a date, spend an hour finding out what changed then. That single question settles more investigations than any method on this page.",
  ],
};

export default guide;
