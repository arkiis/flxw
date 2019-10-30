import React, { useState } from "react";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";
import * as Style from "../../../searchBar/searchBar.styles";
import AsideBuyFooter from "./AsideBuyFooter/AsideBuyFooter";
import BuyandSellTabs from "./BuyandSellTabs";

const AsideBuySection = props => {
  const [activeTab, setActiveTab] = useState(false);
  const [active, setActive] = useState("");
  const [width, setWidth] = useState("40px");
  const [buyColor, setBuyColor] = useState("#6433ff95");
  const [nocursor, setNoCursor] = useState("not-allowed");
  const [value, setValue] = useState("");

  // this arrow function is setting the value attr on the input
  // to only accept numbers

  const onChange = e => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  //make input width change based on
  //the content's width
  const toggleInputSize = event => {
    const input = (event.target.value.length + 1) * 24 + "px";

    console.log(event.keyCode);
    setWidth(input);
    if (event.target.value.length === 0) {
      setNoCursor("not-allowed");
      setBuyColor("#6433ff95");
    } else {
      setNoCursor("pointer");
      setBuyColor("#6433ff");
    }
  };

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

              <Style.SearchBarInput
                minLength="1"
                XL
                value={value}
                onChange={onChange}
                width={width}
                onKeyUp={toggleInputSize}
                L
                placeholder="0"
              />
            </Styles.Heading1>
          </Styles.AsideBuyBody>

          {/*  this holds buy and pay with components.  */}
          <AsideBuyFooter
            price={props.price}
            buyColor={buyColor}
            nocursor={nocursor}
          />
        </Styles.AsideBuyContent>
      </Styles.AsideBuyWrapper>
    </Styles.AsideBuySection>
  );
};

export default AsideBuySection;
