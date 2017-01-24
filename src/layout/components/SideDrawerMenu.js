import React, {Component} from 'react';
import {Link} from 'react-router'

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

import Home from 'material-ui/svg-icons/action/home';
import Code from 'material-ui/svg-icons/action/code';
import Social from 'material-ui/svg-icons/social/share';
import Gallery from 'material-ui/svg-icons/image/collections';
import Charts from 'material-ui/svg-icons/editor/show-chart';
import Mail from 'material-ui/svg-icons/content/mail';

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
					style={{backgroundColor: this.props.titleBackgroundColor}} 
					titleStyle={{color: this.props.titleStyleColor}} 
					iconElementLeft={<Logo />}
					iconStyleLeft={{marginTop: "13px", marginLeft: "0px"}} />

				<Menu desktop={true} 
					autoWidth={false}
					listStyle={{width: "260px", backgroundColor:"#FAFAFA"}}>

					<MenuItem leftIcon={<Home />} 
						containerElement={<Link to="/home" />} 
						onTouchTap={this.props.onToggleDrawer}>Home</MenuItem>

				</Menu>
				<Divider />

				<Menu desktop={true}
					autoWidth={false}
					listStyle={{width: "260px"}}>
					<MenuItem leftIcon={<Mail />} 
						onTouchTap={this.props.onToggleDrawer}>Mail</MenuItem>
					<MenuItem leftIcon={<Charts />} 
						onTouchTap={this.props.onToggleDrawer}>Charts</MenuItem>
					<MenuItem leftIcon={<Code />} 
						onTouchTap={this.props.onToggleDrawer}>Code</MenuItem>
					<MenuItem leftIcon={<Social />} 
						onTouchTap={this.props.onToggleDrawer}>Social</MenuItem>
					<MenuItem leftIcon={<Gallery />} 
						onTouchTap={this.props.onToggleDrawer}>Gallery</MenuItem>
				</Menu>
					
			</Drawer>
		);
	}
}

export default SideDrawerMenu;