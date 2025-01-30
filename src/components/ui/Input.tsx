import type { VariantProps } from "tailwind-variants";

import { tv, cn } from "~/utils/tailwind";

const inputVariants = tv({
  base: [
    "border-input bg-background ring-offset-background flex w-full border",
    "placeholder:text-muted-foreground",
    "focus-visible:ring-ring focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  variants: {
    inputSize: {
      xs: "rounded-1.5 text-3.5 h-8 px-2",
      sm: "rounded-2 text-3.5 h-9 px-2.5",
      md: "rounded-2 text-3.5 h-10 px-3",
      lg: "rounded-2.5 text-4 h-11 px-3.5",
    },
  },
  defaultVariants: {
    inputSize: "md",
  },
});

function Input({
  className,
  inputSize,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input className={cn(inputVariants({ inputSize, className }))} {...props} />
  );
}

export { Input };
