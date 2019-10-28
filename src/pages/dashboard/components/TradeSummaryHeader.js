import React from "react";
import * as Style from "../../../components/Table/Tables.styles";

const TradeSummaryHeader = () => {
  return (
    <>
      <Style.TabelHeadingStyles none>Trade</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles>Date/Time</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles none>Trade Type</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles none>Triggered by</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles>Currency Sold</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles>Price</Style.TabelHeadingStyles>
      <Style.TabelHeadingStyles>Currency Acquired</Style.TabelHeadingStyles>
    </>
  );
};

export default TradeSummaryHeader;
