import React from "react";
import * as Styles from "../searchBar/searchBar.styles";
import PropTypes from 'prop-types';

const GetPriceChangeIntervals = props => {
  //This component will change the price change prct
  //on the price page

  return (
    <Styles.SearchPriceChange>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData("1h")}
        className={props.selection === "1h" ? "bus" : ""}
      >
        1H
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData("1d")}
        className={props.selection === "1d" ? "bus" : ""}
      >
        24H
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData("7d")}
        className={props.selection === "7d" ? "bus" : ""}
      >
        1W
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData("30d")}
        className={props.selection === "30d" ? "bus" : ""}
      >
        1M
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => props.updateData("356d")}
        className={props.selection === "356d" ? "bus" : ""}
      >
        1Y
      </Styles.SearchPriceChangeItems>
    </Styles.SearchPriceChange>
  );
};

GetPriceChangeIntervals.defaultProps = {
  selection: '24H'
};


export default GetPriceChangeIntervals;

// const GetPriceChangeIntervals = props => {
//   console.log(props);
//   return (
//     <Styles.SearchPriceChange>
//       {props.timeIntervels.map(d => (
//         <Styles.SearchPriceChangeItems
//           id={d}
//           onClick={() => {
//             props.handleClick(d);
//           }}
//           className={props.color === d ? "purple" : "black"}
//         >
//           {d}
//         </Styles.SearchPriceChangeItems>
//       ))}
//     </Styles.SearchPriceChange>
//   );
// };
