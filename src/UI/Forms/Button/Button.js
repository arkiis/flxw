import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 14px 24px;
  text-transform: uppercase;
  border: none;
  flex: 2 !important;
  width: 100%;
  background: #6433ff;
  border-radius: 4px;
  color: white;
  margin: 1.5rem 0 2rem 0;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }
`;

const Button = ({ children, disabled, loading, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

export default Button;
