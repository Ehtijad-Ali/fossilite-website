import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "choosing-an-ai-vendor",
  seoTitle: "Choosing an AI Vendor: Questions That Reveal the Truth",
  metaDescription:
    "How to evaluate an AI vendor properly: build versus buy, the demo tricks to watch for, the contract terms that matter, and the exit you should plan before signing.",
  title: "Choosing an AI Vendor",
  keywords: [
    "ai vendor selection",
    "build vs buy ai",
    "ai vendor questions",
    "ai procurement",
    "ai vendor lock-in",
    "evaluating ai software",
  ],
  category: "business-strategy",
  level: "Intermediate",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "Every AI vendor demo works. That is not a coincidence and it is not usually dishonesty. A demo is built on inputs the system handles well, and the whole category has the property that the gap between the good case and the average case is unusually wide.",
    "So the evaluation question is not whether it works. It is whether it works on your documents, your customers and your mess, at your volume, and what happens in two years when you want to leave.",
    "This guide covers the build versus buy decision honestly, the specific questions that separate a serious vendor from a wrapper, and the contract terms worth arguing about before you sign rather than after.",
  ],

  coreConcepts: [
    {
      term: "Test on your data or you have tested nothing",
      explain:
        "A demo is a statement about the vendor's sample. The only informative evaluation uses documents, tickets or records from your own business, including the awkward ones.",
      detail:
        "Insist on a paid pilot with your data before committing. A vendor who resists this is telling you something.",
    },
    {
      term: "Ask what happens when it does not know",
      explain:
        "The behaviour on the confident wrong answer matters more than the accuracy on the easy case. Ask them to show you a failure.",
      detail:
        "A serious vendor has a ready answer about confidence scores, abstention and human routing. A weaker one changes the subject to accuracy.",
    },
    {
      term: "Know what you are actually paying for",
      explain:
        "Some products are substantial engineering. Others are a thin layer over a model you could call directly, priced as though they were not.",
      detail:
        "The test is what remains if you removed the model: the workflow, the integrations, the evaluation harness, the domain data. If little remains, price accordingly.",
    },
    {
      term: "Build when it is your differentiator, buy when it is plumbing",
      explain:
        "If the capability is what customers pay you for, owning it matters. If it is invoice extraction, someone else has already solved it better than you will.",
      detail:
        "The wrong version of this decision is building infrastructure because it is interesting, or buying your core product because a demo was polished.",
    },
    {
      term: "Your data must be exportable in a usable form",
      explain:
        "Ask specifically how you get your data out, in what format, and whether that includes the labels, corrections and configuration you built up.",
      detail:
        "Accumulated corrections are often the most valuable thing you create inside a vendor's product. If they are not exportable, that is the lock-in.",
    },
    {
      term: "Model changes are their decision and your risk",
      explain:
        "If the vendor switches underlying models, behaviour can shift. Ask what notice you get and whether you can pin a version.",
      detail:
        "This is a real operational concern that almost nobody raises in procurement and everybody meets eventually.",
    },
    {
      term: "Push on data handling before legal does",
      explain:
        "Where is data processed, is it used for training, what is the retention period, who are the subprocessors, and what happens on deletion.",
      detail:
        "These answers should be immediate and written. Hesitation here predicts trouble later.",
    },
    {
      term: "Plan the exit while you are still enthusiastic",
      explain:
        "Notice period, data export, transition assistance and what happens if they are acquired. This is the cheapest it will ever be to negotiate.",
      detail:
        "You are never in a better position than before signature, and never in a worse one than during a migration.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A system that worked well and then quietly stopped.",
      walkthrough:
        "Google Flu Trends estimated influenza prevalence from search volume and performed impressively when launched. Over subsequent seasons its estimates drifted substantially from the reference data. Search behaviour had changed, partly through media coverage of flu and partly through changes to the search product itself, while the model continued to assume the old relationship.",
      result:
        "For vendor selection this is the question nobody asks in a demo: what happens as the world changes underneath the system, and who notices. Ask how the vendor monitors for drift, how often they retrain or re-evaluate, and what they would tell you if performance degraded. A vendor without a clear answer is selling you today's accuracy indefinitely.",
      source: {
        label: "Lazer, Kennedy, King and Vespignani, Science 343:1203-1205 (2014). The Parable of Google Flu",
        url: "https://www.science.org/doi/10.1126/science.1248506",
      },
    },
    {
      kind: "illustration",
      scenario: "The pilot that was not a pilot.",
      walkthrough:
        "A vendor offers a free proof of concept, runs it themselves on a sample the buyer provides, and returns strong results. On rollout, performance is noticeably worse. The sample had been curated by an internal champion who chose clear examples, and the vendor had tuned prompts specifically for those documents.",
      result:
        "Nothing dishonest necessarily happened, but the exercise measured the wrong thing. Provide a random sample you selected, keep some of it back entirely, and score the held-back portion yourself. A vendor confident in their product will agree to that arrangement.",
    },
  ],

  mistakes: [
    {
      mistake: "Evaluating on the vendor's demo data",
      why: "It is chosen to work. You learn what the best case looks like, which is the one thing you did not need to know.",
      fix: "Random sample from your own population, with a held-back portion you score yourself.",
    },
    {
      mistake: "Comparing on accuracy alone",
      why: "Accuracy on handled items ignores rejection rate, latency, integration effort and what happens on failure. Those decide the actual cost.",
      fix: "Score straight-through rate, exception handling time and failure behaviour together.",
    },
    {
      mistake: "Not asking where your corrections go",
      why: "The labelled data your team generates while using the product is often worth more than the software, and it may not be exportable.",
      fix: "Make export of corrections and configuration a written contractual term.",
    },
    {
      mistake: "Buying your differentiator",
      why: "If the capability is why customers choose you, outsourcing it means competitors can buy the same thing next quarter.",
      fix: "Buy plumbing, build the thing that is actually yours.",
    },
    {
      mistake: "Signing without an exit",
      why: "Migration costs are discovered during migration, at the worst possible moment and with no leverage.",
      fix: "Negotiate notice, export format and transition assistance before signature.",
    },
  ],

  bestPractices: [
    "Run a paid pilot on a random sample of your own data, with a held-back set you score.",
    "Ask the vendor to demonstrate a failure, not just a success.",
    "Establish what remains if you removed the model, and price against that.",
    "Get data handling answers in writing: processing location, training use, retention, subprocessors.",
    "Ask how they detect drift and what notice you get before a model change.",
    "Make export of your data, corrections and configuration a contract term.",
    "Negotiate the exit before signature, including what happens on acquisition.",
    "Include the people who will use it daily in the evaluation, not only the buyers.",
  ],

  businessApplications: [
    "Structured vendor comparison against straight-through rate on your own held-back sample.",
    "A standing procurement question set for anything described as AI-powered.",
    "Build versus buy assessment framed around whether the capability is a differentiator.",
    "Contract review focused on data export, model change notice and exit assistance.",
    "Annual reassessment of deployed vendors against current alternatives and current performance.",
  ],

  faqs: [
    {
      q: "How do we know if a vendor is just a thin wrapper?",
      a: "Ask what remains if the underlying model were removed. Workflow, integrations, evaluation tooling and domain data are real. If the answer is a prompt, price it as a prompt.",
    },
    {
      q: "Should we build or buy?",
      a: "Buy anything that is plumbing and that others have solved. Build only where the capability is the reason customers choose you.",
    },
    {
      q: "What is the most overlooked contract term?",
      a: "Export of the corrections and labels your team creates while using the product. That accumulated data is frequently the real switching cost.",
    },
    {
      q: "How long should a pilot be?",
      a: "Long enough to include a full cycle of your real variation, including month end, seasonal peaks and the awkward suppliers or customers.",
    },
    {
      q: "What if the vendor changes the underlying model?",
      a: "Ask in advance. You want notice, a way to evaluate before the switch, and ideally the ability to pin a version for a period.",
    },
  ],

  tools: [
    { name: "A held-back evaluation set", what: "A random sample of your own data that the vendor never sees. The single most informative thing in any evaluation.", cost: "Free" },
    { name: "Your standard procurement questionnaire", what: "Extend it with model change notice, drift monitoring and correction export.", cost: "Free" },
    { name: "Legal review of data terms", what: "Processing location, training use, retention and subprocessors, before signature.", cost: "Paid" },
  ],

  resources: [
    { title: "The Parable of Google Flu", kind: "Paper", note: "What happens when a well-performing system meets a changing world. Read it before any vendor tells you their accuracy figure.", url: "https://www.science.org/doi/10.1126/science.1248506" },
    { title: "Rules of Machine Learning", kind: "Docs", note: "Useful for judging whether a vendor's approach is sound engineering or fashion.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "evaluating-ai-systems", anchor: "how to build the evaluation set", context: "Pilot design" },
    { slug: "measuring-ai-roi-in-business", anchor: "work out what it has to be worth", context: "Business case" },
    { slug: "choosing-an-agent-framework", anchor: "the equivalent decision for build teams", context: "If building" },
  ],

  relatedGuides: ["evaluating-ai-systems", "measuring-ai-roi-in-business", "choosing-an-agent-framework"],

  conclusion: [
    "Before the next demo, assemble fifty records at random from your own systems and hold twenty of them back. Score those twenty yourself. It will tell you more than the entire sales process.",
  ],

  cta: {
    headline: "Evaluating a vendor and want a second opinion?",
    body: "We build these systems, so we know which questions separate real engineering from a thin layer over an API.",
    label: "Get a second opinion",
    href: "/contact",
  },
};

export default guide;
