import styled from "styled-components";

export const StepWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  margin-right: 14px;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  flex: 1 1 0%;

  @media ${props => props.theme.mediaQueries.medium} {
  }
`;

export const StepImage = styled.img`
  margin-top: -8px;
  flex-shrink: 0;
  width: 72px;
  height: 72px;

  background-color: white;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-shadow: rgba(218, 225, 233, 0.557) 0px 8px 16px;
  border-radius: 50%;
`;
export const StepsContent = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  > p {
    margin-top: 14px;
    color: black;
    opacity: 0.5;
    font-weight: 500;
  }
  > h3 {
    margin-top: 35px;
  }
  > span {
    height: 1px;
    width: 200px;
    background-color: #1c1621;
    opacity: 0.6;

    margin-top: 0px;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    & span {
      display: none;
    }
  }
`;
