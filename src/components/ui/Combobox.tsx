import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";

import { Button } from "~/components/ui/Button";
import {
  CommandEmpty,
  CommandInput,
  CommandGroup,
  CommandItem,
  Command,
  CommandList,
} from "~/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/Popover";

function Combobox(props: React.ComponentProps<typeof Popover>) {
  return <Popover {...props} />;
}

function ComboboxTrigger({
  isOpen,
  children,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "variant" | "size" | "subject"> & {
  isOpen: boolean;
}) {
  return (
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={isOpen}
        className={cn(
          "w-48 items-center justify-between gap-x-2",
          "[&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:opacity-50",
          className,
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
        <ChevronsUpDownIcon />
      </Button>
    </PopoverTrigger>
  );
}

function ComboboxContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof PopoverContent>) {
  return (
    <PopoverContent {...props} className={cn("w-48 p-0", className)}>
      <Command>{children}</Command>
    </PopoverContent>
  );
}

function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandInput>) {
  return (
    <CommandInput
      className={cn("[&>[cmdk-input]]:h-10 [&>svg]:size-3.5", className)}
      {...props}
    />
  );
}

function ComboboxEmpty(props: React.ComponentProps<typeof CommandEmpty>) {
  return <CommandEmpty {...props} />;
}

function ComboboxList(props: React.ComponentProps<typeof CommandList>) {
  return <CommandList {...props} />;
}

function ComboboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandGroup>) {
  return <CommandGroup {...props} className={cn("p-1", className)} />;
}

function ComboboxItem({
  isActive,
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandItem> & { isActive: boolean }) {
  return (
    <CommandItem
      {...props}
      className={cn("h-8 rounded-1 pl-8 text-3.5 [&>svg]:size-3.5", className)}
    >
      <CheckIcon className={cn(isActive ? "opacity-100" : "opacity-0")} />
      <span>{children}</span>
    </CommandItem>
  );
}

export {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
};
