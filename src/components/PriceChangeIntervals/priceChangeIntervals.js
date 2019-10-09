import React from "react";
import * as Styles from "../searchBar/searchBar.styles";

const GetPriceChangeIntervals = props => {
  console.log(props);
  return (
    <Styles.SearchPriceChange>
      {props.timeIntervels.map(d => (
        <Styles.SearchPriceChangeItems
          id={d}
          onClick={() => {
            props.handleClick(d);
          }}
          className={props.color === d ? "purple" : "black"}
        >
          {d}
        </Styles.SearchPriceChangeItems>
      ))}
    </Styles.SearchPriceChange>
  );
};

export default GetPriceChangeIntervals;
