import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/tailwind";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-3.5 font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "text-foreground border",
        destructive: "bg-destructive text-destructive-foreground",
        "destructive-outline":
          "border border-destructive-border text-destructive-foreground",
        warning: "bg-warning text-warning-foreground",
        "warning-outline":
          "border border-warning-border text-warning-foreground",
        success: "bg-success text-success-foreground",
        "success-outline":
          "border border-success-border text-success-foreground",
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

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
