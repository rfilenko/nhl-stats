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
  <Router>
    <Switch>
      <Route exact path="/">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Route>
      <Route path="/roster">
        <Roster setIsVisible={true} />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
