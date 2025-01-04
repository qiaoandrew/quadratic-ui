import type { VariantProps } from "tailwind-variants";

import { tv, cn } from "~/utils/tailwind";

const inputVariants = tv({
  base: [
    "flex w-full items-center border border-input bg-transparent ring-offset-background",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  variants: {
    inputSize: {
      xs: "h-8 rounded-1 px-2 text-3.5",
      sm: "h-9 rounded-1.5 px-2.5 text-3.5",
      md: "h-10 rounded-2 px-3 text-3.5",
      lg: "h-11 rounded-2.5 px-3.5 text-4",
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
    <input className={cn(inputVariants({ inputSize }), className)} {...props} />
  );
}

export { Input };
