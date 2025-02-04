"use client";

import { ChartContainer } from "~/components/charts/visx/ChartContainer";
import { BarChartGroupHorizontal } from "~/components/charts/visx/BarChartGroupHorizontal";

type Datum = {
  month: string;
  desktopViews: number;
  mobileViews: number;
  tabletViews: number;
};

const CHART_DATA: Datum[] = [
  {
    month: "January",
    desktopViews: 186,
    mobileViews: 123,
    tabletViews: 58,
  },
  {
    month: "February",
    desktopViews: 305,
    mobileViews: 268,
    tabletViews: 240,
  },
  {
    month: "March",
    desktopViews: 237,
    mobileViews: 350,
    tabletViews: 328,
  },
  {
    month: "April",
    desktopViews: 73,
    mobileViews: 231,
    tabletViews: 239,
  },
];

export default function BarChartGroupHorizontalDemo() {
  return (
    <ChartContainer aspectRatio={6 / 9} className="w-full max-w-84">
      <BarChartGroupHorizontal<Datum>
        data={CHART_DATA}
        dataKeys={["desktopViews", "mobileViews", "tabletViews"] as const}
        dataKeyLabels={["Desktop", "Mobile", "Tablet"]}
        getCategoryAxisTickLabel={(d: Datum) => d.month}
        formatCategoryAxisTickLabel={(month: string) => month.slice(0, 3)}
        categoryAxisLabel="Month"
        numericAxisLabel="Views"
        tickValues={[0, 60, 120, 180, 240, 300, 360]}
        colors={[
          "hsl(var(--chart-1))",
          "hsl(var(--chart-2))",
          "hsl(var(--chart-3))",
        ]}
      />
    </ChartContainer>
  );
}
