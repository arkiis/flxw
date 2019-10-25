import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  height: 89vh;
  position: relative;
  background: #6433ff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.mediaQueries.medium} {
    height: 100vh;
    position: static;
  }
`;
