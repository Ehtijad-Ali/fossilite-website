// Shared canned-reply engine for the Fossilite assistant.
// Used by both the floating AIChat widget and the in-page ChatBox section so
// the two stay in sync with a single source of truth (frontend only — no API).
//
// Order matters: specific topic matches come BEFORE generic intent matches, so
// a question like "How does vector search work?" is answered about vector search
// rather than being caught by the word "work" in the case-studies branch.

export type AssistantAction = "contact" | "cases";
export interface AssistantReply {
  text: string;
  action?: AssistantAction;
}

const has = (q: string, ...terms: string[]) => terms.some((t) => q.includes(t));

export const replyFor = (input: string): AssistantReply => {
  const q = input.toLowerCase().trim();

  // ── Easter egg (very specific) ──
  if (q.includes("sun") && q.includes("yellow"))
    return { text: "The sun looks yellow from Earth because our atmosphere scatters shorter blue wavelengths, leaving warmer tones to reach your eyes. Now — ask me something about building with AI! 🙂" };

  // ── Greeting (word-boundary so it doesn't match \"which\", \"this\", etc.) ──
  if (/\b(hi|hey|hello|good (morning|afternoon|evening))\b/.test(q))
    return { text: "Hi there! 👋 I'm the Fossilite assistant. Ask me about RAG pipelines, AI agents, our timelines, or the tools we integrate with — or I can connect you with the team." };

  // ── Specific technical topics ──
  if (has(q, "vector", "embedding"))
    return { text: "Vector search finds meaning, not just keywords. Your text is turned into embeddings — numeric vectors — and results are ranked by how close they sit in that space, so \"reset my password\" can match \"account recovery.\" In production we pair it with keyword (hybrid) search and a re-ranking step for accuracy." };

  if (has(q, "rag", "retriev", "pipeline"))
    return { text: "A RAG pipeline grounds a language model in your own data. The flow: chunk and embed your documents into a vector store → retrieve the most relevant passages for each question → pass them to the model as context so answers stay accurate and can cite sources. We add re-ranking and evaluation so it holds up in production, not just in a demo." };

  if (q.includes("agent"))
    return { text: "An AI agent pursues a goal by planning, calling tools, and using memory — deciding its next step instead of following a fixed script. The hard part is reliability, so we wrap agents in guardrails, validation, and human checkpoints before they ever run in production." };

  if (has(q, "langchain", "langgraph", "crewai", "orchestrat"))
    return { text: "Think of LangChain as a toolkit for wiring a language model to your data, tools, and memory — you compose steps (retrieve → reason → act) instead of hand-rolling the plumbing. LangGraph adds stateful, branching workflows on top. We use them where they fit, but stay framework-pragmatic and pick whatever ships the most reliable system." };

  if (has(q, "integrat", "stack", "openai", "anthropic", "slack", "github", "notion", "tool"))
    return { text: "We connect natively with OpenAI, Anthropic, Slack, GitHub, Notion, Google, Figma and Zapier — so intelligence flows into the tools your team already uses, rather than forcing a rip-and-replace." };

  // ── Business intents ──
  if (has(q, "fast", "long", "time", "week", "timeline", "how soon"))
    return { text: "Most MVPs ship in about six weeks — roughly 40–60% faster delivery than a traditional build, with 100% human review on everything before it goes live." };

  if (has(q, "price", "cost", "quote", "budget", "how much"))
    return { text: "Pricing scales with scope. Our plans start with a single production workflow and grow to enterprise engagements — share a few details and we'll put together a clear quote within one business day.", action: "contact" };

  if (has(q, "demo", "book", "call", "contact", "talk", "reach", "get started", "sign up"))
    return { text: "Happy to help — I'll point you to our contact form so a systems architect (not a sales bot) can reach out within one business day.", action: "contact" };

  if (has(q, "case", "portfolio", "example", "your work", "results", "proof", "clients"))
    return { text: "We've shipped 50+ products across 12 countries, with measurable impact from the first sprint. Take a look at a few case studies just below.", action: "cases" };

  if (has(q, "build", "do you", "service", "offer", "make", "help with", "what can"))
    return { text: "We build production-grade AI systems: RAG pipelines, autonomous agents, workflow automation, and data-extraction tooling. Engineers first, AI-enhanced — and every system is designed to run reliably at scale." };

  // ── Polite fallback for anything outside the assistant's scope ──
  return {
    text: "That's a little outside what I can answer well here — I'm best with questions about RAG pipelines, AI agents, LangChain, and vector search, plus how Fossilite builds production AI. For anything else, I'd be glad to connect you with a real person on our team.",
    action: "contact",
  };
};
