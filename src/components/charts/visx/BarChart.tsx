import { useEffect, useMemo, useRef, useState } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

import { useChartConfig } from "~/components/charts/visx/Chart";
import { TooltipContent } from "~/components/charts/visx/Tooltip";

interface BarChartProps<T> {
  data: T[];
  getValue: (d: T) => number;
  getLabel: (d: T) => string;
  formatLabel?: (label: string) => string;
  aspectRatio?: number;
  className?: string;
}

function BarChart<T>({
  data,
  getValue,
  getLabel,
  formatLabel,
  aspectRatio = 4 / 3,
  className,
}: BarChartProps<T>) {
  const { config } = useChartConfig();
  const {
    margin,
    tickValues,
    axisLabelOffset,
    axisLabelClassName,
    axisLabels,
    tickLabelProps,
  } = config;

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    };
  });

  const height = containerWidth / aspectRatio;
  const xMax = containerWidth - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

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

  return (
    <div ref={containerRef} className={className}>
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
          {data.map((d) => {
            const label = getLabel(d);
            const barWidth = xScale.bandwidth();
            const barHeight = Math.max(yMax - yScale(getValue(d)), 0);
            const barX = xScale(label) ?? 0;
            const barY = yMax - barHeight;

            return (
              <Bar
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="hsl(var(--chart-1))"
                rx={6}
                onMouseMove={(e) => {
                  if (tooltipTimeoutRef.current)
                    clearTimeout(tooltipTimeoutRef.current);

                  const eventSVGCoords = localPoint(e);
                  const left = barX + barWidth / 2;

                  showTooltip({
                    tooltipData: d,
                    tooltipTop: eventSVGCoords?.y,
                    tooltipLeft: left,
                  });
                }}
                onMouseLeave={() => {
                  tooltipTimeoutRef.current = window.setTimeout(
                    () => hideTooltip(),
                    150,
                  );
                }}
                key={`bar-${label}`}
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
          <TooltipContent<T>
            datum={tooltipData}
            getLabel={getLabel}
            getValue={getValue}
            axisLabel={axisLabels.left}
          />
        </TooltipInPortal>
      )}
    </div>
  );
}

export { BarChart };
