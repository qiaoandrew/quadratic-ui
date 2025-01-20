interface TooltipContentProps<T> {
  datum: T;
  getLabel: (d: T) => string;
  getValue: (d: T) => number;
  axisLabel?: string;
}

function TooltipContent<T>({
  datum,
  getLabel,
  getValue,
  axisLabel,
}: TooltipContentProps<T>) {
  return (
    <div className="flex min-w-28 flex-col gap-y-1 rounded-1.5 border bg-background p-2 text-3">
      <p className="font-medium text-foreground">{getLabel(datum)}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1.5">
          <div className="size-2 rounded-0.5 bg-[hsl(var(--chart-1))]" />
          <p className="text-muted-foreground">{axisLabel}</p>
        </div>
        <p className="font-medium text-foreground">{getValue(datum)}</p>
      </div>
    </div>
  );
}

export { TooltipContent };
