import { createContext, useContext, useState } from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}
export const themeDefault = Theme.LIGHT;

type ThemeProviderProps = {
  children: React.ReactNode;
  startingTheme?: Theme;
  storageKey?: string;
};

const ThemeContext = createContext<{
  theme: Theme;
  applyTheme: (theme: Theme) => void;
  setTheme: (theme: Theme) => void;
}>({
  theme: themeDefault,
  applyTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  startingTheme = themeDefault,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(startingTheme);

  const contextValue = {
    theme,
    applyTheme: async (theme: Theme) => {
      setTheme(theme);

      const _ = await fetch("/action/set-theme", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme }),
      });
    },
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
