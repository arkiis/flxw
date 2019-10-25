import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
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

const BannerH1 = styled.h1`
  color: white;
  margin-bottom: 5px;
`;

const BannerContent = styled.div`
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

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerH1>$150B+</BannerH1>
        <p>Cryptocurrency exchanged</p>
      </BannerContent>
      <BannerContent>
        <BannerH1>24</BannerH1>
        <p>Countries Supported</p>
      </BannerContent>
      <BannerContent>
        <BannerH1>100</BannerH1>
        <p>Customers served</p>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
