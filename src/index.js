import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Roster from './components/Roster';
import Player from './components/Player';
import FavTeam from './components/FavTeam';

import theme from './components/styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/roster" render={(props) => <Roster {...props} />} />
        <Route
          exact
          path="/player/:id"
          render={(props, id) => <Player id={id} props={props} />}
        />
        <Route
          exact
          path="/favouriteTeam"
          render={(routerProps) => <FavTeam {...routerProps} />}
        />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
