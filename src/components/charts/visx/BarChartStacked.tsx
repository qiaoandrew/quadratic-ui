import { useCallback, useMemo, useRef } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarRounded, BarStack } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

import { useChart } from "~/components/charts/visx/Chart";
import { Tooltip } from "~/components/charts/visx/Tooltip";

interface BarChartStackedProps<T> {
  data: T[];
  keys: string[];
  keyLabels: string[];
  getXAxisLabel: (d: T) => string;
  formatXAxisLabel?: (label: string) => string;
  aspectRatio?: number;
}

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
];

function BarChartStacked<T>({
  data,
  keys,
  keyLabels,
  getXAxisLabel,
  formatXAxisLabel,
  aspectRatio = 4 / 3,
}: BarChartStackedProps<T>) {
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

  const tooltipTimeoutRef = useRef<number>(0);

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

  const colorScale = useMemo(
    () => scaleOrdinal({ domain: keys, range: COLORS }),
    [keys],
  );

  const handleMouseMove = useCallback(
    (barX: number, barWidth: number, d: T) =>
      (e: React.MouseEvent<SVGRectElement>) => {
        if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);

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
          <BarStack<T, string>
            data={data}
            keys={keys}
            xScale={xScale}
            yScale={yScale}
            color={colorScale}
            x={getXAxisLabel}
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
                    onMouseMove={handleMouseMove(
                      bar.x,
                      bar.width,
                      data[barIdx]!,
                    )}
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
            items={keys.map((key, i) => ({
              key,
              label: keyLabels[i] ?? "",
              value: (tooltipData as Record<string, number>)[key] ?? 0,
              color: COLORS[i] ?? "",
            }))}
          />
        </TooltipInPortal>
      )}
    </>
  );
}

export { BarChartStacked };
