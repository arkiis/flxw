import React from "react";
import IconAccount from "../../assets/images/icon_account-01.svg";
import IconBank from "../../assets/images/icon_bank-01.svg";
import IconMoney from "../../assets/images/icon_money-01.svg";
import * as Styles from "./StepsSection.styles";

const StepSections = ({ homepageStepsSection }) => {
  return (
    <Styles.StepWrapper>
      {homepageStepsSection.map(step => {
        return (
          <Styles.Steps>
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
