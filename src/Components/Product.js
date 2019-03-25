import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProduct} from "../Actions";
import Checkmark from './contact-form/checkmark';


class Product extends Component {
    state = {
        isAdded: false,
    };

    animateElement = element => {
        element.classList.add('addedAnimation');
        setTimeout(() => {element.classList.add('added')}, 1400)
    };

    checkElement = () => {
        const {productsInBag, name} = this.props;
        if (productsInBag.find(product => product.props.name === name)) {
            console.log(name);
            this.setState({isAdded: true});
        }
    };

    componentDidMount() {
        this.checkElement();
    }

    render() {
        console.log(this.state.isAdded);
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
                    <button
                        onClick={(event) => {
                            this.props.addProduct(this);
                            this.animateElement(event.target);
                            }
                        }
                        className={this.state.isAdded ? 'category-item__button added' : 'category-item__button'}
                    >
                        {this.state.isAdded ? <Checkmark weight='bold' /> : '+'}
                    </button>
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
