"use client";

import { ChartContainer } from "~/components/charts/visx/Chart";
import { BarChartGroup } from "~/components/charts/visx/BarChartGroup";

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

export default function BarChartGroupDemo() {
  return (
    <ChartContainer className="aspect-9/6 w-full max-w-124">
      <BarChartGroup<Datum>
        data={CHART_DATA}
        keys={["desktopViews", "mobileViews", "tabletViews"] as const}
        getValue={(d, key) => Number(d[key as keyof typeof d])}
        keyLabels={["Desktop", "Mobile", "Tablet"]}
        getXAxisTickLabel={(d: Datum) => d.month}
        formatXAxisTickLabel={(month: string) => month.slice(0, 3)}
        xAxisLabel="Month"
        yAxisLabel="Views"
        tickValues={[0, 60, 120, 180, 240, 300, 360]}
        colors={[
          "hsl(var(--chart-1))",
          "hsl(var(--chart-2))",
          "hsl(var(--chart-3))",
        ]}
        aspectRatio={9 / 6}
      />
    </ChartContainer>
  );
}
