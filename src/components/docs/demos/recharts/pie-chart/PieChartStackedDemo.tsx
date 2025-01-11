"use client";

import { Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/RechartsChart";

const DESKTOP_DATA = [
  { month: "january", desktop: 186, fill: "var(--color-january)" },
  { month: "february", desktop: 305, fill: "var(--color-february)" },
  { month: "march", desktop: 237, fill: "var(--color-march)" },
  { month: "april", desktop: 173, fill: "var(--color-april)" },
  { month: "may", desktop: 209, fill: "var(--color-may)" },
];

const MOBILE_DATA = [
  { month: "january", mobile: 80, fill: "var(--color-january)" },
  { month: "february", mobile: 200, fill: "var(--color-february)" },
  { month: "march", mobile: 120, fill: "var(--color-march)" },
  { month: "april", mobile: 190, fill: "var(--color-april)" },
  { month: "may", mobile: 130, fill: "var(--color-may)" },
];

const CHART_CONFIG = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "hsl(var(--chart-1))",
  },
  february: {
    label: "February",
    color: "hsl(var(--chart-2))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-4))",
  },
  may: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function PieChartStackedDemo() {
  return (
    <ChartContainer config={CHART_CONFIG} className="min-h-64 w-full max-w-96">
      <PieChart>
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelKey="visitors"
              nameKey="month"
              indicator="line"
              labelFormatter={(_, payload) => {
                const dataKey = payload?.[0]?.dataKey;
                if (dataKey && dataKey in CHART_CONFIG) {
                  return CHART_CONFIG[dataKey as keyof typeof CHART_CONFIG]
                    .label;
                }
                return "";
              }}
            />
          }
        />
        <Pie data={DESKTOP_DATA} dataKey="desktop" outerRadius={60} />
        <Pie
          data={MOBILE_DATA}
          dataKey="mobile"
          innerRadius={70}
          outerRadius={90}
        />
      </PieChart>
    </ChartContainer>
  );
}
