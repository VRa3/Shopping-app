import React, { Component } from 'react';
import logo from "../static/shop-bag.png";
import { connect } from 'react-redux';

const Bag = ({ product, itemsInBag }) => {
    if (!product) {
        return (
            <div className="bag-container">
                <span className="bag__number">0</span>
                <img className="shopping-bag" src={logo} alt=""/>
            </div>
        );
    }
    return (
        <div className="bag-container">
            <span className="bag__number">{itemsInBag.length}</span>
            <img className="shopping-bag" src={logo} alt=""/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        product: state.selectedProduct,
        itemsInBag: state.itemsInBag
    }
};

export default connect(mapStateToProps)(Bag);
