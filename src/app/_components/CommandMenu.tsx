"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  BarChart2Icon,
  ComponentIcon,
  DiamondIcon,
  MoonIcon,
  SearchIcon,
  SquareAsteriskIcon,
  SunIcon,
} from "lucide-react";

import { GETTING_STARTED_ITEMS } from "~/constants/docs";
import type { DocItem } from "~/types/types";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "~/components/ui/Command";
import { Button } from "~/components/ui/Button";
import { cn } from "~/utils/tailwind";

interface CommandMenu {
  primitivesMenuItems: DocItem[];
  compositesMenuItems: DocItem[];
  patternsMenuItems: DocItem[];
  chartsMenuItems: DocItem[];
}

export default function CommandMenu({
  primitivesMenuItems,
  compositesMenuItems,
  patternsMenuItems,
  chartsMenuItems,
}: CommandMenu) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prevOpen) => !prevOpen);
      }
    };
    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  const onSelect = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className={cn(
          "hidden h-10 w-80 items-center justify-between rounded-2 pl-2.5 pr-3 text-muted-foreground",
          "hover:bg-accent/50 hover:text-muted-foreground",
          "xl:flex 2xl:w-96",
        )}
      >
        <span className="flex items-center gap-x-1.5">
          <SearchIcon size={16} />
          <p className="text-3.5">Search documentation...</p>
        </span>
        <CommandShortcut>⌘K</CommandShortcut>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search documentatin..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Getting Started">
            {GETTING_STARTED_ITEMS.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
                className="gap-x-2"
              >
                {item.Icon && <item.Icon size={18} />}
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Primitives">
            {primitivesMenuItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
                className="gap-x-2"
              >
                <DiamondIcon size={18} />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Composites">
            {compositesMenuItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
                className="gap-x-2"
              >
                <ComponentIcon size={18} />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Patterns">
            {patternsMenuItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
                className="gap-x-2"
              >
                <SquareAsteriskIcon size={18} />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Charts">
            {chartsMenuItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
                className="gap-x-2"
              >
                <BarChart2Icon size={18} />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => onSelect(() => setTheme("light"))}
              className="gap-x-2"
            >
              <SunIcon size={18} />
              Light
            </CommandItem>
            <CommandItem
              onSelect={() => onSelect(() => setTheme("dark"))}
              className="gap-x-2"
            >
              <MoonIcon size={18} />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
