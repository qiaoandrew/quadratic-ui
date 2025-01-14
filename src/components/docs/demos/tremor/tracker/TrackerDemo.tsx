"use client";

import { Tracker } from "~/components/charts/tremor/Tracker";

const data = [
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-red-600", tooltip: "Major Outage" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-red-600", tooltip: "Major Outage" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-yellow-600", tooltip: "Partial Outage" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-yellow-600", tooltip: "Partial Outage" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-red-600", tooltip: "Major Outage" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
  { color: "bg-emerald-600", tooltip: "Healthy" },
];

export default function TrackerDemo() {
  return <Tracker className="w-full max-w-96" data={data} />;
}
