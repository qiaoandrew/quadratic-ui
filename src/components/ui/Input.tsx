import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/tailwind";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const inputVariants = cva(
  cn(
    "flex w-full border border-input bg-transparent ring-offset-background",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ),
  {
    variants: {
      inputSize: {
        sm: "text-3.5 rounded-1.5 px-2.5 py-2",
        default: "text-3.5 rounded-2 px-3 py-2.5",
        lg: "text-4 rounded-2.5 px-3.5 py-3",
      },
    },
    defaultVariants: {
      inputSize: "default",
    },
  },
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ inputSize }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
