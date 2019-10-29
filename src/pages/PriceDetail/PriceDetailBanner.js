import React from "react";
import * as Styles from "../PriceDetail/PriceDetailStyles";

const PriceDetailBanner = props => {
  return props.buyButton ? (
    <Styles.StickyButton>Buy {props.price.name}</Styles.StickyButton>
  ) : (
    ""
  );
};

export default PriceDetailBanner;
