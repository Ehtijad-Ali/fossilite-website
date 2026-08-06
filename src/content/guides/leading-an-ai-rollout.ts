import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "leading-an-ai-rollout",
  seoTitle: "Leading an AI Rollout: Getting a Team to Actually Use It",
  metaDescription:
    "The management side of AI adoption: why licences go unused, how to handle the job-security question honestly, and what to do when the pilot works but nothing changes.",
  title: "Leading an AI Rollout",
  keywords: [
    "ai adoption",
    "ai change management",
    "ai rollout strategy",
    "team ai training",
    "ai adoption failure",
    "leading ai transformation",
  ],
  category: "leadership",
  level: "Intermediate",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 11,

  intro: [
    "Most AI rollouts fail in a specific and boring way. Licences get bought, an announcement goes out, a few enthusiasts use it heavily, and everyone else opens it twice. Six months later someone asks what the spend achieved and there is no honest answer.",
    "The reason is almost never the technology. It is that people were given a tool and not a reason, and the one question everybody actually had went unaddressed because addressing it felt awkward.",
    "This guide is about the management half: how to pick a first project people will feel, how to answer the job-security question without lying, and what to do when the pilot succeeds and the organisation absorbs it without changing.",
  ],

  whyItMatters: [
    "The gap between a working pilot and a changed process is where most of the value is lost. The technical work is usually the smaller part of the problem, and it is the part everyone plans for.",
    "Adoption also has a compounding quality. A team that has one genuine success will bring you the next three ideas themselves. A team that watched an imposed tool fail will route around the next one, and they will be right to.",
    "And the credibility cost is asymmetric. Overselling the first project does not just fail, it makes the second one harder to fund and easier to dismiss.",
  ],

  coreConcepts: [
    {
      term: "Answer the job question first, and answer it honestly",
      explain:
        "Everyone is wondering. If leadership does not say something specific, people conclude the worst and quietly withhold the process knowledge you need.",
      detail:
        "Vague reassurance is worse than silence. Say what you actually intend regarding headcount, and if you do not know, say that instead of implying a guarantee you may break.",
    },
    {
      term: "The people who know the process decide whether this works",
      explain:
        "The exceptions, the workarounds and the reasons a step exists live with the people doing the work. If they are not involved, you will automate a description of the process rather than the process.",
      detail:
        "This is also why threatened people are an information problem, not just a morale one. Nobody explains the shortcuts to the person automating their role.",
    },
    {
      term: "Pick a first project people feel, not one that looks impressive",
      explain:
        "The best first project removes something the team already resents. Small, visible, and owned by the people who benefit.",
      detail:
        "Impressive first projects fail more often and poison the appetite for a second. A dull success buys permission for something harder.",
    },
    {
      term: "Licences are not adoption",
      explain:
        "Seats purchased, accounts activated and logins are all easy to report and none of them indicate a changed process.",
      detail:
        "Measure whether the work is different: cycle time, backlog, hours on the task. If nothing downstream moved, adoption did not happen.",
    },
    {
      term: "Training is about tasks, not tools",
      explain:
        "A generic session on prompting teaches people a tool they have no occasion to use. A session about their own recurring task gives them something to do on Monday.",
      detail:
        "Run it on real work, with their real documents, and have them leave with one thing already working.",
    },
    {
      term: "Publish the rules before people improvise",
      explain:
        "In the absence of a policy, people make individually reasonable decisions about what to paste into which tool, and some of them are decisions you would not have approved.",
      detail:
        "A one-page policy naming approved tools and what must never be pasted anywhere prevents most of it, and it has to arrive before the tools do.",
    },
    {
      term: "Expect the pilot to succeed and change nothing",
      explain:
        "A pilot that proves value and is then absorbed back into the old process is the most common outcome, and it is a planning failure rather than a technical one.",
      detail:
        "Decide before the pilot what will change if it works: which step is removed, whose job description changes, which report stops. Otherwise nothing will.",
    },
    {
      term: "Name the owner for after the excitement",
      explain:
        "Every deployed system needs someone responsible for it in a year, when the person who championed it has moved on and something upstream has changed.",
      detail:
        "If you cannot name that person, you are building something with a known expiry date.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A large deployment, and the reversal that followed it.",
      walkthrough:
        "In February 2024 Klarna announced an AI assistant handling two-thirds of its customer service chats in its first month, reporting sharply reduced resolution times and a substantial profit impact. In May 2025 the chief executive told Bloomberg the cost-cutting had gone too far, and the company began recruiting human agents again so customers would always have the option of reaching a person. His summary was that they had focused too much on cost and the result was lower quality.",
      result:
        "The interesting part for anyone leading a rollout is that both statements were true. The efficiency gains were real and measured. The mistake was organisational: treating a capability that worked on routine volume as though it covered the whole job. Decide in advance which work is explicitly out of scope, and say so publicly, or the scope will expand by default until quality tells you where the line was.",
      source: {
        label: "Klarna press release (February 2024) and coverage of the May 2025 reversal",
        url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/",
      },
    },
    {
      kind: "illustration",
      scenario: "The rollout that trained everyone and changed nothing.",
      walkthrough:
        "A company buys licences for four hundred people and runs a well-attended introductory session. Usage is strong for three weeks and settles into a small group of enthusiasts. A survey finds most people thought it was interesting and could not think of when to use it.",
      result:
        "The training taught the tool rather than a task. Teams that were instead asked to bring their most repetitive weekly job to a working session, and left with it half-solved, kept using it. The difference was not enthusiasm, it was having a specific thing to do next.",
    },
  ],

  mistakes: [
    {
      mistake: "Announcing efficiency gains before deciding what happens to people",
      why: "Everyone immediately translates it into headcount. If you have not decided, they will decide for you, and cooperation drops exactly when you need process knowledge.",
      fix: "Decide first. Then say the specific thing, including the parts that are uncomfortable.",
    },
    {
      mistake: "Choosing the flagship project first",
      why: "High visibility raises the cost of the normal amount of things going wrong, and the first project always has things go wrong.",
      fix: "Pick something small that a team already wants. Spend the credibility you earn on the ambitious one.",
    },
    {
      mistake: "Reporting licences and logins as progress",
      why: "They rise on announcement and fall quietly. They also let a project look healthy for two quarters while nothing changes.",
      fix: "Report a process metric agreed before the pilot. Cycle time, backlog size, hours spent.",
    },
    {
      mistake: "Rolling out tools before publishing a policy",
      why: "People will paste customer data, contracts and financials into whatever is convenient, reasonably, because nobody told them otherwise.",
      fix: "One page, before the licences: approved tools, what must never be pasted anywhere, and who to ask.",
    },
    {
      mistake: "Leaving the old process running alongside the new one",
      why: "If the manual path still exists, most people will use it under pressure, and you will pay for both indefinitely.",
      fix: "Decide what gets switched off, set the date when the pilot starts, and hold it.",
    },
  ],

  bestPractices: [
    "Say something specific about jobs before you say anything about efficiency.",
    "Involve the people who do the work in choosing what to automate.",
    "Choose a first project that removes something the team already resents.",
    "Publish a one-page usage policy before the tools arrive.",
    "Train on real tasks with real documents, and have people leave with one thing working.",
    "Agree the success metric and the threshold before the pilot begins.",
    "Decide in advance what will be switched off if it works.",
    "Name the person who owns each system a year from now.",
  ],

  businessApplications: [
    "A structured discovery week where each team lists its recurring work and ranks it by annual hours.",
    "A working session per team on their own top-ranked task, ending with a usable draft.",
    "A published register of approved tools and what is out of bounds, kept current.",
    "A monthly forum where people share what worked, which spreads faster than any training programme.",
    "A standing review of deployed automations, their owners and whether they still earn their place.",
  ],

  faqs: [
    {
      q: "How do we answer 'will this take my job?'",
      a: "Truthfully, and with specifics. If roles will change, say how. If you do not yet know, say that. An evasive answer is understood as a yes, and it costs you the cooperation you need.",
    },
    {
      q: "Why is our usage so low after a strong launch?",
      a: "Almost always because people were taught a tool rather than shown a task. Run sessions on their actual recurring work and usage looks different.",
    },
    {
      q: "Should we mandate usage?",
      a: "No. Mandates produce compliance behaviour and hidden workarounds. Make one thing genuinely better and let that spread.",
    },
    {
      q: "The pilot worked but nothing changed. What went wrong?",
      a: "Nobody decided in advance what would be removed if it succeeded. Without that, the organisation absorbs the improvement and continues as before.",
    },
    {
      q: "Who should own this?",
      a: "Someone accountable for the process outcome, not for the technology. Ownership by an innovation team with no operational responsibility produces pilots and no change.",
    },
  ],

  tools: [
    { name: "A one-page usage policy", what: "The highest-return artefact in any rollout, and it costs an afternoon.", cost: "Free" },
    { name: "Your existing collaboration platform", what: "Most now include AI features you already pay for. Start there before buying seats.", cost: "Varies" },
    { name: "A shared prompt library", what: "What worked for one team, written down for the others. Beats training material.", cost: "Free" },
    { name: "Employment and data protection advice", what: "Worth an hour before anything touches personal data or a role definition.", cost: "Paid" },
  ],

  resources: [
    { title: "The Parable of Google Flu", kind: "Paper", note: "On a celebrated system that quietly stopped working. A useful antidote to launch enthusiasm.", url: "https://www.science.org/doi/10.1126/science.1248506" },
  ],

  internalLinks: [
    { slug: "measuring-ai-roi-in-business", anchor: "agree the measurement before you start", context: "Pilot design" },
    { slug: "ai-for-hiring-and-hr", anchor: "the legal exposure in people processes", context: "HR applications" },
    { slug: "training-your-team-on-ai", anchor: "run training on tasks rather than tools", context: "Enablement" },
  ],

  relatedGuides: ["measuring-ai-roi-in-business", "training-your-team-on-ai", "writing-an-ai-usage-policy"],

  conclusion: [
    "Before the next licence is bought, write down what will be switched off if the pilot works. If you cannot name it, the pilot will succeed and nothing will change.",
  ],

  cta: {
    headline: "Pilot worked, nothing changed?",
    body: "That is an organisational problem rather than a technical one, and it is the part we spend most of our time on.",
    label: "Talk about your rollout",
    href: "/contact",
  },
};

export default guide;
