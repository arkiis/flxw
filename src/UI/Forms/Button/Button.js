import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${({ padding }) => (padding ? "12px 16px" : "14px 24px")};

  text-transform: uppercase;
  border: none;
  flex: 2 !important;
  width: ${({ width }) => (width ? "30%" : "100%")}!important;
  background: #6433ff;
  border-radius: 4px;
  color: white;
  margin: ${({ noMargin }) => (noMargin ? "10px 0 10px 31px" : "")};
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

  @media ${props => props.theme.mediaQueries.medium} {
    display: ${({ none }) => (none ? "none" : "flex")};
  }
`;

const Button = ({ none, children, padding, disabled, loading, ...rest }) => {
  return (
    <StyledButton none={none} padding={padding} disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

export default Button;
