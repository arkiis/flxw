import React from "react";
import * as Styles from "./Tables.styles";

const TableHeader = ({ header }) => {
  return header.map((key, index) => {
    return (
      <Styles.TabelHeadingStyles key={index} bg>
        {key.toUpperCase()}
      </Styles.TabelHeadingStyles>
    );
  });
};

export default TableHeader;
