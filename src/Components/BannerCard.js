import React from 'react';

class BannerCard extends React.Component {
    render() {
        const { ordinalNumber, heading, caption } = this.props;

        return (
            <div className="banner-card">
                <div className="banner-card__ordinal-number">
                    {ordinalNumber}
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