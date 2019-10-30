import React from "react";
import * as Styles from "../../../pages/PriceDetail/PriceDetailStyles";

const ChartDetails = props => {
  const { high, circulating_supply, market_cap, id } = props.price;
  const priceOneDay = props.price["1d"];

  const chartVolume = priceOneDay && priceOneDay.volume;
  console.log(chartVolume);
  const simplifyPrice = data => {
    const sus = Math.floor(data * 100) / 100;
    return sus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const simplifyData = data => {
    return Math.abs(data) > 999999999
      ? Math.sign(data) * (Math.abs(data) / 1000000000).toFixed(1) + "B"
      : Math.sign(data) * (Math.abs(data) / 1000000).toFixed(2) + "M";
  };
  {
    /* This data can be found under the area chart */
  }
  return (
    <Styles.ChartDetailsWrapper>
      <Styles.ChartDetailItem>
        <Styles.DetailItemHeader>Market cap</Styles.DetailItemHeader>
        <Styles.DetailItemBody>
          ${simplifyData(market_cap)}
        </Styles.DetailItemBody>
      </Styles.ChartDetailItem>
      <Styles.ChartDetailItem>
        <Styles.DetailItemHeader>Volume(24 hours)</Styles.DetailItemHeader>
        <Styles.DetailItemBody>
          ${simplifyPrice(chartVolume)}
        </Styles.DetailItemBody>
      </Styles.ChartDetailItem>
      <Styles.ChartDetailItem>
        <Styles.DetailItemHeader>Circulating supply</Styles.DetailItemHeader>
        <Styles.DetailItemBody>
          {simplifyData(circulating_supply)} {id}
        </Styles.DetailItemBody>
      </Styles.ChartDetailItem>
      <Styles.ChartDetailItem>
        <Styles.DetailItemHeader>All-time high</Styles.DetailItemHeader>
        <Styles.DetailItemBody>${simplifyPrice(high)}</Styles.DetailItemBody>
      </Styles.ChartDetailItem>
    </Styles.ChartDetailsWrapper>
  );
};

export default ChartDetails;
