"use client";

import { BarChart, type ChartConfig } from "~/components/charts/visx/Chart";

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

const CHART_CONFIG: Partial<ChartConfig> = {
  axisLabels: { bottom: "Month", left: "Views" },
};

const getLabel = (d: Datum) => d.month.slice(0, 3);
const formatLabel = (month: string) => month.slice(0, 3);
const getValue = (d: Datum) => d.views;

export default function BarChartDemo() {
  return (
    <BarChart<Datum>
      getValue={getValue}
      getLabel={getLabel}
      formatLabel={formatLabel}
      data={CHART_DATA}
      config={CHART_CONFIG}
      className="aspect-[4/3] w-full max-w-112"
      aspectRatio={4 / 3}
    />
  );
}
