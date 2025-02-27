import * as TogglePrimitive from "@radix-ui/react-toggle";
import type { VariantProps } from "tailwind-variants";

import { tv, cn } from "~/utils/tailwind";

const toggleVariants = tv({
  base: [
    "rounded-1.5 text-3.5 ring-offset-background relative inline-flex items-center justify-center gap-x-2 bg-transparent font-medium transition-colors",
    "hover:bg-muted hover:text-muted-foreground",
    "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: "",
      outline: "border-input border",
    },
    size: {
      sm: "h-8 min-w-8 px-2 [&_svg]:size-3.5",
      md: "h-9 min-w-9 px-2.5 [&_svg]:size-4",
      lg: "h-10 min-w-10 px-3 [&_svg]:size-4.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
