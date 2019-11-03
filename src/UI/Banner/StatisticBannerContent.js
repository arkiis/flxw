import React from "react";
import * as Styles from "./HomepageStatisticBanner.styles";

const StatisticBannerContent = ({ data }) => {
  return (
    <Styles.BannerContent>
      <Styles.BannerH1>{data.heading}</Styles.BannerH1>
      <p>{data.subHeading}</p>
    </Styles.BannerContent>
  );
};

export default StatisticBannerContent;
