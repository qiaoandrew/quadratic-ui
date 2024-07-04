import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/tailwind";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "destructive-outline"
  | "warning"
  | "warning-outline"
  | "success"
  | "success-outline";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors transition-opacity",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        "destructive-outline":
          "border border-destructive-border text-destructive-foreground hover:bg-destructive/30",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90",
        "warning-outline":
          "border border-warning-border text-warning-foreground hover:bg-warning/30",
        success: "bg-success text-success-foreground hover:bg-success/90",
        "success-outline":
          "border border-success-border text-success-foregroundcess hover:bg-success/30",
      },
      size: {
        sm: "px-2 py-1.5 rounded-1.5 text-3.5",
        default: "px-3.5 py-2.5 rounded-2 text-3.5",
        lg: "px-4.5 py-3 rounded-2.5 text-4",
        icon: "size-9 rounded-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
