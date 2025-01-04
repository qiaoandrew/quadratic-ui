import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandShortcutGroup,
} from "~/components/ui/Command";

export default function CommandDemo() {
  return (
    <Command className="max-w-128 border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            <span>Search Emojis</span>
          </CommandItem>
          <CommandItem>
            <CalculatorIcon />
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
    </Command>
  );
}
