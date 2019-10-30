import React, { useState } from "react";
import mainLogo from "../../assets/images/flxw-logo-01-01.png";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";
import Hamburger from "./Hamburger/Hamburger";
import * as Styles from "./SideHeader.styles";

const SideHeader = ({ loggedIn }) => {
  const [isOpened, setIsOpened] = useState(false);
  let links;
  if (loggedIn.uid) {
    links = (
      <>
        <Styles.FixedWrapperSide>
          <nav className="mobileNav">
            <div className="logoContainer">
              <img className="logo" src={mainLogo} alt="flxw logo" />
            </div>
            <Styles.BurgerWrapper mobile>
              <NavLink to="/prices">
                <Styles.TradeButton>Trade</Styles.TradeButton>
              </NavLink>
              <Hamburger
                opened={isOpened}
                clicked={() => setIsOpened(!isOpened)}
              />
            </Styles.BurgerWrapper>
          </nav>
        </Styles.FixedWrapperSide>
        <Styles.Menu opened={!isOpened}>
          <Styles.OptionsContainerStyle mobile>
            <Styles.OptionLinkStyle
              activeClassName="selectedLink"
              className="optionLink"
              onClick={() => setIsOpened(!isOpened)}
              to="/dashboard"
              mobile
            >
              Home
            </Styles.OptionLinkStyle>
            <Styles.OptionLinkStyle
              activeClassName="selectedLink"
              className="optionLink"
              onClick={() => setIsOpened(!isOpened)}
              to="/prices"
              mobile
            >
              Prices
            </Styles.OptionLinkStyle>
            <Styles.OptionLinkStyle
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              className="optionLink"
              to="/chatroom"
              mobile
            >
              Chatroom
            </Styles.OptionLinkStyle>
            <Styles.OptionLinkStyle
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              className="optionLink"
              to="/profile"
              mobile
            >
              Settings
            </Styles.OptionLinkStyle>
            <Styles.OptionLinkStyle
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              className="optionLink"
              to="/logout"
              mobile
            >
              Logout
            </Styles.OptionLinkStyle>
            <Styles.LoginContainerStyle mobile>
              <Styles.OptionLinkStyle
                to="/prices"
                mobile
                onClick={() => setIsOpened(!isOpened)}
              >
                <Styles.BtnHeader mobile>Trade</Styles.BtnHeader>
              </Styles.OptionLinkStyle>
            </Styles.LoginContainerStyle>
          </Styles.OptionsContainerStyle>
        </Styles.Menu>
      </>
    );
  } else {
    links = (
      <>
        <Styles.FixedWrapperSide>
          <nav className="mobileNav">
            <div className="logoContainer">
              <img className="logo" src={mainLogo} alt="flxw logo" />
            </div>
            <Styles.BurgerWrapper mobile>
              <NavLink to="/prices">
                <Styles.TradeButton>Trade</Styles.TradeButton>
              </NavLink>
              <Hamburger
                opened={isOpened}
                clicked={() => setIsOpened(!isOpened)}
              />
            </Styles.BurgerWrapper>
          </nav>
        </Styles.FixedWrapperSide>
        <Styles.Menu opened={!isOpened}>
          <Styles.OptionsContainerStyle mobile>
            <Styles.OptionLinkStyle
              activeClassName="selectedLink"
              className="optionLink"
              onClick={() => setIsOpened(!isOpened)}
              exact
              to="/"
              mobile
            >
              Home
            </Styles.OptionLinkStyle>
            <Styles.OptionLinkStyle
              to="/prices"
              className="optionLink"
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              mobile
            >
              Prices
            </Styles.OptionLinkStyle>
            <Styles.OptionLinkStyle
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              className="optionLink"
              to="/chatroom"
              mobile
            >
              Chatroom
            </Styles.OptionLinkStyle>

            <Styles.LoginContainerStyle mobile>
              <Styles.OptionLinkStyle
                exact
                activeClassName="selectedLink"
                onClick={() => setIsOpened(!isOpened)}
                className="optionLink"
                to="/login"
                mobile
              >
                Login
              </Styles.OptionLinkStyle>
              <Styles.OptionLinkStyle
                to="/logUp"
                mobile
                onClick={() => setIsOpened(!isOpened)}
              >
                <Styles.BtnHeader mobile>Sign up</Styles.BtnHeader>
              </Styles.OptionLinkStyle>
            </Styles.LoginContainerStyle>
          </Styles.OptionsContainerStyle>
        </Styles.Menu>
      </>
    );
  }
  return <div>{links}</div>;
};

export default SideHeader;
