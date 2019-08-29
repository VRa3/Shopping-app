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

        const errorInformation = () => {
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
        };


        if (formIsGood === false) {
            return errorInformation();
        } else if (formIsGood === null || true) {
            return null;
        }
    }
}

export default FormChecker;