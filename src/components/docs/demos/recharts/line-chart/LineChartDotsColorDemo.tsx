"use client";

import { CartesianGrid, Dot, Line, LineChart, XAxis } from "recharts";

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
    color: "hsl(var(--chart-2))",
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

export default function LineChartDotsColorsDemo() {
  return (
    <ChartContainer config={CHART_CONFIG} className="min-h-64 w-full max-w-96">
      <LineChart
        accessibilityLayer
        data={CHART_DATA}
        margin={{
          top: 24,
          left: 24,
          right: 24,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="browser"
          tickLine={false}
          tickMargin={8}
          axisLine={false}
          tickFormatter={(value: string) =>
            value[0]?.toUpperCase() + value.slice(1)
          }
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              indicator="line"
              nameKey="visitors"
              hideLabel
            />
          }
        />
        <Line
          dataKey="visitors"
          type="natural"
          stroke="var(--color-visitors)"
          strokeWidth={2}
          dot={({
            cx,
            cy,
            payload,
          }: {
            cx: number;
            cy: number;
            payload: { fill: string; browser: string };
          }) => {
            return (
              <Dot
                key={payload.browser}
                r={5}
                cx={cx}
                cy={cy}
                fill={payload.fill}
                stroke={payload.fill}
              />
            );
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}
