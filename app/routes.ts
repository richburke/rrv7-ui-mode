import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    ...prefix("action", [
        route("set-theme", "routes/actions/set-theme.ts"),
    ]),
] satisfies RouteConfig;
