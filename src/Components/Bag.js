import React from 'react';
import logo from "../static/icons/shop-bag.png";
import { connect } from 'react-redux';

const Bag = ({ number }) => {
    if (!number) {
        return (
            <div className="bag-container show-on-top">
            <span className="bag__number">
                0
            </span>
                <img className="shopping-bag" src={logo} alt=""/>
            </div>
        );
    }
    return (
        <div className="bag-container show-on-top">
            <span className="bag__number">
                {number}
            </span>
            <img className="shopping-bag" src={logo} alt=""/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        number: state.addProductToBag
    };
};

export default connect(mapStateToProps)(Bag);
