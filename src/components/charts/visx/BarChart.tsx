import { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridColumns, GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { BarRounded } from "@visx/shape";
import type { Accessor } from "@visx/shape/lib/types";

import { getBarChartMargin } from "~/utils/visx";

import { useChart } from "~/components/charts/visx/ChartContainer";

const axisStyles = {
  labelClassName: "fill-foreground text-3.5 font-medium font-sans",
  tickLabelProps: {
    fill: "hsl(var(--muted-foreground))",
    fontSize: 12,
    fontFamily: "var(--font-sans)",
  },
  tickStroke: "transparent",
};

interface BarChartProps<T> {
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
  orientation: "vertical" | "horizontal";
}

function BarChart<T>({
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
  orientation,
}: BarChartProps<T>) {
  const isVertical = orientation === "vertical";

  const { width, height, handleMouseMove, hideTooltip } = useChart();

  const margin = getBarChartMargin(
    showCategoryAxisLabel,
    showNumericAxisLabel,
    orientation,
  );
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const categoricalScale = useMemo(
    () =>
      scaleBand<string>({
        range: isVertical ? [0, xMax] : [0, yMax],
        round: true,
        domain: data.map((d) => getCategoryAxisTickLabel(d)),
        paddingInner: 0.25,
        paddingOuter: 0.1,
      }),
    [isVertical, xMax, yMax, getCategoryAxisTickLabel, data],
  );

  const numericScale = useMemo(
    () =>
      scaleLinear<number>({
        range: isVertical ? [yMax, 0] : [0, xMax],
        round: true,
        domain: [tickValues[0] ?? 0, tickValues[tickValues.length - 1] ?? 0],
      }),
    [isVertical, xMax, yMax, tickValues],
  );

  const Grid = isVertical ? GridRows : GridColumns;

  return (
    <Group top={margin.top} left={margin.left}>
      <Grid
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
        const width = isVertical
          ? categoricalScale.bandwidth()
          : Math.max(numericScale(value), 0);
        const height = isVertical
          ? Math.max(yMax - numericScale(value), 0)
          : categoricalScale.bandwidth();
        const x = isVertical ? (categoricalScale(label) ?? 0) : 0;
        const y = isVertical ? yMax - height : (categoricalScale(label) ?? 0);

        return (
          <BarRounded
            x={x}
            y={y}
            width={width}
            height={height}
            fill={barColor}
            radius={6}
            all
            onMouseMove={handleMouseMove({
              ...(isVertical
                ? { left: x + width / 2 }
                : { top: y + height / 2 }),
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
      {isVertical && (
        <>
          <AxisLeft
            scale={numericScale}
            label={showNumericAxisLabel ? numericAxisLabel : ""}
            labelOffset={44}
            numTicks={tickValues.length}
            tickValues={tickValues}
            stroke="transparent"
            {...axisStyles}
          />
          <AxisBottom
            top={yMax}
            scale={categoricalScale}
            label={showCategoryAxisLabel ? categoryAxisLabel : ""}
            labelOffset={24}
            tickFormat={formatCategoryAxisTickLabel}
            {...axisStyles}
          />
        </>
      )}
      {!isVertical && (
        <>
          <AxisLeft
            scale={categoricalScale}
            label={showCategoryAxisLabel ? categoryAxisLabel : ""}
            labelOffset={44}
            tickFormat={formatCategoryAxisTickLabel}
            {...axisStyles}
          />
          <AxisBottom
            top={yMax}
            scale={numericScale}
            label={showNumericAxisLabel ? numericAxisLabel : ""}
            labelOffset={24}
            numTicks={tickValues.length}
            tickValues={tickValues}
            stroke="transparent"
            {...axisStyles}
          />
        </>
      )}
    </Group>
  );
}

export { BarChart };
