import { useCallback, useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

import { useChart } from "~/components/charts/visx/Chart";
import { Tooltip } from "~/components/charts/visx/Tooltip";

interface BarChartProps<T> {
  data: T[];
  getKey: (d: T) => string;
  getValue: (d: T) => number;
  getLabel: (d: T) => string;
  formatLabel?: (label: string) => string;
  aspectRatio?: number;
}

function BarChart<T>({
  data,
  getKey,
  getValue,
  getLabel,
  formatLabel,
  aspectRatio = 4 / 3,
}: BarChartProps<T>) {
  const { config, containerWidth } = useChart();
  const {
    margin,
    tickValues,
    axisLabelOffset,
    axisLabelClassName,
    axisLabels,
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
        domain: data.map((d) => getLabel(d)),
        paddingInner: 0.25,
        paddingOuter: 0.1,
      }),
    [xMax, getLabel, data],
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
          {data.map((d) => (
            <BarChartBar
              datum={d}
              getValue={getValue}
              getLabel={getLabel}
              xScale={xScale}
              yScale={yScale}
              yMax={yMax}
              onMouseMove={handleMouseMove}
              onMouseLeave={hideTooltip}
              key={getKey(d)}
            />
          ))}
          <AxisLeft
            scale={yScale}
            numTicks={tickValues.length}
            tickValues={tickValues}
            stroke="transparent"
            tickStroke="transparent"
            tickLabelProps={tickLabelProps}
            label={axisLabels.left}
            labelOffset={axisLabelOffset.left}
            labelClassName={axisLabelClassName}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickFormat={formatLabel}
            tickLabelProps={tickLabelProps}
            label={axisLabels.bottom}
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
            title={getLabel(tooltipData)}
            items={[
              {
                key: getLabel(tooltipData),
                label: axisLabels.left ?? "",
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

interface BarChartBarProps<T> {
  datum: T;
  xScale: ReturnType<typeof scaleBand<string>>;
  yScale: ReturnType<typeof scaleLinear<number>>;
  yMax: number;
  getLabel: (d: T) => string;
  getValue: (d: T) => number;
  onMouseMove: (
    barX: number,
    barWidth: number,
    d: T,
  ) => (e: React.MouseEvent<SVGRectElement>) => void;
  onMouseLeave: () => void;
}

function BarChartBar<T>({
  datum,
  xScale,
  yScale,
  yMax,
  getLabel,
  getValue,
  onMouseMove,
  onMouseLeave,
}: BarChartBarProps<T>) {
  const label = getLabel(datum);
  const width = xScale.bandwidth();
  const height = Math.max(yMax - yScale(getValue(datum)), 0);
  const x = xScale(label) ?? 0;
  const y = yMax - height;

  return (
    <Bar
      x={x}
      y={y}
      width={width}
      height={height}
      fill="hsl(var(--chart-1))"
      rx={6}
      onMouseMove={onMouseMove(x, width, datum)}
      onMouseLeave={onMouseLeave}
    />
  );
}

export { BarChart };
