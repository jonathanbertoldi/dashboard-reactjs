import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {lightBlue500, lightBlue800, orange500} from 'material-ui/styles/colors';

import NavBar from './components/NavBar';

class Layout extends Component {
	
	docked = "260px";
	undocked = "0px";

	transformDocked = '';

	constructor(props) {
		super(props);
		this.state = {
			style: {paddingLeft: this.docked}
		}
	}

	componentWillMount() {
		const mql = window.matchMedia(`(min-width: 1000px)`);
		mql.addListener(this.mediaQueryChanged.bind(this));
		this.setState({mql: mql});
		if (mql.matches){
			this.setState({style:{paddingLeft: this.docked}})
		} else {
			this.setState({style:{paddingLeft: this.undocked}})
		}
	}

	componentWillUnmount() {
		this.state.mql.removeListener(this.mediaQueryChanged);
	}

	mediaQueryChanged() {
		if (this.state.mql.matches){
			this.setState({style:{paddingLeft: this.docked}})
		} else {
			this.setState({style:{paddingLeft: this.undocked}})
		}
  	}

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
				<div>
					<NavBar />
					<div style={this.state.style}>
							{this.props.children}
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Layout;