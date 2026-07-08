// Shared canned-reply engine for the Fossilite assistant.
// Used by both the floating AIChat widget and the in-page ChatBox section so
// the two stay in sync with a single source of truth (frontend only — no API).

export type AssistantAction = "contact" | "cases";
export interface AssistantReply {
  text: string;
  action?: AssistantAction;
}

export const replyFor = (input: string): AssistantReply => {
  const q = input.toLowerCase();

  if (q.includes("demo") || q.includes("book") || q.includes("call") || q.includes("contact") || q.includes("talk"))
    return { text: "Happy to help — I'll point you to our contact form so the team can reach out within one business day.", action: "contact" };

  if (q.includes("work") || q.includes("case") || q.includes("result") || q.includes("example") || q.includes("portfolio"))
    return { text: "We've shipped 50+ products across 12 countries. Our case studies show real, measurable impact — take a look just below.", action: "cases" };

  if (q.includes("fast") || q.includes("long") || q.includes("time") || q.includes("week") || q.includes("timeline"))
    return { text: "Most MVPs ship in about six weeks — 40–60% faster delivery, with 100% human review on everything we build." };

  if (q.includes("tool") || q.includes("integrat") || q.includes("stack") || q.includes("openai") || q.includes("slack") || q.includes("anthropic"))
    return { text: "We connect natively with OpenAI, Anthropic, Slack, GitHub, Notion, Google, Figma and Zapier — so intelligence flows into your existing workflow." };

  if (q.includes("rag") || q.includes("pipeline") || q.includes("vector") || q.includes("retriev"))
    return { text: "RAG is one of our specialties: we build production retrieval pipelines with vector search, grounded context and evaluation baked in — not just a demo notebook." };

  if (q.includes("agent"))
    return { text: "An AI agent is a system that plans and takes actions toward a goal using tools and memory. We build production agents with guardrails and human oversight where it matters." };

  if (q.includes("langchain") || q.includes("langgraph") || q.includes("crewai"))
    return { text: "We use orchestration frameworks like LangChain, LangGraph and CrewAI where they fit — but we're framework-pragmatic, choosing whatever ships the most reliable system." };

  if (q.includes("build") || q.includes("do ") || q.includes("service") || q.includes("offer") || q.includes("make"))
    return { text: "We build production-grade AI systems: RAG pipelines, autonomous agents, workflow automation and data-extraction tooling. Engineers first, AI-enhanced." };

  if (q.includes("price") || q.includes("cost") || q.includes("quote") || q.includes("budget"))
    return { text: "Pricing depends on scope — share a few details with the team and we'll put together a clear quote within one business day.", action: "contact" };

  if (q.includes("sun") && q.includes("yellow"))
    return { text: "The sun looks yellow from Earth because our atmosphere scatters shorter blue wavelengths, leaving warmer tones to reach your eyes. Now — ask me something about building with AI! 🙂" };

  if (q.includes("hi") || q.includes("hello") || q.includes("hey"))
    return { text: "Hi there! 👋 I'm the Fossilite assistant. Ask me about what we build, timelines, integrations, or book a demo." };

  return { text: "Great question. Fossilite builds AI-native systems that remove operational bottlenecks and reclaim manual labour time. Want me to connect you with the team?", action: "contact" };
};
