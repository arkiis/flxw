import React from "react";
import * as Styles from "./Tables.styles";

const TableHeader = ({ headers }) => {
  return headers.map((header, index) => {
    return (
      <Styles.TabelHeadingStyles key={index} bg spaceEvenly>
        {header.toUpperCase()}
      </Styles.TabelHeadingStyles>
    );
  });
};

export default TableHeader;
