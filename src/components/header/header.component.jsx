import React from "react";
import mainLogo from "../../assets/images/placeholder.com-logo4.jpg";
import { Link, BrowserRouter } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="headerContainer">
    <div className="headerNav">
      <div className="logoContainer">
        <img className="logo" src={mainLogo} alt="flxw logo" />
      </div>
      <div className="optionsContainer">
        <BrowserRouter>
          <Link className="optionLink" to="/dashboard">
            Home
          </Link>
          <Link className="optionLink" to="/prices">
            Prices
          </Link>
          <Link className="optionLink" to="/chatroom">
            Chatroom
          </Link>
        </BrowserRouter>
      </div>
    </div>
  </div>
);

export default Header;
