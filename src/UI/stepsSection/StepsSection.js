import React from "react";
import IconAccount from "../../assets/images/icon_account-01.svg";
import IconBank from "../../assets/images/icon_bank-01.svg";
import IconMoney from "../../assets/images/icon_money-01.svg";
import * as Styles from "./StepsSection.styles";

const StepSections = ({ homepageStepsSection }) => {
  return (
    <Styles.StepWrapper>
      <Styles.Steps>
        <Styles.StepImage src={IconAccount} />
        <Styles.StepsContent>
          <h3>Create an account</h3>
        </Styles.StepsContent>
      </Styles.Steps>
      <Styles.Steps>
        <Styles.StepsContent>
          <span></span>
        </Styles.StepsContent>
      </Styles.Steps>
      <Styles.Steps>
        <Styles.StepImage src={IconBank} />
        <Styles.StepsContent>
          <h3>Link your bank account</h3>
        </Styles.StepsContent>
      </Styles.Steps>
      <Styles.Steps>
        <Styles.StepsContent>
          <span></span>
        </Styles.StepsContent>
      </Styles.Steps>
      <Styles.Steps>
        <Styles.StepImage src={IconMoney} />
        <Styles.StepsContent>
          <h3>Start buying and selling</h3>
        </Styles.StepsContent>
      </Styles.Steps>
    </Styles.StepWrapper>
  );
};

export default StepSections;
