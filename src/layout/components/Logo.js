import React, {Component} from 'react';

import LogoSVG from './logo.svg';

class Logo extends Component {
	render() {
		return (
			<img src={LogoSVG} alt="Dashboard logo" />
		);
	}
}

export default Logo;