import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {white} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Logo from './Logo';

class NavBarMenu extends Component {

	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {

		const actions = [
			<FlatButton label="OK"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose} />
		];

		return (
			<div>
				<Dialog title="Sobre"
						actions={actions}
						modal={false}
						open={this.state.open}
						onRequestClose={this.handleClose}
						contentStyle={{maxWidth: "450px"}} 
						autoScrollBodyContent={true}>

					<div style={{display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
						<div style={{display: "flex", justifyContent: "center", marginRight: "10px"}}>
							<Logo style={{width: "200px", height: "200px"}} />
						</div>
						<div>
							<h4>REACTJS DASHBOARD</h4>
							<p><b>Autor: </b>Jonathan Bertoldi</p>
							<p><b>Versão: </b>0.1</p>
							<p><b>2016</b></p>
						</div>
					</div>

				</Dialog>
				<IconMenu iconButtonElement={<IconButton><MoreVertIcon color={white}/></IconButton>} 
					targetOrigin={{horizontal: 'right', vertical: 'top'}}
					anchorOrigin={{horizontal: 'right', vertical: 'top'}}
					desktop={true} >

					<MenuItem primaryText="Sobre" onTouchTap={this.handleOpen} />
					<MenuItem primaryText="Sair" />
				</IconMenu>
				
			</div>
		);
	}
}

export default NavBarMenu;