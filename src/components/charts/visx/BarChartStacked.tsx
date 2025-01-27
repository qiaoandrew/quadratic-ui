import { useCallback, useEffect, useMemo, useRef } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { localPoint } from "@visx/event";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { Bar, BarStack } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

import { useChartConfig } from "~/components/charts/visx/Chart";

interface BarChartStackedProps<T> {
  data: T[];
  getKey: (d: T) => string;
  getValues: ((d: T) => number)[];
  getLabel: (d: T) => string;
  formatLabel?: (label: string) => string;
  aspectRatio?: number;
}

function BarChartStacked<T>({
  data,
  getKey,
  getValues,
  getLabel,
  formatLabel,
  aspectRatio = 4 / 3,
}: BarChartStackedProps<T>) {
  const { config, containerWidth } = useChartConfig();
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

  const tooltipTimeoutRef = useRef<number>(0);

  const { containerRef: tooltipContainerRef, TooltipInPortal } =
    useTooltipInPortal({ scroll: true });

  useEffect(() => {
    const timeoutRefValue = tooltipTimeoutRef.current;
    return () => {
      if (timeoutRefValue) {
        clearTimeout(timeoutRefValue);
      }
    };
  });

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

  const colorScale = useMemo(
    () =>
      scaleOrdinal({
        domain: ["desktopViews", "mobileViews", "tabletViews"],
        range: [
          "hsl(var(--chart-1))",
          "hsl(var(--chart-2))",
          "hsl(var(--chart-3))",
        ],
      }),
    [],
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
            keys={["desktopViews", "mobileViews", "tabletViews"]}
            xScale={xScale}
            yScale={yScale}
            color={colorScale}
            x={getLabel}
          >
            {(barStacks) =>
              barStacks.map((barStack, barStackIdx) =>
                barStack.bars.map((bar, barIdx) => {
                  const isFirstBar = barStackIdx === 0;
                  const isLastBar = barStackIdx === barStacks.length - 1;

                  const path = `
                    M ${bar.x + (isLastBar ? 6 : 0)} ${bar.y}
                    h ${bar.width - (isLastBar ? 6 : 0) - (isLastBar ? 6 : 0)}
                    ${isLastBar ? `a 6 6 0 0 1 6 6` : ""}
                    v ${bar.height - (isLastBar ? 6 : 0) - (isFirstBar ? 6 : 0)}
                    ${isFirstBar ? `a 6 6 0 0 1 -6 6` : ""}
                    h -${bar.width - (isFirstBar ? 6 : 0) - (isFirstBar ? 6 : 0)}
                    ${isFirstBar ? `a 6 6 0 0 1 -6 -6` : ""}
                    v -${bar.height - (isFirstBar ? 6 : 0) - (isLastBar ? 6 : 0)}
                    ${isLastBar ? `a 6 6 0 0 1 6 -6` : ""}
                  `;

                  return (
                    <path
                      d={path}
                      fill={bar.color}
                      onMouseMove={handleMouseMove(
                        bar.x,
                        bar.width,
                        data[barIdx]!,
                      )}
                      onMouseLeave={hideTooltip}
                      key={`${barStack.index}-${bar.index}`}
                    />
                  );
                }),
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
        ></TooltipInPortal>
      )}
    </>
  );
}

export { BarChartStacked };
