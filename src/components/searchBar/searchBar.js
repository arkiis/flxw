import React, { useState, useEffect } from "react";
import * as Styles from "./searchBar.styles";
import SearchIcon from "../../assets/images/search-solid.svg";
import GetPriceChangeIntervals from "../PriceChangeIntervals/priceChangeIntervals";

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

          <Styles.SearchBarInput
            type="text"
            value={props.search}
            onChange={props.updateSearch}
            placeholder="Search coins..."
          />
        </Styles.SearchInputContainer>
        <GetPriceChangeIntervals
          color={color}
          handleClick={handleClick}
          timeIntervels={props.timeIntervels}
        />
      </Styles.SearchBarContainer>
    </Styles.SearchBarMainContainer>
  );
};

export default GetSearchBar;
