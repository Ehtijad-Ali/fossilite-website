import type { Guide } from "../types";

export const guide: Guide = {
  slug: "ai-for-sales-teams",
  seoTitle: "AI for Sales Teams: Research, Follow-Up and Pipeline",
  metaDescription:
    "Where AI genuinely helps a sales team — account research, call notes, follow-up, lead scoring — and the outreach automation that damages your pipeline.",
  title: "AI for Sales Teams",
  keywords: [
    "ai for sales",
    "ai sales automation",
    "ai lead scoring",
    "sales call notes ai",
    "ai prospecting research",
    "crm automation ai",
  ],
  category: "sales",
  level: "Beginner",
  updated: "2026-08-05",
  author: "Fossilite",
  readingTime: 12,

  intro: [
    "Most AI-for-sales pitches lead with volume: send more emails, contact more prospects, book more meetings. That's the application with the worst returns and the highest chance of damaging something you can't easily repair — your domain reputation and your reputation generally.",
    "The genuine wins are quieter and sit either side of the conversation. Before it: research that would take a rep twenty minutes, done in two. After it: notes written, CRM updated, follow-up drafted, next steps captured. In the middle, where a human is persuading another human, AI mostly gets in the way.",
    "This guide covers where AI reliably earns its cost in a sales function, why outreach volume is the trap, how to think about lead scoring without repeating a well-documented mistake, and what to measure.",
  ],

  whyItMatters: [
    "Sales reps spend a large share of their week not selling — researching accounts, writing notes, updating records, drafting follow-ups, assembling proposals. That admin is real work and it's exactly the shape AI handles well. Recovering it puts hours back into conversations without hiring anyone.",
    "The downside risk is unusual, though. A bad marketing email is ignored. A bad automated sales sequence gets your domain flagged, which affects every email your company sends including invoices and support replies. The blast radius extends well past the campaign.",
    "And sales data is the most contaminated data in most businesses. CRM fields are half-empty, statuses are stale, and 'closed lost' hides a dozen different reasons. Any AI built on top of it inherits all of that, which is worth knowing before you trust a score.",
  ],

  coreConcepts: [
    {
      term: "Automate around the conversation, not the conversation",
      explain:
        "Research before, admin after. The persuasion in the middle is where a human is doing something AI can't, and where automating reads as exactly what it is.",
      detail:
        "This division is also the risk boundary: everything before and after is internal, and the middle is customer-facing with your reputation attached.",
    },
    {
      term: "Research is the highest-return application",
      explain:
        "Turning a company's public information, your CRM history and prior conversations into a structured brief takes a rep fifteen to twenty minutes and takes AI under two.",
      detail:
        "It also improves quality, not just speed — reps arrive prepared for calls they'd otherwise have skimmed, and preparation is the variable that most affects outcomes.",
    },
    {
      term: "Call notes and CRM hygiene pay back immediately",
      explain:
        "Transcribing, summarising, extracting next steps and updating records removes the task reps most reliably skip. Better data downstream is a side effect worth as much as the time saved.",
      detail:
        "The reason CRMs are empty isn't laziness — it's that updating them happens after the call, when the next one is starting. Removing that friction fixes the data problem at its source.",
    },
    {
      term: "Volume outreach is the trap",
      explain:
        "AI makes it trivial to send far more personalised-looking emails. Recipients recognise them, reply rates fall, and spam complaints put your sending domain at risk.",
      detail:
        "The damage isn't confined to the campaign. A flagged domain affects transactional email too — invoices, password resets, support replies — and recovering reputation takes months.",
    },
    {
      term: "Personalisation means researched, not templated",
      explain:
        "Inserting a company name into a template isn't personalisation and reads worse than an honest generic message, because it signals effort that wasn't made.",
      detail:
        "Genuine personalisation requires reading something specific and saying something specific about it. AI can do the reading; a human should still approve what's said.",
    },
    {
      term: "Lead scoring inherits your history",
      explain:
        "A model trained on which leads converted learns the pattern of who your reps pursued and closed — not who was genuinely a good fit.",
      detail:
        "If your team historically neglected a segment, the model will score it low, and the self-fulfilling loop tightens. This is the same failure that scrapped Amazon's hiring tool, in a commercial setting.",
    },
    {
      term: "Proposal and follow-up drafting under review",
      explain:
        "First drafts from structured inputs — call notes, requirements, pricing rules — with the rep editing. Fast, consistent, and a human owns every word that goes out.",
      detail:
        "Consistency is underrated here. It also enforces your required disclaimers and approved claims, which matters in regulated sales.",
    },
    {
      term: "Your CRM data is worse than you think",
      explain:
        "Empty fields, stale statuses, inconsistent stage definitions, and 'closed lost' covering everything from wrong-fit to no-budget to lost-to-competitor.",
      detail:
        "Any AI reading that data inherits the mess. Auditing it before building is unglamorous and frequently the highest-value part of the project.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What happens when a model learns from past selection decisions.",
      walkthrough:
        "Amazon trained a CV-screening model on a decade of applications, and it learned that male candidates had historically been preferred — penalising CVs mentioning \"women's\" and favouring language more common on men's applications. The engineering was sound; the model faithfully reproduced the pattern in its labels.",
      result:
        "The mechanism transfers directly to lead scoring. A model trained on which leads your reps converted learns which leads your reps *pursued*. Segments your team historically under-worked will score low, reps will deprioritise them further, and the loop tightens. If you score leads, use explicit fit criteria you can state and audit — not a pattern learned from past outcomes.",
      source: {
        label: "Dastin, Reuters (10 October 2018) — Amazon scraps secret AI recruiting tool that showed bias against women",
        url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women",
      },
    },
    {
      kind: "documented",
      scenario: "Why the volume play is a false economy.",
      walkthrough:
        "CB Insights has repeatedly compiled post-mortems written by failed startups. In the original set of 110+, 42% cited no market need — the most common reason given. A later study of 431 venture-backed failures attributed 43% to poor product-market fit, alongside 70% running out of capital.",
      result:
        "The relevance to sales automation is direct. If prospects aren't converting, sending more messages is treating a fit problem as a volume problem. Companies fail from building things people didn't need far more often than from insufficient outreach, and AI makes it cheap to scale the wrong activity. Before automating volume, check whether volume is actually the constraint.",
      source: {
        label: "CB Insights — The Top Reasons Startups Fail",
        url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/",
      },
    },
    {
      kind: "illustration",
      scenario: "The sequence that burned the domain.",
      walkthrough:
        "A pattern worth avoiding by design rather than by luck. A team uses AI to scale outreach from 200 to 3,000 emails a week, each lightly personalised from a template. Reply rate per email falls but total replies rise, so it looks like it's working. Then spam complaints accumulate, the sending domain's reputation drops, and deliverability collapses — not just for the campaign, but for invoices, password resets and support replies from the same domain.",
      result:
        "Recovering domain reputation takes months and there's no fast lever. The safer architecture separates sending domains for outreach and transactional mail, caps volume well below what's technically possible, and holds reply rate — not send volume — as the metric that matters. If reply rate is falling, more sending is the wrong response.",
    },
  ],

  learningPath: [
    {
      title: "Measure where the week actually goes",
      body: "Have reps log time for two weeks across selling, research, admin and internal meetings. Most teams find selling is a minority of the week and are surprised by which category dominates.",
      effort: "2 weeks, light",
      outcome: "A baseline showing which admin to attack first.",
    },
    {
      title: "Audit the CRM before building anything",
      body: "Check field completeness, stage definitions and what 'closed lost' actually contains. Anything you build reads this data, so its quality is a ceiling on what's possible.",
      effort: "1 week",
      outcome: "An honest picture of your data, and usually a cleanup list.",
    },
    {
      title: "Start with account research briefs",
      body: "Turn public company information plus CRM history into a structured pre-call brief — recent news, likely priorities, prior interactions, open questions. Highest return, zero customer-facing risk.",
      effort: "2–3 weeks",
      outcome: "Reps arriving prepared for calls they'd have skimmed.",
    },
    {
      title: "Automate call notes and CRM updates",
      body: "Transcribe, summarise, extract next steps and commitments, and write them back to the record. This is the task reps skip, and fixing it improves your data at source.",
      effort: "2–4 weeks",
      outcome: "Notes that exist, and a CRM that reflects reality.",
    },
    {
      title: "Draft follow-ups for rep approval",
      body: "Generate follow-up emails from call notes with the rep editing before send. Track how often drafts go unedited — that tells you where the drafting is genuinely good.",
      effort: "2–3 weeks",
      outcome: "Faster follow-up with a human on every outbound word.",
    },
    {
      title: "If you score leads, score on stated fit",
      body: "Use explicit criteria you can articulate — company size, sector, technology, trigger events — rather than a pattern learned from past conversions. Audit which segments score low and ask why.",
      effort: "3–4 weeks",
      outcome: "A score you can explain and defend to a rep who disagrees.",
    },
    {
      title: "Hold reply rate as the outreach metric",
      body: "If you automate outreach at all, cap volume and judge by reply rate and meetings booked per hundred sent. A falling reply rate means stop, not send more.",
      effort: "Ongoing",
      outcome: "A metric that protects your domain rather than burning it.",
    },
  ],

  mistakes: [
    {
      mistake: "Leading with outreach volume",
      why: "It's the lowest-return, highest-risk application. Recipients recognise generated messages, reply rates fall, and spam complaints threaten every email your company sends.",
      fix: "Start with research and admin. If you do automate outreach, cap volume and use a separate sending domain from transactional mail.",
    },
    {
      mistake: "Training a lead score on past conversions",
      why: "It learns who your reps pursued, not who was a good fit. Under-worked segments score low, get worked less, and the loop tightens.",
      fix: "Score on explicit, stateable fit criteria you can audit. Check which segments score low and whether that reflects fit or history.",
    },
    {
      mistake: "Building on unaudited CRM data",
      why: "Half-empty fields, stale statuses and a 'closed lost' bucket covering six different reasons. Anything reading that data inherits the confusion.",
      fix: "Audit completeness and stage definitions first. The cleanup is often more valuable than the AI on top of it.",
    },
    {
      mistake: "Calling templated insertion 'personalisation'",
      why: "Recipients spot it instantly, and it reads worse than an honest generic message because it signals effort that wasn't made.",
      fix: "Use AI to do the research; have a human decide what specific thing to say about it.",
    },
    {
      mistake: "Sending outreach from your main domain",
      why: "Reputation damage from cold sending affects invoices, password resets and support replies. The blast radius extends far past the campaign.",
      fix: "Separate sending domains, and treat deliverability as a shared asset rather than a campaign resource.",
    },
    {
      mistake: "Letting AI send without a human reading it",
      why: "One confidently wrong claim about pricing, capability or timeline in a customer-facing email is a commercial problem that outlasts the efficiency gain.",
      fix: "Draft-for-review on anything customer-facing. Full autonomy belongs to internal work.",
    },
    {
      mistake: "Measuring activity instead of outcomes",
      why: "Emails sent and calls logged rise easily and predict nothing. AI makes activity metrics trivially inflatable.",
      fix: "Track replies, meetings booked, pipeline created and time-to-close. Activity is an input, not a result.",
    },
  ],

  bestPractices: [
    "Automate around the conversation — research before, admin after — and leave the middle to the rep.",
    "Audit CRM data quality before building anything that reads it.",
    "Start with pre-call research briefs: highest return, no customer-facing risk.",
    "Automate call notes and CRM write-back to fix your data at source.",
    "Draft customer-facing messages for rep approval; never send unreviewed.",
    "Score leads on explicit fit criteria you can state, not learned conversion patterns.",
    "Audit which segments your scoring deprioritises, and ask whether that reflects fit or history.",
    "Separate outreach and transactional sending domains.",
    "Judge outreach on reply rate and meetings booked, never on volume sent.",
    "Measure pipeline created and time-to-close, not activity counts.",
  ],

  proTips: [
    "Ask reps which admin task they most reliably skip. That's your first automation — it's the one with real pain behind it, and fixing it buys goodwill for everything after.",
    "Read twenty AI-drafted follow-ups before letting any go out unedited. The failure mode is confident specificity about things that weren't discussed, and it's invisible in aggregate metrics.",
    "Check what fraction of your 'closed lost' records have a reason attached. It's usually low, and it's the single field that would most improve everything downstream.",
    "If reply rate falls while sends rise, stop. That's the signal that precedes deliverability damage, and it's the only warning you get.",
    "Test your lead scoring against deals your team won that it would have scored low. If there are several, the model has learned your habits rather than your market.",
    "Keep the research brief short enough to read before a call. A two-page brief nobody opens is worse than four bullet points somebody does.",
  ],

  businessApplications: [
    "Pre-call account research assembled from public sources and CRM history.",
    "Call transcription, summarisation and automatic extraction of next steps and commitments.",
    "CRM field completion and hygiene, fixing the data problem where it starts.",
    "Follow-up email drafting from call notes, for rep approval.",
    "Proposal and quote first drafts from structured requirements and pricing rules.",
    "Pipeline review preparation — summarising deal status and flagging stalled opportunities.",
    "Competitive and objection-handling briefs assembled from your own won/lost history.",
    "Onboarding new reps by summarising account history they'd otherwise take weeks to absorb.",
  ],

  lifeApplications: [
    "Recognising generated outreach when you receive it — and understanding why it lands worse than an honest generic note.",
    "Preparing properly for any important conversation, which is the same discipline the research brief encodes.",
    "Noticing when more activity is being used to solve what is actually a fit or positioning problem.",
  ],

  exercises: [
    {
      title: "The time audit",
      brief:
        "Have the team log two weeks across selling, research, admin and internal meetings. Rank the non-selling categories by hours.",
      success: "A ranked list showing where the week actually goes.",
      time: "2 weeks, light",
    },
    {
      title: "The closed-lost audit",
      brief:
        "Sample fifty 'closed lost' records. Count how many have a specific, usable reason attached.",
      success: "A percentage, and usually a case for fixing the field.",
      time: "2–3 hours",
    },
    {
      title: "Score your own wins",
      brief:
        "Run deals you actually won through your lead scoring. Identify any the model would have ranked low and work out why.",
      success: "Evidence of whether the score reflects fit or habit.",
      time: "3–4 hours",
    },
    {
      title: "Read twenty drafts",
      brief:
        "Review twenty AI-drafted follow-ups against the calls they came from. Mark every claim that wasn't actually discussed.",
      success: "A measured invention rate before anything sends unreviewed.",
      time: "2 hours",
    },
  ],

  checklist: [
    "CRM data quality has been audited before building",
    "Research briefs are the first deployment, not outreach",
    "Call notes and CRM write-back are automated",
    "Every customer-facing message is reviewed by a rep before sending",
    "Lead scoring uses stated fit criteria, not learned conversion patterns",
    "Segments the score deprioritises have been examined",
    "Outreach uses a separate sending domain from transactional email",
    "Outreach is judged on reply rate, not volume",
    "Success is measured as pipeline created and time-to-close",
    "Someone reads a sample of AI drafts regularly",
  ],

  faqs: [
    {
      q: "What's the best first AI project for a sales team?",
      a: "Pre-call research briefs. Highest time saving, no customer-facing risk, and reps feel the benefit immediately — which matters for adoption of everything after.",
    },
    {
      q: "Should we automate cold outreach?",
      a: "Cautiously if at all. It's the lowest-return application and it risks your sending domain, which affects invoices and support email too. If you do, use a separate domain, cap volume, and judge by reply rate.",
    },
    {
      q: "Can AI do lead scoring?",
      a: "It can, but avoid training on past conversions — that learns who your reps pursued rather than who fits. Use explicit criteria you can state and audit, and check which segments get deprioritised.",
    },
    {
      q: "Will it let us hire fewer reps?",
      a: "More realistically it lets existing reps spend more of the week selling. Treat recovered admin time as capacity for conversations, and be honest that it only becomes money if something converts it.",
    },
    {
      q: "How do we stop AI inventing things in follow-up emails?",
      a: "Ground drafts in the actual call notes, require the model to say when something wasn't discussed, and have the rep review before sending. Read twenty drafts against their source calls before trusting the pattern.",
    },
    {
      q: "Our CRM data is a mess. Does that matter?",
      a: "Yes — it's a ceiling on everything you build. The audit and cleanup is unglamorous and frequently delivers more value than the AI layer you were planning to put on top.",
    },
  ],

  tools: [
    { name: "Your CRM's built-in AI", what: "Most major CRMs now ship call summarisation and drafting. Start with what you've already bought and vetted.", cost: "Paid" },
    { name: "Call recording and transcription", what: "Gong, Fathom, Fireflies and similar. The foundation for notes, extraction and coaching.", cost: "Paid" },
    { name: "A research assistant over public sources", what: "Turning company information and CRM history into a pre-call brief.", cost: "Varies" },
    { name: "Separate sending infrastructure", what: "A distinct domain and provider for outreach, protecting transactional deliverability.", cost: "Paid" },
  ],

  resources: [
    { title: "The Mom Test — Rob Fitzpatrick", kind: "Book", note: "On finding out what customers actually need. Relevant because volume automation is often a substitute for that work.", url: "https://www.momtestbook.com" },
    { title: "CB Insights — The Top Reasons Startups Fail", kind: "Docs", note: "Why fit problems get misdiagnosed as volume problems.", url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/" },
    { title: "Reuters — Amazon scraps AI recruiting tool", kind: "Docs", note: "The mechanism behind lead scoring learning your habits instead of your market.", url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women" },
  ],

  internalLinks: [
    { slug: "pricing-your-services", anchor: "the value conversation before the quote", context: "In the proposal drafting concept" },
    { slug: "measuring-ai-roi-in-business", anchor: "whether recovered time becomes money", context: "In the FAQ on headcount" },
    { slug: "validating-a-product-idea", anchor: "checking whether volume is the real constraint", context: "In the documented CB Insights example" },
  ],

  relatedGuides: [
    "measuring-ai-roi-in-business",
    "ai-for-marketing-teams",
    "pricing-your-services",
  ],

  conclusion: [
    "The reliable AI wins in sales sit either side of the conversation. Research that gets a rep genuinely prepared. Notes, CRM updates and follow-up drafts that stop admin eating the week. Both are internal, both are measurable, and neither risks anything customer-facing.",
    "The application everyone leads with — more outreach, faster — is the one with the worst returns and a failure mode that reaches your invoices. If reply rates are falling, that's a fit or message problem, and sending more is scaling the wrong thing.",
    "Start by finding out where the week actually goes, then audit your CRM. Both are unglamorous, both take about two weeks, and together they usually reveal that the highest-value project isn't the one anyone was excited about.",
  ],

  cta: {
    headline: "Want your reps selling instead of doing admin?",
    body: "We build sales systems that handle research, notes and follow-up drafting — keeping the conversation, and the judgement, with your team.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
