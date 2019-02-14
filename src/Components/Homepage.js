import React, { Component } from 'react';
import BannerCard from './BannerCard';

class Homepage extends Component {
    generateCards() {
        const numbers = [0, 1, 2];

        return numbers.map(num => {
            return <BannerCard ordinalNumber={`0${num}.`} key={num}  />
        });
    }


    render() {
        return (
            <main className="homepage">
                <div className="main-baner"></div>

                <div className="banner-card__wrapper">
                    <div className="container">
                        {this.generateCards()}
                    </div>
                </div>


                <div className="container">
                    <p className="homepage__text">
                        What you looking at, choose one of 3 our categories and treat yourself with the best...
                    </p>
                </div>
            </main>
        );
    }
}

export default Homepage;
