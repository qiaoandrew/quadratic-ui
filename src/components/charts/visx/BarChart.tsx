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

interface BarChartProps<T> {
  data: T[];
  getValue: (d: T) => number;
  getXAxisLabel: (d: T) => string;
  formatXAxisLabel?: (label: string) => string;
  aspectRatio?: number;
}

function BarChart<T>({
  data,
  getValue,
  getXAxisLabel,
  formatXAxisLabel,
  aspectRatio = 4 / 3,
}: BarChartProps<T>) {
  const { config, containerWidth } = useChart();
  const {
    margin,
    tickValues,
    axisLabelOffset,
    axisLabelClassName,
    axisTitles,
    tickLabelProps,
  } = config;

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

  const dimensions = useMemo(() => {
    const height = containerWidth / aspectRatio;
    const xMax = containerWidth - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    return { height, xMax, yMax };
  }, [containerWidth, aspectRatio, margin]);

  const { height, xMax, yMax } = dimensions;

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map((d) => getXAxisLabel(d)),
        paddingInner: 0.25,
        paddingOuter: 0.1,
      }),
    [xMax, getXAxisLabel, data],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [tickValues.at(0) ?? 0, tickValues.at(-1) ?? 0],
      }),
    [yMax, tickValues],
  );

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
        style={{ width: "100%", height: "auto" }}
        viewBox={`0 0 ${containerWidth} ${height}`}
        preserveAspectRatio="xMidYMid meet"
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
            const label = getXAxisLabel(d);
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
                fill="hsl(var(--chart-1))"
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
            tickLabelProps={tickLabelProps}
            label={axisTitles.left}
            labelOffset={axisLabelOffset.left}
            labelClassName={axisLabelClassName}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickFormat={formatXAxisLabel}
            tickLabelProps={tickLabelProps}
            label={axisTitles.bottom}
            labelOffset={axisLabelOffset.bottom}
            labelClassName={axisLabelClassName}
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
            title={getXAxisLabel(tooltipData)}
            items={[
              {
                key: getXAxisLabel(tooltipData),
                label: axisTitles.left ?? "",
                value: getValue(tooltipData),
                color: "hsl(var(--chart-1))",
              },
            ]}
          />
        </TooltipInPortal>
      )}
    </>
  );
}

export { BarChart };
