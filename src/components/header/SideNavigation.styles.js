import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SpanArrow = styled.span`
  transform: rotate(180deg);
  color: #1c1621;
  opacity: 0.7;
  margin-left: 2px;
`;
export const FixedWrapperSide = styled.header`
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
export const TradeButton = styled.button`
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

export const Menu = styled.div`
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

export const OptionsContainerStyle = styled.div`
  width: ${props => (props.mobile ? "100%" : "50%")};
  height: 100%;
  display: flex;
  flex-direction: ${props => (props.mobile ? "column" : "row")};
  align-items: center;
  justify-content: ${props => (props.mobile ? "flex-start" : "center")};
`;

export const LoginContainerStyle = styled.div`
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

export const OptionLinkStyle = styled(NavLink)`
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

export const BtnHeader = styled.button`
  padding: 10px;
  border: none;
  background: #6433ff;
  border-radius: 4px;
  color: white;
  width: ${props => (props.mobile ? "100%" : "")};
  font-weight: bold;
  cursor: pointer;
`;
export const BurgerWrapper = styled.div`
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
