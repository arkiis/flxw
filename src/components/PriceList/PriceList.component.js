import React, { useState, useEffect } from "react";

import * as Styles from "../../components/Table/Tables.styles";

import "./PriceList.scss";

import GetSearchBar from "../../components/searchBar/searchBar";
import GetPriceHeader from "../../components/PriceList/PriceHeader/PriceHeader";
import GetPriceListBody from "../PriceList/PriceBody/PriceBody";

function searchingFor(search) {
  return function(x) {
    return x.name.toLowerCase().includes(search.toLowerCase()) || false;
  };
}

const PriceList = props => {
  console.log(props.coins);

  const [coin, setCoin] = useState([]);
  const [MarketCapLow, setMarketCapLow] = useState(false);
  const [search, setSearch] = useState("");
  const [reverseCoin, setReverseCoin] = useState(
    [...coin].filter(searchingFor(search)).reverse()
  );

  const timeIntervels = ["1H", "24H", "1W", "1M", "1Y"];

  useEffect(() => {
    setCoin(props.coins);
  }, [props.coins]);

  console.log(coin);
  console.log(reverseCoin);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getPriceList = () => {
    return (
      <Styles.TableContainer>
        {/*Search bar component*/}
        <GetSearchBar
          search={search}
          updateSearch={updateSearch}
          timeIntervels={timeIntervels}
        />
        <Styles.Tablestyles>
          {/*Table header component*/}
          <tbody>
            <GetPriceHeader
              CoinIcon={Styles.CoinIcon}
              MarketCapLow={MarketCapLow}
              setMarketCapLow={setMarketCapLow}
            />
            {/*Table body component*/}
            <GetPriceListBody
              search={search}
              setSearch={setSearch}
              CoinIcon={Styles.CoinIcon}
              searchingFor={searchingFor}
              MarketCapLow={MarketCapLow}
              coins={props.coins}
            />
          </tbody>
        </Styles.Tablestyles>
      </Styles.TableContainer>
    );
  };

  return getPriceList();
};

export default PriceList;
