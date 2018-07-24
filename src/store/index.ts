import logger from "redux-logger";
import {createStore, applyMiddleware} from "redux";
import {IState, reducer} from "../reducers";

const store = createStore<IState, any, any, any>(reducer, applyMiddleware(logger))

export default store;