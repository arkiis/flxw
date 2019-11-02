import "./Or-spacer.styles.scss";

import React, { Component } from "react";

//this component is made for the login page
//where users can login or login with Google
//It acts as the seperator
//WILL BE SET IN FUTURE USE*************

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
