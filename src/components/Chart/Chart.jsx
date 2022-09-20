import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.css";

function Chart({ dataPoints }) {
  const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximim = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {dataPoints.map((element) => (
        <Chartbar
          key={element.label}
          value={element.value}
          maxValue={totalMaximim}
          label={element.label}
        />
      ))}
    </div>
  );
}

export default Chart;
