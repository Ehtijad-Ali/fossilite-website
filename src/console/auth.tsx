import { FC, ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";

/**
 * Demo-only gate for the POC console.
 *
 * This is NOT authentication. The credentials are in the client bundle, the
 * check happens in the browser, and the session is a sessionStorage flag that
 * anyone can set from the console. It exists so the demo has a front door and
 * so the routing, redirect and layout work is already done.
 *
 * Replacing it means: keep `useAuth()`'s shape, point `signIn` at a real
 * token endpoint, and move the route guard server-side. No screen changes.
 */
const DEMO_USERNAME = "fossilite";
const DEMO_PASSWORD = "fossiliteaidev";
const SESSION_KEY = "fossilite.console.session.v1";

interface Auth {
  signedIn: boolean;
  user: string | null;
  signIn: (username: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signOut: () => void;
}

const Ctx = createContext<Auth | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY);
    } catch {
      return null;
    }
  });

  const signIn = useCallback(async (username: string, password: string) => {
    // Slight delay so the button's pending state is real rather than decorative.
    await new Promise((r) => setTimeout(r, 420));
    if (username.trim() !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
      return { ok: false, error: "Those credentials are not recognised." };
    }
    try {
      sessionStorage.setItem(SESSION_KEY, username.trim());
    } catch {
      /* storage unavailable; session stays in memory */
    }
    setUser(username.trim());
    return { ok: true };
  }, []);

  const signOut = useCallback(() => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      /* nothing to clear */
    }
    setUser(null);
  }, []);

  const value = useMemo<Auth>(
    () => ({ signedIn: user !== null, user, signIn, signOut }),
    [user, signIn, signOut],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useAuth = (): Auth => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside an AuthProvider");
  return ctx;
};

/** Shown on the sign-in screen so a reviewer can get in without asking. */
export const DEMO_HINT = { username: DEMO_USERNAME, password: DEMO_PASSWORD };
