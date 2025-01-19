"use client";

import { useState, useMemo, useRef } from "react";
import { Group } from "@visx/group";
import { GradientOrangeRed, GradientPinkRed } from "@visx/gradient";
import { RectClipPath } from "@visx/clip-path";
import { voronoi, Polygon } from "@visx/delaunay";
import { localPoint } from "@visx/event";
import { getSeededRandom } from "@visx/mock-data";

import useElementSize from "~/hooks/useElementSize";

type Datum = {
  x: number;
  y: number;
  id: string;
};

const seededRandom = getSeededRandom(0.88);

const data: Datum[] = new Array(150).fill(null).map(() => ({
  x: seededRandom(),
  y: seededRandom(),
  id: Math.random().toString(36).slice(2),
}));

export default function VoronoiChartDemo() {
  const parentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const { width, height } = useElementSize(parentRef);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [neighborIds, setNeighborIds] = useState<Set<string>>(new Set());

  const voronoiDiagram = useMemo(
    () =>
      voronoi<Datum>({
        data,
        x: (d) => d.x * width,
        y: (d) => d.y * height,
        width,
        height,
      }),
    [width, height],
  );

  return (
    <div ref={parentRef} className="h-64 w-full md:h-96">
      <svg ref={svgRef} width="100%" height="100%">
        <GradientOrangeRed id="voronoi_orange_red" />
        <GradientPinkRed id="voronoi_pink_red" />
        <RectClipPath id="voronoi_clip" width={width} height={height} />
        <Group
          clipPath="url(#voronoi_clip)"
          onMouseMove={(e) => {
            if (!svgRef.current) return;

            const point = localPoint(svgRef.current, e);
            if (!point) return;

            const closest = voronoiDiagram.delaunay.find(point.x, point.y);
            if (closest && data.at(closest)?.id !== hoveredId) {
              const neighbors = Array.from(voronoiDiagram.neighbors(closest));
              setNeighborIds(
                new Set(
                  neighbors
                    .map((d) => data[d]?.id)
                    .filter((id) => id !== undefined),
                ),
              );
              setHoveredId(data[closest]?.id ?? null);
            }
          }}
          onMouseLeave={() => {
            setHoveredId(null);
            setNeighborIds(new Set());
          }}
        >
          {data.map((d, i) => (
            <Polygon
              polygon={voronoiDiagram.cellPolygon(i)}
              fill={
                hoveredId && (d.id === hoveredId || neighborIds.has(d.id))
                  ? "url(#voronoi_orange_red)"
                  : "url(#voronoi_pink_red)"
              }
              stroke="#fff"
              strokeWidth={1}
              fillOpacity={hoveredId && neighborIds.has(d.id) ? 0.5 : 1}
              key={`polygon-${d.id}`}
            />
          ))}
          {data.map(({ x, y, id }) => (
            <circle
              key={`circle-${id}`}
              r={2}
              cx={x * width}
              cy={y * height}
              fill={id === hoveredId ? "fuchsia" : "#fff"}
              fillOpacity={0.8}
            />
          ))}
        </Group>
      </svg>
    </div>
  );
}
