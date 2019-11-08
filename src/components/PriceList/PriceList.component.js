import React, { useState, useEffect } from "react";

import * as Styles from "../../components/Table/Tables.styles";

import "./PriceList.scss";

import SearchBar from "../../components/searchBar/searchBar";
import PriceHeader from "../../components/PriceList/PriceHeader/PriceHeader";
import PriceBody from "../PriceList/PriceBody/PriceBody";

function searchingFor(search) {
  return function(x) {
    return x.name.toLowerCase().includes(search.toLowerCase()) || false;
  };
}

const PriceList = props => {
  const [selection, setSelection] = useState("1d");
  const [priceChange, setPriceChange] = useState([]);
  const [coin, setCoin] = useState([]);
  const [MarketCapLow, setMarketCapLow] = useState(false);
  const [search, setSearch] = useState("");

  //object for the PriceChangeIntervals
  const timeIntervals = {
    oneHour: "1h",
    oneDay: "1d",
    oneWeek: "7d",
    oneMonth: "30d",
    oneYear: "365d"
  };

  //Array for the table headers
  const tableHeaders = ["#", "name", "price", "change", "market cap", "trade"];

  useEffect(() => {
    setPriceChange(props.coins.price);
    setCoin(props.coins);
  }, [props.coins]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  //I'm trying to get the
  //time intervals to update the price change
  //prct data on the table

  const updateData = timeline => {
    setSelection(timeline);
  };
  const mobileToggle = (desktop, mobile) => {
    const toggle = props.dimensions > 1070 ? desktop : mobile;
    return toggle;
  };

  const getPriceList = () => {
    return (
      <Styles.TableContainer>
        {/*Search bar component*/}
        <SearchBar
          intervalsFetched={props.intervalsFetched}
          search={search}
          updateSearch={updateSearch}
          timeIntervals={timeIntervals}
          updateData={updateData}
          selection={selection}
          mobileToggle={mobileToggle}
        />
        <Styles.Tablestyles>
          {/*Table header component*/}
          <tbody>
            <PriceHeader
              CoinIcon={Styles.CoinIcon}
              MarketCapLow={MarketCapLow}
              setMarketCapLow={setMarketCapLow}
            />
            {/*Table body component*/}
            <PriceBody
              tableHeaders={tableHeaders}
              setMarketCapLow={setMarketCapLow}
              search={search}
              setSearch={setSearch}
              isLoading={props.isLoading}
              CoinIcon={Styles.CoinIcon}
              searchingFor={searchingFor}
              selection={selection}
              MarketCapLow={MarketCapLow}
              coins={props.coins}
              priceChange={priceChange}
            />
          </tbody>
        </Styles.Tablestyles>
      </Styles.TableContainer>
    );
  };

  return getPriceList();
};

export default PriceList;
