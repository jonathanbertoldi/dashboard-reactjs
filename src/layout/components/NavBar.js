import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import SideDrawerMenu from './SideDrawerMenu'

import NavBarMenu from './NavBarMenu'

class NavBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			docked: false
		};
	}

	componentWillMount() {
		const mql = window.matchMedia(`(min-width: 1000px)`);
		mql.addListener(this.mediaQueryChanged.bind(this));
		this.setState({mql: mql, open: mql.matches, docked: mql.matches});
	}

	componentWillUnmount() {
		this.state.mql.removeListener(this.mediaQueryChanged);
	}

	mediaQueryChanged() {
    	this.setState({docked: this.state.mql.matches});
    	this.setState({open: this.state.mql.matches});
  	}

	// Toggle function (open/close)
	toggleDrawer() {
		if (!this.state.mql.matches)
			this.setState({open: !this.state.open});
	}

	render() {
		return (
			<div>
				<AppBar title="Dashboard" 
					onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
					iconElementRight={<NavBarMenu />}  />

				<SideDrawerMenu open={this.state.open}
					docked={this.state.docked}
					onToggleDrawer={this.toggleDrawer.bind(this)} />
			</div>
		);
	}
}

export default NavBar;