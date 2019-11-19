import React, { Suspense, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Login from "./components/auth/login";
import VerifyEmail from "./components/auth/VerifyEmail/VerifyEmail";
import { connect } from "react-redux";
import SignUp from "./components/auth/SignUp/SignUp";
import PriceDetail from "./pages/PriceDetail/PriceDetail";
import Logout from "././components/auth/Logout/Logout";
import RecoverPassword from "./components/auth/RecoverPassword/RecoverPassword";
import AccountSettings from "./components/auth/AccountSettings/AccountSettings";
import Loader from "./UI/loader/loader";
import ErrorBoundary from "././components/ErrorBoundary/ErrorBoundary";

const Dashboard = React.lazy(() => import("./pages/dashboard/dashboard"));
const Chatroom = React.lazy(() => import("./pages/chatroom/Chatroom"));
const Prices = React.lazy(() => import("./pages/Prices/prices"));

const Routes = ({ loggedIn, emailVerified, dimensions }) => {
  const [isToggle, setToggle] = useState(false);
  let routes;

  //funciton for closing the modals
  const toggleState = () => {
    setToggle(!isToggle);
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
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/account-settings" component={AccountSettings} />
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
              <PriceDetail
                {...props}
                dimensions={dimensions.width}
                onClose={toggleState}
                isToggle={isToggle}
                setToggle={setToggle}
              />
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
        <Route
          exact
          path="/"
          render={() => (
            <Homepage
              onClose={toggleState}
              isToggle={isToggle}
              setToggle={setToggle}
            />
          )}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logUp" component={SignUp} />
        <Route exact path="/recover" component={RecoverPassword} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <ErrorBoundary>{routes}</ErrorBoundary>
    </div>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(Routes);
