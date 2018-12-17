import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import App from "./components/App";

import "gestalt/dist/gestalt.css";
import "./components/App.css";

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact component={App} path="/" />
        <Route component={SignIn} path="/signIn" />
        <Route component={SignUp} path="/signUp" />
        <Route component={Checkout} path="/checkout" />
      </Switch>
    </React.Fragment>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
if (module.hot) {
  module.hot.accept();
}
