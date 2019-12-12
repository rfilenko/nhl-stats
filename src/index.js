import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Roster from "./components/Roster";
import Contact from "./components/Contact";

import theme from "./components/styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/roster">
          <Roster />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
