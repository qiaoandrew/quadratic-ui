import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "tailwind-variants";

import { cn, tv } from "~/utils/tailwind";

const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    // TODO: account for this in compound variants
    "[&_svg]:size-4",
  ],
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/50",
      "destructive-outline":
        "border border-destructive-border bg-destructive text-destructive-foreground hover:bg-destructive/50",
      warning: "bg-warning text-warning-foreground hover:bg-warning/50",
      "warning-outline":
        "border border-warning-border bg-warning text-warning-foreground hover:bg-warning/50",
      success: "bg-success text-success-foreground hover:bg-success/50",
      "success-outline":
        "border border-success-border bg-success text-success-foreground hover:bg-success/50",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
      icon: "",
    },
    subject: {
      text: "",
      icon: "",
      "text-icon": "",
      "icon-text": "",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      subject: "text",
      className: "",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    subject: "text",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  // TODO: check that ref passing through
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
