import styled from "styled-components";

export const BannerContainer = styled.div`
  background-color: #6433ff;
  display: flex;
  width: 100%;
  max-width: 1080px;
  flex-direction: row;
  margin: 30px auto;
  padding: 24px;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;

export const BannerH1 = styled.h1`
  color: white;
  margin-bottom: 5px;
`;

export const BannerContent = styled.div`
  text-align: center;
  flex: 1 1 0;

  > h1 {
    font-size: 46px;
  }

  > p {
    color: white;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    padding: 20px 0;
  }
`;
