import React, { Component } from 'react';
import logo from '../static/icons/shop-bag.png';
import { connect } from 'react-redux';
import Bagitem from './Bag-item';

class Bag extends Component {
    render() {
        const toggleBagView = () => {
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
                                toggleBagView();
                            }}
                            className='shopping-bag'
                            src={logo}
                            alt=''
                        />
                    </div>
                    <div id='cart-wrapper' className='bag-wrapper'>
                        <p className="bag-wrapper__text">
                            Your shopping bag is empty
                        </p>
                    </div>
                </div>
            );
        }

        // If bag is not empty :
        const itemsInCart = this.props.itemsInBag;
        return (
        <div className='bag-container'>
            <div className="container position-relative">
                <span className='bag__number'>
                    {number}
                </span>
                <img
                    onClick={() => {
                        toggleBagView();
                    }}
                    className='shopping-bag'
                    src={logo}
                    alt=''
                />
            </div>
            <div id='cart-wrapper' className='bag-wrapper'>
                <div className="container">
                    <div className="row bag-item__wrapper">
                        <Bagitem />
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
