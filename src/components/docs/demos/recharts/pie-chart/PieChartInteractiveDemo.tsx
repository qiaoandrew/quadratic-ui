"use client";

import { useMemo, useState } from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/charts/recharts/Chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/Select";

const CHART_DATA = [
  { month: "january", desktop: 186, fill: "var(--color-january)" },
  { month: "february", desktop: 305, fill: "var(--color-february)" },
  { month: "march", desktop: 237, fill: "var(--color-march)" },
  { month: "april", desktop: 173, fill: "var(--color-april)" },
  { month: "may", desktop: 209, fill: "var(--color-may)" },
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

export default function PieChartInteractiveDemo() {
  const [activeMonth, setActiveMonth] = useState(CHART_DATA[0]!.month);

  const activeIndex = useMemo(
    () => CHART_DATA.findIndex((item) => item.month === activeMonth),
    [activeMonth],
  );
  const months = useMemo(() => CHART_DATA.map((item) => item.month), []);

  return (
    <div className="flex w-full flex-col items-center gap-y-6">
      <Select value={activeMonth} onValueChange={setActiveMonth}>
        <SelectTrigger className="w-40 self-end" aria-label="Select a value">
          <SelectValue placeholder="Select month" />
        </SelectTrigger>
        <SelectContent align="end">
          {months.map((key) => {
            const config = CHART_CONFIG[key as keyof typeof CHART_CONFIG];

            if (!config) return null;

            return (
              <SelectItem key={key} value={key}>
                {config?.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <ChartContainer
        config={CHART_CONFIG}
        className="min-h-64 w-full max-w-96"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={CHART_DATA}
            dataKey="desktop"
            nameKey="month"
            innerRadius={60}
            strokeWidth={5}
            activeIndex={activeIndex}
            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
              <g>
                <Sector {...props} outerRadius={outerRadius + 10} />
                <Sector
                  {...props}
                  outerRadius={outerRadius + 25}
                  innerRadius={outerRadius + 12}
                />
              </g>
            )}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-9 font-bold"
                      >
                        {CHART_DATA[activeIndex]!.desktop.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy ?? 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}
