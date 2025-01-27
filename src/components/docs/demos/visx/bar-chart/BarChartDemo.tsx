"use client";

import {
  ChartContainer,
  type ChartConfig,
} from "~/components/charts/visx/Chart";
import { BarChart } from "~/components/charts/visx/BarChart";

type Datum = {
  key: string;
  month: string;
  views: number;
};

const CHART_DATA: Datum[] = [
  { key: "1", month: "January", views: 186 },
  { key: "2", month: "February", views: 305 },
  { key: "3", month: "March", views: 237 },
  { key: "4", month: "April", views: 73 },
  { key: "5", month: "May", views: 209 },
  { key: "6", month: "June", views: 214 },
  { key: "7", month: "July", views: 142 },
];

const CHART_CONFIG: Partial<ChartConfig> = {
  tickValues: [0, 60, 120, 180, 240, 300, 360],
  axisLabels: { bottom: "Month", left: "Views" },
};

export default function BarChartDemo() {
  return (
    <ChartContainer
      configOverrides={CHART_CONFIG}
      className="aspect-4/3 w-full max-w-112"
    >
      <BarChart<Datum>
        getKey={(d: Datum) => d.key}
        getValue={(d: Datum) => d.views}
        getLabel={(d: Datum) => d.month}
        formatLabel={(month: string) => month.slice(0, 3)}
        data={CHART_DATA}
        aspectRatio={4 / 3}
      />
    </ChartContainer>
  );
}
