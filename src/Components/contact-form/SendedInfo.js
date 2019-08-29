import React from 'react';

class SendedInfo extends React.Component {
    state = {
        elementClass: 'contact-form__send-btn contact-form__send-btn--hidden'
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({elementClass: 'contact-form__send-btn contact-form__send-btn--hidden fade-in'})
        }, 100);
    }

    render () {
        return (
            <div>
                <button className={this.state.elementClass}>
                <span>
                    Message sended... Thank you
                </span>
                </button>
            </div>
        )
    }
};

export default SendedInfo;