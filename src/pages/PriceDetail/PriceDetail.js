import React, { useState, useEffect } from "react";
import * as Styles from "./PriceDetailStyles";
import CryptoChart from "../../components/Chart/AreaChart";
import GetAsideSection from "../../components/Chart/ChartAside/ChartAside";
import GetHeadingChartSection from "../../components/Chart/ChartHeader/ChartHeader";
import ChartDetails from "../../components/Chart/ChartDetails/ChartDetails";
import MobileFixedButton from "./MobileFixedButton";
import PriceDescription from "./PriceDescription";
import PaymentModal from "../../components/PaymentModule/PaymentModal";
import Stripe from "./../../assets/images/Stripelogo-slate.svg";
import PriceNews from "./PriceNews";
import { formatDistanceToNow } from "date-fns";

const PriceDetail = ({ dimensions, location, match }) => {
  useEffect(() => {
    fetchNews();
    fetchItem();
    fetchMetaData();
  }, []);

  const [allCoins] = useState(location.state.coins);
  const [price, setPrice] = useState({});
  const [metaData, setMetaData] = useState([]);
  const [simplifyMeta, setSimplifyMeta] = useState([]);
  const [isToggle, setToggle] = useState(false);
  const [news, setNews] = useState([]);
  const [icon, setIcon] = useState(Stripe);
  const [paymentName, setPaymentName] = useState("Stripe");
  const [buyButton, setBuyButton] = useState(false);
  const newCoins = [...allCoins];

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

  //MOBILE TOGGLE
  const mobileToggle = (desktop, mobile) => {
    const toggle = dimensions > 1070 ? desktop : mobile;
    return toggle;
  };

  // Fetching 3 different endpoints.
  // Fetching coin data, coin news and coin info
  const fetchNews = async () => {
    const fetchNews = await fetch(
      `https://cors-anywhere.herokuapp.com/https://cryptopanic.com/api/v1/posts/?auth_token=a2d04d7d2be17785239c37a3b62ed5784c796f07&currencies=${match.params.id}&kind=news&public=true`
    );
    const news = await fetchNews.json();
    setNews(news);
  };

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

  //end of fetching----------------

  const simplifyPrice = data => {
    const sus = Math.floor(data * 100) / 100;
    return sus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const toggleState = e => {
    setToggle(!isToggle);
  };

  const fixDate = dat => {
    var result = formatDistanceToNow(new Date(dat), { addSuffix: true });
    return result;
  };
  console.log(price);
  return (
    <div>
      {/* Payment module opens when user selects payment */}
      {isToggle && (
        <PaymentModal
          price={price}
          allCoins={newCoins}
          setPaymentName={setPaymentName}
          setIcon={setIcon}
          id="modal"
          onClose={toggleState}
          isToggle={isToggle}
          setToggle={setToggle}
        ></PaymentModal>
      )}

      <Styles.PriceMainWrapper>
        <Styles.PriceWrapper>
          <Styles.thirdPriceWrapper>
            {/*  this is where the fixed nav will go */}
            {mobileToggle(
              "",
              <MobileFixedButton price={price} buyButton={buyButton} />
            )}
            <GetHeadingChartSection price={price} /> {/* Heading component */}
            <Styles.ChartWrapper>
              <Styles.ChartSection>
                <Styles.ChartAndDetailsWrapper>
                  {/*  Area Chart component    */}

                  <CryptoChart price={price} simplifyPrice={simplifyPrice} />
                  {/*  Chart details component    */}
                  <ChartDetails price={price} />
                </Styles.ChartAndDetailsWrapper>

                <PriceDescription
                  price={price}
                  simplifyMeta={simplifyMeta}
                  metaData={metaData}
                />
                {/* PriceNews component shows the news articles */}
                <PriceNews news={news} fixDate={fixDate} />
              </Styles.ChartSection>
              <GetAsideSection
                paymentName={paymentName}
                icon={icon}
                isToggle={isToggle}
                setToggle={setToggle}
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
