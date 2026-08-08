import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import * as api from "./api";
import { Id, LeadStage, TaskColumn, Task, Workspace } from "./types";

/**
 * Workspace state.
 *
 * Every mutation goes through `api.ts` and replaces the whole workspace with
 * what came back, which is how a real client would behave against a server
 * that returns the updated resource. Components never mutate; they call an
 * action and re-render from the response.
 */
interface Store {
  data: Workspace | null;
  loading: boolean;
  /** True while a mutation is in flight, for disabling controls. */
  busy: boolean;
  setLeadStage: (id: Id, stage: LeadStage) => Promise<void>;
  convertLead: (id: Id) => Promise<void>;
  setOnboardingStep: (id: Id, stepId: Id, done: boolean) => Promise<void>;
  createProject: (onboardingId: Id, name: string) => Promise<void>;
  setTaskColumn: (id: Id, column: TaskColumn) => Promise<void>;
  createTask: (task: Omit<Task, "id">) => Promise<void>;
  markPaid: (id: Id) => Promise<void>;
  raiseInvoice: (projectId: Id, amount: number, description: string) => Promise<void>;
  reset: () => Promise<void>;
}

const Ctx = createContext<Store | null>(null);

export const WorkspaceProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Workspace | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    api.getWorkspace().then((w) => {
      if (alive) {
        setData(w);
        setLoading(false);
      }
    });
    return () => {
      alive = false;
    };
  }, []);

  /** Wraps a mutation so every action shares the same busy handling. */
  const run = useCallback(async (fn: () => Promise<Workspace>) => {
    setBusy(true);
    try {
      setData(await fn());
    } finally {
      setBusy(false);
    }
  }, []);

  const value = useMemo<Store>(
    () => ({
      data,
      loading,
      busy,
      setLeadStage: (id, stage) => run(() => api.setLeadStage(id, stage)),
      convertLead: (id) => run(() => api.convertLeadToClient(id)),
      setOnboardingStep: (id, stepId, done) => run(() => api.setOnboardingStep(id, stepId, done)),
      createProject: (onboardingId, name) => run(() => api.createProjectFromOnboarding(onboardingId, name)),
      setTaskColumn: (id, column) => run(() => api.setTaskColumn(id, column)),
      createTask: (task) => run(() => api.createTask(task)),
      markPaid: (id) => run(() => api.markInvoicePaid(id)),
      raiseInvoice: (projectId, amount, description) =>
        run(() => api.createInvoiceForProject(projectId, amount, description)),
      reset: () => run(() => api.resetWorkspace()),
    }),
    [data, loading, busy, run],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useWorkspace = (): Store => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWorkspace must be used inside a WorkspaceProvider");
  return ctx;
};
