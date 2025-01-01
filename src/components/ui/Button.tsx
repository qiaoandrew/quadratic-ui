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
      xs: "",
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
      size: "xs",
      subject: ["text", "text-icon", "icon-text"],
      className: "h-8 gap-x-1 rounded-1.5 px-2 text-3.5 [&_svg]:size-3",
    },
    {
      size: "sm",
      subject: ["text", "text-icon", "icon-text"],
      className: "h-9 gap-x-1 rounded-2 px-2.5 text-3.5 [&_svg]:size-3.5",
    },
    {
      size: "md",
      subject: ["text", "text-icon", "icon-text"],
      className: "h-10 gap-x-1.5 rounded-2 px-3.5 text-3.5 [&_svg]:size-3.5",
    },
    {
      size: "lg",
      subject: ["text", "text-icon", "icon-text"],
      className: "h-12 gap-x-2 rounded-2.5 px-4.5 text-4 [&_svg]:size-4.5",
    },
    {
      size: "xs",
      subject: "text-icon",
      className: "pr-1.5",
    },
    {
      size: "xs",
      subject: "icon-text",
      className: "pl-1.5",
    },
    {
      size: "sm",
      subject: "text-icon",
      className: "pr-2",
    },
    {
      size: "sm",
      subject: "icon-text",
      className: "pl-2",
    },
    {
      size: "md",
      subject: "text-icon",
      className: "pr-2.5",
    },
    {
      size: "md",
      subject: "icon-text",
      className: "pl-2.5",
    },
    {
      size: "lg",
      subject: "text-icon",
      className: "pr-3",
    },
    {
      size: "lg",
      subject: "icon-text",
      className: "pl-3",
    },
    {
      size: "xs",
      subject: "icon",
      className: "size-8 rounded-1.5 [&_svg]:size-4",
    },
    {
      size: "sm",
      subject: "icon",
      className: "size-9 rounded-2 [&_svg]:size-4.5",
    },
    {
      size: "md",
      subject: "icon",
      className: "size-10 rounded-2 [&_svg]:size-5",
    },
    {
      size: "lg",
      subject: "icon",
      className: "size-12 rounded-2.5 [&_svg]:size-6",
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
