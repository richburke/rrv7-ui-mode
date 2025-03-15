import { NavLink } from "react-router";
import { ThemeSwitcher } from "~/components/theme-switcher";

export function HomePage() {
  return (
    <main className="flex flex-col gap-2 items-center justify-center pt-16 pb-4">
      <h1>Welcome!</h1>
      <div className="fixed top-[calc(50%_-_12px)]"></div>
      <ThemeSwitcher />
      <NavLink to="/about">about</NavLink>
    </main>
  );
}
