import React from "react";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";
import AsideBodyItems from "./AsideBodyItems";

const AsideBodySection = props => {
  console.log(props.price);
  return (
    <Styles.AsideAssetsSection>
      <Styles.AsideAssetsWrapper>
        <Styles.AsideAssetsHeader>Discover More</Styles.AsideAssetsHeader>
        <AsideBodyItems
          allCoins={props.allCoins}
          simplifyPrice={props.simplifyPrice}
          price={props.price}
        />
      </Styles.AsideAssetsWrapper>
    </Styles.AsideAssetsSection>
  );
};

export default AsideBodySection;
