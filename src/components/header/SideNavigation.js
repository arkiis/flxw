import React, { useState } from "react";
import mainLogo from "../../assets/images/flxw-logo-01-01.png";
import { NavLink } from "react-router-dom";
import "./navigation.styles.scss";
import Hamburger from "./Hamburger/Hamburger";
import * as Styles from "./SideNavigation.styles";

const SideNavigation = ({ loggedIn, navLinks, setIsOpened, isOpened }) => {
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
        {/* dropdown menu if logged in*/}
        <Styles.Menu opened={!isOpened}>
          <Styles.OptionsContainerStyle mobile>
            {navLinks.map(nav => {
              return (
                <Styles.OptionLinkStyle
                  exact
                  mobile
                  className="optionLink"
                  activeClassName="selectedLink"
                  onClick={() => setIsOpened(!isOpened)}
                  to={nav.component}
                >
                  {nav.nav}
                </Styles.OptionLinkStyle>
              );
            })}

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
        {/* dropdown menu if logged out */}
        <Styles.Menu opened={!isOpened}>
          <Styles.OptionsContainerStyle mobile>
            {navLinks
              .filter(nav => {
                return nav.nav !== "Settings" && nav.nav !== "Logout";
              })
              .map(nav => {
                return (
                  <Styles.OptionLinkStyle
                    exact
                    mobile
                    className="optionLink"
                    activeClassName="selectedLink"
                    onClick={() => setIsOpened(!isOpened)}
                    to={nav.component}
                  >
                    {nav.nav}
                  </Styles.OptionLinkStyle>
                );
              })}

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

export default SideNavigation;
