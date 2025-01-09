"use client";

import { createContext, useContext, useState } from "react";
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

type ComboboxDisplayValue = {
  label: string;
  value: string;
};

type ComboboxContextProps = {
  value: string | undefined;
  setValue: (value: string | undefined) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items: ComboboxDisplayValue[];
};

const ComboboxContext = createContext<ComboboxContextProps>({
  value: undefined,
  setValue: () => {
    return;
  },
  isOpen: false,
  setIsOpen: () => {
    return;
  },
  items: [],
});

interface ComboboxProps extends React.ComponentProps<typeof Popover> {
  value?: string;
  onChange?: (value: string | undefined) => void;
  defaultValue?: string;
  items?: ComboboxDisplayValue[];
}

function Combobox({
  value: controlledValue,
  onChange: setControlledValue,
  defaultValue,
  items = [],
  ...props
}: ComboboxProps) {
  const [uncontrolledValue, setUnControlledValue] = useState<
    string | undefined
  >(defaultValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = controlledValue ?? uncontrolledValue;
  const setValue = setControlledValue ?? setUnControlledValue;

  return (
    <ComboboxContext.Provider
      value={{ value, setValue, isOpen, setIsOpen, items }}
    >
      <Popover open={isOpen} onOpenChange={setIsOpen} {...props} />
    </ComboboxContext.Provider>
  );
}

function ComboboxTrigger({
  children,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "variant" | "size" | "subject">) {
  const { isOpen } = useContext(ComboboxContext);

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

interface ComboboxValueProps {
  placeholder: string;
}

function ComboboxValue({ placeholder }: ComboboxValueProps) {
  const { value, items } = useContext(ComboboxContext);

  return value
    ? items.find((item) => item.value === value)?.label
    : placeholder;
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

interface ComboboxItemProps
  extends Omit<React.ComponentProps<typeof CommandItem>, "onSelect"> {
  value: string;
  onSelect?: (value: string | undefined) => void;
}

function ComboboxItem({
  value: itemValue,
  onSelect,
  className,
  children,
  ...props
}: ComboboxItemProps) {
  const { value, setValue, setIsOpen } = useContext(ComboboxContext);

  return (
    <CommandItem
      value={itemValue}
      onSelect={(currentValue) => {
        const newValue = currentValue === value ? undefined : currentValue;
        setValue(newValue);
        onSelect?.(newValue);
        setIsOpen(false);
      }}
      className={cn("h-8 rounded-1 pl-8 text-3.5 [&>svg]:size-3.5", className)}
      {...props}
    >
      <CheckIcon
        className={cn(value === itemValue ? "opacity-100" : "opacity-0")}
      />
      <span>{children}</span>
    </CommandItem>
  );
}

export {
  Combobox,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
};
