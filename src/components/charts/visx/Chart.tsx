"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { AxisScale, TickLabelProps } from "@visx/axis";
import type { ScaleInput } from "@visx/scale";
import debounce from "lodash.debounce";

interface ChartContextProps {
  config: ChartConfig;
  containerWidth: number;
}

const ChartContext = createContext<ChartContextProps | null>(null);

function useChartConfig() {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

interface ChartContainerProps {
  configOverrides: Partial<ChartConfig>;
  className?: string;
  children: React.ReactNode;
}

function ChartContainer({
  configOverrides,
  className,
  children,
}: ChartContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const config: ChartConfig = useMemo(
    () => ({ ...DEFAULT_CONFIG, ...configOverrides }),
    [configOverrides],
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = debounce((entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    }, 100);

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      handleResize.cancel();
    };
  }, []);

  return (
    <ChartContext.Provider value={{ config, containerWidth }}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </ChartContext.Provider>
  );
}

interface ChartConfig {
  margin: { top: number; right: number; bottom: number; left: number };
  tickValues: number[];
  axisLabelOffset: Partial<{
    top: number;
    right: number;
    bottom: number;
    left: number;
  }>;
  axisLabelClassName: string;
  axisLabels: Partial<{
    top: string;
    right: string;
    bottom: string;
    left: string;
  }>;
  tickLabelProps: TickLabelProps<ScaleInput<AxisScale>>;
}

const DEFAULT_CONFIG: ChartConfig = {
  margin: { top: 12, right: 4, bottom: 64, left: 64 },
  tickValues: [0, 60, 120, 180, 240, 300, 360],
  axisLabelOffset: { top: 0, right: 0, bottom: 24, left: 44 },
  axisLabelClassName: "fill-foreground text-3-5 font-medium font-sans",
  axisLabels: { top: "", right: "", bottom: "", left: "" },
  tickLabelProps: {
    fill: "hsl(var(--muted-foreground))",
    fontSize: 12,
    fontFamily: "var(--font-sans)",
  },
} as const;

export { type ChartConfig, ChartContainer, useChartConfig };
