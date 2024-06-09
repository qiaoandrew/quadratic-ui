"use client";

import * as React from "react";

import { cn } from "~/utils/tailwind";

type Bar<T> = T & {
  key?: string;
  href?: string;
  value: number;
  name: string;
};

interface BarItemProps<T = unknown> {
  item: Bar<T>;
  width: number;
  showAnimation: boolean;
  onValueChange?: (payload: Bar<T>) => void;
}

const BarItem = <T,>({
  item,
  width,
  showAnimation,
  onValueChange,
}: BarItemProps<T>) => {
  const Component = onValueChange ? "button" : "div";

  return (
    <Component
      key={item.key ?? item.name}
      onClick={() => onValueChange?.(item)}
      className={cn(
        "group w-full rounded-1",
        onValueChange && "cursor-pointer hover:bg-accent/50",
      )}
    >
      <div
        className={cn(
          "flex h-8 items-center rounded-1 bg-blue-200 transition-all dark:bg-blue-900",
          onValueChange &&
            "group-hover:bg-blue-300 group-hover:dark:bg-blue-800",
          showAnimation && "duration-800",
        )}
        style={{ width: `${width}%` }}
      >
        <div className="absolute left-2 flex max-w-full">
          {item.href ? (
            <a
              href={item.href}
              className="rounded truncate whitespace-nowrap text-3.5 hover:underline hover:underline-offset-2"
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
            >
              {item.name}
            </a>
          ) : (
            <p className="truncate whitespace-nowrap text-3.5">{item.name}</p>
          )}
        </div>
      </div>
    </Component>
  );
};

interface BarLabelProps<T = unknown> {
  item: Bar<T>;
  valueFormatter: (value: number) => string;
}

const BarLabel = <T,>({ item, valueFormatter }: BarLabelProps<T>) => (
  <div className="mb-1.5 flex h-8 items-center justify-end">
    <p className="truncate whitespace-nowrap text-3.5">
      {valueFormatter(item.value)}
    </p>
  </div>
);

interface BarListInnerProps<T = unknown>
  extends React.HTMLAttributes<HTMLDivElement> {
  data: Bar<T>[];
  valueFormatter?: (value: number) => string;
  showAnimation?: boolean;
  onValueChange?: (payload: Bar<T>) => void;
  sortOrder?: "ascending" | "descending" | "none";
}

const BarListInner = <T,>(
  {
    data = [],
    valueFormatter = (value) => value.toString(),
    showAnimation = false,
    onValueChange,
    sortOrder = "descending",
    className,
    ...props
  }: BarListInnerProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const sortedData = React.useMemo(() => {
    if (sortOrder === "none") return data;

    return [...data].sort((a, b) =>
      sortOrder === "ascending" ? a.value - b.value : b.value - a.value,
    );
  }, [data, sortOrder]);

  const widths = React.useMemo(() => {
    const maxValue = Math.max(...sortedData.map((item) => item.value), 0);

    return sortedData.map((item) =>
      item.value === 0 ? 0 : Math.max((item.value / maxValue) * 100, 2),
    );
  }, [sortedData]);

  return (
    <div
      ref={ref}
      className={cn("flex justify-between gap-x-6", className)}
      aria-sort={sortOrder}
      {...props}
    >
      <div className="relative flex w-full flex-col gap-y-1.5">
        {sortedData.map((item, index) => (
          <BarItem
            key={item.key ?? item.name}
            item={item}
            width={widths[index]!}
            onValueChange={onValueChange}
            showAnimation={showAnimation}
          />
        ))}
      </div>
      <div>
        {sortedData.map((item) => (
          <BarLabel
            key={item.key ?? item.name}
            item={item}
            valueFormatter={valueFormatter}
          />
        ))}
      </div>
    </div>
  );
};

BarListInner.displayName = "BarList";

const BarList = React.forwardRef(BarListInner) as <T>(
  p: BarListInnerProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof BarListInner>;

export { BarList, type BarListInnerProps as BarListProps };
