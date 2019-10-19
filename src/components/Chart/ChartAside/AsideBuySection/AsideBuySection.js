import React, { useState } from "react";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";
import * as Style from "../../../searchBar/searchBar.styles";
import AsideBuyFooter from "./AsideBuyFooter/AsideBuyFooter";
import BuyandSellTabs from "./BuyandSellTabs";

const AsideBuySection = props => {
  const [activeTab, setActiveTab] = useState(false);
  const [active, setActive] = useState("");
  const [asideTabs, setAsideTabs] = useState(["Buy", "Sell"]);

  const toggleClass = name => {
    setActive(name);
    setActiveTab(!activeTab);
  };

  return (
    <Styles.AsideBuySection>
      <Styles.AsideBuyWrapper>
        {/*Tabs for the buy and sell section */}
        <BuyandSellTabs toggleClass={toggleClass} activeTab={activeTab} />
        <Styles.AsideBuyContent>
          <Styles.AsideBuyBody>
            <Styles.Heading1
              style={{ display: "flex", justifyContent: "center" }}
            >
              <p>$</p>
              <Style.SearchBarInput XL L type="number" placeholder="0" />
            </Styles.Heading1>
          </Styles.AsideBuyBody>

          {/*  this holds buy and pay with components.  */}
          <AsideBuyFooter price={props.price} />
        </Styles.AsideBuyContent>
      </Styles.AsideBuyWrapper>
    </Styles.AsideBuySection>
  );
};

export default AsideBuySection;
