import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "no-code-ai-for-business",
  seoTitle: "No-Code AI: What You Can Build Without a Developer",
  metaDescription:
    "Building useful AI automation without writing code: what no-code tools genuinely handle, where they stop working, and how to avoid creating something nobody can maintain.",
  title: "No-Code AI for Business",
  keywords: [
    "no code ai",
    "no code automation",
    "ai without coding",
    "zapier ai",
    "business automation tools",
    "citizen developer ai",
  ],
  category: "no-code-tools",
  level: "Beginner",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "No-code tools have quietly become the most practical way for most businesses to use AI. Not because they are powerful, but because the bottleneck was never model capability. It was getting a working thing in front of the person who understood the problem.",
    "What you can build in an afternoon is genuinely useful: a form that routes itself, a mailbox that categorises and drafts replies, a document that turns into a spreadsheet row. What you cannot build is anything that has to be reliable at volume without someone owning it.",
    "This guide covers the work these tools handle well, the specific point at which they stop being the right answer, and the maintenance problem that catches almost everyone who builds something popular.",
  ],

  coreConcepts: [
    {
      term: "The bottleneck was distance, not capability",
      explain:
        "The person who knows which invoices are annoying is rarely the person who can write a script. No-code closes that gap, and closing it is most of the value.",
      detail:
        "This is why no-code automations often beat engineered ones on usefulness. They were designed by someone who actually does the work.",
    },
    {
      term: "Trigger, transform, act",
      explain:
        "Almost every useful automation is the same three parts. Something happens, something interprets it, something is written somewhere.",
      detail:
        "If you can describe your problem in that shape, a no-code tool can probably do it. If you cannot, the automation is not the missing piece yet.",
    },
    {
      term: "AI belongs in the transform step",
      explain:
        "The trigger and the action are ordinary plumbing that has worked for years. The genuinely new capability is handling input that resisted rules: prose, scans, mixed formats.",
      detail:
        "If your input is already structured, use plain logic. It is cheaper, faster and easier to debug.",
    },
    {
      term: "Per-run pricing changes what is worth building",
      explain:
        "These platforms charge per task or per run. An automation firing thousands of times a day has a bill that a script on a server does not.",
      detail:
        "Work out the monthly cost at your real volume before you build. High volume is the most common reason to graduate off no-code.",
    },
    {
      term: "Someone has to own it",
      explain:
        "The classic failure is not technical. It is that the person who built it left, and nobody else knows it exists until it stops running.",
      detail:
        "Name the owner, document what it does in one paragraph, and store that somewhere the team looks. This takes ten minutes and prevents the most common outcome.",
    },
    {
      term: "Silent failure is the real risk",
      explain:
        "A no-code automation that stops working rarely announces itself. Work quietly stops happening and nobody notices for weeks.",
      detail:
        "Alert on failure and on not running. Most platforms support this and most people leave it off.",
    },
    {
      term: "Know the ceiling before you hit it",
      explain:
        "Branching logic beyond a few paths, anything needing real error handling, anything touching money without review, and high volume are all signals you have outgrown the tool.",
      detail:
        "Reaching the ceiling is a success, not a failure. You proved the thing was worth building before paying to build it properly.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The inbox rule that replaced a weekly meeting.",
      walkthrough:
        "A facilities team receives requests by email in no fixed format. Someone builds an automation: new mail triggers a model that extracts request type, location and urgency, writes a row to a shared sheet, and posts urgent items to a channel. The weekly triage meeting existed to do exactly this, by reading the mailbox aloud.",
      result:
        "The meeting stopped. The useful detail is that the automation was built by the person who ran the meeting, in an afternoon, because they knew which fields mattered. An engineer given the same brief would have asked for a specification that did not exist.",
    },
    {
      kind: "illustration",
      scenario: "The automation nobody could fix.",
      walkthrough:
        "A popular internal automation runs for a year. The person who built it changes role. An upstream form adds a field, the parsing breaks, and the automation starts writing empty rows. Because it still runs, no failure alert fires. Three weeks of records are incomplete before someone asks why a report looks wrong.",
      result:
        "Nothing about the AI failed. The gap was ownership and monitoring, which are the two things no-code makes easy to skip. Write down who owns it and what it does, and alert on output quality rather than just on errors.",
    },
  ],

  mistakes: [
    {
      mistake: "Automating a process nobody has looked at",
      why: "You will faithfully encode steps that exist because of a system replaced three years ago, then maintain them.",
      fix: "Write the steps down first. Deleting two of them usually beats automating five, and it takes an afternoon.",
    },
    {
      mistake: "Using AI where a rule would do",
      why: "A model call for something a filter handles is slower, costs money per run, and can be wrong in ways a rule cannot.",
      fix: "Reach for the model only when the input resists rules. Prose, scans, and inconsistent formats.",
    },
    {
      mistake: "Leaving no failure alerts",
      why: "Silent failure is the defining risk of this category. Work stops happening and nobody knows until a downstream number looks odd.",
      fix: "Turn on failure notifications, and add a check that alerts when the automation has not run when it should have.",
    },
    {
      mistake: "Connecting a tool to everything with full permissions",
      why: "Convenience defaults grant broad access. An automation platform with write access to your whole drive is a large surface for a small benefit.",
      fix: "Grant the narrowest scope that works, to a dedicated account rather than a person's, and review connections quarterly.",
    },
    {
      mistake: "Letting it grow into an unmaintainable web",
      why: "Fifteen interlocking automations built by four people is a system, and nobody designed it.",
      fix: "Keep a register. When the count passes about ten, review what still earns its place and delete the rest.",
    },
  ],

  bestPractices: [
    "Map the process on paper before building, and delete what you can.",
    "Use AI only for the step where input resists rules.",
    "Name an owner and write one paragraph on what it does, stored where the team will find it.",
    "Turn on failure alerts, and separately alert on failure to run.",
    "Grant narrow permissions to a dedicated service account, not a personal login.",
    "Calculate the monthly run cost at real volume before committing.",
    "Keep a register of every automation and review it quarterly.",
    "Treat hitting the tool's ceiling as evidence the thing deserves proper engineering.",
  ],

  businessApplications: [
    "Routing inbound email or form submissions by type and urgency, with a structured record written automatically.",
    "Turning receipts, invoices or delivery notes into spreadsheet rows for a person to approve.",
    "Drafting first-pass replies to routine enquiries for a human to send.",
    "Summarising meeting transcripts into decisions and actions, posted to the right channel.",
    "Monitoring a shared mailbox for anything mentioning cancellation or a complaint, and escalating it.",
    "Enriching new CRM records with public company information so a rep starts prepared.",
    "Weekly digests that pull from several systems into one message somebody actually reads.",
  ],

  exercises: [
    {
      title: "The one-afternoon automation",
      brief:
        "Pick the most repetitive thing in your own week that follows the trigger, transform, act shape. Build it. Do not pick the most valuable one, pick the one you understand best.",
      success: "It runs unattended for a week and you have not had to touch it.",
      time: "3-4 hours",
    },
    {
      title: "The register",
      brief:
        "List every automation running in your team, with owner, purpose and last-checked date. Most teams discover at least one nobody can explain.",
      success: "A single page, and at least one automation switched off.",
      time: "1 hour",
    },
  ],

  faqs: [
    {
      q: "Do I need to know how to code?",
      a: "No, and that is the point. You do need to think clearly about inputs, steps and outputs, which is the harder half anyway.",
    },
    {
      q: "When should we move off no-code?",
      a: "High volume where per-run pricing bites, branching logic that has become hard to follow, anything needing real error handling, or anything touching money without human review.",
    },
    {
      q: "Is it safe to connect these tools to company data?",
      a: "With narrow permissions and a dedicated service account, usually. Check where the vendor processes data and whether that satisfies your obligations before connecting anything sensitive.",
    },
    {
      q: "What is the most common failure?",
      a: "Not a technical one. It is an unowned automation that breaks quietly after the person who built it moves on.",
    },
  ],

  tools: [
    { name: "Zapier", what: "The broadest connector library, with AI steps built in. Priced per task.", cost: "Freemium", url: "https://zapier.com" },
    { name: "Make", what: "More visual control over branching and error paths than most, at similar cost.", cost: "Freemium", url: "https://www.make.com" },
    { name: "Airtable", what: "A database non-technical teams will actually maintain, with automation attached.", cost: "Freemium", url: "https://airtable.com" },
    { name: "n8n", what: "Self-hostable, which removes per-run pricing at the cost of someone running it.", cost: "Freemium", url: "https://n8n.io" },
  ],

  resources: [
    { title: "Automate the Boring Stuff with Python", kind: "Book", note: "Free online. Worth skimming even if you never write code, because it teaches the shape of automatable work.", url: "https://automatetheboringstuff.com" },
  ],

  internalLinks: [
    { slug: "automation-worth-building", anchor: "decide what is actually worth automating", context: "Before building" },
    { slug: "ai-for-operations-and-workflow", anchor: "map the process first", context: "Process design" },
  ],

  relatedGuides: ["automation-worth-building", "ai-for-operations-and-workflow", "document-processing-with-ai"],

  conclusion: [
    "List every automation already running in your team with its owner. If you cannot name an owner for one of them, you have found this week's job.",
  ],
};

export default guide;
