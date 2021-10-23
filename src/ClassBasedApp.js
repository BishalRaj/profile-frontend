import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./layouts/home";
import Auth from "./layouts/auth";
import Admin from "./layouts/admin";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
library.add(fab, far, fas);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_status: false,
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    store.dispatch(loadUser());
  }

  handleLogin(data) {
    this.setState({
      login_status: true,
      user: data,
    });
  }

  // Provider;

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* Main Route */}
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home {...props} handleClick={this.handleClick} />
              )}
            />

            {/* Auth */}
            <Route
              exact
              path="/login"
              render={(props) => (
                <Auth
                  {...props}
                  loginStatus={this.state.login_status}
                  handleLogin={this.handleLogin}
                />
              )}
            />

            {/* Admin Route */}
            <Route
              exact
              path="/admin"
              render={(props) => <Admin {...props} />}
            />

            {/* Individual User Route */}
            <Route
              path={"/:id"}
              exact
              render={(props) => (
                <Home {...props} handleClick={this.handleClick} />
              )}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
