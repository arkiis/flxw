import React, { useEffect } from "react";
import { FormWrapper } from "../../../hoc/layout/elements/index";
import Heading from "../../../UI/Headings/Heading";
import styled from "styled-components";
import Button from "../../../UI/Forms/Button/Button";
import Message from "../../../UI/Message/Message";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const VerifyEmail = ({ sendVerification, error, loading, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <FormWrapper>
      <Wrapper>
        <Heading nomargin size="h1" color="purple">
          Verify your email address
        </Heading>
        <Heading size="h2" color="black">
          In order to start using your Flxw account, you need to confirm your
          email address.
        </Heading>
        <Button
          loading={loading ? "Sending email..." : null}
          disabled={loading}
          onClick={() => sendVerification()}
        >
          Resend verification emial
        </Button>
        <MessageWrapper>
          <Message error show={error}>
            {error}
          </Message>
        </MessageWrapper>
        <MessageWrapper>
          <Message success show={error === false}>
            Message Sent!
          </Message>
        </MessageWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
  cleanUp: actions.clean
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
