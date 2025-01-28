import { useCallback, useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { BarRounded } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

import { useChart } from "~/components/charts/visx/Chart";
import { Tooltip } from "~/components/charts/visx/Tooltip";

const getMargin = (showXAxisLabel: boolean, showYAxisLabel: boolean) => ({
  top: 12,
  right: 4,
  bottom: showXAxisLabel ? 64 : 12,
  left: showYAxisLabel ? 64 : 4,
});

interface BarChartProps<T> {
  data: T[];
  getValue: (d: T) => number;
  getXAxisTickLabel: (d: T) => string;
  formatXAxisTickLabel?: (label: string) => string;
  xAxisLabel: string;
  yAxisLabel: string;
  showXAxisLabel?: boolean;
  showYAxisLabel?: boolean;
  tickValues: number[];
  color: string;
  aspectRatio?: number;
}

function BarChart<T>({
  data,
  getValue,
  getXAxisTickLabel,
  formatXAxisTickLabel,
  xAxisLabel,
  yAxisLabel,
  showXAxisLabel = true,
  showYAxisLabel = true,
  tickValues,
  color,
  aspectRatio = 4 / 3,
}: BarChartProps<T>) {
  const { width } = useChart();
  const margin = getMargin(showXAxisLabel, showYAxisLabel);
  const height = width / aspectRatio;
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

  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip<T>();
  const { containerRef: tooltipContainerRef, TooltipInPortal } =
    useTooltipInPortal({ scroll: true });

  const handleMouseMove = useCallback(
    (barX: number, barWidth: number, d: T) =>
      (e: React.MouseEvent<SVGRectElement>) => {
        const eventSVGCoords = localPoint(e);
        const left = barX + barWidth / 2;

        showTooltip({
          tooltipData: d,
          tooltipTop: eventSVGCoords?.y,
          tooltipLeft: left,
        });
      },
    [showTooltip],
  );

  return (
    <>
      <svg
        ref={tooltipContainerRef}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className="size-full"
      >
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
            const label = getXAxisTickLabel(d);
            const width = xScale.bandwidth();
            const height = Math.max(yMax - yScale(getValue(d)), 0);
            const x = xScale(label) ?? 0;
            const y = yMax - height;

            return (
              <BarRounded
                x={x}
                y={y}
                width={width}
                height={height}
                fill={color}
                radius={6}
                all
                onMouseMove={handleMouseMove(x, width, d)}
                onMouseLeave={hideTooltip}
                key={`bar-${i}`}
              />
            );
          })}
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
            labelClassName="fill-foreground text-3-5 font-medium font-sans"
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
            labelClassName="fill-foreground text-3-5 font-medium font-sans"
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
          <Tooltip
            title={getXAxisTickLabel(tooltipData)}
            items={[
              {
                key: getXAxisTickLabel(tooltipData),
                label: yAxisLabel,
                value: getValue(tooltipData),
                color,
              },
            ]}
          />
        </TooltipInPortal>
      )}
    </>
  );
}

export { BarChart };
