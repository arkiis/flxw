import React from "react";
import * as Styles from "../../../components/Table/Tables.styles";
import Icon from "../../../assets/images/sort-solid.svg";

const PriceHeader = props => {
  return (
    //This is the header for the table on the price page

    <Styles.TableRowStyles bg noMobile>
      <Styles.TabelHeadingStyles bg>#</Styles.TabelHeadingStyles>
      <Styles.TabelHeadingStyles bg>NAME</Styles.TabelHeadingStyles>
      <Styles.TabelHeadingStyles bg>PRICE</Styles.TabelHeadingStyles>
      <Styles.TabelHeadingStyles bg>CHANGE</Styles.TabelHeadingStyles>
      <Styles.TabelHeadingStyles bg>
        <Styles.MarketCap
          onClick={() => {
            props.setMarketCapLow(!props.MarketCapLow);
          }}
        >
          <div>MARKET CAP</div>
          <props.CoinIcon width height src={Icon} />
        </Styles.MarketCap>
      </Styles.TabelHeadingStyles>
      <Styles.TabelHeadingStyles bg>TRADE</Styles.TabelHeadingStyles>
    </Styles.TableRowStyles>
  );
};

export default PriceHeader;
