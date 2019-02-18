import React, { Component } from 'react';
import Accordion from './Accordion';

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();

        this.state = {
            image: this.imageRef.current,
        }
    }

    componentDidMount = () => {
        this.setState({image: this.imageRef.current});
    };

    render() {

        return (
            <main className="homepage">
                <div ref={this.imageRef} className="main-banner"></div>

                <Accordion />

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
