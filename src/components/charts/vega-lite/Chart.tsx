"use client";

import { useEffect, useRef } from "react";
import vegaEmbed, { type VisualizationSpec } from "vega-embed";

interface ChartProps {
  spec: VisualizationSpec;
}

export default function Chart({ spec }: ChartProps) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      vegaEmbed(chartRef.current, spec, { actions: false }).catch(
        console.error,
      );
    }
  }, [spec]);

  return <div ref={chartRef} />;
}
