import React from "react";
import * as Home from "../../dashboard/dashboard.styles";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

const DashboardMarketAct = ({ loadProgress }) => {
  return (
    <Home.DashboardPortfolioSection>
      <Home.PortfolioHeader>Todays Market Activity</Home.PortfolioHeader>
      <Home.DashboardFollowingItems>
        <ProgressBar
          percentage={30}
          loadProgress={loadProgress}
          name={"United States"}
          background={"C585FF"}
        />
        <ProgressBar
          percentage={20}
          loadProgress={loadProgress}
          name={"Canada"}
          background={"D72483"}
        />
        <ProgressBar
          percentage={50}
          loadProgress={loadProgress}
          name={"Australia"}
          background={"E5C7FF"}
        />
      </Home.DashboardFollowingItems>
    </Home.DashboardPortfolioSection>
  );
};

export default DashboardMarketAct;
