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

function BarChartGroup<T extends DatumObject>({
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
}: BarChartGroupProps<T>) {
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

  const categorialGroupScale = useMemo(
    () =>
      scaleBand<string>({
        domain: dataKeys,
        range: [0, categoricalScale.bandwidth()],
        paddingInner: 0.2,
      }),
    [dataKeys, categoricalScale],
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
    () => scaleOrdinal({ domain: dataKeys, range: barColors }),
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
        <BarGroup<T, string>
          data={data}
          keys={dataKeys}
          height={yMax}
          width={xMax}
          x0={getCategoryAxisTickLabel}
          x0Scale={categoricalScale}
          x1Scale={categorialGroupScale}
          yScale={numericScale}
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
                      title: getCategoryAxisTickLabel(data[barGroupIdx]!),
                      items: [
                        {
                          key: dataKeys[barIdx]!,
                          label: dataKeyLabels[barIdx]!,
                          value: Number(data[barGroupIdx]![dataKeys[barIdx]!]),
                          color: barColors[barIdx]!,
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

export { BarChartGroup };
