import React, { Component } from 'react';
import BannerCard from './BannerCard';

class Accordion extends Component {
    state = {
        selectedCard: null,
    };

    onCardChange = card => {
      this.setState({selectedCard: card});
      console.log(this.state.selectedCard);
    };

    render() {
        const generateCards = () => {

            const cardsContent = [
                {
                    id: 0,
                    heading: 'Heading One',
                    caption: 'Lorem ipsum dolor sit amet',
                },
                {
                    id: 1,
                    heading: 'Heading Two',
                    caption: 'Caption text',
                },
                {
                    id: 2,
                    heading: 'Heading Three',
                }
            ];

            return cardsContent.map(card => {
                if (this.state.selectedCard === card.id) {
                    return <BannerCard
                            onCardChange={this.onCardChange}
                            class='banner-card selected'
                            ordinalNumber={`0${card.id}.`}
                            key={card.id}
                            id={card.id}
                            heading={card.heading}
                            caption={card.caption}
                            bannerRef={this.state.image} />
                } else {
                    return <BannerCard
                        onCardChange={this.onCardChange}
                        class='banner-card'
                        ordinalNumber={`0${card.id}.`}
                        key={card.id}
                        id={card.id}
                        heading={card.heading}
                        caption={card.caption}
                        bannerRef={this.state.image} />
                }
            });
        };

        return (
            <div className="banner-card__wrapper">
                <div className="container">
                    {generateCards()}
                </div>
            </div>
        );
    }
}

export default Accordion;
