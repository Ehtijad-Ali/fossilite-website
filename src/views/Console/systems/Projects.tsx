import { FC, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../../theme/sharedTokens";
import { useWorkspace } from "../../../console/store";
import { TASK_COLUMNS, Task, TaskColumn } from "../../../console/types";
import {
  Btn,
  Card,
  Drawer,
  Field,
  Label,
  Row,
  SearchIcon,
  Stat,
  Tag,
  TONE,
  ViewHeader,
  boardSx,
  columnSx,
  money,
} from "../ui";

export const Projects: FC = () => {
  const T = useSharedTokens();
  const { data, busy, setTaskColumn, raiseInvoice } = useWorkspace();
  const [q, setQ] = useState("");
  const [project, setProject] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [amount, setAmount] = useState("");

  const tasks = data?.tasks ?? [];
  const projects = data?.projects ?? [];

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return tasks.filter(
      (t) =>
        (project === "All" || t.projectId === project) &&
        (!needle || `${t.title} ${t.client} ${t.assignee}`.toLowerCase().includes(needle)),
    );
  }, [tasks, q, project]);

  const open = tasks.find((t) => t.id === openId) ?? null;
  const openProject = projects.find((p) => p.id === open?.projectId);
  const overdue = filtered.filter((t) => t.column !== "Done" && t.dueDate < new Date().toISOString().slice(0, 10));

  return (
    <Box>
      <ViewHeader
        eyebrow="System 03"
        title="Projects & Tasks"
        sub="Delivery work per client. Completing a project is what raises the invoice, so this board is where the money starts."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, minmax(0,1fr))" },
          gap: "12px",
          mb: "18px",
        }}
      >
        <Stat label="Active projects" value={String(projects.length)} />
        <Stat label="Open tasks" value={String(filtered.filter((t) => t.column !== "Done").length)} accent={TONE["In Progress"]} />
        <Stat label="Done" value={String(filtered.filter((t) => t.column === "Done").length)} accent={TONE.Done} />
        <Stat label="Past due" value={String(overdue.length)} accent={TONE.Overdue} />
      </Box>

      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mb: "18px" }}>
        <Box sx={{ flex: "1 1 240px", minWidth: 0 }}>
          <Field value={q} onChange={setQ} placeholder="Search task, client, assignee…" label="Search tasks" icon={<SearchIcon />} />
        </Box>
        <Box sx={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
          {[{ id: "All", name: "All projects" }, ...projects].map((p) => (
            <Box
              key={p.id}
              component="button"
              type="button"
              onClick={() => setProject(p.id)}
              sx={{
                px: "12px",
                py: "8px",
                borderRadius: "99px",
                fontSize: "12px",
                fontFamily: "Prompt",
                cursor: "pointer",
                whiteSpace: "nowrap",
                color: project === p.id ? T.ctaPrimaryText : T.secondaryText,
                backgroundColor: project === p.id ? T.ctaPrimaryBg : "transparent",
                border: `0.5px solid ${project === p.id ? "transparent" : T.border}`,
              }}
            >
              {p.name}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={boardSx(3)}>
        {TASK_COLUMNS.map((col) => {
          const items = filtered.filter((t) => t.column === col);
          return (
            <Card key={col} sx={{ ...columnSx, backgroundColor: T.cardBgAlt }} pad="12px">
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "12px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: TONE[col] }} />
                  <Label>{col}</Label>
                </Box>
                <Typography sx={{ fontSize: "11px", fontWeight: 700, color: T.mutedText }}>{items.length}</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "9px", minHeight: "110px" }}>
                {items.map((t) => (
                  <TaskCard key={t.id} task={t} onOpen={() => setOpenId(t.id)} />
                ))}
                {items.length === 0 && (
                  <Typography sx={{ fontSize: "12px", color: T.mutedText, py: "14px" }}>Nothing here.</Typography>
                )}
              </Box>
            </Card>
          );
        })}
      </Box>

      <Drawer open={!!open} onClose={() => setOpenId(null)} title={open?.title ?? ""}>
        {open && (
          <>
            <Box sx={{ display: "flex", gap: "8px", mb: "16px", flexWrap: "wrap" }}>
              <Tag text={open.column} />
              <Tag text={open.priority} />
            </Box>
            <Row k="Client">{open.client}</Row>
            <Row k="Project">{openProject?.name ?? open.projectId}</Row>
            <Row k="Assignee">{open.assignee}</Row>
            <Row k="Due">{open.dueDate}</Row>

            <Box sx={{ mt: "18px" }}>
              <Label>Description</Label>
              <Typography sx={{ fontSize: "13.5px", lineHeight: 1.7, color: T.secondaryText, mt: "6px" }}>
                {open.description}
              </Typography>
            </Box>

            <Box sx={{ mt: "22px" }}>
              <Label>Move to</Label>
              <Box sx={{ display: "flex", gap: "7px", flexWrap: "wrap", mt: "8px" }}>
                {TASK_COLUMNS.map((c) => (
                  <Btn key={c} disabled={busy || c === open.column} onClick={() => setTaskColumn(open.id, c as TaskColumn)}>
                    {c}
                  </Btn>
                ))}
              </Box>
            </Box>

            {openProject && (
              <Box sx={{ mt: "24px", pt: "18px", borderTop: `0.5px solid ${T.border}` }}>
                <Label>Raise an invoice for this project</Label>
                <Box sx={{ display: "flex", gap: "8px", mt: "10px", flexWrap: "wrap" }}>
                  <Box
                    component="input"
                    inputMode="numeric"
                    value={amount}
                    placeholder="Amount"
                    aria-label="Invoice amount"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
                    sx={{
                      flex: "1 1 120px",
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
                    disabled={busy || !amount}
                    onClick={() => {
                      raiseInvoice(openProject.id, Number(amount), openProject.name);
                      setAmount("");
                    }}
                  >
                    Raise invoice
                  </Btn>
                </Box>
                <Typography sx={{ fontSize: "12px", color: T.mutedText, mt: "8px", lineHeight: 1.6 }}>
                  Creates a pending invoice against {openProject.client} in the Invoicing system.
                  {amount ? ` Amount: ${money(Number(amount))}.` : ""}
                </Typography>
              </Box>
            )}
          </>
        )}
      </Drawer>
    </Box>
  );
};

const TaskCard: FC<{ task: Task; onOpen: () => void }> = ({ task, onOpen }) => {
  const T = useSharedTokens();
  const late = task.column !== "Done" && task.dueDate < new Date().toISOString().slice(0, 10);
  return (
    <Box
      component="button"
      type="button"
      onClick={onOpen}
      aria-label={`Open ${task.title}`}
      sx={{
        textAlign: "left",
        width: "100%",
        p: "11px 12px",
        borderRadius: "10px",
        border: `0.5px solid ${T.border}`,
        backgroundColor: T.cardBg,
        cursor: "pointer",
        transition: "border-color 0.18s ease, transform 0.18s ease",
        "&:hover": { borderColor: "#C3A87C", transform: "translateY(-1px)" },
        "&:focus-visible": { outline: "2px solid #C3A87C", outlineOffset: "2px" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: "8px", mb: "7px" }}>
        <Tag text={task.priority} />
        <Typography sx={{ fontSize: "10.5px", color: late ? TONE.Overdue : T.mutedText, whiteSpace: "nowrap" }}>
          {task.dueDate}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "13px", fontWeight: 600, color: T.headline, lineHeight: 1.3 }}>
        {task.title}
      </Typography>
      <Typography
        sx={{ fontSize: "11px", color: T.mutedText, mt: "3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {task.client} · {task.assignee}
      </Typography>
    </Box>
  );
};

export default Projects;
