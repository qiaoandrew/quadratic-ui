import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/tailwind";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-3.5 font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        "destructive-outline":
          "border-destructive-border text-destructive-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        "warning-outline": "border-warning-border text-warning-foreground",
        success: "border-transparent bg-success text-success-foreground",
        "success-outline": "border-success-border text-success-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };