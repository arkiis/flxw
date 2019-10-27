import React, { useState, useEffect } from "react";
import * as Styles from "./searchBar.styles";
import SearchIcon from "../../assets/images/search-solid.svg";
import GetPriceChangeIntervals from "../PriceChangeIntervals/priceChangeIntervals";
import MobileChangeIntervals from "../PriceChangeIntervals/MobileChangeIntervals";

const GetSearchBar = props => {
  const [color, setColor] = useState("");

  const handleClick = name => {
    setColor(name);
  };

  return (
    <Styles.SearchBarMainContainer>
      <Styles.SearchBarContainer>
        <Styles.SearchInputContainer>
          <img
            src={SearchIcon}
            width="20"
            height="20"
            style={{ marginRight: "16px" }}
          />
          {/* this is where the user searches for the coin */}
          <Styles.SearchBarInput
            type="text"
            value={props.search}
            onChange={props.updateSearch}
            placeholder="Search coins..."
          />
        </Styles.SearchInputContainer>
        {/* this is where the user can change the price-change prct */}
        <GetPriceChangeIntervals
          color={color}
          handleClick={handleClick}
          timeIntervals={props.timeIntervals}
          updateData={props.updateData}
          selection={props.selection}
        />
        {/* <MobileChangeIntervals
          color={color}
          handleClick={handleClick}
          timeIntervels={props.timeIntervels}
          updateData={props.updateData}
          selection={props.selection}
        /> */}
      </Styles.SearchBarContainer>
    </Styles.SearchBarMainContainer>
  );
};

export default GetSearchBar;
