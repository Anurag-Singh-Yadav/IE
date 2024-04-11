import React, { useState } from "react";
import Chart from "react-apexcharts";

function LineChartProgressReport() {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ],
  });

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="500"
        markers={chartData.markers}
      />
    </div>
  );
}

export default LineChartProgressReport;
