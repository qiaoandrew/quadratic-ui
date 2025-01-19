"use client";

import { useMemo, useRef } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

import useElementSize from "~/hooks/useElementSize";

type TooltipData = {
  month: string;
  desktop: number;
};

const CHART_DATA = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 142 },
];

let tooltipTimeout: number;

const MARGIN = { top: 48, right: 4, bottom: 64, left: 64 } as const;
const TICK_VALUES = [0, 60, 120, 180, 240, 300, 360];
const AXIS_LABEL_OFFSET = {
  bottom: 24,
  left: 44,
};
const TICK_LABEL_PROPS = {
  fill: "hsl(var(--muted-foreground))",
  fontSize: 12,
  fontFamily: "var(--font-sans)",
};
const AXIS_LABEL_CLASS_NAME = "fill-foreground text-3.5 font-medium font-sans";

const formatLabel = (month: string) => month.slice(0, 3);

export default function BarChartDemo() {
  const parentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(parentRef);

  const xMax = width - MARGIN.left - MARGIN.right;
  const yMax = height - MARGIN.top - MARGIN.bottom;

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: CHART_DATA.map((d) => d.month.slice(0, 3)),
        paddingInner: 0.25,
        paddingOuter: 0.1,
      }),
    [xMax],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [TICK_VALUES.at(0) ?? 0, TICK_VALUES.at(-1) ?? 0],
      }),
    [yMax],
  );

  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip<TooltipData>();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
  });

  return (
    <div ref={parentRef} className="h-96 w-full max-w-112">
      <svg ref={containerRef} width={width} height={height}>
        <Group top={MARGIN.top} left={MARGIN.left}>
          <GridRows
            scale={yScale}
            numTicks={TICK_VALUES.length}
            tickValues={TICK_VALUES}
            width={xMax}
            height={yMax}
            stroke="hsl(var(--border))"
          />
          {CHART_DATA.map((d) => {
            const label = formatLabel(d.month);
            const barWidth = xScale.bandwidth();
            const barHeight = Math.max(yMax - yScale(d.desktop), 0);
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
                  if (tooltipTimeout) clearTimeout(tooltipTimeout);

                  const eventSVGCoords = localPoint(e);
                  const left = barX + barWidth / 2;

                  showTooltip({
                    tooltipData: d,
                    tooltipTop: eventSVGCoords?.y,
                    tooltipLeft: left,
                  });
                }}
                onMouseLeave={() => {
                  tooltipTimeout = window.setTimeout(() => hideTooltip(), 150);
                }}
                key={`bar-${label}`}
              />
            );
          })}
          <AxisLeft
            scale={yScale}
            numTicks={TICK_VALUES.length}
            tickValues={TICK_VALUES}
            stroke="transparent"
            tickStroke="transparent"
            tickLabelProps={TICK_LABEL_PROPS}
            label="Views"
            labelOffset={AXIS_LABEL_OFFSET.left}
            labelClassName={AXIS_LABEL_CLASS_NAME}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickFormat={formatLabel}
            tickLabelProps={TICK_LABEL_PROPS}
            label="Month"
            labelOffset={AXIS_LABEL_OFFSET.bottom}
            labelClassName={AXIS_LABEL_CLASS_NAME}
          />
        </Group>
      </svg>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          top={tooltipTop}
          left={tooltipLeft}
          style={{}}
          className="pointer-events-none absolute flex min-w-28 flex-col gap-y-1 rounded-1.5 border bg-background p-2 text-3"
        >
          <p className="font-medium text-foreground">{tooltipData.month}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1.5">
              <div className="size-2 rounded-0.5 bg-[hsl(var(--chart-1))]" />
              <p className="text-muted-foreground">Views</p>
            </div>
            <p className="font-medium text-foreground">{tooltipData.desktop}</p>
          </div>
        </TooltipInPortal>
      )}
    </div>
  );
}
