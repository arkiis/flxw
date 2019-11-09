import React from "react";
import * as Styles from "../../../pages/PriceDetail/PriceDetailStyles";
import InfoIcon from "../../../assets/images/info-icon.svg";
import Tooltip from "../../../UI/Tooltip/Tooltip";

const ChartDetails = props => {
  const { high, circulating_supply, market_cap, id } = props.price;
  const priceOneDay = props.price["1d"];

  const chartVolume = priceOneDay && priceOneDay.volume;
  const simplifyPrice = data => {
    const sus = Math.floor(data * 100) / 100;
    return sus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const details = [
    {
      header: "Market cap",
      info: "Total Circulating Supply * Price of each coin.",
      detail: market_cap
    },
    {
      header: "Volume(24 hours)",
      info: `the amount of ${props.price.name} that has been traded in the last 24 hours.`,
      detail: chartVolume
    },
    {
      header: "Circulating supply",
      info:
        "number of coins that are publicly available and circulating in the market.",
      detail: circulating_supply
    },
    {
      header: "All-time high",
      info: `highest price that ${props.price.name} has achieved on an exchange`,
      detail: high
    }
  ];

  const simplifyData = data => {
    return Math.abs(data) > 999999999
      ? Math.sign(data) * (Math.abs(data) / 1000000000).toFixed(1) + "B"
      : Math.sign(data) * (Math.abs(data) / 1000000).toFixed(2) + "M";
  };
  {
    /* This component can be found under the area chart */
    //this is the data for each specifc coin
  }
  return (
    <Styles.ChartDetailsWrapper>
      {details.map((detail, index) => {
        return (
          <Styles.ChartDetailItem key={index}>
            <Styles.DetailItemHeader>
              <Tooltip icon={InfoIcon} label={detail.info} /> {detail.header}
            </Styles.DetailItemHeader>
            <Styles.DetailItemBody>
              {detail.detail === market_cap ||
              detail.detail === circulating_supply
                ? `$${simplifyData(detail.detail)}
                `
                : `$${simplifyPrice(detail.detail)}`}
            </Styles.DetailItemBody>
          </Styles.ChartDetailItem>
        );
      })}
    </Styles.ChartDetailsWrapper>
  );
};

export default ChartDetails;
