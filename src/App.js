import React from "react";
import { Provider } from "react-redux";
import Profile from "./layouts";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);
const App = () => {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
};

export default App;
