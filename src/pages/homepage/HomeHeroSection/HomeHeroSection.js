import React from "react";
import * as Styles from "../homepage.styles";

const HomeHeroSection = props => {
  return (
    <Styles.HeaderWrapper>
      <Styles.HeaderContainer>
        <props.Heading size="h1" zIndexToggle noMargin color={"white"}>
          Enter the crypto space
        </props.Heading>
        <props.Heading size="h2" zIndexToggle noMargin color={"white"}>
          Flxw is the easiest place to buy, sell, and manage your cryptocurrency
          portfolio.
        </props.Heading>
      </Styles.HeaderContainer>
    </Styles.HeaderWrapper>
  );
};

export default HomeHeroSection;
