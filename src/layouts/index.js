import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./home";
import Auth from "./auth";
import Admin from "./admin";
import { connect } from "react-redux";
import { LoadUserByToken } from "../Actions/authAction";
const Index = (props) => {
  const token = localStorage.getItem("token");
  const loginStatus = props.isLoggedIn;

  useEffect(() => {
    if (token && !loginStatus) {
      props.LoadUserByToken(token);
    }
  }, [loginStatus, token, props]);

  return (
    <>
      <Router>
        <Switch>
          {/* Main Route */}
          <Route exact path={"/"} render={(props) => <Home {...props} />} />

          {/* Auth */}
          <Route exact path="/login" render={(props) => <Auth />} />

          {/* Admin Route */}
          <Route exact path="/admin" render={(props) => <Admin {...props} />} />

          {/* Individual User Route */}
          <Route path={"/:id"} exact render={(props) => <Home {...props} />} />
        </Switch>
      </Router>
    </>
  );
};

function mapStateToProps(state) {
  return { isLoggedIn: state.auth.isLoggedIn };
}

export default connect(mapStateToProps, { LoadUserByToken })(Index);
