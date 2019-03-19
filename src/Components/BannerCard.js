import React from 'react';

class BannerCard extends React.Component {
    state = {
        cardNumber: this.props.id,
        animating: false
    };


    onCardChange = () => {
        const {cardNumber, animating} = this.state;
        const bannerText = this.props.textHolderRef;
        this.props.onCardChange(cardNumber, animating);


        const startAnimation = (cb) => {
            bannerText.classList.add('slide-down');

            setTimeout(function(){
                cb();
            }, 1000);
        };

        const handleTextChange = (cb) => {
            bannerText.innerHTML = this.props.bannerText;

            cb();
        };

        const endAnimation = (cb) => {
            bannerText.classList.remove('slide-down');
        };

        const changeState = () => {
            // this.setState({animating: false});
        }

        // startAnimation(function(){
        //     handleTextChange(function(){
        //         endAnimation()
        //     })
        // });

        startAnimation(() => {
            this.setState({animating: true});
            handleTextChange(() => {
                endAnimation(() => {
                    this.setState({animating: false});

                })
            })
        });


    };

    render() {
        const { id, heading, caption } = this.props;

        return (
            <div
                className={this.props.class}
                onClick={() => {
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