import React from "react";
import styled, { css } from "styled-components";

const baseStyle = css`
  font-weight: 600;
  margin-top: 0;
  color: ${({ color }) => {
    return color;
  }};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "3rem")};
  margin-top: ${({ noMarginTop }) => (noMarginTop ? "0px" : "34px")};
`;

const Heading1 = styled.h1`
  word-spacing: 4px;

  z-index: ${({ scale }) => (scale ? "30" : "")};
  font-size: 38px;
  ${baseStyle}

  @media ${props => props.theme.mediaQueries.medium} {
line-height: 1.2;
}

`;
const Heading2 = styled.h2`
  font-size: 1rem;
  z-index: ${({ scale }) => (scale ? "30" : "")};
  font-weight: 500 !important;
  text-align: center;
  ${baseStyle}
`;

const Heading = ({ children, color, noMargin, size, scale }) => {
  if (size === "h1")
    return (
      <Heading1 noMargin={noMargin} color={color} scale={scale}>
        {children}
      </Heading1>
    );
  else if (size === "h2")
    return (
      <Heading2 noMargin={noMargin} color={color} scale={scale}>
        {children}
      </Heading2>
    );
};

export default Heading;
