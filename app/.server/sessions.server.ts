import { createCookieSessionStorage } from "react-router";
import { Theme } from "~/contexts/theme.context";

type SessionData = {
  theme: Theme;
};

type SessionFlashData = {
  error: string;
};

const isProduction = process.env.NODE_ENV === "production";

const sessionName = "__session";
const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: sessionName,
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: ["53cr3t"],
      ...(isProduction ? { domain: "your-domain.com", secure: true } : {}),
    },
  });

export { getSession, commitSession, destroySession };
