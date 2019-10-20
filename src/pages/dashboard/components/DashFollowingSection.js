import React, { useState, useEffect } from "react";
import * as Home from "../../dashboard/dashboard.styles";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import firebase from "../../../Firebase/Firebase";

const DashFollowingSection = () => {
  ///* firebase.auth().currentUser.uid */
  // UZcHE52EdzNdRSs2Tbmc3TbQ2Jq2

  useEffect(() => {
    db.collection("coins")
      .where("userId", "==", firebase.auth().currentUser.uid)
      .get()
      .then(snapShot => {
        var result = [];
        snapShot.forEach(x => result.push(x.data()));
        setFavoriteCoin(result);
      });
  }, []);

  const db = firebase.firestore();
  var favoriteCoins = [];
  console.log(`LOGJS- dataFRomFireStore ${firebase.auth().currentUser.uid}`);

  const [favoriteCoin, setFavoriteCoin] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [background, setBackground] = useState("");
  const [coinsFollowing, setCoinsFollowing] = useState(
    JSON.parse(localStorage.getItem("coinsFollowing"))
  );
  const [name, setName] = useState("");
  var data = ["Hello", "World"];
  const loadProgress = perc => {
    setPercentage(perc);
  };

  return (
    <Home.DashboardFollowing>
      <Home.FollowingSection>
        <Home.DashboardPortfolioSection>
          <Home.PortfolioHeader>Following</Home.PortfolioHeader>
          <Home.DashboardFollowingItems>
            {favoriteCoin.map(x => {
              return <p>{x.name}</p>;
            })}
            {console.log(favoriteCoins)}
            {/* {coinsFollowing ? (
              coinsFollowing.map(coin => <p>{coin}</p>)
            ) : (
              <p>No coins</p>
            )}
            <p>dummy text</p> */}
          </Home.DashboardFollowingItems>
        </Home.DashboardPortfolioSection>
      </Home.FollowingSection>
      <Home.DashboardPortfolioSection>
        <Home.PortfolioHeader>Todays Market Activity</Home.PortfolioHeader>
        <Home.DashboardFollowingItems>
          <ProgressBar
            percentage={30}
            loadProgress={loadProgress}
            name={"United States"}
            background={"FF873D"}
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
            background={"54FAFC"}
          />
        </Home.DashboardFollowingItems>
      </Home.DashboardPortfolioSection>
    </Home.DashboardFollowing>
  );
};

export default DashFollowingSection;
