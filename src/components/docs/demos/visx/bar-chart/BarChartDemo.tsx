"use client";

import { useMemo, useRef } from "react";
import { AxisBottom } from "@visx/axis";
import { localPoint } from "@visx/event";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip";

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
];

let tooltipTimeout: number;

export default function BarChartDemo() {
  const parentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(parentRef);

  const xMax = width - 48;
  const yMax = height - 96;

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: CHART_DATA.map((d) => d.month.slice(0, 3)),
        padding: 0.4,
      }),
    [xMax],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...CHART_DATA.map((d) => d.desktop))],
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
    <div ref={parentRef} className="h-64 w-full max-w-96 md:h-96">
      <svg ref={containerRef} width={width} height={height}>
        <Group top={48} left={24}>
          {CHART_DATA.map((d) => {
            const label = d.month.slice(0, 3);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - yScale(d.desktop);
            const barX = xScale(label) ?? 0;
            const barY = yMax - barHeight ?? 0;

            return (
              <Bar
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="hsl(var(--chart-1))"
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
                  tooltipTimeout = window.setTimeout(() => {
                    hideTooltip();
                  }, 300);
                }}
                key={`bar-${label}`}
              />
            );
          })}
        </Group>
        <AxisBottom
          left={24}
          top={yMax + 48}
          scale={xScale}
          tickFormat={(month) => month.slice(0, 3)}
          stroke="hsl(var(--muted-foreground))"
          tickStroke="hsl(var(--muted-foreground))"
          tickLabelProps={{
            fill: "hsl(var(--muted-foreground))",
            fontSize: 12,
            textAnchor: "middle",
            fontFamily: "var(--font-sans)",
          }}
        />
      </svg>

      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          top={tooltipTop}
          left={tooltipLeft}
          style={{
            ...defaultStyles,
            minWidth: 60,
            backgroundColor: "rgba(0,0,0,0.9)",
            borderColor: "hsl(var(--border))",
            borderWidth: 1,
            color: "white",
          }}
        >
          <div>{tooltipData.month}</div>
        </TooltipInPortal>
      )}
    </div>
  );
}
