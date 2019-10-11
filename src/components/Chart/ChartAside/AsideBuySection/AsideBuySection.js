import React, { useState } from "react";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";
import * as Style from "../../../searchBar/searchBar.styles";
import AsideBuyFooter from "./AsideBuyFooter/AsideBuyFooter";

const AsideBuySection = props => {
  const [activeTab, setActiveTab] = useState(false);
  const [active, setActive] = useState("");
  const [asideTabs, setAsideTabs] = useState(["Buy", "Sell"]);

  const toggleClass = name => {
    setActive(name);
    setActiveTab(!activeTab);
  };

  const AsideBuyTabs = () => {
    return (
      <Styles.AsideBuyLabel>
        <Styles.AsideBuyTabs
          onClick={tab => {
            toggleClass(tab);
          }}
          className={activeTab === false ? "bus" : "#4a4a4a70"}
        >
          Buy
        </Styles.AsideBuyTabs>
        <Styles.AsideBuyTabs
          onClick={tab => {
            toggleClass(tab);
          }}
          className={activeTab === true ? "bus" : "#4a4a4a70"}
        >
          Sell
        </Styles.AsideBuyTabs>
      </Styles.AsideBuyLabel>
    );
  };

  return (
    <Styles.AsideBuySection>
      <Styles.AsideBuyWrapper>
        {AsideBuyTabs()} {/*Tabs for the buy and sell section */}
        <Styles.AsideBuyContent>
          <Styles.AsideBuyBody>
            <Styles.Heading1
              style={{ display: "flex", justifyContent: "center" }}
            >
              <p>$</p>
              <Style.SearchBarInput XL L type="number" placeholder="0" />
            </Styles.Heading1>
          </Styles.AsideBuyBody>
          <AsideBuyFooter price={props.price} />
        </Styles.AsideBuyContent>
      </Styles.AsideBuyWrapper>
    </Styles.AsideBuySection>
  );
};

export default AsideBuySection;
