import React, { useState, useEffect } from "react";
import * as Home from "../dashboard.styles";
import * as Styles from "../../../components/Table/Tables.styles";
import firebase from "../../../Firebase/Firebase";
import DashLineChart from "./DashLineChart";
import { Scrollbars } from "react-custom-scrollbars";
import FollowIcon from "../../../assets/images/no-coins-01.svg";
import DashboardMarketAct from "./DashboardMarketAct";

const DashboardColumnOne = props => {
  //waiting to grab the data from the firebase database
  // and putting that data into favoriteCoin state
  useEffect(() => {
    db.collection("coins")
      .where("userId", "==", firebase.auth().currentUser.uid)
      .onSnapshot(snapShot => {
        var result = [];

        snapShot.forEach(x => {
          result.push(x);
        });
        setFavoriteCoin(result);
      });
  }, []);

  const loadProgress = perc => {
    setPercentage(perc);
  };

  const db = firebase.firestore();
  var favoriteCoins = [];

  const [favoriteCoin, setFavoriteCoin] = useState([]);
  const [percentage, setPercentage] = useState(0);

  return (
    <Home.DashboardFollowing>
      <Home.FollowingSection>
        <Home.DashboardPortfolioSection>
          <Home.PortfolioHeader>Following</Home.PortfolioHeader>
          <Scrollbars style={{ height: 220 }}>
            {favoriteCoin.length === 0 ? (
              <img style={{ height: "200px" }} src={FollowIcon}></img>
            ) : (
              <Home.DashboardFavoriteItems>
                {favoriteCoin.map(x => {
                  return (
                    <Home.FavoriteCoin>
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
                          db.collection("coins")
                            .doc(x.id)
                            .delete();
                        }}
                      ></Home.DeleteFollowing>
                    </Home.FavoriteCoin>
                  );
                })}
              </Home.DashboardFavoriteItems>
            )}
          </Scrollbars>
        </Home.DashboardPortfolioSection>
      </Home.FollowingSection>
      <DashboardMarketAct loadProgress={loadProgress} />
    </Home.DashboardFollowing>
  );
};

export default DashboardColumnOne;
