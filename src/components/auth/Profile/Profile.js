import React from "react";
import { connect } from "react-redux";

import { Formik, Field } from "formik";
import {
  FormWrapper,
  StyledForm,
  StyledField
} from "../../../hoc/layout/elements/index";
import styled from "styled-components";
import * as Yup from "yup";
import Message from "../../../UI/Message/Message";
import Heading from "../../../UI/Headings/Heading";
import Input from "../../../UI/Forms/Input/input";
import Button from "../../../UI/Forms/Button/Button";

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  * {
    flex: 1 40%;
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
  position: absolute;
  bottom: -2rem;
`;
const ProfileSchema = Yup.object().shape({
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

//This is where users sign up for an account

const Profile = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        // edit the profile here
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
              {/* holds input feilds */}

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
                // loading={loading ? "Signing up" : null}
                type="submit"
              >
                Save
              </Button>
              <MessageWrapper>
                {/* <Message error show={error}>
                  {error}
                </Message> */}
              </MessageWrapper>
            </StyledForm>
          </FormWrapper>
        </SignUpWrapper>
      )}
    </Formik>
  );
};

export default Profile;
