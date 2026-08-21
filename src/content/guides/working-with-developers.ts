import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "working-with-developers",
  seoTitle: "Working With Developers Without Being the Problem",
  metaDescription:
    "What development teams actually want from a BA, what hard and easy really mean when a developer says them, and how to stay useful while something is being built.",
  title: "Working With Developers",
  keywords: [
    "business analyst working with developers",
    "ba and development team",
    "backlog refinement",
    "technical constraints business analysis",
    "ba developer collaboration",
    "agile business analyst",
  ],
  category: "communication",
  level: "Intermediate",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "Most advice about this relationship treats it as a language problem, as if the difficulty were vocabulary. It is not. Developers understand business language perfectly well. The friction comes from something more specific: a BA who hands over decisions dressed up as requirements, disappears while it gets built, and reappears at testing surprised by what got made.",
    "The developers I have worked best with wanted three things from me, consistently. Tell us why, so we can make the fifty small calls you did not anticipate. Tell us what happens when it goes wrong, because that is most of the code. And be available, because a question answered in five minutes saves a day of building the wrong thing.",
    "This guide covers what to hand over and in what shape, how to respond when a developer says something is hard, what to do when they suggest something different, and how to stay useful during a build instead of being a document that turned up once.",
  ],

  whyItMatters: [
    "During any build, dozens of decisions get made that were not in the document. What happens to a half-finished record, whether something tries again, what an error message says, whether an old value gets kept. Each is small and each has business consequences, and they get made by whoever is in the room.",
    "So being in the room is the job. A BA who is available while it gets built influences those decisions. One who is not finds out at testing, when changing them means rework and an awkward conversation about who should have written it down.",
    "There is a longer-term side too. Developers who trust a BA bring problems early: this rule cannot work the way you described, this data does not exist, this will be slow at the volume you mentioned. That early warning is worth more than any document you will write, and it only gets given to people who have shown they will not treat it as obstruction.",
  ],

  coreConcepts: [
    {
      term: "Always say why",
      explain:
        "The reason behind a requirement is what lets a developer make a sensible call on the case you did not anticipate, and there will be several of those every day.",
      detail:
        "Without it they build exactly what is written, which is the correct professional response and produces something brittle. With it you get judgement applied on your behalf by somebody genuinely trying to help.",
    },
    {
      term: "Say what happens when it fails, because that is most of the work",
      explain:
        "Most of the code in any system deals with things not going to plan. If your document covers only the path where everything works, you have described the minority of the job.",
      detail:
        "For everything it depends on and everything that can be refused: what does the user see, what gets recorded, does it try again, and is anything left half done. Those are business decisions, and leaving them out means somebody else takes them.",
    },
    {
      term: "Hand over decisions made, not decisions to make",
      explain:
        "A document that says the system will handle exceptions appropriately has passed a business decision to a technical person with no business context and no authority to take it.",
      detail:
        "Where something genuinely has not been decided, mark it as open with a name and a date. That is honest and actionable. Vague wording is neither, and it reads as though you did not notice.",
    },
    {
      term: "When a developer says it is hard, ask what makes it hard",
      explain:
        "Hard usually means one of three things: the data does not support it, the way the system is built fights it, or it is a large amount of straightforward work. Those three have completely different implications.",
      detail:
        "The first is a business finding you need to take back immediately. The second is a conversation about whether a slightly different requirement is much cheaper. The third is a planning matter. Treating all three as pushback wastes the most useful signal you get.",
    },
    {
      term: "When a developer says it is easy, check what they heard",
      explain:
        "Easy frequently means easy for the case they have in mind. Ask them to describe what they are going to build and listen for the exception you wrote down.",
      detail:
        "This causes more problems than difficulty does. A confident estimate given against a partial understanding is far more dangerous than an honest warning that something will be slow.",
    },
    {
      term: "Take the alternative seriously when it is offered",
      explain:
        "A developer suggesting a different approach is usually optimising for something real: less code to look after, a pattern already in use, or avoiding an area they know causes trouble.",
      detail:
        "Ask what it means for what the business experiences, not whether it is technically nicer. If the outcome is the same and it is cheaper, take it and say thank you. If it changes what the business sees, explain exactly how and let them tell you the cost of doing it your way.",
    },
    {
      term: "Save your questions up, and be reachable for the ones that block",
      explain:
        "Building things needs long uninterrupted stretches. A steady drip of small questions costs more than the answers are worth.",
      detail:
        "Agree a convention: anything that stops work gets asked immediately, everything else goes on a list and gets covered once a day. Then hold up your end by answering the blocking ones fast, because the whole thing only works if the fast route is genuinely fast.",
    },
    {
      term: "The session before the build is where your writing gets tested",
      explain:
        "The point of walking through work before it gets estimated is to find what is missing while it is still free to fix.",
      detail:
        "Go in expecting to be wrong about something, and write down every question rather than defending the document. A session where nobody found a gap usually means nobody read it carefully.",
    },
    {
      term: "Watch for technical decisions that change what the business sees",
      explain:
        "A decision to store something for speed that makes data a few minutes out of date. A check moved somewhere else. A timeout that quietly drops a message. Each is a reasonable engineering choice and each can change what the business experiences.",
      detail:
        "You will not catch these by reading code. You catch them by being in the conversations and asking one question repeatedly: does that change what somebody sees or what they can do?",
    },
    {
      term: "Learn enough to hold the conversation",
      explain:
        "Enough to follow a discussion about how data is structured, what a connection between systems does, why running something overnight is different from doing it instantly, and roughly why some things are expensive.",
      detail:
        "You do not need to write production code. You do need to be able to tell the difference between this is genuinely hard and this is unfamiliar, and that judgement only comes from understanding the shape of the work.",
    },
    {
      term: "Never pass on an estimate you do not understand",
      explain:
        "If you cannot explain to the business why something takes three weeks, you cannot defend it, and when it gets challenged the team will be overruled by somebody with more authority and less information.",
      detail:
        "Ask what the three weeks consists of until you could describe it in two sentences. Developers almost always welcome this, because being able to explain their estimate is exactly what they need from you.",
    },
    {
      term: "Keep the question list and use it on yourself",
      explain:
        "Every question asked during a build is a piece of the requirement that existed only in your head. Written down and reviewed, it is the most honest feedback you will ever get on your own work.",
      detail:
        "After two projects the pattern is obvious and personal. Some people always miss permissions, some always miss what happens on failure, some always miss volume. Knowing yours is worth more than any template.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Hard meant the data does not exist.",
      walkthrough:
        "The problem: a BA specified that a customer's preferred contact time should decide when automated reminders get sent. The developer said it was hard. What was happening: the BA asked what specifically made it hard. The field existed on the customer record and was filled in for a small minority of accounts, and only for customers who arrived through one channel. Building the logic was trivial. Having it do anything useful was not.",
      result:
        "What changed: the requirement got redesigned. That was a business finding, not a technical objection, and it came from a developer who had looked at the data because they needed to write the query. Had the BA heard hard as resistance and escalated it, they would have won an argument and shipped something that did nothing for most customers.",
    },
    {
      kind: "illustration",
      scenario: "A sensible call made at four in the afternoon.",
      walkthrough:
        "The problem: a specification for an order confirmation email said nothing about what happens if the address bounces. What was happening: the developer reached this at the end of a sprint and made a reasonable decision. Log the failure and carry on, because failing somebody's whole order over an email seemed disproportionate. Weeks later, customer services noticed a pattern of customers who never got a confirmation and were never contacted by anybody.",
      result:
        "What changed: they added a rule that a bounced confirmation raises a task. The developer's judgement was sound and it was a business decision they were not equipped to make. One line about it would have settled it. Every unstated failure gets settled by whoever meets it first, under time pressure, with the least context.",
    },
    {
      kind: "illustration",
      scenario: "The alternative that was better.",
      walkthrough:
        "The problem: a BA had specified an overnight sync between two systems. What was happening: the lead developer suggested sending an update the moment a record changes instead, because something similar already existed for another connection and would take less time to build and less effort to look after. The BA's first reaction was that the document says overnight.",
      result:
        "What changed: instead of defending the wording, she asked the only question that mattered. Does the business see anything different? The answer was yes, and better, because information would be current within seconds rather than up to a day old. The document said overnight because that is what the old system did. Technical suggestions are worth judging on what the business experiences, and quite often the answer improves.",
    },
  ],

  learningPath: [
    {
      title: "Add the reason to everything you currently hold",
      body: "One sentence per requirement explaining what the business is trying to achieve. Go back through your current list and add it where it is missing.",
      effort: "2 hours",
      outcome: "The context that lets a developer decide well when your document runs out.",
    },
    {
      title: "Write down what happens when things fail",
      body: "Everything it depends on, everything that can be refused, everything that can half finish. What the user sees, what gets recorded, whether it tries again, what is left behind.",
      effort: "2 hours",
      outcome: "Coverage of where most of the code actually goes.",
    },
    {
      title: "Agree how questions get asked",
      body: "Blocking questions come immediately through a fast route. Everything else goes on a list you cover once a day. Agree it out loud rather than assuming it.",
      effort: "15 minutes",
      outcome: "Fewer interruptions for them, faster answers for the things that matter, and a commitment you can be held to.",
    },
    {
      title: "Sit in the pre-build session expecting to be wrong",
      body: "Walk through the work, ask them to tell you what is missing, and write down every question without defending the document.",
      effort: "1-2 hours per session",
      outcome: "Gaps found while they are still free to fix, and a visible signal that you want the feedback.",
    },
    {
      title: "Learn the three follow-up questions",
      body: "What makes it hard, what would make it easier, and what does that mean for the business. Use them every time a technical objection appears.",
      effort: "Ongoing",
      outcome: "The ability to tell a data problem from a how-it-is-built problem from a size problem.",
    },
    {
      title: "Keep the question list and read it at the end",
      body: "Write down every question you get asked during the build. At the end, sort them: missing rule, missing definition, missing failure case, missing permission.",
      effort: "Minutes each, one hour at the end",
      outcome: "A precise, personal map of what your documents leave out.",
    },
  ],

  exercises: [
    {
      title: "Check for the reason",
      brief:
        "Take ten items from a current list and check whether each says why the business wants it, in a form a developer could use to make a decision. Rewrite the ones that do not.",
      success:
        "Every item has a one-sentence purpose that would help somebody choose between two reasonable ways of building it.",
      time: "1 hour",
    },
    {
      title: "Ask what makes it hard",
      brief:
        "The next three times a developer says something is difficult, ask what specifically makes it difficult and write the answer down. Sort each into data, how it is built, or size.",
      success:
        "At least one turns out to be a business finding you need to take back to somebody rather than a constraint to work around.",
      time: "Ongoing over a sprint",
    },
    {
      title: "Explain an estimate back",
      brief:
        "Take an estimate your team has given and ask questions until you could explain to a non-technical sponsor, in two sentences, what the time consists of. Then write those two sentences.",
      success:
        "A developer reads your two sentences and agrees they are accurate, and you could defend the estimate without them in the room.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Handing over what without why",
      why: "Developers then build exactly what is written, which is correct and brittle. Every case you did not anticipate gets handled literally rather than sensibly.",
      fix: "One sentence of purpose on every requirement. It is the cheapest quality improvement available in a handover.",
    },
    {
      mistake: "Hearing a technical objection as resistance",
      why: "You lose the earliest and best warning you get. Developers who feel their concerns are treated as obstruction stop raising them and start absorbing them quietly.",
      fix: "Ask what makes it hard, then what would make it easier. Treat the answer as information rather than as negotiation.",
    },
    {
      mistake: "Disappearing during the build",
      why: "Dozens of unwritten decisions get made without you. Each is reasonable and together they produce something the business did not expect.",
      fix: "Be reachable, go to the walkthroughs, and look at the thing as it comes together rather than at the end.",
    },
    {
      mistake: "Interrupting constantly",
      why: "Building things needs long uninterrupted stretches. A drip of small questions costs the team more than the answers are worth and makes you the problem.",
      fix: "Save non-blocking questions for once a day, and keep a genuinely fast route for anything that stops work.",
    },
    {
      mistake: "Passing on an estimate you cannot explain",
      why: "When it gets challenged you cannot defend it, so it gets overruled by whoever has more authority, and the team learns that estimates are decorative.",
      fix: "Ask what the time consists of until you can describe it in two sentences, then use those sentences with the business.",
    },
    {
      mistake: "Rejecting a technical suggestion because it is not what you wrote",
      why: "You lose a cheaper answer and you teach the team not to offer ideas, which is a permanent cost for a temporary point.",
      fix: "Ask whether the business sees anything different. If not and it is cheaper, take it. If it does, work out the difference and decide together.",
    },
    {
      mistake: "Writing appropriately and as required",
      why: "It looks like a requirement and works as a decision handed to somebody with no authority to make it, who then gets blamed for the outcome.",
      fix: "Replace it with a rule or a number, or mark it as an open decision with a name and a date.",
    },
    {
      mistake: "Treating questions during the build as an annoyance",
      why: "They are the best review your document will ever get, and being defensive teaches people to guess instead of asking.",
      fix: "Write every one down, answer quickly, and read the list at the end to find your own recurring gap.",
    },
  ],

  bestPractices: [
    "Give the reason with every requirement.",
    "Say what happens when anything it depends on fails.",
    "Hand over decisions made, and mark genuinely open ones with a name and a date.",
    "Ask what makes it hard before responding to any technical objection.",
    "Check what a developer heard when they say something is easy.",
    "Judge technical suggestions on what the business experiences, not on the wording.",
    "Agree how questions get asked: blocking immediately, everything else saved up.",
    "Go to the pre-build session expecting to be wrong and write down every gap.",
    "Ask whether each technical decision changes what a user sees or can do.",
    "Understand every estimate well enough to explain it in two sentences.",
    "Stay present through the build and look at it as it comes together.",
    "Keep the question list and read it against yourself afterwards.",
  ],

  proTips: [
    "Ask a developer to read your document before the estimate rather than after. Questions raised while estimating are free, and the same questions raised during the build cost a rebuild. It also changes how carefully your documents get read, permanently and in your favour.",
    "When you do not understand something technical, say so plainly and ask. Pretending is transparent and it costs you far more than the moment of ignorance would. The fastest way I know to earn a development team's respect is to ask a basic question without embarrassment and then remember the answer.",
    "Sit near the team if you possibly can, and if you cannot, be visibly present wherever they talk. Most of the useful information during a build arrives in fragments nobody would think to send you: a comment about something being slower than expected, an offhand remark that a field is never filled in. None of that reaches a scheduled meeting.",
    "Ask what you could do to make the next piece of work easier, and then actually do it. Almost nobody asks developers this. The answers are specific and cheap: give us the list of codes up front, tell us the expected volumes, stop changing what counts as done after we have agreed it. Acting on one buys more goodwill than a year of good intentions.",
  ],

  businessApplications: [
    "Teams delivering in short cycles, where the BA role is mostly preparation, availability and acceptance rather than a document handover.",
    "Work built by an offshore or outside team, where the windows to talk are limited and the writing has to carry more weight.",
    "Connecting systems, where the technical constraints genuinely decide what the business can afford.",
    "Modernising an old system, where developers hold knowledge about it that exists in no document.",
    "Supplier implementations, where the configuration team needs the same context and rarely gets it.",
    "Handing over to support, where what you wrote about failures decides whether they can run the thing.",
  ],

  checklist: [
    "Every requirement carries a one-sentence purpose.",
    "Failure covered for everything it depends on and everything that can be refused.",
    "No untestable words left in the handover.",
    "Open decisions marked with a name and a date.",
    "How questions get asked agreed with the team.",
    "Pre-build session attended, with gaps written down rather than defended.",
    "Every technical objection explored with what makes it hard.",
    "Technical suggestions judged against what the business experiences.",
    "Estimates understood well enough to explain in two sentences.",
    "Technical decisions checked for changes to what users see or can do.",
    "Question list kept through the build.",
    "List read at the end and sorted.",
  ],

  faqs: [
    {
      q: "How technical does a Business Analyst need to be?",
      a: "Enough to follow a conversation about how data is structured, what a connection between systems does, and why some things are expensive, and to tell genuinely hard from unfamiliar. For a systems-facing role, more. Writing production code is not part of it.",
    },
    {
      q: "What do I do when the team says my requirement is impossible?",
      a: "Ask what specifically makes it impossible, and what would be possible. Impossible almost always means impossible given the current data, the way it is built, or the timescale, and each of those needs a different response. One of them is a genuine business finding.",
    },
    {
      q: "How much detail do developers actually want?",
      a: "Ask them, because it varies by team. Most want the rules, the exceptions, what the data means and what happens on failure, and do not want screen descriptions or paragraphs explaining what they can see for themselves.",
    },
    {
      q: "Should the BA write what counts as done, alone?",
      a: "Draft it, then improve it with the team. You supply the business rules and the exceptions. Developers and testers find the technical cases. Written entirely by one side they consistently miss half of what they should cover.",
    },
    {
      q: "What if a developer changes behaviour without telling me?",
      a: "Usually they did not realise it was a business change. Ask to be told when a decision affects what a user sees or can do, give one concrete example of why, and look at the thing regularly rather than waiting to be told.",
    },
    {
      q: "How do I handle being left out of technical discussions?",
      a: "Ask to attend rather than to be informed, and be useful when you are there by answering business questions quickly. The fastest route into those conversations is being the person who unblocks them.",
    },
  ],

  tools: [
    { name: "A question list", what: "Every question asked during a build, sorted at the end. The most honest review your writing will ever get.", cost: "Free" },
    { name: "An agreed convention for questions", what: "Blocking immediately, everything else saved up daily. Costs fifteen minutes to agree.", cost: "Free" },
    { name: "Access to the data", what: "Lets you answer your own questions and check something rather than asking a developer to stop and look.", cost: "Varies" },
    { name: "The team's own board and channel", what: "Being where the work happens beats any status report, and most useful information arrives in fragments.", cost: "Varies" },
  ],

  internalLinks: [
    { slug: "writing-requirements-developers-can-build", anchor: "the document this depends on", context: "Handover" },
    { slug: "running-user-acceptance-testing", anchor: "proving it does what was agreed", context: "Acceptance" },
    { slug: "specifying-a-system-integration", anchor: "understanding what makes connections hard", context: "Technical context" },
  ],

  relatedGuides: ["writing-requirements-developers-can-build", "running-user-acceptance-testing", "specifying-a-system-integration"],

  conclusion: [
    "The next time a developer tells you something is hard, ask what specifically makes it hard and write the answer down. Do it three times. At least one of those answers will turn out to be a business finding you needed and would never have discovered from the business side.",
  ],
};

export default guide;
