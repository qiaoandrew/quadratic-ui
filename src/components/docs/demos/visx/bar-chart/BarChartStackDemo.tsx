"use client";

import { BarChartStacked } from "~/components/charts/visx/BarChartStack";
import { ChartContainer } from "~/components/charts/visx/Chart";

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
    mobileViews: 31,
    tabletViews: 240,
  },
  {
    month: "March",
    desktopViews: 237,
    mobileViews: 22,
    tabletViews: 328,
  },
  {
    month: "April",
    desktopViews: 73,
    mobileViews: 231,
    tabletViews: 239,
  },
  {
    month: "May",
    desktopViews: 209,
    mobileViews: 100,
    tabletViews: 32,
  },
  {
    month: "June",
    desktopViews: 214,
    mobileViews: 321,
    tabletViews: 68,
  },
  {
    month: "July",
    desktopViews: 142,
    mobileViews: 123,
    tabletViews: 129,
  },
];

export default function BarChartStackedDemo() {
  return (
    <ChartContainer className="aspect-4/3 w-full max-w-112">
      <BarChartStacked<Datum>
        data={CHART_DATA}
        keys={["desktopViews", "mobileViews", "tabletViews"] as const}
        getValue={(d, key) => Number(d[key as keyof typeof d])}
        keyLabels={["Desktop", "Mobile", "Tablet"]}
        getXAxisTickLabel={(d: Datum) => d.month}
        formatXAxisTickLabel={(month: string) => month.slice(0, 3)}
        xAxisLabel="Month"
        yAxisLabel="Views"
        tickValues={[0, 120, 240, 360, 480, 600, 720]}
        colors={[
          "hsl(var(--chart-1))",
          "hsl(var(--chart-2))",
          "hsl(var(--chart-3))",
        ]}
      />
    </ChartContainer>
  );
}
