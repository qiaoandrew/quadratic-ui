"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function DataTableVirtualizedDemo() {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: 100_00,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <div ref={parentRef} className="h-[400px] w-full overflow-auto">
      <div
        className="relative w-full"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            className="absolute left-0 top-0 w-full"
            style={{
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
            key={virtualItem.key}
          >
            Row {virtualItem.index}
          </div>
        ))}
      </div>
    </div>
  );
}
