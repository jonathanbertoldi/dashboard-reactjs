import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {lightBlue500, lightBlue800, orange500} from 'material-ui/styles/colors';

import NavBar from './components/NavBar';

class Layout extends Component {
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
				<NavBar />
			</MuiThemeProvider>
		);
	}
}

export default Layout;