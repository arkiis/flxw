import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Styles from "../../Table/Tables.styles";
import Button from "../../../UI/Forms/Button/Button";
import Loader from "../../../UI/loader/loader";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GetPriceListBody = props => {
  const lowercasedCoins = props.search.toLowerCase();
  const [coins, setCoins] = useState(props.coins);
  const priceChanges = props.priceChange;

  //filters the coins when the user types in the search bar

  let filteredCoins = props.coins.filter(coin => {
    return Object.keys(coin).some(
      key =>
        (typeof coin[key] === "string" &&
          coin[key].toLowerCase().includes(lowercasedCoins.toLowerCase())) ||
        !lowercasedCoins
    );
  });

  filteredCoins = props.MarketCapLow ? filteredCoins.reverse() : filteredCoins;

  return (
    <>
      {props.isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          {filteredCoins.map(coin => {
            const { rank, logo_url, name, currency, price, market_cap } = coin;

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
              <Styles.TableRowStyles key={rank}>
                <Styles.TabelDataStyles>{rank}</Styles.TabelDataStyles>
                <Styles.TabelDataStyles grey flex>
                  <props.CoinIcon
                    style={{ marginRight: "12px" }}
                    src={logo_url}
                  />
                  {name}
                  <Styles.TableDataP style={{ color: "#33333380" }}>
                    {currency}
                  </Styles.TableDataP>
                </Styles.TabelDataStyles>

                <Styles.TabelDataStyles>${newPrice}</Styles.TabelDataStyles>

                <Styles.TabelDataStyles
                  style={
                    newMarketPct.charAt(0) === "-"
                      ? { color: "#ff2734" }
                      : { color: "#23cc9a" }
                  }
                >
                  {newMarketPct}%
                </Styles.TabelDataStyles>
                <Styles.TabelDataStyles>${newMarketCap}</Styles.TabelDataStyles>

                <Styles.TabelDataStyles>
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
            );
          })}
        </>
      )}
    </>
  );
};

export default GetPriceListBody;
