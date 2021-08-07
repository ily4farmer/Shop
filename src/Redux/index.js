import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { chapterReudcer } from "./chapterReducer";
import { productReducer } from "./productReducer";

const reducer = combineReducers({
    chapter: chapterReudcer,
    product: productReducer
})

export const store = createStore(reducer, composeWithDevTools());