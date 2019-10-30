import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import Login from "./components/auth/login";
import VerifyEmail from "./components/auth/VerifyEmail/VerifyEmail";
import { connect } from "react-redux";
import LogUp from "./components/auth/LogUp/LogUp";

import Logout from "././components/auth/Logout/Logout";
import RecoverPassword from "./components/auth/RecoverPassword/RecoverPassword";
import Profile from "./components/auth/Profile/Profile";

const Dashboard = React.lazy(() => import("./pages/dashboard/dashboard"));
const Chatroom = React.lazy(() => import("./pages/chatroom/Chatroom"));
const Prices = React.lazy(() => import("./pages/Prices/prices"));
const PriceDetail = React.lazy(() => import("./pages/PriceDetail/PriceDetail"));

const Routes = ({ loggedIn, emailVerified, dimensions }) => {
  let routes;

  {
    /*this function is to be passed  
  to every component that needs any
  UI changed on mobile view
  */
  }

  const mobileToggle = (desktop, mobile) => {
    const toggle = dimensions > 1070 ? desktop : mobile;
    return toggle;
  };

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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/chatroom" component={Chatroom} />
          <Route
            exact
            path="/prices"
            exact
            render={props => (
              <Prices {...props} dimensions={dimensions.width} />
            )}
          />
          <Route
            exact
            path="/prices/:id"
            exact
            render={props => (
              <PriceDetail {...props} dimensions={dimensions.width} />
            )}
          />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
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
