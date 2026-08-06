import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "ai-in-product-design",
  seoTitle: "AI in Product Design: Designing for Uncertain Output",
  metaDescription:
    "Designing interfaces around AI that people trust: showing uncertainty, making correction cheap, choosing between a chat box and a button, and where research still wins.",
  title: "AI in Product Design",
  keywords: [
    "ai ux design",
    "designing ai interfaces",
    "ai product design",
    "chat interface ux",
    "ai error states",
    "human in the loop design",
  ],
  category: "ui-ux",
  level: "Intermediate",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 10,

  intro: [
    "Designing an AI feature breaks an assumption that most interface conventions rest on: that the same action produces the same result. Buttons, forms and menus were all designed around determinism. A model is probabilistic and occasionally confidently wrong.",
    "That single difference is where most AI interface design goes wrong. Teams ship a feature that behaves like a calculator in a context where it behaves more like a knowledgeable colleague who is sometimes mistaken and never says so.",
    "This guide covers designing for that: how to show uncertainty without undermining the feature, why correction cost matters more than accuracy, and the interface choice most teams get backwards.",
  ],

  coreConcepts: [
    {
      term: "Design for the wrong answer, not the right one",
      explain:
        "The happy path takes care of itself. The design problem is what a user sees, understands and can do when the output is subtly wrong.",
      detail:
        "If the recovery path is an afterthought, the feature is only usable by people who already know the right answer.",
    },
    {
      term: "Correction cost decides adoption",
      explain:
        "If fixing a wrong output takes longer than doing the task manually, people stop using the feature. This matters more than the accuracy rate.",
      detail:
        "Make edits inline, preserve context, and never make someone start again because one field was wrong.",
    },
    {
      term: "A blank chat box asks the user to do your design work",
      explain:
        "It offloads the hardest part, working out what to ask, onto someone who came to accomplish a task, not to phrase a request.",
      detail:
        "A button that does the specific thing beats a box that invites the user to describe it, for any task with a predictable shape.",
    },
    {
      term: "Show the source, not just the answer",
      explain:
        "An answer with a visible citation is checkable. Without one, the user has to trust it completely or verify it entirely, and both are bad options.",
      detail:
        "Linking to the underlying document is the single most effective trust mechanism available, and it is cheaper than improving the model.",
    },
    {
      term: "Communicate uncertainty in the interface, not in a disclaimer",
      explain:
        "A blanket 'AI can make mistakes' notice is ignored within a week. Per-output signals are read because they vary.",
      detail:
        "Low confidence should look different from high confidence. Users calibrate quickly when the signal is real.",
    },
    {
      term: "Draft state is a design pattern, not a compromise",
      explain:
        "Output that arrives as an editable draft, clearly not yet committed, sets the right expectation and puts the person in control.",
      detail:
        "This is why AI writing features are more accepted than AI decision features. The interface tells you your judgement is still required.",
    },
    {
      term: "Latency needs designing, not hiding",
      explain:
        "Model calls take seconds. A frozen interface reads as broken, and a spinner with no information reads as slow.",
      detail:
        "Stream output where possible. Partial results arriving immediately feel dramatically faster than complete results arriving slightly sooner.",
    },
    {
      term: "Make refusal legible",
      explain:
        "When the system cannot or should not answer, saying so clearly builds more trust than a vague or invented response.",
      detail:
        "Design the refusal state properly. It will be seen often and it is usually the least considered screen in the feature.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "An interface that presented an invented answer as company policy.",
      walkthrough:
        "Air Canada's website chatbot told a customer a bereavement fare could be claimed retroactively, contradicting the airline's actual terms. The interface presented this in the same visual register as everything else on the site, with nothing indicating it was generated or uncertain. The tribunal found the airline responsible for it.",
      result:
        "From a design perspective the failure is that the interface offered no way to distinguish a grounded answer from an invented one, and no route to verify. Two design decisions would have prevented the outcome: showing the policy source alongside the answer, and refusing rather than answering when no source existed.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149: analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "illustration",
      scenario: "The assistant panel nobody opened.",
      walkthrough:
        "A team adds an AI panel to their product with a text input and some suggested prompts. Usage spikes at launch and collapses. Interviews find people could not think of what to ask, and when they did ask, the answer arrived in a panel away from the work, so they had to copy it back.",
      result:
        "The same underlying capability, attached to a button on the record itself and returning an editable draft in place, was used steadily. Nothing about the model changed. The interface stopped asking the user to invent a task and stopped making them move the result.",
    },
  ],

  mistakes: [
    {
      mistake: "Defaulting to a chat interface",
      why: "It looks like the modern answer and it moves the hardest work, deciding what to ask, onto the user.",
      fix: "Use chat only where the task genuinely varies. Otherwise use a control that performs the specific action.",
    },
    {
      mistake: "One global disclaimer instead of per-output signals",
      why: "A permanent notice becomes invisible within days. It also treats a confident correct answer and a marginal one identically.",
      fix: "Vary the signal per output. Confidence, source links and a visible draft state all carry information a static banner cannot.",
    },
    {
      mistake: "Making correction expensive",
      why: "If a user has to regenerate, or re-enter context, or leave the screen to fix one field, they will do the task manually instead.",
      fix: "Inline editing on the output itself, with everything else preserved.",
    },
    {
      mistake: "Hiding latency behind an indeterminate spinner",
      why: "Users cannot tell a slow response from a broken one, so they refresh, duplicate the request and lose confidence.",
      fix: "Stream partial output, or show what stage the system is at.",
    },
    {
      mistake: "Designing only the success state",
      why: "Refusals, low confidence and outright failure are common and will be seen by every user, usually early.",
      fix: "Design those screens explicitly, with a clear next action on each.",
    },
  ],

  bestPractices: [
    "Design the wrong-answer path before the right-answer path.",
    "Put the feature where the work already happens, not in a separate panel.",
    "Return output as an editable draft that has not yet been committed.",
    "Show the source alongside the answer wherever the answer is grounded.",
    "Vary uncertainty signals per output rather than relying on a static disclaimer.",
    "Make correction inline and cheap, preserving all other context.",
    "Stream output so something appears immediately.",
    "Design the refusal state deliberately, with a clear next step.",
  ],

  businessApplications: [
    "Replacing a manual categorisation dropdown with a pre-filled suggestion the user can override.",
    "Inline draft replies inside a support console, edited before sending.",
    "Search results that show the passage an answer came from, not just the answer.",
    "Summaries that appear at the top of long records, with a link to the underlying detail.",
    "Bulk operations that present a reviewable preview rather than executing directly.",
    "Confidence-based routing where uncertain items visibly queue for a person.",
  ],

  faqs: [
    {
      q: "When is a chat interface actually right?",
      a: "When the task genuinely varies and the user knows what they want. For anything with a predictable shape, a control that performs the action beats a box asking them to describe it.",
    },
    {
      q: "How do we show confidence without undermining the feature?",
      a: "Use it to route rather than to caveat. High confidence proceeds quietly, low confidence visibly asks for review. Users trust a system that knows when it is unsure.",
    },
    {
      q: "Should we label AI-generated content in the interface?",
      a: "Yes, where the user might otherwise assume a human or a system of record produced it. The label sets the right expectation about verification.",
    },
    {
      q: "How do we handle the wait?",
      a: "Stream. Partial output arriving in a second feels faster than complete output in three, even though it finishes later.",
    },
    {
      q: "Does user research still matter here?",
      a: "More than usual. These features fail in ways that only appear in observed use, particularly around what people do after a wrong answer.",
    },
  ],

  tools: [
    { name: "Streaming responses", what: "Supported by the major model APIs. The single biggest perceived-performance win available.", cost: "Free", url: "https://docs.anthropic.com" },
    { name: "Session recordings on the feature", what: "What people do after a wrong answer is the thing you most need to see and least likely to hear in an interview.", cost: "Varies" },
    { name: "A prototype with deliberately wrong output", what: "Test the recovery path before building it. Cheapest research in this whole area.", cost: "Free" },
  ],

  resources: [
    { title: "Lost in the Middle: How Language Models Use Long Contexts", kind: "Paper", note: "Why long inputs degrade quality, which explains several failure modes designers otherwise find mysterious.", url: "https://arxiv.org/abs/2307.03172" },
  ],

  internalLinks: [
    { slug: "ai-for-saas-businesses", anchor: "the product and pricing side of the same decision", context: "Product strategy" },
    { slug: "designing-agent-tools", anchor: "the equivalent problem for tool interfaces", context: "Technical design" },
    { slug: "evaluating-ai-systems", anchor: "measuring whether it actually works", context: "Validation" },
  ],

  relatedGuides: ["ai-for-saas-businesses", "designing-agent-tools", "evaluating-ai-systems"],

  conclusion: [
    "Prototype your feature with deliberately wrong output and watch five people try to recover from it. That session will change more of your design than any amount of work on the happy path.",
  ],
};

export default guide;
