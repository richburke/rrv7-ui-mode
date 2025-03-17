# The Tao of Light/Dark Mode
## Implementing light and dark mode with React Router&nbsp;v7

This repo provides a sample implementation for theme switching in React Router&nbsp;v7. If you'd like to read a walk-through of this implementation, you can [find it here](https://richburkedotbot.hashnode.dev/tao-of-lightdark-mode).

Here's a summary of what needs to be done:
* Create [a component to handle theme switching](https://github.com/richburke/rrv7-ui-mode/blob/master/app/components/theme-switcher.tsx).
* Create [an action to handle setting the theme](https://github.com/richburke/rrv7-ui-mode/blob/master/app/routes/actions/set-theme.ts).
* Add functionality for [handling the session cookie](https://github.com/richburke/rrv7-ui-mode/blob/master/app/.server/sessions.server.ts).

* Create [a React Context for applying the theme state](https://github.com/richburke/rrv7-ui-mode/blob/master/app/contexts/theme.context.tsx).
* Update functionality for [the layout and its associated loader](https://github.com/richburke/rrv7-ui-mode/blob/master/app/root.tsx).

Here are the relevant files:
* `app/components/theme-switcher.tsx`
* `app/routes/actions/set-theme.ts`
* `app/routes.ts` (particularly the `action` route)
* `app/.server/sessions/sessions.server.tsx`
* `app/contexts/theme.context.tsx`
* `app/root.tsx` (particularly the `loader()`, `Layout()` and `Document()` functions)