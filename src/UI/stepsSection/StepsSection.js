import React from "react";

import * as Styles from "./StepsSection.styles";

const StepSections = ({ homepageStepsSection }) => {
  return (
    <Styles.StepWrapper>
      {homepageStepsSection.map((step, index) => {
        return (
          <Styles.Steps key={index}>
            <Styles.StepImage src={step.image} />
            <Styles.StepsContent>
              <h3>{step.heading}</h3>
            </Styles.StepsContent>
          </Styles.Steps>
        );
      })}
    </Styles.StepWrapper>
  );
};

export default StepSections;
