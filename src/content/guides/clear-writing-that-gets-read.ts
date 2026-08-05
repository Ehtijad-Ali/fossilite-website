import type { Guide } from "../types";
import { EHTIJAD_ALI } from "../authors";

export const guide: Guide = {
  slug: "clear-writing-that-gets-read",
  seoTitle: "Clear Writing: How to Be Understood the First Time",
  metaDescription:
    "A practical guide to writing that people actually read and act on — structure, sentence craft, editing technique, and the habits that make writing clear.",
  title: "Clear Writing That Gets Read",
  keywords: [
    "how to write clearly",
    "business writing",
    "clear communication",
    "writing skills",
    "professional writing",
    "editing techniques",
  ],
  category: "communication",
  level: "Beginner",
  updated: "2026-08-04",
  author: EHTIJAD_ALI,
  readingTime: 12,

  intro: [
    "Most bad writing at work isn't produced by bad writers. It's produced by people who started typing before they knew what they wanted, and by people who confused sounding professional with being understood. Both are fixable, and neither requires talent.",
    "Clear writing is a thinking problem wearing a language costume. When a paragraph is muddled, the usual cause is that the underlying thought was muddled and the sentences faithfully reproduced it. This is good news: the fastest route to better prose is not better vocabulary but clearer thinking about what you actually want the reader to do.",
    "This guide is about the writing that fills a working life — emails, proposals, updates, documentation, messages that need a decision. Not literary prose. The standard is different and much more measurable: did the reader understand it on the first pass, and did they do the thing?",
  ],

  whyItMatters: [
    "Writing is now the primary interface of professional life. Decisions get made in documents, work gets assigned in messages, and your reputation with people who've never met you is built almost entirely from text. Someone who writes clearly appears more competent than someone equally capable who doesn't, and that gap is neither fair nor going away.",
    "The compounding cost of unclear writing is enormous and mostly invisible. A confusing message generates three clarifying replies. An ambiguous spec produces the wrong feature. A rambling update means the decision doesn't get made this week. Nobody logs these costs, which is precisely why they persist.",
    "There's also a selfish argument. Writing something down is the most reliable way to discover that you don't understand it. The discipline of making a thought clear enough for a stranger regularly reveals that the thought was incoherent — which is unpleasant in the moment and extremely valuable overall.",
  ],

  coreConcepts: [
    {
      term: "Decide what you want before you write",
      explain:
        "Every piece of practical writing has a purpose: a decision, an action, an understanding. If you can't state it in one sentence before you begin, the writing will wander until you find it — usually in the final paragraph.",
      detail:
        "Write the purpose at the top of your draft as a note to yourself, then delete it at the end. It keeps the whole piece pointed in one direction.",
    },
    {
      term: "Put the conclusion first",
      explain:
        "Readers of workplace writing are scanning, interrupted, and deciding within seconds whether to keep going. Leading with the point respects that. Building to it as a reveal does not.",
      detail:
        "This inverts how most people were taught to write essays. The structure is: what I need, why, then the supporting detail — not background, then reasoning, then finally the ask.",
    },
    {
      term: "One idea per sentence",
      explain:
        "Sentences carrying three clauses and two qualifications force the reader to hold everything in working memory while they parse. Splitting them costs nothing and removes the effort.",
      detail:
        "Long sentences aren't inherently bad — long tangled ones are. A long sentence with a single clear shape reads fine; a short one with three embedded conditions doesn't.",
    },
    {
      term: "Concrete beats abstract",
      explain:
        "'We should improve our processes' means nothing. 'Approvals take nine days and should take two' means something. Abstraction hides both the problem and your reasoning.",
      detail:
        "Whenever you write an abstract noun — efficiency, alignment, engagement, synergy — ask what specific thing you'd point at. Then write that instead.",
    },
    {
      term: "Verbs carry the weight",
      explain:
        "Writing gets sluggish when actions are converted into nouns. 'We made a decision to conduct a review' is 'we decided to review'. The second is shorter and more forceful because the action stays a verb.",
      detail:
        "Watch for words ending in -tion, -ment, -ance. Each one is often a verb that's been buried and can be dug back out.",
    },
    {
      term: "Passive voice hides the actor",
      explain:
        "'Mistakes were made' famously omits who made them. Passive constructions aren't wrong, but they systematically remove agency — which is sometimes accidental and sometimes precisely why people reach for them.",
      detail:
        "Use passive deliberately when the actor genuinely doesn't matter. Use active when someone is responsible for something, especially if that someone is you.",
    },
    {
      term: "Structure is navigation, not decoration",
      explain:
        "Headings, short paragraphs and lists exist so a reader can find the part that concerns them without reading the whole thing. Most readers of most documents only need one section.",
      detail:
        "A useful test: can someone answer 'what does this mean for me?' by reading only the headings and the first line of each paragraph? If not, the structure isn't doing its job.",
    },
    {
      term: "Editing is a separate activity from writing",
      explain:
        "Writing and editing use different modes of attention, and doing both simultaneously produces slow, timid drafts. Write badly and quickly, then edit ruthlessly.",
      detail:
        "The first draft exists to find out what you think. Nobody else ever needs to see it, which is exactly what makes it possible to write it fast.",
    },
    {
      term: "Write for the least informed reader who matters",
      explain:
        "Jargon is efficient among specialists and a wall to everyone else. Identify the least contextualised person who needs to act on this, and write so they can.",
      detail:
        "This is not dumbing down. Specialists never object to clarity; they object to being made to read twice as much. Clear writing serves both audiences.",
    },
  ],

  learningPath: [
    {
      title: "Practise the one-sentence purpose",
      body: "For a week, before sending any message longer than three lines, write the purpose in one sentence at the top: what you want the reader to know, decide or do. Delete it before sending.",
      effort: "10 minutes a day",
      outcome: "You notice how often you start writing without knowing what you want.",
    },
    {
      title: "Learn to lead with the conclusion",
      body: "Take five emails or documents you've already sent. Find the sentence containing the actual point. Move it to the top and restructure around it. Compare the two versions side by side.",
      effort: "1 hour",
      outcome: "You can restructure any document to lead with its point.",
    },
    {
      title: "Cut by a third",
      body: "Take a piece of your own writing and remove 33% of the words without losing meaning. It will feel impossible until about 15%, then suddenly easy. Almost every draft survives this improved.",
      effort: "1–2 hours",
      outcome: "You've internalised how much of a first draft is padding.",
    },
    {
      title: "Hunt your own patterns",
      body: "Read three of your recent documents looking specifically for buried verbs, abstract nouns, hedging phrases and unnecessary passive voice. Everyone has three or four signature habits; find yours.",
      effort: "1 hour",
      outcome: "A short personal checklist of your own recurring weaknesses.",
    },
    {
      title: "Read your writing aloud",
      body: "Read a draft out loud, at normal speed. Every place you stumble, run out of breath, or have to reread is a place the reader will struggle. Mark them and fix them.",
      effort: "15 minutes per document",
      outcome: "A reliable, no-tools method for catching awkward construction.",
    },
    {
      title: "Get one honest reader",
      body: "Find someone who will tell you where they got confused rather than telling you it's good. Ask a specific question: 'where did you have to read twice?' — not 'what do you think?'",
      effort: "Ongoing",
      outcome: "External feedback on comprehension rather than on style.",
    },
    {
      title: "Write something regularly for strangers",
      body: "A public post, an internal newsletter, documentation for another team. Writing for people who won't give you the benefit of the doubt is the fastest available training.",
      effort: "1–2 hours a week",
      outcome: "Visible improvement over three months, and evidence of it.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "George Orwell rewrites a passage of Ecclesiastes in modern administrative English.",
      walkthrough:
        "In 'Politics and the English Language' (1946), Orwell takes a concrete biblical sentence — 'I returned, and saw under the sun, that the race is not to the swift, nor the battle to the strong… but time and chance happeneth to them all' — and translates it into the officialese of his day: 'Objective considerations of contemporary phenomena compel the conclusion that success or failure in competitive activities exhibits no tendency to be commensurate with innate capacity…'. The second version says the same thing. It contains no concrete image, no person, and almost no verbs doing work.",
      result:
        "Orwell's demonstration is still the clearest available argument that abstraction is not a neutral stylistic choice — it removes the reader's ability to picture, check or disagree with what you said. Every 'replace the abstract noun with the specific thing' instruction in this guide descends from that parody, and the essay is short, free, and worth reading in full.",
      source: {
        label: "Orwell (1946) — Politics and the English Language",
        url: "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/",
      },
    },
    {
      kind: "illustration",
      scenario: "The status update that generates six follow-up questions.",
      walkthrough:
        "A shape you will recognise. Three paragraphs of context, a schedule slip mentioned partway through the fourth, and the actual request for a decision in the final line. Readers who stopped at paragraph two — which is most of them — never saw either the slip or the ask. The information was all present; none of it was found.",
      result:
        "Reordering alone fixes it: open with 'The launch moves to 14 March. I need a decision on scope by Friday to hold that date', then put the context underneath in labelled sections. Nothing is deleted. The document simply stops requiring the reader to earn the point.",
    },
    {
      kind: "illustration",
      scenario: "Documentation nobody reads, so people ask the author instead.",
      walkthrough:
        "Written as continuous prose, in the order the author happened to learn things. Every reader arrives with one specific question and no way to locate its answer, so asking a human is genuinely the faster path. The content is fine. The document has no navigation.",
      result:
        "Restructuring around the questions people actually ask — with those questions as headings — usually changes nothing about the content and everything about whether it gets used. If people keep asking you things that are documented, that is a finding about the document, not about them.",
    },
  ],

  mistakes: [
    {
      mistake: "Writing to sound professional rather than to be understood",
      why: "Formality gets performed through abstraction, passive voice and long words, all of which reduce clarity. The result reads as corporate and communicates less.",
      fix: "Write as you'd explain it to a competent colleague in the corridor, then tidy the grammar. That register is almost always right.",
    },
    {
      mistake: "Burying the ask",
      why: "Readers stop early. If the request appears in paragraph five, a substantial proportion of your audience will never see it — and you'll conclude they ignored you.",
      fix: "State what you need in the first two sentences, with the deadline. Everything else is supporting material for the people who need it.",
    },
    {
      mistake: "Hedging every claim",
      why: "'It seems that we might potentially want to consider possibly reviewing' communicates nothing except discomfort. Excessive hedging reads as either evasion or a lack of conviction.",
      fix: "State the claim, then state the uncertainty once, specifically: 'Approvals take nine days. That's from a sample of twelve, so treat it as indicative.'",
    },
    {
      mistake: "Editing while drafting",
      why: "It produces slow, cautious, incoherent writing, because you're optimising sentences before you know whether they belong in the document at all.",
      fix: "Draft fast without stopping, then edit as a separate session — ideally after a break. The two activities interfere with each other.",
    },
    {
      mistake: "Sending a wall of unbroken text",
      why: "Even good content is skipped when it looks like work. Density is a barrier before a single word is read.",
      fix: "Break into short paragraphs with headings. Use a list when you have list-shaped content. Make the shape of the document match the shape of the information.",
    },
    {
      mistake: "Assuming shared context",
      why: "You've been immersed in this for weeks. The reader opened it forty seconds ago between two meetings, and the acronym you've stopped noticing is genuinely opaque to them.",
      fix: "Name the least-informed person who must act on this and reread as them. Expand the first use of anything they wouldn't know.",
    },
    {
      mistake: "Confusing length with thoroughness",
      why: "Long documents signal effort and reduce readership. A 2,000-word document that goes unread is less thorough than a 400-word one that gets acted on.",
      fix: "Lead with a short summary and put depth in clearly-marked sections underneath. Let readers choose their own depth.",
    },
  ],

  bestPractices: [
    "Open with the point, the ask, and the deadline. If someone reads only the first three lines, they should still know what to do.",
    "Keep paragraphs to three or four lines on screen. Screen reading punishes density far more heavily than print does.",
    "Replace abstract nouns with the specific thing you'd point at. This single habit improves more writing than any other.",
    "Use numbers wherever you have them. 'Slow' is an opinion, 'nine days' is a fact, and facts end arguments that opinions extend.",
    "Prefer short common words. 'Use' rather than 'utilise', 'help' rather than 'facilitate'. Nobody has ever been impressed by 'utilise'.",
    "Read every draft aloud before sending. It's the cheapest and most reliable editing tool that exists.",
    "Leave a gap between writing and editing — even ten minutes. You cannot see your own text properly while the intent is still fresh.",
    "Write the summary last, once you know what the document actually says. Summaries written first describe what you intended to write.",
  ],

  proTips: [
    "Write the subject line or title after finishing. If you can't summarise the document in eight words, it probably contains two documents that should be separated.",
    "For anything important, draft it, sleep on it, and cut a third in the morning. The overnight version is reliably better, and the effect is strongest on writing you felt good about.",
    "Use the 'so what?' test on every paragraph. If you can't answer why the reader needs it, delete it — this catches most of the material people are reluctant to cut.",
    "When you're stuck, record yourself explaining it out loud and transcribe that. Spoken explanation is usually clearer than written attempts, because speech doesn't tempt you toward formality.",
    "Notice where you write 'as previously discussed' or 'per my last email'. It usually signals that the earlier message wasn't clear, and that's the thing worth fixing.",
    "Keep a file of writing you found unusually clear, from anyone. Reread it occasionally. Imitation of specific structure teaches faster than general advice about style.",
  ],

  businessApplications: [
    "Proposals and pitches: specificity converts. A dated, numbered, checkable promise beats an impressive abstract one, consistently.",
    "Internal decision documents: leading with the recommendation and the required decision shortens decision cycles more than any meeting change.",
    "Specifications and briefs: ambiguity in a brief becomes rework in delivery. Time spent making a spec unambiguous has an unusually direct return.",
    "Customer support: clear, structured responses reduce follow-up contacts, which is one of the few places writing quality shows up directly in cost.",
    "Documentation and onboarding: writing organised around the questions people ask, rather than the order you learned things, is the difference between docs used and docs ignored.",
    "Public writing and content marketing: clarity is the differentiator in crowded topics, because almost all competing material is padded and abstract.",
  ],

  lifeApplications: [
    "Difficult personal messages: stating the point kindly and early is almost always better received than a long build-up, which reads as evasive however it was meant.",
    "Thinking through decisions: writing your reasoning down reliably exposes the parts you haven't actually thought through, which is uncomfortable and useful.",
    "Formal correspondence — complaints, disputes, applications: a clear, specific, unemotional letter with dates and facts is markedly more effective than an angry one.",
    "Teaching or explaining anything to anyone: the discipline of writing for the least-informed reader is the same discipline that makes a good explanation out loud.",
    "Keeping a record for yourself: notes written clearly enough for a stranger are the ones still comprehensible to you in two years.",
  ],

  exercises: [
    {
      title: "The one-third cut",
      brief:
        "Take a document you wrote recently. Remove a third of the words with no loss of meaning. Note what categories of thing you cut.",
      success: "The shorter version is clearly better, and you can name your padding habits.",
      time: "45 minutes",
    },
    {
      title: "Invert the structure",
      brief:
        "Find an email where the point arrives at the end. Rewrite with the conclusion first and the reasoning below. Compare.",
      success: "You can restructure to conclusion-first in under five minutes.",
      time: "30 minutes",
    },
    {
      title: "Abstraction hunt",
      brief:
        "Highlight every abstract noun in a piece of your writing. Replace each with the specific thing it stands for, or delete the sentence.",
      success: "At least five replacements, and a sharper document.",
      time: "30 minutes",
    },
    {
      title: "Explain it to a twelve-year-old",
      brief:
        "Take something technical from your work and write 200 words a bright twelve-year-old would understand. No jargon, no analogies you haven't tested.",
      success: "Someone outside your field reads it once and can restate it.",
      time: "45 minutes",
    },
    {
      title: "The read-aloud pass",
      brief:
        "Read your next three documents aloud before sending. Mark every stumble and fix it. Keep count.",
      success: "You've fixed at least ten problems you'd have otherwise sent.",
      time: "15 minutes each",
    },
  ],

  checklist: [
    "I can state the purpose of this document in one sentence",
    "The point and the ask appear in the first three lines",
    "Any deadline is explicit and dated",
    "Abstract claims have been replaced with specifics and numbers",
    "Paragraphs are short and the document has navigable headings",
    "Buried verbs and unnecessary passive constructions have been fixed",
    "The least-informed necessary reader could act on this",
    "I read it aloud and fixed every stumble",
    "I cut at least a fifth of the first draft",
    "The title or subject line accurately predicts the content",
  ],

  faqs: [
    {
      q: "Isn't short writing less thorough?",
      a: "Thoroughness is about what the reader ends up understanding, not word count. A short document that gets read and acted on is more thorough than a long one that gets skimmed. Put depth in clearly-marked sections so readers can choose.",
    },
    {
      q: "Should I use AI to write for me?",
      a: "It's genuinely useful for first drafts, restructuring and cutting length — the tasks where facing a blank page is the obstacle. It's a poor substitute for knowing what you want to say, which is where most bad writing actually originates.",
    },
    {
      q: "How do I write clearly about complex technical topics?",
      a: "Complexity is a reason for more structure, not more words. Define terms on first use, keep one idea per sentence, and lead each section with its conclusion. Specialists appreciate this as much as newcomers.",
    },
    {
      q: "Is passive voice always wrong?",
      a: "No. It's right when the actor is unknown, irrelevant, or deliberately de-emphasised. It's wrong when it hides responsibility that matters. Use it as a choice rather than as a default.",
    },
    {
      q: "How do I get better if nobody gives me feedback?",
      a: "Read your writing aloud, cut a third, and reread your own work a month later — distance makes flaws visible. Writing publicly for strangers accelerates this considerably, because strangers don't fill in your gaps.",
    },
    {
      q: "What about tone — how formal should I be?",
      a: "Match the reader and the stakes, but err toward how you'd actually speak to a respected colleague. Excessive formality is read as distance or evasion far more often than casualness is read as disrespect.",
    },
  ],

  tools: [
    { name: "Hemingway Editor", what: "Flags long sentences, passive voice and complex phrasing. Blunt and useful as a diagnostic, not as an authority.", cost: "Freemium", url: "https://hemingwayapp.com" },
    { name: "Grammarly", what: "Catches mechanical errors and some wordiness. Ignore its style suggestions when they flatten your voice.", cost: "Freemium", url: "https://grammarly.com" },
    { name: "Text-to-speech (built into your OS)", what: "Having a document read to you catches awkward construction better than reading it yourself.", cost: "Free" },
    { name: "iA Writer / Obsidian", what: "Distraction-free drafting. The value is behavioural — separating drafting from formatting.", cost: "Freemium" },
  ],

  resources: [
    { title: "On Writing Well — William Zinsser", kind: "Book", note: "The standard text on non-fiction clarity. The chapters on clutter and simplicity are worth the whole book." },
    { title: "Politics and the English Language — George Orwell", kind: "Book", note: "A short essay, freely available, on how vague writing enables vague thinking. Still uncomfortably accurate." },
    { title: "The Elements of Style — Strunk & White", kind: "Book", note: "Dated in places and dogmatic in others, but 'omit needless words' remains the most useful three-word instruction in writing." },
    { title: "Style: Lessons in Clarity and Grace — Joseph Williams", kind: "Book", note: "The most rigorous of these. Explains why certain sentences feel clear, rather than just asserting rules." },
  ],

  internalLinks: [
    { slug: "prompt-engineering-fundamentals", anchor: "the same specification skill applied to AI", context: "In the section on deciding what you want" },
    { slug: "validating-a-product-idea", anchor: "writing an offer clear enough to test", context: "In the business applications section" },
  ],

  relatedGuides: ["prompt-engineering-fundamentals", "validating-a-product-idea"],

  conclusion: [
    "Clear writing is not a gift and it isn't about vocabulary. It comes from deciding what you want before you start, putting it first, choosing concrete words over abstract ones, and cutting what doesn't earn its place. Every one of those is a decision rather than a talent, which means every one is available to you immediately.",
    "The highest-leverage habit is separating drafting from editing. Write fast and badly to find out what you think, then edit slowly and ruthlessly to make it clear. Trying to do both at once is what makes writing feel hard and produces the cautious, padded prose that fills most inboxes.",
    "Try one thing on your next document: state the point and the ask in the first three lines, then cut a third of what follows. It takes ten extra minutes and it will change the responses you get.",
  ],

  cta: {
    headline: "Want your ideas to land?",
    body: "Clear thinking and clear systems are the same discipline. See how we design AI workflows that people actually understand and use.",
    label: "Explore our work",
    href: "/products",
  },
};

export default guide;
