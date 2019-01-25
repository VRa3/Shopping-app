import React, { Component } from 'react';
import logo from '../static/icons/shop-bag.png';
import { connect } from 'react-redux';

class Bag extends Component {
    render() {
        const reavealCartContent = () => {
            const cartWrapper = document.querySelector('#cart-wrapper');
            const body = document.querySelector('body');
            const navbarList = document.querySelector('.navbar__list');

            if (cartWrapper.classList.contains('show')) {
                cartWrapper.classList.remove('show');
                body.classList.remove('no-scroll');
                return;
            }

            cartWrapper.classList.add('show');
            body.classList.add('no-scroll');
            navbarList.classList.remove('opened');
        };

        const number = this.props.number;
        if (!number) {
            return (
                <div className='bag-container'>
                    <div className="container position-relative">
                        <span className='bag__number'>
                            0
                        </span>
                        <img
                            onClick={() => {
                                reavealCartContent();
                            }}
                            className='shopping-bag'
                            src={logo}
                            alt=''
                        />
                    </div>
                    <div id='cart-wrapper' className='cart-wrapper'>
                        <p className="cart-wrapper__test">Test</p>
                    </div>
                </div>
            );
        }

        const itemsInCart = this.props.itemsInBag;
        return (
        <div className='bag-container'>
            <div className="container position-relative">
                <span className='bag__number'>
                    {number}
                </span>
                <img
                    onClick={() => {
                        reavealCartContent();
                    }}
                    className='shopping-bag'
                    src={logo}
                    alt=''
                />
            </div>
            <div id='cart-wrapper' className='cart-wrapper'>
                <div className="container">
                    <div className="row cart-item__wrapper">
                        <div className='cart-item'>
                            <div className='col-6'>
                                <span className='cart-item__price-tag'>
                                    {itemsInCart[0].props.name}
                                </span>
                                <img className='img-fluid cart-item__img' src={`${itemsInCart[0].props.img}`} alt=""/>
                                <span> {itemsInCart[0].props.price}$</span>
                            </div>
                            <div className="col-6">
                                <div className="quantity-input__wrapper">
                                    <button className="big-plus-sign">+</button>
                                    <span className="quantity-input__number">
                                        0
                                    </span>
                                    <button className="big-minus-sign">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(Bag);
