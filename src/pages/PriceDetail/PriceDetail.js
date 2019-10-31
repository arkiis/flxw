import React, { useState, useEffect, useMemo } from "react";
import * as Styles from "./PriceDetailStyles";
import CryptoChart from "../../components/Chart/Chart";
import GetAsideSection from "../../components/Chart/ChartAside/ChartAside";
import GetHeadingChartSection from "../../components/Chart/ChartHeader/ChartHeader";
import ChartDetails from "../../components/Chart/ChartDetails/ChartDetails";
import paper from "../../assets/images/paper-plane-regular.svg";
import ExpandedInfo from "./ExpandPriceDescription";
import PriceDetailBanner from "./PriceDetailBanner";
import PriceDescription from "./PriceDescription";

const PriceDetail = ({ dimensions, location, match }) => {
  useEffect(() => {
    fetchItem();
    fetchMetaData();
  }, []);

  const [allCoins, setAllCoins] = useState(location.state.coins);
  const [price, setPrice] = useState({});
  const [metaData, setMetaData] = useState([]);
  const [simplifyMeta, setSimplifyMeta] = useState([]);
  const [coins, setCoins] = useState(match.coins);
  const [buyButton, setBuyButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY < 20) {
      setBuyButton(false);
    } else if (window.scrollY > 200) {
      setBuyButton(true);
    }
  }

  //MOBILE TOGGLE
  const mobileToggle = (desktop, mobile) => {
    const toggle = dimensions > 1070 ? desktop : mobile;
    return toggle;
  };

  //Fetching 2 different endpoints.
  //Fetching coin data and coin info

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=${match.params.id}&interval=1h,1d,7d,30d,365d`
    );
    const prices = await fetchItem.json();
    setPrice(prices[0]);
  };
  const fetchMetaData = async () => {
    const fetchMeta = await fetch(
      `https://api.nomics.com/v1/currencies?key=ba5753b91002279e7338b58479c03ea5&ids=${match.params.id}&attributes=id,description,whitepaper_url`
    );
    const meta = await fetchMeta.json();
    const simplify = meta[0].description.substring(0, 278);
    setSimplifyMeta(`${simplify}`);
    setMetaData(meta[0]);
  };

  const simplifyPrice = data => {
    const sus = Math.floor(data * 100) / 100;
    return sus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <Styles.PriceMainWrapper>
        <Styles.PriceWrapper>
          <Styles.thirdPriceWrapper>
            {/*  this is where the fixed nav will go */}
            {mobileToggle(
              "",
              <PriceDetailBanner price={price} buyButton={buyButton} />
            )}
            <GetHeadingChartSection price={price} /> {/* Heading component */}
            <Styles.ChartWrapper>
              <Styles.ChartSection>
                <Styles.ChartAndDetailsWrapper>
                  {/*  Area Chart component    */}
                  <CryptoChart />
                  {/*  Chart details component    */}
                  <ChartDetails price={price} />
                </Styles.ChartAndDetailsWrapper>

                <PriceDescription
                  price={price}
                  simplifyMeta={simplifyMeta}
                  metaData={metaData}
                />
                {/* This iframe shows the news articles */}
                <iframe
                  width="100%"
                  scrolling="yes"
                  allowtransparency="true"
                  frameborder="0"
                  src={
                    "https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;currencies=LTC&amp;font_family=sans&amp;header_bg_color=30343B&amp;header_text_color=FFFFFF&amp;link_color=0091C2&amp;news_feed=trending&amp;text_color=333333&amp;title=Latest%20News"
                  }
                  height="350px"
                ></iframe>
              </Styles.ChartSection>
              <GetAsideSection
                mobileToggle={mobileToggle}
                price={price}
                allCoins={allCoins}
                simplifyPrice={simplifyPrice}
              />
              {/*  Chart Aside component    */}
            </Styles.ChartWrapper>
          </Styles.thirdPriceWrapper>
        </Styles.PriceWrapper>
      </Styles.PriceMainWrapper>
    </div>
  );
};

export default PriceDetail;
