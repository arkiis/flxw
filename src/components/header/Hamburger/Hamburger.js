import React from "react";
import * as Styles from "./Hamburger.styles";
const Hamburger = ({ opened, clicked }) => {
  return (
    <Styles.StyleHamb onClick={clicked} opened={opened}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Styles.StyleHamb>
  );
};

export default Hamburger;
