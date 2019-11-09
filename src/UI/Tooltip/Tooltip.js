import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = props => {
  console.log(props.label);
  return (
    <>
      <p data-tip={props.label} data-for="tool">
        <img src={props.icon} />
      </p>

      <ReactTooltip
        place="top"
        type="dark"
        effect="float"
        id="tool"
      ></ReactTooltip>
    </>
  );
};

export default Tooltip;
