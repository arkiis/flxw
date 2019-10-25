import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";
import * as Home from "../../dashboard/dashboard.styles";
import logo from "../../../assets/images/flxw-logo.jpg";
import styled from "styled-components";

const ChartStyles = styled.div`
  position: relative;

  @media ${props => props.theme.mediaQueries.medium} {
    width: 50%;
  }
`;

const DashboardChart = props => {
  const [barData, setBarData] = useState({});
  console.log(props.chartData);

  useEffect(() => {
    setBarData(props.chartData);
  }, [props.chartData]);

  return (
    <ChartStyles>
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
    </ChartStyles>
  );
};

export default DashboardChart;
