"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/Chart";

const CHART_DATA = [
  { month: "January", desktop: 186, mobile: 160 },
  { month: "February", desktop: 185, mobile: 170 },
  { month: "March", desktop: 207, mobile: 180 },
  { month: "April", desktop: 173, mobile: 160 },
  { month: "May", desktop: 160, mobile: 190 },
  { month: "June", desktop: 174, mobile: 204 },
];

const CHART_CONFIG = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function RadarChartLinesOnlyDemo() {
  return (
    <ChartContainer config={CHART_CONFIG} className="min-h-64 w-full max-w-96">
      <RadarChart data={CHART_DATA}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid radialLines={false} />
        <Radar
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0}
          stroke="var(--color-desktop)"
          strokeWidth={2}
        />
        <Radar
          dataKey="mobile"
          fill="var(--color-mobile)"
          fillOpacity={0}
          stroke="var(--color-mobile)"
          strokeWidth={2}
        />
      </RadarChart>
    </ChartContainer>
  );
}
