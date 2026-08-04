import type { Guide } from "../types";

export const guide: Guide = {
  slug: "rag-explained",
  seoTitle: "RAG Explained: Grounding AI in Your Own Data",
  metaDescription:
    "How retrieval-augmented generation works, why it beats fine-tuning for company knowledge, and the practical failures that break RAG systems in production.",
  title: "RAG Explained: Grounding AI in Your Own Data",
  keywords: [
    "what is RAG",
    "retrieval augmented generation",
    "vector search",
    "embeddings explained",
    "RAG vs fine-tuning",
    "chunking strategy",
  ],
  category: "artificial-intelligence",
  level: "Intermediate",
  updated: "2026-08-04",
  author: "Fossilite Engineering",
  readingTime: 13,

  intro: [
    "A language model knows an enormous amount about the world in general and nothing whatsoever about your company. It has never seen your pricing, your policies, your support history, or the decision your team made last March. Retrieval-augmented generation — RAG — is the standard way of closing that gap, and it's simpler than the acronym suggests.",
    "The idea in one line: before answering, go and fetch the relevant passages from your own documents, and put them in the prompt. The model then answers from material it can actually see rather than from memory it doesn't have. That's the whole mechanism.",
    "What makes RAG interesting isn't the concept, which takes a minute to grasp. It's that the naive version works impressively in a demo and disappoints in production, for reasons that are entirely predictable once you understand where each stage can fail. This guide covers the mechanism properly and then spends most of its time on those failure points, because that's where the actual engineering lives.",
  ],

  whyItMatters: [
    "Almost every genuinely useful business application of language models needs company-specific knowledge. Support answers must reflect your actual policy. Internal search must cover your actual documents. Sales research must use your actual account history. Without grounding, you have a very articulate system that confidently makes things up about your business — which is worse than having nothing.",
    "RAG is also the answer to a question people usually get wrong. The instinct when a model doesn't know something is to train it on the missing data. That's expensive, slow to update, impossible to audit, and it doesn't reliably install facts. Retrieval is cheaper, updates the moment a document changes, and — critically — can cite its source, which is often a hard requirement in regulated work.",
    "Understanding it also makes you a much harder person to sell to. A large number of AI products are a retrieval pipeline with a good interface. Knowing what's inside lets you ask the questions that matter: how do you chunk, do you re-rank, what happens when retrieval finds nothing, and can I see the sources behind an answer?",
  ],

  coreConcepts: [
    {
      term: "Embeddings turn meaning into coordinates",
      explain:
        "An embedding model converts a piece of text into a list of numbers — a vector — positioned so that texts with similar meaning land near each other. 'Reset my password' and 'I can't log in' end up close together despite sharing almost no words.",
      detail:
        "This is what lets retrieval find relevant material when the user's wording doesn't match the document's. It's also why embeddings alone miss exact-match needs like product codes and error numbers, which have meaning but little semantic context.",
    },
    {
      term: "Chunking decides what can be retrieved",
      explain:
        "Documents are split into pieces before embedding, because retrieving a whole 80-page manual is useless. The chunk is the unit of retrieval, so chunk boundaries determine what the model can ever see.",
      detail:
        "This is the most under-appreciated decision in the entire pipeline. Split mid-table and you retrieve half a table. Split by fixed character count and you cut sentences in half. Split too large and you dilute relevance; too small and you lose the context that made the passage meaningful.",
    },
    {
      term: "Vector search finds the nearest neighbours",
      explain:
        "The user's question is embedded with the same model, then the store returns the chunks whose vectors sit closest to it. 'Closest' is usually measured by cosine similarity.",
      detail:
        "Note what this doesn't do: it doesn't understand the question, and it doesn't verify relevance. It returns the top matches whether or not any of them are actually useful — there's always a nearest neighbour, even when nothing is relevant.",
    },
    {
      term: "Hybrid search combines semantic and keyword matching",
      explain:
        "Pure vector search misses exact terms; pure keyword search misses paraphrases. Running both and merging the results covers each other's weaknesses.",
      detail:
        "In practice hybrid retrieval is close to mandatory for real corpora, because business documents are full of identifiers, part numbers, and named entities that embeddings handle poorly.",
    },
    {
      term: "Re-ranking fixes the ordering",
      explain:
        "Retrieval is fast and approximate. A re-ranker is a slower, more accurate model that scores each retrieved chunk against the query properly, then reorders. You retrieve twenty and keep the best four.",
      detail:
        "Adding re-ranking is frequently the single largest quality jump available in a RAG system, and it's often skipped because the naive pipeline appears to work.",
    },
    {
      term: "The generation step is constrained, not creative",
      explain:
        "The final prompt contains the retrieved chunks plus an instruction to answer using only that material, cite sources, and state when the answer isn't present.",
      detail:
        "That last clause matters enormously. Without explicit permission to fail, a model handed irrelevant chunks will still produce an answer, blending them into something plausible.",
    },
    {
      term: "RAG versus fine-tuning",
      explain:
        "Retrieval adds knowledge; fine-tuning shapes behaviour. If the requirement is 'the model should know our refund policy', that's retrieval. If it's 'the model should always respond in our house format', that's fine-tuning territory.",
      detail:
        "The two are complementary, not competing. But teams reach for fine-tuning to solve knowledge problems far more often than the reverse, and it rarely ends well.",
    },
    {
      term: "Evaluation has two separate halves",
      explain:
        "A RAG system can fail at retrieval (the right passage was never fetched) or at generation (the passage was there and the answer still went wrong). These need measuring separately.",
      detail:
        "Teams that only evaluate final answers spend weeks tuning prompts to fix what is actually a chunking problem. Measure retrieval hit rate first — if the correct chunk isn't in the context, no prompt will save you.",
    },
  ],

  learningPath: [
    {
      title: "Build the naive version and see it work",
      body: "Take twenty documents you know well. Chunk them crudely, embed them, store in any vector database, retrieve the top five for a question, and put them in a prompt. Get it end-to-end before optimising anything.",
      effort: "4–6 hours",
      outcome: "A working pipeline you can now break deliberately.",
    },
    {
      title: "Break it and understand why",
      body: "Ask questions whose answers span two chunks. Ask about something not in the corpus at all. Ask using vocabulary that doesn't appear in the documents. Record exactly which stage failed each time.",
      effort: "2–3 hours",
      outcome: "You can name the failure stage rather than saying 'the AI got it wrong'.",
    },
    {
      title: "Fix chunking",
      body: "Re-chunk along semantic boundaries — headings, sections, paragraphs — instead of fixed character counts. Add overlap between chunks. Prepend each chunk with its document title and section heading so it carries context.",
      effort: "4–5 hours",
      outcome: "Measurably higher retrieval hit rate on your test questions.",
    },
    {
      title: "Add hybrid search and re-ranking",
      body: "Combine keyword search with vector search, then add a re-ranker over the merged results. Measure retrieval hit rate before and after each addition, separately.",
      effort: "6–8 hours",
      outcome: "Two numbers showing what each component contributed.",
    },
    {
      title: "Build a retrieval evaluation set",
      body: "Write thirty questions with the specific chunk that should answer each one. Measure how often the correct chunk appears in your top-k results. This is your retrieval score, independent of the model.",
      effort: "4–5 hours",
      outcome: "You can improve retrieval without guessing.",
    },
    {
      title: "Harden generation",
      body: "Require citations for every claim, forbid answers not supported by retrieved text, and add explicit refusal behaviour. Then test with questions the corpus genuinely can't answer.",
      effort: "3–4 hours",
      outcome: "The system reliably says 'not in the documents' instead of inventing.",
    },
    {
      title: "Handle updates and permissions",
      body: "Work out how a changed document gets re-indexed, and how a user who shouldn't see a document is prevented from retrieving it. Both are production requirements that demos ignore.",
      effort: "6–10 hours",
      outcome: "The system stays current and doesn't leak across permission boundaries.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Anthropic measures what each stage of a retrieval pipeline is actually worth.",
      walkthrough:
        "Anthropic benchmarked retrieval across several knowledge domains, measuring the top-20-chunk failure rate — how often the correct passage was absent from the twenty chunks retrieved. A standard embedding pipeline gave a 5.7% failure rate as the baseline. They then added, in turn: context prepended to each chunk before embedding, keyword (BM25) search alongside semantic search, and a re-ranking pass over the merged results.",
      result:
        "Contextual embeddings alone cut the failure rate by 35% (5.7% → 3.7%). Adding contextual BM25 took the reduction to 49% (→ 2.9%). Adding re-ranking took it to 67% (→ 1.9%). This is the published evidence behind three recommendations in this guide — attach context to chunks, use hybrid retrieval, and don't skip the re-ranker — and it shows their effects compound rather than overlap.",
      source: {
        label: "Anthropic (2024) — Introducing Contextual Retrieval",
        url: "https://www.anthropic.com/news/contextual-retrieval",
      },
    },
    {
      kind: "documented",
      scenario: "Researchers show that retrieving the right chunk isn't sufficient — its position matters too.",
      walkthrough:
        "Liu and colleagues varied where the relevant document sat within a model's context on multi-document question answering. Accuracy was highest when the needed passage appeared at the start or end of the context and fell measurably when it sat in the middle, producing a U-shaped curve. Performance also declined as total context length grew, including on models built for long contexts.",
      result:
        "For RAG this has a direct consequence: retrieving ten chunks and dumping them in arbitrary order wastes good retrieval. Rank order is part of the pipeline, not cosmetic — which is a second, independent argument for re-ranking beyond simply picking better chunks.",
      source: {
        label: "Liu et al. (2023) — Lost in the Middle: How Language Models Use Long Contexts, arXiv:2307.03172",
        url: "https://arxiv.org/abs/2307.03172",
      },
    },
    {
      kind: "illustration",
      scenario: "A policy assistant answers from the general policy instead of the country-specific appendix.",
      walkthrough:
        "A common failure shape worth recognising: a policy document has a general section plus per-country appendices. Fixed-size chunking splits an appendix table across chunk boundaries, so the fragment that survives is no longer self-describing. The general policy is now the closest semantic match to the question, retrieval returns it, and the model answers fluently from the wrong section. No stage of the pipeline reports an error, because nothing errored.",
      result:
        "The tell is that the answer is coherent and wrong. Chunking on document structure, prepending each chunk with its section path, and requiring the answer to quote its supporting line verbatim all surface this during testing rather than in an employee's inbox.",
    },
  ],

  mistakes: [
    {
      mistake: "Chunking by fixed character count",
      why: "It cuts sentences, tables and lists in half. A chunk ending mid-clause is a chunk that can't answer anything, and it will still be retrieved because similarity doesn't measure completeness.",
      fix: "Split on structure — headings, sections, paragraphs — with overlap between adjacent chunks, and attach the document title and section path to each chunk's text.",
    },
    {
      mistake: "Skipping the re-ranker",
      why: "Vector similarity is a fast approximation. The most similar chunk is frequently not the most useful one, and the model has no way to tell the difference.",
      fix: "Retrieve generously — say twenty chunks — then re-rank and pass only the best few to the model. Better ordering usually beats a better prompt.",
    },
    {
      mistake: "Only measuring final answer quality",
      why: "You can't tell whether a wrong answer came from bad retrieval or bad generation, so you tune the wrong stage. Teams lose weeks this way.",
      fix: "Measure retrieval hit rate separately with a labelled question-to-chunk set. If the right chunk isn't retrieved, stop touching the prompt.",
    },
    {
      mistake: "No behaviour defined for 'nothing relevant found'",
      why: "Vector search always returns something. Given irrelevant chunks and no instruction, the model produces a plausible answer from unrelated material — the most dangerous output the system can make.",
      fix: "Set a relevance threshold, and instruct the model explicitly to answer 'not found in the available documents'. Test it with questions you know are out of scope.",
    },
    {
      mistake: "Ignoring permissions until launch",
      why: "A retrieval system over all company documents will happily surface salary data to whoever asks, because the vector store doesn't know who's asking.",
      fix: "Filter by the requesting user's access rights before the similarity search, not after. Retrofitting this is far harder than designing it in.",
    },
    {
      mistake: "Fine-tuning instead of retrieving",
      why: "It's expensive, doesn't reliably install facts, can't cite sources, and requires retraining every time a document changes.",
      fix: "Use retrieval for knowledge. Reserve fine-tuning for consistent format and tone, and only after prompting has genuinely been exhausted.",
    },
    {
      mistake: "Treating the index as static",
      why: "Documents change. A pipeline with no re-indexing path is answering from a snapshot that gets staler every week, invisibly.",
      fix: "Build the update path on day one — ideally triggered by document changes — and surface the source document's last-modified date in every answer.",
    },
  ],

  bestPractices: [
    "Attach metadata to every chunk: source document, section, author, date, access level. Almost every later improvement — filtering, citation, freshness, permissions — depends on metadata you didn't collect if you skipped this.",
    "Prepend context to chunk text before embedding. A chunk that reads 'Refund Policy › Enterprise › After 30 days: …' embeds far more usefully than the bare paragraph.",
    "Use hybrid retrieval by default. Real corpora contain identifiers, names and codes that pure semantic search handles badly.",
    "Show sources in the interface, linked and clickable. It builds trust, and more importantly it lets users catch errors you'd never find yourself.",
    "Set an explicit relevance floor. Answering from weak matches is worse than declining, because a confident wrong answer costs more than a visible gap.",
    "Log every query with its retrieved chunks and final answer. Failure analysis without this is guesswork, and questions users actually ask are your best evaluation set.",
    "Keep chunks reasonably small and retrieve several rather than retrieving one enormous one. Attention degrades over long contexts and precision beats volume.",
    "Re-run evaluation whenever you change the embedding model. Changing embeddings invalidates the entire index and requires a full re-embed — plan for it.",
  ],

  proTips: [
    "Generate a short hypothetical answer to the user's question first, then embed that and search with it. Answers embed closer to answer-shaped passages than questions do, and this often improves retrieval measurably for free.",
    "Store a one-line summary alongside each chunk and embed the summary rather than the raw text for the first-pass search. It denoises retrieval on documents full of boilerplate.",
    "Look at your logged queries weekly and cluster them. The clusters that retrieve poorly usually point at a whole category of missing or badly structured documentation — a content problem wearing a technical disguise.",
    "When users complain about answers, check retrieval first, every time. In our experience most reported 'model errors' in RAG systems are actually chunking errors.",
    "Test with the questions your team can't answer either. If the document genuinely doesn't cover it, the correct behaviour is refusal — and that's the behaviour least likely to have been tested.",
    "Include the document date in the chunk text itself, not only in metadata. Models reason about currency far better when the date is visible in the context they're reading.",
  ],

  businessApplications: [
    "Internal knowledge assistants over policies, runbooks and past decisions — solving the real problem, which is that the documentation exists but nobody can find the relevant paragraph.",
    "Customer support deflection: answering from your actual help centre with citations, escalating to a human when retrieval confidence is low.",
    "Sales enablement: retrieving relevant case studies, pricing precedents and objection handling for the specific account a rep is about to call.",
    "Contract and compliance review: surfacing the clauses relevant to a question across a large document set, with source links for the lawyer who has to sign off.",
    "Onboarding: new hires ask questions in plain language instead of interrupting colleagues, and the answers cite the document so they learn where things live.",
    "Technical support over product documentation, where hybrid search is essential because users search by error codes and part numbers.",
  ],

  lifeApplications: [
    "Personal knowledge base: index your own notes, saved articles and journals so you can ask questions of your past self rather than trying to remember where you wrote something.",
    "Studying from source material: build retrieval over a textbook or paper set and ask questions that force you to engage with what the text actually says, with citations to verify.",
    "Managing complex personal admin — insurance policies, tenancy agreements, medical letters — where the answer exists in a document you'd rather not read end to end.",
    "Research projects: keeping dozens of sources searchable by meaning rather than by whether you remembered the exact phrase you highlighted.",
  ],

  exercises: [
    {
      title: "Chunk three ways",
      brief:
        "Take one structured document. Chunk it by fixed size, by paragraph, and by heading with overlap. Run the same ten questions against each and record retrieval hit rate.",
      success: "Three numbers, and an explanation of why they differ.",
      time: "3 hours",
    },
    {
      title: "Prove the keyword gap",
      brief:
        "Index documents containing identifiers or codes. Query with exact codes using vector search only, then with hybrid search. Compare.",
      success: "A measured accuracy difference on identifier queries.",
      time: "2 hours",
    },
    {
      title: "Force a refusal",
      brief:
        "Ask ten questions your corpus definitely cannot answer. Count how many produce a confident fabrication. Add a relevance threshold and explicit refusal instruction, then repeat.",
      success: "Fabrication rate drops to near zero without losing valid answers.",
      time: "2 hours",
    },
    {
      title: "Build a retrieval eval set",
      brief:
        "Write thirty questions and identify the exact chunk that answers each. Measure top-5 hit rate. Improve chunking until it clears 90%.",
      success: "A documented before-and-after hit rate.",
      time: "4–5 hours",
    },
  ],

  codeExamples: [
    {
      title: "Structure-aware chunking with inherited headings",
      language: "python",
      intro:
        "The single highest-impact piece of code in a RAG pipeline. Splitting on headings rather than character count keeps chunks self-contained, and prepending the section path makes each one meaningful on its own.",
      code: `import re


def chunk_markdown(text: str, doc_title: str, max_chars: int = 1500) -> list[dict]:
    """Split on headings, carry the section path into each chunk's text."""
    chunks: list[dict] = []
    path: list[str] = []          # current heading hierarchy, e.g. ["Refunds", "Enterprise"]
    buffer: list[str] = []

    def flush() -> None:
        body = "\\n".join(buffer).strip()
        if not body:
            return
        # The prefix is what makes a chunk embeddable on its own. Without it,
        # "After 30 days: no refund" has no idea which policy it belongs to.
        prefix = " > ".join([doc_title, *path])
        chunks.append({
            "text": f"{prefix}\\n\\n{body}",
            "section": prefix,
            "source": doc_title,
        })
        buffer.clear()

    for line in text.splitlines():
        heading = re.match(r"^(#{1,6})\\s+(.*)", line)
        if heading:
            flush()
            level = len(heading.group(1))
            path[:] = path[: level - 1] + [heading.group(2).strip()]
            continue

        buffer.append(line)
        if sum(len(l) for l in buffer) > max_chars:
            flush()
            # Overlap: keep the last two lines so a split sentence isn't orphaned.
            buffer.extend(line for line in buffer[-2:])

    flush()
    return chunks`,
      note:
        "The `prefix` line is doing most of the work. A bare paragraph embeds ambiguously; the same paragraph prefixed with 'Refund Policy > Enterprise' embeds where a query about enterprise refunds will actually find it.",
    },
    {
      title: "Hybrid retrieval with reciprocal rank fusion",
      language: "python",
      intro:
        "Semantic search misses exact identifiers; keyword search misses paraphrases. Running both and fusing the rankings covers each other's blind spots — and RRF needs no score normalisation, which is why it's the pragmatic default.",
      code: `def reciprocal_rank_fusion(
    rankings: list[list[str]], k: int = 60, top_n: int = 20
) -> list[str]:
    """Merge several ranked ID lists into one. Higher = better.

    RRF scores by POSITION, not by score, so you can fuse a cosine
    similarity ranking with a BM25 ranking without normalising anything.
    """
    scores: dict[str, float] = {}
    for ranking in rankings:
        for position, chunk_id in enumerate(ranking):
            scores[chunk_id] = scores.get(chunk_id, 0.0) + 1.0 / (k + position + 1)
    ranked = sorted(scores.items(), key=lambda kv: kv[1], reverse=True)
    return [chunk_id for chunk_id, _ in ranked[:top_n]]


def retrieve(query: str, user_id: str, top_n: int = 20) -> list[dict]:
    # Permission filtering happens BEFORE the similarity search, not after.
    # Filtering afterwards leaks information through result counts.
    allowed = permissions.visible_chunk_ids(user_id)

    semantic = vector_store.search(query, filter_ids=allowed, limit=50)
    keyword = bm25_index.search(query, filter_ids=allowed, limit=50)

    fused_ids = reciprocal_rank_fusion(
        [[c["id"] for c in semantic], [c["id"] for c in keyword]], top_n=top_n
    )
    return [chunk_store[cid] for cid in fused_ids]`,
      note:
        "Note the ordering: permissions constrain the candidate set before ranking. Retrieving first and filtering after is the mistake that turns an access-control boundary into a suggestion.",
    },
    {
      title: "Grounded generation with a refusal path",
      language: "python",
      intro:
        "Vector search always returns something, so the model will always have chunks — relevant or not. A relevance floor plus explicit permission to decline is what stops it answering from unrelated material.",
      code: `import anthropic

client = anthropic.Anthropic()

RELEVANCE_FLOOR = 0.35   # tune against your own labelled query set

SYSTEM = """Answer using ONLY the documents provided below.

Rules:
1. Before each claim, quote the sentence that supports it, in quotation marks,
   followed by its source name.
2. If the documents do not contain the answer, reply exactly:
   NOT FOUND IN PROVIDED DOCUMENTS
3. Do not use knowledge from outside these documents.
4. If two documents conflict, say so and quote both."""


def answer(question: str, user_id: str) -> str:
    chunks = retrieve(question, user_id)
    chunks = [c for c in chunks if c["score"] >= RELEVANCE_FLOOR][:5]

    # Nothing cleared the floor: refuse here, in code, rather than handing the
    # model weak matches and hoping it declines on its own.
    if not chunks:
        return "NOT FOUND IN PROVIDED DOCUMENTS"

    context = "\\n\\n---\\n\\n".join(
        f"[{c['source']} — {c['section']}, updated {c['updated']}]\\n{c['text']}"
        for c in chunks
    )

    response = client.messages.create(
        model="claude-opus-5",
        max_tokens=16000,
        system=SYSTEM,
        messages=[{
            "role": "user",
            "content": (
                f"<documents>\\n{context}\\n</documents>\\n\\n"
                f"QUESTION: {question}"
            ),
        }],
    )
    return response.content[0].text`,
      note:
        "The date is included in the chunk text, not only in metadata — models reason about currency far better when they can see it in the context they're reading.",
    },
    {
      title: "Measuring retrieval separately from generation",
      language: "python",
      intro:
        "The diagnostic that saves weeks. If the correct chunk was never retrieved, no prompt change will fix the answer — and this tells you which half to work on.",
      code: `# Each case: a question plus the chunk id that should answer it.
EVAL_SET = [
    {"q": "How long is enterprise parental leave in Germany?", "chunk_id": "hr-de-04"},
    {"q": "What does error ERR_4412 mean?",                    "chunk_id": "ts-errors-12"},
    {"q": "Who is the CEO of a company we've never heard of?", "chunk_id": None},  # must refuse
]


def evaluate_retrieval(k: int = 5) -> None:
    hits = misses = correct_refusals = false_answers = 0

    for case in EVAL_SET:
        retrieved = [c["id"] for c in retrieve(case["q"], user_id="eval")[:k]]

        if case["chunk_id"] is None:
            # Out-of-scope question: retrieving nothing above the floor is CORRECT.
            if not retrieved:
                correct_refusals += 1
            else:
                false_answers += 1
                print(f"SHOULD HAVE REFUSED: {case['q']!r} -> {retrieved}")
        elif case["chunk_id"] in retrieved:
            hits += 1
        else:
            misses += 1
            print(f"MISS: {case['q']!r} -> got {retrieved}, wanted {case['chunk_id']}")

    answerable = hits + misses
    print(f"\\nrecall@{k}: {hits}/{answerable} = {hits / answerable:.0%}")
    print(f"correct refusals: {correct_refusals}, false answers: {false_answers}")`,
      note:
        "Include out-of-scope questions in the set. A pipeline scoring 95% recall while confidently answering questions its corpus can't address is worse than one scoring 85% and refusing correctly.",
    },
  ],

  checklist: [
    "Chunks follow document structure, with overlap and inherited headings",
    "Every chunk carries metadata: source, section, date, access level",
    "Retrieval is hybrid — semantic plus keyword",
    "A re-ranker orders results before they reach the model",
    "Retrieval hit rate is measured separately from answer quality",
    "A relevance threshold exists and low-confidence retrieval triggers refusal",
    "The model is instructed to cite sources and quote supporting text",
    "Permissions are applied before the similarity search, not after",
    "There is a defined path for re-indexing changed documents",
    "Queries, retrieved chunks and answers are logged for failure analysis",
  ],

  faqs: [
    {
      q: "What does RAG stand for?",
      a: "Retrieval-augmented generation. The system retrieves relevant passages from your documents and places them in the model's prompt, so answers come from material the model can see rather than from its training data.",
    },
    {
      q: "Is RAG better than fine-tuning?",
      a: "For knowledge, almost always. Retrieval updates instantly when a document changes, can cite sources, and costs far less. Fine-tuning is the right tool for consistent behaviour and format, not for facts.",
    },
    {
      q: "Do I need a dedicated vector database?",
      a: "Not to start. Postgres with pgvector handles a great many production workloads, and for a few thousand documents an in-memory index is fine. Dedicated stores earn their place at scale or when you need advanced filtering.",
    },
    {
      q: "Why does my RAG system still hallucinate?",
      a: "Usually because retrieval returned irrelevant chunks and nothing told the model it was allowed to fail. Vector search always returns something. Add a relevance threshold and explicit refusal behaviour before touching the prompt further.",
    },
    {
      q: "How big should chunks be?",
      a: "Big enough to be self-contained, small enough to be precise — often a few hundred tokens. Structure matters more than size: a chunk that ends mid-table is wrong at any length.",
    },
    {
      q: "How do I stop it retrieving documents a user shouldn't see?",
      a: "Filter by access rights before running the similarity search, using metadata stored with each chunk. Filtering after retrieval leaks information through result counts and is harder to reason about.",
    },
    {
      q: "How do I know if retrieval or generation is at fault?",
      a: "Check whether the correct chunk was in the retrieved set. If it wasn't, it's a retrieval problem and no prompt change will fix it. If it was, the problem is in generation.",
    },
  ],

  tools: [
    { name: "pgvector", what: "Vector search inside Postgres. Often the pragmatic choice — one database instead of two.", cost: "Free", url: "https://github.com/pgvector/pgvector" },
    { name: "Qdrant", what: "Purpose-built vector database with strong metadata filtering. Good when filters matter as much as similarity.", cost: "Freemium", url: "https://qdrant.tech" },
    { name: "LlamaIndex", what: "Framework focused specifically on the retrieval side — loaders, chunkers, retrievers and evaluation.", cost: "Free", url: "https://www.llamaindex.ai" },
    { name: "Cohere Rerank", what: "A managed re-ranking model. Usually the fastest meaningful quality win in a working pipeline.", cost: "Paid", url: "https://cohere.com/rerank" },
    { name: "Ragas", what: "Evaluation framework for RAG that scores retrieval and generation separately.", cost: "Free", url: "https://docs.ragas.io" },
    { name: "Unstructured", what: "Parses PDFs, slides and HTML into clean structured text. Solves the unglamorous problem that ruins most pipelines.", cost: "Freemium", url: "https://unstructured.io" },
  ],

  resources: [
    { title: "LlamaIndex documentation", kind: "Docs", note: "The most thorough practical reference on chunking, retrieval strategies and evaluation.", url: "https://docs.llamaindex.ai" },
    { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", kind: "Paper", note: "The 2020 paper that named the approach. Useful for seeing how much the practice has moved since.", url: "https://arxiv.org/abs/2005.11401" },
    { title: "Anthropic — Contextual Retrieval", kind: "Docs", note: "A well-documented technique for attaching context to chunks before embedding, with measured results.", url: "https://www.anthropic.com/news/contextual-retrieval" },
    { title: "Ragas documentation", kind: "Docs", note: "Concrete metrics for RAG evaluation, and a good model for how to think about measuring the stages separately.", url: "https://docs.ragas.io" },
  ],

  internalLinks: [
    { slug: "how-large-language-models-work", anchor: "why models need grounding in the first place", context: "In the introduction" },
    { slug: "prompt-engineering-fundamentals", anchor: "writing the generation prompt properly", context: "In the generation step concept" },
    { slug: "how-machine-learning-actually-works", anchor: "how embeddings are learned", context: "In the embeddings concept" },
  ],

  relatedGuides: [
    "how-large-language-models-work",
    "prompt-engineering-fundamentals",
    "how-machine-learning-actually-works",
  ],

  conclusion: [
    "RAG is a simple idea surrounded by unglamorous engineering. Fetch the relevant material, put it in the prompt, answer from it. The concept takes a minute; the chunking, hybrid retrieval, re-ranking, permissions, freshness and evaluation take the rest of the project — and they're what separates a system people trust from one they quietly stop using.",
    "If you remember one operational rule, make it this: measure retrieval separately from generation. The overwhelming majority of 'the AI gave a wrong answer' reports in RAG systems are retrieval failures wearing a generation costume, and no amount of prompt tuning fixes a chunk that was never fetched.",
    "Start with twenty documents you know well enough to grade the answers yourself. Build the naive pipeline, break it deliberately, and fix one stage at a time with a number in front of you. That progression teaches the discipline in a week.",
  ],

  cta: {
    headline: "Need retrieval that survives production?",
    body: "We design grounded AI systems — structured chunking, hybrid retrieval, re-ranking and honest evaluation — that hold up under real traffic and real scrutiny.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
