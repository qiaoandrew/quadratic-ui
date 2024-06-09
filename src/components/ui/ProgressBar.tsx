"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/utils/tailwind";

const progressBarVariants = tv({
  slots: {
    background: "",
    bar: "",
  },
  variants: {
    variant: {
      default: {
        background: "bg-blue-200 dark:bg-blue-500/30",
        bar: "bg-blue-500 dark:bg-blue-500",
      },
      neutral: {
        background: "bg-gray-200 dark:bg-gray-500/40",
        bar: "bg-gray-500 dark:bg-gray-500",
      },
      warning: {
        background: "bg-yellow-200 dark:bg-yellow-500/30",
        bar: "bg-yellow-500 dark:bg-yellow-500",
      },
      error: {
        background: "bg-red-200 dark:bg-red-500/30",
        bar: "bg-red-500 dark:bg-red-500",
      },
      success: {
        background: "bg-emerald-200 dark:bg-emerald-500/30",
        bar: "bg-emerald-500 dark:bg-emerald-500",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ProgressBarProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  value?: number;
  max?: number;
  showAnimation?: boolean;
  label?: string;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      max = 100,
      label,
      showAnimation = false,
      variant,
      className,
      ...props
    }: ProgressBarProps,
    forwardedRef,
  ) => {
    const safeValue = Math.min(max, Math.max(value, 0));
    const { background, bar } = progressBarVariants({ variant });

    return (
      <div
        ref={forwardedRef}
        className={cn("flex w-full items-center gap-x-4", className)}
        {...props}
      >
        <div
          className={cn(
            "relative flex h-2 w-full items-center rounded-full",
            background(),
          )}
          aria-label="progress bar"
          aria-valuenow={value}
          aria-valuemax={max}
        >
          <div
            className={cn("h-full flex-col rounded-full", bar())}
            style={{
              width: max ? `${(safeValue / max) * 100}%` : `${safeValue}%`,
              transition: showAnimation ? "all 1s" : "",
            }}
          />
        </div>
        {label ? (
          <span className="leading-none whitespace-nowrap text-3.5 font-medium">
            {label}
          </span>
        ) : null}
      </div>
    );
  },
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar, progressBarVariants, type ProgressBarProps };
