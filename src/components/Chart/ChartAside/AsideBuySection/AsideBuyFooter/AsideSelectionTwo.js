import React from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";
import Arrow from "../../../../../assets/images/chevron-right-solid.svg";
import Paypal from "../../../../../assets/images/paypal-seeklogo.com.svg";

const AsideSelectionTwo = props => {
  return (
    <Styles.AsideBuySelectionItems>
      <Styles.AsideBuySelectionOne>Pay With</Styles.AsideBuySelectionOne>
      <Styles.AsideBuySelectionTwo>
        <Styles.AsideSelectionTwoWrapper>
          <Styles.ResourceIcon src={Paypal}></Styles.ResourceIcon>

          <p>Paypal</p>
        </Styles.AsideSelectionTwoWrapper>
        <Styles.ResourceIcon icon src={Arrow}></Styles.ResourceIcon>
      </Styles.AsideBuySelectionTwo>
    </Styles.AsideBuySelectionItems>
  );
};

export default AsideSelectionTwo;
