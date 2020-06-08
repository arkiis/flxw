import React, { useState } from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";

import { connect } from "react-redux";
import AsideSelectionTwo from "./AsideSelectionTwo";

const AsideBuyFooter = props => {
  console.log(props.icon);

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
              showModal={""}
              onClose={""}
            ></AsideSelectionTwo>
            <AsideSelectionTwo
              iconStyle="smallIcon"
              icon={props.icon}
              name={props.paymentName}
              label="Pay with"
              showModal={props.showModal}
              onClose={props.onClose}
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
              showModal={""}
              onClose={""}
            ></AsideSelectionTwo>
            <AsideSelectionTwo
              iconStyle="smallIcon"
              icon={props.icon}
              name={props.paymentName}
              label="Send to"
              showModal={props.showModal}
              onClose={props.onClose}
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

export default connect(mapStateToProps, mapDispatchToProps)(AsideBuyFooter);
