import React from "react";
import styled from "styled-components";
import Button from "../../UI/Forms/Button/Button";

import { Link } from "react-router-dom";

const GetStartedBannerWrapper = styled.div`
  background-color: #162244;
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  height: 460px;
  overflow: hidden;
  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
    flex-flow: column-reverse;
  }
`;
const GetStartedContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  justify-content: center;
  align-items: center;
  left: 0;

  @media ${props => props.theme.mediaQueries.medium} {
    left: unset;
    flex: 1 1 100%;
  }
`;

const GetStartedContent = styled.div`
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
const GetStartedButton = styled.button`
  margin-top: 14px;
  width: 40%;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 12px 10px;
  background-color: #6433ff;
`;

const GetStartedContenttwo = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  height: auto;
  width: 65%;
  position: absolute;
  right: 0px;
  top: 0px;
  max-width: 750px;

  img > {
    width: 100%;
  }
`;
// const GetStartedContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   flex: 1 1 50%;
// `;

const GetStartedBanner = () => {
  return (
    <GetStartedBannerWrapper>
      <GetStartedContentWrapper>
        <GetStartedContent>
          <h3>Become apart of the crypto space</h3>
          <Link to="/LogUp">
            <GetStartedButton>GET STARTED</GetStartedButton>
          </Link>
        </GetStartedContent>
      </GetStartedContentWrapper>
      <GetStartedContentWrapper>
        <GetStartedContenttwo>
          {/* replace image. Use JPEG lower size image */}
          {/* <img src={Image} /> */}
        </GetStartedContenttwo>
      </GetStartedContentWrapper>
    </GetStartedBannerWrapper>
  );
};

export default GetStartedBanner;
