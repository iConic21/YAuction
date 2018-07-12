import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../../actions';
import Moment from 'react-moment';

import Button from './../../../base/buttons';

class ItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
            winner: null
        };
    }

    componentDidMount() {
        this.getwinner();
    }

    componentWillReceiveProps(props) {
        this.getwinner(props);
    }

    getwinner(props) {
        this.props.items_fetch_bid_winner(props ? props.data._id : this.props.data._id, res => {
            this.setState({ winner: res.data });
        })
    }

    handleNewBid() {
        this.props.items_add_bid(this.props.data._id, {
            value: this.refs.inputNum.value
        }, res => {
            this.setState({ currentValue: res.data.newValue });
        });
    }

    render() {
        var isEnded = new Date(this.props.data.endsOn) < new Date();

        return (
            <div className="item--view__Body">
                <div class="row">
                    <div class="col s3">
                        <img className="item--view__Body__image" src={"/images/items/" + this.props.data.image} alt="item image" />
                    </div>
                    <div class="col s9">
                        <div className="item--view__Body__info">
                            <div className="item--view__Body__info__name">{this.props.data.name}</div>
                            <div className="item--view__Body__info__description">{this.props.data.description}</div>
                            <div className="item--view__Body__info__ends">{!isEnded ? 'Ends in:' : 'Ended:'} <Moment fromNow>{this.props.data.endsOn}</Moment></div>
                            <div className="item--view__Body__info__bid">
                                <div className="item--view__Body__info__bid__current">${this.state.currentValue === 0 ? this.props.data.currentValue : this.state.currentValue}</div>
                                {
                                    !isEnded &&
                                    this.state.winner !== this.props.user.name &&
                                    this.props.data.createdBy.name !== this.props.user.name &&
                                    <div className="item--view__Body__info__bid__input">
                                        <div className="item--view__Body__info__bid__input--number"><input type="number" ref="inputNum" /></div>
                                        <div className="item--view__Body__info__bid__input--btnAdd"><Button label="Bid" onClick={this.handleNewBid.bind(this)} /></div>
                                    </div>
                                }
                            </div>
                            <div>{this.state.winner && <div>{!isEnded ? 'Winning' : 'Winner'}: {this.state.winner}</div>}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ user }) {
    return { user }
}

export default connect(mapStateToProps, actions)(ItemView);