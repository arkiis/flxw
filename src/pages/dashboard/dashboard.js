import React, { useState, useEffect } from "react";
import * as Styles from "../Prices/prices.styles";
import * as Style from "../../components/Table/Tables.styles";
import * as Home from "../dashboard/dashboard.styles";
import DashboardChart from "./components/DashboardChart";
import AsideBodyItems from "../../components/Chart/ChartAside/AsideBodySection/AsideBodyItems";
import DashboardRowOne from "../dashboard/components/DashboardRowOne";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const btc = [1400, 300, 2000, 1200];
  const total = [...btc].reduce((a, b) => a + b, 0);

  useEffect(() => {
    getChartData();
  }, []);

  const simplifyPrice = () => {
    const sus = Math.floor(total * 100) / 100;
    return sus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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
            simplifyPrice={simplifyPrice}
            chartData={chartData}
          />
        </Style.TableContainer>
      </Styles.HomepageWrapper>
    </Styles.HomeMainWrapper>
  );
};

export default Dashboard;
