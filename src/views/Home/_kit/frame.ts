// Shared "monograph frame" — the bordered, rounded container that wraps each
// Home section's content so every section reads as one consistent card.
// Spread into a section's inner (max-width) container's `sx`.
export const sectionFrameSx = {
  border: "0.5px solid rgba(244,236,221,0.12)",
  borderRadius: { xs: "18px", md: "24px" },
  px: { xs: "22px", sm: "34px", md: "52px" },
  py: { xs: "36px", sm: "44px", md: "60px" },
};
