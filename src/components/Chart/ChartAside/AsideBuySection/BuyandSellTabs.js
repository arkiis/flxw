import React from "react";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";
import { connect } from "react-redux";
import { sellTab } from "../../../../store/actions/index";

const BuyandSellTabs = props => {
  console.log(props);
  return (
    <Styles.AsideBuyLabel>
      {props.tabs.map((tab, index) => {
        return (
          <Styles.AsideBuyTabs
            key={index}
            onClick={() => props.setActiveTab(tab)}
            className={props.activeTab === tab ? "active" : "#4a4a4a70"}
          >
            {tab}
          </Styles.AsideBuyTabs>
        );
      })}
    </Styles.AsideBuyLabel>
  );
};

BuyandSellTabs.defaultProps = {
  activeTab: "buy"
};

const mapStateToProps = state => {
  return {
    buyTab: state.sellTab.sellTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sellTab: () => dispatch(sellTab())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyandSellTabs);
