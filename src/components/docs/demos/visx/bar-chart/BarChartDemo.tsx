"use client";

import {
  ChartContainer,
  type ChartConfig,
} from "~/components/charts/visx/Chart";
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

const CHART_CONFIG: Partial<ChartConfig> = {
  tickValues: [0, 60, 120, 180, 240, 300, 360],
  axisTitles: { bottom: "Month", left: "Views" },
};

export default function BarChartDemo() {
  return (
    <ChartContainer
      configOverrides={CHART_CONFIG}
      className="aspect-4/3 w-full max-w-112"
    >
      <BarChart<Datum>
        getValue={(d: Datum) => d.views}
        getXAxisLabel={(d: Datum) => d.month}
        formatXAxisLabel={(month: string) => month.slice(0, 3)}
        data={CHART_DATA}
        aspectRatio={4 / 3}
      />
    </ChartContainer>
  );
}
