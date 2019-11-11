import React from "react";
import ReactTooltip from "react-tooltip";
import * as Styles from "./Tooltip.styles";

const Tooltip = props => {
  return (
    <>
      <p data-tip={props.label} data-for="tool">
        <Styles.TooltipIcon src={props.icon} />
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
