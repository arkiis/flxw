import React from "react";
import * as Styles from "./HomepageStatisticBanner.styles";
import StatisticBannerContent from "./StatisticBannerContent";

const HomepageStatisticBanner = ({ bannerData }) => {
  return (
    <Styles.BannerContainer>
      {bannerData.map(data => {
        return <StatisticBannerContent data={data} />;
      })}
    </Styles.BannerContainer>
  );
};

export default HomepageStatisticBanner;
