import React from "react";
import * as Styles from "../searchBar/searchBar.styles";
import PropTypes from "prop-types";
import MobileChangeIntervals from "./MobileChangeIntervals";

const GetPriceChangeIntervals = props => {
  console.log(props);

  //This component will change the price change prct
  //on the price page

  return (
    <Styles.SearchPriceChange>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData(props.timeIntervals.oneHour)}
        className={props.selection === props.timeIntervals.oneHour ? "bus" : ""}
      >
        1H
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData(props.timeIntervals.oneDay)}
        className={props.selection === props.timeIntervals.oneDay ? "bus" : ""}
      >
        24H
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData(props.timeIntervals.oneWeek)}
        className={props.selection === props.timeIntervals.oneWeek ? "bus" : ""}
      >
        1W
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData(props.timeIntervals.oneMonth)}
        className={
          props.selection === props.timeIntervals.oneMonth ? "bus" : ""
        }
      >
        1M
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData(props.timeIntervals.oneYear)}
        className={props.selection === props.timeIntervals.oneYear ? "bus" : ""}
      >
        1Y
      </Styles.SearchPriceChangeItems>
    </Styles.SearchPriceChange>
  );
};

GetPriceChangeIntervals.defaultProps = {
  selection: "1d"
};

export default GetPriceChangeIntervals;
