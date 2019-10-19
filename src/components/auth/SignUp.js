// import React, { Component } from "react";
// import "../auth/SignUp-styles.scss";
// import { connect } from "react-redux";
// import MainLogo from "../../assets/images/my-password.svg";
// import CustomButton from "../customButton/customButton";
// import OrSpacer from "../Or-spacer/Or-spacer";
// import * as actions from "../../store/actions/index";

//NO LONGER USING THIS COMPONENT. WILL DELETE LATER*****************<----------

// class SignUp extends Component {
//   state = {
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     confirmPassword: ""
//   };
//   handleChange = e => {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div className="container-signUp">
//         <div className="form-container-signUp">
//           <h1 style={{ color: "white" }}>Create your account</h1>
//           <form onSubmit={this.handleSubmit} className="white-signUp">
//             <CustomButton />

//             <OrSpacer />
//             <div className="input-field-signUp">
//               <input
//                 type="text"
//                 id="firstName"
//                 onChange={this.handleChange}
//                 placeholder="First Name"
//               ></input>
//             </div>
//             <div className="input-field-signUp">
//               <input
//                 type="text"
//                 id="lastName"
//                 onChange={this.handleChange}
//                 placeholder="last Name"
//               ></input>
//             </div>

//             <div className="input-field-signUp">
//               <input
//                 type="email"
//                 id="email"
//                 onChange={this.handleChange}
//                 placeholder="Email"
//               ></input>
//             </div>
//             <div className="input-field-signUp">
//               <input
//                 type="password"
//                 id="password"
//                 onChange={this.handleChange}
//                 placeholder="Password"
//               ></input>
//             </div>

//             <div className="btn-field">
//               <button className="btn-signUp">Create account</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => ({});

// const mapDispatchToProps = {
//   signUp: actions.signUp
// };

// export default connect()(SignUp);
