import type { VariantProps } from "tailwind-variants";

import { tv, cn } from "~/utils/tailwind";

const calloutVariants = tv({
  base: [
    "rounded-2.5 text-3.5 relative flex w-full gap-x-2.5 border px-3 py-3.5",
    "[&>svg]:size-5 [&>svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: "border-border bg-background text-foreground",
      destructive:
        "border-destructive-border bg-destructive text-destructive-foreground",
      warning: "border-warning-border bg-warning text-warning-foreground",
      success: "border-success-borde bg-success text-success-foreground",
      info: "border-info-border bg-info text-info-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Callout({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof calloutVariants>) {
  return (
    <div
      role="alert"
      className={cn(calloutVariants({ variant, className }))}
      {...props}
    />
  );
}

function CalloutText({ className, ...props }: React.ComponentProps<"h5">) {
  return <h5 className={className} {...props} />;
}

export { Callout, CalloutText };
