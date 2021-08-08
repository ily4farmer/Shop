const defaultState = {
    basket: []
}

const addBasket = "addBasket"


export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case addBasket:
            return {...state, basket: action.payload}; 
        default:
            return state;
    }
}    