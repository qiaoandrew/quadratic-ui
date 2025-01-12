// This file is derived from Tremor, licensed under the Apache License 2.0.
// Modifications were made by Andrew Qiao on January 13, 2025.
// See LICENSE-APACHE-2.0 for details.

// Tremor Spark Chart [v0.1.2]

"use client";

import {
  Area,
  Bar,
  Line,
  AreaChart,
  BarChart,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import type { AxisDomain } from "recharts/types/util/types";

import {
  AvailableChartColors,
  type AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
} from "~/utils/tremor";
import { cn } from "~/utils/tailwind";

interface SparkAreaChartProps extends React.ComponentProps<"div"> {
  data: Record<string, unknown>[];
  categories: string[];
  index: string;
  colors?: AvailableChartColorsKeys[];
  autoMinValue?: boolean;
  minValue?: number;
  maxValue?: number;
  connectNulls?: boolean;
  type?: "default" | "stacked" | "percent";
  fill?: "gradient" | "solid" | "none";
}

function SparkAreaChart({
  data = [],
  categories = [],
  index,
  colors = AvailableChartColors,
  autoMinValue = false,
  minValue,
  maxValue,
  connectNulls = false,
  type = "default",
  fill = "gradient",
  className,
  ...props
}: SparkAreaChartProps) {
  const categoryColors = constructCategoryColors(categories, colors);
  const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);

  return <div {...props}></div>;
}
