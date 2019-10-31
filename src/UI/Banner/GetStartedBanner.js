import React from "react";
import * as Styles from "./GetStartedBanner.styles";
import iPhone from "../../assets/images/icon_iphonex-01.svg";
import { Link } from "react-router-dom";

const GetStartedBanner = () => {
  return (
    <Styles.GetStartedBannerWrapper>
      <Styles.GetStartedContentWrapper>
        <Styles.GetStartedContent>
          <h3>Become apart of the crypto space</h3>
          <Link to="/LogUp">
            <Styles.GetStartedButton>GET STARTED</Styles.GetStartedButton>
          </Link>
        </Styles.GetStartedContent>
      </Styles.GetStartedContentWrapper>
      <Styles.GetStartedContentWrapper>
        <Styles.GetStartedContenttwo>
          <img src={iPhone} style={{ width: "400px" }} />
        </Styles.GetStartedContenttwo>
      </Styles.GetStartedContentWrapper>
    </Styles.GetStartedBannerWrapper>
  );
};

export default GetStartedBanner;
