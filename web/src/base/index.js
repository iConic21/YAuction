import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import actions from './../actions';

import NotFound from './404';
import Dashboard from './../dashboard';
import Navbar from './navbar';
import Modal from './modal';

class Base extends Component {

    componentDidMount() {
        this.props.user_fetch_me();
    }

    render() {
        return (
            <div className="base">
                <Navbar />
                <div className="mainBody show">
                    <Switch>
                        <Route path='/' component={Dashboard} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <Modal />
            </div>
        );
    }
}

function mapStateToProps({ modal }) {
    return { modal }
}

export default connect(mapStateToProps, actions)(Base);