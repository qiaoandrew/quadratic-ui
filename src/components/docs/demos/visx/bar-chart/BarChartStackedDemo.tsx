"use client";

import { BarChartStacked } from "~/components/charts/visx/BarChartStacked";
import {
  ChartContainer,
  type ChartConfig,
} from "~/components/charts/visx/Chart";

type Datum = {
  key: string;
  month: string;
  desktopViews: number;
  mobileViews: number;
  tabletViews: number;
};

const CHART_DATA: Datum[] = [
  {
    key: "1",
    month: "January",
    desktopViews: 186,
    mobileViews: 123,
    tabletViews: 58,
  },
  {
    key: "2",
    month: "February",
    desktopViews: 305,
    mobileViews: 31,
    tabletViews: 240,
  },
  {
    key: "3",
    month: "March",
    desktopViews: 237,
    mobileViews: 22,
    tabletViews: 328,
  },
  {
    key: "4",
    month: "April",
    desktopViews: 73,
    mobileViews: 231,
    tabletViews: 239,
  },
  {
    key: "5",
    month: "May",
    desktopViews: 209,
    mobileViews: 100,
    tabletViews: 32,
  },
  {
    key: "6",
    month: "June",
    desktopViews: 214,
    mobileViews: 321,
    tabletViews: 68,
  },
  {
    key: "7",
    month: "July",
    desktopViews: 142,
    mobileViews: 123,
    tabletViews: 129,
  },
];

const CHART_CONFIG: Partial<ChartConfig> = {
  tickValues: [0, 150, 300, 450, 600, 750],
  axisLabels: { bottom: "Month", left: "Views" },
};

export default function BarChartStackedDemo() {
  return (
    <ChartContainer
      configOverrides={CHART_CONFIG}
      className="aspect-4/3 w-full max-w-112"
    >
      <BarChartStacked<Datum>
        getKey={(d: Datum) => d.key}
        getValues={[(d: Datum) => d.desktopViews]}
        getLabel={(d: Datum) => d.month}
        formatLabel={(month: string) => month.slice(0, 3)}
        data={CHART_DATA}
        aspectRatio={4 / 3}
      />
    </ChartContainer>
  );
}
