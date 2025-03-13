import type { Route } from "../+types/about";
import { getSession, commitSession } from "~/.server/sessions.server";
import { Theme } from '~/contexts/theme.context'

export async function action({ request }: Route.ActionArgs) {
    const session = await getSession(request.headers.get("Cookie"));

    const theme = !session.has("theme") ? Theme.DARK : session.get("theme");
  
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    session.set("theme", newTheme);
  
    const cookie = await commitSession(session);
    return new Response(null, {
      headers: {
        "Set-Cookie": cookie,
      },
    });
}