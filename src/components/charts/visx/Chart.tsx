"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface ChartContextProps {
  width: number;
}

const ChartContext = createContext<ChartContextProps | null>(null);

function useChart() {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

interface ChartContainerProps {
  className?: string;
  children: React.ReactNode;
}

function ChartContainer({ className, children }: ChartContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      if (entry) {
        setWidth(entry.contentRect.width);
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ChartContext.Provider value={{ width }}>
      <div ref={containerRef} className={`relative ${className}`}>
        {children}
      </div>
    </ChartContext.Provider>
  );
}

export { ChartContainer, useChart };
