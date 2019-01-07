import React, { Component } from 'react';
import glitter from'../static/cool_stuff/glitter.jpg';
import cup from'../static/cool_stuff/cup.jpg';
import pad from'../static/cool_stuff/pad.jpg';
import Product from './Product';

class Cool_stuff extends Component {
    render() {
        const items = [
            {
                name: 'a-pad',
                img: pad,
                price: '139,99'
            },
            {
                name: 'a-cup',
                img: cup,
                price: '89,99'
            },
            {
                name: 'a-glitter',
                img: glitter,
                price: '109,99'
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

export default Cool_stuff;
