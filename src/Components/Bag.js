import React, { Component } from 'react';
import logo from "../static/shop-bag.png";

class Bag extends Component {
    render() {
        return (
            <div>
                <img className="shopping-bag" src={logo} alt=""/>
            </div>
        );
    }
}

export default Bag;
