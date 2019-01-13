import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from "../Components/Product";

class Fashion extends Component {
    generateCards() {
        const items = this.props.allProducts.fashion;
        return items.map( item => {
            return (
                <Product key={item.name} name={item.name} img={item.img} price={item.price} />
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
    return state;
};

export default connect(mapStateToProps)(Fashion);
