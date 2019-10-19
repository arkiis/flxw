import React from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";
import Arrow from "../../../../../assets/images/chevron-right-solid.svg";

const AsideSelectionOne = props => {
  return (
    <Styles.AsideBuySelectionItems>
      <Styles.AsideBuySelectionOne>Buy</Styles.AsideBuySelectionOne>
      <Styles.AsideBuySelectionTwo>
        <Styles.AsideSelectionTwoWrapper>
          <Styles.ResourceIcon src={props.price.logo_url}></Styles.ResourceIcon>
          <p>{props.price.name}</p>
        </Styles.AsideSelectionTwoWrapper>
        <Styles.ResourceIcon icon src={Arrow}></Styles.ResourceIcon>
      </Styles.AsideBuySelectionTwo>
    </Styles.AsideBuySelectionItems>
  );
};

export default AsideSelectionOne;
