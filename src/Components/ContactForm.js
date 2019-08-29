import React, { Component } from 'react';

import facebook from '../static/icons/facebook.png';

import NameChecker from './contact-form/NameChecker';
import MailChecker from './contact-form/MailChecker';
import TextareaChecker from './contact-form/TextareaChecker';
import FormChecker from './contact-form/FormChecker';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.FormRef = React.createRef();
        this.SendedBtnRef = React.createRef();
        this.ErrorContainer = React.createRef();

        this.state = {
            msgIsSent: false,
            nameValueIsGood: false,
            mailValueIsGood: false,
            textValueIsGood: false,
            validationPassed: null,
        }
    }

    validateNameInput = e => {
        e.target.value.length >= 3 ? this.setState({nameValueIsGood: true}) : this.setState({nameValueIsGood: false});
    };

    validateMailInput = e => {
        if(e.target.value.indexOf('@') > 0 &&
            ((e.target.value.indexOf('.com') > 0 ) || e.target.value.indexOf('.pl') > 0)) {
            this.setState({mailValueIsGood: true});
        } else {
            this.setState({mailValueIsGood: false});
        }
    };

    validateTextInput = e => {
        e.target.value.length >= 20 ? this.setState({textValueIsGood: true}) : this.setState({textValueIsGood: false});
    };

    sendForm = (e) => {
        e.preventDefault();
        const form = this.FormRef.current;
        const {nameValueIsGood, mailValueIsGood, textValueIsGood} = this.state;

        const validation = () => {
            if (nameValueIsGood && mailValueIsGood && textValueIsGood) {
                return true;
            }
        };

        if (validation()) {
            this.setState({validationPassed: true});
            form.classList.add('fade-out');


            setTimeout(()=>{
                form.style.display = 'none';
                this.setState({msgIsSent: true});
            }, 1000)
        } else {
            this.setState({validationPassed: false})
        }
    };

    componentDidUpdate() {
        const button = this.SendedBtnRef.current;
        const {msgIsSent} = this.state;

        if (msgIsSent) {
            setTimeout(()=>{
                button.classList.add('fade-in');
            }, 100)
        }
    }

    render() {
        const {msgIsSent, validationPassed} = this.state;

        if(msgIsSent) {
            return (
                <div>
                    <button
                        ref={this.SendedBtnRef}
                        className='contact-form__send-btn contact-form__send-btn--hidden'
                    >
                            <span>
                                Message sended... Thank you
                            </span>
                    </button>
                </div>
            )
        }

        return (
            <form ref={this.FormRef} className='contact-form'>
                <FormChecker formIsGood={validationPassed}/>
                <div className='form-group'>
                    <label htmlFor='contactName'>
                        Just name
                    </label>
                    <div className="form-control__wrapper">
                        <input type='text'
                               className='form-control'
                               id='contactName'
                               onChange={this.validateNameInput}
                               placeholder='Johnny'
                        />
                        <NameChecker correct={this.state.nameValueIsGood}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleFormControlInput1'>
                        Email address
                    </label>
                    <div className="form-control__wrapper">
                        <input type='email'
                               className='form-control'
                               id='exampleFormControlInput1'
                               onChange={this.validateMailInput}
                               placeholder='name@example.com'
                        />
                        <MailChecker correct={this.state.mailValueIsGood}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleFormControlTextarea1'>
                        What's on your mind?
                    </label>
                    <div className="form-control__wrapper">
                        <textarea className='form-control'
                                  id='exampleFormControlTextarea1'
                                  onChange={this.validateTextInput}
                                  rows='3'
                        />
                        <TextareaChecker correct={this.state.textValueIsGood}/>
                    </div>

                </div>

                <div className='form-group form-group--small-margin'>
                    <button
                        className='contact-form__send-btn'
                        onClick={(e) => this.sendForm(e)}
                    >
                            <span>
                                Send?
                            </span>
                    </button>
                </div>

                <div className='form-group contact-form__or-separator'>
                    <span>
                        or
                    </span>
                </div>
                <p className='contact-form__log-in'>
                    <img src={facebook} alt=''/>
                    Live chat via facebook
                </p>
                <div ref={this.ErrorContainer}>

                </div>
            </form>
        )
    }
}

export default ContactForm;