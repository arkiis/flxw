import React from "react";
import date from "date-and-time";
import * as Style from "../../../components/Table/Tables.styles";

const TradeSummary = props => {
  return (
    <>
      <Style.TradeSummaryRowStyles>
        <Style.TabelDataStyles bold matte size none zero>
          Trade #{props.tradeNumber}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles size gray zero>
          {date.format(props.now, "MM/DD/YYYY - HH:mm:ss")}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles
          none
          positive
          bold
          size
          style={
            props.children.charAt(0) === "B"
              ? { color: "#23cc9a" }
              : { color: "#eb5d5e" }
          }
        >
          {props.children}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles bold matte size none>
          {props.newTrigger}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles
          zero
          style={
            props.currencySold.price.charAt(0) === "+"
              ? { color: "#23cc9a" }
              : { color: "#eb5d5e" }
          }
          size
        >
          {props.currencySold.price}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles matte size zero>
          1200.3243
        </Style.TabelDataStyles>
        <Style.TabelDataStyles
          style={
            props.currencySold.price.charAt(0) === "+"
              ? { color: "#23cc9a" }
              : { color: "#eb5d5e" }
          }
          size
          zero
        >
          {props.currencySold.Acquired.price}
        </Style.TabelDataStyles>
      </Style.TradeSummaryRowStyles>
    </>
  );
};

export default TradeSummary;
