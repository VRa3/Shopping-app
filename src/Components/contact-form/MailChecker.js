import React, { Component } from 'react';
import Checkmark from "./checkmark";
class MailChecker extends Component {
    render() {
        if(this.props.correct) {
            return (
                <>
                    <span className='form-control__icon form-control__icon--correct'>
                        <Checkmark/>
                    </span>
                </>
            )
        } else {
            return (
                <>
                    <span className='form-control__icon'>?</span>
                    <div className='form-control__pop-up'>
                        Your mail should contain '@' sign and be registered in '.com' or '.pl' domain
                    </div>
                </>
            )
        }
    }
}

export default MailChecker;