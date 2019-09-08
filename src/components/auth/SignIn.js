import React, { Component } from "react";
import "../auth/Signin-styles.scss";
import MainLogo from "../../assets/images/wave (1).svg";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <img className="wave" src={MainLogo} alt="wave shape" />
        <div className="form-container">
          <h1>Sign in to Flxw</h1>
          <form onSubmit={this.handleSubmit} className="white">
            <div className="input-field">
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                placeholder="Email"
              ></input>
            </div>
            <div className="input-field">
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                placeholder="Password"
              ></input>
            </div>
            <div className="btn-field">
              <p>
                Forgot your password?
                <span role="img" aria-label="emoji">
                  😱
                </span>
              </p>
              <button className="btn">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
