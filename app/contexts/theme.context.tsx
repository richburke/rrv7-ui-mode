import { createContext, useContext, useState } from "react";

type Theme = "dark" | "light";
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

const defTheme = "light";
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: defTheme,
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = defTheme,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);

  const contextValue = {
    theme,
    setTheme: async (theme: Theme) => {
      setTheme(theme);

      const _ = await fetch("/action/set-theme", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme }),
      });
    },
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
