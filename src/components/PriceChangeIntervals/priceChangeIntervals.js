import React from "react";
import * as Styles from "../searchBar/searchBar.styles";
import PropTypes from "prop-types";

const PriceChangeIntervals = props => {
  //This component will change the price change prct
  //on the price page
  return (
    <Styles.SearchPriceChange>
      {props.intervalsFetched.map(interval => {
        return (
          <>
            <Styles.SearchPriceChangeItems
              onClick={() => props.updateData(interval)}
              className={props.selection === interval ? "active" : ""}
            >
              {interval}
            </Styles.SearchPriceChangeItems>
          </>
        );
      })}
    </Styles.SearchPriceChange>
  );
};

PriceChangeIntervals.defaultProps = {
  selection: "1d"
};

export default PriceChangeIntervals;
