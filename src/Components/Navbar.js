import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chevron from '../static/icons/chevron-double-down.svg';
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

        const collapseMenu = () => {
            const navbarList = document.querySelector('.navbar__list');
            const body = document.querySelector('body');
            const documentWidth = document.documentElement.clientWidth;
            const transition = 500;
            if (navbarList && documentWidth < 992) {
                setTimeout(function(){
                    navbarList.classList.remove('opened');
                    body.classList.remove('no-scroll');
                }, transition);
            }
        };

        return (
            <header>
                <div className="container">
                    <nav className="navbar">
                        <Link onClick={collapseMenu()} to={baseUrl + "/"} className="navbar__logo show-on-top">
                            Home page
                        </Link>
                        <img src={chevron} className="navbar__chevron show-on-top" alt=""/>
                        <ul className="navbar__list">
                            {this.generateList()}
                        </ul>
                    </nav>
                    <Bag />
                </div>
            </header>
        );
    }
}

export default Navbar;
