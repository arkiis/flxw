import React, { useState, useEffect } from "react";
import * as Styles from "./PriceDetailStyles";

const ExpandPriceDescription = props => {
  const [expand, setExpanded] = useState(false);

  const [fullText, setFullText] = useState(props.metaData);

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
          <Styles.InfoBody>{props.metaData.description}</Styles.InfoBody>
          <a>Read less</a>
        </>
      );
    } else {
      return (
        <>
          <Styles.InfoBody>
            {props.simplifyMeta}... <a>Read More</a>
          </Styles.InfoBody>
        </>
      );
    }
  };
  let expandedDiv = getMoreTextDiv();

  return <div onClick={expandedText}>{expandedDiv}</div>;
};

export default ExpandPriceDescription;
