const defaultState = {
    basket: []
}

const ADD__BASKET = "ADD__BASKET",
      REMOVE__BASKET = "REMOVE__BASKET";


export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD__BASKET:
            return {...state, basket: action.payload}; 
        case REMOVE__BASKET:
            return {...state, basket: action.payload};
        default:
            return state;
    }
}    