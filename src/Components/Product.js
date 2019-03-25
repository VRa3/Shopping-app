import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProduct} from "../Actions";
import AddButton from './AddButton';

class Product extends Component {
    render() {
        return (
            <div className="[ col-md-4 ]">
                <div className="category-item">
                    <span className="category-item__name">
                        {this.props.name}
                    </span>

                    <img src={this.props.img} alt="" className="img-fluid category-item__img"/>

                    <div className="category-item__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error est harum iste magnam quis repellat sunt tempore vitae voluptate!
                    </div>

                    <div className="category-item__price-tag">
                        {this.props.price}
                    </div>
                    <AddButton
                        addProduct={this.props.addProduct}
                        productsInBag={this.props.productsInBag}
                        reference={this}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productsInBag: state.productsInBag
    };
};

export default connect(mapStateToProps, {addProduct})(Product);
