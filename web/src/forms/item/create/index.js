import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../../actions';

import Button from './../../../base/buttons';

class ItemCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
    }

    handleImageAdd() {
        this.refs.itemImageInput.click();
    }

    handleImageChange() {
        var file = this.refs.itemImageInput.files[0];
        var reader = new FileReader();
        var me = this;

        reader.addEventListener("load", function () {
            me.setState({image: reader.result});
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    handleSave() {
        this.props.items_add({
            name: this.refs.name.value,
            description: this.refs.desc.value,
            startingPrice: this.refs.price.value
        }, () => {
            this.props.modal_hide();
        });
    }

    render() {
        return (
            <div className="item--detail__Body">
                <div class="row">
                    <div class="col s3">
                        {this.state.image && <img className="itemImageForm" src={this.state.image} alt="user-avatar" ref="itemImageView" />}
                        {this.state.image && <div className="changeImage" onClick={this.handleImageAdd.bind(this)}>Change</div>}
                        {!this.state.image && <div className="itemImageForm placeholder" onClick={this.handleImageAdd.bind(this)} ><i class="fal fa-camera"></i><div>Add image</div></div>}
                        <form ref="itemImageForm" ><input id="itemImageupload" type="file" onChange={this.handleImageChange.bind(this)} className="hide" ref="itemImageInput" accept="image/*" /></form>
                    </div>
                    <div class="col s9">
                        <div className="item--detail__Body__info">
                            <div className="input-field">
                                <input id="name" type="text" ref="name" ref="name" />
                                <label for="name">Name</label>
                            </div>
                            <div className="input-field">
                                <textarea id="description" class="materialize-textarea" ref="desc"></textarea>
                                <label for="description">Description</label>
                            </div>
                            <div className="input-field">
                                <input id="startingPrice" type="number" ref="startingPrice" ref="price" />
                                <label for="startingPrice">Starting Price ($)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item--detail__footer">
                    <Button label='Cancel' classList='modal-close btn-flat' />
                    <Button label='Save' classList='save-btn' onClick={this.handleSave.bind(this)} wait={true} />
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(ItemCreate);