import React, { useState, useEffect, useReducer } from "react";
import * as Stlyes from "./FollowIcon.styles";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import firebase from "../../Firebase/Firebase";
import FollowSvgIcon from "./FollowSvgIcon";
// import MyNotification from "../Notification/Notification";

const FollowIcon = ({ price }) => {
  let coinsFollowing = [];

  // console.log(`LOGJS- FirebaseObject`);
  // console.log(firebase.auth().currentUser.uid);
  // firebase.auth = user id

  const db = firebase.firestore();

  //   const [following, setFollowing] = useState("");

  //NEED HELP KEEPING THE FOLLOWING BUTTON ACTIVE
  //AFTER THE PAGE REFRESHES

  const [title, setTitle] = useState("Follow");

  const [following, setFollowing] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("following");
    if (data) {
      setFollowing(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("following", JSON.stringify(following));
  });

  const handleClick = () => {
    let data = {
      following: following,
      logo_url: price.logo_url,
      id: price.id,
      name: price.name,
      price: price.price,
      userId: firebase.auth().currentUser.uid
    };
    //adding the data above to firebase's real time database
    db.collection("coins")
      .doc()
      .set(data);

    // setFollowing("apple");
    setTitle("Following");
    setFollowing(!following);
    // coinsFollowing = [...coinsFollowing, price.currency];
    //localStorage.setItem("coinsFollowing", JSON.stringify(coinsFollowing));
  };

  function MyNotification() {
    return (
      <div
        style={{
          display: "flex",
          padding: "10px",
          backgroundColor: "#6433ff",
          borderRadius: 5,
          color: "#fff"
        }}
      >
        <Stlyes.IconImg src={price.logo_url} />
        <div>
          <h4>{price.name}</h4>
          <p>
            {following === false
              ? "added to your dashboard!"
              : "removed from your dashboard"}
          </p>
        </div>
      </div>
    );
  }
  return (
    //this whole container is the follow button

    <Stlyes.Container onClick={() => handleClick()}>
      <Stlyes.FollowIconContent
        onClick={() => {
          store.addNotification({
            content: MyNotification,
            container: "bottom-left", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
          });
        }}
      >
        <FollowSvgIcon following={following} />

        <Stlyes.FollowHeading>
          {following === true ? "Following" : "Follow"}
        </Stlyes.FollowHeading>
      </Stlyes.FollowIconContent>
    </Stlyes.Container>
  );
};

export default FollowIcon;
