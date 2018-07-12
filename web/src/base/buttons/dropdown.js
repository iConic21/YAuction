import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        return (
            <div className="btn dropdown">
                <button className="dropbtn">{this.props.label}</button>
                <div className="dropdown-content">
                    {this.props.options}
                </div>
            </div>
        );
    }
}

export default Dropdown;