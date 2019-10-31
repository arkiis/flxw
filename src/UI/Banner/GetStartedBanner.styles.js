import styled from "styled-components";

export const GetStartedBannerWrapper = styled.div`
  background-color: #162244;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  height: 460px;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
    flex-flow: column-reverse;
    justify-content: space-between;
  }
`;
export const GetStartedContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;

  @media ${props => props.theme.mediaQueries.medium} {
    left: unset;
  }
`;

export const GetStartedContent = styled.div`
  flex-direction: column;
  display: flex;
  max-width: 350px;
  justify-content: center;
  font-size: 32px;
  color: white;
  text-align: left;
  min-width: 250px;

  @media ${props => props.theme.mediaQueries.medium} {
    text-align: center;
    min-width: unset;
    width: 100%;
    font-size: 27px;
    max-width: 300px;
  }
  @media ${props => props.theme.mediaQueries.small} {
    font-size: 16px;
  }
`;
export const GetStartedButton = styled.button`
  margin-top: 14px;
  width: 40%;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 12px 10px;
  background-color: #6433ff;
`;

export const GetStartedContenttwo = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  height: auto;
  width: 100%;
  justify-content: center;
  right: 0px;
  top: 0px;
  max-width: 750px;

  img > {
    width: 100%;
  }
`;
