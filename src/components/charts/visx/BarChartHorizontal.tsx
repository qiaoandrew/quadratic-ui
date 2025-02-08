import { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridColumns } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { BarRounded } from "@visx/shape";
import type { Accessor } from "@visx/shape/lib/types";

import { getBarChartMargin } from "~/utils/visx";

import { useChart } from "~/components/charts/visx/ChartContainer";

interface BarChartHorizontalProps<T> {
  data: T[];
  dataKey: Extract<keyof T, string>;
  getCategoryAxisTickLabel: Accessor<T, string>;
  formatCategoryAxisTickLabel?: (label: string) => string;
  categoryAxisLabel: string;
  numericAxisLabel: string;
  showCategoryAxisLabel?: boolean;
  showNumericAxisLabel?: boolean;
  tickValues: number[];
  barColor: string;
}

function BarChartHorizontal<T>({
  data,
  dataKey,
  getCategoryAxisTickLabel,
  formatCategoryAxisTickLabel,
  categoryAxisLabel,
  numericAxisLabel,
  showCategoryAxisLabel = true,
  showNumericAxisLabel = true,
  tickValues,
  barColor,
}: BarChartHorizontalProps<T>) {
  const { width, height, handleMouseMove, hideTooltip } = useChart();

  const margin = getBarChartMargin(
    showCategoryAxisLabel,
    showNumericAxisLabel,
    "horizontal",
  );
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const categoricalScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, yMax],
        round: true,
        domain: data.map((d) => getCategoryAxisTickLabel(d)),
        paddingInner: 0.25,
        paddingOuter: 0.1,
      }),
    [yMax, getCategoryAxisTickLabel, data],
  );

  const numericScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [0, xMax],
        round: true,
        domain: [tickValues[0] ?? 0, tickValues[tickValues.length - 1] ?? 0],
      }),
    [xMax, tickValues],
  );

  return (
    <Group top={margin.top} left={margin.left}>
      <GridColumns
        scale={numericScale}
        numTicks={tickValues.length}
        tickValues={tickValues}
        width={xMax}
        height={yMax}
        stroke="hsl(var(--border))"
      />
      {data.map((d, i) => {
        const value = Number(d[dataKey]);
        const label = getCategoryAxisTickLabel(d);
        const width = Math.max(numericScale(value), 0);
        const height = categoricalScale.bandwidth();
        const y = categoricalScale(label) ?? 0;

        return (
          <BarRounded
            x={0}
            y={y}
            width={width}
            height={height}
            fill={barColor}
            radius={6}
            all
            onMouseMove={handleMouseMove({
              top: y + height / 2,
              title: getCategoryAxisTickLabel(data[i]!),
              items: [
                {
                  key: getCategoryAxisTickLabel(d),
                  label: numericAxisLabel,
                  value,
                  color: barColor,
                },
              ],
            })}
            onMouseLeave={hideTooltip}
            key={`bar-${i}`}
          />
        );
      })}
      <AxisLeft
        scale={categoricalScale}
        label={showCategoryAxisLabel ? categoryAxisLabel : ""}
        labelClassName="fill-foreground text-3.5 font-medium font-sans"
        labelOffset={44}
        tickFormat={formatCategoryAxisTickLabel}
        tickStroke="transparent"
        tickLabelProps={{
          fill: "hsl(var(--muted-foreground))",
          fontSize: 12,
          fontFamily: "var(--font-sans)",
        }}
      />
      <AxisBottom
        top={yMax}
        scale={numericScale}
        label={showNumericAxisLabel ? numericAxisLabel : ""}
        labelClassName="fill-foreground text-3.5 font-medium font-sans"
        labelOffset={24}
        numTicks={tickValues.length}
        tickValues={tickValues}
        tickLabelProps={{
          fill: "hsl(var(--muted-foreground))",
          fontSize: 12,
          fontFamily: "var(--font-sans)",
        }}
        tickStroke="transparent"
      />
    </Group>
  );
}

export { BarChartHorizontal };
