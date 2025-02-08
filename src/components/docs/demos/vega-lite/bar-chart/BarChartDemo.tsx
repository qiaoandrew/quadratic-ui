import type { VisualizationSpec } from "vega-embed";

import Chart from "~/components/charts/vega-lite/Chart";

export default function BarChartDemo() {
  const spec: VisualizationSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: {
      values: [
        { month: "Jan", value: 10 },
        { month: "Feb", value: 20 },
        { month: "Mar", value: 15 },
        { month: "Apr", value: 25 },
        { month: "May", value: 30 },
      ],
    },
    mark: "bar",
    encoding: {
      x: { field: "month", type: "nominal" },
      y: { field: "value", type: "quantitative" },
    },
    width: 400,
    height: 300,
  };

  return <Chart spec={spec} />;
}
