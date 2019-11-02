import React, { useEffect } from "react";
import * as Styles from "../../../pages/PriceDetail/PriceDetailStyles";
import AsideBuySection from "./AsideBuySection/AsideBuySection";
import AsideDiscoverMoreSection from "./AsideDiscoverMoreSection/AsideDiscoverMoreSection";

const GetAsideSection = props => {
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://cryptopanic.com/api/v1/posts/?auth_token=a2d04d7d2be17785239c37a3b62ed5784c796f07&currencies=BTC`
    );
    const news = await fetchItem.json();
  };
  return (
    <Styles.ChartAsideSection>
      {/* Aside section */}
      {props.mobileToggle(
        <AsideBuySection
          price={props.price}
          mobileToggle={props.mobileToggle}
        />,
        ""
      )}

      <AsideDiscoverMoreSection
        allCoins={props.allCoins}
        simplifyPrice={props.simplifyPrice}
        price={props.price}
      />
    </Styles.ChartAsideSection>
  );
};

export default GetAsideSection;
