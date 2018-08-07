import { createLogger } from "redux-logger"
import {createStore, applyMiddleware} from "redux"
import {IState, reducer} from "../reducers"

// create a redux store.
// createLogger will print on the browser console
const store = createStore<IState, any, any, any>(reducer, applyMiddleware(createLogger({collapsed:true})))

export default store;