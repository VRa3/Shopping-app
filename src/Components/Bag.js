import React, { Component } from 'react';
import logo from '../static/icons/shop-bag.png';
import { connect } from 'react-redux';
import Bagitem from './Bag-item';

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

class Bag extends Component {
    constructor(props) {
        super(props);

        this.amountNumber = React.createRef();
    }

    generateBagItems() {
        const itemsInCart = this.props.productsInBag;

        return itemsInCart.map( item => {
            return (
                <Bagitem key={item.props.name} name={item.props.name} img={item.props.img} quantity={1} price={item.props.price} amountNumberRef={this.amountNumber} />
            )
        })
    }

    componentDidUpdate = () => {
        const amountNumber = this.amountNumber.current;

        amountNumber.classList.add('blink');

        setTimeout(function(){
            amountNumber.classList.remove('blink');
        }, 200)
    };

    render() {

        const amountOfProducts = this.props.productsInBag.length;
        if (amountOfProducts === 0) {
            return (
                <div className='bag-container'>
                    <div className="container position-relative">
                        <span ref={this.amountNumber} className='bag-items-counter'>
                            0
                        </span>
                        <img
                            onClick={() => {
                                toggleBagView();
                            }}
                            className='shopping-bag-image'
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
        } else {
            return (
                <div className='bag-container'>
                    <div className="container position-relative">
                <span ref={this.amountNumber} className='bag-items-counter'>
                    {amountOfProducts}
                </span>
                        <img
                            onClick={() => {
                                toggleBagView();
                            }}
                            className='shopping-bag-image'
                            src={logo}
                            alt=''
                        />
                    </div>
                    <div id='cart-wrapper' className='bag-wrapper'>
                        <div className="container">
                            <div className='bag-item__wrapper'>
                                {this.generateBagItems()}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        productsInBag: state.productsInBag,
    };
};

export default connect(mapStateToProps)(Bag);
