import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "~/contexts/theme.context";

function LightDarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <a
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </a>
  );
}

export { LightDarkModeToggle };
