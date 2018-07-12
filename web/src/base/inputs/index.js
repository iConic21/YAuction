import React, { Component } from 'react';

import Text from './text';

class Input extends Component {

    onValueChange(value) {
        if (this.props.onValueChange) this.props.onValueChange(this.props.name, value);
    }

    render() {
        return (
            <div className="input-group">
                {{
                "text": (
                  <Text placeholder={this.props.placeholder} onValueChange={this.onValueChange.bind(this)} />
                ),
                default: (
                  <Text placeholder={this.props.placeholder} onValueChange={this.onValueChange.bind(this)} />
                )
              }[this.props.type]}
            </div>
        );
    }
}

export default Input;