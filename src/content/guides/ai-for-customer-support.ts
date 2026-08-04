import type { Guide } from "../types";

export const guide: Guide = {
  slug: "ai-for-customer-support",
  seoTitle: "AI for Customer Support: What Works and What Backfires",
  metaDescription:
    "How to use AI in customer support without wrecking service quality — deflection, triage, escalation design, and the documented results of getting it wrong.",
  title: "AI for Customer Support",
  keywords: [
    "ai customer support",
    "ai chatbot customer service",
    "support ticket automation",
    "ai support deflection",
    "customer service automation",
    "ai escalation to human",
  ],
  category: "customer-support",
  level: "Beginner",
  updated: "2026-08-05",
  author: "Fossilite",
  readingTime: 13,

  intro: [
    "Customer support is where most businesses try AI first, and for good reason: high volume, repetitive questions, measurable cost, and an obvious benchmark in the team already doing it. It's also where the most public failures have happened, which makes it unusually well documented — you can learn from other companies' expensive lessons rather than repeating them.",
    "The pattern in those lessons is consistent. AI handles volume extremely well and complexity badly. Deployments that respect that distinction save real money. Deployments that assume volume and complexity are the same thing get impressive numbers for a year and then quietly rehire.",
    "This guide covers where AI genuinely helps in support, how to design the handover to a human, what to measure, and the two documented cases every business should read before committing — one showing the upside with real numbers, one showing what happens when the output isn't grounded.",
  ],

  whyItMatters: [
    "Support is usually the largest repetitive-work cost in a service business, and the one with the clearest measurement. You already know your ticket volume, your average handling time and your cost per contact. That makes it the rare AI project where the business case can be calculated rather than argued about.",
    "It's also the function where a bad AI deployment is most visible to customers. A wrong answer in an internal report gets corrected quietly. A wrong answer to a customer becomes a complaint, a refund, or — as one of the documented cases below shows — a legal ruling.",
    "And the economics are asymmetric in an underappreciated way. Deflecting a routine question saves a few pounds. Mishandling an angry customer with a complex problem can cost the relationship entirely. Any design that treats all contacts as equally automatable is optimising the small number and risking the large one.",
  ],

  coreConcepts: [
    {
      term: "Volume and complexity are different axes",
      explain:
        "Most support volume is a small number of repeated questions — where is my order, how do I reset this, what's your returns policy. Most support *difficulty* sits in a long tail of unusual, emotional or multi-step cases.",
      detail:
        "AI is excellent on the first and poor on the second. Designs that route by *type* rather than treating all contacts alike are the ones that hold up.",
    },
    {
      term: "Deflection is not the goal; resolution is",
      explain:
        "A deflected contact that didn't actually solve the problem returns as a second contact, usually angrier. Measuring deflection alone rewards the failure mode.",
      detail:
        "Track resolution rate and repeat-contact rate together. A rising deflection number alongside a rising repeat rate means you've moved work, not removed it.",
    },
    {
      term: "Ground every answer in your actual policy",
      explain:
        "A model answering from general knowledge will invent plausible policy. It must answer from your help centre and policy documents, retrieved at request time, and quote the source.",
      detail:
        "This is the single control that separates the useful deployments from the ones that end up in a tribunal. Ungrounded support AI is a liability, not a feature.",
    },
    {
      term: "Design the escalation, not just the automation",
      explain:
        "The handover to a human is the part that determines customer experience. It needs a trigger, a context handover, and a path that doesn't make the customer repeat themselves.",
      detail:
        "Escalation triggers worth building: low retrieval confidence, detected frustration, a second contact on the same issue, any mention of cancellation or legal action, and an explicit request for a person.",
    },
    {
      term: "Always offer the human option",
      explain:
        "Hiding the route to a person to protect deflection metrics reliably damages satisfaction. Customers who want a human and can't find one don't quietly accept the bot.",
      detail:
        "The documented case below shows a major company reversing course specifically on this point after service quality fell.",
    },
    {
      term: "Draft-for-review before full autonomy",
      explain:
        "The lowest-risk high-value deployment is AI drafting responses that an agent approves or edits. You get most of the speed with a human checking every word that reaches a customer.",
      detail:
        "It also produces training data: the edits agents make show you exactly where the AI is weak, which is the input you need before widening autonomy.",
    },
    {
      term: "Triage is often worth more than answering",
      explain:
        "Classifying by intent, urgency and product area, then routing to the right queue with relevant history attached, saves time on every ticket including the ones humans handle.",
      detail:
        "It's also far lower risk than customer-facing generation — a misrouted ticket is an annoyance, a wrong answer is a liability.",
    },
    {
      term: "Your documentation becomes the bottleneck",
      explain:
        "Grounded AI can only answer what's written down. Deployments frequently reveal that the help centre is out of date, contradictory, or missing the answers customers actually ask for.",
      detail:
        "That's a genuinely useful finding, and often the highest-return work the project produces — improving the docs helps the humans too.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Klarna's AI assistant — the results, and the reversal a year later.",
      walkthrough:
        "In February 2024 Klarna announced an OpenAI-powered assistant handling two-thirds of its customer service chats in its first month: 2.3 million conversations, across 23 markets and 35+ languages, with resolution time falling from 11 minutes to under 2. They reported customer satisfaction on par with human agents, a 25% drop in repeat inquiries, and an estimated $40 million profit improvement for 2024, describing the work as equivalent to 700 full-time agents. Then in May 2025, CEO Sebastian Siemiatkowski told Bloomberg the cost-cutting had gone too far, and the company began recruiting human agents again so customers would always have the option of speaking to a person. His summary: \"We focused too much on cost. The result was lower quality.\"",
      result:
        "Both halves matter and most write-ups only quote one. The volume gains were real and large. The failure was treating volume as the whole problem — AI held up on routine contacts and not on the emotional, complex and multi-step cases, and satisfaction fell. The design that survives is the one Klarna arrived at second: AI on the high-volume tier, humans available for complexity, and never hiding the route to a person. Note too that \"700 agents\" was a modelled equivalence rather than a headcount, which is worth remembering when a vendor quotes it at you.",
      source: {
        label: "Klarna press release (Feb 2024) and Forbes coverage of the May 2025 reversal",
        url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/",
      },
    },
    {
      kind: "documented",
      scenario: "An airline held liable for a discount its chatbot invented.",
      walkthrough:
        "Jake Moffatt asked Air Canada's website chatbot about bereavement fares. It told him he could book at full price and claim the reduced rate retroactively within 90 days. Air Canada's actual published policy allowed no such thing. The airline argued, among other things, that the chatbot was a separate entity responsible for its own statements.",
      result:
        "In February 2024 the British Columbia Civil Resolution Tribunal rejected that argument, holding Air Canada responsible for all information on its website including the chatbot's, and awarding damages covering the fare difference. The operational lesson is precise: an ungrounded support bot doesn't just give bad answers, it makes commitments your business is bound by. Answers must come from your actual policy documents, with the source quoted, and the bot must be able to say it doesn't know.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149 — analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "illustration",
      scenario: "The deflection metric that hid a worse experience.",
      walkthrough:
        "A pattern worth watching for in your own dashboard. A support bot is judged on deflection rate, and the number climbs steadily — a genuine success by the measure being reported. Contact volume, though, is flat. What's actually happening is that customers get an unhelpful answer, close the chat, and open a new one an hour later. Each new contact counts as a fresh ticket, and each deflection counts as a win.",
      result:
        "Pairing deflection with repeat-contact rate and resolution rate makes this visible immediately. If deflection rises while total contacts stay flat, you've relocated the work rather than removed it — and the customer had a worse experience on the way.",
    },
  ],

  learningPath: [
    {
      title: "Find out what people actually contact you about",
      body: "Export three months of tickets and categorise the top 20 reasons by volume. Most businesses find a handful of question types account for the majority of contacts — and that they're not the ones anyone assumed.",
      effort: "4–6 hours",
      outcome: "A ranked list of contact reasons with volumes attached.",
    },
    {
      title: "Fix the documentation for your top five",
      body: "For the five highest-volume reasons, check whether a clear, current, correct answer exists in writing. Frequently it doesn't. Write it before automating anything — grounded AI can only answer what's documented.",
      effort: "1–2 days",
      outcome: "Five accurate documented answers, useful to humans immediately.",
    },
    {
      title: "Start with triage, not answers",
      body: "Classify incoming tickets by intent, urgency and product area, and route them with relevant account history attached. Low risk, immediate time saving on every ticket including human-handled ones.",
      effort: "1–2 weeks",
      outcome: "Faster routing and less time spent gathering context.",
    },
    {
      title: "Move to drafted responses under review",
      body: "Have AI draft replies grounded in your documentation, with an agent approving or editing before send. Track how often drafts are sent unedited — that number tells you where autonomy is safe.",
      effort: "2–4 weeks",
      outcome: "Faster handling with a human on every customer-facing word.",
    },
    {
      title: "Automate only the highest-confidence types",
      body: "Pick the two or three contact reasons where drafts are almost always sent unedited, and let those run without review. Keep everything else on the drafted path.",
      effort: "2–3 weeks",
      outcome: "Genuine deflection on the safest categories only.",
    },
    {
      title: "Build the escalation properly",
      body: "Define triggers — low confidence, frustration, repeat contact, cancellation or legal mentions, explicit request for a person — and make sure the customer never repeats themselves on handover.",
      effort: "1–2 weeks",
      outcome: "A handover customers don't resent.",
    },
    {
      title: "Measure the pair, not the headline",
      body: "Report deflection alongside repeat-contact rate, resolution rate and satisfaction split by handled-by-AI versus human. Review monthly and be willing to narrow scope.",
      effort: "Ongoing",
      outcome: "You'd notice quality falling before customers tell you.",
    },
  ],

  mistakes: [
    {
      mistake: "Letting the bot answer from general knowledge",
      why: "It will invent policy that sounds plausible, and your business can be held to it. This is a documented legal outcome, not a hypothetical.",
      fix: "Ground every answer in your actual policy documents, require the source to be quoted, and give the bot an explicit way to say it doesn't know.",
    },
    {
      mistake: "Optimising deflection in isolation",
      why: "It rewards unhelpful answers that end the conversation. Customers return through a new ticket, which the metric counts as fresh volume rather than a failure.",
      fix: "Always pair deflection with repeat-contact and resolution rates. Judge the pair.",
    },
    {
      mistake: "Hiding the route to a human",
      why: "Customers who want a person and can't find one escalate through public channels instead. It reliably damages satisfaction and is the specific thing Klarna reversed on.",
      fix: "Make the human option visible at every step. The customers who use it are usually the ones where the relationship is at stake.",
    },
    {
      mistake: "Automating before the documentation is right",
      why: "Grounded AI can only be as accurate as what's written. Automating on top of stale or contradictory docs industrialises the confusion.",
      fix: "Fix the top contact reasons in writing first. It improves human handling immediately and is a prerequisite either way.",
    },
    {
      mistake: "Going straight to full autonomy",
      why: "You have no evidence about where the AI is weak until you've watched it work, and customer-facing errors are the expensive kind to learn from.",
      fix: "Draft-for-review first. Widen autonomy only for categories where drafts are consistently sent unedited.",
    },
    {
      mistake: "Treating an emotional contact like a routine one",
      why: "A frustrated customer given a competent automated answer often becomes more frustrated. The content can be correct and the interaction still fail.",
      fix: "Detect frustration and cancellation intent as escalation triggers, and route those to a person regardless of whether the question is answerable.",
    },
    {
      mistake: "Cutting headcount on projected savings",
      why: "The savings arrive later than the forecast and the quality cost arrives sooner. Rehiring is more expensive and slower than not firing.",
      fix: "Let the volume genuinely shift first, then redeploy people to the complex work where they're most valuable. Treat headcount as the last lever, not the first.",
    },
  ],

  bestPractices: [
    "Ground every customer-facing answer in your own documentation, with the source quoted and checkable.",
    "Give the AI an explicit way to say it doesn't know, and test it with questions your docs can't answer.",
    "Report deflection, repeat-contact rate, resolution rate and satisfaction together — never deflection alone.",
    "Keep the human option visible at every step of the conversation.",
    "Escalate on low confidence, frustration, repeat contact, cancellation intent, legal mentions, and any explicit request.",
    "Carry full context across the handover so customers never repeat themselves.",
    "Start with triage, move to drafted replies, and automate only the categories that consistently need no edits.",
    "Split satisfaction scores by whether AI or a human handled the contact — an averaged number hides the problem.",
    "Review scope monthly and be willing to narrow it. Shrinking automation is a valid outcome, not a failure.",
  ],

  proTips: [
    "Read fifty conversations the AI handled end to end, by hand, every month. Aggregate metrics will not show you a competent-sounding answer that missed the point, and that's the failure that loses customers.",
    "Track how often agents edit AI drafts before sending, and what they change. It's the cheapest map you'll get of where the AI is weak and which categories are safe to automate next.",
    "Log every question the AI couldn't answer. That list is a documentation backlog ranked by real customer demand — usually more useful than anything your content plan already contains.",
    "Test the escalation path as a customer, not as an admin. The gap between 'escalation exists' and 'a customer can find it while annoyed' is where most of the damage happens.",
    "When a vendor quotes headline deflection numbers, ask what happened to repeat-contact rate and satisfaction over the same period. The good ones have the answer ready.",
  ],

  businessApplications: [
    "Order status, delivery and returns — high volume, factual, well-documented, and the safest place to start.",
    "Account and access questions, where the answer is procedural and the same every time.",
    "Ticket triage and routing, which pays back on every contact including those a human handles.",
    "Drafting first responses for agent review, giving speed without removing the human check.",
    "Out-of-hours coverage, where the honest comparison is against nobody answering at all rather than against a human.",
    "Internal support for your own staff — same mechanics, far lower stakes, and a good place to build confidence.",
    "Summarising long ticket threads at handover so the next agent starts from a briefing rather than a transcript.",
  ],

  lifeApplications: [
    "Recognising when you're being handled by an ungrounded bot — asking for the source of a policy claim usually reveals it quickly.",
    "Knowing that a company is bound by what its chatbot tells you, which is worth remembering when one makes you a commitment.",
    "Applying the volume-versus-complexity distinction to your own work: automate the repetitive, keep judgement where it belongs.",
  ],

  exercises: [
    {
      title: "The contact-reason audit",
      brief:
        "Categorise three months of tickets by reason and rank by volume. Note which of your top ten have a clear, current, documented answer.",
      success: "A ranked list, and an honest count of how many are properly documented.",
      time: "4–6 hours",
    },
    {
      title: "Try to break your own bot",
      brief:
        "Ask it ten questions your documentation genuinely can't answer, and three where the policy is ambiguous. Count how many produce a confident invention.",
      success: "You know your fabrication rate before customers discover it.",
      time: "2 hours",
    },
    {
      title: "Escalate as a customer",
      brief:
        "Go through the full journey as an annoyed customer trying to reach a person. Time it. Count the steps. Note where you'd have given up.",
      success: "A written list of friction points in the handover.",
      time: "1 hour",
    },
    {
      title: "The paired metric review",
      brief:
        "Chart deflection against repeat-contact rate over the last three months. If deflection rose while total contacts stayed flat, investigate.",
      success: "A chart that tells you whether work was removed or relocated.",
      time: "2–3 hours",
    },
  ],

  checklist: [
    "Top contact reasons are ranked by volume with real numbers",
    "The five highest-volume answers exist in writing, current and correct",
    "Every AI answer is grounded in documentation with a quotable source",
    "The AI has a tested way to say it doesn't know",
    "Deflection is reported alongside repeat-contact and resolution rates",
    "Satisfaction is split by AI-handled versus human-handled",
    "The human option is visible at every step",
    "Escalation triggers cover confidence, frustration, repeats, cancellation and legal mentions",
    "Context carries across handover so customers don't repeat themselves",
    "Someone reads fifty AI-handled conversations by hand each month",
    "Headcount decisions follow demonstrated volume shift, not forecasts",
  ],

  faqs: [
    {
      q: "How much support volume can AI realistically handle?",
      a: "It depends entirely on your contact mix. Klarna reported two-thirds of chats in month one, but their volume is dominated by routine payment queries. Audit your own contact reasons first — the share that's genuinely routine is the share that's automatable.",
    },
    {
      q: "Will it reduce headcount?",
      a: "Possibly, eventually, and it's the wrong place to start. The documented reversals came from cutting on forecast savings then rehiring at higher cost. Let volume shift demonstrably first, then redeploy people onto complex work.",
    },
    {
      q: "What's the safest first project?",
      a: "Ticket triage — classifying and routing with context attached. It saves time on every contact, including human-handled ones, and a misroute is an annoyance rather than a liability.",
    },
    {
      q: "Can we be held responsible for what the AI tells customers?",
      a: "Yes. A Canadian tribunal held an airline liable for a fare policy its chatbot invented, rejecting the argument that the bot was a separate entity. Treat AI output as your company's statement, because legally it is.",
    },
    {
      q: "How do we stop it inventing policy?",
      a: "Retrieve the relevant policy documents at request time, require the answer to quote its source, set a relevance threshold, and give it an explicit refusal path. Then test with questions your docs can't answer.",
    },
    {
      q: "Should customers be told they're talking to AI?",
      a: "Yes — it's increasingly a regulatory expectation and it sets appropriate expectations. Customers are markedly more tolerant of an AI that's clearly labelled and offers an easy route to a person.",
    },
    {
      q: "What should we measure?",
      a: "Resolution rate, repeat-contact rate, satisfaction split by handler, escalation rate, and cost per resolved contact. Deflection on its own rewards exactly the failure you're trying to avoid.",
    },
  ],

  tools: [
    { name: "Your existing helpdesk", what: "Zendesk, Intercom, Freshdesk and others now ship AI triage and drafting. Start with what you already pay for.", cost: "Paid" },
    { name: "A retrieval layer over your help centre", what: "The component that makes answers grounded rather than invented. Non-negotiable for customer-facing use.", cost: "Varies" },
    { name: "Ticket analytics", what: "Whatever lets you categorise and rank contact reasons. Often just an export and a spreadsheet.", cost: "Free" },
    { name: "Survey tooling", what: "Post-contact satisfaction, captured separately for AI-handled and human-handled contacts.", cost: "Freemium" },
  ],

  resources: [
    { title: "Klarna AI assistant press release", kind: "Docs", note: "The primary source for the 2024 numbers. Read alongside the 2025 reversal coverage rather than on its own.", url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/" },
    { title: "Moffatt v. Air Canada — McCarthy Tétrault analysis", kind: "Docs", note: "What happens when a support bot invents policy. Short, and worth reading before you deploy.", url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot" },
    { title: "Building Effective Agents — Anthropic", kind: "Docs", note: "Technical guidance on grounding and escalation design, framework-agnostic.", url: "https://www.anthropic.com/research/building-effective-agents" },
  ],

  internalLinks: [
    { slug: "rag-explained", anchor: "how grounding in your own documents works", context: "In the grounding concept" },
    { slug: "measuring-ai-roi-in-business", anchor: "building the business case properly", context: "In the metrics section" },
    { slug: "how-large-language-models-work", anchor: "why an ungrounded model invents policy", context: "In the documented Air Canada example" },
  ],

  relatedGuides: [
    "measuring-ai-roi-in-business",
    "rag-explained",
    "ai-for-operations-and-workflow",
  ],

  conclusion: [
    "Customer support is the best-documented AI use case in business, and the documentation says something specific: AI handles volume well and complexity badly. The deployments that work route by contact type, ground every answer in real policy, design the human handover properly, and never hide it.",
    "The two cases in this guide are worth more than any vendor deck. One shows genuine, large, measured gains on routine contacts. The other shows a company legally bound by a policy its chatbot invented. Both outcomes were available to the same technology; the difference was design.",
    "Start where the risk is lowest and the return is certain: audit your contact reasons, fix the documentation for the top five, and automate triage before you automate answers. Most of the value is in that unglamorous sequence, and it's the part that makes everything after it safe.",
  ],

  cta: {
    headline: "Thinking about AI in your support function?",
    body: "We build grounded support systems with real escalation design and honest measurement — including telling you which contact types shouldn't be automated.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
