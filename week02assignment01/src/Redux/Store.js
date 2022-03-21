import { createStore } from "redux"
import { combineReducers } from "redux"
import { productReducer } from "./Reducers"

const reducers = combineReducers({
    allProducts: productReducer
})

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store