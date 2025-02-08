import { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarRounded, BarStack } from "@visx/shape";
import type { Accessor } from "@visx/shape/lib/types";

import { getBarChartMargin } from "~/utils/visx";

import { useChart } from "~/components/charts/visx/ChartContainer";

interface BarChartStackProps<T> {
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

function BarChartStack<T>({
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
}: BarChartStackProps<T>) {
  const { width, height, handleMouseMove, hideTooltip } = useChart();

  const margin = getBarChartMargin(
    showCategoryAxisLabel,
    showNumericAxisLabel,
    "vertical",
  );
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const categoricalScale = useMemo(
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

  const numericScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [tickValues[0] ?? 0, tickValues[tickValues.length - 1] ?? 0],
      }),
    [yMax, tickValues],
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
        <GridRows
          scale={numericScale}
          numTicks={tickValues.length}
          tickValues={tickValues}
          width={xMax}
          height={yMax}
          stroke="hsl(var(--border))"
        />
        <BarStack<T, string>
          data={data}
          keys={dataKeys}
          xScale={categoricalScale}
          yScale={numericScale}
          color={colorScale}
          x={getCategoryAxisTickLabel}
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
                  top={barStackIdx === barStacks.length - 1}
                  bottom={barStackIdx === 0}
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
        </BarStack>
        <AxisLeft
          scale={numericScale}
          numTicks={tickValues.length}
          tickValues={tickValues}
          stroke="transparent"
          tickStroke="transparent"
          tickLabelProps={{
            fill: "hsl(var(--muted-foreground))",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
          }}
          label={showNumericAxisLabel ? numericAxisLabel : ""}
          labelOffset={44}
          labelClassName="fill-foreground text-3.5 font-medium font-sans"
        />
        <AxisBottom
          top={yMax}
          scale={categoricalScale}
          tickFormat={formatCategoryAxisTickLabel}
          tickLabelProps={{
            fill: "hsl(var(--muted-foreground))",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
          }}
          label={showCategoryAxisLabel ? categoryAxisLabel : ""}
          labelOffset={24}
          labelClassName="fill-foreground text-3.5 font-medium font-sans"
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

export { BarChartStack };
