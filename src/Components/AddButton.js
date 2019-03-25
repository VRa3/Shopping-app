import React from "react";
import Checkmark from "./contact-form/checkmark";

class AddButton extends React.Component {
    state = {
        isAdded: false,
    };

    animateElement = (element, cb) => {
        element.classList.add('addedAnimation');
        setTimeout(() => {
            element.classList.add('added');
            cb();
        }, 1400);
    };

    checkElement = () => {
        const {productsInBag} = this.props;
        const {name} = this.props.reference.props;
        if (productsInBag.find(product => product.props.name === name)) {
            this.setState({isAdded: true});
        }
    };

    componentDidMount() {
        this.checkElement();
    }

    render() {
        return (
            <button
                onClick={(event) => {
                    this.props.addProduct(this.props.reference);
                    this.animateElement(event.target, this.checkElement);
                }
                }
                className={this.state.isAdded ? 'category-item__button added' : 'category-item__button'}
            >
                {this.state.isAdded ? <Checkmark weight='bold' /> : '+'}
            </button>
        )
    }
}

export default AddButton;
