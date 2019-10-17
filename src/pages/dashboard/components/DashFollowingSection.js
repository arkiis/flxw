import React, { useState } from "react";
import * as Home from "../../dashboard/dashboard.styles";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

const DashFollowingSection = () => {
  const [percentage, setPercentage] = useState(0);
  const [background, setBackground] = useState("");
  const [name, setName] = useState("");

  const loadProgress = perc => {
    setPercentage(perc);
  };

  console.log(percentage);
  return (
    <Home.DashboardFollowing>
      <Home.FollowingSection>
        <Home.DashboardPortfolioSection>
          <Home.PortfolioHeader>Following</Home.PortfolioHeader>
          <Home.DashboardFollowingItems>
            <p>dummy text</p>
            <p>dummy text</p>
          </Home.DashboardFollowingItems>
        </Home.DashboardPortfolioSection>
      </Home.FollowingSection>
      <Home.DashboardPortfolioSection>
        <Home.PortfolioHeader>Todays Market Activity</Home.PortfolioHeader>
        <Home.DashboardFollowingItems>
          <ProgressBar
            percentage={30}
            loadProgress={loadProgress}
            name={"United States"}
            background={"FF873D"}
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
            background={"54FAFC"}
          />
        </Home.DashboardFollowingItems>
      </Home.DashboardPortfolioSection>
    </Home.DashboardFollowing>
  );
};

export default DashFollowingSection;
