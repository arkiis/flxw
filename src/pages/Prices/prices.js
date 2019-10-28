import React, { Component, useState, useEffect } from "react";
import PriceList from "../../components/PriceList/PriceList.component";
import * as Styles from "./prices.styles";

// import { fetchCrypto } from "../../store/actions/authActions";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

const Prices = props => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(props.dimensions);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const data = await fetch(
        `https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=BTC,ETH,XRP,USDT,BCH,LTC,EOS&interval=1h,1d,7d,30d,365d`
      );
      const coins = await data.json();

      setCoins(coins);
      setIsLoading(false);
      console.log(coins);
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
