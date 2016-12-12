import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './layout/default';
import Home from './routes/home/Home'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
          </Route>
        </Router>
    );
  }
}

export default App;
