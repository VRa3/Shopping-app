import React, { Component } from 'react';
import Accordion from './Accordion';

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.textHolder = React.createRef();

        this.state = {
            image: this.imageRef.current,
        }
    }

    componentDidMount = () => {
        this.setState({image: this.imageRef.current});
    };

    render() {

        return (
            <main>
                <div ref={this.imageRef} className="main-banner">
                    <div className="container main-banner__container">
                        <div ref={this.textHolder} className="main-banner__text-holder">
                            Check out cool features in our shop
                        </div>
                    </div>
                </div>

                <Accordion textHolder={this.textHolder.current} />

                <div className="container">
                    <p className="heading heading--large">
                        What you looking at, choose one of 3 our categories and treat yourself with the best...
                    </p>
                </div>
            </main>
        );
    }
}

export default Homepage;
