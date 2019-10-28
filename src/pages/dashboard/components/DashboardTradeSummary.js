import React, { useState } from "react";
import * as Style from "../../../components/Table/Tables.styles";
import * as Home from "../../dashboard/dashboard.styles";
import TradeSummaryHeader from "../components/TradeSummaryHeader";
import TradeSummary from "../components/TradeSummary";
import styled from "styled-components";

const TradeStyleWrap = styled(TradeSummaryHeader)`
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
    flex-direction: row;
  }
`;

const DashboardTradeSummary = () => {
  const [trigger, setTrigger] = useState(["MACD", "RSI", "Stop Rise", "DAC"]);
  const newTrigger = trigger[Math.floor(Math.random() * trigger.length)];

  const now = new Date();
  const currencySold = {
    price: "+ 1,900 USD",
    price_two: "$1,200 USD",
    price_three: "$1,400 USD",
    Acquired: {
      price: "+ 0.42038794 BTC",
      price_two: "+ 6023.17 USD"
    }
  };

  return (
    <>
      <Home.PortfolioHeader>Trade Summary</Home.PortfolioHeader>
      <Style.Tablestyles>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TradeStyleWrap />
        </div>
        <TradeSummary
          tradeNumber={1}
          currencySold={currencySold}
          now={now}
          newTrigger={newTrigger}
          children={"Buy"}
        />
        <TradeSummary
          tradeNumber={2}
          currencySold={currencySold}
          now={now}
          newTrigger={newTrigger}
          children={"Sell"}
        />
      </Style.Tablestyles>
    </>
  );
};

export default DashboardTradeSummary;
