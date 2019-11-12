import React from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";

import { connect } from "react-redux";
import AsideSelectionTwo from "./AsideSelectionTwo";
import Stripe from "../../../../../assets/images/Stripe logo - slate.svg";

const AsideBuyFooter = props => {
  console.log(props.isToggle);
  console.log(props.setToggle);
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
              isToggle={""}
              setToggle={""}
            ></AsideSelectionTwo>
            <AsideSelectionTwo
              iconStyle={"mediumIcon"}
              icon={Stripe}
              name="Stripe"
              label="Pay with"
              isToggle={props.isToggle}
              setToggle={props.setToggle}
            ></AsideSelectionTwo>
            {/* Buy button */}
            <Styles.CustomButton
              buyColor={props.buyColor}
              nocursor={props.nocursor}
            >
              Buy {props.price.name}
            </Styles.CustomButton>
          </>
        ) : (
          <>
            <AsideSelectionTwo
              iconStyle={"smallIcon"}
              icon={props.price.logo_url}
              name={props.price.name}
              label="Sell"
              isToggle={""}
              setToggle={""}
            ></AsideSelectionTwo>
            <AsideSelectionTwo
              iconStyle={"mediumIcon"}
              icon={Stripe}
              name="Stripe"
              label="Send to"
              isToggle={props.isToggle}
              setToggle={props.setToggle}
            ></AsideSelectionTwo>
            {/* Buy button */}
            <Styles.CustomButton
              buyColor={props.buyColor}
              nocursor={props.nocursor}
            >
              Sell {props.price.name}
            </Styles.CustomButton>
          </>
        )}
      </Styles.AsideBuySelection>
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
