import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { ChartColumnBigIcon, ComponentIcon, SearchIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";
import type { DocsItem } from "~/types/docs";
import { GETTING_STARTED_ITEMS } from "~/constants/docs";

import { Shortcut, ShortcutGroup } from "~/components/ui/_Menu";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/Command";

interface CommandMenuProps {
  primitivesMenuItems: DocsItem[];
  rechartsMenuItems: DocsItem[];
}

export default function CommandMenu({
  primitivesMenuItems,
  rechartsMenuItems,
}: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={cn(
          "relative hidden h-9 w-68 items-center justify-between rounded-2 border bg-background pl-7.5 pr-3 text-3.5 text-muted-foreground transition-colors",
          "xl:flex",
          "hover:bg-accent",
        )}
      >
        <SearchIcon className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2" />
        Search documentation...
        <ShortcutGroup>
          <Shortcut>⌘</Shortcut>
          <Shortcut>K</Shortcut>
        </ShortcutGroup>
      </button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Getting Started">
            {GETTING_STARTED_ITEMS.map((item) => (
              <CommandItem
                onSelect={() => handleSelect(() => router.push(item.href))}
                key={item.id}
              >
                {item.Icon && <item.Icon />}
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Primitives">
            {primitivesMenuItems.map((item) => (
              <CommandItem
                onSelect={() => handleSelect(() => router.push(item.href))}
                key={item.id}
              >
                <ComponentIcon />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Recharts">
            {rechartsMenuItems.map((item) => (
              <CommandItem
                onSelect={() => handleSelect(() => router.push(item.href))}
                key={item.id}
              >
                <ChartColumnBigIcon />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
