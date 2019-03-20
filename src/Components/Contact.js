import React, { Component } from 'react';
import facebook from '../static/icons/facebook.png';

class contact extends Component {
    render() {
        return (
            <main className='contact-page-wrapper'>
                <section className='contact-page-section'>
                    <h1>Need more informations?</h1>
                    <h2>We are ready to answer.</h2>
                    <form className='contact-form'>
                        <div className='form-group'>
                            <label htmlFor='contactName'>Just name</label>
                            <input type='email' className='form-control'
                                   id='contactName'
                                   placeholder='Johnny'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlInput1'>Email address</label>
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

                        <div className="form-group">
                            <button className='contact-form__send-btn'>
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
                </section>
                <div className='main-banner main-banner--01'>
                </div>
            </main>
        );
    }
}

export default contact;
