import React from "react";
import * as Styles from "../../../pages/PriceDetail/PriceDetailStyles";
import AsideBuySection from "./AsideBuySection/AsideBuySection";
import AsideDiscoverMoreSection from "./AsideDiscoverMoreSection/AsideDiscoverMoreSection";

const GetAsideSection = props => {
  return (
    <Styles.ChartAsideSection>
      {/* Aside section */}
      {props.mobileToggle(
        <AsideBuySection
          showModal={props.showModal}
          onClose={props.onClose}
          price={props.price}
          paymentName={props.paymentName}
          icon={props.icon}
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
