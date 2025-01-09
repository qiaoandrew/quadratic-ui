"use client";

import { useState } from "react";

import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxList,
} from "~/components/ui/Combobox";

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

export default function ComboboxDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Combobox open={isOpen} onOpenChange={setIsOpen}>
      <ComboboxTrigger isOpen={isOpen}>
        {value
          ? FRAMEWORKS.find((framework) => framework.value === value)?.label
          : "Select framework..."}
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search frameworks..." />
        <ComboboxList>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxGroup>
            {FRAMEWORKS.map((framework) => (
              <ComboboxItem
                isActive={value === framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setIsOpen(false);
                }}
                key={framework.value}
              >
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
