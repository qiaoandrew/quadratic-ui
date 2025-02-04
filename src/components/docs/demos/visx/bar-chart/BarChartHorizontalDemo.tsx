"use client";

import { ChartContainer } from "~/components/charts/visx/ChartContainer";
import { BarChartHorizontal } from "~/components/charts/visx/BarChartHorizontal";

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

export default function BarChartHorizontalDemo() {
  return (
    <ChartContainer aspectRatio={3 / 4} className="w-full max-w-84">
      <BarChartHorizontal<Datum>
        data={CHART_DATA}
        dataKey="views"
        getCategoryAxisTickLabel={(d: Datum) => d.month}
        formatCategoryAxisTickLabel={(month: string) => month.slice(0, 3)}
        categoryAxisLabel="Month"
        numericAxisLabel="Views"
        tickValues={[0, 60, 120, 180, 240, 300, 360]}
        barColor="hsl(var(--chart-1))"
      />
    </ChartContainer>
  );
}
