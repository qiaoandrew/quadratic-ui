"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { cn } from "~/utils/tailwind";

import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
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
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

const formSchema = z.object({
  framework: z.string({
    required_error: "Please select a framework.",
  }),
});

export default function ComboboxFormDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      framework: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast(
      <div className="flex w-full flex-col gap-y-3">
        <p className="text-3-5 font-medium">
          You submitted the following values:
        </p>
        <pre className="rounded-1-5 bg-border/30 px-3 py-2">
          <code className="text-3-5 font-mono">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      </div>,
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-80 flex-col gap-y-8"
      >
        <FormField
          control={form.control}
          name="framework"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-2">
              <FormLabel>Framework</FormLabel>
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={isOpen}
                      className="justify-between"
                    >
                      {field.value
                        ? FRAMEWORKS.find(
                            (framework) => framework.value === field.value,
                          )?.label
                        : "Select framework..."}
                      <ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="pl-8 [&>[cmdk-input]]:h-10 [&>svg]:size-3.5"
                    />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup className="p-1">
                        {FRAMEWORKS.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={() => {
                              field.onChange(framework.value);
                              setIsOpen(false);
                            }}
                            className="rounded-1 text-3-5 h-8 pl-8 [&>svg]:size-3.5"
                          >
                            <CheckIcon
                              className={cn(
                                framework.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the framework you want to use.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
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
