import React from "react";
import * as Styles from "../../../../../pages/PriceDetail/PriceDetailStyles";
import Arrow from "../../../../../assets/images/chevron-right-solid.svg";
import "./AsideBuyFooter.css";

const AsideSelectionTwo = props => {
  //this component will show which payment system the user
  //will use to purchase X coin.
  console.log("props", props);
  const classStyle = `${props.iconStyle}`;

  return (
    <Styles.AsideBuySelectionItems
      //if isToggle does not equal anything,
      //the payment modal will not open
      onClick={() => {
        switch (props.showModal) {
          case "":
            return null;
            break;
          default:
            props.onClose(!props.showModal);
        }
      }}
    >
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

AsideSelectionTwo.defaultProps = {
  isToggle: "",
  setToggle: ""
};

export default React.memo(AsideSelectionTwo);
