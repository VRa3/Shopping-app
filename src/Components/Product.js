import React, { Component } from 'react';
import { connect } from 'react-redux';


class Product extends Component {
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
                    <button className="category-item__button">
                        +
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Product);
