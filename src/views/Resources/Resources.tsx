import { FC, useMemo, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import { PageHero } from "../../components";
import { useInView } from "../../hooks/useInView";
import Img1 from "../../assets/Images/CodeImages/CodeImage1Light.png";
import Img2 from "../../assets/Images/CodeImages/CodeImage2Light.png";
import Img4 from "../../assets/Images/CodeImages/CodeImage4Light.png";
import GifRag from "../../assets/Images/CodeImages/CodeImageOneLight.gif";
import GifChat from "../../assets/Images/CodeImages/CodeImage3LightChat.gif";
import GifExtraction from "../../assets/Images/CodeImages/CodeImage4LightExtraction.gif";

interface Post {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  initials: string;
  date: string;
  read: string;
  featured?: boolean;
}

const POSTS: Post[] = [
  {
    title: "Building RAG pipelines that survive production",
    excerpt: "Retrieval that works in a demo rarely survives real traffic. Here's how we design grounding, re-ranking and evaluation to hold up under load.",
    category: "RAG", image: GifRag, author: "Daniel Martins", initials: "DM", date: "Jul 2, 2026", read: "8 min read", featured: true,
  },
  {
    title: "The anatomy of a reliable AI agent",
    excerpt: "Planning, tools, memory and guardrails — the four parts every production agent needs, and where teams usually cut corners.",
    category: "AI Agents", image: GifChat, author: "Amara Osei", initials: "AO", date: "Jun 24, 2026", read: "6 min read",
  },
  {
    title: "Why we review 100% of AI output by hand",
    excerpt: "Automation removes friction; judgement stays human. A look at the review process behind everything we ship.",
    category: "Engineering", image: Img1, author: "Sofia Reyes", initials: "SR", date: "Jun 18, 2026", read: "5 min read",
  },
  {
    title: "From 40 hours to 40 minutes: automating ops",
    excerpt: "A breakdown of one workflow automation that reclaimed a third of a team's week — and the metrics that proved it.",
    category: "Case Studies", image: GifExtraction, author: "Daniel Martins", initials: "DM", date: "Jun 9, 2026", read: "7 min read",
  },
  {
    title: "LangChain, LangGraph or the raw SDK?",
    excerpt: "We're framework-pragmatic. Here's how we decide which orchestration layer actually ships the most reliable system.",
    category: "Engineering", image: Img4, author: "Amara Osei", initials: "AO", date: "May 30, 2026", read: "9 min read",
  },
  {
    title: "Vector search, explained without the hype",
    excerpt: "Embeddings, similarity and hybrid retrieval — the mental model you need before adding a vector DB to your stack.",
    category: "RAG", image: GifRag, author: "Sofia Reyes", initials: "SR", date: "May 21, 2026", read: "6 min read",
  },
  {
    title: "Designing agent guardrails that actually hold",
    excerpt: "Prompts aren't guardrails. A practical guide to constraints, validation and human checkpoints for autonomous systems.",
    category: "AI Agents", image: GifChat, author: "Daniel Martins", initials: "DM", date: "May 12, 2026", read: "7 min read",
  },
  {
    title: "Shipping an MVP in six weeks: our playbook",
    excerpt: "The exact cadence we use to go from operational map to a production system — without cutting the corners that matter.",
    category: "Product", image: Img1, author: "Amara Osei", initials: "AO", date: "Apr 28, 2026", read: "5 min read",
  },
  {
    title: "Connecting AI to your existing stack",
    excerpt: "Native integrations beat rip-and-replace. How we thread intelligence into the tools your team already lives in.",
    category: "Engineering", image: Img2, author: "Sofia Reyes", initials: "SR", date: "Apr 15, 2026", read: "6 min read",
  },
];

const CATEGORIES = ["All", "Engineering", "AI Agents", "RAG", "Case Studies", "Product"];

const Avatar: FC<{ initials: string; T: ReturnType<typeof useSharedTokens> }> = ({ initials, T }) => (
  <Box sx={{
    width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
    display: "flex", alignItems: "center", justifyContent: "center",
    backgroundColor: T.surfaceSubtle, border: `0.5px solid ${T.border}`,
    color: T.primaryText, fontSize: "10px", fontWeight: 700,
  }}>
    {initials}
  </Box>
);

const CategoryPill: FC<{ label: string; T: ReturnType<typeof useSharedTokens> }> = ({ label, T }) => (
  <Box sx={{
    display: "inline-flex", alignItems: "center", gap: "6px",
    px: "10px", py: "5px", borderRadius: "99px",
    backgroundColor: "rgba(255,255,255,0.92)", border: `0.5px solid ${T.border}`,
    backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
  }}>
    <Box sx={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#C3A87C" }} />
    <Typography sx={{ fontSize: "10.5px", fontWeight: 600, color: T.headline, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</Typography>
  </Box>
);

const ArticleCard: FC<{ post: Post; index: number; T: ReturnType<typeof useSharedTokens> }> = ({ post, index, T }) => {
  const { ref, visible } = useInView(0.12);
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex", flexDirection: "column",
        borderRadius: "16px", overflow: "hidden",
        border: `0.5px solid ${T.border}`, backgroundColor: T.cardBg,
        boxShadow: T.boxShadow, cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${(index % 3) * 90}ms,
                     transform 0.6s cubic-bezier(0.22,1,0.36,1) ${(index % 3) * 90}ms,
                     border-color 0.3s ease, box-shadow 0.3s ease`,
        "&:hover": {
          borderColor: T.accent,
          boxShadow: T.isDark ? "0 22px 50px rgba(0,0,0,0.5)" : "0 22px 50px rgba(0,25,50,0.13)",
          "& .art-img": { transform: "scale(1.05)" },
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden", aspectRatio: "16 / 10", backgroundColor: T.surfaceSubtle }}>
        <Box component="img" src={post.image} alt={post.title} className="art-img" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }} />
        <Box sx={{ position: "absolute", top: "12px", left: "12px" }}><CategoryPill label={post.category} T={T} /></Box>
      </Box>
      <Box sx={{ p: "22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography sx={{ fontSize: "17px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", lineHeight: 1.3, letterSpacing: "-0.01em", mb: "10px" }}>
          {post.title}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: T.secondaryText, lineHeight: 1.65, flex: 1, mb: "20px" }}>
          {post.excerpt}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", pt: "16px", borderTop: `0.5px solid ${T.border}` }}>
          <Avatar initials={post.initials} T={T} />
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontSize: "12.5px", fontWeight: 600, color: T.primaryText, lineHeight: 1.3 }}>{post.author}</Typography>
            <Typography sx={{ fontSize: "11px", color: T.secondaryText, lineHeight: 1.3 }}>{post.date} · {post.read}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const Resources: FC = () => {
  const T = useSharedTokens();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(6);
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featured = POSTS.find((p) => p.featured)!;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => !p.featured)
      .filter((p) => category === "All" || p.category === category)
      .filter((p) => !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
  }, [category, query]);

  const shown = filtered.slice(0, visible);

  const changeCategory = (c: string) => { setCategory(c); setVisible(6); };

  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subEmail.trim());

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      <PageHero
        eyebrow="Resources"
        title="Insights from the"
        titleAccent="build."
        subtitle="Field notes on shipping production AI — engineering deep-dives, agent design, retrieval, and the lessons behind our case studies."
      />

      {/* Featured post */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pt: { xs: "48px", md: "64px" } }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
              gap: { xs: "0", md: "0" },
              borderRadius: "20px",
              overflow: "hidden",
              border: `0.5px solid ${T.border}`,
              backgroundColor: T.cardBg,
              boxShadow: T.boxShadow,
              cursor: "pointer",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              "&:hover": { borderColor: T.accent, "& .feat-img": { transform: "scale(1.04)" } },
            }}
          >
            <Box sx={{ position: "relative", overflow: "hidden", minHeight: { xs: "220px", md: "auto" }, backgroundColor: T.surfaceSubtle }}>
              <Box component="img" src={featured.image} alt={featured.title} className="feat-img" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }} />
              <Box sx={{ position: "absolute", top: "16px", left: "16px", display: "flex", gap: "8px" }}>
                <CategoryPill label={featured.category} T={T} />
                <CategoryPill label="Featured" T={T} />
              </Box>
            </Box>
            <Box sx={{ p: { xs: "28px", md: "44px" }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography sx={{ fontSize: { xs: "24px", md: "30px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt", lineHeight: 1.2, letterSpacing: "-0.02em", mb: "14px" }}>
                {featured.title}
              </Typography>
              <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.75, mb: "24px" }}>
                {featured.excerpt}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Avatar initials={featured.initials} T={T} />
                <Box>
                  <Typography sx={{ fontSize: "13px", fontWeight: 600, color: T.primaryText, lineHeight: 1.3 }}>{featured.author}</Typography>
                  <Typography sx={{ fontSize: "11.5px", color: T.secondaryText, lineHeight: 1.3 }}>{featured.date} · {featured.read}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Filters + search */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pt: { xs: "48px", md: "64px" } }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto", display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { xs: "stretch", md: "center" }, gap: "18px" }}>
          {/* Category tabs */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <Box
                  key={c}
                  component="button"
                  type="button"
                  onClick={() => changeCategory(c)}
                  sx={{
                    px: "15px", py: "8px", borderRadius: "99px", cursor: "pointer", font: "inherit", fontFamily: "Prompt",
                    fontSize: "13px", fontWeight: 500,
                    border: `0.5px solid ${active ? "transparent" : T.border}`,
                    backgroundColor: active ? T.ctaPrimaryBg : "transparent",
                    color: active ? T.ctaPrimaryText : T.secondaryText,
                    transition: "all 0.2s ease",
                    "&:hover": active ? {} : { borderColor: T.accent, color: T.primaryText },
                  }}
                >
                  {c}
                </Box>
              );
            })}
          </Box>

          {/* Search */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", px: "14px", py: "9px", borderRadius: "10px", border: `0.5px solid ${T.border}`, backgroundColor: T.cardBg, minWidth: { md: "220px" }, "&:focus-within": { borderColor: T.accent } }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke={T.secondaryText} strokeWidth="1.7" /><path d="m20 20-3.2-3.2" stroke={T.secondaryText} strokeWidth="1.7" strokeLinecap="round" /></svg>
            <Box
              component="input"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setQuery(e.target.value); setVisible(6); }}
              placeholder="Search articles…"
              sx={{ flex: 1, border: "none", outline: "none", background: "transparent", color: T.primaryText, fontSize: "13.5px", fontFamily: "Prompt", "&::placeholder": { color: T.placeholder } }}
            />
          </Box>
        </Box>
      </Box>

      {/* Grid */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "40px", md: "56px" } }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
          {shown.length > 0 ? (
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: { xs: "20px", md: "24px" } }}>
              {shown.map((p, i) => (
                <ArticleCard key={p.title + i} post={p} index={i} T={T} />
              ))}
            </Box>
          ) : (
            <Box sx={{ textAlign: "center", py: "60px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "8px" }}>No articles found</Typography>
              <Typography sx={{ fontSize: "14px", color: T.secondaryText }}>Try a different category or search term.</Typography>
            </Box>
          )}

          {visible < filtered.length && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: "36px", md: "48px" } }}>
              <Button
                onClick={() => setVisible((v) => v + 3)}
                sx={{
                  px: "26px", py: "12px", borderRadius: "9px", textTransform: "none",
                  border: `0.5px solid ${T.ctaSecBorder}`, color: T.primaryText, fontSize: "14px", fontWeight: 500,
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                  "&:hover": { borderColor: T.accent, transform: "translateY(-2px)" },
                }}
              >
                Load more articles
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Subscribe band */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pb: { xs: "80px", md: "120px" }, pt: { xs: "16px", md: "24px" } }}>
        <Box sx={{
          maxWidth: "1180px", mx: "auto", borderRadius: "24px",
          border: `1px solid ${T.gridBorder}`, backgroundColor: T.cardBgAlt, boxShadow: T.boxShadow,
          p: { xs: "36px 26px", md: "56px" }, textAlign: "center",
        }}>
          <Typography sx={{ fontSize: { xs: "26px", sm: "34px" }, fontWeight: 600, color: T.headline, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em", mb: "12px" }}>
            Get insights in your inbox
          </Typography>
          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.7, maxWidth: "440px", mx: "auto", mb: "28px" }}>
            One thoughtful email a month on building production AI. No spam, unsubscribe anytime.
          </Typography>

          {subscribed ? (
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: "10px", px: "20px", py: "13px", borderRadius: "10px", border: `0.5px solid ${T.accent}`, backgroundColor: T.cardBg }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke={T.accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <Typography sx={{ fontSize: "14px", color: T.headline, fontFamily: "Prompt" }}>You're subscribed — thanks!</Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "10px", maxWidth: "440px", mx: "auto" }}>
              <Box
                component="input"
                value={subEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubEmail(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" && hasEmail) setSubscribed(true); }}
                placeholder="your@email.com"
                type="email"
                sx={{
                  flex: 1, px: "16px", py: "13px", borderRadius: "9px",
                  border: `0.5px solid ${T.inputBorder}`, backgroundColor: T.cardBg,
                  color: T.inputText, fontSize: "14px", fontFamily: "Prompt", outline: "none",
                  "&:focus": { borderColor: T.accent }, "&::placeholder": { color: T.placeholder },
                }}
              />
              <Button
                onClick={() => { if (hasEmail) setSubscribed(true); }}
                sx={{
                  px: "24px", py: "13px", borderRadius: "9px", textTransform: "none",
                  backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText, fontSize: "14px", fontWeight: 500,
                  transition: "background-color 0.25s ease, transform 0.2s ease",
                  "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Resources;
