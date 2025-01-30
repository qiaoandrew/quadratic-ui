interface TooltipHandleMouseMoveParams extends TooltipData {
  left: number;
}

type TooltipData = {
  title: string;
  items: { key: string; label: string; value: number; color: string }[];
};

function Tooltip({ title, items }: TooltipData) {
  return (
    <div className="rounded-1.5 bg-background text-3 flex min-w-32 flex-col gap-y-1 border p-2">
      <p className="font-medium">{title}</p>
      <ul className="flex flex-col gap-y-1">
        {items.map((item) => (
          <li className="flex items-center justify-between" key={item.key}>
            <div className="flex items-center gap-x-1.5">
              <span
                className="rounded-0.5 size-2"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-muted-foreground">{item.label}</p>
            </div>
            <p className="font-medium">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Tooltip, type TooltipData, type TooltipHandleMouseMoveParams };
