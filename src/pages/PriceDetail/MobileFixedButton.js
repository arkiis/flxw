import React from "react";
import * as Styles from "./PriceDetailStyles";

const MobileFixedButton = props => {
  return <Styles.StickyButton>Buy {props.price.name}</Styles.StickyButton>;
};

export default MobileFixedButton;
