import React, { useState, useEffect } from "react";
import * as Home from "../../dashboard/dashboard.styles";
import * as Styles from "../../../components/Table/Tables.styles";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import firebase from "../../../Firebase/Firebase";
import DashLineChart from "./DashLineChart";
import { Scrollbars } from "react-custom-scrollbars";
import FollowIcon from "../../../assets/images/no-coins-01.svg";

const DashFollowingSection = props => {
  ///* firebase.auth().currentUser.uid */
  // UZcHE52EdzNdRSs2Tbmc3TbQ2Jq2

  //waiting to grab the data from the firebase database
  // and putting that data into favoriteCoin state
  useEffect(() => {
    db.collection("coins")
      .where("userId", "==", firebase.auth().currentUser.uid)
      .onSnapshot(snapShot => {
        var result = [];
        var ids = [];
        snapShot.forEach(x => {
          result.push(x);
        });
        setFavoriteCoin(result);
      });
  }, []);

  const db = firebase.firestore();
  var favoriteCoins = [];
  console.log(`LOGJS- dataFRomFireStore ${firebase.auth().currentUser.uid}`);

  const [favoriteCoin, setFavoriteCoin] = useState([]);
  const [documentId, setDocumentId] = useState();
  const [percentage, setPercentage] = useState(0);
  const [background, setBackground] = useState("");
  const [coinsFollowing, setCoinsFollowing] = useState(
    JSON.parse(localStorage.getItem("coinsFollowing"))
  );

  const [name, setName] = useState("");

  const loadProgress = perc => {
    setPercentage(perc);
  };
  console.log(favoriteCoin);
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
                      {/* <p>{x["1d"].price_change_pct}</p> */}
                      <div style={{ display: "flex", width: "200px" }}>
                        <Home.FavoriteCoinPrice>
                          ${props.simplifyPrice(x.data().price)}
                        </Home.FavoriteCoinPrice>
                      </div>

                      {/* Line chart  */}
                      <DashLineChart />
                      {/* deleting data */}
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
                {console.log(favoriteCoins)}
              </Home.DashboardFavoriteItems>
            )}
          </Scrollbars>
        </Home.DashboardPortfolioSection>
      </Home.FollowingSection>
      <Home.DashboardPortfolioSection>
        <Home.PortfolioHeader>Todays Market Activity</Home.PortfolioHeader>
        <Home.DashboardFollowingItems>
          <ProgressBar
            percentage={30}
            loadProgress={loadProgress}
            name={"United States"}
            background={"C585FF"}
          />
          <ProgressBar
            percentage={20}
            loadProgress={loadProgress}
            name={"Canada"}
            background={"D72483"}
          />
          <ProgressBar
            percentage={50}
            loadProgress={loadProgress}
            name={"Australia"}
            background={"E5C7FF"}
          />
        </Home.DashboardFollowingItems>
      </Home.DashboardPortfolioSection>
    </Home.DashboardFollowing>
  );
};

export default DashFollowingSection;
