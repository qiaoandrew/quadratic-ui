// This file is derived from Tremor, licensed under the Apache License 2.0.
// Modifications were made by Andrew Qiao on January 13, 2025.
// See LICENSE-APACHE-2.0 for details.

// Tremor CategoryBar [v0.0.3]

"use client";

import { useMemo } from "react";

import {
  AvailableChartColors,
  type AvailableChartColorsKeys,
  getColorClassName,
} from "~/utils/tremor";
import { cn } from "~/utils/tailwind";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/Tooltip";

const getMarkerBackgroundColor = (
  marker: number | undefined,
  values: number[],
  colors: AvailableChartColorsKeys[],
): string => {
  if (marker === undefined) {
    return "";
  }

  if (marker === 0) {
    for (let idx = 0; idx < values.length; idx++) {
      const value = values.at(idx) ?? 0;
      const color = colors.at(idx) ?? "gray";

      if (value > 0) {
        return getColorClassName(color, "bg");
      }
    }
  }

  let prefixSum = 0;
  for (let idx = 0; idx < values.length; idx++) {
    const value = values.at(idx) ?? 0;
    const color = colors.at(idx) ?? "gray";
    prefixSum += value;

    if (prefixSum >= marker) {
      return getColorClassName(color, "bg");
    }
  }

  return getColorClassName(colors.at(values.length - 1)!, "bg");
};

const getPositionLeft = (
  value: number | undefined,
  maxValue: number,
): number => (value ? (value / maxValue) * 100 : 0);

const sumNumericArray = (arr: number[]) =>
  arr.reduce((prefixSum, num) => prefixSum + num, 0);

const formatNumber = (num: number): string => {
  if (Number.isInteger(num)) {
    return num.toString();
  }
  return num.toFixed(2);
};

interface CategoryBarProps extends React.ComponentProps<"div"> {
  values: number[];
  colors?: AvailableChartColorsKeys[];
  marker?: { value: number; tooltip?: string; showAnimation?: boolean };
  showLabels?: boolean;
}

function CategoryBar({
  values = [],
  colors = AvailableChartColors,
  marker,
  showLabels = true,
  ...props
}: CategoryBarProps) {
  const markerBackgroundColor = useMemo(
    () => getMarkerBackgroundColor(marker?.value, values, colors),
    [marker, values, colors],
  );

  const maxValue = useMemo(() => sumNumericArray(values), [values]);

  const adjustedMarkerValeus = useMemo(() => {
    if (marker === undefined) return undefined;
    if (marker.value < 0) return 0;
    if (marker.value > maxValue) return maxValue;
    return marker.value;
  }, [marker, maxValue]);

  const markerPositionLeft: number = useMemo(
    () => getPositionLeft(adjustedMarkerValeus, maxValue),
    [adjustedMarkerValeus, maxValue],
  );

  return (
    <div
      aria-label="Category bar"
      aria-valuenow={marker?.value}
      tremor-id="tremor-raw"
      {...props}
    >
      {showLabels && <CategoryBarLabels values={values} />}
      <div className="relative flex h-2 w-full items-center">
        <div className="flex h-full grow items-center gap-x-0.5 overflow-hidden rounded-full">
          {values.map((value, idx) => {
            const barColor = colors[idx] ?? "gray";
            const percentage = (value / maxValue) * 100;

            return (
              <div
                className={cn(
                  "h-full",
                  getColorClassName(barColor, "bg"),
                  percentage === 0 && "hidden",
                )}
                style={{ width: `${percentage}%` }}
                key={`item-${idx}`}
              />
            );
          })}
        </div>
        {marker !== undefined && (
          <div
            className={cn(
              "absolute w-2 -translate-x-1/2",
              marker.showAnimation && "transform-gpu transition-transform",
            )}
            style={{
              left: `${markerPositionLeft}%`,
            }}
          >
            {marker.tooltip ? (
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div
                      aria-hidden="true"
                      className={cn(
                        "ring-background relative mx-auto h-4 w-1 rounded-full ring-2",
                        markerBackgroundColor,
                      )}
                    >
                      <div
                        aria-hidden
                        className="absolute size-7 -translate-x-[45%] -translate-y-[15%]"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={8}>
                    {marker.tooltip}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <div
                className={cn(
                  "ring-background mx-auto h-4 w-1 rounded-full ring-2",
                  markerBackgroundColor,
                )}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface CategoryBarLabelsProps {
  values: number[];
}

function CategoryBarLabels({ values }: CategoryBarLabelsProps) {
  const sumValues = useMemo(() => sumNumericArray(values), [values]);
  let prefixSum = 0;
  let sumConsecutiveHiddenLabels = 0;

  return (
    <div className="text-3-5 relative mb-2 flex h-5 w-full font-medium">
      <div className="absolute bottom-0 left-0 flex items-center">0</div>
      {values.map((widthPercentage, idx) => {
        prefixSum += widthPercentage;

        const showLabel =
          (widthPercentage >= 0.1 * sumValues ||
            sumConsecutiveHiddenLabels >= 0.09 * sumValues) &&
          sumValues - prefixSum >= 0.1 * sumValues &&
          prefixSum >= 0.1 * sumValues &&
          prefixSum < 0.9 * sumValues;

        sumConsecutiveHiddenLabels = showLabel
          ? 0
          : (sumConsecutiveHiddenLabels += widthPercentage);

        const widthPositionLeft = getPositionLeft(widthPercentage, sumValues);

        return (
          <div
            className="flex items-center justify-end pr-0.25"
            style={{ width: `${widthPositionLeft}%` }}
            key={`item-${idx}`}
          >
            {showLabel && (
              <span className="block translate-x-1/2 leading-none tabular-nums">
                {formatNumber(prefixSum)}
              </span>
            )}
          </div>
        );
      })}
      <div className="absolute right-0 bottom-0 flex items-center">
        {formatNumber(sumValues)}
      </div>
    </div>
  );
}

export { CategoryBar, type CategoryBarProps };
