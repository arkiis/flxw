import React from "react";

const FollowSvgIcon = props => {
  return (
    <svg
      viewBox="0 0 576 512"
      style={{
        fill: props.following === true ? "#F4A2C6" : "transparent",
        stroke: props.following === true ? "" : "#B6B3BD",
        strokeWidth: "11",
        strokeMiterlimit: "10",
        width: "30px",
        marginRight: "10px"
      }}
    >
      <path
        className="st0"
        d="M517.8,175.1L378,154.8L315.5,28c-11.2-22.6-43.6-22.9-54.9,0L198,154.8L58.2,175.1
  c-25.1,3.6-35.1,34.5-16.9,52.3L142.4,326l-23.9,139.2c-4.3,25.2,22.2,44,44.4,32.3L288,431.7l125.1,65.7
  c22.2,11.7,48.7-7.1,44.4-32.3L433.6,326l101.2-98.6C552.9,209.7,542.8,178.8,517.8,175.1L517.8,175.1z"
      />
    </svg>
  );
};

export default FollowSvgIcon;
