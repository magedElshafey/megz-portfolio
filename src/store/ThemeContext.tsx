// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme ? (JSON.parse(savedTheme) as ThemeMode) : "light";
    setMode(theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(mode));
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
