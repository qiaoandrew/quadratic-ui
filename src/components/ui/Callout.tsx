import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/tailwind";

const calloutVariants = cva(
  "relative w-full rounded-2.5 border px-3 py-3.5 text-3.5 flex gap-x-2.5",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive-border",
        warning: "bg-warning text-warning-foreground border-warning-border",
        success: "bg-success text-success-foreground border-success-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Callout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof calloutVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(calloutVariants({ variant }), className)}
    {...props}
  />
));
Callout.displayName = "Callout";

const CalloutText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={className} {...props} />
));
CalloutText.displayName = "CalloutText";

export { Callout, CalloutText };
