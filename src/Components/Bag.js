import React, { Component } from 'react';
import logo from '../static/icons/shop-bag.png';
import { connect } from 'react-redux';

class Bag extends Component {
    render() {
        const showBag = (element) => {
            console.log(element)
        };

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

        return (
        <div className='bag-container' onClick={(event) => showBag(event.target)}>
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
                <p className="cart-wrapper__test">Product</p>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        number: state.addProductToBag
    };
};

export default connect(mapStateToProps)(Bag);
