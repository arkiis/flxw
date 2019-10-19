import React from "react";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";

const BuyandSellTabs = props => {
  return (
    <Styles.AsideBuyLabel>
      <Styles.AsideBuyTabs
        onClick={tab => {
          props.toggleClass(tab);
        }}
        className={props.activeTab === false ? "bus" : "#4a4a4a70"}
      >
        Buy
      </Styles.AsideBuyTabs>
      <Styles.AsideBuyTabs
        onClick={tab => {
          props.toggleClass(tab);
        }}
        className={props.activeTab === true ? "bus" : "#4a4a4a70"}
      >
        Sell
      </Styles.AsideBuyTabs>
    </Styles.AsideBuyLabel>
  );
};

export default BuyandSellTabs;
