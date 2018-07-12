import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../actions';

import DashboardNav from './nav';
import DashboardItem from './item';

class Dashboard extends Component {

    componentDidMount() {
        this.props.items_fetch();
    }

    render() {
        return (
            <div className="dashboard container">
                <DashboardNav />
                <div className="row">
                    {
                        this.props.items.map(item => {
                            return <DashboardItem data={item} />
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps({ items }) {
    return { items }
}

export default connect(mapStateToProps, actions)(Dashboard);