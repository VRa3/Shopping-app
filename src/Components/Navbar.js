import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chevron from '../static/icons/chevron-double-down.svg';
import Bag from './Bag';

const baseUrl = process.env.PUBLIC_URL;

const collapseMenuHomepage = () => {
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

const toggleMenu = () => {
    const navbarList = document.querySelector('.navbar__list');
    const body = document.querySelector('body');
    const cartWrapper = document.querySelector('#cart-wrapper');

    if (navbarList.classList.contains('opened')) {
        navbarList.classList.remove('opened');
        body.classList.remove('no-scroll');
        return;
    }

    navbarList.classList.add('opened');
    body.classList.add('no-scroll');
    cartWrapper.classList.remove('show')
};


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: 0,
        };

        this.navbarChevron = React.createRef();
    }

    generateList() {
        const list = this.props.ulItems;

        return list.map(item => {
            if ( item === "About Us") {
                return (
                    <li key={item} className="navbar__list-item">
                        <Link to={baseUrl + "/Contact"}>{item}</Link>
                    </li>
                )
            } else if (item === 'Fashion') {
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
            } else if ( item === "Contact") {
                return (
                    <li key={item} className="navbar__list-item">
                        <Link to={baseUrl + "/contact"}>{item}</Link>
                    </li>
                )
            } else {
                return (
                    <li key={item} className="navbar__list-item">
                        <Link to={baseUrl + "/contact"}>{item}</Link>
                    </li>
                )
            }
        })
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 992) {
                this.navbarChevron.current.classList.remove('opened');
            }
        })
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar__links-wrapper">
                            <Link onClick={collapseMenuHomepage()} to={baseUrl + "/"} className="navbar__brand-name show-on-top">
                                Home page
                            </Link>

                            <img
                                onClick ={() => toggleMenu()}
                                src={chevron}
                                className="navbar__chevron show-on-top"
                                alt=""/>
                        </div>


                        <ul className="navbar__list"
                            ref={this.navbarChevron}>
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
