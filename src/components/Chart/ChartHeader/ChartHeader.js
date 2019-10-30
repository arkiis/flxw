import React from "react";
import * as Styles from "../../../pages/PriceDetail/PriceDetailStyles";
import FollowIcon from "../../../components/FollowIcon/FollowIcon";

const ChartHeader = props => {
  //This header is found above the area chart

  return (
    <Styles.HeadingChartWrapper>
      <Styles.HeadingChartSectionWrapper>
        <Styles.HeadingChartSection>
          <Styles.CoinIcon src={props.price.logo_url} />
          <Styles.Title>{props.price.name}</Styles.Title>
          <Styles.TitleId>({props.price.id})</Styles.TitleId>
        </Styles.HeadingChartSection>
      </Styles.HeadingChartSectionWrapper>
      <Styles.HeadingChartSectionTwo>
        <FollowIcon price={props.price}></FollowIcon>
      </Styles.HeadingChartSectionTwo>
    </Styles.HeadingChartWrapper>
  );
};

export default ChartHeader;
