const defaultState = {
    product: [],
    isEmpty: false,
    sum: 0
}

const PRODUCT_ADD = "PRODUCT_ADD"
const sum = "sum"

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return {...state, product: action.payload};  
        case sum:
            return {...state, sum: action.payload};  
        default:
            return state;
    }
}

