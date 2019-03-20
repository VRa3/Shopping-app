import React, { Component } from 'react';
import BannerCard from './BannerCard';

class Accordion extends Component {
    state = {
        selectedCard: null,
        isAnimating: false,
    };

    onCardChange = (card, isAnimating) => {
      this.setState({
          selectedCard: card,
          isAnimating: isAnimating,
      });
    };

    render() {
        const generateCards = () => {

            const cardsContent = [
                {
                    id: 1,
                    heading: 'Heading One',
                    caption: 'Lorem ipsum dolor sit amet',
                    bannerText: 'This text is coming from first card',
                },
                {
                    id: 2,
                    heading: 'Heading Two',
                    caption: 'Caption text',
                    bannerText: 'This text is coming from second card',
                },
                {
                    id: 3,
                    heading: 'Heading Three',
                    bannerText: 'This text is coming from third card',
                }
            ];

            return cardsContent.map(card => {
                if (this.state.selectedCard === card.id) {
                    return <BannerCard
                            onCardChange={this.onCardChange}
                            textHolderRef={this.props.textHolder}
                            class='banner-card selected'
                            key={card.id}
                            id={card.id}
                            heading={card.heading}
                            caption={card.caption}
                            bannerText={card.bannerText}
                    />
                } else {
                    return <BannerCard
                            onCardChange={this.onCardChange}
                            textHolderRef={this.props.textHolder}
                            class='banner-card'
                            key={card.id}
                            id={card.id}
                            heading={card.heading}
                            caption={card.caption}
                            bannerText={card.bannerText}
                    />
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
