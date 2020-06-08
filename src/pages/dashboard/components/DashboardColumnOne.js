import React, { useState, useEffect } from "react";
import * as Home from "../dashboard.styles";

import firebase from "../../../Firebase/Firebase";
import DashboardFavoriteItems from "./DashboardFavoriteItems";
import { Scrollbars } from "react-custom-scrollbars";
import FollowIcon from "../../../assets/images/no-coins-01.svg";
import DashboardMarketAct from "./DashboardMarketAct";

const DashboardColumnOne = props => {
  const db = firebase.firestore();
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
    return setPercentage(perc);
  };

  const [favoriteCoin, setFavoriteCoin] = useState([]);
  const [percentage, setPercentage] = useState(0);

  return (
    <Home.DashboardFollowing>
      <Home.FollowingSection>
        <Home.DashboardPortfolioSection>
          <Home.PortfolioHeader>Following</Home.PortfolioHeader>
          <Scrollbars style={{ height: 220 }}>
            {favoriteCoin.length === 0 ? (
              <img
                style={{ height: "200px" }}
                src={FollowIcon}
                alt="gray star"
              ></img>
            ) : (
              //Mapping the coins into the following component on the dashboard
              <DashboardFavoriteItems
                favoriteCoin={favoriteCoin}
                db={db}
                simplifyPrice={props.simplifyPrice}
              />
            )}
          </Scrollbars>
        </Home.DashboardPortfolioSection>
      </Home.FollowingSection>
      {/* The dashboard Market Activity component */}
      <DashboardMarketAct loadProgress={loadProgress} />
    </Home.DashboardFollowing>
  );
};

export default DashboardColumnOne;
