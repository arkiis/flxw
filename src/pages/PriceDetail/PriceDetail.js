import React, { useState, useEffect, Profiler } from "react";
import * as Styles from "./PriceDetailStyles";
import CryptoChart from "../../components/Chart/AreaChart";
import GetAsideSection from "../../components/Chart/ChartAside/ChartAside";
import GetHeadingChartSection from "../../components/Chart/ChartHeader/ChartHeader";
import ChartDetails from "../../components/Chart/ChartDetails/ChartDetails";
import MobileFixedButton from "./MobileFixedButton";
import PriceDescription from "./PriceDescription";
import ModalUI from "../../components/ModalUI/ModalUI";
import Stripe from "./../../assets/images/Stripelogo-slate.svg";
import PriceNews from "./PriceNews";
import { formatDistanceToNow } from "date-fns";
import PaymentModalContent from "../../components/ModalUI/PaymentModalContent";
import Loader from "../../UI/loader/loader";

import { LoaderWrapper } from "../../UI/loader/loader";

const PriceDetail = ({
  dimensions,
  location,
  match,
  isToggle,
  setToggle,
  onClose
}) => {
  useEffect(() => {
    fetchNews();
    fetchItem();
    fetchMetaData();
  }, []);

  const [allCoins] = useState(location.state.coins);
  const [price, setPrice] = useState({
    item: [],
    loading: true,
    error: null
  });
  const [metaData, setMetaData] = useState([]);
  const [simplifyMeta, setSimplifyMeta] = useState([]);
  const [news, setNews] = useState({
    item: [],
    loading: true,
    error: null
  });
  const [icon, setIcon] = useState(Stripe);
  const [paymentName, setPaymentName] = useState("Stripe");
  const [buyButton, setBuyButton] = useState(false);
  const newCoins = [...allCoins];
  const [toggleModal, setToggleModal] = useState(false);
  const [fadeType, toggleFadeType] = useState("in");

  //Object to be added to the payment modal
  const stripeInfo = {
    logo_url: Stripe,
    name: "stripe"
  };

  newCoins.push(stripeInfo);
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
  console.log(buyButton);
  //MOBILE TOGGLE
  const mobileToggle = (desktop, mobile) => {
    const toggle = dimensions > 1070 ? desktop : mobile;
    return toggle;
  };

  // Fetching 3 different endpoints.
  // Fetching coin data, coin news and coin info
  const fetchNews = async () => {
    setNews({
      ...news,
      loading: true
    });
    try {
      const fetchNews = await fetch(
        `https://cors-anywhere.herokuapp.com/https://cryptopanic.com/api/v1/posts/?auth_token=a2d04d7d2be17785239c37a3b62ed5784c796f07&currencies=${match.params.id}&kind=news&public=true`
      );
      const newsItems = await fetchNews.json();
      setNews({
        ...news,
        item: newsItems,
        loading: false
      });
    } catch (error) {
      setNews({
        ...news,
        error: error
      });
    }
  };

  const fetchItem = async () => {
    setPrice({
      ...price,
      loading: true
    });
    try {
      const fetchItem = await fetch(
        `https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=${match.params.id}&interval=1h,1d,7d,30d,365d`
      );

      const prices = await fetchItem.json();
      setPrice({
        ...price,
        item: prices[0],
        loading: false
      });
    } catch (error) {
      setPrice({
        ...price,
        error: error
      });
    }
  };
  const fetchMetaData = async () => {
    try {
      const fetchMeta = await fetch(
        `https://api.nomics.com/v1/currencies?key=ba5753b91002279e7338b58479c03ea5&ids=${match.params.id}&attributes=id,description,whitepaper_url`
      );
      const meta = await fetchMeta.json();
      const simplify = meta[0].description.substring(0, 278);
      setSimplifyMeta(`${simplify}`);
      setMetaData(meta[0]);
    } catch (error) {
      return "error";
    }
  };

  //end of fetching----------------

  const simplifyPrice = data => {
    const sus = Math.floor(data * 100) / 100;
    return sus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const fixDate = dat => {
    var result = formatDistanceToNow(new Date(dat), { addSuffix: true });
    return result;
  };
  console.log(toggleModal);
  return (
    <>
      {price.loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <div>
          {/* Payment module opens when user selects payment */}
          {toggleModal && (
            <ModalUI
              heading={"Choose Payment Method"}
              id="modal"
              onClose={setToggleModal}
              showModal={toggleModal}
              toggleFadeType={toggleFadeType}
              fadeType={fadeType}
            >
              <PaymentModalContent
                allCoins={newCoins}
                setPaymentName={setPaymentName}
                setIcon={setIcon}
                price={price.item}
              />
            </ModalUI>
          )}

          <Styles.PriceMainWrapper>
            <Styles.PriceWrapper>
              <Styles.thirdPriceWrapper>
                {/*  this is where the fixed nav will go */}
                {buyButton && <MobileFixedButton price={price.item} />}
                <GetHeadingChartSection price={price.item} />{" "}
                {/* Heading component */}
                <Styles.ChartWrapper>
                  <Styles.ChartSection>
                    <Styles.ChartAndDetailsWrapper>
                      {/*  Area Chart component    */}

                      <CryptoChart
                        price={price.item}
                        simplifyPrice={simplifyPrice}
                      />
                      {/*  Chart details component    */}
                      <ChartDetails price={price.item} />
                    </Styles.ChartAndDetailsWrapper>

                    <PriceDescription
                      price={price.item}
                      simplifyMeta={simplifyMeta}
                      metaData={metaData}
                    />
                    {/* PriceNews component shows the news articles */}
                    <Profiler
                      id="News"
                      onRender={(id, phase, actualDuration) => {
                        console.log(id, phase, actualDuration);
                      }}
                    >
                      {news.loading ? (
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Loader />
                        </div>
                      ) : (
                        <PriceNews
                          loading={news.loading}
                          news={news.item}
                          fixDate={fixDate}
                        />
                      )}
                    </Profiler>
                  </Styles.ChartSection>
                  <GetAsideSection
                    paymentName={paymentName}
                    icon={icon}
                    showModal={toggleModal}
                    onClose={setToggleModal}
                    mobileToggle={mobileToggle}
                    price={price.item}
                    allCoins={allCoins}
                    simplifyPrice={simplifyPrice}
                  />
                  {/*  Chart Aside component    */}
                </Styles.ChartWrapper>
              </Styles.thirdPriceWrapper>
            </Styles.PriceWrapper>
          </Styles.PriceMainWrapper>
        </div>
      )}
    </>
  );
};

export default PriceDetail;
