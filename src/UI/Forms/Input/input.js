import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  margin-bottom: 2.8rem;
`;

const StyledInput = styled.input`
  padding: 20px 0 20px 10px;
  border-radius: 5px !important;

  height: 12px;
  flex: 40%;

  border-radius: 2px;
  border: 1px solid #1c162130;
  width: 100%;

  &::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 14px;
    color: black !important;
  }
`;

const Error = styled.div`
  color: #ef195b;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  top: 60px;
  left: 0;
  font-weight: 500;
  font-size: 1rem;
  padding: 0rem 0rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
