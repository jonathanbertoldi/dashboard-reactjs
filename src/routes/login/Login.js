import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {    

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            pw: ""
        }
    }

	login() {
        var login = this.refs.login.getValue();
        var pw = this.refs.pw.getValue();
        
        if (login !== "admin" || pw !== "admin") {
            console.log("Invalid User!");
        } else {
            this.props.router.push("/home");
        }
	}

    render() {
        return (
            <div style={{backgroundColor: "#f9f9f9", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{backgroundColor: "#ffffff", padding: "40px", boxShadow: "0px 0px 18px -9px"}}>
                    <TextField
                        ref="login"
                        floatingLabelText="Login"
                        fullWidth={true} />
                    <TextField
                        ref="pw"
                        type="password"
                        floatingLabelText="Password"
                        fullWidth={true} />
                    <span style={{margin: "10px"}}></span>
                    <RaisedButton
                        label="Sign In"
                        primary={true}
                        fullWidth={true}
                        onTouchTap={this.login.bind(this)} />
                </div>
            </div>
        )
    }
}

export default Login;