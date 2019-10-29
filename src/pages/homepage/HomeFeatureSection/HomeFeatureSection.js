import React from "react";
import * as Styles from "../homepage.styles";
import styled from "styled-components";
import Iphone from "../../../assets/images/earth-01.png";
import Icons from "../../../UI/Icons/Icons";

const HomeFeatureSection = props => {
  return (
    <Styles.HeaderWrapper>
      <Styles.HeaderContainer>
        <props.Heading size="h1" scale noMargin color={"#4A4A4A"}>
          Create your crypto portfolio today
        </props.Heading>
        <props.Heading size="h2" scale noMargin color={"#4A4A4A"}>
          Flxw has a variety of features that make it the best place to start
          trading cryptocurrency portfolio.
        </props.Heading>
        <Styles.FeatureWrapper>
          <Icons />
          <div>
            <Styles.FeatureImg src={Iphone} />
          </div>
        </Styles.FeatureWrapper>
      </Styles.HeaderContainer>
    </Styles.HeaderWrapper>
  );
};

export default HomeFeatureSection;
