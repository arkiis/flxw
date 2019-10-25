import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Styles from "../../Table/Tables.styles";
import Button from "../../../UI/Forms/Button/Button";

const MobileLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  width: 100%;
`;
const MobilePriceWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const GetPriceListBodyMobile = props => {
  const lowercasedCoins = props.search.toLowerCase();
  const [coins, setCoins] = useState(props.coins);
  const priceChanges = props.priceChange;

  //filters the coins when the user types in the search bar

  const filteredCoins = props.coins.filter(coin => {
    return Object.keys(coin).some(
      key =>
        (typeof coin[key] === "string" &&
          coin[key].toLowerCase().includes(lowercasedCoins.toLowerCase())) ||
        !lowercasedCoins
    );
  });

  const reversedFilteredCoins = filteredCoins.slice().reverse();
  console.log(priceChanges);
  if (props.MarketCapLow) {
    return (
      <>
        {reversedFilteredCoins.map(coin => {
          const {
            rank,
            logo_url,
            name,
            ["1d"]: { price_change_pct },
            currency,
            price
          } = coin;

          const newMarketPct = (price_change_pct * 100).toFixed(2);

          const newPrice = Math.floor(price * 100) / 100;

          return (
            <Styles.MobileRowStyles key={rank}>
              <MobileLink
                to={{
                  pathname: `/prices/${coin.currency}`,
                  state: { coins: props.coins }
                }}
              >
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

                <Styles.TabelDataStyles>
                  <div>${newPrice}</div>

                  <div
                    style={
                      price_change_pct.charAt(0) === "-"
                        ? { color: "#ff2734" }
                        : { color: "#23cc9a" }
                    }
                  >
                    {newMarketPct}%
                  </div>
                </Styles.TabelDataStyles>

                <Styles.TabelDataStyles></Styles.TabelDataStyles>
              </MobileLink>
            </Styles.MobileRowStyles>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {filteredCoins.map(coin => {
          const {
            rank,
            logo_url,
            name,
            ["1d"]: { price_change_pct },
            currency,
            price,
            market_cap
          } = coin;
          const newMarketPct = (price_change_pct * 100).toFixed(2);
          const newPrice = Math.floor(price * 100) / 100;

          return (
            <Styles.MobileRowStyles key={rank}>
              <MobileLink
                to={{
                  pathname: `/prices/${coin.currency}`,
                  state: { coins: props.coins }
                }}
              >
                <Styles.TabelDataStyles grey flex>
                  <props.CoinIcon
                    style={{ marginRight: "12px" }}
                    src={logo_url}
                  />
                  {name}{" "}
                  <Styles.TableDataP style={{ color: "#33333380" }}>
                    {currency}
                  </Styles.TableDataP>
                </Styles.TabelDataStyles>

                <Styles.TabelDataStyles>
                  <div>${newPrice}</div>

                  <div
                    style={
                      price_change_pct.charAt(0) === "-"
                        ? { color: "#ff2734" }
                        : { color: "#23cc9a" }
                    }
                  >
                    {newMarketPct}%
                  </div>
                </Styles.TabelDataStyles>
              </MobileLink>
            </Styles.MobileRowStyles>
          );
        })}
      </>
    );
  }
};

export default GetPriceListBodyMobile;
