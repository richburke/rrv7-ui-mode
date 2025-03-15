import { MoonIcon, SunIcon } from "lucide-react";
import { Theme, useTheme } from "~/contexts/theme.context";

function ThemeSwitcher() {
  const { theme, applyTheme } = useTheme();

  return (
    <a
      onClick={() =>
        applyTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
      }
    >
      {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
    </a>
  );
}

export { ThemeSwitcher };
