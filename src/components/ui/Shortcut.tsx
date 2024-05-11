import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/tailwind";

export interface ShortcutProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof shortcutVariants> {}

const shortcutVariants = cva(cn("text-muted-foreground tracking-widest"), {
  variants: {
    size: {
      sm: "text-3",
      default: "text-3.5",
      lg: "text-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Shortcut = React.forwardRef<HTMLParagraphElement, ShortcutProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(shortcutVariants({ size }), className)}
        {...props}
      >
        {children}
      </p>
    );
  },
);
Shortcut.displayName = "Shortcut";

export { Shortcut };
