"use client";

import { GitCommitVerticalIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/charts/recharts/Chart";

const CHART_DATA = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const CHART_CONFIG = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function LineChartCustomDotsDemo() {
  return (
    <ChartContainer config={CHART_CONFIG} className="min-h-64 w-full max-w-96">
      <LineChart
        accessibilityLayer
        data={CHART_DATA}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value: string) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideIndicator />}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={({
            cx,
            cy,
            payload,
          }: {
            cx: number;
            cy: number;
            payload: { month: string };
          }) => {
            const r = 24;
            return (
              <GitCommitVerticalIcon
                key={payload.month}
                x={cx - r / 2}
                y={cy - r / 2}
                width={r}
                height={r}
                fill="hsl(var(--background))"
                stroke="var(--color-desktop)"
              />
            );
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}
