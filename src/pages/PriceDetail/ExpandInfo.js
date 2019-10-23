import React, { useState, useEffect } from "react";
import * as Styles from "./PriceDetailStyles";

const ExpandInfo = props => {
  const [expand, setExpanded] = useState(false);

  const [fullText, setFullText] = useState(props.metaData);

  console.log(props.metaData);

  useEffect(() => {
    setFullText(props.metaData);
  }, [props.metaData]);

  const expandedText = () => {
    setExpanded(!expand);
  };

  const getMoreTextDiv = () => {
    if (expand) {
      return (
        <>
          <div style={{ lineHeight: "1.8rem" }}>
            {props.metaData.description}
          </div>
          <a>Read less</a>
        </>
      );
    } else {
      return (
        <>
          <div style={{ lineHeight: "1.8rem" }}>
            {props.simplifyMeta}... <a>Read More</a>
          </div>
        </>
      );
    }
  };
  let expandedDiv = getMoreTextDiv();

  return <div onClick={expandedText}>{expandedDiv}</div>;
};

export default ExpandInfo;
