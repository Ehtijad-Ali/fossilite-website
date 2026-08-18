import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "the-ai-trust-audit",
  seoTitle: "The AI Trust Audit: Seven Questions Before You Ship",
  metaDescription:
    "A seven-question audit to run before an AI system reaches a customer. What it can be wrong about, who finds out, who is accountable, and what happens next.",
  title: "The AI Trust Audit",
  keywords: [
    "ai trust",
    "ai risk assessment",
    "pre-deployment checklist ai",
    "responsible ai framework",
    "ai governance checklist",
    "ai readiness audit",
  ],
  category: "business-strategy",
  level: "Intermediate",
  updated: "2026-08-07",
  author: PETER_NGUYEN,
  readingTime: 11,

  intro: [
    "The question people ask before launching an AI feature is 'does it work?'. It is the wrong question, and it is wrong in a way that costs money later. Everything works on the day you demo it, on the inputs you chose.",
    "The question that predicts whether you will regret the launch is different: when this is wrong, who finds out, how, and what happens to them. I have watched competent teams ship systems that performed well and still damaged the business, because nobody had answered that.",
    "So this is an audit, not a checklist of best practices. Seven questions, in order, each with a pass condition. If you cannot answer one of them, that is the work. Run it in an afternoon with the people who built the thing and one person who did not.",
  ],

  whyItMatters: [
    "Trust is asymmetric. It accumulates slowly through boring correct behaviour and collapses in a single visible failure. That maths means the effort you spend on the failure path is worth more than the effort you spend making the good path slightly better.",
    "Most AI governance material is written for regulators and reads like it. This is written for the hour before you turn something on, which is the moment the decisions actually get made.",
  ],

  coreConcepts: [
    {
      term: "Question one: what is the worst true sentence a customer could say about this?",
      explain:
        "Not the worst outcome you can imagine. The worst thing that would be accurate. 'It told me I could get a refund and I could not.' 'It rejected my application and nobody can tell me why.'",
      detail:
        "Write it as a quote, in their words. Passing means everyone in the room agrees the sentence is survivable, and that you would rather it were said than not launch.",
    },
    {
      term: "Question two: how does a wrong answer become visible?",
      explain:
        "Trace the path from the model being wrong to a human noticing. Count the steps. If the answer is 'the customer complains', your detection system is your customers.",
      detail:
        "Passing means at least one detection route that does not depend on someone being annoyed enough to tell you.",
    },
    {
      term: "Question three: who is accountable, by name?",
      explain:
        "Not a team. A person, who would be the one explaining it. If three people are accountable, nobody is.",
      detail:
        "Passing means you can write one name down and that person knows their name is written down.",
    },
    {
      term: "Question four: what can this system reach?",
      explain:
        "List every system it can read from and, separately, every system it can write to. The write list is the one that matters and it is usually longer than people expect.",
      detail:
        "Passing means every write is either reversible or has a person in front of it. Irreversible plus automated is the combination that produces the expensive stories.",
    },
    {
      term: "Question five: what does it do when it does not know?",
      explain:
        "Ask it something outside its knowledge and watch. If it answers fluently and wrongly, you have a confidence problem, not a knowledge problem, and confidence problems are the ones that fool people.",
      detail:
        "Passing means the system has a way to abstain and you have seen it use it.",
    },
    {
      term: "Question six: can you turn it off in five minutes?",
      explain:
        "Who has the switch, do they know they have it, and has anyone pressed it in a test? A rollback plan nobody has rehearsed is a document, not a plan.",
      detail:
        "Passing means someone who is not the engineer who built it has performed the shutdown at least once.",
    },
    {
      term: "Question seven: what would make you turn it off?",
      explain:
        "Decide the threshold before you have a reason to argue with it. A complaint rate, an error rate, a single category of failure.",
      detail:
        "Passing means the number exists in writing and someone is looking at it weekly. Deciding this afterwards is how systems stay on long past the point where they should not.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A company held to an answer its own system invented.",
      walkthrough:
        "Air Canada's website chatbot told a customer that a bereavement fare could be claimed retroactively. The airline's actual policy said otherwise. When the refund was refused the case went to the British Columbia Civil Resolution Tribunal, and the airline argued in effect that the chatbot was a separate entity responsible for its own statements.",
      result:
        "The tribunal rejected that and found the airline liable for information on its own website however it was produced. Run the seven questions against that deployment and it fails at least three: the worst true sentence was foreseeable, the answer was not grounded in the real policy, and detection depended entirely on the customer escalating. None of that required hindsight.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "documented",
      scenario: "A system that passed every test it was given and still failed.",
      walkthrough:
        "Google Flu Trends estimated influenza prevalence from search volume and performed impressively at launch. Over later seasons its estimates drifted well away from the reference data. Search behaviour had changed, partly through media coverage of flu and partly through changes to the search product itself, while the model carried on assuming the old relationship held.",
      result:
        "This is question two and question seven together. Nothing about the model announced that it had stopped working, and there was no threshold that would have triggered a review. Any system whose inputs come from the world outside your control needs a drift check, and the check needs a number attached to it.",
      source: {
        label: "Lazer, Kennedy, King and Vespignani, Science 343:1203-1205 (2014). The Parable of Google Flu",
        url: "https://www.science.org/doi/10.1126/science.1248506",
      },
    },
    {
      kind: "illustration",
      scenario: "The audit that took ninety minutes and cancelled a launch.",
      walkthrough:
        "A team runs the seven questions on an internal tool that drafts and sends customer emails automatically for a subset of cases. Questions one through five pass. Question four surfaces that sending is irreversible and there is no approval step. Question six reveals that the only person who can stop it is on leave.",
      result:
        "They did not cancel the project. They added an approval queue for the first month and gave two more people the switch. That is the normal outcome of this audit: not a no, but a smaller and more defensible yes.",
    },
  ],

  mistakes: [
    {
      mistake: "Running the audit after the launch date is set",
      why: "Once a date exists, every finding becomes a negotiation against the date, and the date usually wins.",
      fix: "Run it before the date is announced. The audit output should inform the date, not be squeezed around it.",
    },
    {
      mistake: "Letting the builders answer all seven alone",
      why: "The people closest to a system are the worst placed to imagine it being wrong, not because they are careless but because they have already solved every failure they could think of.",
      fix: "Put one person in the room who did not build it and whose job is to be unhelpful.",
    },
    {
      mistake: "Accepting 'a human reviews it' without checking the review",
      why: "Review that nobody has time for becomes a click. A control that is not performed is not a control, and it is worse than no control because everyone believes it is there.",
      fix: "Measure how long a review actually takes and how often the reviewer changes anything. If the edit rate is near zero, the review is theatre.",
    },
    {
      mistake: "Treating the audit as a one-off",
      why: "The system changes, the model behind it changes, and the world it reads from changes. A pass in March says nothing about September.",
      fix: "Re-run questions two, five and seven quarterly. They are the ones that decay.",
    },
  ],

  bestPractices: [
    "Write question one as a customer quote, in their words, not as a risk category.",
    "Separate what the system can read from what it can write. Audit the write list hardest.",
    "Require a named accountable person, not a team.",
    "Test abstention before launch. Ask it something it cannot know and watch what it does.",
    "Rehearse the shutdown with someone who did not build the system.",
    "Set the turn-it-off threshold in writing before launch, not during the incident.",
    "Re-run the decaying questions quarterly.",
  ],

  checklist: [
    "The worst true customer sentence is written down and agreed to be survivable.",
    "There is a detection route that does not rely on a customer complaining.",
    "One named person is accountable and knows it.",
    "Every irreversible write has a human in front of it.",
    "The system has abstained in a test and you watched it happen.",
    "Someone other than the builder has performed the shutdown.",
    "A numeric threshold for switching it off exists and has an owner.",
  ],

  faqs: [
    {
      q: "How long does this take?",
      a: "Ninety minutes for a straightforward system if the right people are in the room. If it takes a day, the extra time is you discovering things, which is the point.",
    },
    {
      q: "Who should run it?",
      a: "Someone who did not build the thing. The builders answer, someone else asks. Swapping those roles is why most internal reviews find nothing.",
    },
    {
      q: "What if we fail a question?",
      a: "Then you have found the work. Failing question four usually means adding an approval step. Failing question six is a half-day fix. Neither is a reason to abandon the project.",
    },
    {
      q: "Is this the same as a bias audit or a DPIA?",
      a: "No, and it does not replace either. Those are formal assessments with legal weight. This is the operational check you run alongside them, and it takes an afternoon rather than a fortnight.",
    },
    {
      q: "Does this apply to internal tools?",
      a: "Yes, with lower stakes. Question one becomes what a colleague could accurately say, and the answers get shorter. Do not skip question four; internal tools tend to have alarming write access.",
    },
  ],

  tools: [
    { name: "A shared document with seven headings", what: "The whole apparatus. Anything more elaborate becomes a form people fill in without thinking.", cost: "Free" },
    { name: "Your access management console", what: "The only reliable source for what the system can actually reach, as opposed to what the design says.", cost: "Varies" },
    { name: "An evaluation set", what: "Needed to answer question five honestly. A hundred real inputs including the awkward ones.", cost: "Free" },
  ],

  resources: [
    { title: "The Parable of Google Flu", kind: "Paper", note: "The canonical case of a working system quietly ceasing to work. Short and worth the twenty minutes.", url: "https://www.science.org/doi/10.1126/science.1248506" },
    { title: "Rules of Machine Learning", kind: "Docs", note: "Google's engineering guidance. Reads as though written by people who have been paged at 3am.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "evaluating-ai-systems", anchor: "build the evaluation set this needs", context: "Question five" },
    { slug: "when-your-ai-gets-it-wrong", anchor: "the incident playbook for when it does", context: "After launch" },
    { slug: "human-in-the-loop-design", anchor: "deciding where the person goes", context: "Question four" },
  ],

  relatedGuides: ["evaluating-ai-systems", "when-your-ai-gets-it-wrong", "human-in-the-loop-design"],

  conclusion: [
    "Take the system closest to launch and answer question one this week, as a customer quote. If the room disagrees about what the sentence should say, you have learned something more useful than any test result.",
  ],

  cta: {
    headline: "Want someone unhelpful in the room?",
    body: "We run this audit on systems we did not build, which is the only way it finds anything. You get the seven answers and the list of what to fix.",
    label: "Book a trust audit",
    href: "/contact",
  },
};

export default guide;
