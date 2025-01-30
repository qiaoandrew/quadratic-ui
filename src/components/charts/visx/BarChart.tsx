import { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { BarRounded } from "@visx/shape";
import type { Accessor } from "@visx/shape/lib/types";

import { getBarChartMargin } from "~/utils/visx";

import { useChart } from "~/components/charts/visx/Chart";

interface BarChartProps<T> {
  data: T[];
  dataKey: Extract<keyof T, string>;
  getXAxisTickLabel: Accessor<T, string>;
  formatXAxisTickLabel?: (label: string) => string;
  xAxisLabel: string;
  yAxisLabel: string;
  showXAxisLabel?: boolean;
  showYAxisLabel?: boolean;
  tickValues: number[];
  barColor: string;
}

function BarChart<T>({
  data,
  dataKey,
  getXAxisTickLabel,
  formatXAxisTickLabel,
  xAxisLabel,
  yAxisLabel,
  showXAxisLabel = true,
  showYAxisLabel = true,
  tickValues,
  barColor,
}: BarChartProps<T>) {
  const { width, height, handleMouseMove, hideTooltip } = useChart();

  const margin = getBarChartMargin(showXAxisLabel, showYAxisLabel);
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
        const label = getXAxisTickLabel(d);
        const width = xScale.bandwidth();
        const height = Math.max(yMax - yScale(value), 0);
        const x = xScale(label) ?? 0;
        const y = yMax - height;

<<<<<<< HEAD
            return (
              <BarRounded
                x={x}
                y={y}
                width={width}
                height={height}
                fill={color}
                radius={6}
                all
                onMouseMove={handleMouseMove({
                  left: x + width / 2,
                  title: getXAxisTickLabel(data[i]!),
                  items: [
                    {
                      key: getXAxisTickLabel(d),
                      label: yAxisLabel,
                      value: getValue(d),
                      color,
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
            label={showYAxisLabel ? yAxisLabel : ""}
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
            label={showXAxisLabel ? xAxisLabel : ""}
            labelClassName="fill-foreground text-3.5 font-medium font-sans"
            labelOffset={24}
            tickFormat={formatXAxisTickLabel}
            tickLabelProps={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 12,
              fontFamily: "var(--font-sans)",
            }}
            tickStroke="transparent"
          />
        </Group>
      </svg>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          top={tooltipTop}
          left={tooltipLeft}
          unstyled
          className="pointer-events-none absolute"
        >
          <Tooltip title={tooltipData.title} items={tooltipData.items} />
        </TooltipInPortal>
      )}
    </>
=======
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
              title: getXAxisTickLabel(data[i]!),
              items: [
                {
                  key: getXAxisTickLabel(d),
                  label: yAxisLabel,
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
        label={showYAxisLabel ? yAxisLabel : ""}
        labelClassName="fill-foreground text-3-5 font-medium font-sans"
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
        label={showXAxisLabel ? xAxisLabel : ""}
        labelClassName="fill-foreground text-3-5 font-medium font-sans"
        labelOffset={24}
        tickFormat={formatXAxisTickLabel}
        tickLabelProps={{
          fill: "hsl(var(--muted-foreground))",
          fontSize: 12,
          fontFamily: "var(--font-sans)",
        }}
        tickStroke="transparent"
      />
    </Group>
>>>>>>> 6b6607f (remove getValue from bar charts in favor of passing in data keys, move tooltip rendering into chart component, upgrade dependencies)
  );
}

export { BarChart };
