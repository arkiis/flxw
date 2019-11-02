import React from "react";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";
import DiscoverMoreItems from "./DiscoverMoreItems";

const AsideDiscoverMoreSection = props => {
  return (
    <Styles.AsideAssetsSection>
      <Styles.AsideAssetsWrapper>
        <Styles.AsideAssetsHeader>Discover More</Styles.AsideAssetsHeader>
        {/* shows all the other coin assets you can discover */}
        <DiscoverMoreItems
          allCoins={props.allCoins}
          simplifyPrice={props.simplifyPrice}
          price={props.price}
        />
      </Styles.AsideAssetsWrapper>
    </Styles.AsideAssetsSection>
  );
};

export default AsideDiscoverMoreSection;
