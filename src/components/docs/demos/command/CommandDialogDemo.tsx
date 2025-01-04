"use client";

import { useState, useEffect } from "react";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandShortcutGroup,
} from "~/components/ui/Command";

export default function CommandDialogDemo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="flex items-center gap-x-2 text-3.5 text-muted-foreground">
        Press{" "}
        <kbd className="inline-flex select-none items-center gap-x-1 rounded-1 bg-muted px-2 py-0.5 font-mono text-3 font-medium">
          <span className="text-3.5">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon size={18} className="mr-2" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <SmileIcon size={18} className="mr-2" />
              <span>Search Emojis</span>
            </CommandItem>
            <CommandItem>
              <CalculatorIcon size={18} className="mr-2" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <UserIcon />
              <span>Profile</span>
              <CommandShortcutGroup>
                <CommandShortcut>⌘</CommandShortcut>
                <CommandShortcut>P</CommandShortcut>
              </CommandShortcutGroup>
            </CommandItem>
            <CommandItem>
              <CreditCardIcon />
              <span>Billing</span>
              <CommandShortcutGroup>
                <CommandShortcut>⌘</CommandShortcut>
                <CommandShortcut>B</CommandShortcut>
              </CommandShortcutGroup>
            </CommandItem>
            <CommandItem>
              <SettingsIcon />
              <span>Settings</span>
              <CommandShortcutGroup>
                <CommandShortcut>⌘</CommandShortcut>
                <CommandShortcut>S</CommandShortcut>
              </CommandShortcutGroup>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
