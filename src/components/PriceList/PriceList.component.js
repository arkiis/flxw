import React, { useState, useEffect } from "react";

import * as Styles from "../../components/Table/Tables.styles";

import "./PriceList.scss";

import GetSearchBar from "../../components/searchBar/searchBar";
import GetPriceHeader from "../../components/PriceList/PriceHeader/PriceHeader";
import GetPriceListBody from "../PriceList/PriceBody/PriceBody";
import GetPriceListBodyMobile from "../PriceList/PriceBody/PriceBodyMobile";

function searchingFor(search) {
  return function(x) {
    return x.name.toLowerCase().includes(search.toLowerCase()) || false;
  };
}

const PriceList = props => {
  console.log(props.coins);

  const [selection, setSelection] = useState();
  const [priceChange, setPriceChange] = useState([]);
  const [coin, setCoin] = useState([]);
  const [MarketCapLow, setMarketCapLow] = useState(false);
  const [search, setSearch] = useState("");
  const [reverseCoin, setReverseCoin] = useState(
    [...coin].filter(searchingFor(search)).reverse()
  );

  const timeIntervels = ["1h", "1d", "7d", "30d", "365d"];

  useEffect(() => {
    setPriceChange(props.coins.price);
    setCoin(props.coins);
  }, [props.coins]);

  console.log(priceChange);
  console.log(coin);
  console.log(reverseCoin);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  //I'm trying to get the
  //time intervals to update the price change
  //prct data on the table

  const updateData = timeline => {
    setSelection(timeline);
  };

  const getPriceList = () => {
    return (
      <Styles.TableContainer>
        {/*Search bar component*/}
        <GetSearchBar
          search={search}
          updateSearch={updateSearch}
          timeIntervels={timeIntervels}
          updateData={updateData}
          selection={selection}
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
              priceChange={priceChange}
              selection={selection}
            />
            <GetPriceListBodyMobile
              search={search}
              setSearch={setSearch}
              CoinIcon={Styles.CoinIcon}
              searchingFor={searchingFor}
              MarketCapLow={MarketCapLow}
              coins={props.coins}
              priceChange={priceChange}
            />
          </tbody>
        </Styles.Tablestyles>GetPriceListBody
      </Styles.TableContainer>
    );
  };

  return getPriceList();
};

export default PriceList;
