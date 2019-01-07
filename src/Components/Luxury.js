import React, { Component } from 'react';
import brilliant from'../static/luxury/brilliant.jpg';
import jewelry from'../static/luxury/jewelry.jpg';
import perfum from'../static/luxury/perfum.jpg';
import Product from './Product';

class Luxury extends Component {
    render() {
        const items = [
            {
                name: 'jewelry',
                img: jewelry,
                price: '1379,99'
            },
            {
                name: 'brilliant',
                img: brilliant,
                price: '8409,99'
            },
            {
                name: 'perfum',
                img: perfum,
                price: '699,99'
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
                    <div className="row">
                        {generateCards()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Luxury;
