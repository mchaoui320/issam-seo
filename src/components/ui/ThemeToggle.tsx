"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Basculer vers le mode ${theme === "light" ? "sombre" : "clair"}`}
      className="inline-flex items-center justify-center rounded-lg p-2 transition-colors duration-200 hover:bg-accent-primary/10 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
