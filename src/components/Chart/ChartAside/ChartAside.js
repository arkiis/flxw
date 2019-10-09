import React, { useEffect } from "react";
import * as Styles from "../../../pages/PriceDetail/PriceDetailStyles";
import AsideBuySection from "./AsideBuySection/AsideBuySection";
import AsideBodySection from "./AsideBodySection/AsideBodySection";

const GetAsideSection = props => {
  console.log(props.price);
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://cryptopanic.com/api/v1/posts/?auth_token=a2d04d7d2be17785239c37a3b62ed5784c796f07&currencies=BTC`
    );
    const news = await fetchItem.json();
    console.log(news);
  };
  return (
    <Styles.ChartAsideSection>
      <AsideBuySection price={props.price} />
      <AsideBodySection
        allCoins={props.allCoins}
        simplifyPrice={props.simplifyPrice}
        price={props.price}
      />
    </Styles.ChartAsideSection>
  );
};

export default GetAsideSection;
