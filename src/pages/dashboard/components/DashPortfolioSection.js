import React from "react";
import * as Home from "../../dashboard/dashboard.styles";
import DashboardChart from "../components/DashboardChart";

const DashPortfolioSection = props => {
  return (
    <Home.DashboardPortfolio>
      <Home.DashboardPortfolioSection>
        <Home.DashboardPortfolioTop>
          <Home.PortfolioHeader>Portfolio</Home.PortfolioHeader>
          <Home.DashboardPortfolioItems>
            {/* The doughnut chart for the dashboard portfolio section */}
            <DashboardChart chartData={props.chartData} />
            <Home.PortfolioSeperator />
            <Home.PortfolioBalance>
              <Home.Portfolioh1>Total Balance</Home.Portfolioh1>
              <Home.PortfolioP>
                ${props.simplifyPrice(props.totalData)}
              </Home.PortfolioP>
            </Home.PortfolioBalance>
          </Home.DashboardPortfolioItems>
        </Home.DashboardPortfolioTop>
      </Home.DashboardPortfolioSection>
    </Home.DashboardPortfolio>
  );
};

export default DashPortfolioSection;
