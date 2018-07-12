import React, { Component } from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: true
        }
    }

    handleKeyPress() {
        this.setState({placeholder: this.refs.input.value === ""});
    }

    handleBlur() {
        if (this.props.onValueChange) this.props.onValueChange(this.refs.input.value);
    }

    render() {
        return (
            <div className="input-group__container">
                <label className={this.state.placeholder ? "placeholder" : ""} >{this.props.placeholder}</label>
                <input type="text" ref="input" onChange={this.handleKeyPress.bind(this)} ref="input" onBlur={this.handleBlur.bind(this)} />
            </div>
        );
    }
}

export default Text;