//action creator
export const selectProduct = product => {
    //return an action
    return {
        type: 'SELECT_PRODUCT',
        payload: product
    };
};

//action creator
export const addProduct = product => {
    //return an action
    return {
        type: 'ADD_PRODUCT',
        payload: product
    };
};