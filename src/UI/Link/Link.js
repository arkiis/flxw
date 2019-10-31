import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ children, link }) => {
  return <StyledLink href={link}>{children}</StyledLink>;
};

export default Link;
