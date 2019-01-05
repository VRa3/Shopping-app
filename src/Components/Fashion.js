import React, { Component } from 'react';
import flower from'../static/fashion/flower-o.jpg';
import shoes from'../static/fashion/shoes-o.jpg';
import bag from'../static/fashion/bag-o.jpg';
import Product from './Product';

class Fashion extends Component {
    render() {
        const items = [
            {
                name: 'flower-o',
                img: flower,
                price: '409,99'
            },
            {
                name: 'bag-o',
                img: bag,
                price: '329,99'
            },
            {
                name: 'o-shoes',
                img: shoes,
                price: '279,99'
            }
        ];

        const generateCards = () => {
            return items.map( item => {
                return (
                    <Product key={item.name} img={item.img} name={item.name} price={item.price}/>
                )
            })
        };

        return (
            <div className="category-wrapper">
                <div className="container">
                    <p>fashion</p>
                    <div className="row">
                        {generateCards()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Fashion;
