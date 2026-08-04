import type { Prompt } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Prompt library.
//
// Every prompt carries what it does, when to reach for it, what good output
// looks like, and one concrete lever for improving it — because a prompt
// without that context is a copy-paste artefact, not a teaching tool.
//
// `[SQUARE BRACKETS]` mark variables the reader replaces.
//
// Prompts are grouped by `topic`, which matches a guide slug where one exists so
// the guide page can surface its own prompts.
// ─────────────────────────────────────────────────────────────────────────────

export const PROMPTS: Prompt[] = [
  // ── Prompt engineering ─────────────────────────────────────────────────────
  {
    id: "pe-01",
    topic: "prompt-engineering-fundamentals",
    model: "Claude",
    kind: "Beginner",
    title: "Turn a vague request into a specification",
    prompt:
      "I want to ask you to do this task: [DESCRIBE THE TASK IN ONE LINE].\n\nBefore doing it, write the prompt I should have given you. Include: the role you should take, who the output is for, the goal, the constraints (length, format, tone), one example of ideal output, and what you should do if you lack the information you need.\n\nThen ask me up to three questions about anything you had to guess.",
    does: "Converts a one-line request into a full specification, and surfaces the assumptions you didn't know you were making.",
    when: "Any time you're about to write a prompt for a task you'll repeat, or when output keeps coming back generic.",
    expect:
      "A structured prompt you can save and reuse, plus two or three questions that usually reveal a real ambiguity in your own thinking.",
    tip: "Answer the questions and ask it to regenerate the prompt. The second version is normally the one worth keeping.",
  },
  {
    id: "pe-02",
    topic: "prompt-engineering-fundamentals",
    model: "ChatGPT",
    kind: "Advanced",
    title: "Adversarially test a prompt before you ship it",
    prompt:
      "Here is a prompt I plan to use in production:\n\n---\n[PASTE PROMPT]\n---\n\nAct as a red-teamer. Give me:\n1. Five inputs that would produce wrong or unsafe output.\n2. Three ambiguities that would cause inconsistent results between runs.\n3. Any way user-supplied content could be read as an instruction.\n4. A revised prompt fixing what you found.\n\nBe specific and concrete. Do not tell me the prompt is good.",
    does: "Finds failure modes in a prompt before real users do, including prompt-injection exposure.",
    when: "Before any prompt goes into a product, an automation, or a shared team template.",
    expect:
      "A list of genuinely awkward inputs — empty, adversarial, wrong-language, out-of-scope — and a hardened rewrite.",
    tip: "Actually run the five inputs it suggests against your original prompt. Predicted failures and real ones don't always match.",
  },
  {
    id: "pe-03",
    topic: "prompt-engineering-fundamentals",
    model: "Gemini",
    kind: "Advanced",
    title: "Build an evaluation set for a prompt",
    prompt:
      "I'm building a prompt for this task: [DESCRIBE TASK].\n\nGenerate 20 test inputs I should evaluate against, as a table with columns: input, why this case matters, expected output shape.\n\nInclude at least: 3 straightforward cases, 5 edge cases, 3 cases where the correct behaviour is to refuse or say the information isn't available, 2 cases in a different language, and 2 adversarial cases containing embedded instructions.",
    does: "Produces the fixed test set that turns prompt iteration from guesswork into measurement.",
    when: "Before your first prompt revision — you need a baseline to compare against.",
    expect: "A table of 20 varied inputs, roughly half of which you would never have thought of.",
    tip: "Add five real inputs from your own logs. Synthetic test cases are always tidier than reality.",
  },
  {
    id: "pe-04",
    topic: "prompt-engineering-fundamentals",
    model: "Claude",
    kind: "Productivity",
    title: "The two-pass critique loop",
    prompt:
      "Here is a draft: [PASTE DRAFT]\n\nDo not rewrite it yet. First, evaluate it against these criteria: [LIST 3–5 CRITERIA]. For each criterion give a score out of 5 and the single most specific improvement available.\n\nThen wait for me to confirm before revising.",
    does: "Separates evaluation from generation, which produces markedly better revisions than asking for an improved version directly.",
    when: "On any piece of work where the first draft is close but not right.",
    expect: "Scored criteria with specific, actionable notes rather than a vague 'improved' rewrite.",
    tip: "Write the criteria yourself rather than letting it choose. Your criteria are what encode your actual standard.",
  },

  // ── Large language models ──────────────────────────────────────────────────
  {
    id: "llm-01",
    topic: "how-large-language-models-work",
    model: "ChatGPT",
    kind: "Learning",
    title: "Explain at my exact level, then test me",
    prompt:
      "Explain [CONCEPT] to me. I already understand [WHAT YOU KNOW]. I do not understand [WHAT YOU DON'T].\n\nKeep it under 400 words, use no analogies you don't then explain, and define any term I'm unlikely to know on first use.\n\nThen ask me three questions that would reveal whether I actually understood it — including one where a plausible-sounding wrong answer is tempting.",
    does: "Calibrates an explanation to your real starting point, then verifies comprehension rather than assuming it.",
    when: "Learning anything new where generic explanations either patronise you or lose you.",
    expect: "An explanation that starts where you are, followed by questions that find your actual gap.",
    tip: "Answer the questions before scrolling. Being wrong in front of a model that doesn't judge you is the whole value.",
  },
  {
    id: "llm-02",
    topic: "how-large-language-models-work",
    model: "Claude",
    kind: "Advanced",
    title: "Force grounded answers with citations",
    prompt:
      "Answer the question using ONLY the documents below. Follow these rules exactly:\n\n1. Before each claim, quote the sentence from the documents that supports it, in quotation marks with its source name.\n2. If the documents do not contain the answer, reply exactly: NOT FOUND IN PROVIDED DOCUMENTS.\n3. Do not use anything you know from outside these documents.\n4. If two documents conflict, say so and quote both.\n\nDOCUMENTS:\n<documents>\n[PASTE]\n</documents>\n\nQUESTION: [QUESTION]",
    does: "Converts unverifiable output into checkable output, and makes fabrication visible instead of invisible.",
    when: "Any factual work over supplied material — policies, contracts, research, internal documentation.",
    expect:
      "Claims each preceded by a verbatim quote, or an explicit NOT FOUND. Shorter and less polished than an ungrounded answer, which is the point.",
    tip: "Test it with a question the documents definitely don't answer. If it doesn't return NOT FOUND, the rules aren't holding and nothing else it says is trustworthy.",
  },
  {
    id: "llm-03",
    topic: "how-large-language-models-work",
    model: "Gemini",
    kind: "Beginner",
    title: "Map what the model doesn't know",
    prompt:
      "I'm going to ask you about [TOPIC]. Before answering, tell me:\n\n1. How confident you are about this topic on a scale of 1–5, and why.\n2. Which parts of your answer are likely to be reliable and which I should independently verify.\n3. Whether this topic is one where information changes quickly enough that your training data may be out of date.\n\nThen answer the question: [QUESTION]",
    does: "Surfaces the reliability boundary before you act on an answer.",
    when: "Any question where being wrong has a cost — medical, legal, financial, or anything time-sensitive.",
    expect: "A stated confidence level and a list of claims to verify, followed by the answer itself.",
    tip: "Self-reported confidence is imperfect but useful as a triage signal. Treat anything below 4 as a research starting point, not an answer.",
  },

  // ── Machine learning ───────────────────────────────────────────────────────
  {
    id: "ml-01",
    topic: "how-machine-learning-actually-works",
    model: "Claude",
    kind: "Learning",
    title: "Audit a model result for the usual lies",
    prompt:
      "Here's a machine learning result I'm evaluating:\n\n- Task: [TASK]\n- Metric and score: [METRIC AND NUMBER]\n- How the data was split: [DESCRIBE]\n- Features used: [LIST]\n- Class balance: [DESCRIBE]\n\nAct as a sceptical reviewer. Identify: possible data leakage, whether the metric suits the class balance, whether the split is appropriate for this data type, and what single additional number would most change your assessment. Assume the result is too good until shown otherwise.",
    does: "Applies a systematic scepticism checklist to a result before you act on or publish it.",
    when: "Any time a model's score looks strong, and especially when it looks surprisingly strong.",
    expect: "Specific leakage candidates from your feature list, plus a metric critique tied to your class balance.",
    tip: "Include the actual feature names rather than describing them generically — leakage usually hides in a specific column name.",
  },
  {
    id: "ml-02",
    topic: "how-machine-learning-actually-works",
    model: "ChatGPT",
    kind: "Business",
    title: "Decide whether ML is the right tool at all",
    prompt:
      "We're considering a machine learning solution for: [DESCRIBE THE PROBLEM].\n\nAssess honestly:\n1. Could rules, a lookup table, or better process design solve this without ML? Be specific.\n2. What labelled data would be required, in what volume, and do we plausibly have it?\n3. What's the cost of a wrong prediction, and who bears it?\n4. How would we know in production that it had stopped working?\n5. Your recommendation, including 'don't do this' if that's the answer.\n\nDon't assume ML is the answer because I asked about it.",
    does: "Stress-tests an ML project before budget is committed, including the option of not doing it.",
    when: "At the start of any AI initiative, particularly one that arrived as a solution looking for a problem.",
    expect: "A blunt assessment that often identifies a simpler non-ML path, plus the data requirement stated concretely.",
    tip: "Pay most attention to question 4. Projects rarely fail at launch — they fail six months later, silently.",
  },

  // ── RAG ────────────────────────────────────────────────────────────────────
  {
    id: "rag-01",
    topic: "rag-explained",
    model: "Claude",
    kind: "Advanced",
    title: "Diagnose a RAG failure to the right stage",
    prompt:
      "A retrieval system gave a wrong answer. Help me isolate the stage.\n\n- Question asked: [QUESTION]\n- Answer given: [ANSWER]\n- Chunks retrieved: [PASTE THE RETRIEVED CHUNKS]\n- The correct answer and where it lives: [SOURCE]\n\nTell me: (a) was the correct chunk retrieved at all, (b) if not, why retrieval likely missed it, (c) if it was, why generation still failed, and (d) the single highest-impact fix. Address chunking, hybrid search, re-ranking and prompt rules separately.",
    does: "Stops the most common RAG debugging error — tuning the prompt when the problem was retrieval.",
    when: "Every time a grounded system returns a wrong answer.",
    expect: "A clear verdict on which stage failed and one prioritised fix rather than a list of everything possible.",
    tip: "Always paste the actual retrieved chunks. Without them the diagnosis is speculation, and the answer will default to prompt advice.",
  },
  {
    id: "rag-02",
    topic: "rag-explained",
    model: "Gemini",
    kind: "Business",
    title: "Assess whether documents are RAG-ready",
    prompt:
      "We want to build a retrieval system over this document set: [DESCRIBE THE DOCUMENTS — types, count, structure, how often they change, who's allowed to see what].\n\nAssess: how these should be chunked and why, what metadata we must capture before indexing, whether hybrid search is required, how permission filtering should work, and what will break first at scale.\n\nFlag anything about this corpus that would make retrieval unreliable regardless of implementation quality.",
    does: "Surfaces corpus-level problems before engineering time is spent — the failures that no amount of tuning fixes.",
    when: "Before starting any RAG project, and especially before promising a delivery date.",
    expect:
      "A chunking recommendation tied to your actual document structure, and an honest flag if the documents are too inconsistent to work well.",
    tip: "Mention document age and versioning explicitly. Superseded documents are the most common silent failure in company knowledge bases.",
  },

  // ── Validation / entrepreneurship ─────────────────────────────────────────
  {
    id: "val-01",
    topic: "validating-a-product-idea",
    model: "Claude",
    kind: "Business",
    title: "Find the assumption that would kill the idea",
    prompt:
      "My business idea: [DESCRIBE IN 3–4 SENTENCES].\n\nList every assumption this depends on, grouped into: who has the problem, how severe it is, whether they'd pay, and whether I can reach them.\n\nThen rank them by (risk if wrong × how little evidence I have). For the top three, give me the cheapest test that could disprove each in under two weeks, and the specific numeric result that should make me stop.\n\nDo not evaluate whether the idea is good.",
    does: "Turns an idea into a ranked, testable assumption list with pre-committed kill criteria.",
    when: "Before building anything, and again whenever you've drifted into building without new evidence.",
    expect: "A ranked list where the top assumption is often one you'd never have tested.",
    tip: "The instruction not to evaluate the idea matters — without it you'll get encouragement, which is exactly the thing that misleads founders.",
  },
  {
    id: "val-02",
    topic: "validating-a-product-idea",
    model: "ChatGPT",
    kind: "Business",
    title: "Write interview questions that don't lead",
    prompt:
      "I want to interview people about this problem: [DESCRIBE THE PROBLEM, NOT YOUR SOLUTION].\n\nWrite 12 questions following these rules:\n- Ask only about past behaviour, never hypothetical future use.\n- Never mention or imply a solution.\n- No question may be answerable with yes or no.\n- Include questions that establish frequency, cost in time or money, and what they've already tried.\n\nThen list 5 things I might say that would bias the answers, and what to say instead.",
    does: "Produces an interview script that gathers evidence rather than encouragement.",
    when: "Before your first customer conversation — the script is what stops you pitching by accident.",
    expect: "Twelve past-tense questions, plus a genuinely useful list of the leading phrases you were about to use.",
    tip: "Have it role-play a reluctant interviewee afterwards and practise. The awkward silences are the part worth rehearsing.",
  },
  {
    id: "val-03",
    topic: "pricing-your-services",
    model: "Claude",
    kind: "Business",
    title: "Prepare the value conversation",
    prompt:
      "I'm a [YOUR ROLE] about to discuss a project with a client. The work: [DESCRIBE]. What I'd normally charge: [AMOUNT].\n\nHelp me quantify the value before I quote. Give me: 8 questions that establish what this problem currently costs them, 3 ways to estimate the value if they don't know their own numbers, and how to frame my price against that value in two sentences.\n\nAlso: what would make this project worth ten times my usual price to the right client?",
    does: "Prepares the diagnostic conversation that has to happen before any value-based price is possible.",
    when: "Before every significant proposal, and especially when you suspect you're under-priced.",
    expect: "Questions phrased for a real conversation, plus a framing sentence you can say out loud without flinching.",
    tip: "The last question is the useful one. It usually reveals that you're selling to the wrong segment rather than at the wrong price.",
  },

  // ── Productivity & communication ──────────────────────────────────────────
  {
    id: "prod-01",
    topic: "clear-writing-that-gets-read",
    model: "Claude",
    kind: "Productivity",
    title: "Restructure to conclusion-first",
    prompt:
      "Rewrite the text below so the point comes first.\n\nRules: open with what I need and by when, in two sentences maximum. Put reasoning underneath in labelled sections. Replace every abstract noun with something specific. Cut at least 30% of the words. Keep my voice — don't make it sound corporate.\n\nThen list what you cut and why, so I can put anything back.\n\n---\n[PASTE TEXT]",
    does: "Applies conclusion-first structure and aggressive editing while keeping you in control of what's removed.",
    when: "Any message longer than a screen where you need a decision or an action.",
    expect: "A shorter version with the ask at the top, plus a change log so nothing important vanishes silently.",
    tip: "The 'list what you cut' rule is the important one — it stops you accepting a tidier document that quietly lost a requirement.",
  },
  {
    id: "prod-02",
    topic: "clear-writing-that-gets-read",
    model: "Gemini",
    kind: "Productivity",
    title: "Find where a reader will get confused",
    prompt:
      "Read the text below as [DESCRIBE THE READER — their role, what they already know, how much time they have].\n\nMark every point where this reader would: have to reread a sentence, encounter an undefined term, lose track of the argument, or not know what they're supposed to do.\n\nQuote each problem sentence and say specifically what confused you. Do not rewrite anything and do not comment on style.\n\n---\n[PASTE TEXT]",
    does: "Produces comprehension feedback rather than style feedback — the thing human reviewers rarely give you.",
    when: "Before sending anything important to an audience less contextualised than you are.",
    expect: "A list of quoted sentences with specific confusions, several of which you'd have defended as obvious.",
    tip: "Describe the reader precisely, including what they don't know. A vague reader description produces vague feedback.",
  },
  {
    id: "prod-03",
    topic: "clear-writing-that-gets-read",
    model: "ChatGPT",
    kind: "Learning",
    title: "Diagnose your own writing habits",
    prompt:
      "Below are three pieces of my writing. Identify my recurring habits — not one-off errors, only patterns appearing in at least two samples.\n\nFor each pattern: name it, quote two examples, explain what it costs the reader, and give me a specific rule to apply going forward. Limit to my four most damaging habits, ranked.\n\n---\n[SAMPLE 1]\n---\n[SAMPLE 2]\n---\n[SAMPLE 3]",
    does: "Builds a personalised editing checklist from your actual writing rather than generic advice.",
    when: "Once, then again after three months of applying the results.",
    expect: "Four named habits with quoted evidence — usually uncomfortable and immediately actionable.",
    tip: "Use unedited drafts, not polished final versions. The habits you already catch aren't the ones worth knowing about.",
  },
  {
    id: "prod-04",
    topic: "deep-work-and-focus",
    model: "Claude",
    kind: "Productivity",
    title: "Turn a vague week into a decided week",
    prompt:
      "Here is everything on my plate: [BRAIN-DUMP EVERYTHING].\n\nMy hard constraints this week: [MEETINGS, DEADLINES, HOURS AVAILABLE].\n\nFor each item, tell me: does it move something that matters, or does it only feel urgent? Then give me a plan with at most three genuine priorities, what to explicitly not do this week, and what to tell whoever is expecting those things.\n\nBe willing to tell me my list is undeliverable in the hours I have.",
    does: "Forces prioritisation and, critically, produces the wording for declining or deferring the rest.",
    when: "Monday morning, or any point where the list has grown faster than the week.",
    expect: "Three priorities, an explicit not-doing list, and draft messages for the deferrals.",
    tip: "State your available hours honestly, including admin and interruptions. An unrealistic input produces a plan that fails by Wednesday.",
  },
  {
    id: "prod-05",
    topic: "deep-work-and-focus",
    model: "Gemini",
    kind: "Advanced",
    title: "Find what to automate before automating",
    prompt:
      "Here's a process I run repeatedly: [DESCRIBE EVERY STEP, INCLUDING THE ANNOYING ONES].\n\nIt takes about [TIME] and I do it [FREQUENCY].\n\nAnalyse: which steps are genuinely repetitive versus which require judgement, which could be eliminated entirely rather than automated, what the automation would cost to build and maintain, and whether the payback justifies it.\n\nRecommend what to automate, what to simplify, and what to leave alone. Be sceptical about automation that saves less than it costs to maintain.",
    does: "Separates work worth automating from work worth deleting, and prices in the maintenance nobody accounts for.",
    when: "Before building any internal automation or workflow tool.",
    expect: "A recommendation that usually includes eliminating at least one step outright.",
    tip: "Include the frequency honestly. Automating a monthly task is almost never worth it, however irritating it is.",
  },
];

export const PROMPT_TOPICS = Array.from(new Set(PROMPTS.map((p) => p.topic)));

export const promptsForTopic = (topic: string): Prompt[] =>
  PROMPTS.filter((p) => p.topic === topic);
