import { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridColumns } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarRounded, BarStackHorizontal } from "@visx/shape";
import type { Accessor } from "@visx/shape/lib/types";

import { getBarChartMargin } from "~/utils/visx";

import { useChart } from "~/components/charts/visx/ChartContainer";

interface BarChartStackHorizontalProps<T> {
  data: T[];
  dataKeys: Extract<keyof T, string>[];
  dataKeyLabels: string[];
  getCategoryAxisTickLabel: Accessor<T, string>;
  formatCategoryAxisTickLabel?: (label: string) => string;
  categoryAxisLabel: string;
  numericAxisLabel: string;
  showCategoryAxisLabel?: boolean;
  showNumericAxisLabel?: boolean;
  tickValues: number[];
  showLegend?: boolean;
  barColors: string[];
}

function BarChartStackHorizontal<T>({
  data,
  dataKeys,
  dataKeyLabels,
  getCategoryAxisTickLabel,
  formatCategoryAxisTickLabel,
  categoryAxisLabel,
  numericAxisLabel,
  showCategoryAxisLabel = true,
  showNumericAxisLabel = true,
  tickValues,
  showLegend = false,
  barColors,
}: BarChartStackHorizontalProps<T>) {
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

  const colorScale = useMemo(
    () =>
      scaleOrdinal({
        domain: dataKeys as string[],
        range: barColors,
      }),
    [dataKeys, barColors],
  );

  return (
    <>
      <Group top={margin.top} left={margin.left}>
        <GridColumns
          scale={numericScale}
          numTicks={tickValues.length}
          tickValues={tickValues}
          width={xMax}
          height={yMax}
          stroke="hsl(var(--border))"
        />
        <BarStackHorizontal<T, string>
          data={data}
          keys={dataKeys}
          xScale={numericScale}
          yScale={categoricalScale}
          color={colorScale}
          y={getCategoryAxisTickLabel}
        >
          {(barStacks) =>
            barStacks.map((barStack, barStackIdx) =>
              barStack.bars.map((bar, barIdx) => (
                <BarRounded
                  x={bar.x}
                  y={bar.y}
                  width={bar.width}
                  height={bar.height}
                  fill={bar.color}
                  radius={6}
                  left={barStackIdx === 0}
                  right={barStackIdx === barStacks.length - 1}
                  onMouseMove={handleMouseMove({
                    left: bar.x + bar.width / 2,
                    title: getCategoryAxisTickLabel(data[barIdx]!),
                    items: dataKeys.map((key, i) => ({
                      key,
                      label: dataKeyLabels[i] ?? "",
                      value: Number(data[barIdx]![key]),
                      color: barColors[i] ?? "",
                    })),
                  })}
                  onMouseLeave={hideTooltip}
                  key={`${barStackIdx}-${barIdx}`}
                />
              )),
            )
          }
        </BarStackHorizontal>
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
      {showLegend && (
        <div className="text-3.5 absolute top-0 left-0 ml-[calc(100%+16px)]">
          <LegendOrdinal
            scale={colorScale}
            direction="column"
            itemMargin={2}
            shapeWidth={8}
            shapeHeight={8}
            labelFormat={(_, i) => dataKeyLabels[i] ?? ""}
            shapeStyle={() => ({ borderRadius: 2 })}
          />
        </div>
      )}
    </>
  );
}

export { BarChartStackHorizontal };
