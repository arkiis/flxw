import React, { useState, useEffect } from "react";
import Header from "./components/header/header.component";
import SideHeader from "./components/header/SideHeader.component";
import Routes from "./routes";
import ReactNotifications from "react-notifications-component";
import { connect } from "react-redux";

//this function is to make sure when the
//width is changed, theres a timeout
//for each re render
function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App({ loggedIn }) {
  //this is to get the value of the windows
  //height and width. The handleRezise function
  //will change dimension state based on window resize

  const [dimensions, setDemsions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    const debounceHandleResize = debounce(function handleResize() {
      setDemsions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debounceHandleResize);

    return _ => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  });

  return (
    <div>
      <SideHeader loggedIn={loggedIn} />
      <Header loggedIn={loggedIn} />
      <ReactNotifications />

      <Routes dimensions={dimensions} />
    </div>
  );
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps)(App);
