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
  SunIcon,
} from "lucide-react";

import { Shortcut } from "~/components/ui/Shortcut";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/Command";

import { GETTING_STARTED_ITEMS } from "~/constants/docs";
import type { DocItem } from "~/types/types";

interface CommandMenu {
  primitivesMenuItems: DocItem[];
  compositesMenuItems: DocItem[];
  chartsMenuItems: DocItem[];
}

export default function CommandMenu({
  primitivesMenuItems,
  compositesMenuItems,
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
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden h-10 w-[300px] items-center justify-between rounded-2 border pl-2.5 pr-3 text-muted-foreground transition-colors hover:bg-accent/50 xl:flex 2xl:w-[360px]"
      >
        <div className="flex items-center gap-x-1.5">
          <SearchIcon size={16} />
          <p className="text-3.5">Search documentation...</p>
        </div>
        <Shortcut size="default">⌘K</Shortcut>
      </button>

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Getting Started">
            {GETTING_STARTED_ITEMS.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
              >
                {item.Icon && <item.Icon size={18} className="mr-2" />}
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Primitives">
            {primitivesMenuItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
              >
                <DiamondIcon size={18} className="mr-2" />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Composites">
            {compositesMenuItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
              >
                <ComponentIcon size={18} className="mr-2" />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Charts">
            {chartsMenuItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => onSelect(() => router.push(item.href))}
              >
                <BarChart2Icon size={18} className="mr-2" />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => onSelect(() => setTheme("light"))}>
              <SunIcon size={18} className="mr-2" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => onSelect(() => setTheme("dark"))}>
              <MoonIcon size={18} className="mr-2" />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
