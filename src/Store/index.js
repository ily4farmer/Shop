import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { basketReducer } from "./basketReducer";
import { chapterReudcer } from "./chapterReducer";
import { productReducer } from "./productReducer";

const reducer = combineReducers({
    chapter: chapterReudcer,
    product: productReducer,
    basket: basketReducer
})

export const store = createStore(reducer, composeWithDevTools());