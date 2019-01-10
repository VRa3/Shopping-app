import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from "../Actions";

class Fashion extends Component {
    generateCards() {
        const items = this.props.allProducts.fashion;
        return items.map( item => {
            return (
                <div key={item.name} className="[ col-md-4 ]">
                    <div className="category-item">
                        <span className="category-item__name">
                            {item.name}
                        </span>
                        <img src={item.img} alt=""
                             className="img-fluid category-item__img"/>
                        <div className="category-item__price-tag">
                            {item.price}
                        </div>
                        <button onClick={() => this.props.addProduct(item)} className="category-item__button">
                            +
                        </button>
                    </div>
                </div>
            )
        })
    };


    render() {
        return (
            <div className="category-wrapper">
                <div className="container">
                    <div className="row">
                        {this.generateCards()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
        console.log(state);
        return {
            allProducts: state.allProducts,
            itemsInBag: state.itemsInBag
        };
};

export default connect(mapStateToProps, {addProduct})(Fashion);
