import React from "react";
import Button from "../../../UI/Forms/Button/Button";
import styled from "styled-components";

const NewletterForm = styled.form`
  display: flex;
  padding: 12px;

  & :first-child {
    margin-right: 10px;
    flex-grow: 3;
  }
`;

const NewsletterInput = styled.input`
  border: "none";
  border-bottom: "1px solid black";

  &:active {
    background-color: white;
    border: none;
  }
  &:focus {
    background-color: white;
    border: none;
  }
`;

const NewsletterContent = props => {
  return (
    <NewletterForm>
      <NewsletterInput
        style={{
          border: "none",
          borderBottom: "1px solid black"
        }}
        type="email"
        placeholder="Enter email"
        name="email"
      />
      <Button disabled>Join</Button>
    </NewletterForm>
  );
};

export default NewsletterContent;
