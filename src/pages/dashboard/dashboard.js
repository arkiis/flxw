import React, { useState, useEffect } from "react";
import * as Styles from "../Prices/prices.styles";
import * as Style from "../../components/Table/Tables.styles";
import * as Home from "../dashboard/dashboard.styles";
import DashboardChart from "./components/DashboardChart";
import AsideBodyItems from "../../components/Chart/ChartAside/AsideBodySection/AsideBodyItems";
import DashboardRowOne from "../dashboard/components/DashboardRowOne";
import date from "date-and-time";

import DashboardTradeSummary from "./components/DashboardTradeSummary";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  const btc = [1400, 300, 2000, 1200];
  const total = [...btc].reduce((a, b) => a + b, 0);

  const [text, setText] = useState("");

  //this hook holds total balance for portfolio component
  const [totalData, getTotalData] = useState(total);

  useEffect(() => {
    getChartData();
  }, []);

  const simplifyPrice = simplify => {
    const sus = Math.floor(simplify * 100) / 100;
    return sus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getChartData = () => {
    setChartData({
      labels: ["Bitcoin1", "Etheruem", "LiteCoin", "DodgeCoin"],
      datasets: [
        {
          label: "prices",
          data: btc,
          backgroundColor: ["#DBB3FF", "#C585FF", "#A847FF", "#8600FF"]
        }
      ]
    });
  };

  return (
    <Styles.HomeMainWrapper style={{ padding: "20px" }}>
      <Home.DashboardWrapperOne>
        <Style.TableContainer>
          {/*Row one of the users dashboard */}
          <DashboardRowOne
            totalData={totalData}
            simplifyPrice={simplifyPrice}
            chartData={chartData}
          />
          {/*trade summary component */}
          <DashboardTradeSummary />
        </Style.TableContainer>
      </Home.DashboardWrapperOne>
    </Styles.HomeMainWrapper>
  );
};

export default Dashboard;
