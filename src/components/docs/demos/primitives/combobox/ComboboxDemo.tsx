import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
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
  return (
    <Combobox items={FRAMEWORKS}>
      <ComboboxTrigger>
        <ComboboxValue placeholder="Select framework..." />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search frameworks..." />
        <ComboboxList>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxGroup>
            {FRAMEWORKS.map((framework) => (
              <ComboboxItem value={framework.value} key={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
