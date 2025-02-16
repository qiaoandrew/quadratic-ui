"use client";

import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function BarChartDemo() {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Views",
    },
    xAxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
      title: {
        text: "Month",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Views",
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "Desktop",
        data: [186, 305, 237, 73, 209, 214],
      },
    ] as Highcharts.SeriesOptionsType[],
  });

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}
