// This file is derived from Tremor, licensed under the Apache License 2.0.
// Modifications were made by Andrew Qiao on January 12, 2025.
// See LICENSE-APACHE-2.0 for details.

import type { VariantProps } from "tailwind-variants";

import { tv, cn } from "~/utils/tailwind";

const progressCircleVariants = tv({
  slots: {
    background: "",
    circle: "",
  },
  variants: {
    variant: {
      default: {
        background: "stroke-blue-200 dark:stroke-blue-500/30",
        circle: "stroke-blue-500 dark:stroke-blue-500",
      },
      neutral: {
        background: "stroke-gray-200 dark:stroke-gray-500/40",
        circle: "stroke-gray-500 dark:stroke-gray-500",
      },
      warning: {
        background: "stroke-yellow-200 dark:stroke-yellow-500/30",
        circle: "stroke-yellow-500 dark:stroke-yellow-500",
      },
      error: {
        background: "stroke-red-200 dark:stroke-red-500/30",
        circle: "stroke-red-500 dark:stroke-red-500",
      },
      success: {
        background: "stroke-emerald-200 dark:stroke-emerald-500/30",
        circle: "stroke-emerald-500 dark:stroke-emerald-500",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ProgressCircleProps
  extends Omit<React.ComponentProps<"svg">, "size">,
    VariantProps<typeof progressCircleVariants> {
  value?: number;
  maxValue?: number;
  showAnimation?: boolean;
  radius?: number;
  strokeWidth?: number;
  children?: React.ReactNode;
}

export default function ProgressCircle({
  value = 0,
  maxValue = 100,
  showAnimation = true,
  radius = 32,
  strokeWidth = 6,
  variant,
  className,
  children,
  ...props
}: ProgressCircleProps) {
  const safeValue = Math.min(maxValue, Math.max(0, value));
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (safeValue / maxValue) * circumference;

  const { background, circle } = progressCircleVariants({ variant });

  return (
    <div
      role="progressbar"
      aria-label="Progress circle"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={maxValue}
      data-max={maxValue}
      data-value={safeValue ?? null}
      tremor-id="tremor-raw"
      className="relative"
    >
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        className={cn("-rotate-90 transform", className)}
        {...props}
      >
        <circle
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke=""
          strokeLinecap="round"
          className={cn("transition-colors ease-linear", background())}
        />
        {safeValue >= 0 && (
          <circle
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            fill="transparent"
            stroke=""
            strokeLinecap="round"
            className={cn(
              "transition-colors ease-linear",
              circle(),
              showAnimation &&
                "transform-gpu transition-all duration-300 ease-in-out",
            )}
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export { ProgressCircle, type ProgressCircleProps };
