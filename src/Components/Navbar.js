import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bag from './Bag';

const baseUrl = process.env.PUBLIC_URL;


class Navbar extends Component {
    generateList() {
        const list = this.props.ulItems;

        return list.map(item => {
            if (item === 'Fashion') {
                return (
                    <li key={item} className="navbar__list-item">
                        <Link to={baseUrl + "/fashion"}>{item}</Link>
                    </li>
                )
            } else if ( item === "Cool Stuff") {
                return (
                    <li key={item} className="navbar__list-item">
                        <Link to={baseUrl + "/cool_stuff"}>{item}</Link>
                    </li>
                )
            } else if ( item === "Luxury") {
                return (
                    <li key={item} className="navbar__list-item">
                        <Link to={baseUrl + "/luxury"}>{item}</Link>
                    </li>
                )
            }

            return (
                <li key={item} className="navbar__list-item">
                    <Link to={baseUrl + "/test"}>{item}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <header>
                <Bag />
                <div className="container">
                    <nav className="navbar">
                        <div>
                            <Link to={baseUrl + "/"} className="navbar__logo">
                                Home page
                            </Link>
                            <ul className="navbar__list">
                                {this.generateList()}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;