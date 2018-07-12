import React, { Component } from 'react';

class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleClick() {
        if (this.state.clicked) return;
        if (this.props.onClick) this.props.onClick(this.handleWaitCallback.bind(this));
        if (this.props.wait) this.setState({clicked: true});
    }

    handleWaitCallback() {
        this.setState({clicked: false});
    }

    render() {
        return (
            <div className={"btn" + (this.props.wait && this.state.clicked ? " sending" : "") + ' ' + this.props.classList} onClick={this.handleClick.bind(this)} >
                <div className="btn__loading"><i className="fal fa-spinner"></i></div>
                <div className="btn__label">{this.props.label}</div>
                <div className={"btn__icon" + (!this.props.icon == null ? " hidden" : "") + (this.props.iconAlign === "left" ? " left" : "")}>{this.props.icon}</div>
            </div>
        );
    }
}

export default Btn;