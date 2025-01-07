"use client";

import { RadialBar, RadialBarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/Chart";

const CHART_DATA = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const CHART_CONFIG = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function RadialChartDemo() {
  return (
    <ChartContainer config={CHART_CONFIG} className="min-h-64 w-full max-w-96">
      <RadialBarChart data={CHART_DATA} innerRadius={30} outerRadius={110}>
        <RadialBar dataKey="visitors" background />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent nameKey="browser" />}
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
