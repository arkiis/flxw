import React from "react";
import * as Styles from "../homepage.styles";
import StepSections from "../../../UI/stepsSection/StepsSection";

const GettingStartedSection = props => {
  return (
    <>
      <Styles.HeaderContainer>
        <props.Heading size="h1" scale noMargin color={"#6433ff"}>
          Get started in minutes
        </props.Heading>
        <props.Heading size="h2" scale noMargin color={"#6433ff"}>
          Flxw supports a variety of the most popular digital currencies.
        </props.Heading>
      </Styles.HeaderContainer>
      <Styles.FeatureWrapper>
        <StepSections></StepSections>
      </Styles.FeatureWrapper>
    </>
  );
};

export default GettingStartedSection;
