"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonStarIcon, SparklesIcon, SunIcon } from "lucide-react";

import { Button } from "~/components/ui/Button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex size-9 items-center justify-center rounded-2 border text-foreground md:size-10">
        {/* bejeweled */}
        <SparklesIcon size={18} />
      </div>
    );
  }

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
