import React from "react";
import mainLogo from "../../assets/images/placeholder.com-logo4.jpg";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { connect } from "react-redux";

const Header = ({ loggedIn }) => {
  let links;
  if (loggedIn.uid) {
    links = (
      <div className="headerNav">
        <div className="logoContainer">
          <img className="logo" src={mainLogo} alt="flxw logo" />
        </div>
        <div className="optionsContainer">
          <Link className="optionLink" to="/dashboard">
            Home
          </Link>
          <Link className="optionLink" to="/prices">
            Prices
          </Link>
          <Link className="optionLink" to="/chatroom">
            Chatroom
          </Link>
        </div>
        <div className="loginContainer">
          <Link className="optionLink" to="/logout">
            Logout
          </Link>
          <Link to="/prices">
            <button className="btn-header">Trade</button>
          </Link>
        </div>
      </div>
    );
  } else {
    links = (
      <div className="headerNav">
        <div className="logoContainer">
          <img className="logo" src={mainLogo} alt="flxw logo" />
        </div>
        <div className="optionsContainer">
          <Link className="optionLink" to="/dashboard">
            Home
          </Link>
          <Link className="optionLink" to="/prices">
            Prices
          </Link>
          <Link className="optionLink" to="/chatroom">
            Chatroom
          </Link>
        </div>
        <div className="loginContainer">
          <Link className="optionLink" to="/login">
            Login
          </Link>
          <Link to="/logUp">
            <button className="btn-header">Get Started</button>
          </Link>
        </div>
      </div>
    );
  }
  return <div className="headerContainer">{links}</div>;
};

export default Header;
