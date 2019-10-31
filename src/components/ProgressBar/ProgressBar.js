import React from "react";
import * as Styles from "./ProgressBar.styles";
import PropTypes from "prop-types";

const ProgressBar = props => {
  console.log("I am adding stuff to refactor branch");
  console.log("I am adding stuff to refactor branch");
  console.log("hello world");
  return (
    //These are the progress bars for the dashboard page
    //under Today's market activity

    <Styles.ProgressWrapper>
      <Styles.ProgressItems>
        <Styles.PHeading>{props.percentage}%</Styles.PHeading>
        <Styles.PHeading>{props.name}</Styles.PHeading>
      </Styles.ProgressItems>
      <Styles.Track>
        <Styles.Thumb
          background={props.background}
          percentage={props.percentage}
          loadProgress={props.loadProgress(80)} //this is the animation
        />
      </Styles.Track>
    </Styles.ProgressWrapper>
  );
};

export default ProgressBar;

ProgressBar.prototype = {
  percentage: PropTypes.number
};
