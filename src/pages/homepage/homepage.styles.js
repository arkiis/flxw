import styled from "styled-components";

export const HeaderContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 20px;
  margin-top: 50px;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 35px 24px 150px;
`;

export const HomepageWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    width: 100%;
    height: 55vh;
    background: #6433ff;
    position: absolute;
    top: 0;
  }
`;
export const HomeMainWrapper = styled.div`
  width: 100%;
  height: 89%;
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 140px;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
    flex-flow: column-reverse;
    margin-top: 50px;
  }
`;
export const FeatureImg = styled.img`
  max-width: 100%;

  @media ${props => props.theme.mediaQueries.medium} {
    width: 70vw;
  }
`;
export const BlueBackground = styled.div`
  background-color: #6433ff;
  width: 100%;
`;
