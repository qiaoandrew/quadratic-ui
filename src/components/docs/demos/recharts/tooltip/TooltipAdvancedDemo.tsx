"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/charts/recharts/Chart";

interface DataPoint {
  date: string;
  running: number;
  swimming: number;
}

const CHART_DATA: DataPoint[] = [
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
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function TooltipAdvancedDemo() {
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
          content={
            <ChartTooltipContent
              hideLabel
              className="w-44"
              formatter={(
                value,
                name,
                item: { payload?: DataPoint },
                index,
              ) => (
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center">
                    <div className="flex items-center gap-x-2">
                      <div
                        className="size-2.5 shrink-0 rounded-0.5 bg-(--color-bg)"
                        style={
                          {
                            "--color-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {CHART_CONFIG[name as keyof typeof CHART_CONFIG].label ??
                        name}
                    </div>
                    <div className="ml-auto flex items-baseline gap-x-0.5 font-mono font-medium tabular-nums text-foreground">
                      {value}
                      <span className="font-normal text-muted-foreground">
                        kcal
                      </span>
                    </div>
                  </div>
                  {index === 1 && item.payload && (
                    <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-3 font-medium text-foreground">
                      Total
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {item.payload.running + item.payload.swimming}
                        <span className="font-normal text-muted-foreground">
                          kcal
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />
          }
          cursor={false}
          defaultIndex={1}
        />
      </BarChart>
    </ChartContainer>
  );
}
