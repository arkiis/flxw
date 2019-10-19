import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Track = styled.div`
  width: 100%;
  height: 15px;
  background-color: #1c1621;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #000;
`;

const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background: #${props => props.background};
  border-radius: 8px;
  transition: width 1.3s ease-in-out;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  flex: 1 1 auto;
`;
const ProgressItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & :last-child {
    margin-left: 10px;
  }
`;
const PHeading = styled.p`
  font-size: 19px;
  color: gray;
  margin-bottom: 12px;
`;

const ProgressBar = props => {
  return (
    //These are the progress bars for the dashboard page
    //under Today's market activity

    <ProgressWrapper>
      <ProgressItems>
        <PHeading>{props.percentage}%</PHeading>
        <PHeading>{props.name}</PHeading>
      </ProgressItems>
      <Track>
        <Thumb
          background={props.background}
          percentage={props.percentage}
          loadProgress={props.loadProgress(80)} //this is the animation
        />
      </Track>
    </ProgressWrapper>
  );
};

export default ProgressBar;

ProgressBar.prototype = {
  percentage: PropTypes.number
};
