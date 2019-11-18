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

const NewsletterContent = props => {
  return (
    <NewletterForm action="/signup" method="POST">
      <input
        style={{
          border: "none",
          borderBottom: "1px solid black"
        }}
        type="email"
        placeholder="Enter email"
        name="email"
      />
      <Button>Join</Button>
    </NewletterForm>
  );
};

export default NewsletterContent;
