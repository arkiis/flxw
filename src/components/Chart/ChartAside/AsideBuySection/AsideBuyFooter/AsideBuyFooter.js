import React from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";

import { connect } from "react-redux";
import AsideSelectionTwo from "./AsideSelectionTwo";
import Stripe from "../../../../../assets/images/Stripe logo - slate.svg";

const AsideBuyFooter = props => {
  console.log(props.buyTab);
  console.log(props.tabs[0]);
  return (
    <Styles.AsideBuyFooter>
      <Styles.AsideBuySelection>
        {/*selection for what coin the user wants to sell or buy */}

        {/*selection for what payment system to use. Default is Paypal */}
        {props.activeTab === "buy" ? (
          <>
            <AsideSelectionTwo
              iconStyle={"smallIcon"}
              icon={props.price.logo_url}
              name={props.price.name}
              label="Buy"
            ></AsideSelectionTwo>
            <AsideSelectionTwo
              iconStyle={"mediumIcon"}
              icon={Stripe}
              name="Stripe"
              label="Pay with"
            ></AsideSelectionTwo>
          </>
        ) : (
          <>
            <AsideSelectionTwo
              iconStyle={"smallIcon"}
              icon={props.price.logo_url}
              name={props.price.name}
              label="Sell"
            ></AsideSelectionTwo>
            <AsideSelectionTwo
              iconStyle={"mediumIcon"}
              icon={Stripe}
              name="Stripe"
              label="Send to"
            ></AsideSelectionTwo>
          </>
        )}
      </Styles.AsideBuySelection>

      {/* Buy button */}
      <Styles.CustomButton buyColor={props.buyColor} nocursor={props.nocursor}>
        Buy {props.price.name}
      </Styles.CustomButton>
    </Styles.AsideBuyFooter>
  );
};

const mapStateToProps = state => {
  return {
    buyTab: state.sellTab.sellTab
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsideBuyFooter);
