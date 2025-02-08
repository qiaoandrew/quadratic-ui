"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { localPoint } from "@visx/event";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

import {
  type TooltipData,
  type TooltipHandleMouseMoveParams,
  Tooltip,
} from "~/components/charts/visx/Tooltip";

interface ChartContextProps {
  width: number;
  height: number;
  handleMouseMove: ({
    top,
    left,
    title,
    items,
  }: TooltipHandleMouseMoveParams) => (
    e: React.MouseEvent<SVGRectElement>,
  ) => void;
  hideTooltip: () => void;
}

const ChartContext = createContext<ChartContextProps | null>(null);

function useChart() {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

interface ChartContainerProps {
  aspectRatio: number;
  className?: string;
  children: React.ReactNode;
}

function ChartContainer({
  aspectRatio,
  className,
  children,
}: ChartContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const height = width / aspectRatio;

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      if (entry) {
        setWidth(entry.contentRect.width);
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    showTooltip,
    hideTooltip,
  } = useTooltip<TooltipData>();
  const { containerRef: tooltipContainerRef, TooltipInPortal } =
    useTooltipInPortal({ scroll: true });

  const handleMouseMove = useCallback(
    ({ top, left, title, items }: TooltipHandleMouseMoveParams) =>
      (e: React.MouseEvent<SVGElement>) => {
        const eventSVGCoords = localPoint(e);
        const tooltipTop = top ?? eventSVGCoords?.y;
        const tooltipLeft = left ?? eventSVGCoords?.x;

        showTooltip({ tooltipData: { title, items }, tooltipTop, tooltipLeft });
      },
    [showTooltip],
  );

  return (
    <ChartContext.Provider
      value={{ width, height, handleMouseMove, hideTooltip }}
    >
      <div
        ref={containerRef}
        className={`relative ${className}`}
        style={{ aspectRatio }}
      >
        <svg
          ref={tooltipContainerRef}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="size-full"
        >
          {children}
        </svg>
        {tooltipOpen && tooltipData && (
          <TooltipInPortal
            top={tooltipTop}
            left={tooltipLeft}
            unstyled
            className="pointer-events-none absolute"
          >
            <Tooltip title={tooltipData.title} items={tooltipData.items} />
          </TooltipInPortal>
        )}
      </div>
    </ChartContext.Provider>
  );
}

export { ChartContainer, useChart };
