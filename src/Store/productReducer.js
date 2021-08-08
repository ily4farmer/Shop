const defaultState = {
    product: []
}

const PRODUCT_ADD = "PRODUCT_ADD",
      PRODUCT_REMOVE = "PRODUCT_REMOVE"

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return {...state, product: action.payload};
        case PRODUCT_REMOVE:
            return {...state, product: action.payload};    
        default:
            return state;
    }
}

