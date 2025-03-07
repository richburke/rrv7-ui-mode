import type { Route } from "../+types/about";
import { getSession, commitSession } from "~/.server/sessions.server";

export async function action({ request }: Route.ActionArgs) {
    const session = await getSession(request.headers.get("Cookie"));
    const data = await request.json()
    session.set("theme", data.theme);
    
    return JSON.stringify({
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
}