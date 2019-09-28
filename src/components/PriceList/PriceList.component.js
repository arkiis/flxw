import React, { useState, useEffect, useCallback } from "react";
import Button from "../../UI/Forms/Button/Button";
import styled from "styled-components";
import Icon from "../../assets/images/sort-solid.svg";
import SearchIcon from "../../assets/images/search-solid.svg";
import * as Styles from "../../components/Table/Tables.styles";
import { Link } from "react-router-dom";
import "./PriceList.scss";

// STYLE COMPONENTS

const TableContainer = styled.div`
  z-index: 10;
  width: 100%;
  flex-direction: column;
  display: flex;
  max-width: 1142px;
`;
// Search bar styles
const SearchBarMainContainer = styled.div`
  display: flex;

  margin-bottom: 23px;
`;
const SearchBarInput = styled.input`
  border: none;
  font-size: 17px;
  opacity: 0.6;
  &:focus {
    border: none;
    outline: none;
  }
`;
const SearchInputContainer = styled.div`
  display: flex;

  flex-direction: row;
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid;
  border-color: rgb(236, 239, 241);
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  padding: 22px 32px;
  align-items: center;
`;
const SearchPriceChange = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const SearchPriceChangeItems = styled.span`
  margin: 0 5px;
  font-size: 14px;
  color: gray;

  cursor: pointer;
  &:focus {
    color: blue;
  }
`;

// End of Search bar styles

const CoinIcon = styled.img`
  width: ${({ width }) => (width ? "12px" : "36px")};
  height: ${({ height }) => (height ? "12px" : "36px")};
`;

//END OF STYLE COMPONENTS

function searchingFor(search) {
  return function(x) {
    return x.name.toLowerCase().includes(search.toLowerCase()) || false;
  };
}

const PriceList = props => {
  console.log(props.coins);
  const [coin, setCoin] = useState([]);
  const [color, setColor] = useState("");
  const [MarketCapLow, setMarketCapLow] = useState(false);
  const [search, setSearch] = useState("");
  const reverseCoin = [...coin].reverse();
  const timeIntervels = ["1H", "24H", "1W", "1M", "1Y"];

  useEffect(() => {
    setCoin(props.coins);
  }, [props.coins]);

  console.log(coin);
  console.log(reverseCoin);
  // const [MarketPrice, setMarketPrice] = useState(props.coins["1d"]+);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const updateChangePrice = (compName, e) => {
    console.log(compName);
  };

  const handleClick = name => {
    setColor(name);
  };

  return (
    <TableContainer>
      <SearchBarMainContainer>
        <SearchBarContainer>
          <SearchInputContainer>
            <img
              src={SearchIcon}
              width="20"
              height="20"
              style={{ marginRight: "16px" }}
            />

            <form>
              <SearchBarInput
                type="text"
                value={search}
                onChange={updateSearch}
                placeholder="Search coins..."
              />
            </form>
          </SearchInputContainer>
          <SearchPriceChange>
            {timeIntervels.map(d => (
              <SearchPriceChangeItems
                id={d}
                onClick={() => {
                  handleClick(d);
                }}
                className={color === d ? "purple" : "black"}
              >
                {d}
              </SearchPriceChangeItems>
            ))}
          </SearchPriceChange>
        </SearchBarContainer>
      </SearchBarMainContainer>

      <Styles.Tablestyles>
        <tbody>
          <Styles.TableRowStyles bg>
            <Styles.TabelHeadingStyles bg>#</Styles.TabelHeadingStyles>
            <Styles.TabelHeadingStyles bg>NAME</Styles.TabelHeadingStyles>
            <Styles.TabelHeadingStyles bg>PRICE</Styles.TabelHeadingStyles>
            <Styles.TabelHeadingStyles bg>CHANGE</Styles.TabelHeadingStyles>
            <Styles.TabelHeadingStyles bg>
              <Styles.MarketCap
                onClick={() => {
                  setMarketCapLow(true);
                  // if (MarketCapLow) {
                  //   setMarketCapLow(false);
                  // }
                }}
              >
                <div>MARKET CAP</div>
                <CoinIcon width height src={Icon} />
              </Styles.MarketCap>
            </Styles.TabelHeadingStyles>
            <Styles.TabelHeadingStyles bg>TRADE</Styles.TabelHeadingStyles>
          </Styles.TableRowStyles>

          {props.coins.filter(searchingFor(search)).map(coin => {
            const {
              rank,
              logo_url,
              name,
              ["1d"]: { price_change_pct },
              currency,
              price,
              market_cap
            } = coin;
            const newMarketPct = Math.abs(price_change_pct * 100).toFixed(2);
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
                  <CoinIcon style={{ marginRight: "12px" }} src={logo_url} />
                  {name} ({currency})
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
                  <Link to={`/prices/${coin.currency}`}>
                    <Button padding style={{ width: "60%" }}>
                      Trade
                    </Button>
                  </Link>
                </Styles.TabelDataStyles>
              </Styles.TableRowStyles>
            );
          })}
        </tbody>
      </Styles.Tablestyles>
    </TableContainer>
  );
};

export default PriceList;
