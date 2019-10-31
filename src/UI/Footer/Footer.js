import React from "react";
import * as Styles from "./Footer.styles";
import image from "../../assets/images/flxw-logo-01-01.png";
import Link from "../Link/Link";

const Footer = () => {
  return (
    <Styles.FooterWrapper>
      <Styles.FooterContainer>
        <Styles.FooterContent>
          <img src={image} alt="placeholder-logo"></img>
          <p>202-555-0135</p>
          <p>@ 2019 Flxw</p>
        </Styles.FooterContent>
        <Styles.FooterContent>
          <h3>Discover</h3>
          <Link link={"#"}>About</Link>
        </Styles.FooterContent>
        <Styles.FooterContent>
          <h3>Follow us</h3>
          <Link link={"#"}>Twitter</Link>
          <Link link={"#"}>Instagram</Link>
        </Styles.FooterContent>
      </Styles.FooterContainer>
    </Styles.FooterWrapper>
  );
};

export default Footer;
