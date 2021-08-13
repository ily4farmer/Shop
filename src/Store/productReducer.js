const defaultState = {
    product: [],
    isClear: false
}

const PRODUCT_ADD = "PRODUCT_ADD",
      PRODUCT_REMOVE = "PRODUCT_REMOVE",
      CLEAR__INPUT = "CLEAR__INPUT";

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return {...state, product: action.payload};
        case PRODUCT_REMOVE:
            return {...state, product: action.payload};    
        case CLEAR__INPUT:
            return {...state, isClear: action.payload};
        default:
            return state;
    }
}

