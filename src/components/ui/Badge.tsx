import type { VariantProps } from "tailwind-variants";

import { cn, tv } from "~/utils/tailwind";

const badgeVariants = tv({
  base: "inline-flex h-7 items-center rounded-full px-2.5 text-3.5 font-medium",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      outline: "border text-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      "destructive-outline":
        "border border-destructive-border text-destructive-foreground",
      warning: "bg-warning text-warning-foreground",
      "warning-outline": "border border-warning-border text-warning-foreground",
      success: "bg-success text-success-foreground",
      "success-outline": "border border-success-border text-success-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
