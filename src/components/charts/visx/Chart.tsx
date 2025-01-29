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
import type { UseTooltipParams } from "@visx/tooltip/lib/hooks/useTooltip";
import type { TooltipInPortalProps } from "@visx/tooltip/lib/hooks/useTooltipInPortal";

import type {
  TooltipData,
  TooltipHandleMouseMoveParams,
} from "~/components/charts/visx/Tooltip";

interface ChartContextProps {
  width: number;
  tooltipParams: UseTooltipParams<TooltipData>;
  tooltipContainerRef: (element: HTMLElement | SVGElement | null) => void;
  TooltipInPortal: React.FC<TooltipInPortalProps>;
  handleMouseMove: ({
    left,
    title,
    items,
  }: TooltipHandleMouseMoveParams) => (
    e: React.MouseEvent<SVGRectElement>,
  ) => void;
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
  className?: string;
  children: React.ReactNode;
}

function ChartContainer({ className, children }: ChartContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

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

  const tooltipParams = useTooltip<TooltipData>();
  const { containerRef: tooltipContainerRef, TooltipInPortal } =
    useTooltipInPortal({ scroll: true });

  const handleMouseMove = useCallback(
    ({ left, title, items }: TooltipHandleMouseMoveParams) =>
      (e: React.MouseEvent<SVGRectElement>) => {
        const eventSVGCoords = localPoint(e);

        tooltipParams.showTooltip({
          tooltipData: { title, items },
          tooltipTop: eventSVGCoords?.y,
          tooltipLeft: left,
        });
      },
    [tooltipParams],
  );

  return (
    <ChartContext.Provider
      value={{
        width,
        tooltipParams,
        tooltipContainerRef,
        TooltipInPortal,
        handleMouseMove,
      }}
    >
      <div ref={containerRef} className={`relative ${className}`}>
        {children}
      </div>
    </ChartContext.Provider>
  );
}

export { ChartContainer, useChart };
