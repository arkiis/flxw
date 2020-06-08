import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "../../Table/Tables.styles";
import Button from "../../../UI/Forms/Button/Button";
import Loader from "../../../UI/loader/loader";
import styled from "styled-components";
import { LoaderWrapper } from "../../../UI/loader/loader";
const PriceBody = props => {
  const lowercasedCoins = props.search.toLowerCase();

  //filteredCoins filters the coins when the user types in the search bar

  let filteredCoins = props.coins.filter(coin => {
    return Object.keys(coin).some(
      key =>
        (typeof coin[key] === "string" &&
          coin[key].toLowerCase().includes(lowercasedCoins.toLowerCase())) ||
        !lowercasedCoins
    );
  });

  //if user clicks on the market_cap header, it will display the reversed row
  filteredCoins = props.MarketCapLow ? filteredCoins.reverse() : filteredCoins;

  return (
    <>
      {props.isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {filteredCoins.map((coin, index) => {
        const { rank, logo_url, id, name, currency, price, market_cap } = coin;

        const pricePercent = coin[props.selection];

        const priceMarketPercent =
          pricePercent && pricePercent.price_change_pct;

        const newMarketPct = (priceMarketPercent * 100).toFixed(2);
        const newPrice = Math.floor(price * 100) / 100;
        const newMarketCap =
          Math.abs(market_cap) > 999999999
            ? Math.sign(market_cap) *
                (Math.abs(market_cap) / 1000000000).toFixed(1) +
              "B"
            : Math.sign(market_cap) * Math.abs(market_cap);

        return (
          <>
            <Styles.TableRowStyles col noDesktop inlineBlock customWidth>
              {props.tableHeaders.map((header, index) => {
                return (
                  <Styles.TabelDataStyles
                    inlineBlockMobile
                    fullWidth
                    key={index}
                  >
                    {header}
                  </Styles.TabelDataStyles>
                );
              })}
            </Styles.TableRowStyles>
            {/*  this is the table data line 73-122 */}
            <Styles.TableRowStyles
              key={index}
              col
              noMobileWidth
              inlineBlock
              customWidth
            >
              <Styles.TabelDataStyles inlineBlockMobile fullWidth>
                {rank}
              </Styles.TabelDataStyles>
              <Styles.TabelDataStyles
                grey
                flex
                zero
                inlineBlockMobile
                fullWidth
              >
                <props.CoinIcon
                  style={{ marginRight: "12px" }}
                  src={logo_url}
                />
                {name}

                <Styles.TableDataP style={{ color: "#33333380" }}>
                  {currency}
                </Styles.TableDataP>
              </Styles.TabelDataStyles>

              <Styles.TabelDataStyles inlineBlockMobile fullWidth>
                ${newPrice}
              </Styles.TabelDataStyles>

              <Styles.TabelDataStyles
                inlineBlockMobile
                fullWidth
                style={
                  newMarketPct.charAt(0) === "-"
                    ? { color: "#ff2734" }
                    : { color: "#23cc9a" }
                }
              >
                {newMarketPct}%
              </Styles.TabelDataStyles>
              <Styles.TabelDataStyles inlineBlockMobile fullWidth>
                {newMarketCap}
              </Styles.TabelDataStyles>

              <Styles.TabelDataStyles inlineBlockMobile fullWidth>
                <Link
                  to={{
                    pathname: `/prices/${coin.currency}`,
                    state: { coins: props.coins }
                  }}
                >
                  <Button padding style={{ width: "60%" }}>
                    Trade
                  </Button>
                </Link>
              </Styles.TabelDataStyles>
            </Styles.TableRowStyles>
          </>
        );
      })}
    </>
  );
};

export default PriceBody;
