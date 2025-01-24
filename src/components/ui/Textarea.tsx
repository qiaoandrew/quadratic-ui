import type { VariantProps } from "tailwind-variants";

import { tv, cn } from "~/utils/tailwind";

const textareaVariants = tv({
  base: [
    "border-input bg-background ring-offset-background relative flex min-h-24 w-full border",
    "placeholder:text-muted-foreground",
    "focus-visible:ring-ring focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  variants: {
    size: {
      xs: "rounded-1 text-3-5 px-2 py-1.5",
      sm: "rounded-1-5 text-3-5 px-2.5 py-2",
      md: "rounded-2 text-3-5 px-3 py-2.5",
      lg: "rounded-2-5 text-4 px-3.5 py-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function Textarea({
  className,
  size,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      className={cn(textareaVariants({ size, className }))}
      {...props}
    />
  );
}

export { Textarea };
