import React, {Component} from 'react';
import {Link} from 'react-router'

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';

import Logo from './Logo';

class SideDrawerMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false, docked: false};
	}

	render() {

		const style = {
	    	backgroundColor: "#FFF"
	    }

		return (
			<Drawer containerStyle={style} 
				zDepth={1} 
				docked={this.props.docked} 
				width={260} 
				open={this.props.open} 
				onRequestChange={this.props.onToggleDrawer} >

				<AppBar title="Dashboard"
					style={{backgroundColor: "#FFF"}} 
					titleStyle={{color: "#767676"}} 
					iconElementLeft={<Logo />}
					iconStyleLeft={{marginTop: "13px", marginLeft: "0px"}} />

				<Menu desktop={true} 
					autoWidth={false}
					listStyle={{width: "260px", backgroundColor:"#FAFAFA"}}>

					<MenuItem leftIcon={<Home />} 
						containerElement={<Link to="/" />} 
						onTouchTap={this.props.onToggleDrawer}>Home</MenuItem>

				</Menu>
				<Divider />

			</Drawer>
		);
	}
}

export default SideDrawerMenu;