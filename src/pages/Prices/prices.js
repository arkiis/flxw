import React, { Component, useState, useEffect } from "react";
import PriceList from "../../components/PriceList/PriceList.component";
import * as Styles from "./prices.styles";

const Prices = props => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const data = await fetch(
        `https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=BTC,ETH,XRP,USDT,BCH,LTC,EOS&interval=1h,1d,7d,30d,365d`
      );
      const coins = await data.json();

      setCoins(coins);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <Styles.HomeMainWrapper style={{ padding: "20px" }}>
      <Styles.HomepageWrapper>
        <PriceList
          coins={coins}
          isLoading={isLoading}
          dimensions={props.dimensions.width}
        />
      </Styles.HomepageWrapper>
    </Styles.HomeMainWrapper>
  );
};

export default Prices;
