import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Chatroom from "./pages/chatroom/Chatroom";
import Login from "./components/auth/login";
import VerifyEmail from "./components/auth/VerifyEmail/VerifyEmail";
import { connect } from "react-redux";
import Dashboard from "./pages/dashboard/dashboard";
import LogUp from "./components/auth/LogUp/LogUp";
import Prices from "./pages/Prices/prices";
import Logout from "././components/auth/Logout/Logout";
import RecoverPassword from "./components/auth/RecoverPassword/RecoverPassword";
import Profile from "./components/auth/Profile/Profile";
import PriceDetail from "./pages/PriceDetail/PriceDetail";

const Routes = ({ loggedIn, emailVerified }) => {
  console.log(loggedIn);
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail}></Route>
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/chatroom" component={Chatroom} />
        <Route exact path="/prices" exact component={Prices} />
        <Route exact path="/prices/:id" exact component={PriceDetail} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logUp" component={LogUp} />
        <Route exact path="/recover" component={RecoverPassword} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <div>{routes}</div>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(Routes);
