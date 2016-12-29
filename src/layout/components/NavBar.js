import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import SideDrawerMenu from './SideDrawerMenu'

import NavBarMenu from './NavBarMenu'

class NavBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			docked: false,
			titleStyleColor: "#FFF",
			titleBackgroundColor: "#03A9F4"
		};
	}

	componentWillMount() {
		const mql = window.matchMedia(`(min-width: 1000px)`);
		mql.addListener(this.mediaQueryChanged.bind(this));
		this.setState({mql: mql, open: mql.matches, docked: mql.matches});
		if (this.state.open) {
			this.setState({titleBackgroundColor: "#03A9F4", titleStyleColor: "#FFF"});
		} else {
			this.setState({titleBackgroundColor: "#FFF", titleStyleColor: "#6F797E"});
		}
	}

	componentWillUnmount() {
		this.state.mql.removeListener(this.mediaQueryChanged);
	}

	mediaQueryChanged() {
    	this.setState({docked: this.state.mql.matches});
    	this.setState({open: this.state.mql.matches});
		if (this.state.open) {
			this.setState({titleBackgroundColor: "#03A9F4", titleStyleColor: "#FFF"});
		} else {
			this.setState({titleBackgroundColor: "#FFF", titleStyleColor: "#6F797E"});
		}
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
					titleBackgroundColor={this.state.titleBackgroundColor}
					titleStyleColor={this.state.titleStyleColor}
					onToggleDrawer={this.toggleDrawer.bind(this)} />
			</div>
		);
	}
}

export default NavBar;