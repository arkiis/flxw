import React from "react";
import * as Styles from "./Homepage-banner.styles";

const Banner = () => {
  return (
    <Styles.BannerContainer>
      <Styles.BannerContent>
        <Styles.BannerH1>$150B+</Styles.BannerH1>
        <p>Cryptocurrency exchanged</p>
      </Styles.BannerContent>
      <Styles.BannerContent>
        <Styles.BannerH1>24</Styles.BannerH1>
        <p>Countries Supported</p>
      </Styles.BannerContent>
      <Styles.BannerContent>
        <Styles.BannerH1>100</Styles.BannerH1>
        <p>Customers served</p>
      </Styles.BannerContent>
    </Styles.BannerContainer>
  );
};

export default Banner;
