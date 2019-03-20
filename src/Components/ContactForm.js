import React, { Component } from 'react';
import facebook from "../static/icons/facebook.png";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.FormRef = React.createRef();
        this.SendedBtnRef = React.createRef();
        this.NameValidationRef = React.createRef();
        this.MailValidationRef = React.createRef();
        this.TextValidationRef = React.createRef();

        this.state = {
            msgIsSent: false,
        }
    }

    CheckForm = e => {
        this.setState({})
    };

    componentDidUpdate() {
        const button = this.SendedBtnRef.current;

        setTimeout(()=>{
            button.classList.add('fade-in');
        }, 100)
    }

    render() {
        const {msgIsSent} = this.state;

        const sendForm = (e) => {
            e.preventDefault();

            const form = this.FormRef.current;
            const mail = this.MailValidationRef.current;

            form.classList.add('fade-out');

            setTimeout(()=>{
                form.style.display = 'none';
                this.setState({msgIsSent: true});
            }, 1000)
        };



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
                <div className='form-group'>
                    <label htmlFor='contactName'>
                        Just name
                    </label>
                    <input type='text'
                           ref={this.NameValidationRef}
                           className='form-control'
                           id='contactName'
                           onChange={this.checkForm}
                           placeholder='Johnny'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleFormControlInput1'>
                        Email address
                    </label>
                    <input type='email'
                           ref={this.MailValidationRef}
                           className='form-control'
                           id='exampleFormControlInput1'
                           placeholder='name@example.com'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleFormControlTextarea1'>
                        What's on your mind?
                    </label>
                    <textarea className='form-control'
                              ref={this.TextValidationRef}
                              id='exampleFormControlTextarea1'
                              rows='3'
                    />
                </div>

                <div className="form-group form-group--small-margin">
                    <button
                        className='contact-form__send-btn'
                        onClick={(e) => sendForm(e)}
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
                    <img src={facebook} alt=""/>
                    Live chat via facebook
                </p>
            </form>
        )
    }
}

export default ContactForm;