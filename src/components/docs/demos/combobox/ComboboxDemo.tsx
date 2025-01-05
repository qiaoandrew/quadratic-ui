"use client";

import { useState } from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";

import { Button } from "~/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/Popover";

export default function ComboboxDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-48 justify-between overflow-hidden pr-8"
        >
          <span className="truncate">
            {value
              ? FRAMEWORKS.find((framework) => framework.value === value)?.label
              : "Select framework..."}
          </span>
          <ChevronsUpDownIcon className="absolute right-3.5 top-1/2 size-4 shrink-0 -translate-y-1/2 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0">
        <Command>
          <CommandInput
            placeholder="Search frameworks..."
            className="pl-8 [&>[cmdk-input]]:h-10 [&>svg]:size-3.5"
          />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="p-1">
              {FRAMEWORKS.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setIsOpen(false);
                  }}
                  className="h-8 rounded-1 pl-8 text-3.5 [&>svg]:size-3.5"
                >
                  <CheckIcon
                    className={cn(
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span className="truncate">{framework.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const FRAMEWORKS = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
