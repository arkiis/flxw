import React from "react";
import Header from "./components/header/header.component";
import SideHeader from "./components/header/SideHeader.component";
import mainLogo from "../src/assets/images/startup.svg";
import Routes from "./routes";

import ReactNotifications from "react-notifications-component";

import { connect } from "react-redux";

function App({ loggedIn }) {
  return (
    <div>
      <SideHeader loggedIn={loggedIn} />
      <Header loggedIn={loggedIn} />
      <ReactNotifications />

      <Routes />
    </div>
  );
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps)(App);
