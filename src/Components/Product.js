import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProduct} from "../Actions";


class Product extends Component {
    constructor(props) {
        super(props);

    }

    animateBuyButton(cos) {
        cos.classList.add('d-none')
    };

    render() {
        return (
            <div className="[ col-md-4 ]">
                <div className="category-item">
                        <span className="category-item__name">
                            {this.props.name}
                        </span>
                    <img src={this.props.img} alt=""
                         className="img-fluid category-item__img"/>
                    <div className="category-item__price-tag">
                        {this.props.price}
                    </div>
                    <button
                        onClick={(event) => {
                            this.props.addProduct();
                            this.animateBuyButton(event.target);
                            }
                        }
                        className="category-item__button"
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allProducts: state.allProducts,
        itemsInBag: state.itemsInBag
    };
};

export default connect(mapStateToProps, {addProduct})(Product);
