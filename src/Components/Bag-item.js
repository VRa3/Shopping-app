import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bagitem extends Component {
    render() {
        const itemsInCart = this.props.itemsInBag;
        return (
            <div className='bag-item'>
                <div className='[ col-5 col-sm-3 col-lg-2 ] bag-item__thumb'>
                    <span className='bag-item__price-tag'>
                        {itemsInCart[0].props.name}
                    </span>
                    <img className='img-fluid bag-item__img' src={`${itemsInCart[0].props.img}`} alt=""/>
                    <span> {itemsInCart[0].props.price}$</span>
                </div>
                <div className='[ col-7 col-sm-9 col-lg-10 ] bag-item__utilities'>
                    <div className='[ col-sm-4 col-md-4 ] quantity-input__wrapper'>
                        <button className='big-plus-sign'>+</button>
                        <span className='quantity-input__number'>
                        0
                    </span>
                        <button className='big-minus-sign'>-</button>
                    </div>
                    <div className='[ col-sm-12 col-md-4 ] bag-item__price-total'>
                        total for this product: {itemsInCart[0].props.price}
                    </div>
                    <div className='[ col-sm-4 col-md-4 ] bag-item__delete-product'>
                        x
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        number: state.addProductToBag,
        itemsInBag: state.itemsInBag,
    };
};

export default connect(mapStateToProps)(Bagitem);
