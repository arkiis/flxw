import React from "react";
import styled from "styled-components";
import image from "../../assets/images/placeholder.com-logo4.jpg";

const FooterWrapper = styled.div`
  width: 100%;
  background: white;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 40px 20px 20px 20px;
`;

const FooterContainer = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 auto;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  flex: 1 1 auto;
  color: slate;
  overflow: hidden;
  text-align: left;

  & :not(img):not(h3) {
    margin-top: 30px;
  }

  > a {
    margin-top: 5px !important;
  }

  > p {
  }
  > img {
    width: 160px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <img src={image}></img>
          <p>202-555-0135</p>
          <p>@ 2019 Flxw</p>
        </FooterContent>
        <FooterContent>
          <h3>Discover</h3>
          <a>About</a>
        </FooterContent>
        <FooterContent>
          <h3>Follow us</h3>
          <a>Twitter</a>
          <a>Instagram</a>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
