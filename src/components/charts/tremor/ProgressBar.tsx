// This file is derived from Tremor, licensed under the Apache License 2.0.
// Modifications were made by Andrew Qiao on January 13, 2025.
// See LICENSE-APACHE-2.0 for details.

import type { VariantProps } from "tailwind-variants";

import { tv, cn } from "~/utils/tailwind";

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
  extends React.ComponentProps<"div">,
    VariantProps<typeof progressBarVariants> {
  value?: number;
  maxValue?: number;
  showAnimation?: boolean;
  label?: string;
}

function ProgressBar({
  value = 0,
  maxValue = 100,
  showAnimation = false,
  label,
  variant,
  className,
  ...props
}: ProgressBarProps) {
  const safeValue = Math.min(maxValue, Math.max(value, 0));
  const { background, bar } = progressBarVariants({ variant });

  return (
    <div
      role="progressbar"
      aria-label="Progress bar"
      aria-valuenow={value}
      aria-valuemax={maxValue}
      tremor-id="tremor-raw"
      className={cn("flex w-full items-center", className)}
      {...props}
    >
      <div
        className={cn(
          "relative flex h-2 w-full items-center rounded-full",
          background(),
        )}
      >
        <div
          className={cn(
            "h-full flex-col rounded-full",
            bar(),
            showAnimation && "transform-gpu transition-transform",
          )}
          style={{
            width: maxValue
              ? `${(safeValue / maxValue) * 100}%`
              : `${safeValue}%`,
          }}
        />
      </div>
      {label && (
        <span className="ml-2 whitespace-nowrap text-3 font-medium">
          {label}
        </span>
      )}
    </div>
  );
}

export { ProgressBar, progressBarVariants, type ProgressBarProps };
