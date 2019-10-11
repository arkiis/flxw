import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";
import * as Home from "../../dashboard/dashboard.styles";
import logo from "../../../assets/images/flxw-logo.jpg";

const DashboardChart = props => {
  const [barData, setBarData] = useState({});
  console.log(props.chartData);

  useEffect(() => {
    setBarData(props.chartData);
  }, [props.chartData]);

  return (
    <div style={{ position: "relative" }}>
      <Doughnut
        height="220px"
        data={barData}
        options={{
          cutoutPercentage: 84,
          legend: {
            display: false
          }
        }}
      />
    </div>
  );
};

export default DashboardChart;
