//Action creator
export const addProduct = product => {
    //returns an action of type...
    return {
        type: 'ADD_PRODUCT',
        payload: product
    };
};

//Action creator
export const removeProduct = product => {
    //returns an action of type...
    return {
        type: 'REMOVE_PRODUCT',
        payload: product
    };
};