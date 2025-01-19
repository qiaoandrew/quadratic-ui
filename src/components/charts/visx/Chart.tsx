"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

interface ChartConfig {
  margin: { top: number; right: number; bottom: number; left: number };
  tickValues: number[];
  axisLabelOffset: Partial<{
    top: number;
    right: number;
    bottom: number;
    left: number;
  }>;
  axisLabelClassName?: string;
  axisLabels: Partial<{
    top: string;
    right: string;
    bottom: string;
    left: string;
  }>;
}

const DEFAULT_CONFIG: ChartConfig = {
  margin: { top: 12, right: 4, bottom: 64, left: 64 },
  tickValues: [0, 60, 120, 180, 240, 300, 360],
  axisLabelOffset: { top: 0, right: 0, bottom: 24, left: 44 },
  axisLabelClassName: "fill-foreground text-3.5 font-medium font-sans",
  axisLabels: { top: "", right: "", bottom: "", left: "" },
} as const;

const TICK_LABEL_PROPS = {
  fill: "hsl(var(--muted-foreground))",
  fontSize: 12,
  fontFamily: "var(--font-sans)",
} as const;

interface TooltipContentProps<T> {
  datum: T;
  getLabel: (d: T) => string;
  getValue: (d: T) => number;
  axisLabel?: string;
}

function TooltipContent<T>({
  datum,
  getLabel,
  getValue,
  axisLabel,
}: TooltipContentProps<T>) {
  return (
    <div className="flex min-w-28 flex-col gap-y-1 rounded-1.5 border bg-background p-2 text-3">
      <p className="font-medium text-foreground">{getLabel(datum)}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1.5">
          <div className="size-2 rounded-0.5 bg-[hsl(var(--chart-1))]" />
          <p className="text-muted-foreground">{axisLabel}</p>
        </div>
        <p className="font-medium text-foreground">{getValue(datum)}</p>
      </div>
    </div>
  );
}

interface BarChartProps<T> {
  data: T[];
  getValue: (d: T) => number;
  getLabel: (d: T) => string;
  formatLabel: (label: string) => string;
  config?: Partial<ChartConfig>;
  aspectRatio?: number;
  className?: string;
}

function BarChart<T>({
  data,
  getValue,
  getLabel,
  formatLabel,
  config,
  aspectRatio = 4 / 3,
  className,
}: BarChartProps<T>) {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const {
    margin,
    tickValues,
    axisLabelOffset,
    axisLabelClassName,
    axisLabels,
  } = fullConfig;

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
            tickLabelProps={TICK_LABEL_PROPS}
            label={axisLabels.left}
            labelOffset={axisLabelOffset.left}
            labelClassName={axisLabelClassName}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickFormat={formatLabel}
            tickLabelProps={TICK_LABEL_PROPS}
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
          style={{}}
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

export { type ChartConfig, BarChart };
