// This file is derived from Tremor, licensed under the Apache License 2.0.
// Modifications were made by Andrew Qiao on January 13, 2025.
// See LICENSE-APACHE-2.0 for details.

// Tremor BarList [v0.1.1]

import { useMemo } from "react";

import { cn } from "~/utils/tailwind";

import _Link from "~/components/ui/_Link";

type Bar<T> = T & {
  key?: string;
  href?: string;
  value: number;
  name: string;
};

interface BarListProps<T = unknown> extends React.ComponentProps<"div"> {
  data: Bar<T>[];
  valueFormatter?: (value: number) => string;
  onValueChange?: (payload: Bar<T>) => void;
  sortOrder?: "ascending" | "descending" | "none";
}

function BarList<T>({
  data = [],
  valueFormatter = (value) => value.toString(),
  onValueChange,
  sortOrder = "none",
  className,
  ...props
}: BarListProps<T>) {
  const Comp = onValueChange ? "button" : "div";

  const sortedData = useMemo(() => {
    if (sortOrder === "none") {
      return data;
    }

    return [...data].sort((a, b) =>
      sortOrder === "ascending" ? a.value - b.value : b.value - a.value,
    );
  }, [data, sortOrder]);

  const widths = useMemo(() => {
    const maxValue = Math.max(...sortedData.map((item) => item.value), 0);

    return sortedData.map(
      (item) =>
        item.value === 0 ? 0 : Math.max((item.value / maxValue) * 100),
      2,
    );
  }, [sortedData]);

  return (
    <div
      aria-sort={sortOrder}
      tremor-id="tremor-raw"
      className={cn(
        "flex w-full items-center justify-between gap-x-6",
        className,
      )}
      {...props}
    >
      <div className="relative flex grow flex-col gap-y-1.5">
        {sortedData.map((item, idx) => (
          <Comp
            onClick={() => onValueChange?.(item)}
            className={cn(
              "group rounded-1 w-full",
              onValueChange && "hover:bg-accent cursor-pointer",
            )}
            key={item.key ?? idx}
          >
            <div
              className={cn(
                "rounded-1 flex h-8 items-center bg-blue-200 transition-colors dark:bg-blue-900",
                onValueChange &&
                  "group-hover:bg-blue-300 dark:group-hover:bg-blue-800",
              )}
              style={{ width: `${widths[idx]}%` }}
            >
              <div className="absolute left-2 flex max-w-full pr-2">
                {item.href ? (
                  <_Link
                    href={item.href}
                    className={cn(
                      "rounded-1 text-3.5 truncate whitespace-nowrap",
                      "hover:underline hover:underline-offset-2",
                    )}
                  >
                    {item.name}
                  </_Link>
                ) : (
                  <p className="rounded-1 text-3.5 truncate whitespace-nowrap">
                    {item.name}
                  </p>
                )}
              </div>
            </div>
          </Comp>
        ))}
      </div>
      <div className="flex shrink-0 flex-col gap-y-1.5">
        {sortedData.map((item) => (
          <div
            className="flex h-8 items-center justify-end"
            key={item.key ?? item.name}
          >
            <p className="text-3.5 truncate whitespace-nowrap">
              {valueFormatter(item.value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { BarList, type BarListProps };
