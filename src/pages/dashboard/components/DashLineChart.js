import React from "react";
import * as Home from "../dashboard.styles";
import { Line } from "react-chartjs-2";

const DashLineChart = () => {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#ff2734",
        borderColor: "#A847FF",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#DBB3FF",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "DBB3FF",
        pointHoverBorderColor: "DBB3FF",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <Home.DashboardLineWrapper>
      <div style={{ width: "100%" }}>
        <Line
          data={data}
          backgroundColor={"green"}
          height="100%"
          options={{
            scales: {
              xAxes: [
                {
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: false,
                    color: false,
                    drawBorder: false
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: false,
                    color: false,
                    drawBorder: false
                  }
                }
              ]
            },
            elements: {
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 5
              }
            },
            tooltips: {
              enabled: false
            },
            legend: {
              display: false
            },
            scaleShowLabels: false
          }}
        />
      </div>
    </Home.DashboardLineWrapper>
  );
};

export default DashLineChart;
