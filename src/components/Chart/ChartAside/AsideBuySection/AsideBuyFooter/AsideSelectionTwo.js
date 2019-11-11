import React from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";
import Arrow from "../../../../../assets/images/chevron-right-solid.svg";
import "./AsideBuyFooter.css";

const AsideSelectionTwo = props => {
  //this component will show which payment system the user
  //will use to purchase X coin.
  const classStyle = `${props.iconStyle}`;

  return (
    <Styles.AsideBuySelectionItems>
      <Styles.AsideBuySelectionOne>{props.label}</Styles.AsideBuySelectionOne>
      <Styles.AsideBuySelectionTwo>
        <Styles.AsideSelectionTwoWrapper>
          <Styles.ResourceIcon
            className={classStyle}
            src={props.icon}
          ></Styles.ResourceIcon>

          <p>{props.name}</p>
        </Styles.AsideSelectionTwoWrapper>
        <Styles.ResourceIcon icon src={Arrow}></Styles.ResourceIcon>
      </Styles.AsideBuySelectionTwo>
    </Styles.AsideBuySelectionItems>
  );
};

export default AsideSelectionTwo;
