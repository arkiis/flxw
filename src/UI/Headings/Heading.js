import React from "react";
import styled, { css } from "styled-components";

const baseStyle = css`
  font-weight: 600;
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "3rem")};
`;

const Heading1 = styled.h1`
  color: #6433ff;
  word-spacing: 4px;
  font-size: 38px;
  ${baseStyle}
`;
const Heading2 = styled.h2`
  font-size: 1rem;
  color: black !important;
  text-align: center;
  ${baseStyle}
`;

const Heading = ({ children, color, noMargin, size }) => {
  if (size === "h1")
    return (
      <Heading1 noMargin={noMargin} color={color}>
        {children}
      </Heading1>
    );
  else if (size === "h2")
    return (
      <Heading2 noMargin={noMargin} color={color}>
        {children}
      </Heading2>
    );
};

export default Heading;
