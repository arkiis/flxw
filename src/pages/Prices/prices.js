import React, { useState, useEffect } from "react";
import PriceList from "../../components/PriceList/PriceList.component";
import * as Styles from "./prices.styles";

// Container Component

const Prices = (props) => {
  // const [coins, setCoins] = useState([]);
  const [coins, setCoins] = useState({
    items: [],
    isLoading: false,
    error: null,
  });

  var intervalsFetched = ["1h", "1d", "7d", "30d", "365d"];

  console.log("coins", coins);
  useEffect(() => {
    const fetchItems = async () => {
      setCoins({
        ...coins,
        isLoading: true,
      });
      try {
        const data = await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=BTC,ETH,XRP,USDT,BCH,LTC,EOS&interval=${intervalsFetched}`
        );

        const fetchedCoins = await data.json();

        setCoins({
          ...coins,
          isLoading: false,
          items: fetchedCoins,
        });
      } catch (error) {
        return "Something went wrong";
      }
    };
    fetchItems();
  }, []);

  return (
    <Styles.HomeMainWrapper style={{ padding: "20px" }}>
      <Styles.HomepageWrapper>
        {/* PriceList holds searchbar and PriceTable components */}
        <PriceList
          intervalsFetched={intervalsFetched}
          coins={coins.items}
          isLoading={coins.isLoading}
          dimensions={props.dimensions.width}
        />
      </Styles.HomepageWrapper>
    </Styles.HomeMainWrapper>
  );
};

export default Prices;
