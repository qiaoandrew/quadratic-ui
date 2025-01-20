"use client";

import type { AxisScale, TickLabelProps } from "@visx/axis";
import type { ScaleInput } from "@visx/scale";
import { createContext, useContext } from "react";

interface ChartContextProps {
  config: ChartConfig;
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
  children: React.ReactNode;
}

function ChartContainer({ configOverrides, children }: ChartContainerProps) {
  const config = { ...DEFAULT_CONFIG, ...configOverrides };

  return (
    <ChartContext.Provider value={{ config }}>{children}</ChartContext.Provider>
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
  axisLabelClassName: "fill-foreground text-3.5 font-medium font-sans",
  axisLabels: { top: "", right: "", bottom: "", left: "" },
  tickLabelProps: {
    fill: "hsl(var(--muted-foreground))",
    fontSize: 12,
    fontFamily: "var(--font-sans)",
  },
} as const;

export { type ChartConfig, ChartContainer, useChartConfig };
