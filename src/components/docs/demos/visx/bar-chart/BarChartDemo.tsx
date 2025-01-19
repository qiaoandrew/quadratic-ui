"use client";

import { BarChart } from "~/components/charts/visx/Chart";

type Datum = {
  month: string;
  desktop: number;
};

const CHART_DATA: Datum[] = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 142 },
];

const getLabel = (d: Datum) => d.month.slice(0, 3);
const getValue = (d: Datum) => d.desktop;

export default function BarChartDemo() {
  return (
    <BarChart<Datum>
      getLabel={getLabel}
      getValue={getValue}
      data={CHART_DATA}
    />
  );
}
