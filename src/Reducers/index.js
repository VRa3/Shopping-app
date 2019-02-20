import { combineReducers } from 'redux';
import flower from "../static/fashion/flower-o.jpg";
import bag from "../static/fashion/bag-o.jpg";
import shoes from "../static/fashion/shoes-o.jpg";
import pad from "../static/cool_stuff/pad.jpg";
import cup from "../static/cool_stuff/cup.jpg";
import glitter from "../static/cool_stuff/glitter.jpg";
import jewelry from "../static/luxury/jewelry.jpg";
import brilliant from "../static/luxury/brilliant.jpg";
import perfum from "../static/luxury/perfum.jpg";

const allProducts = () => {
    return {
        fashion: [
            {
                name: 'flower-o',
                img: flower,
                price: 409.99,
            },
            {
                name: 'bag-o',
                img: bag,
                price: 329.99,
            },
            {
                name: 'o-shoes',
                img: shoes,
                price: 279.99,
            }
        ],
        coolStuff: [
            {
                name: 'a-pad',
                img: pad,
                price: 139.99,
            },
            {
                name: 'a-cup',
                img: cup,
                price: 89.99,
            },
            {
                name: 'a-glitter',
                img: glitter,
                price: 109.99,
            }
        ],
        luxury: [
            {
                name: 'jewelry',
                img: jewelry,
                price: 1379.99,
            },
            {
                name: 'brilliant',
                img: brilliant,
                price: 8409.99,
            },
            {
                name: 'perfum',
                img: perfum,
                price: 699.99,
            }
        ]
    }
};

const handleProducts = (itemsInBag = [], action) => {
    if (action.type === 'ADD_PRODUCT') {
        return [...itemsInBag, action.payload];
    } else if (action.type === 'REMOVE_PRODUCT') {
        return itemsInBag.filter(product => product.props.name !== action.payload);
    }

    return itemsInBag;
};


export default combineReducers({
    allProducts: allProducts,
    productsInBag: handleProducts,
});