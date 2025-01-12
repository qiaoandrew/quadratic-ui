"use client";

import { Bar, BarChart, XAxis } from "recharts";
import { FootprintsIcon, WavesIcon } from "lucide-react";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/charts/recharts/Chart";

const CHART_DATA = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
];

const CHART_CONFIG = {
  running: {
    label: "Running",
    color: "hsl(var(--chart-1))",
    icon: FootprintsIcon,
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
    icon: WavesIcon,
  },
} satisfies ChartConfig;

export default function TooltipIconsDemo() {
  return (
    <ChartContainer config={CHART_CONFIG} className="min-h-64 w-full max-w-96">
      <BarChart accessibilityLayer data={CHART_DATA}>
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value: string) => {
            return new Date(value).toLocaleDateString("en-US", {
              weekday: "short",
            });
          }}
        />
        <Bar
          dataKey="running"
          stackId="a"
          fill="var(--color-running)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="swimming"
          stackId="a"
          fill="var(--color-swimming)"
          radius={[4, 4, 0, 0]}
        />
        <ChartTooltip
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
          defaultIndex={1}
        />
      </BarChart>
    </ChartContainer>
  );
}
