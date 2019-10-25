import React from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";
import AsideSelectionOne from "./AsideSelectionOne";
import AsideSelectionTwo from "./AsideSelectionTwo";

const AsideBuyFooter = props => {
  return (
    <Styles.AsideBuyFooter>
      <Styles.AsideBuySelection>
        {/*selection for what coin the user wants to sell or buy */}
        <AsideSelectionOne price={props.price} />

        {/*selection for what payment system to use. Default is Paypal */}
        <AsideSelectionTwo />
      </Styles.AsideBuySelection>

      {/* Buy button */}
      <Styles.CustomButton buyColor={props.buyColor} nocursor={props.nocursor}>
        Buy {props.price.name}
      </Styles.CustomButton>
    </Styles.AsideBuyFooter>
  );
};

export default AsideBuyFooter;
