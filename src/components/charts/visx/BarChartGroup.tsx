import { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarRounded, BarGroup } from "@visx/shape";
import type { Accessor, DatumObject } from "@visx/shape/lib/types";

import { getBarChartMargin } from "~/utils/visx";

import { useChart } from "~/components/charts/visx/ChartContainer";

interface BarChartGroupProps<T extends DatumObject> {
  data: T[];
  dataKeys: string[];
  dataKeyLabels: string[];
  getXAxisTickLabel: Accessor<T, string>;
  formatXAxisTickLabel?: (label: string) => string;
  xAxisLabel: string;
  yAxisLabel: string;
  showXAxisLabel?: boolean;
  showYAxisLabel?: boolean;
  tickValues: number[];
  showLegend?: boolean;
  colors: string[];
}

function BarChartGroup<T extends DatumObject>({
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
  colors,
}: BarChartGroupProps<T>) {
  const { width, height, handleMouseMove, hideTooltip } = useChart();

  const margin = getBarChartMargin(showXAxisLabel, showYAxisLabel);
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const x0Scale = useMemo(
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

  const x1Scale = useMemo(
    () =>
      scaleBand<string>({
        domain: dataKeys,
        range: [0, x0Scale.bandwidth()],
        paddingInner: 0.2,
      }),
    [dataKeys, x0Scale],
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
    () => scaleOrdinal({ domain: dataKeys, range: colors }),
    [dataKeys, colors],
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
        <BarGroup<T, string>
          data={data}
          keys={dataKeys}
          height={yMax}
          x0={getXAxisTickLabel}
          x0Scale={x0Scale}
          x1Scale={x1Scale}
          yScale={yScale}
          color={colorScale}
        >
          {(barGroups) =>
            barGroups.map((barGroup, barGroupIdx) => (
              <Group
                key={`bar-group-${barGroupIdx}-${barGroup.x0}`}
                left={barGroup.x0}
              >
                {barGroup.bars.map((bar, barIdx) => (
                  <BarRounded
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                    radius={4}
                    all
                    onMouseMove={handleMouseMove({
                      left: barGroup.x0 + bar.x + bar.width / 2,
                      title: getXAxisTickLabel(data[barGroupIdx]!),
                      items: [
                        {
                          key: dataKeys[barIdx]!,
                          label: dataKeyLabels[barIdx]!,
                          value: Number(data[barGroupIdx]![dataKeys[barIdx]!]),
                          color: colors[barIdx]!,
                        },
                      ],
                    })}
                    onMouseLeave={hideTooltip}
                    key={`bar-group-bar-${barGroupIdx}-${barIdx}}`}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
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
          scale={x0Scale}
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

export { BarChartGroup };
