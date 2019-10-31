import styled from "styled-components";
import { Form, Field } from "formik";

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  z-index: 20;
  margin-bottom: 0px;
  max-width: 38rem;
  border-radius: 1rem;
  padding: 5rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 46px -4px rgba(0, 0, 0, 0.28);

  @media ${props => props.theme.mediaQueries.medium} {
    margin-top: 40px;
    z-index: ${({ negZindex }) => (negZindex ? "-3" : "0")};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  z-index: 10;

  flex: 1 40%;
  width: 100%;
  position: relative;
  align-items: center;
  flex-direction: column;
`;
export const StyledField = styled(Field)`
  width: 100%;
`;
