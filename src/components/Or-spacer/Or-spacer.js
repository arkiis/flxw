import "./Or-spacer.styles.scss";

import React, { Component } from "react";

//this component is made for the login page
//where users can login or login with Google

class OrSpacer extends Component {
  render() {
    return (
      <div className="orContainer">
        <div className="line">
          <span>or</span>
        </div>
      </div>
    );
  }
}

export default OrSpacer;
