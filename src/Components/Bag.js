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
                    <div className="row">

                    <div className='cart-item__wrapper'>
                            <img className='col-6 col-lg-4' src={`${itemsInCart[0].props.img}`} alt=""/>
                            <p className='col-6 offset-lg-4 col-lg-4'>
                                <span>{itemsInCart[0].props.name} -</span>
                                <span> {itemsInCart[0].props.price}$</span>
                            </p>
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
