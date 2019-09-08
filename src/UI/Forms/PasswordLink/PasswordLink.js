import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: black;

  cursor: pointer;
  transition: all 0.5s ease;
  margin: 0 0 9px 0 !important;
  &:hover {
    color: #6433ff;
  }
`;

const PasswordLink = ({ children }) => {
  return <P>{children}</P>;
};

export default PasswordLink;
