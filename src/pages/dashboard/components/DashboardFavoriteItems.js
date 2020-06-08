import React from "react";
import * as Home from "../dashboard.styles";
import * as Styles from "../../../components/Table/Tables.styles";
import DashLineChart from "./DashLineChart";

const DashboardFavoriteItems = props => {
  console.log(props);
  return (
    <Home.DashboardFavoriteItems>
      {props.favoriteCoin.map((x, index) => {
        return (
          <Home.FavoriteCoin key={index}>
            <Home.LogoAndNameWrapper>
              <Styles.CoinIcon src={x.data().logo_url} marginR />
              <Styles.TableDataP>{x.data().name}</Styles.TableDataP>
            </Home.LogoAndNameWrapper>

            <div style={{ display: "flex", width: "200px" }}>
              <Home.FavoriteCoinPrice>
                ${props.simplifyPrice(x.data().price)}
              </Home.FavoriteCoinPrice>
            </div>

            {/* Line chart  */}
            <DashLineChart />
            {/* deleting data */}
            {/* if user clicks this element,
                      that coin will be del */}
            <Home.DeleteFollowing
              onClick={e => {
                e.stopPropagation();
                props.db
                  .collection("coins")
                  .doc(x.id)
                  .delete();
              }}
            ></Home.DeleteFollowing>
          </Home.FavoriteCoin>
        );
      })}
    </Home.DashboardFavoriteItems>
  );
};

export default DashboardFavoriteItems;
