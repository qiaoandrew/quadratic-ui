import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/Button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const Icon = theme === "light" ? SunIcon : MoonIcon;

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="ghost"
      subject="icon"
      size="xs"
      className="text-muted-foreground [&_svg]:size-4.5"
    >
      <Icon />
    </Button>
  );
}
