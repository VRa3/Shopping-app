import React from "react";
import Checkmark from "./contact-form/checkmark";

class AddButton extends React.Component {
    render() {
        const {productsInBag} = this.props;
        const {name} = this.props.reference.props;
        if (productsInBag.find(product => product.props.name === name)) {
            return (
                <button
                    onClick={(event) => {
                            this.props.addProduct(this.props.reference);
                        }
                    }
                    className='category-item__button added'
                >
                    <Checkmark weight='bold' />
                </button>
            )
        } else {
            return (
                <button
                    onClick={(event) => {
                            this.props.addProduct(this.props.reference);
                        }
                    }
                    className='category-item__button'
                >
                    +
                </button>
            )
        }

    }
}

export default AddButton;
