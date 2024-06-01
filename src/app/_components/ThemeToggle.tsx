"use client";

import { useTheme } from "next-themes";
import { MoonStarIcon, SunIcon } from "lucide-react";

import { Button } from "~/components/ui/Button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="md:size-10"
    >
      {theme === "light" ? <SunIcon size={18} /> : <MoonStarIcon size={18} />}
    </Button>
  );
}
