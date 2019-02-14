import React, { Component } from 'react';
import BannerCard from './BannerCard';

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();

        this.state = {
            image: this.imageRef.current
        }
    }

    componentDidMount = () => {
        this.setState({image: this.imageRef.current})
    };

    render() {
        const generateCards = () => {
            const numbers = [0, 1, 2];

            return numbers.map(num => {
                return <BannerCard ordinalNumber={`0${num}.`} key={num} bannerRef={this.state.image} />
            });
        };

        return (
            <main className="homepage">
                <div ref={this.imageRef} className="main-banner"></div>

                <div className="banner-card__wrapper">
                    <div className="container">
                        {generateCards()}
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
