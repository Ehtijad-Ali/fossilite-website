import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "when-your-ai-gets-it-wrong",
  seoTitle: "When Your AI Gets It Wrong: The First Hour Playbook",
  metaDescription:
    "What to do in the hour after an AI system gives a customer a wrong answer. Containment, honouring it or not, the message, and the fix that stops it recurring.",
  title: "When Your AI Gets It Wrong",
  keywords: [
    "ai incident response",
    "ai failure playbook",
    "chatbot wrong answer",
    "ai error customer",
    "ai incident management",
    "recovering from ai mistake",
  ],
  category: "customer-support",
  level: "Intermediate",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "It will happen. Not as a dramatic failure but as a Tuesday: a customer forwards a screenshot of something your system told them, and it is wrong, and they have already acted on it.",
    "What you do in the next hour decides whether this is a support ticket or a story. I have seen the same underlying error produce both outcomes at different companies, and the difference was never the severity. It was whether anyone had thought about this before it happened.",
    "So here is the playbook. Four phases, in order, with the decision that sits at the centre of the whole thing placed where it actually falls, which is earlier than most people expect.",
  ],

  coreConcepts: [
    {
      term: "Phase one: contain, before you understand",
      explain:
        "If the same wrong answer can reach another customer in the next ten minutes, stop that first. Narrow the scope, add a review step, or turn the feature off. Do not wait for the root cause.",
      detail:
        "The instinct to diagnose first is strong and wrong. Diagnosis takes hours and the blast radius grows while you work.",
    },
    {
      term: "Phase two: decide whether you are honouring it",
      explain:
        "This is the decision everything else hangs on, and it comes before the investigation, not after. If your system told a customer something, are you standing behind it?",
      detail:
        "The default answer should be yes for anything small enough to absorb. Arguing that your own software misspoke is a position you can take and it is almost never worth what it costs.",
    },
    {
      term: "The honour threshold, set in advance",
      explain:
        "Pick a figure now. Below it, the frontline honours whatever the system said without escalating. Above it, a named person decides within the hour.",
      detail:
        "Without a threshold, every case becomes an escalation and the customer waits days for an answer they should have had in minutes.",
    },
    {
      term: "Phase three: the message, sent by a person",
      explain:
        "Say what happened, what you are doing about their case specifically, and what changes so it does not recur. Three sentences. No passive voice, no 'we apologise for any inconvenience'.",
      detail:
        "Send it from a named human with a reply address that reaches them. An automated apology for an automated error reads exactly as badly as it sounds.",
    },
    {
      term: "Phase four: find the class, not the case",
      explain:
        "The forwarded screenshot is one instance. Search your logs for the same shape of question and find out how many others got the same treatment and did not complain.",
      detail:
        "This is the step teams skip, and it is the one that turns an incident into a fix. The complainers are a sample, not the population.",
    },
    {
      term: "Write down the failure, in a file you keep",
      explain:
        "Input, output, why it was wrong, what you changed. Four lines. Over a year this becomes the most useful document about your system that exists.",
      detail:
        "It also becomes your regression set. Every entry is a test case you should never fail again.",
    },
    {
      term: "Blameless about people, pointed about systems",
      explain:
        "Nobody should be in trouble for the model being confidently wrong. Someone should be answerable for there being no detection route, because that was a decision.",
      detail:
        "Confusing these two is how organisations stop hearing about problems, which is a far more expensive condition than any single incident.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "The case that went to a tribunal because nobody honoured it early.",
      walkthrough:
        "Air Canada's chatbot told a customer he could claim a bereavement fare retroactively. The airline refused the refund, and the position it took was that the chatbot was responsible for its own statements. The British Columbia Civil Resolution Tribunal disagreed and found the airline liable for information published on its own website.",
      result:
        "Run the playbook against this. Phase two was where it went wrong, and the amount in dispute was small. Honouring it would have cost the fare. Not honouring it produced a published ruling that is now cited in every article about AI liability, including this one. That is what the honour threshold is for: it takes the decision away from whoever is feeling defensive that day.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "documented",
      scenario: "Errors that nobody counted because nothing flagged them.",
      walkthrough:
        "Ziemann, Eren and El-Osta examined thousands of genomics papers and the gene lists published alongside them. Spreadsheet software had silently converted certain gene symbols into dates. No warning appeared, the converted values looked entirely normal, and around a fifth of the papers examined were affected. All of it survived peer review.",
      result:
        "This is phase four in a different domain. The errors that reach you are the ones a human happened to notice. The ones that look normal are invisible until you go looking for the pattern rather than the instance. When an incident arrives, always ask what the silent version of this failure would look like.",
      source: {
        label: "Ziemann, Eren and El-Osta (2016). Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "illustration",
      scenario: "Ninety minutes, done properly.",
      walkthrough:
        "A customer forwards a chat where the assistant quoted a delivery window the company does not offer. Within ten minutes the team narrows the assistant to order-status questions only. Within twenty, the customer has the delivery honoured and a reply from a named person. By the end of the day a log search finds eleven other conversations with the same shape, four of them still open, and all four are contacted before they complain.",
      result:
        "The eleven are the point. One complaint surfaced a class of failure affecting a dozen people, and the ones who were contacted before complaining are the ones who came away thinking better of the company than before.",
    },
  ],

  learningPath: [
    {
      title: "Set the honour threshold",
      body: "Agree the figure below which the frontline simply honours what the system said. Get it signed off by whoever owns the budget line, in writing, before you need it.",
      effort: "1 hour",
      outcome: "A number the frontline can act on without asking.",
    },
    {
      title: "Write the containment options",
      body: "List the ways you can narrow or stop the system, ranked by how much they cost. Include who can do each one and how long it takes.",
      effort: "2 hours",
      outcome: "A page that turns a panicked hour into a decision.",
    },
    {
      title: "Draft the message template",
      body: "Three sentences: what happened, what we are doing for you, what changes. Leave the specifics blank. Nobody writes well under pressure.",
      effort: "1 hour",
      outcome: "A template a support lead can fill in and send in five minutes.",
    },
    {
      title: "Prove you can search the logs",
      body: "Take a real past conversation and find every other conversation of the same shape. If you cannot, that is a logging problem and it is the most important thing on this list.",
      effort: "Half a day",
      outcome: "The ability to find the class rather than the case.",
    },
    {
      title: "Run a drill",
      body: "Pick a plausible wrong answer, tell the team it happened, and time the four phases. The gaps show up immediately.",
      effort: "2 hours",
      outcome: "A tested playbook rather than a written one.",
    },
  ],

  mistakes: [
    {
      mistake: "Investigating before containing",
      why: "Root cause takes hours. During those hours the same failure keeps reaching customers, and every one of them is now part of the incident.",
      fix: "Contain in the first ten minutes even if containment is crude. Understanding is phase four's job.",
    },
    {
      mistake: "Arguing that the system misspoke",
      why: "It is your software, on your site, in your voice. The position is weak, and taking it converts an ordinary complaint into something worth writing about.",
      fix: "Honour it below the threshold, decide above it, and never make the customer litigate the point.",
    },
    {
      mistake: "Apologising automatically for an automated error",
      why: "A templated apology for a machine mistake tells the customer that no person has looked at their case, which is the exact fear the incident created.",
      fix: "A named human sends it, from an address that reaches them.",
    },
    {
      mistake: "Fixing the one case and closing the ticket",
      why: "The complaint is a sample. Everyone else who got the same answer is still out there, and they will surface one at a time over the following weeks.",
      fix: "Search for the class before you close. Contact the ones you find.",
    },
    {
      mistake: "Treating it as an individual's mistake",
      why: "Blame stops reporting. The next failure gets handled quietly and badly, and you find out about it much later.",
      fix: "Blameless about the person, pointed about the missing control.",
    },
  ],

  bestPractices: [
    "Contain first, diagnose second.",
    "Set the honour threshold in writing before you need it.",
    "One named human sends the message, from a reachable address.",
    "Three sentences: what happened, what happens for you, what changes.",
    "Search for the class every time. The complaint is a sample.",
    "Log every failure as four lines and turn each into a regression test.",
    "Run a drill once. A playbook nobody has used is a document.",
  ],

  checklist: [
    "A containment option exists that a support lead can trigger without engineering.",
    "The honour threshold is agreed, written down and known to the frontline.",
    "A message template exists with the specifics left blank.",
    "You can search conversation logs by shape, not just by customer.",
    "A failure log exists and feeds the regression set.",
    "The drill has been run at least once in the last six months.",
  ],

  faqs: [
    {
      q: "Should we always honour what the system said?",
      a: "Below a threshold you set in advance, yes, without escalation. Above it, a named person decides within the hour. What you should not do is make the customer argue the principle.",
    },
    {
      q: "How public should we be about an incident?",
      a: "Proportionate to who was affected. Individual cases are handled individually. If a class of customers got wrong information, tell that class directly rather than waiting to see whether they notice.",
    },
    {
      q: "Who should own the playbook?",
      a: "Whoever owns customer outcomes, not whoever owns the model. The engineering fix matters, but phases one to three are all customer decisions.",
    },
    {
      q: "What if the error came from a vendor's system?",
      a: "It is still your customer and your interface. Handle it exactly the same way, then take it up with the vendor separately. Never make the customer wait on your supply chain.",
    },
    {
      q: "How do we stop it recurring?",
      a: "Ground the answer in real data, add the case to your regression set, and check whether the detection route would have caught it. If it would not have, that is the real finding.",
    },
  ],

  tools: [
    { name: "Conversation logs you can search by content", what: "The prerequisite for phase four. Without it you can only ever fix the case in front of you.", cost: "Varies" },
    { name: "A failure log", what: "Four lines per incident. Becomes your regression set and the best document about your system.", cost: "Free" },
    { name: "A written containment procedure", what: "Names who can narrow or stop the feature and how long each option takes.", cost: "Free" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "On silent errors that look completely normal. Changes how you think about what you are not seeing.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
    { title: "Timeouts, retries and backoff with jitter", kind: "Docs", note: "AWS on failure handling. Written by people who have run things that break at scale.", url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" },
  ],

  internalLinks: [
    { slug: "the-ai-trust-audit", anchor: "the audit that would have flagged this", context: "Prevention" },
    { slug: "ai-for-customer-support", anchor: "escalation design", context: "The handover" },
    { slug: "rebuilding-trust-after-an-ai-failure", anchor: "what comes after the first hour", context: "Recovery" },
  ],

  relatedGuides: ["the-ai-trust-audit", "ai-for-customer-support", "rebuilding-trust-after-an-ai-failure"],

  conclusion: [
    "Agree the honour threshold this week and tell the support team the number. It is one decision, it takes an hour, and it is the single thing that most changes how your next incident goes.",
  ],

  cta: {
    headline: "No playbook yet?",
    body: "We help teams write and drill this before they need it, which is the only time it is cheap to do.",
    label: "Talk about incident readiness",
    href: "/contact",
  },
};

export default guide;
