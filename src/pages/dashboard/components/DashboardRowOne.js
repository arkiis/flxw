import React from "react";
import * as Home from "../../dashboard/dashboard.styles";
import DashPortfolioSection from "./DashPortfolioSection";
import DashboardColumnOne from "./DashboardColumnOne";

const DashboardRowOne = props => {
  return (
    <Home.DashboardHeaderWrapper>
      {/* Following component */}
      <DashboardColumnOne simplifyPrice={props.simplifyPrice} />
      {/* Portfolio component */}
      <DashPortfolioSection
        totalData={props.totalData}
        chartData={props.chartData}
        simplifyPrice={props.simplifyPrice}
      />
    </Home.DashboardHeaderWrapper>
  );
};

export default DashboardRowOne;
