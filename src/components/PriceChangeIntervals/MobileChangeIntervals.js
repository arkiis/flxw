import React from "react";
import * as Styles from "../searchBar/searchBar.styles";

const MobileChangeIntervals = props => {
  console.log(props);

  //This component will change the price change prct
  //on the price page

  return (
    <Styles.MobileSearchPriceChange>
      <Styles.MobileSearchPriceChangeItems
        onClick={props.updateData("1H")}
        className={props.selection === "1H" ? "bus" : ""}
      >
        1H
      </Styles.MobileSearchPriceChangeItems>
      <Styles.MobileSearchPriceChangeItems
        onClick={props.updateData("24H")}
        className={props.selection === "24H" ? "bus" : ""}
      >
        24H
      </Styles.MobileSearchPriceChangeItems>
      <Styles.MobileSearchPriceChangeItems
        onClick={props.updateData("1W")}
        className={props.selection === "1W" ? "bus" : ""}
      >
        1W
      </Styles.MobileSearchPriceChangeItems>
      <Styles.MobileSearchPriceChangeItems
        onClick={props.updateData("1M")}
        className={props.selection === "1M" ? "bus" : ""}
      >
        1M
      </Styles.MobileSearchPriceChangeItems>
      <Styles.MobileSearchPriceChangeItems
        onClick={() => {
          props.updateData("1Y");
        }}
        className={props.selection === "1Y" ? "bus" : ""}
      >
        1Y
      </Styles.MobileSearchPriceChangeItems>
    </Styles.MobileSearchPriceChange>
  );
};

export default MobileChangeIntervals;
