import type { Route } from "./+types/about";
import { AboutPage } from "../pages/about.page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RRv7 UI Mode" },
    { name: "description", content: "About Page" },
  ];
}

export default function About() {
  return <AboutPage />;
}
