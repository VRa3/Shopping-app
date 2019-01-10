import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class Luxury extends Component {
    render() {
        const generateCards = () => {
            const items = this.props.allProducts.luxury;
            return items.map( item => {
                return (
                    <Product key={item.name} img={item.img} name={item.name} price={item.price}/>
                )
            })
        };

        return (
            <div className="category-wrapper">
                <div className="container">
                    <div className="row">
                        {generateCards()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Luxury);
