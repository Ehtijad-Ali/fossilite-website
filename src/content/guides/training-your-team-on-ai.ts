import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "training-your-team-on-ai",
  seoTitle: "Training Your Team on AI: Sessions That Change Work",
  metaDescription:
    "Why generic AI training produces no lasting usage, and how to run sessions on real tasks that leave people with something working before they walk out.",
  title: "Training Your Team on AI",
  keywords: [
    "ai training for teams",
    "ai upskilling",
    "prompt training",
    "ai enablement",
    "employee ai training",
    "ai workshop",
  ],
  category: "career-development",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 9,

  intro: [
    "The standard AI training session covers what a language model is, shows a few prompting techniques, takes an hour, and produces almost no change in behaviour. Attendance is good, feedback is positive, and usage three weeks later is indistinguishable from before.",
    "The reason is simple once you see it. People left knowing how the tool works and not knowing when they would use it. Those are different pieces of knowledge, and only one of them survives contact with a busy week.",
    "This guide is about the second kind: sessions built on the work people actually do, which end with something already running.",
  ],

  coreConcepts: [
    {
      term: "Teach the task, not the tool",
      explain:
        "A session about prompting teaches a general skill with no specific occasion. A session about the weekly report someone hates gives them something to do on Monday.",
      detail:
        "The general skill is real, but people acquire it as a side effect of solving something they cared about. In the other order it does not stick.",
    },
    {
      term: "Bring real documents",
      explain:
        "Sanitised examples work perfectly and teach nothing, because the difficulty in real work is the mess: inconsistent formats, missing fields, context that lives in someone's head.",
      detail:
        "Have people bring their own files. The session gets harder and considerably more useful.",
    },
    {
      term: "Nobody leaves empty-handed",
      explain:
        "The measure of a session is how many people walk out with a working prompt saved somewhere they will find it again.",
      detail:
        "Build in the time to actually save it. The step everyone skips is the one that determines whether the session mattered.",
    },
    {
      term: "Show the failures deliberately",
      explain:
        "People need to see the model be confidently wrong while they are in a room with someone who can explain it, not alone in front of a customer.",
      detail:
        "Ask it something it cannot know and let it invent an answer. That five minutes prevents more damage than an hour of technique.",
    },
    {
      term: "Peer demonstration beats formal training",
      explain:
        "A colleague showing something that saved them two hours is more persuasive than any external session, because the credibility and the context are both local.",
      detail:
        "Create a regular slot for it. The content is free and the adoption effect is larger than anything you can buy.",
    },
    {
      term: "Capture what works in a shared place",
      explain:
        "Every team independently rediscovering the same prompt is waste. A shared library turns one person's afternoon into everyone's five minutes.",
      detail:
        "Keep it where people already work. A library in a system nobody opens is the same as no library.",
    },
    {
      term: "Roles need different sessions",
      explain:
        "Finance, support, marketing and operations have almost nothing in common in what they would use this for. One session for everyone optimises for nobody.",
      detail:
        "Run short, role-specific sessions instead of one long general one. Same total time, different result.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Two sessions, same tool, different outcomes.",
      walkthrough:
        "A company runs an introductory AI session for all staff, covering capabilities and prompting patterns. Feedback scores are high. Usage climbs for a fortnight and settles among a handful of enthusiasts. Later, the same company runs ninety-minute sessions per team, where each person brings the most repetitive task in their week and works on it with someone experienced in the room.",
      result:
        "The second format produced sustained usage and the first did not. The content overlapped almost entirely. What differed was that everyone left the second session with a saved prompt attached to a task that recurs, so the next use was already scheduled by their own calendar.",
    },
    {
      kind: "illustration",
      scenario: "The team that learned to distrust the output, in a good way.",
      walkthrough:
        "During a session, a facilitator asks the model a question about the company's own internal policy, which it has no access to. It answers fluently and incorrectly, with plausible detail. The room notices that nothing about the response signalled uncertainty.",
      result:
        "That demonstration did more for safe usage than the policy document had. People who have watched a confident wrong answer once check the important ones afterwards. Build this into every session rather than describing it in a slide.",
    },
  ],

  mistakes: [
    {
      mistake: "One long session for the whole company",
      why: "It has to stay general to be relevant to everyone, and general is exactly what fails to produce a next action.",
      fix: "Shorter sessions per role or per team, built on that team's recurring work.",
    },
    {
      mistake: "Using clean example data",
      why: "It hides the actual difficulty. People succeed in the room and fail at their desk, then conclude the tool does not work on real inputs.",
      fix: "Everyone brings a real file. Expect the session to be messier and more useful.",
    },
    {
      mistake: "Ending without saving anything",
      why: "A prompt that worked once and was not saved is gone by Thursday. The session becomes a pleasant memory.",
      fix: "Reserve the last fifteen minutes for saving prompts into a shared library, and check people have done it.",
    },
    {
      mistake: "Skipping the limitations",
      why: "People who have not seen the model be confidently wrong will trust output in exactly the situations where they should not.",
      fix: "Demonstrate a fabricated answer live. It takes five minutes and it changes how the room reads everything afterwards.",
    },
    {
      mistake: "Training before the policy exists",
      why: "You have just taught four hundred people to be effective with a tool without telling them what they may put into it.",
      fix: "Publish the usage policy first, and spend two minutes of the session on it.",
    },
  ],

  bestPractices: [
    "Publish your usage policy before the first session.",
    "Run short sessions per team rather than one long one for everyone.",
    "Require everyone to bring a real task and a real file.",
    "Demonstrate a confident wrong answer deliberately.",
    "Reserve time at the end to save working prompts to a shared library.",
    "Create a recurring slot for people to show colleagues what worked.",
    "Follow up four weeks later and ask what they have actually used, not whether they enjoyed it.",
  ],

  exercises: [
    {
      title: "The bring-your-own-task session",
      brief:
        "Run ninety minutes with one team. Everyone brings the most repetitive thing in their week and a real example file. Work on them together. Last fifteen minutes are for saving what worked.",
      success: "Every attendee leaves with at least one saved prompt attached to a recurring task.",
      time: "90 minutes plus preparation",
    },
    {
      title: "The four-week follow-up",
      brief:
        "Ask each attendee what they have actually used since. Not whether they found it useful. What they used, and how often.",
      success: "An honest number, and a clear picture of which roles found a fit and which did not.",
      time: "30 minutes",
    },
  ],

  faqs: [
    {
      q: "How long should AI training be?",
      a: "Ninety minutes per team, on their own work, beats a half day of general content. Depth of relevance matters more than duration.",
    },
    {
      q: "Should we hire an external trainer?",
      a: "For the first session, possibly. For sustained adoption, an internal colleague demonstrating something that saved them time is consistently more effective.",
    },
    {
      q: "What if people are anxious about their jobs?",
      a: "Address it before the training, from leadership, with specifics. A session about efficiency delivered into unanswered job anxiety gets polite attendance and no adoption.",
    },
    {
      q: "How do we measure whether training worked?",
      a: "Not by attendance or satisfaction. Ask four weeks later what people have actually used, and look at whether any process metric moved.",
    },
  ],

  tools: [
    { name: "A shared prompt library", what: "The single highest-return artefact from any training programme. Keep it where people already work.", cost: "Free" },
    { name: "Business-tier accounts, provisioned before the session", what: "People cannot practise on a tool they do not have access to yet.", cost: "Paid" },
    { name: "Your own real documents", what: "The most important training material, and the one most programmes leave out.", cost: "Free" },
  ],

  resources: [
    { title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", kind: "Paper", note: "The paper behind 'think step by step'. Short, and it grounds a technique most training covers as folklore.", url: "https://arxiv.org/abs/2201.11903" },
  ],

  internalLinks: [
    { slug: "prompt-engineering-fundamentals", anchor: "the underlying prompting skills", context: "Course material" },
    { slug: "leading-an-ai-rollout", anchor: "the wider adoption problem", context: "Context for training" },
    { slug: "writing-an-ai-usage-policy", anchor: "publish the policy first", context: "Prerequisite" },
  ],

  relatedGuides: ["prompt-engineering-fundamentals", "leading-an-ai-rollout", "writing-an-ai-usage-policy"],

  conclusion: [
    "Run one ninety-minute session with a single team this month, on their real work, and follow up in four weeks. That follow-up number will tell you more about your adoption strategy than any survey.",
  ],
};

export default guide;
