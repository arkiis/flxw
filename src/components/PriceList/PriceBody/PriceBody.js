import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Styles from "../../Table/Tables.styles";
import Button from "../../../UI/Forms/Button/Button";

const GetPriceListBody = props => {
  const lowercasedCoins = props.search.toLowerCase();
  const [coins, setCoins] = useState(props.coins);
  const priceChanges = props.priceChange;
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
            price,
            market_cap
          } = coin;

          const newMarketPct = (price_change_pct * 100).toFixed(2);
          const marketprct = [...props].priceChange;
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
                  price_change_pct.charAt(0) === "-"
                    ? { color: "#ff2734" }
                    : { color: "#23cc9a" }
                }
              >
                {marketprct}%
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
                {name}{" "}
                <Styles.TableDataP style={{ color: "#33333380" }}>
                  {currency}
                </Styles.TableDataP>
              </Styles.TabelDataStyles>

              <Styles.TabelDataStyles>${newPrice}</Styles.TabelDataStyles>

              <Styles.TabelDataStyles
                style={
                  price_change_pct.charAt(0) === "-"
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
    );
  }
};

export default GetPriceListBody;
