import React from "react";
import mainLogo from "../../assets/images/flxw-logo.jpg";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { connect } from "react-redux";
import ToggleContent from "../../UI/Modal/ToggleContent.js";
import HomeModal from "../../UI/Modal/HomeModal";
import styled from "styled-components";
import LogUp from "../auth/LogUp/LogUp";
import HeaderDropDown from "../../components/dropdown/dropdown";

const SpanArrow = styled.span`
  transform: rotate(180deg);
  color: #1c1621;
  opacity: 0.7;
  margin-left: 2px;
`;

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
          <Link to="/prices">
            <button className="btn-header">Trade</button>
          </Link>
          {/* this holds prfile picture and dropdown menu */}
          <HeaderDropDown />
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
            <ToggleContent
              toggle={show => <a onClick={show}>Prices</a>}
              content={hide => (
                <HomeModal>
                  <div
                    style={{
                      width: "100%",
                      height: "100vh",
                      position: "absolute"
                    }}
                    onClick={hide}
                  ></div>
                  <LogUp signUp loading error cleanUp></LogUp>
                </HomeModal>
              )}
            />
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
