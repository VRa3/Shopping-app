import React, { Component } from 'react';

class NameChecker extends Component {
    render() {
        if(this.props.correct) {
            return (
                <>
                    <span className='form-control__icon form-control__icon--correct'>+</span>
                </>
            )
        } else {
            return (
                <>
                    <span className='form-control__icon'>?</span>
                </>
            )
        }
    }
}

export default NameChecker;