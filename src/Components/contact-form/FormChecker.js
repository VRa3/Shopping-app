import React from 'react';

class FormChecker extends React.Component {
    constructor(props) {
        super(props);

        this.ErrorSpan = React.createRef();
    }

    componentDidUpdate() {
        const ErrorSpan = this.ErrorSpan.current;

        if (ErrorSpan) {
            setTimeout(()=>{
                ErrorSpan.classList.add('slide-down')
            }, 100);
        }
    }

    render() {
        const {formIsGood} = this.props;

        if (formIsGood === false) {
            return (
                <>
                    <span ref={this.ErrorSpan} className='form-error'>
                    <h2>
                    But...
                    </h2>
                    &nbsp;you have to fill form correctly.
                    </span>
                </>
            )
        } else if (formIsGood === null) {
            return (
                <>
                </>
            )
        } else if (formIsGood === true) {
            return (
                <>
                    <span ref={this.ErrorSpan} className='form-error'>
                    <h2>
                    But...
                    </h2>
                        &nbsp;you have to fill form correctly.
                    </span>
                </>
            )
        }
    }
}

export default FormChecker;