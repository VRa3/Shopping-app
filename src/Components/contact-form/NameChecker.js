import React, { Component } from 'react';
import Checkmark from "./checkmark";

class NameChecker extends Component {
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
                    <span className='form-control__icon'>
                        ?
                    </span>
                    <div className='form-control__pop-up'>
                        Name restriction is at least 3 characters
                    </div>
                </>
            )
        }
    }
}

export default NameChecker;