import { FC, useState } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../../theme/sharedTokens";
import { useWorkspace } from "../../../console/store";
import { Btn, Card, Label, Stat, Tag, TONE, ViewHeader } from "../ui";

const pct = (done: number, total: number) => (total ? Math.round((done / total) * 100) : 0);

export const Onboarding: FC = () => {
  const T = useSharedTokens();
  const { data, busy, setOnboardingStep, createProject } = useWorkspace();
  const [naming, setNaming] = useState<string | null>(null);
  const [projectName, setProjectName] = useState("");

  const obs = data?.onboardings ?? [];
  const projects = data?.projects ?? [];
  const live = obs.filter((o) => o.status === "Live").length;
  const blocked = obs.filter((o) => o.status === "Blocked").length;

  return (
    <Box>
      <ViewHeader
        eyebrow="System 02"
        title="Automated Onboarding"
        sub="Each won client runs the same six steps. Completing all of them lets you open the delivery project, which is the next link in the chain."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, minmax(0,1fr))" },
          gap: "12px",
          mb: "20px",
        }}
      >
        <Stat label="Clients onboarding" value={String(obs.length)} />
        <Stat label="Live" value={String(live)} accent={TONE.Live} />
        <Stat label="Blocked" value={String(blocked)} accent={TONE.Blocked} />
        <Stat label="Projects opened" value={String(projects.length)} accent={TONE.Qualified} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {obs.map((o) => {
          const done = o.steps.filter((s) => s.done).length;
          const p = pct(done, o.steps.length);
          const hasProject = projects.some((pr) => pr.onboardingId === o.id);
          const complete = done === o.steps.length;

          return (
            <Card key={o.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "10px",
                  mb: "14px",
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontSize: "17px", fontWeight: 600, color: T.headline, lineHeight: 1.25 }}>
                    {o.client}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: T.mutedText, mt: "3px" }}>
                    Started {o.startedAt} · target go-live {o.targetGoLive}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center", flexShrink: 0 }}>
                  <Tag text={o.status} />
                  <Typography sx={{ fontSize: "17px", fontWeight: 700, color: complete ? TONE.Live : T.headline }}>
                    {p}%
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  height: "8px",
                  borderRadius: "99px",
                  backgroundColor: T.surfaceSubtle,
                  overflow: "hidden",
                  mb: "16px",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: `${p}%`,
                    borderRadius: "99px",
                    backgroundColor: complete ? TONE.Live : "#C3A87C",
                    transition: "width 0.45s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: "6px 18px",
                }}
              >
                {o.steps.map((s) => (
                  <Box
                    key={s.id}
                    component="button"
                    type="button"
                    disabled={busy}
                    aria-pressed={s.done}
                    onClick={() => setOnboardingStep(o.id, s.id, !s.done)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      textAlign: "left",
                      width: "100%",
                      background: "none",
                      border: "none",
                      p: "7px 6px",
                      borderRadius: "8px",
                      cursor: busy ? "wait" : "pointer",
                      "&:hover": { backgroundColor: T.surfaceSubtle },
                      "&:focus-visible": { outline: "2px solid #C3A87C", outlineOffset: "1px" },
                    }}
                  >
                    <Box
                      sx={{
                        width: "19px",
                        height: "19px",
                        borderRadius: "50%",
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: s.done ? TONE.Live : "transparent",
                        border: s.done ? "none" : `1.5px solid ${T.border}`,
                      }}
                    >
                      {s.done && (
                        <Box component="svg" viewBox="0 0 24 24" sx={{ width: "11px", height: "11px" }}>
                          <path d="M5 13l4 4L19 7" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </Box>
                      )}
                    </Box>
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          color: s.done ? T.primaryText : T.mutedText,
                          lineHeight: 1.3,
                        }}
                      >
                        {s.label}
                      </Typography>
                      <Typography sx={{ fontSize: "10.5px", color: T.mutedText }}>{s.owner}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {complete && !hasProject && (
                <Box sx={{ mt: "18px", pt: "16px", borderTop: `0.5px solid ${T.border}` }}>
                  {naming === o.id ? (
                    <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                      <Box
                        component="input"
                        autoFocus
                        value={projectName}
                        placeholder="Project name"
                        aria-label="Project name"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)}
                        sx={{
                          flex: "1 1 200px",
                          minWidth: 0,
                          border: `0.5px solid ${T.border}`,
                          borderRadius: "9px",
                          px: "12px",
                          py: "9px",
                          fontSize: "13px",
                          fontFamily: "Prompt",
                          background: "transparent",
                          color: T.primaryText,
                          outline: "none",
                        }}
                      />
                      <Btn
                        variant="primary"
                        disabled={busy || !projectName.trim()}
                        onClick={() => {
                          createProject(o.id, projectName.trim());
                          setProjectName("");
                          setNaming(null);
                        }}
                      >
                        Open project
                      </Btn>
                      <Btn onClick={() => setNaming(null)}>Cancel</Btn>
                    </Box>
                  ) : (
                    <Btn variant="primary" onClick={() => setNaming(o.id)} disabled={busy}>
                      Onboarding complete, open the project
                    </Btn>
                  )}
                </Box>
              )}

              {hasProject && (
                <Typography sx={{ fontSize: "12.5px", color: T.mutedText, mt: "16px" }}>
                  Project open in the Projects system.
                </Typography>
              )}
            </Card>
          );
        })}
      </Box>

      {obs.length === 0 && (
        <Card>
          <Label>Nothing yet</Label>
          <Typography sx={{ fontSize: "14px", color: T.secondaryText, mt: "8px" }}>
            Win a lead in the CRM and its onboarding appears here.
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default Onboarding;
