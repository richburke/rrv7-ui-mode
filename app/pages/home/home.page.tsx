import { NavLink } from "react-router";
import { MoonIcon, SunIcon } from "lucide-react";

export function HomePage() {
  const isDarkMode = false;

  return (
    <main className="flex flex-col gap-2 items-center justify-center pt-16 pb-4">
      <h1>Home!</h1>
      <div className="fixed top-[calc(50%_-_12px)]"></div>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
      <NavLink to="/about">about</NavLink>
    </main>
  );
}
