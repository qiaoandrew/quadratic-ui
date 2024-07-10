"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/Chart";

const CHART_DATA = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function RadarChartGridCircleFilledDemo() {
  return (
    <ChartContainer config={chartConfig} className="min-h-64 w-full max-w-96">
      <RadarChart data={CHART_DATA}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarGrid
          className="fill-[--color-desktop] opacity-20"
          gridType="circle"
        />
        <PolarAngleAxis dataKey="month" />
        <Radar
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.5}
        />
      </RadarChart>
    </ChartContainer>
  );
}
