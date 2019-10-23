import React from "react";
import * as Home from "../../dashboard/dashboard.styles";
import DashPortfolioSection from "./DashPortfolioSection";
import DashFollowingSection from "../components/DashFollowingSection";

const DashboardRowOne = props => {
  return (
    <Home.DashboardHeaderWrapper>
      {/* Following component */}
      <DashFollowingSection simplifyPrice={props.simplifyPrice} />
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
