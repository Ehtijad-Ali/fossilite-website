import type { Guide } from "../types";

export const guide: Guide = {
  slug: "how-large-language-models-work",
  seoTitle: "How Large Language Models Work — Plainly Explained",
  metaDescription:
    "Tokens, context windows, training and hallucination — an accurate, jargon-free explanation of what large language models do and where they genuinely fail.",
  title: "How Large Language Models Actually Work",
  keywords: [
    "how large language models work",
    "LLM explained",
    "what is a token",
    "context window",
    "why LLMs hallucinate",
    "transformer model",
  ],
  category: "large-language-models",
  level: "Beginner",
  updated: "2026-08-04",
  author: "Fossilite Engineering",
  readingTime: 15,

  intro: [
    "There are two bad explanations of language models in circulation. The first says they're just autocomplete, which is technically close but implies far less capability than these systems demonstrably have. The second says they think and understand, which implies far more. Both make it harder to predict when one will work and when it will fail you — and prediction is the whole point of understanding.",
    "Here's the accurate version. A large language model is a very large mathematical function that takes a sequence of text and produces a probability distribution over what comes next. It was built by adjusting billions of numbers until it got extremely good at that one prediction task, across a substantial fraction of the text humanity has written down.",
    "That description sounds modest. The surprising empirical finding of the last several years is that becoming truly excellent at predicting the next piece of text requires acquiring a great deal of transferable structure — grammar, factual associations, reasoning patterns, code semantics, style. Nobody designed those capabilities. They emerged because they help with the prediction. That's the genuinely remarkable part, and it's also exactly why the failures look so strange.",
  ],

  whyItMatters: [
    "You are almost certainly going to work alongside these systems for the rest of your career, whatever your field. The difference between people who get consistently good results and people who get frustrated is rarely about the model — it's about whether they understand what the tool is doing well enough to set it up for success.",
    "Understanding the mechanism directly predicts the failure modes. Once you know the model is generating plausible continuations rather than retrieving verified facts, hallucination stops being mysterious and becomes something you design around. Once you understand the context window, the strange behaviour of very long conversations becomes obvious. Every practical skill here descends from the mechanism.",
    "There's a commercial dimension too. An enormous amount of money is currently being spent on LLM projects that were never going to work, because someone assumed the model had capabilities it structurally doesn't have — reliable arithmetic, knowledge of last week's events, guaranteed consistency. Knowing where the boundary sits saves budgets and reputations.",
  ],

  coreConcepts: [
    {
      term: "Tokens, not words",
      explain:
        "Models don't read letters or words. Text is chopped into tokens — common chunks that may be a whole word, a fragment, a space, or a punctuation mark. Everything the model does operates on these units.",
      detail:
        "As a rough guide, one token averages about four characters of English, so 1,000 tokens is roughly 750 words. This is why models struggle with letter-level tasks like counting the r's in a word: it never saw the letters as separate things.",
    },
    {
      term: "Next-token prediction is the whole training objective",
      explain:
        "During pre-training, the model sees an enormous quantity of text with the next token hidden, guesses it, and has its parameters nudged toward the correct answer. Repeat across trillions of tokens.",
      detail:
        "There is no separate 'learn facts' or 'learn grammar' stage. Both are absorbed because both improve prediction. This is why factual knowledge and stylistic fluency are entangled in the same parameters, and why the model can't cleanly separate what it knows from what merely sounds right.",
    },
    {
      term: "Attention lets the model weigh the whole context",
      explain:
        "The transformer architecture's key mechanism is attention: when processing each token, the model computes how relevant every other token in the context is, and blends them accordingly.",
      detail:
        "This is why an LLM can resolve 'it' to something mentioned three paragraphs earlier. Earlier architectures processed text strictly in order and lost distant information; attention lets every position look at every other position directly.",
    },
    {
      term: "The context window is the model's entire working memory",
      explain:
        "The context window is the maximum number of tokens the model can consider at once — your prompt, any documents you supplied, the conversation so far, and the response being generated, all counted together.",
      detail:
        "Nothing outside that window exists for the model. When a long conversation exceeds it, earlier turns are dropped or summarised, which is why a model can suddenly 'forget' an instruction you gave forty messages ago.",
    },
    {
      term: "The model has no memory between conversations",
      explain:
        "Each request is processed fresh. Any apparent memory comes from the application re-sending previous messages, or from a separate storage system the product built on top.",
      detail:
        "The parameters are frozen after training. Talking to a model does not teach it anything, and nothing you say in one chat can affect another unless the surrounding product explicitly stored and re-injected it.",
    },
    {
      term: "Temperature controls randomness, not accuracy",
      explain:
        "The model produces probabilities over possible next tokens; the sampler then picks one. Temperature scales how much the sampler favours the highest-probability option. Low temperature is more predictable, high temperature more varied.",
      detail:
        "A widespread misconception is that temperature 0 makes a model factual. It doesn't. It makes the model consistently produce its most likely output — which can be a confidently, repeatably wrong answer.",
    },
    {
      term: "Hallucination is the mechanism working normally",
      explain:
        "The model generates text that is statistically plausible given the context. When it has genuine knowledge, plausible and true coincide. When it doesn't, it still produces something plausible — a citation with the right shape, a function name that sounds right — because producing nothing was never an option it was trained toward.",
      detail:
        "This is why hallucinations are so often confidently formatted and structurally perfect. The model is excellent at the form of a correct answer, which is precisely what makes fabrications hard to spot at a glance.",
    },
    {
      term: "Pre-training, fine-tuning, and alignment are different stages",
      explain:
        "Pre-training builds raw capability from bulk text. Instruction tuning teaches the model to follow requests rather than merely continue text. Alignment techniques such as RLHF shape it toward helpful, honest, harmless behaviour.",
      detail:
        "The base model straight out of pre-training is a strange thing to interact with — it continues your text rather than answering you. Nearly everything people describe as an LLM's 'personality' comes from these later stages.",
    },
    {
      term: "The knowledge cutoff",
      explain:
        "A model's parameters encode what was in its training data, which ends at a fixed date. It has no awareness of anything after that unless the information is supplied in the prompt.",
      detail:
        "This is the core reason retrieval systems exist: rather than retraining a model to add knowledge, you fetch relevant current documents and put them in the context window at request time.",
    },
    {
      term: "Tool use extends the model past its limits",
      explain:
        "Modern systems let the model call external functions — a calculator, a search engine, a database, your own API. The model decides what to call and with what arguments; the actual work happens outside it.",
      detail:
        "This is the correct fix for arithmetic, live data, and anything requiring guaranteed accuracy. Don't ask a text predictor to be a calculator when you can hand it one.",
    },
  ],

  learningPath: [
    {
      title: "Watch tokenisation happen",
      body: "Open a tokeniser visualiser and paste in text — English, a rare technical term, code, another language, a long number. Watch how each is split. This single exercise explains an entire class of otherwise baffling model behaviour.",
      effort: "30 minutes",
      outcome: "You can predict which inputs will tokenise badly and why that will cause trouble.",
    },
    {
      title: "Interrogate one model deliberately for an hour",
      body: "Not to get work done — to map the boundary. Ask about events after its cutoff. Ask for a citation and then verify it. Ask it to multiply two six-digit numbers and check. Ask the same question three times in separate chats and compare. Take notes.",
      effort: "1–2 hours",
      outcome: "You have first-hand evidence of at least four distinct failure modes.",
    },
    {
      title: "Learn the parameters that matter",
      body: "Use an API playground rather than a chat interface so you can see system prompts, temperature, and token counts explicitly. Run the same prompt at temperature 0 and 1. Watch a response get cut off at max_tokens. These are invisible in chat UIs and essential in real work.",
      effort: "2–3 hours",
      outcome: "You can explain what every field in a basic API call does.",
    },
    {
      title: "Build prompting discipline",
      body: "Take one recurring task you actually do and write a reusable prompt for it: explicit role, clear task, concrete constraints, an example of good output, and a specified format. Test it ten times on different inputs and refine where it drifts.",
      effort: "4–5 hours",
      outcome: "You have a prompt that produces usable output on the first try most of the time.",
    },
    {
      title: "Understand retrieval",
      body: "Learn how retrieval-augmented generation works: documents are chunked and embedded, a query retrieves the closest chunks, and those are inserted into the prompt. Build a tiny version over a folder of your own files, even in a notebook.",
      effort: "6–8 hours",
      outcome: "You can explain why RAG usually beats fine-tuning for adding knowledge.",
    },
    {
      title: "Add a tool call",
      body: "Give a model a function it can invoke — a calculator, a weather lookup, a query against your own data. Watch it decide when to call, and handle the case where it calls with malformed arguments, because it will.",
      effort: "5–6 hours",
      outcome: "You've seen the model correctly delegate something it can't do reliably itself.",
    },
    {
      title: "Learn to evaluate output systematically",
      body: "Assemble twenty representative inputs with known-good outputs. Run your prompt across all twenty after any change and score them. Vibes-based prompt tuning feels productive and reliably makes things worse in ways nobody notices.",
      effort: "6–8 hours",
      outcome: "You can state whether a prompt change helped, with evidence.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A lawyer files a brief citing six court decisions that do not exist.",
      walkthrough:
        "In a personal injury claim against the airline Avianca, plaintiff's counsel used ChatGPT to research precedent and submitted a brief citing cases such as \"Varghese v. China Southern Airlines\". The cases were fabricated, complete with fictitious quotations and internal citations to other invented decisions. When opposing counsel could not locate them, the lawyer asked ChatGPT whether the cases were real; it said yes. That is the mechanism working exactly as designed — asked to confirm its own output, it produced the plausible continuation, which was agreement.",
      result:
        "On 22 June 2023 Judge P. Kevin Castel sanctioned the two lawyers and their firm $5,000, and required corrective letters be sent to every real judge whose name had been attached to a fabricated opinion. The fabrications were convincing precisely because the model is excellent at the *form* of a citation — plausible party names, realistic reporter numbers, correct structure — which is exactly what next-token prediction optimises.",
      source: {
        label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y. 22 June 2023) — opinion and order on sanctions",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/",
      },
    },
    {
      kind: "documented",
      scenario: "An airline is held liable for a discount its chatbot invented.",
      walkthrough:
        "Jake Moffatt asked Air Canada's website chatbot about bereavement fares after a death in the family. The chatbot advised he could book at full price and apply for the bereavement rate retroactively within 90 days. Air Canada's actual published policy did not permit retroactive applications. The airline argued, among other things, that the chatbot was a separate entity responsible for its own actions.",
      result:
        "In February 2024 the British Columbia Civil Resolution Tribunal rejected that argument, holding Air Canada responsible for all information on its website including the chatbot's, and awarding Moffatt damages for negligent misrepresentation covering the difference between the regular and bereavement fares. The practical lesson for anyone deploying these systems: an ungrounded model's output is your statement, legally as well as reputationally.",
      source: {
        label: "Moffatt v. Air Canada, 2024 BCCRT 149 — analysis by McCarthy Tétrault",
        url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
      },
    },
    {
      kind: "documented",
      scenario: "Researchers measure where in a long context a model actually pays attention.",
      walkthrough:
        "Liu and colleagues tested multi-document question answering and key-value retrieval, systematically varying the position of the relevant document within the context. If attention were uniform, position would not matter. It did: performance was highest when the needed information sat at the beginning or the end of the context, and degraded noticeably when it sat in the middle — a U-shaped curve.",
      result:
        "The effect held even for models explicitly marketed as long-context, and performance fell overall as contexts grew longer. This is the empirical basis for two practical rules in this guide: put critical instructions at the start or end rather than buried in the middle, and retrieve the relevant passages instead of pasting everything and trusting the model to find them.",
      source: {
        label: "Liu et al. (2023) — Lost in the Middle: How Language Models Use Long Contexts, arXiv:2307.03172",
        url: "https://arxiv.org/abs/2307.03172",
      },
    },
  ],

  mistakes: [
    {
      mistake: "Trusting citations, statistics, and quotes without checking",
      why: "Fabricated references are the model's most convincing failure. They have correct author-name patterns, plausible journal titles, and realistic page numbers, because format is exactly what next-token prediction masters.",
      fix: "Treat every specific factual claim as unverified until checked. For production systems, ground the model in retrieved documents and require verbatim quotes — anything unquoted gets flagged.",
    },
    {
      mistake: "Believing temperature 0 means factual",
      why: "It only means deterministic. A wrong answer at temperature 0 is a wrong answer you'll get every single time, which can be worse — the consistency reads as confidence.",
      fix: "Use low temperature for tasks where you want reproducibility, then handle accuracy separately through grounding, tool use, and verification. They're independent problems.",
    },
    {
      mistake: "Assuming the model remembers previous sessions",
      why: "Parameters are frozen. Any memory is the surrounding product re-sending history. Corrections you made yesterday have no effect today unless something stored them.",
      fix: "Put durable requirements in a reusable system prompt or saved instruction set. If you find yourself repeating a correction, that's a signal to move it somewhere permanent.",
    },
    {
      mistake: "Fine-tuning to add knowledge",
      why: "Fine-tuning is effective at teaching format, tone and task behaviour. It is an expensive and unreliable way to install facts, and it makes updating them a retraining job.",
      fix: "Use retrieval for knowledge and fine-tuning for behaviour. If the requirement is 'the model should know our current pricing', that's a retrieval problem — pricing changes and parameters don't.",
    },
    {
      mistake: "Writing vague prompts and blaming the model",
      why: "'Make this better' has no defined target. The model resolves ambiguity with the most statistically typical interpretation, which is rarely your specific one.",
      fix: "Specify the audience, the goal, the constraints, and the output format. If you can't articulate what good looks like, the model certainly can't infer it.",
    },
    {
      mistake: "Feeding the model far more context than it needs",
      why: "Attention across a very long context is imperfect. Models reliably attend better to material at the beginning and end than the middle, so burying a key instruction in the centre of 50 pages hides it.",
      fix: "Retrieve the relevant parts rather than pasting everything. Put critical instructions at the start or end. More context is not better context.",
    },
    {
      mistake: "Using an LLM where a deterministic system belongs",
      why: "Tax calculations, access control, and payment routing need guaranteed correctness. A probabilistic text generator cannot provide that, at any temperature.",
      fix: "Reserve the model for language work — understanding, drafting, classifying, summarising — and let ordinary code handle anything where a wrong answer is unacceptable.",
    },
  ],

  bestPractices: [
    "Give the model a role and a goal before the task. 'You are reviewing this for a non-technical executive who needs to make a budget decision' changes the output far more than adding adjectives.",
    "Show one worked example of the output you want. A single concrete example outperforms three paragraphs of description, because it removes ambiguity about format, depth and tone simultaneously.",
    "Ask for reasoning before conclusions on analytical tasks. Generation is sequential, so tokens spent working through the problem genuinely improve the answer that follows — the reasoning isn't decoration.",
    "Ground factual work in supplied sources and require quotes. This converts an unverifiable claim into a checkable one, which is the single biggest reliability upgrade available.",
    "Give the model an explicit escape hatch: 'if the provided documents don't answer this, say so'. Without permission to decline, it will produce something rather than nothing.",
    "Use structured output formats — JSON, tables, defined headings — when the result feeds another system. Free-form prose is unparseable and will break your pipeline eventually.",
    "Split complex work into a chain of narrow steps. Extract, then verify, then summarise beats one prompt asking for all three, and each step becomes independently testable.",
    "Keep prompts in version control with a test set. Prompts are code: they have regressions, and you won't notice them without tests.",
  ],

  proTips: [
    "When output quality drops in a long chat, start a fresh conversation with a clean summary of what matters. You're not being tidy — you're rebuilding a context window that has filled with noise the model must now attend across.",
    "Ask the model to critique its own output in a separate turn: 'list three specific weaknesses in the draft above'. It's noticeably better at finding flaws than at avoiding them, because critique is a different task from generation.",
    "If a model repeatedly ignores an instruction, move it to the end of the prompt rather than the beginning. Recency helps, and it's a free fix before you rewrite anything.",
    "Test your prompts on your worst realistic input, not a clean one. Anything works on a tidy example; production traffic is malformed, truncated and off-topic, and that's what determines real reliability.",
    "Count tokens explicitly when costs or limits matter. Teams routinely discover they're re-sending a 4,000-token system prompt on every turn of a 60-turn conversation and paying for it repeatedly.",
    "For classification, constrain the model to a fixed list and require it to output only a label. Open-ended classification produces creative new categories that break your downstream code the moment you stop watching.",
  ],

  businessApplications: [
    "Support triage: classifying incoming tickets by intent, urgency and product area, then drafting a first response for human approval. High volume, tolerant of review, immediate measurable time saving.",
    "Document extraction: pulling structured fields from contracts, invoices and forms into a database. The benchmark is the human currently doing it, which makes ROI unusually easy to prove.",
    "Internal knowledge search: retrieval over policies, runbooks and past decisions, answering in natural language with citations. Solves the real problem, which is that people can't find things, not that documents don't exist.",
    "Content operations: first drafts of product descriptions, release notes and briefs from structured input. The model handles volume; a human handles judgement and final voice.",
    "Meeting and call synthesis: turning transcripts into decisions, owners and deadlines. The value is in structure and consistency rather than eloquence.",
    "Code assistance: generating boilerplate, tests and migrations under review. Meaningful productivity gains on routine work, with the caveat that unreviewed generated code accumulates subtle debt fast.",
  ],

  lifeApplications: [
    "Learning something unfamiliar: ask for an explanation at your level, then ask it to test you. Being questioned surfaces gaps far more reliably than reading, and you can iterate until the explanation lands.",
    "Getting unstuck in writing: use the model for the terrible first draft you'd otherwise avoid producing. Editing something bad is psychologically much easier than facing an empty page.",
    "Thinking through decisions: describe your situation and ask for the strongest argument against your preferred option. It's a low-cost way to get an adversarial perspective when you don't want to poll your friends.",
    "Translating jargon: paste a dense contract clause, medical letter or technical document and ask for plain language — then verify anything consequential with a qualified human.",
    "Preparing for hard conversations: rehearse a salary negotiation or difficult feedback session with the model playing the other party. The practice is genuinely useful even though the simulation is imperfect.",
  ],

  exercises: [
    {
      title: "Map the hallucination boundary",
      brief:
        "Ask a model ten factual questions ranging from very well-documented to extremely obscure. Verify every answer independently. Note where confidence stops tracking accuracy.",
      success:
        "You can describe the kind of question where this model becomes unreliable, in your own words.",
      time: "1 hour",
    },
    {
      title: "The context window experiment",
      brief:
        "Paste a long document with a distinctive sentence hidden at the start, the middle, and the end. Ask a question that requires each one, in separate conversations. Record which positions the model retrieves reliably.",
      success: "You have direct evidence of positional attention effects.",
      time: "45 minutes",
    },
    {
      title: "Prompt versus prompt",
      brief:
        "Write a lazy one-line prompt and a carefully structured one for the same task. Run both on eight different inputs. Score the outputs blind if you can get someone to help.",
      success: "You can quantify the improvement, not just assert it.",
      time: "2 hours",
    },
    {
      title: "Build a grounded answerer",
      brief:
        "Take five documents you know well. Write a prompt that answers questions using only those documents, quotes its source, and explicitly says when the answer isn't present. Try hard to make it fabricate.",
      success: "It refuses correctly on at least three out-of-scope questions.",
      time: "3 hours",
    },
    {
      title: "Delegate the arithmetic",
      brief:
        "Give a model a dataset and a calculation. First ask directly and check the answer. Then ask it to write code that computes it, run the code, and compare.",
      success: "You've documented the error rate difference between the two approaches.",
      time: "1 hour",
    },
  ],

  checklist: [
    "I understand that the model predicts tokens rather than retrieving facts",
    "I know roughly how many tokens my prompt and documents consume",
    "Critical instructions sit at the start or end of the prompt, never buried",
    "Factual output is grounded in supplied sources with verifiable quotes",
    "The model has explicit permission to say it doesn't know",
    "Arithmetic and live data are handled by tools, not by generation",
    "Output format is specified and validated before anything downstream consumes it",
    "Prompts are version-controlled and tested against a fixed evaluation set",
    "A human reviews anything consequential before it reaches a customer",
    "I've tested with realistic bad inputs, not just clean examples",
  ],

  faqs: [
    {
      q: "Do language models understand what they're saying?",
      a: "They build rich internal representations that support genuinely useful reasoning, but there's no grounding in experience and no persistent beliefs. The productive framing is behavioural: judge what it reliably does on your task rather than arguing about what's happening inside.",
    },
    {
      q: "Why does an LLM get simple arithmetic wrong?",
      a: "It generates plausible tokens rather than performing calculation, and numbers tokenise awkwardly into fragments. The fix isn't a better prompt — it's giving the model a calculator or having it write code that actually runs.",
    },
    {
      q: "What is a context window, in practical terms?",
      a: "The total amount of text the model can consider at once, including your instructions, any documents, the conversation history and its own reply. Exceed it and something gets dropped — usually the oldest material, which is often your original instructions.",
    },
    {
      q: "Should I fine-tune a model for my business?",
      a: "Usually not first. Fine-tuning teaches format and behaviour well but is a poor mechanism for facts. For company knowledge, retrieval is cheaper, updates instantly, and lets you cite sources. Consider fine-tuning once prompting and retrieval are genuinely exhausted.",
    },
    {
      q: "Are bigger models always better?",
      a: "No. Larger models are stronger at complex reasoning, but for well-defined narrow tasks a smaller model with a good prompt is often faster, far cheaper, and equally accurate. Match the model to the task rather than defaulting to the largest.",
    },
    {
      q: "Can a model learn from my conversation?",
      a: "Not its parameters, which are frozen. Some products store your conversations and re-inject relevant parts, which feels like memory. Check the provider's data policy if you're handling anything sensitive — storage and training are separate questions.",
    },
    {
      q: "How do I stop a model hallucinating?",
      a: "You can't eliminate it, because generation is the mechanism. You reduce it substantially by supplying the relevant source material, requiring quotes, allowing the model to decline, and verifying anything consequential before it's used.",
    },
  ],

  tools: [
    { name: "OpenAI Playground", what: "Direct API access with visible system prompts, temperature and token counts. Far more instructive than the chat interface.", cost: "Paid", url: "https://platform.openai.com/playground" },
    { name: "Anthropic Console", what: "Claude's development environment, including a prompt generator and side-by-side prompt comparison.", cost: "Paid", url: "https://console.anthropic.com" },
    { name: "Tiktokenizer", what: "Shows exactly how text splits into tokens. Thirty seconds here explains a dozen odd model behaviours.", cost: "Free", url: "https://tiktokenizer.vercel.app" },
    { name: "LM Studio", what: "Run open-weight models locally. The best way to understand hardware costs and what smaller models can genuinely do.", cost: "Free", url: "https://lmstudio.ai" },
    { name: "Ollama", what: "Command-line local model runner. Simple, scriptable, good for experimenting without per-token costs.", cost: "Free", url: "https://ollama.com" },
    { name: "LangSmith", what: "Tracing and evaluation for LLM applications — see exactly what was sent and returned at every step.", cost: "Freemium", url: "https://smith.langchain.com" },
    { name: "Promptfoo", what: "Test prompts against a fixed evaluation set and catch regressions. Treats prompts as code, which they are.", cost: "Free", url: "https://promptfoo.dev" },
  ],

  resources: [
    { title: "The Illustrated Transformer — Jay Alammar", kind: "Docs", note: "The clearest visual explanation of attention available anywhere. Read it twice.", url: "https://jalammar.github.io/illustrated-transformer/" },
    { title: "Let's build GPT from scratch — Andrej Karpathy", kind: "Video", note: "Two hours building a working language model line by line. Demystifies the architecture completely.", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
    { title: "Anthropic's Prompt Engineering Guide", kind: "Docs", note: "Practical, specific, and written by people who see how these models fail at scale.", url: "https://docs.anthropic.com" },
    { title: "Attention Is All You Need", kind: "Paper", note: "The 2017 paper introducing the transformer. Short and surprisingly readable once you've seen the illustrated version.", url: "https://arxiv.org/abs/1706.03762" },
    { title: "Simon Willison's blog", kind: "Newsletter", note: "Consistently sober, hands-on writing about what these tools actually do. A good antidote to hype in both directions.", url: "https://simonwillison.net" },
  ],

  internalLinks: [
    { slug: "prompt-engineering-fundamentals", anchor: "the prompting techniques that follow from this mechanism", context: "After the section on next-token prediction" },
    { slug: "rag-explained", anchor: "how retrieval grounds a model in your own data", context: "In the knowledge cutoff concept" },
    { slug: "how-machine-learning-actually-works", anchor: "the training process underneath", context: "When introducing pre-training" },
  ],

  relatedGuides: [
    "prompt-engineering-fundamentals",
    "rag-explained",
    "how-machine-learning-actually-works",
  ],

  conclusion: [
    "A language model is a next-token predictor trained at enormous scale, and that single fact explains nearly everything about how it behaves. Fluency without verification, confident fabrication, forgetting across sessions, failing at arithmetic while succeeding at nuanced summarisation — none of these are bugs or mysteries. They're direct consequences of the mechanism.",
    "The practical skill this unlocks is knowing which half of a problem to give the model. Language work — understanding, drafting, classifying, restructuring, explaining — is what it's genuinely excellent at. Guaranteed accuracy, live data, arithmetic and irreversible decisions belong to code, tools and people. Systems that respect this division work well; systems that ignore it fail in ways their builders find baffling.",
    "Start by mapping the boundary yourself. Spend an hour deliberately trying to break a model, verify everything it tells you, and note where confidence and correctness part company. That hour will teach you more than any amount of reading, including this guide.",
  ],

  cta: {
    headline: "Putting language models into production?",
    body: "We build grounded, evaluated LLM systems — retrieval, tool use, guardrails and human review, engineered to hold up under real traffic.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
