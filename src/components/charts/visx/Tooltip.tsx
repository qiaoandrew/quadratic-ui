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
    <div className="rounded-1-5 bg-background text-3 flex min-w-28 flex-col gap-y-1 border p-2">
      <p className="text-foreground font-medium">{getLabel(datum)}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1.5">
          <div className="rounded-0-5 size-2 bg-[hsl(var(--chart-1))]" />
          <p className="text-muted-foreground">{axisLabel}</p>
        </div>
        <p className="text-foreground font-medium">{getValue(datum)}</p>
      </div>
    </div>
  );
}

export { TooltipContent };
