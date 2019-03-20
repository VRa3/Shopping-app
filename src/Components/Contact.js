import React, { Component } from 'react';
import ContactForm from './ContactForm';

class contact extends Component {
    render() {
        return (
            <main className='contact-page-wrapper'>
                <section className='contact-page-section'>
                    <h1>Need more informations?</h1>
                    <h2>We are ready to answer.</h2>
                    <ContactForm/>
                </section>
                <div className='main-banner main-banner--01'>
                </div>
            </main>
        );
    }
}

export default contact;
