import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../actions';

import LoginForm from './../forms/login';

class Navbar extends Component {

    handleLoginClick() {
        this.props.modal_show(<LoginForm />, 'loginForm');
    }

    handleLogoutClick() {
        this.props.user_logout();
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">YAuction</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {!this.props.user && <li><div onClick={this.handleLoginClick.bind(this)} ><i className="fal fa-sign-in-alt"></i></div></li>}
                        {this.props.user && <li><div>Hi, {this.props.user.name}</div></li>}
                        {this.props.user && <li><div onClick={this.handleLogoutClick.bind(this)} ><i className="fal fa-power-off"></i></div></li>}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ user }) {
    return { user }
}

export default connect(mapStateToProps, actions)(Navbar);