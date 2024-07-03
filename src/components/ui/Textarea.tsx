import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/tailwind";

const textareaVariants = cva(
  cn(
    "min-h- w-full border border-input bg-background ring-offset-background",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ),
  {
    variants: {
      size: {
        sm: "text-3.5 rounded-1.5 px-2.5 py-2",
        default: "text-3.5 rounded-2 px-3 py-2.5",
        lg: "text-4 rounded-2.5 px-3.5 py-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
