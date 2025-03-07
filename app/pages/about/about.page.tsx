import { NavLink } from "react-router";
import { LightDarkModeToggle } from "~/components/light-dark-mode-toggle";

export function AboutPage() {
  return (
    <main className="flex flex-col gap-2 items-center justify-center pt-16 pb-4">
      <h1>About.</h1>
      <div className="fixed top-[calc(50%_-_12px)]"></div>
      <LightDarkModeToggle />
      <NavLink to="/">home</NavLink>
    </main>
  );
}
