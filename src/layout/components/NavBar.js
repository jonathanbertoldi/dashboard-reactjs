import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import NavBarMenu from './NavBarMenu'

class NavBar extends Component {
	render() {
		return (
			<AppBar title="Dashboard" style={{height: "48px"}} titleStyle={{height: "48px", fontSize: "22px", lineHeight: "48px"}} iconStyleLeft={{marginTop: "0px"}} iconElementRight={<NavBarMenu />} iconStyleRight={{marginTop: "0px"}} />
		);
	}
}

export default NavBar;