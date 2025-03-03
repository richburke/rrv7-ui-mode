import type { Route } from "./+types/home";
import { HomePage } from "../pages/home/home.page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RRv7 UI Mode" },
    { name: "description", content: "Home Page" },
  ];
}

export default function Home() {
  return <HomePage />;
}
