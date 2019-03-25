import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeProduct} from "../Actions";

class Bagitem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.quantity,
        }
    }

    increaseQuantity() {
        this.setState({quantity: this.state.quantity + 1})
    }

    decreaseQuantity() {
        this.setState({quantity: this.state.quantity - 1})
    }

    animateNumber() {
        const amountNumber = this.props.amountNumberRef.current;

        amountNumber.classList.add('shrink');

        setTimeout(function(){
            amountNumber.classList.remove('shrink');
        }, 200)

    }

    render() {
        return (
                <div className='bag-item'>
                    <div className='[ col-5 col-sm-3 col-lg-2 ] bag-item__thumb'>
                        <span className='bag-item__name'>
                            {this.props.name}
                        </span>
                        <img
                            className='img-fluid bag-item__img'
                            src={`${this.props.img}`}
                            alt=""
                        />
                        <span className='bag-item__price-tag'>
                            {this.props.price}$
                        </span>
                    </div>

                    <div className='[ col-7 col-sm-9 col-lg-10 ] bag-item__utilities-wrapper'>
                        <div className="row bag-item__utilities">
                            <div className='[ col-sm-4 col-md-4 ] quantity-input__wrapper'>
                                <button
                                    className='big-plus-sign'
                                    onClick={() => this.increaseQuantity()}
                                >
                                    +
                                </button>
                                <span className='quantity-input__number'>
                                    {this.state.quantity}
                                </span>
                                <button
                                    className='big-minus-sign'
                                    onClick={() => this.decreaseQuantity()}
                                >
                                    -
                                </button>
                            </div>

                            <div className='[ col-sm-12 col-md-5 ] bag-item__price-total'>
                                total for this product: {(this.props.price * this.state.quantity).toFixed(2)}$
                            </div>
                            <div className='[ col-sm-4 col-md-3 ] bag-item__delete-product'>
                                <button
                                    onClick={() => {
                                        this.props.removeProduct(this.props.name);
                                        this.animateNumber();
                                    }}>
                                    x
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productsInBag: state.productsInBag,
    };
};

export default connect(mapStateToProps, {removeProduct})(Bagitem);
