import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Theme } from "remix-themes";
// import { useTheme } from "~/components/theme-provider";

type Props = {
  className?: string;
  size?: number;
};

function LightDarkModeToggle({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const { setTheme } = useTheme();

  return (
    <div
      role="button"
      className={className}
      onClick={() => {
        setIsDarkMode((prevValue) => !prevValue);
        // setTheme(isDarkMode ? Theme.LIGHT : Theme.DARK);
        // document.body.classList.toggle("dark");
        // console.log(document.body.classList);
      }}
    >
      {isDarkMode ? (
        <SunIcon className="h-16 w-16" />
      ) : (
        <MoonIcon className="h-16 w-16" />
      )}
    </div>
  );
}

export { LightDarkModeToggle };
