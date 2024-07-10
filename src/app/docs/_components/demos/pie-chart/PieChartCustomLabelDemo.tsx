"use client";

import { Pie, PieChart } from "recharts";

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

const chartConfig = {
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

export default function PieChartCustomLabelDemo() {
  return (
    <ChartContainer config={chartConfig} className="min-h-64 w-full max-w-96">
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="visitors" hideLabel />}
        />
        <Pie
          data={CHART_DATA}
          dataKey="visitors"
          labelLine={false}
          label={({
            cx,
            cy,
            x,
            y,
            textAnchor,
            dominantBaseline,
            payload,
          }: {
            cx: number;
            cy: number;
            x: number;
            y: number;
            textAnchor: string;
            dominantBaseline: string;
            payload: (typeof CHART_DATA)[number];
          }) => {
            return (
              <text
                cx={cx}
                cy={cy}
                x={x}
                y={y}
                textAnchor={textAnchor}
                dominantBaseline={dominantBaseline}
                fill="hsla(var(--foreground))"
              >
                {`${
                  chartConfig[payload.browser as keyof typeof chartConfig]
                    ?.label
                } (${payload.visitors})`}
              </text>
            );
          }}
          nameKey="browser"
        />
      </PieChart>
    </ChartContainer>
  );
}
