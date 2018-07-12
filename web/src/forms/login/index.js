import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../actions';

import Button from './../../base/buttons';

class LoginForm extends Component {
    handleLoginClick() {
        this.props.user_login(this.refs.username.value, () => {
            this.props.modal_hide();
        });
    }

    render() {
        return (
            <div className="loginForm__Body">
                <div className="loginForm__Body__avatar">
                    <img src="/images/avatar/avatar-7.png" alt="avatar" />
                </div>
                <center><h1>Login</h1></center>
                <div className="input-field">
                    <input id="username" type="text" ref="username" />
                    <label for="username">Username</label>
                </div>
                <Button label="Login" onClick={this.handleLoginClick.bind(this)} wait={true} />
            </div>
        );
    }
}

export default connect(null, actions)(LoginForm);