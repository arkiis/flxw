import React from "react";
import * as Styles from "../searchBar/searchBar.styles";

const GetPriceChangeIntervals = props => {
  console.log(props);
  return (
    <Styles.SearchPriceChange>
      <Styles.SearchPriceChangeItems
        onClick={props.updateData("1H")}
        className={props.selection === "1H" ? "bus" : ""}
      >
        1H
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={props.updateData("24H")}
        className={props.selection === "24H" ? "bus" : ""}
      >
        24H
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={props.updateData("1W")}
        className={props.selection === "1W" ? "bus" : ""}
      >
        1W
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={props.updateData("1M")}
        className={props.selection === "1M" ? "bus" : ""}
      >
        1M
      </Styles.SearchPriceChangeItems>
      <Styles.SearchPriceChangeItems
        onClick={() => {
          props.updateData("1Y");
        }}
        className={props.selection === "1Y" ? "bus" : ""}
      >
        1Y
      </Styles.SearchPriceChangeItems>
    </Styles.SearchPriceChange>
  );
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
