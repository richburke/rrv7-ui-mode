import { createCookieSessionStorage } from "react-router";

type SessionData = {
  theme: string;
};

type SessionFlashData = {
  error: string;
};

const isProduction = process.env.NODE_ENV === "production";

// @todo
// dotenv

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: ["53cr3t"],
      ...(isProduction ? { domain: "your-domain.com", secure: true } : {}),
    },
  });

export { getSession, commitSession, destroySession };
