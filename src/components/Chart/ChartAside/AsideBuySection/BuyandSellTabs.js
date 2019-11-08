import React from "react";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";

const BuyandSellTabs = props => {
  return (
    <Styles.AsideBuyLabel>
      {props.tabs.map((tab, index) => {
        return (
          <Styles.AsideBuyTabs
            key={index}
            onClick={() => {
              props.toggleActiveTab(tab);
            }}
            className={props.activeTab === tab ? "active" : "#4a4a4a70"}
          >
            {tab}
          </Styles.AsideBuyTabs>
        );
      })}
    </Styles.AsideBuyLabel>
  );
};

export default BuyandSellTabs;
