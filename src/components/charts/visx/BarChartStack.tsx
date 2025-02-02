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
  getXAxisTickLabel: Accessor<T, string>;
  formatXAxisTickLabel?: (label: string) => string;
  xAxisLabel: string;
  yAxisLabel: string;
  showXAxisLabel?: boolean;
  showYAxisLabel?: boolean;
  tickValues: number[];
  showLegend?: boolean;
  barColors: string[];
}

function BarChartStack<T>({
  data,
  dataKeys,
  dataKeyLabels,
  getXAxisTickLabel,
  formatXAxisTickLabel,
  xAxisLabel,
  yAxisLabel,
  showXAxisLabel = true,
  showYAxisLabel = true,
  tickValues,
  showLegend = false,
  barColors,
}: BarChartStackProps<T>) {
  const { width, height, handleMouseMove, hideTooltip } = useChart();

  const margin = getBarChartMargin(showXAxisLabel, showYAxisLabel, "vertical");
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map((d) => getXAxisTickLabel(d)),
        paddingInner: 0.25,
        paddingOuter: 0.1,
      }),
    [xMax, getXAxisTickLabel, data],
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
          scale={yScale}
          numTicks={tickValues.length}
          tickValues={tickValues}
          width={xMax}
          height={yMax}
          stroke="hsl(var(--border))"
        />
        <BarStack<T, string>
          data={data}
          keys={dataKeys}
          xScale={xScale}
          yScale={yScale}
          color={colorScale}
          x={getXAxisTickLabel}
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
                    title: getXAxisTickLabel(data[barIdx]!),
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
          scale={yScale}
          numTicks={tickValues.length}
          tickValues={tickValues}
          stroke="transparent"
          tickStroke="transparent"
          tickLabelProps={{
            fill: "hsl(var(--muted-foreground))",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
          }}
          label={showYAxisLabel ? yAxisLabel : ""}
          labelOffset={44}
          labelClassName="fill-foreground text-3.5 font-medium font-sans"
        />
        <AxisBottom
          top={yMax}
          scale={xScale}
          tickFormat={formatXAxisTickLabel}
          tickLabelProps={{
            fill: "hsl(var(--muted-foreground))",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
          }}
          label={showXAxisLabel ? xAxisLabel : ""}
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

export { BarChartStack as BarChartStacked };
