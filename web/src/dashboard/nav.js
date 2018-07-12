import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import ItemForm from '../forms/item/create';

class DashboardNav extends Component {

    handleNewItemClick() {
        this.props.modal_show(<ItemForm />, 'item--detail');
    }

    render() {
        return (
            <div className="dashboard__nav">
                <div className="input-field">
                    <i className="fal fa-search prefix"></i>
                    <input placeholder="Search" id="icon_prefix" type="text" />
                </div>
                <div className="dashboard__nav__newItem" onClick={this.handleNewItemClick.bind(this)} ><i className="fal fa-plus"></i> Add new</div>
            </div>
        );
    }
}

export default connect(null, actions)(DashboardNav);