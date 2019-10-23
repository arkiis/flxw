import React, { useState, useEffect } from "react";
import * as Styles from "../Prices/prices.styles";
import * as Style from "../../components/Table/Tables.styles";
import * as Home from "../dashboard/dashboard.styles";
import DashboardChart from "./components/DashboardChart";
import AsideBodyItems from "../../components/Chart/ChartAside/AsideBodySection/AsideBodyItems";
import DashboardRowOne from "../dashboard/components/DashboardRowOne";
import date from "date-and-time";
import TradeSummaryHeader from "./components/TradeSummaryHeader";
import TradeSummary from "./components/TradeSummary";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  const btc = [1400, 300, 2000, 1200];
  const total = [...btc].reduce((a, b) => a + b, 0);
  const [trigger, setTrigger] = useState(["MACD", "RSI", "Stop Rise", "DAC"]);
  const [text, setText] = useState("");
  const now = new Date();

  const newTrigger = trigger[Math.floor(Math.random() * trigger.length)];

  //this hook holds total balance for portfolio component
  const [totalData, getTotalData] = useState(total);

  const currencySold = {
    price: "+ 1,900 USD",
    price_two: "$1,200 USD",
    price_three: "$1,400 USD",
    Acquired: {
      price: "+ 0.42038794 BTC",
      price_two: "+ 6023.17 USD"
    }
  };

  useEffect(() => {
    getChartData();
  }, []);

  const simplifyPrice = simplify => {
    const sus = Math.floor(simplify * 100) / 100;
    return sus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  console.log(trigger[0]);

  const getChartData = () => {
    setChartData({
      labels: ["Bitcoin1", "Etheruem", "LiteCoin", "DodgeCoin"],
      datasets: [
        {
          label: "prices",
          data: btc,
          backgroundColor: ["#00A8E8", "#007EA7", "#003459", "#00171F"]
        }
      ]
    });
  };

  return (
    <Styles.HomeMainWrapper style={{ padding: "20px" }}>
      <Styles.HomepageWrapper>
        <Style.TableContainer>
          {/*Row one of the users dashboard */}
          <DashboardRowOne
            totalData={totalData}
            simplifyPrice={simplifyPrice}
            chartData={chartData}
          />
          {/*full row of trade summary component */}
          <Home.PortfolioHeader>Trade Summary</Home.PortfolioHeader>
          <Style.Tablestyles>
            <TradeSummaryHeader />
            <TradeSummary
              tradeNumber={1}
              currencySold={currencySold}
              now={now}
              newTrigger={newTrigger}
              children={"Buy"}
            />
            <TradeSummary
              tradeNumber={2}
              currencySold={currencySold}
              now={now}
              newTrigger={newTrigger}
              children={"Sell"}
            />
          </Style.Tablestyles>
        </Style.TableContainer>
      </Styles.HomepageWrapper>
    </Styles.HomeMainWrapper>
  );
};

export default Dashboard;
