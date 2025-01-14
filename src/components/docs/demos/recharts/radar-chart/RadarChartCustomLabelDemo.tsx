"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/RechartsChart";

const CHART_DATA = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
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

export default function RadarChartCustomLabelDemo() {
  return (
    <ChartContainer config={CHART_CONFIG} className="min-h-64 w-full max-w-96">
      <RadarChart
        data={CHART_DATA}
        margin={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis
          dataKey="month"
          tick={({
            x,
            y,
            textAnchor,
            index,
            ...props
          }: {
            x: number;
            y: number;
            textAnchor: "start" | "middle" | "end";
            index: number;
          }) => {
            const data = CHART_DATA[index];

            return (
              <text
                x={x}
                y={index === 0 ? y - 10 : y}
                textAnchor={textAnchor}
                fontSize={14}
                fontWeight={500}
                {...props}
              >
                <tspan className="fill-foreground">
                  {data!.desktop} / {data!.mobile}
                </tspan>
                <tspan
                  x={x}
                  dy={"1rem"}
                  fontSize={12}
                  className="fill-muted-foreground"
                >
                  {data!.month}
                </tspan>
              </text>
            );
          }}
        />
        <PolarGrid />
        <Radar
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.6}
        />
        <Radar dataKey="mobile" fill="var(--color-mobile)" />
      </RadarChart>
    </ChartContainer>
  );
}
