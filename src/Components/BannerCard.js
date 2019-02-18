import React from 'react';

class BannerCard extends React.Component {
    state = {
        cardNumber: this.props.id
    };

    onCardChange = () => {
        this.props.onCardChange(this.state.cardNumber);

        const bannerText = this.props.textHolderRef;

        bannerText.classList.add('animate');

        setTimeout(() => {
            bannerText.innerHTML = this.props.bannerText;
        }, 500);
        setTimeout(() => {
            bannerText.classList.remove('animate');
        }, 1500);

    };

    render() {
        const { id, heading, caption } = this.props;

        return (
            <div
                className={this.props.class}
                onClick={(e) => {
                    this.onCardChange();
                }}
            >
                <div className="banner-card__ordinal-number">
                    {`0${id}`}
                </div>
                <div className="banner-card__content">
                    <h4 className="banner-card__heading">
                        {heading}
                    </h4>

                    <p className="banner-card__caption">
                        {caption}
                    </p>
                </div>
            </div>
        )
    }
}

BannerCard.defaultProps = {
    ordinalNumber: '00.',
    heading: 'Heading',
    caption: 'Usually CAPTION is longer than heading.'
};

export default BannerCard;