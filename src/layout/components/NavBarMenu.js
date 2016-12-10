import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {white} from 'material-ui/styles/colors';

class NavBarMenu extends Component {
	render() {
		return (
			<IconMenu iconButtonElement={<IconButton><MoreVertIcon color={white}/></IconButton>} 
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
    			anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    		>
    			<MenuItem primaryText="Atualizar" />
			    <MenuItem primaryText="Sobre" />
			    <MenuItem primaryText="Sair" />
    		</IconMenu>
		);
	}
}

export default NavBarMenu;