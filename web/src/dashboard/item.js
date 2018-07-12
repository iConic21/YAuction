import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../actions';
import Moment from 'react-moment';

import ItemView from './../forms/item/view';

class DashboardItem extends Component {

    handleCardClick() {
        this.props.modal_hide();
        this.props.modal_show(<ItemView data={this.props.data} />, 'item--view');
    }

    render() {
        var date = new Date(this.props.data.endsOn);
        return (
            <div className="col s3 dashboard__item">
                <div className="card" onClick={this.handleCardClick.bind(this)} >
                    <div className="card__price">${this.props.data.currentValue}</div>
                    <div className="card__image"><img src={"/images/items/" + this.props.data.image} alt="item image" /></div>
                    <div className="card__info">
                        <div className={"card__status " + (date < new Date() ? "ended" : "open")}>{date < new Date() ? 'ended' : 'open'}</div>
                        <div className="card__name">{this.props.data.name}</div>
                        <div className="card__description">{this.props.data.description}</div>
                    </div>
                    <div className="card__footer">
                        <div className="card__createdBy">By: {this.props.data.createdBy.name}</div>
                        <div className="card__endsOn"><Moment fromNow>{date}</Moment></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(DashboardItem);