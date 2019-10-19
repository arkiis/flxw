import "./customButton-styles.scss";
import GoogleLogo from "../../assets/images/googleLogo.svg";

import React, { Component } from "react";

//This is the google sign in button that will
//be used for users to sign in using their google account

class CustomButton extends Component {
  render() {
    return (
      <div className="custom-button-container">
        <div className="google-container">
          <div className="google-logo">
            <img src={GoogleLogo} alt="google logo" />
          </div>
          <div className="btn-google">
            <button>Sign up with Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomButton;
