import React from "react";
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
            <Styles.BurgerWrapper phoneresponsive>
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
          <Styles.OptionsContainerStyle phoneresponsive>
            {navLinks.map((nav, index) => {
              return (
                <Styles.OptionLinkStyle
                  key={index}
                  exact
                  phoneresponsive
                  className="optionLink"
                  activeClassName="selectedLink"
                  onClick={() => setIsOpened(!isOpened)}
                  to={nav.component}
                >
                  {nav.nav}
                </Styles.OptionLinkStyle>
              );
            })}

            <Styles.LoginContainerStyle phoneresponsive>
              <Styles.OptionLinkStyle
                to="/prices"
                phoneresponsive
                onClick={() => setIsOpened(!isOpened)}
              >
                <Styles.BtnHeader phoneresponsive>Trade</Styles.BtnHeader>
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
            <Styles.BurgerWrapper phoneresponsive>
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
          <Styles.OptionsContainerStyle phoneresponsive>
            {navLinks
              .filter(nav => {
                return nav.nav !== "Settings" && nav.nav !== "Logout";
              })
              .map((nav, index) => {
                return (
                  <Styles.OptionLinkStyle
                    key={index}
                    exact
                    phoneresponsive
                    className="optionLink"
                    activeClassName="selectedLink"
                    onClick={() => setIsOpened(!isOpened)}
                    to={nav.component}
                  >
                    {nav.nav}
                  </Styles.OptionLinkStyle>
                );
              })}

            <Styles.LoginContainerStyle phoneresponsive>
              <Styles.OptionLinkStyle
                exact
                activeClassName="selectedLink"
                onClick={() => setIsOpened(!isOpened)}
                className="optionLink"
                to="/login"
                phoneresponsive
              >
                Login
              </Styles.OptionLinkStyle>
              <Styles.OptionLinkStyle
                to="/logUp"
                phoneresponsive
                onClick={() => setIsOpened(!isOpened)}
              >
                <Styles.BtnHeader phoneresponsive>Sign up</Styles.BtnHeader>
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
