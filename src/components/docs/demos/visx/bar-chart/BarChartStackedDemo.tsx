"use client";

import { BarChartStacked } from "~/components/charts/visx/BarChartStacked";
import {
  ChartContainer,
  type ChartConfig,
} from "~/components/charts/visx/Chart";

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

const CHART_CONFIG: Partial<ChartConfig> = {
  tickValues: [0, 150, 300, 450, 600, 750],
  axisTitles: { bottom: "Month", left: "Views" },
};

export default function BarChartStackedDemo() {
  return (
    <ChartContainer
      configOverrides={CHART_CONFIG}
      className="aspect-4/3 w-full max-w-112"
    >
      <BarChartStacked<Datum>
        data={CHART_DATA}
        keys={["desktopViews", "mobileViews", "tabletViews"]}
        keyLabels={["Desktop", "Mobile", "Tablet"]}
        getXAxisLabel={(d: Datum) => d.month}
        formatXAxisLabel={(month: string) => month.slice(0, 3)}
        aspectRatio={4 / 3}
      />
    </ChartContainer>
  );
}
