"use client";

import { ChartContainer } from "~/components/charts/visx/Chart";
import { BarChart } from "~/components/charts/visx/BarChart";

type Datum = {
  month: string;
  views: number;
};

const CHART_DATA: Datum[] = [
  { month: "January", views: 186 },
  { month: "February", views: 305 },
  { month: "March", views: 237 },
  { month: "April", views: 73 },
  { month: "May", views: 209 },
  { month: "June", views: 214 },
  { month: "July", views: 142 },
];

export default function BarChartDemo() {
  return (
    <ChartContainer aspectRatio={4 / 3} className="w-full max-w-112">
      <BarChart<Datum>
        data={CHART_DATA}
        dataKey="views"
        getXAxisTickLabel={(d: Datum) => d.month}
        formatXAxisTickLabel={(month: string) => month.slice(0, 3)}
        xAxisLabel="Month"
        yAxisLabel="Views"
        tickValues={[0, 60, 120, 180, 240, 300, 360]}
        barColor="hsl(var(--chart-1))"
      />
    </ChartContainer>
  );
}
