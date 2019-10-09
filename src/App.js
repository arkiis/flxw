import React from "react";
import Header from "./components/header/header.component";
import { GlobalStyle } from "../src/global.styles";
import mainLogo from "../src/assets/images/startup.svg";
import Routes from "./routes";
import ReactNotifications from "react-notifications-component";

import { connect } from "react-redux";

function App({ loggedIn }) {
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <ReactNotifications />
      <GlobalStyle />
      <Routes />
    </div>
  );
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps)(App);
