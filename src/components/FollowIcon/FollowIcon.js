import React, { useState, useEffect } from "react";
import * as Stlyes from "./FollowIcon.styles";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import firebase from "../../Firebase/Firebase";
// import MyNotification from "../Notification/Notification";

const FollowIcon = ({ price }) => {
  console.log(price);
  let coinsFollowing = [];

  // console.log(`LOGJS- FirebaseObject`);
  // console.log(firebase.auth().currentUser.uid);
  // firebase.auth = user id

  const db = firebase.firestore();

  //   const [following, setFollowing] = useState("");
  const [following, setFollowing] = useState(false);
  const [title, setTitle] = useState("Follow");

  //   React.useEffect(() => {
  //     localStorage.setItem("follow", following);
  //   }, [following]);

  const handleClick = () => {
    let data = {
      logo_url: price.logo_url,
      id: price.id,
      name: price.name,
      price: price.price,
      userId: firebase.auth().currentUser.uid
    };
    console.log(`LOGJS- FirebaseObject`);
    console.log(data);
    db.collection("coins")
      .doc()
      .set(data);

    setFollowing(!following);
    setTitle("Following");
    coinsFollowing = [...coinsFollowing, price.currency];
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
          <p>added to your dashboard!</p>
        </div>
      </div>
    );
  }

  return (
    //this whole container is the follow button

    <Stlyes.Container onClick={handleClick}>
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
        <svg
          viewBox="0 0 576 512"
          style={{
            fill: following === true ? "#F4A2C6" : "transparent",
            stroke: following === true ? "" : "#B6B3BD",
            strokeWidth: "11",
            strokeMiterlimit: "10",
            width: "30px",
            marginRight: "10px"
          }}
        >
          <path
            className="st0"
            d="M517.8,175.1L378,154.8L315.5,28c-11.2-22.6-43.6-22.9-54.9,0L198,154.8L58.2,175.1
	c-25.1,3.6-35.1,34.5-16.9,52.3L142.4,326l-23.9,139.2c-4.3,25.2,22.2,44,44.4,32.3L288,431.7l125.1,65.7
	c22.2,11.7,48.7-7.1,44.4-32.3L433.6,326l101.2-98.6C552.9,209.7,542.8,178.8,517.8,175.1L517.8,175.1z"
          />
        </svg>

        <Stlyes.FollowHeading>
          {following === true ? title : "Follow"}
        </Stlyes.FollowHeading>
      </Stlyes.FollowIconContent>
    </Stlyes.Container>
  );
};

export default FollowIcon;
