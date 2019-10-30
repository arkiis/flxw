import React from "react";
import * as Style from "../../../components/Table/Tables.styles";

const TradeSummaryHeader = () => {
  return (
    <>
      <Style.TabelHeadingStyles none>Trade</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles zero>Date/Time</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles none>Trade Type</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles none>Triggered by</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles zero>Currency Sold</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles zero>Price</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles zero>
        Currency Acquired
      </Style.TabelHeadingStyles>
    </>
  );
};

export default TradeSummaryHeader;
