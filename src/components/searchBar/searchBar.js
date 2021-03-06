import React, { useState } from "react";
import * as Styles from "./searchBar.styles";
import SearchIcon from "../../assets/images/search-solid.svg";
import PriceChangeIntervals from "../PriceChangeIntervals/priceChangeIntervals";

//SearchBar component holds filtered input and pricechangeintervals

const SearchBar = props => {
  const [color, setColor] = useState("");

  const handleClick = name => {
    setColor(name);
  };
  return (
    <Styles.SearchBarMainContainer>
      <Styles.SearchBarContainer>
        <Styles.SearchInputContainer>
          {/* icon on the search bar */}

          <>
            <img
              src={SearchIcon}
              width="20"
              height="20"
              style={{ marginRight: "16px" }}
              alt="Magnifying glass"
            />
            {/* this is where the user searches for the coin */}
            <Styles.SearchBarInput
              type="text"
              value={props.search}
              onChange={props.updateSearch}
              placeholder="Search coins..."
            />
          </>
        </Styles.SearchInputContainer>
        {/* this is where the user can change the price-change prct */}

        <PriceChangeIntervals
          intervalsFetched={props.intervalsFetched}
          color={color}
          handleClick={handleClick}
          timeIntervals={props.timeIntervals}
          updateData={props.updateData}
          selection={props.selection}
          mobileToggle={props.mobileToggle}
        />
      </Styles.SearchBarContainer>
    </Styles.SearchBarMainContainer>
  );
};

export default SearchBar;
