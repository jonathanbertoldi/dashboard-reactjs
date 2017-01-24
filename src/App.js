import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {lightBlue500, lightBlue800, orange500} from 'material-ui/styles/colors';

import Layout from './layout/default';
import Home from './routes/home/Home'
import Login from './routes/login/Login'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {

    const muiTheme = getMuiTheme({
			palette: {
				primary1Color: lightBlue500,
				primary2Color: lightBlue800,
				accent1Color: orange500,
			}
		});

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <Route path="/" component={Login} />
          <Route path="/home" component={Layout}>
            <IndexRoute component={Home} />
          </Route>
        </Router>
			</MuiThemeProvider>
    );
  }
}

export default App;
