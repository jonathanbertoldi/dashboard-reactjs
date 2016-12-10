import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './App.css';

import Layout from './layout/default';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute/>
          </Route>
        </Router>
    );
  }
}

export default App;
