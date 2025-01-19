"use client";

import { useMemo, useRef } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridRows } from "@visx/grid";
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
  { month: "July", desktop: 142 },
];

let tooltipTimeout: number;

export default function BarChartDemo() {
  const parentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(parentRef);

  const xMax = width - 72;
  const yMax = height - 112;

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
        domain: [0, 360],
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
    <div ref={parentRef} className="h-96 w-full max-w-[480px]">
      <svg ref={containerRef} width={width} height={height}>
        <Group top={48} left={68}>
          <GridRows
            scale={yScale}
            numTicks={7}
            tickValues={[0, 60, 120, 180, 240, 300, 360]}
            width={xMax}
            height={yMax}
            stroke="hsl(var(--border))"
          />
          {CHART_DATA.map((d) => {
            const label = d.month.slice(0, 3);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - yScale(d.desktop);
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
                  tooltipTimeout = window.setTimeout(() => {
                    hideTooltip();
                  }, 150);
                }}
                key={`bar-${label}`}
              />
            );
          })}
          <AxisLeft
            scale={yScale}
            numTicks={7}
            tickValues={[0, 60, 120, 180, 240, 300, 360]}
            stroke="transparent"
            tickStroke="transparent"
            tickLabelProps={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 12,
              fontFamily: "var(--font-sans)",
              lineHeight: 0,
              dx: -4,
            }}
            label="Views"
            labelOffset={48}
            labelProps={{
              fill: "hsl(var(--foreground))",
              fontSize: 14,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickFormat={(month) => month.slice(0, 3)}
            tickLabelProps={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 12,
              textAnchor: "middle",
              fontFamily: "var(--font-sans)",
            }}
            label="Month"
            labelOffset={24}
            labelProps={{
              fill: "hsl(var(--foreground))",
              fontSize: 14,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
          />
        </Group>
      </svg>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          top={tooltipTop}
          left={tooltipLeft}
          style={{
            ...defaultStyles,
            padding: "8px",
            minWidth: 120,
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderWidth: 1,
            fontSize: 14,
            display: "flex",
            flexDirection: "column",
            rowGap: 4,
            borderRadius: 6,
          }}
        >
          <p className="text-3 font-medium text-foreground">
            {tooltipData.month}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1.5">
              <div className="size-2 rounded-0.5 bg-[hsl(var(--chart-1))]" />
              <p className="text-3 text-muted-foreground">Views</p>
            </div>
            <p className="text-3 font-medium text-foreground">
              {tooltipData.desktop}
            </p>
          </div>
        </TooltipInPortal>
      )}
    </div>
  );
}
