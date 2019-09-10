import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements/index";
import Heading from "../../../UI/Headings/Heading";
import Message from "../../../UI/Message/Message";
import { Link } from "react-router-dom";
import PasswordLink from "../../../UI/Forms/PasswordLink/PasswordLink";
import Input from "../../../UI/Forms/Input/input";
import Button from "../../../UI/Forms/Button/Button";
import * as actions from "../../../store/actions/index";
import { MainWrapper } from "../../../hoc/layout/layout";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0px;
`;

const RecoverSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required")
});

const RecoverPassword = ({ error, loading, sendEmail }) => {
  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={RecoverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await sendEmail(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <MainWrapper>
          <FormWrapper>
            <Heading noMargin size="h1" color="#6433ff">
              Recover Password
            </Heading>
            <Heading size="h2" bold color="black">
              Type in your email to recover your password
            </Heading>

            <StyledForm>
              <Field
                type="email"
                name="email"
                placeholder="Email..."
                component={Input}
              />

              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Sending recover email..." : null}
                type="submit"
              >
                Send
              </Button>

              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
              <MessageWrapper>
                <Message success show={error === false}>
                  Recover email Sent!
                </Message>
              </MessageWrapper>
            </StyledForm>
            <Link to="/logup">
              <PasswordLink>Don't have an account?</PasswordLink>
            </Link>
          </FormWrapper>
        </MainWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error
});

const mapDispatchToProps = {
  sendEmail: actions.recoverPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoverPassword);
