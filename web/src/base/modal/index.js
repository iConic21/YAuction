import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../actions';

class Modal extends Component {
    render() {
        return (
            <div id="modal" className={"modal " + this.props.modal.classList}>
                <div className="modal-content">
                    {this.props.modal.content}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ modal }) {
    return { modal }
}

export default connect(mapStateToProps, actions)(Modal);