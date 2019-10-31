import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import "../../auth/Signin-styles.scss";
import styled from "styled-components";
import {
  FormWrapper,
  StyledForm,
  StyledField
} from "../../../hoc/layout/elements/index";
import Input from "../../../UI/Forms/Input/input";
import Button from "../../../UI/Forms/Button/Button";
import Heading from "../../../UI/Headings/Heading";
import * as actions from "../../../store/actions";
import Message from "../../../UI/Message/Message";

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  * {
    flex: 1 40%;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;

const SignUpWrapper = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: transparent;
`;

const MessageWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required")
    .min(3, "Too short")
    .max(25, "Too long"),
  lastName: Yup.string()
    .required("Your last name is required")
    .min(3, "Too short")
    .max(25, "Too long"),

  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(8, "password is too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `password dosen't match`)
    .required("Confirm your password")
});

const SignUp = ({ signUp, loading, error, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, cleanUp }) => (
        <SignUpWrapper>
          <FormWrapper>
            <Heading size="h1" color="#6433ff">
              Create your account
            </Heading>
            <StyledForm>
              <FlexContainer>
                <StyledField
                  type="text"
                  name="firstName"
                  placeholder="First name..."
                  component={Input}
                />
                <StyledField
                  type="text"
                  name="lastName"
                  placeholder="Last name..."
                  component={Input}
                />
              </FlexContainer>
              <StyledField
                type="email"
                name="email"
                placeholder="Email..."
                component={Input}
              />

              <StyledField
                type="password"
                name="password"
                placeholder="Password..."
                component={Input}
              />
              <StyledField
                type="password"
                name="confirmPassword"
                placeholder="Re-type password..."
                component={Input}
              />

              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Signing up" : null}
                type="submit"
              >
                Sign In
              </Button>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          </FormWrapper>
        </SignUpWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  cleanUp: actions.clean
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
