import React, { useState } from "react";
import mainLogo from "../../assets/images/flxw-logo-01-01.png";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";
import { connect } from "react-redux";
import ToggleContent from "../../UI/Modal/ToggleContent.js";
import HomeModal from "../../UI/Modal/HomeModal";
import styled from "styled-components";
import LogUp from "../auth/LogUp/LogUp";
import Hamburger from "./Hamburger/Hamburger";
import HeaderDropDown from "../../components/dropdown/dropdown";

const SpanArrow = styled.span`
  transform: rotate(180deg);
  color: #1c1621;
  opacity: 0.7;
  margin-left: 2px;
`;
const FixedWrapperSide = styled.header`
  display: none;
  justify-content: center;
  background: white;
  padding: 0rem 1.5rem;
  top: 0;
  z-index: 2220;
  left: 0;
  width: 100%;
  height: auto;
  display: none;
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;
const TradeButton = styled.button`
  padding: 10px;
  border: none;
  background: #6433ff;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
    padding: 4px 8px;
    background: transparent;
    border: 1.3px solid #6433ff;
    color: #6433ff;
  }
`;

const Menu = styled.div`
  width: 100%;
  overflow: hidden;
  display: none;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 50vh;
  transform: translateX(${props => (props.opened ? "100%" : "0%")});
  opacity: ${props => (props.opened ? "0" : "1")};
  top: 0;
  left: 0;
  transition: all 0.3s ease;

  @media ${props => props.theme.mediaQueries.medium} {
    display: ${props => (props.opened ? "none" : "flex")};
  }
`;

const OptionsContainerStyle = styled.div`
  width: ${props => (props.mobile ? "100%" : "50%")};
  height: 100%;
  display: flex;
  flex-direction: ${props => (props.mobile ? "column" : "row")};
  align-items: center;
  justify-content: ${props => (props.mobile ? "flex-start" : "center")};
`;

const LoginContainerStyle = styled.div`
  font-weight: bold;
  display: flex;
  height: ${props => (props.mobile ? "" : "100%")};
  align-items: center;
  width: ${props => (props.mobile ? "100%" : "30%")};
  justify-content: space-evenly;
  flex-direction: ${props => (props.mobile ? "column" : "row")};

  & button {
    padding: ${props => (props.mobile ? "15px" : "10px")};
    border: none;
    background: #6433ff;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

const OptionLinkStyle = styled(NavLink)`
  padding: 10px 19px;
  font-weight: bold;
  cursor: pointer;
  justify-content: ${props => (props.mobile ? "center" : "")};
  height: 10vh;
  display: flex;
  width: ${props => (props.mobile ? "100%" : "")};
  align-items: center;
  & :hover {
    color: $purple;
    transition: 0.1s ease-in;
    border-bottom: 2px solid $purple;
  }
`;

const BtnHeader = styled.button`
  padding: 10px;
  border: none;
  background: #6433ff;
  border-radius: 4px;
  color: white;
  width: ${props => (props.mobile ? "100%" : "")};
  font-weight: bold;
  cursor: pointer;
`;
const BurgerWrapper = styled.div`
  font-weight: bold;
  display: flex;
  height: 100%;
  align-items: center;
  width: ${props => (props.mobile ? "" : "30%")};
  justify-content: space-evenly;

  &button {
    padding: 10px;
    border: none;
    background: #6433ff;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

// const FixedSideBar = styled.div`
//   position: fixed;
//   background: white;
//   z-index: 1000;
//   width: 100%;
// `;

const SideHeader = ({ loggedIn }) => {
  const [isOpened, setIsOpened] = useState(false);
  let links;
  if (loggedIn.uid) {
    links = (
      <>
        <FixedWrapperSide>
          <nav className="mobileNav">
            <div className="logoContainer">
              <img className="logo" src={mainLogo} alt="flxw logo" />
            </div>
            <BurgerWrapper mobile>
              <NavLink to="/prices">
                <TradeButton>Trade</TradeButton>
              </NavLink>
              <Hamburger
                opened={isOpened}
                clicked={() => setIsOpened(!isOpened)}
              />
            </BurgerWrapper>
          </nav>
        </FixedWrapperSide>
        <Menu opened={!isOpened}>
          <OptionsContainerStyle mobile>
            <OptionLinkStyle
              activeClassName="selectedLink"
              className="optionLink"
              onClick={() => setIsOpened(!isOpened)}
              to="/dashboard"
              mobile
            >
              Home
            </OptionLinkStyle>
            <OptionLinkStyle
              activeClassName="selectedLink"
              className="optionLink"
              onClick={() => setIsOpened(!isOpened)}
              to="/prices"
              mobile
            >
              Prices
            </OptionLinkStyle>
            <OptionLinkStyle
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              className="optionLink"
              to="/chatroom"
              mobile
            >
              Chatroom
            </OptionLinkStyle>
            <OptionLinkStyle
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              className="optionLink"
              to="/profile"
              mobile
            >
              Settings
            </OptionLinkStyle>
            <OptionLinkStyle
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              className="optionLink"
              to="/logout"
              mobile
            >
              Logout
            </OptionLinkStyle>
            <LoginContainerStyle mobile>
              <OptionLinkStyle
                to="/prices"
                mobile
                onClick={() => setIsOpened(!isOpened)}
              >
                <BtnHeader mobile>Trade</BtnHeader>
              </OptionLinkStyle>
            </LoginContainerStyle>
          </OptionsContainerStyle>
        </Menu>
      </>
    );
  } else {
    links = (
      <>
        <FixedWrapperSide>
          <nav className="mobileNav">
            <div className="logoContainer">
              <img className="logo" src={mainLogo} alt="flxw logo" />
            </div>
            <BurgerWrapper mobile>
              <NavLink to="/prices">
                <TradeButton>Trade</TradeButton>
              </NavLink>
              <Hamburger
                opened={isOpened}
                clicked={() => setIsOpened(!isOpened)}
              />
            </BurgerWrapper>
          </nav>
        </FixedWrapperSide>
        <Menu opened={!isOpened}>
          <OptionsContainerStyle mobile>
            <OptionLinkStyle
              activeClassName="selectedLink"
              className="optionLink"
              onClick={() => setIsOpened(!isOpened)}
              exact
              to="/"
              mobile
            >
              Home
            </OptionLinkStyle>
            <OptionLinkStyle
              to="/prices"
              className="optionLink"
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              mobile
            >
              Prices
            </OptionLinkStyle>
            <OptionLinkStyle
              activeClassName="selectedLink"
              onClick={() => setIsOpened(!isOpened)}
              className="optionLink"
              to="/chatroom"
              mobile
            >
              Chatroom
            </OptionLinkStyle>

            <LoginContainerStyle mobile>
              <OptionLinkStyle
                exact
                activeClassName="selectedLink"
                onClick={() => setIsOpened(!isOpened)}
                className="optionLink"
                to="/login"
                mobile
              >
                Login
              </OptionLinkStyle>
              <OptionLinkStyle
                to="/logUp"
                mobile
                onClick={() => setIsOpened(!isOpened)}
              >
                <BtnHeader mobile>Sign up</BtnHeader>
              </OptionLinkStyle>
            </LoginContainerStyle>
          </OptionsContainerStyle>
        </Menu>
      </>
    );
  }
  return <div>{links}</div>;
};

export default SideHeader;
