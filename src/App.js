import React, { useState, useEffect } from "react";
import Navigation from "./components/header/Navigation";
import SideNavigation from "./components/header/SideNavigation";
import Routes from "./routes";

import ReactNotifications from "react-notifications-component";
import { connect } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

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
//Object for the navigation bar

const navLinks = [
  { nav: "Home", component: "/" },
  { nav: "Prices", component: "/prices" },
  { nav: "Chatroom", component: "/chatroom" },
  { nav: "Settings", component: "/profile" },
  { nav: "Logout", component: "/logout" }
];

function App({ loggedIn }) {
  const [isOpened, setIsOpened] = useState(false);
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
      <ErrorBoundary>
        <SideNavigation
          loggedIn={loggedIn}
          navLinks={navLinks}
          setIsOpened={setIsOpened}
          isOpened={isOpened}
        />
        <Navigation
          loggedIn={loggedIn}
          navLinks={navLinks}
          setIsOpened={setIsOpened}
          isOpened={isOpened}
        />
        <ReactNotifications />

        <Routes dimensions={dimensions} />
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps)(App);
