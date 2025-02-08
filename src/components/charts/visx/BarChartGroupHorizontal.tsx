import { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridColumns } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarRounded, BarGroupHorizontal } from "@visx/shape";
import type { Accessor, DatumObject } from "@visx/shape/lib/types";

import { getBarChartMargin } from "~/utils/visx";

import { useChart } from "~/components/charts/visx/ChartContainer";

interface BarChartGroupHorizontalProps<T extends DatumObject> {
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
  colors: string[];
}

function BarChartGroupHorizontal<T extends DatumObject>({
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
  colors,
}: BarChartGroupHorizontalProps<T>) {
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
        range: [0, xMax],
        round: true,
        domain: [tickValues[0] ?? 0, tickValues[tickValues.length - 1] ?? 0],
      }),
    [xMax, tickValues],
  );

  const colorScale = useMemo(
    () => scaleOrdinal({ domain: dataKeys, range: colors }),
    [dataKeys, colors],
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
        <BarGroupHorizontal<T, string>
          data={data}
          keys={dataKeys}
          width={xMax}
          height={yMax}
          y0={getCategoryAxisTickLabel}
          y0Scale={categoricalScale}
          y1Scale={categorialGroupScale}
          xScale={numericScale}
          color={colorScale}
        >
          {(barGroups) =>
            barGroups.map((barGroup, barGroupIdx) => (
              <Group
                key={`bar-group-${barGroupIdx}-${barGroup.y0}`}
                top={barGroup.y0}
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
                      top: barGroup.y0 + bar.y + bar.height / 2,
                      title: getCategoryAxisTickLabel(data[barGroupIdx]!),
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
        </BarGroupHorizontal>
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

export { BarChartGroupHorizontal };
