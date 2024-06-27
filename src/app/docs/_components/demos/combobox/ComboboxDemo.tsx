"use client";

import { useState } from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

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

import { cn } from "~/utils/tailwind";

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
          className="w-[200px] justify-between gap-x-2 overflow-hidden"
        >
          <span className="truncate">
            {value
              ? FRAMEWORKS.find((framework) => framework.value === value)?.label
              : "Select framework..."}
          </span>
          <ChevronsUpDownIcon size={16} className="shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search frameworks..."
            searchIconSize={14}
            containerClassName="gap-x-2.5"
            className="py-2.5"
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
                  className="rounded-1 py-1.5 pl-8 pr-2 text-3.5"
                >
                  <span className="absolute left-2 flex size-3.5 items-center justify-center">
                    <CheckIcon
                      size={16}
                      className={cn(
                        value === framework.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </span>
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
