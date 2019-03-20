import React, { Component } from 'react';
import facebook from "../static/icons/facebook.png";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.FormRef = React.createRef();
        this.SendedBtnRef = React.createRef();

        this.state = {
            msgSent: false,
        }
    }

    componentDidUpdate() {
        const button = this.SendedBtnRef.current;

        setTimeout(()=>{
            button.classList.add('fade-in');
        }, 100)
    }

    render() {
        const {msgSent} = this.state;
        console.log(msgSent);

        const sendForm = (e) => {
            e.preventDefault();

            const form = this.FormRef.current;


            form.classList.add('fade-out');

            setTimeout(()=>{
                form.style.display = 'none';
                this.setState({msgSent: true});
            }, 1000)
        };

        if(msgSent) {
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
                    <input type='email' className='form-control'
                           id='contactName'
                           placeholder='Johnny'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleFormControlInput1'>
                        Email address
                    </label>
                    <input type='email' className='form-control'
                           id='exampleFormControlInput1'
                           placeholder='name@example.com'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleFormControlTextarea1'>
                        What's on your mind?
                    </label>
                    <textarea className='form-control'
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