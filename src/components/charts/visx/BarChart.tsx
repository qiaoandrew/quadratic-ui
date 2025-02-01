import { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { BarRounded } from "@visx/shape";
import type { Accessor } from "@visx/shape/lib/types";

import { getBarChartMargin } from "~/utils/visx";

import { useChart } from "~/components/charts/visx/ChartContainer";

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
}: BarChartProps<T>) {
  const { width, height, handleMouseMove, hideTooltip } = useChart();

  const margin = getBarChartMargin(showCategoryAxisLabel, showNumericAxisLabel);
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map((d) => getCategoryAxisTickLabel(d)),
        paddingInner: 0.25,
        paddingOuter: 0.1,
      }),
    [xMax, getCategoryAxisTickLabel, data],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [tickValues[0] ?? 0, tickValues[tickValues.length - 1] ?? 0],
      }),
    [yMax, tickValues],
  );

  return (
    <Group top={margin.top} left={margin.left}>
      <GridRows
        scale={yScale}
        numTicks={tickValues.length}
        tickValues={tickValues}
        width={xMax}
        height={yMax}
        stroke="hsl(var(--border))"
      />
      {data.map((d, i) => {
        const value = Number(d[dataKey]);
        const label = getCategoryAxisTickLabel(d);
        const width = xScale.bandwidth();
        const height = Math.max(yMax - yScale(value), 0);
        const x = xScale(label) ?? 0;
        const y = yMax - height;

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
              left: x + width / 2,
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
        scale={yScale}
        stroke="transparent"
        label={showNumericAxisLabel ? numericAxisLabel : ""}
        labelClassName="fill-foreground text-3.5 font-medium font-sans"
        labelOffset={44}
        numTicks={tickValues.length}
        tickValues={tickValues}
        tickLabelProps={{
          fill: "hsl(var(--muted-foreground))",
          fontSize: 12,
          fontFamily: "var(--font-sans)",
        }}
        tickStroke="transparent"
      />
      <AxisBottom
        top={yMax}
        scale={xScale}
        label={showCategoryAxisLabel ? categoryAxisLabel : ""}
        labelClassName="fill-foreground text-3.5 font-medium font-sans"
        labelOffset={24}
        tickFormat={formatCategoryAxisTickLabel}
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

export { BarChart };
