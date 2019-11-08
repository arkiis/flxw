import React from "react";
import * as Styles from "./SideNavigation.styles";

const OptionLinks = ({ navLinks }) => {
  return (
    <div className="optionsContainer">
      {navLinks
        .filter(nav => {
          return (
            nav.nav !== "Settings" &&
            nav.nav !== "Logout" &&
            nav.nav !== "login"
          );
        })
        .map((nav, index) => {
          return (
            <Styles.OptionLinkStyle
              key={index}
              exact
              className="optionLink"
              activeClassName="selectedLink"
              to={nav.component}
            >
              {nav.nav}
            </Styles.OptionLinkStyle>
          );
        })}
    </div>
  );
};

export default OptionLinks;
