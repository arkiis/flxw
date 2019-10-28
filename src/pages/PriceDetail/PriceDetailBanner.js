import React from "react";
import styled from "styled-components";
import * as Styles from "../PriceDetail/PriceDetailStyles";

import AsideBuyFooter from "../../components/Chart/ChartAside/AsideBuySection/AsideBuyFooter/AsideBuyFooter";

const PriceDetailBanner = props => {
  return props.buyButton ? (
    <Styles.StickyButton>Buy {props.price.name}</Styles.StickyButton>
  ) : (
    ""
  );
};

export default PriceDetailBanner;
