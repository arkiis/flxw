import React from "react";
import * as Styles from "./Footer.styles";
import image from "../../assets/images/placeholder.com-logo4.jpg";

const Footer = () => {
  return (
    <Styles.FooterWrapper>
      <Styles.FooterContainer>
        <Styles.FooterContent>
          <img src={image}></img>
          <p>202-555-0135</p>
          <p>@ 2019 Flxw</p>
        </Styles.FooterContent>
        <Styles.FooterContent>
          <h3>Discover</h3>
          <a>About</a>
        </Styles.FooterContent>
        <Styles.FooterContent>
          <h3>Follow us</h3>
          <a>Twitter</a>
          <a>Instagram</a>
        </Styles.FooterContent>
      </Styles.FooterContainer>
    </Styles.FooterWrapper>
  );
};

export default Footer;
