"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative size-5 rounded-full border border-foreground bg-black transition-transform duration-150 dark:rotate-180"
    >
      <span className="absolute inset-y-0 left-0 w-1/2 rounded-l-full bg-white" />
    </button>
  );
}
