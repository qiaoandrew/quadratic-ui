import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "tailwind-variants";

import { cn, tv } from "~/utils/tailwind";

const buttonVariants = tv({
  base: [
    "relative inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors",
    "focus-visible:ring-ring focus-visible:ring-1 focus-visible:outline-hidden",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline:
        "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/50",
      "destructive-outline":
        "border-destructive-border bg-destructive text-destructive-foreground hover:bg-destructive/50 border",
      warning: "bg-warning text-warning-foreground hover:bg-warning/50",
      "warning-outline":
        "border-warning-border bg-warning text-warning-foreground hover:bg-warning/50 border",
      success: "bg-success text-success-foreground hover:bg-success/50",
      "success-outline":
        "border-success-border bg-success text-success-foreground hover:bg-success/50 border",
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
      className: "rounded-1-5 text-3-5 h-8 gap-x-1 px-2 [&_svg]:size-3",
    },
    {
      size: "sm",
      subject: ["text", "text-icon", "icon-text"],
      className: "rounded-2 text-3-5 h-9 gap-x-1 px-2.5 [&_svg]:size-3.5",
    },
    {
      size: "md",
      subject: ["text", "text-icon", "icon-text"],
      className: "rounded-2 text-3-5 h-10 gap-x-1.5 px-3.5 [&_svg]:size-3.5",
    },
    {
      size: "lg",
      subject: ["text", "text-icon", "icon-text"],
      className: "rounded-2-5 text-4 h-12 gap-x-2 px-4.5 [&_svg]:size-4.5",
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
      className: "rounded-1-5 size-8 [&_svg]:size-4",
    },
    {
      size: "sm",
      subject: "icon",
      className: "rounded-2 size-9 [&_svg]:size-4.5",
    },
    {
      size: "md",
      subject: "icon",
      className: "rounded-2 size-10 [&_svg]:size-5",
    },
    {
      size: "lg",
      subject: "icon",
      className: "rounded-2-5 size-12 [&_svg]:size-6",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    subject: "text",
  },
});

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  subject,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, subject, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
