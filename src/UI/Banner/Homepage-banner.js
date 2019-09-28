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
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <h1>$150B+</h1>
        <p>Cryptocurrency exchanged</p>
      </BannerContent>
      <BannerContent>
        <h1>24</h1>
        <p>Countries Supported</p>
      </BannerContent>
      <BannerContent>
        <h1>100</h1>
        <p>Customers served</p>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
