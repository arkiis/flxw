import React from "react";
import mainLogo from "../../assets/images/flxw-logo.jpg";
import { NavLink } from "react-router-dom";
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
const FixedWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  background: white;
  padding: 0rem 2rem;
  top: 0;

  left: 0;
  width: 100%;
  height: 6rem;

  @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

const Header = ({ loggedIn }) => {
  let links;
  if (loggedIn.uid) {
    links = (
      <nav className="headerNav">
        <div className="logoContainer">
          <img className="logo" src={mainLogo} alt="flxw logo" />
        </div>
        <div className="optionsContainer">
          <NavLink
            activeClassName="selectedLink"
            className="optionLink"
            to="/dashboard"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="selectedLink"
            className="optionLink"
            to="/prices"
          >
            Prices
          </NavLink>
          <NavLink
            activeClassName="selectedLink"
            className="optionLink"
            to="/chatroom"
          >
            Chatroom
          </NavLink>
        </div>
        <div className="loginContainer">
          <NavLink to="/prices">
            <button className="btn-header">Trade</button>
          </NavLink>
          {/* this holds prfile picture and dropdown menu */}
          <HeaderDropDown />
        </div>
      </nav>
    );
  } else {
    links = (
      <nav className="headerNav">
        <div className="logoContainer">
          <img className="logo" src={mainLogo} alt="flxw logo" />
        </div>
        <div className="optionsContainer">
          <NavLink
            activeClassName="selectedLink"
            className="optionLink"
            to="/dashboard"
          >
            Home
          </NavLink>
          <NavLink className="optionLink" to="/prices">
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
          </NavLink>
          <NavLink className="optionLink" to="/chatroom">
            Chatroom
          </NavLink>
        </div>
        <div className="loginContainer">
          <NavLink className="optionLink" to="/login">
            Login
          </NavLink>
          <NavLink to="/logUp">
            <button className="btn-header">Get Started</button>
          </NavLink>
        </div>
      </nav>
    );
  }
  return <FixedWrapper>{links}</FixedWrapper>;
};

export default Header;
