"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";

import { Shortcut } from "../../components/ui/Shortcut";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/Command";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden w-[300px] items-center justify-between rounded-2 border py-2.5 pl-2.5 pr-3 text-muted-foreground transition-colors hover:bg-accent/50 xl:flex 2xl:w-[360px]"
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
            <CommandItem>Test</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
