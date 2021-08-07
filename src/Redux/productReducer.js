const defaultState = {
    product: []
}

const PRODUCT_ADD = "PRODUCT_ADD"

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return {...state, product: action.payload};  
        default:
            return state;
    }
}

