"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/Chart";

const CHART_DATA = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
];

const CHART_CONFIG = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;

export default function BarChartNegativeDemo() {
  return (
    <ChartContainer config={CHART_CONFIG} className="min-h-64 w-full max-w-96">
      <BarChart accessibilityLayer data={CHART_DATA}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="visitors" radius={4}>
          <LabelList
            position="top"
            dataKey="month"
            fillOpacity={1}
            offset={12}
          />
          {CHART_DATA.map((item) => (
            <Cell
              key={item.month}
              fill={
                item.visitors > 0
                  ? "hsl(var(--chart-1))"
                  : "hsl(var(--chart-2))"
              }
            />
          ))}
        </Bar>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel hideIndicator />}
        />
      </BarChart>
    </ChartContainer>
  );
}
