import React from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";
import * as Style from "../../../../searchBar/searchBar.styles";
import Paypal from "../../../../../assets/images/paypal-seeklogo.com.svg";
import Arrow from "../../../../../assets/images/chevron-right-solid.svg";

const AsideBuyFooter = props => {
  const asideSelectionOne = () => {
    return (
      <Styles.AsideBuySelectionItems>
        <Styles.AsideBuySelectionOne>Buy</Styles.AsideBuySelectionOne>
        <Styles.AsideBuySelectionTwo>
          <Styles.AsideSelectionTwoWrapper>
            <Styles.ResourceIcon
              src={props.price.logo_url}
            ></Styles.ResourceIcon>
            <p>{props.price.name}</p>
          </Styles.AsideSelectionTwoWrapper>
          <Styles.ResourceIcon icon src={Arrow}></Styles.ResourceIcon>
        </Styles.AsideBuySelectionTwo>
      </Styles.AsideBuySelectionItems>
    );
  };

  const asideSelectionTwo = () => {
    return (
      <Styles.AsideBuySelectionItems>
        <Styles.AsideBuySelectionOne>Pay With</Styles.AsideBuySelectionOne>
        <Styles.AsideBuySelectionTwo>
          <Styles.AsideSelectionTwoWrapper>
            <Styles.ResourceIcon src={Paypal}></Styles.ResourceIcon>

            <p>Paypal</p>
          </Styles.AsideSelectionTwoWrapper>
          <Styles.ResourceIcon icon src={Arrow}></Styles.ResourceIcon>
        </Styles.AsideBuySelectionTwo>
      </Styles.AsideBuySelectionItems>
    );
  };

  return (
    <Styles.AsideBuyFooter>
      <Styles.AsideBuySelection>
        {asideSelectionOne()} {/*selection for what coin */}
        {asideSelectionTwo()} {/*selection for what payment system to use */}
      </Styles.AsideBuySelection>
      <Styles.CustomButton>Buy {props.price.name}</Styles.CustomButton>
    </Styles.AsideBuyFooter>
  );
};

export default AsideBuyFooter;
