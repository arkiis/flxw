import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as actions from "../../store/actions/index";
import "../auth/Signin-styles.scss";
import { FormWrapper, StyledForm } from "../../hoc/layout/elements/index";
import { MainWrapper } from "../../hoc/layout/layout";
import Input from "../../UI/Forms/Input/input";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/images/wave (1).svg";
import PasswordLink from "../../UI/Forms/PasswordLink/PasswordLink";
import Button from "../../UI/Forms/Button/Button";
import Heading from "../../UI/Headings/Heading";
import Message from "../../UI/Message/Message";

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  * {
    flex: 40%;
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    flex-direction: column;
    flex-flow: column-reverse;
    text-align: center;

    & :last-child {
      margin-bottom: 20px;
    }
  }
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wave = styled.img`
  width: 100%;
  top: -10px;
  position: absolute;
  display: flex;
  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;
const TestingInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, "too short")
    .email("Invalid email.")
    .required("The email is required"),
  password: Yup.string().required("The password is required"),
});

const Login = ({ login, loading, error, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  const str = "helping";

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await login(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <MainWrapper>
          <Wave src={MainLogo} alt="wave shape" />
          <FormWrapper>
            <Heading size="h1" color="#6433ff">
              Sign In to Flxw
            </Heading>
            <StyledForm>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                component={Input}
              ></Field>

              <Field
                type="password"
                name="password"
                placeholder="Password"
                component={Input}
              ></Field>
              <ButtonWrapper>
                <Link to="/recover">
                  <PasswordLink>Forgot your password?😱</PasswordLink>
                </Link>
                <Button
                  disabled={!isValid || isSubmitting}
                  loading={loading ? "Logging in" : null}
                  type="submit"
                >
                  Sign In
                </Button>
              </ButtonWrapper>
              <TestingInfo>
                <div>
                  <label>
                    <strong>testing email</strong>
                  </label>
                  <p>william.fleckenstein@gmail.com</p>
                </div>
                <div>
                  <label>
                    <strong>testing password</strong>
                  </label>
                  <p> 12345678</p>
                </div>
              </TestingInfo>
              {/* if login creditials are not correct, this message will appear */}
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          </FormWrapper>
        </MainWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  login: actions.signIn,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
