//action creator
export const addProduct = product => {
    //return an action
    return {
        type: 'ADD_PRODUCT',
        payload: product
    };
};