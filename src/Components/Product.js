import React, { Component } from 'react';

class Product extends Component {
    render() {
        const show = () => console.log(this.props.price);

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
                    <button onClick={show} className="category-item__button">
                        +
                    </button>
                </div>
            </div>
        );
    }
}

export default Product;
