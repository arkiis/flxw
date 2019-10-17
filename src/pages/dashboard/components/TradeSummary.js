import React from "react";
import date from "date-and-time";
import * as Style from "../../../components/Table/Tables.styles";

const TradeSummary = props => {
  return (
    <>
      <Style.TableRowStyles>
        <Style.TabelDataStyles bold matte size>
          Trade #{props.tradeNumber}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles size gray>
          {date.format(props.now, "MM/DD/YYYY - HH:mm:ss")}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles
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
        <Style.TabelDataStyles bold matte size>
          {props.newTrigger}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles
          style={
            props.currencySold.price.charAt(0) === "+"
              ? { color: "#23cc9a" }
              : { color: "#eb5d5e" }
          }
          size
        >
          {props.currencySold.price}
        </Style.TabelDataStyles>
        <Style.TabelDataStyles matte size>
          1200.3243
        </Style.TabelDataStyles>
        <Style.TabelDataStyles
          style={
            props.currencySold.price.charAt(0) === "+"
              ? { color: "#23cc9a" }
              : { color: "#eb5d5e" }
          }
          size
        >
          {props.currencySold.Acquired.price}
        </Style.TabelDataStyles>
      </Style.TableRowStyles>
    </>
  );
};

export default TradeSummary;
